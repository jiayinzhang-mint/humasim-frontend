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
              HUMASIM（河马森林）成立于2017年，初衷是搜寻鲜活创意并将其传递至人们的生活，期望通过这种传递，使更多人体味到“
              生活，本来就很有趣。”
            </p>
            <p>
              2019年，HUMASIM
              开始了“设计同行”计划，希望通过与设计机构、设计师品牌、优秀设计师和设计新锐等各方设计力量的合作，共同探索设计为日常生活带来趣味性的更多可能。
            </p>
          </v-col>

          <v-col class="hidden-md-and-down" sm="12" md="4" lg="6">
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
              <v-img src="bug.jpg"></v-img>
              <v-card-title class="subtitle-1 font-weight-black pb-0">
                林舒安
              </v-card-title>
              <v-card-text class="caption">
                <p>产品设计师</p>
                <p>INSDIM 设计代表</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <v-card outlined flat>
              <v-img src="zanwen.jpg"></v-img>
              <v-card-title class="subtitle-1 font-weight-black pb-0">
                李赞文
              </v-card-title>
              <v-card-text class="caption">
                <p>产品设计师</p>
                <p>ZAN DESIGN 负责人</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section>
        <h1>设计机构</h1>
        <v-row>
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
          <v-col sm="6" md="6" lg="3">
            <v-card outlined flat>
              <v-img src="ZAN.png"></v-img>
              <v-card-title class="subtitle-1 font-weight-black pb-0">
                ZAN DESIGN
              </v-card-title>
              <v-card-text class="caption">
                <p>知名设计工作室</p>
                <p>产品设计服务</p>
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
