<template>
  <div>
    <v-carousel
      height="calc(100vh - 64px)"
      interval="10000"
      cycle
      show-arrows-on-hover
    >
      <v-carousel-item>
        <v-sheet tile height="100%" class="gradient-background">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="6">
              <v-row justify="center">
                <v-img
                  max-width="500"
                  :src="`/slide/HUMASIM_LOGO_W.svg`"
                ></v-img>
              </v-row>
              <v-row justify="center">
                <div class="subtitle-1 text-center">
                  brand of insdim, <br />a design company.
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- <v-carousel-item>
        <v-sheet tile height="100%">
          <v-row class="fill-height" align="center">
            <v-col sm="8" md="6" lg="6">
              <v-row justify="center">
                <v-img
                  max-width="300"
                  class="mt-10"
                  src="/slide/homa.png"
                ></v-img>
              </v-row>
            </v-col>
            <v-col sm="8" md="6" lg="6">
              <p class="title">打嘎吼!</p>
              <p class="subtitle-1">我是河马森林金牌客服, 我叫河马老大</p>
              <p class="subtitle-1">咨询, 抽奖, 活动都联系我哟</p>
              <p class="subtitle-1">长按扫描二维码就可以啦!</p>
              <v-img
                max-width="150"
                class="mt-10"
                src="/slide/qrcode.jpg"
              ></v-img>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item> -->
    </v-carousel>

    <!-- <v-container>
      <v-row dense>
        <v-col cols="12"> </v-col>

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
    </v-container> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private slides = [
    {
      type: 'center',
      objectPic: '/slide/HUMASIM_LOGO_W.svg',
      subtitle: 'brand of insdim, a design company.',
    },
  ];

  private get locale() {
    return this.$i18n.locale;
  }

  private mounted() {
    // this.$router.push(this.localePath('news'));
  }
}
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(-45deg, #e73c7e, #23a6d5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
