<template>
    <div>
        <div>
        <p>一个小想法</p>
        <p>  1.前端上传md文件</p>
        <p>  2.后台拿到文件拷贝到前端项目的指定目录</p>
        <p>  3.Python脚本 build前端项目</p>
        <p> 未完成 需要优化的地方</p>
        <p>  1.build的目录和部署的目录不要是同一个，build完在拷贝过去，因为build期间会删除代码，导致线上出问题</p>
        <p>  2.通过websocket 实时显示node后台编译的命令行数据</p>
        <p>  3.读取重写上传的文件，修改md的tags和categories</p>
        </div>
        <el-upload
                class="upload-demo"
                ref="upload"     
                :limit="1"
                action=''
                :before-upload="beforeUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <!-- <el-button type="primary" @click='test1()'>upload</el-button> -->
         <el-button type="primary" v-loading.fullscreen.lock="isLoading" >build</el-button>
          {{errMsg}}
          <p>由于自己服务器性能略低，build会导致内存泄露，此想法暂时搁置</p>
         <!-- <input type="file" ref='file'/> -->
    </div>
      </template>
        <script>
          import axios from 'axios'
          export default {
            data() {
              return {
                fileList: [],
                errMsg:'',
                isLoading:false
              }
            },
            methods: {
              test1(){
                console.log(this.$refs.file.files[0])
                let formData = new FormData()
                formData.append('file',this.$refs.file.files[0])
                
                axios.post('http://192.168.101.12:8081/upload_md',formData).then(res=>{
                  console.log(res)
                }).catch(err=>{
                 console.log(err)
               })
              },
                 test2(){
                     this.isLoading = true;
                axios.post('http://106.14.40.150:8081/build').then(res=>{
              // axios.post('http://192.168.101.12:8081/build').then(res=>{ 
                  conosle.log(res)
                 if(res.code){
                    this.isLoading = false
                   this.errMsg = res.errMsg
                     this.$message({
                      showClose: true,
                      message: 'build失败',
                      type: 'danger'
                     });
                   return
                 }else if(res.code == '0'){
                   this.isLoading = false
                    this.$message({
                     showClose: true,
                     message: 'build成功,请刷新页面!',
                     type: 'success'
                   });
                 }
                }).catch(err=>{
                 console.log(err)
               })
              },
              beforeUpload(file){
                console.log(file)
             },
              submitUpload() {
               // this.$refs.upload.submit();
               let file = this.$refs.upload.uploadFiles[0].raw
               let formData = new FormData()
               formData.append('file',file)
                axios.post('http://106.14.40.150:8081/upload_md').then(res=>{
               // axios.post('http://192.168.101.12:8081/upload_md',formData).then(res=>{
                  this.$message({
                     showClose: true,
                     message: '上传成功，可进行build',
                     type: 'success'
                   });
                }).catch(err=>{
                   this.$message({
                      showClose: true,
                      message: '上传失败',
                      type: 'danger'
                     });
                 console.log(err)
               })
              },
              handleRemove(file, fileList) {
                console.log(file, fileList);
              },
              handlePreview(file) {
                console.log(file);
              }
            }
          }
        </script>


<style scoped>

</style>
