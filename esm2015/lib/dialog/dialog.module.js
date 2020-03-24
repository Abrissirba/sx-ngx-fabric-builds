import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { SxNgxFabricDialogActions, SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent } from './dialog-content.directive';
import * as i0 from "@angular/core";
export class DialogModule {
    static forRoot() {
        return {
            ngModule: DialogModule,
            providers: [SxNgxFabricDialogService]
        };
    }
}
DialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: DialogModule });
DialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, providers: [SxNgxFabricDialogService], imports: [[CommonModule, OverlayModule, PortalModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DialogModule, { declarations: [SxNgxDialogContainerComponent,
        SxNgxFabricDialogClose,
        SxNgxFabricDialogTitle,
        SxNgxFabricDialogContent,
        SxNgxFabricDialogActions], imports: [CommonModule, OverlayModule, PortalModule], exports: [SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent, SxNgxFabricDialogActions] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule],
                declarations: [
                    SxNgxDialogContainerComponent,
                    SxNgxFabricDialogClose,
                    SxNgxFabricDialogTitle,
                    SxNgxFabricDialogContent,
                    SxNgxFabricDialogActions
                ],
                entryComponents: [SxNgxDialogContainerComponent],
                exports: [SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent, SxNgxFabricDialogActions],
                providers: [SxNgxFabricDialogService]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN6QixNQUFNLDRCQUE0QixDQUFDOztBQWVwQyxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7Z0RBTlUsWUFBWTt1R0FBWixZQUFZLG1CQUZaLENBQUMsd0JBQXdCLENBQUMsWUFWNUIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzt3RkFZekMsWUFBWSxtQkFWckIsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHdCQUF3QixhQU5oQixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksYUFTekMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCO2tEQUdqRyxZQUFZO2NBYnhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDcEQsWUFBWSxFQUFFO29CQUNaLDZCQUE2QjtvQkFDN0Isc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7Z0JBQzdHLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIFN4Tmd4RmFicmljRGlhbG9nQWN0aW9ucyxcclxuICBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlLFxyXG4gIFN4Tmd4RmFicmljRGlhbG9nVGl0bGUsXHJcbiAgU3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50XHJcbn0gZnJvbSAnLi9kaWFsb2ctY29udGVudC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlLFxyXG4gICAgU3hOZ3hGYWJyaWNEaWFsb2dUaXRsZSxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nQ29udGVudCxcclxuICAgIFN4Tmd4RmFicmljRGlhbG9nQWN0aW9uc1xyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlLCBTeE5neEZhYnJpY0RpYWxvZ1RpdGxlLCBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQsIFN4Tmd4RmFicmljRGlhbG9nQWN0aW9uc10sXHJcbiAgcHJvdmlkZXJzOiBbU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERpYWxvZ01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERpYWxvZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbU3hOZ3hGYWJyaWNEaWFsb2dTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19