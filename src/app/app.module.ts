import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './components/form/form.module';
import { ButtonModule } from './components/button/button.module';
import { InputModule } from './components/input/input.module';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormModule,
    InputModule,
    ButtonModule,
    TooltipModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
