Content projection is a pattern in which you insert, or project, the content you want to use inside another component

Word cloud:
Single-slot content projection, Multi-slot(targeted) content projection, Conditional content projection, ng-content, selector, ng-content withou a selector, ng-template, ng-container, ngTemplateOutlet, ngProjectAs

### Single-slot content projection
    Single-slot content projection refers to creating a component into which you can project one component.

### Multi-slot content projection
    Each slot can specify a CSS selector that determines which content goes into that slot.

### Conditional content projection
    If your component needs to conditionally render content, or render content multiple times, you should configure that component to accept an <ng-template>
    The projector component doesn`t control the lifecycle of the projecting content. If the projector component uses ngIf to hide the projecting content it will not show but still be alive

ngTemplate is a blueprint in angular

Biblio.: 
1. https://angular.io/guide/content-projection
2. Issso aqui é ouro: https://consolelog.com.br/customizando-componente-com-ngtemplateoutlet-angular-2/
3. Deep dive into content projection: https://www.youtube.com/watch?v=PTwKhxLZ3jI
    Stackblitz: https://stackblitz.com/edit/ng-conf-2018-content-projection

