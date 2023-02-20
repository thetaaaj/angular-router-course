import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { Course } from "../model/course";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";


@Injectable({ providedIn: 'root' })
export class LessonsResolver implements Resolve<LessonSummary[]> {

  constructor(private courses: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
    const courseUrl = route.paramMap.get('courseUrl');
    return this.courses.loadAllCourseLessonsSummary(courseUrl);
  }
}


