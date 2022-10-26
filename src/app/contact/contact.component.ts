import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noEyal } from '../feature/validators/no-eyal.validator';

interface Contact {
  name?: string;
  email?: string;
  body?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public contact: Contact = {};

  public myForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, noEyal] }),
    email: new FormControl(''),
    body: new FormControl(''),
  });

  public sendForm() {
    console.log('sending form', this.myForm.value);
  }

  constructor() {
    this.myForm.statusChanges.subscribe(() => {
      console.log('val', this.myForm.controls.name.errors);
    });
  }
}
