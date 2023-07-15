<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Light;

class LightsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Light::create([
            'name' => 'Luz 1',
            'status' => 1,
            'description' => 'Descripción de la luz 1',
            'group_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Light::create([
            'name' => 'Luz 2',
            'status' => 0,
            'description' => 'Descripción de la luz 2',
            'group_id' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }
}
