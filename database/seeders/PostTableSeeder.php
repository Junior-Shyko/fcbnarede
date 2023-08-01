<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;
use Illuminate\Support\Facades\DB;
class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create('pt_BR');
        
        for ($i = 0; $i < 50; $i++) {
            $publish = false;
            if( $i % 2 == 0 ) {
                $publish = true;
            }
            DB::table('posts')->insert([
                'description' => $faker->text(),
                'publish' => $publish,
                'like' => $faker->randomNumber(4, true),
                'heart' => $faker->randomNumber(3, true),
                'user_id' => $faker->numberBetween(1, 30),
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime(),
            ]);
        }
    }
}
