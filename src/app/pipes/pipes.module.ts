import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonPipePipe } from './mon-pipe.pipe';
import { AgePipe } from './age.pipe';



@NgModule({
  declarations: [
    MonPipePipe,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgePipe
  ]
})
export class PipesModule {

}
