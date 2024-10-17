<script setup>
import { Refresh } from '@element-plus/icons-vue';
import { ref, watch, reactive } from 'vue';
import Labs from './mylabs/labs.vue';

const task_select = ref("1")
const currentPageNum = ref(1)
const pageSize = ref(9)

const runningTask = reactive(
  [
    {
      labName: "for_design", labStatus: "正在创建", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
    {
      labName: "for_design", labStatus: "正在创建", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
    {
      labName: "for_design", labStatus: "正在创建", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
  ])

const finishedTask = reactive(
  [
    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },    {
      labName: "for_design", labStatus: "已完成", labCreateTime: "2024-10-16 18:30:57", labGpu: "1*Nvidia 3090(GPU)", labTotalTime: "48h", labRunningTime: "0h", labEnvironment: "pytorch:czq-ef91d-2.0.1-cuda11.7-cudnn8-devel-v2", labOperation: "根据status判断"
    },
  ])

let cur_labs = runningTask
watch(task_select, (newValue) => {
  if (newValue == "1") {
    cur_labs = runningTask
  }
  else if (newValue == "2") {
    cur_labs = finishedTask
  }
})
</script>

<template>
  <el-row>
    <el-col :span="12" class="task-title">
      <span>我的实验</span>
    </el-col>

    <el-col :span="12" class="task-refresh">
      <el-button type="primary">
        <el-icon>
          <Refresh />
        </el-icon>刷新镜像列表
      </el-button>
      <el-button type="primary">
        创建实验
      </el-button>
    </el-col>
  </el-row>

  <div class="task-list">
    <el-radio-group v-model="task_select">
      <el-radio value="1" size="large" border>当前任务</el-radio>
      <el-radio value="2" size="large" border>已完成任务</el-radio>
    </el-radio-group>
  </div>

  <!-- 子页面 -->
  <div class="task-page">
    <Labs :pageNum="currentPageNum" :pageSize="pageSize" :labs="cur_labs" />
  </div>

  <!-- 页码 -->
  <div class="demo-pagination-block">
    <el-pagination v-model:current-page="currentPageNum" v-model:page-size="pageSize" :page-sizes="[9, 18, 27]"
      :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
      :total="249" />
  </div>

</template>

<style scoped>
.el-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

/* 左侧标题样式 */
.task-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

/* 右侧刷新按钮样式 */
.task-refresh {
  display: flex;
  justify-content: flex-end;
}

.task-page {
  display: flex;
  margin: 20px;
}
</style>