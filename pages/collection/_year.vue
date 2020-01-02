<template>
  <v-app>
    <h1>{{ $t(`links.collection`) }}</h1>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Work } from '@/types/work';
import WorkService from '@/service/workService';

@Component
export default class CollectionSingle extends Vue {
  private workList: Work[] = [];

  private async getWorkList() {
    this.workList = await WorkService.getWorkList(this.year);
  }

  private get year() {
    return this.$route.params.year;
  }

  private mounted() {
    this.getWorkList();
  }
}
</script>

<style scoped></style>
