<template>
    <div class="chat-window">
        <MessageList :messages="messages" />
        <ChatInput @message-sent="fetchMessages" />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import MessageList from "../components/pages/Chat/MessageList.vue";
import ChatInput from "../components/pages/Chat/ChatInput.vue";

export default {
    name: "ChatPage",
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
.chat-window {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 400px;
    max-width: 80%;
}
</style>
    