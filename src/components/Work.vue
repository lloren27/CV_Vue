<template>
  <div>
    <div v-for="work in works" class="work">
      <h3 class="title">{{ work.title }}</h3>
      <p class="date">{{ work.date }}</p>
      <div class="description-container">
        <p class="description">{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      works: []
    };
  },
  mounted() {
    const baseURI = "http://localhost:3000/works";
    this.$http.get(baseURI).then(result => {
      this.works = result.data;
    });
  }
};
</script>
<style>
.work {
}
.title {
  display: inline;
}
.date {
  display: inline;
  margin-left: 24px;
}
.description {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 15px !important;
}
.description-container {
  text-align: center;
}
</style>
