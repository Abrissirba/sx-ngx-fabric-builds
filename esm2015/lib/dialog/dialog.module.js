/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { SxNgxFabricDialogActions, SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent } from './dialog-content.directive';
export class DialogModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNEJoSixNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO0tBQ0g7OztZQWhDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWiw2QkFBNkI7b0JBQzdCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dBY3Rpb25zLCBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlLCBTeE5neEZhYnJpY0RpYWxvZ1RpdGxlLCBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQgfSBmcm9tICcuL2RpYWxvZy1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBQb3J0YWxNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlLFxyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dUaXRsZSxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nQ29udGVudCxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nQWN0aW9uc1xyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dDbG9zZSxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nVGl0bGUsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0FjdGlvbnNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEaWFsb2dNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1N4Tmd4RmFicmljRGlhbG9nU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==