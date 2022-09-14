import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataTableComponent } from './Components/get-data-table/get-data-table.component';
import { PostDataTableComponent } from './Components/post-data-table/post-data-table.component';

const routes: Routes = [
  {path: 'get-data', component:GetDataTableComponent},
  {path:'post-data', component:PostDataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
