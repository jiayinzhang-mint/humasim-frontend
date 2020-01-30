<template>
  <v-container class="px-1">
    <h1>{{ $t(`links.about`) }}</h1>
    <h3 class="mt-10">{{ $t(`about.ourDimension`) }}:</h3>
    <h3>FORM INSIDE FUNCTION</h3>
    <h3>() => NEW FORMDATA()</h3>
    <h4 class="grey--text">{{ $t(`about.serviceContent`) }}</h4>

    <section>
      <h3 class="news-title">{{ $t(`about.subsidiaries`) }}</h3>
      <v-container class="px-0">
        <v-row dense>
          <v-col cols="6" md="4">
            <v-card tile flat color="transparent">
              <v-img src="/brand/humasim.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <h3 class="text-center mb-0">HUMASIM</h3>
          </v-col>
          <v-col cols="6" md="4">
            <v-card tile flat color="transparent">
              <v-img src="/brand/dimlab.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <h3 class="text-center mb-0">DIMLAB</h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <h3 class="news-title">{{ $t(`about.partners`) }}</h3>
      <v-container class="px-0">
        <v-row dense>
          <v-col cols="6" md="4">
            <v-card tile flat color="transparent">
              <v-img src="/brand/wenext.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <h3 class="text-center mb-0">WENEXT</h3>
          </v-col>
          <v-col cols="6" md="4">
            <v-card tile flat color="transparent">
              <v-img src="/brand/zcc.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <h3 class="text-center mb-0">SCC TECH</h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
