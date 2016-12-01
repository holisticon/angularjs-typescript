import * as angular from 'angular';

config.$inject = ['$routeProvider'];
export function config($routeProvider: angular.route.IRouteProvider): void {
    $routeProvider.when('/', {
        template: '<page-tweets></page-tweets>'
    });
}