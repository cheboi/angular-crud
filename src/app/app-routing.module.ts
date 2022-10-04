import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: ListComponent },
  { path: 'book/:id', component: DetailsComponent },
  { path: 'add', component: CreateComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
