<template>
  <div>
    <div id="wrapper">
      <sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <topbar />
          <div class="container-fluid">
            <router-view />
          </div>
        </div>
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2019</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>
<script>
export default {
  components: {
    sidebar: require("../components/Sidebar.vue").default,
    topbar: require("../components/Topbar").default
  }
};
</script>