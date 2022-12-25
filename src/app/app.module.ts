import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/sort.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { PipesShowComponent } from './pipes/pipes-show/pipes-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ReversePipe,
    PipesShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
