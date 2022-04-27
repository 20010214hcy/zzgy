<template>
  <div id="app">
   <el-container>
<!--头部导航栏部分-->
     <el-header>
       <div class="logo">
        <img src="./assets/toplogo.png" alt="">
       </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="router"
        >

          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="/brief">
            <template slot="title">关于耕耘</template>
            <el-menu-item index="/brief">公司简介</el-menu-item>
            <el-menu-item index="/group">集团资质</el-menu-item>
            <el-menu-item index="/aptitude">资质证书</el-menu-item>
          </el-submenu>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-menu-item index="/trends">行业动态</el-menu-item>
          <el-menu-item index="/invite">人才招聘</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
     </el-header>
<!--主要内容-->
     <el-main>
       <router-view/>
     </el-main>
<!--底部内容-->
     <el-footer>

     </el-footer>
   </el-container>
  </div>
</template>

<script>
export default{
  data(){
    return{
      router:true,
      activeIndex:'/'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 300px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}

.el-main{
  padding: 0;
  margin: 0;
}
</style>
