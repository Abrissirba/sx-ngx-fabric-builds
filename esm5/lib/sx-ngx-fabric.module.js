import { NgModule } from '@angular/core';
import { SxNgxFabricComponent } from './sx-ngx-fabric.component';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from './checkbox/checkbox.module';
import { ButtonModule } from './button/button.module';
import { TextFieldModule } from './text-field/text-field.module';
import { DialogModule } from './dialog/dialog.module';
import { ToggleModule } from './toggle/toggle.module';
import { CalloutModule } from './callout/callout.module';
import { NavModule } from './nav/nav.module';
import * as i0 from "@angular/core";
import * as i1 from "./dialog/dialog.module";
var SxNgxFabricModule = /** @class */ (function () {
    function SxNgxFabricModule() {
    }
    SxNgxFabricModule.ɵmod = i0.ɵɵdefineNgModule({ type: SxNgxFabricModule });
    SxNgxFabricModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SxNgxFabricModule_Factory(t) { return new (t || SxNgxFabricModule)(); }, imports: [[
                CommonModule,
                CheckboxModule,
                ButtonModule,
                TextFieldModule,
                DialogModule.forRoot(),
                ToggleModule,
                BreadcrumbModule,
                CalloutModule,
                NavModule
            ],
            CheckboxModule,
            ButtonModule,
            TextFieldModule,
            DialogModule,
            ToggleModule,
            BreadcrumbModule,
            CalloutModule,
            NavModule] });
    return SxNgxFabricModule;
}());
export { SxNgxFabricModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SxNgxFabricModule, { declarations: [SxNgxFabricComponent], imports: [CommonModule,
        CheckboxModule,
        ButtonModule,
        TextFieldModule, i1.DialogModule, ToggleModule,
        BreadcrumbModule,
        CalloutModule,
        NavModule], exports: [SxNgxFabricComponent,
        CheckboxModule,
        ButtonModule,
        TextFieldModule,
        DialogModule,
        ToggleModule,
        BreadcrumbModule,
        CalloutModule,
        NavModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CheckboxModule,
                    ButtonModule,
                    TextFieldModule,
                    DialogModule.forRoot(),
                    ToggleModule,
                    BreadcrumbModule,
                    CalloutModule,
                    NavModule
                ],
                declarations: [SxNgxFabricComponent],
                exports: [
                    SxNgxFabricComponent,
                    CheckboxModule,
                    ButtonModule,
                    TextFieldModule,
                    DialogModule,
                    ToggleModule,
                    BreadcrumbModule,
                    CalloutModule,
                    NavModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3gtbmd4LWZhYnJpYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL3N4LW5neC1mYWJyaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRTdDO0lBQUE7S0F5QmlDO3lEQUFwQixpQkFBaUI7cUhBQWpCLGlCQUFpQixrQkF4Qm5CO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2IsU0FBUzthQUNWO1lBSUMsY0FBYztZQUNkLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFNBQVM7NEJBbENiO0NBcUNpQyxBQXpCakMsSUF5QmlDO1NBQXBCLGlCQUFpQjt3RkFBakIsaUJBQWlCLG1CQWJiLG9CQUFvQixhQVZqQyxZQUFZO1FBQ1osY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlLG1CQUVmLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFNBQVMsYUFJVCxvQkFBb0I7UUFDcEIsY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFNBQVM7a0RBR0EsaUJBQWlCO2NBekI3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsU0FBUztpQkFDVjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixTQUFTO2lCQUNWO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3hOZ3hGYWJyaWNDb21wb25lbnQgfSBmcm9tICcuL3N4LW5neC1mYWJyaWMuY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJNb2R1bGUgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBUZXh0RmllbGRNb2R1bGUgfSBmcm9tICcuL3RleHQtZmllbGQvdGV4dC1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBUb2dnbGVNb2R1bGUgfSBmcm9tICcuL3RvZ2dsZS90b2dnbGUubW9kdWxlJztcbmltcG9ydCB7IENhbGxvdXRNb2R1bGUgfSBmcm9tICcuL2NhbGxvdXQvY2FsbG91dC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2TW9kdWxlIH0gZnJvbSAnLi9uYXYvbmF2Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIFRleHRGaWVsZE1vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvZ2dsZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIENhbGxvdXRNb2R1bGUsXG4gICAgTmF2TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N4Tmd4RmFicmljQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIFN4Tmd4RmFicmljQ29tcG9uZW50LFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlLFxuICAgIFRvZ2dsZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIENhbGxvdXRNb2R1bGUsXG4gICAgTmF2TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNNb2R1bGUge31cbiJdfQ==