<template>
    <div class="chatroom-page">
        <h1>Welcome to the Chat Room</h1>
        <ChatContainer />
    </div>
</template>
  
<script>
import ChatContainer from '../components/chatContainer.vue';
export default {
    components: {
        ChatContainer,
    },
};
</script>
  
<style>
.chatroom-page {
    margin-top: 300px;
    width: 100%;
    height: 100%;
}
</style>