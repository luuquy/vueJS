<template>
  <div class="user">
    <h1>{{user.email}}</h1>
    <button v-on:click="handleDelete" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDelete(e) {
      var data = {
        id: this.user.id
      };
      // console.log("HandleDelete user.vue");
      this.$emit("deleteUser", data);
    }
  }
};
</script>

<style>
.user {
  position: relative;
}

.user .delete {
  position: absolute;
  top: 0;
  right: 0;
}
</style>