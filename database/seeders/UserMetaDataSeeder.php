<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserMetaDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create('pt_BR');
        for ($i = 0; $i < 30; $i++) {
            DB::table('user_meta_data')->insert([
                'nick' => $faker->firstName('Masculino'|'Feminino'),
                'cpf' => $faker->cpf(),
                'address' => $faker->streetName(),
                'number' => $faker->buildingNumber(),
                'district' => $faker->streetSuffix(),
                'city' => $faker->city(),
                'state' => $faker->state(),
                'user_id' => $faker->numberBetween(1, 30),
                'birth_date' => $faker->date(),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime(),
            ]);
        }
    }
}
