<template>
  <section class="section">
    <nav class="navbar is-spaced is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/logo.png" width="50" height="50">
        </a>
        <button @click="burger" class="button navbar-burger" data-target="navMenu"
          v-bind:class="{ 'is-active': activator }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
        <div class="navbar-end">
          <!-- <a href="/events" class="navbar-item is-uppercase has-text-weight-bold">
            Events
          </a> -->
          <NuxtLink to="/rules" class="navbar-item is-uppercase has-text-weight-bold">
            Rules
          </NuxtLink>
          <NuxtLink to="/stats" class="navbar-item is-uppercase has-text-weight-bold">
            Player Stats
          </NuxtLink>
          <NuxtLink to="/contact" class="navbar-item is-uppercase has-text-weight-bold">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      msg: '',
      activator: false,
    };
  },
  methods: {
    burger() {
      this.activator = !this.activator;
      return this.activator;
    },
  },
};
</script>
<style lang="scss" scoped>

// override navbar brand to allow for a larger sized logo
.navbar-item>img {
  max-height: 4rem;
}
</style>
