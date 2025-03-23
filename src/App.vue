<template>
  <div id="app">
    <ChatHeader />
    <router-view />
    <ChatFooter />
  </div>
</template>

<script>
import ChatHeader from "./components/parts/ChatHeader.vue";
import ChatFooter from "./components/parts/ChatFooter.vue";

export default {
  components: {
    ChatHeader,
    ChatFooter,
  },
};
</script>

<style>
 body, html {
  margin: 0;
  height: 100%;
 }

 #app {
  display: flex;
  height: 100%;
  flex-direction: column;
 }
</style>
