<template>
  <v-app class="px-1">
    <h1>{{ $t(`links.about`) }}</h1>
    <h3 class="mt-10">{{ $t(`about.ourDimension`) }}</h3>
    <h3>FORM INSIDE FUNCTION</h3>
    <h3>() => NEW FORMDATA()</h3>
    <h4 class="grey--text">{{ $t(`about.serviceContent`) }}</h4>

    <section>
      <h3 class="news-title">{{ $t(`about.subsidiaries`) }}</h3>
      <v-container class="px-0">
        <v-row dense>
          <v-col cols="4" xs="6">
            <v-card flat color="transparent">
              <v-img src="/brand/humasim.jpg"></v-img>
            </v-card>
            <h3 class="text-center ">HUMASIM</h3>
          </v-col>
          <v-col cols="4" xs="6">
            <v-card flat color="transparent">
              <v-img src="/brand/dimlab.jpg"></v-img>
            </v-card>
            <h3 class="text-center ">DIMLAB</h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <h3 class="news-title">{{ $t(`about.partners`) }}</h3>
      <v-container class="px-0">
        <v-row dense>
          <v-col cols="4" xs="6">
            <v-card flat color="transparent">
              <v-img src="/brand/wenext.jpg"></v-img>
            </v-card>
            <h3 class="text-center ">WENEXT</h3>
          </v-col>
          <v-col cols="4" xs="6">
            <v-card flat color="transparent">
              <v-img src="/brand/zcc.jpg"></v-img>
            </v-card>
            <h3 class="text-center ">SCC TECH</h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
