<template>
  <div class="footer-container">
    <span class="text-footer"
      >Desarrollado con <img class="logo" src="../assets/logo.png"
    /></span>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
<style>
.footer-container {
  background-color: #8dd5b5;
  padding: 10px;
  opacity: 0.6;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.logo {
  width: 2%;
}
.text-footer {
  font-weight: bold;
  color: white;
}
</style>
