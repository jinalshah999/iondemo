import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import  'rxjs/Rx';

/*
  Generated class for the FacedemodbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FacedemodbProvider {
  i:number=0;
  //'Ocp-Apim-Subscription-Key' => '118bfa407e0b44788b7fddec8398dc49'
  private url:string="https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender";
                      
  constructor(public _http: Http) {
    
  }
  jinaldemo()
  {
    this._http.get("https://rkdemotask.herokuapp.com/Tasks/").map((res:Response)=>{

    console.log(res.json());
    });
  }
  //checking static works or not
  faceDetect(){
    console.log("inside method");
    let body="{'url':'https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg'}";
    let headers = new Headers({'Content-Type':'application/json','Ocp-Apim-Subscription-Key':'cde61218ee7c47059495c91af2deb7a6'});
    let options = new RequestOptions({ headers: headers });
   return this._http.post("https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender",body,options)
   .map((response:Response)=>response.json());
    
  }
  //checking with para
  faceDetect1(item){
    console.log("inside method");
    let body="{'url':'"+item+"'}";
    console.log(body);
    let headers = new Headers({'Content-Type':'application/json','Ocp-Apim-Subscription-Key':'cde61218ee7c47059495c91af2deb7a6'});
    let options = new RequestOptions({ headers: headers });
   return this._http.post("https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender",body,options)
   .map((response:Response)=>response.json());
    
  }

  //checking with camera
  faceDetect2(item){
    console.log("inside method");
    let body="{'url':'"+item+"'}";
    //console.log(body);
    let headers = new Headers({'Content-Type':'application/json','Ocp-Apim-Subscription-Key':'cde61218ee7c47059495c91af2deb7a6'});
    let options = new RequestOptions({ headers: headers });
   return this._http.post("https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender",body,options)
   .map((response:Response)=>response.json());
    
  }

  addTask(dataURI){
    
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
  
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    
    var blob=new Blob([array],{type:'application/octet-stream'});
    //application/octet-stream
    let headers = new Headers({'Content-Type': 'application/octet-stream','Ocp-Apim-Subscription-Key':'cde61218ee7c47059495c91af2deb7a6'});
    let options = new RequestOptions({ headers: headers });
    return  this._http.post(this.url,
                  blob, options)
                 .map((response:Response)=>{
                
                   response.json();
                });

}
}
