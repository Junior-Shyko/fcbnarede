<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHeartRequest;
use App\Http\Requests\UpdateHeartRequest;
use App\Models\Heart;

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
    public function store(StoreHeartRequest $request)
    {
        //
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
