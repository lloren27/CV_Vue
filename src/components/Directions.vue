<template>
  <div>
    <md-menu>
      <md-button md-menu-trigger
        ><router-link class="enlace" to="/academic"
          >Experiencia Académica</router-link
        ></md-button
      >
    </md-menu>

    <md-menu>
      <md-button md-menu-trigger
        ><router-link class="enlace" to="/work"
          >Experiencia Profesional</router-link
        ></md-button
      >
    </md-menu>

    <md-menu>
      <md-button md-menu-trigger
        ><router-link class="enlace" to="/skills"
          >Habilidades y tecnologias</router-link
        ></md-button
      >
    </md-menu>
  </div>
</template>

<script>
export default {
  name: "Directions"
};
</script>

<style lang="scss" scoped>
.enlace:hover {
  text-decoration: none !important;
  color: black;
}
.enlace {
  color: black;
}
.md-menu {
  margin: 10px;
}
</style>
