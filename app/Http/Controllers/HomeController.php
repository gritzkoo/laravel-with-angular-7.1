<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    const MY_SERVICE = \App\Services\UserService::class;
    public function index()
    {
        return view('index');
    }
    public function test(Request $request)
    {
        return $this->call(
            self::MY_SERVICE,
            'teste',
            $request
        );
        /* debug($request->all());
        return [
            ['id'=>1,'name'=>'User 1'],
            ['id'=>2,'name'=>'User 2'],
            ['id'=>3,'name'=>'User 3'],
            ['id'=>4,'name'=>'User 4'],
        ]; */
    }
}
