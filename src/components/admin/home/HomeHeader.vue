<script setup>
import { useAdminStore } from '@/stores/admin/admin';
import { ArrowDown } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const adminStore = useAdminStore()
const router = useRouter()

const logout = () => {
  localStorage.removeItem("admin")

  router.push("/login")
}
</script>

<template>

  <div class="header">
    <div class="title">
        <a href="/admin">BearOs</a>
    </div>

    <div class="admin">
      <el-dropdown trigger="click">
        <span class="el-dropdown-admin">
          {{ adminStore.data.name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<style scoped>
/*  .header */
.header {
  display: flex;
  height: 55px;
  background: #fff;
}

.header .title {
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  background: #fff;
  
}

.header .title a {
  color: rgb(11, 153, 201);
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}


.header .admin {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  flex: 1;
}

.header .admin .el-dropdown .el-dropdown-admin {
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
}
</style>
