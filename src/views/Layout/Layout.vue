<template>
  <div class="common-layout">
    <el-container>
      <el-header id="HeaderBar">
        
        <headerBar>

        </headerBar>
      </el-header>
      <el-main id="MainBar">
<<<<<<< HEAD
        <router-view style="height: 93.8vh;"/>
=======
        <router-view style="height: 92.3vh;"/>
>>>>>>> c129dc5faae2d1cfbf2c0fd35567d69b21cce378
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
<<<<<<< HEAD
  
=======
>>>>>>> c129dc5faae2d1cfbf2c0fd35567d69b21cce378
}


</style>

<script setup>
import headerBar from "./Header.vue"
import {ref , onMounted} from 'vue'

// import mainBar from "./Main.vue"

</script>