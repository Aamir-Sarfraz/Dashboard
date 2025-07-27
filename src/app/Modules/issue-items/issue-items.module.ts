import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueItemsRoutingModule } from './issue-items-routing.module';
import { IssueItemComponent } from './issue-item/issue-item.component';


@NgModule({
  declarations: [
    IssueItemComponent
  ],
  imports: [
    CommonModule,
    IssueItemsRoutingModule
  ]
})
export class IssueItemsModule { }
