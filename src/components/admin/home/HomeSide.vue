<script setup>

</script>

<template>
  <div class="side">
    <el-menu router text-color="#000" active-text-color="#40a9ff">
      <el-menu-item index="/admin/category/cluster">
         集群概览 
      </el-menu-item>

      <el-menu-item index="/admin/category/environment">
         实验环境
      </el-menu-item>

      <el-menu-item index="/admin/category/mylab">
         我的实验
      </el-menu-item>

      <el-menu-item index="/admin/category/myfile">
         我的文件
      </el-menu-item>

      <el-menu-item index="/admin/category/share">
         共享空间
      </el-menu-item>

      <el-menu-item index="/admin/category/dataset">
         平台数据集
      </el-menu-item>

      <el-sub-menu index="admin">
        <template #title>
          <el-icon>
            <UserFilled />
          </el-icon> 管理用户
        </template>
        <el-menu-item index="/admin/administrator/add">添加用户</el-menu-item>
        <el-menu-item index="/admin/administrator/list">用户列表</el-menu-item>
      </el-sub-menu>


    </el-menu>
  </div>
</template>

<style scoped></style>