import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDE5tN5HcoANicMBhgZ6DOn95RxoV1DkYk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
