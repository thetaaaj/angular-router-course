import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";


@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<Course> {

  constructor(private courses: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const courseUrl = route.paramMap.get('courseUrl');
    return this.courses.loadCourseByUrl(courseUrl)
      .pipe(
        first()
      );
  }
}


