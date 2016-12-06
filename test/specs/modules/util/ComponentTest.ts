import * as angular from 'angular';

export class ComponentTest<TController> {
    public element: angular.IAugmentedJQuery;
    public scope: angular.IScope;
    private rootScope: angular.IScope;
    private compile: angular.ICompileService;

    constructor(private template: string, private registerName: string) {
        angular.mock.inject(($rootScope: angular.IRootScopeService, $compile: angular.ICompileService) => {
            this.rootScope = $rootScope;
            this.compile = $compile;
        });
    }

    public createComponent(attributes: any): TController {
        this.scope = this.rootScope.$new();
        for (var key in attributes) {
            this.scope[key] = attributes[key];
        }
        this.element = this.compile(this.template)(this.scope);
        this.scope.$digest();
        return this.element.controller(this.registerName);
    }
}