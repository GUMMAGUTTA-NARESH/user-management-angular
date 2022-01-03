import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css']
})
export class MailerComponent implements OnInit {

  public message:any;
  urlType: boolean = false;
  showMsg: boolean = false;
  public to :any;
  public subject :any;
  public body :any;
  // public attachment :any;
  attachment: File | null = null;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.attachment = files.item(0);
}

  sendEmail(urlType:boolean){
    const demo = {
      to: this.to,
      subject: this.subject,
      body: this.body,
      template:true,
      attachment:this.attachment,
    }
    let resp = this.employeeService.sendEmail(demo,this.urlType);
    resp.subscribe((data)=>this.message=data);
  }
}

