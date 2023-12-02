<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
<<<<<<< HEAD
      router="true"
    >
      <el-menu-item index="dashboard">聊天UI</el-menu-item>
      <el-menu-item index="2">物品界面</el-menu-item>
      <el-menu-item index="3">交易界面</el-menu-item>
      <el-menu-item index="4">管理界面</el-menu-item>
      <el-menu-item index="tips">备忘录</el-menu-item>
      <el-menu-item index="update">更新日志</el-menu-item>
=======
<<<<<<< HEAD
      router="true"
    >
      <el-menu-item index="dashboard">聊天UI</el-menu-item>
      <el-menu-item index="2">物品界面</el-menu-item>
      <el-menu-item index="3">交易界面</el-menu-item>
      <el-menu-item index="4">管理界面</el-menu-item>
      <el-menu-item index="tips">备忘录</el-menu-item>
      
=======
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
>>>>>>> b646921b2ea7c2dc95a3bf54f222d1057165b78f
>>>>>>> c129dc5faae2d1cfbf2c0fd35567d69b21cce378
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