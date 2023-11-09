<?php

namespace App\Http\Requests;

use Domains\User\DTO\UserProfileData;
use Domains\User\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'sometimes|nullable|string|max:255',
            'username' => ['required','string','max:50','alpha_dash',Rule::unique(User::class)->ignore($this->user()->id)],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'dob' => 'sometimes|nullable|date',
            'bio' => 'sometimes|nullable|string',
        ];
    }

    public function payload(): UserProfileData
    {
        return UserProfileData::fromRequest(
            data: [
                'firstname' => $this->string('firstname')->toString(),
                'lastname' => $this->string('lastname')->toString(),
                'username' => $this->string('username')->toString(),
                'dob' => $this->string('dob')->toDate(),
                'bio' => $this->string('bio')->toString(),
                'email' => $this->string('email')->toString(),
            ]
        );
    }
}
