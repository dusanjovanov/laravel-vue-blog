<template>
  <div v-if="post" class="pb-5">
    <h1 class="mt-4">{{ post.title }}</h1>
    <p class="lead">by {{ post.author.name }}</p>
    <hr />
    <p>Posted on {{ new Date(post.created_at).toLocaleDateString() }}</p>
    <hr />
    <img class="img-fluid rounded" :src="post.featured_image_url" :alt="post.title" />
    <hr />
    <div>
      <editor-content :editor="editor" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ProseMirror {
  &:focus {
    outline: none;
  }
}
</style>
<script>
import { Editor, EditorContent } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
export default {
  data() {
    return {
      post: null,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: "",
        editable: false
      })
    };
  },
  components: {
    EditorContent
  },
  mounted() {
    this.getPost();
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    getPost() {
      this.$http({
        url: `posts/${this.$route.params.id}`,
        method: "GET"
      })
        .then(res => {
          this.post = res.data.post;
          this.editor.setContent(JSON.parse(this.post.body));
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
