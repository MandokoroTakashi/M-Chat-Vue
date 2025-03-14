<template>
    <div class="message-list">
      <div v-for="message in messages" :key="message.id" class="message">
        <strong>{{ message.userId }}</strong>: {{ message.content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: Array,
    },
  };
  </script>
  
  <style scoped>
  .message-list {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-height: 300px;
    overflow-y: auto;
  }
  .message {
    padding: 5px;
    border-bottom: 1px solid #eee;
  }
  </style>
  