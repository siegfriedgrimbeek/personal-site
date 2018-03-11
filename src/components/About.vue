<template>
  <main>
    <router-link v-bind:to="{ name: 'Index' }" class="copy-container about-copy">

      <h3>About this site</h3>
      <p>This site has been developed using the VUE-CLI, it is basically my first introduction to VUE as I have not had the opportunity to work with VUE professionally.</p>

      <p>I did need to see what all the fuss regarding VUE was about as the Frontend community was raved about it and whenever I met someone new, they had positive feedback regarding VUE.</p>

      <p>Therefore, I decided to dive in head first and start developing both this site and another side project that I am working on in VUE.</p>

      <p>All the code for this site is available publicly on my <a href="https://github.com/siegfriedgrimbeek/personal-site" target="_blank">GitHub</a> and my goal with this project is to add something cool to this site on a weekly basis.</p>

      <p>I have plenty of ideas and I have loads more to learn and through this site, I will be practicing my VUE skills and sharing my findings as I go.</p>

      <p>Thanks for reading,
      Siegfried</p>

    </router-link>
  </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="stylus">
main
  @media screen and (max-width: 320px)
    padding: 60px 0

.about-copy
  max-width: 600px
  padding: 0 15px
  color: white
  text-decoration: none
  letter-spacing: initial

  h3
    font-size: 4vw
    margin-bottom: 2vw
    @media screen and (max-width: 375px)
      font-size: 10vw
      margin-bottom: 6vw

  p
    font-size: 12pt
    text-transform: none
    font-family: arial
    font-weight: 400
    margin-bottom: 1vw
    line-height: 16pt
</style>
