<template>
  <div class="home">
    <news></news>
    <hr />
    <events></events>
    <announcements></announcements>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import news from "@/components/news.vue";
import events from "@/components/events.vue";
import announcements from "@/components/announcements.vue";

export default {
  name: "LatestNew",
  components: {
    news,
    events,
    announcements,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

hr {
  border-top: 10px dashed $themeColor6;
}
</style>
