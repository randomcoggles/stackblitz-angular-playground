import { Component } from "@angular/core";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['timeline.component.scss']
  // template: `Timline works!`
})
export class TimelineComponent {
  dummyContent = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`;
  feedItems = [
    { title: 'Feed item 01', content: 'Lorem ipum',
      media: {
        image: {
          src: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      }
    },
    { title: 'Feed item 02', content: 'Lorem ipum',
      media: {
        image: {
          src: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      }
    },
    { title: 'Feed item 03', content: 'Lorem ipum',
      media: {
        image: {
          src: 'https://images.unsplash.com/photo-1615452879256-3d3363bfa5c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      }
    },
    { title: 'Feed item 04', content: 'Lorem ipum',
      media: {
        image: {
          src: 'https://images.unsplash.com/photo-1615499463674-f906bcc3de26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      }
    },
    { title: 'Feed item 05', content: 'Lorem ipum',
      media: {
        image: {
          src: 'https://images.unsplash.com/photo-1613831924492-9fb6a4ea9b32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      }
    },
  ]
  constructor() {
    this.feedItems = this.feedItems.map(item =>{
      item.content = this.dummyContent;
      return item;
    })
  }
}