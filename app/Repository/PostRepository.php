<?php

namespace App\Repository;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class PostRepository {

    public function postAndUser(): Collection 
    {
        return Post::join('users', 'posts.user_id', '=', 'users.id')
        ->select('users.id as iduser','users.name', 'users.email','users.profile_photo_path' ,
        'posts.*')
        ->get();
    }

}