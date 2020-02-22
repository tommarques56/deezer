var showErrorMessage;
var refreshFreeAttemptsMessage;
var showBalanceMessage;
(function() {
    var e = "testmessageforsolveroutput";
    var t = 1 * 24 * 60 * 60;
    var n = 1 * 6 * 60 * 60;
    var r = "ctrl+shift+3";
    var o = "ctrl+shift+6";
    var a = "https://azcaptcha.com/addon/getAllHostnameSelectors.json";
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
    var c = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
    (function(e, t) {
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
        var A = k.document;
        var r = Object.getPrototypeOf;
        var s = t.slice;
        var g = t.concat;
        var u = t.push;
        var i = t.indexOf;
        var n = {};
        var o = n.toString;
        var h = n.hasOwnProperty;
        var a = h.toString;
        var c = a.call(Object);
        var m = {};

        function y(e, t) {
            t = t || A;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var l = "3.1.1",
            C = function(e, t) {
                return new C.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            d = /-([a-z])/g,
            v = function(e, t) {
                return t.toUpperCase()
            };
        C.fn = C.prototype = {
            jquery: l,
            constructor: C,
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
                var t = C.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(n) {
                return this.pushStack(C.map(this, function(e, t) {
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
        C.extend = C.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = false;
            if (typeof a === "boolean") {
                c = a;
                a = arguments[s] || {};
                s++
            }
            if (typeof a !== "object" && !C.isFunction(a)) {
                a = {}
            }
            if (s === u) {
                a = this;
                s--
            }
            for (; s < u; s++) {
                if ((e = arguments[s]) != null) {
                    for (t in e) {
                        n = a[t];
                        r = e[t];
                        if (a === r) {
                            continue
                        }
                        if (c && r && (C.isPlainObject(r) || (i = C.isArray(r)))) {
                            if (i) {
                                i = false;
                                o = n && C.isArray(n) ? n : []
                            } else {
                                o = n && C.isPlainObject(n) ? n : {}
                            }
                            a[t] = C.extend(c, o, r)
                        } else if (r !== undefined) {
                            a[t] = r
                        }
                    }
                }
            }
            return a
        };
        C.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return C.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = C.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || o.call(e) !== "[object Object]") {
                    return false
                }
                t = r(e);
                if (!t) {
                    return true
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && a.call(n) === c
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
                return typeof e === "object" || typeof e === "function" ? n[o.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                y(e)
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(d, v)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (x(e)) {
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
                    if (x(Object(e))) {
                        C.merge(n, typeof e === "string" ? [e] : e)
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
                    o = 0,
                    a = e.length,
                    s = !n;
                for (; o < a; o++) {
                    r = !t(e[o], o);
                    if (r !== s) {
                        i.push(e[o])
                    }
                }
                return i
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (x(e)) {
                    r = e.length;
                    for (; o < r; o++) {
                        i = t(e[o], o, n);
                        if (i != null) {
                            a.push(i)
                        }
                    }
                } else {
                    for (o in e) {
                        i = t(e[o], o, n);
                        if (i != null) {
                            a.push(i)
                        }
                    }
                }
                return g.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!C.isFunction(e)) {
                    return undefined
                }
                r = s.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                };
                i.guid = e.guid = e.guid || C.guid++;
                return i
            },
            now: Date.now,
            support: m
        });
        if (typeof Symbol === "function") {
            C.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function x(e) {
            var t = !!e && "length" in e && e.length,
                n = C.type(e);
            if (n === "function" || C.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var b = function(n) {
            var e, d, b, o, i, h, f, g, w, u, c, T, k, a, A, m, s, l, y, C = "sizzle" + 1 * new Date,
                v = n.document,
                _ = 0,
                r = 0,
                p = ae(),
                x = ae(),
                S = ae(),
                E = function(e, t) {
                    if (e === t) {
                        c = true
                    }
                    return 0
                },
                N = {}.hasOwnProperty,
                t = [],
                D = t.pop,
                L = t.push,
                P = t.push,
                j = t.slice,
                q = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                H = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                B = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
                R = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|" + ".*" + ")\\)|)",
                F = new RegExp(H + "+", "g"),
                $ = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                I = new RegExp("^" + H + "*," + H + "*"),
                W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
                K = new RegExp(R),
                V = new RegExp("^" + M + "$"),
                z = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + B),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
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
                        L.apply(e, j.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function oe(e, t, n, r) {
                var i, o, a, s, u, c, l, f = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || p !== 1 && p !== 9 && p !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : v) !== k) {
                        T(t)
                    }
                    t = t || k;
                    if (A) {
                        if (p !== 11 && (u = Y.exec(e))) {
                            if (i = u[1]) {
                                if (p === 9) {
                                    if (a = t.getElementById(i)) {
                                        if (a.id === i) {
                                            n.push(a);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) {
                                        n.push(a);
                                        return n
                                    }
                                }
                            } else if (u[2]) {
                                P.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) {
                                P.apply(n, t.getElementsByClassName(i));
                                return n
                            }
                        }
                        if (d.qsa && !S[e + " "] && (!m || !m.test(e))) {
                            if (p !== 1) {
                                f = t;
                                l = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (s = t.getAttribute("id")) {
                                    s = s.replace(te, ne)
                                } else {
                                    t.setAttribute("id", s = C)
                                }
                                c = h(e);
                                o = c.length;
                                while (o--) {
                                    c[o] = "#" + s + " " + ye(c[o])
                                }
                                l = c.join(",");
                                f = Z.test(e) && ge(t.parentNode) || t
                            }
                            if (l) {
                                try {
                                    P.apply(n, f.querySelectorAll(l));
                                    return n
                                } catch (e) {} finally {
                                    if (s === C) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return g(e.replace($, "$1"), t, n, r)
            }

            function ae() {
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
                e[C] = true;
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

            function ce(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    b.attrHandle[n[r]] = t
                }
            }

            function le(e, t) {
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

            function pe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && e.type === n
                }
            }

            function de(t) {
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

            function he(a) {
                return se(function(o) {
                    o = +o;
                    return se(function(e, t) {
                        var n, r = a([], e.length, o),
                            i = r.length;
                        while (i--) {
                            if (e[n = r[i]]) {
                                e[n] = !(t[n] = e[n])
                            }
                        }
                    })
                })
            }

            function ge(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            d = oe.support = {};
            i = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            T = oe.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : v;
                if (r === k || r.nodeType !== 9 || !r.documentElement) {
                    return k
                }
                k = r;
                a = k.documentElement;
                A = !i(k);
                if (v !== k && (n = k.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                d.attributes = ue(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                d.getElementsByTagName = ue(function(e) {
                    e.appendChild(k.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                d.getElementsByClassName = Q.test(k.getElementsByClassName);
                d.getById = ue(function(e) {
                    a.appendChild(e).id = C;
                    return !k.getElementsByName || !k.getElementsByName(C).length
                });
                if (d.getById) {
                    b.filter["ID"] = function(e) {
                        var t = e.replace(J, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && A) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    b.filter["ID"] = function(e) {
                        var n = e.replace(J, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && A) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                n = o.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [o]
                                }
                                i = t.getElementsByName(e);
                                r = 0;
                                while (o = i[r++]) {
                                    n = o.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [o]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                b.find["TAG"] = d.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (d.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = o[i++]) {
                            if (n.nodeType === 1) {
                                r.push(n)
                            }
                        }
                        return r
                    }
                    return o
                };
                b.find["CLASS"] = d.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && A) {
                        return t.getElementsByClassName(e)
                    }
                };
                s = [];
                m = [];
                if (d.qsa = Q.test(k.querySelectorAll)) {
                    ue(function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + C + "'></a>" + "<select id='" + C + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            m.push("[*^$]=" + H + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            m.push("\\[" + H + "*(?:value|" + O + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + C + "-]").length) {
                            m.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            m.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + C + "+*").length) {
                            m.push(".#.+[+~]")
                        }
                    });
                    ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            m.push("name" + H + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            m.push(":enabled", ":disabled")
                        }
                        a.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            m.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        m.push(",.*:")
                    })
                }
                if (d.matchesSelector = Q.test(l = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) {
                    ue(function(e) {
                        d.disconnectedMatch = l.call(e, "*");
                        l.call(e, "[s!='']:x");
                        s.push("!=", R)
                    })
                }
                m = m.length && new RegExp(m.join("|"));
                s = s.length && new RegExp(s.join("|"));
                t = Q.test(a.compareDocumentPosition);
                y = t || Q.test(a.contains) ? function(e, t) {
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
                        c = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !d.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === k || e.ownerDocument === v && y(v, e)) {
                            return -1
                        }
                        if (t === k || t.ownerDocument === v && y(v, t)) {
                            return 1
                        }
                        return u ? q(u, e) - q(u, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) {
                        return e === k ? -1 : t === k ? 1 : i ? -1 : o ? 1 : u ? q(u, e) - q(u, t) : 0
                    } else if (i === o) {
                        return le(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        a.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        s.unshift(n)
                    }
                    while (a[r] === s[r]) {
                        r++
                    }
                    return r ? le(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0
                };
                return k
            };
            oe.matches = function(e, t) {
                return oe(e, null, null, t)
            };
            oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                t = t.replace(U, "='$1']");
                if (d.matchesSelector && A && !S[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) {
                    try {
                        var n = l.call(e, t);
                        if (n || d.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return oe(t, k, null, [e]).length > 0
            };
            oe.contains = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                return y(e, t)
            };
            oe.attr = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    T(e)
                }
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !A) : undefined;
                return r !== undefined ? r : d.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            };
            oe.escape = function(e) {
                return (e + "").replace(te, ne)
            };
            oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            oe.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                c = !d.detectDuplicates;
                u = !d.sortStable && e.slice(0);
                e.sort(E);
                if (c) {
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
            o = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) {
                    while (t = e[r++]) {
                        n += o(t)
                    }
                } else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += o(e)
                        }
                    }
                } else if (i === 3 || i === 4) {
                    return e.nodeValue
                }
                return n
            };
            b = oe.selectors = {
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
                        e[1] = e[1].replace(J, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                oe.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            oe.error(e[0])
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
                        } else if (n && K.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && p(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = oe.attr(e, n);
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
                    CHILD: function(h, e, t, g, m) {
                        var y = h.slice(0, 3) !== "nth",
                            v = h.slice(-4) !== "last",
                            x = e === "of-type";
                        return g === 1 && m === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, c = y !== v ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = false;
                            if (l) {
                                if (y) {
                                    while (c) {
                                        a = e;
                                        while (a = a[c]) {
                                            if (x ? a.nodeName.toLowerCase() === f : a.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        u = c = h === "only" && !u && "nextSibling"
                                    }
                                    return true
                                }
                                u = [v ? l.firstChild : l.lastChild];
                                if (v && p) {
                                    a = l;
                                    o = a[C] || (a[C] = {});
                                    i = o[a.uniqueID] || (o[a.uniqueID] = {});
                                    r = i[h] || [];
                                    s = r[0] === _ && r[1];
                                    d = s && r[2];
                                    a = s && l.childNodes[s];
                                    while (a = ++s && a && a[c] || (d = s = 0) || u.pop()) {
                                        if (a.nodeType === 1 && ++d && a === e) {
                                            i[h] = [_, s, d];
                                            break
                                        }
                                    }
                                } else {
                                    if (p) {
                                        a = e;
                                        o = a[C] || (a[C] = {});
                                        i = o[a.uniqueID] || (o[a.uniqueID] = {});
                                        r = i[h] || [];
                                        s = r[0] === _ && r[1];
                                        d = s
                                    }
                                    if (d === false) {
                                        while (a = ++s && a && a[c] || (d = s = 0) || u.pop()) {
                                            if ((x ? a.nodeName.toLowerCase() === f : a.nodeType === 1) && ++d) {
                                                if (p) {
                                                    o = a[C] || (a[C] = {});
                                                    i = o[a.uniqueID] || (o[a.uniqueID] = {});
                                                    i[h] = [_, d]
                                                }
                                                if (a === e) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                d -= m;
                                return d === g || d % g === 0 && d / g >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        if (a[C]) {
                            return a(o)
                        }
                        if (a.length > 1) {
                            t = [e, e, "", o];
                            return b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                var n, r = a(e, o),
                                    i = r.length;
                                while (i--) {
                                    n = q(e, r[i]);
                                    e[n] = !(t[n] = r[i])
                                }
                            }) : function(e) {
                                return a(e, 0, t)
                            }
                        }
                        return a
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[C] ? se(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--) {
                                if (i = o[a]) {
                                    e[a] = !(t[a] = i)
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
                            return oe(t, e).length > 0
                        }
                    }),
                    contains: se(function(t) {
                        t = t.replace(J, ee);
                        return function(e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                        }
                    }),
                    lang: se(function(n) {
                        if (!V.test(n || "")) {
                            oe.error("unsupported lang: " + n)
                        }
                        n = n.replace(J, ee).toLowerCase();
                        return function(e) {
                            var t;
                            do {
                                if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
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
                        return e === a
                    },
                    focus: function(e) {
                        return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(false),
                    disabled: de(true),
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
                b.pseudos[e] = pe(e)
            }

            function me() {}
            me.prototype = b.filters = b.pseudos;
            b.setFilters = new me;
            h = oe.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, c = x[e + " "];
                if (c) {
                    return t ? 0 : c.slice(0)
                }
                a = e;
                s = [];
                u = b.preFilter;
                while (a) {
                    if (!n || (r = I.exec(a))) {
                        if (r) {
                            a = a.slice(r[0].length) || a
                        }
                        s.push(i = [])
                    }
                    n = false;
                    if (r = W.exec(a)) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: r[0].replace($, " ")
                        });
                        a = a.slice(n.length)
                    }
                    for (o in b.filter) {
                        if ((r = z[o].exec(a)) && (!u[o] || (r = u[o](r)))) {
                            n = r.shift();
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            });
                            a = a.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? a.length : a ? oe.error(e) : x(e, s).slice(0)
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
                    c = e.next,
                    l = c || u,
                    f = t && l === "parentNode",
                    p = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || f) {
                            return s(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, i, o, a = [_, p];
                    if (n) {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                if (s(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                o = e[C] || (e[C] = {});
                                i = o[e.uniqueID] || (o[e.uniqueID] = {});
                                if (c && c === e.nodeName.toLowerCase()) {
                                    e = e[u] || e
                                } else if ((r = i[l]) && r[0] === _ && r[1] === p) {
                                    return a[2] = r[2]
                                } else {
                                    i[l] = a;
                                    if (a[2] = s(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function xe(i) {
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
                    oe(e, t[r], n)
                }
                return n
            }

            function we(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    u = e.length,
                    c = t != null;
                for (; s < u; s++) {
                    if (o = e[s]) {
                        if (!n || n(o, r, i)) {
                            a.push(o);
                            if (c) {
                                t.push(s)
                            }
                        }
                    }
                }
                return a
            }

            function Te(d, h, g, m, y, e) {
                if (m && !m[C]) {
                    m = Te(m)
                }
                if (y && !y[C]) {
                    y = Te(y, e)
                }
                return se(function(e, t, n, r) {
                    var i, o, a, s = [],
                        u = [],
                        c = t.length,
                        l = e || be(h || "*", n.nodeType ? [n] : n, []),
                        f = d && (e || !h) ? we(l, s, d, n, r) : l,
                        p = g ? y || (e ? d : c || m) ? [] : t : f;
                    if (g) {
                        g(f, p, n, r)
                    }
                    if (m) {
                        i = we(p, u);
                        m(i, [], n, r);
                        o = i.length;
                        while (o--) {
                            if (a = i[o]) {
                                p[u[o]] = !(f[u[o]] = a)
                            }
                        }
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                i = [];
                                o = p.length;
                                while (o--) {
                                    if (a = p[o]) {
                                        i.push(f[o] = a)
                                    }
                                }
                                y(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--) {
                                if ((a = p[o]) && (i = y ? q(e, a) : s[o]) > -1) {
                                    e[i] = !(t[i] = a)
                                }
                            }
                        }
                    } else {
                        p = we(p === t ? p.splice(c, p.length) : p);
                        if (y) {
                            y(null, t, p, r)
                        } else {
                            P.apply(t, p)
                        }
                    }
                })
            }

            function ke(e) {
                var i, t, n, r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = ve(function(e) {
                        return e === i
                    }, a, true),
                    c = ve(function(e) {
                        return q(i, e) > -1
                    }, a, true),
                    l = [function(e, t, n) {
                        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : c(e, t, n));
                        i = null;
                        return r
                    }];
                for (; s < r; s++) {
                    if (t = b.relative[e[s].type]) {
                        l = [ve(xe(l), t)]
                    } else {
                        t = b.filter[e[s].type].apply(null, e[s].matches);
                        if (t[C]) {
                            n = ++s;
                            for (; n < r; n++) {
                                if (b.relative[e[n].type]) {
                                    break
                                }
                            }
                            return Te(s > 1 && xe(l), s > 1 && ye(e.slice(0, s - 1).concat({
                                value: e[s - 2].type === " " ? "*" : ""
                            })).replace($, "$1"), t, s < n && ke(e.slice(s, n)), n < r && ke(e = e.slice(n)), n < r && ye(e))
                        }
                        l.push(t)
                    }
                }
                return xe(l)
            }

            function Ae(m, y) {
                var v = y.length > 0,
                    x = m.length > 0,
                    e = function(e, t, n, r, i) {
                        var o, a, s, u = 0,
                            c = "0",
                            l = e && [],
                            f = [],
                            p = w,
                            d = e || x && b.find["TAG"]("*", i),
                            h = _ += p == null ? 1 : Math.random() || .1,
                            g = d.length;
                        if (i) {
                            w = t === k || t || i
                        }
                        for (; c !== g && (o = d[c]) != null; c++) {
                            if (x && o) {
                                a = 0;
                                if (!t && o.ownerDocument !== k) {
                                    T(o);
                                    n = !A
                                }
                                while (s = m[a++]) {
                                    if (s(o, t || k, n)) {
                                        r.push(o);
                                        break
                                    }
                                }
                                if (i) {
                                    _ = h
                                }
                            }
                            if (v) {
                                if (o = !s && o) {
                                    u--
                                }
                                if (e) {
                                    l.push(o)
                                }
                            }
                        }
                        u += c;
                        if (v && c !== u) {
                            a = 0;
                            while (s = y[a++]) {
                                s(l, f, t, n)
                            }
                            if (e) {
                                if (u > 0) {
                                    while (c--) {
                                        if (!(l[c] || f[c])) {
                                            f[c] = D.call(r)
                                        }
                                    }
                                }
                                f = we(f)
                            }
                            P.apply(r, f);
                            if (i && !e && f.length > 0 && u + y.length > 1) {
                                oe.uniqueSort(r)
                            }
                        }
                        if (i) {
                            _ = h;
                            w = p
                        }
                        return l
                    };
                return v ? se(e) : e
            }
            f = oe.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        o = ke(t[n]);
                        if (o[C]) {
                            r.push(o)
                        } else {
                            i.push(o)
                        }
                    }
                    o = S(e, Ae(i, r));
                    o.selector = e
                }
                return o
            };
            g = oe.select = function(e, t, n, r) {
                var i, o, a, s, u, c = typeof e === "function" && e,
                    l = !r && h(e = c.selector || e);
                n = n || [];
                if (l.length === 1) {
                    o = l[0] = l[0].slice(0);
                    if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && A && b.relative[o[1].type]) {
                        t = (b.find["ID"](a.matches[0].replace(J, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (c) {
                            t = t.parentNode
                        }
                        e = e.slice(o.shift().value.length)
                    }
                    i = z["needsContext"].test(e) ? 0 : o.length;
                    while (i--) {
                        a = o[i];
                        if (b.relative[s = a.type]) {
                            break
                        }
                        if (u = b.find[s]) {
                            if (r = u(a.matches[0].replace(J, ee), Z.test(o[0].type) && ge(t.parentNode) || t)) {
                                o.splice(i, 1);
                                e = r.length && ye(o);
                                if (!e) {
                                    P.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(c || f(e, l))(r, t, !A, n, !t || Z.test(e) && ge(t.parentNode) || t);
                return n
            };
            d.sortStable = C.split("").sort(E).join("") === C;
            d.detectDuplicates = !!c;
            T();
            d.sortDetached = ue(function(e) {
                return e.compareDocumentPosition(k.createElement("fieldset")) & 1
            });
            if (!ue(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                ce("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!d.attributes || !ue(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                ce("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!ue(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                ce(O, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return oe
        }(k);
        C.find = b;
        C.expr = b.selectors;
        C.expr[":"] = C.expr.pseudos;
        C.uniqueSort = C.unique = b.uniqueSort;
        C.text = b.getText;
        C.isXMLDoc = b.isXML;
        C.contains = b.contains;
        C.escapeSelector = b.escape;
        var w = function(e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && C(e).is(n)) {
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
        var _ = C.expr.match.needsContext;
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var E = /^.[^:#\[\.,]*$/;

        function N(e, n, r) {
            if (C.isFunction(n)) {
                return C.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return C.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return C.grep(e, function(e) {
                    return i.call(n, e) > -1 !== r
                })
            }
            if (E.test(n)) {
                return C.filter(n, e, r)
            }
            n = C.filter(n, e);
            return C.grep(e, function(e) {
                return i.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return C.find.matchesSelector(r, e) ? [r] : []
            }
            return C.find.matches(e, C.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if (typeof e !== "string") {
                    return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (C.contains(i[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    C.find(e, i[t], n)
                }
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], true))
            },
            is: function(e) {
                return !!N(this, typeof e === "string" && _.test(e) ? C(e) : e || [], false).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            P = C.fn.init = function(e, t, n) {
                var r, i;
                if (!e) {
                    return this
                }
                n = n || D;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = L.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof C ? t[0] : t;
                            C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : A, true));
                            if (S.test(r[1]) && C.isPlainObject(t)) {
                                for (r in t) {
                                    if (C.isFunction(this[r])) {
                                        this[r](t[r])
                                    } else {
                                        this.attr(r, t[r])
                                    }
                                }
                            }
                            return this
                        } else {
                            i = A.getElementById(r[2]);
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
                } else if (C.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(C)
                }
                return C.makeArray(e, this)
            };
        P.prototype = C.fn;
        D = C(A);
        var j = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (C.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = typeof e !== "string" && C(e);
                if (!_.test(e)) {
                    for (; r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && C.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return i.call(C(e), this[0])
                }
                return i.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function O(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        C.each({
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
                return O(e, "nextSibling")
            },
            prev: function(e) {
                return O(e, "previousSibling")
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
                return e.contentDocument || C.merge([], e.childNodes)
            }
        }, function(r, i) {
            C.fn[r] = function(e, t) {
                var n = C.map(this, i, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = C.filter(t, n)
                }
                if (this.length > 1) {
                    if (!q[r]) {
                        C.uniqueSort(n)
                    }
                    if (j.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var H = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            var n = {};
            C.each(e.match(H) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        C.Callbacks = function(r) {
            r = typeof r === "string" ? M(r) : C.extend({}, r);
            var n, e, t, i, o = [],
                a = [],
                s = -1,
                u = function() {
                    i = r.once;
                    t = n = true;
                    for (; a.length; s = -1) {
                        e = a.shift();
                        while (++s < o.length) {
                            if (o[s].apply(e[0], e[1]) === false && r.stopOnFalse) {
                                s = o.length;
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
                            o = []
                        } else {
                            o = ""
                        }
                    }
                },
                c = {
                    add: function() {
                        if (o) {
                            if (e && !n) {
                                s = o.length - 1;
                                a.push(e)
                            }(function n(e) {
                                C.each(e, function(e, t) {
                                    if (C.isFunction(t)) {
                                        if (!r.unique || !c.has(t)) {
                                            o.push(t)
                                        }
                                    } else if (t && t.length && C.type(t) !== "string") {
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
                        C.each(arguments, function(e, t) {
                            var n;
                            while ((n = C.inArray(t, o, n)) > -1) {
                                o.splice(n, 1);
                                if (n <= s) {
                                    s--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        if (o) {
                            o = []
                        }
                        return this
                    },
                    disable: function() {
                        i = a = [];
                        o = e = "";
                        return this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        i = a = [];
                        if (!e && !n) {
                            o = e = ""
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
                            a.push(t);
                            if (!n) {
                                u()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        c.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return c
        };

        function B(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function F(e, t, n) {
            var r;
            try {
                if (e && C.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && C.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        C.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            s.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return C.Deferred(function(r) {
                                C.each(o, function(e, t) {
                                    var n = C.isFunction(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && C.isFunction(e.promise)) {
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

                            function c(i, o, a, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (i < u) {
                                                return
                                            }
                                            e = a.apply(n, r);
                                            if (e === o.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (C.isFunction(t)) {
                                                if (s) {
                                                    t.call(e, c(u, o, B, s), c(u, o, R, s))
                                                } else {
                                                    u++;
                                                    t.call(e, c(u, o, B, s), c(u, o, R, s), c(u, o, B, o.notifyWith))
                                                }
                                            } else {
                                                if (a !== B) {
                                                    n = undefined;
                                                    r = [e]
                                                }(s || o.resolveWith)(n, r)
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (C.Deferred.exceptionHook) {
                                                    C.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (i + 1 >= u) {
                                                    if (a !== R) {
                                                        n = undefined;
                                                        r = [e]
                                                    }
                                                    o.rejectWith(n, r)
                                                }
                                            }
                                        };
                                    if (i) {
                                        t()
                                    } else {
                                        if (C.Deferred.getStackHook) {
                                            t.stackTrace = C.Deferred.getStackHook()
                                        }
                                        k.setTimeout(t)
                                    }
                                }
                            }
                            return C.Deferred(function(e) {
                                o[0][3].add(c(0, e, C.isFunction(r) ? r : B, e.notifyWith));
                                o[1][3].add(c(0, e, C.isFunction(t) ? t : B));
                                o[2][3].add(c(0, e, C.isFunction(n) ? n : R))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? C.extend(e, a) : a
                        }
                    },
                    s = {};
                C.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    a[t[1]] = n.add;
                    if (r) {
                        n.add(function() {
                            i = r
                        }, o[3 - e][2].disable, o[0][2].lock)
                    }
                    n.add(t[3].fire);
                    s[t[0]] = function() {
                        s[t[0] + "With"](this === s ? undefined : this, arguments);
                        return this
                    };
                    s[t[0] + "With"] = n.fireWith
                });
                a.promise(s);
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
                    o = C.Deferred(),
                    a = function(t) {
                        return function(e) {
                            r[t] = this;
                            i[t] = arguments.length > 1 ? s.call(arguments) : e;
                            if (!--n) {
                                o.resolveWith(r, i)
                            }
                        }
                    };
                if (n <= 1) {
                    F(e, o.done(a(t)).resolve, o.reject);
                    if (o.state() === "pending" || C.isFunction(i[t] && i[t].then)) {
                        return o.then()
                    }
                }
                while (t--) {
                    F(i[t], a(t), o.reject)
                }
                return o.promise()
            }
        });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            if (k.console && k.console.warn && e && $.test(e.name)) {
                k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        C.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var I = C.Deferred();
        C.fn.ready = function(e) {
            I.then(e).catch(function(e) {
                C.readyException(e)
            });
            return this
        };
        C.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    C.readyWait++
                } else {
                    C.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --C.readyWait : C.isReady) {
                    return
                }
                C.isReady = true;
                if (e !== true && --C.readyWait > 0) {
                    return
                }
                I.resolveWith(A, [C])
            }
        });
        C.ready.then = I.then;

        function W() {
            A.removeEventListener("DOMContentLoaded", W);
            k.removeEventListener("load", W);
            C.ready()
        }
        if (A.readyState === "complete" || A.readyState !== "loading" && !A.documentElement.doScroll) {
            k.setTimeout(C.ready)
        } else {
            A.addEventListener("DOMContentLoaded", W);
            k.addEventListener("load", W)
        }
        var U = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                c = n == null;
            if (C.type(n) === "object") {
                i = true;
                for (s in n) {
                    U(e, t, s, n[s], true, o, a)
                }
            } else if (r !== undefined) {
                i = true;
                if (!C.isFunction(r)) {
                    a = true
                }
                if (c) {
                    if (a) {
                        t.call(e, r);
                        t = null
                    } else {
                        c = t;
                        t = function(e, t, n) {
                            return c.call(C(e), n)
                        }
                    }
                }
                if (t) {
                    for (; s < u; s++) {
                        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
                    }
                }
            }
            if (i) {
                return e
            }
            if (c) {
                return t.call(e)
            }
            return u ? t(e[0], n) : o
        };
        var K = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function V() {
            this.expando = C.expando + V.uid++
        }
        V.uid = 1;
        V.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (K(e)) {
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
                    i[C.camelCase(t)] = n
                } else {
                    for (r in t) {
                        i[C.camelCase(r)] = t[r]
                    }
                }
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][C.camelCase(t)]
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
                    if (C.isArray(t)) {
                        t = t.map(C.camelCase)
                    } else {
                        t = C.camelCase(t);
                        t = t in r ? [t] : t.match(H) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || C.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !C.isEmptyObject(t)
            }
        };
        var z = new V;
        var X = new V;
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

        function Z(e, t, n) {
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
        C.extend({
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
        C.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0],
                    a = o && o.attributes;
                if (n === undefined) {
                    if (this.length) {
                        i = X.get(o);
                        if (o.nodeType === 1 && !z.get(o, "hasDataAttrs")) {
                            t = a.length;
                            while (t--) {
                                if (a[t]) {
                                    r = a[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = C.camelCase(r.slice(5));
                                        Z(o, r, i[r])
                                    }
                                }
                            }
                            z.set(o, "hasDataAttrs", true)
                        }
                    }
                    return i
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        X.set(this, n)
                    })
                }
                return U(this, function(e) {
                    var t;
                    if (o && e === undefined) {
                        t = X.get(o, n);
                        if (t !== undefined) {
                            return t
                        }
                        t = Z(o, n);
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
        C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = z.get(e, t);
                    if (n) {
                        if (!r || C.isArray(n)) {
                            r = z.access(e, t, C.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = C._queueHooks(e, t),
                    a = function() {
                        C.dequeue(e, t)
                    };
                if (i === "inprogress") {
                    i = n.shift();
                    r--
                }
                if (i) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete o.stop;
                    i.call(e, a, o)
                }
                if (!r && o) {
                    o.empty.fire()
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return z.get(e, n) || z.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        z.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        C.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return C.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        C.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = C.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        if (!--r) {
                            i.resolveWith(o, [o])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (a--) {
                    n = z.get(o[a], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(s)
                    }
                }
                s();
                return i.promise(t)
            }
        });
        var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ee = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i");
        var te = ["Top", "Right", "Bottom", "Left"];
        var ne = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && C.contains(e.ownerDocument, e) && C.css(e, "display") === "none"
        };
        var re = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o];
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        };

        function ie(e, t, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                u = s(),
                c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                l = (C.cssNumber[t] || c !== "px" && +u) && ee.exec(C.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3];
                n = n || [];
                l = +u || 1;
                do {
                    o = o || ".5";
                    l = l / o;
                    C.style(e, t, l + c)
                } while (o !== (o = s() / u) && o !== 1 && --a)
            }
            if (n) {
                l = +l || +u || 0;
                i = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = c;
                    r.start = l;
                    r.end = i
                }
            }
            return i
        }
        var oe = {};

        function ae(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = oe[r];
            if (i) {
                return i
            }
            t = n.body.appendChild(n.createElement(r));
            i = C.css(t, "display");
            t.parentNode.removeChild(t);
            if (i === "none") {
                i = "block"
            }
            oe[r] = i;
            return i
        }

        function se(e, t) {
            var n, r, i = [],
                o = 0,
                a = e.length;
            for (; o < a; o++) {
                r = e[o];
                if (!r.style) {
                    continue
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        i[o] = z.get(r, "display") || null;
                        if (!i[o]) {
                            r.style.display = ""
                        }
                    }
                    if (r.style.display === "" && ne(r)) {
                        i[o] = ae(r)
                    }
                } else {
                    if (n !== "none") {
                        i[o] = "none";
                        z.set(r, "display", n)
                    }
                }
            }
            for (o = 0; o < a; o++) {
                if (i[o] != null) {
                    e[o].style.display = i[o]
                }
            }
            return e
        }
        C.fn.extend({
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
                        C(this).show()
                    } else {
                        C(this).hide()
                    }
                })
            }
        });
        var ue = /^(?:checkbox|radio)$/i;
        var ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var le = /^$|\/(?:java|ecma)script/i;
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

        function pe(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && C.nodeName(e, t)) {
                return C.merge([e], n)
            }
            return n
        }

        function de(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function ge(e, t, n, r, i) {
            var o, a, s, u, c, l, f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            for (; d < h; d++) {
                o = e[d];
                if (o || o === 0) {
                    if (C.type(o) === "object") {
                        C.merge(p, o.nodeType ? [o] : o)
                    } else if (!he.test(o)) {
                        p.push(t.createTextNode(o))
                    } else {
                        a = a || f.appendChild(t.createElement("div"));
                        s = (ce.exec(o) || ["", ""])[1].toLowerCase();
                        u = fe[s] || fe._default;
                        a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2];
                        l = u[0];
                        while (l--) {
                            a = a.lastChild
                        }
                        C.merge(p, a.childNodes);
                        a = f.firstChild;
                        a.textContent = ""
                    }
                }
            }
            f.textContent = "";
            d = 0;
            while (o = p[d++]) {
                if (r && C.inArray(o, r) > -1) {
                    if (i) {
                        i.push(o)
                    }
                    continue
                }
                c = C.contains(o.ownerDocument, o);
                a = pe(f.appendChild(o), "script");
                if (c) {
                    de(a)
                }
                if (n) {
                    l = 0;
                    while (o = a[l++]) {
                        if (le.test(o.type || "")) {
                            n.push(o)
                        }
                    }
                }
            }
            return f
        }(function() {
            var e = A.createDocumentFragment(),
                t = e.appendChild(A.createElement("div")),
                n = A.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            m.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            m.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var me = A.documentElement;
        var ye = /^key/,
            ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            xe = /^([^.]*)(?:\.(.+)|)/;

        function be() {
            return true
        }

        function we() {
            return false
        }

        function Te() {
            try {
                return A.activeElement
            } catch (e) {}
        }

        function ke(e, t, n, r, i, o) {
            var a, s;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined
                }
                for (s in t) {
                    ke(e, s, n, r, t[s], o)
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
            if (o === 1) {
                a = i;
                i = function(e) {
                    C().off(e);
                    return a.apply(this, arguments)
                };
                i.guid = a.guid || (a.guid = C.guid++)
            }
            return e.each(function() {
                C.event.add(this, t, i, r, n)
            })
        }
        C.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, g, m = z.get(t);
                if (!m) {
                    return
                }
                if (n.handler) {
                    o = n;
                    n = o.handler;
                    i = o.selector
                }
                if (i) {
                    C.find.matchesSelector(me, i)
                }
                if (!n.guid) {
                    n.guid = C.guid++
                }
                if (!(u = m.events)) {
                    u = m.events = {}
                }
                if (!(a = m.handle)) {
                    a = m.handle = function(e) {
                        return typeof C !== "undefined" && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(H) || [""];
                c = e.length;
                while (c--) {
                    s = xe.exec(e[c]) || [];
                    d = g = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!d) {
                        continue
                    }
                    f = C.event.special[d] || {};
                    d = (i ? f.delegateType : f.bindType) || d;
                    f = C.event.special[d] || {};
                    l = C.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o);
                    if (!(p = u[d])) {
                        p = u[d] = [];
                        p.delegateCount = 0;
                        if (!f.setup || f.setup.call(t, r, h, a) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(d, a)
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(t, l);
                        if (!l.handler.guid) {
                            l.handler.guid = n.guid
                        }
                    }
                    if (i) {
                        p.splice(p.delegateCount++, 0, l)
                    } else {
                        p.push(l)
                    }
                    C.event.global[d] = true
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, g, m = z.hasData(e) && z.get(e);
                if (!m || !(u = m.events)) {
                    return
                }
                t = (t || "").match(H) || [""];
                c = t.length;
                while (c--) {
                    s = xe.exec(t[c]) || [];
                    d = g = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!d) {
                        for (d in u) {
                            C.event.remove(e, d + t[c], n, r, true)
                        }
                        continue
                    }
                    f = C.event.special[d] || {};
                    d = (r ? f.delegateType : f.bindType) || d;
                    p = u[d] || [];
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    a = o = p.length;
                    while (o--) {
                        l = p[o];
                        if ((i || g === l.origType) && (!n || n.guid === l.guid) && (!s || s.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
                            p.splice(o, 1);
                            if (l.selector) {
                                p.delegateCount--
                            }
                            if (f.remove) {
                                f.remove.call(e, l)
                            }
                        }
                    }
                    if (a && !p.length) {
                        if (!f.teardown || f.teardown.call(e, h, m.handle) === false) {
                            C.removeEvent(e, d, m.handle)
                        }
                        delete u[d]
                    }
                }
                if (C.isEmptyObject(u)) {
                    z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = C.event.fix(e);
                var n, r, i, o, a, s, u = new Array(arguments.length),
                    c = (z.get(this, "events") || {})[t.type] || [],
                    l = C.event.special[t.type] || {};
                u[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    u[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, t) === false) {
                    return
                }
                s = C.event.handlers.call(this, t, c);
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem;
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(a.namespace)) {
                            t.handleObj = a;
                            t.data = a.data;
                            i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (l.postDispatch) {
                    l.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; c !== this; c = c.parentNode || this) {
                        if (c.nodeType === 1 && !(e.type === "click" && c.disabled === true)) {
                            o = [];
                            a = {};
                            for (n = 0; n < u; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (a[i] === undefined) {
                                    a[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [c]).length
                                }
                                if (a[i]) {
                                    o.push(r)
                                }
                            }
                            if (o.length) {
                                s.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                        }
                    }
                }
                c = this;
                if (u < t.length) {
                    s.push({
                        elem: c,
                        handlers: t.slice(u)
                    })
                }
                return s
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: C.isFunction(e) ? function() {
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
                return e[C.expando] ? e : new C.Event(e)
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
                        if (this.type === "checkbox" && this.click && C.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return C.nodeName(e.target, "a")
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
        C.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        C.Event = function(e, t) {
            if (!(this instanceof C.Event)) {
                return new C.Event(e, t)
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
                C.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || C.now();
            this[C.expando] = true
        };
        C.Event.prototype = {
            constructor: C.Event,
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
        C.each({
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
        }, C.event.addProp);
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, o) {
            C.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    if (!r || r !== n && !C.contains(n, r)) {
                        e.type = i.origType;
                        t = i.handler.apply(this, arguments);
                        e.type = o
                    }
                    return t
                }
            }
        });
        C.fn.extend({
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
                    C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
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
                    C.event.remove(this, e, n, t)
                })
            }
        });
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ce = /<script|<style|<link/i,
            _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Se = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ne(e, t) {
            if (C.nodeName(e, "table") && C.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function De(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Le(e) {
            var t = Se.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function Pe(e, t) {
            var n, r, i, o, a, s, u, c;
            if (t.nodeType !== 1) {
                return
            }
            if (z.hasData(e)) {
                o = z.access(e);
                a = z.set(t, o);
                c = o.events;
                if (c) {
                    delete a.handle;
                    a.events = {};
                    for (i in c) {
                        for (n = 0, r = c[i].length; n < r; n++) {
                            C.event.add(t, i, c[i][n])
                        }
                    }
                }
            }
            if (X.hasData(e)) {
                s = X.access(e);
                u = C.extend({}, s);
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

        function qe(n, r, i, o) {
            r = g.apply([], r);
            var e, t, a, s, u, c, l = 0,
                f = n.length,
                p = f - 1,
                d = r[0],
                h = C.isFunction(d);
            if (h || f > 1 && typeof d === "string" && !m.checkClone && _e.test(d)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = d.call(this, e, t.html())
                    }
                    qe(t, r, i, o)
                })
            }
            if (f) {
                e = ge(r, n[0].ownerDocument, false, n, o);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || o) {
                    a = C.map(pe(e, "script"), De);
                    s = a.length;
                    for (; l < f; l++) {
                        u = e;
                        if (l !== p) {
                            u = C.clone(u, true, true);
                            if (s) {
                                C.merge(a, pe(u, "script"))
                            }
                        }
                        i.call(n[l], u, l)
                    }
                    if (s) {
                        c = a[a.length - 1].ownerDocument;
                        C.map(a, Le);
                        for (l = 0; l < s; l++) {
                            u = a[l];
                            if (le.test(u.type || "") && !z.access(u, "globalEval") && C.contains(c, u)) {
                                if (u.src) {
                                    if (C._evalUrl) {
                                        C._evalUrl(u.src)
                                    }
                                } else {
                                    y(u.textContent.replace(Ee, ""), c)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function Oe(e, t, n) {
            var r, i = t ? C.filter(t, e) : e,
                o = 0;
            for (;
                (r = i[o]) != null; o++) {
                if (!n && r.nodeType === 1) {
                    C.cleanData(pe(r))
                }
                if (r.parentNode) {
                    if (n && C.contains(r.ownerDocument, r)) {
                        de(pe(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ae, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(true),
                    u = C.contains(e.ownerDocument, e);
                if (!m.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !C.isXMLDoc(e)) {
                    a = pe(s);
                    o = pe(e);
                    for (r = 0, i = o.length; r < i; r++) {
                        je(o[r], a[r])
                    }
                }
                if (t) {
                    if (n) {
                        o = o || pe(e);
                        a = a || pe(s);
                        for (r = 0, i = o.length; r < i; r++) {
                            Pe(o[r], a[r])
                        }
                    } else {
                        Pe(e, s)
                    }
                }
                a = pe(s, "script");
                if (a.length > 0) {
                    de(a, !u && pe(e, "script"))
                }
                return s
            },
            cleanData: function(e) {
                var t, n, r, i = C.event.special,
                    o = 0;
                for (;
                    (n = e[o]) !== undefined; o++) {
                    if (K(n)) {
                        if (t = n[z.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        C.event.remove(n, r)
                                    } else {
                                        C.removeEvent(n, r, t.handle)
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
        C.fn.extend({
            detach: function(e) {
                return Oe(this, e, true)
            },
            remove: function(e) {
                return Oe(this, e)
            },
            text: function(e) {
                return U(this, function(e) {
                    return e === undefined ? C.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return qe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return qe(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return qe(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return qe(this, arguments, function(e) {
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
                        C.cleanData(pe(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return U(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Ce.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    C.cleanData(pe(t, false));
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
                return qe(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (C.inArray(this, n) < 0) {
                        C.cleanData(pe(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            C.fn[e] = function(e) {
                var t, n = [],
                    r = C(e),
                    i = r.length - 1,
                    o = 0;
                for (; o <= i; o++) {
                    t = o === i ? this : this.clone(true);
                    C(r[o])[a](t);
                    u.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var He = /^margin/;
        var Me = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i");
        var Be = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = k
            }
            return t.getComputedStyle(e)
        };
        (function() {
            function e() {
                if (!a) {
                    return
                }
                a.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                a.innerHTML = "";
                me.appendChild(o);
                var e = k.getComputedStyle(a);
                t = e.top !== "1%";
                i = e.marginLeft === "2px";
                n = e.width === "4px";
                a.style.marginRight = "50%";
                r = e.marginRight === "4px";
                me.removeChild(o);
                a = null
            }
            var t, n, r, i, o = A.createElement("div"),
                a = A.createElement("div");
            if (!a.style) {
                return
            }
            a.style.backgroundClip = "content-box";
            a.cloneNode(true).style.backgroundClip = "";
            m.clearCloneStyle = a.style.backgroundClip === "content-box";
            o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            o.appendChild(a);
            C.extend(m, {
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
            var r, i, o, a, s = e.style;
            n = n || Be(e);
            if (n) {
                a = n.getPropertyValue(t) || n[t];
                if (a === "" && !C.contains(e.ownerDocument, e)) {
                    a = C.style(e, t)
                }
                if (!m.pixelMarginRight() && Me.test(a) && He.test(t)) {
                    r = s.width;
                    i = s.minWidth;
                    o = s.maxWidth;
                    s.minWidth = s.maxWidth = s.width = a;
                    a = n.width;
                    s.width = r;
                    s.minWidth = i;
                    s.maxWidth = o
                }
            }
            return a !== undefined ? a + "" : a
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
        var $e = /^(none|table(?!-c[ea]).+)/,
            Ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            We = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ue = ["Webkit", "Moz", "ms"],
            Ke = A.createElement("div").style;

        function Ve(e) {
            if (e in Ke) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--) {
                e = Ue[n] + t;
                if (e in Ke) {
                    return e
                }
            }
        }

        function ze(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Xe(e, t, n, r, i) {
            var o, a = 0;
            if (n === (r ? "border" : "content")) {
                o = 4
            } else {
                o = t === "width" ? 1 : 0
            }
            for (; o < 4; o += 2) {
                if (n === "margin") {
                    a += C.css(e, n + te[o], true, i)
                }
                if (r) {
                    if (n === "content") {
                        a -= C.css(e, "padding" + te[o], true, i)
                    }
                    if (n !== "margin") {
                        a -= C.css(e, "border" + te[o] + "Width", true, i)
                    }
                } else {
                    a += C.css(e, "padding" + te[o], true, i);
                    if (n !== "padding") {
                        a += C.css(e, "border" + te[o] + "Width", true, i)
                    }
                }
            }
            return a
        }

        function Ge(e, t, n) {
            var r, i = true,
                o = Be(e),
                a = C.css(e, "boxSizing", false, o) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = Re(e, t, o);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if (Me.test(r)) {
                    return r
                }
                i = a && (m.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + Xe(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }
        C.extend({
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
                var i, o, a, s = C.camelCase(t),
                    u = e.style;
                t = C.cssProps[s] || (C.cssProps[s] = Ve(s) || s);
                a = C.cssHooks[t] || C.cssHooks[s];
                if (n !== undefined) {
                    o = typeof n;
                    if (o === "string" && (i = ee.exec(n)) && i[1]) {
                        n = ie(e, t, i);
                        o = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (o === "number") {
                        n += i && i[3] || (C.cssNumber[s] ? "" : "px")
                    }
                    if (!m.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        u[t] = "inherit"
                    }
                    if (!a || !("set" in a) || (n = a.set(e, n, r)) !== undefined) {
                        u[t] = n
                    }
                } else {
                    if (a && "get" in a && (i = a.get(e, false, r)) !== undefined) {
                        return i
                    }
                    return u[t]
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = C.camelCase(t);
                t = C.cssProps[s] || (C.cssProps[s] = Ve(s) || s);
                a = C.cssHooks[t] || C.cssHooks[s];
                if (a && "get" in a) {
                    i = a.get(e, true, n)
                }
                if (i === undefined) {
                    i = Re(e, t, r)
                }
                if (i === "normal" && t in We) {
                    i = We[t]
                }
                if (n === "" || n) {
                    o = parseFloat(i);
                    return n === true || isFinite(o) ? o || 0 : i
                }
                return i
            }
        });
        C.each(["height", "width"], function(e, a) {
            C.cssHooks[a] = {
                get: function(e, t, n) {
                    if (t) {
                        return $e.test(C.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Ie, function() {
                            return Ge(e, a, n)
                        }) : Ge(e, a, n)
                    }
                },
                set: function(e, t, n) {
                    var r, i = n && Be(e),
                        o = n && Xe(e, a, n, C.css(e, "boxSizing", false, i) === "border-box", i);
                    if (o && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[a] = t;
                        t = C.css(e, a)
                    }
                    return ze(e, t, o)
                }
            }
        });
        C.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            C.cssHooks[i + o] = {
                expand: function(e) {
                    var t = 0,
                        n = {},
                        r = typeof e === "string" ? e.split(" ") : [e];
                    for (; t < 4; t++) {
                        n[i + te[t] + o] = r[t] || r[t - 2] || r[0]
                    }
                    return n
                }
            };
            if (!He.test(i)) {
                C.cssHooks[i + o].set = ze
            }
        });
        C.fn.extend({
            css: function(e, t) {
                return U(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (C.isArray(t)) {
                        r = Be(e);
                        i = t.length;
                        for (; a < i; a++) {
                            o[t[a]] = C.css(e, t[a], false, r)
                        }
                        return o
                    }
                    return n !== undefined ? C.style(e, t, n) : C.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Qe(e, t, n, r, i) {
            return new Qe.prototype.init(e, t, n, r, i)
        }
        C.Tween = Qe;
        Qe.prototype = {
            constructor: Qe,
            init: function(e, t, n, r, i, o) {
                this.elem = e;
                this.prop = n;
                this.easing = i || C.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Qe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Qe.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
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
                    t = C.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (C.fx.step[e.prop]) {
                        C.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[C.cssProps[e.prop]] != null || C.cssHooks[e.prop])) {
                        C.style(e.elem, e.prop, e.now + e.unit)
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
        C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        C.fx = Qe.prototype.init;
        C.fx.step = {};
        var Ye, Ze, Je = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Ze) {
                k.requestAnimationFrame(tt);
                C.fx.tick()
            }
        }

        function nt() {
            k.setTimeout(function() {
                Ye = undefined
            });
            return Ye = C.now()
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
                o = 0,
                a = i.length;
            for (; o < a; o++) {
                if (r = i[o].call(n, t, e)) {
                    return r
                }
            }
        }

        function ot(e, t, n) {
            var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ne(e),
                m = z.get(e, "fxshow");
            if (!n.queue) {
                a = C._queueHooks(e, "fx");
                if (a.unqueued == null) {
                    a.unqueued = 0;
                    s = a.empty.fire;
                    a.empty.fire = function() {
                        if (!a.unqueued) {
                            s()
                        }
                    }
                }
                a.unqueued++;
                p.always(function() {
                    p.always(function() {
                        a.unqueued--;
                        if (!C.queue(e, "fx").length) {
                            a.empty.fire()
                        }
                    })
                })
            }
            for (r in t) {
                i = t[r];
                if (Je.test(i)) {
                    delete t[r];
                    o = o || i === "toggle";
                    if (i === (g ? "hide" : "show")) {
                        if (i === "show" && m && m[r] !== undefined) {
                            g = true
                        } else {
                            continue
                        }
                    }
                    d[r] = m && m[r] || C.style(e, r)
                }
            }
            u = !C.isEmptyObject(t);
            if (!u && C.isEmptyObject(d)) {
                return
            }
            if (f && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                c = m && m.display;
                if (c == null) {
                    c = z.get(e, "display")
                }
                l = C.css(e, "display");
                if (l === "none") {
                    if (c) {
                        l = c
                    } else {
                        se([e], true);
                        c = e.style.display || c;
                        l = C.css(e, "display");
                        se([e])
                    }
                }
                if (l === "inline" || l === "inline-block" && c != null) {
                    if (C.css(e, "float") === "none") {
                        if (!u) {
                            p.done(function() {
                                h.display = c
                            });
                            if (c == null) {
                                l = h.display;
                                c = l === "none" ? "" : l
                            }
                        }
                        h.display = "inline-block"
                    }
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                p.always(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            u = false;
            for (r in d) {
                if (!u) {
                    if (m) {
                        if ("hidden" in m) {
                            g = m.hidden
                        }
                    } else {
                        m = z.access(e, "fxshow", {
                            display: c
                        })
                    }
                    if (o) {
                        m.hidden = !g
                    }
                    if (g) {
                        se([e], true)
                    }
                    p.done(function() {
                        if (!g) {
                            se([e])
                        }
                        z.remove(e, "fxshow");
                        for (r in d) {
                            C.style(e, r, d[r])
                        }
                    })
                }
                u = it(g ? m[r] : 0, r, p);
                if (!(r in m)) {
                    m[r] = u.start;
                    if (g) {
                        u.end = u.start;
                        u.start = 0
                    }
                }
            }
        }

        function at(e, t) {
            var n, r, i, o, a;
            for (n in e) {
                r = C.camelCase(n);
                i = t[r];
                o = e[n];
                if (C.isArray(o)) {
                    i = o[1];
                    o = e[n] = o[0]
                }
                if (n !== r) {
                    e[r] = o;
                    delete e[n]
                }
                a = C.cssHooks[r];
                if (a && "expand" in a) {
                    o = a.expand(o);
                    delete e[r];
                    for (n in o) {
                        if (!(n in e)) {
                            e[n] = o[n];
                            t[n] = i
                        }
                    }
                } else {
                    t[r] = i
                }
            }
        }

        function st(a, e, t) {
            var n, s, r = 0,
                i = st.prefilters.length,
                u = C.Deferred().always(function() {
                    delete o.elem
                }),
                o = function() {
                    if (s) {
                        return false
                    }
                    var e = Ye || nt(),
                        t = Math.max(0, c.startTime + c.duration - e),
                        n = t / c.duration || 0,
                        r = 1 - n,
                        i = 0,
                        o = c.tweens.length;
                    for (; i < o; i++) {
                        c.tweens[i].run(r)
                    }
                    u.notifyWith(a, [c, r, t]);
                    if (r < 1 && o) {
                        return t
                    } else {
                        u.resolveWith(a, [c]);
                        return false
                    }
                },
                c = u.promise({
                    elem: a,
                    props: C.extend({}, e),
                    opts: C.extend(true, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ye || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = C.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        c.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; t < n; t++) {
                            c.tweens[t].run(1)
                        }
                        if (e) {
                            u.notifyWith(a, [c, 1, 0]);
                            u.resolveWith(a, [c, e])
                        } else {
                            u.rejectWith(a, [c, e])
                        }
                        return this
                    }
                }),
                l = c.props;
            at(l, c.opts.specialEasing);
            for (; r < i; r++) {
                n = st.prefilters[r].call(c, a, l, c.opts);
                if (n) {
                    if (C.isFunction(n.stop)) {
                        C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(n.stop, n)
                    }
                    return n
                }
            }
            C.map(l, it, c);
            if (C.isFunction(c.opts.start)) {
                c.opts.start.call(a, c)
            }
            C.fx.timer(C.extend(o, {
                elem: a,
                anim: c,
                queue: c.opts.queue
            }));
            return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        C.Animation = C.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ie(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (C.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(H)
                }
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) {
                    n = e[r];
                    st.tweeners[n] = st.tweeners[n] || [];
                    st.tweeners[n].unshift(t)
                }
            },
            prefilters: [ot],
            prefilter: function(e, t) {
                if (t) {
                    st.prefilters.unshift(e)
                } else {
                    st.prefilters.push(e)
                }
            }
        });
        C.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? C.extend({}, e) : {
                complete: n || !n && t || C.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !C.isFunction(t) && t
            };
            if (C.fx.off || A.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in C.fx.speeds) {
                        r.duration = C.fx.speeds[r.duration]
                    } else {
                        r.duration = C.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (C.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    C.dequeue(this, r.queue)
                }
            };
            return r
        };
        C.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = C.isEmptyObject(t),
                    o = C.speed(e, n, r),
                    a = function() {
                        var e = st(this, C.extend({}, t), o);
                        if (i || z.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                a.finish = a;
                return i || o.queue === false ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(o)
                };
                if (typeof i !== "string") {
                    o = e;
                    e = i;
                    i = undefined
                }
                if (e && i !== false) {
                    this.queue(i || "fx", [])
                }
                return this.each(function() {
                    var e = true,
                        t = i != null && i + "queueHooks",
                        n = C.timers,
                        r = z.get(this);
                    if (t) {
                        if (r[t] && r[t].stop) {
                            a(r[t])
                        }
                    } else {
                        for (t in r) {
                            if (r[t] && r[t].stop && et.test(t)) {
                                a(r[t])
                            }
                        }
                    }
                    for (t = n.length; t--;) {
                        if (n[t].elem === this && (i == null || n[t].queue === i)) {
                            n[t].anim.stop(o);
                            e = false;
                            n.splice(t, 1)
                        }
                    }
                    if (e || !o) {
                        C.dequeue(this, i)
                    }
                })
            },
            finish: function(a) {
                if (a !== false) {
                    a = a || "fx"
                }
                return this.each(function() {
                    var e, t = z.get(this),
                        n = t[a + "queue"],
                        r = t[a + "queueHooks"],
                        i = C.timers,
                        o = n ? n.length : 0;
                    t.finish = true;
                    C.queue(this, a, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (e = i.length; e--;) {
                        if (i[e].elem === this && i[e].queue === a) {
                            i[e].anim.stop(true);
                            i.splice(e, 1)
                        }
                    }
                    for (e = 0; e < o; e++) {
                        if (n[e] && n[e].finish) {
                            n[e].finish.call(this)
                        }
                    }
                    delete t.finish
                })
            }
        });
        C.each(["toggle", "show", "hide"], function(e, r) {
            var i = C.fn[r];
            C.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        C.each({
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
            C.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        C.timers = [];
        C.fx.tick = function() {
            var e, t = 0,
                n = C.timers;
            Ye = C.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                C.fx.stop()
            }
            Ye = undefined
        };
        C.fx.timer = function(e) {
            C.timers.push(e);
            if (e()) {
                C.fx.start()
            } else {
                C.timers.pop()
            }
        };
        C.fx.interval = 13;
        C.fx.start = function() {
            if (!Ze) {
                Ze = k.requestAnimationFrame ? k.requestAnimationFrame(tt) : k.setInterval(C.fx.tick, C.fx.interval)
            }
        };
        C.fx.stop = function() {
            if (k.cancelAnimationFrame) {
                k.cancelAnimationFrame(Ze)
            } else {
                k.clearInterval(Ze)
            }
            Ze = null
        };
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        C.fn.delay = function(r, e) {
            r = C.fx ? C.fx.speeds[r] || r : r;
            e = e || "fx";
            return this.queue(e, function(e, t) {
                var n = k.setTimeout(e, r);
                t.stop = function() {
                    k.clearTimeout(n)
                }
            })
        };
        (function() {
            var e = A.createElement("input"),
                t = A.createElement("select"),
                n = t.appendChild(A.createElement("option"));
            e.type = "checkbox";
            m.checkOn = e.value !== "";
            m.optSelected = n.selected;
            e = A.createElement("input");
            e.value = "t";
            e.type = "radio";
            m.radioValue = e.value === "t"
        })();
        var ut, ct = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return U(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        });
        C.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (o === 3 || o === 8 || o === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return C.prop(e, t, n)
                }
                if (o !== 1 || !C.isXMLDoc(e)) {
                    i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ut : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        C.removeAttr(e, t);
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
                r = C.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && t === "radio" && C.nodeName(e, "input")) {
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
                    i = t && t.match(H);
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
                    C.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = ct[t] || C.find.attr;
            ct[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                if (!n) {
                    i = ct[o];
                    ct[o] = r;
                    r = a(e, t, n) != null ? o : null;
                    ct[o] = i
                }
                return r
            }
        });
        var lt = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        C.fn.extend({
            prop: function(e, t) {
                return U(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        });
        C.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (o === 3 || o === 8 || o === 2) {
                    return
                }
                if (o !== 1 || !C.isXMLDoc(e)) {
                    t = C.propFix[t] || t;
                    i = C.propHooks[t]
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
                        var t = C.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (lt.test(e.nodeName) || ft.test(e.nodeName) && e.href) {
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
        if (!m.optSelected) {
            C.propHooks.selected = {
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
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        });

        function pt(e) {
            var t = e.match(H) || [];
            return t.join(" ")
        }

        function dt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        C.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (C.isFunction(t)) {
                    return this.each(function(e) {
                        C(this).addClass(t.call(this, e, dt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(H) || [];
                    while (n = this[u++]) {
                        i = dt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            a = 0;
                            while (o = e[a++]) {
                                if (r.indexOf(" " + o + " ") < 0) {
                                    r += o + " "
                                }
                            }
                            s = pt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (C.isFunction(t)) {
                    return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, dt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(H) || [];
                    while (n = this[u++]) {
                        i = dt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            a = 0;
                            while (o = e[a++]) {
                                while (r.indexOf(" " + o + " ") > -1) {
                                    r = r.replace(" " + o + " ", " ")
                                }
                            }
                            s = pt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(i, t) {
                var o = typeof i;
                if (typeof t === "boolean" && o === "string") {
                    return t ? this.addClass(i) : this.removeClass(i)
                }
                if (C.isFunction(i)) {
                    return this.each(function(e) {
                        C(this).toggleClass(i.call(this, e, dt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (o === "string") {
                        t = 0;
                        n = C(this);
                        r = i.match(H) || [];
                        while (e = r[t++]) {
                            if (n.hasClass(e)) {
                                n.removeClass(e)
                            } else {
                                n.addClass(e)
                            }
                        }
                    } else if (i === undefined || o === "boolean") {
                        e = dt(this);
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
                    if (n.nodeType === 1 && (" " + pt(dt(n)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var ht = /\r/g;
        C.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()];
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
                i = C.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        t = n.call(this, e, C(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (C.isArray(t)) {
                        t = C.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return t != null ? t : pt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = e.type === "select-one",
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        if (o < 0) {
                            r = u
                        } else {
                            r = a ? o : 0
                        }
                        for (; r < u; r++) {
                            n = i[r];
                            if ((n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                                t = C(n).val();
                                if (a) {
                                    return t
                                }
                                s.push(t)
                            }
                        }
                        return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            o = C.makeArray(t),
                            a = i.length;
                        while (a--) {
                            r = i[a];
                            if (r.selected = C.inArray(C.valHooks.option.get(r), o) > -1) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return o
                    }
                }
            }
        });
        C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (C.isArray(t)) {
                        return e.checked = C.inArray(C(e).val(), t) > -1
                    }
                }
            };
            if (!m.checkOn) {
                C.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var gt = /^(?:focusinfocus|focusoutblur)$/;
        C.extend(C.event, {
            trigger: function(e, t, n, r) {
                var i, o, a, s, u, c, l, f = [n || A],
                    p = h.call(e, "type") ? e.type : e,
                    d = h.call(e, "namespace") ? e.namespace.split(".") : [];
                o = a = n = n || A;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (gt.test(p + C.event.triggered)) {
                    return
                }
                if (p.indexOf(".") > -1) {
                    d = p.split(".");
                    p = d.shift();
                    d.sort()
                }
                u = p.indexOf(":") < 0 && "on" + p;
                e = e[C.expando] ? e : new C.Event(p, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = d.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : C.makeArray(t, [e]);
                l = C.event.special[p] || {};
                if (!r && l.trigger && l.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !l.noBubble && !C.isWindow(n)) {
                    s = l.delegateType || p;
                    if (!gt.test(s + p)) {
                        o = o.parentNode
                    }
                    for (; o; o = o.parentNode) {
                        f.push(o);
                        a = o
                    }
                    if (a === (n.ownerDocument || A)) {
                        f.push(a.defaultView || a.parentWindow || k)
                    }
                }
                i = 0;
                while ((o = f[i++]) && !e.isPropagationStopped()) {
                    e.type = i > 1 ? s : l.bindType || p;
                    c = (z.get(o, "events") || {})[e.type] && z.get(o, "handle");
                    if (c) {
                        c.apply(o, t)
                    }
                    c = u && o[u];
                    if (c && c.apply && K(o)) {
                        e.result = c.apply(o, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = p;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!l._default || l._default.apply(f.pop(), t) === false) && K(n)) {
                        if (u && C.isFunction(n[p]) && !C.isWindow(n)) {
                            a = n[u];
                            if (a) {
                                n[u] = null
                            }
                            C.event.triggered = p;
                            n[p]();
                            C.event.triggered = undefined;
                            if (a) {
                                n[u] = a
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: true
                });
                C.event.trigger(r, null, t)
            }
        });
        C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return C.event.trigger(e, t, n, true)
                }
            }
        });
        C.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            C.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        C.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        m.focusin = "onfocusin" in k;
        if (!m.focusin) {
            C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var i = function(e) {
                    C.event.simulate(r, e.target, C.event.fix(e))
                };
                C.event.special[r] = {
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
        var mt = k.location;
        var yt = C.now();
        var vt = /\?/;
        C.parseXML = function(e) {
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
                C.error("Invalid XML: " + e)
            }
            return t
        };
        var xt = /\[\]$/,
            bt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;

        function kt(n, e, r, i) {
            var t;
            if (C.isArray(e)) {
                C.each(e, function(e, t) {
                    if (r || xt.test(n)) {
                        i(n, t)
                    } else {
                        kt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
                    }
                })
            } else if (!r && C.type(e) === "object") {
                for (t in e) {
                    kt(n + "[" + t + "]", e[t], r, i)
                }
            } else {
                i(n, e)
            }
        }
        C.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = C.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (C.isArray(e) || e.jquery && !C.isPlainObject(e)) {
                C.each(e, function() {
                    i(this.name, this.value)
                })
            } else {
                for (n in e) {
                    kt(n, e[n], t, i)
                }
            }
            return r.join("&")
        };
        C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !ue.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    if (n == null) {
                        return null
                    }
                    if (C.isArray(n)) {
                        return C.map(n, function(e) {
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
        var At = /%20/g,
            Ct = /#.*$/,
            _t = /([?&])_=[^&]*/,
            St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nt = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            Lt = {},
            Pt = {},
            jt = "*/".concat("*"),
            qt = A.createElement("a");
        qt.href = mt.href;

        function Ot(o) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    i = e.toLowerCase().match(H) || [];
                if (C.isFunction(t)) {
                    while (n = i[r++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (o[n] = o[n] || []).unshift(t)
                        } else {
                            (o[n] = o[n] || []).push(t)
                        }
                    }
                }
            }
        }

        function Ht(t, i, o, a) {
            var s = {},
                u = t === Pt;

            function c(e) {
                var r;
                s[e] = true;
                C.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    if (typeof n === "string" && !u && !s[n]) {
                        i.dataTypes.unshift(n);
                        c(n);
                        return false
                    } else if (u) {
                        return !(r = n)
                    }
                });
                return r
            }
            return c(i.dataTypes[0]) || !s["*"] && c("*")
        }

        function Mt(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                C.extend(true, e, r)
            }
            return e
        }

        function Bt(e, t, n) {
            var r, i, o, a, s = e.contents,
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
                o = u[0]
            } else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    if (!a) {
                        a = i
                    }
                }
                o = o || a
            }
            if (o) {
                if (o !== u[0]) {
                    u.unshift(o)
                }
                return n[o]
            }
        }

        function Rt(e, t, n, r) {
            var i, o, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1]) {
                for (a in e.converters) {
                    c[a.toLowerCase()] = e.converters[a]
                }
            }
            o = l.shift();
            while (o) {
                if (e.responseFields[o]) {
                    n[e.responseFields[o]] = t
                }
                if (!u && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                u = o;
                o = l.shift();
                if (o) {
                    if (o === "*") {
                        o = u
                    } else if (u !== "*" && u !== o) {
                        a = c[u + " " + o] || c["* " + o];
                        if (!a) {
                            for (i in c) {
                                s = i.split(" ");
                                if (s[1] === o) {
                                    a = c[u + " " + s[0]] || c["* " + s[0]];
                                    if (a) {
                                        if (a === true) {
                                            a = c[i]
                                        } else if (c[i] !== true) {
                                            o = s[0];
                                            l.unshift(s[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (a !== true) {
                            if (a && e.throws) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
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
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mt.href,
                type: "GET",
                isLocal: Et.test(mt.protocol),
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
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Mt(Mt(e, C.ajaxSettings), t) : Mt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Ot(Lt),
            ajaxTransport: Ot(Pt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var l, f, p, n, d, r, h, g, i, o, m = C.ajaxSetup({}, t),
                    y = m.context || m,
                    v = m.context && (y.nodeType || y.jquery) ? C(y) : C.event,
                    x = C.Deferred(),
                    b = C.Callbacks("once memory"),
                    w = m.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = St.exec(p)) {
                                        n[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = n[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            if (h == null) {
                                e = s[e.toLowerCase()] = s[e.toLowerCase()] || e;
                                a[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (h == null) {
                                m.mimeType = e
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
                            if (l) {
                                l.abort(t)
                            }
                            c(0, t);
                            return this
                        }
                    };
                x.promise(T);
                m.url = ((e || m.url || mt.href) + "").replace(Dt, mt.protocol + "//");
                m.type = t.method || t.type || m.method || m.type;
                m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""];
                if (m.crossDomain == null) {
                    r = A.createElement("a");
                    try {
                        r.href = m.url;
                        r.href = r.href;
                        m.crossDomain = qt.protocol + "//" + qt.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        m.crossDomain = true
                    }
                }
                if (m.data && m.processData && typeof m.data !== "string") {
                    m.data = C.param(m.data, m.traditional)
                }
                Ht(Lt, m, t, T);
                if (h) {
                    return T
                }
                g = C.event && m.global;
                if (g && C.active++ === 0) {
                    C.event.trigger("ajaxStart")
                }
                m.type = m.type.toUpperCase();
                m.hasContent = !Nt.test(m.type);
                f = m.url.replace(Ct, "");
                if (!m.hasContent) {
                    o = m.url.slice(f.length);
                    if (m.data) {
                        f += (vt.test(f) ? "&" : "?") + m.data;
                        delete m.data
                    }
                    if (m.cache === false) {
                        f = f.replace(_t, "$1");
                        o = (vt.test(f) ? "&" : "?") + "_=" + yt++ + o
                    }
                    m.url = f + o
                } else if (m.data && m.processData && (m.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    m.data = m.data.replace(At, "+")
                }
                if (m.ifModified) {
                    if (C.lastModified[f]) {
                        T.setRequestHeader("If-Modified-Since", C.lastModified[f])
                    }
                    if (C.etag[f]) {
                        T.setRequestHeader("If-None-Match", C.etag[f])
                    }
                }
                if (m.data && m.hasContent && m.contentType !== false || t.contentType) {
                    T.setRequestHeader("Content-Type", m.contentType)
                }
                T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + jt + "; q=0.01" : "") : m.accepts["*"]);
                for (i in m.headers) {
                    T.setRequestHeader(i, m.headers[i])
                }
                if (m.beforeSend && (m.beforeSend.call(y, T, m) === false || h)) {
                    return T.abort()
                }
                u = "abort";
                b.add(m.complete);
                T.done(m.success);
                T.fail(m.error);
                l = Ht(Pt, m, t, T);
                if (!l) {
                    c(-1, "No Transport")
                } else {
                    T.readyState = 1;
                    if (g) {
                        v.trigger("ajaxSend", [T, m])
                    }
                    if (h) {
                        return T
                    }
                    if (m.async && m.timeout > 0) {
                        d = k.setTimeout(function() {
                            T.abort("timeout")
                        }, m.timeout)
                    }
                    try {
                        h = false;
                        l.send(a, c)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        c(-1, e)
                    }
                }

                function c(e, t, n, r) {
                    var i, o, a, s, u, c = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (d) {
                        k.clearTimeout(d)
                    }
                    l = undefined;
                    p = r || "";
                    T.readyState = e > 0 ? 4 : 0;
                    i = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        s = Bt(m, T, n)
                    }
                    s = Rt(m, s, T, i);
                    if (i) {
                        if (m.ifModified) {
                            u = T.getResponseHeader("Last-Modified");
                            if (u) {
                                C.lastModified[f] = u
                            }
                            u = T.getResponseHeader("etag");
                            if (u) {
                                C.etag[f] = u
                            }
                        }
                        if (e === 204 || m.type === "HEAD") {
                            c = "nocontent"
                        } else if (e === 304) {
                            c = "notmodified"
                        } else {
                            c = s.state;
                            o = s.data;
                            a = s.error;
                            i = !a
                        }
                    } else {
                        a = c;
                        if (e || !c) {
                            c = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    T.status = e;
                    T.statusText = (t || c) + "";
                    if (i) {
                        x.resolveWith(y, [o, c, T])
                    } else {
                        x.rejectWith(y, [T, c, a])
                    }
                    T.statusCode(w);
                    w = undefined;
                    if (g) {
                        v.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a])
                    }
                    b.fireWith(y, [T, c]);
                    if (g) {
                        v.trigger("ajaxComplete", [T, m]);
                        if (!--C.active) {
                            C.event.trigger("ajaxStop")
                        }
                    }
                }
                return T
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, undefined, t, "script")
            }
        });
        C.each(["get", "post"], function(e, i) {
            C[i] = function(e, t, n, r) {
                if (C.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return C.ajax(C.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, C.isPlainObject(e) && e))
            }
        });
        C._evalUrl = function(e) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        C.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (C.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = C(e, this[0].ownerDocument).eq(0).clone(true);
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
                if (C.isFunction(n)) {
                    return this.each(function(e) {
                        C(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = C(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = C.isFunction(t);
                return this.each(function(e) {
                    C(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        };
        C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        C.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Ft = {
                0: 200,
                1223: 204
            },
            $t = C.ajaxSettings.xhr();
        m.cors = !!$t && "withCredentials" in $t;
        m.ajax = $t = !!$t;
        C.ajaxTransport(function(i) {
            var o, a;
            if (m.cors || $t && !i.crossDomain) {
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
                        o = function(e) {
                            return function() {
                                if (o) {
                                    o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
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
                        r.onload = o();
                        a = r.onerror = o("error");
                        if (r.onabort !== undefined) {
                            r.onabort = a
                        } else {
                            r.onreadystatechange = function() {
                                if (r.readyState === 4) {
                                    k.setTimeout(function() {
                                        if (o) {
                                            a()
                                        }
                                    })
                                }
                            }
                        }
                        o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o) {
                                throw e
                            }
                        }
                    },
                    abort: function() {
                        if (o) {
                            o()
                        }
                    }
                }
            }
        });
        C.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    C.globalEval(e);
                    return e
                }
            }
        });
        C.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        C.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, i;
                return {
                    send: function(e, t) {
                        r = C("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove();
                            i = null;
                            if (e) {
                                t(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        A.head.appendChild(r[0])
                    },
                    abort: function() {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        var It = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = It.pop() || C.expando + "_" + yt++;
                this[e] = true;
                return e
            }
        });
        C.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a = e.jsonp !== false && (Wt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Wt.test(e.data) && "data");
            if (a || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (a) {
                    e[a] = e[a].replace(Wt, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!o) {
                        C.error(r + " was not called")
                    }
                    return o[0]
                };
                e.dataTypes[0] = "json";
                i = k[r];
                k[r] = function() {
                    o = arguments
                };
                n.always(function() {
                    if (i === undefined) {
                        C(k).removeProp(r)
                    } else {
                        k[r] = i
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        It.push(r)
                    }
                    if (o && C.isFunction(i)) {
                        i(o[0])
                    }
                    o = i = undefined
                });
                return "script"
            }
        });
        m.createHTMLDocument = function() {
            var e = A.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        C.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            var r, i, o;
            if (!t) {
                if (m.createHTMLDocument) {
                    t = A.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = A.location.href;
                    t.head.appendChild(r)
                } else {
                    t = A
                }
            }
            i = S.exec(e);
            o = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = ge([e], t, o);
            if (o && o.length) {
                C(o).remove()
            }
            return C.merge([], i.childNodes)
        };
        C.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            if (s > -1) {
                r = pt(e.slice(s));
                e = e.slice(0, s)
            }
            if (C.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                i = "POST"
            }
            if (a.length > 0) {
                C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments;
                    a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Ut(e) {
            return C.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        C.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c, l = C.css(e, "position"),
                    f = C(e),
                    p = {};
                if (l === "static") {
                    e.style.position = "relative"
                }
                s = f.offset();
                o = C.css(e, "top");
                u = C.css(e, "left");
                c = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
                if (c) {
                    r = f.position();
                    a = r.top;
                    i = r.left
                } else {
                    a = parseFloat(o) || 0;
                    i = parseFloat(u) || 0
                }
                if (C.isFunction(t)) {
                    t = t.call(e, n, C.extend({}, s))
                }
                if (t.top != null) {
                    p.top = t.top - s.top + a
                }
                if (t.left != null) {
                    p.left = t.left - s.left + i
                }
                if ("using" in t) {
                    t.using.call(e, p)
                } else {
                    f.css(p)
                }
            }
        };
        C.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e)
                    })
                }
                var e, n, r, i, o = this[0];
                if (!o) {
                    return
                }
                if (!o.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                r = o.getBoundingClientRect();
                if (r.width || r.height) {
                    i = o.ownerDocument;
                    n = Ut(i);
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
                if (C.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!C.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + C.css(e[0], "borderTopWidth", true),
                        left: r.left + C.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - C.css(n, "marginTop", true),
                    left: t.left - r.left - C.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && C.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || me
                })
            }
        });
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            C.fn[t] = function(e) {
                return U(this, function(e, t, n) {
                    var r = Ut(e);
                    if (n === undefined) {
                        return r ? r[i] : e[t]
                    }
                    if (r) {
                        r.scrollTo(!o ? n : r.pageXOffset, o ? n : r.pageYOffset)
                    } else {
                        e[t] = n
                    }
                }, t, e, arguments.length)
            }
        });
        C.each(["top", "left"], function(e, n) {
            C.cssHooks[n] = Fe(m.pixelPosition, function(e, t) {
                if (t) {
                    t = Re(e, n);
                    return Me.test(t) ? C(e).position()[n] + "px" : t
                }
            })
        });
        C.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            C.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                C.fn[o] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        i = r || (e === true || t === true ? "margin" : "border");
                    return U(this, function(e, t, n) {
                        var r;
                        if (C.isWindow(e)) {
                            return o.indexOf("outer") === 0 ? e["inner" + a] : e.document.documentElement["client" + a]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])
                        }
                        return n === undefined ? C.css(e, t, i) : C.style(e, t, n, i)
                    }, s, n ? e : undefined, n)
                }
            })
        });
        C.fn.extend({
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
        C.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return C
            })
        }
        var Kt = k.jQuery,
            Vt = k.$;
        C.noConflict = function(e) {
            if (k.$ === C) {
                k.$ = Vt
            }
            if (e && k.jQuery === C) {
                k.jQuery = Kt
            }
            return C
        };
        if (!e) {
            k.jQuery = k.$ = C
        }
        return C
    });
    var l = function(e, t) {
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
            var a = {};
            var c = 20,
                s = 5,
                l = 2;
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
                a[e] = t
            };
            this.clearCustomData = function() {
                a = {}
            };
            this.createTask = function(r, e, t) {
                e = typeof e == "undefined" ? "NoCaptchaTask" : e;
                var n = this.getPostData(e);
                n.type = e;
                for (var i in a) {
                    if (typeof n[i] === "undefined") {
                        n[i] = a[i]
                    }
                }
                if (typeof t == "object") {
                    for (var i in t) {
                        n[i] = t[i]
                    }
                }
                var o = {
                    clientKey: this.params.clientKey,
                    task: n,
                    softId: this.params.softId !== null ? this.params.softId : 0
                };
                if (this.params.languagePool !== null) {
                    o.languagePool = this.params.languagePool
                }
                this.jsonPostRequest("createTask", o, function(e, t) {
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
            this.getTaskSolution = function(n, r, i, o) {
                i = i || 0;
                var e = {
                    clientKey: this.params.clientKey,
                    taskId: n
                };
                var t;
                if (i == 0) {
                    t = s
                } else {
                    t = l
                }
                if (u) {
                    t = 1
                }
                console.log("Waiting %s seconds", t);
                var a = this;
                setTimeout(function() {
                    a.jsonPostRequest("getTaskResult", e, function(e, t) {
                        if (e) {
                            return r(e, null, t)
                        }
                        if (t.status == "processing") {
                            if (typeof t.newTaskId !== "undefined") {
                                n = t.newTaskId
                            }
                            if (o) {
                                o()
                            }
                            return a.getTaskSolution(n, r, i + 1, o)
                        } else if (t.status == "ready") {
                            return r(null, a.getTaskRawResult(t), t)
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
                        var o = n.request(i, function(e) {
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
                        o.write(JSON.stringify(t));
                        o.end();
                        o.setTimeout(c * 1e3);
                        o.on("timeout", function() {
                            console.log("timeout");
                            o.abort()
                        });
                        o.on("error", function(e) {
                            console.log("error");
                            return r(e)
                        });
                        return o
                    } else if ((typeof window !== "undefined" || typeof chrome === "object") && typeof jQuery == "function") {
                        var a;
                        a = window.location.protocol != "http:" ? "https:" : window.location.protocol;
                        var s = a + "//" + this.params.host + (a != "https:" ? ":" + this.params.port : "") + "/" + e;
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
        module.exports = l
    }

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

    function p(e) {
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

    function h(e) {
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
            var o = i.find(".g-recaptcha-response").parent().parent();
            if (o.length) {
                i.find("*").each(function() {
                    var e = $(this);
                    var t = this.nodeName.toLowerCase();
                    if (t == "input") {
                        d(this)
                    } else if (e.find("input").length) {
                        d(this)
                    } else if (e.has(o).length) {
                        d(this)
                    } else if (o.has(this).length && 0) {
                        d(this)
                    } else if (o.is(this)) {
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
                g(i);
                if (i.get(0)) {
                    return i.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function g(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                g($(this))
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

    function y(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var v = function(e) {
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
    var x = function(e, t) {
        var n = v(e);
        var r = v(t);
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

    function w() {
        return Math.floor(Date.now() / 1e3)
    }

    function T(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function k() {
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

    function A(e) {
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
        return C(t)
    }

    function C(e) {
        return e.replace(/^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff);base64,/i, "")
    }

    function _(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var i = 0; i < Math.ceil(n.length / r); i++) {
            t += String.fromCharCode.apply(null, n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function S(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function E(e, i) {
        var t = new XMLHttpRequest;
        var o = new XMLHttpRequest;
        o.open("GET", e, true);
        o.responseType = "arraybuffer";
        o.onload = function(e) {
            var t = o.response;
            if (t) {
                var n = new Uint8Array(t);
                var r = String.fromCharCode.apply(null, n);
                i(window.btoa(r))
            } else {
                i(null, new Error("empty result"))
            }
        };
        o.ontimeout = function(e) {
            o.abort();
            i(null, new Error("timeout"))
        };
        o.onabort = function(e) {
            i(null, new Error("abort"))
        };
        o.onerror = function(e) {
            i(null, new Error("error"))
        };
        o.timeout = 1e4;
        o.send();
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

    function N(n, a, e) {
        var s = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (s.height == 0 && s.width == 0 && s.left == 0 && s.right == 0 && s.bottom == 0 && s.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    N(n, a, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (s.left < 0 || s.top < 0 || s.right >= D() || s.bottom >= L()) {
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
        for (var o in t) {
            i[o] = {
                priority: n.style.getPropertyPriority(o),
                value: n.style.getPropertyValue(o)
            };
            n.style.setProperty(o, t[o], "important")
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
                var o = document.createElement("img");
                o.onerror = function(e) {
                    console.error(e)
                };
                o.onload = function() {
                    try {
                        var e = o.width / window.innerWidth;
                        var t = o.height / window.innerHeight;
                        var n = document.createElement("canvas");
                        n.width = s.width;
                        n.height = s.height;
                        var r = n.getContext("2d");
                        r.drawImage(o, s.left * e, s.top * t, s.width * e, s.height * t, 0, 0, s.width, s.height);
                        var i = n.toDataURL("image/png");
                        a(C(i))
                    } catch (e) {
                        console.error(e)
                    }
                };
                o.src = e.dataUrl
            })
        }, 100)
    }

    function D() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function L() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function P(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function j(e, t, n) {
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
        var o = "";
        var a;
        for (var s = 0; s < r.length; s++) {
            a = r[s].nodeName.toLowerCase().replace(":", "\\:") + (t ? n && $.trim(r[s].id) && $.trim(r[s].id).length < 48 ? "#" + $.trim(r[s].id) : ":nth-child(" + (parseInt($(r[s]).index()) + 1) + ")" : "") + (n && $.trim(r[s].getAttribute("name")) && $.trim(r[s].getAttribute("name")).length < 48 ? '[name="' + $.trim(r[s].getAttribute("name")) + '"]' : "") + ($.trim(r[s].getAttribute("type")) ? '[type="' + $.trim(r[s].getAttribute("type")) + '"]' : "");
            o = a + (s != 0 ? " > " : " ") + o;
            if ($(o).length == 1 && (!t && s >= 4 || t && s >= 2)) {
                break
            }
        }
        o = $.trim(o);
        if ($(o).length > 1) {
            if (!t) {
                o = j(e, true, n)
            } else {
                return null
            }
        }
        return o
    }

    function q() {
        var e = true;
        if (window && window.location && window.location.href && window.location.href.indexOf("www.fdworlds.net") != -1) {
            e = false
        }
        return e
    }

    function O(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function H(t, n, r) {
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

    function M(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function B(e, t, n) {
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

    function R(e) {
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

    function F(e) {
        $.ajax("//azcaptcha.com/saveStatistics", {
            method: "POST",
            crossDomain: true,
            data: JSON.stringify(e),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function I() {
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

    function W(e, t) {
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

    function K(e, t, n, r, i, o, a) {
        var s = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: o,
                solving_error: a ? U(a) : null,
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

    function V(r) {
        $.ajax(a, {
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

    function z(r) {
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

    function X(e, t, n) {
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
            r.errorText = G(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function G(e) {
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
    I();
    $("#recaptcha_precache_debug_link").attr("href", chrome.extension.getURL("/recaptcha_precache_debug.html"));
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        if (e.type == "showMessage") {
            delete e.type;
            if (e.method && e.method.match(/(show|refresh)[a-z]+Message/i) && typeof window[e.method] == "function") {
                if (typeof e.arguments != "undefined" && Array.isArray(e.arguments)) {
                    window[e.method].apply(null, e.arguments)
                } else {
                    window[e.method]()
                }
            }
        }
    });
    Q();
    Z(chrome.extension.getBackgroundPage().globalStatus.enable);
    ee(chrome.extension.getBackgroundPage().globalStatus.use_recaptcha_precaching);
    te(chrome.extension.getBackgroundPage().globalStatus.solve_recaptcha2);
    Y();
    chrome.extension.getBackgroundPage().getAndRefreshAntigateBalance();
    jQuery.fn.clickToggle = function(e, t) {
        function n() {
            [t, e][this._tog ^= 1].call(this)
        }
        return this.on("click", n)
    };
    $(".advanced_settings_button").clickToggle(function() {
        $(".advanced_settings_container").slideDown(500);
        $(".advanced_settings_container").find("label").first().focus()
    }, function() {
        $(".advanced_settings_container").slideUp(500)
    });
    re();

    function Q() {
        $("input[name=enable]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.enable);
        $("input[name=account_key]").val(chrome.extension.getBackgroundPage().globalStatus.account_key);
        $("input[name=auto_submit_form]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.auto_submit_form);
        $("input[name=use_recaptcha_accelerator]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.use_recaptcha_accelerator);
        $("input[name=use_recaptcha_precaching]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.use_recaptcha_precaching);
        $("input[name=k_precached_solution_count_min]").val(chrome.extension.getBackgroundPage().globalStatus.k_precached_solution_count_min);
        $("input[name=k_precached_solution_count_max]").val(chrome.extension.getBackgroundPage().globalStatus.k_precached_solution_count_max);
        J();
        $("input[name=solve_recaptcha2]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_recaptcha2);
        $("input[name=solve_invisible_recaptcha]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_invisible_recaptcha);
        $("input[name=dont_reuse_recaptcha_solution]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.dont_reuse_recaptcha_solution);
        $("input[name=solve_funcaptcha]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_funcaptcha);
        $("input[name=start_recaptcha2_solving_when_challenge_shown]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.start_recaptcha2_solving_when_challenge_shown);
        $("input[name=solve_only_presented_recaptcha2]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_only_presented_recaptcha2);
        $("input[name=use_predefined_image_captcha_marks]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.use_predefined_image_captcha_marks);
        $("input[name=play_sounds]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.play_sounds)
    }

    function Y() {
        $("#save").click(function() {
            showErrorMessage("");
            showBalanceMessage("");
            var e = $("input[name=enable]")[0].checked;
            var t = $("input[name=auto_submit_form]")[0].checked;
            var n = $("#use_recaptcha_accelerator")[0].checked;
            var r = $("#use_recaptcha_precaching")[0].checked;
            var i = $("#k_precached_solution_count_min").val();
            var o = $("#k_precached_solution_count_max").val();
            var a = $("input[name=solve_recaptcha2]")[0].checked;
            var s = $("input[name=solve_invisible_recaptcha]")[0].checked;
            var u = $("input[name=dont_reuse_recaptcha_solution]")[0].checked;
            var c = $("input[name=solve_funcaptcha]")[0].checked;
            var l = $("input[name=start_recaptcha2_solving_when_challenge_shown]")[0].checked;
            var f = $("input[name=solve_only_presented_recaptcha2]")[0].checked;
            var p = $("input[name=use_predefined_image_captcha_marks]")[0].checked;
            var d = $("input[name=play_sounds]")[0].checked;
            var h = $("input[name=account_key]").val();
            i = Math.max(0, i);
            o = Math.max(0, o);
            chrome.extension.getBackgroundPage().saveOptions({
                enable: e,
                auto_submit_form: t,
                use_recaptcha_accelerator: n,
                use_recaptcha_precaching: r,
                k_precached_solution_count_min: i,
                k_precached_solution_count_max: o,
                solve_recaptcha2: a,
                solve_invisible_recaptcha: s,
                dont_reuse_recaptcha_solution: u,
                solve_funcaptcha: c,
                start_recaptcha2_solving_when_challenge_shown: l,
                solve_only_presented_recaptcha2: f,
                use_predefined_image_captcha_marks: p,
                play_sounds: d,
                account_key: h
            }, function() {
                ne(chrome.i18n.getMessage("optionsSaved"))
            })
        });
        $("input[name=enable]").click(function() {
            Z(this.checked)
        });
        $("input[name=use_recaptcha_precaching]").click(function() {
            ee(this.checked)
        });
        $("input[name=solve_recaptcha2]").click(function() {
            te(this.checked)
        });
        $("#k_precached_solution_count_min").on("input", function(e) {
            J()
        });
        $("#k_precached_solution_count_max").on("input", function(e) {
            J()
        });
        $("div.no_key_info > span").click(function() {
            $(this.parentNode).toggleClass("expanded")
        });
        $("div.no_key_info > div > span").click(function() {
            $(this.parentNode.parentNode).removeClass("expanded")
        })
    }

    function Z(e) {
        $("input[name=account_key]").attr("disabled", !e);
        $("input[name=auto_submit_form]").attr("disabled", !e);
        $("input[name=use_recaptcha_accelerator]").attr("disabled", !e);
        $("input[name=use_recaptcha_precaching]").attr("disabled", !e);
        $("input[name=k_precached_solution_count_min]").attr("disabled", !e);
        $("input[name=k_precached_solution_count_max]").attr("disabled", !e);
        $("input[name=solve_recaptcha2]").attr("disabled", !e);
        $("input[name=solve_invisible_recaptcha]").attr("disabled", !e);
        $("input[name=dont_reuse_recaptcha_solution]").attr("disabled", !e);
        $("input[name=solve_funcaptcha]").attr("disabled", !e);
        $("input[name=start_recaptcha2_solving_when_challenge_shown]").attr("disabled", !e);
        $("input[name=solve_only_presented_recaptcha2]").attr("disabled", !e);
        $("input[name=use_predefined_image_captcha_marks]").attr("disabled", !e);
        $("input[name=play_sounds]").attr("disabled", !e)
    }

    function J() {
        var e = $("#k_precached_solution_count_min").val();
        var t = $("#k_precached_solution_count_max").val();
        $("#k_precached_solution_count_min_output").val(e);
        $("#k_precached_solution_count_max_output").val(t);
        $("#k_precached_solution_count_min").val(Math.min(e, t));
        $("#k_precached_solution_count_max").val(Math.max(e, t))
    }

    function ee(e) {
        $("input[name=k_precached_solution_count_min]").attr("disabled", !e);
        $("input[name=k_precached_solution_count_max]").attr("disabled", !e)
    }

    function te(e) {}

    function ne(e) {
        if ($.trim(e)) {
            W("done", chrome.extension.getBackgroundPage().globalStatus)
        }
        $("#status").text(e);
        setTimeout(function() {
            $("#status").text("")
        }, 5e3)
    }
    showErrorMessage = function(e) {
        if ($.trim(e)) {
            W("error", chrome.extension.getBackgroundPage().globalStatus)
        }
        $("#error").text(e)
    };
    showBalanceMessage = function(e) {
        if (typeof e === "number") {
            e += " $"
        }
        $("#balance").html(e)
    };
    refreshFreeAttemptsMessage = function() {
        if (chrome.extension.getBackgroundPage().globalStatus.profile_user_info == null) {
            return
        }
        var e = chrome.extension.getBackgroundPage().globalStatus.free_attempts_left_count;
        if (chrome.extension.getBackgroundPage().globalStatus.profile_user_info) {
            showBalanceMessage(chrome.i18n.getMessage("freeAttemptsLeft", e + "") + (!e ? chrome.i18n.getMessage("getAzcaptchaKey") : ""))
        } else {
            if (e) {
                showBalanceMessage(chrome.i18n.getMessage("getFreeAttempts", e + ""))
            } else {}
        }
    };

    function re() {
        var e = chrome.extension.getBackgroundPage().globalStatus.plugin_version;
        var t = chrome.runtime.id;
        var n = chrome.extension.getBackgroundPage().globalStatus.plugin_last_version_data;
        if (!n || typeof n.version === "undefined") {
            return
        }
        var r = e < n.version;
        if (r) {
            var i = t == c || t.indexOf("{") === 0;
            var o;
            if (i) {
                o = chrome.i18n.getMessage("newVersionCrxAutoupdate")
            } else {
                o = chrome.i18n.getMessage("newVersionZipDownloadLink", n.version + "")
            }
            var a = chrome.i18n.getMessage("newVersionWhatsNewIndex");
            if (typeof n[a] !== "undefined") {
                o += chrome.i18n.getMessage("newVersionWhatsNew") + " " + n[a]
            }
            $("#new_version_message").html(o)
        } else {}
    }
})();