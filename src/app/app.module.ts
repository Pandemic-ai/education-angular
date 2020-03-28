import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { StudentComponent } from "./student/student.component";
import { FooterComponent } from "./footer/footer.component";
import { NavTeacherComponent } from "./nav-teacher/nav-teacher.component";
import { NavStudentComponent } from "./nav-student/nav-student.component";
import { AdminComponent } from "./admin/admin.component";
import { NavAdminComponent } from "./nav-admin/nav-admin.component";
import { HomeComponent } from './home/home.component';
import { TeacherCourseDetailsComponent } from './course/teacher-course-details/teacher-course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    FooterComponent,
    NavTeacherComponent,
    NavStudentComponent,
    AdminComponent,
    NavAdminComponent,
    HomeComponent,
    TeacherCourseDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
