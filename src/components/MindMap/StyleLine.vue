<script lang="ts" setup>
  import { ref, watch, watchEffect } from 'vue';
  import type { ISvgNode } from './conf/type';
  import { updatePath } from './utils/path';
  import { INIT_CONF } from './conf/config';
  import {
    IconAdd,
    IconDelete,
    IconConfig,
    IconEdit,
  } from '@/components/icons/index';

  const props = defineProps<{
    isRoot: boolean;
    curEditNode?: ISvgNode;
  }>();

  const node = ref<ISvgNode>();
  // 连线相关
  const lineWidth = ref(1);
  const lineColor = ref('#ff1070');
  const isCurve = ref(false);
  const xGap = ref(50);
  const yGap = ref(50);

  watch(
    () => props.curEditNode,
    (val) => (node.value = val)
  );

  watchEffect(() => {
    if (node.value) {
      const { path } = node.value.svgInfo;
      isCurve.value = path?.isCurve || INIT_CONF.isCurvue;
      lineColor.value = path?.color || INIT_CONF.lineColor;
      lineWidth.value = path?.width || INIT_CONF.lineWidth;
    }
  });

  const handleChangeLineWidth = () => {
    if (!node.value) return;
    const { path } = node.value.svgInfo;
    if (!path) return;
    path.width = lineWidth.value;
    path.path?.stroke({ width: lineWidth.value });
  };

  const handleChangeLineColor = () => {
    if (!node.value) return;
    const { path } = node.value.svgInfo;
    if (!path) return;
    path.color = lineColor.value;
    path.path?.stroke({ color: lineColor.value });
  };

  const handleChangeIsCurve = () => {
    // console.log('isCurve.value', isCurve.value, value)
    if (!node.value) return;
    const { path } = node.value.svgInfo;
    if (!path) return;
    path.isCurve = !isCurve.value;

    if (node.value) {
      updatePath(node.value);
    }
  };

  const handleChangeXGap = () => {
    if (!node.value) return;
    const { path } = node.value.svgInfo;
    if (!path) return;
    path.xGap = xGap.value;

    if (node.value) {
      updatePath(node.value);
    }
  };

  const handleChangeYGap = () => {
    if (!node.value) return;
    const { path } = node.value.svgInfo;
    if (!path) return;
    path.yGap = yGap.value;

    if (node.value) {
      updatePath(node.value);
    }
  };
</script>

<template>
  <section>
    <h1 class="font-semibold" v-show="!isRoot">连线相关</h1>
    <ul class="mt-1 mb-2" v-show="!isRoot">
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>连线粗细</span>
        <input
          type="range"
          v-model="lineWidth"
          min="1"
          max="6"
          @change="handleChangeLineWidth"
        />
      </li>
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>连线颜色</span>
        <input
          type="color"
          v-model="lineColor"
          @change="handleChangeLineColor"
        />
      </li>
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>是否曲线连接父节点</span>
        <input type="checkbox" v-model="isCurve" @click="handleChangeIsCurve" />
      </li>
      <li class="*hstack" v-show="isCurve">
        <IconEdit class="w-4" />
        <span>横向控制</span>
        <input
          type="range"
          v-model="xGap"
          min="50"
          max="400"
          @change="handleChangeXGap"
        />
      </li>
      <li class="*hstack" v-show="isCurve">
        <IconEdit class="w-4" />
        <span>纵向控制</span>
        <input
          type="range"
          v-model="yGap"
          min="50"
          max="400"
          @change="handleChangeYGap"
        />
      </li>
    </ul>
  </section>
</template>
