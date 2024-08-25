<template>
  <Home v-if="activePage=='home'"/>
  <D3Flow v-if="activePage=='d3_flow'"/>
</template>

<script setup>
import { ref, inject, watch } from 'vue'
import Home from '@/components/Home.vue'
import D3Flow from '@/components/D3Flow.vue'

const activePage = inject('activePage')
watch(activePage, (newVal)=>{
  // console.log('activePage', newVal)
})
</script>