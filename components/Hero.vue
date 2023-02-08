<template>
  <section class="hero is-bold is-fullheight">
    <Transition name="slide-fade">
      <div class="hero-body" :class="active" v-if="carouselOne" />
    </Transition>
    <Transition name="slide-fade">
      <div class="hero-body" :class="active" v-if="carouselTwo" />
    </Transition>
    <Transition name="slide-fade">
      <div class="hero-body" :class="active" v-if="carouselThree" />
    </Transition>
    <Transition name="slide-fade">
      <div class="hero-body" :class="active" v-if="carouselFour"></div>
    </Transition>
    <div class="hero-body">
      <div class="container is-fluid">
        <h1 class="title is-1 has-text-light is-uppercase">
          Impact Dart League
        </h1>
        <h1 class="title is-3 has-text-weight-light has-text-light">
          Georgia's premier competitive dartsoft league
        </h1>
      </div>
    </div>
  </section>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-in;
}

.slide-fade-leave-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}

.carouselOne {
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.95)),
    url(../assets/banner-1.jpg);
  background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
}

.carouselTwo {
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.95)),
    url(../assets/banner-2.jpg);
  background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
}

.carouselThree {
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.95)),
    url(../assets/banner-3.jpg);
  background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
}

.carouselFour {
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.95)),
    url(../assets/banner-4.jpg);
  background-size: cover;
  -moz-background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      carouselOne: true,
      carouselTwo: false,
      carouselThree: false,
      carouselFour: false,
      active: 'carouselOne',
    };
  },
  beforeMount() {
    this.carousel();
  },
  methods: {
    carousel() {
      return setInterval(() => {
        const carouselEntries = {
          carouselOne: this.carouselOne,
          carouselTwo: this.carouselTwo,
          carouselThree: this.carouselThree,
          carouselFour: this.carouselFour,
        };
        const active = Object.keys(carouselEntries).find((key) => carouselEntries[key] === true);
        const keys = Object.keys(carouselEntries).sort((a, b) => b - a);
        const nextIndex = keys.indexOf(active) + 1;
        const nextActive = keys[nextIndex] || keys[0];
        // Turn off active and activate next
        this[active] = false;
        this[nextActive] = true;
        this.active = nextActive;
      }, 8000);
    },
  },
};
</script>
