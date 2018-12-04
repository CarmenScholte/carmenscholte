import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CvComponent } from './cv/cv.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'home', redirectTo: '/gallery', pathMatch: 'full' },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
	{ path: 'cv', component: CvComponent, data: {isCv: true} },
  { path: '**', redirectTo: '/'}
];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

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
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		TranslateModule.forRoot({
      loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
      }
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
