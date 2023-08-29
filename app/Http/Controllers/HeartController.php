<?php

namespace App\Http\Controllers;

use App\Models\Heart;
use App\Repository\HeartRepository;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\StoreHeartRequest;
use App\Http\Requests\UpdateHeartRequest;

class HeartController extends Controller
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
            $isLikePost = Heart::where([
                ['user_id', $request['user_id'] ],
                ['post_id' , $request['post_id'] ]
            ])->get();

            if(count($isLikePost) == 0)
            {   //Cria um relação de usuario com post
                Heart::create($request->all());
                //Altera o valor de like do post
                HeartRepository::addHeartPost($request['post_id']);
                return response()->json(['message' => 'success'], 200);
            }else{
                HeartRepository::removeHeartPost($request['post_id']);
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
    public function show(Heart $heart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Heart $heart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHeartRequest $request, Heart $heart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Heart $heart)
    {
        //
    }
}
