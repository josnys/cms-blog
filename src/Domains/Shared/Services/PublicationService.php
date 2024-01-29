<?php 

declare(strict_types=1);

namespace Domains\Shared\Services;

use App\Http\Resources\Domains\Shared\PublicationResource;
use Domains\Shared\Models\Publication;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PublicationService
{
     public function getAllPaginate(array $filters) : AnonymousResourceCollection
     {
          return PublicationResource::collection(Publication::paginate(50));
     }
}