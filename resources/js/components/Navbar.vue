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
            <font-awesome-icon icon="external-link-alt" />
          </a>
        </li>
        <li class="ml-auto mr-2">
          <router-link v-if="!user" to="/register" class="btn btn-primary">Sign up</router-link>
        </li>
        <li>
          <router-link v-if="!user" to="/login" class="btn btn-secondary">Log in</router-link>
        </li>
        <li v-if="user" class="d-flex align-items-center mr-2">
          <span class="text-white">{{user.name}}</span>
        </li>
        <li>
          <button v-if="user" class="btn btn-secondary">Log out</button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>