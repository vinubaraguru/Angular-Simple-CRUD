import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { PersonslistComponent } from './components/personslist/personslist.component';
import { AddnewpersonComponent } from './components/addnewperson/addnewperson.component';
import { PersonService } from './services/person.service';
import { AgePipe } from './pipes/age';
import { UpdatepersonComponent } from './components/updateperson/updateperson.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonslistComponent,
    AddnewpersonComponent,
    AgePipe,
    UpdatepersonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PersonslistComponent },
      { path: 'createperson', component: AddnewpersonComponent },
      { path: 'updateperson', component: UpdatepersonComponent }
    ])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
