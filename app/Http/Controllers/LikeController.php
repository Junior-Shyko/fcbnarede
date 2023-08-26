<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use App\Repository\PostRepository;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreLikeRequest $request)
    {
        try {
            //VERIFICAÇÃO SE JA TEM REGISTRO NO BANCO
            $isLikePost = Like::where([
                ['user_id', $request['user_id'] ],
                ['post_id' , $request['post_id'] ]
            ])->get();

            if(count($isLikePost) == 0)
            {   //Cria um relação de usuario com post
                Like::create($request->all());
                //Altera o valor de like do post
                PostRepository::addLikePost($request['post_id']);
                return response()->json(['message' => 'success'], 200);
            }else{
                PostRepository::removeLikePost($request['post_id']);
                $isLikePost[0]->delete();
                return response()->json(['message' => 'success'], 202);
            }   
            // return response()->json(['error' => 'Já existe um like seu para esse post: ' ], 202);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocorreu um erro inesperado: '.$e->getMessage() ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($idPost)
    {
        // $post = Post::find($idPost)->likes;
       
        // $user = User::limit(5)->with('posts')->get();
        // dump($user);
        $like = Like::where('post_id', $idPost);
        return response()->json($like->with('user')->get());

    //    dump($post->user()->get());
    //     // $post->with('likes');
    //     dump($post->with('likes')->get());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Like $like)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLikeRequest $request, Like $like)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StoreLikeRequest $request)
    {
        try {
            $unLike = Like::where([
                ['user_id' , '=', $request['user_id'] ],
                ['post_id' , '=', $request['post_id'] ]
            ]);
            $unLike->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocorreu um erro inesperado: ' . $e->getMessage()], 400);
        }
    }

    public function myLike($idPost)
    {
        $userId = 31;
        $post = PostRepository::infoPost($userId, $idPost);
        return $post;
    }
}
