<template>
  <div id="app">
    <Presentation msg="Carlos Llorente CV´s" />
    <Menu />
    <Contact />
    <router-view></router-view>
    <div>
      <img
        alt="Vue logo"
        src="https://res.cloudinary.com/lloren27/image/upload/v1564856292/lloren/IMG_3196.jpg"
        class="photo"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Contact from "./components/Contact.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Presentation,
    Contact,
    Menu,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.photo {
  width: 35%;
  border-radius: 5px;
}
</style>
