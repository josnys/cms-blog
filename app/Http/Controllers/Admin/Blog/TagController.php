<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\TagRequest;
use Domains\Blog\Actions\CreateTagAction;
use Domains\Blog\Actions\UpdateTagAction;
use Domains\Blog\Models\BlogTag;
use Domains\Blog\Services\TagService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TagController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Tag'
    ){}

    public function index(Request $request) : Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'tags' => (new TagService())->getAllPaginate(),
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-blog-tag'),
                'edit' => $request->user()->allowedTo('update-blog-tag')
            ]
        ]]);
    }

    public function store(TagRequest $request) : RedirectResponse
    {
        $input = $request->payload();

        $tag = (new CreateTagAction())->handle($input->toArray());

        return redirect()->route('admin.blog.tag.index')->with('success', 'Tag Successfully Saved.');
    }

    public function update(TagRequest $request, BlogTag $tag) : RedirectResponse
    {
        $input = $request->payload();

        $tag = (new UpdateTagAction())->handle($input->toArray(), $tag);

        return redirect()->route('admin.blog.tag.index')->with('success', 'Tag Successfully Saved.');
    }
}
