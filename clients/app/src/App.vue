<template>
  <div>
    <navbar />
    <div class="container page-container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <router-view />
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>
<script>
export default {
  components: {
    navbar: require("./components/Navbar").default,
    "my-footer": require("./components/Footer").default
  }
};
</script>