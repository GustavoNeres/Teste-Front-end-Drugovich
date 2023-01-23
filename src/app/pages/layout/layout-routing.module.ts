import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditClientsComponent } from './create-edit-clients/create-edit-clients.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'customer-list',
				pathMatch: 'full'
			},
			{
				path: 'customer-list',
				component: CustomerListComponent
			},
			{
				path: 'create-edit-clients',
				component: CreateEditClientsComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {}
