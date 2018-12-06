import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { ProjectDetail } from '../Shared/project.model';
import { ProjectdetailsService } from '../Shared/projectdetails.service';
import { Promise } from 'q';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})


export class ProjectdetailComponent implements OnInit {
  @Input() project: ProjectDetail;
  @Output() voted = new EventEmitter<ProjectDetail>();
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';

  constructor(private projectService: ProjectdetailsService) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };

  }

  save(form: ProjectDetail) {    
    if (this.project.ID == undefined) {
      this.addproject(form);
    }
    else {
      form.ID = this.project.ID;
      this.updateProject(this.project);
    }
    this.voted.emit(this.project);
  }

  addproject(form:ProjectDetail){
    this.projectService.save(form).subscribe(data=>this.project=data);
  }

  updateProject(project:ProjectDetail)
  {    
      this.projectService.update(this.project).subscribe(data=>this.project=data);
  }


  
}
