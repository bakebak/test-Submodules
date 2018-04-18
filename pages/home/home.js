var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connectivity = require("connectivity");
var page_1 = require("ui/page");
var app_settings_1 = require("../../../app.settings");
var live_settings_1 = require("../../services/live-settings");
var notification_1 = require("../../services/notification");
var offer_1 = require("../../services/offer");
var popup_1 = require("../../services/popup");
var tutorial_1 = require("../../services/tutorial");
var HomePage = (function () {
    function HomePage(page, ngZone, tutorialService, popUpService, notificationService, offerService, liveSettings) {
        this.page = page;
        this.ngZone = ngZone;
        this.tutorialService = tutorialService;
        this.popUpService = popUpService;
        this.notificationService = notificationService;
        this.offerService = offerService;
        this.liveSettings = liveSettings;
        this.tutorial = false;
        this.hasConnection = true;
        this.isHmlBuild = app_settings_1.appSettings.IS_HML_ENDPOINT;
        this.isSearching = false;
        this.search = '';
        this.componentSearch = '';
        this.offersBgColor = '#FFFFFF';
        this.popupImage = '';
        this._tab = 'ganhometro';
    }
    Object.defineProperty(HomePage.prototype, "tab", {
        get: function () {
            return this._tab;
        },
        set: function (tab) {
            if (tab === 'meudesconto')
                this.configureTutorialAnimation();
            this._tab = tab;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = false;
        this.notificationService.initialize();
        this.popUpService.getPopup().subscribe(function (popup) {
            console.log("POPUP: " + popup);
            _this.ngZone.run(function () {
                _this.tab = 'meudesconto';
            });
            _this.popupImage = popup;
        });
        this.liveSettings.getSettings('offers_bg_color', this.offersBgColor).subscribe(function (value) {
            _this.offersBgColor = value;
        });
        this.configureTutorialAnimation();
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.page.off('navigatedTo');
        connectivity.stopMonitoring();
    };
    HomePage.prototype.hideTutorial = function () {
        this.tutorialService.hideTutorial();
    };
    HomePage.prototype.enableSearch = function () {
        var _this = this;
        this.isSearching = true;
        setTimeout(function () {
            var searchTextField = _this.page.getViewById('txtSearch');
            searchTextField.focus();
        }, 300);
    };
    HomePage.prototype.searchOffers = function () {
        console.log('Home: search offers');
        this.componentSearch = this.search;
    };
    HomePage.prototype.clearSearch = function () {
        console.log('Home: clear search');
        this.componentSearch = this.search = '';
        this.isSearching = false;
    };
    HomePage.prototype.dismissPopUp = function () {
        this.popUpService.markAsViewed(this.popupImage);
        this.popupImage = null;
    };
    HomePage.prototype.watchConnection = function () {
        var _this = this;
        this.hasConnection = connectivity.getConnectionType() != connectivity.connectionType.none;
        connectivity.startMonitoring(function (connectionType) {
            _this.ngZone.run(function () {
                _this.hasConnection = connectionType != connectivity.connectionType.none;
            });
            console.log("Home: Connection changed " + connectionType + " HasConnection: " + _this.hasConnection);
        });
        this.page.on('navigatingTo', function () {
            _this.ngZone.run(function () {
                setTimeout(function () {
                    console.log('Home: navigatedTo');
                    _this.hasConnection = connectivity.getConnectionType() != connectivity.connectionType.none;
                });
            });
        });
    };
    HomePage.prototype.configureTutorialAnimation = function () {
        var _this = this;
        this.tutorialService
            .init()
            .debounceTime(500)
            .subscribe(function (show) {
            var tutorial = _this.page.getViewById('tutorial');
            if (!tutorial || !tutorial.animate) {
                return;
            }
            setTimeout(function () {
                if (show) {
                    if (_this.tutorial)
                        return;
                    _this.tab = 'meudesconto';
                    _this.tutorial = true;
                    tutorial.animate({
                        translate: { x: -200, y: 0 },
                        opacity: 0,
                        duration: 0
                    }).then(function () {
                        tutorial.animate({
                            translate: { x: 0, y: 0 },
                            opacity: 1,
                            duration: 500
                        });
                    });
                    return;
                }
                tutorial.animate({
                    translate: { x: 0, y: 0 },
                    opacity: 1,
                    duration: 0
                }).then(function () {
                    tutorial.animate({
                        translate: { x: -200, y: 0 },
                        opacity: 0,
                        duration: 500
                    }).then(function () {
                        _this.tutorial = false;
                    });
                });
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'HomePage',
        templateUrl: './home.html',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [page_1.Page,
        core_1.NgZone,
        tutorial_1.TutorialService,
        popup_1.PopUp,
        notification_1.NotificationService,
        offer_1.OfferService,
        live_settings_1.LiveSettings])
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE0SDtBQUM1SCwyQ0FBNkM7QUFLN0MsZ0NBQStCO0FBRy9CLHNEQUFvRDtBQUNwRCw4REFBNEQ7QUFDNUQsNERBQWtFO0FBQ2xFLDhDQUFvRDtBQUNwRCw4Q0FBNkM7QUFDN0Msb0RBQTBEO0FBUTFELElBQWEsUUFBUTtJQXdCbkIsa0JBQ1UsSUFBVSxFQUNWLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxZQUFtQixFQUNuQixtQkFBd0MsRUFDeEMsWUFBMEIsRUFDMUIsWUFBMEI7UUFOMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTlCN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixlQUFVLEdBQVksMEJBQVcsQ0FBQyxlQUFlLENBQUM7UUFFbEQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUc3QixrQkFBYSxHQUFXLFNBQVMsQ0FBQztRQUNsQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBV3ZCLFNBQUksR0FBVyxZQUFZLENBQUM7SUFVaEMsQ0FBQztJQW5CTCxzQkFBVyx5QkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzthQUVELFVBQWUsR0FBVztZQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDO2dCQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUxBO0lBbUJNLDJCQUFRLEdBQWY7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRWxDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLEtBQU8sQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNuRixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdCLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sK0JBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSwrQkFBWSxHQUFuQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsVUFBVSxDQUFDO1lBQ1QsSUFBTSxlQUFlLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksV0FBVyxDQUFDLENBQUM7WUFDdEUsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSwrQkFBWSxHQUFuQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVNLDhCQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtCQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxrQ0FBZSxHQUF2QjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBRTFGLFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBQyxjQUFzQjtZQUNsRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZCxLQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQTRCLGNBQWMsd0JBQW1CLEtBQUksQ0FBQyxhQUFlLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZCxVQUFVLENBQUM7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNkNBQTBCLEdBQWxDO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLElBQUksRUFBRTthQUNOLFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDakIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhLFVBQVUsQ0FBQyxDQUFDO1lBRS9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQztZQUNULENBQUM7WUFFRCxVQUFVLENBQUM7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFDMUIsS0FBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUNmLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUM1QixPQUFPLEVBQUUsQ0FBQzt3QkFDVixRQUFRLEVBQUUsQ0FBQztxQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNOLFFBQVEsQ0FBQyxPQUFPLENBQUM7NEJBQ2YsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixPQUFPLEVBQUUsQ0FBQzs0QkFDVixRQUFRLEVBQUUsR0FBRzt5QkFDZCxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDZixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxDQUFDO2lCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ04sUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDZixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDNUIsT0FBTyxFQUFFLENBQUM7d0JBQ1YsUUFBUSxFQUFFLEdBQUc7cUJBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDTixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBOUpELElBOEpDO0FBOUpZLFFBQVE7SUFOcEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsYUFBYTtRQUMxQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztLQUNqRCxDQUFDO3FDQTBCZ0IsV0FBSTtRQUNGLGFBQU07UUFDRywwQkFBZTtRQUNsQixhQUFLO1FBQ0Usa0NBQW1CO1FBQzFCLG9CQUFZO1FBQ1osNEJBQVk7R0EvQnpCLFFBQVEsQ0E4SnBCO0FBOUpZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSAnY29ubmVjdGl2aXR5JztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQvdGV4dC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBvcGVuVXJsIH0gZnJvbSAndXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgYXBwU2V0dGluZ3MgfSBmcm9tICcuLi8uLi8uLi9hcHAuc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMaXZlU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saXZlLXNldHRpbmdzJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IE9mZmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmVyJztcclxuaW1wb3J0IHsgUG9wVXAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3B1cCc7XHJcbmltcG9ydCB7IFR1dG9yaWFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3R1dG9yaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdIb21lUGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgdHV0b3JpYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaGFzQ29ubmVjdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGlzSG1sQnVpbGQ6IGJvb2xlYW4gPSBhcHBTZXR0aW5ncy5JU19ITUxfRU5EUE9JTlQ7XHJcblxyXG4gIHB1YmxpYyBpc1NlYXJjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzZWFyY2g6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBjb21wb25lbnRTZWFyY2g6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgaGFzT2ZmZXJzOiBib29sZWFuO1xyXG4gIHB1YmxpYyBvZmZlcnNCZ0NvbG9yOiBzdHJpbmcgPSAnI0ZGRkZGRic7XHJcbiAgcHVibGljIHBvcHVwSW1hZ2U6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgZ2V0IHRhYigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhYjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgdGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICBpZiAodGFiID09PSAnbWV1ZGVzY29udG8nKSB0aGlzLmNvbmZpZ3VyZVR1dG9yaWFsQW5pbWF0aW9uKCk7XHJcbiAgICB0aGlzLl90YWIgPSB0YWI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90YWI6IHN0cmluZyA9ICdnYW5ob21ldHJvJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSB0dXRvcmlhbFNlcnZpY2U6IFR1dG9yaWFsU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9wVXBTZXJ2aWNlOiBQb3BVcCxcclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgb2ZmZXJTZXJ2aWNlOiBPZmZlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxpdmVTZXR0aW5nczogTGl2ZVNldHRpbmdzXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5wb3BVcFNlcnZpY2UuZ2V0UG9wdXAoKS5zdWJzY3JpYmUocG9wdXAgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUE9QVVA6ICR7cG9wdXB9YCk7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWIgPSAnbWV1ZGVzY29udG8nO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wb3B1cEltYWdlID0gcG9wdXA7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxpdmVTZXR0aW5ncy5nZXRTZXR0aW5ncygnb2ZmZXJzX2JnX2NvbG9yJywgdGhpcy5vZmZlcnNCZ0NvbG9yKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMub2ZmZXJzQmdDb2xvciA9IHZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmVUdXRvcmlhbEFuaW1hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlLm9mZignbmF2aWdhdGVkVG8nKTtcclxuICAgIGNvbm5lY3Rpdml0eS5zdG9wTW9uaXRvcmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVUdXRvcmlhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHV0b3JpYWxTZXJ2aWNlLmhpZGVUdXRvcmlhbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZVNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNTZWFyY2hpbmcgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRleHRGaWVsZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KCd0eHRTZWFyY2gnKTtcclxuICAgICAgc2VhcmNoVGV4dEZpZWxkLmZvY3VzKCk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaE9mZmVycygpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdIb21lOiBzZWFyY2ggb2ZmZXJzJyk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFNlYXJjaCA9IHRoaXMuc2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyU2VhcmNoKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0hvbWU6IGNsZWFyIHNlYXJjaCcpO1xyXG4gICAgdGhpcy5jb21wb25lbnRTZWFyY2ggPSB0aGlzLnNlYXJjaCA9ICcnO1xyXG4gICAgdGhpcy5pc1NlYXJjaGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc21pc3NQb3BVcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucG9wVXBTZXJ2aWNlLm1hcmtBc1ZpZXdlZCh0aGlzLnBvcHVwSW1hZ2UpO1xyXG4gICAgdGhpcy5wb3B1cEltYWdlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2F0Y2hDb25uZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYXNDb25uZWN0aW9uID0gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkgIT0gY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU7XHJcblxyXG4gICAgY29ubmVjdGl2aXR5LnN0YXJ0TW9uaXRvcmluZygoY29ubmVjdGlvblR5cGU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFzQ29ubmVjdGlvbiA9IGNvbm5lY3Rpb25UeXBlICE9IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBIb21lOiBDb25uZWN0aW9uIGNoYW5nZWQgJHtjb25uZWN0aW9uVHlwZX0gSGFzQ29ubmVjdGlvbjogJHt0aGlzLmhhc0Nvbm5lY3Rpb259YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhZ2Uub24oJ25hdmlnYXRpbmdUbycsICgpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdIb21lOiBuYXZpZ2F0ZWRUbycpO1xyXG4gICAgICAgICAgdGhpcy5oYXNDb25uZWN0aW9uID0gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkgIT0gY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyZVR1dG9yaWFsQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy50dXRvcmlhbFNlcnZpY2VcclxuICAgICAgLmluaXQoKVxyXG4gICAgICAuZGVib3VuY2VUaW1lKDUwMClcclxuICAgICAgLnN1YnNjcmliZShzaG93ID0+IHtcclxuICAgICAgICBjb25zdCB0dXRvcmlhbCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxHcmlkTGF5b3V0PigndHV0b3JpYWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0dXRvcmlhbCB8fCAhdHV0b3JpYWwuYW5pbWF0ZSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50dXRvcmlhbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnRhYiA9ICdtZXVkZXNjb250byc7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0dXRvcmlhbC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdHV0b3JpYWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdHV0b3JpYWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdHV0b3JpYWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy50dXRvcmlhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iXX0=