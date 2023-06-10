export interface GraphResult {
    nodes: GraphNode[]
    links: Link[]
  }
  
  export interface GraphNode {
    title: string
    id: any
    folderName?: string
    type: string
    color?: string
    collaped?: boolean
    status?: string
    children?: GraphNode[]
    childrenIds?: string[]
    show?: boolean
    width?: number
    height?: number
    x?: number
    y?: number
    z?: number
    fx?: number
    fy?: number
    fz?: number
  }
  
  
  export interface Link {
    source: number | string
    target: number | string
    show?: boolean
    gType?: string
  }