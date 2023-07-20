<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        for ($i = 0; $i < 30; $i++) {
            DB::table('users')->insert([
                'name' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make('12345678'),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime(),
            ]);
        }
    }
}
