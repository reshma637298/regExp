import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expr',
  templateUrl: './expr.component.html',
  styleUrls: ['./expr.component.css']
})
export class ExprComponent implements OnInit {
  input:any = " ";
  out1:any = " ";
  out2:any = " ";
  out3:any = " ";
  out4:any = " ";
  out5:any = " ";
  out6:any = " ";
  out7:any = " ";
  out8:any = " ";
  out9:any = " ";
  out10:any = " ";
  out11:any = " ";
  out12:any = " ";
  out13:any = " ";
  out14:any = " ";
  out15:any = " ";



    addInput(event:any){
      this.input = event.target.value;
        }
        resultCalculate(){
          this.out1= this.input.replace(/[e]/, "");
          this.out2= this.input.replace(/[a-z]/, "");
          this.out3= this.input.replace(/[a-z]/g, "");
          this.out4= this.input.replace(/[a-z]/i, "");
          this.out5= this.input.replace(/[a-z]/gi, "");
          this.out6= this.input.replace(/[A-Z]/g, "");
          this.out7= this.input.replace(/[a-zA-Z]/, "");
          this.out8= this.input.replace(/[^A-Z]/, "");
          this.out9= this.input.replace(/[^a-zA-Z]/, "");
          this.out10= this.input.replace(/[^a-zA-Z]/g, "");
          this.out11= this.input.replace(/[0-9]/, "");
          this.out12= this.input.replace(/[0-9]/g, "");
          this.out13= this.input.replace(/[^0-9]/, "");
          this.out14= this.input.replace(/[A-Z0-9]/g, "");
          this.out15= this.input.replace(/[a-z0-9]/g,"")
        }


        notifyMe() {
          // Let's check if the browser supports notifications
          if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification("Hi there!");
          }
        
          // Otherwise, we need to ask the user for permission
          else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
              // If the user accepts, let's create a notification
              if (permission === "granted") {
                var notification = new Notification("Hi there!");
              }
            });
          }
          this.notifyMe();
        
          // At last, if the user has denied notifications, and you
          // want to be respectful there is no need to bother them any more.
        }
  
      
  constructor() { }

  ngOnInit(): void {
   
  }

}
