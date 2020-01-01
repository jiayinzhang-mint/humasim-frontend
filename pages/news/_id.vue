<template>
  <div>
    <nuxt-link :to="localePath('news')">
      <h4 class="font-weight-black">{{ $t('news.backHome') }}</h4>
    </nuxt-link>
    <h2>{{ newsInfo.title }}</h2>
    <p v-html="newsInfo.content"></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { News } from '@/types/news';
import NewsService from '@/service/newsService';

@Component({})
export default class NewsSingle extends Vue {
  private newsInfo: News = new News();

  private async getNewsInfo() {
    try {
      this.newsInfo = await NewsService.getOneNews(this.$route.params.id);
    } catch (_) {}
  }

  private mounted() {
    this.getNewsInfo();
  }
}
</script>

<style scoped></style>
