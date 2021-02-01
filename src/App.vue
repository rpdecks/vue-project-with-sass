<template>
  <div id="app">
    <div class="side-nav">side</div>
    <div class="top-nav">top</div>
    <div class="main-container">
      <InventoryList v-bind:inventoryList="inventoryList" />
    </div>
  </div>
</template>

<script>
import InventoryList from "./components/InventoryList";

export default {
  name: "App",
  components: { InventoryList },
  data() {
    return {
      inventoryList: [
        {
          id: 0,
          title: "Example Inventory Title",
          desc: "This is an example of...",
          category: "SOC 2 Template",
          date: new Date().toLocaleDateString()
        },
        {
          id: 1,
          title: "Example Inventory Title",
          desc: "This is an example of...",
          category: "SOC 2 Template",
          date: new Date().toLocaleDateString()
        },
        {
          id: 2,
          title: "Example Inventory Title",
          desc: "This is an example of...",
          category: "SOC 2 Template",
          date: new Date().toLocaleDateString()
        }
      ]
    };
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

#app {
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-columns: 10vw 90vw;
  grid-template-areas:
    "side top"
    "side main";
}

.top-nav {
  grid-area: top;
  height: 10vh;
}

.side-nav {
  grid-area: side;
  height: 100vh;
}

.main-container {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-self: center;
}
</style>
