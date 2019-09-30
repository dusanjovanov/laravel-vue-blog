<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\User;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        "title" => $faker->sentence(6, true),
        "featured_image_url" => $faker->imageUrl(900, 300),
        "body" => '{"type":"doc","content":[{"type":"heading","attrs":{"level":3},"content":[{"type":"text","text":"' . $faker->sentence(6, true) . '"}]},{"type":"paragraph","content":[{"type":"text","text":"' . $faker->text(500) . '"}]}]}',
        "author_id" => User::first()->id
    ];
});
