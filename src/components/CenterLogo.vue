<script lang="ts" setup>
import GLOBAL_CONFIG from "@/config";
import { randomNum } from "@/utils";
import { onMounted, ref } from "vue";
import LocalLogo from "@/assets/logo.svg";
import { useHead } from "@unhead/vue";

defineOptions({
  name: "CenterLogo",
});

defineProps<{
  drawerVisible: boolean;
  touchable: boolean;
}>();

const emit = defineEmits<{
  backgroundLoaded: [];
}>();

const bgLoaded = ref<boolean>(false);
const slogan = ref<string>("");

if (GLOBAL_CONFIG.LOGO_URL) {
  useHead({
    link: [
      {
        rel: "preload",
        href: GLOBAL_CONFIG.LOGO_URL,
        as: "image",
      },
    ],
  });
}

/**
 * 加载背景图片
 */
function loadBackground() {
  var img = new Image();
  img.src = GLOBAL_CONFIG.BACKGROUND_IMG_URL;
  img.addEventListener("load", () => {
    bgLoaded.value = true;
    emit("backgroundLoaded");
  });
}

/**
 * 前往国内智哲AI
 */
function goToBlog() {
  window.location.href = GLOBAL_CONFIG.FOREIGN_WISDOM_WISDOM_URL;
}
/**
 * 前往国内智哲AI
 */
function goToBlog2() {
  window.location.href = GLOBAL_CONFIG.DOMESTIC_WISDOM_WISDOM_URL;
}

function randomSlogan() {
  const slogans = GLOBAL_CONFIG.SLOGANS;
  slogan.value = slogans[randomNum(0, slogans.length - 1)];
}

onMounted(() => {
  randomSlogan();
  loadBackground();
});
</script>

<template>
  <div
    :class="['logo-area', { 'is-blur': drawerVisible }]"
    :style="{ background: `url(${$config.BACKGROUND_IMG_URL})` }"
  >
    <div :class="['img-shadow', { 'img-shadow-show': bgLoaded }]"></div>
    <div class="inner nth-child(1)" style="cursor: pointer" @click="goToBlog">
      <img
        :class="['main-logo', { 'main-logo-top': touchable }]"
        :src="GLOBAL_CONFIG.LOGO_URL || LocalLogo"
      />
      <div :class="['hello', { hello_bottom: touchable }]">
        <div>{{ slogan }}</div>
        <div class="hello_bottom_text">
          点击以访问 {{ $config.FOREIGN_WISDOM_WISDOM }}
        </div>
      </div>
    </div>
    <!--    <div class="inner nth-child(2)" style="cursor: pointer" @click="goToBlog">-->
    <!--      <img-->
    <!--        :class="['main-logo', { 'main-logo-top': touchable }]"-->
    <!--        :src="GLOBAL_CONFIG.LOGO_URL || LocalLogo"-->
    <!--      />-->
    <!--      <div :class="['hello', { hello_bottom: touchable }]">-->
    <!--        <div>{{ slogan }}</div>-->
    <!--        <div class="hello_bottom_text">-->
    <!--          国内访问 {{ $config.DOMESTIC_WISDOM_WISDOM }}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style lang="scss" scoped>
.logo-area {
  background-size: cover !important;
  background-position: center !important;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  animation: logoEnter 1.2s;
  animation-fill-mode: forwards;
  transition: all 0.8s;
  &.is-blur {
    filter: blur(5px);
  }
  .img-shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fda085;
    overflow: hidden;
    transition: background-color 0.5s;
    border-radius: 100%;
    animation: shadowEnter 1.2s;
    animation-fill-mode: forwards;
  }
  .img-shadow-show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .inner {
    position: relative;
    .inner:nth-child(1) {
      top: 50px;
    }

    .inner:nth-child(2) {
      top: 250px;
    }
    .main-logo {
      height: 7rem;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all 1s;
      top: 0;
    }
    .main-logo-top {
      top: -3.2rem;
    }
    .hello {
      color: #ffffff;
      width: 18.75rem;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 100px;
      transform: translateX(-50%);
      font-size: 1.5rem;
      opacity: 0;
      transition: all 1s;
    }

    .hello_bottom {
      opacity: 1;
      top: 3.5rem;
    }

    .hello_bottom_text {
      font-size: 1rem;
      margin-top: 0.5rem;
      padding: 1rem;
      border-radius: 8px;
      background: linear-gradient(
        135deg,
        #f093fb,
        #f5576c
      ); /* 使用渐变色作为背景 */
      color: #fff;
      cursor: pointer;
      display: inline-block;
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;
      border: none; /* 移除边框 */
    }

    .hello_bottom_text:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    }

    .hello_bottom_text:active {
      transform: translateY(2px);
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
