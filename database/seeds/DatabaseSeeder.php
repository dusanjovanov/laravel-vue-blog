<?php

use App\Post;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Dusan Jovanov',
            'email' => 'duca@duca.com',
            'password' => Hash::make('duca'),
        ]);

        factory(Post::class, 10)->create();
    }
}
