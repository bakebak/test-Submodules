var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var components_1 = require("../../components");
var services_1 = require("../../services");
var components_2 = require("../components");
var pipes_1 = require("../pipes");
var discount_1 = require("./home/discount/discount");
var home_1 = require("./home/home");
var form_1 = require("./home/reward-modal/components/form");
var reward_modal_1 = require("./home/reward-modal/reward-modal");
var goals_1 = require("./home/rewards/components/goals");
var instructions_1 = require("./home/rewards/components/instructions");
var prizes_1 = require("./home/rewards/components/prizes");
var rewards_1 = require("./home/rewards/rewards");
var CommonPageModule = (function () {
    function CommonPageModule() {
    }
    return CommonPageModule;
}());
CommonPageModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            forms_1.ReactiveFormsModule,
            pipes_1.CommonPipeModule,
            components_2.CommonComponentModule,
            components_1.ComponentModule,
            services_1.ServiceModule,
            common_1.CommonModule
        ],
        declarations: [
            home_1.HomePage,
            discount_1.HomePageDiscountComponent,
            rewards_1.HomePageRewardsComponent,
            reward_modal_1.HomePageRewardModal,
            form_1.HomePageRewardModalFormComponent,
            instructions_1.HomePageRewardsInstructionsModal,
            goals_1.HomePageRewardsGoalsComponent,
            prizes_1.HomePageRewardsPrizesComponent
        ],
        entryComponents: [
            reward_modal_1.HomePageRewardModal,
            instructions_1.HomePageRewardsInstructionsModal
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], CommonPageModule);
exports.CommonPageModule = CommonPageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMENBQStDO0FBQy9DLHNDQUEyRDtBQUMzRCx3Q0FBcUQ7QUFDckQsNkRBQStEO0FBQy9ELGdGQUE4RTtBQUU5RSwrQ0FBbUQ7QUFDbkQsMkNBQStDO0FBQy9DLDRDQUFzRDtBQUN0RCxrQ0FBNEM7QUFDNUMscURBQXFFO0FBQ3JFLG9DQUF1QztBQUN2Qyw0REFBdUY7QUFDdkYsaUVBQXVFO0FBQ3ZFLHlEQUFnRjtBQUNoRix1RUFBMEY7QUFDMUYsMkRBQWtGO0FBQ2xGLGtEQUFrRTtBQTZCbEUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUEzQjVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw4Q0FBdUI7WUFDdkIsMkJBQW1CO1lBQ25CLHdCQUFnQjtZQUNoQixrQ0FBcUI7WUFDckIsNEJBQWU7WUFDZix3QkFBYTtZQUNiLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixlQUFRO1lBQ1Isb0NBQXlCO1lBQ3pCLGtDQUF3QjtZQUN4QixrQ0FBbUI7WUFDbkIsdUNBQWdDO1lBQ2hDLCtDQUFnQztZQUNoQyxxQ0FBNkI7WUFDN0IsdUNBQThCO1NBQy9CO1FBQ0QsZUFBZSxFQUFFO1lBQ2Ysa0NBQW1CO1lBQ25CLCtDQUFnQztTQUNqQztRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU2VydmljZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENvbW1vblBpcGVNb2R1bGUgfSBmcm9tICcuLi9waXBlcyc7XHJcbmltcG9ydCB7IEhvbWVQYWdlRGlzY291bnRDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvZGlzY291bnQvZGlzY291bnQnO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS9ob21lJztcclxuaW1wb3J0IHsgSG9tZVBhZ2VSZXdhcmRNb2RhbEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2hvbWUvcmV3YXJkLW1vZGFsL2NvbXBvbmVudHMvZm9ybSc7XHJcbmltcG9ydCB7IEhvbWVQYWdlUmV3YXJkTW9kYWwgfSBmcm9tICcuL2hvbWUvcmV3YXJkLW1vZGFsL3Jld2FyZC1tb2RhbCc7XHJcbmltcG9ydCB7IEhvbWVQYWdlUmV3YXJkc0dvYWxzQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL3Jld2FyZHMvY29tcG9uZW50cy9nb2Fscyc7XHJcbmltcG9ydCB7IEhvbWVQYWdlUmV3YXJkc0luc3RydWN0aW9uc01vZGFsIH0gZnJvbSAnLi9ob21lL3Jld2FyZHMvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMnO1xyXG5pbXBvcnQgeyBIb21lUGFnZVJld2FyZHNQcml6ZXNDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvcmV3YXJkcy9jb21wb25lbnRzL3ByaXplcyc7XHJcbmltcG9ydCB7IEhvbWVQYWdlUmV3YXJkc0NvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9yZXdhcmRzL3Jld2FyZHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25QaXBlTW9kdWxlLFxyXG4gICAgQ29tbW9uQ29tcG9uZW50TW9kdWxlLFxyXG4gICAgQ29tcG9uZW50TW9kdWxlLFxyXG4gICAgU2VydmljZU1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIb21lUGFnZSxcclxuICAgIEhvbWVQYWdlRGlzY291bnRDb21wb25lbnQsXHJcbiAgICBIb21lUGFnZVJld2FyZHNDb21wb25lbnQsXHJcbiAgICBIb21lUGFnZVJld2FyZE1vZGFsLFxyXG4gICAgSG9tZVBhZ2VSZXdhcmRNb2RhbEZvcm1Db21wb25lbnQsXHJcbiAgICBIb21lUGFnZVJld2FyZHNJbnN0cnVjdGlvbnNNb2RhbCxcclxuICAgIEhvbWVQYWdlUmV3YXJkc0dvYWxzQ29tcG9uZW50LFxyXG4gICAgSG9tZVBhZ2VSZXdhcmRzUHJpemVzQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEhvbWVQYWdlUmV3YXJkTW9kYWwsXHJcbiAgICBIb21lUGFnZVJld2FyZHNJbnN0cnVjdGlvbnNNb2RhbFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25QYWdlTW9kdWxlIHsgfSJdfQ==