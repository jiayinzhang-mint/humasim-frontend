<template>
  <v-app>
    <h1>{{ $t(`links.news`) }}</h1>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { News } from '@/types/news';
import NewsService from '@/service/newsService';

@Component
export default class Index extends Vue {
  private newsList: News[] = [];

  private async getNewList() {
    try {
      this.newsList = await NewsService.getNewsList();
    } catch (_) {}
  }

  private mounted() {
    this.getNewList();
  }
}
</script>
