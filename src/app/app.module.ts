import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: "home",component: HomeComponent},
  {path: "student",component: StudentComponent},
  {path: "notfound",component: NotfoundComponent},
  {path: 'form', component: FormComponent},
  {path: "**",component: NotfoundComponent},
 

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    NotfoundComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
