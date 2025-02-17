export enum EPathWay {
  RL = 'RL', // 父节点右侧 子节点左侧
  ML = 'ML', // 父节点中间 子节点左侧
  MM = 'MM', // 父节点中间 子节点中间
  MR = 'MR', // 父节点中间 子节点右侧
  LR = 'LR' // 父节点左侧 子节点右侧
}

export enum ESvgNodeType {
  ROOT = 'root', // 根节点
  SUB = 'sub', // 二级节点
  CHILD = 'child' // 子节点
}
