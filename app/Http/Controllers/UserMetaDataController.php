<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\UserMetaData;
use App\Http\Requests\StoreUserMetaDataRequest;
use App\Http\Requests\UpdateUserMetaDataRequest;

class UserMetaDataController extends Controller
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
    public function store(StoreUserMetaDataRequest $request)
    {
           // Retrieve the validated input data...
        try {
            dump($request->all());
            $birth = Carbon::parse($request['birth_date'])->format('Y-m-d');
            $request['birth_date'] = $birth;
            $request['id'] = 2;
            UserMetaData::updateOrCreate($request->all());

            return response()->json(['message' => 'Dados Inseridos']);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(UserMetaData $userMetaData)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = User::find($id);
        $metaData = $user->userMeta()->get();
        return Inertia::render('Profile/Metadata/Edit', [
            'user' => $metaData
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserMetaDataRequest $request, UserMetaData $userMetaData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserMetaData $userMetaData)
    {
        //
    }
}
