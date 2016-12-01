import * as angular from 'angular';

export class StarComponent implements angular.IComponentOptions {
    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            starred: '='
        };
        this.controller = StarController;
        this.template = `<i class="fa fa-star fa-2x"
            ng-class="{'starred': $ctrl.starred}"
            ng-click="$ctrl.toggle()"></i>`;
    }
}
export class StarController {
    public starred: boolean;

    public toggle(): void {
        this.starred = !this.starred;
    }
}