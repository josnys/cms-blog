<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Media;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Media\GalleryRequest;
use Domains\Media\Actions\CreateGalleryAction;
use Domains\Media\Actions\UpdateGalleryAction;
use Domains\Media\Models\Gallery;
use Domains\Media\Services\GalleryService;
use Domains\Media\Services\MediaService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Media/Gallery'
    ){}

    public function index(Request $request) : Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'galleries' => (new GalleryService())->getAllPaginate(),
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-gallery'),
                'edit' => $request->user()->allowedTo('update-gallery')
            ]
        ]]);
    }

    public function create() : Response
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => [
            'gallery' => [],
            'medias' => (new MediaService())->getAllActive()
        ]]);
    }

    public function store(GalleryRequest $request, CreateGalleryAction $action) : RedirectResponse
    {
        $input = $request->payload()->toArray();

        $gallery = $action->handle($input);

        return redirect()->route('admin.media.gallery.index')->with('success', 'Gallery Saved Successfully.');
    }

    public function edit(Gallery $gallery)
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => [
            'gallery' => (new GalleryService())->getBySlug($gallery->slug),
            'medias' => (new MediaService())->getAllActive()
        ]]);
    }

    public function update(GalleryRequest $request, Gallery $gallery, UpdateGalleryAction $action) : RedirectResponse
    {
        $input = $request->payload()->toArray();

        $gallery = $action->handle($gallery, $input);

        return redirect()->route('admin.media.gallery.index')->with('success', 'Gallery Updated Successfully.');
    }
}
