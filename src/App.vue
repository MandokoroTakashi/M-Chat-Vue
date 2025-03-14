<template>
  <div id="app">
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from "./components/ChatWindow.vue";

export default {
  components: {
    ChatWindow,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>
