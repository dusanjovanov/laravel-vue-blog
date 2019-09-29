<template>
  <div>
    <h1 class="my-4">Dashboard</h1>
    <h2>Posts</h2>
    <div
      class="position-sticky fixed-top bg-white w-100 p-2 border d-flex align-items-center"
      style="top:56px;"
    >
      <button @click="handleEdit" class="btn btn-success mr-1">✏️ Edit Post</button>
      <router-link to="/dashboard/posts/add" class="btn btn-primary mr-1">➕ Add Post</router-link>
      <div class="ml-3">{{numSelected}} posts selected.</div>
    </div>
    <table v-if="posts" class="table table-striped table-bordered table-responsive">
      <thead>
        <th></th>
        <th>ID</th>
        <th>TITLE</th>
        <th>AUTHOR</th>
        <th>IMAGE</th>
        <th>BODY</th>
        <th>POSTED AT</th>
        <th>LAST UPDATED</th>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>
            <input
              @change="selectRow"
              type="checkbox"
              name="select_row"
              id="select_row"
              :data-id="post.id"
              style="width: 1.3em; height: 1.3em;"
            />
          </td>
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.author.name}}</td>
          <td>
            <img :src="post.featured_image_url" style="height: 50px;" />
          </td>
          <td>{{post.body.substring(0,30) + '...'}}</td>
          <td style="white-space:nowrap;">{{new Date(post.created_at).toLocaleString()}}</td>
          <td style="white-space:nowrap;">{{new Date(post.updated_at).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: null,
      selectedPosts: []
    };
  },
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
      this.$http({
        url: "posts"
      })
        .then(res => (this.posts = res.data.posts))
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
        path: `/dashboard/posts/edit/${this.selectedPosts[0]}`
      });
    },
    }
  }
};
</script>