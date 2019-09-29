<template>
  <div class="mt-4">
    <h1 class="mb-3">Register</h1>
      <form>
        <div class="form-group">
    <label for="displayName">Display name</label>
    <input type="text" class="form-control" id="displayName" placeholder="At least 6 characters long.">
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="someone@example.com">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="At least 6 characters long.">
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
 </div>
</template>