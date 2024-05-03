import { ref, reactive, onMounted } from 'vue';
import { SVG } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.panzoom.js';
import '@svgdotjs/svg.draggable.js';

const NODE_DIC = {
  root: {
    type: 'root',
    content: '根节点',
  },
  sub: {
    type: 'sub',
    content: '二级节点',
  },
  child: {
    type: 'child',
    content: '子节点',
  },
};

export function useSvg(gridRef, gridInfo) {
  const mind = reactive({});

  const draw = ref(null);
  const curEditNode = ref(null);

  const fontSize = 40;

  onMounted(() => {
    initSvg();

    addRootNode();
  });

  const initSvg = () => {
    draw.value = new SVG(gridRef.value);
  };

  const findNodeById = (id) => {
    if (mind.id === id) {
      return mind;
    }

    let node = null;
    function recursion(children) {
      if (children.length) {
        for (let i = 0; i < children.length; i++) {
          if (children[i].id === id) {
            node = children[i];
            return;
          } else {
            // 深度遍历
            recursion(children[i].children);
          }
        }
      }
    }

    recursion(mind.children);

    return node;
  };

  // 添加同级节点，需要找到父节点
  const findParentNode = () => {
    // 根节点不会出现添加同级节点

    if (curEditNode.value.type === 'sub') {
      return mind;
    }

    let pNode = null;
    const id = curEditNode.value.id;

    function recursion(children) {
      for (let i = 0; i < children.length; i++) {
        const nodes = children[i].children;
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].id === id) {
            pNode = children[i];
            return;
          } else {
            recursion(children[i].children);
          }
        }
      }
    }
    recursion(mind.children);

    return pNode;
  };

  const drawRect = (x, y, content) => {
    const options = {
      x: x,
      y: y,
      width: fontSize * (content.length + 1),
      height: fontSize * 1.75,
    };

    const rect = draw.value.rect(options);
    rect.stroke('#E6A23C').fill('none');

    const text = draw.value.plain(content);
    text
      .dx(options.x + fontSize * 0.5)
      .dy(options.y + fontSize * 1.25)
      .font({ fill: '#f06', family: 'Inconsolata', size: fontSize });

    const group = draw.value.group().draggable();
    group.add(rect);
    group.add(text);

    group.rect = rect;
    group.text = text;

    group.on('dragmove', (e) => {
      const { handler, box } = e.detail;
      e.preventDefault();
      handler.move(box.x, box.y);
      // Snap to grid
      // handler.move(box.x - (box.x % 50), box.y - (box.y % 50));

      curEditNode.value.x = box.x;
      curEditNode.value.y = box.y;

      updatePath();
    });

    group.on('mousedown', (e) => {
      e.preventDefault();

      if (curEditNode.value) {
        curEditNode.value.group.rect.fill('none');
      }

      const node = findNodeById(group.id);
      node.group.rect.fill('pink');
      curEditNode.value = node;
    });

    return group;
  };

  const drawPath = (pNode, cNode) => {
    const start = {
      x: pNode.x + fontSize * (pNode.content.length + 1),
      y: pNode.y + (fontSize * 1.75) / 2,
    };

    const end = {
      x: cNode.x,
      y: cNode.y + (fontSize * 1.75) / 2,
    };

    const centerX = (start.x + end.x) / 2;

    // 直角
    const svgPath1 = `M ${start.x} ${start.y} H ${(start.x + end.x) / 2} V ${
      end.y
    } L ${end.x} ${end.y}`;

    // 曲线
    const svgPath2 = `
    M ${start.x} ${start.y}
    C ${start.x + centerX / 2} ${start.y}
    ${end.x - centerX / 3} ${end.y}
    ${end.x} ${end.y}
    `;

    if (cNode.path) {
      cNode.path.clear();
      cNode.path.plot(svgPath2);
    } else {
      const path = draw.value.path(svgPath2).fill('none');
      path.stroke({
        color: '#f06',
        width: 4,
        linecap: 'round',
        linejoin: 'round',
      });

      cNode.path = path;
    }
  };

  const updatePath = () => {
    const node = curEditNode.value;
    const pNode = findParentNode();
    if (pNode) {
      drawPath(pNode, node);
    }

    if (node.children.length) {
      node.children.forEach((child) => {
        drawPath(node, child);
      });
    }
  };

  const addRootNode = () => {
    mind.id = parseInt(Math.random() * 10000);
    mind.type = 'root';
    mind.content = '根节点';
    mind.children = [];

    const width = mind.content.length * fontSize;
    const x = gridInfo.width / 5;
    const y = gridInfo.height / 2;

    const group = drawRect(x, y, mind.content);
    group.id = mind.id;

    mind.x = x;
    mind.y = y;
    mind.group = group;
  };

  const addSubNode = () => {
    const pNodeIsRootNode = curEditNode.value.type === 'root';
    const type = pNodeIsRootNode ? 'sub' : 'child';
    const content = pNodeIsRootNode
      ? '第二级节点'
      : curEditNode.value.content + '的子节点';

    const x =
      curEditNode.value.x +
      (curEditNode.value.content.length + 1) * fontSize * 2;

    // 子节点分三种 根节点 二级节点 子节点
    const nodeInfo = {
      id: parseInt(Math.random() * 10000),
      type: type,
      content: content,
      x: x,
      y: gridInfo.height * Math.random(),
      children: [],
    };

    const group = drawRect(nodeInfo.x, nodeInfo.y, nodeInfo.content);
    group.id = nodeInfo.id;

    nodeInfo.group = group;

    curEditNode.value.children.push(nodeInfo);

    drawPath(curEditNode.value, nodeInfo);

    // console.log('mind', mind);
  };

  const addSameNode = () => {
    // 添加同级节点
    const nodeInfo = {
      id: parseInt(Math.random() * 10000),
      type: curEditNode.value.type,
      content: curEditNode.value.content + '的同级节点',
      x: curEditNode.value.x,
      y: gridInfo.height * Math.random(),
      children: [],
    };

    const group = drawRect(nodeInfo.x, nodeInfo.y, nodeInfo.content);
    group.id = nodeInfo.id;
    nodeInfo.group = group;

    // 怎么找父节点
    const pNode = findParentNode();
    // console.log('pNode', pNode);
    pNode.children.push(nodeInfo);

    drawPath(pNode, nodeInfo);
  };

  const removeNode = () => {
    curEditNode.value.children.forEach((child) => {
      child.path.remove();
      child.group.remove();
    });

    const pNode = findParentNode();
    const index = pNode.children.findIndex(
      (child) => child.id === curEditNode.value.id
    );
    pNode.children.splice(index, 1);

    curEditNode.value.path.remove();
    curEditNode.value.group.remove();
    curEditNode.value = null;
  };

  return {
    curEditNode,
    addSubNode,
    addSameNode,
    removeNode,
  };
}
