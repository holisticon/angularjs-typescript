import * as angular from 'angular';

config.$inject = ['$routeProvider'];
export function config($routeProvider: angular.route.IRouteProvider): void {
    $routeProvider.when('/about', {
        template: '<page-about></page-about>'
    });
}