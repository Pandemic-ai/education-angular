import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { AdminComponent } from "./admin/admin.component";
import {HomeComponent} from './home/home.component';
import {TeacherCourseDetailsComponent} from './course/teacher-course-details/teacher-course-details.component';
import {StudentCourseDetailsComponent} from './course/student-course-details/student-course-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher/course-details', component: TeacherCourseDetailsComponent },
  { path: 'student/course-details', component: StudentCourseDetailsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
