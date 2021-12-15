import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormSendMail } from 'src/app/models/form-send-mail';
import { SendMailService } from 'src/app/services/send-mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormSendMail = new FormSendMail();
  public formResponse: string;

  public nameIsValid: boolean = true;
  public emailIsValid: boolean = true;
  public phoneIsValid: boolean = true;
  public contactIsValid: boolean = true;
  public messageIsValid: boolean = true;

  constructor(
    private sendMailService: SendMailService
  ) { }

  ngOnInit(): void {
  }

  public async sendForm() {
    try {
      if (this.formIsValid()) {
        this.formResponse = await this.sendMailService.sendEmail(this.form);
        this.form = new FormSendMail();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  public formIsValid(): boolean {

    this.contactIsValid = this.stringIsNullOrEmpty(this.form.contactWay);
    this.nameIsValid = this.stringIsNullOrEmpty(this.form.name);
    this.messageIsValid = this.stringIsNullOrEmpty(this.form.message);

    if (this.form.contactWay == 'Email') {
      this.emailIsValid = this.stringIsNullOrEmpty(this.form.email);
      this.phoneIsValid = true;
    }
    
    if (this.form.contactWay == 'Telefone' || this.form.contactWay == 'Whatsapp') {
      this.phoneIsValid = this.stringIsNullOrEmpty(this.form.phone);
      this.emailIsValid = true;
    }

    if (!this.nameIsValid || !this.emailIsValid || !this.phoneIsValid || !this.messageIsValid || !this.contactIsValid) {
      return false;
    }
    else {
      return true;
    }
  }

  stringIsNullOrEmpty = (string: string) => string && string != '';
}
