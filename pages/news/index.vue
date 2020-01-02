<template>
  <v-app>
    <h1>{{ $t(`links.news`) }}</h1>
    <section>
      <div v-for="(item, i) in newsList" :key="`n-${i}`">
        <v-card flat color="transparent">
          <h3>{{ item.title }}</h3>
          <span>{{ item.createTime }}</span>
          <p>{{ item.intro }}</p>
          <nuxt-link
            style="font-size:14px"
            :to="`${localePath('news')}/${item.id}`"
            >{{ $t('news.learnMore') }}</nuxt-link
          >
        </v-card>
        <hr />
      </div>
    </section>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { News } from '@/types/news';
import NewsService from '@/service/newsService';

@Component
export default class NewsIndex extends Vue {
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
