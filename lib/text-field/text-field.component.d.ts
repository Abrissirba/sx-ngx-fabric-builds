import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextFieldComponent {
    private changeDetectorRef;
    label: any;
    multiline: boolean;
    rows: number;
    type: string;
    placeholder: any;
    disabled: boolean;
    required: boolean;
    value: any;
    classes: string;
    get classMultiline(): boolean;
    get classIsDisabled(): boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
    onChange(evt: any): void;
    onTouched(evt: any): void;
    setDisabledState(isDisabled: boolean): void;
    private _onChange;
    private _onTouched;
    writeValue(val: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDef<TextFieldComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TextFieldComponent, "sx-ngx-fabric-text-field", never, { "label": "label"; "multiline": "multiline"; "rows": "rows"; "type": "type"; "placeholder": "placeholder"; "disabled": "disabled"; "required": "required"; }, {}, never>;
}
