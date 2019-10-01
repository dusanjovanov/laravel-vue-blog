<template>
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
</template>
<script>
export default {
  props: ["posts", "selectRow"]
};
</script>