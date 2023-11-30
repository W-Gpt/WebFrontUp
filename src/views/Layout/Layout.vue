<template>
  <div class="common-layout">
    <el-container>
      <el-header id="HeaderBar">
        
<<<<<<< HEAD
        <headerBar>

        </headerBar>
      </el-header>
      <el-main id="MainBar">
        <router-view style="height: 92.3vh;"/>
=======
        <headerBar></headerBar>
      </el-header>
      <el-main id="MainBar">
        <router-views></router-views>
>>>>>>> b646921b2ea7c2dc95a3bf54f222d1057165b78f
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
#HeaderBar {
  padding: 0px;
}
<<<<<<< HEAD
#MainBar {
  padding: 0px;
  background-image: url('../../assets/img/1.jpg');
  background-size: cover;
}

=======
>>>>>>> b646921b2ea7c2dc95a3bf54f222d1057165b78f

</style>

<script setup>
import headerBar from "./Header.vue"
<<<<<<< HEAD
import {ref , onMounted} from 'vue'

=======
>>>>>>> b646921b2ea7c2dc95a3bf54f222d1057165b78f
// import mainBar from "./Main.vue"

</script>