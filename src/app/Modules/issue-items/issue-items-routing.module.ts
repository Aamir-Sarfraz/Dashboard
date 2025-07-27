import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueItemComponent } from './issue-item/issue-item.component';

const routes: Routes = [
  { path: '', component: IssueItemComponent } // localhost:4200/items
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueItemsRoutingModule { }
