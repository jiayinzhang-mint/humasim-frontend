<template>
  <v-app>
    <v-row dense>
      <v-col cols="3">
        <v-card flat color="transparent" class="mt-5">
          <div class="headline font-weight-black">筛选</div>

          <v-text-field
            dense
            class="mt-4"
            single-line
            hide-details
            label="关键词"
          ></v-text-field>

          <v-list dense class="mt-4">
            <v-list-item class="px-0">
              <v-list-item-title>- 🕹</v-list-item-title>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-title>- 🎲</v-list-item-title>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-title>- 🔞</v-list-item-title>
            </v-list-item>
            <v-list-item class="px-0">
              <v-list-item-title>- 💣</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-btn block color="primary" class="mt-4">更新条件</v-btn>
        </v-card>
      </v-col>
      <v-col cols="9"> </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WorkIndex extends Vue {}
</script>
