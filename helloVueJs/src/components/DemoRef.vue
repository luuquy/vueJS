<template>
  <div class="demo-ref">
    <h1>DemoRef</h1>
    <button v-on:click="handleClickInput" class="avatar">Thay doi Avatar</button>
    <input type="file" style="display: none" ref="fileInputAvt" />
  </div>
</template>

<script>
export default {
  name: "demo-ref",
  data() {
    return {};
  },
  methods: {
    handleClickInput(e) {
      this.$refs.fileInputAvt.click();
    }
  }
};
</script>

<style>
.demo-ref {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
.avatar {
  padding: 12px 15px;
  background-color: #333;
  color: white;
  border: 2px solid #333;
  transition: all 0.3s ease;
}
.avatar:hover {
  color: #333;
  background-color: white;
}
</style>