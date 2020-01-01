<template>
  <v-app>
    <v-navigation-drawer v-model="nav" app color="transparent">
    </v-navigation-drawer>
    <v-app-bar app dense flat color="transparent"></v-app-bar>
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-flex xs9> <h2 class="font-weight-thin">DIMLAB</h2> </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  nav: boolean = true;
}
</script>

<style>
.v-navigation-drawer__border {
  background-color: transparent !important;
}
</style>
