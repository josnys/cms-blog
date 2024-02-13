<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DownloadFileController extends Controller
{
   public function __invoke(Request $request, $file)
    {
        if(Storage::exists("downloads/$file")) {
            return Storage::download("downloads/$file");
        }

        return redirect()->back()->with('error', 'File not Found.');
    }
}
