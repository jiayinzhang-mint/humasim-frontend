<template>
  <div>
    <v-container>
      <section>
        <h1>{{ $t(`links.about`) }} HUMASIM</h1>
        <v-row>
          <!-- <v-col class="d-flex d-sm-none pb-10" cols="12">
            <v-card width="100%" flat color="transparent">
              <v-container class="px-10">
                <v-img max-width="600" src="/HUMASIM_TEXT.svg"></v-img>
              </v-container>
            </v-card>
          </v-col> -->
          <v-col sm="12" md="8" lg="6">
            <p>
              HUMASIM（河马森林）是由设计公司INSDIM创立的自营品牌。
            </p>
            <p>
              我们旨在搜寻鲜活的创意，将他们做成产品，传递到更多人的生活中。
            </p>

            <p>
              这些创意也许来自不经意间的巧思，或是生活中某个不起眼的角落。
            </p>

            <p>
              我们希望通过这种传递，使更多人体会到 “生活，本来就很有趣。”
            </p>
          </v-col>

          <v-col class="d-none d-sm-flex" sm="12" md="4" lg="6">
            <v-card flat color="transparent" width="100%">
              <v-img width="90%" src="/HUMASIM_TEXT.svg"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section>
        <h1>设计师</h1>
        <v-row>
          <v-col sm="6" md="6" lg="3">
            <v-card outlined flat>
              <v-img src="master.jpg"></v-img>
              <v-card-title class="subtitle-1 font-weight-black pb-0">
                顾睿杰
              </v-card-title>
              <v-card-text class="caption">
                <p>HUMASIM 创始人</p>
                <p>INSDIM 设计师</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col sm="6" md="6" lg="3">
            <v-card outlined flat>
              <v-img src="INSDIM.png"></v-img>
              <v-card-title class="subtitle-1 font-weight-black pb-0">
                INSDIM
              </v-card-title>
              <v-card-text class="caption">
                <p>A DESIGN COMPANY</p>
                <p>整合设计服务</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
