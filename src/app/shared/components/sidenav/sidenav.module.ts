import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavService } from './sidenav.service';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';

const declarations = [ SidenavComponent ]

@NgModule({
  imports: [ CommonModule, MatSidenavModule, MatListModule, FormsModule ],
  declarations,
  exports: declarations,
  providers: [ SideNavService ]
})
export class SidenavModule {}

