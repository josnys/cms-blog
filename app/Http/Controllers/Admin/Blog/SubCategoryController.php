<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\SubCategoryRequest;
use Domains\Blog\Actions\CreateSubcategoryAction;
use Domains\Blog\Actions\UpdateSubcategoryAction;
use Domains\Blog\Models\BlogCategory;
use Domains\Blog\Models\BlogSubCategory;
use Domains\Blog\Services\SubCategoryService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SubCategoryController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Blog/Category/Subs'
    ){}

    public function index(Request $request, BlogCategory $category) : Response
    {
        $subcategories = (new SubCategoryService())->getAllPaginate($category->id);

        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Name', 'Slug', 'Show In Menu', 'Status', ''],
            'category' => ['id' => $category->id, 'slug' => $category->slug, 'name' => $category->name],
            'subcategories' => $subcategories,
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-blog-sub-category'),
                'edit' => $request->user()->allowedTo('update-blog-sub-category'),
            ]
        ]]);
    }

    public function store(SubCategoryRequest $request, BlogCategory $category) : RedirectResponse
    {
        $input = $request->paylooad();

        $subcategory = (new CreateSubcategoryAction())->handle($input->toArray());

        return redirect()->route('admin.blog.category.subcategory.index', $category->slug)->with('success', 'Sub-Category Saved Successfully.');
    }

    public function update(SubCategoryRequest $request, BlogCategory $category, BlogSubCategory $subcategory) : RedirectResponse
    {
        $input = $request->paylooad();

        $subcategory = (new UpdateSubcategoryAction())->handle($input->toArray(), $subcategory);

        return redirect()->route('admin.blog.category.subcategory.index', $category->slug)->with('success', 'Sub-Category Saved Successfully.');
    }
}
