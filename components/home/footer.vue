<template>
  <v-container class="mb-10" style="margin-top: 100px;">
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <v-row justify="center">
          <v-card flat color="transparent">
            <v-img width="150px" src="/HUMASIM_TEXT.svg"></v-img>
          </v-card>
        </v-row>
      </v-col>

      <v-col cols="12" class="mt-3">
        <v-row justify="center">
          <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on"><v-icon>mdi-wechat</v-icon></v-btn>
            </template>

            <v-card>
              <v-img width="200" src="/qrcode.jpg"></v-img>
            </v-card>
          </v-menu>

          <v-btn
            icon
            class="ml-2"
            @click="open('https://weibo.com/u/6493628657')"
          >
            <v-icon>mdi-sina-weibo</v-icon>
          </v-btn>
        </v-row>
      </v-col>

      <v-col cols="12" class="mt-3">
        <h5 class="text-center">COPYRIGHT © {{ thisYear }} HUMASIM&reg;</h5>
        <!-- <h4 class="text-center">FORM INSIDE FUNCTION</h4> -->
        <h5 class="text-center">
          <a href="http://www.beian.miit.gov.cn" target="_blank">
            沪ICP备16025975号-1</a
          >
        </h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeFooter extends Vue {
  private get thisYear() {
    return new Date().getFullYear();
  }

  private open(l: string) {
    window.open(l, '_blank');
  }
}
</script>

<style scoped></style>
