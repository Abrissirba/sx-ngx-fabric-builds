var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.uniqueid = function () {
        // always start with a letter (for DOM friendlyness)
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBZUEsQ0FBQztJQWRVLGFBQVEsR0FBZjtRQUNJLG9EQUFvRDtRQUNwRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RSxHQUFHO1lBQ0MsbUVBQW1FO1lBQ25FLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkQsSUFBSSxRQUFRLEdBQUcsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hDLDhDQUE4QztnQkFDOUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUM7U0FDSixRQUFRLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBRTVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFmRCxJQWVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEd1aWQge1xyXG4gICAgc3RhdGljIHVuaXF1ZWlkKCkge1xyXG4gICAgICAgIC8vIGFsd2F5cyBzdGFydCB3aXRoIGEgbGV0dGVyIChmb3IgRE9NIGZyaWVuZGx5bmVzcylcclxuICAgICAgICBsZXQgaWRzdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNSkgKyA2NSkpO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgLy8gYmV0d2VlbiBudW1iZXJzIGFuZCBjaGFyYWN0ZXJzICg0OCBpcyAwIGFuZCA5MCBpcyBaICg0Mi00OCA9IDkwKVxyXG4gICAgICAgICAgICBjb25zdCBhc2NpY29kZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0MikgKyA0OCk7XHJcbiAgICAgICAgICAgIGlmIChhc2NpY29kZSA8IDU4IHx8IGFzY2ljb2RlID4gNjQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2x1ZGUgYWxsIGNoYXJzIGJldHdlZW4gOiAoNTgpIGFuZCBAICg2NClcclxuICAgICAgICAgICAgICAgIGlkc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXNjaWNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoaWRzdHIubGVuZ3RoIDwgMzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKGlkc3RyKTtcclxuICAgIH1cclxufSJdfQ==