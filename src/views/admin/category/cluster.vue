<script setup>
import { reactive } from 'vue';

const data = reactive(
  [
    { nodeId: 1, nodeName: 'beargpu1', gpuType: 'a6000', gpuTotal: 8, gpuRemains: 8, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },
    { nodeId: 2, nodeName: 'beargpu2', gpuType: '3090', gpuTotal: 8, gpuRemains: 0, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },
    { nodeId: 3, nodeName: 'beargpu3', gpuType: '3090', gpuTotal: 8, gpuRemains: 0, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },
    { nodeId: 4, nodeName: 'beargpu4', gpuType: '3090', gpuTotal: 8, gpuRemains: 0, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },
    { nodeId: 5, nodeName: 'beargpu5', gpuType: '3090', gpuTotal: 8, gpuRemains: 0, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },
    { nodeId: 6, nodeName: 'beargpu6', gpuType: '3090', gpuTotal: 8, gpuRemains: 0, cpuTotal: 128, cpuRemains: 64, memoryTotal: 502, memoryRemains: 256, nodeStatus: "在线" },

  ])
</script>

<template>
  <div class="overview-container">
    <div class="overview-item">
      <div class="item-title">GPU总数</div>
      <div class="item-value">104</div>
      <div class="item-sub">71 已使用 / 33 剩余</div>
    </div>

    <div class="overview-item">
      <div class="item-title">CPU总数</div>
      <div class="item-value">2184</div>
      <div class="item-sub">500 已使用 / 1684 剩余</div>
    </div>

    <div class="overview-item">
      <div class="item-title">内存总数</div>
      <div class="item-value">7669GB</div>
      <div class="item-sub">3245GB 已使用 / 4424GB 剩余</div>
    </div>

    <div class="overview-item">
      <div class="item-title">集群任务总数（实验总数）</div>
      <div class="item-value">27</div>
    </div>
  </div>


  <div class="overview-cluster">
    <div class="overview-title">
      节点信息
    </div>
    <div class="overview-table">
      <el-table :data="data" border>
        <el-table-column prop="nodeId" label="节点编号" width="60" />
        <el-table-column prop="nodeName" label="主机名" />
        <el-table-column prop="gpuType" label="GPU类型" />
        <el-table-column prop="gpuTotal" label="GPU总数(卡)" />
        <el-table-column prop="gpuRemains" label="GPU剩余数(卡)" />
        <el-table-column prop="cpuTotal" label="CPU总数(核心)" />
        <el-table-column prop="cpuRemains" label="CPU剩余数(核心)" />
        <el-table-column prop="memoryTotal" label="内存总数(GB)" />
        <el-table-column prop="memoryRemains" label="内存剩余数(GB)" />
        <el-table-column prop="nodeStatus" label="节点状态" />


      </el-table>
    </div>

  </div>

</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.overview-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 2列 */
  grid-template-rows: repeat(2, 1fr);
  /* 2行 */
  width: 100%;
  /* 确保容器宽度 */
  box-sizing: border-box;
  /* 确保内边距和边框不会影响布局 */
}

.overview-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  /* 确保内边距和边框不会影响布局 */
  height: 147px;
  margin: 10px;
}

.item-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: large;
}

.item-value {
  font-size: large;
  margin-bottom: 10px;
  color: #40a9ff;
}

.item-sub {
  font-size: 16px;
  color: #666;
}

.overview-cluster {
  margin-top: 10px;
  display: flex;
  width: 100%;
  /* 确保容器宽度 */
  flex-direction: column;
  background-color: #efefef;
}

.overview-cluster .overview-title {
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: large;
  font-weight: bold;
  height: 30px;
}

.overview-cluster .overview-table {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>