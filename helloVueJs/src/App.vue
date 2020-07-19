<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Hoc lap trinh VueJS'">Thay doi title tu componet app.vue</button>
      <comp-header v-on:changeTitleEvent="handleChangeTitle" v-bind:titleHeader="title" />
      <list-user v-bind:listUser="listUser" v-on:deleteUserEvent="handleDeleteUser" />
      <comp-footer v-bind:titleFooter="title" />
      <demoRef />
      <demo-slot>
        <div class="app-slot">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, pariatur consectetur! Provident dolorum sint quia non impedit quibusdam odio, unde quasi sequi dicta? Doloribus quidem veritatis magni incidunt illum natus.</p>
        </div>
      </demo-slot>
    </div>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from "./components/ListUser.vue";
import DemoRef from "./components/DemoRef.vue";
import DemoSlot from "./components/DemoSlot.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Hello Vuejs - Header",
      listUser: [
        { id: 100, email: "test1@gmail.com", active: true },
        { id: 101, email: "test2@gmail.com", active: true },
        { id: 102, email: "test3@gmail.com", active: true },
        { id: 103, email: "test4@gmail.com", active: true }
      ]
    };
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot
  },

  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
      // console.log("handle change title App.vue", data);
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idX) => {
        // console.log(u.id, idX, data.id);

        if (u.id === data.id) {
          indexDelete = idX;
        }
      });
      if (indexDelete != -1) {
        this.listUser.splice(indexDelete, 1);
      }
      // console.log("handleDeleteUser trong app.vue", data);
    }
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
