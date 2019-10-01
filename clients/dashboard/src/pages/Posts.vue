<template>
  <div>
    <div class="position-sticky fixed-top bg-white w-100 p-2 border d-flex align-items-center">
      <button @click="handleEdit" class="btn btn-success mr-1">✏️ Edit Post</button>
      <router-link to="/posts/add" class="btn btn-primary mr-1">➕ Add Post</router-link>
      <button @click="handleDelete" class="btn btn-danger">🗑️ Delete Post</button>
      <div class="ml-3">{{numSelected}} posts selected.</div>
    </div>
    <posts-table :posts="posts" :selectRow="selectRow" />
  </div>
</template>
<script>
import { API_URL } from "../../../config";
export default {
  data() {
    return {
      posts: null,
      selectedPosts: []
    };
  },
  components: { "posts-table": require("../components/PostsTable").default },
  computed: {
    numSelected() {
      return this.selectedPosts.length;
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      fetch(`${API_URL}/posts`)
        .then(res => res.json())
        .then(data => (this.posts = data.data))
        .catch(err => console.log(err));
    },
    selectRow(e) {
      const checked = e.currentTarget.checked;
      if (checked) {
        this.selectedPosts.push(e.currentTarget.dataset.id);
      } else {
        this.selectedPosts.splice(
          this.selectedPosts.findIndex(id => id === e.currentTarget.dataset.id),
          1
        );
      }
    },
    handleEdit() {
      if (this.selectedPosts.length === 0) {
        return console.log("no posts selected");
      }
      this.$router.push({
        path: `/posts/edit/${this.selectedPosts[0]}`
      });
    },
    handleDelete() {
      if (this.selectedPosts.length === 0) {
        return console.log("no posts selected");
      }
      this.$http
        .delete("posts", {
          data: { post_ids: JSON.stringify(this.selectedPosts) }
        })
        .then(() => {
          this.getPosts();
          this.selectedPosts = [];
        })
        .catch(err => console.log(err));
    }
  }
};
</script>