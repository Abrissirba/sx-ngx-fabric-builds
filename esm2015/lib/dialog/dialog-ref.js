/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class SxNgxFabricDialogRef {
    /**
     * @param {?} overlayRef
     */
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    close(value) {
        this.overlayRef.dispose();
        this._afterClosed.next(value);
        this._afterClosed.complete();
        this.componentInstance = null;
        // this.componentInstance.animationStateChanged
        //   .filter(event => event.phaseName === 'start')
        //   .take(1)
        //   .subscribe(() => {
        //     this._beforeClose.next();
        //     this._beforeClose.complete();
        //     this.overlayRef.detachBackdrop();
        //   });
        // this.componentInstance.animationStateChanged
        //   .filter(event => event.phaseName === 'done' && event.toState === 'leave')
        //   .take(1)
        //   .subscribe(() => {
        //     this.overlayRef.dispose();
        //     this._afterClosed.next();
        //     this._afterClosed.complete();
        //     this.componentInstance = null;
        //   });
        // this.componentInstance.startExitAnimation();
    }
    /**
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * @return {?}
     */
    beforeClose() {
        return this._beforeClose.asObservable();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype._beforeClose;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype._afterClosed;
    /** @type {?} */
    SxNgxFabricDialogRef.prototype.componentInstance;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogRef.prototype.overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFNL0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUxsQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDbEMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSUcsQ0FBQzs7Ozs7SUFFOUMsS0FBSyxDQUFDLEtBQVc7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUU5QiwrQ0FBK0M7UUFDL0Msa0RBQWtEO1FBQ2xELGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyx3Q0FBd0M7UUFDeEMsUUFBUTtRQUVSLCtDQUErQztRQUMvQyw4RUFBOEU7UUFDOUUsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLG9DQUFvQztRQUNwQyxxQ0FBcUM7UUFDckMsUUFBUTtRQUVSLCtDQUErQztJQUNqRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7Ozs7OztJQTFDQyw0Q0FBMEM7Ozs7O0lBQzFDLDRDQUEwQzs7SUFFMUMsaURBQXFCOzs7OztJQUVULDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPiB7XHJcbiAgcHJpdmF0ZSBfYmVmb3JlQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGNvbXBvbmVudEluc3RhbmNlOiBUO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpIHt9XHJcblxyXG4gIGNsb3NlKHZhbHVlPzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgLy8gdGhpcy5jb21wb25lbnRJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcclxuICAgIC8vICAgLmZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdzdGFydCcpXHJcbiAgICAvLyAgIC50YWtlKDEpXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuX2JlZm9yZUNsb3NlLm5leHQoKTtcclxuICAgIC8vICAgICB0aGlzLl9iZWZvcmVDbG9zZS5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2hCYWNrZHJvcCgpO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyB0aGlzLmNvbXBvbmVudEluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxyXG4gICAgLy8gICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdsZWF2ZScpXHJcbiAgICAvLyAgIC50YWtlKDEpXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xyXG4gICAgLy8gICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc3RhcnRFeGl0QW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlQ2xvc2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9iZWZvcmVDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19