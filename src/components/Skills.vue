<template>
  <div class="jose">
    <div class="md-layout md-gutter md-alignment-center">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="html5 logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946925/html5-logo-initial.png"
          class="logo"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="Css logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564950681/css3-logo.svg"
          class="logo"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="Javascript logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946925/logo_js.png"
          class="logo-javascript"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="Mongo logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946925/logo-mongo.png"
          class="logo-mongo"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="express logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946925/logo-express.png"
          class="logo"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="tyscript logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946925/tyscript-logo.png"
          class="logo"
        />
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <img
          alt="Angular logo"
          src="https://res.cloudinary.com/lloren27/image/upload/v1564946924/angular-logo.png"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>
<style lang="scss" scoped>
.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(purple, 200);
    content: " ";
  }
}
.md-alignment-center {
  margin-bottom: 30px;
}
.logo {
  width: 45%;
}
.logo-javascript {
  width: 70%;
  margin-top: 11px;
}
.logo-mongo {
  width: 45%;
  margin-top: 10px;
}
</style>
