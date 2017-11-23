import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
export declare class SxNgxFabricDialogRef<T> {
    private overlayRef;
    private _beforeClose;
    private _afterClosed;
    componentInstance: T;
    constructor(overlayRef: OverlayRef);
    close(value?: any): void;
    afterClosed(): Observable<any>;
    beforeClose(): Observable<any>;
}
