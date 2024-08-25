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
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 700;
  font-size: small;
  height: 24px;
  background-color: Plum;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup>
import { ref, provide, watch } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Layout from '@/components/Layout.vue'
import Footer from '@/components/Footer.vue'

const activePage = ref('home')
provide('activePage', activePage)
</script>
