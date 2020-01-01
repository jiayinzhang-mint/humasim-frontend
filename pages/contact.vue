<template>
  <v-app>
    <h1>
      {{ $t(`links.contact`) }}
    </h1>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
