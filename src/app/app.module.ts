import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './component/dashboard/view/view.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostformComponent } from './component/postform/postform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateformComponent } from './component/updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    DashboardComponent,
    PostformComponent,
    UpdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
