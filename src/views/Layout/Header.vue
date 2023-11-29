<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">菜单一</el-menu-item>
      <!-- <el-sub-menu index="2">
        <template #title>工作区</template>
        <el-menu-item index="2-1">项目1</el-menu-item>
        <el-menu-item index="2-2">项目2</el-menu-item>
        <el-menu-item index="2-3">项目3</el-menu-item> -->
        <!-- <el-sub-menu index="2-4">
          <template #title>项目4</template>
          <el-menu-item index="2-4-1">项目1</el-menu-item>
          <el-menu-item index="2-4-2">项目2</el-menu-item>
          <el-menu-item index="2-4-3">项目3</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>信息</el-menu-item> -->
      <el-menu-item index="4">菜单2</el-menu-item>
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