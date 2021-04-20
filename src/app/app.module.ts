import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

import { CreateQuestionComponent } from './fill-in-blanks/create-question/create-question.component';
import { ViewQuestionComponent } from './fill-in-blanks/view-question/view-question.component';

import { CreateSortableListComponent } from './sortable-list/create-sortable-list/create-sortable-list.component';
import { ViewSortableListComponent } from './sortable-list/view-sortable-list/view-sortable-list.component';

import { ConnectionComponent } from './connection/connection/connection.component';
import { ViewConnectionComponent } from './connection/view-connection/view-connection.component';

import { ImageHotspotComponent } from './image-hotspot/image-hotspot/image-hotspot.component';


@NgModule({
  declarations: [

    AppComponent,

    CreateQuestionComponent,
    ViewQuestionComponent,

    CreateSortableListComponent,
    ViewSortableListComponent,
  
    ImageHotspotComponent,

    ConnectionComponent,
    ViewConnectionComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EditorModule,
    MatMenuModule,
    DragDropModule,
    RouterModule.forRoot([
      {path: '', component: CreateQuestionComponent},
      {path: 'fillinblank/view', component: ViewQuestionComponent},
      {path: 'sortablelist', component:CreateSortableListComponent},
      {path: 'sortablelist/view', component:ViewSortableListComponent},
      {path:'connection',component:ConnectionComponent},
      {path:'connection/view',component:ViewConnectionComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
