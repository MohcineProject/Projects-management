import { Component, inject, TemplateRef , } from '@angular/core';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Project, ProjectState } from '../card/project/project';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  public projectName : string = '' ; 
  public projectDescription : string = '' ; 
  public startDate : Date = new Date() ; 
  public projectState : ProjectState  = ProjectState.DONE;  
   

  private modalService = inject(NgbModal);
	closeResult = '';
  
  

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.setAttribute('style', 'z-index: 105;');
    }

	}

	submit() {


	}
}
