<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Domains\Shared\Services\SiteService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UrlResolverController extends Controller
{
    public function __invoke(Request $request, $slug = null) : Response | RedirectResponse
    {
        if(is_null($slug) || $slug === "home"){
            return redirect()->route('home.page');
        }

        $page = SiteService::resolveUrl($slug);

        return Inertia::render($page['type'], ['info' => [
            'page' => $page['data'],
            'cta' => ($request->path() === "/") ? [
                'app' => ['android' => 'https://play.google.com/store/apps/details?id=com.brainx.enpak', 'ios' => 'https://apps.apple.com/us/app/enpak/id6456176449', 'show_site_details' => true, 'extra' => 'Is your local publication on Enpak app ?']
            ] : null,
        ]]);
    }
}
