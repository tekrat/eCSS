function eCSS(t, v) {
    r = "";
    if (Array.isArray(t)) {
        for (var k in t) {
            r += (r == "" ? "" : ", ") + t[k]
        }
    } else {
        r = t;
    }
    r += "{\r\n";
    for (var k in v) {
        r += "\t" + k + ":" + v[k] + ";\r\n";
    }
    r += "}\r\n";
    return r;
}