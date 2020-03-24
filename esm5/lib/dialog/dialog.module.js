/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { SxNgxFabricDialogActions, SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent } from './dialog-content.directive';
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    /**
     * @return {?}
     */
    DialogModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    };
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        PortalModule
                    ],
                    declarations: [
                        SxNgxDialogContainerComponent,
                        SxNgxFabricDialogClose,
                        SxNgxFabricDialogTitle,
                        SxNgxFabricDialogContent,
                        SxNgxFabricDialogActions
                    ],
                    entryComponents: [
                        SxNgxDialogContainerComponent
                    ],
                    exports: [
                        SxNgxFabricDialogClose,
                        SxNgxFabricDialogTitle,
                        SxNgxFabricDialogContent,
                        SxNgxFabricDialogActions
                    ],
                    providers: [
                        SxNgxFabricDialogService
                    ]
                },] }
    ];
    return DialogModule;
}());
export { DialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoSjtJQUFBO0lBaUNBLENBQUM7Ozs7SUFOUSxvQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O2dCQWhDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULHdCQUF3QjtxQkFDekI7aUJBQ0Y7O0lBUUQsbUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQVBZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nQWN0aW9ucywgU3hOZ3hGYWJyaWNEaWFsb2dDbG9zZSwgU3hOZ3hGYWJyaWNEaWFsb2dUaXRsZSwgU3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGVudC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgUG9ydGFsTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dDbG9zZSxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nVGl0bGUsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0FjdGlvbnNcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nQ2xvc2UsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ1RpdGxlLFxyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50LFxyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dBY3Rpb25zXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGlhbG9nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtTeE5neEZhYnJpY0RpYWxvZ1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=