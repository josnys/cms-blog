<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminToUserController extends Controller
{
    public function __invoke(Request $request)
    {
        return redirect()->route('user.dashboard');
    }
}
