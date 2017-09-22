import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
flag:boolean=false;
flag1:boolean=true;
flag2:boolean=false;
items:string[]=[
  'abc','xyz'
  ];
  constructor(public navCtrl: NavController) {

  }
onClick(){
  if(this.flag==true){
    this.flag=false;
  }
  else{
    this.flag=true;
  }
}

onClick1(){
  if(this.flag1==true){
    this.flag1=false;
  }
  else{
    this.flag1=true;
  }
}

onClick2(){
  if(this.flag2==true){
    this.flag2=false;
  }
  else{
    this.flag2=true;
  }
}
}
