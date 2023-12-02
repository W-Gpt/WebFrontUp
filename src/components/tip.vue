<template>
    <el-card class="memo-box" :shadow="true">
      <p>{{ tipsid }}</p>
      <h2>{{ tipstype }}</h2>
      <p>{{ tipslevel }}</p>
      <div class="date">{{ tipsthings }}</div>
    </el-card>
  </template>
  
  <script>
  export default {
    props: {
      tipsid: Number,
      tipstype: String,
      tipslevel: String,
      tipsthings: String
    }
  }
  </script>
  
  <style>
  .memo-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .memo-box h2 {
    margin-top: 0;
  }
  
  .memo-box .date {
    margin-top: 10px;
    font-style: italic;
    color: #666;
  }
  </style>
