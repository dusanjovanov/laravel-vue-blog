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
}
