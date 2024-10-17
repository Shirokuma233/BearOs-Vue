<script setup>
import { User, Lock, Flag} from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import { useAdminStore } from '@/stores/admin/admin.js';
import { useRouter } from 'vue-router';

const adminStore = useAdminStore()
const router = useRouter()

const data = reactive({
  name:"",
  password:""
})

const rules = {
  name: [
    {required: true, message: '请填写用户名', trigger: 'blur'}, 
    {min: 2, max: 10, message: '用户名长度为2-10个字符', trigger: 'blur'}
  ],
  password :[
    {required: true, message: '请填写密码', trigger: 'blur'}
  ]
}

const elFormRef = ref()

const login = () => {
  elFormRef.value.validate((valid, fields) => {
    if(!valid) {
      return
    }
    axios.post('http://127.0.0.1:8008/api/adm/login', data).then(response => {
      console.log("response.data:", response.data)

      if(!response.data.status) {
        ElMessage.error(response.data.msg)
        return
      }

      let token = response.data.data.token
      let [headerBase64, payloadBase64, sign] = token.split('.')
      let payload = atob(payloadBase64)
      let payloadObj = JSON.parse(payload)
      adminStore.save(payloadObj.name, token, payloadObj.expireDate)
      console.log("pinia:", adminStore.data)

      router.push("/admin")
    }).catch(err => {
      console.log("err:", err)
    })
  })
}
</script>

<template>
  <div class="login">
    <el-form :model="data" :rules="rules" ref="elFormRef">
      <div class="title">
        BearOs
      </div>

      <el-form-item prop="name">
        <el-input :prefix-icon="User" v-model="data.name"/>
      </el-form-item>

      <el-form-item prop="password">
        <el-input :prefix-icon="Lock" show-password v-model="data.password"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<style scoped>


.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login .el-form{
  width: 360px;
  height: 240px;
  background: #fff;
  box-shadow: 0px 0px 20px #0486cd;
}

.login .el-form .title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  height: 60px;
  font-weight: bold;
  color: #0486cd;
}

.login .el-form .el-form-item {
  margin-left: 30px;
  width: 300px;
}

.login .el-form .el-form-item .el-button {
  width: 300px;
}
</style>