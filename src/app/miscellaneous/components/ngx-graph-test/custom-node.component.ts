
import { Component, Input } from '@angular/core';

@Component({
  selector: '[graphCustomNode]',
  template: `  
    <svg:g class="node" >
      <image href="assets/icons/model-mapping.svg" />
      {{node.position | json}}
      <foreignObject x="0" y="0" width="50" height="50">
        <!--<div style="position: fixed; font-size: 10px;box-shadow: 2px 2px 12px 1px #343434;" xmlns="http://www.w3.org/1999/xhtml">
          <p class="red d-icon-sort">This is red color</p>
          <p class="green">This is green color</p>
        </div>-->
      </foreignObject>
    </svg:g>
  `
})
export class GraphCustomComponent {
  _node: any;
  @Input() set node(node: any) {
    this._node = node;
  };
  get node() { console.log('\n\n\n-------> '); return this._node }

}
