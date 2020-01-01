<template>
  <v-container class="pl-10 pt-12">
    <v-img class="mb-12" width="120" height="120" src="/icon.png"></v-img>

    <v-list dense nav width="120" class="px-0">
      <v-list-item
        v-for="(item, i) in navItems"
        :key="`n-${i}`"
        active-class="nav-active"
        :to="localePath(item.path)"
      >
        <v-list-item-title class="nav-link">{{
          $t(item.title)
        }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list dense nav width="40" class="px-0">
      <v-list-item :to="switchLocalePath('cn')"
        ><v-list-item-title>CN</v-list-item-title></v-list-item
      >
      <v-list-item :to="switchLocalePath('en')"
        ><v-list-item-title>EN</v-list-item-title></v-list-item
      >
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NuxtVueI18n } from 'nuxt-i18n';

@Component
export default class HomeSideNav extends Vue {
  private navItems = [
    {
      path: 'news',
      title: 'links.news'
    },
    {
      path: 'collection',
      title: 'links.collection'
    },
    {
      path: 'timeline',
      title: 'links.timeline'
    },
    {
      path: 'about',
      title: 'links.about'
    },
    {
      path: 'contact',
      title: 'links.contact'
    }
  ];
}
</script>

<style scoped></style>
