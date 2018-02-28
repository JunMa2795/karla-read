import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';

import { TestService } from './shared/test.service';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
