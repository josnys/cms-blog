<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Domains\Media\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MediaController extends Controller
{
    public function index(Request $request, $path)
    {
        $extensions = ['png', 'jpeg', 'jpg'];
        if(!in_array(explode('.', $path)[1], $extensions)){
            abort(404);
        }

        $media = Media::where('url', explode('/', $path)[count(explode('/', $path)) - 1])->first();

        if(!$media){
            abort(404);
        }

        if($media->is_external) {
            return response($media->url);
        }

        $path = Str::replace('files/', '', $request->path());

        return response(Storage::get($path))->header('Content-Type', Str::replaceEnd('/', '', $media->mime_type));
    }

    public function resource(Request $request, $path)
    {
        $extensions = ['png', 'jpeg', 'jpg'];
        if (!in_array(explode('.', $path)[1], $extensions)) {
            abort(404);
        }

        $mime = "image/". explode('.', $path)[1];
        
        $path = Str::replace('files/medias/', '', $request->path());

        return response(Storage::get($path))->header('Content-Type',  $mime);
    }
}
