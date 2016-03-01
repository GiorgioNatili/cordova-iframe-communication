import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'mhe-iframe-content'
})

@View({
  templateUrl: 'mhe-iframe-content.html'
})

export class MheIframeContent {

  constructor() {
    console.info('MheIframeContent Component Mounted Successfully');
  }

  takePicture(event){

    let cameraOptions = { quality: 50,
        destinationType: 1 /*Camera.DestinationType.FILE_URI*/ };

    var bellhop = new Bellhop();

    bellhop.connect();
    bellhop.send('getPicture', cameraOptions);

  }

}
