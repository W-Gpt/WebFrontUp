<template>
    <!-- 导航栏 -->
    <el-menu 
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="dashboard">聊天UI</el-menu-item>
      <el-menu-item index="2">物品界面</el-menu-item>
      <el-menu-item index="3">交易界面</el-menu-item>
      <el-menu-item index="tips">备忘录</el-menu-item>
      <el-menu-item index="update">更新日志</el-menu-item>
      <!-- 头像 -->
      <div class="avatar-container">
        
        <el-dropdown>
          <img
        src="../../assets/img/wtw.jpeg"
        alt="User Avatar"
        class="header-avatar"
      />
      <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goToUser()" class="clearfix">
          
          个人中心
          <el-badge class="mark" :value="1" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          退出登录
          <el-badge class="mark" :value="1" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
  
    <!-- 头像结尾 -->
      
    </el-menu>
    
   </template>
   
   <script lang="ts" setup>
   import { ref } from 'vue'
   import router from '../../router';

   const activeIndex = ref('1')
   const activeIndex2 = ref('1')
   const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
   }
   function goToUser(){
    router.push({path:'/user'})
    console.log("go to user")
   }
   
   </script>



   <style scoped>
   .avatar-container{
    /* margin-left: 125vh; */
    /* margin-right: 25%; */
    margin-left: 95%;
    position: absolute;
    /* margin-left: 20%; */
    float: right;
   }
  .header-avatar {
  display: flex;
  justify-content: center;
  width: 60px; /* 调整头像大小 */
  height: 60px;
  border-radius: 50%; /* 圆形头像 */
  border-radius: 4px;
  
}
</style>