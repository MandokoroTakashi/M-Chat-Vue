<template>
  <div class="main">
    <div class="chat-window">
      <MessageList :messages="messages" />
      <ChatInput @message-sent="fetchMessages" />
    </div>
  </div>
</template>
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import MessageList from "./MessageList.vue";
  import ChatInput from "./ChatInput.vue";
  
  export default {
    components: { MessageList, ChatInput },
    setup() {
      const messages = ref([]);
  
      const fetchMessages = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/messages");
          messages.value = response.data;
        } catch (error) {
          console.error("メッセージ取得エラー:", error);
        }
      };
  
      onMounted(fetchMessages); // 初回ロード時にメッセージ取得
  
      return {
        messages,
        fetchMessages,
      };
    },
  };
  </script>
  
  <style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  .chat-window {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  </style>
  