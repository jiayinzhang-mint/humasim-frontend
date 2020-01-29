<template>
  <v-container id="footer" class="mb-10" style="margin-top:100px">
    <h3 class="text-center">COPYRIGHT © {{ thisYear }} HUMASIM&trade;</h3>
    <!-- <h4 class="text-center">FORM INSIDE FUNCTION</h4> -->
    <h5 class="text-center">
      <a href="http://www.beian.miit.gov.cn" target="_blank">
        沪ICP备16025975号-1</a
      >
    </h5>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeFooter extends Vue {
  private get thisYear() {
    return new Date().getFullYear();
  }
}
</script>

<style scoped></style>
