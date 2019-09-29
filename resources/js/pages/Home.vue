<template>
  <div>
    <h1 class="my-4">All Posts</h1>
    <!-- Blog Post -->
    <div class="card mb-4" v-for="post in posts" :key="post.id">
      <img class="card-img-top" :src="post.featured_image_url" :alt="post.title" />
      <div class="card-body">
        <h2 class="card-title">{{post.title}}</h2>
        <router-link :to="'/posts/' + post.id" class="btn btn-primary">Go to post &rarr;</router-link>
      </div>
      <div
        class="card-footer text-muted"
      >Posted on {{new Date(post.created_at).toLocaleDateString()}} by {{post.author.name}}</div>
    </div>

    <!-- Pagination -->
    <ul class="pagination justify-content-center mb-4">
      <li class="page-item">
        <a class="page-link" href="#">&larr; Older</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">Newer &rarr;</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: null
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$http({
        url: "posts",
        method: "GET"
      })
        .then(res => (this.posts = res.data.posts))
        .catch(err => console.log(err));
    }
  }
};
</script>