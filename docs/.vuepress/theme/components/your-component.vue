<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'

const props = defineProps<PlumeHomeConfigBase & {
  // 组件 props, frontmatter 中的属性将会传递给组件
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
  >
    <!-- 自定义你的内容 -->
<div style="display: flex; justify-content: center; align-items: center; height: 8vh;">
    <div style="text-align: center; font-size: 36px;">
        推荐文章
    </div>
</div>
  </VPHomeBox>
</template>