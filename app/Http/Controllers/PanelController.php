<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ForgotRequest;
use App\Services\UserService;

class PanelController extends Controller
{
    private $user;
    public function __construct(UserService $user)
    {
        $this->user = $user;
    }
    public function user(Request $request)
    {
        return $request->user();
    }
    public function forgot(ForgotRequest $request)
    {
        return $this->user->forgot($request);
    }
}
