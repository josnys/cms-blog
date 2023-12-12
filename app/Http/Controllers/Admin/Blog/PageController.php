<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\PageRequest;
use Domains\Blog\Actions\CreatePageAction;
use Domains\Blog\Actions\UpdatePageAction;
use Domains\Blog\Models\Page;
use Domains\Blog\Services\PageService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Page'
    ){}

    public function index(Request $request): Response
    {
        try {
            $pages = (new PageService())->getAllPaginate();

            return Inertia::render("{$this->base_path}/Index", ['info' => [
                'header' => ['Name', 'Slug', 'Show in Main Menu', 'Access by ID', 'Status', ''],
                'pages' => $pages,
                'authorize_to' => [
                    'create' => $request->user()->allowedTo('create-page'),
                    'edit' => $request->user()->allowedTo('update-page'),
                ]
            ]]);
        } catch (\Exception $e) {
              info($e);
        }
    }

    public function store(PageRequest $request) : RedirectResponse
    {
        $input = $request->payload();

        $page = (new CreatePageAction())->handle($input->toArray());

        return redirect()->route('admin.blog.page.index')->with('success', 'New Page Created Successfully.');
    }

    public function update(PageRequest $request, Page $page) : RedirectResponse
    {
        $input = $request->payload();
        
        $page = (new UpdatePageAction())->handle($input->toArray(), $page);

        return redirect()->route('admin.blog.page.index')->with('success', 'Page Updated Successfully.');
    }
}
