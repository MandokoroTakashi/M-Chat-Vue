<template>
  <div id="app">
    <ChatHeader />
    <div class="main">
      <router-view />
    </div>
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

 .main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    flex: 1;
    background-color: #f4f4f4;
}
</style>
