<template>
  <v-container style="height: 100vh;" class="py-0">
    <v-toolbar dense flat color="transparent">
      <v-spacer></v-spacer>
      <v-btn icon small @click="$emit('closeNav')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row
      no-gutters
      style="height: calc(100vh - 48px);"
      justify="center"
      align="center"
    >
      <v-img
        style="top: 30vh; max-width: 200px;"
        class="head-text"
        src="/HUMASIM_TEXT.svg"
      ></v-img>
      <v-list nav dense width="120" class="px-0">
        <v-list-item
          v-for="(item, i) in navItems"
          :key="`n-${i}`"
          class="px-2"
          active-class="nav-active"
          :to="localePath(item.route)"
        >
          <v-list-item-title class="nav-link text-center">{{
            item.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NuxtVueI18n } from 'nuxt-i18n';

@Component
export default class HomeSideNav extends Vue {
  private get navItems() {
    return [
      {
        text: '主页',
        route: '/',
      },
      {
        text: '产品',
        route: '/product',
      },
      {
        text: '关于',
        route: '/about',
      },
      {
        text: '联系',
        route: '/contact',
      },
    ];
  }

  private get yearList() {
    const thisYear = new Date().getFullYear();
    return [
      thisYear,
      thisYear - 1,
      thisYear - 2,
      thisYear - 3,
      thisYear - 4,
      thisYear - 5,
    ];
  }

  private switchLocale(l: string) {
    window.location.href = this.switchLocalePath(l);
  }

  private get locale() {
    return this.$i18n.locale;
  }

  private mounted() {}
}
</script>

<style scoped></style>
