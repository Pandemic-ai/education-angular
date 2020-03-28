import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { path: "", component: TeacherComponent },
  { path: "teacher", component: TeacherComponent },
  { path: "student", component: StudentComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
