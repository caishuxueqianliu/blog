(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{679:function(e,s,o){"use strict";o.r(s);var t=o(25),l=o.n(t),i={data:function(){return{fileList:[],errMsg:"",isLoading:!1}},methods:{test1:function(){console.log(this.$refs.file.files[0]);var e=new FormData;e.append("file",this.$refs.file.files[0]),l.a.post("http://192.168.101.12:8081/upload_md",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},test2:function(){var e=this;this.isLoading=!0,l.a.post("http://106.14.40.150:8081/build").then((function(s){if(conosle.log(s),s.code)return e.isLoading=!1,e.errMsg=s.errMsg,void e.$message({showClose:!0,message:"build失败",type:"danger"});"0"==s.code&&(e.isLoading=!1,e.$message({showClose:!0,message:"build成功,请刷新页面!",type:"success"}))})).catch((function(e){console.log(e)}))},beforeUpload:function(e){console.log(e)},submitUpload:function(){var e=this,s=this.$refs.upload.uploadFiles[0].raw;(new FormData).append("file",s),l.a.post("http://106.14.40.150:8081/upload_md").then((function(s){e.$message({showClose:!0,message:"上传成功，可进行build",type:"success"})})).catch((function(s){e.$message({showClose:!0,message:"上传失败",type:"danger"}),console.log(s)}))},handleRemove:function(e,s){console.log(e,s)},handlePreview:function(e){console.log(e)}}},n=o(3),a=Object(n.a)(i,(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[e._m(0),e._v(" "),o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{limit:1,action:"","before-upload":e.beforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"}},[e._v("build")]),e._v("\n      "+e._s(e.errMsg)+"\n      "),o("p",[e._v("由于自己服务器性能略低，build会导致内存泄露，此想法暂时搁置")])],1)}),[function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[o("p",[e._v("一个小想法")]),e._v(" "),o("p",[e._v("  1.前端上传md文件")]),e._v(" "),o("p",[e._v("  2.后台拿到文件拷贝到前端项目的指定目录")]),e._v(" "),o("p",[e._v("  3.Python脚本 build前端项目")]),e._v(" "),o("p",[e._v(" 未完成 需要优化的地方")]),e._v(" "),o("p",[e._v("  1.build的目录和部署的目录不要是同一个，build完在拷贝过去，因为build期间会删除代码，导致线上出问题")]),e._v(" "),o("p",[e._v("  2.通过websocket 实时显示node后台编译的命令行数据")]),e._v(" "),o("p",[e._v("  3.读取重写上传的文件，修改md的tags和categories")])])}],!1,null,"261d48d1",null);s.default=a.exports}}]);