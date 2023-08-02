<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Repository\PostRepository;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $post = new PostRepository;
        // return $post->postAndUser();

        //todos os posts de cada usuario
        // $user = User::limit(5)->with('posts')->get();

        //todos os likes do usuario
        // $likes = User::limit(5)->with('likes')->get();
        // // dump($user);
        // return response()->json($likes);

        $post = Post::with(['user', 'likes'])->get();
        return response()->json($post);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
