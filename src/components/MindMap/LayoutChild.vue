<script lang="ts" setup>
  import { computed, ref, watch } from 'vue';
  import type { ISvgNode } from './conf/type';
  import { IconAdd, IconDelete, IconConfig } from '@/components/icons/index';

  const props = defineProps<{
    curEditNode?: ISvgNode;
  }>();

  const emits = defineEmits([
    'mirrorChildren',
    'moveChildrenToRight',
    'moveChildrenToLeft',
    'toggleChildren',
  ]);

  const node = ref<ISvgNode>();
  const isMoveChildren = ref(false);

  watch(
    () => props.curEditNode,
    (val) => {
      node.value = val;

      if (val) {
        isMoveChildren.value = val.isMoveChildren;
      }
    }
  );

  const expandInfo = computed(() => (node.value?.isExpand ? '折叠' : '展开'));
  const hasChildren = computed(
    () => node.value && node.value?.children?.length > 0
  );

  const handleChange = (e: any) => {
    isMoveChildren.value = e.target.checked;
    if (node.value) {
      node.value.isMoveChildren = isMoveChildren.value;
    }
  };
</script>

<template>
  <section>
    <h1 class="font-semibold">子节点布局相关</h1>
    <ul class="mt-1 mb-2">
      <li class="*hstack" v-show="hasChildren">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('toggleChildren')"
        >
          {{ expandInfo }}
        </button>
      </li>
      <li class="*hstack" v-show="hasChildren">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('mirrorChildren')"
        >
          镜像翻转
        </button>
      </li>
      <li class="*hstack" v-show="hasChildren">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('moveChildrenToLeft')"
        >
          所有移至左侧
        </button>
      </li>
      <li class="*hstack" v-show="hasChildren">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('moveChildrenToRight')"
        >
          所有移至右侧
        </button>
      </li>
      <li class="*hstack" v-show="hasChildren">
        <IconConfig class="w-4" />
        <span>是否一起移动子节点</span>
        <input
          class="rounded"
          type="checkbox"
          v-model="isMoveChildren"
          @change="handleChange"
        />
      </li>
    </ul>
  </section>
</template>
