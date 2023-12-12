<?php 

declare(strict_types=1);

namespace Domains\Media\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class ManipulateImgeAction
{
     public function __construct(
          protected $file = null,
          protected string $path = '',
          protected string $folder = '',
          protected string $thumb_path = '',
          protected string $name = '',
          protected string $mime_type = '',
          protected string $extension = ''
     ){}

     public function storeImage(UploadedFile $file, string $folder) : self
     {
          $this->file = $file;
          $this->path = Storage::putFile($folder, $file, 'public');
          $this->folder = $folder;
          $this->name = $this->getImageName();
          $this->thumb_path = "$folder/thumbnails/";
          $this->mime_type = $file->getMimeType();
          $this->extension = $file->getExtension();

          return $this;
     }

     public function getData() : array
     {
          return [
               'name' => $this->name,
               'mime_type' => Str::replaceLast('/', '', "{$this->mime_type}/{$this->extension}") 
          ];
     }

     public function createThumbnail() : self
     {
          $this->createThumbnailFolder();
          $thumb = Image::make($this->file);
          $thumb->resize(300, 300, function ($constraint) {
               $constraint->aspectRatio();
          })->save(Storage::path($this->thumb_path . $this->name), 70);

          return $this;
     }

     public function storeImageAndCreateThumbnail(UploadedFile $file, string $folder) : self
     {
          $this->storeImage($file, $folder);
          $this->createThumbnail();
          return $this;
     }

     public function deleteOldFile(string $file) : self
     {
          Storage::delete("{$this->folder}/$file");
          Storage::delete("{$this->thumb_path}/$file");
          return $this;
     }

     public function getImageName() : string
     {
          $link_array = explode('/', $this->path);
          $name = $link_array[count($link_array) - 1];

          return $name;
     }

     public function createThumbnailFolder() : void
     {
          if(!Storage::directoryExists($this->thumb_path)){
               Storage::makeDirectory($this->thumb_path);
          }
     }
}