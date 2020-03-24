/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTs7Ozs7O0lBQ1csYUFBUTs7O0lBQWY7O1FBRUksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsR0FBRzs7WUFFQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksUUFBUSxHQUFHLEVBQUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFOztnQkFFaEMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUM7U0FDSixRQUFRLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBRTVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtlQWRMO0lBZUMsQ0FBQTtBQWZELGdCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEd1aWQge1xyXG4gICAgc3RhdGljIHVuaXF1ZWlkKCkge1xyXG4gICAgICAgIC8vIGFsd2F5cyBzdGFydCB3aXRoIGEgbGV0dGVyIChmb3IgRE9NIGZyaWVuZGx5bmVzcylcclxuICAgICAgICBsZXQgaWRzdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNSkgKyA2NSkpO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgLy8gYmV0d2VlbiBudW1iZXJzIGFuZCBjaGFyYWN0ZXJzICg0OCBpcyAwIGFuZCA5MCBpcyBaICg0Mi00OCA9IDkwKVxyXG4gICAgICAgICAgICBjb25zdCBhc2NpY29kZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0MikgKyA0OCk7XHJcbiAgICAgICAgICAgIGlmIChhc2NpY29kZSA8IDU4IHx8IGFzY2ljb2RlID4gNjQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2x1ZGUgYWxsIGNoYXJzIGJldHdlZW4gOiAoNTgpIGFuZCBAICg2NClcclxuICAgICAgICAgICAgICAgIGlkc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXNjaWNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoaWRzdHIubGVuZ3RoIDwgMzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKGlkc3RyKTtcclxuICAgIH1cclxufSJdfQ==