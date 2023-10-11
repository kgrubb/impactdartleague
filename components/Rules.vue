<template>
  <section class="hero is-bold is-fullheight has-bg-img">
    <div class="hero-body">
        <iframe
          class="container is-iframe"
          src="https://docs.google.com/document/d/e/2PACX-1vQHKoR5fZ0TkHBDqK7cAXdtDy_XOcuxvA0N1OjcrIBwvDY0B6ZPGo16aL5EGYCpUKqjyxabkuRZi8UH/pub?embedded=true">
        </iframe>
    </div>
  </section>
</template>
<style scoped>
.is-iframe {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 90%;
  overflow: hidden;
  text-align: center;
}
::-webkit-scrollbar {
  display: none;
}
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(75, 0, 0, 0.5));
  background-size: cover;
}
</style>
