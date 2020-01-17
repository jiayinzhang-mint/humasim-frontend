<template>
  <v-app class="px-1">
    <h1>
      {{ $t(`links.timeline`) }}
    </h1>
    <section>
      <v-img
        contain
        max-width="250"
        max-height="250"
        aspect-ratio="1"
        src="/timeline.jpg"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
    <section>
      <h2>{{ $t(`timeline.chiefDesigner`) }}</h2>
      <div v-for="(item, i) in timeline.chiefDesigner" :key="`c-${i}`">
        <div class="timeline-wrapper">
          <div class="timeline-item">
            <p>
              {{ item.time }}
            </p>
          </div>
          <div class="timeline-item">
            <p>
              {{ $i18n.locale === 'en' ? item.enContent : item.content }}
            </p>
          </div>
        </div>
      </div>
      <h2>{{ $t(`timeline.awards`) }}</h2>
      <div v-for="(item, i) in timeline.awards" :key="`a-${i}`">
        <div class="timeline-wrapper">
          <div class="timeline-item">
            <p>
              {{ item.time }}
            </p>
          </div>
          <div class="timeline-item">
            <p>
              {{ $i18n.locale === 'en' ? item.enContent : item.content }}
            </p>
          </div>
        </div>
      </div>
      <h2>{{ $t(`timeline.exhibition`) }}</h2>
      <div v-for="(item, i) in timeline.exhibition" :key="`e-${i}`">
        <div class="timeline-wrapper">
          <div class="timeline-item">
            <p>
              {{ item.time }}
            </p>
          </div>
          <div class="timeline-item">
            <p>
              {{ $i18n.locale === 'en' ? item.enContent : item.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BasicService from '@/service/basicService';

@Component
export default class Index extends Vue {
  private timeline = {
    chiefDesigner: [],
    awards: [],
    exhibition: []
  };

  private async getTimeline() {
    this.timeline = await BasicService.getRequest(`/timeline.json`, {});
  }

  private mounted() {
    this.getTimeline();
  }
}
</script>
