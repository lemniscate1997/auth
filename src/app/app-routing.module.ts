import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { TestComponent } from './test/test.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'', component:NameEditorComponent },
  { path:'list', component:ListDataComponent, canActivate:[AuthGuard]},
  { path:'newstud', component:AddStudentComponent, data:{title:'bar'}},
  { path:'edit/:id', component:EditStudentComponent, data:{title:'bar1'}},
  { path:'dd', component:TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
