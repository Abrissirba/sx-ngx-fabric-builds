/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/guid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Guid {
    /**
     * @return {?}
     */
    static uniqueid() {
        // always start with a letter (for DOM friendlyness)
        /** @type {?} */
        let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            /** @type {?} */
            const ascicode = Math.floor((Math.random() * 42) + 48);
            if (ascicode < 58 || ascicode > 64) {
                // exclude all chars between : (58) and @ (64)
                idstr += String.fromCharCode(ascicode);
            }
        } while (idstr.length < 32);
        return (idstr);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxJQUFJOzs7O0lBQ2IsTUFBTSxDQUFDLFFBQVE7OztZQUVQLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEUsR0FBRzs7O2tCQUVPLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDaEMsOENBQThDO2dCQUM5QyxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztTQUNKLFFBQVEsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7UUFFNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHN0YXRpYyB1bmlxdWVpZCgpIHtcclxuICAgICAgICAvLyBhbHdheXMgc3RhcnQgd2l0aCBhIGxldHRlciAoZm9yIERPTSBmcmllbmRseW5lc3MpXHJcbiAgICAgICAgbGV0IGlkc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjUpICsgNjUpKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vIGJldHdlZW4gbnVtYmVycyBhbmQgY2hhcmFjdGVycyAoNDggaXMgMCBhbmQgOTAgaXMgWiAoNDItNDggPSA5MClcclxuICAgICAgICAgICAgY29uc3QgYXNjaWNvZGUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNDIpICsgNDgpO1xyXG4gICAgICAgICAgICBpZiAoYXNjaWNvZGUgPCA1OCB8fCBhc2NpY29kZSA+IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleGNsdWRlIGFsbCBjaGFycyBiZXR3ZWVuIDogKDU4KSBhbmQgQCAoNjQpXHJcbiAgICAgICAgICAgICAgICBpZHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2ljb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGlkc3RyLmxlbmd0aCA8IDMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChpZHN0cik7XHJcbiAgICB9XHJcbn0iXX0=