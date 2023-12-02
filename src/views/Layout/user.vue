<template>
    <div>
    <el-card class="box-card">
          <template #header>
          <div class="card-header">
            <span>角色卡 : 管理员</span>
            <el-button class="button" text>操作按钮</el-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ '权限词条 ' + o }}</div>
        <template #footer>Footer content</template>
        </el-card>
    </div>
  </template>
  
  <style scoped>
  *{
    overflow: hidden;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 480px;
    margin-top: 20px;
    margin-left: 20px;
  }
  </style>