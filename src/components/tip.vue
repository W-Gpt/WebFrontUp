<template>
    <el-card class="memo-box" :shadow="true">
      <h2>{{ memo.title }}</h2>
      <p>{{ memo.content }}</p>
      <div class="date">{{ memo.date }}</div>
    </el-card>
  </template>
  
  <script>
  export default {
    props: {
      memo: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .memo-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .memo-box h2 {
    margin-top: 0;
  }
  
  .memo-box .date {
    margin-top: 10px;
    font-style: italic;
    color: #666;
  }
  </style>
  <!-- <template>
    <el-card class="memo-box" :body-style="{ padding: '20px' }" :shadow="true">
      <h2>{{ memo.title }}</h2>
      <p>{{ memo.content }}</p>
      <div class="date">{{ memo.date }}</div>
    </el-card>
  </template>
  
  <script>
  import { defineProps } from 'vue';
  
  export default {
    props: defineProps({
      memo: {
        type: Object,
        required: true
      }
    })
  }
  </script>
  
  <style scoped>
  .memo-box {
    border-radius: 8px;
    background-color: #fff;
  }
  </style> -->