import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToggleComponent {
    private changeDetectorRef;
    private _checked;
    get checked(): boolean;
    set checked(checked: boolean);
    disabled: boolean;
    offText: string;
    onText: string;
    textLeft: boolean;
    get classIsDisabled(): boolean;
    get classTextLeft(): boolean;
    inputId: string;
    constructor(changeDetectorRef: ChangeDetectorRef);
    onInputClick(evt: MouseEvent): void;
    toggle(): void;
    setDisabledState(isDisabled: boolean): void;
    private _onChange;
    private _onTouched;
    writeValue(val: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDef<ToggleComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ToggleComponent, "sx-ngx-fabric-toggle", never, { "checked": "checked"; "disabled": "disabled"; "offText": "offText"; "onText": "onText"; "textLeft": "textLeft"; }, {}, never>;
}
