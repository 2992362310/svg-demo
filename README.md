# svg-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

## TODO
- [ - ] 画板
- [ - ] 单个节点交互，拖动、编辑
- [  ] 新增节点
- [  ] 节点连线

## 参考
- [kitymind](https://www.jyshare.com/more/kitymind/index.html)
- [antv g6](https://g6.antv.vision/examples/case/treeDemos#mindmap)
- [svg 贝塞尔曲线](https://www.zhangxinxu.com/wordpress/2014/06/deep-understand-svg-path-bezier-curves-command/)
- [svg 贝塞尔曲线](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths)
- [excalidraw](https://excalidraw.com/)

## 库
- [svg.js](https://svgjs.dev/docs/3.0/)

## 实现过程关键点
1. 画布无线滚动与缩放,svg缩放时html元素scale
2. 节点拖动与点击
3. 数据结构有两种形式，一种 tree object，一种 list ，parent id, 最终树结构
4. 根据ID查找节点，根据ID查找父节点
5. 拖动时的联动，父级线联动，子级线联动
6. 删除时的操作，移除子级元素，删除子级的数据

# 明天
1. 梳理下思路和代码
2. 做个配置面板
3. 