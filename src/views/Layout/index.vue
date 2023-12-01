<!-- src/components/Chat.vue -->

<template>
    <div class="chat-container">
      <div class="message-list">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.isUser }">
          {{ message.text }}
        </div>
      </div>
      <div class="input-container">
        <el-input v-model="newMessage" @keyup.enter="sendMessage" placeholder="在这里输入消息..." />
        <el-button @click="sendMessage">发送</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({ text: this.newMessage, isUser: true });
          // In a real app, you would send the message to a server or another component.
          // For simplicity, we just add it to the messages array here.
          this.newMessage = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .chat-container {
    
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .message-list {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .message {
    background-color: #e0e0e0;
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  
  .user-message {
    align-self: flex-end;
    background-color: #4caf50;
    color: #fff;
  }
  
  .input-container {
    display: flex;
    padding: 10px;
  }
  
  input {
    flex: 1;
    padding: 8px;
    margin-right: 10px;
  }
  
  button {
    padding: 8px;
    cursor: pointer;
  }
  </style>
  