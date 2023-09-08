<?php

namespace App\Http\Controllers;

use App\Contracts\UserRepoInterface;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repository\UserRepository;

class UserController extends Controller
{
    protected $userRepo;

    public function __construct(UserRepoInterface $repo)
    {
        $this->userRepo = $repo;
    }

     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $users = new UserRepository;
        // return response()->json( $users->allAndMeta() );
        $users = $this->userRepo->allAndMeta();

        return $users;
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

    public function desactive($id)
    {
        $user = $this->userRepo->find($id);
        return response()->json($user);
    }

}
