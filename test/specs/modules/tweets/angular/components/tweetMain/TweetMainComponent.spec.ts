import { SharedModel } from './../../../../../../../src/modules/tweets/core/models/impl/SharedModel';
import { TweetMainController } from './../../../../../../../src/modules/tweets/angular/components/tweetMain/TweetMainComponent';
import { angular, ComponentTest } from '../../../../../setup';

describe('Component TweetSidebarComponent', () => {
    var directiveTest: ComponentTest<TweetMainController>;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module('app.tweets', ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service('SharedModel', () => sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetMainController>('<tweet-main></tweet-main>', 'tweetMain');
    });

    it('should expose the sharedModel', () => {
        var vm: TweetMainController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});