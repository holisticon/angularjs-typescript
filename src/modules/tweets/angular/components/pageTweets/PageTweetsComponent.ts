import * as angular from 'angular';
import { SharedModel } from '../../../core/models/impl/SharedModel';

export class PageTweetsComponent implements angular.IComponentOptions {

    public controller: any;
    public template: string;

    constructor() {
        this.controller = PageTweetsController;
        this.template = `
        <tweet-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></tweet-sidebar>
        <tweet-main></tweet-main>
    `;
    }
}
export class PageTweetsController {
    public static $inject: Array<string> = ['SharedModel'];
    constructor(public sharedModel: SharedModel) {
    }
}