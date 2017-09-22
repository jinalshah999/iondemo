import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tasks } from "./tasks";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
Id:number=0;
Title:string='';
 arr:Tasks[]=[
   new Tasks(1,'learn ai','pending'),
   new Tasks(2,'learn array in ionic','done')
 ];
  constructor(public navCtrl: NavController) {

  }
onDelete(x){
this.arr.splice(this.arr.indexOf(x),1);
}
addTask()
{
this.arr.push(new Tasks(this.Id,this.Title,'pending'));
this.Id=0;
this.Title="";
}
}
