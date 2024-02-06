<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterSubscriptionRequest;
use Domains\Shared\Models\NewsletterSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewsletterSubscriptionController extends Controller
{
    public function subscribe(NewsletterSubscriptionRequest $request) : RedirectResponse
    {
        $input = $request->validated();

        $sub = new NewsletterSubscription();
        $sub->email = $input['email'];
        $sub->save();

        return redirect()->back()->with('success', 'Subscription Successful.');
    }

    public function unsubscribe(NewsletterSubscriptionRequest $request) : RedirectResponse
    {
        $input = $request->validated();

        $sub = NewsletterSubscription::withTrashed()->where('email', $input['email'])->first();
        if($sub){
            $sub->delete();
        }

        return redirect()->back()->with('success', 'Unsubscribe Successful.');
    }
}
