import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, UrlSerializer } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './courses/course/course.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadAuthGuard } from './services/can-load.guard';


const routes: Routes = [
  { path: '', redirectTo: "courses", pathMatch: 'full' },
  {
    path: 'courses',
    loadChildren: () => {
      return import('./courses/courses.module')
        .then(m => m.CoursesModule);
    },
    canLoad: [CanLoadAuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard
  ]
})
export class AppRoutingModule {


}
