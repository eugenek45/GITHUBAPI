
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents} from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileService } from './services/profile.service';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './date-ago.pipe';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    PageNotFoundComponent,
    HighlightDirective,
    DateAgoPipe,
    ProfileComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
