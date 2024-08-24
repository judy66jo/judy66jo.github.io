<template>
  <el-container class="content">
    <el-header><NavBar /></el-header>
    <el-main><Layout /></el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>

<style scoped>
.content {
  min-height: 100vh;
}

.el-header {
  padding: 0px !important;
}

.el-footer {
  height: 40px;
  background-color: var(--el-border-color);
  display: flex;
  align-items: center;
}
</style>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Layout from '@/components/Layout.vue'
import Footer from '@/components/Footer.vue'
</script>
