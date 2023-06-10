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
  }
  
  
  export interface Link {
    source: number | string | GraphNode
    target: number | string | GraphNode
    show?: boolean
  }