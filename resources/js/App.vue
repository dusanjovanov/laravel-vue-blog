<template>
  <div v-if="userChecked">
    <navbar />
    <div class="container page-container">
      <div class="row justify-content-center">
        <div :class="$route.path==='/dashboard' ? 'col-md-12' : 'col-md-8'">
          <router-view />
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userChecked: false
    };
  },
  created() {
    this.$http({
      url: "auth/user"
    })
      .then(res => {
        this.$store
          .dispatch("setUser", res.data.user)
          .then(() => (this.userChecked = true));
      })
      .catch(err => console.log(err));
  },
  components: {
    navbar: require("./components/Navbar").default,
    "my-footer": require("./components/Footer").default
  }
};
</script>