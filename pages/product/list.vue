<template>
  <section>
    <v-container>
      <v-row dense>
        <v-col cols="3" class="hidden-sm-and-down">
          <v-card style="position:fixed" flat color="transparent" class="mt-5">
            <v-toolbar dense flat color="transparent">
              <v-toolbar-title
                style="margin-left:-16px"
                class="headline font-weight-black"
                >筛选</v-toolbar-title
              >
              <v-spacer></v-spacer>
              <v-btn
                small
                style="margin-right:-16px"
                outlined
                @click="
                  $router.push({ path: '/product/list', query: { page: '1' } });
                  keyword = '';
                "
                >清除</v-btn
              >
            </v-toolbar>

            <v-text-field
              v-model="keyword"
              dense
              class="mt-4"
              single-line
              hide-details
              append-outer-icon="mdi-magnify"
              label="关键词"
              @keyup.enter="getProductList"
              @click:append-outer="getProductList"
            ></v-text-field>

            <v-list nav color="transparent" dense class="mt-4 px-0">
              <v-list-item
                v-for="(item, i) in tagList"
                :key="`t-${i}`"
                :class="`${$route.query.tag == item.value ? `nav-active` : ``}`"
                :to="{
                  path: '/product/list',
                  query: {
                    page: page,
                    tag: item.value
                  }
                }"
              >
                <v-list-item-title class="subtitle-1"
                  >- {{ item.icon }}
                  <span class="body-2">{{ item.text }}</span></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col md="8" sm="12">
          <v-row dense>
            <v-col
              v-for="(item, i) in productList"
              :key="`p-${i}`"
              cols="6"
              sm="6"
              md="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card outlined :elevation="hover ? 3 : 0">
                  <v-responsive aspect-ratio="1">
                    <v-card height="100%" color="primary">
                      <v-img
                        :src="
                          `https://static.insdim.com/image?path=${item.id}/${item.titlePic}`
                        "
                      ></v-img>
                    </v-card>
                  </v-responsive>

                  <p class="text-center">{{ item.titleEn }}</p>
                  <p class="text-center">{{ item.title }}</p>

                  <v-card-text class="text-center pt-0">
                    ¥ {{ (item.priceShow || 0).toFixed(2) }}
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>

          <v-toolbar flat color="transparent">
            <v-spacer></v-spacer>
            <v-btn
              :disabled="page == 1"
              icon
              @click="
                $router.push({
                  path: `/product/list`,
                  query: { page: page - 1, keyword: keyword, tag: tag }
                })
              "
              ><v-icon>mdi-chevron-left</v-icon></v-btn
            >
            <span class="body-2 font-weight-black"
              >{{ page || 1 }} / {{ maxPage }}</span
            >
            <v-btn
              icon
              :disabled="page == maxPage"
              @click="
                $router.push({
                  path: `/product/list`,
                  query: { page: page + 1, keyword: keyword, tag: tag }
                })
              "
              ><v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Product } from '@/types/product';
import ProductService from '@/service/productService';

@Component
export default class WorkIndex extends Vue {
  productList: Product[] = [];
  maxPage: number = 0;
  keyword: string = '';
  tagList = [
    {
      icon: '👀',
      text: '店长推荐',
      value: 'recommand'
    },
    {
      icon: '🏠',
      text: '妙趣生活',
      value: 'life'
    },
    {
      icon: '🪀',
      text: '创意小物',
      value: 'creative'
    },
    {
      icon: '👩🏻‍🎨',
      text: '大艺术家',
      value: 'art'
    },
    {
      icon: '🥳',
      text: '礼物专区',
      value: 'gift'
    },
    {
      icon: '🥺',
      text: '销量堪忧',
      value: 'sale'
    },
    {
      icon: '🔞',
      text: '小孩别看',
      value: 'adult'
    }
  ];

  async getProductList() {
    this.$router.push({
      path: '/product/list',
      query: {
        page: String(this.page),
        keyword: this.keyword,
        tag: this.tag
      }
    });
    const rsp = await ProductService.getProductList(
      new Product(),
      this.page,
      9,
      this.keyword,
      this.tag
    );
    this.productList = rsp.product;
    this.maxPage = rsp.maxPage;
  }

  get page() {
    return Number((this.$route.query.page as string) || '1');
  }

  get tag() {
    return this.$route.query.tag as string;
  }

  @Watch('page')
  private onPageChanged() {
    this.keyword = this.keyword || (this.$route.query.keyword as string);
    this.getProductList();
  }

  @Watch('tag')
  private onTagChanged() {
    this.keyword = this.keyword || (this.$route.query.keyword as string);
    this.getProductList();
  }

  mounted() {
    this.keyword = this.keyword || (this.$route.query.keyword as string);
    this.getProductList();
  }
}
</script>
