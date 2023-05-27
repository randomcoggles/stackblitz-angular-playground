import { Component } from "@angular/core";

@Component({
    selector: 'new-flow-chart-node',
    templateUrl: 'new-node.component.html',
    styleUrls: ['new-node.component.scss']

})
export class NewFlowChartNodeComponent{
    form = {
        "id": '' ,
        "label": "",
        "meta": {
          "target": '',
          "description": '',
          "linkLabel": '',
        },
      }

}