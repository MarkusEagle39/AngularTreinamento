import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Component
import { CardComponent } from './components/card/card.component';

//material
import {MatCardModule} from '@angular/material/card';
import { CardInputOutputComponent } from './pages/card-input-output/card-input-output.component';
import { CardNgforComponent } from './pages/card-ngfor/card-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardInputOutputComponent,
    CardNgforComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
