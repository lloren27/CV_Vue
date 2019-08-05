<template>
  <div class="work">
    <div v-for="work in works">
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
  float: left;
  width: 50%;
}
.title {
  display: inline;
}
.date {
  display: inline;
  margin-left: 24px;
}
.description {
  margin-left: 20px;
  text-align: justify;
}
.description-container {
  text-align: center;
}
</style>
