import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './components/stat-card/stat-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [StatCardComponent] // ✅ export it

})
export class SharedModule { }
