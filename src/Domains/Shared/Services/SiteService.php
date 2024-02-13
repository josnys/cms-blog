<?php 

declare(strict_types=1);

namespace Domains\Shared\Services;

use App\Http\Resources\Domains\Blog\ContentResource;
use Domains\Blog\Models\BlogCategory;
use Domains\Blog\Models\Content;
use Domains\Blog\Services\PageService;
use Domains\Shared\Models\Publication;
use Illuminate\Support\Facades\DB;

class SiteService
{
     public function getMainMenu() : array
     {
          $pages = DB::table('pages')->select([
               DB::raw('"page" as `type`'),
               DB::raw('name AS `caption`'),
               DB::raw('slug AS `url`'),
               DB::raw('access_by_id AS `is_id`')
          ])->where(['show_main_menu' => true, 'is_active' => true]);

          $categories = DB::table('blog_categories')->select([
               DB::raw('"category" as `type`'),
               DB::raw('name AS `caption`'),
               DB::raw('slug AS `url`'),
               DB::raw('"0" AS `is_id`')
          ])->where(['show_main_menu' => true, 'is_active' => true]);

          return $pages->unionAll($categories)->get()->map(function($menu){
               return [
                    'type' => $menu->type,
                    'caption' => $menu->caption,
                    'url' => ($menu->url == 'home') ? '/' : $menu->url,
                    'is_id' => (bool)$menu->is_id
               ];
          })->toArray();
     }

     public static function resolveUrl(string $slug = null) : array
     {
          if(is_null($slug)){
               $slug = "home";
          }

          $page = (new PageService())->getBySlugWithAssetsFrontEnd($slug, true);

          if($page) {
               return [
                    'type' => 'Single',
                    'data' => $page,
                    'map' => Publication::active()->get()->map(function($pub){
                         $gps = !empty($pub->gps_location) ? explode(', ', $pub->gps_location) : null;
                         return [
                              'name' => $pub->name,
                              'city' => $pub->city,
                              'state' => $pub->state,
                              'location' => $gps ? [
                                   'lat' => $gps[0],
                                   'lon' => $gps[1],
                                   'marker' => "https://static-00.iconduck.com/assets.00/map-marker-icon-342x512-gd1hf1rz.png"
                              ] : []
                         ];
                    })->toArray()
               ];
          }

          $category = BlogCategory::where('slug', $slug)->first();

          if(!$category) {
               $content = Content::with(['user.person', 'cover'])->active()->where('slug', $slug)->first();
               return [
                    'type' => 'Content',
                    'data' => ($content) ? ContentResource::make($content) : null
               ];
          }

          $contents = Content::with(['user.person', 'cover'])->active()->where('blog_category_id', $category->id)->get();

          return [
               'type' => 'List',
               'data' => ContentResource::collection($contents)
          ];
     }

     public static function getMascot() : string
     {
          return route('file.media.full', 'ElefantMascot.png');
     }
}