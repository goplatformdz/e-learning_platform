<template>
    <div class="card">
        <div class="chat-header">Chat</div>
        <div class="chat-window">
            <ul class="message-list">
                <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
            </ul>
        </div>
        <div class="chat-input">
            <input type="text" class="message-input" placeholder="Type your message here" v-model="messageInput"
                @keyup.enter="sendMessage">
            <button class="send-button" @click="sendMessage">Send</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            messageInput: '',
            messages: [],
        };
    },
    methods: {
        sendMessage() {
            if (this.messageInput.trim() !== '') {
                this.messages.push(this.messageInput);
                this.messageInput = ''; // Clear the input field
            }
        },
    },
};
</script>
  
<style scoped>
.card {
    width: 260px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.chat-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.chat-window {
    height: 220px;
    overflow-y: scroll;
}

.message-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
}

.message-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 14px;
}

.send-button {
    border: none;
    outline: none;
    background-color: #333;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
}

.send-button:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}
</style>
  