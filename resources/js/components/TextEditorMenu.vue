<template>
  <editor-menu-bar :editor="editor" v-slot="{commands, isActive}">
    <div>
      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.bold() }"
        @click="commands.bold"
      >
        <font-awesome-icon icon="bold" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.italic() }"
        @click="commands.italic"
      >
        <font-awesome-icon icon="italic" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.strike() }"
        @click="commands.strike"
      >
        <font-awesome-icon icon="strikethrough" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.underline() }"
        @click="commands.underline"
      >
        <font-awesome-icon icon="underline" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
        @click="commands.heading({ level: 1 })"
      >
        <font-awesome-icon icon="heading" />
        <sub class="font-weight-bold">1</sub>
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
        @click="commands.heading({ level: 2 })"
      >
        <font-awesome-icon icon="heading" />
        <sub class="font-weight-bold">2</sub>
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
        @click="commands.heading({ level: 3 })"
      >
        <font-awesome-icon icon="heading" />
        <sub class="font-weight-bold">3</sub>
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.paragraph() }"
        @click="commands.paragraph"
      >
        <font-awesome-icon icon="paragraph" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.bullet_list() }"
        @click="commands.bullet_list"
      >
        <font-awesome-icon icon="list-ul" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.ordered_list() }"
        @click="commands.ordered_list"
      >
        <font-awesome-icon icon="list-ol" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.blockquote() }"
        @click="commands.blockquote"
      >
        <font-awesome-icon icon="quote-left" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.code() }"
        @click="commands.code"
        title="Inline code"
      >
        <font-awesome-icon icon="code" />
      </button>

      <button
        type="button"
        class="menubar__button"
        :class="{ 'is-active': isActive.code_block() }"
        @click="commands.code_block"
        title="Code block"
      >
        <font-awesome-icon icon="code" />
        <font-awesome-icon icon="square" />
      </button>

      <button type="button" class="menubar__button" @click="commands.horizontal_rule">
        <span class="font-weight-bold">HR</span>
      </button>

      <button type="button" class="menubar__button" @click="commands.undo">
        <font-awesome-icon icon="undo" />
      </button>

      <button type="button" class="menubar__button" @click="commands.redo">
        <font-awesome-icon icon="redo" />
      </button>
    </div>
  </editor-menu-bar>
</template>
<style lang="scss" scoped>
.menubar__button {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  min-width: 36px;
  margin-bottom: 6px;
  &.is-active {
    background-color: rebeccapurple !important;
    color: #fff;
  }
  &:hover {
    background-color: #eee;
  }
}
</style>
<script>
import { EditorMenuBar } from "tiptap";
export default {
  components: {
    EditorMenuBar
  },
  props: ["editor"]
};
</script>