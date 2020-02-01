<template>
  <section>
    <v-container>
      <h1>
        {{ $t(`links.contact`) }}
      </h1>
      <h3 class="mt-10">{{ $t(`contact.contactUs`) }}</h3>
      <li>{{ $t(`contact.address`) }}</li>
      <p>{{ $t(`contact.addressDetail`) }}</p>
      <li>E-MAIL</li>
      <p>humasim@insdim.com</p>
      <span class="caption">
        * 设计合作、业务洽谈等请提前预约，否则恕不接待
      </span>

      <h3 class="mt-10">开放职位</h3>

      <h4>- 品牌运营</h4>
      <p>
        要求
      </p>
      <li>本科及以上学历（艺术与设计类相关专业优先）</li>
      <li>具备电商与社交平台运营基本技能，有工作经验者优先</li>
      <li>具备一定的市场分析和判断能力，良好的客户服务意识</li>
      <li>主动应对问题，执行力强，有较好时间管理能力</li>
      <li>具有良好的中英文沟通能力，善于团队协作</li>

      <h4 class="mt-10">- 品牌运营助理</h4>
      <p>
        要求
      </p>
      <li>在校大学生或应届毕业生（艺术与设计类相关专业优先）</li>
      <li>具备社交平台运营基本技能，有工作经验者优先</li>
      <li>热爱设计、艺术，视野开阔思维活跃</li>
      <li>中英文沟通流利，具有责任感和团队合作精神</li>

      <h3 class="mt-10">申请职位</h3>
      <p>join@insdim.com</p>
      <li>个人近期形象照</li>
      <li>简历（可提供相关作品集最佳）</li>

      <h3 class="mt-10">设计合作</h3>
      <p>humasim@insdim.com</p>
      <span class="caption">
        * 请标注“设计合作”，并简要说明合作意向。
      </span>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
