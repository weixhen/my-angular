import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SampleGridComponent } from './sample-grid/sample-grid.component';
import { GeneralPopupMessageComponent } from './shared/shared-popup/general-popup-message/general-popup-message.component';
import { ButtonRendererComponent } from './shared/ag-grid-renderer/button-renderer/button-renderer.component';
import { UserPopupComponent } from './sample-grid/user-popup/user-popup.component';
import { GeneralPopupConfirmComponent } from './shared/shared-popup/general-popup-confirm/general-popup-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SampleFormComponent,
    GeneralPopupMessageComponent,
    SampleGridComponent,
    ButtonRendererComponent,
    UserPopupComponent,
    GeneralPopupConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,NgSelectModule, FormsModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
