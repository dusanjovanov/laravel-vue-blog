<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $with = ['author'];

    public function author()
    {
        return $this->belongsTo("App\User");
    }

    public $hidden = ["author_id"];
}
