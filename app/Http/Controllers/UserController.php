<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\UserRepository;

class UserController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = new UserRepository;
        return response()->json( $users->allAndMeta() );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserMetaData $userMetaData)
    {
        //
    }

    public function listUser()
    {
        $users = new UserRepository;
        return Inertia::render('User/List', [
            'users' => $users->getUser()
        ]);
    }


}
