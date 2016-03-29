import {
    Component,
    ViewEncapsulation,
    Inject,
    ApplicationRef
} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {
    RioButton,
} from '../components';

@Component({
    selector: 'rio-sample-app',
    directives: [
        ROUTER_DIRECTIVES, RioButton
    ],
    // Global styles imported in the app component.
    encapsulation: ViewEncapsulation.None,
    styles: [require('../styles/index.css')],
    template: `
    <div>
        <rio-button>Hello Dgeni Starter</rio-button>
    </div>
  `
})
export class RioSampleApp {

};
