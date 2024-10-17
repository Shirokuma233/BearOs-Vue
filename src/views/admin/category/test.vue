<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import CategoryApi from '@/api/CategoryApi';

//数据
const data = reactive({
  path: [],
  list: []
})

const route = useRoute()

onMounted(() => {

  CategoryApi.getListByParentId(route.query.parent_id).then(result => {
    console.log(result)

    if (!result.status) {
      ElMessage.error(result.msg)
      return
    }

    data.path = result.data.path
    data.list = result.data.list
  }).catch(err => {
    console.log("err:", err)
  })
})

const del = async (row) => {
  console.log(row.id)

  try {
    await ElMessageBox.confirm('确认删除?', '标题', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })

    //删除
    //let delResult = await Axios.post('/api/adm/del',{id: String(row.id)})
    let delResult = await CategoryApi.del(String(row.id))
    if (!delResult.status) {
      ElMessage.error(delResult.msg)
      return
    }

    //重新获取列表
    let getListResult = await CategoryApi.getListByParentId(route.query.parent_id)
    if (!getListResult.status) {
      ElMessage.error(getListResult.msg)
      return
    }


    data.list = getListResult.data.list //重置
  } catch (err) {
    console.log("err", err)

  }
}

</script>

<template>
  <!-- 面包屑
    <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="#"><el-icon><House /></el-icon></a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">类别</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">前端</a></el-breadcrumb-item>
    </el-breadcrumb>
    -->
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <a href="/admin/category/test?parent_id=0"><el-icon>
          <House />
        </el-icon></a>
    </el-breadcrumb-item>

    <el-breadcrumb-item v-for="value in data.path" :key="value.id">
      <a :href="`/admin/category/test?parent_id=${value.id}`">{{ value.name }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>

  <!-- 按钮 -->
  <el-button type="primary">添加类别</el-button>

  <!-- 表格 -->
  <el-table :data="data.list" border>
    <el-table-column prop="id" label="ID" width="80" />
    <!-- <el-table-column prop="name" label="名称"/> -->
    <el-table-column prop="name" label="名称">
      <template #default="scope">
        <a :href="`/admin/category/test?parent_id=${scope.row.id}`" class="blue">{{ scope.row.name }}</a>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="status" label="状态" width="80" /> -->
    <el-table-column prop="status" label="状态" width="80">
      <template #default="scope">
        <span v-if="scope.row.status === '1'" class="green">显示</span>
        <span v-else class="orange">隐藏</span>
      </template>
    </el-table-column>
    <el-table-column prop="create_time" label="日期" width="200" />

    <el-table-column label="操作" width="150">
      <template #default="scope">
        <el-button size="small" type="primary">编辑</el-button>
        <el-button size="small" @click="del(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped></style>