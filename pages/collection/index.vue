<template>
  <v-app>
    <h1>{{ $t(`links.collection`) }}</h1>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CollectionIndex extends Vue {
  private mounted() {
    this.$router.push(
      `${this.localePath('collection')}/${new Date().getFullYear()}`
    );
  }
}
</script>
