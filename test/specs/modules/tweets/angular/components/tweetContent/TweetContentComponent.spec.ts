import { angular, ComponentTest } from '../../../../../setup'; import { ContentModel } from './../../../../../../../src/modules/tweets/core/models/impl/ContentModel';
import { TweetContentController } from './../../../../../../../src/modules/tweets/angular/components/tweetContent/TweetContentComponent';

describe('Component TweetContentComponent', () => {
    var directiveTest: ComponentTest<TweetContentController>;
    var contentModelMock: ContentModel;
    beforeEach(angular.mock.module('app.tweets', ($provide: any) => {
        contentModelMock = <ContentModel>{};
        $provide.service('ContentModel', () => contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetContentController>('<tweet-content></tweet-content>', 'tweetContent');
    });

    it('should expose the sharedModel', () => {
        var vm: TweetContentController = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });
});