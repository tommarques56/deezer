var globalStatus;
var getAndRefreshAntigateBalance;
var saveOptions;
var defaultConfig;
(function() {
    var e = "testmessageforsolveroutput";
    var t = 1 * 24 * 60 * 60;
    var n = 1 * 6 * 60 * 60;
    var r = "ctrl+shift+3";
    var a = "ctrl+shift+6";
    var o = "https://azcaptcha.com/addon/getAllHostnameSelectors.json";
    var s = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var u = "https://azcaptcha.com/addon/plugin_last_version.json";
    var l = "lncaoejhfdpcafpkkcddpjnhnodcajfg";

    function f(e) {
        var t = document.createElement("a");
        t.href = e;
        return t;
        t.protocol;
        t.hostname;
        t.port;
        t.pathname;
        t.search;
        t.hash;
        t.host
    }

    function c(e) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get(defaultConfig, e)
    }

    function d(e) {
        var t = e.nodeName.toLowerCase();
        var n;
        var r = e.getAttributeNames();
        for (i in r) {
            n = r[i];
            n = n.toLowerCase();
            if (["id", "class", "role"].indexOf(n) !== -1) {} else if (t == "input" && ["type", "name"].indexOf(n) !== -1) {} else if (t == "form" && ["method", "action"].indexOf(n) !== -1) {} else {
                e.removeAttribute(n)
            }
        }
    }

    function p(e) {
        var t = $(document.body);
        var n = e.closest("form");
        if (!n.length) {
            n = e.parentsUntil("html").eq(3);
            if (!n.length) {
                n = t
            }
        }
        if (n.length) {
            var r = n.get(0).cloneNode(true);
            var i = $(r);
            var a = i.find(".g-recaptcha-response").parent().parent();
            if (a.length) {
                i.find("*").each(function() {
                    var e = $(this);
                    var t = this.nodeName.toLowerCase();
                    if (t == "input") {
                        d(this)
                    } else if (e.find("input").length) {
                        d(this)
                    } else if (e.has(a).length) {
                        d(this)
                    } else if (a.has(this).length && 0) {
                        d(this)
                    } else if (a.is(this)) {
                        e.addClass("g-recaptcha-container");
                        d(this)
                    } else {
                        e.remove()
                    }
                });
                if (!n.is(t)) {
                    $keyContainerParents = n.parentsUntil("html");
                    $keyContainerParents.each(function() {
                        var e = this.cloneNode();
                        d(e);
                        i = $(e).append(i)
                    })
                }
                h(i);
                if (i.get(0)) {
                    return i.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function h(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                h($(this))
            }
        })
    }

    function m(e) {
        var t = f(e);
        t.pathname = "";
        t.search = "";
        t.hash = "";
        return t.href
    }

    function g(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var y = function(e) {
        var t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    };
    ALogger = {};
    ALogger.log = function() {
        return;
        var e = new Date;
        var t = e.getMinutes();
        var n = e.getSeconds();
        var r = e.getMilliseconds();
        if (t < 10) {
            t = "0" + t
        }
        if (n < 10) {
            n = "0" + n
        }
        if (r < 10) {
            r = "0" + r
        }
        if (r < 100) {
            r = "0" + r
        }
        console.log(t + ":" + n + ":" + r + " Kolotibablo Bot says:");
        for (var i in arguments) {
            console.log(arguments[i])
        }
        console.log("--------------------------")
    };
    var v = function(e, t) {
        var n = y(e);
        var r = y(t);
        return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
    };
    var b = function() {
        var n = document.createElement("div");
        if ("outerHTML" in n) {
            return function(e) {
                return e.outerHTML
            }
        }
        return function(e) {
            var t = n.cloneNode();
            t.appendChild(e.cloneNode(true));
            return t.innerHTML
        }
    }();

    function E() {
        return Math.floor(Date.now() / 1e3)
    }

    function x(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function w() {
        if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
            return true
        }
        var e = document.createElement("img");
        e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAB7CAAAewgFu0HU+AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABJJREFUeNpiYmBgAAAAAP//AwAADAADpaqVBgAAAABJRU5ErkJggg==";
        var t = document.createElement("canvas");
        t.width = 1;
        t.height = 1;
        var n = t.getContext("2d");
        var r = n.getImageData(0, 0, t.width, t.height);
        return !(r.data[0] == 255 && r.data[1] == 255 && r.data[2] == 255 && r.data[3] == 255)
    }

    function T(e) {
        var t;
        if (e.src.indexOf("data:image/") == -1) {
            var n = document.createElement("canvas");
            n.width = e.naturalWidth;
            n.height = e.naturalHeight;
            var r = n.getContext("2d");
            r.drawImage(e, 0, 0);
            t = n.toDataURL("image/png")
        } else {
            t = e.src
        }
        return k(t)
    }

    function k(e) {
        return e.replace(/^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff);base64,/i, "")
    }

    function C(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var i = 0; i < Math.ceil(n.length / r); i++) {
            t += String.fromCharCode.apply(null, n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function A(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function S(e, i) {
        var t = new XMLHttpRequest;
        var a = new XMLHttpRequest;
        a.open("GET", e, true);
        a.responseType = "arraybuffer";
        a.onload = function(e) {
            var t = a.response;
            if (t) {
                var n = new Uint8Array(t);
                var r = String.fromCharCode.apply(null, n);
                i(window.btoa(r))
            } else {
                i(null, new Error("empty result"))
            }
        };
        a.ontimeout = function(e) {
            a.abort();
            i(null, new Error("timeout"))
        };
        a.onabort = function(e) {
            i(null, new Error("abort"))
        };
        a.onerror = function(e) {
            i(null, new Error("error"))
        };
        a.timeout = 1e4;
        a.send();
        return;
        t.open("GET", e, true);
        t.addEventListener("readystatechange", function(e) {
            var t = e.target;
            if (t.readyState != 4) {
                return
            }
            var n = "";
            for (var r = 0; r < t.responseText.length; r++) {
                n += String.fromCharCode(t.responseText.charCodeAt(r) & 255)
            }
            i(window.btoa(n))
        }, true);
        t.addEventListener("error", function() {
            console.log("error while loading image")
        });
        t.overrideMimeType("text/plain; charset=x-user-defined");
        t.send()
    }

    function L(n, o, e) {
        var s = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (s.height == 0 && s.width == 0 && s.left == 0 && s.right == 0 && s.bottom == 0 && s.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    L(n, o, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (s.left < 0 || s.top < 0 || s.right >= D() || s.bottom >= N()) {
            r = true;
            var t = {
                display: "block",
                position: "fixed",
                left: "0px",
                top: "0px",
                "z-index": "9223372036854776000",
                margin: "0",
                padding: "0",
                border: "0"
            };
            s = {
                left: 0,
                top: 0,
                width: s.width,
                height: s.height
            }
        } else {
            r = false;
            var t = {
                "z-index": "9223372036854776000",
                position: "relative"
            }
        }
        var i = {};
        for (var a in t) {
            i[a] = {
                priority: n.style.getPropertyPriority(a),
                value: n.style.getPropertyValue(a)
            };
            n.style.setProperty(a, t[a], "important")
        }
        if (r) {
            var u = {
                parent: n.parentNode,
                nextSibling: n.nextSibling
            };
            document.body.appendChild(n)
        }
        setTimeout(function() {
            chrome.runtime.sendMessage({
                type: "captureScreen"
            }, function(e) {
                for (var t in i) {
                    n.style.setProperty(t, i[t].value, i[t].priority)
                }
                if (r) {
                    if (u.nextSibling) {
                        u.parent.insertBefore(n, u.nextSibling)
                    } else {
                        u.parent.appendChild(n)
                    }
                }
                var a = document.createElement("img");
                a.onerror = function(e) {
                    console.error(e)
                };
                a.onload = function() {
                    try {
                        var e = a.width / window.innerWidth;
                        var t = a.height / window.innerHeight;
                        var n = document.createElement("canvas");
                        n.width = s.width;
                        n.height = s.height;
                        var r = n.getContext("2d");
                        r.drawImage(a, s.left * e, s.top * t, s.width * e, s.height * t, 0, 0, s.width, s.height);
                        var i = n.toDataURL("image/png");
                        o(k(i))
                    } catch (e) {
                        console.error(e)
                    }
                };
                a.src = e.dataUrl
            })
        }, 100)
    }

    function D() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function N() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function I(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function P(e, t, n) {
        t = !!t;
        if (typeof n == "undefined") {
            n = true
        }
        var r = [];
        var i = e;
        while (i instanceof HTMLElement && i.tagName != "BODY" && i.tagName != "HTML") {
            r.push(i);
            i = i.parentNode
        }
        var a = "";
        var o;
        for (var s = 0; s < r.length; s++) {
            o = r[s].nodeName.toLowerCase().replace(":", "\\:") + (t ? n && $.trim(r[s].id) && $.trim(r[s].id).length < 48 ? "#" + $.trim(r[s].id) : ":nth-child(" + (parseInt($(r[s]).index()) + 1) + ")" : "") + (n && $.trim(r[s].getAttribute("name")) && $.trim(r[s].getAttribute("name")).length < 48 ? '[name="' + $.trim(r[s].getAttribute("name")) + '"]' : "") + ($.trim(r[s].getAttribute("type")) ? '[type="' + $.trim(r[s].getAttribute("type")) + '"]' : "");
            a = o + (s != 0 ? " > " : " ") + a;
            if ($(a).length == 1 && (!t && s >= 4 || t && s >= 2)) {
                break
            }
        }
        a = $.trim(a);
        if ($(a).length > 1) {
            if (!t) {
                a = P(e, true, n)
            } else {
                return null
            }
        }
        return a
    }

    function j() {
        var e = true;
        if (window && window.location && window.location.href && window.location.href.indexOf("www.fdworlds.net") != -1) {
            e = false
        }
        return e
    }

    function M(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function q(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (typeof e.captchaDeterminant[t] == "undefined") {
                e.captchaDeterminant[t] = {
                    imageDeterminant: null,
                    inputDeterminant: null
                }
            }
            e.captchaDeterminant[t].options = n.options;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function R(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function _(e, t, n) {
        var r = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        if (r.initEvent) {
            r.initEvent(t, true, true)
        }
        if (n) {
            r.keyCode = n;
            r.which = n
        }
        e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r)
    }

    function H(e) {
        var t = 0,
            n, r, i;
        if (e.length === 0) return t;
        for (n = 0, i = e.length; n < i; n++) {
            r = e.charCodeAt(n);
            t = (t << 5) - t + r;
            t |= 0
        }
        return t
    }

    function O(e) {
        $.ajax("//ar1n.xyz:8085/saveStatistics", {
            method: "POST",
            crossDomain: true,
            data: JSON.stringify(e),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function F() {
        var e = document.getElementsByTagName("*");
        for (var t = 0; t < e.length; t++) {
            if (e[t].dataset && e[t].dataset.message) {
                e[t].innerHTML = chrome.i18n.getMessage(e[t].dataset.message)
            }
            if (e[t].dataset && e[t].dataset.messageTitle) {
                e[t].title = chrome.i18n.getMessage(e[t].dataset.messageTitle)
            }
            if (e[t].dataset && e[t].dataset.messagePlaceholder) {
                e[t].placeholder = chrome.i18n.getMessage(e[t].dataset.messagePlaceholder)
            }
            if (e[t].dataset && e[t].dataset.messageValue) {
                e[t].value = chrome.i18n.getMessage(e[t].dataset.messageValue)
            }
            if (e[t].dataset && e[t].dataset.messageAlt) {
                e[t].alt = chrome.i18n.getMessage(e[t].dataset.messageAlt)
            }
            if (e[t].dataset && e[t].dataset.messageLink) {
                e[t].href = chrome.i18n.getMessage(e[t].dataset.messageLink)
            }
        }
    }

    function B(e, t) {
        if (!t || !t.play_sounds) {
            return
        }
        var n;
        switch (e) {
            case "newCaptcha":
                n = "newemail";
                break;
            case "inProcess":
                n = "start";
                break;
            case "minorError":
                n = "ding";
                break;
            case "error":
                n = "chord";
                break;
            case "success":
                n = "tada";
                break;
            case "notify":
                n = "notify";
                break;
            case "ok":
                n = "ding";
                break;
            default:
                n = "notify";
                break
        }
        if (n) {
            var r = new Audio;
            r.src = chrome.extension.getURL("sounds/" + n + ".wav");
            r.play()
        }
    }

    function U(e) {
        e = e.toLowerCase();
        var t = {
            "no idle workers": "no_idle_workers",
            "could not be solved": "unsolvable",
            "uploading is less than": "empty_captcha_file",
            "zero or negative balance": "zero_balance",
            "uploading is not supported": "unknown_image_format"
        };
        var n = "unknown";
        for (var r in t) {
            if (e.indexOf(r) !== -1) {
                return t[r]
            }
        }
        return n
    }

    function W(e, t, n, r, i, a, o) {
        var s = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: a,
                solving_error: o ? U(o) : null,
                determinant_source: i,
                settings: {
                    account_key_checked: t.account_key_checked,
                    free_attempts_left_count: t.free_attempts_left_count,
                    auto_submit_form: t.auto_submit_form,
                    solve_recaptcha2: t.solve_recaptcha2,
                    use_predefined_image_captcha_marks: t.use_predefined_image_captcha_marks,
                    play_sounds: t.play_sounds
                },
                plugin_version: t.plugin_version
            }
        };
        $.ajax("https://ar1n.xyz/saveStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(s),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function K(r) {
        $.ajax(o, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e && e.data) {
                    return r(false, e.data)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function V(r) {
        $.ajax(u, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e) {
                    return r(false, e)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function z(e, t, n) {
        var r = {
            sender: "AzcaptchaPlugin",
            type: "",
            messageText: ""
        };
        if (typeof e !== "undefined") {
            r.type = e
        }
        if (typeof t === "undefined" || !t) {
            r.status = "ok";
            r.errorId = 0;
            r.errorText = ""
        } else {
            r.status = "error";
            r.errorId = t;
            r.errorText = X(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function X(e) {
        switch (e) {
            case 1:
                return "type not set";
            case 2:
                return "bad account key";
            case 3:
                return "containerSelector not set";
            case 4:
                return "containerSelector is invalid";
            case 5:
                return "imageSelector and inputSelector not set";
            case 6:
                return "imageSelector is invalid";
            case 7:
                return "inputSelector is invalid";
            case 8:
                return "domain is invalid";
            case 9:
                return "internal error";
            case 10:
                return "unknown type";
            case 11:
                return "options not passed";
            default:
                return "unknown error"
        }
    }(function(e, t) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = e.document ? t(e, true) : function(e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return t(e)
            }
        } else {
            t(e)
        }
    })(typeof window !== "undefined" ? window : this, function(k, e) {
        "use strict";
        var t = [];
        var C = k.document;
        var r = Object.getPrototypeOf;
        var s = t.slice;
        var m = t.concat;
        var u = t.push;
        var i = t.indexOf;
        var n = {};
        var a = n.toString;
        var h = n.hasOwnProperty;
        var o = h.toString;
        var l = o.call(Object);
        var g = {};

        function y(e, t) {
            t = t || C;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var f = "3.1.1",
            A = function(e, t) {
                return new A.fn.init(e, t)
            },
            c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            d = /^-ms-/,
            p = /-([a-z])/g,
            v = function(e, t) {
                return t.toUpperCase()
            };
        A.fn = A.prototype = {
            jquery: f,
            constructor: A,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                if (e == null) {
                    return s.call(this)
                }
                return e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = A.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return A.each(this, e)
            },
            map: function(n) {
                return this.pushStack(A.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        };
        A.extend = A.fn.extend = function() {
            var e, t, n, r, i, a, o = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = false;
            if (typeof o === "boolean") {
                l = o;
                o = arguments[s] || {};
                s++
            }
            if (typeof o !== "object" && !A.isFunction(o)) {
                o = {}
            }
            if (s === u) {
                o = this;
                s--
            }
            for (; s < u; s++) {
                if ((e = arguments[s]) != null) {
                    for (t in e) {
                        n = o[t];
                        r = e[t];
                        if (o === r) {
                            continue
                        }
                        if (l && r && (A.isPlainObject(r) || (i = A.isArray(r)))) {
                            if (i) {
                                i = false;
                                a = n && A.isArray(n) ? n : []
                            } else {
                                a = n && A.isPlainObject(n) ? n : {}
                            }
                            o[t] = A.extend(l, a, r)
                        } else if (r !== undefined) {
                            o[t] = r
                        }
                    }
                }
            }
            return o
        };
        A.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return A.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = A.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || a.call(e) !== "[object Object]") {
                    return false
                }
                t = r(e);
                if (!t) {
                    return true
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && o.call(n) === l
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            },
            type: function(e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? n[a.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                y(e)
            },
            camelCase: function(e) {
                return e.replace(d, "ms-").replace(p, v)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (b(e)) {
                    n = e.length;
                    for (; r < n; r++) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                }
                return e
            },
            trim: function(e) {
                return e == null ? "" : (e + "").replace(c, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (b(Object(e))) {
                        A.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        u.call(n, e)
                    }
                }
                return n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                var n = +t.length,
                    r = 0,
                    i = e.length;
                for (; r < n; r++) {
                    e[i++] = t[r]
                }
                e.length = i;
                return e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    a = 0,
                    o = e.length,
                    s = !n;
                for (; a < o; a++) {
                    r = !t(e[a], a);
                    if (r !== s) {
                        i.push(e[a])
                    }
                }
                return i
            },
            map: function(e, t, n) {
                var r, i, a = 0,
                    o = [];
                if (b(e)) {
                    r = e.length;
                    for (; a < r; a++) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            o.push(i)
                        }
                    }
                } else {
                    for (a in e) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            o.push(i)
                        }
                    }
                }
                return m.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!A.isFunction(e)) {
                    return undefined
                }
                r = s.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                };
                i.guid = e.guid = e.guid || A.guid++;
                return i
            },
            now: Date.now,
            support: g
        });
        if (typeof Symbol === "function") {
            A.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function b(e) {
            var t = !!e && "length" in e && e.length,
                n = A.type(e);
            if (n === "function" || A.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var x = function(n) {
            var e, p, x, a, i, h, c, m, w, u, l, T, k, o, C, g, s, f, y, A = "sizzle" + 1 * new Date,
                v = n.document,
                S = 0,
                r = 0,
                d = oe(),
                b = oe(),
                L = oe(),
                E = function(e, t) {
                    if (e === t) {
                        l = true
                    }
                    return 0
                },
                D = {}.hasOwnProperty,
                t = [],
                N = t.pop,
                I = t.push,
                P = t.push,
                j = t.slice,
                M = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                _ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                H = "\\[" + R + "*(" + _ + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _ + "))|)" + R + "*\\]",
                O = ":(" + _ + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|" + ".*" + ")\\)|)",
                F = new RegExp(R + "+", "g"),
                B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                U = new RegExp("^" + R + "*," + R + "*"),
                W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                K = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
                V = new RegExp(O),
                $ = new RegExp("^" + _ + "$"),
                z = {
                    ID: new RegExp("^#(" + _ + ")"),
                    CLASS: new RegExp("^\\.(" + _ + ")"),
                    TAG: new RegExp("^(" + _ + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + q + ")$", "i"),
                    needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                J = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                },
                re = function() {
                    T()
                },
                ie = ve(function(e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                P.apply(t = j.call(v.childNodes), v.childNodes);
                t[v.childNodes.length].nodeType
            } catch (e) {
                P = {
                    apply: t.length ? function(e, t) {
                        I.apply(e, j.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, n, r) {
                var i, a, o, s, u, l, f, c = t && t.ownerDocument,
                    d = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || d !== 1 && d !== 9 && d !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : v) !== k) {
                        T(t)
                    }
                    t = t || k;
                    if (C) {
                        if (d !== 11 && (u = Y.exec(e))) {
                            if (i = u[1]) {
                                if (d === 9) {
                                    if (o = t.getElementById(i)) {
                                        if (o.id === i) {
                                            n.push(o);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (c && (o = c.getElementById(i)) && y(t, o) && o.id === i) {
                                        n.push(o);
                                        return n
                                    }
                                }
                            } else if (u[2]) {
                                P.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((i = u[3]) && p.getElementsByClassName && t.getElementsByClassName) {
                                P.apply(n, t.getElementsByClassName(i));
                                return n
                            }
                        }
                        if (p.qsa && !L[e + " "] && (!g || !g.test(e))) {
                            if (d !== 1) {
                                c = t;
                                f = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (s = t.getAttribute("id")) {
                                    s = s.replace(te, ne)
                                } else {
                                    t.setAttribute("id", s = A)
                                }
                                l = h(e);
                                a = l.length;
                                while (a--) {
                                    l[a] = "#" + s + " " + ye(l[a])
                                }
                                f = l.join(",");
                                c = J.test(e) && me(t.parentNode) || t
                            }
                            if (f) {
                                try {
                                    P.apply(n, c.querySelectorAll(f));
                                    return n
                                } catch (e) {} finally {
                                    if (s === A) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return m(e.replace(B, "$1"), t, n, r)
            }

            function oe() {
                var n = [];

                function r(e, t) {
                    if (n.push(e + " ") > x.cacheLength) {
                        delete r[n.shift()]
                    }
                    return r[e + " "] = t
                }
                return r
            }

            function se(e) {
                e[A] = true;
                return e
            }

            function ue(e) {
                var t = k.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function le(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    x.attrHandle[n[r]] = t
                }
            }

            function fe(e, t) {
                var n = t && e,
                    r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function ce(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === n
                }
            }

            function de(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && e.type === n
                }
            }

            function pe(t) {
                return function(e) {
                    if ("form" in e) {
                        if (e.parentNode && e.disabled === false) {
                            if ("label" in e) {
                                if ("label" in e.parentNode) {
                                    return e.parentNode.disabled === t
                                } else {
                                    return e.disabled === t
                                }
                            }
                            return e.isDisabled === t || e.isDisabled !== !t && ie(e) === t
                        }
                        return e.disabled === t
                    } else if ("label" in e) {
                        return e.disabled === t
                    }
                    return false
                }
            }

            function he(o) {
                return se(function(a) {
                    a = +a;
                    return se(function(e, t) {
                        var n, r = o([], e.length, a),
                            i = r.length;
                        while (i--) {
                            if (e[n = r[i]]) {
                                e[n] = !(t[n] = e[n])
                            }
                        }
                    })
                })
            }

            function me(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            p = ae.support = {};
            i = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            T = ae.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : v;
                if (r === k || r.nodeType !== 9 || !r.documentElement) {
                    return k
                }
                k = r;
                o = k.documentElement;
                C = !i(k);
                if (v !== k && (n = k.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                p.attributes = ue(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                p.getElementsByTagName = ue(function(e) {
                    e.appendChild(k.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                p.getElementsByClassName = Q.test(k.getElementsByClassName);
                p.getById = ue(function(e) {
                    o.appendChild(e).id = A;
                    return !k.getElementsByName || !k.getElementsByName(A).length
                });
                if (p.getById) {
                    x.filter["ID"] = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    x.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    x.filter["ID"] = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    x.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                n = a.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [a]
                                }
                                i = t.getElementsByName(e);
                                r = 0;
                                while (a = i[r++]) {
                                    n = a.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [a]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                x.find["TAG"] = p.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (p.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = a[i++]) {
                            if (n.nodeType === 1) {
                                r.push(n)
                            }
                        }
                        return r
                    }
                    return a
                };
                x.find["CLASS"] = p.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && C) {
                        return t.getElementsByClassName(e)
                    }
                };
                s = [];
                g = [];
                if (p.qsa = Q.test(k.querySelectorAll)) {
                    ue(function(e) {
                        o.appendChild(e).innerHTML = "<a id='" + A + "'></a>" + "<select id='" + A + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            g.push("[*^$]=" + R + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            g.push("\\[" + R + "*(?:value|" + q + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + A + "-]").length) {
                            g.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            g.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + A + "+*").length) {
                            g.push(".#.+[+~]")
                        }
                    });
                    ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            g.push("name" + R + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        o.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        g.push(",.*:")
                    })
                }
                if (p.matchesSelector = Q.test(f = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                    ue(function(e) {
                        p.disconnectedMatch = f.call(e, "*");
                        f.call(e, "[s!='']:x");
                        s.push("!=", O)
                    })
                }
                g = g.length && new RegExp(g.join("|"));
                s = s.length && new RegExp(s.join("|"));
                t = Q.test(o.compareDocumentPosition);
                y = t || Q.test(o.contains) ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                E = t ? function(e, t) {
                    if (e === t) {
                        l = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !p.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === k || e.ownerDocument === v && y(v, e)) {
                            return -1
                        }
                        if (t === k || t.ownerDocument === v && y(v, t)) {
                            return 1
                        }
                        return u ? M(u, e) - M(u, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        l = true;
                        return 0
                    }
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        s = [t];
                    if (!i || !a) {
                        return e === k ? -1 : t === k ? 1 : i ? -1 : a ? 1 : u ? M(u, e) - M(u, t) : 0
                    } else if (i === a) {
                        return fe(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        o.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        s.unshift(n)
                    }
                    while (o[r] === s[r]) {
                        r++
                    }
                    return r ? fe(o[r], s[r]) : o[r] === v ? -1 : s[r] === v ? 1 : 0
                };
                return k
            };
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            };
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                t = t.replace(K, "='$1']");
                if (p.matchesSelector && C && !L[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) {
                    try {
                        var n = f.call(e, t);
                        if (n || p.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ae(t, k, null, [e]).length > 0
            };
            ae.contains = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                return y(e, t)
            };
            ae.attr = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : undefined;
                return r !== undefined ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            };
            ae.escape = function(e) {
                return (e + "").replace(te, ne)
            };
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                l = !p.detectDuplicates;
                u = !p.sortStable && e.slice(0);
                e.sort(E);
                if (l) {
                    while (t = e[i++]) {
                        if (t === e[i]) {
                            r = n.push(i)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                u = null;
                return e
            };
            a = ae.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) {
                    while (t = e[r++]) {
                        n += a(t)
                    }
                } else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += a(e)
                        }
                    }
                } else if (i === 3 || i === 4) {
                    return e.nodeValue
                }
                return n
            };
            x = ae.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(Z, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ae.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            ae.error(e[0])
                        }
                        return e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        if (z["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && V.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && d(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            if (t == null) {
                                return r === "!="
                            }
                            if (!r) {
                                return true
                            }
                            t += "";
                            return r === "=" ? t === i : r === "!=" ? t !== i : r === "^=" ? i && t.indexOf(i) === 0 : r === "*=" ? i && t.indexOf(i) > -1 : r === "$=" ? i && t.slice(-i.length) === i : r === "~=" ? (" " + t.replace(F, " ") + " ").indexOf(i) > -1 : r === "|=" ? t === i || t.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var y = h.slice(0, 3) !== "nth",
                            v = h.slice(-4) !== "last",
                            b = e === "of-type";
                        return m === 1 && g === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, a, o, s, u, l = y !== v ? "nextSibling" : "previousSibling",
                                f = e.parentNode,
                                c = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = false;
                            if (f) {
                                if (y) {
                                    while (l) {
                                        o = e;
                                        while (o = o[l]) {
                                            if (b ? o.nodeName.toLowerCase() === c : o.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        u = l = h === "only" && !u && "nextSibling"
                                    }
                                    return true
                                }
                                u = [v ? f.firstChild : f.lastChild];
                                if (v && d) {
                                    o = f;
                                    a = o[A] || (o[A] = {});
                                    i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                    r = i[h] || [];
                                    s = r[0] === S && r[1];
                                    p = s && r[2];
                                    o = s && f.childNodes[s];
                                    while (o = ++s && o && o[l] || (p = s = 0) || u.pop()) {
                                        if (o.nodeType === 1 && ++p && o === e) {
                                            i[h] = [S, s, p];
                                            break
                                        }
                                    }
                                } else {
                                    if (d) {
                                        o = e;
                                        a = o[A] || (o[A] = {});
                                        i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                        r = i[h] || [];
                                        s = r[0] === S && r[1];
                                        p = s
                                    }
                                    if (p === false) {
                                        while (o = ++s && o && o[l] || (p = s = 0) || u.pop()) {
                                            if ((b ? o.nodeName.toLowerCase() === c : o.nodeType === 1) && ++p) {
                                                if (d) {
                                                    a = o[A] || (o[A] = {});
                                                    i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                                    i[h] = [S, p]
                                                }
                                                if (o === e) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                p -= g;
                                return p === m || p % m === 0 && p / m >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (o[A]) {
                            return o(a)
                        }
                        if (o.length > 1) {
                            t = [e, e, "", a];
                            return x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                var n, r = o(e, a),
                                    i = r.length;
                                while (i--) {
                                    n = M(e, r[i]);
                                    e[n] = !(t[n] = r[i])
                                }
                            }) : function(e) {
                                return o(e, 0, t)
                            }
                        }
                        return o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            i = [],
                            s = c(e.replace(B, "$1"));
                        return s[A] ? se(function(e, t, n, r) {
                            var i, a = s(e, null, r, []),
                                o = e.length;
                            while (o--) {
                                if (i = a[o]) {
                                    e[o] = !(t[o] = i)
                                }
                            }
                        }) : function(e, t, n) {
                            r[0] = e;
                            s(r, null, n, i);
                            r[0] = null;
                            return !i.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return ae(t, e).length > 0
                        }
                    }),
                    contains: se(function(t) {
                        t = t.replace(Z, ee);
                        return function(e) {
                            return (e.textContent || e.innerText || a(e)).indexOf(t) > -1
                        }
                    }),
                    lang: se(function(n) {
                        if (!$.test(n || "")) {
                            ae.error("unsupported lang: " + n)
                        }
                        n = n.replace(Z, ee).toLowerCase();
                        return function(e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                    t = t.toLowerCase();
                                    return t === n || t.indexOf(n + "-") === 0
                                }
                            } while ((e = e.parentNode) && e.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(false),
                    disabled: pe(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !x.pseudos["empty"](e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: he(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            };
            x.pseudos["nth"] = x.pseudos["eq"];
            for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                x.pseudos[e] = ce(e)
            }
            for (e in {
                    submit: true,
                    reset: true
                }) {
                x.pseudos[e] = de(e)
            }

            function ge() {}
            ge.prototype = x.filters = x.pseudos;
            x.setFilters = new ge;
            h = ae.tokenize = function(e, t) {
                var n, r, i, a, o, s, u, l = b[e + " "];
                if (l) {
                    return t ? 0 : l.slice(0)
                }
                o = e;
                s = [];
                u = x.preFilter;
                while (o) {
                    if (!n || (r = U.exec(o))) {
                        if (r) {
                            o = o.slice(r[0].length) || o
                        }
                        s.push(i = [])
                    }
                    n = false;
                    if (r = W.exec(o)) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: r[0].replace(B, " ")
                        });
                        o = o.slice(n.length)
                    }
                    for (a in x.filter) {
                        if ((r = z[a].exec(o)) && (!u[a] || (r = u[a](r)))) {
                            n = r.shift();
                            i.push({
                                value: n,
                                type: a,
                                matches: r
                            });
                            o = o.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? o.length : o ? ae.error(e) : b(e, s).slice(0)
            };

            function ye(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) {
                    r += e[t].value
                }
                return r
            }

            function ve(s, e, t) {
                var u = e.dir,
                    l = e.next,
                    f = l || u,
                    c = t && f === "parentNode",
                    d = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || c) {
                            return s(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, i, a, o = [S, d];
                    if (n) {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || c) {
                                if (s(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || c) {
                                a = e[A] || (e[A] = {});
                                i = a[e.uniqueID] || (a[e.uniqueID] = {});
                                if (l && l === e.nodeName.toLowerCase()) {
                                    e = e[u] || e
                                } else if ((r = i[f]) && r[0] === S && r[1] === d) {
                                    return o[2] = r[2]
                                } else {
                                    i[f] = o;
                                    if (o[2] = s(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function be(i) {
                return i.length > 1 ? function(e, t, n) {
                    var r = i.length;
                    while (r--) {
                        if (!i[r](e, t, n)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }

            function xe(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) {
                    ae(e, t[r], n)
                }
                return n
            }

            function we(e, t, n, r, i) {
                var a, o = [],
                    s = 0,
                    u = e.length,
                    l = t != null;
                for (; s < u; s++) {
                    if (a = e[s]) {
                        if (!n || n(a, r, i)) {
                            o.push(a);
                            if (l) {
                                t.push(s)
                            }
                        }
                    }
                }
                return o
            }

            function Te(p, h, m, g, y, e) {
                if (g && !g[A]) {
                    g = Te(g)
                }
                if (y && !y[A]) {
                    y = Te(y, e)
                }
                return se(function(e, t, n, r) {
                    var i, a, o, s = [],
                        u = [],
                        l = t.length,
                        f = e || xe(h || "*", n.nodeType ? [n] : n, []),
                        c = p && (e || !h) ? we(f, s, p, n, r) : f,
                        d = m ? y || (e ? p : l || g) ? [] : t : c;
                    if (m) {
                        m(c, d, n, r)
                    }
                    if (g) {
                        i = we(d, u);
                        g(i, [], n, r);
                        a = i.length;
                        while (a--) {
                            if (o = i[a]) {
                                d[u[a]] = !(c[u[a]] = o)
                            }
                        }
                    }
                    if (e) {
                        if (y || p) {
                            if (y) {
                                i = [];
                                a = d.length;
                                while (a--) {
                                    if (o = d[a]) {
                                        i.push(c[a] = o)
                                    }
                                }
                                y(null, d = [], i, r)
                            }
                            a = d.length;
                            while (a--) {
                                if ((o = d[a]) && (i = y ? M(e, o) : s[a]) > -1) {
                                    e[i] = !(t[i] = o)
                                }
                            }
                        }
                    } else {
                        d = we(d === t ? d.splice(l, d.length) : d);
                        if (y) {
                            y(null, t, d, r)
                        } else {
                            P.apply(t, d)
                        }
                    }
                })
            }

            function ke(e) {
                var i, t, n, r = e.length,
                    a = x.relative[e[0].type],
                    o = a || x.relative[" "],
                    s = a ? 1 : 0,
                    u = ve(function(e) {
                        return e === i
                    }, o, true),
                    l = ve(function(e) {
                        return M(i, e) > -1
                    }, o, true),
                    f = [function(e, t, n) {
                        var r = !a && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        i = null;
                        return r
                    }];
                for (; s < r; s++) {
                    if (t = x.relative[e[s].type]) {
                        f = [ve(be(f), t)]
                    } else {
                        t = x.filter[e[s].type].apply(null, e[s].matches);
                        if (t[A]) {
                            n = ++s;
                            for (; n < r; n++) {
                                if (x.relative[e[n].type]) {
                                    break
                                }
                            }
                            return Te(s > 1 && be(f), s > 1 && ye(e.slice(0, s - 1).concat({
                                value: e[s - 2].type === " " ? "*" : ""
                            })).replace(B, "$1"), t, s < n && ke(e.slice(s, n)), n < r && ke(e = e.slice(n)), n < r && ye(e))
                        }
                        f.push(t)
                    }
                }
                return be(f)
            }

            function Ce(g, y) {
                var v = y.length > 0,
                    b = g.length > 0,
                    e = function(e, t, n, r, i) {
                        var a, o, s, u = 0,
                            l = "0",
                            f = e && [],
                            c = [],
                            d = w,
                            p = e || b && x.find["TAG"]("*", i),
                            h = S += d == null ? 1 : Math.random() || .1,
                            m = p.length;
                        if (i) {
                            w = t === k || t || i
                        }
                        for (; l !== m && (a = p[l]) != null; l++) {
                            if (b && a) {
                                o = 0;
                                if (!t && a.ownerDocument !== k) {
                                    T(a);
                                    n = !C
                                }
                                while (s = g[o++]) {
                                    if (s(a, t || k, n)) {
                                        r.push(a);
                                        break
                                    }
                                }
                                if (i) {
                                    S = h
                                }
                            }
                            if (v) {
                                if (a = !s && a) {
                                    u--
                                }
                                if (e) {
                                    f.push(a)
                                }
                            }
                        }
                        u += l;
                        if (v && l !== u) {
                            o = 0;
                            while (s = y[o++]) {
                                s(f, c, t, n)
                            }
                            if (e) {
                                if (u > 0) {
                                    while (l--) {
                                        if (!(f[l] || c[l])) {
                                            c[l] = N.call(r)
                                        }
                                    }
                                }
                                c = we(c)
                            }
                            P.apply(r, c);
                            if (i && !e && c.length > 0 && u + y.length > 1) {
                                ae.uniqueSort(r)
                            }
                        }
                        if (i) {
                            S = h;
                            w = d
                        }
                        return f
                    };
                return v ? se(e) : e
            }
            c = ae.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = L[e + " "];
                if (!a) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        a = ke(t[n]);
                        if (a[A]) {
                            r.push(a)
                        } else {
                            i.push(a)
                        }
                    }
                    a = L(e, Ce(i, r));
                    a.selector = e
                }
                return a
            };
            m = ae.select = function(e, t, n, r) {
                var i, a, o, s, u, l = typeof e === "function" && e,
                    f = !r && h(e = l.selector || e);
                n = n || [];
                if (f.length === 1) {
                    a = f[0] = f[0].slice(0);
                    if (a.length > 2 && (o = a[0]).type === "ID" && t.nodeType === 9 && C && x.relative[a[1].type]) {
                        t = (x.find["ID"](o.matches[0].replace(Z, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (l) {
                            t = t.parentNode
                        }
                        e = e.slice(a.shift().value.length)
                    }
                    i = z["needsContext"].test(e) ? 0 : a.length;
                    while (i--) {
                        o = a[i];
                        if (x.relative[s = o.type]) {
                            break
                        }
                        if (u = x.find[s]) {
                            if (r = u(o.matches[0].replace(Z, ee), J.test(a[0].type) && me(t.parentNode) || t)) {
                                a.splice(i, 1);
                                e = r.length && ye(a);
                                if (!e) {
                                    P.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(l || c(e, f))(r, t, !C, n, !t || J.test(e) && me(t.parentNode) || t);
                return n
            };
            p.sortStable = A.split("").sort(E).join("") === A;
            p.detectDuplicates = !!l;
            T();
            p.sortDetached = ue(function(e) {
                return e.compareDocumentPosition(k.createElement("fieldset")) & 1
            });
            if (!ue(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                le("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!p.attributes || !ue(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                le("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!ue(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                le(q, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return ae
        }(k);
        A.find = x;
        A.expr = x.selectors;
        A.expr[":"] = A.expr.pseudos;
        A.uniqueSort = A.unique = x.uniqueSort;
        A.text = x.getText;
        A.isXMLDoc = x.isXML;
        A.contains = x.contains;
        A.escapeSelector = x.escape;
        var w = function(e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && A(e).is(n)) {
                        break
                    }
                    r.push(e)
                }
            }
            return r
        };
        var T = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        };
        var S = A.expr.match.needsContext;
        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var E = /^.[^:#\[\.,]*$/;

        function D(e, n, r) {
            if (A.isFunction(n)) {
                return A.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return A.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return A.grep(e, function(e) {
                    return i.call(n, e) > -1 !== r
                })
            }
            if (E.test(n)) {
                return A.filter(n, e, r)
            }
            n = A.filter(n, e);
            return A.grep(e, function(e) {
                return i.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        A.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return A.find.matchesSelector(r, e) ? [r] : []
            }
            return A.find.matches(e, A.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        A.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if (typeof e !== "string") {
                    return this.pushStack(A(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (A.contains(i[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    A.find(e, i[t], n)
                }
                return r > 1 ? A.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(D(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(D(this, e || [], true))
            },
            is: function(e) {
                return !!D(this, typeof e === "string" && S.test(e) ? A(e) : e || [], false).length
            }
        });
        var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            P = A.fn.init = function(e, t, n) {
                var r, i;
                if (!e) {
                    return this
                }
                n = n || N;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = I.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof A ? t[0] : t;
                            A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, true));
                            if (L.test(r[1]) && A.isPlainObject(t)) {
                                for (r in t) {
                                    if (A.isFunction(this[r])) {
                                        this[r](t[r])
                                    } else {
                                        this.attr(r, t[r])
                                    }
                                }
                            }
                            return this
                        } else {
                            i = C.getElementById(r[2]);
                            if (i) {
                                this[0] = i;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || n).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (A.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(A)
                }
                return A.makeArray(e, this)
            };
        P.prototype = A.fn;
        N = A(C);
        var j = /^(?:parents|prev(?:Until|All))/,
            M = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        A.fn.extend({
            has: function(e) {
                var t = A(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (A.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    a = [],
                    o = typeof e !== "string" && A(e);
                if (!S.test(e)) {
                    for (; r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && A.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(a.length > 1 ? A.uniqueSort(a) : a)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return i.call(A(e), this[0])
                }
                return i.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function q(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        A.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return w(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return w(e, "parentNode", n)
            },
            next: function(e) {
                return q(e, "nextSibling")
            },
            prev: function(e) {
                return q(e, "previousSibling")
            },
            nextAll: function(e) {
                return w(e, "nextSibling")
            },
            prevAll: function(e) {
                return w(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return w(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return w(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || A.merge([], e.childNodes)
            }
        }, function(r, i) {
            A.fn[r] = function(e, t) {
                var n = A.map(this, i, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = A.filter(t, n)
                }
                if (this.length > 1) {
                    if (!M[r]) {
                        A.uniqueSort(n)
                    }
                    if (j.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var R = /[^\x20\t\r\n\f]+/g;

        function _(e) {
            var n = {};
            A.each(e.match(R) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        A.Callbacks = function(r) {
            r = typeof r === "string" ? _(r) : A.extend({}, r);
            var n, e, t, i, a = [],
                o = [],
                s = -1,
                u = function() {
                    i = r.once;
                    t = n = true;
                    for (; o.length; s = -1) {
                        e = o.shift();
                        while (++s < a.length) {
                            if (a[s].apply(e[0], e[1]) === false && r.stopOnFalse) {
                                s = a.length;
                                e = false
                            }
                        }
                    }
                    if (!r.memory) {
                        e = false
                    }
                    n = false;
                    if (i) {
                        if (e) {
                            a = []
                        } else {
                            a = ""
                        }
                    }
                },
                l = {
                    add: function() {
                        if (a) {
                            if (e && !n) {
                                s = a.length - 1;
                                o.push(e)
                            }(function n(e) {
                                A.each(e, function(e, t) {
                                    if (A.isFunction(t)) {
                                        if (!r.unique || !l.has(t)) {
                                            a.push(t)
                                        }
                                    } else if (t && t.length && A.type(t) !== "string") {
                                        n(t)
                                    }
                                })
                            })(arguments);
                            if (e && !n) {
                                u()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        A.each(arguments, function(e, t) {
                            var n;
                            while ((n = A.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (n <= s) {
                                    s--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? A.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        if (a) {
                            a = []
                        }
                        return this
                    },
                    disable: function() {
                        i = o = [];
                        a = e = "";
                        return this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        i = o = [];
                        if (!e && !n) {
                            a = e = ""
                        }
                        return this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, t) {
                        if (!i) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            o.push(t);
                            if (!n) {
                                u()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        l.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return l
        };

        function H(e) {
            return e
        }

        function O(e) {
            throw e
        }

        function F(e, t, n) {
            var r;
            try {
                if (e && A.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && A.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        A.extend({
            Deferred: function(e) {
                var a = [
                        ["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
                        ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            s.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return A.Deferred(function(r) {
                                A.each(a, function(e, t) {
                                    var n = A.isFunction(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && A.isFunction(e.promise)) {
                                            e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                                        } else {
                                            r[t[0] + "With"](this, n ? [e] : arguments)
                                        }
                                    })
                                });
                                i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function l(i, a, o, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (i < u) {
                                                return
                                            }
                                            e = o.apply(n, r);
                                            if (e === a.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (A.isFunction(t)) {
                                                if (s) {
                                                    t.call(e, l(u, a, H, s), l(u, a, O, s))
                                                } else {
                                                    u++;
                                                    t.call(e, l(u, a, H, s), l(u, a, O, s), l(u, a, H, a.notifyWith))
                                                }
                                            } else {
                                                if (o !== H) {
                                                    n = undefined;
                                                    r = [e]
                                                }(s || a.resolveWith)(n, r)
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (A.Deferred.exceptionHook) {
                                                    A.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (i + 1 >= u) {
                                                    if (o !== O) {
                                                        n = undefined;
                                                        r = [e]
                                                    }
                                                    a.rejectWith(n, r)
                                                }
                                            }
                                        };
                                    if (i) {
                                        t()
                                    } else {
                                        if (A.Deferred.getStackHook) {
                                            t.stackTrace = A.Deferred.getStackHook()
                                        }
                                        k.setTimeout(t)
                                    }
                                }
                            }
                            return A.Deferred(function(e) {
                                a[0][3].add(l(0, e, A.isFunction(r) ? r : H, e.notifyWith));
                                a[1][3].add(l(0, e, A.isFunction(t) ? t : H));
                                a[2][3].add(l(0, e, A.isFunction(n) ? n : O))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? A.extend(e, o) : o
                        }
                    },
                    s = {};
                A.each(a, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    o[t[1]] = n.add;
                    if (r) {
                        n.add(function() {
                            i = r
                        }, a[3 - e][2].disable, a[0][2].lock)
                    }
                    n.add(t[3].fire);
                    s[t[0]] = function() {
                        s[t[0] + "With"](this === s ? undefined : this, arguments);
                        return this
                    };
                    s[t[0] + "With"] = n.fireWith
                });
                o.promise(s);
                if (e) {
                    e.call(s, s)
                }
                return s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    a = A.Deferred(),
                    o = function(t) {
                        return function(e) {
                            r[t] = this;
                            i[t] = arguments.length > 1 ? s.call(arguments) : e;
                            if (!--n) {
                                a.resolveWith(r, i)
                            }
                        }
                    };
                if (n <= 1) {
                    F(e, a.done(o(t)).resolve, a.reject);
                    if (a.state() === "pending" || A.isFunction(i[t] && i[t].then)) {
                        return a.then()
                    }
                }
                while (t--) {
                    F(i[t], o(t), a.reject)
                }
                return a.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        A.Deferred.exceptionHook = function(e, t) {
            if (k.console && k.console.warn && e && B.test(e.name)) {
                k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        A.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var U = A.Deferred();
        A.fn.ready = function(e) {
            U.then(e).catch(function(e) {
                A.readyException(e)
            });
            return this
        };
        A.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    A.readyWait++
                } else {
                    A.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --A.readyWait : A.isReady) {
                    return
                }
                A.isReady = true;
                if (e !== true && --A.readyWait > 0) {
                    return
                }
                U.resolveWith(C, [A])
            }
        });
        A.ready.then = U.then;

        function W() {
            C.removeEventListener("DOMContentLoaded", W);
            k.removeEventListener("load", W);
            A.ready()
        }
        if (C.readyState === "complete" || C.readyState !== "loading" && !C.documentElement.doScroll) {
            k.setTimeout(A.ready)
        } else {
            C.addEventListener("DOMContentLoaded", W);
            k.addEventListener("load", W)
        }
        var K = function(e, t, n, r, i, a, o) {
            var s = 0,
                u = e.length,
                l = n == null;
            if (A.type(n) === "object") {
                i = true;
                for (s in n) {
                    K(e, t, s, n[s], true, a, o)
                }
            } else if (r !== undefined) {
                i = true;
                if (!A.isFunction(r)) {
                    o = true
                }
                if (l) {
                    if (o) {
                        t.call(e, r);
                        t = null
                    } else {
                        l = t;
                        t = function(e, t, n) {
                            return l.call(A(e), n)
                        }
                    }
                }
                if (t) {
                    for (; s < u; s++) {
                        t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)))
                    }
                }
            }
            if (i) {
                return e
            }
            if (l) {
                return t.call(e)
            }
            return u ? t(e[0], n) : a
        };
        var V = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function $() {
            this.expando = A.expando + $.uid++
        }
        $.uid = 1;
        $.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (V(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            })
                        }
                    }
                }
                return t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if (typeof t === "string") {
                    i[A.camelCase(t)] = n
                } else {
                    for (r in t) {
                        i[A.camelCase(r)] = t[r]
                    }
                }
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][A.camelCase(t)]
            },
            access: function(e, t, n) {
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    return this.get(e, t)
                }
                this.set(e, t, n);
                return n !== undefined ? n : t
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r === undefined) {
                    return
                }
                if (t !== undefined) {
                    if (A.isArray(t)) {
                        t = t.map(A.camelCase)
                    } else {
                        t = A.camelCase(t);
                        t = t in r ? [t] : t.match(R) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || A.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !A.isEmptyObject(t)
            }
        };
        var z = new $;
        var X = new $;
        var G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;

        function Y(e) {
            if (e === "true") {
                return true
            }
            if (e === "false") {
                return false
            }
            if (e === "null") {
                return null
            }
            if (e === +e + "") {
                return +e
            }
            if (G.test(e)) {
                return JSON.parse(e)
            }
            return e
        }

        function J(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                r = "data-" + t.replace(Q, "-$&").toLowerCase();
                n = e.getAttribute(r);
                if (typeof n === "string") {
                    try {
                        n = Y(n)
                    } catch (e) {}
                    X.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }
        A.extend({
            hasData: function(e) {
                return X.hasData(e) || z.hasData(e)
            },
            data: function(e, t, n) {
                return X.access(e, t, n)
            },
            removeData: function(e, t) {
                X.remove(e, t)
            },
            _data: function(e, t, n) {
                return z.access(e, t, n)
            },
            _removeData: function(e, t) {
                z.remove(e, t)
            }
        });
        A.fn.extend({
            data: function(n, e) {
                var t, r, i, a = this[0],
                    o = a && a.attributes;
                if (n === undefined) {
                    if (this.length) {
                        i = X.get(a);
                        if (a.nodeType === 1 && !z.get(a, "hasDataAttrs")) {
                            t = o.length;
                            while (t--) {
                                if (o[t]) {
                                    r = o[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = A.camelCase(r.slice(5));
                                        J(a, r, i[r])
                                    }
                                }
                            }
                            z.set(a, "hasDataAttrs", true)
                        }
                    }
                    return i
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        X.set(this, n)
                    })
                }
                return K(this, function(e) {
                    var t;
                    if (a && e === undefined) {
                        t = X.get(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        t = J(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        return
                    }
                    this.each(function() {
                        X.set(this, n, e)
                    })
                }, null, e, arguments.length > 1, null, true)
            },
            removeData: function(e) {
                return this.each(function() {
                    X.remove(this, e)
                })
            }
        });
        A.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = z.get(e, t);
                    if (n) {
                        if (!r || A.isArray(n)) {
                            r = z.access(e, t, A.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = A.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = A._queueHooks(e, t),
                    o = function() {
                        A.dequeue(e, t)
                    };
                if (i === "inprogress") {
                    i = n.shift();
                    r--
                }
                if (i) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete a.stop;
                    i.call(e, o, a)
                }
                if (!r && a) {
                    a.empty.fire()
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return z.get(e, n) || z.access(e, n, {
                    empty: A.Callbacks("once memory").add(function() {
                        z.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        A.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return A.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = A.queue(this, t, n);
                    A._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        A.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    A.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = A.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        if (!--r) {
                            i.resolveWith(a, [a])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (o--) {
                    n = z.get(a[o], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(s)
                    }
                }
                s();
                return i.promise(t)
            }
        });
        var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i");
        var te = ["Top", "Right", "Bottom", "Left"];
        var ne = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && A.contains(e.ownerDocument, e) && A.css(e, "display") === "none"
        };
        var re = function(e, t, n, r) {
            var i, a, o = {};
            for (a in t) {
                o[a] = e.style[a];
                e.style[a] = t[a]
            }
            i = n.apply(e, r || []);
            for (a in t) {
                e.style[a] = o[a]
            }
            return i
        };

        function ie(e, t, n, r) {
            var i, a = 1,
                o = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return A.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (A.cssNumber[t] ? "" : "px"),
                f = (A.cssNumber[t] || l !== "px" && +u) && ee.exec(A.css(e, t));
            if (f && f[3] !== l) {
                l = l || f[3];
                n = n || [];
                f = +u || 1;
                do {
                    a = a || ".5";
                    f = f / a;
                    A.style(e, t, f + l)
                } while (a !== (a = s() / u) && a !== 1 && --o)
            }
            if (n) {
                f = +f || +u || 0;
                i = n[1] ? f + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = l;
                    r.start = f;
                    r.end = i
                }
            }
            return i
        }
        var ae = {};

        function oe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ae[r];
            if (i) {
                return i
            }
            t = n.body.appendChild(n.createElement(r));
            i = A.css(t, "display");
            t.parentNode.removeChild(t);
            if (i === "none") {
                i = "block"
            }
            ae[r] = i;
            return i
        }

        function se(e, t) {
            var n, r, i = [],
                a = 0,
                o = e.length;
            for (; a < o; a++) {
                r = e[a];
                if (!r.style) {
                    continue
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        i[a] = z.get(r, "display") || null;
                        if (!i[a]) {
                            r.style.display = ""
                        }
                    }
                    if (r.style.display === "" && ne(r)) {
                        i[a] = oe(r)
                    }
                } else {
                    if (n !== "none") {
                        i[a] = "none";
                        z.set(r, "display", n)
                    }
                }
            }
            for (a = 0; a < o; a++) {
                if (i[a] != null) {
                    e[a].style.display = i[a]
                }
            }
            return e
        }
        A.fn.extend({
            show: function() {
                return se(this, true)
            },
            hide: function() {
                return se(this)
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (ne(this)) {
                        A(this).show()
                    } else {
                        A(this).hide()
                    }
                })
            }
        });
        var ue = /^(?:checkbox|radio)$/i;
        var le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var fe = /^$|\/(?:java|ecma)script/i;
        var ce = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ce.optgroup = ce.option;
        ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead;
        ce.th = ce.td;

        function de(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && A.nodeName(e, t)) {
                return A.merge([e], n)
            }
            return n
        }

        function pe(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function me(e, t, n, r, i) {
            var a, o, s, u, l, f, c = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
            for (; p < h; p++) {
                a = e[p];
                if (a || a === 0) {
                    if (A.type(a) === "object") {
                        A.merge(d, a.nodeType ? [a] : a)
                    } else if (!he.test(a)) {
                        d.push(t.createTextNode(a))
                    } else {
                        o = o || c.appendChild(t.createElement("div"));
                        s = (le.exec(a) || ["", ""])[1].toLowerCase();
                        u = ce[s] || ce._default;
                        o.innerHTML = u[1] + A.htmlPrefilter(a) + u[2];
                        f = u[0];
                        while (f--) {
                            o = o.lastChild
                        }
                        A.merge(d, o.childNodes);
                        o = c.firstChild;
                        o.textContent = ""
                    }
                }
            }
            c.textContent = "";
            p = 0;
            while (a = d[p++]) {
                if (r && A.inArray(a, r) > -1) {
                    if (i) {
                        i.push(a)
                    }
                    continue
                }
                l = A.contains(a.ownerDocument, a);
                o = de(c.appendChild(a), "script");
                if (l) {
                    pe(o)
                }
                if (n) {
                    f = 0;
                    while (a = o[f++]) {
                        if (fe.test(a.type || "")) {
                            n.push(a)
                        }
                    }
                }
            }
            return c
        }(function() {
            var e = C.createDocumentFragment(),
                t = e.appendChild(C.createElement("div")),
                n = C.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            g.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            g.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var ge = C.documentElement;
        var ye = /^key/,
            ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            be = /^([^.]*)(?:\.(.+)|)/;

        function xe() {
            return true
        }

        function we() {
            return false
        }

        function Te() {
            try {
                return C.activeElement
            } catch (e) {}
        }

        function ke(e, t, n, r, i, a) {
            var o, s;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined
                }
                for (s in t) {
                    ke(e, s, n, r, t[s], a)
                }
                return e
            }
            if (r == null && i == null) {
                i = n;
                r = n = undefined
            } else if (i == null) {
                if (typeof n === "string") {
                    i = r;
                    r = undefined
                } else {
                    i = r;
                    r = n;
                    n = undefined
                }
            }
            if (i === false) {
                i = we
            } else if (!i) {
                return e
            }
            if (a === 1) {
                o = i;
                i = function(e) {
                    A().off(e);
                    return o.apply(this, arguments)
                };
                i.guid = o.guid || (o.guid = A.guid++)
            }
            return e.each(function() {
                A.event.add(this, t, i, r, n)
            })
        }
        A.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var a, o, s, u, l, f, c, d, p, h, m, g = z.get(t);
                if (!g) {
                    return
                }
                if (n.handler) {
                    a = n;
                    n = a.handler;
                    i = a.selector
                }
                if (i) {
                    A.find.matchesSelector(ge, i)
                }
                if (!n.guid) {
                    n.guid = A.guid++
                }
                if (!(u = g.events)) {
                    u = g.events = {}
                }
                if (!(o = g.handle)) {
                    o = g.handle = function(e) {
                        return typeof A !== "undefined" && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(R) || [""];
                l = e.length;
                while (l--) {
                    s = be.exec(e[l]) || [];
                    p = m = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!p) {
                        continue
                    }
                    c = A.event.special[p] || {};
                    p = (i ? c.delegateType : c.bindType) || p;
                    c = A.event.special[p] || {};
                    f = A.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && A.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, a);
                    if (!(d = u[p])) {
                        d = u[p] = [];
                        d.delegateCount = 0;
                        if (!c.setup || c.setup.call(t, r, h, o) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(p, o)
                            }
                        }
                    }
                    if (c.add) {
                        c.add.call(t, f);
                        if (!f.handler.guid) {
                            f.handler.guid = n.guid
                        }
                    }
                    if (i) {
                        d.splice(d.delegateCount++, 0, f)
                    } else {
                        d.push(f)
                    }
                    A.event.global[p] = true
                }
            },
            remove: function(e, t, n, r, i) {
                var a, o, s, u, l, f, c, d, p, h, m, g = z.hasData(e) && z.get(e);
                if (!g || !(u = g.events)) {
                    return
                }
                t = (t || "").match(R) || [""];
                l = t.length;
                while (l--) {
                    s = be.exec(t[l]) || [];
                    p = m = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!p) {
                        for (p in u) {
                            A.event.remove(e, p + t[l], n, r, true)
                        }
                        continue
                    }
                    c = A.event.special[p] || {};
                    p = (r ? c.delegateType : c.bindType) || p;
                    d = u[p] || [];
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    o = a = d.length;
                    while (a--) {
                        f = d[a];
                        if ((i || m === f.origType) && (!n || n.guid === f.guid) && (!s || s.test(f.namespace)) && (!r || r === f.selector || r === "**" && f.selector)) {
                            d.splice(a, 1);
                            if (f.selector) {
                                d.delegateCount--
                            }
                            if (c.remove) {
                                c.remove.call(e, f)
                            }
                        }
                    }
                    if (o && !d.length) {
                        if (!c.teardown || c.teardown.call(e, h, g.handle) === false) {
                            A.removeEvent(e, p, g.handle)
                        }
                        delete u[p]
                    }
                }
                if (A.isEmptyObject(u)) {
                    z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = A.event.fix(e);
                var n, r, i, a, o, s, u = new Array(arguments.length),
                    l = (z.get(this, "events") || {})[t.type] || [],
                    f = A.event.special[t.type] || {};
                u[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    u[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (f.preDispatch && f.preDispatch.call(this, t) === false) {
                    return
                }
                s = A.event.handlers.call(this, t, l);
                n = 0;
                while ((a = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = a.elem;
                    r = 0;
                    while ((o = a.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(o.namespace)) {
                            t.handleObj = o;
                            t.data = o.data;
                            i = ((A.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, u);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (f.postDispatch) {
                    f.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, i, a, o, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; l !== this; l = l.parentNode || this) {
                        if (l.nodeType === 1 && !(e.type === "click" && l.disabled === true)) {
                            a = [];
                            o = {};
                            for (n = 0; n < u; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (o[i] === undefined) {
                                    o[i] = r.needsContext ? A(i, this).index(l) > -1 : A.find(i, this, null, [l]).length
                                }
                                if (o[i]) {
                                    a.push(r)
                                }
                            }
                            if (a.length) {
                                s.push({
                                    elem: l,
                                    handlers: a
                                })
                            }
                        }
                    }
                }
                l = this;
                if (u < t.length) {
                    s.push({
                        elem: l,
                        handlers: t.slice(u)
                    })
                }
                return s
            },
            addProp: function(t, e) {
                Object.defineProperty(A.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: A.isFunction(e) ? function() {
                        if (this.originalEvent) {
                            return e(this.originalEvent)
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[t]
                        }
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[A.expando] ? e : new A.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== Te() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Te() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && A.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return A.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            }
        };
        A.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        A.Event = function(e, t) {
            if (!(this instanceof A.Event)) {
                return new A.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? xe : we;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                A.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || A.now();
            this[A.expando] = true
        };
        A.Event.prototype = {
            constructor: A.Event,
            isDefaultPrevented: we,
            isPropagationStopped: we,
            isImmediatePropagationStopped: we,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = xe;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = xe;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = xe;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        A.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(e) {
                var t = e.button;
                if (e.which == null && ye.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && ve.test(e.type)) {
                    if (t & 1) {
                        return 1
                    }
                    if (t & 2) {
                        return 3
                    }
                    if (t & 4) {
                        return 2
                    }
                    return 0
                }
                return e.which
            }
        }, A.event.addProp);
        A.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, a) {
            A.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    if (!r || r !== n && !A.contains(n, r)) {
                        e.type = i.origType;
                        t = i.handler.apply(this, arguments);
                        e.type = a
                    }
                    return t
                }
            }
        });
        A.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (i in e) {
                        this.off(i, t, e[i])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined
                }
                if (n === false) {
                    n = we
                }
                return this.each(function() {
                    A.event.remove(this, e, n, t)
                })
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ae = /<script|<style|<link/i,
            Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            if (A.nodeName(e, "table") && A.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function Ne(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Ie(e) {
            var t = Le.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function Pe(e, t) {
            var n, r, i, a, o, s, u, l;
            if (t.nodeType !== 1) {
                return
            }
            if (z.hasData(e)) {
                a = z.access(e);
                o = z.set(t, a);
                l = a.events;
                if (l) {
                    delete o.handle;
                    o.events = {};
                    for (i in l) {
                        for (n = 0, r = l[i].length; n < r; n++) {
                            A.event.add(t, i, l[i][n])
                        }
                    }
                }
            }
            if (X.hasData(e)) {
                s = X.access(e);
                u = A.extend({}, s);
                X.set(t, u)
            }
        }

        function je(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && ue.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function Me(n, r, i, a) {
            r = m.apply([], r);
            var e, t, o, s, u, l, f = 0,
                c = n.length,
                d = c - 1,
                p = r[0],
                h = A.isFunction(p);
            if (h || c > 1 && typeof p === "string" && !g.checkClone && Se.test(p)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = p.call(this, e, t.html())
                    }
                    Me(t, r, i, a)
                })
            }
            if (c) {
                e = me(r, n[0].ownerDocument, false, n, a);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || a) {
                    o = A.map(de(e, "script"), Ne);
                    s = o.length;
                    for (; f < c; f++) {
                        u = e;
                        if (f !== d) {
                            u = A.clone(u, true, true);
                            if (s) {
                                A.merge(o, de(u, "script"))
                            }
                        }
                        i.call(n[f], u, f)
                    }
                    if (s) {
                        l = o[o.length - 1].ownerDocument;
                        A.map(o, Ie);
                        for (f = 0; f < s; f++) {
                            u = o[f];
                            if (fe.test(u.type || "") && !z.access(u, "globalEval") && A.contains(l, u)) {
                                if (u.src) {
                                    if (A._evalUrl) {
                                        A._evalUrl(u.src)
                                    }
                                } else {
                                    y(u.textContent.replace(Ee, ""), l)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function qe(e, t, n) {
            var r, i = t ? A.filter(t, e) : e,
                a = 0;
            for (;
                (r = i[a]) != null; a++) {
                if (!n && r.nodeType === 1) {
                    A.cleanData(de(r))
                }
                if (r.parentNode) {
                    if (n && A.contains(r.ownerDocument, r)) {
                        pe(de(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        A.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, a, o, s = e.cloneNode(true),
                    u = A.contains(e.ownerDocument, e);
                if (!g.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !A.isXMLDoc(e)) {
                    o = de(s);
                    a = de(e);
                    for (r = 0, i = a.length; r < i; r++) {
                        je(a[r], o[r])
                    }
                }
                if (t) {
                    if (n) {
                        a = a || de(e);
                        o = o || de(s);
                        for (r = 0, i = a.length; r < i; r++) {
                            Pe(a[r], o[r])
                        }
                    } else {
                        Pe(e, s)
                    }
                }
                o = de(s, "script");
                if (o.length > 0) {
                    pe(o, !u && de(e, "script"))
                }
                return s
            },
            cleanData: function(e) {
                var t, n, r, i = A.event.special,
                    a = 0;
                for (;
                    (n = e[a]) !== undefined; a++) {
                    if (V(n)) {
                        if (t = n[z.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        A.event.remove(n, r)
                                    } else {
                                        A.removeEvent(n, r, t.handle)
                                    }
                                }
                            }
                            n[z.expando] = undefined
                        }
                        if (n[X.expando]) {
                            n[X.expando] = undefined
                        }
                    }
                }
            }
        });
        A.fn.extend({
            detach: function(e) {
                return qe(this, e, true)
            },
            remove: function(e) {
                return qe(this, e)
            },
            text: function(e) {
                return K(this, function(e) {
                    return e === undefined ? A.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = De(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return Me(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Me(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return Me(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        A.cleanData(de(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return A.clone(this, e, t)
                })
            },
            html: function(e) {
                return K(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Ae.test(e) && !ce[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = A.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    A.cleanData(de(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Me(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (A.inArray(this, n) < 0) {
                        A.cleanData(de(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        A.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, o) {
            A.fn[e] = function(e) {
                var t, n = [],
                    r = A(e),
                    i = r.length - 1,
                    a = 0;
                for (; a <= i; a++) {
                    t = a === i ? this : this.clone(true);
                    A(r[a])[o](t);
                    u.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var Re = /^margin/;
        var _e = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i");
        var He = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = k
            }
            return t.getComputedStyle(e)
        };
        (function() {
            function e() {
                if (!o) {
                    return
                }
                o.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                o.innerHTML = "";
                ge.appendChild(a);
                var e = k.getComputedStyle(o);
                t = e.top !== "1%";
                i = e.marginLeft === "2px";
                n = e.width === "4px";
                o.style.marginRight = "50%";
                r = e.marginRight === "4px";
                ge.removeChild(a);
                o = null
            }
            var t, n, r, i, a = C.createElement("div"),
                o = C.createElement("div");
            if (!o.style) {
                return
            }
            o.style.backgroundClip = "content-box";
            o.cloneNode(true).style.backgroundClip = "";
            g.clearCloneStyle = o.style.backgroundClip === "content-box";
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            a.appendChild(o);
            A.extend(g, {
                pixelPosition: function() {
                    e();
                    return t
                },
                boxSizingReliable: function() {
                    e();
                    return n
                },
                pixelMarginRight: function() {
                    e();
                    return r
                },
                reliableMarginLeft: function() {
                    e();
                    return i
                }
            })
        })();

        function Oe(e, t, n) {
            var r, i, a, o, s = e.style;
            n = n || He(e);
            if (n) {
                o = n.getPropertyValue(t) || n[t];
                if (o === "" && !A.contains(e.ownerDocument, e)) {
                    o = A.style(e, t)
                }
                if (!g.pixelMarginRight() && _e.test(o) && Re.test(t)) {
                    r = s.width;
                    i = s.minWidth;
                    a = s.maxWidth;
                    s.minWidth = s.maxWidth = s.width = o;
                    o = n.width;
                    s.width = r;
                    s.minWidth = i;
                    s.maxWidth = a
                }
            }
            return o !== undefined ? o + "" : o
        }

        function Fe(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Be = /^(none|table(?!-c[ea]).+)/,
            Ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            We = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ke = ["Webkit", "Moz", "ms"],
            Ve = C.createElement("div").style;

        function $e(e) {
            if (e in Ve) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ke.length;
            while (n--) {
                e = Ke[n] + t;
                if (e in Ve) {
                    return e
                }
            }
        }

        function ze(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Xe(e, t, n, r, i) {
            var a, o = 0;
            if (n === (r ? "border" : "content")) {
                a = 4
            } else {
                a = t === "width" ? 1 : 0
            }
            for (; a < 4; a += 2) {
                if (n === "margin") {
                    o += A.css(e, n + te[a], true, i)
                }
                if (r) {
                    if (n === "content") {
                        o -= A.css(e, "padding" + te[a], true, i)
                    }
                    if (n !== "margin") {
                        o -= A.css(e, "border" + te[a] + "Width", true, i)
                    }
                } else {
                    o += A.css(e, "padding" + te[a], true, i);
                    if (n !== "padding") {
                        o += A.css(e, "border" + te[a] + "Width", true, i)
                    }
                }
            }
            return o
        }

        function Ge(e, t, n) {
            var r, i = true,
                a = He(e),
                o = A.css(e, "boxSizing", false, a) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = Oe(e, t, a);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if (_e.test(r)) {
                    return r
                }
                i = o && (g.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + Xe(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }
        A.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Oe(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var i, a, o, s = A.camelCase(t),
                    u = e.style;
                t = A.cssProps[s] || (A.cssProps[s] = $e(s) || s);
                o = A.cssHooks[t] || A.cssHooks[s];
                if (n !== undefined) {
                    a = typeof n;
                    if (a === "string" && (i = ee.exec(n)) && i[1]) {
                        n = ie(e, t, i);
                        a = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (a === "number") {
                        n += i && i[3] || (A.cssNumber[s] ? "" : "px")
                    }
                    if (!g.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        u[t] = "inherit"
                    }
                    if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) {
                        u[t] = n
                    }
                } else {
                    if (o && "get" in o && (i = o.get(e, false, r)) !== undefined) {
                        return i
                    }
                    return u[t]
                }
            },
            css: function(e, t, n, r) {
                var i, a, o, s = A.camelCase(t);
                t = A.cssProps[s] || (A.cssProps[s] = $e(s) || s);
                o = A.cssHooks[t] || A.cssHooks[s];
                if (o && "get" in o) {
                    i = o.get(e, true, n)
                }
                if (i === undefined) {
                    i = Oe(e, t, r)
                }
                if (i === "normal" && t in We) {
                    i = We[t]
                }
                if (n === "" || n) {
                    a = parseFloat(i);
                    return n === true || isFinite(a) ? a || 0 : i
                }
                return i
            }
        });
        A.each(["height", "width"], function(e, o) {
            A.cssHooks[o] = {
                get: function(e, t, n) {
                    if (t) {
                        return Be.test(A.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Ue, function() {
                            return Ge(e, o, n)
                        }) : Ge(e, o, n)
                    }
                },
                set: function(e, t, n) {
                    var r, i = n && He(e),
                        a = n && Xe(e, o, n, A.css(e, "boxSizing", false, i) === "border-box", i);
                    if (a && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[o] = t;
                        t = A.css(e, o)
                    }
                    return ze(e, t, a)
                }
            }
        });
        A.cssHooks.marginLeft = Fe(g.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        A.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, a) {
            A.cssHooks[i + a] = {
                expand: function(e) {
                    var t = 0,
                        n = {},
                        r = typeof e === "string" ? e.split(" ") : [e];
                    for (; t < 4; t++) {
                        n[i + te[t] + a] = r[t] || r[t - 2] || r[0]
                    }
                    return n
                }
            };
            if (!Re.test(i)) {
                A.cssHooks[i + a].set = ze
            }
        });
        A.fn.extend({
            css: function(e, t) {
                return K(this, function(e, t, n) {
                    var r, i, a = {},
                        o = 0;
                    if (A.isArray(t)) {
                        r = He(e);
                        i = t.length;
                        for (; o < i; o++) {
                            a[t[o]] = A.css(e, t[o], false, r)
                        }
                        return a
                    }
                    return n !== undefined ? A.style(e, t, n) : A.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Qe(e, t, n, r, i) {
            return new Qe.prototype.init(e, t, n, r, i)
        }
        A.Tween = Qe;
        Qe.prototype = {
            constructor: Qe,
            init: function(e, t, n, r, i, a) {
                this.elem = e;
                this.prop = n;
                this.easing = i || A.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = a || (A.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Qe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Qe.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Qe.propHooks._default.set(this)
                }
                return this
            }
        };
        Qe.prototype.init.prototype = Qe.prototype;
        Qe.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop]
                    }
                    t = A.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (A.fx.step[e.prop]) {
                        A.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[A.cssProps[e.prop]] != null || A.cssHooks[e.prop])) {
                        A.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        A.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        A.fx = Qe.prototype.init;
        A.fx.step = {};
        var Ye, Je, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Je) {
                k.requestAnimationFrame(tt);
                A.fx.tick()
            }
        }

        function nt() {
            k.setTimeout(function() {
                Ye = undefined
            });
            return Ye = A.now()
        }

        function rt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) {
                n = te[r];
                i["margin" + n] = i["padding" + n] = e
            }
            if (t) {
                i.opacity = i.width = e
            }
            return i
        }

        function it(e, t, n) {
            var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]),
                a = 0,
                o = i.length;
            for (; a < o; a++) {
                if (r = i[a].call(n, t, e)) {
                    return r
                }
            }
        }

        function at(e, t, n) {
            var r, i, a, o, s, u, l, f, c = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                m = e.nodeType && ne(e),
                g = z.get(e, "fxshow");
            if (!n.queue) {
                o = A._queueHooks(e, "fx");
                if (o.unqueued == null) {
                    o.unqueued = 0;
                    s = o.empty.fire;
                    o.empty.fire = function() {
                        if (!o.unqueued) {
                            s()
                        }
                    }
                }
                o.unqueued++;
                d.always(function() {
                    d.always(function() {
                        o.unqueued--;
                        if (!A.queue(e, "fx").length) {
                            o.empty.fire()
                        }
                    })
                })
            }
            for (r in t) {
                i = t[r];
                if (Ze.test(i)) {
                    delete t[r];
                    a = a || i === "toggle";
                    if (i === (m ? "hide" : "show")) {
                        if (i === "show" && g && g[r] !== undefined) {
                            m = true
                        } else {
                            continue
                        }
                    }
                    p[r] = g && g[r] || A.style(e, r)
                }
            }
            u = !A.isEmptyObject(t);
            if (!u && A.isEmptyObject(p)) {
                return
            }
            if (c && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                l = g && g.display;
                if (l == null) {
                    l = z.get(e, "display")
                }
                f = A.css(e, "display");
                if (f === "none") {
                    if (l) {
                        f = l
                    } else {
                        se([e], true);
                        l = e.style.display || l;
                        f = A.css(e, "display");
                        se([e])
                    }
                }
                if (f === "inline" || f === "inline-block" && l != null) {
                    if (A.css(e, "float") === "none") {
                        if (!u) {
                            d.done(function() {
                                h.display = l
                            });
                            if (l == null) {
                                f = h.display;
                                l = f === "none" ? "" : f
                            }
                        }
                        h.display = "inline-block"
                    }
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                d.always(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            u = false;
            for (r in p) {
                if (!u) {
                    if (g) {
                        if ("hidden" in g) {
                            m = g.hidden
                        }
                    } else {
                        g = z.access(e, "fxshow", {
                            display: l
                        })
                    }
                    if (a) {
                        g.hidden = !m
                    }
                    if (m) {
                        se([e], true)
                    }
                    d.done(function() {
                        if (!m) {
                            se([e])
                        }
                        z.remove(e, "fxshow");
                        for (r in p) {
                            A.style(e, r, p[r])
                        }
                    })
                }
                u = it(m ? g[r] : 0, r, d);
                if (!(r in g)) {
                    g[r] = u.start;
                    if (m) {
                        u.end = u.start;
                        u.start = 0
                    }
                }
            }
        }

        function ot(e, t) {
            var n, r, i, a, o;
            for (n in e) {
                r = A.camelCase(n);
                i = t[r];
                a = e[n];
                if (A.isArray(a)) {
                    i = a[1];
                    a = e[n] = a[0]
                }
                if (n !== r) {
                    e[r] = a;
                    delete e[n]
                }
                o = A.cssHooks[r];
                if (o && "expand" in o) {
                    a = o.expand(a);
                    delete e[r];
                    for (n in a) {
                        if (!(n in e)) {
                            e[n] = a[n];
                            t[n] = i
                        }
                    }
                } else {
                    t[r] = i
                }
            }
        }

        function st(o, e, t) {
            var n, s, r = 0,
                i = st.prefilters.length,
                u = A.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (s) {
                        return false
                    }
                    var e = Ye || nt(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = t / l.duration || 0,
                        r = 1 - n,
                        i = 0,
                        a = l.tweens.length;
                    for (; i < a; i++) {
                        l.tweens[i].run(r)
                    }
                    u.notifyWith(o, [l, r, t]);
                    if (r < 1 && a) {
                        return t
                    } else {
                        u.resolveWith(o, [l]);
                        return false
                    }
                },
                l = u.promise({
                    elem: o,
                    props: A.extend({}, e),
                    opts: A.extend(true, {
                        specialEasing: {},
                        easing: A.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ye || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = A.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        l.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; t < n; t++) {
                            l.tweens[t].run(1)
                        }
                        if (e) {
                            u.notifyWith(o, [l, 1, 0]);
                            u.resolveWith(o, [l, e])
                        } else {
                            u.rejectWith(o, [l, e])
                        }
                        return this
                    }
                }),
                f = l.props;
            ot(f, l.opts.specialEasing);
            for (; r < i; r++) {
                n = st.prefilters[r].call(l, o, f, l.opts);
                if (n) {
                    if (A.isFunction(n.stop)) {
                        A._queueHooks(l.elem, l.opts.queue).stop = A.proxy(n.stop, n)
                    }
                    return n
                }
            }
            A.map(f, it, l);
            if (A.isFunction(l.opts.start)) {
                l.opts.start.call(o, l)
            }
            A.fx.timer(A.extend(a, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            }));
            return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        A.Animation = A.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ie(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (A.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(R)
                }
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) {
                    n = e[r];
                    st.tweeners[n] = st.tweeners[n] || [];
                    st.tweeners[n].unshift(t)
                }
            },
            prefilters: [at],
            prefilter: function(e, t) {
                if (t) {
                    st.prefilters.unshift(e)
                } else {
                    st.prefilters.push(e)
                }
            }
        });
        A.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? A.extend({}, e) : {
                complete: n || !n && t || A.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !A.isFunction(t) && t
            };
            if (A.fx.off || C.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in A.fx.speeds) {
                        r.duration = A.fx.speeds[r.duration]
                    } else {
                        r.duration = A.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (A.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    A.dequeue(this, r.queue)
                }
            };
            return r
        };
        A.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = A.isEmptyObject(t),
                    a = A.speed(e, n, r),
                    o = function() {
                        var e = st(this, A.extend({}, t), a);
                        if (i || z.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                o.finish = o;
                return i || a.queue === false ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(i, e, a) {
                var o = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(a)
                };
                if (typeof i !== "string") {
                    a = e;
                    e = i;
                    i = undefined
                }
                if (e && i !== false) {
                    this.queue(i || "fx", [])
                }
                return this.each(function() {
                    var e = true,
                        t = i != null && i + "queueHooks",
                        n = A.timers,
                        r = z.get(this);
                    if (t) {
                        if (r[t] && r[t].stop) {
                            o(r[t])
                        }
                    } else {
                        for (t in r) {
                            if (r[t] && r[t].stop && et.test(t)) {
                                o(r[t])
                            }
                        }
                    }
                    for (t = n.length; t--;) {
                        if (n[t].elem === this && (i == null || n[t].queue === i)) {
                            n[t].anim.stop(a);
                            e = false;
                            n.splice(t, 1)
                        }
                    }
                    if (e || !a) {
                        A.dequeue(this, i)
                    }
                })
            },
            finish: function(o) {
                if (o !== false) {
                    o = o || "fx"
                }
                return this.each(function() {
                    var e, t = z.get(this),
                        n = t[o + "queue"],
                        r = t[o + "queueHooks"],
                        i = A.timers,
                        a = n ? n.length : 0;
                    t.finish = true;
                    A.queue(this, o, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (e = i.length; e--;) {
                        if (i[e].elem === this && i[e].queue === o) {
                            i[e].anim.stop(true);
                            i.splice(e, 1)
                        }
                    }
                    for (e = 0; e < a; e++) {
                        if (n[e] && n[e].finish) {
                            n[e].finish.call(this)
                        }
                    }
                    delete t.finish
                })
            }
        });
        A.each(["toggle", "show", "hide"], function(e, r) {
            var i = A.fn[r];
            A.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        A.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            A.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        A.timers = [];
        A.fx.tick = function() {
            var e, t = 0,
                n = A.timers;
            Ye = A.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                A.fx.stop()
            }
            Ye = undefined
        };
        A.fx.timer = function(e) {
            A.timers.push(e);
            if (e()) {
                A.fx.start()
            } else {
                A.timers.pop()
            }
        };
        A.fx.interval = 13;
        A.fx.start = function() {
            if (!Je) {
                Je = k.requestAnimationFrame ? k.requestAnimationFrame(tt) : k.setInterval(A.fx.tick, A.fx.interval)
            }
        };
        A.fx.stop = function() {
            if (k.cancelAnimationFrame) {
                k.cancelAnimationFrame(Je)
            } else {
                k.clearInterval(Je)
            }
            Je = null
        };
        A.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        A.fn.delay = function(r, e) {
            r = A.fx ? A.fx.speeds[r] || r : r;
            e = e || "fx";
            return this.queue(e, function(e, t) {
                var n = k.setTimeout(e, r);
                t.stop = function() {
                    k.clearTimeout(n)
                }
            })
        };
        (function() {
            var e = C.createElement("input"),
                t = C.createElement("select"),
                n = t.appendChild(C.createElement("option"));
            e.type = "checkbox";
            g.checkOn = e.value !== "";
            g.optSelected = n.selected;
            e = C.createElement("input");
            e.value = "t";
            e.type = "radio";
            g.radioValue = e.value === "t"
        })();
        var ut, lt = A.expr.attrHandle;
        A.fn.extend({
            attr: function(e, t) {
                return K(this, A.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    A.removeAttr(this, e)
                })
            }
        });
        A.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return A.prop(e, t, n)
                }
                if (a !== 1 || !A.isXMLDoc(e)) {
                    i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? ut : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        A.removeAttr(e, t);
                        return
                    }
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    e.setAttribute(t, n + "");
                    return n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                r = A.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && t === "radio" && A.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(R);
                if (i && e.nodeType === 1) {
                    while (n = i[r++]) {
                        e.removeAttribute(n)
                    }
                }
            }
        });
        ut = {
            set: function(e, t, n) {
                if (t === false) {
                    A.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = lt[t] || A.find.attr;
            lt[t] = function(e, t, n) {
                var r, i, a = t.toLowerCase();
                if (!n) {
                    i = lt[a];
                    lt[a] = r;
                    r = o(e, t, n) != null ? a : null;
                    lt[a] = i
                }
                return r
            }
        });
        var ft = /^(?:input|select|textarea|button)$/i,
            ct = /^(?:a|area)$/i;
        A.fn.extend({
            prop: function(e, t) {
                return K(this, A.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[A.propFix[e] || e]
                })
            }
        });
        A.extend({
            prop: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (a !== 1 || !A.isXMLDoc(e)) {
                    t = A.propFix[t] || t;
                    i = A.propHooks[t]
                }
                if (n !== undefined) {
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    return e[t] = n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                return e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = A.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (ft.test(e.nodeName) || ct.test(e.nodeName) && e.href) {
                            return 0
                        }
                        return -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!g.optSelected) {
            A.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                },
                set: function(e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            A.propFix[this.toLowerCase()] = this
        });

        function dt(e) {
            var t = e.match(R) || [];
            return t.join(" ")
        }

        function pt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        A.fn.extend({
            addClass: function(t) {
                var e, n, r, i, a, o, s, u = 0;
                if (A.isFunction(t)) {
                    return this.each(function(e) {
                        A(this).addClass(t.call(this, e, pt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(R) || [];
                    while (n = this[u++]) {
                        i = pt(n);
                        r = n.nodeType === 1 && " " + dt(i) + " ";
                        if (r) {
                            o = 0;
                            while (a = e[o++]) {
                                if (r.indexOf(" " + a + " ") < 0) {
                                    r += a + " "
                                }
                            }
                            s = dt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, a, o, s, u = 0;
                if (A.isFunction(t)) {
                    return this.each(function(e) {
                        A(this).removeClass(t.call(this, e, pt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(R) || [];
                    while (n = this[u++]) {
                        i = pt(n);
                        r = n.nodeType === 1 && " " + dt(i) + " ";
                        if (r) {
                            o = 0;
                            while (a = e[o++]) {
                                while (r.indexOf(" " + a + " ") > -1) {
                                    r = r.replace(" " + a + " ", " ")
                                }
                            }
                            s = dt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(i, t) {
                var a = typeof i;
                if (typeof t === "boolean" && a === "string") {
                    return t ? this.addClass(i) : this.removeClass(i)
                }
                if (A.isFunction(i)) {
                    return this.each(function(e) {
                        A(this).toggleClass(i.call(this, e, pt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (a === "string") {
                        t = 0;
                        n = A(this);
                        r = i.match(R) || [];
                        while (e = r[t++]) {
                            if (n.hasClass(e)) {
                                n.removeClass(e)
                            } else {
                                n.addClass(e)
                            }
                        }
                    } else if (i === undefined || a === "boolean") {
                        e = pt(this);
                        if (e) {
                            z.set(this, "__className__", e)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", e || i === false ? "" : z.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) {
                    if (n.nodeType === 1 && (" " + dt(pt(n)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var ht = /\r/g;
        A.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()];
                        if (r && "get" in r && (e = r.get(t, "value")) !== undefined) {
                            return e
                        }
                        e = t.value;
                        if (typeof e === "string") {
                            return e.replace(ht, "")
                        }
                        return e == null ? "" : e
                    }
                    return
                }
                i = A.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        t = n.call(this, e, A(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (A.isArray(t)) {
                        t = A.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        A.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = A.find.attr(e, "value");
                        return t != null ? t : dt(A.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            o = e.type === "select-one",
                            s = o ? null : [],
                            u = o ? a + 1 : i.length;
                        if (a < 0) {
                            r = u
                        } else {
                            r = o ? a : 0
                        }
                        for (; r < u; r++) {
                            n = i[r];
                            if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !A.nodeName(n.parentNode, "optgroup"))) {
                                t = A(n).val();
                                if (o) {
                                    return t
                                }
                                s.push(t)
                            }
                        }
                        return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            a = A.makeArray(t),
                            o = i.length;
                        while (o--) {
                            r = i[o];
                            if (r.selected = A.inArray(A.valHooks.option.get(r), a) > -1) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return a
                    }
                }
            }
        });
        A.each(["radio", "checkbox"], function() {
            A.valHooks[this] = {
                set: function(e, t) {
                    if (A.isArray(t)) {
                        return e.checked = A.inArray(A(e).val(), t) > -1
                    }
                }
            };
            if (!g.checkOn) {
                A.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var mt = /^(?:focusinfocus|focusoutblur)$/;
        A.extend(A.event, {
            trigger: function(e, t, n, r) {
                var i, a, o, s, u, l, f, c = [n || C],
                    d = h.call(e, "type") ? e.type : e,
                    p = h.call(e, "namespace") ? e.namespace.split(".") : [];
                a = o = n = n || C;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (mt.test(d + A.event.triggered)) {
                    return
                }
                if (d.indexOf(".") > -1) {
                    p = d.split(".");
                    d = p.shift();
                    p.sort()
                }
                u = d.indexOf(":") < 0 && "on" + d;
                e = e[A.expando] ? e : new A.Event(d, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = p.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : A.makeArray(t, [e]);
                f = A.event.special[d] || {};
                if (!r && f.trigger && f.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !f.noBubble && !A.isWindow(n)) {
                    s = f.delegateType || d;
                    if (!mt.test(s + d)) {
                        a = a.parentNode
                    }
                    for (; a; a = a.parentNode) {
                        c.push(a);
                        o = a
                    }
                    if (o === (n.ownerDocument || C)) {
                        c.push(o.defaultView || o.parentWindow || k)
                    }
                }
                i = 0;
                while ((a = c[i++]) && !e.isPropagationStopped()) {
                    e.type = i > 1 ? s : f.bindType || d;
                    l = (z.get(a, "events") || {})[e.type] && z.get(a, "handle");
                    if (l) {
                        l.apply(a, t)
                    }
                    l = u && a[u];
                    if (l && l.apply && V(a)) {
                        e.result = l.apply(a, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = d;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!f._default || f._default.apply(c.pop(), t) === false) && V(n)) {
                        if (u && A.isFunction(n[d]) && !A.isWindow(n)) {
                            o = n[u];
                            if (o) {
                                n[u] = null
                            }
                            A.event.triggered = d;
                            n[d]();
                            A.event.triggered = undefined;
                            if (o) {
                                n[u] = o
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = A.extend(new A.Event, n, {
                    type: e,
                    isSimulated: true
                });
                A.event.trigger(r, null, t)
            }
        });
        A.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    A.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return A.event.trigger(e, t, n, true)
                }
            }
        });
        A.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            A.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        A.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        g.focusin = "onfocusin" in k;
        if (!g.focusin) {
            A.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var i = function(e) {
                    A.event.simulate(r, e.target, A.event.fix(e))
                };
                A.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = z.access(e, r);
                        if (!t) {
                            e.addEventListener(n, i, true)
                        }
                        z.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = z.access(e, r) - 1;
                        if (!t) {
                            e.removeEventListener(n, i, true);
                            z.remove(e, r)
                        } else {
                            z.access(e, r, t)
                        }
                    }
                }
            })
        }
        var gt = k.location;
        var yt = A.now();
        var vt = /\?/;
        A.parseXML = function(e) {
            var t;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                t = (new k.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                A.error("Invalid XML: " + e)
            }
            return t
        };
        var bt = /\[\]$/,
            xt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;

        function kt(n, e, r, i) {
            var t;
            if (A.isArray(e)) {
                A.each(e, function(e, t) {
                    if (r || bt.test(n)) {
                        i(n, t)
                    } else {
                        kt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
                    }
                })
            } else if (!r && A.type(e) === "object") {
                for (t in e) {
                    kt(n + "[" + t + "]", e[t], r, i)
                }
            } else {
                i(n, e)
            }
        }
        A.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = A.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (A.isArray(e) || e.jquery && !A.isPlainObject(e)) {
                A.each(e, function() {
                    i(this.name, this.value)
                })
            } else {
                for (n in e) {
                    kt(n, e[n], t, i)
                }
            }
            return r.join("&")
        };
        A.fn.extend({
            serialize: function() {
                return A.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = A.prop(this, "elements");
                    return e ? A.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !A(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !ue.test(e))
                }).map(function(e, t) {
                    var n = A(this).val();
                    if (n == null) {
                        return null
                    }
                    if (A.isArray(n)) {
                        return A.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(xt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: n.replace(xt, "\r\n")
                    }
                }).get()
            }
        });
        var Ct = /%20/g,
            At = /#.*$/,
            St = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Dt = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            It = {},
            Pt = {},
            jt = "*/".concat("*"),
            Mt = C.createElement("a");
        Mt.href = gt.href;

        function qt(a) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    i = e.toLowerCase().match(R) || [];
                if (A.isFunction(t)) {
                    while (n = i[r++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (a[n] = a[n] || []).unshift(t)
                        } else {
                            (a[n] = a[n] || []).push(t)
                        }
                    }
                }
            }
        }

        function Rt(t, i, a, o) {
            var s = {},
                u = t === Pt;

            function l(e) {
                var r;
                s[e] = true;
                A.each(t[e] || [], function(e, t) {
                    var n = t(i, a, o);
                    if (typeof n === "string" && !u && !s[n]) {
                        i.dataTypes.unshift(n);
                        l(n);
                        return false
                    } else if (u) {
                        return !(r = n)
                    }
                });
                return r
            }
            return l(i.dataTypes[0]) || !s["*"] && l("*")
        }

        function _t(e, t) {
            var n, r, i = A.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                A.extend(true, e, r)
            }
            return e
        }

        function Ht(e, t, n) {
            var r, i, a, o, s = e.contents,
                u = e.dataTypes;
            while (u[0] === "*") {
                u.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (r) {
                for (i in s) {
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                }
            }
            if (u[0] in n) {
                a = u[0]
            } else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        a = i;
                        break
                    }
                    if (!o) {
                        o = i
                    }
                }
                a = a || o
            }
            if (a) {
                if (a !== u[0]) {
                    u.unshift(a)
                }
                return n[a]
            }
        }

        function Ot(e, t, n, r) {
            var i, a, o, s, u, l = {},
                f = e.dataTypes.slice();
            if (f[1]) {
                for (o in e.converters) {
                    l[o.toLowerCase()] = e.converters[o]
                }
            }
            a = f.shift();
            while (a) {
                if (e.responseFields[a]) {
                    n[e.responseFields[a]] = t
                }
                if (!u && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                u = a;
                a = f.shift();
                if (a) {
                    if (a === "*") {
                        a = u
                    } else if (u !== "*" && u !== a) {
                        o = l[u + " " + a] || l["* " + a];
                        if (!o) {
                            for (i in l) {
                                s = i.split(" ");
                                if (s[1] === a) {
                                    o = l[u + " " + s[0]] || l["* " + s[0]];
                                    if (o) {
                                        if (o === true) {
                                            o = l[i]
                                        } else if (l[i] !== true) {
                                            a = s[0];
                                            f.unshift(s[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (o !== true) {
                            if (o && e.throws) {
                                t = o(t)
                            } else {
                                try {
                                    t = o(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: o ? e : "No conversion from " + u + " to " + a
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        A.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gt.href,
                type: "GET",
                isLocal: Et.test(gt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": A.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _t(_t(e, A.ajaxSettings), t) : _t(A.ajaxSettings, e)
            },
            ajaxPrefilter: qt(It),
            ajaxTransport: qt(Pt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var f, c, d, n, p, r, h, m, i, a, g = A.ajaxSetup({}, t),
                    y = g.context || g,
                    v = g.context && (y.nodeType || y.jquery) ? A(y) : A.event,
                    b = A.Deferred(),
                    x = A.Callbacks("once memory"),
                    w = g.statusCode || {},
                    o = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = Lt.exec(d)) {
                                        n[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = n[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return h ? d : null
                        },
                        setRequestHeader: function(e, t) {
                            if (h == null) {
                                e = s[e.toLowerCase()] = s[e.toLowerCase()] || e;
                                o[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (h == null) {
                                g.mimeType = e
                            }
                            return this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (h) {
                                    T.always(e[T.status])
                                } else {
                                    for (t in e) {
                                        w[t] = [w[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            if (f) {
                                f.abort(t)
                            }
                            l(0, t);
                            return this
                        }
                    };
                b.promise(T);
                g.url = ((e || g.url || gt.href) + "").replace(Nt, gt.protocol + "//");
                g.type = t.method || t.type || g.method || g.type;
                g.dataTypes = (g.dataType || "*").toLowerCase().match(R) || [""];
                if (g.crossDomain == null) {
                    r = C.createElement("a");
                    try {
                        r.href = g.url;
                        r.href = r.href;
                        g.crossDomain = Mt.protocol + "//" + Mt.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = true
                    }
                }
                if (g.data && g.processData && typeof g.data !== "string") {
                    g.data = A.param(g.data, g.traditional)
                }
                Rt(It, g, t, T);
                if (h) {
                    return T
                }
                m = A.event && g.global;
                if (m && A.active++ === 0) {
                    A.event.trigger("ajaxStart")
                }
                g.type = g.type.toUpperCase();
                g.hasContent = !Dt.test(g.type);
                c = g.url.replace(At, "");
                if (!g.hasContent) {
                    a = g.url.slice(c.length);
                    if (g.data) {
                        c += (vt.test(c) ? "&" : "?") + g.data;
                        delete g.data
                    }
                    if (g.cache === false) {
                        c = c.replace(St, "$1");
                        a = (vt.test(c) ? "&" : "?") + "_=" + yt++ + a
                    }
                    g.url = c + a
                } else if (g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    g.data = g.data.replace(Ct, "+")
                }
                if (g.ifModified) {
                    if (A.lastModified[c]) {
                        T.setRequestHeader("If-Modified-Since", A.lastModified[c])
                    }
                    if (A.etag[c]) {
                        T.setRequestHeader("If-None-Match", A.etag[c])
                    }
                }
                if (g.data && g.hasContent && g.contentType !== false || t.contentType) {
                    T.setRequestHeader("Content-Type", g.contentType)
                }
                T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + jt + "; q=0.01" : "") : g.accepts["*"]);
                for (i in g.headers) {
                    T.setRequestHeader(i, g.headers[i])
                }
                if (g.beforeSend && (g.beforeSend.call(y, T, g) === false || h)) {
                    return T.abort()
                }
                u = "abort";
                x.add(g.complete);
                T.done(g.success);
                T.fail(g.error);
                f = Rt(Pt, g, t, T);
                if (!f) {
                    l(-1, "No Transport")
                } else {
                    T.readyState = 1;
                    if (m) {
                        v.trigger("ajaxSend", [T, g])
                    }
                    if (h) {
                        return T
                    }
                    if (g.async && g.timeout > 0) {
                        p = k.setTimeout(function() {
                            T.abort("timeout")
                        }, g.timeout)
                    }
                    try {
                        h = false;
                        f.send(o, l)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        l(-1, e)
                    }
                }

                function l(e, t, n, r) {
                    var i, a, o, s, u, l = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (p) {
                        k.clearTimeout(p)
                    }
                    f = undefined;
                    d = r || "";
                    T.readyState = e > 0 ? 4 : 0;
                    i = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        s = Ht(g, T, n)
                    }
                    s = Ot(g, s, T, i);
                    if (i) {
                        if (g.ifModified) {
                            u = T.getResponseHeader("Last-Modified");
                            if (u) {
                                A.lastModified[c] = u
                            }
                            u = T.getResponseHeader("etag");
                            if (u) {
                                A.etag[c] = u
                            }
                        }
                        if (e === 204 || g.type === "HEAD") {
                            l = "nocontent"
                        } else if (e === 304) {
                            l = "notmodified"
                        } else {
                            l = s.state;
                            a = s.data;
                            o = s.error;
                            i = !o
                        }
                    } else {
                        o = l;
                        if (e || !l) {
                            l = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    T.status = e;
                    T.statusText = (t || l) + "";
                    if (i) {
                        b.resolveWith(y, [a, l, T])
                    } else {
                        b.rejectWith(y, [T, l, o])
                    }
                    T.statusCode(w);
                    w = undefined;
                    if (m) {
                        v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? a : o])
                    }
                    x.fireWith(y, [T, l]);
                    if (m) {
                        v.trigger("ajaxComplete", [T, g]);
                        if (!--A.active) {
                            A.event.trigger("ajaxStop")
                        }
                    }
                }
                return T
            },
            getJSON: function(e, t, n) {
                return A.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return A.get(e, undefined, t, "script")
            }
        });
        A.each(["get", "post"], function(e, i) {
            A[i] = function(e, t, n, r) {
                if (A.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return A.ajax(A.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, A.isPlainObject(e) && e))
            }
        });
        A._evalUrl = function(e) {
            return A.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        A.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (A.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = A(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                if (A.isFunction(n)) {
                    return this.each(function(e) {
                        A(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = A(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = A.isFunction(t);
                return this.each(function(e) {
                    A(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    A(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        A.expr.pseudos.hidden = function(e) {
            return !A.expr.pseudos.visible(e)
        };
        A.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        A.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Ft = {
                0: 200,
                1223: 204
            },
            Bt = A.ajaxSettings.xhr();
        g.cors = !!Bt && "withCredentials" in Bt;
        g.ajax = Bt = !!Bt;
        A.ajaxTransport(function(i) {
            var a, o;
            if (g.cors || Bt && !i.crossDomain) {
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        r.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (n in i.xhrFields) {
                                r[n] = i.xhrFields[n]
                            }
                        }
                        if (i.mimeType && r.overrideMimeType) {
                            r.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !e["X-Requested-With"]) {
                            e["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (n in e) {
                            r.setRequestHeader(n, e[n])
                        }
                        a = function(e) {
                            return function() {
                                if (a) {
                                    a = o = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
                                    if (e === "abort") {
                                        r.abort()
                                    } else if (e === "error") {
                                        if (typeof r.status !== "number") {
                                            t(0, "error")
                                        } else {
                                            t(r.status, r.statusText)
                                        }
                                    } else {
                                        t(Ft[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        r.onload = a();
                        o = r.onerror = a("error");
                        if (r.onabort !== undefined) {
                            r.onabort = o
                        } else {
                            r.onreadystatechange = function() {
                                if (r.readyState === 4) {
                                    k.setTimeout(function() {
                                        if (a) {
                                            o()
                                        }
                                    })
                                }
                            }
                        }
                        a = a("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (a) {
                                throw e
                            }
                        }
                    },
                    abort: function() {
                        if (a) {
                            a()
                        }
                    }
                }
            }
        });
        A.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        A.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    A.globalEval(e);
                    return e
                }
            }
        });
        A.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        A.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, i;
                return {
                    send: function(e, t) {
                        r = A("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove();
                            i = null;
                            if (e) {
                                t(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        C.head.appendChild(r[0])
                    },
                    abort: function() {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        var Ut = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        A.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || A.expando + "_" + yt++;
                this[e] = true;
                return e
            }
        });
        A.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, a, o = e.jsonp !== false && (Wt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Wt.test(e.data) && "data");
            if (o || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = A.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (o) {
                    e[o] = e[o].replace(Wt, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!a) {
                        A.error(r + " was not called")
                    }
                    return a[0]
                };
                e.dataTypes[0] = "json";
                i = k[r];
                k[r] = function() {
                    a = arguments
                };
                n.always(function() {
                    if (i === undefined) {
                        A(k).removeProp(r)
                    } else {
                        k[r] = i
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Ut.push(r)
                    }
                    if (a && A.isFunction(i)) {
                        i(a[0])
                    }
                    a = i = undefined
                });
                return "script"
            }
        });
        g.createHTMLDocument = function() {
            var e = C.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        A.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            var r, i, a;
            if (!t) {
                if (g.createHTMLDocument) {
                    t = C.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = C.location.href;
                    t.head.appendChild(r)
                } else {
                    t = C
                }
            }
            i = L.exec(e);
            a = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = me([e], t, a);
            if (a && a.length) {
                A(a).remove()
            }
            return A.merge([], i.childNodes)
        };
        A.fn.load = function(e, t, n) {
            var r, i, a, o = this,
                s = e.indexOf(" ");
            if (s > -1) {
                r = dt(e.slice(s));
                e = e.slice(0, s)
            }
            if (A.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                i = "POST"
            }
            if (o.length > 0) {
                A.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments;
                    o.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    o.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            A.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        A.expr.pseudos.animated = function(t) {
            return A.grep(A.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Kt(e) {
            return A.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        A.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, o, s, u, l, f = A.css(e, "position"),
                    c = A(e),
                    d = {};
                if (f === "static") {
                    e.style.position = "relative"
                }
                s = c.offset();
                a = A.css(e, "top");
                u = A.css(e, "left");
                l = (f === "absolute" || f === "fixed") && (a + u).indexOf("auto") > -1;
                if (l) {
                    r = c.position();
                    o = r.top;
                    i = r.left
                } else {
                    o = parseFloat(a) || 0;
                    i = parseFloat(u) || 0
                }
                if (A.isFunction(t)) {
                    t = t.call(e, n, A.extend({}, s))
                }
                if (t.top != null) {
                    d.top = t.top - s.top + o
                }
                if (t.left != null) {
                    d.left = t.left - s.left + i
                }
                if ("using" in t) {
                    t.using.call(e, d)
                } else {
                    c.css(d)
                }
            }
        };
        A.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        A.offset.setOffset(this, t, e)
                    })
                }
                var e, n, r, i, a = this[0];
                if (!a) {
                    return
                }
                if (!a.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                r = a.getBoundingClientRect();
                if (r.width || r.height) {
                    i = a.ownerDocument;
                    n = Kt(i);
                    e = i.documentElement;
                    return {
                        top: r.top + n.pageYOffset - e.clientTop,
                        left: r.left + n.pageXOffset - e.clientLeft
                    }
                }
                return r
            },
            position: function() {
                if (!this[0]) {
                    return
                }
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if (A.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!A.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + A.css(e[0], "borderTopWidth", true),
                        left: r.left + A.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - A.css(n, "marginTop", true),
                    left: t.left - r.left - A.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && A.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || ge
                })
            }
        });
        A.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var a = "pageYOffset" === i;
            A.fn[t] = function(e) {
                return K(this, function(e, t, n) {
                    var r = Kt(e);
                    if (n === undefined) {
                        return r ? r[i] : e[t]
                    }
                    if (r) {
                        r.scrollTo(!a ? n : r.pageXOffset, a ? n : r.pageYOffset)
                    } else {
                        e[t] = n
                    }
                }, t, e, arguments.length)
            }
        });
        A.each(["top", "left"], function(e, n) {
            A.cssHooks[n] = Fe(g.pixelPosition, function(e, t) {
                if (t) {
                    t = Oe(e, n);
                    return _e.test(t) ? A(e).position()[n] + "px" : t
                }
            })
        });
        A.each({
            Height: "height",
            Width: "width"
        }, function(o, s) {
            A.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function(r, a) {
                A.fn[a] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        i = r || (e === true || t === true ? "margin" : "border");
                    return K(this, function(e, t, n) {
                        var r;
                        if (A.isWindow(e)) {
                            return a.indexOf("outer") === 0 ? e["inner" + o] : e.document.documentElement["client" + o]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])
                        }
                        return n === undefined ? A.css(e, t, i) : A.style(e, t, n, i)
                    }, s, n ? e : undefined, n)
                }
            })
        });
        A.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        A.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return A
            })
        }
        var Vt = k.jQuery,
            $t = k.$;
        A.noConflict = function(e) {
            if (k.$ === A) {
                k.$ = $t
            }
            if (e && k.jQuery === A) {
                k.jQuery = Vt
            }
            return A
        };
        if (!e) {
            k.jQuery = k.$ = A
        }
        return A
    });
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        for (var t = 0; t < e.responseHeaders.length; ++t) {
            if (e.responseHeaders[t].name.toLowerCase() === "content-security-policy") {
                e.responseHeaders.splice(t, 1);
                break
            }
        }
        for (var t = 0; t < e.responseHeaders.length; ++t) {
            if (e.responseHeaders[t].name.toLowerCase() === "x-content-security-policy") {
                e.responseHeaders.splice(t, 1);
                break
            }
        }
        return {
            responseHeaders: e.responseHeaders
        }
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);
    chrome.webRequest.onCompleted.addListener(function(e) {
        if (typeof globalStatus === "undefined" || typeof globalStatus.solve_funcaptcha === "undefined" || !globalStatus.solve_funcaptcha) {
            return
        }
        if (e.tabId > 0) {
            chrome.tabs.executeScript(e.tabId, {
                frameId: e.frameId,
                file: "/js/earlier_injection.js",
                runAt: "document_start",
                allFrames: true
            })
        }
    }, {
        urls: ["http://*/*", "https://*/*"],
        types: ["main_frame", "sub_frame"]
    });
    chrome.webRequest.onHeadersReceived.addListener(function(e) {
        if (typeof globalStatus === "undefined" || typeof globalStatus.solve_funcaptcha === "undefined" || !globalStatus.solve_funcaptcha) {
            return
        }
        if (typeof URLSearchParams === "function") {
            var t = e.url;
            var n = f(t);
            var r = new URLSearchParams(n.search);
            var i = r.get("onload");
            var a;
            var o;
            if (!i && i !== "_funcaptchaOnloadMethod") {
                a = "_funcaptchaOnloadMethod";
                r.set("onload", "_funcaptchaOnloadMethod");
                n.search = r.toString();
                o = n.toString()
            } else {
                o = t;
                a = i
            }
            if (e.tabId) {
                chrome.tabs.sendMessage(e.tabId, {
                    type: "funcaptchaApiScriptRequested",
                    originalFuncaptchaApiUrl: t,
                    originalOnloadMethodName: i,
                    currentFuncaptchaApiUrl: o,
                    currentOnloadMethodName: a
                }, {
                    frameId: e.frameId
                }, function() {})
            }
            return
        }
    }, {
        urls: ["https://funcaptcha.com/fc/api/*", "https://*.funcaptcha.com/fc/api/*", "https://arkoselabs.com/fc/api/*", "https://*.arkoselabs.com/fc/api/*"]
    });
    globalStatus = {
        profile_user_info: null,
        plugin_version: chrome.app && chrome.app.getDetails && chrome.app.getDetails().version ? chrome.app.getDetails().version : chrome.runtime && chrome.runtime.getManifest() && chrome.runtime.getManifest().version ? chrome.runtime.getManifest().version : "0.001",
        plugin_last_version_data: null
    };
    var G = null;
    var Q = {};
    var Y = E() - t;
    var J = E() - n;
    var Z = 0;
    var ee = 0;
    setInterval(function() {
        if (JSON.stringify(globalStatus) != G) {
            oe();
            getAndRefreshAntigateBalance();
            G = JSON.stringify(globalStatus)
        }
    }, 500);
    c(se);
    ae();
    te();
    ne();
    setInterval(c.bind(null, se), 2e3);
    setInterval(ae, 2e3);

    function te() {
        if (Y + t + Z <= E()) {
            re()
        }
    }

    function ne() {
        if (J + n + ee <= E()) {
            ie()
        }
    }

    function re() {
        K(function(e, t) {
            if (!e) {
                Q = t;
                Y = E();
                Z = 0
            } else {
                if (!Z) {
                    Z = 10
                } else {
                    Z = Z * 2
                }
            }
        })
    }

    function ie() {
        V(function(e, t) {
            if (!e) {
                globalStatus.plugin_last_version_data = t;
                J = E();
                ee = 0
            } else {
                if (!ee) {
                    ee = 10
                } else {
                    ee = ee * 2
                }
            }
        })
    }

    function ae() {
        typeof chrome.identity != "undefined" && typeof chrome.identity.getProfileUserInfo != "undefined" && chrome.identity.getProfileUserInfo(function(e) {
            if (e && e.id && e.email) {
                globalStatus.profile_user_info = e
            } else {
                globalStatus.profile_user_info = false
            }
        })
    }

    function oe() {
        le();
        fe()
    }
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "getProfileUserInfo") {
            delete e.type;
            n(globalStatus.profile_user_info)
        } else if (e.type == "setFreeAttemptsLeftCount") {
            delete e.type;
            if (typeof e.attemptsLeft != "undefined") {
                (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                    free_attempts_left_count: e.attemptsLeft
                }, function() {
                    globalStatus.free_attempts_left_count = e.attemptsLeft
                })
            }
        } else if (e.type == "getGlobalStatus") {
            delete e.type;
            n(globalStatus)
        } else if (e.type == "saveOptions") {
            delete e.type;
            var r = false;
            if (typeof e.options === "undefined" || typeof e.options.account_key === "undefined") {
                r = true
            }
            saveOptions(e.options, n, r)
        }
        return true
    });
    saveOptions = function(e, t, n) {
        n = !!n;
        if (!n) {
            e.account_key_checked = false
        }(chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set(e, function() {
            se(e);
            t(e);
            me.refreshPrecachedSolutionsCountKForEveryHost()
        })
    };

    function se(e) {
        for (var t in e) {
            globalStatus[t] = e[t]
        }
    }

    function ue(e, t) {
        if (e) {
            chrome.runtime.sendMessage({
                type: "showMessage",
                method: "showErrorMessage",
                arguments: [e.message]
            });
            if (globalStatus.profile_user_info != null) {
                chrome.runtime.sendMessage({
                    type: "showMessage",
                    method: "refreshFreeAttemptsMessage"
                })
            }
            return
        }
        chrome.runtime.sendMessage({
            type: "showMessage",
            method: "showBalanceMessage",
            arguments: [t]
        });
        if (t > 0) {
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                account_key_checked: true
            }, function() {
                globalStatus.account_key_checked = true
            })
        } else {}
    }
    getAndRefreshAntigateBalance = function() {
        if (globalStatus.enable) {
            if (globalStatus.account_key) {
                var e = ye(globalStatus.account_key);
                e.getBalance(ue)
            } else {
                if (globalStatus.profile_user_info != null) {
                    chrome.runtime.sendMessage({
                        type: "showMessage",
                        method: "refreshFreeAttemptsMessage"
                    })
                }
            }
        } else {
            chrome.runtime.sendMessage({
                type: "showMessage",
                method: "showBalanceMessage",
                arguments: [""]
            })
        }
    };

    function le() {
        var e = "";
        var t = chrome.i18n.getMessage("appShortName");
        if (globalStatus.enable && globalStatus.profile_user_info && globalStatus.free_attempts_left_count && (!globalStatus.account_key || !globalStatus.account_key_checked)) {
            e = globalStatus.free_attempts_left_count + ""
        } else if (typeof globalStatus.plugin_last_version_data !== "undefined" && typeof globalStatus.plugin_last_version_data.version !== "undefined" && globalStatus.plugin_version < globalStatus.plugin_last_version_data.version) {
            e = "new"
        } else {
            e = ""
        }
        if (globalStatus.free_attempts_left_count && (!globalStatus.account_key || !globalStatus.account_key_checked) && globalStatus.profile_user_info) {
            t += ": " + chrome.i18n.getMessage("freeAttemptsLeftActionTitle", globalStatus.free_attempts_left_count + "")
        } else {}
        chrome.browserAction.setBadgeText({
            text: e
        });
        chrome.browserAction.setTitle({
            title: t
        })
    }

    function fe() {
        if (globalStatus.enable) {
            chrome.browserAction.setIcon({
                path: {
                    16: "/img/azcaptcha-logo/16.png",
                    32: "/img/azcaptcha-logo/32.png"
                }
            })
        } else {
            chrome.browserAction.setIcon({
                path: {
                    16: "/img/azcaptcha-logo/disabled-16.png",
                    32: "/img/azcaptcha-logo/disabled-32.png"
                }
            })
        }
    }
    var ce = new function() {
        var e, t, n;
        this.showImageContextMenu = function() {
            this.hideImageContextMenu();
            e = chrome.contextMenus.create({
                id: "1",
                title: chrome.i18n.getMessage("markImageTitle"),
                contexts: ["image"],
                onclick: this.markAsCaptchaRelated.bind(null, "image", false)
            })
        };
        this.hideImageContextMenu = function() {
            if (e) {
                chrome.contextMenus.remove(e)
            }
        };
        this.showInputContextMenu = function() {
            this.hideInputContextMenu();
            n = chrome.contextMenus.create({
                id: "2",
                title: chrome.i18n.getMessage("markInputTitle"),
                contexts: ["editable"],
                onclick: this.markAsCaptchaRelated.bind(null, "input", false)
            })
        };
        this.hideInputContextMenu = function() {
            if (n) {
                chrome.contextMenus.remove(n)
            }
        };
        this.showImageAutosearchContextMenu = function() {
            this.hideImageAutosearchContextMenu();
            t = chrome.contextMenus.create({
                id: "3",
                title: chrome.i18n.getMessage("imageAutosearchTitle"),
                contexts: ["editable"],
                onclick: this.markAsCaptchaRelated.bind(null, "input", true)
            })
        };
        this.hideImageAutosearchContextMenu = function() {
            if (t) {
                chrome.contextMenus.remove(t)
            }
        };
        this.markAsCaptchaRelated = function(e, t, n, r) {
            chrome.tabs.sendMessage(r.id, {
                type: "contextMenuClickedOnCaptchaRelated",
                elementType: e,
                autosearch: t
            }, {
                frameId: n.frameId
            }, function() {})
        }
    };
    ce.showImageContextMenu();
    ce.showInputContextMenu();
    ce.showImageAutosearchContextMenu();
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "setCaptchaDeterminer") {
            delete e.type;
            var r;
            if (e.domain) {
                r = e.domain
            } else {
                r = f(t.url).hostname;
                e.domain = r
            }
            M(r, e, function() {
                (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get(function(e) {
                    n(typeof e.captchaDeterminant !== "undefined" ? e.captchaDeterminant : null)
                })
            })
        } else if (e.type == "getCaptchaDeterminer") {
            delete e.type;
            var r = f(t.url).hostname;
            e.domain = r;
            R(r, function(e) {
                if (e) {
                    if (typeof e.source == "undefined") {
                        e.source = "manual"
                    }
                    if (!e.options) {
                        e.options = {}
                    }
                    e.options = Object.assign(Object.assign({}, s), e.options);
                    n(e)
                } else if (globalStatus.use_predefined_image_captcha_marks && typeof Q[r] != "undefined") {
                    Q[r].source = "predefined";
                    Q[r].options = s;
                    n(Q[r])
                } else {}
                n(e)
            });
            te();
            ne()
        } else if (e.type == "setCaptchaDeterminerOptions") {
            delete e.type;
            var r = f(t.url).hostname;
            e.domain = r;
            q(r, e, function() {})
        } else if (e.type == "requestPermissions") {
            delete e.type;
            chrome.permissions.request({
                permissions: e.permissions
            }, n);
            return true
        } else if (e.type == "setImageCaptchaCache") {
            delete e.type;
            ve.set(e.index, e.value)
        } else if (e.type == "getImageCaptchaCache") {
            delete e.type;
            n(ve.get(e.index))
        }
        return true
    });
    var de = function(e) {
        return new function(u) {
            this.params = {
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                userAgent: ""
            };
            this.getCacheForHostname = function(e, t, n) {
                ALogger.log("getCacheForHostname called");
                var r = f(e.task.websiteURL).hostname;
                var i = u.getByHostname(r, t);
                ALogger.log("cacheContent by hostname = ", i);
                var a;
                if (i) {
                    a = i.fakeTaskId
                } else {
                    a = u.create(r, e.task.websiteKey, t)
                }
                var o = {
                    errorId: 0,
                    taskId: a
                };
                n(o)
            };
            this.getSolution = function(e, t, n) {
                var r = u.getByTaskId(e.taskId, t);
                ALogger.log("cacheContent by task id = ", r);
                var i = null;
                ALogger.log("cacheContent by hostname = ", i);
                var a;
                var o = false;
                if (r) {
                    if (r.taskData && r.taskData.hostname) {
                        a = u.getByHostname(r.taskData.hostname, t)
                    }
                    if (r.fakeTaskId !== a.fakeTaskId && !a.error) {
                        ALogger.log("Better result is found, switching to it", i);
                        r = a;
                        o = true
                    }
                    if (r.endTime) {
                        u.markTaskAsProcessedToContentScript(r);
                        n({
                            errorId: 0,
                            status: "ready",
                            solution: {
                                gRecaptchaResponse: r.solution
                            },
                            lifetime: u.cacheFreshnessTime - (E() - r.endTime)
                        })
                    } else if (r.error) {
                        u.markTaskAsProcessedToContentScript(r);
                        n({
                            errorId: 1,
                            errorCode: "error",
                            errorDescription: r.error
                        })
                    } else {
                        var s = {
                            errorId: 0,
                            status: "processing"
                        };
                        if (o) {
                            s.newTaskId = r.fakeTaskId
                        }
                        n(s)
                    }
                } else {
                    return n({
                        errorId: 16,
                        errorCode: "ERROR_NO_SUCH_CAPCHA_ID",
                        errorDescription: "Task you are requesting does not exist in your current task list or has been expired.Tasks not found in active tasks"
                    })
                }
            }
        }(e)
    };
    var pe = new function() {
        this.log = function(e, t) {
            chrome.runtime.sendMessage({
                type: "notifyRecaptchaPrecacheDebugPage",
                dataType: e,
                postData: t
            })
        }
    };
    var he = function(e) {
        return new function(e) {
            var o = this;
            var i = $.Callbacks();
            i.add(function(e) {
                if (typeof v[e] !== "undefined" && typeof m[v[e].taskData.hostname] !== "undefined") {
                    var t = m[v[e].taskData.hostname];
                    t.totalSolvingTime += v[e].endTime - v[e].startTime;
                    t.totalSolvedTasks++;
                    t.mediumSolvingTime = (t.totalSolvingTime + t.mediumSolvingTime) / (t.totalSolvedTasks + 1)
                }
            });
            var t = $.Callbacks();
            t.add(function(e) {
                if (typeof v[e] !== "undefined" && typeof m[v[e].taskData.hostname] !== "undefined") {
                    var t = m[v[e].taskData.hostname];
                    t.totalFeelsLikeSolvingTime += v[e].taskProcessingToContentScriptTime - v[e].requestTime;
                    t.mediumFeelsLikeSolvingTime = (t.totalFeelsLikeSolvingTime + t.mediumFeelsLikeSolvingTime) / (t.totalSolvedTasks + 1)
                }
            });
            var n = $.Callbacks();
            n.add(function(e) {
                if (typeof m[e] === "undefined") {
                    return
                }
                var t = m[e];
                t.tasks = t.tasks.sort(function(e, t) {
                    if (C(e) && !C(t)) {
                        return -1
                    } else if (!C(e) && C(t)) {
                        return 1
                    } else {
                        if (!e.error && t.error) {
                            return -1
                        } else if (e.error && !t.error) {
                            return 1
                        } else {
                            if (e.endTime !== null && t.endTime === null) {
                                return -1
                            } else if (e.endTime === null && t.endTime !== null) {
                                return 1
                            } else if (e.endTime === null && t.endTime === null) {
                                return 0
                            } else {
                                if (e.endTime < t.endTime) {
                                    return -1
                                } else if (e.endTime > t.endTime) {
                                    return 1
                                } else {
                                    if (e.startTime < t.startTime) {
                                        return -1
                                    } else if (e.startTime > t.startTime) {
                                        return 1
                                    } else {
                                        return 0
                                    }
                                }
                            }
                        }
                    }
                })
            });
            var a = $.Callbacks();
            a.add(function(e, t) {
                if (typeof v[e] !== "undefined") {
                    switch (t.type) {
                        case "start":
                            v[e].startTime = E();
                            break;
                        case "error":
                            v[e].error = t.error.message;
                            break;
                        case "attach":
                        case "detach":
                        case "reattach":
                            n.fire(v[e].taskData.hostname);
                            break;
                        case "setRealTaskId":
                            v[e].realTaskId = t.realTaskId;
                            break;
                        case "finish":
                            v[e].endTime = E();
                            v[e].solution = t.taskSolution;
                            n.fire(v[e].taskData.hostname);
                            break
                    }
                }
            });
            var s = $.Callbacks();
            s.add(function(e, t) {
                e.tabIdLastCheckTime = E();
                if (e.tabId != t) {
                    e.tabId = t;
                    e.requestTime = E();
                    a.fire(e.fakeTaskId, {
                        type: "attach"
                    })
                }
            });
            var r = $.Callbacks();
            r.add(function(e) {
                e.tabId = null;
                e.tabIdLastCheckTime = null;
                e.requestTime = null;
                a.fire(e.fakeTaskId, {
                    type: "detach"
                })
            });
            var u = $.Callbacks();
            u.add(function(e, t) {
                e.tabIdLastCheckTime = E();
                if (e.tabId != t) {
                    e.tabId = t;
                    a.fire(e.fakeTaskId, {
                        type: "reattach"
                    })
                }
            });
            var l = $.Callbacks();
            l.add(function(e, t) {
                if (typeof m[e] !== "undefined") {
                    var n = m[e];
                    n.noCacheRequestsSinceLastSolutionExpiration = t
                }
            });
            var f = setInterval(function() {
                for (var e in v) {
                    if (!v[e].startTime) {
                        a.fire(e, {
                            type: "start"
                        });
                        var r = ye(globalStatus.account_key);
                        r.setWebsiteURL("https://" + v[e].taskData.hostname + "/");
                        r.setWebsiteKey(v[e].taskData.siteKey);
                        r.setSoftId(802);
                        (function(n) {
                            r.createTaskProxyless(function(e, t) {
                                if (e) {
                                    console.error(e);
                                    a.fire(n, {
                                        type: "error",
                                        error: e
                                    });
                                    return
                                }
                                a.fire(n, {
                                    type: "setRealTaskId",
                                    realTaskId: t
                                });
                                r.getTaskSolution(t, function(e, t) {
                                    if (e) {
                                        a.fire(n, {
                                            type: "error",
                                            error: e
                                        });
                                        console.error(e);
                                        return
                                    }
                                    a.fire(n, {
                                        type: "finish",
                                        taskSolution: t
                                    });
                                    i.fire(n)
                                })
                            })
                        })(e)
                    }
                }
            }, 1e3);
            var c = setInterval(function() {
                for (var e in v) {
                    if (!v[e].expired && A(v[e])) {
                        ALogger.log("task expired, fakeid = ", e, v[e]);
                        v[e].expired = true;
                        if (!v[e].taskProcessingToContentScriptTime) {
                            if (typeof m[v[e].taskData.hostname] !== "undefined") {
                                l.fire(v[e].taskData.hostname, true)
                            }
                        }
                    }
                }
            }, 1e3);
            var d = setInterval(function() {
                for (var e in v) {
                    if (!T(v[e]) && v[e].tabIdLastCheckTime && v[e].tabIdLastCheckTime + g < E() && C(v[e])) {
                        ALogger.log("clear tabId attachment, taskid = ", e);
                        r.fire(v[e])
                    }
                }
            }, 1e3);
            var p = setInterval(function() {
                for (var e in m) {
                    var t = 0;
                    for (var n in m[e].tasks) {
                        if (C(m[e].tasks[n]) && T(m[e].tasks[n])) {
                            t++
                        }
                    }
                    if (t < m[e].precachedSolutionsCountK && !m[e].noCacheRequestsSinceLastSolutionExpiration) {
                        ALogger.log("Creating new tasks");
                        for (var n = 0; n < m[e].precachedSolutionsCountK - t; n++) {
                            o.create(e, m[e].siteKey, null, true)
                        }
                    }
                }
            }, 3e3);
            var h = setInterval(function() {
                for (var e in m) {
                    for (var t in m[e].tasks) {
                        if (w(m[e].tasks[t], m[e])) {
                            delete v[m[e].tasks[t].fakeTaskId];
                            delete m[e].tasks[t]
                        }
                    }
                    m[e].tasks = m[e].tasks.filter(function(e) {
                        return e != undefined
                    });
                    if (m[e].tasks.length == 0 && m[e].lastTaskCreateTime + x * 60 < E()) {
                        clearInterval(m[e].everyMinuteCheckInterval);
                        delete m[e]
                    }
                }
            }, 60 * 1e3);
            setInterval(function() {
                pe.log("precachedSolutions", m)
            }, 1e3);
            var m = {
                "antcpt.com": {
                    hostname: "antcpt.com",
                    siteKey: "fdfsf2343fdsfds3424",
                    tasks: [{
                        fakeTaskId: 123,
                        realTaskId: 321,
                        startTime: 1234567890,
                        endTime: 1234567890,
                        solution: "",
                        tabId: 54321,
                        tabIdLastCheckTime: 1234567890,
                        taskProcessingToContentScriptTime: 0,
                        error: null,
                        taskData: {
                            hostname: "antcpt.com",
                            siteKey: "fdfsf2343fdsfds3424"
                        }
                    }],
                    noCacheRequestsSinceLastSolutionExpiration: false,
                    precachedSolutionsCountK: b,
                    totalSolvingTime: 0,
                    totalFeelsLikeSolvingTime: 0,
                    totalSolvedTasks: 0,
                    mediumSolvingTime: y,
                    mediumFeelsLikeSolvingTime: y,
                    mediumRatePerMinute: b * (60 / y),
                    totalTasksRequested: 0,
                    totalMinutesWithTasks: 0,
                    lastMiniuteCheckTime: E()
                }
            };
            m = {};
            o.cacheFreshnessTime = 110;
            var g = 10;
            var y = 40;
            var v = {};
            var b = 2;
            var x = 5;
            this.getByHostname = function(e, t) {
                ALogger.log("getByHostname called with arguments", arguments);
                l.fire(e, false);
                if (typeof m[e] != "undefined") {
                    for (var n in m[e].tasks) {
                        if (C(m[e].tasks[n]) && (T(m[e].tasks[n]) || k(m[e].tasks[n], t))) {
                            var r = m[e].tasks[n];
                            s.fire(r, t);
                            return r
                        }
                    }
                    return false
                } else {
                    return false
                }
            };

            function w(e, t) {
                return !C(e) && !S(e, t)
            }

            function T(e) {
                return !e.tabId
            }

            function k(e, t) {
                return e.tabId == t
            }

            function C(e) {
                return !e.taskProcessingToContentScriptTime && !e.expired && !A(e);
                e.tabId && (typeof tabId == "undefined" || e.tabId != tabId) || e.taskProcessingToContentScriptTime || e.expired || A(e)
            }

            function A(e) {
                return e.endTime && e.endTime + o.cacheFreshnessTime <= E()
            }
            this.markTaskAsProcessedToContentScript = function(e) {
                e.taskProcessingToContentScriptTime = E();
                t.fire(e.fakeTaskId);
                l.fire(e.taskData.hostname, false)
            };
            this.copyRequestTimeToAnotherTask = function(e, t) {
                e.requestTime = t.requestTime
            };
            this.getByTaskId = function(e, t) {
                ALogger.log("getByTaskId called with arguments", arguments);
                if (typeof v[e] != "undefined") {
                    if (C(v[e]) && (T(v[e]) || k(v[e], t))) {
                        l.fire(v[e].taskData.hostname, false);
                        if (t) {
                            u.fire(v[e], t)
                        }
                        return v[e]
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            };

            function S(e, t) {
                return e.requestTime && e.requestTime >= t.lastMiniuteCheckTime
            }
            this.refreshPrecachedSolutionsCountKForEveryHost = function() {
                for (var e in m) {
                    L(e)
                }
            };

            function L(e) {
                if (typeof globalStatus.k_precached_solution_count_min != "undefined" && typeof m[e] !== "undefined") {
                    m[e].precachedSolutionsCountK = Math.max(m[e].precachedSolutionsCountK, globalStatus.k_precached_solution_count_min)
                }
                if (typeof globalStatus.k_precached_solution_count_max != "undefined" && typeof m[e] !== "undefined") {
                    m[e].precachedSolutionsCountK = Math.min(m[e].precachedSolutionsCountK, globalStatus.k_precached_solution_count_max)
                }
            }
            this.createHost = function(n, e) {
                var t = typeof globalStatus.k_precached_solution_count_min != "undefined" ? globalStatus.k_precached_solution_count_min : b;
                m[n] = {
                    hostname: n,
                    siteKey: e,
                    tasks: [],
                    noCacheRequestsSinceLastSolutionExpiration: false,
                    precachedSolutionsCountK: t,
                    totalSolvingTime: 0,
                    totalFeelsLikeSolvingTime: 0,
                    totalSolvedTasks: 0,
                    mediumSolvingTime: y,
                    mediumFeelsLikeSolvingTime: y,
                    mediumRatePerMinute: t * (60 / y),
                    totalTasksRequested: 0,
                    totalMinutesWithTasks: 0,
                    lastTaskCreateTime: 0,
                    lastMiniuteCheckTime: E(),
                    everyMinuteCheckInterval: setInterval(function() {
                        ALogger.log("everyMinuteCheckInterval hostname = ", n);
                        var e = 0;
                        for (var t in m[n].tasks) {
                            if (S(m[n].tasks[t], m[n]) && !T(m[n].tasks[t]) && !m[n].tasks[t].error) {
                                e++
                            }
                        }
                        m[n].lastMiniuteCheckTime = E();
                        ALogger.log("lastMinuteTaskCount = ", e);
                        if (e) {
                            m[n].totalTasksRequested += e;
                            m[n].totalMinutesWithTasks++;
                            m[n].mediumRatePerMinute = m[n].totalTasksRequested / m[n].totalMinutesWithTasks;
                            m[n].precachedSolutionsCountK = Math.round(m[n].mediumRatePerMinute * m[n].mediumSolvingTime / 60);
                            L(n)
                        }
                    }, 60 * 1e3)
                }
            };
            this.create = function(e, t, n, r) {
                r = !!r;
                ALogger.log("Task creation called with arguments", arguments);
                if (typeof m[e] == "undefined") {
                    o.createHost(e, t)
                }
                var i;
                do {
                    i = Math.round(Math.random() * 1e6)
                } while (typeof v[i] != "undefined");
                var a = {
                    fakeTaskId: i,
                    realTaskId: null,
                    createTime: E(),
                    requestTime: null,
                    startTime: null,
                    endTime: null,
                    expired: false,
                    solution: "",
                    tabId: null,
                    tabIdLastCheckTime: null,
                    taskProcessingToContentScriptTime: 0,
                    error: null,
                    taskData: {
                        hostname: e,
                        siteKey: t
                    }
                };
                v[i] = a;
                m[e].tasks.push(a);
                m[e].lastTaskCreateTime = E();
                if (!r) {
                    l.fire(e, false)
                }
                if (n) {
                    s.fire(a, n)
                }
                ALogger.log("precachedSolutionsByFakeTaskId = ", v);
                return i
            }
        }(e)
    };
    var me = he();
    var ge = de(me);
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "createTaskPrecachedRecaptcha") {
            ge.getCacheForHostname(e.postData, t.tab.id, function(e) {
                n(e)
            })
        } else if (e.type == "getTaskResultPrecachedRecaptcha") {
            ge.getSolution(e.postData, t.tab.id, function(e) {
                n(e)
            })
        }
        return true
    });
    (function() {
        var s = [];
        chrome.runtime.onMessage.addListener(function(e, n, r) {
            if (e.type == "getTaintedImageBase64") {
                delete e.type;
                s[n.tab.id] = {
                    callback: r
                };
                return true
            } else if (e.type == "setTaintedImageBase64") {
                delete e.type;
                if (typeof s[n.tab.id] != "undefined") {
                    s[n.tab.id].callback(e.data)
                }
            } else if (e.type == "getTaintedImageBase64UsingBackgroundFrame") {
                delete e.type;
                var t = document.createElement("iframe");
                t.src = e.img_src;
                t.width = "1px";
                t.height = "1px";
                t.name = e.img_src;
                document.body.appendChild(t);
                s[e.img_src] = {
                    callback: r,
                    src: e.img_src
                };
                return true
            } else if (e.type == "setTaintedImageBase64UsingBackgroundFrame") {
                delete e.type;
                if (typeof s[e.original_url] != "undefined") {
                    s[e.original_url].callback(e.data);
                    var i = document.getElementsByTagName("iframe");
                    for (var a in i) {
                        if (i[a].src == s[e.original_url].src) {
                            i[a].parentNode.removeChild(i[a])
                        }
                    }
                }
            } else if (e.type == "captureScreen") {
                delete e.type;
                var o = setInterval(function() {
                    chrome.tabs.query({
                        active: true
                    }, function(e) {
                        if (e.length) {
                            for (var t in e) {
                                if (e[t].id == n.tab.id) {
                                    clearInterval(o);
                                    setTimeout(function() {
                                        chrome.tabs.captureVisibleTab(n.tab.windowId, {
                                            format: "png"
                                        }, function(e) {
                                            r({
                                                dataUrl: e
                                            })
                                        })
                                    }, 200)
                                }
                            }
                        }
                    })
                }, 200);
                return true
            }
        })
    })();
    var ye = function(e, t) {
        return new function(e, u) {
            u = !!u;
            this.params = {
                host: "azcaptcha.com",
                port: 80,
                clientKey: e,
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                proxyType: "http",
                proxyAddress: null,
                proxyPort: null,
                proxyLogin: null,
                proxyPassword: null,
                userAgent: "",
                cookies: "",
                websitePublicKey: null,
                websiteChallenge: null,
                geetestApiServerSubdomain: null,
                phrase: null,
                case: null,
                numeric: null,
                math: null,
                minLength: null,
                maxLength: null,
                imageUrl: null,
                assignment: null,
                forms: null,
                softId: null,
                languagePool: null
            };
            var o = {};
            var l = 20,
                s = 5,
                f = 2;
            this.getBalance = function(n) {
                var e = {
                    clientKey: this.params.clientKey
                };
                this.jsonPostRequest("getBalance", e, function(e, t) {
                    if (e) {
                        return n(e, null, t)
                    }
                    n(null, t.balance, t)
                })
            };
            this.setCustomData = function(e, t) {
                if (typeof this.params[e] !== "undefined") {
                    return
                }
                o[e] = t
            };
            this.clearCustomData = function() {
                o = {}
            };
            this.createTask = function(r, e, t) {
                e = typeof e == "undefined" ? "NoCaptchaTask" : e;
                var n = this.getPostData(e);
                n.type = e;
                for (var i in o) {
                    if (typeof n[i] === "undefined") {
                        n[i] = o[i]
                    }
                }
                if (typeof t == "object") {
                    for (var i in t) {
                        n[i] = t[i]
                    }
                }
                var a = {
                    clientKey: this.params.clientKey,
                    task: n,
                    softId: this.params.softId !== null ? this.params.softId : 0
                };
                if (this.params.languagePool !== null) {
                    a.languagePool = this.params.languagePool
                }
                this.jsonPostRequest("createTask", a, function(e, t) {
                    if (e) {
                        return r(e, null, t)
                    }
                    var n = t.taskId;
                    r(null, n, t)
                })
            };
            this.createTaskProxyless = function(e) {
                this.createTask(e, "NoCaptchaTaskProxyless")
            };
            this.createFunCaptchaTask = function(e) {
                this.createTask(e, "FunCaptchaTask")
            };
            this.createFunCaptchaTaskProxyless = function(e) {
                this.createTask(e, "FunCaptchaTaskProxyless")
            };
            this.createGeeTestTask = function(e) {
                this.createTask(e, "GeeTestTask")
            };
            this.createGeeTestTaskProxyless = function(e) {
                this.createTask(e, "GeeTestTaskProxyless")
            };
            this.createImageToTextTask = function(e, t) {
                this.createTask(t, "ImageToTextTask", e)
            };
            this.createCustomCaptchaTask = function(e) {
                this.createTask(e, "CustomCaptchaTask")
            };
            this.getTaskRawResult = function(e) {
                if (typeof e.solution.gRecaptchaResponse != "undefined") {
                    return e.solution.gRecaptchaResponse
                } else if (typeof e.solution.token != "undefined") {
                    return e.solution.token
                } else if (typeof e.solution.answers != "undefined") {
                    return e.solution.answers
                } else if (typeof e.solution.text !== "undefined") {
                    return e.solution.text
                } else {
                    return e.solution
                }
            };
            this.getTaskSolution = function(n, r, i, a) {
                i = i || 0;
                var e = {
                    clientKey: this.params.clientKey,
                    taskId: n
                };
                var t;
                if (i == 0) {
                    t = s
                } else {
                    t = f
                }
                if (u) {
                    t = 1
                }
                console.log("Waiting %s seconds", t);
                var o = this;
                setTimeout(function() {
                    o.jsonPostRequest("getTaskResult", e, function(e, t) {
                        if (e) {
                            return r(e, null, t)
                        }
                        if (t.status == "processing") {
                            if (typeof t.newTaskId !== "undefined") {
                                n = t.newTaskId
                            }
                            if (a) {
                                a()
                            }
                            return o.getTaskSolution(n, r, i + 1, a)
                        } else if (t.status == "ready") {
                            return r(null, o.getTaskRawResult(t), t)
                        }
                    })
                }, t * 1e3)
            };
            this.getPostData = function(e) {
                switch (e) {
                    case "CustomCaptchaTask":
                        return {
                            imageUrl: this.params.imageUrl, assignment: this.params.assignment, forms: this.params.forms
                        };
                    case "ImageToTextTask":
                        return {
                            phrase: this.params.phrase,
                                case :this.params.case, numeric: this.params.numeric, math: this.params.math, minLength: this.params.minLength, maxLength: this.params.maxLength
                        };
                        break;
                    case "NoCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken
                        };
                        break;
                    case "FunCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "FunCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey
                        };
                    case "GeeTestTask":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "GeeTestTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain
                        };
                    default:
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        }
                }
            };
            this.jsonPostRequest = function(e, t, r) {
                if (!u) {
                    if (typeof process === "object" && typeof require === "function") {
                        var n = require("http");
                        var i = {
                            hostname: this.params.host,
                            port: this.params.port,
                            path: "/" + e,
                            method: "POST",
                            headers: {
                                "accept-encoding": "gzip,deflate",
                                "content-type": "application/json; charset=utf-8",
                                accept: "application/json",
                                "content-length": Buffer.byteLength(JSON.stringify(t))
                            }
                        };
                        var a = n.request(i, function(e) {
                            var t = "";
                            e.on("data", function(e) {
                                t += e
                            });
                            e.on("end", function() {
                                try {
                                    var e = JSON.parse(t)
                                } catch (e) {
                                    return r(e)
                                }
                                if (e.errorId) {
                                    return r(new Error(e.errorDescription, e.errorCode), e)
                                }
                                return r(null, e)
                            })
                        });
                        a.write(JSON.stringify(t));
                        a.end();
                        a.setTimeout(l * 1e3);
                        a.on("timeout", function() {
                            console.log("timeout");
                            a.abort()
                        });
                        a.on("error", function(e) {
                            console.log("error");
                            return r(e)
                        });
                        return a
                    } else if ((typeof window !== "undefined" || typeof chrome === "object") && typeof jQuery == "function") {
                        var o;
                        o = window.location.protocol != "http:" ? "https:" : window.location.protocol;
                        var s = o + "//" + this.params.host + (o != "https:" ? ":" + this.params.port : "") + "/" + e;
                        jQuery.ajax(s, {
                            method: "POST",
                            data: JSON.stringify(t),
                            dataType: "json",
                            success: function(e) {
                                if (e && e.errorId) {
                                    return r(new Error(e.errorDescription, e.errorCode), e)
                                }
                                r(false, e)
                            },
                            error: function(e, t, n) {
                                r(new Error(t != "error" ? t : "Unknown error, watch console"))
                            }
                        })
                    } else {
                        console.error("Application should be run either in NodeJs environment or has jQuery to be included")
                    }
                } else {
                    chrome.runtime.sendMessage({
                        type: e + "PrecachedRecaptcha",
                        postData: t
                    }, function(e) {
                        if (e.errorId) {
                            return r(new Error(e.errorDescription, e.errorCode), e)
                        }
                        return r(null, e)
                    })
                }
            };
            this.setClientKey = function(e) {
                this.params.clientKey = e
            };
            this.setWebsiteURL = function(e) {
                this.params.websiteUrl = e
            };
            this.setWebsiteKey = function(e) {
                this.params.websiteKey = e
            };
            this.setWebsiteSToken = function(e) {
                this.params.websiteSToken = e
            };
            this.setWebsitePublicKey = function(e) {
                this.params.websitePublicKey = e
            };
            this.setWebsiteChallenge = function(e) {
                this.params.websiteChallenge = e
            };
            this.setGeetestApiServerSubdomain = function(e) {
                this.params.geetestApiServerSubdomain = e
            };
            this.setProxyType = function(e) {
                this.params.proxyType = e
            };
            this.setProxyAddress = function(e) {
                this.params.proxyAddress = e
            };
            this.setProxyPort = function(e) {
                this.params.proxyPort = e
            };
            this.setProxyLogin = function(e) {
                this.params.proxyLogin = e
            };
            this.setProxyPassword = function(e) {
                this.params.proxyPassword = e
            };
            this.setUserAgent = function(e) {
                this.params.userAgent = e
            };
            this.setCookies = function(e) {
                this.params.cookies = e
            };
            this.setPhrase = function(e) {
                this.params.phrase = e
            };
            this.setCase = function(e) {
                this.params.case = e
            };
            this.setNumeric = function(e) {
                this.params.numeric = e
            };
            this.setMath = function(e) {
                this.params.math = e
            };
            this.setMinLength = function(e) {
                this.params.minLength = e
            };
            this.setMaxLength = function(e) {
                this.params.maxLength = e
            };
            this.setImageUrl = function(e) {
                this.params.imageUrl = e
            };
            this.setAssignment = function(e) {
                this.params.assignment = e
            };
            this.setForms = function(e) {
                this.params.forms = e
            };
            this.setSoftId = function(e) {
                this.params.softId = e
            };
            this.setLanguagePool = function(e) {
                this.params.languagePool = e
            };
            this.setHost = function(e) {
                this.params.host = e
            };
            this.setPort = function(e) {
                this.params.port = e
            }
        }(e, t)
    };
    if (typeof process === "object" && typeof require === "function") {
        module.exports = ye
    }
    var ve = new function() {
        var n = 32;
        var r = [];
        var i = 0;
        var a, o;
        this.set = function(e, t) {
            if (typeof a === "undefined") {
                a = e
            }
            if (typeof r[e] === "undefined") {
                r[e] = {
                    nextKey: null,
                    value: t
                }
            } else {
                r[e].value = t;
                return
            }
            if (typeof o !== "undefined") {
                r[o].nextKey = e
            }
            o = e;
            i++;
            if (i > n) {
                s()
            }
        };
        this.get = function(e) {
            if (typeof r[e] !== "undefined") {
                return r[e].value
            }
            return null
        };
        var s = function() {
            var e = r[a].nextKey;
            delete r[a];
            a = e
        }
    }
})();