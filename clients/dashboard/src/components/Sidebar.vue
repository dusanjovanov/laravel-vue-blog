<template>
  <ul
    :class="['navbar-nav' ,'bg-gradient-primary' ,'sidebar' ,'sidebar-dark' ,'accordion', {'toggled': isToggled}]"
    id="accordionSidebar"
  >
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon">L</div>
      <div class="sidebar-brand-text mx-3">Laravel/Vue</div>
    </a>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <a class="nav-link" href="index.html">
        <span>Dashboard</span>
      </a>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Resources</div>
    <li class="nav-item">
      <a
        :class="['nav-link' ,'collapsed' ,{'d-flex': !isToggled} ,'align-items-center']"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
        @click="visibleDropdown === 'posts'?  visibleDropdown = '': visibleDropdown = 'posts'"
      >
        <span>Posts</span>
        <span class="ml-auto" v-if="!isToggled">
          <font-awesome-icon
            :icon="visibleDropdown === 'posts' ? 'chevron-down' :  'chevron-right'"
          />
        </span>
      </a>
      <div
        id="collapsePages"
        :class="['collapse',{'show': visibleDropdown=== 'posts'}]"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
        style
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Actions</h6>
          <a class="collapse-item d-flex align-items-center" href="#">
            Posts Table
            <span class="ml-auto">
              <font-awesome-icon icon="table" />
            </span>
          </a>
          <a class="collapse-item d-flex align-items-center" href="#">
            Add Post
            <span class="ml-auto">
              <font-awesome-icon icon="plus" />
            </span>
          </a>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-none d-md-block" />
    <div class="text-center d-none d-md-inline">
      <button
        @click="isToggled = !isToggled"
        :class="['rounded-circle', 'border-0', 'collapse-button']"
      >
        <font-awesome-icon :icon="isToggled ? 'chevron-right' : 'chevron-left'" />
      </button>
    </div>
  </ul>
</template>
<style lang="scss" scoped>
.collapse-button {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  &:focus {
    outline: none;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isToggled: false,
      visibleDropdown: null
    };
  }
};
</script>