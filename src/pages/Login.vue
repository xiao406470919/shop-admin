<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="80px" class="form" :rules="rules">
      <el-form-item label="账号：" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      const data = {
        uname: this.form.username,
        upwd: this.form.password
      };
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$axios({
            url: "http://localhost:8899/admin/account/login",
            method: "post",
            data,
            withCredentials:true
          }).then(res => {
            console.log(res);
            const { message, status } = res.data;
            if (status == 0) {
              this.$router.push("/");
            }
            if (status == 1) {
              this.$message.error(message);
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.form-wrapper {
  width: 100%;
  background: #adf;
  position: absolute;
  top: 0;
  bottom: 0;
}
.form {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -95px;
}
</style>
