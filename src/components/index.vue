<template>
  <div class="nav-wrap">
    <div class="nav-card" v-for="(item,index) in navList" :key="index" @click="handleClick(item)">
      <div class="nav-card-title">{{ item.title }}</div>
      <div class="nav-card-desc">{{ item.description }}</div>
    </div>
  </div>
</template>

<script setup>
import {navList} from './navList'

const handleClick = (item) => {
  open(item.url)
}
</script>
<style>
.nav-wrap {
  border-top: solid 2px #ebeef5;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.nav-card {
  padding: 15px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  cursor: pointer;
  transition: all .5s;
}

.nav-card:hover {
  border: 1px solid #409EFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.nav-card-title {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}

.nav-card-desc {
  max-width: 250px;
  word-wrap: break-word;
  margin-top: 10px;
  color: #909399;
}

.nav-card:hover .nav-card-title {
  color: #409EFF;
}

.nav-card:hover .nav-card-desc {
  color: #409EFF;
}
</style>
