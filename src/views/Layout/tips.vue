<template>
    <div>
      <tip v-for="memo in memos" :key="memo.id" :tipsid="memo.id" :tipslevel="memo.level" :tipstype="memo.type" :tipsthings="memo.things" />
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import tip from '../../components/tip.vue';
  import request from '../../js/request';
  export default {
    components: {
      tip
    },
    data(){
      return {
        memos:[]
      }
    },
    methods:{
      fetchData() {
      request.get('/tip/queryAll')
        .then(response => {
          this.memos = response;
          console.log(this.memos[0].id);
        })
        .catch(error => {
          this.error = error.message || '发生了一个错误。';
        })
        .finally(() => {
          this.loading = false;
        });
      }
    },
    created(){
      this.fetchData()
    }
  }
  
  // const memos = reactive([
  //   {
  //     title: '重要备忘录',
  //     content: '记得参加会议',
  //     date: '2023-12-01'
  //   },
  //   // 其他备忘录对象...
  // ]);
  </script>
  
  <style>
  </style>
