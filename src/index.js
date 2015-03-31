import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'angular2'
})

@Template({
  url: 'angular2.html'
})

class Angular2 {

  constructor() {
    console.log('component mounted');
  }

  showMessage() {
    System.import('message').then(function(module) {
      module.messageBox('foo');
    }, console.log.bind(console));
  }

}

export function main() {
  bootstrap(Angular2);
}
