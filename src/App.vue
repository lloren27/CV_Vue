<template>
  <div id="app">
    <Presentation msg="Carlos Llorente CV´s" />
    <Directions />
    <Contact />
    <router-view></router-view>
    <img
      alt="Vue logo"
      src="https://res.cloudinary.com/lloren27/image/upload/v1564856292/lloren/IMG_3196.jpg"
      class="photo"
    />
    <Footer />
  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Contact from "./components/Contact.vue";
import Directions from "./components/Directions.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Presentation,
    Contact,
    Directions,
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
