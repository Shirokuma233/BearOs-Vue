<script setup>
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
import Axios from '@/utils/Axios';
import Time from '@/utils/Time';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute()
const router = useRouter()
let id = route.query.id

const data = reactive({
  name: "",
  password: "",
  email: "",
  gender: "",
  remark: "",
})

onMounted(() => {
    //获取当前记录
    Axios.get(`/api/adm/getById?id=${id}`).then(result => {
      console.log(result)

      if (!result.status) {
        ElMessage.error(result.msg)
        return
      }

      data.name = result.data.name
      data.email = result.data.email
      data.gender = String(result.data.gender)
      data.remark = result.data.remark
    }).catch(err => {
      console.log("err:", err)
    })
  })

const edit = () => {
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

  data.id = id
  Axios.post("/api/adm/edit", data).then(result => {
    console.log(result)

    if (!result.status) {
      ElMessage.error(result.msg)
      return
    }

    ElMessage.success("编辑成功")
  }).catch(err => {
    console.log("err:", err)
  })

}


const back = () => {
  router.go(-1)
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
      <el-button @click="edit" type="primary">
        修改
      </el-button>
      <el-button @click="back" type="primary">
        返回
      </el-button>
    </el-form-item>
  </el-form>


</template>

<style scoped></style>