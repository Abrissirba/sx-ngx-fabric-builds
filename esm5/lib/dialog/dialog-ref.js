/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @template T
 */
var /**
 * @template T
 */
SxNgxFabricDialogRef = /** @class */ (function () {
    function SxNgxFabricDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.close = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.afterClosed = /**
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    SxNgxFabricDialogRef.prototype.beforeClose = /**
     * @return {?}
     */
    function () {
        return this._beforeClose.asObservable();
    };
    return SxNgxFabricDialogRef;
}());
/**
 * @template T
 */
export { SxNgxFabricDialogRef };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7QUFFM0M7OztBQUFBO0lBTUUsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7NEJBTG5CLElBQUksT0FBTyxFQUFPOzRCQUNsQixJQUFJLE9BQU8sRUFBTztLQUlLOzs7OztJQUU5QyxvQ0FBSzs7OztJQUFMLFVBQU0sS0FBVztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0IvQjs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6QzsrQkE3Q0g7SUE4Q0MsQ0FBQTs7OztBQTNDRCxnQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dSZWY8VD4ge1xyXG4gIHByaXZhdGUgX2JlZm9yZUNsb3NlID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICBjb21wb25lbnRJbnN0YW5jZTogVDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxyXG5cclxuICBjbG9zZSh2YWx1ZT86IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgIC8vIHRoaXMuY29tcG9uZW50SW5zdGFuY2UuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkXHJcbiAgICAvLyAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnc3RhcnQnKVxyXG4gICAgLy8gICAudGFrZSgxKVxyXG4gICAgLy8gICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgICB0aGlzLl9iZWZvcmVDbG9zZS5uZXh0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5fYmVmb3JlQ2xvc2UuY29tcGxldGUoKTtcclxuICAgIC8vICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoQmFja2Ryb3AoKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5jb21wb25lbnRJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcclxuICAgIC8vICAgLmZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdkb25lJyAmJiBldmVudC50b1N0YXRlID09PSAnbGVhdmUnKVxyXG4gICAgLy8gICAudGFrZSgxKVxyXG4gICAgLy8gICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgIC8vICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoKTtcclxuICAgIC8vICAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnN0YXJ0RXhpdEFuaW1hdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZUNsb3NlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmVmb3JlQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==