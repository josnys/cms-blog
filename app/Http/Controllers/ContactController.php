<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;

class ContactController extends Controller
{
   public function __invoke(ContactRequest $request)
    {
        // Process message and send to info@enpaksocial.com
    }
}
