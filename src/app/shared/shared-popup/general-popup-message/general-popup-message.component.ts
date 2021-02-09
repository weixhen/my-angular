import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-general-popup-message',
  templateUrl: './general-popup-message.component.html',
  styleUrls: ['./general-popup-message.component.css']
})
export class GeneralPopupMessageComponent implements OnInit {
  @Input() title: string = 'Message';
  @Input() warning_message: string = '';
  @Input() success_message: string = '';
  @Input() info_message: string = '';
  @Input() show_success: boolean = false;
  @Input() show_warning: boolean = false;
  @Input() show_info: boolean = false;

  faInfoCircle = faInfoCircle;
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(): void{
    this.activeModal.close();
  }

}
