<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePhoneRequest;
use App\Http\Requests\UpdatePhoneRequest;
use App\Models\Phone;

class PhoneController extends Controller
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
    public function store(StorePhoneRequest $request)
    {
       try {
        Phone::create($request->all());
        return response()->json(['message' => 'Cadastrado']);
       } catch (\Throwable $th) {
        throw $th;
       }
    }

    /**
     * Display the specified resource.
     */
    public function show($idUser)
    {
        try {
            $phone = Phone::where('user_id', $idUser)->get();
            return response()->json($phone);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ocorreu um erro inesperado.'], 402);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Phone $phone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePhoneRequest $request)
    {
       try {
        $phone = Phone::find($request->id);
        $phone->update(['number' => $request->number]);
        return response()->json(['message' => 'Alterado com sucesso'] , 200);
       } catch (\Throwable $th) {
        return response()->json(['error' => 'Ocorreu um erro inesperado'] , 500);
       }
      
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $phone = Phone::find($id);
            $phone->delete();
            return response()->json(['message' => 'success'],200);
        } catch (\Throwable $th) {
            
            return response()->json(['message' => 'error'], 402);
        }
    }
}
