<template lang="html">

  <section class="src-components-navigator">
		<button id="reset" @click="$store.dispatch('restart')">{{ $store.state.restartButtonText }}</button>
		<span id="message">{{ $store.state.messageDisplayText }}</span>

		<button id="easy" @click="$store.dispatch('difChanged',false)" :class="$store.state.isHard?'':'selected'">Facil</button>
		<button id="hard" @click="$store.dispatch('difChanged',true)" :class="$store.state.isHard?'selected':''">Dificil</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navigator',
    props: [],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    font-family: cursive;
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }  
  #message {
    color: #000000;
    display: inline-block;
    width: 20%;
  }  
</style>
