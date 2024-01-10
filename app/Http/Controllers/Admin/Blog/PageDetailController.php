<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\PageDetailRequest;
use Domains\Blog\Actions\CreatePageDetailAction;
use Domains\Blog\Enums\PageDetailTypeEnum;
use Domains\Blog\Models\Page;
use Domains\Blog\Services\ContentService;
use Domains\Blog\Services\PageService;
use Domains\Media\Services\GalleryService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageDetailController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Page/Detail'
    ){}

    public function create(Page $page) : Response
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => [
            'page' => (new PageService())->getBySlugWithAssets($page->slug),
            'contents' => (new ContentService())->getAllActiveToCompose(),
            'galleries' => (new GalleryService())->getAllActiveToCompose(),
            'types' => PageDetailTypeEnum::values(),
        ]]);
    }

    public function store(PageDetailRequest $request, Page $page, CreatePageDetailAction $action) : RedirectResponse
    {
        $input = $request->validated();
        
        $detail = $action->handle($input['blocks'], $page);

        return redirect()->route('admin.blog.page.index')->with('success', 'Page Saved Successfully');
    }

    public function show() : Response
    {
        return Inertia::render();
    }
}
