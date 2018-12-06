import { Injectable } from '@angular/core';
import { ProjectDetail } from './project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectdetailsService  {
  public API = '';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProjectdetailsService');
   }

   getProjects():Observable<ProjectDetail[]>{
    return this.http.get<ProjectDetail[]>('http://localhost:64905/api/Project/GetProjectDetails').pipe(
        catchError(this.handleError('getProjects', []))
      );
  }


  save(project: ProjectDetail): Observable<ProjectDetail> {
    var projectDetail = JSON.parse(JSON.stringify(project))
    console.log(projectDetail);
    return this.http.post<ProjectDetail>('http://localhost:64905/api/Project/PostProjectDetail',projectDetail,httpOptions).pipe(
      catchError(this.handleError('save', project))
    );
  }

  update(project: ProjectDetail): Observable<ProjectDetail> {
    var projectDetail = JSON.parse(JSON.stringify(project))
    console.log(projectDetail);
    return this.http.put<ProjectDetail>('http://localhost:64905/api/Project/PutProjectDetail'+'/'+project.ID,projectDetail,httpOptions).pipe(
      catchError(this.handleError('update', project))
    );
  }

 
}

