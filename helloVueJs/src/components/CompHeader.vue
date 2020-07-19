<template>
  <header>
    <h1>
      {{titleHeader}}
      <br />
      <button v-on:click="changeTitle">Thay doi title tu header</button>
    </h1>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    titleHeader: String
  },
  data() {
    return {
      text: "Header"
    };
  },
  methods: {
    changeTitle(e) {
      // khong duoc phep thay doi truc tiep props tu components cha -> truyen su kien thong bao ra ben ngoai
      // console.log("Truoc khi kich hoat change title event");
      var data = {
        title: "test -> data thong qua event"
      };
      this.$emit("changeTitleEvent", data);
      // console.log("Sau khi kich hoat change title event");
    }
  }
};
</script>

<style>
</style>