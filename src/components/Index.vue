<template>
  <main>
    <div class="copy-container">
      <div class=""><h2 class="headline">{{currentRole}}</h2></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      roles: [
        'web developer',
        'agile enthusiast',
        'tech junkie'
      ],
      currentRole: 'web developer'
    }
  },
  mounted () {
    this.changeText()
  },
  methods: {
    changeText () {
      let time = 1
      const instance = this
      const changeRole = (time) => {
        return instance.roles[time]
      }
      setInterval(() => {
        instance.currentRole = changeRole(time)
        if (time === (instance.roles.length - 1)) {
          time = 0
        } else {
          time++
        }
      }, 5000)
    }
  }
}
</script>
