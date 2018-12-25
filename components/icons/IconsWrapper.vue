<template>
  <ul :class="`social-icon ${iconClass}`">
    <li v-for="(ic, key) in icons" :key="key">
      <a :href="ic.href" :class="`icon-${ic.icon}`">
        <i :class="`fa fa-${ic.icon}`"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["icons", "iconClass"]
};
</script>
