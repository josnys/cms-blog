<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Domains\Shared\Models\NewsletterSubscription;
use Illuminate\Foundation\Http\FormRequest;

class NewsletterSubscriptionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|string|email|max:255|unique:' . NewsletterSubscription::class,
        ];
    }

    public function messages() : array
    {
        return [
            'email.unique' => 'This email address is already subscribed.'
        ];
    }
}
