<?php 

declare(strict_types=1);

namespace Domains\Media\Enums;

use Domains\Shared\Traits\EnumToArray;

enum MediaTypeEnum : string
{
     use EnumToArray;

     case VIDEO = "Video";
     case IMAGE = "Image";
}