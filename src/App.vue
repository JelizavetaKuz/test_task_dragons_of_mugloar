<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Serif, "Lucida Handwriting";
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
:root {
  --bloody: #5b0404;
  --black-red: #340e0e;
  --yellow-money: #e5bf18;
}

</style>
