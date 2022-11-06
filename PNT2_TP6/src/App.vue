<template>
  <div id="app">
    <Header  />
    <Navigator />
    <Container />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container
  },
  methods: {

  },
  data () {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('restart')
  }
}
</script>

<style>
#app {
	font-family: "Montserrat", "Avenir";
  margin: 0;
  font-family: cursive;
}
</style>
