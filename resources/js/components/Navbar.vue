<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand">Laravel/Vue Blog</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav w-100">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">All Posts</router-link>
        </li>
        <li class="ml-auto mr-2">
          <router-link to="/register" class="btn btn-primary">Sign up</router-link>
        </li>
        <li>
          <router-link to="/login" class="btn btn-secondary">Log in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template> 