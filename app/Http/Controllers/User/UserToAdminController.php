<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserToAdminController extends Controller
{
    public function __invoke(Request $request)
    {
        return redirect()->to('admin/dashboard');
    }
}
