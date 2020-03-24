import { Subject } from 'rxjs';
var SxNgxFabricDialogRef = /** @class */ (function () {
    function SxNgxFabricDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new Subject();
        this._afterClosed = new Subject();
    }
    SxNgxFabricDialogRef.prototype.close = function (value) {
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
    SxNgxFabricDialogRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    SxNgxFabricDialogRef.prototype.beforeClose = function () {
        return this._beforeClose.asObservable();
    };
    return SxNgxFabricDialogRef;
}());
export { SxNgxFabricDialogRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUUzQztJQU1FLDhCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTGxDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNsQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFJRyxDQUFDO0lBRTlDLG9DQUFLLEdBQUwsVUFBTSxLQUFXO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFOUIsK0NBQStDO1FBQy9DLGtEQUFrRDtRQUNsRCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsd0NBQXdDO1FBQ3hDLFFBQVE7UUFFUiwrQ0FBK0M7UUFDL0MsOEVBQThFO1FBQzlFLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMscUNBQXFDO1FBQ3JDLFFBQVE7UUFFUiwrQ0FBK0M7SUFDakQsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ1JlZjxUPiB7XHJcbiAgcHJpdmF0ZSBfYmVmb3JlQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGNvbXBvbmVudEluc3RhbmNlOiBUO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpIHt9XHJcblxyXG4gIGNsb3NlKHZhbHVlPzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgLy8gdGhpcy5jb21wb25lbnRJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcclxuICAgIC8vICAgLmZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdzdGFydCcpXHJcbiAgICAvLyAgIC50YWtlKDEpXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuX2JlZm9yZUNsb3NlLm5leHQoKTtcclxuICAgIC8vICAgICB0aGlzLl9iZWZvcmVDbG9zZS5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2hCYWNrZHJvcCgpO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyB0aGlzLmNvbXBvbmVudEluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxyXG4gICAgLy8gICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdsZWF2ZScpXHJcbiAgICAvLyAgIC50YWtlKDEpXHJcbiAgICAvLyAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xyXG4gICAgLy8gICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc3RhcnRFeGl0QW5pbWF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlQ2xvc2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9iZWZvcmVDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19