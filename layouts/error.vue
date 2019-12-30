<template>
  <v-app>
    <v-layout justify-center align-center>
      <div class="display-2">dim error</div>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/assets/style.css';

@Component
export default class Error extends Vue {
  @Prop({ default: null }) error: any;
}
</script>

<style scoped></style>
