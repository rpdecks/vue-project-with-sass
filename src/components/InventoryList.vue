<template>
  <div class="inventory-list">
    <img src="../assets/inventory.png" alt="" class="inventory-list__img" />
    <h1 class="inventory-list__header">
      Inventories
    </h1>
    <p class="inventory-list__header-desc">
      Build charts and lists to keep all your data in one convenient place
    </p>
    <button class="inventory-list__add-button">
      + Click to create a new inventory list
    </button>
    <div class="inventory-list__container">
      <p class="inventory-list__container-text">Current inventories list</p>
      <button class="inventory-list__container-delete">Delete all Lists</button>
      <div
        v-bind:key="item.list"
        v-for="item in inventoryList"
        class="inventory-list__container-item"
      >
        <InventoryListItem v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import InventoryListItem from "./InventoryListItem";

export default {
  name: "InventoryList",
  components: { InventoryListItem },
  props: ["inventoryList"]
};
</script>

<style lang="scss" scoped>
$font-color: rgb(17, 77, 113);
.inventory-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img {
    width: 10%;
    align-self: center;
  }

  &__header {
    font-size: 2rem;
    justify-self: center;
    color: $font-color;
  }

  &__header-desc {
    font-size: 0.5rem;
    margin-bottom: 1rem;
  }

  &__add-button {
    background-color: white;
    width: 100%;
    padding: 0.8rem;
    border: 1px solid black;
    border-color: rgb(203, 206, 219);
    color: $font-color;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &__container {
    width: 100%;
    display: grid;
    height: max-content;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "text btn"
      " row row";

    &-item {
      grid-area: row;
      width: 100%;
      border: 2px solid;
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 1rem;
      border-radius: 0.5rem;
      border: 2px solid rgb(17, 77, 113);
      border-color: $font-color;
    }

    &-delete {
      grid-area: btn;
      font-size: smallest;
      height: 1.5rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      align-self: end;
      justify-self: end;
      width: max-content;
      height: max-content;
    }
    &-text {
      grid-area: text;
      display: block;
      align-self: end;
      margin-bottom: 0.5rem;
      margin-left: 2rem;
      font-size: 1.2rem;
      color: $font-color;
      font-weight: 500;
    }
  }
}
</style>
