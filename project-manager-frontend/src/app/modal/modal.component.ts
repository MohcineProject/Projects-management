import { Component,  TemplateRef, ViewChild , } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Project, ProjectState } from '../card/project/project';
import { FetchDataService } from '../main/service/fetch-data.service';



enum State {
	CREATE = 'create' , 
	UPDATE = 'update' 

}


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {



constructor(private modalService: NgbModal, private fetchDataService: FetchDataService) {}

  public state: State = State.CREATE; 

  public projectName : string = '' ; 
  public projectDescription : string = '' ; 
  public startDate : Date = new Date() ; 
  public projectState : ProjectState  = ProjectState.DONE;  
   

	
  
    setState(newState: String) {
		this.state = newState as State;
	  }

	@ViewChild('content') content !  : TemplateRef<any> ; 

	open() {
		this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' })
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.setAttribute('style', 'z-index: 105;');
    }

	}

	submit() {
		const project : Project = {
			id : this.fetchDataService.getNextId(),
			name: this.projectName,
			description: this.projectDescription,
			startingDate: this.startDate,
			state: this.projectState
		} 

		
		if (this.state == 'create') {
			this.fetchDataService.addProject(project) ; 
			
		}
	else {
		this.fetchDataService.updateProject(project) ; 
	}
	}
}
