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

}
