<template>
  <div class="common-layout">
    <el-container>
      <el-header id="HeaderBar">
        
        <headerBar>

        </headerBar>
      </el-header>
      <el-main id="MainBar">
        <router-view style="height: calc(100vh - 60px);"/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
#HeaderBar {
  padding: 0px;
}
#MainBar {
  padding: 0px;
  background-image: url('../../assets/img/1.jpg');
  background-size: cover;
  
}


</style>

<script setup>
import headerBar from "./Header.vue"
import {ref , onMounted} from 'vue'

// import mainBar from "./Main.vue"

</script>