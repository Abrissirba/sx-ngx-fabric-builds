import { ChangeDetectorRef } from '@angular/core';
export declare class ToggleComponent {
    private changeDetectorRef;
    private _checked;
    checked: boolean;
    disabled: boolean;
    offText: string;
    onText: string;
    textLeft: boolean;
    readonly classIsDisabled: boolean;
    readonly classTextLeft: boolean;
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
}
