<?php

declare(strict_types=1);

namespace Domains\Blog\Enums;

use Domains\Shared\Traits\EnumToArray;

enum PageDetailTypeEnum : string
{
     use EnumToArray;

     case CONTENT = "Content";
     case GALLERY = "Gallery";
}