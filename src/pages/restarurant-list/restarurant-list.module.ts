import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestarurantListPage } from './restarurant-list';

@NgModule({
  declarations: [
    RestarurantListPage,
  ],
  imports: [
    IonicPageModule.forChild(RestarurantListPage),
  ],
})
export class RestarurantListPageModule {}
