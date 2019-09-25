<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\User;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        "title" => $faker->sentence(6, true),
        "featured_image_url" => $faker->imageUrl(900, 300),
        "body" => $faker->text(2000),
        "author_id" => User::first()->id
    ];
});
