<template>
  <main>
    <div class="copy-container about-copy">

      <h3>About this site</h3>
      <p>This site has been developed using the VUE-CLI, it is my first introduction to VUE as I have not had the opportunity to work with VUE professionally.</p>

      <p>I had to see what all the fuss regarding VUE was about as the Frontend community raved about it, everyone has positive feedback regarding VUE.</p>

      <p>Therefore, I decided to dive in head first and start developing both this site and another side project that I am working on in VUE.</p>

      <p>All the code for this site is available publicly on my <a href="https://github.com/siegfriedgrimbeek/personal-site" target="_blank">GitHub</a> and my goal with this project is to add something cool to this site on a weekly basis.</p>

      <p>I have plenty of ideas and I have loads more to learn and through this site, I will be practicing my VUE skills and sharing my findings as I go.</p>

      <router-link v-bind:to="{ name: 'Index' }"><icon name="close"></icon> Close</router-link>

    </div>
  </main>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="stylus">
whiteCol = #F2F6FC
main
  @media screen and (max-width: 320px)
    padding: 60px 0

.about-copy
  max-width: 600px
  padding: 0 15px
  color: white
  text-decoration: none
  letter-spacing: initial

  a
    color: whiteCol
    text-decoration: none
    position: relative
    cursor: pointer
    display: inline

    &:after
      transition: height 0.1s ease
      background-color: whiteCol
      width: 100%
      height: 1px
      position: absolute
      content: ""
      left: 0
      bottom: 0
      z-index: -1

    &:hover
      color: #303133
      z-index: 1

      &:after
        height: 20px

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
