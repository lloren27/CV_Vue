<template>
  <div class="presentation">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  props: {
    msg: String
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.presentation {
  background-color: #8dd5b5;
  height: 10%;
  opacity: 0.6;
  text-align: center;
  color: black;
  position: absolute;
  width: 100%;
  top: -62px;
}
</style>
