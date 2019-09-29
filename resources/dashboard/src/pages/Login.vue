<template>
  <div class="mt-4">
    <h1 class="mb-3">Welcome back!</h1>
    <form @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">Log in</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$http({
        url: "auth/login",
        method: "POST",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(res => {
          this.setUser(res.data.user);
          this.$router.push({ path: "/dashboard" });
        })
        .catch(() => {
          console.log("error");
        });
    },
    ...mapActions(["setUser"])
  }
};
</script>