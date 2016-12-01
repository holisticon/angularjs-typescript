import * as angular from 'angular';
import { SharedModel } from '../../../core/models/impl/SharedModel';

export class TweetMainComponent implements angular.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.controller = TweetMainController;
        this.template = `
        <tweet-topbar ng-class="{'topbar-collapsed': $ctrl.sharedModel.topbarCollapsed}"></tweet-topbar>
        <tweet-content></tweet-content>
        `;
    }
}
export class TweetMainController {
    public static $inject: Array<string> = ['SharedModel'];
    constructor(public sharedModel: SharedModel) {
    }
}
