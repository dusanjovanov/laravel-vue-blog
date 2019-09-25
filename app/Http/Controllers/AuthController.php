<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            "name" => "required|min:6",
            "email" => "required|email|unique:users",
            "password" => "required|min:6|confirmed"
        ]);

        if ($v->fails()) {
            return response()->json([
                "status" => "error",
                "errors" => $v->errors()
            ], 422);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(["status" => "success"], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only("email", "password");

        if ($token = $this->guard()->attempt($credentials)) {
            return response()->json(["status" => "success"], 200)->header("Authorization", $token);
        }

        return response()->json(["status" => "login_error"], 401);
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        return response()->json([
            "status" => "success",
            "msg" => "Logged out successfully"
        ], 200);
    }

    private function guard()
    {
        return Auth::guard();
    }
}
