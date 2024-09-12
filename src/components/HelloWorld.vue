
<template>
  <div id="news" class="container">
    <div class="row">
      <div v-for="item in result" class="newItem col-4" :style="{ backgroundImage: item.相關圖片.length > 0 ? `url(${item.相關圖片[0].url})` : '' }">
      
      <!-- <p class="text-light">{{item.內容}} </p>
      <p class="text-light">{{item.發布日期}} </p>
      <p class="text-light">{{ item.相關圖片.length > 0 ? item.相關圖片[0].url : 'No image available' }}</p> -->
          <!-- 仅在有图片时渲染 img 元素 -->
      <!-- <img v-if="item.相關圖片.length > 0" :src="item.相關圖片[0].url" alt="Image" /> -->
      <h4>{{item.title}}</h4>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
 
  </script>
  
 
  <style lang="scss" scoped>

  </style>
  
