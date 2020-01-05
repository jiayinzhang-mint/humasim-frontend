<template>
  <v-app class="px-1">
    <h1>
      {{ $t(`links.contact`) }}
    </h1>
    <h3 class="mt-10">{{ $t(`contact.contactUs`) }}</h3>
    <li>{{ $t(`contact.address`) }}</li>
    <p>{{ $t(`contact.addressDetail`) }}</p>
    <li>E-MAIL</li>
    <p>mint@insdim.com</p>

    <h3 class="mt-10">{{ $t(`contact.joinUs`) }}</h3>
    <li>{{ $t(`contact.architect`) }}</li>
    <p>
      {{ $t(`contact.skills`) }} - AutoCAD / VectorWorks / RhinoCeros / v-ray /
      Affinity Suite
    </p>

    <li>{{ $t(`contact.interiorDesigner`) }}</li>
    <p>
      {{ $t(`contact.skills`) }} - AUTOCAD / VECTORWORKS / V-Ray / AFFINITY
      SUITE
    </p>

    <li>{{ $t(`contact.productDesigner`) }}</li>
    <p>
      {{ $t(`contact.skills`) }} - RHINOCEROS / FUSION 360 / V-ray / CINEMA 4D /
      AFFINITY SUITE
    </p>

    <li>{{ $t(`contact.developer`) }}</li>
    <p>
      {{ $t(`contact.skills`) }} - javascript / css / python / golang / affinity
      suite
    </p>

    <li>{{ $t(`contact.graphicDesigner`) }}</li>
    <p>
      {{ $t(`contact.skills`) }} - affinity suite / final cut pro x / sketch /
      css
    </p>

    <li>{{ $t(`contact.internship`) }}</li>
    <p>{{ $t(`contact.skills`) }} - rhinoceros / keyshot / affinity suite</p>

    <h3 class="mt-10">{{ $t(`contact.application`) }}</h3>
    <p>join@insdim.com</p>
    <li>{{ $t(`contact.cv`) }}</li>
    <li>{{ $t(`contact.portfolio`) }}</li>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>
