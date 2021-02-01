import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import InventoryList from "@/components/InventoryList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "InventoryList",
      component: InventoryList
    }
  ]
});
