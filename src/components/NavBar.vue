<template>
  <el-menu
    :default-active="activePage"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="home">Home</el-menu-item>
    <el-sub-menu index="1">
      <template #title>Menu</template>
      <el-menu-item index="d3_flow">D3 Animate Flow</el-menu-item>
    </el-sub-menu>
    
    <div class="dark-toggle"> 
      <el-button @click="toggleDark()" circle>
        <el-icon v-show="isDark==true"><Sunny /></el-icon>
        <el-icon v-show="isDark==false"><Moon /></el-icon>
      </el-button>
    </div>
  </el-menu>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu-item [class^=el-icon] {
  margin-right: 0px !important;
}

.dark-toggle {
  margin-right: 14px;
  margin-top: 14px;
}
</style>

<script setup>
import { ref, inject } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const activePage = inject('activePage')
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath)
  activePage.value = key;
}

</script>
