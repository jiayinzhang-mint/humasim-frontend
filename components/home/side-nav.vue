<template>
  <v-container class="pl-10 pt-12">
    <v-img class="mb-12 mt-3" width="120" height="120" src="/icon.png"></v-img>

    <v-layout>
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
      <!-- <v-list nav dense class="mt-11">
        <v-list-item
          v-for="(item, i) in yearList"
          :key="`y-${i}`"
          active-class="nav-active"
          :to="`${localePath('collection')}/${item}`"
        >
          <v-list-item-title class="nav-link">{{ item }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="`${localePath('collection')}/older`">
          <v-list-item-title class="nav-link">{{
            $t('collection.older')
          }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-layout>

    <v-list dense nav width="40" class="px-0">
      <v-list-item
        :class="locale === 'cn' ? `nav-active` : ``"
        @click="switchLocale('cn')"
        ><v-list-item-title>CN</v-list-item-title></v-list-item
      >
      <v-list-item
        :class="locale === 'en' ? `nav-active` : ``"
        @click="switchLocale('en')"
        ><v-list-item-title>EN</v-list-item-title></v-list-item
      >
    </v-list>
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

  private get yearList() {
    const thisYear = new Date().getFullYear();
    return [
      thisYear,
      thisYear - 1,
      thisYear - 2,
      thisYear - 3,
      thisYear - 4,
      thisYear - 5
    ];
  }

  private switchLocale(l: string) {
    window.location.href = this.switchLocalePath(l);
  }

  private get locale() {
    return this.$i18n.locale;
  }

  // @Watch('locale')
  // private onChanged() {
  //   console.log(this.locale);
  //   console.log(window.location);
  //   console.log(this.switchLocalePath())
  // }

  private mounted() {}
}
</script>

<style scoped></style>
