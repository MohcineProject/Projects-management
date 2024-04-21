import { Component, TemplateRef, ViewChild } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-success',
  standalone: true,
  imports: [],
  templateUrl: './modal-success.component.html',
  styleUrl: './modal-success.component.scss'
})
export class ModalSuccessComponent {

  constructor(private modalService: NgbModal) {}

  @ViewChild('content') content !  : TemplateRef<any> ; 

	open() {
		this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' })
    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.setAttribute('style', 'z-index: 105;');
    }

	}
}
