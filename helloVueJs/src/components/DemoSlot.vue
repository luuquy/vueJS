<template>
  <div class="demo-slot">
    <h1>Demo Slot</h1>
    <comp-tabs title="tieu de cua tab"></comp-tabs>
    <h1>Demo Slot</h1>
  </div>
</template>

<script>
import CompTabs from "./CompTabs.vue";
export default {
  name: "demo-slot",
  components: {
    CompTabs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.demo-slot {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
</style>