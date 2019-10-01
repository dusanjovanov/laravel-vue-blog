<template>
  <div>
    <div class="row">
      <div>
        <h2 class="h4 mb-4">Resources</h2>
        <router-link to="/posts" class="text-decoration-none">
          <div class="card border-left-primary shadow resource-card">
            <div class="card-body text-uppercase font-weight-bold">Posts</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.resource-card {
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 300ms;
  }
}
</style>