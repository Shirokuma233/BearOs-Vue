<script setup>
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
import Axios from '@/utils/Axios';
import Time from '@/utils/Time';

const data = reactive({
  name: "",
  password: "",
  email: "",
  gender: "",
  remark: "",
})

const add = () => {
  if (data.name == "") {
    ElMessage.error("请填写用户名")
    return
  }

  if (data.id == "") {
    ElMessage.error("请填写学号")
    return
  }

  if (data.password == "") {
    ElMessage.error("请填写密码")
    return
  }

  data.create_time = Time.now()

  Axios.post("/api/adm/add", data).then(result => {
    console.log(result)

    if (!result.status) {
      ElMessage.error(result.msg)
      return
    }
  })

}


const reset = () => {
  data.name = ""
  data.password = ""
  data.email = ""
  data.gender = ""
  data.remark = ""
}

/*
<el-form-item label="学号">
      <el-input v-model="data.id" placeholder="请填写学号">
      </el-input>
    </el-form-item>
*/
</script>

<template>
  <el-form label-width="80px" style="width: 600px;">
    <el-form-item label="用户名">
      <el-input v-model="data.name" placeholder="请填写用户名">
      </el-input>
    </el-form-item>



    <el-form-item label="密码">
      <el-input v-model="data.password" show-password placeholder="请填写密码">
      </el-input>
    </el-form-item>

    <el-form-item label="邮箱">
      <el-input v-model="data.email" placeholder="请填写邮箱">
      </el-input>
    </el-form-item>

    <el-form-item label="备注">
      <el-input type="textarea" v-model="data.remark" placeholder="请填写备注" rows="4">
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="add" type="primary">
        添加
      </el-button>
      <el-button @click="reset" type="primary">
        重置
      </el-button>
    </el-form-item>
  </el-form>


</template>

<style scoped></style>