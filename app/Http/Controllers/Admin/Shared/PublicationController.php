<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Shared\PublicationRequest;
use Domains\Shared\Actions\CreatePublicationAction;
use Domains\Shared\Actions\UpdatePublicationAction;
use Domains\Shared\Models\Publication;
use Domains\Shared\Services\PublicationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PublicationController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Publication'
    ){}

    public function index(Request $request) : Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Name', 'Website', 'City', 'Country', 'Status', ''],
            'publications' => (new PublicationService())->getAllPaginate([]),
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-blog-category'),
                'edit' => $request->user()->allowedTo('update-blog-category')
            ]
        ]]);
    }

    public function store(PublicationRequest $request, CreatePublicationAction $action) : RedirectResponse
    {
        $publication = $action->handle($request->payload()->toArray());

        return redirect()->back()->with('success', 'Publication Added Successfully.');
    }

    public function update(PublicationRequest $request, Publication $publication, UpdatePublicationAction $action)
    {
        $publication = $action->handle($request->payload()->toArray(), $publication);

        return redirect()->route('admin.publication.index')->with('success', 'Publication Updated successfully.');
    }
}
