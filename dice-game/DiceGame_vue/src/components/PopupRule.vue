<template>
  <div class="wrapper-popup" v-bind:class="getClassPopup">
    <div class="rule">
      <h3>Luat choi</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus tempora asperiores deleniti minima quaerat, numquam autem commodi! Earum eius architecto distinctio officiis in, dolor voluptas ducimus facere minus culpa.</p>
      <button v-on:click="confirm" class="confirm">Okay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  props: { isOpenPopup: { type: Boolean, default: false } },
  data() {
    return {};
  },
  methods: {
    confirm() {
      console.log("confirm in popupvue");
      this.$emit("handleConfirm");
    }
  },
  computed: {
    getClassPopup: function() {
      return { "open-popup": this.isOpenPopup };
    }
  }
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
  transform: scale(1.2);
}

.rule {
  position: absolute;
  background: white;
  transform: scale(1.2);
  padding: 20px;
  font-family: arial;
  width: 400px;
}
.rule h3 {
  margin-bottom: 30px;
}
.confirm {
  margin-top: 30px;
  background-color: #fff;
  padding: 8px 15px;
  border: 2px solid #333;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.confirm:hover {
  background-color: lightgreen;
  color: white;
}
</style>