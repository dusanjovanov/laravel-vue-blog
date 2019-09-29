<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand ml-3">Laravel/Vue Blog</router-link>
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
        <li class="nav-item">
          <router-link to="/" active-class="active" exact class="nav-link">All Posts</router-link>
        </li>
        <li>
          <a href="/dashboard" class="nav-link" target="_blank">
            Dashboard
            <external-link-icon />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  components: {
    "external-link-icon": require("./ExternalLink").default
  }
};
</script>