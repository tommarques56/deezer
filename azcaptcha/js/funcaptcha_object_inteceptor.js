var __funcaptchaSolvedCallback;
(function() {
    var a = {};
    if (document.currentScript && document.currentScript.dataset && document.currentScript.dataset["parameters"]) {
        try {
            a = JSON.parse(document.currentScript.dataset["parameters"])
        } catch (a) {}
    }
    if (a.originalFuncaptchaApiUrl && a.currentFuncaptchaApiUrl && a.originalFuncaptchaApiUrl != a.currentFuncaptchaApiUrl) {
        var c = document.getElementsByTagName("script");
        for (var t in c) {
            if (c[t].src == a.originalFuncaptchaApiUrl) {
                c[t].src = a.currentFuncaptchaApiUrl;
                break
            }
        }
    } else {}
    var r = a.currentOnloadMethodName;
    if (r) {
        var n;
        if (typeof window[r] === "function") {
            n = window[r]
        }
        window[r] = function() {
            var t = FunCaptcha;
            FunCaptcha = function(a) {
                if (a && typeof a.callback == "function") {
                    var c = a.callback;
                    a.callback = function() {
                        c.apply(this, arguments)
                    };
                    __funcaptchaSolvedCallback = a.callback
                }
                return t.apply(this, arguments)
            };
            if (typeof n === "function") {
                n.apply(this, arguments)
            }
        }
    }
})();