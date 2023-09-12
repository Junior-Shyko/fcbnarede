<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\UserMetaData;
use App\Http\Requests\StoreUserMetaDataRequest;
use App\Repository\UserMetaRepository;

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
          
            $birth = Carbon::parse($request['birth_date'])->format('Y-m-d');
            $request['birth_date'] = $birth;
            $request['id'] = 2;
            UserMetaData::updateOrCreate($request->all());

            return response()->json(['message' => 'Dados Inseridos']);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
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
        $metaData = $user->userMeta();
        return Inertia::render('Profile/Metadata/Edit', [
            'metadata' => $metaData->get()[0],
            'parent' => $metaData->getParent()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreUserMetaDataRequest $request, $id)
    {
       try {
        $userMeta = UserMetaData::where('user_id', $id)->first();
        $birth = Carbon::parse($request['birth_date'])->format('Y-m-d');
        $request['birth_date'] = $birth;
        
        $userMeta->update($request->all());
       } catch (\Exception $th) {
        return response()->json(['error' => $th->getMessage()]);
       }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserMetaData $userMetaData)
    {
        //
    }

    public function desactive($id)
    {
        try {
            $user = UserMetaData::where('user_id', $id)->first();
            $meta = new UserMetaRepository($user);
            $meta->active_desactive();
            return response()->json(['message' => 'success'] , 200);
        } catch (\Exception $th) {
            return response()->json(['error' => 'Um erro inesperado aconteceu '.$th->getMessage()]);
        }
    }
}
