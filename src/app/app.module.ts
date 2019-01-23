import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NgxWebstorageModule } from 'ngx-webstorage'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { HighlightDirective } from './highlight.directive';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    ViewDataComponent,
    HighlightDirective,
    NameEditorComponent,
    AddStudentComponent,
    EditStudentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ CookieService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
