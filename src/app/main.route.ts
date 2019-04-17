import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }         from '@angular/common';

 import { AppComponent }        from './app.component';

const appRoutes: Routes = [
    {path: "",component: AppComponent, pathMatch : "full" }
]
// export const mainRoutingProviders: any[] = [];
// export const routing = RouterModule.forRoot(mainRoutes);

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class mainRoutingModule { }