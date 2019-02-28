<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\User;


class UserService extends BaseService
{
    public function teste(Request $request)
    {
        debug($request->all());
        return [
            ['id' => 1, 'name' => 'User 1'],
            ['id' => 2, 'name' => 'User 2'],
            ['id' => 3, 'name' => 'User 3'],
            ['id' => 4, 'name' => 'User 4'],
        ];
    }

    public function RegisterNewUser()
    {
        $model = new User;
        $model->name = 'Gritzko Daniel Kleiner';
        $model->password = bcrypt('123456');
        $model->email = 'gritzkoo@gmail.com';
        $model->save();
    }

    public function changePassword()
    {

    }
}
