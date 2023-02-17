<template>
  <section class="hero is-bold is-fullheight">
    <div class="hero-body has-bg-img">
      <div class="container is-fluid">
        <h1 class="title is-1 has-text-centered is-uppercase">
          Contact Us
        </h1>
        <div class="level">
          <div class="level-item">
            <!-- eslint-disable-next-line max-len -->
            <form id="signup-form" method="post" action="mailto:&#109;&#97;&#105;&#108;&#116;&#111;&#58;%7A%69%69%70%65%72%66%6F%72%65%76%65%72%40%67%6D%61%69%6C%2E%63%6F%6D?subject=Impact Dart League Contact Inquiry">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="name">
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="message"></textarea>
                </div>
              </div>
              <input type="submit" class="button is-primary" value="Send">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  background-size: cover;
}
</style>
