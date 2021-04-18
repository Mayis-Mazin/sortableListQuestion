import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSortableListComponent } from './create-sortable-list/create-sortable-list.component';
import { ViewSortableListComponent } from './view-sortable-list/view-sortable-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DragToTheBlankComponent } from './drag-to-the-blank/drag-to-the-blank/drag-to-the-blank.component';
import { ViewDragToTheBlankComponent } from './drag-to-the-blank/view-drag-to-the-blank/view-drag-to-the-blank.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSortableListComponent,
    ViewSortableListComponent,
    DragToTheBlankComponent,
    ViewDragToTheBlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: DragToTheBlankComponent},
      {path: 'ViewDragToTheBlankComponent/view', component: ViewDragToTheBlankComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
