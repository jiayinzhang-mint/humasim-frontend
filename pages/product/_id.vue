<template>
  <v-container>
    <v-toolbar flat color="transparent">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="subtitle-1 font-weight-black">{{
        productInfo.title
      }}</v-toolbar-title>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/types/product';
import ProductService from '@/service/productService';

@Component
export default class ProductInfo extends Vue {
  productInfo: Product = new Product();

  async mounted() {
    this.productInfo = await ProductService.getOneProduct(
      this.$route.params.id
    );
  }
}
</script>

<style scoped></style>
