<template>
    <nav class="navbar is-spaced is-fixed-top is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/logo.png" width="50" height="50">
        </a>
        <button @click="burger" class="button navbar-burger has-text-white is-hoverable" data-target="navMenu"
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
          <NuxtLink
            to="/rules"
            class="navbar-item is-uppercase has-text-weight-bold"
            v-bind:class="activator ? '' : 'has-text-white'"
            @click="closeBurger">
            Rules
          </NuxtLink>
          <NuxtLink
            to="/stats"
            class="navbar-item is-uppercase has-text-weight-bold"
            v-bind:class="activator ? '' : 'has-text-white'"
            @click="closeBurger">
            Player Stats
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="navbar-item is-uppercase has-text-weight-bold"
            v-bind:class="activator ? '' : 'has-text-white'"
            @click="closeBurger">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </nav>
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
    closeBurger() {
      this.activator = false;
      return this.activator;
    },
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
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
