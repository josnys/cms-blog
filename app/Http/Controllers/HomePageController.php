<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Domains\Shared\Services\SiteService;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $page = SiteService::resolveUrl();
        return Inertia::render($page['type'], ['info' => [
            'page' => $page['data'],
        ]]);
    }
}
