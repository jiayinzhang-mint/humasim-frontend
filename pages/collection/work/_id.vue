<template>
  <div>
    <nuxt-link :to="`${localePath('collection')}/${work.year}`">
      <h4 class="text-link font-weight-black">
        {{ $t('collection.backHome') }}
      </h4>
    </nuxt-link>
    <h2>{{ work.title }}</h2>
    <h4>{{ $t('collection.client') }} {{ work.client }}</h4>
    <h4 v-if="work.collaborator">
      {{ $t('collection.collaborator') }} {{ work.collaborator }}
    </h4>
    <p v-if="$i18n.locale === 'en'" v-html="work.descriptionEn"></p>
    <p v-else-if="$i18n.locale === 'cn'" v-html="work.description"></p>

    <section>
      <div v-for="(item, i) in work.pic" :key="`p-${i}`">
        <v-img
          class="my-2"
          :src="`https://static.insdim.com/image?path=${work.id}/${item}`"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Work } from '@/types/work';
import WorkService from '@/service/workService';

@Component
export default class WorkSingle extends Vue {
  private work: Work = new Work();

  private async getWorkInfo() {
    this.work = await WorkService.getOneWork(this.workID);
  }

  private get workID() {
    return this.$route.params.id;
  }

  private mounted() {
    this.getWorkInfo();
  }
}
</script>

<style scoped></style>
