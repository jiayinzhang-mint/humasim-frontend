<template>
  <v-app>
    <v-navigation-drawer
      mobile-break-point="600"
      app
      :color="$vuetify.theme.dark ? `rgb(36, 36, 36)` : 'white'"
    >
      <SideNav></SideNav>
    </v-navigation-drawer>

    <v-content>
      <v-toolbar class="d-flex d-sm-none" height="100" flat color="transparent">
        <v-btn large icon @click="nav = !nav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar>
      <v-toolbar class="d-none d-sm-flex" dense flat color="transparent">
      </v-toolbar>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm9> <nuxt /> </v-flex>
        </v-layout>
      </v-container>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/assets/style.css';

import SideNav from '@/components/home/side-nav.vue';
import Footer from '@/components/home/footer.vue';

@Component({
  components: { SideNav, Footer }
})
export default class Default extends Vue {
  private nav: boolean = false;

  private detectTheme() {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      /* your dark mode code */
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
    setInterval(() => {
      if (matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }, 5000);
  }

  private mounted() {
    this.detectTheme();
    this.$vuetify.icons.iconfont = 'mdi';

    if (document.body.clientWidth <= 600) {
      this.nav = false;
    }
  }
}
</script>

<style>
.v-navigation-drawer__border {
  background-color: transparent !important;
}
</style>
