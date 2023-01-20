import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CustomerCardComponent } from './customer-card/customer-card.component';


@NgModule({
	declarations: [
		CustomerCardComponent,
	],
	imports: [
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		CommonModule
	],
	exports: [
		CustomerCardComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
