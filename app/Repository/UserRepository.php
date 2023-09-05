<?php

namespace App\Repository;

use App\Models\User;

class UserRepository {

    public function allAndMeta()
    {
        $users = User::join('user_meta_data', 'users.id', '=', 'user_meta_data.user_id')
        ->select('users.*', 'user_meta_data.*')
        ->get();
        return $users; 
    }

    public function getUser()
    {
        return User::all();
    }
}