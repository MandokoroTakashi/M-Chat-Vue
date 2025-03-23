<template>
  <div id="app">
    <ChatHeader />
    <ChatWindow />
    <ChatFooter />
  </div>
</template>

<script>
import ChatWindow from "./components/pages/Chat/ChatWindow.vue";
import ChatHeader from "./components/parts/ChatHeader.vue";
import ChatFooter from "./components/parts/ChatFooter.vue";

export default {
  components: {
    ChatWindow,
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
