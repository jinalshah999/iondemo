import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { FacedemodbProvider  } from "../../providers/facedemodb/facedemodb";
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageSrc;
  public base64Image: string;
  public withoutbase64:string;
flag:boolean=false;
flag1:boolean=true;
flag2:boolean=true;
x:number=50;
arr:string[]=[
  'abc','xyz','pqr'
];
  constructor(private imagePicker: ImagePicker,public _task:FacedemodbProvider,public loadincontroller:LoadingController, public navCtrl: NavController,public camera:Camera) {

  }
  /*var BASE64_MARKER = ';base64,';

  function convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
  Arra
    for(i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }*/

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
imageDemo(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.imageSrc=results[i];
    }
  }, (err) => { });
}
private openGallery (): void {
  let cameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,      
    quality: 100,
    targetWidth: 1000,
    targetHeight: 1000,
    encodingType: this.camera.EncodingType.JPEG,      
    correctOrientation: true
  }

  this.camera.getPicture(cameraOptions)
    .then(file_uri => this.imageSrc = file_uri, 
    err => console.log(err));   
}
takePicture(){
  
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData)=>{
    this.base64Image = "data:image/jpeg;base64," + imageData;
    this.withoutbase64=imageData;
  },
   (err) => {
    console.log(err);
});


}
demo12(){
  let loadingdata=this.loadincontroller.create({
    content:"Loading Tasks..."
  });
  loadingdata.present();
  this._task.faceDetect1("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Alia_Bhatt_at_the_DVD_launch_of_%27Highway%27_%28cropped%29.jpg/170px-Alia_Bhatt_at_the_DVD_launch_of_%27Highway%27_%28cropped%29.jpg").subscribe(
    (data)=>{
      //alert(data);
     let x=data[0]["faceAttributes"];
     alert(x["age"]+" "+x["gender"]);
    },
    function(error){
      alert(error)
      loadingdata.dismiss();
    },
    function(){
      alert("done");
      loadingdata.dismiss();
    }
  );
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
