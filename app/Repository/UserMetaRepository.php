<?php

namespace App\Repository;

use App\Models\UserMetaData;

class UserMetaRepository {

    private $model;

    public function __construct(UserMetaData $model)
    {
        $this->model = $model;
    }

    

    public function getData(): UserMetaData
    {
        return $this->model;
    }

    public function active_desactive(): int
    {
        $this->model->active == 1 ? $this->model->active = 0 : $this->model->active = 1;
        $this->model->save();
        return $this->model->active;
        
    }

}