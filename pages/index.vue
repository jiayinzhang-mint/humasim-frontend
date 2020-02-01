<template>
  <div>
    <v-carousel cycle height="700" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-1">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row dense>
        <v-col cols="12"> </v-col>

        <v-col cols="9">
          <v-card flat height="200">
            <v-sheet color="primary" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="body-2">广告位招租</div>
              </v-row>
            </v-sheet>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card flat height="200">
            <v-sheet color="primary" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="body-2">广告位招租</div>
              </v-row>
            </v-sheet>
          </v-card>
        </v-col>

        <v-col cols="12">
          <section>
            <div class="headline font-weight-black">新闻</div>
          </section>
          <div class="mt-5">
            <v-row dense>
              <v-col cols="6" sm="6" md="3">
                <v-hover v-slot:default="{ hover }">
                  <v-card outlined :elevation="hover ? 3 : 0">
                    <v-responsive aspect-ratio="1">
                      <v-card height="100%" color="primary"> </v-card>
                    </v-responsive>
                    <v-container fluid>
                      <h4 v-if="locale === `en`" class="work-title">
                        introducing humasim
                      </h4>
                      <h4 v-else class="work-title">introducing humasim</h4>
                      <span>2020.01.20</span>
                      <br />
                      <span v-if="locale === `en`">allala</span>
                      <span v-else>lalala</span>
                    </v-container>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4'
  ];

  private slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  private get locale() {
    return this.$i18n.locale;
  }

  private mounted() {
    // this.$router.push(this.localePath('news'));
  }
}
</script>
