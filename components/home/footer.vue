<template>
  <v-container class="mb-10" style="margin-top:100px">
    <v-row>
      <v-col sm="12" md="6" lg="6">
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on }">
            <v-btn large icon v-on="on"><v-icon>mdi-wechat</v-icon></v-btn>
          </template>

          <v-card>
            <v-img width="200" src="/qrcode.jpg"></v-img>
          </v-card>
        </v-menu>
        <h4>A: 上海市静安区沪太支路1895弄18号2A室</h4>
        <h4>E: humasim@insdim.com</h4>
      </v-col>

      <v-col
        sm="12"
        md="6"
        lg="6"
        :class="$vuetify.breakpoint.xsOnly ? `mt-10` : ``"
      >
        <v-card max-width="150" flat color="transparent">
          <v-img src="/HUMASIM_TEXT.svg"></v-img>
        </v-card>
        <h5 class="text-left mt-10">COPYRIGHT © {{ thisYear }} HUMASIM&reg;</h5>
        <!-- <h4 class="text-center">FORM INSIDE FUNCTION</h4> -->
        <h5 class="text-left">
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
}
</script>

<style scoped></style>
