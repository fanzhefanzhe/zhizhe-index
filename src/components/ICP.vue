<script lang="ts" setup>
defineOptions({
  name: "ICP",
});

defineProps<{
  visible: boolean;
}>();
</script>

<template>
  <a v-if="$config.ICP" class="icp" :class="{ hide: !visible }" :href="$config.ICP_URL" target="_blank">
    {{ $config.ICP }}
  </a>
</template>

<style lang="scss" scoped>
.icp {
  width: 100%;
  text-align: center;
  color: #333;
  text-decoration: none;
  font-size: var(--small-font-size);
  line-height: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  transform: translateY(0px);
  transition: transform ease 0.5s;

  &.hide {
    transform: translateY(30px);
    opacity: 0;
    pointer-events: none;
  }
}
</style>
