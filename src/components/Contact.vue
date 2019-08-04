<template>
  <div>
    <button v-on:click="isToggled = !isToggled">Contactame</button>
    <div class="texto">
      <div v-if="isToggled">
        <a
          href="https://www.linkedin.com/in/carlos-llorente/"
          target="_blank"
          rel="noopener"
        >
          <span class="nav-text"
            ><img
              class="logo-linkedin"
              src="https://res.cloudinary.com/lloren27/image/upload/v1564857341/lloren/Popular_Social_Media-22-512.png"
          /></span>
        </a>
        <a
          href="mailto:llorenteyuste@hotmail.com?Subject=He%20visto%20tu%20cv-online"
          target="_blank"
          rel="noopener"
        >
          <span class="nav-text"
            ><img
              class="logo-mail"
              src="https://res.cloudinary.com/lloren27/image/upload/v1552247704/contact.png"
          /></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data: function() {
    return {
      isToggled: false
    };
  }
};
</script>

<style scoped>
.texto {
  text-align: center;
  width: 99%;
}
.logo-linkedin {
  width: 4%;
}
.logo-mail {
  width: 3%;
}
h1 {
  color: red;
  border: 1px solid red;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 10px !important;
}
button {
  background-color: white;
  border: 5px solid black;
  border-radius: 20px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
</style>
