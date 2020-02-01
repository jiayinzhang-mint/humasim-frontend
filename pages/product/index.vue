<template>
  <section>
    <v-container>
      <v-row dense>
        <v-col cols="3" class="hidden-sm-and-down">
          <v-card style="position:fixed" flat color="transparent" class="mt-5">
            <div class="headline font-weight-black">筛选</div>

            <v-text-field
              dense
              class="mt-4"
              single-line
              hide-details
              label="关键词"
            ></v-text-field>

            <v-list color="transparent" dense class="mt-4">
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

        <v-col md="8" sm="12">
          <v-toolbar flat color="transparent">
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-chevron-left</v-icon></v-btn>
            <span class="caption font-weight-black">{{ page || 1 }}</span>
            <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
          </v-toolbar>
          <v-row dense>
            <v-col
              v-for="(item, i) in productList"
              :key="`p-${i}`"
              cols="6"
              sm="6"
              md="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :to="`/product/${item.id}`"
                  outlined
                  :elevation="hover ? 3 : 0"
                >
                  <v-responsive aspect-ratio="1">
                    <v-card height="100%" color="primary"> </v-card>
                  </v-responsive>

                  <v-card-title class="caption font-weight-black">
                    {{ item.title }}
                  </v-card-title>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/types/product';
import ProductService from '@/service/productService';

@Component
export default class WorkIndex extends Vue {
  productList: Product[] = [];

  async getProductList() {
    this.productList = await ProductService.getProductList(
      new Product(),
      1 || this.page,
      9 || this.size
    );
  }

  get page() {
    return this.$route.query.page;
  }

  get size() {
    return this.$route.query.size;
  }

  mounted() {
    this.getProductList();
  }
}
</script>
