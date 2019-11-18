<template>
  <div class="register">
    <div class="header">
      <ul>
        <li>注册账号</li>
        <v-touch @tap="handleDl()" tag="a">登陆</v-touch>
      </ul>
    </div>
    <div class="main">
      <input type="text" placeholder="注册账号" class="input_name" v-model="name" />
      <input type="password" placeholder="注册密码" class="input_password" v-model="pwd" />
    </div>
    <div class="footer">
      <v-touch @tap="handleTap()" tag="a">注册</v-touch>
    </div>
    <div class="loglog">
      <div class="log"></div>
      <div class="log_2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { login, register } from "@api/qinggan";
export default {
  name: "register",
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    async handleTap() {
      if (this.name == "" || this.pwd == "") {
        alert("账号密码不能为空");
      } else {
        let data = await login(this.name);
        if (data.length) {
          alert("账号已注册");
          this.name="";
          this.pwd=""
        } else {
          await register(this.name, this.pwd);
          alert("注册成功");
          this.$router.push("/login");
        }
      }
    },
    handleDl() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  overflow: hidden;
}
.header {
  height: 0.8rem;
  padding: 0.3rem;
}
.header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header ul li {
  font-size: 0.16rem;
  color: #000;
}
.header ul a {
  color: #00b38a;
  font-size: 0.14rem;
}
.main {
  height: 1.5rem;
  position: unset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 0.1rem 0.3rem;
}
.main input {
  height: 0.5rem;
  font-size: 0.14rem;
  border: 0;
  border-bottom: 1px solid #ccc;
}
.footer {
  padding: 0.1rem 0.3rem;
}
.footer a {
  display: block;
  color: #fff;
  height: 0.4rem;
  background: #c33;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.16rem;
  border-radius: 0.05rem;
}
.loglog {
  position: relative;
  overflow: hidden;
}
.log {
  background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_logo_f90f028.png)
    no-repeat center;
  background-size: 1.6rem 0.4rem;
  width: 100%;
  height: 1rem;
  position: absolute;
}
.log_2 {
  height: 2.94rem;
  background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_bg_2b1fa03.png)
    no-repeat center;
  background-size: cover;
}
</style>