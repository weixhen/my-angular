import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-popup-confirm',
  templateUrl: './general-popup-confirm.component.html',
  styleUrls: ['./general-popup-confirm.component.css']
})
export class GeneralPopupConfirmComponent implements OnInit {
  @Input() confirm_message: string = '';
  @Input() cancel_button_text: string = 'cancel';
  @Input() yes_button_text: string = 'yes';
  faExclamationTriangle = faExclamationTriangle;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(input: string): void {
    this.activeModal.close(input);
  }

}
