<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/LatestNews">最新消息</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $themeColor6;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: $themeColor6;
}

nav a.router-link-exact-active {
  color: $themeColor3;
}

</style>
