<template>
  <div>
  {{list}}
    <el-button  type='warning'>{{buttonName}}</el-button>
      <el-button type='danger'>按钮</el-button>
       <el-button  type='success'>按钮</el-button>
        <el-button  type='info'>按钮</el-button>
          <el-button type='primary'>按钮</el-button>
             <el-button @click="change" type='warning'>按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      buttonName: "点击按钮",
      list:''
    };
  },

  methods: {
    change() {
  		axios.get('https://www.xiangbomall.com:8081/api/produce/mainRollImages/1').then(res=>{
  		console.log(res)
  		this.list = res
  		})
    }
  }
};
</script>