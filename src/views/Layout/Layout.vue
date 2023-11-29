<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="height: 100vh;background-color: red;">
		  <sider></sider>
	  </el-aside>
      <el-container>
        <el-header style="background-color: blue;">Header</el-header>
        <el-main style="background-color: green;">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import sider from './sider.vue'
</script>

<style scoped>
	

</style>
