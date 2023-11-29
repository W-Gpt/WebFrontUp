<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="dashboard">聊天UI</el-menu-item>
      <el-menu-item index="2">物品界面</el-menu-item>
      <el-menu-item index="3">交易界面</el-menu-item>
      <el-menu-item index="4">管理界面</el-menu-item>
      <el-menu-item index="tips">备忘录</el-menu-item>
      
    </el-menu>
   </template>
   
   <script lang="ts" setup>
   import { ref } from 'vue'
   
   const activeIndex = ref('1')
   const activeIndex2 = ref('1')
   const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
   }
   </script>