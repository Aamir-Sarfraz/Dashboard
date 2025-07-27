import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Shared/components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent, // contains sidebar + topbar
    children: [
      { path: 'dashboard', loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'items', loadChildren: () => import('./Modules/items/items.module').then(m => m.ItemsModule) },
      { path: 'issue-items', loadChildren: () => import('./Modules/issue-items/issue-items.module').then(m => m.IssueItemsModule) },
      { path: 'reports', loadChildren: () => import('./Modules/reports/reports.module').then(m => m.ReportsModule) },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
