import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CreateEditClientsComponent } from './create-edit-clients/create-edit-clients.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [
		LayoutComponent,
		CustomerListComponent,
  CreateEditClientsComponent,
	],
	imports: [
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		CommonModule,
		LayoutRoutingModule,
		FormsModule,
		ComponentsModule,
		MatDividerModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSnackBarModule
	],
	exports:[
		LayoutComponent,
		CustomerListComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LayoutModule {}
