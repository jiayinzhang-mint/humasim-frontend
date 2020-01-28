<template>
  <v-app>
    <h1 class="px-1">{{ $t(`links.news`) }}</h1>
    <section>
      <div v-for="(item, i) in newsList" :key="`n-${i}`">
        <v-skeleton-loader :loading="loading" type="image">
          <v-card
            tile
            :to="`${localePath('news')}/${item.id}`"
            flat
            color="transparent"
          >
            <v-container fluid class="pa-1">
              <h3 v-if="locale === `en`" class="work-title">
                {{ item.titleEn }}
              </h3>
              <h3 v-else class="work-title">{{ item.title }}</h3>
              <span>{{ item.createdAt | formatDate('yyyy/MM/dd') }}</span>
              <br />
              <span v-if="locale === `en`">{{ item.introEn }}</span>
              <span v-else>{{ item.intro }}</span>
              <!-- <nuxt-link
                :to="`${localePath('news')}/${item.id}`"
                style="font-size:14px"
                >{{ $t('news.learnMore') }}</nuxt-link
              > -->
            </v-container>
          </v-card>
        </v-skeleton-loader>
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
  private loading = true;

  private async getNewList() {
    try {
      this.loading = true;
      this.newsList = await NewsService.getNewsList();
      this.loading = false;
    } catch (_) {}
  }

  private get locale() {
    return this.$i18n.locale;
  }

  private mounted() {
    this.getNewList();
  }
}
</script>
