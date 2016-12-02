import { angular, ComponentTest } from '../../../../../setup';
import { SidebarModel } from './../../../../../../../src/modules/tweets/core/models/impl/SidebarModel';
import { TweetSidebarController } from './../../../../../../../src/modules/tweets/angular/components/tweetSidebar/TweetSidebarComponent';
import { SharedModel } from './../../../../../../../src/modules/tweets/core/models/impl/SharedModel';

describe('Component TweetSidebarComponent', () => {
    var directiveTest: ComponentTest<TweetSidebarController>;
    var sharedModelMock: SharedModel;
    var sidebarModelMock: SidebarModel;
    beforeEach(angular.mock.module('app.tweets', ($provide: any) => {
        sidebarModelMock = <SidebarModel>jasmine.createSpyObj('sidebarModel', ['toggleCollapsed']);
        sharedModelMock = <SharedModel>jasmine.createSpyObj('sharedModel', ['toggletopbar', 'toggleSidebar']);
        $provide.service('SharedModel', () => sharedModelMock);
        $provide.service('SidebarModel', () => sidebarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetSidebarController>('<tweet-sidebar></tweet-sidebar>', 'tweetSidebar');
    });

    it('should expose the sharedModel', () => {
        var vm: TweetSidebarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it('should expose the sidebarModel', () => {
        var vm: TweetSidebarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(sidebarModelMock);
    });

    describe('on toggleCollapsed()', () => {
        it('should collapse the sidebar', () => {
            var vm: TweetSidebarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

