<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\CategoryRequest;
use Domains\Blog\Actions\CreateCategoryAction;
use Domains\Blog\Actions\UpdateCategoryAction;
use Domains\Blog\Models\BlogCategory;
use Domains\Blog\Services\CategoryService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Category'
    ){}

    public function index(Request $request) : Response
    {
        $categories = (new CategoryService())->getAllPaginate();

        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Name', 'slug', 'Show In Main Menu', 'Status', ''],
            'categories' => $categories,
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-blog-category'),
                'edit' => $request->user()->allowedTo('update-blog-category'),
                'subs' => $request->user()->allowedTo('read-blog-sub-category')
            ]
        ]]);
    }

    public function store(CategoryRequest $request) : RedirectResponse
    {
        $input = $request->paylooad();

        $category = (new CreateCategoryAction())->handle($input->toArray());

        return redirect()->route('admin.blog.category.index')->with('New Category Successfully Saved.');
    }

    public function update(CategoryRequest $request, BlogCategory $category) : RedirectResponse
    {
        $input = $request->paylooad();

        $category = (new UpdateCategoryAction())->handle($input->toArray(), $category);
        
        return redirect()->route('admin.blog.category.index')->with('Category Successfully Updated.');
    }
}
