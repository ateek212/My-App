import { NgModule }from'@angular/core';
import {MatTableModule} from'@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from'@angular/material/sidenav';
import {MatSlideToggleModule } from'@angular/material/slide-toggle';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatIconModule} from'@angular/material/icon';
import {MatListModule} from'@angular/material/list';
import {MatDividerModule} from'@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
    exports:[
        MatTableModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule

    ],
    imports:[
        MatTableModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class MaterialModules {
}
