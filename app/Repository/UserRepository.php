<?php

namespace App\Repository;

use App\Contracts\UserRepoInterface;
use App\Models\User;

class UserRepository implements  UserRepoInterface {

    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function allAndMeta()
    {
        $users = User::join('user_meta_data', 'users.id', '=', 'user_meta_data.user_id')
        ->select('users.*', 'user_meta_data.*')
        ->where('active', 1)
        ->orderBy('users.id', 'desc')
        ->get();
        return $users; 
    }

    public function getUser()
    {
        return User::where('active', 1);
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function find($id){
        // return User::find($id)->where('active', 1)->first();

        $users = User::join('user_meta_data', 'users.id', '=', 'user_meta_data.user_id')
        ->select('users.*', 'user_meta_data.*')
        ->where('active', 1)
        ->where('users.id', '=', $id)
        ->get();
        return $users; 
    }

    public function create($data)
    {

    }

    public function updateMetaData($id, $data)
    {
      $user = $this->model->where('user_id', $id)->first();
      dump($user);

    }


}