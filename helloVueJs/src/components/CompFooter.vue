<template>
  <h1>{{titleFooter}}</h1>
</template>

<script>
export default {
  name: "comp-footer",
  props: {
    titleFooter: String
  },
  data() {
    return {
      textFooter: "Hello footer"
    };
  }
};
</script>

<style>
</style>