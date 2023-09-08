<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserMetaData extends Model
{
    use HasFactory;

    protected $fillable = [
        'cpf',
        'nick',
        'cep',
        'address',
        'number',
        'complement',
        'district',
        'state',
        'sex',
        'marital_status',
        'birth_date',
        'user_id',
        'city',
        'active'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
