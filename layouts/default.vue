<template>
  <v-app>
    <v-app-bar
      :color="$vuetify.theme.dark ? `#242424` : `white`"
      elevate-on-scroll
      absolute
      app
      scroll-target="#content"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 6 : 2"
          light
          class="head-icon"
          @click.native="iconTrick"
        >
          <v-img max-height="48" max-width="48" src="/HUMASIM_ICON.svg"></v-img>
        </v-card>
      </v-hover>

      <v-btn
        v-for="(item, i) in navList"
        :key="`n-${i}`"
        class="hidden-sm-and-down"
        text
        :to="localePath(item.route)"
        >{{ item.text }}</v-btn
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="35">
          <v-icon color="primary" size="20">mdi-account-outline</v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content
      id="content"
      class="overflow-y-auto"
      style="height:calc(100vh - 64px)"
    >
      <nuxt />
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@/assets/style.css';

import Footer from '@/components/home/footer.vue';

@Component({
  components: { Footer }
})
export default class Default extends Vue {
  private nav: boolean = false;

  private navList = [
    {
      text: '主页',
      route: '/'
    },
    {
      text: '产品',
      route: '/product'
    },
    {
      text: '关于',
      route: '/about'
    },
    {
      text: '联系',
      route: '/contact'
    }
  ];

  private iconTrick() {
    console.log('chie');
  }

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

    if (document.body.clientWidth >= 600) {
      this.nav = true;
    }

    if (process.browser) {
      window.localStorage.setItem('process', 'browser');
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer__border {
  background-color: transparent !important;
}

.v-ripple__container {
  border-radius: 60px !important;
}
</style>
