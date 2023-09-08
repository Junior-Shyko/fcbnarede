<?php 


namespace App\Contracts;

interface UserRepoInterface {

    public function getAll();

    public function find($id);

    public function create($data);
}