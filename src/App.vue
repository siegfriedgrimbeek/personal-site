<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="logo">
          <h1>Siegfried Grimbeek</h1>
        </div>
        <div class="social-links">
          <a target="_blank" href="https://facebook.com/siegoboy">
            <icon name="facebook-official"></icon>
          </a>
          <a target="_blank" href="https://twitter.com/siegfriedgrim">
            <icon name="twitter-square"></icon>
          </a>
          <a target="_blank" href="https://github.com/siegfriedgrimbeek">
            <icon name="github"></icon>
          </a>
          <a target="_blank" href="https://iamsieg.com">
            <icon name="wordpress"></icon>
          </a>
          <a target="_blank" href="https://medium.com/@siegoboy">
            <icon name="medium"></icon>
          </a>
          <a target="_blank" href="https://instagram.com/siegoboy">
            <icon name="instagram"></icon>
          </a>
        </div>
      </header>
      <router-view/>
      <footer>
        <div class="email">
          <a href="mailto:siegfried.grimbeek@gmail.com">siegfried.grimbeek@gmail.com</a>
        </div>
        <div class="site-info">
          <div class="link" @click="navigate()">about this site.</div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    navigate () {
      if(this.$router.currentRoute.name === 'Index'){
        this.$router.push({name: 'About'})
      }else{
        this.$router.push({name: 'Index'})
      }
    }
  }
}
</script>
<style lang="stylus">
whiteCol = #F2F6FC
@import url('https://fonts.googleapis.com/css?family=Oswald:400,600');
body
  font-family: 'Oswald', sans-serif
  box-sizing: border-box
  color: white
  background-color: #303133

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.container
  header, footer
    width: 100%
    height: 10vh
    position: fixed
    left: 0
    display: flex
    align-items: center
    justify-content: space-between
    background-color: #303133

    >div
      padding: 2vw

  header
    top: 0

    div
      text-transform: uppercase

    .social-links
      a
        color: whiteCol
        text-decoration: none
        display: inline-block
        transform: all 0.3s ease

        svg
          width: 20px
          height: 20px

        &:hover
          svg
            color: #C0C4CC

  footer
    bottom: 0

    a, .link
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

  main
    color: white
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    font-weight: 600
    letter-spacing: 2px
    text-transform: uppercase
    .headline
      font-size: 10vw;

</style>
