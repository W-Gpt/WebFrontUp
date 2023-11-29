<template>
  <div class="common-layout">
    <el-container>
      <el-header id="HeaderBar">
        
        <headerBar></headerBar>
      </el-header>
      <el-main id="MainBar">
        <router-views></router-views>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
#HeaderBar {
  padding: 0px;
}

</style>

<script setup>
import headerBar from "./Header.vue"
// import mainBar from "./Main.vue"

</script>