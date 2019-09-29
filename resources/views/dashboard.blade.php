<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel/Vue Blog</title>
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- Scripts -->
  <script src="{{ asset('js/dashboard.js') }}" defer></script>
  <!-- Styles -->
  <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
</head>

<body>
  <div id="root"></div>
</body>

</html>