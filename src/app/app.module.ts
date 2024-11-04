import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Adicione esta linha
//import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavigationComponent,
//     HomeComponent,
//     AboutComponent,
//     ContactComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule // Adicione esta linha
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
