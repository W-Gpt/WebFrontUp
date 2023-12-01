<template>
    <div>
      <tip v-for="memo in memos" :key="memo.title" :memo="memo" />
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import tip from '../../components/tip.vue';
  
  const memos = reactive([
    {
      title: '重要备忘录',
      content: '记得参加会议',
      date: '2023-12-01'
    },
    // 其他备忘录对象...
  ]);
  </script>
  
  <style>
  </style>