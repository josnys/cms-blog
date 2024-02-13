<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Domains\Shared\Services\SiteService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $page = SiteService::resolveUrl('home');
        
        return Inertia::render($page['type'], ['info' => [
            'page' => $page['data'],
            'cta' => ($request->path() === "/") ? [
                'app' => ['android' => 'https://play.google.com/store/apps/details?id=com.brainx.enpak', 'ios' => 'https://apps.apple.com/us/app/enpak/id6456176449', 'show_site_details' => true, 'extra' => 'Is your local publication on Enpak app ?'],
                'map' => $page['map']
            ] : null,
        ]]);
    }
}
