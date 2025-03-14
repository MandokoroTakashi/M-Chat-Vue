<template>
    <div class="chat-input">
      <input
        v-model="message"
        type="text"
        placeholder="メッセージを入力..."
        @keydown.enter="sendMessage"
      />
      <button @click="sendMessage">送信</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        message: "",
      };
    },
    methods: {
      async sendMessage() {
        if (this.message.trim() !== "") {
          try {
            const userId = 1;
            await axios.post("http://localhost:8080/api/messages", {
              userId: userId,
              content: this.message,
            });
  
            this.message = ""; // 入力欄をクリア
            this.$emit("message-sent"); // 親コンポーネントの fetchMessages を実行
          } catch (error) {
            console.error("Error sending message:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-input {
    display: flex;
    gap: 10px;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  
  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  