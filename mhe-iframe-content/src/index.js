import {Component, View, bootstrap} from 'angular2/angular2';
import {MheIframeContent} from 'mhe-iframe-content';

@Component({
  selector: 'main'
})

@View({
  directives: [MheIframeContent],
  template: `
    <mhe-iframe-content></mhe-iframe-content>
  `
})

class Main {

}

bootstrap(Main);
