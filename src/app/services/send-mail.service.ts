import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormSendMail } from '../models/form-send-mail';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  public async sendEmail(form: FormSendMail): Promise<any> {
    let body = form;
    return this.http.post<any>(`${environment.API}/sendMail`, body)
      .subscribe(
        success => console.log("Email enviado"),
        error => console.log("Erro ao enviar email")
    );
  }
}
