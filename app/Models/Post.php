<?php

namespace App\Models;

use App\Models\Heart;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function hearts()
    {
        return $this->hasMany(Heart::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
