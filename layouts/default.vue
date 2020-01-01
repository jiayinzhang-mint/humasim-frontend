<template>
  <v-app>
    <v-navigation-drawer v-model="nav" app color="transparent">
      <SideNav></SideNav>
    </v-navigation-drawer>
    <v-app-bar app dense flat color="transparent"></v-app-bar>
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-flex xs9> <nuxt /> </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/assets/style.css';

import SideNav from '@/components/home/side-nav.vue';

@Component({
  components: { SideNav }
})
export default class Default extends Vue {
  private nav: boolean = true;

  private detectTheme() {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      /* your dark mode code */
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  }

  private mounted() {
    this.detectTheme();
  }
}
</script>

<style>
.v-navigation-drawer__border {
  background-color: transparent !important;
}
</style>
