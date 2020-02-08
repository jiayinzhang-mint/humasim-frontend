<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WorkIndex extends Vue {
  private mounted() {
    this.$router.push({
      path: `/product/list`,
      query: {
        page: '1'
      }
    });
  }
}
</script>

<style scoped></style>
