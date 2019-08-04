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
  background-color: blue;
  padding: 10px;
  opacity: 0.6;
  margin: 0 auto;
  margin-top: 20px !important;
}
.logo {
  width: 2%;
}
.text-footer {
  font-weight: bold;
  color: white;
}
</style>
