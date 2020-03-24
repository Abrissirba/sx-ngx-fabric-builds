/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /** @type {?} */
    SxNgxFabricDialogRef.prototype._beforeClose;
    /** @type {?} */
    SxNgxFabricDialogRef.prototype._afterClosed;
    /** @type {?} */
    SxNgxFabricDialogRef.prototype.componentInstance;
    /** @type {?} */
    SxNgxFabricDialogRef.prototype.overlayRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7QUFFM0MsTUFBTSxPQUFPLG9CQUFvQjs7OztJQU0vQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzRCQUxuQixJQUFJLE9BQU8sRUFBTzs0QkFDbEIsSUFBSSxPQUFPLEVBQU87S0FJSzs7Ozs7SUFFOUMsS0FBSyxDQUFDLEtBQVc7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCL0I7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6QztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nUmVmPFQ+IHtcclxuICBwcml2YXRlIF9iZWZvcmVDbG9zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZikge31cclxuXHJcbiAgY2xvc2UodmFsdWU/OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICAvLyB0aGlzLmNvbXBvbmVudEluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxyXG4gICAgLy8gICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ3N0YXJ0JylcclxuICAgIC8vICAgLnRha2UoMSlcclxuICAgIC8vICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5fYmVmb3JlQ2xvc2UubmV4dCgpO1xyXG4gICAgLy8gICAgIHRoaXMuX2JlZm9yZUNsb3NlLmNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaEJhY2tkcm9wKCk7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuY29tcG9uZW50SW5zdGFuY2UuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkXHJcbiAgICAvLyAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ2xlYXZlJylcclxuICAgIC8vICAgLnRha2UoMSlcclxuICAgIC8vICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIC8vICAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcclxuICAgIC8vICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zdGFydEV4aXRBbmltYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGFmdGVyQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVDbG9zZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JlZm9yZUNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=