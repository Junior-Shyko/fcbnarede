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

    /**
     * Incrementa o valor atual de like em um determinado post
     *
     * @param Post $post
     * @return void
     */
    static public function addLikePost($postId): void
    {
        $post = Post::find($postId);
        $post->like += 1;
        $post->save();
    }

        /**
     * Incrementa o valor atual de like em um determinado post
     *
     * @param Post $post
     * @return void
     */
    static public function removeLikePost($postId): void
    {
        $post = Post::find($postId);
        $post->like -= 1;
        $post->save();
    }
}