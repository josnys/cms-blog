<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Domains\Media\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MediaController extends Controller
{
   public function __invoke(Request $request, $path)
    {
        $extensions = ['png', 'jpeg', 'jpg'];
        if(!in_array(explode('.', $path)[1], $extensions)){
            abort(404);
        }

        $media = Media::where('url', explode('/', $path)[count(explode('/', $path)) - 1])->first();

        if(!$media){
            abort(404);
        }

        if($media->is_external) {
            return response($media->url);
        }

        $path = Str::replace("http://webapp.local/files/", '', $request->url());

        return response(Storage::get($path))->header('Content-Type', $media->mime_type);
    }
}
