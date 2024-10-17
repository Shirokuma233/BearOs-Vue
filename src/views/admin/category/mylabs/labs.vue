<script setup>
import { reactive } from 'vue';

const props = defineProps({
  pageNum: Number,
  pageSize: Number,
  labs: Array,
})


</script>

<template>
  <div class="lab-table">
    <el-table :data="props.labs.slice((props.pageNum - 1) * props.pageSize, (props.pageNum - 1) * props.pageSize + props.pageSize)" border>
      <el-table-column prop="labName" label="实验名称" class="labName" width="150" />
      <el-table-column prop="labStatus" label="状态" class="labStatus" width="110" />
      <el-table-column prop="labCreateTime" label="创建时间" class="labCreateTime" width="180" />
      <el-table-column prop="labGpu" label="计算资源" class="labGpu" width="190">
        <template #default="scope">
          <el-tooltip placement="top" content="申请的资源类型,与后续申请相关" effect="light">
            <el-button link type="primary" > 
              <span v-for="gpu in scope.row.labGpu" class="gpu">{{ gpu }}</span>
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="labTotalTime" label="持续时间" class="labTotalTime" width="100" />
      <el-table-column prop="labRunningTime" label="已运行时长" class="labRunningTime" width="100" />
      <el-table-column prop="labEnvironment" label="环境" class="labEnvironment" width="80" />
      <el-table-column prop="labOperation" label="操作" class="labOperation" >
        <template #default="scope">
          <el-tooltip placement="top" content="ssh的相关内容" effect="light" trigger="click">
            <el-button link type="primary" > 
              SSH
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
/* 表格容器样式 */
.lab-table {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

/* 表格样式 */
.el-table {
  width: 100%;
  font-size: 14px;
}

/* 表格行样式 */
.el-table__row {
  transition: background-color 0.3s;
}

/* 表格行悬停样式 */
.el-table__row:hover {
  background-color: #f0f9eb;
}


</style>