/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/guid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Guid = /** @class */ (function () {
    function Guid() {
    }
    /**
     * @return {?}
     */
    Guid.uniqueid = /**
     * @return {?}
     */
    function () {
        // always start with a letter (for DOM friendlyness)
        /** @type {?} */
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            /** @type {?} */
            var ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);
        return (idstr);
    };
    return Guid;
}());
export { Guid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFlQSxDQUFDOzs7O0lBZFUsYUFBUTs7O0lBQWY7OztZQUVRLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEUsR0FBRzs7O2dCQUVPLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDaEMsOENBQThDO2dCQUM5QyxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztTQUNKLFFBQVEsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7UUFFNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3VpZCB7XHJcbiAgICBzdGF0aWMgdW5pcXVlaWQoKSB7XHJcbiAgICAgICAgLy8gYWx3YXlzIHN0YXJ0IHdpdGggYSBsZXR0ZXIgKGZvciBET00gZnJpZW5kbHluZXNzKVxyXG4gICAgICAgIGxldCBpZHN0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDI1KSArIDY1KSk7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAvLyBiZXR3ZWVuIG51bWJlcnMgYW5kIGNoYXJhY3RlcnMgKDQ4IGlzIDAgYW5kIDkwIGlzIFogKDQyLTQ4ID0gOTApXHJcbiAgICAgICAgICAgIGNvbnN0IGFzY2ljb2RlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQyKSArIDQ4KTtcclxuICAgICAgICAgICAgaWYgKGFzY2ljb2RlIDwgNTggfHwgYXNjaWNvZGUgPiA2NCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhjbHVkZSBhbGwgY2hhcnMgYmV0d2VlbiA6ICg1OCkgYW5kIEAgKDY0KVxyXG4gICAgICAgICAgICAgICAgaWRzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhc2NpY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChpZHN0ci5sZW5ndGggPCAzMik7XHJcblxyXG4gICAgICAgIHJldHVybiAoaWRzdHIpO1xyXG4gICAgfVxyXG59Il19