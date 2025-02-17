<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import type { ISvgNode } from './conf/type';
  import { IconAdd, IconDelete, IconConfig } from '@/components/icons/index';

  const props = defineProps<{
    isRoot: boolean;
    curEditNode?: ISvgNode;
  }>();

  const emits = defineEmits([
    'addSubNode',
    'addChildNode',
    'addSameNode',
    'centerToParent',
    'deleteNode',
  ]);

  const node = ref<ISvgNode>();

  const isMoveParent = ref<boolean>(false);

  watch(
    () => props.curEditNode,
    (val) => {
      node.value = val;

      if (val) {
        isMoveParent.value = val.isMoveParent;
      }
    }
  );

  const handleChange = (e: any) => {
    isMoveParent.value = e.target.checked;
    if (node.value) {
      node.value.isMoveParent = isMoveParent.value;
    }
  };
</script>

<template>
  <section>
    <h1 class="font-semibold">节点相关</h1>
    <ul class="mt-1 mb-2">
      <li class="*hstack" v-show="isRoot">
        <IconAdd class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('addSubNode', true)"
        >
          添加右侧子节点
        </button>
      </li>
      <li class="*hstack" v-show="!isRoot">
        <IconAdd class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('addChildNode')"
        >
          添加子节点
        </button>
      </li>
      <li class="*hstack" v-show="isRoot">
        <IconAdd class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('addSubNode', false)"
        >
          添加左侧子节点
        </button>
      </li>
      <li class="*hstack" v-show="!isRoot">
        <IconAdd class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('addSameNode')"
        >
          添加同级节点
        </button>
      </li>
      <li class="*hstack" v-show="!isRoot">
        <IconAdd class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('centerToParent')"
        >
          与父节点中线对齐
        </button>
      </li>
      <li class="*hstack" v-show="!isRoot">
        <IconConfig class="w-4" />
        <span>是否一起移动父节点</span>
        <input
          class="rounded"
          type="checkbox"
          v-model="isMoveParent"
          @change="handleChange"
        />
      </li>
      <li class="*hstack" title="所有子节点将会一起删除" v-show="!isRoot">
        <IconDelete class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('deleteNode')"
        >
          删除节点
        </button>
      </li>
    </ul>
  </section>
</template>
