/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Guid {
    /**
     * @return {?}
     */
    static uniqueid() {
        /** @type {?} */
        let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7OztJQUNGLE1BQU0sQ0FBQyxRQUFROztRQUVYLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLEdBQUc7O1lBRUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2RCxJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsRUFBRTs7Z0JBRWhDLEtBQUssSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0osUUFBUSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUU1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHN0YXRpYyB1bmlxdWVpZCgpIHtcclxuICAgICAgICAvLyBhbHdheXMgc3RhcnQgd2l0aCBhIGxldHRlciAoZm9yIERPTSBmcmllbmRseW5lc3MpXHJcbiAgICAgICAgbGV0IGlkc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjUpICsgNjUpKTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vIGJldHdlZW4gbnVtYmVycyBhbmQgY2hhcmFjdGVycyAoNDggaXMgMCBhbmQgOTAgaXMgWiAoNDItNDggPSA5MClcclxuICAgICAgICAgICAgY29uc3QgYXNjaWNvZGUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNDIpICsgNDgpO1xyXG4gICAgICAgICAgICBpZiAoYXNjaWNvZGUgPCA1OCB8fCBhc2NpY29kZSA+IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleGNsdWRlIGFsbCBjaGFycyBiZXR3ZWVuIDogKDU4KSBhbmQgQCAoNjQpXHJcbiAgICAgICAgICAgICAgICBpZHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2ljb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGlkc3RyLmxlbmd0aCA8IDMyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChpZHN0cik7XHJcbiAgICB9XHJcbn0iXX0=