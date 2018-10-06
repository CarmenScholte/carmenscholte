import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CvComponent } from './cv/cv.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
	{ path: 'cv', component: CvComponent, data: {isCv: true} },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
		CvComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(
    appRoutes
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
