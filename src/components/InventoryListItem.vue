<template>
  <div class="inventory-item__container">
    <h3 class="inventory-item__title">
      {{ item.title }}
    </h3>
    <p class="inventory-item__desc">{{ item.desc }}</p>
    <p>{{ item.category }}</p>
    <button class="inventory-item__edit-btn"></button>
    <button class="inventory-item__del-btn"></button>
  </div>
</template>

<script>
export default {
  name: "InventoryListItem",
  props: ["item"]
};
</script>

<style lang="scss" scoped></style>
