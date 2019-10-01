<template>
  <div>
    <h1 class="my-4">All Posts</h1>
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
    <ul class="pagination justify-content-center mb-4">
      <li :class="['page-item', {disabled: this.lastPage === null}]">
        <button class="page-link" @click.prevent="getOlderPosts">&larr; Older</button>
      </li>
      <li :class="['page-item', {disabled: this.nextPage === null}]">
        <button class="page-link" @click.prevent="getNewerPosts">Newer &rarr;</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { API_URL } from "../../../config";
export default {
  data() {
    return {
      posts: null,
      lastPage: null,
      nextPage: null
    };
  },
  mounted() {
    this.getPosts(1);
  },
  methods: {
    getPosts(page) {
      return fetch(`${API_URL}/posts?limit=5&page=${page}`)
        .then(res => res.json())
        .then(data => {
          this.posts = data.data;
          (this.lastPage =
            data.current_page === 1 ? null : data.current_page - 1),
            (this.nextPage =
              data.current_page === data.last_page
                ? null
                : data.current_page + 1);
        })
        .catch(err => console.log(err));
    },
    getNewerPosts() {
      this.getPosts(this.nextPage).then(() => window.scrollTo(0, 0));
    },
    getOlderPosts() {
      this.getPosts(this.lastPage).then(() => window.scrollTo(0, 0));
    }
  }
};
</script>