<template>
  <div id="app">
    <ChatHeader />
    <ChatWindow />
    <ChatFooter />
  </div>
</template>

<script>
import ChatWindow from "./components/ChatWindow.vue";
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

<style scoped>

</style>
