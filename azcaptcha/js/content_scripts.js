(function() {
    var P = "testmessageforsolveroutput";
    var e = 1 * 24 * 60 * 60;
    var t = 1 * 6 * 60 * 60;
    var l = "ctrl+shift+3";
    var u = "ctrl+shift+6";
    var n = "https://azcaptcha.com/addon/getAllHostnameSelectors.json";
    var v = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var a = "https://azcaptcha.com/addon/plugin_last_version.json";
    var r = "lncaoejhfdpcafpkkcddpjnhnodcajfg";

    function o(e, t) {
        var n = e.charCodeAt(t);
        if (55296 <= n && 56319 >= n) {
            var r = n,
                n = e.charCodeAt(t + 1);
            return 1024 * (r - 55296) + (n - 56320) + 65536
        }
        return 56320 <= n && 57343 >= n ? (r = e.charCodeAt(t - 1), 1024 * (r - 55296) + (n - 56320) + 65536) : n
    }

    function s(e) {
        return 65535 < e ? (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (e & 1023))) : String.fromCharCode(e)
    }

    function D(e, t, n) {
        for (var r = "", i = 0; i < e.length; i++) var a = o(e, i) + o(t, i % t.length) * (n ? -1 : 1),
            r = r + s(a);
        return r
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
        var l = t.push;
        var i = t.indexOf;
        var n = {};
        var a = n.toString;
        var h = n.hasOwnProperty;
        var o = h.toString;
        var u = o.call(Object);
        var g = {};

        function v(e, t) {
            t = t || C;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var c = "3.1.1",
            T = function(e, t) {
                return new T.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            d = /^-ms-/,
            p = /-([a-z])/g,
            y = function(e, t) {
                return t.toUpperCase()
            };
        T.fn = T.prototype = {
            jquery: c,
            constructor: T,
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
                var t = T.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return T.each(this, e)
            },
            map: function(n) {
                return this.pushStack(T.map(this, function(e, t) {
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
            push: l,
            sort: t.sort,
            splice: t.splice
        };
        T.extend = T.fn.extend = function() {
            var e, t, n, r, i, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = false;
            if (typeof o === "boolean") {
                u = o;
                o = arguments[s] || {};
                s++
            }
            if (typeof o !== "object" && !T.isFunction(o)) {
                o = {}
            }
            if (s === l) {
                o = this;
                s--
            }
            for (; s < l; s++) {
                if ((e = arguments[s]) != null) {
                    for (t in e) {
                        n = o[t];
                        r = e[t];
                        if (o === r) {
                            continue
                        }
                        if (u && r && (T.isPlainObject(r) || (i = T.isArray(r)))) {
                            if (i) {
                                i = false;
                                a = n && T.isArray(n) ? n : []
                            } else {
                                a = n && T.isPlainObject(n) ? n : {}
                            }
                            o[t] = T.extend(u, a, r)
                        } else if (r !== undefined) {
                            o[t] = r
                        }
                    }
                }
            }
            return o
        };
        T.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return T.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = T.type(e);
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
                return typeof n === "function" && o.call(n) === u
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
                v(e)
            },
            camelCase: function(e) {
                return e.replace(d, "ms-").replace(p, y)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (_(e)) {
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
                return e == null ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (_(Object(e))) {
                        T.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        l.call(n, e)
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
                if (_(e)) {
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
                if (!T.isFunction(e)) {
                    return undefined
                }
                r = s.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                };
                i.guid = e.guid = e.guid || T.guid++;
                return i
            },
            now: Date.now,
            support: g
        });
        if (typeof Symbol === "function") {
            T.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function _(e) {
            var t = !!e && "length" in e && e.length,
                n = T.type(e);
            if (n === "function" || T.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var b = function(n) {
            var e, p, b, a, i, h, f, m, w, l, u, x, k, o, C, g, s, c, v, T = "sizzle" + 1 * new Date,
                y = n.document,
                S = 0,
                r = 0,
                d = oe(),
                _ = oe(),
                A = oe(),
                E = function(e, t) {
                    if (e === t) {
                        u = true
                    }
                    return 0
                },
                N = {}.hasOwnProperty,
                t = [],
                L = t.pop,
                P = t.push,
                D = t.push,
                j = t.slice,
                O = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                q = "[\\x20\\t\\r\\n\\f]",
                $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                I = "\\[" + q + "*(" + $ + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + q + "*\\]",
                R = ":(" + $ + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|" + ".*" + ")\\)|)",
                H = new RegExp(q + "+", "g"),
                F = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                B = new RegExp("^" + q + "*," + q + "*"),
                z = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                W = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
                U = new RegExp(R),
                K = new RegExp("^" + $ + "$"),
                V = {
                    ID: new RegExp("^#(" + $ + ")"),
                    CLASS: new RegExp("^\\.(" + $ + ")"),
                    TAG: new RegExp("^(" + $ + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                J = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
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
                    x()
                },
                ie = ye(function(e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                D.apply(t = j.call(y.childNodes), y.childNodes);
                t[y.childNodes.length].nodeType
            } catch (e) {
                D = {
                    apply: t.length ? function(e, t) {
                        P.apply(e, j.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, n, r) {
                var i, a, o, s, l, u, c, f = t && t.ownerDocument,
                    d = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || d !== 1 && d !== 9 && d !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : y) !== k) {
                        x(t)
                    }
                    t = t || k;
                    if (C) {
                        if (d !== 11 && (l = Y.exec(e))) {
                            if (i = l[1]) {
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
                                    if (f && (o = f.getElementById(i)) && v(t, o) && o.id === i) {
                                        n.push(o);
                                        return n
                                    }
                                }
                            } else if (l[2]) {
                                D.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((i = l[3]) && p.getElementsByClassName && t.getElementsByClassName) {
                                D.apply(n, t.getElementsByClassName(i));
                                return n
                            }
                        }
                        if (p.qsa && !A[e + " "] && (!g || !g.test(e))) {
                            if (d !== 1) {
                                f = t;
                                c = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (s = t.getAttribute("id")) {
                                    s = s.replace(te, ne)
                                } else {
                                    t.setAttribute("id", s = T)
                                }
                                u = h(e);
                                a = u.length;
                                while (a--) {
                                    u[a] = "#" + s + " " + ve(u[a])
                                }
                                c = u.join(",");
                                f = J.test(e) && me(t.parentNode) || t
                            }
                            if (c) {
                                try {
                                    D.apply(n, f.querySelectorAll(c));
                                    return n
                                } catch (e) {} finally {
                                    if (s === T) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return m(e.replace(F, "$1"), t, n, r)
            }

            function oe() {
                var n = [];

                function r(e, t) {
                    if (n.push(e + " ") > b.cacheLength) {
                        delete r[n.shift()]
                    }
                    return r[e + " "] = t
                }
                return r
            }

            function se(e) {
                e[T] = true;
                return e
            }

            function le(e) {
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

            function ue(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    b.attrHandle[n[r]] = t
                }
            }

            function ce(e, t) {
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

            function fe(n) {
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
            x = ae.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                if (r === k || r.nodeType !== 9 || !r.documentElement) {
                    return k
                }
                k = r;
                o = k.documentElement;
                C = !i(k);
                if (y !== k && (n = k.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                p.attributes = le(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                p.getElementsByTagName = le(function(e) {
                    e.appendChild(k.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                p.getElementsByClassName = Q.test(k.getElementsByClassName);
                p.getById = le(function(e) {
                    o.appendChild(e).id = T;
                    return !k.getElementsByName || !k.getElementsByName(T).length
                });
                if (p.getById) {
                    b.filter["ID"] = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && C) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    b.filter["ID"] = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    b.find["ID"] = function(e, t) {
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
                b.find["TAG"] = p.getElementsByTagName ? function(e, t) {
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
                b.find["CLASS"] = p.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && C) {
                        return t.getElementsByClassName(e)
                    }
                };
                s = [];
                g = [];
                if (p.qsa = Q.test(k.querySelectorAll)) {
                    le(function(e) {
                        o.appendChild(e).innerHTML = "<a id='" + T + "'></a>" + "<select id='" + T + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            g.push("[*^$]=" + q + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            g.push("\\[" + q + "*(?:value|" + M + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + T + "-]").length) {
                            g.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            g.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + T + "+*").length) {
                            g.push(".#.+[+~]")
                        }
                    });
                    le(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            g.push("name" + q + "*[*^$|!~]?=")
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
                if (p.matchesSelector = Q.test(c = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                    le(function(e) {
                        p.disconnectedMatch = c.call(e, "*");
                        c.call(e, "[s!='']:x");
                        s.push("!=", R)
                    })
                }
                g = g.length && new RegExp(g.join("|"));
                s = s.length && new RegExp(s.join("|"));
                t = Q.test(o.compareDocumentPosition);
                v = t || Q.test(o.contains) ? function(e, t) {
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
                        u = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !p.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === k || e.ownerDocument === y && v(y, e)) {
                            return -1
                        }
                        if (t === k || t.ownerDocument === y && v(y, t)) {
                            return 1
                        }
                        return l ? O(l, e) - O(l, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        u = true;
                        return 0
                    }
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        s = [t];
                    if (!i || !a) {
                        return e === k ? -1 : t === k ? 1 : i ? -1 : a ? 1 : l ? O(l, e) - O(l, t) : 0
                    } else if (i === a) {
                        return ce(e, t)
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
                    return r ? ce(o[r], s[r]) : o[r] === y ? -1 : s[r] === y ? 1 : 0
                };
                return k
            };
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            };
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    x(e)
                }
                t = t.replace(W, "='$1']");
                if (p.matchesSelector && C && !A[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) {
                    try {
                        var n = c.call(e, t);
                        if (n || p.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ae(t, k, null, [e]).length > 0
            };
            ae.contains = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    x(e)
                }
                return v(e, t)
            };
            ae.attr = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    x(e)
                }
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : undefined;
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
                u = !p.detectDuplicates;
                l = !p.sortStable && e.slice(0);
                e.sort(E);
                if (u) {
                    while (t = e[i++]) {
                        if (t === e[i]) {
                            r = n.push(i)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                l = null;
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
            b = ae.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
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
                        if (V["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && U.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
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
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && d(e, function(e) {
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
                            return r === "=" ? t === i : r === "!=" ? t !== i : r === "^=" ? i && t.indexOf(i) === 0 : r === "*=" ? i && t.indexOf(i) > -1 : r === "$=" ? i && t.slice(-i.length) === i : r === "~=" ? (" " + t.replace(H, " ") + " ").indexOf(i) > -1 : r === "|=" ? t === i || t.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(h, e, t, m, g) {
                        var v = h.slice(0, 3) !== "nth",
                            y = h.slice(-4) !== "last",
                            _ = e === "of-type";
                        return m === 1 && g === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, a, o, s, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = _ && e.nodeName.toLowerCase(),
                                d = !n && !_,
                                p = false;
                            if (c) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u]) {
                                            if (_ ? o.nodeName.toLowerCase() === f : o.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        l = u = h === "only" && !l && "nextSibling"
                                    }
                                    return true
                                }
                                l = [y ? c.firstChild : c.lastChild];
                                if (y && d) {
                                    o = c;
                                    a = o[T] || (o[T] = {});
                                    i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                    r = i[h] || [];
                                    s = r[0] === S && r[1];
                                    p = s && r[2];
                                    o = s && c.childNodes[s];
                                    while (o = ++s && o && o[u] || (p = s = 0) || l.pop()) {
                                        if (o.nodeType === 1 && ++p && o === e) {
                                            i[h] = [S, s, p];
                                            break
                                        }
                                    }
                                } else {
                                    if (d) {
                                        o = e;
                                        a = o[T] || (o[T] = {});
                                        i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                        r = i[h] || [];
                                        s = r[0] === S && r[1];
                                        p = s
                                    }
                                    if (p === false) {
                                        while (o = ++s && o && o[u] || (p = s = 0) || l.pop()) {
                                            if ((_ ? o.nodeName.toLowerCase() === f : o.nodeType === 1) && ++p) {
                                                if (d) {
                                                    a = o[T] || (o[T] = {});
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
                        var t, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (o[T]) {
                            return o(a)
                        }
                        if (o.length > 1) {
                            t = [e, e, "", a];
                            return b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                var n, r = o(e, a),
                                    i = r.length;
                                while (i--) {
                                    n = O(e, r[i]);
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
                            s = f(e.replace(F, "$1"));
                        return s[T] ? se(function(e, t, n, r) {
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
                        if (!K.test(n || "")) {
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
                        return !b.pseudos["empty"](e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
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
            b.pseudos["nth"] = b.pseudos["eq"];
            for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                b.pseudos[e] = fe(e)
            }
            for (e in {
                    submit: true,
                    reset: true
                }) {
                b.pseudos[e] = de(e)
            }

            function ge() {}
            ge.prototype = b.filters = b.pseudos;
            b.setFilters = new ge;
            h = ae.tokenize = function(e, t) {
                var n, r, i, a, o, s, l, u = _[e + " "];
                if (u) {
                    return t ? 0 : u.slice(0)
                }
                o = e;
                s = [];
                l = b.preFilter;
                while (o) {
                    if (!n || (r = B.exec(o))) {
                        if (r) {
                            o = o.slice(r[0].length) || o
                        }
                        s.push(i = [])
                    }
                    n = false;
                    if (r = z.exec(o)) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: r[0].replace(F, " ")
                        });
                        o = o.slice(n.length)
                    }
                    for (a in b.filter) {
                        if ((r = V[a].exec(o)) && (!l[a] || (r = l[a](r)))) {
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
                return t ? o.length : o ? ae.error(e) : _(e, s).slice(0)
            };

            function ve(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) {
                    r += e[t].value
                }
                return r
            }

            function ye(s, e, t) {
                var l = e.dir,
                    u = e.next,
                    c = u || l,
                    f = t && c === "parentNode",
                    d = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[l]) {
                        if (e.nodeType === 1 || f) {
                            return s(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, i, a, o = [S, d];
                    if (n) {
                        while (e = e[l]) {
                            if (e.nodeType === 1 || f) {
                                if (s(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[l]) {
                            if (e.nodeType === 1 || f) {
                                a = e[T] || (e[T] = {});
                                i = a[e.uniqueID] || (a[e.uniqueID] = {});
                                if (u && u === e.nodeName.toLowerCase()) {
                                    e = e[l] || e
                                } else if ((r = i[c]) && r[0] === S && r[1] === d) {
                                    return o[2] = r[2]
                                } else {
                                    i[c] = o;
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

            function _e(i) {
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

            function be(e, t, n) {
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
                    l = e.length,
                    u = t != null;
                for (; s < l; s++) {
                    if (a = e[s]) {
                        if (!n || n(a, r, i)) {
                            o.push(a);
                            if (u) {
                                t.push(s)
                            }
                        }
                    }
                }
                return o
            }

            function xe(p, h, m, g, v, e) {
                if (g && !g[T]) {
                    g = xe(g)
                }
                if (v && !v[T]) {
                    v = xe(v, e)
                }
                return se(function(e, t, n, r) {
                    var i, a, o, s = [],
                        l = [],
                        u = t.length,
                        c = e || be(h || "*", n.nodeType ? [n] : n, []),
                        f = p && (e || !h) ? we(c, s, p, n, r) : c,
                        d = m ? v || (e ? p : u || g) ? [] : t : f;
                    if (m) {
                        m(f, d, n, r)
                    }
                    if (g) {
                        i = we(d, l);
                        g(i, [], n, r);
                        a = i.length;
                        while (a--) {
                            if (o = i[a]) {
                                d[l[a]] = !(f[l[a]] = o)
                            }
                        }
                    }
                    if (e) {
                        if (v || p) {
                            if (v) {
                                i = [];
                                a = d.length;
                                while (a--) {
                                    if (o = d[a]) {
                                        i.push(f[a] = o)
                                    }
                                }
                                v(null, d = [], i, r)
                            }
                            a = d.length;
                            while (a--) {
                                if ((o = d[a]) && (i = v ? O(e, o) : s[a]) > -1) {
                                    e[i] = !(t[i] = o)
                                }
                            }
                        }
                    } else {
                        d = we(d === t ? d.splice(u, d.length) : d);
                        if (v) {
                            v(null, t, d, r)
                        } else {
                            D.apply(t, d)
                        }
                    }
                })
            }

            function ke(e) {
                var i, t, n, r = e.length,
                    a = b.relative[e[0].type],
                    o = a || b.relative[" "],
                    s = a ? 1 : 0,
                    l = ye(function(e) {
                        return e === i
                    }, o, true),
                    u = ye(function(e) {
                        return O(i, e) > -1
                    }, o, true),
                    c = [function(e, t, n) {
                        var r = !a && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                        i = null;
                        return r
                    }];
                for (; s < r; s++) {
                    if (t = b.relative[e[s].type]) {
                        c = [ye(_e(c), t)]
                    } else {
                        t = b.filter[e[s].type].apply(null, e[s].matches);
                        if (t[T]) {
                            n = ++s;
                            for (; n < r; n++) {
                                if (b.relative[e[n].type]) {
                                    break
                                }
                            }
                            return xe(s > 1 && _e(c), s > 1 && ve(e.slice(0, s - 1).concat({
                                value: e[s - 2].type === " " ? "*" : ""
                            })).replace(F, "$1"), t, s < n && ke(e.slice(s, n)), n < r && ke(e = e.slice(n)), n < r && ve(e))
                        }
                        c.push(t)
                    }
                }
                return _e(c)
            }

            function Ce(g, v) {
                var y = v.length > 0,
                    _ = g.length > 0,
                    e = function(e, t, n, r, i) {
                        var a, o, s, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || _ && b.find["TAG"]("*", i),
                            h = S += d == null ? 1 : Math.random() || .1,
                            m = p.length;
                        if (i) {
                            w = t === k || t || i
                        }
                        for (; u !== m && (a = p[u]) != null; u++) {
                            if (_ && a) {
                                o = 0;
                                if (!t && a.ownerDocument !== k) {
                                    x(a);
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
                            if (y) {
                                if (a = !s && a) {
                                    l--
                                }
                                if (e) {
                                    c.push(a)
                                }
                            }
                        }
                        l += u;
                        if (y && u !== l) {
                            o = 0;
                            while (s = v[o++]) {
                                s(c, f, t, n)
                            }
                            if (e) {
                                if (l > 0) {
                                    while (u--) {
                                        if (!(c[u] || f[u])) {
                                            f[u] = L.call(r)
                                        }
                                    }
                                }
                                f = we(f)
                            }
                            D.apply(r, f);
                            if (i && !e && f.length > 0 && l + v.length > 1) {
                                ae.uniqueSort(r)
                            }
                        }
                        if (i) {
                            S = h;
                            w = d
                        }
                        return c
                    };
                return y ? se(e) : e
            }
            f = ae.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = A[e + " "];
                if (!a) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        a = ke(t[n]);
                        if (a[T]) {
                            r.push(a)
                        } else {
                            i.push(a)
                        }
                    }
                    a = A(e, Ce(i, r));
                    a.selector = e
                }
                return a
            };
            m = ae.select = function(e, t, n, r) {
                var i, a, o, s, l, u = typeof e === "function" && e,
                    c = !r && h(e = u.selector || e);
                n = n || [];
                if (c.length === 1) {
                    a = c[0] = c[0].slice(0);
                    if (a.length > 2 && (o = a[0]).type === "ID" && t.nodeType === 9 && C && b.relative[a[1].type]) {
                        t = (b.find["ID"](o.matches[0].replace(Z, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (u) {
                            t = t.parentNode
                        }
                        e = e.slice(a.shift().value.length)
                    }
                    i = V["needsContext"].test(e) ? 0 : a.length;
                    while (i--) {
                        o = a[i];
                        if (b.relative[s = o.type]) {
                            break
                        }
                        if (l = b.find[s]) {
                            if (r = l(o.matches[0].replace(Z, ee), J.test(a[0].type) && me(t.parentNode) || t)) {
                                a.splice(i, 1);
                                e = r.length && ve(a);
                                if (!e) {
                                    D.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(u || f(e, c))(r, t, !C, n, !t || J.test(e) && me(t.parentNode) || t);
                return n
            };
            p.sortStable = T.split("").sort(E).join("") === T;
            p.detectDuplicates = !!u;
            x();
            p.sortDetached = le(function(e) {
                return e.compareDocumentPosition(k.createElement("fieldset")) & 1
            });
            if (!le(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                ue("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!p.attributes || !le(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                ue("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!le(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                ue(M, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return ae
        }(k);
        T.find = b;
        T.expr = b.selectors;
        T.expr[":"] = T.expr.pseudos;
        T.uniqueSort = T.unique = b.uniqueSort;
        T.text = b.getText;
        T.isXMLDoc = b.isXML;
        T.contains = b.contains;
        T.escapeSelector = b.escape;
        var w = function(e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && T(e).is(n)) {
                        break
                    }
                    r.push(e)
                }
            }
            return r
        };
        var x = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        };
        var S = T.expr.match.needsContext;
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var E = /^.[^:#\[\.,]*$/;

        function N(e, n, r) {
            if (T.isFunction(n)) {
                return T.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return T.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return T.grep(e, function(e) {
                    return i.call(n, e) > -1 !== r
                })
            }
            if (E.test(n)) {
                return T.filter(n, e, r)
            }
            n = T.filter(n, e);
            return T.grep(e, function(e) {
                return i.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        T.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return T.find.matchesSelector(r, e) ? [r] : []
            }
            return T.find.matches(e, T.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        T.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if (typeof e !== "string") {
                    return this.pushStack(T(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (T.contains(i[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    T.find(e, i[t], n)
                }
                return r > 1 ? T.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], true))
            },
            is: function(e) {
                return !!N(this, typeof e === "string" && S.test(e) ? T(e) : e || [], false).length
            }
        });
        var L, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            D = T.fn.init = function(e, t, n) {
                var r, i;
                if (!e) {
                    return this
                }
                n = n || L;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = P.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof T ? t[0] : t;
                            T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, true));
                            if (A.test(r[1]) && T.isPlainObject(t)) {
                                for (r in t) {
                                    if (T.isFunction(this[r])) {
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
                } else if (T.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(T)
                }
                return T.makeArray(e, this)
            };
        D.prototype = T.fn;
        L = T(C);
        var j = /^(?:parents|prev(?:Until|All))/,
            O = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        T.fn.extend({
            has: function(e) {
                var t = T(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (T.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    a = [],
                    o = typeof e !== "string" && T(e);
                if (!S.test(e)) {
                    for (; r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && T.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(a.length > 1 ? T.uniqueSort(a) : a)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return i.call(T(e), this[0])
                }
                return i.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function M(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        T.each({
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
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
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
                return x((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || T.merge([], e.childNodes)
            }
        }, function(r, i) {
            T.fn[r] = function(e, t) {
                var n = T.map(this, i, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = T.filter(t, n)
                }
                if (this.length > 1) {
                    if (!O[r]) {
                        T.uniqueSort(n)
                    }
                    if (j.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var q = /[^\x20\t\r\n\f]+/g;

        function $(e) {
            var n = {};
            T.each(e.match(q) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        T.Callbacks = function(r) {
            r = typeof r === "string" ? $(r) : T.extend({}, r);
            var n, e, t, i, a = [],
                o = [],
                s = -1,
                l = function() {
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
                u = {
                    add: function() {
                        if (a) {
                            if (e && !n) {
                                s = a.length - 1;
                                o.push(e)
                            }(function n(e) {
                                T.each(e, function(e, t) {
                                    if (T.isFunction(t)) {
                                        if (!r.unique || !u.has(t)) {
                                            a.push(t)
                                        }
                                    } else if (t && t.length && T.type(t) !== "string") {
                                        n(t)
                                    }
                                })
                            })(arguments);
                            if (e && !n) {
                                l()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        T.each(arguments, function(e, t) {
                            var n;
                            while ((n = T.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (n <= s) {
                                    s--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? T.inArray(e, a) > -1 : a.length > 0
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
                                l()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        u.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return u
        };

        function I(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function H(e, t, n) {
            var r;
            try {
                if (e && T.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && T.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        T.extend({
            Deferred: function(e) {
                var a = [
                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
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
                            return T.Deferred(function(r) {
                                T.each(a, function(e, t) {
                                    var n = T.isFunction(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && T.isFunction(e.promise)) {
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
                            var l = 0;

                            function u(i, a, o, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (i < l) {
                                                return
                                            }
                                            e = o.apply(n, r);
                                            if (e === a.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (T.isFunction(t)) {
                                                if (s) {
                                                    t.call(e, u(l, a, I, s), u(l, a, R, s))
                                                } else {
                                                    l++;
                                                    t.call(e, u(l, a, I, s), u(l, a, R, s), u(l, a, I, a.notifyWith))
                                                }
                                            } else {
                                                if (o !== I) {
                                                    n = undefined;
                                                    r = [e]
                                                }(s || a.resolveWith)(n, r)
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (T.Deferred.exceptionHook) {
                                                    T.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (i + 1 >= l) {
                                                    if (o !== R) {
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
                                        if (T.Deferred.getStackHook) {
                                            t.stackTrace = T.Deferred.getStackHook()
                                        }
                                        k.setTimeout(t)
                                    }
                                }
                            }
                            return T.Deferred(function(e) {
                                a[0][3].add(u(0, e, T.isFunction(r) ? r : I, e.notifyWith));
                                a[1][3].add(u(0, e, T.isFunction(t) ? t : I));
                                a[2][3].add(u(0, e, T.isFunction(n) ? n : R))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? T.extend(e, o) : o
                        }
                    },
                    s = {};
                T.each(a, function(e, t) {
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
                    a = T.Deferred(),
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
                    H(e, a.done(o(t)).resolve, a.reject);
                    if (a.state() === "pending" || T.isFunction(i[t] && i[t].then)) {
                        return a.then()
                    }
                }
                while (t--) {
                    H(i[t], o(t), a.reject)
                }
                return a.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(e, t) {
            if (k.console && k.console.warn && e && F.test(e.name)) {
                k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        T.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var B = T.Deferred();
        T.fn.ready = function(e) {
            B.then(e).catch(function(e) {
                T.readyException(e)
            });
            return this
        };
        T.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    T.readyWait++
                } else {
                    T.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --T.readyWait : T.isReady) {
                    return
                }
                T.isReady = true;
                if (e !== true && --T.readyWait > 0) {
                    return
                }
                B.resolveWith(C, [T])
            }
        });
        T.ready.then = B.then;

        function z() {
            C.removeEventListener("DOMContentLoaded", z);
            k.removeEventListener("load", z);
            T.ready()
        }
        if (C.readyState === "complete" || C.readyState !== "loading" && !C.documentElement.doScroll) {
            k.setTimeout(T.ready)
        } else {
            C.addEventListener("DOMContentLoaded", z);
            k.addEventListener("load", z)
        }
        var W = function(e, t, n, r, i, a, o) {
            var s = 0,
                l = e.length,
                u = n == null;
            if (T.type(n) === "object") {
                i = true;
                for (s in n) {
                    W(e, t, s, n[s], true, a, o)
                }
            } else if (r !== undefined) {
                i = true;
                if (!T.isFunction(r)) {
                    o = true
                }
                if (u) {
                    if (o) {
                        t.call(e, r);
                        t = null
                    } else {
                        u = t;
                        t = function(e, t, n) {
                            return u.call(T(e), n)
                        }
                    }
                }
                if (t) {
                    for (; s < l; s++) {
                        t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)))
                    }
                }
            }
            if (i) {
                return e
            }
            if (u) {
                return t.call(e)
            }
            return l ? t(e[0], n) : a
        };
        var U = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function K() {
            this.expando = T.expando + K.uid++
        }
        K.uid = 1;
        K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (U(e)) {
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
                    i[T.camelCase(t)] = n
                } else {
                    for (r in t) {
                        i[T.camelCase(r)] = t[r]
                    }
                }
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][T.camelCase(t)]
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
                    if (T.isArray(t)) {
                        t = t.map(T.camelCase)
                    } else {
                        t = T.camelCase(t);
                        t = t in r ? [t] : t.match(q) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || T.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !T.isEmptyObject(t)
            }
        };
        var V = new K;
        var G = new K;
        var X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
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
            if (X.test(e)) {
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
                    G.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }
        T.extend({
            hasData: function(e) {
                return G.hasData(e) || V.hasData(e)
            },
            data: function(e, t, n) {
                return G.access(e, t, n)
            },
            removeData: function(e, t) {
                G.remove(e, t)
            },
            _data: function(e, t, n) {
                return V.access(e, t, n)
            },
            _removeData: function(e, t) {
                V.remove(e, t)
            }
        });
        T.fn.extend({
            data: function(n, e) {
                var t, r, i, a = this[0],
                    o = a && a.attributes;
                if (n === undefined) {
                    if (this.length) {
                        i = G.get(a);
                        if (a.nodeType === 1 && !V.get(a, "hasDataAttrs")) {
                            t = o.length;
                            while (t--) {
                                if (o[t]) {
                                    r = o[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = T.camelCase(r.slice(5));
                                        J(a, r, i[r])
                                    }
                                }
                            }
                            V.set(a, "hasDataAttrs", true)
                        }
                    }
                    return i
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        G.set(this, n)
                    })
                }
                return W(this, function(e) {
                    var t;
                    if (a && e === undefined) {
                        t = G.get(a, n);
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
                        G.set(this, n, e)
                    })
                }, null, e, arguments.length > 1, null, true)
            },
            removeData: function(e) {
                return this.each(function() {
                    G.remove(this, e)
                })
            }
        });
        T.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = V.get(e, t);
                    if (n) {
                        if (!r || T.isArray(n)) {
                            r = V.access(e, t, T.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = T._queueHooks(e, t),
                    o = function() {
                        T.dequeue(e, t)
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
                return V.get(e, n) || V.access(e, n, {
                    empty: T.Callbacks("once memory").add(function() {
                        V.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        T.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return T.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = T.queue(this, t, n);
                    T._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        T.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    T.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = T.Deferred(),
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
                    n = V.get(a[o], e + "queueHooks");
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
            return e.style.display === "none" || e.style.display === "" && T.contains(e.ownerDocument, e) && T.css(e, "display") === "none"
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
                    return T.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                c = (T.cssNumber[t] || u !== "px" && +l) && ee.exec(T.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3];
                n = n || [];
                c = +l || 1;
                do {
                    a = a || ".5";
                    c = c / a;
                    T.style(e, t, c + u)
                } while (a !== (a = s() / l) && a !== 1 && --o)
            }
            if (n) {
                c = +c || +l || 0;
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = u;
                    r.start = c;
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
            i = T.css(t, "display");
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
                        i[a] = V.get(r, "display") || null;
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
                        V.set(r, "display", n)
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
        T.fn.extend({
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
                        T(this).show()
                    } else {
                        T(this).hide()
                    }
                })
            }
        });
        var le = /^(?:checkbox|radio)$/i;
        var ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var ce = /^$|\/(?:java|ecma)script/i;
        var fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        fe.optgroup = fe.option;
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead;
        fe.th = fe.td;

        function de(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && T.nodeName(e, t)) {
                return T.merge([e], n)
            }
            return n
        }

        function pe(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function me(e, t, n, r, i) {
            var a, o, s, l, u, c, f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
            for (; p < h; p++) {
                a = e[p];
                if (a || a === 0) {
                    if (T.type(a) === "object") {
                        T.merge(d, a.nodeType ? [a] : a)
                    } else if (!he.test(a)) {
                        d.push(t.createTextNode(a))
                    } else {
                        o = o || f.appendChild(t.createElement("div"));
                        s = (ue.exec(a) || ["", ""])[1].toLowerCase();
                        l = fe[s] || fe._default;
                        o.innerHTML = l[1] + T.htmlPrefilter(a) + l[2];
                        c = l[0];
                        while (c--) {
                            o = o.lastChild
                        }
                        T.merge(d, o.childNodes);
                        o = f.firstChild;
                        o.textContent = ""
                    }
                }
            }
            f.textContent = "";
            p = 0;
            while (a = d[p++]) {
                if (r && T.inArray(a, r) > -1) {
                    if (i) {
                        i.push(a)
                    }
                    continue
                }
                u = T.contains(a.ownerDocument, a);
                o = de(f.appendChild(a), "script");
                if (u) {
                    pe(o)
                }
                if (n) {
                    c = 0;
                    while (a = o[c++]) {
                        if (ce.test(a.type || "")) {
                            n.push(a)
                        }
                    }
                }
            }
            return f
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
        var ve = /^key/,
            ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _e = /^([^.]*)(?:\.(.+)|)/;

        function be() {
            return true
        }

        function we() {
            return false
        }

        function xe() {
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
                    T().off(e);
                    return o.apply(this, arguments)
                };
                i.guid = o.guid || (o.guid = T.guid++)
            }
            return e.each(function() {
                T.event.add(this, t, i, r, n)
            })
        }
        T.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var a, o, s, l, u, c, f, d, p, h, m, g = V.get(t);
                if (!g) {
                    return
                }
                if (n.handler) {
                    a = n;
                    n = a.handler;
                    i = a.selector
                }
                if (i) {
                    T.find.matchesSelector(ge, i)
                }
                if (!n.guid) {
                    n.guid = T.guid++
                }
                if (!(l = g.events)) {
                    l = g.events = {}
                }
                if (!(o = g.handle)) {
                    o = g.handle = function(e) {
                        return typeof T !== "undefined" && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(q) || [""];
                u = e.length;
                while (u--) {
                    s = _e.exec(e[u]) || [];
                    p = m = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!p) {
                        continue
                    }
                    f = T.event.special[p] || {};
                    p = (i ? f.delegateType : f.bindType) || p;
                    f = T.event.special[p] || {};
                    c = T.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && T.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, a);
                    if (!(d = l[p])) {
                        d = l[p] = [];
                        d.delegateCount = 0;
                        if (!f.setup || f.setup.call(t, r, h, o) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(p, o)
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(t, c);
                        if (!c.handler.guid) {
                            c.handler.guid = n.guid
                        }
                    }
                    if (i) {
                        d.splice(d.delegateCount++, 0, c)
                    } else {
                        d.push(c)
                    }
                    T.event.global[p] = true
                }
            },
            remove: function(e, t, n, r, i) {
                var a, o, s, l, u, c, f, d, p, h, m, g = V.hasData(e) && V.get(e);
                if (!g || !(l = g.events)) {
                    return
                }
                t = (t || "").match(q) || [""];
                u = t.length;
                while (u--) {
                    s = _e.exec(t[u]) || [];
                    p = m = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!p) {
                        for (p in l) {
                            T.event.remove(e, p + t[u], n, r, true)
                        }
                        continue
                    }
                    f = T.event.special[p] || {};
                    p = (r ? f.delegateType : f.bindType) || p;
                    d = l[p] || [];
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    o = a = d.length;
                    while (a--) {
                        c = d[a];
                        if ((i || m === c.origType) && (!n || n.guid === c.guid) && (!s || s.test(c.namespace)) && (!r || r === c.selector || r === "**" && c.selector)) {
                            d.splice(a, 1);
                            if (c.selector) {
                                d.delegateCount--
                            }
                            if (f.remove) {
                                f.remove.call(e, c)
                            }
                        }
                    }
                    if (o && !d.length) {
                        if (!f.teardown || f.teardown.call(e, h, g.handle) === false) {
                            T.removeEvent(e, p, g.handle)
                        }
                        delete l[p]
                    }
                }
                if (T.isEmptyObject(l)) {
                    V.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = T.event.fix(e);
                var n, r, i, a, o, s, l = new Array(arguments.length),
                    u = (V.get(this, "events") || {})[t.type] || [],
                    c = T.event.special[t.type] || {};
                l[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    l[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (c.preDispatch && c.preDispatch.call(this, t) === false) {
                    return
                }
                s = T.event.handlers.call(this, t, u);
                n = 0;
                while ((a = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = a.elem;
                    r = 0;
                    while ((o = a.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(o.namespace)) {
                            t.handleObj = o;
                            t.data = o.data;
                            i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (c.postDispatch) {
                    c.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, i, a, o, s = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; u !== this; u = u.parentNode || this) {
                        if (u.nodeType === 1 && !(e.type === "click" && u.disabled === true)) {
                            a = [];
                            o = {};
                            for (n = 0; n < l; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (o[i] === undefined) {
                                    o[i] = r.needsContext ? T(i, this).index(u) > -1 : T.find(i, this, null, [u]).length
                                }
                                if (o[i]) {
                                    a.push(r)
                                }
                            }
                            if (a.length) {
                                s.push({
                                    elem: u,
                                    handlers: a
                                })
                            }
                        }
                    }
                }
                u = this;
                if (l < t.length) {
                    s.push({
                        elem: u,
                        handlers: t.slice(l)
                    })
                }
                return s
            },
            addProp: function(t, e) {
                Object.defineProperty(T.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: T.isFunction(e) ? function() {
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
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== xe() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === xe() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && T.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return T.nodeName(e.target, "a")
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
        T.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        T.Event = function(e, t) {
            if (!(this instanceof T.Event)) {
                return new T.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? be : we;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                T.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || T.now();
            this[T.expando] = true
        };
        T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: we,
            isPropagationStopped: we,
            isImmediatePropagationStopped: we,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = be;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        T.each({
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
                if (e.which == null && ve.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && ye.test(e.type)) {
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
        }, T.event.addProp);
        T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, a) {
            T.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    if (!r || r !== n && !T.contains(n, r)) {
                        e.type = i.origType;
                        t = i.handler.apply(this, arguments);
                        e.type = a
                    }
                    return t
                }
            }
        });
        T.fn.extend({
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
                    T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
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
                    T.event.remove(this, e, n, t)
                })
            }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Te = /<script|<style|<link/i,
            Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ne(e, t) {
            if (T.nodeName(e, "table") && T.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function Le(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Pe(e) {
            var t = Ae.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function De(e, t) {
            var n, r, i, a, o, s, l, u;
            if (t.nodeType !== 1) {
                return
            }
            if (V.hasData(e)) {
                a = V.access(e);
                o = V.set(t, a);
                u = a.events;
                if (u) {
                    delete o.handle;
                    o.events = {};
                    for (i in u) {
                        for (n = 0, r = u[i].length; n < r; n++) {
                            T.event.add(t, i, u[i][n])
                        }
                    }
                }
            }
            if (G.hasData(e)) {
                s = G.access(e);
                l = T.extend({}, s);
                G.set(t, l)
            }
        }

        function je(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && le.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function Oe(n, r, i, a) {
            r = m.apply([], r);
            var e, t, o, s, l, u, c = 0,
                f = n.length,
                d = f - 1,
                p = r[0],
                h = T.isFunction(p);
            if (h || f > 1 && typeof p === "string" && !g.checkClone && Se.test(p)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = p.call(this, e, t.html())
                    }
                    Oe(t, r, i, a)
                })
            }
            if (f) {
                e = me(r, n[0].ownerDocument, false, n, a);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || a) {
                    o = T.map(de(e, "script"), Le);
                    s = o.length;
                    for (; c < f; c++) {
                        l = e;
                        if (c !== d) {
                            l = T.clone(l, true, true);
                            if (s) {
                                T.merge(o, de(l, "script"))
                            }
                        }
                        i.call(n[c], l, c)
                    }
                    if (s) {
                        u = o[o.length - 1].ownerDocument;
                        T.map(o, Pe);
                        for (c = 0; c < s; c++) {
                            l = o[c];
                            if (ce.test(l.type || "") && !V.access(l, "globalEval") && T.contains(u, l)) {
                                if (l.src) {
                                    if (T._evalUrl) {
                                        T._evalUrl(l.src)
                                    }
                                } else {
                                    v(l.textContent.replace(Ee, ""), u)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function Me(e, t, n) {
            var r, i = t ? T.filter(t, e) : e,
                a = 0;
            for (;
                (r = i[a]) != null; a++) {
                if (!n && r.nodeType === 1) {
                    T.cleanData(de(r))
                }
                if (r.parentNode) {
                    if (n && T.contains(r.ownerDocument, r)) {
                        pe(de(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        T.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ce, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, a, o, s = e.cloneNode(true),
                    l = T.contains(e.ownerDocument, e);
                if (!g.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !T.isXMLDoc(e)) {
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
                            De(a[r], o[r])
                        }
                    } else {
                        De(e, s)
                    }
                }
                o = de(s, "script");
                if (o.length > 0) {
                    pe(o, !l && de(e, "script"))
                }
                return s
            },
            cleanData: function(e) {
                var t, n, r, i = T.event.special,
                    a = 0;
                for (;
                    (n = e[a]) !== undefined; a++) {
                    if (U(n)) {
                        if (t = n[V.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        T.event.remove(n, r)
                                    } else {
                                        T.removeEvent(n, r, t.handle)
                                    }
                                }
                            }
                            n[V.expando] = undefined
                        }
                        if (n[G.expando]) {
                            n[G.expando] = undefined
                        }
                    }
                }
            }
        });
        T.fn.extend({
            detach: function(e) {
                return Me(this, e, true)
            },
            remove: function(e) {
                return Me(this, e)
            },
            text: function(e) {
                return W(this, function(e) {
                    return e === undefined ? T.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Oe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return Oe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Oe(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return Oe(this, arguments, function(e) {
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
                        T.cleanData(de(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return T.clone(this, e, t)
                })
            },
            html: function(e) {
                return W(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Te.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    T.cleanData(de(t, false));
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
                return Oe(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (T.inArray(this, n) < 0) {
                        T.cleanData(de(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, o) {
            T.fn[e] = function(e) {
                var t, n = [],
                    r = T(e),
                    i = r.length - 1,
                    a = 0;
                for (; a <= i; a++) {
                    t = a === i ? this : this.clone(true);
                    T(r[a])[o](t);
                    l.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var qe = /^margin/;
        var $e = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i");
        var Ie = function(e) {
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
            T.extend(g, {
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

        function Re(e, t, n) {
            var r, i, a, o, s = e.style;
            n = n || Ie(e);
            if (n) {
                o = n.getPropertyValue(t) || n[t];
                if (o === "" && !T.contains(e.ownerDocument, e)) {
                    o = T.style(e, t)
                }
                if (!g.pixelMarginRight() && $e.test(o) && qe.test(t)) {
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

        function He(e, t) {
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
        var Fe = /^(none|table(?!-c[ea]).+)/,
            Be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ze = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            We = ["Webkit", "Moz", "ms"],
            Ue = C.createElement("div").style;

        function Ke(e) {
            if (e in Ue) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = We.length;
            while (n--) {
                e = We[n] + t;
                if (e in Ue) {
                    return e
                }
            }
        }

        function Ve(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ge(e, t, n, r, i) {
            var a, o = 0;
            if (n === (r ? "border" : "content")) {
                a = 4
            } else {
                a = t === "width" ? 1 : 0
            }
            for (; a < 4; a += 2) {
                if (n === "margin") {
                    o += T.css(e, n + te[a], true, i)
                }
                if (r) {
                    if (n === "content") {
                        o -= T.css(e, "padding" + te[a], true, i)
                    }
                    if (n !== "margin") {
                        o -= T.css(e, "border" + te[a] + "Width", true, i)
                    }
                } else {
                    o += T.css(e, "padding" + te[a], true, i);
                    if (n !== "padding") {
                        o += T.css(e, "border" + te[a] + "Width", true, i)
                    }
                }
            }
            return o
        }

        function Xe(e, t, n) {
            var r, i = true,
                a = Ie(e),
                o = T.css(e, "boxSizing", false, a) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = Re(e, t, a);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if ($e.test(r)) {
                    return r
                }
                i = o && (g.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + Ge(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Re(e, "opacity");
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
                var i, a, o, s = T.camelCase(t),
                    l = e.style;
                t = T.cssProps[s] || (T.cssProps[s] = Ke(s) || s);
                o = T.cssHooks[t] || T.cssHooks[s];
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
                        n += i && i[3] || (T.cssNumber[s] ? "" : "px")
                    }
                    if (!g.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        l[t] = "inherit"
                    }
                    if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) {
                        l[t] = n
                    }
                } else {
                    if (o && "get" in o && (i = o.get(e, false, r)) !== undefined) {
                        return i
                    }
                    return l[t]
                }
            },
            css: function(e, t, n, r) {
                var i, a, o, s = T.camelCase(t);
                t = T.cssProps[s] || (T.cssProps[s] = Ke(s) || s);
                o = T.cssHooks[t] || T.cssHooks[s];
                if (o && "get" in o) {
                    i = o.get(e, true, n)
                }
                if (i === undefined) {
                    i = Re(e, t, r)
                }
                if (i === "normal" && t in ze) {
                    i = ze[t]
                }
                if (n === "" || n) {
                    a = parseFloat(i);
                    return n === true || isFinite(a) ? a || 0 : i
                }
                return i
            }
        });
        T.each(["height", "width"], function(e, o) {
            T.cssHooks[o] = {
                get: function(e, t, n) {
                    if (t) {
                        return Fe.test(T.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Be, function() {
                            return Xe(e, o, n)
                        }) : Xe(e, o, n)
                    }
                },
                set: function(e, t, n) {
                    var r, i = n && Ie(e),
                        a = n && Ge(e, o, n, T.css(e, "boxSizing", false, i) === "border-box", i);
                    if (a && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[o] = t;
                        t = T.css(e, o)
                    }
                    return Ve(e, t, a)
                }
            }
        });
        T.cssHooks.marginLeft = He(g.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, a) {
            T.cssHooks[i + a] = {
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
            if (!qe.test(i)) {
                T.cssHooks[i + a].set = Ve
            }
        });
        T.fn.extend({
            css: function(e, t) {
                return W(this, function(e, t, n) {
                    var r, i, a = {},
                        o = 0;
                    if (T.isArray(t)) {
                        r = Ie(e);
                        i = t.length;
                        for (; o < i; o++) {
                            a[t[o]] = T.css(e, t[o], false, r)
                        }
                        return a
                    }
                    return n !== undefined ? T.style(e, t, n) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Qe(e, t, n, r, i) {
            return new Qe.prototype.init(e, t, n, r, i)
        }
        T.Tween = Qe;
        Qe.prototype = {
            constructor: Qe,
            init: function(e, t, n, r, i, a) {
                this.elem = e;
                this.prop = n;
                this.easing = i || T.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = a || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Qe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Qe.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
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
                    t = T.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (T.fx.step[e.prop]) {
                        T.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[T.cssProps[e.prop]] != null || T.cssHooks[e.prop])) {
                        T.style(e.elem, e.prop, e.now + e.unit)
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
        T.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        T.fx = Qe.prototype.init;
        T.fx.step = {};
        var Ye, Je, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Je) {
                k.requestAnimationFrame(tt);
                T.fx.tick()
            }
        }

        function nt() {
            k.setTimeout(function() {
                Ye = undefined
            });
            return Ye = T.now()
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
            var r, i, a, o, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                m = e.nodeType && ne(e),
                g = V.get(e, "fxshow");
            if (!n.queue) {
                o = T._queueHooks(e, "fx");
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
                        if (!T.queue(e, "fx").length) {
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
                    p[r] = g && g[r] || T.style(e, r)
                }
            }
            l = !T.isEmptyObject(t);
            if (!l && T.isEmptyObject(p)) {
                return
            }
            if (f && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                u = g && g.display;
                if (u == null) {
                    u = V.get(e, "display")
                }
                c = T.css(e, "display");
                if (c === "none") {
                    if (u) {
                        c = u
                    } else {
                        se([e], true);
                        u = e.style.display || u;
                        c = T.css(e, "display");
                        se([e])
                    }
                }
                if (c === "inline" || c === "inline-block" && u != null) {
                    if (T.css(e, "float") === "none") {
                        if (!l) {
                            d.done(function() {
                                h.display = u
                            });
                            if (u == null) {
                                c = h.display;
                                u = c === "none" ? "" : c
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
            l = false;
            for (r in p) {
                if (!l) {
                    if (g) {
                        if ("hidden" in g) {
                            m = g.hidden
                        }
                    } else {
                        g = V.access(e, "fxshow", {
                            display: u
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
                        V.remove(e, "fxshow");
                        for (r in p) {
                            T.style(e, r, p[r])
                        }
                    })
                }
                l = it(m ? g[r] : 0, r, d);
                if (!(r in g)) {
                    g[r] = l.start;
                    if (m) {
                        l.end = l.start;
                        l.start = 0
                    }
                }
            }
        }

        function ot(e, t) {
            var n, r, i, a, o;
            for (n in e) {
                r = T.camelCase(n);
                i = t[r];
                a = e[n];
                if (T.isArray(a)) {
                    i = a[1];
                    a = e[n] = a[0]
                }
                if (n !== r) {
                    e[r] = a;
                    delete e[n]
                }
                o = T.cssHooks[r];
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
                l = T.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (s) {
                        return false
                    }
                    var e = Ye || nt(),
                        t = Math.max(0, u.startTime + u.duration - e),
                        n = t / u.duration || 0,
                        r = 1 - n,
                        i = 0,
                        a = u.tweens.length;
                    for (; i < a; i++) {
                        u.tweens[i].run(r)
                    }
                    l.notifyWith(o, [u, r, t]);
                    if (r < 1 && a) {
                        return t
                    } else {
                        l.resolveWith(o, [u]);
                        return false
                    }
                },
                u = l.promise({
                    elem: o,
                    props: T.extend({}, e),
                    opts: T.extend(true, {
                        specialEasing: {},
                        easing: T.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ye || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        u.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? u.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; t < n; t++) {
                            u.tweens[t].run(1)
                        }
                        if (e) {
                            l.notifyWith(o, [u, 1, 0]);
                            l.resolveWith(o, [u, e])
                        } else {
                            l.rejectWith(o, [u, e])
                        }
                        return this
                    }
                }),
                c = u.props;
            ot(c, u.opts.specialEasing);
            for (; r < i; r++) {
                n = st.prefilters[r].call(u, o, c, u.opts);
                if (n) {
                    if (T.isFunction(n.stop)) {
                        T._queueHooks(u.elem, u.opts.queue).stop = T.proxy(n.stop, n)
                    }
                    return n
                }
            }
            T.map(c, it, u);
            if (T.isFunction(u.opts.start)) {
                u.opts.start.call(o, u)
            }
            T.fx.timer(T.extend(a, {
                elem: o,
                anim: u,
                queue: u.opts.queue
            }));
            return u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        T.Animation = T.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ie(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (T.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(q)
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
        T.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? T.extend({}, e) : {
                complete: n || !n && t || T.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !T.isFunction(t) && t
            };
            if (T.fx.off || C.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in T.fx.speeds) {
                        r.duration = T.fx.speeds[r.duration]
                    } else {
                        r.duration = T.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (T.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    T.dequeue(this, r.queue)
                }
            };
            return r
        };
        T.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = T.isEmptyObject(t),
                    a = T.speed(e, n, r),
                    o = function() {
                        var e = st(this, T.extend({}, t), a);
                        if (i || V.get(this, "finish")) {
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
                        n = T.timers,
                        r = V.get(this);
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
                        T.dequeue(this, i)
                    }
                })
            },
            finish: function(o) {
                if (o !== false) {
                    o = o || "fx"
                }
                return this.each(function() {
                    var e, t = V.get(this),
                        n = t[o + "queue"],
                        r = t[o + "queueHooks"],
                        i = T.timers,
                        a = n ? n.length : 0;
                    t.finish = true;
                    T.queue(this, o, []);
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
        T.each(["toggle", "show", "hide"], function(e, r) {
            var i = T.fn[r];
            T.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        T.each({
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
            T.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        T.timers = [];
        T.fx.tick = function() {
            var e, t = 0,
                n = T.timers;
            Ye = T.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                T.fx.stop()
            }
            Ye = undefined
        };
        T.fx.timer = function(e) {
            T.timers.push(e);
            if (e()) {
                T.fx.start()
            } else {
                T.timers.pop()
            }
        };
        T.fx.interval = 13;
        T.fx.start = function() {
            if (!Je) {
                Je = k.requestAnimationFrame ? k.requestAnimationFrame(tt) : k.setInterval(T.fx.tick, T.fx.interval)
            }
        };
        T.fx.stop = function() {
            if (k.cancelAnimationFrame) {
                k.cancelAnimationFrame(Je)
            } else {
                k.clearInterval(Je)
            }
            Je = null
        };
        T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        T.fn.delay = function(r, e) {
            r = T.fx ? T.fx.speeds[r] || r : r;
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
        var lt, ut = T.expr.attrHandle;
        T.fn.extend({
            attr: function(e, t) {
                return W(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    T.removeAttr(this, e)
                })
            }
        });
        T.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return T.prop(e, t, n)
                }
                if (a !== 1 || !T.isXMLDoc(e)) {
                    i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? lt : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        T.removeAttr(e, t);
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
                r = T.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && t === "radio" && T.nodeName(e, "input")) {
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
                    i = t && t.match(q);
                if (i && e.nodeType === 1) {
                    while (n = i[r++]) {
                        e.removeAttribute(n)
                    }
                }
            }
        });
        lt = {
            set: function(e, t, n) {
                if (t === false) {
                    T.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = ut[t] || T.find.attr;
            ut[t] = function(e, t, n) {
                var r, i, a = t.toLowerCase();
                if (!n) {
                    i = ut[a];
                    ut[a] = r;
                    r = o(e, t, n) != null ? a : null;
                    ut[a] = i
                }
                return r
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        T.fn.extend({
            prop: function(e, t) {
                return W(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[T.propFix[e] || e]
                })
            }
        });
        T.extend({
            prop: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (a !== 1 || !T.isXMLDoc(e)) {
                    t = T.propFix[t] || t;
                    i = T.propHooks[t]
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
                        var t = T.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (ct.test(e.nodeName) || ft.test(e.nodeName) && e.href) {
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
            T.propHooks.selected = {
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
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            T.propFix[this.toLowerCase()] = this
        });

        function dt(e) {
            var t = e.match(q) || [];
            return t.join(" ")
        }

        function pt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        T.fn.extend({
            addClass: function(t) {
                var e, n, r, i, a, o, s, l = 0;
                if (T.isFunction(t)) {
                    return this.each(function(e) {
                        T(this).addClass(t.call(this, e, pt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(q) || [];
                    while (n = this[l++]) {
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
                var e, n, r, i, a, o, s, l = 0;
                if (T.isFunction(t)) {
                    return this.each(function(e) {
                        T(this).removeClass(t.call(this, e, pt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(q) || [];
                    while (n = this[l++]) {
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
                if (T.isFunction(i)) {
                    return this.each(function(e) {
                        T(this).toggleClass(i.call(this, e, pt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (a === "string") {
                        t = 0;
                        n = T(this);
                        r = i.match(q) || [];
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
                            V.set(this, "__className__", e)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", e || i === false ? "" : V.get(this, "__className__") || "")
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
        T.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()];
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
                i = T.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        t = n.call(this, e, T(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (T.isArray(t)) {
                        t = T.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        T.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = T.find.attr(e, "value");
                        return t != null ? t : dt(T.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            o = e.type === "select-one",
                            s = o ? null : [],
                            l = o ? a + 1 : i.length;
                        if (a < 0) {
                            r = l
                        } else {
                            r = o ? a : 0
                        }
                        for (; r < l; r++) {
                            n = i[r];
                            if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !T.nodeName(n.parentNode, "optgroup"))) {
                                t = T(n).val();
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
                            a = T.makeArray(t),
                            o = i.length;
                        while (o--) {
                            r = i[o];
                            if (r.selected = T.inArray(T.valHooks.option.get(r), a) > -1) {
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
        T.each(["radio", "checkbox"], function() {
            T.valHooks[this] = {
                set: function(e, t) {
                    if (T.isArray(t)) {
                        return e.checked = T.inArray(T(e).val(), t) > -1
                    }
                }
            };
            if (!g.checkOn) {
                T.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var mt = /^(?:focusinfocus|focusoutblur)$/;
        T.extend(T.event, {
            trigger: function(e, t, n, r) {
                var i, a, o, s, l, u, c, f = [n || C],
                    d = h.call(e, "type") ? e.type : e,
                    p = h.call(e, "namespace") ? e.namespace.split(".") : [];
                a = o = n = n || C;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (mt.test(d + T.event.triggered)) {
                    return
                }
                if (d.indexOf(".") > -1) {
                    p = d.split(".");
                    d = p.shift();
                    p.sort()
                }
                l = d.indexOf(":") < 0 && "on" + d;
                e = e[T.expando] ? e : new T.Event(d, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = p.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : T.makeArray(t, [e]);
                c = T.event.special[d] || {};
                if (!r && c.trigger && c.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !c.noBubble && !T.isWindow(n)) {
                    s = c.delegateType || d;
                    if (!mt.test(s + d)) {
                        a = a.parentNode
                    }
                    for (; a; a = a.parentNode) {
                        f.push(a);
                        o = a
                    }
                    if (o === (n.ownerDocument || C)) {
                        f.push(o.defaultView || o.parentWindow || k)
                    }
                }
                i = 0;
                while ((a = f[i++]) && !e.isPropagationStopped()) {
                    e.type = i > 1 ? s : c.bindType || d;
                    u = (V.get(a, "events") || {})[e.type] && V.get(a, "handle");
                    if (u) {
                        u.apply(a, t)
                    }
                    u = l && a[l];
                    if (u && u.apply && U(a)) {
                        e.result = u.apply(a, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = d;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!c._default || c._default.apply(f.pop(), t) === false) && U(n)) {
                        if (l && T.isFunction(n[d]) && !T.isWindow(n)) {
                            o = n[l];
                            if (o) {
                                n[l] = null
                            }
                            T.event.triggered = d;
                            n[d]();
                            T.event.triggered = undefined;
                            if (o) {
                                n[l] = o
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = T.extend(new T.Event, n, {
                    type: e,
                    isSimulated: true
                });
                T.event.trigger(r, null, t)
            }
        });
        T.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    T.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return T.event.trigger(e, t, n, true)
                }
            }
        });
        T.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            T.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        T.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        g.focusin = "onfocusin" in k;
        if (!g.focusin) {
            T.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var i = function(e) {
                    T.event.simulate(r, e.target, T.event.fix(e))
                };
                T.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = V.access(e, r);
                        if (!t) {
                            e.addEventListener(n, i, true)
                        }
                        V.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = V.access(e, r) - 1;
                        if (!t) {
                            e.removeEventListener(n, i, true);
                            V.remove(e, r)
                        } else {
                            V.access(e, r, t)
                        }
                    }
                }
            })
        }
        var gt = k.location;
        var vt = T.now();
        var yt = /\?/;
        T.parseXML = function(e) {
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
                T.error("Invalid XML: " + e)
            }
            return t
        };
        var _t = /\[\]$/,
            bt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            xt = /^(?:input|select|textarea|keygen)/i;

        function kt(n, e, r, i) {
            var t;
            if (T.isArray(e)) {
                T.each(e, function(e, t) {
                    if (r || _t.test(n)) {
                        i(n, t)
                    } else {
                        kt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
                    }
                })
            } else if (!r && T.type(e) === "object") {
                for (t in e) {
                    kt(n + "[" + t + "]", e[t], r, i)
                }
            } else {
                i(n, e)
            }
        }
        T.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = T.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (T.isArray(e) || e.jquery && !T.isPlainObject(e)) {
                T.each(e, function() {
                    i(this.name, this.value)
                })
            } else {
                for (n in e) {
                    kt(n, e[n], t, i)
                }
            }
            return r.join("&")
        };
        T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !le.test(e))
                }).map(function(e, t) {
                    var n = T(this).val();
                    if (n == null) {
                        return null
                    }
                    if (T.isArray(n)) {
                        return T.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(bt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: n.replace(bt, "\r\n")
                    }
                }).get()
            }
        });
        var Ct = /%20/g,
            Tt = /#.*$/,
            St = /([?&])_=[^&]*/,
            At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Pt = {},
            Dt = {},
            jt = "*/".concat("*"),
            Ot = C.createElement("a");
        Ot.href = gt.href;

        function Mt(a) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    i = e.toLowerCase().match(q) || [];
                if (T.isFunction(t)) {
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

        function qt(t, i, a, o) {
            var s = {},
                l = t === Dt;

            function u(e) {
                var r;
                s[e] = true;
                T.each(t[e] || [], function(e, t) {
                    var n = t(i, a, o);
                    if (typeof n === "string" && !l && !s[n]) {
                        i.dataTypes.unshift(n);
                        u(n);
                        return false
                    } else if (l) {
                        return !(r = n)
                    }
                });
                return r
            }
            return u(i.dataTypes[0]) || !s["*"] && u("*")
        }

        function $t(e, t) {
            var n, r, i = T.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                T.extend(true, e, r)
            }
            return e
        }

        function It(e, t, n) {
            var r, i, a, o, s = e.contents,
                l = e.dataTypes;
            while (l[0] === "*") {
                l.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (r) {
                for (i in s) {
                    if (s[i] && s[i].test(r)) {
                        l.unshift(i);
                        break
                    }
                }
            }
            if (l[0] in n) {
                a = l[0]
            } else {
                for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
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
                if (a !== l[0]) {
                    l.unshift(a)
                }
                return n[a]
            }
        }

        function Rt(e, t, n, r) {
            var i, a, o, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1]) {
                for (o in e.converters) {
                    u[o.toLowerCase()] = e.converters[o]
                }
            }
            a = c.shift();
            while (a) {
                if (e.responseFields[a]) {
                    n[e.responseFields[a]] = t
                }
                if (!l && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                l = a;
                a = c.shift();
                if (a) {
                    if (a === "*") {
                        a = l
                    } else if (l !== "*" && l !== a) {
                        o = u[l + " " + a] || u["* " + a];
                        if (!o) {
                            for (i in u) {
                                s = i.split(" ");
                                if (s[1] === a) {
                                    o = u[l + " " + s[0]] || u["* " + s[0]];
                                    if (o) {
                                        if (o === true) {
                                            o = u[i]
                                        } else if (u[i] !== true) {
                                            a = s[0];
                                            c.unshift(s[1])
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
                                        error: o ? e : "No conversion from " + l + " to " + a
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
        T.extend({
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
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, T.ajaxSettings), t) : $t(T.ajaxSettings, e)
            },
            ajaxPrefilter: Mt(Pt),
            ajaxTransport: Mt(Dt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var c, f, d, n, p, r, h, m, i, a, g = T.ajaxSetup({}, t),
                    v = g.context || g,
                    y = g.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                    _ = T.Deferred(),
                    b = T.Callbacks("once memory"),
                    w = g.statusCode || {},
                    o = {},
                    s = {},
                    l = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = At.exec(d)) {
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
                                    x.always(e[x.status])
                                } else {
                                    for (t in e) {
                                        w[t] = [w[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            if (c) {
                                c.abort(t)
                            }
                            u(0, t);
                            return this
                        }
                    };
                _.promise(x);
                g.url = ((e || g.url || gt.href) + "").replace(Lt, gt.protocol + "//");
                g.type = t.method || t.type || g.method || g.type;
                g.dataTypes = (g.dataType || "*").toLowerCase().match(q) || [""];
                if (g.crossDomain == null) {
                    r = C.createElement("a");
                    try {
                        r.href = g.url;
                        r.href = r.href;
                        g.crossDomain = Ot.protocol + "//" + Ot.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        g.crossDomain = true
                    }
                }
                if (g.data && g.processData && typeof g.data !== "string") {
                    g.data = T.param(g.data, g.traditional)
                }
                qt(Pt, g, t, x);
                if (h) {
                    return x
                }
                m = T.event && g.global;
                if (m && T.active++ === 0) {
                    T.event.trigger("ajaxStart")
                }
                g.type = g.type.toUpperCase();
                g.hasContent = !Nt.test(g.type);
                f = g.url.replace(Tt, "");
                if (!g.hasContent) {
                    a = g.url.slice(f.length);
                    if (g.data) {
                        f += (yt.test(f) ? "&" : "?") + g.data;
                        delete g.data
                    }
                    if (g.cache === false) {
                        f = f.replace(St, "$1");
                        a = (yt.test(f) ? "&" : "?") + "_=" + vt++ + a
                    }
                    g.url = f + a
                } else if (g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    g.data = g.data.replace(Ct, "+")
                }
                if (g.ifModified) {
                    if (T.lastModified[f]) {
                        x.setRequestHeader("If-Modified-Since", T.lastModified[f])
                    }
                    if (T.etag[f]) {
                        x.setRequestHeader("If-None-Match", T.etag[f])
                    }
                }
                if (g.data && g.hasContent && g.contentType !== false || t.contentType) {
                    x.setRequestHeader("Content-Type", g.contentType)
                }
                x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + jt + "; q=0.01" : "") : g.accepts["*"]);
                for (i in g.headers) {
                    x.setRequestHeader(i, g.headers[i])
                }
                if (g.beforeSend && (g.beforeSend.call(v, x, g) === false || h)) {
                    return x.abort()
                }
                l = "abort";
                b.add(g.complete);
                x.done(g.success);
                x.fail(g.error);
                c = qt(Dt, g, t, x);
                if (!c) {
                    u(-1, "No Transport")
                } else {
                    x.readyState = 1;
                    if (m) {
                        y.trigger("ajaxSend", [x, g])
                    }
                    if (h) {
                        return x
                    }
                    if (g.async && g.timeout > 0) {
                        p = k.setTimeout(function() {
                            x.abort("timeout")
                        }, g.timeout)
                    }
                    try {
                        h = false;
                        c.send(o, u)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        u(-1, e)
                    }
                }

                function u(e, t, n, r) {
                    var i, a, o, s, l, u = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (p) {
                        k.clearTimeout(p)
                    }
                    c = undefined;
                    d = r || "";
                    x.readyState = e > 0 ? 4 : 0;
                    i = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        s = It(g, x, n)
                    }
                    s = Rt(g, s, x, i);
                    if (i) {
                        if (g.ifModified) {
                            l = x.getResponseHeader("Last-Modified");
                            if (l) {
                                T.lastModified[f] = l
                            }
                            l = x.getResponseHeader("etag");
                            if (l) {
                                T.etag[f] = l
                            }
                        }
                        if (e === 204 || g.type === "HEAD") {
                            u = "nocontent"
                        } else if (e === 304) {
                            u = "notmodified"
                        } else {
                            u = s.state;
                            a = s.data;
                            o = s.error;
                            i = !o
                        }
                    } else {
                        o = u;
                        if (e || !u) {
                            u = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    x.status = e;
                    x.statusText = (t || u) + "";
                    if (i) {
                        _.resolveWith(v, [a, u, x])
                    } else {
                        _.rejectWith(v, [x, u, o])
                    }
                    x.statusCode(w);
                    w = undefined;
                    if (m) {
                        y.trigger(i ? "ajaxSuccess" : "ajaxError", [x, g, i ? a : o])
                    }
                    b.fireWith(v, [x, u]);
                    if (m) {
                        y.trigger("ajaxComplete", [x, g]);
                        if (!--T.active) {
                            T.event.trigger("ajaxStop")
                        }
                    }
                }
                return x
            },
            getJSON: function(e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return T.get(e, undefined, t, "script")
            }
        });
        T.each(["get", "post"], function(e, i) {
            T[i] = function(e, t, n, r) {
                if (T.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return T.ajax(T.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, T.isPlainObject(e) && e))
            }
        });
        T._evalUrl = function(e) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        T.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (T.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = T(e, this[0].ownerDocument).eq(0).clone(true);
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
                if (T.isFunction(n)) {
                    return this.each(function(e) {
                        T(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = T(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = T.isFunction(t);
                return this.each(function(e) {
                    T(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    T(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        T.expr.pseudos.hidden = function(e) {
            return !T.expr.pseudos.visible(e)
        };
        T.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        T.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Ht = {
                0: 200,
                1223: 204
            },
            Ft = T.ajaxSettings.xhr();
        g.cors = !!Ft && "withCredentials" in Ft;
        g.ajax = Ft = !!Ft;
        T.ajaxTransport(function(i) {
            var a, o;
            if (g.cors || Ft && !i.crossDomain) {
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
                                        t(Ht[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
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
        T.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    T.globalEval(e);
                    return e
                }
            }
        });
        T.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        T.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, i;
                return {
                    send: function(e, t) {
                        r = T("<script>").prop({
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
        var Bt = [],
            zt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Bt.pop() || T.expando + "_" + vt++;
                this[e] = true;
                return e
            }
        });
        T.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, a, o = e.jsonp !== false && (zt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && zt.test(e.data) && "data");
            if (o || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (o) {
                    e[o] = e[o].replace(zt, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!a) {
                        T.error(r + " was not called")
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
                        T(k).removeProp(r)
                    } else {
                        k[r] = i
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Bt.push(r)
                    }
                    if (a && T.isFunction(i)) {
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
        T.parseHTML = function(e, t, n) {
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
            i = A.exec(e);
            a = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = me([e], t, a);
            if (a && a.length) {
                T(a).remove()
            }
            return T.merge([], i.childNodes)
        };
        T.fn.load = function(e, t, n) {
            var r, i, a, o = this,
                s = e.indexOf(" ");
            if (s > -1) {
                r = dt(e.slice(s));
                e = e.slice(0, s)
            }
            if (T.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                i = "POST"
            }
            if (o.length > 0) {
                T.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments;
                    o.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    o.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            T.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        T.expr.pseudos.animated = function(t) {
            return T.grep(T.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Wt(e) {
            return T.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        T.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, o, s, l, u, c = T.css(e, "position"),
                    f = T(e),
                    d = {};
                if (c === "static") {
                    e.style.position = "relative"
                }
                s = f.offset();
                a = T.css(e, "top");
                l = T.css(e, "left");
                u = (c === "absolute" || c === "fixed") && (a + l).indexOf("auto") > -1;
                if (u) {
                    r = f.position();
                    o = r.top;
                    i = r.left
                } else {
                    o = parseFloat(a) || 0;
                    i = parseFloat(l) || 0
                }
                if (T.isFunction(t)) {
                    t = t.call(e, n, T.extend({}, s))
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
                    f.css(d)
                }
            }
        };
        T.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        T.offset.setOffset(this, t, e)
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
                    n = Wt(i);
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
                if (T.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!T.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + T.css(e[0], "borderTopWidth", true),
                        left: r.left + T.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - T.css(n, "marginTop", true),
                    left: t.left - r.left - T.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && T.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || ge
                })
            }
        });
        T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var a = "pageYOffset" === i;
            T.fn[t] = function(e) {
                return W(this, function(e, t, n) {
                    var r = Wt(e);
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
        T.each(["top", "left"], function(e, n) {
            T.cssHooks[n] = He(g.pixelPosition, function(e, t) {
                if (t) {
                    t = Re(e, n);
                    return $e.test(t) ? T(e).position()[n] + "px" : t
                }
            })
        });
        T.each({
            Height: "height",
            Width: "width"
        }, function(o, s) {
            T.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function(r, a) {
                T.fn[a] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        i = r || (e === true || t === true ? "margin" : "border");
                    return W(this, function(e, t, n) {
                        var r;
                        if (T.isWindow(e)) {
                            return a.indexOf("outer") === 0 ? e["inner" + o] : e.document.documentElement["client" + o]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])
                        }
                        return n === undefined ? T.css(e, t, i) : T.style(e, t, n, i)
                    }, s, n ? e : undefined, n)
                }
            })
        });
        T.fn.extend({
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
        T.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return T
            })
        }
        var Ut = k.jQuery,
            Kt = k.$;
        T.noConflict = function(e) {
            if (k.$ === T) {
                k.$ = Kt
            }
            if (e && k.jQuery === T) {
                k.jQuery = Ut
            }
            return T
        };
        if (!e) {
            k.jQuery = k.$ = T
        }
        return T
    });
    (function(e, n, t) {
        function r(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }

        function v(e) {
            if ("keypress" == e.type) {
                var t = String.fromCharCode(e.which);
                e.shiftKey || (t = t.toLowerCase());
                return t
            }
            return s[e.which] ? s[e.which] : o[e.which] ? o[e.which] : String.fromCharCode(e.which).toLowerCase()
        }

        function i(e) {
            var t = [];
            e.shiftKey && t.push("shift");
            e.altKey && t.push("alt");
            e.ctrlKey && t.push("ctrl");
            e.metaKey && t.push("meta");
            return t
        }

        function y(e) {
            return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
        }

        function _(e, t) {
            var n, r, i, a = [];
            n = e;
            "+" === n ? n = ["+"] : (n = n.replace(/\+{2}/g, "+plus"), n = n.split("+"));
            for (i = 0; i < n.length; ++i) r = n[i], u[r] && (r = u[r]), t && "keypress" != t && l[r] && (r = l[r], a.push("shift")), y(r) && a.push(r);
            n = r;
            i = t;
            if (!i) {
                if (!c) {
                    c = {};
                    for (var o in s) 95 < o && 112 > o || s.hasOwnProperty(o) && (c[s[o]] = o)
                }
                i = c[n] ? "keydown" : "keypress"
            }
            "keypress" == i && a.length && (i = "keydown");
            return {
                key: r,
                modifiers: a,
                action: i
            }
        }

        function a(e, t) {
            return null === e || e === n ? !1 : e === t ? !0 : a(e.parentNode, t)
        }

        function b(e) {
            function l(e) {
                e = e || {};
                var t = !1,
                    n;
                for (n in d) e[n] ? t = !0 : d[n] = 0;
                t || (g = !1)
            }

            function s(e, t, n, r, i, a) {
                var o, s, l = [],
                    u = n.type;
                if (!f._callbacks[e]) return [];
                "keyup" == u && y(e) && (t = [e]);
                for (o = 0; o < f._callbacks[e].length; ++o)
                    if (s = f._callbacks[e][o], (r || !s.seq || d[s.seq] == s.level) && u == s.action) {
                        var c;
                        (c = "keypress" == u && !n.metaKey && !n.ctrlKey) || (c = s.modifiers, c = t.sort().join(",") === c.sort().join(","));
                        c && (c = r && s.seq == r && s.level == a, (!r && s.combo == i || c) && f._callbacks[e].splice(o, 1), l.push(s))
                    } return l
            }

            function u(e, t, n, r) {
                f.stopCallback(t, t.target || t.srcElement, n, r) || !1 !== e(t, n) || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0)
            }

            function t(e) {
                "number" !== typeof e.which && (e.which = e.keyCode);
                var t = v(e);
                t && ("keyup" == e.type && h === t ? h = !1 : f.handleKey(t, i(e), e))
            }

            function o(t, e, n, r) {
                function i(e) {
                    return function() {
                        g = e;
                        ++d[t];
                        clearTimeout(p);
                        p = setTimeout(l, 1e3)
                    }
                }

                function a(e) {
                    u(n, e, t);
                    "keyup" !== r && (h = v(e));
                    setTimeout(l, 10)
                }
                for (var o = d[t] = 0; o < e.length; ++o) {
                    var s = o + 1 === e.length ? a : i(r || _(e[o + 1]).action);
                    c(e[o], s, r, t, o)
                }
            }

            function c(e, t, n, r, i) {
                f._directMap[e + ":" + n] = t;
                e = e.replace(/\s+/g, " ");
                var a = e.split(" ");
                1 < a.length ? o(e, a, t, n) : (n = _(e, n), f._callbacks[n.key] = f._callbacks[n.key] || [], s(n.key, n.modifiers, {
                    type: n.action
                }, r, e, i), f._callbacks[n.key][r ? "unshift" : "push"]({
                    callback: t,
                    modifiers: n.modifiers,
                    action: n.action,
                    seq: r,
                    level: i,
                    combo: e
                }))
            }
            var f = this;
            e = e || n;
            if (!(f instanceof b)) return new b(e);
            f.target = e;
            f._callbacks = {};
            f._directMap = {};
            var d = {},
                p, h = !1,
                m = !1,
                g = !1;
            f._handleKey = function(e, t, n) {
                var r = s(e, t, n),
                    i;
                t = {};
                var a = 0,
                    o = !1;
                for (i = 0; i < r.length; ++i) r[i].seq && (a = Math.max(a, r[i].level));
                for (i = 0; i < r.length; ++i) r[i].seq ? r[i].level == a && (o = !0, t[r[i].seq] = 1, u(r[i].callback, n, r[i].combo, r[i].seq)) : o || u(r[i].callback, n, r[i].combo);
                r = "keypress" == n.type && m;
                n.type != g || y(e) || r || l(t);
                m = o && "keydown" == n.type
            };
            f._bindMultiple = function(e, t, n) {
                for (var r = 0; r < e.length; ++r) c(e[r], t, n)
            };
            r(e, "keypress", t);
            r(e, "keydown", t);
            r(e, "keyup", t)
        }
        if (e) {
            var s = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                },
                o = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                },
                l = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                },
                u = {
                    option: "alt",
                    command: "meta",
                    return: "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                },
                c;
            for (t = 1; 20 > t; ++t) s[111 + t] = "f" + t;
            for (t = 0; 9 >= t; ++t) s[t + 96] = t.toString();
            b.prototype.bind = function(e, t, n) {
                e = e instanceof Array ? e : [e];
                this._bindMultiple.call(this, e, t, n);
                return this
            };
            b.prototype.unbind = function(e, t) {
                return this.bind.call(this, e, function() {}, t)
            };
            b.prototype.trigger = function(e, t) {
                if (this._directMap[e + ":" + t]) this._directMap[e + ":" + t]({}, e);
                return this
            };
            b.prototype.reset = function() {
                this._callbacks = {};
                this._directMap = {};
                return this
            };
            b.prototype.stopCallback = function(e, t) {
                return -1 < (" " + t.className + " ").indexOf(" mousetrap ") || a(t, this.target) ? !1 : "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable
            };
            b.prototype.handleKey = function() {
                return this._handleKey.apply(this, arguments)
            };
            b.addKeycodes = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t]);
                c = null
            };
            b.init = function() {
                var t = b(n),
                    e;
                for (e in t) "_" !== e.charAt(0) && (b[e] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(e))
            };
            b.init();
            e.Mousetrap = b;
            "undefined" !== typeof module && module.exports && (module.exports = b);
            "function" === typeof define && define.amd && define(function() {
                return b
            })
        }
    })("undefined" !== typeof window ? window : null, "undefined" !== typeof window ? document : null);

    function c(e) {
        this.tests = e
    }
    c.prototype.run = function(e) {
        var t = {
            testResults: {},
            totalPoints: 0,
            set: []
        };
        var n;
        for (var r in this.tests) {
            if ((typeof e.level == "undefined" && typeof this.tests[r].level == "undefined" || e.level === this.tests[r].level) && typeof this.tests[r].method == "function") {
                if (typeof this.tests[r].preMethod == "function") {
                    this.tests[r].preMethod.call(this, e)
                }
                n = this.tests[r].method.call(this, e);
                t.testResults[r] = {
                    testInfo: this.tests[r],
                    result: n
                };
                if (typeof n != "undefined") {
                    if (n.constructor === Array) {
                        t.set = t.set.concat(n)
                    } else if (typeof n == "boolean") {
                        t.totalPoints += n ? typeof this.tests[r].points != "undefined" ? this.tests[r].points : 1 : 0
                    } else if (typeof n == "number") {
                        t.totalPoints += n
                    } else if (typeof n == "string" && !isNaN(n)) {
                        t.totalPoints *= n
                    }
                }
            }
        }
        return t
    };
    c.prototype.runOnImageElementSet = function(n) {
        var e = {
            runResults: [],
            set: []
        };
        var t = n;
        var r;
        for (var i in n.imageElementSet) {
            t.imageElement = n.imageElementSet[i];
            r = this.run(n);
            e.runResults[i] = {
                imageElement: n.imageElementSet[i],
                result: r
            }
        }
        e.runResults.sort(function(e, t) {
            if (e.result.totalPoints < t.result.totalPoints) {
                return typeof n.sort == "undefined" || n.sort != "asc" ? 1 : -1
            } else if (e.result.totalPoints > t.result.totalPoints) {
                return typeof n.sort == "undefined" || n.sort != "asc" ? -1 : 1
            }
            return 0
        });
        for (var i in e.runResults) {
            if (typeof n.filter == "undefined" || n.filter(e.runResults[i].result)) {
                e.set.push(e.runResults[i].imageElement)
            }
        }
        return e
    };

    function y(e) {
        c.apply(this, arguments);
        this.tests = {
            searchInForm: {
                method: function(e) {
                    return $(e.inputElement).closest("form").find("img").toArray()
                }
            },
            searchEverywhere: {
                method: function(e) {
                    return $(e.document).find("img").toArray()
                },
                level: 2
            }
        }
    }
    y.prototype = Object.create(c.prototype);
    y.prototype.constructor = y;

    function _(e) {
        c.apply(this, arguments);
        this.tests = e ? e : {
            suitableSizeByWebVisum: {
                method: function(e) {
                    var t = {
                        widthMin: 5,
                        widthMax: 800,
                        heightMin: 5,
                        heightMax: 600,
                        minArea: 17 * 17
                    };
                    return !(e.imageElement.width >= t.widthMin && e.imageElement.width <= t.widthMax && e.imageElement.height >= t.heightMin && e.imageElement.height <= t.heightMax && e.imageElement.width * e.imageElement.height > t.minArea);
                    return false
                }
            },
            isVisibleForUser: {
                method: function(e) {
                    return e.imageElement.offsetHeight == 0 || e.imageElement.offsetWidth == 0
                }
            },
            rumolaImageChecks: {
                method: function(e) {
                    try {
                        if (!e.imageElement.src) return true;
                        if (e.imageElement.src.length < 5) return true;
                        if (e.imageElement.style.visibility == "hidden") return true;
                        if (e.imageElement.style.display == "none") return true;
                        if (e.imageElement.width <= 5) return true;
                        if (e.imageElement.width >= 650) return true;
                        if (e.imageElement.height < 5) return true;
                        if (e.imageElement.height > 250) return true
                    } catch (e) {}
                    return false
                }
            },
            maxDistance: {
                preMethod: function(e) {
                    if (typeof e.distances != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            distance: g(e.inputElement, e.imageElementSet[n])
                        }
                    }
                    e.distances = t
                },
                method: function(e) {
                    for (var t in e.distances) {
                        if (e.distances[t].element == e.imageElement && e.distances[t].distance > 500) {
                            return true
                        }
                    }
                }
            }
        }
    }
    _.prototype = Object.create(c.prototype);
    _.prototype.constructor = _;

    function b(e) {
        c.apply(this, arguments);
        this.tests = {
            rumolaImageSrcFilterTest: {
                method: function(e) {
                    var t = ["[ck]apt?cha", "robot", "random", "rnd", "code", "kod", "geraimag", "verif"];
                    var n = 0;
                    for (var r in t) {
                        if (new RegExp(t[r], "img").test(e.imageElement.src)) {
                            n += 1
                        }
                    }
                    return n
                }
            },
            securimageImageSrcFilterTest: {
                method: function(e) {
                    return /securimage_show/i.test(e.imageElement.src)
                }
            },
            mailRuImageSrcFilterTest: {
                method: function(e) {
                    return /c\.mail\.ru/i.test(e.imageElement.src)
                }
            },
            webVisumPattern: {
                method: function(e) {
                    var t = w(e.imageElement);
                    var n = [{
                        pattern: "captcha",
                        weight: 1
                    }, {
                        pattern: "captha",
                        weight: 1
                    }, {
                        pattern: "captch",
                        weight: 1
                    }, {
                        pattern: "/fp/sec/f/",
                        weight: 2
                    }, {
                        pattern: "fastchange.cc/captha",
                        weight: 1
                    }, {
                        pattern: "\\.((jpg)|(gif)|(png)|(jpeg))[ '\"]",
                        weight: -1
                    }, {
                        pattern: "\\?",
                        weight: 1
                    }, {
                        pattern: "[a-f0-9]{32}",
                        weight: 1
                    }, {
                        pattern: "[a-z0-9_\\-]{20}",
                        weight: 1
                    }, {
                        pattern: "security",
                        weight: 1
                    }, {
                        pattern: "code",
                        weight: 1
                    }, {
                        pattern: "token",
                        weight: 1
                    }, {
                        pattern: "\\.((php)|(cgi)|(asp)|(ashx)|(cfm)|(jsp)|(rb)|(pl)|(py)|(htm)|(html))",
                        weight: 1
                    }, {
                        pattern: "(verify|verification)",
                        weight: 1
                    }, {
                        pattern: "human",
                        weight: 1
                    }, {
                        pattern: "robot",
                        weight: 1
                    }, {
                        pattern: "turing",
                        weight: 1
                    }, {
                        pattern: "kontrollbild",
                        weight: 1
                    }, {
                        pattern: "validation",
                        weight: 1
                    }, {
                        pattern: "formshield",
                        weight: 1
                    }, {
                        pattern: "fetchregimage",
                        weight: 2
                    }, {
                        pattern: "capture",
                        weight: 1
                    }, {
                        pattern: 'id="cimg"',
                        weight: 1
                    }, {
                        pattern: "forgot_password:imgSecurity2",
                        weight: 2
                    }, {
                        pattern: "LoadBotImage",
                        weight: 1
                    }, {
                        pattern: "Captcha\\.jpg",
                        weight: 1
                    }, {
                        pattern: "imgcode1",
                        weight: 1
                    }, {
                        pattern: "imgSecurityCode",
                        weight: 1
                    }, {
                        pattern: "counter.yadro.ru",
                        weight: -1
                    }, {
                        pattern: "genimage\\.php",
                        weight: 1
                    }];
                    var r = 0;
                    for (var i in n) {
                        if (new RegExp(n[i].pattern, "img").test(t)) {
                            r += n[i].weight
                        }
                    }
                    return r
                }
            },
            distanceInPixelsBetweeenElements: {
                preMethod: function(e) {
                    if (typeof e.distances != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            distance: g(e.inputElement, e.imageElementSet[n])
                        }
                    }
                    t.sort(function(e, t) {
                        if (e.distance < t.distance) {
                            return -1
                        } else if (e.distance > t.distance) {
                            return 1
                        }
                        return 0
                    });
                    for (var n in t) {
                        switch (n * 1) {
                            case 0:
                                t[n].internalPoints = "1.2";
                                break;
                            case 1:
                                t[n].internalPoints = "1.1";
                                break;
                            case 2:
                                t[n].internalPoints = "1.1";
                                break;
                            default:
                                t[n].internalPoints = "1"
                        }
                    }
                    e.distances = t
                },
                method: function(e) {
                    for (var t in e.distances) {
                        if (e.distances[t].element == e.imageElement) {
                            return e.distances[t].internalPoints
                        }
                    }
                }
            },
            biggerAreaSize: {
                preMethod: function(e) {
                    if (typeof e.sizes != "undefined") {
                        return
                    }
                    var t = [];
                    for (var n in e.imageElementSet) {
                        t[n] = {
                            element: e.imageElementSet[n],
                            size: e.imageElementSet[n].width * e.imageElementSet[n].height
                        }
                    }
                    t.sort(function(e, t) {
                        if (e.size < t.size) {
                            return 1
                        } else if (e.size > t.size) {
                            return -1
                        }
                        return 0
                    });
                    var r = t[0].size;
                    for (var n in t) {
                        if (t[n].size == r) {
                            t[n].internalPoints = "1.1"
                        } else {
                            t[n].internalPoints = "1"
                        }
                    }
                    e.sizes = t
                },
                method: function(e) {
                    for (var t in e.sizes) {
                        if (e.sizes[t].element == e.imageElement) {
                            return e.sizes[t].internalPoints
                        }
                    }
                }
            }
        }
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.constructor = b;

    function j(e) {
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

    function f(e) {
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

    function C(e) {
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
                p(i);
                if (i.get(0)) {
                    return i.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function p(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                p($(this))
            }
        })
    }

    function T(e) {
        var t = j(e);
        t.pathname = "";
        t.search = "";
        t.hash = "";
        return t.href
    }

    function h(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var m = function(e) {
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
    var g = function(e, t) {
        var n = m(e);
        var r = m(t);
        return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
    };
    var w = function() {
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

    function x() {
        return Math.floor(Date.now() / 1e3)
    }

    function S(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function O() {
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

    function M(e) {
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

    function A(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var i = 0; i < Math.ceil(n.length / r); i++) {
            t += String.fromCharCode.apply(null, n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function q(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function I(e, i) {
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

    function R(n, o, e) {
        var s = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (s.height == 0 && s.width == 0 && s.left == 0 && s.right == 0 && s.bottom == 0 && s.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    R(n, o, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (s.left < 0 || s.top < 0 || s.right >= E() || s.bottom >= N()) {
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
            var l = {
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
                    if (l.nextSibling) {
                        l.parent.insertBefore(n, l.nextSibling)
                    } else {
                        l.parent.appendChild(n)
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

    function E() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function N() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function H(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function F(e, t, n) {
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
                a = F(e, true, n)
            } else {
                return null
            }
        }
        return a
    }

    function B() {
        var e = true;
        if (window && window.location && window.location.href && window.location.href.indexOf("www.fdworlds.net") != -1) {
            e = false
        }
        return e
    }

    function L(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function z(t, n, r) {
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

    function W(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function U(e, t, n) {
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

    function K(e) {
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

    function V(e) {
        $.ajax("//azcaptcha/saveStatistics", {
            method: "POST",
            crossDomain: true,
            data: JSON.stringify(e),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function G() {
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

    function X(e, t) {
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

    function Q(e) {
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

    function Y(e, t, n, r, i, a, o) {
        var s = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: a,
                solving_error: o ? Q(o) : null,
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
        $.ajax("https://azcaptcha.com/saveStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(s),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function J(r) {
        $.ajax(n, {
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

    function Z(r) {
        $.ajax(a, {
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

    function ee(e, t, n) {
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
            r.errorText = te(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function te(e) {
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
    }
    var ne;
    $(document).ready(function() {
        var g;
        var v = null;
        var y = [];
        var _ = $.Callbacks();
        var e = $.Callbacks();
        var a = $.Callbacks();
        var t = $.Callbacks();
        var o = $.Callbacks();
        var s = $.Callbacks();
        var l = $.Callbacks();
        var u = $.Callbacks();
        var c = $.Callbacks();
        var n = ["new", "error", "expired"];

        function r(e) {
            return n.indexOf(e.getStatus()) !== -1
        }

        function f(e) {
            return ["new", "error", "solved", "expired"].indexOf(e.getStatus()) !== -1
        }
        _.add(function(n) {
            if (!r(n)) {
                return
            }
            n.setStatus("waiting");
            $.when($.Deferred(function(t) {
                if (typeof g.solve_only_presented_recaptcha2 === "undefined" || !g.solve_only_presented_recaptcha2) {
                    t.resolve()
                } else {
                    if (!n.visibility_check_interval) {
                        n.visibility_check_interval = setInterval(function() {
                            for (var e in n.representatives) {
                                if (w(n.representatives[e])) {
                                    clearInterval(n.visibility_check_interval);
                                    t.resolve();
                                    return
                                } else {}
                            }
                        }, 200)
                    } else {}
                }
            }), $.Deferred(function(t) {
                if (typeof g.start_recaptcha2_solving_when_challenge_shown === "undefined" || !g.start_recaptcha2_solving_when_challenge_shown) {
                    t.resolve()
                }
                if (!n.challenge_shown_check_interval) {
                    n.challenge_shown_check_interval = setInterval(function() {
                        var e = document.getElementsByTagName("iframe");
                        for (i = 0; i < e.length; i++) {
                            if (e[i].src.indexOf("www.google.com/recaptcha/api2/bframe") != -1 && e[i].src.indexOf(n.siteKey) != -1) {
                                if (!$(e[i]).is(":hidden") && !$(e[i]).parents().filter(function() {
                                        return this.style.visibility == "hidden"
                                    }).length) {
                                    clearInterval(n.challenge_shown_check_interval);
                                    n.challenge_shown_iframe_determinant = e[i].src;
                                    n.challenge_shown_iframe_name = e[i].name;
                                    if (g.start_recaptcha2_solving_when_challenge_shown) {
                                        t.resolve()
                                    } else {}
                                    break
                                }
                            }
                        }
                    }, 200)
                } else {}
            })).done(function() {
                e.fire(n)
            })
        });
        e.add(function(e) {
            p(e)
        });
        a.add(function(e, t) {
            t.setStatus("error")
        });
        a.add(function(e, t) {
            t.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("error");
            t.html_elements.$antigate_solver_status.text(e.message);
            console.error(e);
            if (typeof e.message != "undefined" && (e.message.toLowerCase().indexOf("task you are requesting does not exist") !== -1 || e.message.toLowerCase().indexOf("no idle workers") !== -1)) {
                t.html_elements.$antigate_solver_status.append("<br /> One more attempt in 2 seconds");
                X("minorError", g);
                setTimeout(function() {
                    d(t)
                }, 2e3)
            } else {
                X("error", g)
            }
        });
        t.add(function(e) {
            e.html_elements.$antigate_solver_control.attr("title", "").text("").removeClass().addClass("control");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha");
            e.html_elements.$antigate_solver_status.text("Azcaptcha");
            e.html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").remove()
        });
        o.add(function(e) {
            e.setStatus("solving")
        });
        o.add(function(e) {
            e.html_elements.$antigate_solver_status.text("Solving is in process...");
            e.html_elements.$antigate_solver.addClass("in_process");
            X("newCaptcha", g)
        });
        s.add(function(e) {
            e.setStatus("solved")
        });
        s.add(function(e, t) {
            e.html_elements.$antigate_solver_status.text("Solved");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("solved");
            X("success", g);
            e.html_elements.$grecaptcha_anchor_frame_container.append('<img src="' + chrome.extension.getURL("img/flag_blue.png") + '" alt="Recaptcha solved" class="solved_flag" />');
            e.html_elements.$grecaptcha_response.val(t);
            for (var n in e.representatives) {
                e.representatives[n].is_visible_on_finish = w(e.representatives[n])
            }
        });
        l.add(function(e) {
            e.setStatus("expired")
        });
        l.add(function(e) {
            e.html_elements.$antigate_solver_control.text("");
            e.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("outdatedRecaptchaTitle") + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
            e.html_elements.$antigate_solver_control.removeClass().addClass("control").addClass("reload");
            e.html_elements.$antigate_solver.removeClass().addClass("antigate_solver recaptcha").addClass("error");
            e.html_elements.$antigate_solver_status.text("Outdated, should be solved again");
            X("minorError", g);
            e.html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").remove();
            e.html_elements.$grecaptcha_response.val("")
        });
        c.add(function(e, t) {
            var n = {
                siteKey: e.siteKey,
                task_solution: t,
                challenge_shown_iframe_determinant: e.challenge_shown_iframe_determinant,
                challenge_shown_iframe_name: e.challenge_shown_iframe_name,
                requested_from_api_representative_determinant: e.requested_from_api_representative_determinant,
                solve_recaptcha2: g.solve_recaptcha2,
                solve_invisible_recaptcha: g.solve_invisible_recaptcha
            };
            var r = "(" + function(o) {
                var e = false;
                var t = {};
                if (document.currentScript && document.currentScript.dataset && document.currentScript.dataset["parameters"]) {
                    try {
                        t = JSON.parse(document.currentScript.dataset["parameters"])
                    } catch (e) {}
                }
                if (t.requested_from_api_representative_determinant) {
                    e = n(t);
                    if (e !== false) {
                        return
                    }
                }
                if (!e) {
                    e = i(t);
                    if (e !== false) {
                        return
                    }
                }
                if (t.challenge_shown_iframe_name || t.challenge_shown_iframe_determinant) {
                    e = r(t);
                    if (e !== false) {
                        return
                    }
                }

                function n(e) {
                    var t = null;
                    try {
                        t = document.querySelector(e.requested_from_api_representative_determinant)
                    } catch (e) {}
                    if (t) {
                        var n = s(___grecaptcha_cfg.clients, function(e, t) {
                            return t && typeof t.nodeName == "string" && t.nodeName.toLowerCase() == "div" && e == t
                        }.bind(null, t), 3);
                        if (n && n.element && n.keys.length && typeof n.keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[n.keys[0]] !== "undefined") {
                            l(___grecaptcha_cfg.clients[n.keys[0]], o, 1, 2);
                            return n.keys[0]
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                }

                function r(e) {
                    var t = s(___grecaptcha_cfg.clients, function(e, t, n) {
                        return n && typeof n.nodeName == "string" && n.nodeName.toLowerCase() == "iframe" && (e && typeof n.name == "string" && n.name == e || t && typeof n.src == "string" && n.src == t)
                    }.bind(null, e.challenge_shown_iframe_name, e.challenge_shown_iframe_determinant), 3);
                    if (t && t.element && t.keys.length && typeof t.keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[t.keys[0]] !== "undefined") {
                        l(___grecaptcha_cfg.clients[t.keys[0]], o, 1, 2);
                        return t.keys[0]
                    } else {
                        return false
                    }
                }

                function i(e) {
                    var t = [];
                    for (var n in ___grecaptcha_cfg.clients) {
                        var r = function(e, t) {
                            return t && typeof t.nodeName == "string" && typeof t.innerHTML == "string" && t.innerHTML.indexOf("iframe") !== -1 && t.innerHTML.indexOf("recaptcha/api2/anchor") !== -1 && t.innerHTML.indexOf(e) !== -1 && (t.offsetHeight != 0 || t.childNodes.length && t.childNodes[0].offsetHeight != 0)
                        };
                        var i;
                        if (typeof Function.prototype.bind !== "undefined" && Function.prototype.bind.toString().indexOf("[native code]") !== -1) {
                            i = r.bind(null, e.siteKey)
                        } else {
                            i = function() {
                                return r.apply(null, [e.siteKey].concat(Array.from(arguments)))
                            }
                        }
                        var a = s(___grecaptcha_cfg.clients[n], i, 1);
                        if (a.element) {
                            a.keys.unshift(n);
                            a.is_invisible_recaptcha = a.element.innerHTML.indexOf("grecaptcha-badge") !== -1 && a.element.innerHTML.indexOf("grecaptcha-logo") !== -1;
                            if (!e.solve_recaptcha2 && !a.is_invisible_recaptcha || !e.solve_invisible_recaptcha && a.is_invisible_recaptcha) {
                                continue
                            }
                            t.push(a)
                        }
                    }
                    if (t.length === 1 && t[0].element && t[0].keys.length && typeof t[0].keys[0] !== "undefined" && typeof ___grecaptcha_cfg.clients[t[0].keys[0]] !== "undefined") {
                        l(___grecaptcha_cfg.clients[t[0].keys[0]], o, 1, 2);
                        return t[0].keys[0]
                    }
                    return false
                }

                function s(e, t, n, r) {
                    var i = {
                        element: null,
                        keys: []
                    };
                    if (typeof r == "undefined") {
                        r = 1
                    }
                    if (typeof n == "undefined") {
                        n = 1
                    }
                    if (r > n) {
                        return i
                    }
                    for (var a in e) {
                        try {
                            if (t(e[a])) {
                                i.element = e[a];
                                i.keys.push(a);
                                break
                            } else if (r < n) {
                                i = s(e[a], t, n, r + 1);
                                if (i.element) {
                                    i.keys.unshift(a);
                                    break
                                }
                            }
                        } catch (e) {}
                    }
                    return i
                }

                function l(e, t, n, r) {
                    var i = 0;
                    for (var a in e) {
                        i++;
                        if (i > 15) {
                            break
                        }
                        try {
                            if (typeof e[a] == "object" && n <= r) {
                                if (l(e[a], t, n + 1, r)) {
                                    return true
                                }
                            } else if (a == "callback") {
                                if (typeof e[a] == "function") {
                                    e[a](t);
                                    return true
                                } else if (typeof e[a] == "string" && typeof window[e[a]] == "function") {
                                    window[e[a]](t);
                                    return true
                                }
                            }
                        } catch (e) {}
                    }
                    return false
                }
            } + ')("' + t + '");';
            var i = document.createElement("script");
            i.dataset["parameters"] = JSON.stringify(n);
            i.textContent = r;
            (document.head || document.documentElement).appendChild(i);
            if (g.auto_submit_form) {
                if (e.html_elements.$grecaptcha_container.first().closest("form").find("input[type=submit]").length == 1) {
                    e.html_elements.$grecaptcha_container.first().closest("form").find("input[type=submit]").click()
                } else if (e.html_elements.$grecaptcha_container.first().closest("form").length) {
                    e.html_elements.$grecaptcha_container.first().closest("form").submit()
                } else if (e.html_elements.$grecaptcha_container.first().parent().siblings("input[type=submit]").length) {
                    e.html_elements.$grecaptcha_container.first().parent().siblings("input[type=submit]").eq(0).click()
                }
            }
        });
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            g = e;
            if (e.enable) {
                if (e.solve_recaptcha2 || e.solve_invisible_recaptcha) {
                    if (e.account_key && e.account_key_checked) {
                        h()
                    } else if (e.profile_user_info && e.free_attempts_left_count) {
                        h(e.profile_user_info)
                    }
                } else {}
                if (e.dont_reuse_recaptcha_solution) {
                    n.push("solved")
                }
            }
        });
        ne = m;

        function d(e) {
            if (f(e)) {
                p(e)
            }
        }

        function p(r) {
            t.fire(r);
            for (var e in r.representatives) {
                r.representatives[e].is_visible_on_start = w(r.representatives[e])
            }
            if (r.freshness_lifetime_timeout) {
                clearTimeout(r.freshness_lifetime_timeout)
            }
            if (r.freshness_countdown_interval) {
                clearInterval(r.freshness_countdown_interval)
            }
            r.Azcaptcha.createTaskProxyless(function(e, t, n) {
                H(n);
                if (e) {
                    a.fire(e, r);
                    return
                }
                o.fire(r);
                r.Azcaptcha.getTaskSolution(t, function(e, t, n) {
                    H(n);
                    if (e) {
                        a.fire(e, r);
                        return
                    }
                    s.fire(r, t);
                    c.fire(r, t);
                    u.fire(r, n)
                }, 0, X.bind(null, "inProcess", g))
            })
        }
        u.add(function(n, e) {
            var t = 110;
            if (typeof e.lifetime !== "undefined") {
                t = e.lifetime
            }
            var r = 30;
            var i = t - 30;
            if (i < 0) {
                r = r + i;
                i = 0
            }
            n.freshness_lifetime_timeout = setTimeout(function() {
                n.html_elements.$antigate_solver.addClass("pulsate");
                n.html_elements.$antigate_solver_control.attr("tabindex", 0);
                n.html_elements.$antigate_solver_control.addClass("reload active");
                var e = r;
                n.html_elements.$antigate_solver_control.text(e);
                n.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                n.freshness_countdown_interval = setInterval(function() {
                    e--;
                    n.html_elements.$antigate_solver_control.text(e);
                    n.html_elements.$antigate_solver_control.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("agingRecaptchaTitle").replace("%s", e) + " " + chrome.i18n.getMessage("refreshRecaptchaTitle"));
                    if (e <= 0) {
                        clearInterval(n.freshness_countdown_interval);
                        l.fire(n)
                    }
                }, 1e3);
                var t = function(e, t) {
                    if (n.freshness_countdown_interval) {
                        clearInterval(n.freshness_countdown_interval)
                    }
                    n.html_elements.$grecaptcha_response.val("");
                    n.html_elements.$antigate_solver_control.off("click keypress");
                    n.html_elements.$antigate_solver_control.removeAttr("tabindex");
                    if (t) {
                        n.html_elements.$antigate_solver_status.focus()
                    }
                    d(n)
                };
                n.html_elements.$antigate_solver_control.on("click", t);
                n.html_elements.$antigate_solver_control.on("keypress", function(e) {
                    if (e.which == 32 || e.which == 13) {
                        t(e, true)
                    }
                })
            }, i * 1e3)
        });

        function b(e) {
            if (e && !v) {
                var t = e.email + "|" + e.id;
                var n = D(t, P);
                v = btoa(n)
            }
        }

        function h(e) {
            setInterval(function() {
                $(".g-recaptcha-response" + ":not([anticaptured])" + ':not([id="g-recaptcha-response-100000"])').each(function() {
                    m.call(this, e)
                })
            }, 1e3)
        }

        function w(e) {
            return e.$representative_html_element[0].offsetHeight != 0 || $(e.response_html_element).parent()[0].offsetHeight != 0
        }

        function m(e, t) {
            b(e);
            t = !!t;
            var n = this;
            var r = $(n);
            var i = r.parent().find("iframe");
            if (!i.length || !i.attr("src")) {
                return
            }
            var a = j(i.attr("src"));
            var o = S(a.search);
            if (!o || a.search == o) {
                return
            }
            o = $.trim(decodeURIComponent(o));
            var s = null;
            if (a.search.indexOf("stoken=") != -1) {
                s = a.search.replace(/.*stoken=([^&]+)&?.*/, "$1")
            }
            var l = x(r);
            var u = l.find(".grecaptcha-badge").length;
            if (!t) {
                if (u && !g.solve_invisible_recaptcha) {
                    return
                } else if (!u && !g.solve_recaptcha2) {
                    return
                }
            }
            if (typeof y[o] === "undefined") {
                var c = "";
                if (g.use_recaptcha_accelerator && !u) {
                    try {
                        c = C(l);
                        c = btoa(c);
                        if (c.length > 2e5) {
                            c = ""
                        }
                    } catch (e) {}
                }
                y[o] = {
                    Azcaptcha: null,
                    siteKey: o,
                    stoken: s,
                    representatives: [],
                    html_elements: {
                        $antigate_solver: $(),
                        $antigate_solver_status: $(),
                        $antigate_solver_control: $(),
                        $grecaptcha_response: $(),
                        $grecaptcha_anchor_frame_container: $(),
                        $grecaptcha_anchor_frame: $(),
                        $grecaptcha_container: $()
                    },
                    status: null,
                    getStatus: function() {
                        return this.status
                    },
                    setStatus: function(e) {
                        return this.status = e
                    },
                    freshness_lifetime_timeout: null,
                    freshness_countdown_interval: null,
                    visibility_check_interval: null,
                    challenge_shown_check_interval: null,
                    challenge_shown_iframe_determinant: null,
                    challenge_shown_iframe_name: null,
                    requested_from_api: null,
                    requested_from_api_representative_determinant: null,
                    nearby_html_structure: c
                };
                y[o].setStatus("new")
            }
            if (t && !y[o].requested_from_api_representative_determinant) {
                y[o].requested_from_api_representative_determinant = $.trim(F(l.get(0)));
                y[o].requested_from_api = true
            }
            var f = {
                response_html_element: n,
                $representative_html_element: l,
                is_invisible_recaptcha: u,
                use_current_callback: false,
                requested_from_api: t,
                is_visible_on_detection: null,
                is_visible_on_start: null,
                is_visible_on_finish: null
            };
            f.is_visible_on_detection = w(f);
            y[o].representatives.push(f);
            var d = r.prev("div");
            if (y[o].html_elements.$grecaptcha_anchor_frame_container.length && y[o].html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").length) {
                d.append(y[o].html_elements.$grecaptcha_anchor_frame_container.find(".solved_flag").clone())
            }
            var p = r.parent();
            p.height("auto");
            if (!y[o].html_elements.$antigate_solver.length) {
                p.append('<div class="antigate_solver recaptcha"><a class="status">Azcaptcha</a><a class="control"></a></div>')
            } else {
                p.append(y[o].html_elements.$antigate_solver.first().clone(true))
            }
            var h = p.find(".antigate_solver.recaptcha");
            if (h.parent(".grecaptcha-badge").length) {
                h.css("cssText", "width: 256px !important;")
            }
            if (y[o].html_elements.$grecaptcha_response.length) {
                r.val(y[o].html_elements.$grecaptcha_response.val())
            }
            y[o].html_elements.$antigate_solver = y[o].html_elements.$antigate_solver.add(h);
            y[o].html_elements.$antigate_solver_status = y[o].html_elements.$antigate_solver_status.add(p.find(".antigate_solver.recaptcha a.status"));
            y[o].html_elements.$antigate_solver_control = y[o].html_elements.$antigate_solver_control.add(p.find(".antigate_solver.recaptcha a.control"));
            y[o].html_elements.$grecaptcha_response = y[o].html_elements.$grecaptcha_response.add(r);
            y[o].html_elements.$grecaptcha_anchor_frame_container = y[o].html_elements.$grecaptcha_anchor_frame_container.add(d);
            y[o].html_elements.$grecaptcha_anchor_frame = y[o].html_elements.$grecaptcha_anchor_frame.add(i);
            y[o].html_elements.$grecaptcha_container = y[o].html_elements.$grecaptcha_container.add(p);
            y[o].html_elements.$antigate_solver_status.attr("tabindex", 0);
            y[o].html_elements.$antigate_solver_status.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
            r.attr("anticaptured", "anticaptured");
            if (y[o].Azcaptcha === null) {
                if (!e || !v) {
                    var m = se(g.account_key, g.use_recaptcha_precaching)
                } else {
                    var m = se(v);
                    m.setHost("azcaptcha.com");
                    m.setPort(80)
                }
                m.setWebsiteURL(T(window.location.href));
                m.setWebsiteKey(o);
                if (s) {
                    m.setWebsiteSToken(s)
                }
                //m.setSoftId(802);
                if (typeof y[o].nearby_html_structure !== "undefined" && y[o].nearby_html_structure) {
                    m.setCustomData("nearbyHtmlStructure", y[o].nearby_html_structure);
                    m.setWebsiteURL(window.location.href)
                }
                y[o].Azcaptcha = m
            }
            _.fire(y[o])
        }

        function x(e) {
            return e.parent().parent()
        }

        function k(e, t, n) {
            var r = 0;
            for (var i in e) {
                r++;
                if (r > 15) {
                    break
                }
                try {
                    if (typeof e[i] == "object" && t <= n) {
                        return k(e[i], t + 1, n)
                    } else if (i == "callback") {
                        if (typeof e[i] == "function") {
                            return e[i]
                        } else if (typeof e[i] == "string" && typeof window[e[i]] == "function") {
                            return window[e[i]]
                        }
                        return
                    }
                } catch (e) {}
            }
        }
    });

    function re(e) {
        var t = null;
        if (typeof ae !== "undefined" && (!ae.account_key || !ae.account_key_checked) && ae.profile_user_info && ae.free_attempts_left_count) {
            t = ae.profile_user_info
        }
        $(e).find(".g-recaptcha-response:not([anticaptured])").each(function() {
            ne.call(this, t, true)
        })
    }
    var ie;
    var ae;
    $(document).ready(function() {
        var s = $();
        var l;
        var i = null;
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            ae = e;
            if (e.enable) {
                if (e.solve_funcaptcha) {
                    if (e.account_key && e.account_key_checked) {
                        t()
                    } else if (e.profile_user_info && e.free_attempts_left_count) {
                        t(e.profile_user_info)
                    }
                }
            }
        });

        function u(e) {
            if (e && !i) {
                var t = e.email + "|" + e.id;
                var n = D(t, P);
                i = btoa(n)
            }
        }

        function t(e) {
            setInterval(function() {
                $("input[name=fc-token]:not([anticaptured])").each(function() {
                    n.call(this, e)
                })
            }, 1e3)
        }

        function n(e) {
            u(e);
            var a = $(this);
            var t = a.val();
            var n = t.replace(/.*\|pk=([^\|]+)\|.*/, "$1");
            if (!$.trim(t) || !$.trim(n) || n == t) {
                return
            }
            a.attr("anticaptured", "anticaptured");
            var o = a.parent();
            o.append('<div class="antigate_solver funcaptcha"><a class="status">Azcaptcha</a></div>');
            l = a.parent().find(".antigate_solver.funcaptcha");
            s = s.add(l.find("a.status"));
            s.attr("tabindex", 0);
            s.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
            if (!e || !i) {
                var r = se(ae.account_key, ae.use_recaptcha_precaching)
            } else {
                var r = se(i);
                r.setHost("azcaptcha.com");
                r.setPort(80)
            }
            r.setWebsiteURL(T(window.location.href));
            r.setWebsitePublicKey(n);
            //r.setSoftId(802);
            r.createFunCaptchaTaskProxyless(function(e, t, n) {
                H(n);
                if (e) {
                    l.addClass("error");
                    s.text(e.message);
                    console.error(e);
                    X("error", ae);
                    return
                }
                s.text("Solving is in process...");
                l.addClass("in_process");
                X("newCaptcha", ae);
                r.getTaskSolution(t, function(e, t, n) {
                    H(n);
                    if (e) {
                        l.addClass("error");
                        s.text(e.message);
                        console.error(e);
                        X("error", ae);
                        return
                    }
                    s.text("Solved");
                    l.removeClass().addClass("antigate_solver funcaptcha").addClass("solved");
                    X("success", ae);
                    l.parent().append('<img src="' + chrome.extension.getURL("img/flag_blue.png") + '" alt="Funcaptcha solved" class="solved_flag funcaptcha" />');
                    a.val(t);
                    if (ae.auto_submit_form) {
                        if (o.closest("form").find("input[type=submit]").length == 1) {
                            o.closest("form").find("input[type=submit]").click()
                        } else if (o.closest("form").length) {
                            o.closest("form").submit()
                        } else if (o.parent().siblings("input[type=submit]").length) {
                            o.parent().siblings("input[type=submit]").eq(0).click()
                        }
                    }
                    var r = "(" + function(e) {
                        if (typeof __funcaptchaSolvedCallback === "function") {
                            __funcaptchaSolvedCallback(e)
                        }
                    } + ')("' + t + '");';
                    var i = document.createElement("script");
                    i.textContent = r;
                    i.onload = function() {
                        this.remove()
                    };
                    (document.head || document.documentElement).appendChild(i)
                })
            })
        }
        ie = n
    });

    function oe(e) {
        var t = null;
        if (typeof ae !== "undefined" && (!ae.account_key || !ae.account_key_checked) && ae.profile_user_info && ae.free_attempts_left_count) {
            t = ae.profile_user_info
        }
        $(e).find("input[name=fc-token]:not([anticaptured])").each(function() {
            ie.call(this, t)
        })
    }
    var se = function(e, t) {
        return new function(e, l) {
            l = !!l;
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
            var u = 20,
                s = 5,
                c = 2;
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
                    t = c
                }
                if (l) {
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
                if (!l) {
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
                        a.setTimeout(u * 1e3);
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
        module.exports = se
    }
    var le;
    $(document).ready(function() {
        chrome.runtime.sendMessage({
            type: "getGlobalStatus"
        }, function(e) {
            var k = e;
            if (!e.enable) {
                return
            }
            var h = null;
            var f, d;
            var C, T;
            var m;
            var S;
            var r = null;
            var A = ue("image", function() {
                f = null;
                C = null;
                S = "manual";
                p();
                o(C, T);
                L()
            });
            var t = ue("input", function() {
                d = null;
                T = null;
                S = "manual";
                p();
                o(C, T);
                L()
            });
            chrome.runtime.sendMessage({
                type: "getCaptchaDeterminer"
            }, function(e) {
                if (e) {
                    C = e.imageDeterminant;
                    T = e.inputDeterminant;
                    m = e.options;
                    S = e.source;
                    L()
                }
            });
            document.addEventListener("contextmenu", function(e) {
                r = e.target
            }, true);
            if (e.account_key && e.account_key_checked) {
                n(e)
            } else if (e.profile_user_info && e.free_attempts_left_count) {
                n(e, e.profile_user_info)
            }
            var i = Mousetrap.prototype.stopCallback.bind(null);
            Mousetrap.prototype.stopCallback = function(e, t, n) {
                if ([l, u].indexOf(n) != -1) {
                    return false
                }
                return i(e, t, n)
            };
            Mousetrap.bind([l], function(e) {
                var t = e.target.tagName.toLowerCase();
                var n = false;
                if (["img"].indexOf(t) != -1) {
                    f = e.target;
                    n = true
                } else if (["input", "textarea", "select"].indexOf(t) != -1) {
                    d = e.target;
                    n = true
                }
                if (n) {
                    p();
                    o(C, T);
                    L()
                }
            });
            Mousetrap.bind([u], a);
            chrome.runtime.onMessage.addListener(function(e, t, n) {
                if (e.type == "contextMenuClickedOnCaptchaRelated") {
                    if (e.elementType == "image" && r) {
                        if (["img"].indexOf(r.tagName.toLowerCase()) == -1) {
                            return
                        }
                        f = r
                    } else if (e.elementType == "input" && r) {
                        if (["input", "textarea", "select"].indexOf(r.tagName.toLowerCase()) == -1) {
                            return
                        }
                        if (typeof e.autosearch == "undefined" || !e.autosearch) {
                            d = r
                        } else {
                            a(null, null, r);
                            return
                        }
                    } else {
                        return
                    }
                    p();
                    o(C, T);
                    L()
                }
            });
            le = s;

            function a(e, t, n) {
                if (n) {
                    e = {
                        target: n
                    }
                }
                var r = e.target.tagName.toLowerCase();
                if (["input", "textarea", "select"].indexOf(r) != -1) {
                    d = e.target;
                    var i = new y;
                    var a = i.run({
                        document: document,
                        inputElement: d
                    });
                    if (a.set.length == 0) {
                        console.log("No possible captcha images found in form");
                        a = i.run({
                            document: document,
                            inputElement: d,
                            level: 2
                        })
                    }
                    if (a.set.length == 0) {
                        console.log("No possible captcha images found at all");
                        return
                    }
                    var o = new _;
                    var s = o.runOnImageElementSet({
                        document: document,
                        inputElement: d,
                        imageElementSet: a.set,
                        filter: function(e) {
                            return e.totalPoints == 0
                        }
                    });
                    if (s.set.length == 0) {
                        return
                    }
                    var l = new b;
                    var u = l.runOnImageElementSet({
                        document: document,
                        inputElement: d,
                        imageElementSet: s.set,
                        filter: function(e) {
                            return e.totalPoints > 0
                        }
                    });
                    if (u.set.length) {
                        for (var c in u.set) {
                            f = u.set[c];
                            break
                        }
                    }
                    p("automatic");
                    L()
                }
            }

            function n(b, e) {
                var w = null;
                if (e) {
                    w = e.email + "|" + e.id;
                    var t = D(w, P);
                    var x = btoa(t)
                }
                setInterval(function() {
                    var e = $("div[id*=adcopy-puzzle-image]");
                    if (e.length > 0 && e[0] && e.find("img").length == 0) {
                        var t = e.attr("id");
                        if (t == "adcopy-puzzle-image") {
                            t = ""
                        } else {
                            t = t.replace("adcopy-puzzle-image-", "")
                        }
                        var n = "(" + function(e) {
                            console.log("ACPuzzle change to image");
                            if (typeof ACPuzzle != "undefined" && ACPuzzle.change2image) {
                                ACPuzzle.change2image(e)
                            }
                        } + ')("' + t + '");';
                        var r = document.createElement("script");
                        r.textContent = n;
                        (document.head || document.documentElement).appendChild(r);
                        r.remove()
                    }
                    L();
                    if (!C || !T) {
                        return
                    }
                    var i = $(C);
                    var a = $(T);
                    var o = $("div.antigate_solver");
                    var s = A.getMarkerElement();
                    if (i.attr("old-src") && i.attr("old-src") != i.attr("src")) {
                        i.attr("anticaptured", "")
                    }
                    if (i.length != 1 || a.length != 1 || o.length < 1 || i.attr("anticaptured") == "anticaptured" || !i.attr("src") || !i[0].complete) {
                        return
                    }
                    if (!O()) {
                        return
                    }
                    i.attr("old-src", i.attr("src"));
                    i.attr("anticaptured", "anticaptured");
                    o.attr("title", chrome.i18n.getMessage("appShortName") + ": " + chrome.i18n.getMessage("solvingStatusTitle"));
                    if (!w) {
                        var l = se(b.account_key)
                    } else {
                        var l = se(x);
                        l.setHost("azcaptcha.com");
                        l.setPort(80)
                    }
                    //l.setSoftId(802);
                    l.setLanguagePool("rn");
                    var u = j(i[0].src);
                    var c = j(window.location.href);
                    if (q(i[0].src)) {
                        A.getMarkerElement() && A.getMarkerElement().css("cssText", "margin-top: 5px !important; margin-left: -170px !important;")
                    }
                    var f = false;
                    var d = i[0].src.indexOf("data:image/") != -1;
                    var p = u.protocol + u.hostname + u.port == c.protocol + c.hostname + c.port;
                    try {
                        var h = M(i[0])
                    } catch (e) {
                        if (e.name == "SecurityError") {
                            f = true
                        } else {
                            o.removeClass().addClass("antigate_solver image").addClass("error").text(e.message);
                            s.removeClass("in_process solved error").addClass("error");
                            X("error", k);
                            console.error(e);
                            return
                        }
                    }
                    if ((d || p) && !f) {
                        E(c, C, T, S, l, h, o, s, a, b)
                    } else {
                        var m = i[0];
                        var g;
                        var v = function(e, t) {
                            if (t) {
                                console.error(t)
                            }
                            if ((!e || t) && g < 2) {
                                g = 2;
                                chrome.runtime.sendMessage({
                                    type: "getTaintedImageBase64UsingBackgroundFrame",
                                    img_src: m.src
                                }, v);
                                return
                            }
                            var n = "data:image/png;base64," + e;
                            i.attr("src", n);
                            i.attr("old-src", n);
                            E(c, C, T, S, l, e, o, s, a, b)
                        };
                        if (m.src.indexOf("api.solvemedia.com") == -1 && m.src.indexOf("api-secure.solvemedia.com") == -1 && m.src.indexOf("facebook.com/captcha/tfbimage") == -1 && m.src.indexOf("client.hip.live.com/GetHIPData") == -1) {
                            g = 1;
                            I(m.src, v)
                        } else {
                            g = 2;
                            l.setLanguagePool("en");
                            R(m, v);
                            return;
                            chrome.runtime.sendMessage({
                                type: "requestPermissions",
                                permissions: ["<all_urls>"]
                            }, function(e) {
                                if (e) {
                                    g = 2;
                                    l.setLanguagePool("en");
                                    R(m, v)
                                } else {
                                    g = 1;
                                    I(m.src, v)
                                }
                            })
                        }
                        return;
                        chrome.runtime.sendMessage({
                            type: "getTaintedImageBase64UsingBackgroundFrame",
                            img_src: i[0].src
                        }, function(e) {
                            var t = "data:image/png;base64," + e;
                            i.attr("src", t);
                            i.attr("old-src", t);
                            N(c, C, T, S, l, e, o, s, a, b)
                        });
                        return;
                        var y = i[0];
                        var _ = document.createElement("iframe");
                        _.src = y.src;
                        _.width = "1px";
                        _.height = "1px";
                        y.parentNode.insertBefore(_, y);
                        chrome.runtime.sendMessage({
                            type: "getTaintedImageBase64"
                        }, function(e) {
                            var t = "data:image/png;base64," + e;
                            i.attr("src", t);
                            i.attr("old-src", t);
                            N(c, C, T, S, l, e, o, s, a, b)
                        })
                    }
                }, 2e3)
            }

            function E(t, n, r, i, a, o, s, l, u, c) {
                if (["capitalcity.oldbk.com", "oldbk.com", "dreamscity.combats.com", "old-combats.com", "www.oldbk.com"].indexOf(t.hostname) == -1) {
                    N(t, n, r, i, a, o, s, l, u, c, false)
                } else {
                    chrome.runtime.sendMessage({
                        type: "getImageCaptchaCache",
                        index: K(o)
                    }, function(e) {
                        if (!e) {
                            N(t, n, r, i, a, o, s, l, u, c, true)
                        } else {
                            g(t, n, r, i, s, l, u, c, null, false, null, null, e, null)
                        }
                    })
                }
            }

            function N(r, i, a, o, s, l, u, c, f, d, p) {
                u.removeClass().addClass("antigate_solver image");
                c.removeClass("solved error");
                if (typeof window.atob != "undefined") {
                    try {
                        var t = "The size of the captcha you are uploading is less than 100 bytes";
                        var e = window.atob(l);
                        if (e.length <= 100) {
                            throw new Error(t)
                        }
                    } catch (e) {
                        u.removeClass().addClass("antigate_solver image").addClass("error").text(t);
                        c.removeClass("in_process solved error").addClass("error");
                        X("error", k);
                        console.error(e);
                        Y(r, k, i, a, o, false, e.message);
                        return
                    }
                }
                var n = {
                    body: l
                };
                Object.assign(n, m);
                s.createImageToTextTask(n, function(e, t, n) {
                    h = t;
                    H(n);
                    if (e) {
                        u.removeClass().addClass("antigate_solver image").addClass("error").text(e.message);
                        c.removeClass("in_process solved error").addClass("error");
                        console.error(e);
                        Y(r, k, i, a, o, false, e.message);
                        if (typeof e.message != "undefined" && e.message.toLowerCase().indexOf("no idle workers") !== -1) {
                            u.append("<br /> One more attempt in 2 seconds");
                            X("minorError", k);
                            setTimeout(function() {
                                N(r, i, a, o, s, l, u, c, f, d, p)
                            }, 2e3)
                        } else {
                            X("error", k)
                        }
                        return
                    }
                    X("newCaptcha", k);
                    if (o == "automatic") {
                        A.getMarkerElement() && A.getMarkerElement().focus()
                    }
                    u.text("Solving is in process...");
                    u.addClass("in_process");
                    c.addClass("in_process");
                    s.getTaskSolution(t, g.bind(null, r, i, a, o, u, c, f, d, l, p, t), 0, X.bind(null, "inProcess", k))
                })
            }

            function g(e, t, n, r, i, a, o, s, l, u, c, f, d, p) {
                H(p);
                if (c && c != h) {
                    return
                }
                if (f) {
                    i.removeClass().addClass("antigate_solver image").addClass("error").text(f.message);
                    a.removeClass("in_process solved error").addClass("error");
                    X("error", k);
                    console.error(f);
                    Y(e, k, t, n, r, false, f.message);
                    if (f.message.indexOf("could not be solved") != -1) {
                        setTimeout(function() {
                            if ($("#adcopy-puzzle-image").length > 0) {
                                var e = "(" + function() {
                                    console.log("ACPuzzle reload");
                                    if (typeof ACPuzzle != "undefined" && ACPuzzle.reload) {
                                        ACPuzzle.reload("");
                                        ACPuzzle.reload("captchaShortlink")
                                    }
                                } + ")();";
                                var t = document.createElement("script");
                                t.textContent = e;
                                (document.head || document.documentElement).appendChild(t);
                                t.remove()
                            }
                        }, 3e3)
                    }
                    return
                }
                X("success", k);
                i.text("Solved");
                i.removeClass().addClass("antigate_solver image").addClass("solved");
                a.removeClass("in_process solved error").addClass("solved");
                o.val(d);
                Y(e, k, t, n, r, true);
                if (u && l) {
                    chrome.runtime.sendMessage({
                        type: "setImageCaptchaCache",
                        index: K(l),
                        value: d
                    })
                }
                if (o.length) {
                    U(o[0], "keydown", 39);
                    U(o[0], "keyup", 39);
                    U(o[0], "change")
                }
                if (s.auto_submit_form) {
                    if (["freebitco.in"].indexOf(e.hostname) != -1 && $("#free_play_form_button").length) {
                        $("#free_play_form_button").click()
                    } else if (o.attr("id") == "recaptcha_response_field") {
                        o.closest("form").find("input[type=submit]").click()
                    } else if (o.closest("form").length) {
                        o.closest("form").submit()
                    } else if (o.siblings("input[type=submit]").length) {
                        o.siblings("input[type=submit]").eq(0).click()
                    }
                }
                setTimeout(function() {
                    var e = "(" + function(e) {
                        if (typeof onClaim === "function") {
                            onClaim();
                            if (window.location.href.indexOf("raiblockscommunity.net") != -1 && document.getElementById("captcha_image")) {
                                document.getElementById("captcha_image").src = "/securimage/securimage_show.php?" + "namespace=" + "&" + Math.random()
                            }
                        }
                    } + ')("' + d + '");';
                    var t = document.createElement("script");
                    t.textContent = e;
                    (document.head || document.documentElement).appendChild(t);
                    t.remove();
                    if (o.attr("id") && o.attr("id").indexOf("vkbutton") != -1) {
                        var n = new KeyboardEvent("keyup", {
                            key: "Enter",
                            code: "Enter",
                            charCode: 0,
                            keyCode: 13
                        });
                        o[0].dispatchEvent(n)
                    }
                }, 1e3)
            }

            function p(e) {
                if (f) {
                    var t = F(f, false, B());
                    if (t != C) {
                        X("ok", k)
                    }
                    C = t;
                    S = e ? e : "manual"
                }
                if (d) {
                    var n = F(d, false, B());
                    if (n != T) {
                        X("ok", k)
                    }
                    T = n;
                    S = e ? e : "manual"
                }
                f = null;
                d = null
            }

            function o(e, t, n, r, i) {
                var a = {
                    type: "setCaptchaDeterminer",
                    imageDeterminant: e,
                    inputDeterminant: t
                };
                if (n) {
                    a.domain = n
                }
                if (r) {
                    a.source = r
                }
                chrome.runtime.sendMessage(a, function(e) {
                    if (typeof i == "function") {
                        i(null, e)
                    }
                })
            }

            function L() {
                if (C) {
                    A.show(C, m)
                } else {
                    A.hide()
                }
                if (T) {
                    t.show(T)
                } else {
                    t.hide()
                }
                if ($(C).length == 1 && $(T).length == 1) {
                    A.activate();
                    t.activate()
                } else {
                    A.deactivate();
                    t.deactivate()
                }
            }

            function s(e, t, n, r, i) {
                var a = j(window.location.href);
                if (!n || n == a.hostname) {
                    if (typeof e !== "undefined") {
                        C = e
                    }
                    if (typeof t !== "undefined") {
                        T = t
                    }
                    e = C;
                    t = T;
                    S = "manual_api";
                    L()
                }
                if (r) {
                    o(e, t, n, "manual_api", i)
                } else {
                    if (typeof i == "function") {
                        i(null)
                    }
                }
            }
        })
    });
    $(document).ready(function() {
        if (window.top != window.self && document.body && document.body.children.length == 1 && document.getElementsByTagName("img").length == 1) {
            var e = document.getElementsByTagName("img")[0];
            if (e.src != window.location.href) {
                return
            }

            function t() {
                chrome.runtime.sendMessage({
                    type: "setTaintedImageBase64UsingBackgroundFrame",
                    data: M(this),
                    original_url: window.name
                }, function(e) {})
            }
            if (e.complete) {
                t.call(e)
            } else {
                e.onload = t
            }
        }
    });
    var ue = function(e, t) {
        var g = chrome.i18n.getMessage("markInputSolverMessage");
        var n = "Azcaptcha";
        var r = {};
        return new function(f, d) {
            var p, h, m;
            if (["image", "input"].indexOf(f) == -1) {
                return
            }
            this.show = function(e, t) {
                if (!p) {
                    var n = document.createElement("a");
                    n.className = "mark_cancel_link " + f;
                    n.id = "mark_cancel_link_" + f;
                    n.title = chrome.i18n.getMessage("appShortName") + ": " + (f == "image" ? chrome.i18n.getMessage("unmarkImageTitle") : chrome.i18n.getMessage("unmarkInputTitle"));
                    n.tabIndex = 0;
                    if (f == "image") {
                        n.innerHTML = '<span class="face"></span>' + '<div class="antigate_solver image">' + g + "</div>" + '<div class="__ac_options">                            <a href="javascript:void(0);"                                     class="__ac_options_toggle"                                     title="Show / Hide image captcha options">                                Options ⌄                            </a>\n                            <div class="__ac_form_container">\n                                <div class="__ac_form">\n                                    <input type="checkbox"                                             name="__ac_phrase"                                             id="__ac_phrase"                                             value="1"/><label                                             for="__ac_phrase"                                             title="worker must enter an answer with at least one \'space\'">                                        phrase                                    </label>\n                                    <br/>\n                                    <input                                             type="checkbox"                                             name="__ac_case"                                             id="__ac_case"                                             value="1"/><label                                             for="__ac_case"                                             title="worker will see a special mark telling that answer must be entered with case sensitivity">                                        case                                    </label>\n                                    <br/>\n                                    <input                                             type="checkbox"                                             name="__ac_math"                                             id="__ac_math"                                             value="1"/><label                                             for="__ac_math"                                             title="worker will see a special mark telling that answer must be calculated">                                        math                                    </label>\n                                    <fieldset>                                        <legend>numeric</legend>                                        <label for="__ac_numeric0" title="no requirements">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric0"                                                     value="0"/>&nbsp;0                                        </label>                                        <label for="__ac_numeric1" title="only number are allowed">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric1"                                                     value="1"/>&nbsp;1                                        </label>                                        <br>                                        <label                                                 for="__ac_numeric2"                                                 title="any letters are allowed except numbers">                                            <input                                                     type="radio"                                                     name="__ac_numeric"                                                     id="__ac_numeric2"                                                     value="2"/>&nbsp;2                                        </label>                                    </fieldset>                                    <fieldset>                                        <legend>length</legend>                                        <input                                                 type="number"                                                 name="__ac_minLength"                                                 min="0"                                                 max="50"                                                 id="__ac_minLength"/><label                                                 for="__ac_minLength"                                                 title="defines minimum length of the answer">                                            min                                        </label>                                        <input                                                 type="number"                                                 name="__ac_maxLength"                                                 min="0"                                                 max="50"                                                 id="__ac_maxLength"/><label                                                 for="__ac_maxLength"                                                 title="defines maximum length of the answer">                                            max                                        </label>                                    </fieldset>                                    <label                                             for="__ac_comment"                                             title="Additional comment for workers like \'enter letters in red color\'.">                                        comment                                    </label>\n                                    <input type="text" name="__ac_comment" id="__ac_comment" maxlength="50" />                                                                        <a href="https://Azcaptcha.atlassian.net/wiki/spaces/API/pages/5079091/ImageToTextTask+solve+usual+image+captcha"                                        title="More info about image options read here"                                        target="_blank"                                        rel="nofollow"                                        class="__ac_about_options_link">About options                                    </a>                                </div>\n                             </div>\n                        </div>'
                    } else {
                        n.innerHTML = "<span></span>"
                    }
                    var r = this.remove.bind(null, d);
                    n.onclick = r;
                    n.onkeypress = function(e) {
                        if (e.code.toLowerCase() == "space" || e.code.toLowerCase() == "enter") {
                            r(e, true)
                        }
                    };
                    p = $(n);
                    if (f == "image") {
                        var i = p.find(".__ac_options");
                        var a = i.find(".__ac_form");
                        var o = i.find(".__ac_form_container");
                        var s = i.find(".__ac_options_toggle");
                        if (s.length && i.length) {
                            if (s.get(0)) {
                                s.get(0).onclick = s.get(0).onkeypress = function(e) {
                                    if (a.parent().length) {
                                        a.remove();
                                        s.text("Options ⌄")
                                    } else {
                                        o.append(a);
                                        s.text("Options ⌃")
                                    }
                                    e.stopPropagation();
                                    e.preventDefault()
                                }
                            }
                            if (i.get(0)) {
                                i.get(0).onclick = function(e) {
                                    e.stopPropagation()
                                };
                                i.get(0).onkeypress = function(e) {
                                    if (e.code.toLowerCase() == "space" || e.code.toLowerCase() == "enter") {
                                        e.stopPropagation()
                                    }
                                }
                            }
                        }
                        if (p.get(0)) {
                            var l = null;
                            var u = function() {
                                if (l) {
                                    clearTimeout(l);
                                    l = null
                                }
                                i.show()
                            };
                            var c = function() {
                                l = setTimeout(function() {
                                    i.hide();
                                    a.remove();
                                    s.text("Options ⌄")
                                }, 500)
                            };
                            p.get(0).addEventListener("focusin", u);
                            p.get(0).addEventListener("focusout", c);
                            p.get(0).addEventListener("mouseover", u);
                            p.get(0).addEventListener("mouseout", c)
                        }
                        if (!t) {
                            t = v
                        }
                        a.find("#__ac_phrase").attr("checked", t.phrase);
                        a.find("#__ac_case").attr("checked", t.case);
                        a.find("#__ac_math").attr("checked", t.math);
                        a.find("#__ac_numeric" + t.numeric).attr("checked", true);
                        a.find("#__ac_minLength").val(t.minLength);
                        a.find("#__ac_maxLength").val(t.maxLength);
                        a.find("#__ac_comment").val(t.comment);
                        a.find("input").each(function() {
                            this.onchange = function() {
                                var e = this.name.replace("__ac_", "");
                                t[e] = this.type != "checkbox" ? this.value : this.checked;
                                chrome.runtime.sendMessage({
                                    type: "setCaptchaDeterminerOptions",
                                    options: t
                                }, function(e) {})
                            }
                        });
                        a.remove()
                    }
                }
                m = $(e).length ? $(e)[0] : null;
                if (m && (!h || m != h)) {
                    p.remove();
                    $(m).after(p);
                    h = m
                }
            };
            this.remove = function(e, t, n) {
                if (!t.isTrusted) {
                    return
                }
                if (p) {
                    p.remove();
                    if (n && m) {
                        if (m.tagName.toLowerCase() == "img") {
                            var r = m.tabIndex;
                            m.tabIndex = 0;
                            m.focus();
                            m.tabIndex = r
                        } else {
                            m.focus()
                        }
                    }
                }
                h = null;
                e()
            };
            this.hide = function() {
                if (p) {
                    p.remove();
                    h = null
                }
            };
            this.activate = function() {
                if (p) {
                    p.addClass("active");
                    if (f == "image") {
                        var e = p.find(".antigate_solver.image:not(.in_process):not(.error):not(.solved)");
                        if (e.length && e.text() !== n) {
                            e.text(n)
                        }
                    }
                }
            };
            this.deactivate = function() {
                if (p) {
                    p.removeClass("active");
                    if (f == "image") {
                        var e = p.find(".antigate_solver.image:not(.in_process):not(.error):not(.solved)");
                        if (e.length && e.text() !== g) {
                            e.text(g)
                        }
                    }
                }
            };
            this.getMarkerElement = function() {
                return p
            };
            this.setOptions = function(e) {};
            this.setOption = function(e, t) {
                r[e] = t
            }
        }(e, t)
    };
    $(document).ready(function() {
        var e = j(window.location.href);
        if ((e.hostname + e.pathname).indexOf("www.google.com/recaptcha/api2/anchor") != -1 && typeof document.referrer != "undefined") {
            window.addEventListener("message", function(e) {
                try {
                    var t = j(e.origin);
                    var n = j(document.referrer)
                } catch (e) {
                    console.log(e);
                    return
                }
                if (t.protocol + t.hostname != n.protocol + n.hostname) {
                    return
                }
                try {
                    var r = JSON.parse(e.data)
                } catch (e) {
                    return
                }
                if (r.type == "solutionForwarding" && typeof r.response != "undefined") {
                    var i = JSON.stringify({
                        message: {
                            response: r.response
                        },
                        messageType: "token"
                    });
                    var i = JSON.stringify({
                        message: {
                            l: r.response
                        },
                        messageType: "d"
                    });
                    var a = n.protocol + "//" + n.hostname;
                    e.source.postMessage(i, a)
                } else {}
            }, false)
        }
    });
    chrome.runtime.sendMessage({
        type: "getGlobalStatus"
    }, function(l) {
        if (l.enable) {
            window.addEventListener("message", function(n) {
                if (!n.data || typeof n.data.receiver == "undefined" || n.data.receiver != "AzcaptchaPlugin") {
                    return
                }
                if (typeof n.data.type !== "undefined") {
                    if (n.data.type == "solveRecaptcha" || n.data.type == "solveFuncaptcha") {
                        if (typeof n.data.containerSelector === "undefined" || !n.data.containerSelector) {
                            ee(n.data.type, 3, 'Should specify a "containerSelector" field');
                            return
                        }
                        try {
                            if ($(n.data.containerSelector).length) {
                                if (l.account_key && l.account_key_checked || l.profile_user_info && l.free_attempts_left_count) {
                                    if (n.data.type == "solveRecaptcha") {
                                        re(n.data.containerSelector)
                                    } else if (n.data.type == "solveFuncaptcha") {
                                        oe(n.data.containerSelector)
                                    }
                                    ee(n.data.type, 0, "")
                                } else {
                                    ee(n.data.type, 2, "azcaptcha.com account key not set or no free attempts left")
                                }
                            }
                        } catch (e) {
                            ee(n.data.type, 4, "Invalid jQuery selector passed")
                        }
                    } else if (n.data.type == "setImageCaptchaSelectors") {
                        if ((typeof n.data.imageSelector === "undefined" || !n.data.imageSelector && n.data.imageSelector !== null) && (typeof n.data.inputSelector === "undefined" || !n.data.inputSelector && n.data.inputSelector !== null)) {
                            ee(n.data.type, 5, 'Should specify either an "imageSelector" or an "inputSelector" field or both');
                            return
                        }
                        var e;
                        var t;
                        var r = null;
                        var i = true;
                        if (typeof n.data.imageSelector !== "undefined" && (n.data.imageSelector || n.data.imageSelector === null)) {
                            if (n.data.imageSelector !== null) {
                                try {
                                    $(n.data.imageSelector).length
                                } catch (e) {
                                    ee(n.data.type, 6, "Invalid jQuery imageSelector passed");
                                    return
                                }
                            }
                            e = n.data.imageSelector
                        }
                        if (typeof n.data.inputSelector !== "undefined" && (n.data.inputSelector || n.data.inputSelector === null)) {
                            if (n.data.inputSelector !== null) {
                                try {
                                    $(n.data.inputSelector).length
                                } catch (e) {
                                    ee(n.data.type, 7, "Invalid jQuery inputSelector passed");
                                    return
                                }
                            }
                            t = n.data.inputSelector
                        }
                        if (typeof n.data.domain !== "undefined" && n.data.domain) {
                            try {
                                var a = j("http://" + n.data.domain)
                            } catch (e) {
                                ee(n.data.type, 8, "Invalid domain passed");
                                return
                            }
                            if ((a.hostname == "http" || a.hostname == "https") && a.pathname != "/") {
                                ee(n.data.type, 8, "Invalid domain passed, please provide a domain without HTTP/HTTPS protocol");
                                return
                            }
                            r = a.hostname
                        }
                        if (typeof n.data.saveInStorage !== "undefined" && typeof n.data.saveInStorage === "boolean") {
                            i = n.data.saveInStorage
                        }
                        le(e, t, r, i, function(e, t) {
                            if (e) {
                                ee(n.data.type, 9, e.message)
                            } else {
                                ee(n.data.type, 0, "Image captcha selectors" + (r ? " for a domain " + r : "") + " are set")
                            }
                        })
                    } else if (n.data.type == "setOptions") {
                        if (typeof n.data.options === "undefined") {
                            ee(n.data.type, 11, 'Should specify an "options" object');
                            return
                        }
                        var o = n.data.options;
                        var s = {};
                        if (typeof o.enable === "boolean") {
                            s.enable = o.enable
                        }
                        if (typeof o.AzcaptchaApiKey === "string") {
                            s.account_key = o.AzcaptchaApiKey
                        }
                        if (typeof o.autoSubmitForm === "boolean") {
                            s.auto_submit_form = o.autoSubmitForm
                        }
                        if (typeof o.playSounds === "boolean") {
                            s.play_sounds = o.playSounds
                        }
                        if (typeof o.useRecaptchaAccelerator === "boolean") {
                            s.use_recaptcha_accelerator = o.useRecaptchaAccelerator
                        }
                        if (typeof o.useRecaptchaPrecaching === "boolean") {
                            s.use_recaptcha_precaching = o.useRecaptchaPrecaching
                        }
                        if (typeof o.kPrecachedSolutionCountMin === "number") {
                            s.k_precached_solution_count_min = o.kPrecachedSolutionCountMin
                        }
                        if (typeof o.kPrecachedSolutionCountMax === "number") {
                            s.k_precached_solution_count_max = o.kPrecachedSolutionCountMax
                        }
                        if (typeof o.solveRecaptcha2 === "boolean") {
                            s.solve_recaptcha2 = o.solveRecaptcha2
                        }
                        if (typeof o.solveInvisibleRecaptcha === "boolean") {
                            s.solve_invisible_recaptcha = o.solveInvisibleRecaptcha
                        }
                        if (typeof o.dontReuseRecaptchaSolution === "boolean") {
                            s.dont_reuse_recaptcha_solution = o.dontReuseRecaptchaSolution
                        }
                        if (typeof o.solveFuncaptcha === "boolean") {
                            s.solve_funcaptcha = o.solveFuncaptcha
                        }
                        if (typeof o.startRecaptcha2SolvingWhenChallengeShown === "boolean") {
                            s.start_recaptcha2_solving_when_challenge_shown = o.startRecaptcha2SolvingWhenChallengeShown
                        }
                        if (typeof o.solveOnlyPresentedRecaptcha2 === "boolean") {
                            s.solve_only_presented_recaptcha2 = o.solveOnlyPresentedRecaptcha2
                        }
                        if (typeof o.usePredefinedImageCaptchaMarks === "boolean") {
                            s.use_predefined_image_captcha_marks = o.usePredefinedImageCaptchaMarks
                        }
                        chrome.runtime.sendMessage({
                            type: "saveOptions",
                            options: s
                        }, function(e) {
                            ee(n.data.type, 0, "Options are set")
                        })
                    } else {
                        ee("", 10, 'Unknown "type" field passed')
                    }
                } else {
                    ee("", 1, 'Should specify a "type" field')
                }
            })
        }
    })
})();