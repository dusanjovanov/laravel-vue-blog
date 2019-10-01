<template>
  <div class="mb-5">
    <h1 class="h4 mb-4">{{pageType === "add" ? 'Add Post' : 'Edit Post'}}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="text" class="form-control" name="title" id="title" />
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          :value="user.name"
          class="form-control"
          name="author"
          id="author"
          disabled
        />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <div v-if="pageType === 'edit'">
          <img v-if="post" :src="post.featured_image_url" :alt="post.name" />
        </div>
        <br />
        <button type="button" class="btn btn-primary" @click="handleClickUpload">Upload Image</button>
        <div class="mt-2">{{imageFile !== null ? imageFile.name : "No file selected."}}</div>
        <input
          type="file"
          @change="handleChangeImage"
          name="image"
          id="image"
          ref="inputImage"
          v-show="false"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <text-editor-menu :editor="editor" />
        <div :class="['editor',{'editor-focused': isEditorFocused}]" ref="editor">
          <editor-content :editor="editor" />
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary mr-1"
      >{{this.pageType === "add" ? "Add Post" : "Update"}}</button>
      <button @click="handleReset" type="button" class="btn btn-secondary">Reset</button>
    </form>
  </div>
</template>
<style lang="scss">
.editor {
  height: 300px !important;
  font-size: 1rem;
  font-weight: 400;
  overflow-y: scroll;
  border: 1px solid #d1d3e2;
  border-radius: 0.35em;
  line-height: 1.5;
  color: #6e707e;
  padding: 0.375rem 0.75rem;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  .ProseMirror {
    min-height: 300px;
    &:focus {
      outline: none;
    }
  }
}
.editor-focused {
  background-color: #fff;
  border-color: #8080ff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 255, 0.25);
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
import TextEditorMenu from "../components/TextEditorMenu";
import { API_URL } from "../../../config";
export default {
  data() {
    return {
      pageType: "",
      post: null,
      title: "",
      imageFile: null,
      editor: null,
      isEditorFocused: false
    };
  },
  mounted() {
    this.pageType = this.$route.params.action;
    if (this.pageType === "edit") {
      this.getPost();
    }
    this.editor = new Editor({
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
      onFocus: () => {
        this.isEditorFocused = true;
      },
      onBlur: () => {
        this.isEditorFocused = false;
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  components: {
    EditorContent,
    TextEditorMenu
  },
  computed: {
    user() {
      return {
        name: "DULE"
      };
      // return this.$store.state.user;
    }
  },
  methods: {
    getPost() {
      fetch(`${API_URL}/posts/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.data.post === null) {
            this.$router.push({ path: "/" });
          } else {
            this.post = data.data.post;
            this.title = this.post.title;
            this.editor.setContent(JSON.parse(this.post.body));
          }
        })
        .catch(err => console.log(err));
    },
    handleChangeImage(e) {
      this.imageFile = e.target.files[0];
    },
    handleClickUpload() {
      this.$refs.inputImage.click();
    },
    handleSubmit() {
      if (this.pageType === "add") {
        const formData = new FormData();
        formData.set("title", this.title);
        formData.set("body", JSON.stringify(this.editor.getJSON()));
        formData.set("featured_image", this.imageFile);
        formData.set("author_id", this.user.id);

        this.$http
          .post("posts", formData)
          .then(res => {
            this.$router.push({ path: "/dashboard" });
          })
          .catch(err => console.log(err));
      } else {
        const formData = new FormData();
        formData.set("_method", "PUT");
        formData.set("title", this.title);
        formData.set("body", JSON.stringify(this.editor.getJSON()));
        if (this.imageFile) {
          formData.set("featured_image", this.imageFile);
        }

        this.$http
          .post(`posts/${this.post.id}`, formData)
          .then(res => {
            this.$router.push({ path: "/dashboard" });
          })
          .catch(err => console.log(err));
      }
    },
    handleReset() {
      this.title = this.post.title;
      this.editor.setContent(JSON.parse(this.post.body));
      this.imageFile = null;
    }
  }
};
</script>