<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\ContentRequest;
use App\Http\Resources\Domains\Blog\ContentResource;
use Domains\Blog\Actions\CreateContentAction;
use Domains\Blog\Actions\UpdateContentAction;
use Domains\Blog\Models\Content;
use Domains\Blog\Services\ContentService;
use Domains\Shared\Services\AssetsService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContentController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Content'
    ){}

    public function index(Request $request) : Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'contents' => (new ContentService())->getAllPaginate(),
            'assets' => (new AssetsService())->getContentCreationAssets(),
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-blog-content'),
                'edit' => $request->user()->allowedTo('update-blog-content'),
            ]
        ]]);
    }

    public function store(ContentRequest $request) : RedirectResponse
    {
        $input = $request->payload()->toArray();

        $content = (new CreateContentAction())->handle($input);

        return redirect()->route('admin.blog.content.index')->with('success', 'Content Saved Successfully.');
    }

    public function update(ContentRequest $request, Content $content) : RedirectResponse
    {
        $input = $request->payload()->toArray();
        
        $content = (new UpdateContentAction())->handle($input, $content);

        return redirect()->route('admin.blog.content.index')->with('success', 'Content Saved Successfully.');
    }
}
