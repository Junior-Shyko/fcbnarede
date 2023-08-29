<?php

namespace App\Repository;

use App\Models\Heart;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class HeartRepository {

    /**
     * Incrementa o valor atual de heart em um determinado post
     *
     * @param Post $post
     * @return void
     */
    static public function addHeartPost($postId): void
    {
       
        $post = Post::find($postId);
        $post->heart += 1;
        $post->save();
    }

        /**
     * Incrementa o valor atual de heart em um determinado post
     *
     * @param Post $post
     * @return void
     */
    static public function removeHeartPost($postId): void
    {
        $post = Post::find($postId);
        $post->heart -= 1;
        $post->save();
    }


}