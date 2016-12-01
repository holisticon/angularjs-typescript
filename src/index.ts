import * as angular from 'angular';
import './modules/application/angular/index';
import './modules/tweets/angular/index';
import './modules/about/angular/index';

// load our default (non specific) css
import './styles/main.scss';

angular.module('app', ['app.application', 'app.tweets', 'app.about']);
angular.bootstrap(document, ['app'], {
    strictDi: true
});