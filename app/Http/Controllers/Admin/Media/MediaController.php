<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Media;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Media\MediaRequest;
use App\Http\Requests\Admin\Media\UpdateMediaRequest;
use Domains\Media\Actions\CreateMediaAction;
use Domains\Media\Actions\ManipulateImgeAction;
use Domains\Media\Actions\UpdateMediaAction;
use Domains\Media\Enums\MediaTypeEnum;
use Domains\Media\Services\MediaService;
use Domains\Media\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Media'
    ){}

    public function index(Request $request) : Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'medias' => (new MediaService())->getAllPaginate(),
            'types' => MediaTypeEnum::cases(),
            'authorize_to' => [
                'create' => $request->user()->allowedTo('create-media'),
                'edit' => $request->user()->allowedTo('update-media'),
                'gallery' => $request->user()->allowedTo('read-gallery'),
            ]
        ]]);
    }

    public function store(MediaRequest $request) : RedirectResponse
    {
        $input = $request->payload()->toArray();
        $input['mime_type'] = "file/{$input['type']}";

        if(isset($input['file'])){
            $file = (new ManipulateImgeAction())
                ->storeImageAndCreateThumbnail($input['file'], 'medias')
                ->getData();

            $input['url'] = $file['name'];
            $input['mime_type'] = $file['mime_type'];
        }

        $media = (new CreateMediaAction())->handle($input);

        return redirect()->route('admin.media.index')->with('success', 'Media Uploaded Successfully.');
    }

    public function update(UpdateMediaRequest $request, Media $media) : RedirectResponse
    {
        $input = $request->payload()->toArray();
        $input['mime_type'] = $media->mime_type;

        if (isset($input['file'])) {
            $file = (new ManipulateImgeAction())
                ->storeImageAndCreateThumbnail($input['file'], 'medias')
                ->deleteOldFile($media->url)
                ->getData();
            
            $input['url'] = $file['name'];
            $input['mime_type'] = $file['mime_type'];
        }

        $data = (new UpdateMediaAction())->handle($input, $media);
        
        return redirect()->route('admin.media.index')->with('success', 'Media Updated Successfully.');
    }
}
