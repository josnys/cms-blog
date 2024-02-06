<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
   public function __invoke(ContactRequest $request)
    {
        $input = $request->validated();

        Mail::to('info@enpaksocial.com')->send(new ContactMail($input));

        return redirect()->back()->with('success', 'Thank you for contacting us ! Your message has been recieved and you should get a reply soon.');
    }
}
