import { Component, OnInit } from '@angular/core';
import { ProjectDetail } from './Shared/project.model';
import { ProjectdetailsService } from './Shared/projectdetails.service';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {

  project: ProjectDetail = new ProjectDetail();
  projects: ProjectDetail[] = [];
  selectedProject: ProjectDetail;
  constructor(private projectService: ProjectdetailsService) {
  }
  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects =[];
    this.projectService.getProjects().subscribe(data => { this.projects = data})
  }

  getProjectsEvent(project:ProjectDetail): void {
    this.projects =[];
    this.selectedProject = project;
    this.projectService.getProjects().subscribe(data => { this.projects = data});
  }
  


  onSelect(project: ProjectDetail): void {
    this.selectedProject = project;
  }

  addProject():void{
    this.selectedProject = new ProjectDetail;
  }

}
