<template>
<div id="app">
  <body>
    <div class="wrapper clearfix">
      <players
        v-bind:isWinner="isWinner"
        v-bind:scorePlayer="scorePlayer"
        v-bind:activePlayer="activePlayer"
        v-bind:currentScore="currentScore"
      />
      <controls
        v-bind:isPlaying="isPlaying"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
        v-bind:finalScore="finalScore"
        v-on:handleNewGame="handleNewGame"
        v-on:handleRollDice="handleRollDice"
        v-on:handleHoldScore="handleHoldScore"
      />
      <dices v-bind:dices="dices" />
      <popup-rule v-on:handleConfirm="handleConfirm" v-bind:isOpenPopup="isOpenPopup" />
    </div>
  </body>
</div>
</template>

<script>
import Players from "./components/Players.vue";
import Controls from "./components/Controls.vue";
import Dices from "./components/Dices.vue";
import PopupRule from "./components/PopupRule.vue";

export default {
  name: "app",

  data() {
    return {
      isOpenPopup: false,
      activePlayer: 1,
      scorePlayer: [13, 30],
      dices: [2, 5],
      currentScore: 0,
      isPlaying: false,
      finalScore: 30
    };
  },
  components: {
    Players,
    Controls,
    Dices,
    PopupRule
  },
  computed: {
    isWinner() {
      let { scorePlayer, finalScore } = this;
      if (scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore) {
        this.isPlaying = false;
        return true;
      }
      return false;
    }
  },
  methods: {
    handleChangeFinalScore(e) {
      var number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
      console.log(e.target);
    },
    handleHoldScore() {
      if (this.isPlaying) {
        let { scorePlayer, activePlayer, currentScore } = this;
        let scoreOld = scorePlayer[activePlayer];
        // let cloneScore = [...scorePlayer];

        // cloneScore[activePlayer] = scoreOld + currentScore;
        // this.scorePlayer = cloneScore;
        this.$set(this.scorePlayer, activePlayer, scoreOld + currentScore);
        if (!this.isWinner) {
          this.nextPlayer();
        }
      } else {
        alert("Vui long click New Game");
      }
    },
    nextPlayer() {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleRollDice() {
      console.log("roll App vue");
      if (this.isPlaying) {
        //xoay xuc xuc
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        this.dices = [dice1, dice2];

        if (dice1 === 1 || dice2 === 1) {
          setTimeout(() => {
            alert(`Player ${this.activePlayer + 1} da quay phai dice = 1`);
          }, 20);
          this.nextPlayer();
        } else {
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        alert("Vui long click New Game");
      }
    },
    handleConfirm() {
      console.log("hanlde confirm appvue");
      this.isPlaying = true;
      this.isOpenPopup = false;
      this.activePlayer = 0;
      this.scorePlayer = [0, 0];
      this.currentScore = 0;
      this.dices = [1, 1];
    },
    handleNewGame() {
      console.log("hanldeNe app vue");
      this.isOpenPopup = true;
    }
  }
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("/public/assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>