import { ChangeDetectorRef } from '@angular/core';
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
    readonly classMultiline: boolean;
    readonly classIsDisabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
    onChange(evt: any): void;
    onTouched(evt: any): void;
    setDisabledState(isDisabled: boolean): void;
    private _onChange;
    private _onTouched;
    writeValue(val: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
