<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ["posts" => Post::orderBy("created_at", "desc")->get()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "title" => "required|min:1",
            "body" => "required|json",
            "featured_image" => "required|image",
            "author_id" => "required|integer"
        ]);

        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        // store file
        $imagePath = Storage::disk('public')->putFile('images', $request->file("featured_image"));
        $post->featured_image_url = '/storage/' . $imagePath;
        $post->author_id = $request->author_id;
        $post->save();

        return ["post" => $post];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return ["post" => Post::where("id", $id)->first()];
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "title" => "min:1",
            "body" => "json",
            "featured_image" => "image"
        ]);

        $post = Post::find($id);

        if ($request->has('title')) {
            $post->title = $request->title;
        }
        if ($request->has('body')) {
            $post->body = $request->body;
        }
        if ($request->hasFile('featured_image')) {
            $reqFileHash = sha1_file($request->file('featured_image'));
            $postFileHash = sha1_file(storage_path('app/public/images/') . basename($post->featured_image_url));
            $areImagesDifferent = $reqFileHash !== $postFileHash;

            if ($areImagesDifferent) {
                // store new image
                $imagePath = Storage::disk('public')->putFile('images', $request->file("featured_image"));
                // delete old one
                Storage::disk('public')->delete('images/' . basename($post->featured_image_url));
                // update image url
                $post->featured_image_url = '/storage/' . $imagePath;
            }
        }

        $post->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     *  @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request->validate(["post_ids" => "required|json"]);

        Post::destroy(json_decode($request->post_ids));
    }
}
