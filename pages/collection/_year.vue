<template>
  <v-app>
    <div style="display:flex" class="px-1">
      <h1>{{ $t(`links.collection`) }}</h1>
      <v-spacer></v-spacer>

      <div class="d-none d-sm-flex">
        <transition appear appear-active-class="fade-left-enter">
          <h1
            v-if="year + 1 <= thisYear"
            style="color:grey;user-select:none"
            @click="setYear(year + 1)"
          >
            {{ year + 1 }}
          </h1>
        </transition>
        <transition appear appear-active-class="fade-left-enter">
          <h1 class="ml-3" style="user-select:none" @click="setYear(year)">
            {{ year }}
          </h1>
        </transition>
        <transition appear appear-active-class="fade-left-enter">
          <h1
            v-if="year - 1 >= 2014"
            class="ml-3"
            style="color:grey;;user-select:none"
            @click="setYear(year - 1)"
          >
            {{ year - 1 }}
          </h1>
        </transition>
      </div>

      <div class="d-flex d-sm-none">
        <v-btn
          v-if="year + 1 <= thisYear"
          class="mr-2"
          icon
          style="align-self:center"
          @click="setYear(year + 1)"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <h1 class="ml-3" @click="setYear(year)">
          {{ year }}
        </h1>

        <v-btn
          class="ml-2"
          icon
          style="align-self:center"
          @click="setYear(year - 1)"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <transition appear appear-active-class="fade-left-enter">
      <section>
        <div v-for="(item, i) in workList" :key="`n-${i}`">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :to="`${localePath('collection')}/work/${item.id}`"
              :class="{ 'on-hover': hover }"
              flat
              color="transparent"
            >
              <v-container fluid class="pa-1">
                <h3 class="work-title mt-5">{{ item.title }}</h3>
                <span>FOR {{ item.client }}</span>
                <v-img
                  v-if="item.titlePic !== ''"
                  :src="item.titlePic"
                  class="grey lighten-2 mt-3"
                  max-height="312"
                >
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
                  <v-fade-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    ></div>
                  </v-fade-transition>
                </v-img>
              </v-container>
            </v-card>
          </v-hover>
          <hr />
        </div>
      </section>
    </transition>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Work } from '@/types/work';
import WorkService from '@/service/workService';

@Component
export default class CollectionSingle extends Vue {
  private workList: Work[] = [];
  private loading: boolean = false;

  private async getWorkList() {
    this.loading = true;
    this.workList = await WorkService.getWorkList(String(this.year));
    this.loading = false;
  }

  private setYear(y: string) {
    if (!this.loading) {
      this.$router.push(`${this.localePath('collection')}/${y}`);
    }
  }

  private get year() {
    return Number(this.$route.params.year);
  }

  private get thisYear() {
    return new Date().getFullYear();
  }

  private mounted() {
    this.getWorkList();
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
}

.on-hover {
  cursor: pointer;
}
</style>
