! function(e, t) {
    typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t()
}("domready", function() {
    var e = [],
        t, n = document,
        r = n.documentElement.doScroll,
        i = "DOMContentLoaded",
        s = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
    return s || n.addEventListener(i, t = function() {
            n.removeEventListener(i, t), s = 1;
            while (t = e.shift()) t()
        }),
        function(t) {
            s ? setTimeout(t, 0) : e.push(t)
        }
});
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
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
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});;
(function(e) {
    "use strict";
    if (typeof exports === "object") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else e(jQuery)
})(function(e) {
    "use strict";
    var n = function(e) {
        e = e || "once";
        if (typeof e !== "string") throw new Error("The jQuery Once id parameter must be a string");
        return e
    };
    e.fn.once = function(t) {
        var r = "jquery-once-" + n(t);
        return this.filter(function() {
            return e(this).data(r) !== true
        }).data(r, true)
    };
    e.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + n(e))
    };
    e.fn.findOnce = function(t) {
        var r = "jquery-once-" + n(t);
        return this.filter(function() {
            return e(this).data(r) === true
        })
    }
});
(function() {
    'use strict';
    var settingsElement = document.querySelector('head > script[type="application/json"][data-sofia-selector="Sofia-settings-json"], body > script[type="application/json"][data-sofia-selector="Sofia-settings-json"]');
    window.SofiaSettings = {};
    if (settingsElement !== null) window.SofiaSettings = JSON.parse(settingsElement.textContent)
})();
window.Sofia = {
    behaviors: {},
    locale: {}
};
(function(Sofia, SofiaSettings, SofiaTranslations) {
    'use strict';
    Sofia.throwError = function(error) {
        setTimeout(function() {
            throw error
        }, 0)
    };
    Sofia.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || SofiaSettings;
        var behaviors = Sofia.behaviors;
        for (var i in behaviors)
            if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') try {
                behaviors[i].attach(context, settings)
            } catch (e) {
                Sofia.throwError(e)
            }
    };
    Sofia.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || SofiaSettings;
        trigger = trigger || 'unload';
        var behaviors = Sofia.behaviors;
        for (var i in behaviors)
            if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') try {
                behaviors[i].detach(context, settings, trigger)
            } catch (e) {
                Sofia.throwError(e)
            }
    };
    Sofia.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return str
    };
    Sofia.formatString = function(str, args) {
        var processedArgs = {};
        for (var key in args)
            if (args.hasOwnProperty(key)) switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Sofia.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Sofia.theme('placeholder', args[key]);
                    break
            };
        return Sofia.stringReplace(str, processedArgs, null)
    };
    Sofia.stringReplace = function(str, args, keys) {
        if (str.length === 0) return str;
        if (!Array.isArray(keys)) {
            keys = [];
            for (var k in args)
                if (args.hasOwnProperty(k)) keys.push(k);
            keys.sort(function(a, b) {
                return a.length - b.length
            })
        };
        if (keys.length === 0) return str;
        var key = keys.pop(),
            fragments = str.split(key);
        if (keys.length)
            for (var i = 0; i < fragments.length; i++) fragments[i] = Sofia.stringReplace(fragments[i], args, keys.slice(0));
        return fragments.join(args[key])
    };
    Sofia.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof SofiaTranslations !== 'undefined' && SofiaTranslations.strings && SofiaTranslations.strings[options.context] && SofiaTranslations.strings[options.context][str]) str = SofiaTranslations.strings[options.context][str];
        if (args) str = Sofia.formatString(str, args);
        return str
    };
    Sofia.url = function(path) {
        return SofiaSettings.path.baseUrl + SofiaSettings.path.pathPrefix + path
    };
    Sofia.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url)
        } catch (e) {};
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href
    };
    Sofia.url.isLocal = function(url) {
        var absoluteUrl = Sofia.url.toAbsolute(url),
            protocol = location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
        var baseUrl = protocol + '//' + location.host + SofiaSettings.path.baseUrl.slice(0, -1);
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl)
        } catch (e) {};
        try {
            baseUrl = decodeURIComponent(baseUrl)
        } catch (e) {};
        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0
    };
    Sofia.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = SofiaSettings.pluralDelimiter,
            translations = Sofia.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter),
            index = 0;
        if (typeof SofiaTranslations !== 'undefined' && SofiaTranslations.pluralFormula) {
            index = count in SofiaTranslations.pluralFormula ? SofiaTranslations.pluralFormula[count] : SofiaTranslations.pluralFormula['default']
        } else if (args['@count'] !== 1) index = 1;
        return translations[index]
    };
    Sofia.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/')
    };
    Sofia.theme = function(func) {
        var args = Array.prototype.slice.apply(arguments, [1]);
        if (func in Sofia.theme) return Sofia.theme[func].apply(this, args)
    };
    Sofia.theme.placeholder = function(str) {
        return '<em class="placeholder">' + Sofia.checkPlain(str) + '</em>'
    }
})(Sofia, window.SofiaSettings, window.SofiaTranslations);
if (window.jQuery) jQuery.noConflict();
document.documentElement.className += ' js';
(function(domready, Sofia, SofiaSettings) {
    'use strict';
    domready(function() {
        Sofia.attachBehaviors(document, SofiaSettings)
    })
})(domready, Sofia, window.SofiaSettings);
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function t(t, r) {
        var i, s, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap='#" + s + "']")[0], !!o && n(o))) : (/^(input|select|textarea|button|object)$/.test(u) ? !t.disabled : "a" === u ? t.href || r : r) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"),
                r = n === "absolute",
                i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var t = e(this);
                    return r && t.css("position") === "static" ? !1 : i.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return n === "fixed" || !s.length ? e(this[0].ownerDocument || document) : s
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var r = e.attr(n, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && t(n, !i)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
        function o(t, n, i, s) {
            return e.each(r, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var r = n === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            i = n.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(t) {
            return t === undefined ? s["inner" + n].call(this) : this.each(function() {
                e(this).css(i, o(this, t) + "px")
            })
        }, e.fn["outer" + n] = function(t, r) {
            return typeof t != "number" ? s["outer" + n].call(this, t) : this.each(function() {
                e(this).css(i, o(this, t, !0, r) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, r) {
                return typeof n == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (t !== undefined) return this.css("zIndex", t);
            if (this.length) {
                var n = e(this[0]),
                    r, i;
                while (n.length && n[0] !== document) {
                    r = n.css("position");
                    if (r === "absolute" || r === "relative" || r === "fixed") {
                        i = parseInt(n.css("zIndex"), 10);
                        if (!isNaN(i) && i !== 0) return i
                    }
                    n = n.parent()
                }
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, n, r) {
            var i, s = e.ui[t].prototype;
            for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
        },
        call: function(e, t, n, r) {
            var i, s = e.plugins[t];
            if (!s) return;
            if (!r && (!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)) return;
            for (i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
        }
    }
});;
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    var t = 0,
        n = Array.prototype.slice;
    return e.cleanData = function(t) {
        return function(n) {
            var r, i, s;
            for (s = 0;
                (i = n[s]) != null; s++) try {
                r = e._data(i, "events"), r && r.remove && e(i).triggerHandler("remove")
            } catch (o) {}
            t(n)
        }
    }(e.cleanData), e.widget = function(t, n, r) {
        var i, s, o, u, a = {},
            f = t.split(".")[0];
        return t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix || t : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        var r = n.call(arguments, 1),
            i = 0,
            s = r.length,
            o, u;
        for (; i < s; i++)
            for (o in r[i]) u = r[i][o], r[i].hasOwnProperty(o) && u !== undefined && (e.isPlainObject(u) ? t[o] = e.isPlainObject(t[o]) ? e.widget.extend({}, t[o], u) : e.widget.extend({}, u) : t[o] = u);
        return t
    }, e.widget.bridge = function(t, r) {
        var i = r.prototype.widgetFullName || t;
        e.fn[t] = function(s) {
            var o = typeof s == "string",
                u = n.call(arguments, 1),
                a = this;
            return o ? this.each(function() {
                var n, r = e.data(this, i);
                if (s === "instance") return a = r, !1;
                if (!r) return e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + s + "'");
                if (!e.isFunction(r[s]) || s.charAt(0) === "_") return e.error("no such method '" + s + "' for " + t + " widget instance");
                n = r[s].apply(r, u);
                if (n !== r && n !== undefined) return a = n && n.jquery ? a.pushStack(n.get()) : n, !1
            }) : (u.length && (s = e.widget.extend.apply(null, [s].concat(u))), this.each(function() {
                var t = e.data(this, i);
                t ? (t.option(s || {}), t._init && t._init()) : e.data(this, i, new r(s, this))
            })), a
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(n, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var r = t,
                i, s, o;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof t == "string") {
                r = {}, i = t.split("."), t = i.shift();
                if (i.length) {
                    s = r[t] = e.widget.extend({}, this.options[t]);
                    for (o = 0; o < i.length - 1; o++) s[i[o]] = s[i[o]] || {}, s = s[i[o]];
                    t = i.pop();
                    if (arguments.length === 1) return s[t] === undefined ? null : s[t];
                    s[t] = n
                } else {
                    if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                    r[t] = n
                }
            }
            return this._setOptions(r), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^([\w:-]*)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    }), e.widget
});;
(function(SofiaSettings) {
    setTimeout(function() {
        var a = document.createElement("script"),
            b = document.getElementsByTagName('script')[0];
        a.src = document.location.protocol + "//script.crazyegg.com/" + "pages/scripts/0011/8062.js"/*SofiaSettings.crazyegg.crazyegg.account_path*/ + "?" + Math.floor(new Date().getTime() / 36e5);
        a.async = true;
        a.type = "text/javascript";
        b.parentNode.insertBefore(a, b)
    }, 1)
})(SofiaSettings);
(function($, Sofia, SofiaSettings) {
    'use strict';
    Sofia.google_analytics = {};
    // $(document).ready(function() {
    //     $(document.body).on('mousedown keyup touchstart', function(event) {
    //         $(event.target).closest('a,area').each(function() {
    //             if (Sofia.google_analytics.isInternal(this.href)) {
    //                 if ($(this).is('.colorbox') && (SofiaSettings.google_analytics.trackColorbox));
    //                 else if (SofiaSettings.google_analytics.trackDownload && Sofia.google_analytics.isDownload(this.href)) {
    //                     ga('send', {
    //                         hitType: 'event',
    //                         eventCategory: 'Downloads',
    //                         eventAction: Sofia.google_analytics.getDownloadExtension(this.href).toUpperCase(),
    //                         eventLabel: Sofia.google_analytics.getPageUrl(this.href),
    //                         transport: 'beacon'
    //                     })
    //                 } else if (Sofia.google_analytics.isInternalSpecial(this.href)) ga('send', {
    //                     hitType: 'pageview',
    //                     page: Sofia.google_analytics.getPageUrl(this.href),
    //                     transport: 'beacon'
    //                 })
    //             } else if (SofiaSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
    //                 ga('send', {
    //                     hitType: 'event',
    //                     eventCategory: 'Mails',
    //                     eventAction: 'Click',
    //                     eventLabel: this.href.substring(7),
    //                     transport: 'beacon'
    //                 })
    //             } else if (SofiaSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i))
    //                 if (SofiaSettings.google_analytics.trackDomainMode !== 2 || (SofiaSettings.google_analytics.trackDomainMode === 2 && !Sofia.google_analytics.isCrossDomain(this.hostname, SofiaSettings.google_analytics.trackCrossDomains))) ga('send', {
    //                     hitType: 'event',
    //                     eventCategory: 'Outbound links',
    //                     eventAction: 'Click',
    //                     eventLabel: this.href,
    //                     transport: 'beacon'
    //                 })
    //         })
    //     });
        // if (SofiaSettings.google_analytics.trackUrlFragments) window.onhashchange = function() {
        //     ga('send', {
        //         hitType: 'pageview',
        //         page: location.pathname + location.search + location.hash
        //     })
        // };
        // if (SofiaSettings.google_analytics.trackColorbox) $(document).on('cbox_complete', function() {
        //     var href = $.colorbox.element().attr('href');
        //     if (href) ga('send', {
        //         hitType: 'pageview',
        //         page: Sofia.google_analytics.getPageUrl(href)
        //     })
        // })
    // });
    Sofia.google_analytics.isCrossDomain = function(hostname, crossDomains) {
        return $.inArray(hostname, crossDomains) > -1 ? true : false
    };
    Sofia.google_analytics.isDownload = function(url) {
        var isDownload = new RegExp('\\.(' + SofiaSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
        return isDownload.test(url)
    };
    Sofia.google_analytics.isInternal = function(url) {
        var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
        return isInternal.test(url)
    };
    Sofia.google_analytics.isInternalSpecial = function(url) {
        var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
        return isInternalSpecial.test(url)
    };
    Sofia.google_analytics.getPageUrl = function(url) {
        var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
        return url.replace(extractInternalUrl, '')
    };
    Sofia.google_analytics.getDownloadExtension = function(url) {
        var extractDownloadextension = new RegExp('\\.(' + SofiaSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i'),
            extension = extractDownloadextension.exec(url);
        return (extension === null) ? '' : extension[1]
    }
})(jQuery, Sofia, SofiaSettings);
(function($) {
    var defaults = {
            slideSpeed: 500,
            fadeSpeed: 100,
            delay: 500
        },
        config = {
            item: '.nav-item',
            dropdown: '.nav-content',
            dropdownContent: '.nav-content .nav-content-inner, .nav-content .underlay',
            itemsDelay: 300
        },
        delayHappenedSearch = false;
    $.fn.booNavigation = function() {
        init.apply(this, arguments);
        return this
    }

    function init(opts) {
        $(config.dropdown).hide();
        var options = $.extend({}, defaults, opts);
        this.data(options);
        this.each(function(i, e) {
            var $e = $(e);
            $e.find(config.item).each(function(index, element) {
                var $el = $(element);
                $el.data('height', $el.find(config.dropdown).height());
                $el.data('id', index)
            });
            menuSlide($e, options)
        })
    }

    function menuSlide(selector, opts) {
        var $previousItem = null,
            $currentItem = null,
            delayHappened = false,
            timer;
        $(selector).on("mouseleave", function(e) {
            var search_visible = $('.nav-item.search .nav-content').is(':visible');
            if (search_visible == false) {
                delayHappened = false;
                $(config.dropdown).hide()
            }
        });
        $(selector).on('click', 'li.search', function(e) {
            showSecondlvlMenu(e)
        });
        $(selector).on('click', 'li.search > a', function(e) {
            e.currentTarget = $(this).parent()[0];
            e.target = $(this).parent()[0];
            showSecondlvlMenu(e);
            return false
        });
        $(selector).find(config.item).hover(function(e) {
            if ($(this).hasClass('search')) return;
            showSecondlvlMenu(e)
        }, function(e) {
            clearTimeout(timer)
        })

        function showSecondlvlMenu(e) {
            if (delayHappenedSearch) {
                delayHappened = false;
                delayHappenedSearch = false
            };
            if (delayHappened === false) {
                timer = setTimeout(function() {
                    delayHappened = true;
                    $currentItem = $(e.currentTarget);
                    $(e.currentTarget).find(config.dropdownContent).show();
                    $(e.currentTarget).find(config.dropdown).slideDown(opts.slideSpeed);
                    if ($(e.currentTarget).hasClass('search')) $('#block-mainnavigation #block-exposedformsearchpage-1 .form-text').get(0).focus()
                }, opts.delay)
            } else timer = setTimeout(function() {
                if ($(e.currentTarget).data('id') !== $currentItem.data('id')) {
                    $previousItem = $currentItem;
                    $currentItem = $(e.currentTarget);
                    $previousItem.find(config.dropdown).height($previousItem.data('height')).end().find(config.dropdownContent).fadeOut(opts.fadeSpeed);
                    $previousItem.find(config.dropdown).animate({
                        height: $currentItem.data('height')
                    }, opts.slideSpeed, function() {
                        $currentItem.find(config.dropdown).height($currentItem.data('height')).end().find(config.dropdownContent).hide().end().find(config.dropdown).show();
                        $previousItem.find(config.dropdown).hide().end().find(config.dropdown).height($previousItem.data('height'));
                        $currentItem.find(config.dropdownContent).fadeIn(opts.fadeSpeed)
                    })
                }
            }, config.itemsDelay)
        }
    };
    $(document).click(function(event) {
        if ($('.region-primary-menu .search .nav-content').is(':visible') && !$(event.target).closest('.region-primary-menu .search .nav-content').length && !$(event.target).closest('.ui-autocomplete-input').length) {
            $(config.dropdown).hide();
            delayHappenedSearch = true
        }
    })
})(jQuery);
(function($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease',
        easing: 'linear',
        speed: 400,
        auto: false,
        loop: false,
        slideEndAnimatoin: true,
        pause: 2e3,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function($el) {},
        onSliderLoad: function($el) {},
        onBeforeSlide: function($el, scene) {},
        onAfterSlide: function($el, scene) {},
        onBeforeNextSlide: function($el, scene) {},
        onBeforePrevSlide: function($el, scene) {}
    };
    $.fn.lightSlider = function(options) {
        if (this.length === 0) return this;
        if (this.length > 1) {
            this.each(function() {
                $(this).lightSlider(options)
            });
            return this
        };
        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;
        if (settings.mode === 'fade') settings.vertical = false;
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? 'height' : 'width',
            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement),
            refresh = {};
        refresh.chbreakpoint = function() {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) item = settings.item;
                if (windowW < settings.responsive[0].breakpoint)
                    for (var i = 0; i < settings.responsive.length; i++)
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i]
                        };
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null)
                    for (var j in resposiveObj.settings)
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) settingsTemp[j] = settings[j];
                            settings[j] = resposiveObj.settings[j]
                        };
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint)
                    for (var k in settingsTemp)
                        if (settingsTemp.hasOwnProperty(k)) settings[k] = settingsTemp[k];
                if (settings.autoWidth === false)
                    if (slideValue > 0 && slideWidth > 0)
                        if (item !== settings.item) scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove))
            }
        };
        refresh.calSW = function() {
            if (settings.autoWidth === false) slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item
        };
        refresh.calWidth = function(cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin)
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) w += (parseInt($children.eq(i).width()) + settings.slideMargin)
            };
            if (w % 1 !== 0) w = w + 1;
            return w
        };
        plugin = {
            doCss: function() {
                var support = function() {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'],
                        root = document.documentElement;
                    for (var i = 0; i < transition.length; i++)
                        if (transition[i] in root.style) return true
                };
                if (settings.useCSS && support()) return true;
                return false
            },
            keyPress: function() {
                if (settings.keyPress) $(document).on('keyup.lightslider', function(e) {
                    if (!$(':focus').is('input, textarea')) {
                        if (e.preventDefault) {
                            e.preventDefault()
                        } else e.returnValue = false;
                        if (e.keyCode === 37) {
                            $el.goToPrevSlide();
                            clearInterval(interval)
                        } else if (e.keyCode === 39) {
                            $el.goToNextSlide();
                            clearInterval(interval)
                        }
                    }
                })
            },
            controls: function() {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) $slide.find('.lSAction').hide()
                    } else if (refresh.calWidth(false) < elSize) $slide.find('.lSAction').hide();
                    $slide.find('.lSAction a').on('click', function(e) {
                        if (e.preventDefault) {
                            e.preventDefault()
                        } else e.returnValue = false;
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide()
                        } else $el.goToNextSlide();
                        clearInterval(interval);
                        return false
                    })
                }
            },
            initialStyle: function() {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimatoin = false
                };
                if (settings.auto) settings.slideEndAnimatoin = false;
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1
                };
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false
                };
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) $slide.parent().addClass('lSrtl');
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px')
                } else elSize = $el.outerWidth();
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function() {
                        if (refresh.calWidth(true) > elSize) {
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) break
                            };
                            var tItem = settings.autoWidth === true ? tI : settings.item;
                            if (tItem < $el.find('.clone.left').length)
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) $children.eq(i).remove();
                            if (tItem < $el.find('.clone.right').length)
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove()
                                };
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++
                            };
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            $children = $el.children()
                        } else if ($children.hasClass('clone')) {
                            $el.find('.clone').remove();
                            $this.move($el, 0)
                        }
                    };
                    refresh.clone()
                };
                refresh.sSW = function() {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) gutter = 'margin-left';
                    if (settings.autoWidth === false) $children.css(property, slideWidth + 'px');
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide')
                        if (on === false) scene = $el.find('.clone.left').length
                };
                refresh.calL = function() {
                    $children = $el.children();
                    length = $children.length
                };
                if (this.doCss()) $slide.addClass('usingCss');
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue)
                    };
                    if (settings.vertical === false) this.setHeight($el, false, true)
                } else {
                    this.setHeight($el, true, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) $children.not('.active').css('display', 'none')
                };
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active')
                } else $children.first().addClass('active')
            },
            pager: function() {
                var $this = this;
                refresh.createPager = function() {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide'),
                        length = $slide.find('.lslide').length,
                        i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide')
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove)
                            } else v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>'
                        } else pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        if (settings.mode === 'slide')
                            if (v >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1
                                };
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager')
                                } else $slide.parent().removeClass('noPager');
                                break
                            }
                    };
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers);
                    if (!settings.vertical && settings.gallery) {
                        var $pgr = $slide.parent().find('.lSGallery');
                        setTimeout(function() {
                            $this.setHeight($pgr, false, false)
                        })
                    };
                    if (settings.gallery === true) {
                        if (settings.vertical === true) $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px')
                    };
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function() {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index())
                        } else scene = $pager.index(this);
                        if ($(this).hasClass('active')) {
                            var urlToRedirect = $(this).find('a').attr('href');
                            if (urlToRedirect != 'undefined') window.localtion.href = $(this).find('a').attr('href')
                        } else $el.mode(false);
                        if (settings.gallery === true) $this.slideThumb();
                        clearInterval(interval);
                        return false
                    })
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) cl = 'lSGallery';
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager()
                };
                setTimeout(function() {
                    refresh.init()
                }, 0)
            },
            setHeight: function(ob, fade, loop) {
                var obj = null;
                if (loop) {
                    obj = ob.children('.lslide ').first()
                } else obj = ob.children().first();
                var setCss = function() {
                    if (scene === 0) {
                        var tH = obj.height(),
                            tP = 0,
                            tHT = tH;
                        if (fade) {
                            tH = 0;
                            tP = (tHT * 100) / elSize
                        };
                        ob.css({
                            height: tH + 'px',
                            'padding-bottom': tP + '%'
                        })
                    }
                };
                setCss();
                obj.find('img').load(function() {
                    setTimeout(function() {
                        setCss()
                    }, 100)
                })
            },
            active: function(ob, t) {
                if (this.doCss() && settings.mode === 'fade') $slide.addClass('on');
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) ob.fadeOut(settings.speed);
                    if (t === true) {
                        sc = scene
                    } else sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) sc = nl
                    };
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length
                        } else sc = scene * settings.slideMove;
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl
                            } else if (sc + 1 > l) sc = 0
                        }
                    };
                    if (!this.doCss() && settings.mode === 'fade' && t === false) ob.eq(sc).fadeIn(settings.speed);
                    ob.eq(sc).addClass('active')
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed)
                    }
                }
            },
            move: function(ob, v) {
                if (settings.rtl === true) v = -v;
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            transform: 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        })
                    } else ob.css({
                        transform: 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)'
                    })
                } else if (settings.vertical === true) {
                    ob.css('position', 'relative').animate({
                        top: -v + 'px'
                    }, settings.speed, settings.easing)
                } else ob.css('position', 'relative').animate({
                    left: -v + 'px'
                }, settings.speed, settings.easing);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true)
            },
            fade: function() {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true)
            },
            slide: function() {
                var $this = this;
                refresh.calSlide = function() {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if (slideValue > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin
                        } else if (slideValue < 0) slideValue = 0;
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) $this.resetSlide($el.find('.clone.left').length);
                            if (scene === 0) $this.resetSlide($slide.find('.lslide').length)
                        }
                    }
                };
                refresh.calSlide()
            },
            resetSlide: function(s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function() {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function() {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled')
                    }, 50)
                }, settings.speed + 100)
            },
            slideValue: function() {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove)
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) _sV += (parseInt($children.eq(i).width()) + settings.slideMargin)
                };
                return _sV
            },
            slideThumb: function() {
                var position;
                switch (settings.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = (elSize / 2) - (thumbWidth / 2);
                        break;
                    case 'right':
                        position = elSize - thumbWidth
                };
                var sc = scene - $el.find('.clone.left').length,
                    $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true)
                    if (sc >= $pager.children().length) {
                        sc = 0
                    } else if (sc < 0) sc = $pager.children().length;
                var thumbSlide = sc * (thumbWidth + settings.thumbMargin) - position;
                if ((thumbSlide + elSize) > pagerWidth) thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                if (thumbSlide < 0) thumbSlide = 0;
                this.move($pager, thumbSlide)
            },
            auto: function() {
                if (settings.auto) interval = setInterval(function() {
                    $el.goToNextSlide()
                }, settings.pause)
            },
            touchMove: function(endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords,
                        swipeVal = slideValue - distance;
                    if (swipeVal >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5)
                        }
                    } else if (swipeVal < 0)
                        if (settings.freeMove === false) {
                            swipeVal = 0
                        } else swipeVal = swipeVal / 5;
                    this.move($el, swipeVal)
                }
            },
            touchEnd: function(distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                clearInterval(interval);
                if (settings.mode === 'slide') {
                    var mxVal = false,
                        _next = true;
                    slideValue = slideValue - distance;
                    if (slideValue > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) mxVal = true
                    } else if (slideValue < 0) slideValue = 0;
                    var gC = function(next) {
                        var ad = 0;
                        if (!mxVal)
                            if (next) ad = 1;
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin))
                                if (num % 1 !== 0) scene++
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) break
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false
                    };
                    $el.mode(_next);
                    this.slideThumb()
                } else if (distance >= settings.swipeThreshold) {
                    $el.goToPrevSlide()
                } else if (distance <= -settings.swipeThreshold) $el.goToNextSlide()
            },
            enableDrag: function() {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function(e) {
                        if (w < elSize)
                            if (w !== 0) return false;
                        if ($(e.target).attr('class') !== 'lSPrev' && $(e.target).attr('class') !== 'lSNext') {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault()
                            } else e.returnValue = false;
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval)
                        }
                    });
                    $(window).on('mousemove', function(e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords)
                        }
                    });
                    $(window).on('mouseup', function(e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) $(window).on('click.ls', function(e) {
                                if (e.preventDefault) {
                                    e.preventDefault()
                                } else e.returnValue = false;
                                e.stopImmediatePropagation();
                                e.stopPropagation();
                                $(window).off('click.ls')
                            });
                            $this.touchEnd(distance)
                        }
                    })
                }
            },
            enableTouch: function() {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function(e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval)
                    });
                    $slide.on('touchmove', function(e) {
                        if (w < elSize)
                            if (w !== 0) return false;
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX),
                            yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) e.preventDefault();
                            $this.touchMove(endCoords.pageY, startCoords.pageY)
                        } else {
                            if ((xMovement * 3) > yMovement) e.preventDefault();
                            $this.touchMove(endCoords.pageX, startCoords.pageX)
                        }
                    });
                    $slide.on('touchend', function() {
                        if (w < elSize)
                            if (w !== 0) return false;
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY
                        } else distance = endCoords.pageX - startCoords.pageX;
                        $this.touchEnd(distance)
                    })
                }
            },
            build: function() {
                var $this = this;
                $this.initialStyle();
                $this.auto();
                if (this.doCss()) {
                    if (settings.enableTouch === true) $this.enableTouch();
                    if (settings.enableDrag === true) $this.enableDrag()
                };
                $this.pager();
                $this.controls();
                $this.keyPress()
            }
        };
        plugin.build();
        refresh.init = function() {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight
                } else elSize = $children.outerHeight();
                $slide.css('height', elSize + 'px')
            } else elSize = $slide.outerWidth();
            if (settings.loop === true && settings.mode === 'slide') refresh.clone();
            refresh.calL();
            if (settings.mode === 'slide') $el.removeClass('lSSlide');
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW()
            };
            setTimeout(function() {
                if (settings.mode === 'slide') $el.addClass('lSSlide')
            }, 1e3);
            if (settings.pager) refresh.createPager();
            if (settings.adaptiveHeight === true && settings.vertical === false) $el.css('height', $children.eq(scene).outerHeight(true));
            if (settings.adaptiveHeight === false)
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) plugin.setHeight($el, false, true)
                } else plugin.setHeight($el, true, true);
            if (settings.gallery === true) plugin.slideThumb();
            if (settings.mode === 'slide') plugin.slide();
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide()
                } else $slide.find('.lSAction').show()
            } else if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                $slide.find('.lSAction').hide()
            } else $slide.find('.lSAction').show();
            settings.onRefresh.call(this)
        };
        $el.goToPrevSlide = function() {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) plugin.slideThumb()
            } else if (settings.loop === true) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                if (settings.mode === 'fade') {
                    var l = (length - 1);
                    scene = parseInt(l / settings.slideMove)
                };
                $el.mode(false);
                if (settings.gallery === true) plugin.slideThumb()
            } else if (settings.slideEndAnimatoin === true) {
                $el.addClass('leftEnd');
                setTimeout(function() {
                    $el.removeClass('leftEnd')
                }, 400)
            }
        };
        $el.goToNextSlide = function() {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin
            };
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) plugin.slideThumb()
            } else if (settings.loop === true) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene = 0;
                $el.mode(false);
                if (settings.gallery === true) plugin.slideThumb()
            } else if (settings.slideEndAnimatoin === true) {
                $el.addClass('rightEnd');
                setTimeout(function() {
                    $el.removeClass('rightEnd')
                }, 400)
            }
        };
        $el.mode = function(_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) $el.css('height', $children.eq(scene).outerHeight(true));
            if (on === false)
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') $slide.css('transition-duration', settings.speed + 'ms');
                        if (settings.cssEasing !== '') $slide.css('transition-timing-function', settings.cssEasing)
                    }
                } else if (plugin.doCss()) {
                if (settings.speed !== '') $el.css('transition-duration', settings.speed + 'ms');
                if (settings.cssEasing !== '') $el.css('transition-timing-function', settings.cssEasing)
            };
            if (!_touch) settings.onBeforeSlide.call(this, $el, scene);
            if (settings.mode === 'slide') {
                plugin.slide()
            } else plugin.fade();
            setTimeout(function() {
                if (!_touch) settings.onAfterSlide.call(this, $el, scene)
            }, settings.speed);
            on = true
        };
        $el.play = function() {
            clearInterval(interval);
            $el.goToNextSlide();
            interval = setInterval(function() {
                $el.goToNextSlide()
            }, settings.pause)
        };
        $el.pause = function() {
            clearInterval(interval)
        };
        $el.refresh = function() {
            refresh.init()
        };
        $el.getCurrentSlideCount = function() {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl)
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl
                } else sc = scene - cl
            };
            return sc + 1
        };
        $el.getTotalSlideCount = function() {
            return $slide.find('.lslide').length
        };
        $el.goToSlide = function(s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1)
            } else scene = s;
            $el.mode(false);
            if (settings.gallery === true) plugin.slideThumb()
        };
        setTimeout(function() {
            settings.onSliderLoad.call(this, $el)
        }, 10);
        $(window).on('resize orientationchange', function(e) {
            setTimeout(function() {
                if (e.preventDefault) {
                    e.preventDefault()
                } else e.returnValue = false;
                refresh.init()
            }, 200)
        });
        return this
    }
}(jQuery));
(function($, Sofia) {
    'use strict';
    Sofia.behaviors.goNextfront = {
        attach: function(content, settings) {
            $('.page-frontpage').on('click', '.icon-go-next', function() {
                var top = $('.block-region-middle').offset().top - 101;
                $("html, body").animate({
                    scrollTop: top
                }, 1e3)
            })
        }
    };
    Sofia.behaviors.goNextSlots = {
        attach: function(content, settings) {
            $('.path-job-slots').on('click', '#block-pricingfooter .field--name-body div', function() {
                var top = $('.block-region-middle').offset().top - 101;
                $("html, body").animate({
                    scrollTop: top
                }, 1e3)
            })
        }
    };
    Sofia.behaviors.initMegaMenu = {
        attach: function(content, settings) {
            $('#block-mainnavigation').once().booNavigation({
                slideSpeed: 'fast',
                fadeSpeed: 'fast',
                delay: 300
            })
        }
    };
    Sofia.behaviors.seeMoreOpenJobs = {
        attach: function(content, settings) {
            $('#bix-companies-open-jobs').once().each(function() {
                var fragment = window.location.hash.substr(1);
                if (fragment == 'seemorejobs') {
                    var top = $("#bix-companies-open-jobs").offset().top - 150;
                    $("html, body").animate({
                        scrollTop: top
                    }, 1500)
                }
            })
        }
    };
    Sofia.behaviors.Sticky = {
        attach: function(content, settings) {
            if (!$.fn.sticky) return;
            var heightHeight = $('.layout-container > .header').outerHeight(),
                heightFooter = $('.layout-container > footer').outerHeight(),
                heightBasement = $('.basement').outerHeight(),
                heightToolbar = 0;
            if ($('#toolbar-bar').length > 0) heightToolbar = $('#toolbar-bar').height();
            var wrapperClassName = 'wrap-sticky',
                topSpacing = heightHeight + 20 + heightToolbar,
                bottomSpacing = heightFooter + 150 + heightBasement,
                jobsApply = $('.l-right-column .block-bix-jobs-apply');
            if (jobsApply.length > 0) jobsApply.sticky({
                topSpacing: topSpacing,
                bottomSpacing: bottomSpacing,
                wrapperClassName: wrapperClassName
            });
            var companyWeHiring = $('.l-right-column .block-bix-companies-we-hiring-block');
            if (companyWeHiring.length > 0) {
                var topSpacingNew = topSpacing - 20;
                companyWeHiring.sticky({
                    topSpacing: topSpacingNew,
                    bottomSpacing: bottomSpacing,
                    wrapperClassName: wrapperClassName
                })
            };
            var companyGetNotified = $('.l-right-column .block-bix-job-newsletter-open-jobs');
            if (companyGetNotified.length > 0) {
                var topSpacingNew1 = topSpacing - 20;
                companyGetNotified.sticky({
                    topSpacing: topSpacingNew1,
                    bottomSpacing: bottomSpacing,
                    wrapperClassName: wrapperClassName
                })
            }
        }
    };
    Sofia.behaviors.accordionTabs = {
        attach: function(context, settings) {
            $('.accordion-tabs-wrapper').each(function() {
                var accordionTabs = $('.accordion-tabs', $(this)),
                    accordionTabsTitles = $('.accordion-tabs-titles', $(this)),
                    is_active_tab = accordionTabsTitles.find('.tab-link.is-active').length;
                if (is_active_tab > 0) {
                    var num = accordionTabsTitles.find('.tab-link.is-active').parent().index(),
                        active_content_tab = accordionTabs.find('.tab-header-and-content:eq(' + num + ')');
                    active_content_tab.find('.tab-content').addClass('is-open').show()
                } else {
                    accordionTabsTitles.find('.tab-link').first().addClass('is-active');
                    accordionTabs.find('.tab-content').first().addClass('is-open').show()
                };
                accordionTabsTitles.on('click', 'li > span.tab-link', function(event) {
                    if (!$(this).hasClass('is-active')) {
                        var active_index = accordionTabsTitles.find('li').index($(this).parent());
                        accordionTabs.find('.is-open').removeClass('is-open').hide();
                        accordionTabs.children().eq(active_index).find('.tab-content').toggleClass('is-open').toggle();
                        accordionTabs.find('.is-active').removeClass('is-active');
                        accordionTabsTitles.find('.is-active').removeClass('is-active');
                        $(this).addClass('is-active')
                    };
                    event.preventDefault()
                })
            })
        }
    };
    Sofia.behaviors.lightsSlider = {
        attach: function(context, settings) {
            var slider = $("#company-slideshow:not(.processed)").addClass('processed').lightSlider({
                gallery: true,
                item: 1,
                loop: true,
                slideMargin: 0,
                thumbItem: 7,
                onRefresh: function() {}
            });
            $('.block-views-blockcompany-slideshow-block-1').once().css('backface-visibility', 'hidden');
            $('.block-views-blockpremium-company-overview-block-1').once().css('backface-visibility', 'hidden');
            $('.active-slideshow .block-region-top-wrapper .company-overview-content .col-1').once().click(function() {
                $('.block-region-top-wrapper').toggleClass('hover');
                if ($('.block-region-top-wrapper').hasClass('hover')) {
                    $('.overlay').fadeIn()
                } else $('.overlay').fadeOut()
            });
            $('.overlay').once().click(function() {
                $('.block-region-top-wrapper').toggleClass('hover');
                if ($('.block-region-top-wrapper').hasClass('hover')) {
                    $('.overlay').fadeIn()
                } else $('.overlay').fadeOut()
            })
        }
    };
    Sofia.behaviors.lightsSliderCompanySlider = {
        attach: function(context, settings) {
            $('.view-id-company_news.view-display-id-block_1 .items').lightSlider({
                item: 3,
                loop: false,
                slideMove: 3,
                speed: 600,
                onRefresh: function() {},
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        item: 1,
                        slideMove: 1,
                        adaptiveHeight: true,
                        enableTouch: true
                    }
                }]
            })
        }
    };
    Sofia.behaviors.lightsSliderCompanySliderFunding = {
        attach: function(context, settings) {
            $('.view-id-company_funding.view-display-id-block_1 .items').lightSlider({
                item: 3,
                loop: false,
                slideMove: 3,
                speed: 600,
                onRefresh: function() {},
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        item: 2,
                        slideMove: 2
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        item: 1,
                        slideMove: 1,
                        adaptiveHeight: true,
                        enableTouch: true
                    }
                }]
            })
        }
    };
    Sofia.behaviors.lightsSliderPartnerInsider = {
        attach: function(context, settings) {
            $('.partner-insight-slider').lightSlider({
                item: 4,
                loop: true,
                slideMove: 1,
                auto: 5e3,
                easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                speed: 800,
                onRefresh: function() {},
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1,
                        slideMargin: 6
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }]
            })
        }
    };
    Sofia.behaviors.UserLogin = {
        attach: function(context, settings) {
            $('#edit-bix-email-login-text').click(function(e) {
                e.preventDefault();
                $(this).hide();
                $('.normal-login-wrapper').show()
            })
        }
    };
    Sofia.behaviors.JobsDescription = {
        attach: function(context, settings) {
            var job_description_toggle = $('#read-more-description-toggle');
            job_description_toggle.click(function(e) {
                $(".page-node-type-job .node__content .job-description").height('initial').removeClass('fade-out');
                $(".block-bix-jobs-apply-bottom").show('slow');
                $(this).remove()
            })
        }
    };
    Sofia.behaviors.mobileMainNav = {
        attach: function(context, settings) {
            $('.menu--main-mobile .menu-item--expanded > a').click(function(e) {
                $(this).parent().find('.menu').toggle();
                e.preventDefault();
                return false
            })
        }
    };
    Sofia.behaviors.testimonialsSlideshow = {
        attach: function(context, settings) {
            if ($('.testimonials-slideshow').size() > 0) $('.testimonials-slideshow').lightSlider({
                adaptiveHeight: false,
                item: 1,
                slideMargin: 0,
                enableDrag: true,
                onRefresh: function() {},
                loop: true
            });
            $('.testimonials-slideshow li').not('.processed').each(function() {
                $(this).addClass('processed');
                if ($('.field--name-field-employee-image', $(this)).length < 1) $(this).addClass('without-img')
            })
        }
    };
    Sofia.behaviors.cultureSlideshow = {
        attach: function(context, settings) {
            var plus_width = 185;
            if ($(window).width() >= 768 && $(window).width() <= 1023) plus_width = 150;
            $('.company-culture .views-field').first().find('.employee-image').addClass('active');
            var height_employee = $('.company-culture .views-field').first().find('.employee-slide').outerHeight() + plus_width;
            $('.company-culture').css('min-height', height_employee + 'px');
            $('.company-culture .employee-image').click(function() {
                $('.company-culture .employee-slide').hide();
                $('.company-culture .employee-image').removeClass('active');
                $(this).addClass('active');
                $(this).next('.employee-slide').fadeIn();
                var height_employee = $(this).next('.employee-slide').outerHeight() + plus_width;
                $(this).closest('.company-culture').css('min-height', height_employee + 'px')
            })
        }
    };
    Sofia.behaviors.initFacets = {
        attach: function(context, settings) {
            var body = $('body').not('.path-recruitment'),
                facetElement = body.find('.block-facets');
            facetElement.last().addClass('last');
            facetElement.find('.item-list').each(function() {
                var isActive = $(this).find('.facet-item a').hasClass('is-active');
                if (isActive == 1) {
                    $(this).show();
                    $(this).parent().find('h2').addClass('active')
                }
            });
            facetElement.find('h2').click(function() {
                var title = $(this);
                if (title.hasClass('active')) {
                    title.removeClass('active');
                    title.parent().find('.item-list').hide()
                } else {
                    title.addClass('active');
                    title.parent().find('.item-list').show()
                }
            })
        }
    };
    Sofia.behaviors.googleAnalyticsEvents = {
        attach: function(context, settings) {
            $('[data-ga-event]:not(.ga-event-processed)', context).addClass('ga-event-processed').each(function() {
                var eventTrigger = $(this);
                eventTrigger.click(function() {
                    var eventName = eventTrigger.attr('data-ga-event'),
                        label = eventTrigger.text();
                    ga("send", {
                        hitType: "event",
                        eventCategory: eventName,
                        eventAction: "Click",
                        eventLabel: label,
                        transport: "beacon"
                    })
                })
            })
        }
    };
    Sofia.behaviors.fieldImageUploadExtra = {
        attach: function(context, settings) {
            $('.form-type-managed-file').each(function() {
                if ($('.image-preview', $(this)).length > 0) {
                    $(this).addClass('has-upload-image');
                    $(this).removeClass('not-upload-image')
                } else {
                    $(this).removeClass('has-upload-image');
                    $(this).addClass('not-upload-image')
                }
            })
        }
    };
    Sofia.behaviors.bixScrollToBlock = {
        attach: function(context, settings) {
            $(window).load(function() {
                var hash = window.location.hash,
                    elem = null,
                    topExtra = 15;
                if (hash === '#scroll-company-jobs') {
                    elem = $('.block-views-blockjob-opportunities-block-1')
                } else if (hash === '#scroll-company-articles') elem = $('.block-views-blockcompany-news-block-1');
                if (elem && elem.length > 0) {
                    var headetHeight = $('.header').outerHeight(),
                        offsetTop = elem.offset().top - headetHeight - topExtra;
                    $('html, body').animate({
                        scrollTop: offsetTop
                    }, 1e3)
                }
            })
        }
    };
    Sofia.behaviors.bixAutocompliteFixedWindow = {
        attach: function(context, settings) {
            $('.block-views-exposed-filter-blocksearch-page-1').on('focus', '.ui-autocomplete-input', function() {
                $('body').addClass('open-ui-autocomplete')
            });
            $('.block-views-exposed-filter-blocksearch-page-1').on('blur', '.ui-autocomplete-input', function() {
                $('body').removeClass('open-ui-autocomplete')
            })
        }
    }
})(jQuery, Sofia);
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery)
        })
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'))
    } else window.jQueryBridget = factory(window, window.jQuery)
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice,
        console = window.console,
        logError = typeof console == 'undefined' ? function() {} : function(message) {
            console.error(message)
        }

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) return;
        if (!PluginClass.prototype.option) PluginClass.prototype.option = function(opts) {
            if (!$.isPlainObject(opts)) return;
            this.options = $.extend(true, this.options, opts)
        };
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args)
            };
            plainCall(this, arg0);
            return this
        }

        function methodCall($elems, methodName, args) {
            var returnValue, pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' + pluginMethodStr);
                    return
                };
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return
                };
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue
            });
            return returnValue !== undefined ? returnValue : $elems
        }

        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init()
                } else {
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance)
                }
            })
        };
        updateJQuery($)
    }

    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) return;
        $.bridget = jQueryBridget
    };
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory()
    } else global.EvEmitter = factory()
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {};
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        var events = this._events = this._events || {},
            listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {},
            onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var i = 0,
            listener = listeners[i];
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        while (listener) {
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener]
            };
            listener.apply(this, args);
            i += isOnce ? 0 : 1;
            listener = listeners[i]
        };
        return this
    };
    return EvEmitter
}));
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', [], function() {
            return factory()
        })
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory()
    } else window.getSize = factory()
})(window, function factory() {
    'use strict'

    function getStyleSize(value) {
        var num = parseFloat(value),
            isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num
    }

    function noop() {};
    var logError = typeof console == 'undefined' ? noop : function(message) {
            console.error(message)
        },
        measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'],
        measurementsLength = measurements.length

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0
        };
        return size
    }

    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1');
        return style
    };
    var isSetup = false,
        isBoxSizeOuter

    function setup() {
        if (isSetup) return;
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
        body.removeChild(div)
    }

    function getSize(elem) {
        setup();
        if (typeof elem == 'string') elem = document.querySelector(elem);
        if (!elem || typeof elem != 'object' || !elem.nodeType) return;
        var style = getStyle(elem);
        if (style.display == 'none') return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i],
                value = style[measurement],
                num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0
        };
        var paddingWidth = size.paddingLeft + size.paddingRight,
            paddingHeight = size.paddingTop + size.paddingBottom,
            marginWidth = size.marginLeft + size.marginRight,
            marginHeight = size.marginTop + size.marginBottom,
            borderWidth = size.borderLeftWidth + size.borderRightWidth,
            borderHeight = size.borderTopWidth + size.borderBottomWidth,
            isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter,
            styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size
    };
    return getSize
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory()
    } else window.matchesSelector = factory()
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) return 'matches';
        if (ElemProto.matchesSelector) return 'matchesSelector';
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i],
                method = prefix + 'MatchesSelector';
            if (ElemProto[method]) return method
        }
    })();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector)
    }
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector)
        })
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'))
    } else window.fizzyUIUtils = factory(window, window.matchesSelector)
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) a[prop] = b[prop];
        return a
    };
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div
    };
    utils.makeArray = function(obj) {
        var ary = [];
        if (Array.isArray(obj)) {
            ary = obj
        } else if (obj && typeof obj == 'object' && typeof obj.length == 'number') {
            for (var i = 0; i < obj.length; i++) ary.push(obj[i])
        } else ary.push(obj);
        return ary
    };
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1)
    };
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem
        }
    };
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') return document.querySelector(elem);
        return elem
    };
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event)
    };
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) return;
            if (!selector) {
                ffElems.push(elem);
                return
            };
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) ffElems.push(childElems[i])
        });
        return ffElems
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
        var method = _class.prototype[methodName],
            timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            if (timeout) clearTimeout(timeout);
            var args = arguments,
                _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName]
            }, threshold || 100)
        }
    };
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback)
        } else document.addEventListener('DOMContentLoaded', callback)
    };
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2
        }).toLowerCase()
    };
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace),
                dataAttr = 'data-' + dashedNamespace,
                dataAttrElems = document.querySelectorAll('[' + dataAttr + ']'),
                jsDashElems = document.querySelectorAll('.js-' + dashedNamespace),
                elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems)),
                dataOptionsAttr = dataAttr + '-options',
                jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr),
                    options;
                try {
                    options = attr && JSON.parse(attr)
                } catch (error) {
                    if (console) console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    return
                };
                var instance = new WidgetClass(elem, options);
                if (jQuery) jQuery.data(elem, namespace, instance)
            })
        })
    };
    return utils
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'))
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize)
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict'

    function isEmptyObj(obj) {
        for (var prop in obj) return false;
        prop = null;
        return true
    };
    var docElemStyle = document.documentElement.style,
        transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition',
        transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform',
        transitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            transition: 'transitionend'
        }[transitionProperty],
        vendorProperties = {
            transform: transformProperty,
            transition: transitionProperty,
            transitionDuration: transitionProperty + 'Duration',
            transitionProperty: transitionProperty + 'Property',
            transitionDelay: transitionProperty + 'Delay'
        }

    function Item(element, layout) {
        if (!element) return;
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create()
    };
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        })
    };
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event)
    };
    proto.getSize = function() {
        this.size = getSize(this.element)
    };
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop]
        }
    };
    proto.getPosition = function() {
        var style = getComputedStyle(this.element),
            isOriginLeft = this.layout._getOption('originLeft'),
            isOriginTop = this.layout._getOption('originTop'),
            xValue = style[isOriginLeft ? 'left' : 'right'],
            yValue = style[isOriginTop ? 'top' : 'bottom'],
            layoutSize = this.layout.size,
            x = xValue.indexOf('%') != -1 ? (parseFloat(xValue) / 100) * layoutSize.width : parseInt(xValue, 10),
            y = yValue.indexOf('%') != -1 ? (parseFloat(yValue) / 100) * layoutSize.height : parseInt(yValue, 10);
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y
    };
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size,
            style = {},
            isOriginLeft = this.layout._getOption('originLeft'),
            isOriginTop = this.layout._getOption('originTop'),
            xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight',
            xProperty = isOriginLeft ? 'left' : 'right',
            xResetProperty = isOriginLeft ? 'right' : 'left',
            x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom',
            yProperty = isOriginTop ? 'top' : 'bottom',
            yResetProperty = isOriginTop ? 'bottom' : 'top',
            y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this])
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px'
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px'
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x,
            curY = this.position.y,
            compareX = parseInt(x, 10),
            compareY = parseInt(y, 10),
            didNotMove = compareX === this.position.x && compareY === this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return
        };
        var transX = x - curX,
            transY = y - curY,
            transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        })
    };
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft'),
            isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)'
    };
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition()
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseInt(x, 10);
        this.position.y = parseInt(y, 10)
    };
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) this._removeStyles(args.to);
        for (var prop in args.onTransitionEnd) args.onTransitionEnd[prop].call(this)
    };
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return
        };
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) _transition.onEnd[prop] = args.onTransitionEnd[prop];
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) _transition.clean[prop] = true
        };
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null
        };
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true
    }

    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase()
        })
    };
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) return;
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false)
    };
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event)
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event)
    };
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) return;
        var _transition = this._transn,
            propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) this.disableTransition();
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName]
        };
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName]
        };
        this.emitEvent('transitionEnd', [this])
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false
    };
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) cleanStyle[prop] = '';
        this.css(cleanStyle)
    };
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle)
    };
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms'
    };
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this])
    };
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return
        };
        this.once('transitionEnd', function() {
            this.removeElem()
        });
        this.hide()
    };
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options,
            onTransitionEnd = {},
            transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        })
    };
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) this.emitEvent('reveal')
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) return 'opacity';
        for (var prop in optionStyle) return prop
    };
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options,
            onTransitionEnd = {},
            transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        })
    };
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide')
        }
    };
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        })
    };
    return Item
}));
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item)
        })
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'))
    } else window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item)
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console,
        jQuery = window.jQuery,
        noop = function() {},
        GUID = 0,
        instances = {}

    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            return
        };
        this.element = queryElement;
        if (jQuery) this.$element = jQuery(this.element);
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) this.layout()
    };
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts)
    };
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option]
    };
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) this.bindResize()
    };
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    };
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems),
            Item = this.constructor.Item,
            items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i],
                item = new Item(elem, this);
            items.push(item)
        };
        return items
    };
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector)
    };
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element
        })
    };
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant'),
            isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize()
    };
    proto.getSize = function() {
        this.size = getSize(this.element)
    };
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement],
            elem;
        if (!option) {
            this[measurement] = 0
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option)
            } else if (option instanceof HTMLElement) elem = option;
            this[measurement] = elem ? getSize(elem)[size] : option
        }
    };
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout()
    };
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored
        })
    };
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) return;
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position)
        }, this);
        this._processLayoutQueue(queue)
    };
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    };
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i)
        }, this)
    };
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return
        };
        this.stagger = getMilliseconds(stagger);
        return this.stagger
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y)
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y)
        }
    };
    proto._postLayout = function() {
        this.resizeContainer()
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) return;
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false)
        }
    };
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) return;
        var elemSize = this.size;
        if (elemSize.isBorderBox) measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px'
    };
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items])
        };
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return
        };
        var doneCount = 0

        function tick() {
            doneCount++;
            if (doneCount == count) onComplete()
        };
        items.forEach(function(item) {
            item.once(eventName, tick)
        })
    };
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args)
            } else this.$element.trigger(type, args)
        }
    };
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) item.isIgnored = true
    };
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) delete item.isIgnored
    };
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this)
    };
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem)
        }, this)
    };
    proto._find = function(elems) {
        if (!elems) return;
        if (typeof elems == 'string') elems = this.element.querySelectorAll(elems);
        elems = utils.makeArray(elems);
        return elems
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) return;
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this)
    };
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect(),
            size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        }
    };
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect(),
            thisRect = this._boundingRect,
            size = getSize(elem),
            offset = {
                left: boundingRect.left - thisRect.left - size.marginLeft,
                top: boundingRect.top - thisRect.top - size.marginTop,
                right: thisRect.right - boundingRect.right - size.marginRight,
                bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
            };
        return offset
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true
    };
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false
    };
    proto.onresize = function() {
        this.resize()
    };
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) return;
        this.layout()
    };
    proto.needsResizeLayout = function() {
        var size = getSize(this.element),
            hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth
    };
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) this.items = this.items.concat(items);
        return items
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        this.layoutItems(items, true);
        this.reveal(items)
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems)
    };
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal()
        })
    };
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide()
        })
    };
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items)
    };
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items)
    };
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) return item
        }
    };
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) items.push(item)
        }, this);
        return items
    };
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) return;
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item)
        }, this)
    };
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy()
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) jQuery.removeData(this.element, this.constructor.namespace)
    };
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id]
    };
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) jQuery.bridget(namespace, Layout);
        return Layout
    }

    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments)
        };
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass
    };
    var msUnits = {
        ms: 1,
        s: 1e3
    }

    function getMilliseconds(time) {
        if (typeof time == 'number') return time;
        var matches = time.match(/(^\d*\.?\d*)(\w*)/),
            num = matches && matches[1],
            unit = matches && matches[2];
        if (!num.length) return 0;
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult
    };
    Outlayer.Item = Item;
    return Outlayer
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope/js/item', ['outlayer/outlayer'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'))
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer)
    }
}(window, function factory(Outlayer) {
    'use strict'

    function Item() {
        Outlayer.Item.apply(this, arguments)
    };
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype),
        _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {}
    };
    proto.updateSortData = function() {
        if (this.isIgnored) return;
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData,
            sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this)
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        })
    };
    return Item
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'))
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer)
    }
}(window, function factory(getSize, Outlayer) {
    'use strict'

    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size
        }
    };
    var proto = LayoutMode.prototype,
        facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments)
        }
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element),
            hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight
    };
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width')
    };
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height')
    };
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size,
            outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) return;
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size]
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element)
    };
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size
    };
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments)
        };
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) Mode.options = options;
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode
    };
    return LayoutMode
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'))
    } else window.Masonry = factory(window.Outlayer, window.getSize)
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) this.colYs.push(0);
        this.maxY = 0;
        this.horizontalColIndex = 0
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0],
                firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth
        };
        var columnWidth = this.columnWidth += this.gutter,
            containerWidth = this.containerWidth + this.gutter,
            cols = containerWidth / columnWidth,
            excess = columnWidth - containerWidth % columnWidth,
            mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1)
    };
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth'),
            container = isFitWidth ? this.element.parentNode : this.element,
            size = getSize(container);
        this.containerWidth = size && size.innerWidth
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth,
            mathMethod = remainder && remainder < 1 ? 'round' : 'ceil',
            colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition',
            colPosition = this[colPosMethod](colSpan, item),
            position = {
                x: this.columnWidth * colPosition.col,
                y: colPosition.y
            },
            setHeight = colPosition.y + item.size.outerHeight,
            setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) this.colYs[i] = setHeight;
        return position
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan),
            minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
        }
    };
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) return this.colYs;
        var colGroup = [],
            groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) colGroup[i] = this._getColGroupY(i, colSpan);
        return colGroup
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) return this.colYs[col];
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs)
    };
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols,
            isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan)
        }
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp),
            offset = this._getElementOffset(stamp),
            isOriginLeft = this._getOption('originLeft'),
            firstX = isOriginLeft ? offset.left : offset.right,
            lastX = firstX + stampSize.outerWidth,
            firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop'),
            stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) this.colYs[i] = Math.max(stampMaxY, this.colYs[i])
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) size.width = this._getContainerFitWidth();
        return size
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0,
            i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) break;
            unusedCols++
        };
        return (this.cols - unusedCols) * this.columnWidth - this.gutter
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth
    };
    return Masonry
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope/js/layout-modes/masonry', ['../layout-mode', 'masonry/masonry'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'))
    } else factory(window.Isotope.LayoutMode, window.Masonry)
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry'),
        proto = MasonryMode.prototype,
        keepModeMethods = {
            _getElementOffset: true,
            layout: true,
            _getMeasurement: true
        };
    for (var method in Masonry.prototype)
        if (!keepModeMethods[method]) proto[method] = Masonry.prototype[method];
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this)
    };
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        return _getOption.apply(this.isotope, arguments)
    };
    return MasonryMode
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], factory)
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'))
    } else factory(window.Isotope.LayoutMode)
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows'),
        proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth')
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter,
            containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY
        };
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position
    };
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        }
    };
    return FitRows
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope/js/layout-modes/vertical', ['../layout-mode'], factory)
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'))
    } else factory(window.Isotope.LayoutMode)
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
            horizontalAlignment: 0
        }),
        proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment,
            y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        }
    };
    proto._getContainerSize = function() {
        return {
            height: this.y
        }
    };
    return Vertical
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope/js/item', 'isotope/js/layout-mode', 'isotope/js/layout-modes/masonry', 'isotope/js/layout-modes/fit-rows', 'isotope/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode)
        })
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope/js/item'), require('isotope/js/layout-mode'), require('isotope/js/layout-modes/masonry'), require('isotope/js/layout-modes/fit-rows'), require('isotope/js/layout-modes/vertical'))
    } else window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode)
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery,
        trim = String.prototype.trim ? function(str) {
            return str.trim()
        } : function(str) {
            return str.replace(/^\s+|\s+$/g, '')
        },
        Isotope = Outlayer.create('isotope', {
            layoutMode: 'masonry',
            isJQueryFiltering: true,
            sortAscending: true
        });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) this._initLayoutMode(name)
    };
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this)
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++
        };
        this._updateItemsSortData(items);
        return items
    };
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name],
            initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this)
    };
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return
        };
        this._layout()
    };
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true
    };
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered])
        } else this._hideReveal(filtered);
        this._sort();
        this._layout()
    };
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide)
    };
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant'),
            isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant
    };
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete, _this = this

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems])
        };
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback()
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback()
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback()
        })
    };
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [],
            hiddenMatched = [],
            visibleUnmatched = [],
            test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) continue;
            var isMatched = test(item);
            if (isMatched) matches.push(item);
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item)
            } else if (!isMatched && !item.isHidden) visibleUnmatched.push(item)
        };
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        }
    };
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) return function(item) {
            return jQuery(item.element).is(filter)
        };
        if (typeof filter == 'function') return function(item) {
            return filter(item.element)
        };
        return function(item) {
            return matchesSelector(item.element, filter)
        }
    };
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems)
        } else items = this.items;
        this._getSorters();
        this._updateItemsSortData(items)
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter)
        }
    };
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData()
        }
    };
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') return sorter;
            var args = trim(sorter).split(' '),
                query = args[0],
                attrMatch = query.match(/^\[(.+)\]$/),
                attr = attrMatch && attrMatch[1],
                getValue = getValueGetter(attr, query),
                parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem))
            } : function(elem) {
                return elem && getValue(elem)
            };
            return sorter
        }

        function getValueGetter(attr, query) {
            if (attr) return function getAttribute(elem) {
                return elem.getAttribute(attr)
            };
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent
            }
        };
        return mungeSorter
    })();
    Isotope.sortDataParsers = {
        parseInt: function(val) {
            return parseInt(val, 10)
        },
        parseFloat: function(val) {
            return parseFloat(val)
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) return;
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) this.sortHistory = sortBys.concat(this.sortHistory);
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter)
    };
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++)
            if (sortBys[i] != this.sortHistory[i]) return false;
        return true
    }

    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i],
                    a = itemA.sortData[sortBy],
                    b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc,
                        direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction
                }
            };
            return 0
        }
    };
    proto._mode = function() {
        var layoutMode = this.options.layoutMode,
            mode = this.modes[layoutMode];
        if (!mode) throw new Error('No layout mode: ' + layoutMode);
        mode.options = this.options[layoutMode];
        return mode
    };
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout()
    };
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item)
    };
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp)
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize()
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems)
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items)
    };
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches
    };
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        var i, item, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element)
        };
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) items[i].isLayoutInstant = true;
        this.arrange();
        for (i = 0; i < len; i++) delete items[i].isLayoutInstant;
        this.reveal(filteredInsertItems)
    };
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item)
        }
    };
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random()
        };
        this.options.sortBy = 'random';
        this._sort();
        this._layout()
    };
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue
    };
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element
        })
    };
    return Isotope
}));
(function($, Sofia) {
    'use strict';
    Sofia.behaviors.initIsotope = {
        attach: function(content, settings) {
            var $container = $('.job-opportunities .view-content:not(.processed)');
            $container.addClass('processed').isotope({
                itemSelector: '.views-row',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer'
                }
            });
            var active_selector = $('.job-opportunities .job-categories .category.active').data('category');
            if (active_selector && active_selector != 'all') $container.isotope({
                filter: active_selector
            });
            $('.job-opportunities .job-categories .category:not(.processed)').addClass('processed').on('click', function() {
                var selector = $(this).data('category');
                $('.job-opportunities .job-categories .category').removeClass('active');
                $(this).addClass('active');
                if (selector == 'all') {
                    $container.isotope({
                        filter: '*'
                    })
                } else $container.isotope({
                    filter: selector
                })
            });
            $('.block-bix-companies-we-hiring-block .category-wrapper:not(.processed)').addClass('processed').click(function(e) {
                e.preventDefault();
                var selector = $(this).data('category'),
                    top = $(".block-views-blockjob-opportunities-block-1").offset().top - 101;
                $("html, body").animate({
                    scrollTop: top
                }, 1500);
                $('.job-opportunities .job-categories .category').each(function() {
                    if ($(this).data('category') == selector) $(this).click()
                })
            });
            $('.block-bix-companies-we-hiring-block .more-link a:not(.processed)').addClass('processed').click(function(e) {
                e.preventDefault();
                var top = $(".block-views-blockjob-opportunities-block-1").offset().top - 101;
                $("html, body").animate({
                    scrollTop: top
                }, 1500)
            })
        }
    };
    $('.block-bix-companies-we-hiring-block h3:not(.processed)').addClass('processed').click(function(e) {
        var $container = $('.job-opportunities .view-content:not(.processed)'),
            top = $(".block-views-blockjob-opportunities-block-1").offset().top - 101;
        $("html, body").animate({
            scrollTop: top
        }, 1500);
        $('.job-opportunities .job-categories .category').each(function() {
            if ($(this).data('category') == 'all') $(this).click()
        })
    })
})(jQuery, Sofia);
(function($, Sofia) {
    'use strict';
    Sofia.theme.progressBar = function(id) {
        return '<div id="' + id + '" class="progress" aria-live="polite"><div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'
    };
    Sofia.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $(Sofia.theme('progressBar', id))
    };
    $.extend(Sofia.ProgressBar.prototype, {
        setProgress: function(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').css('width', percentage + '%');
                $(this.element).find('div.progress__percentage').html(percentage + '%')
            };
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) this.updateCallback(percentage, message, this)
        },
        startMonitoring: function(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing()
        },
        stopMonitoring: function() {
            clearTimeout(this.timer);
            this.uri = null
        },
        sendPing: function() {
            if (this.timer) clearTimeout(this.timer);
            if (this.uri) {
                var pb = this,
                    uri = this.uri;
                if (uri.indexOf('?') === -1) {
                    uri += '?'
                } else uri += '&';
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success: function(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return
                        };
                        pb.setProgress(progress.percentage, progress.message, progress.label);
                        pb.timer = setTimeout(function() {
                            pb.sendPing()
                        }, pb.delay)
                    },
                    error: function(xmlhttp) {
                        var e = new Sofia.AjaxError(xmlhttp, pb.uri);
                        pb.displayError('<pre>' + e.message + '</pre>')
                    }
                })
            }
        },
        displayError: function(string) {
            var error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();
            if (this.errorCallback) this.errorCallback(this)
        }
    })
})(jQuery, Sofia);
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Sofia uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function($, window, Sofia, SofiaSettings) {

    'use strict';

    /**
     * Attaches the Ajax behavior to each Ajax form element.
     *
     * @type {Sofia~behavior}
     *
     * @prop {Sofia~behaviorAttach} attach
     *   Initialize all {@link Sofia.Ajax} objects declared in
     *   `SofiaSettings.ajax` or initialize {@link Sofia.Ajax} objects from
     *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
     * @prop {Sofia~behaviorDetach} detach
     *   During `unload` remove all {@link Sofia.Ajax} objects related to
     *   the removed content.
     */
    Sofia.behaviors.AJAX = {
        attach: function(context, settings) {

            function loadAjaxBehavior(base) {
                var element_settings = settings.ajax[base];
                if (typeof element_settings.selector === 'undefined') {
                    element_settings.selector = '#' + base;
                }
                $(element_settings.selector).once('Sofia-ajax').each(function() {
                    element_settings.element = this;
                    element_settings.base = base;
                    Sofia.ajax(element_settings);
                });
            }

            // Load all Ajax behaviors specified in the settings.
            for (var base in settings.ajax) {
                if (settings.ajax.hasOwnProperty(base)) {
                    loadAjaxBehavior(base);
                }
            }

            // Bind Ajax behaviors to all items showing the class.
            $('.use-ajax').once('ajax').each(function() {
                var element_settings = {};
                // Clicked links look better with the throbber than the progress bar.
                element_settings.progress = {
                    type: 'throbber'
                };

                // For anchor tags, these will go to the target of the anchor rather
                // than the usual location.
                var href = $(this).attr('href');
                if (href) {
                    element_settings.url = href;
                    element_settings.event = 'click';
                }
                element_settings.dialogType = $(this).data('dialog-type');
                element_settings.dialog = $(this).data('dialog-options');
                element_settings.base = $(this).attr('id');
                element_settings.element = this;
                Sofia.ajax(element_settings);
            });

            // This class means to submit the form to the action using Ajax.
            $('.use-ajax-submit').once('ajax').each(function() {
                var element_settings = {};

                // Ajax submits specified in this manner automatically submit to the
                // normal form action.
                element_settings.url = $(this.form).attr('action');
                // Form submit button clicks need to tell the form what was clicked so
                // it gets passed in the POST request.
                element_settings.setClick = true;
                // Form buttons use the 'click' event rather than mousedown.
                element_settings.event = 'click';
                // Clicked form buttons look better with the throbber than the progress
                // bar.
                element_settings.progress = {
                    type: 'throbber'
                };
                element_settings.base = $(this).attr('id');
                element_settings.element = this;

                Sofia.ajax(element_settings);
            });
        },

        detach: function(context, settings, trigger) {
            if (trigger === 'unload') {
                Sofia.ajax.expired().forEach(function(instance) {
                    // Set this to null and allow garbage collection to reclaim
                    // the memory.
                    Sofia.ajax.instances[instance.instanceIndex] = null;
                });
            }
        }
    };

    /**
     * Extends Error to provide handling for Errors in Ajax.
     *
     * @constructor
     *
     * @augments Error
     *
     * @param {XMLHttpRequest} xmlhttp
     *   XMLHttpRequest object used for the failed request.
     * @param {string} uri
     *   The URI where the error occurred.
     * @param {string} customMessage
     *   The custom message.
     */
    Sofia.AjaxError = function(xmlhttp, uri, customMessage) {

        var statusCode;
        var statusText;
        var pathText;
        var responseText;
        var readyStateText;
        if (xmlhttp.status) {
            statusCode = '\n' + Sofia.t('An AJAX HTTP error occurred.') + '\n' + Sofia.t('HTTP Result Code: !status', {
                '!status': xmlhttp.status
            });
        } else {
            statusCode = '\n' + Sofia.t('An AJAX HTTP request terminated abnormally.');
        }
        statusCode += '\n' + Sofia.t('Debugging information follows.');
        pathText = '\n' + Sofia.t('Path: !uri', {
            '!uri': uri
        });
        statusText = '';
        // In some cases, when statusCode === 0, xmlhttp.statusText may not be
        // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
        // catch that and the test causes an exception. So we need to catch the
        // exception here.
        try {
            statusText = '\n' + Sofia.t('StatusText: !statusText', {
                '!statusText': $.trim(xmlhttp.statusText)
            });
        } catch (e) {
            // Empty.
        }

        responseText = '';
        // Again, we don't have a way to know for sure whether accessing
        // xmlhttp.responseText is going to throw an exception. So we'll catch it.
        try {
            responseText = '\n' + Sofia.t('ResponseText: !responseText', {
                '!responseText': $.trim(xmlhttp.responseText)
            });
        } catch (e) {
            // Empty.
        }

        // Make the responseText more readable by stripping HTML tags and newlines.
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');

        // We don't need readyState except for status == 0.
        readyStateText = xmlhttp.status === 0 ? ('\n' + Sofia.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState
        })) : '';

        customMessage = customMessage ? ('\n' + Sofia.t('CustomMessage: !customMessage', {
            '!customMessage': customMessage
        })) : '';

        /**
         * Formatted and translated error message.
         *
         * @type {string}
         */
        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

        /**
         * Used by some browsers to display a more accurate stack trace.
         *
         * @type {string}
         */
        this.name = 'AjaxError';
    };

    Sofia.AjaxError.prototype = new Error();
    Sofia.AjaxError.prototype.constructor = Sofia.AjaxError;

    /**
     * Provides Ajax page updating via jQuery $.ajax.
     *
     * This function is designed to improve developer experience by wrapping the
     * initialization of {@link Sofia.Ajax} objects and storing all created
     * objects in the {@link Sofia.ajax.instances} array.
     *
     * @example
     * Sofia.behaviors.myCustomAJAXStuff = {
     *   attach: function (context, settings) {
     *
     *     var ajaxSettings = {
     *       url: 'my/url/path',
     *       // If the old version of Sofia.ajax() needs to be used those
     *       // properties can be added
     *       base: 'myBase',
     *       element: $(context).find('.someElement')
     *     };
     *
     *     var myAjaxObject = Sofia.ajax(ajaxSettings);
     *
     *     // Declare a new Ajax command specifically for this Ajax object.
     *     myAjaxObject.commands.insert = function (ajax, response, status) {
     *       $('#my-wrapper').append(response.data);
     *       alert('New content was appended to #my-wrapper');
     *     };
     *
     *     // This command will remove this Ajax object from the page.
     *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
     *       Sofia.ajax.instances[this.instanceIndex] = null;
     *     };
     *
     *     // Programmatically trigger the Ajax request.
     *     myAjaxObject.execute();
     *   }
     * };
     *
     * @param {object} settings
     *   The settings object passed to {@link Sofia.Ajax} constructor.
     * @param {string} [settings.base]
     *   Base is passed to {@link Sofia.Ajax} constructor as the 'base'
     *   parameter.
     * @param {HTMLElement} [settings.element]
     *   Element parameter of {@link Sofia.Ajax} constructor, element on which
     *   event listeners will be bound.
     *
     * @return {Sofia.Ajax}
     *   The created Ajax object.
     *
     * @see Sofia.AjaxCommands
     */
    Sofia.ajax = function(settings) {
        if (arguments.length !== 1) {
            throw new Error('Sofia.ajax() function must be called with one configuration object only');
        }
        // Map those config keys to variables for the old Sofia.ajax function.
        var base = settings.base || false;
        var element = settings.element || false;
        delete settings.base;
        delete settings.element;

        // By default do not display progress for ajax calls without an element.
        if (!settings.progress && !element) {
            settings.progress = false;
        }

        var ajax = new Sofia.Ajax(base, element, settings);
        ajax.instanceIndex = Sofia.ajax.instances.length;
        Sofia.ajax.instances.push(ajax);

        return ajax;
    };

    /**
     * Contains all created Ajax objects.
     *
     * @type {Array.<Sofia.Ajax|null>}
     */
    Sofia.ajax.instances = [];

    /**
     * List all objects where the associated element is not in the DOM
     *
     * This method ignores {@link Sofia.Ajax} objects not bound to DOM elements
     * when created with {@link Sofia.ajax}.
     *
     * @return {Array.<Sofia.Ajax>}
     *   The list of expired {@link Sofia.Ajax} objects.
     */
    Sofia.ajax.expired = function() {
        return Sofia.ajax.instances.filter(function(instance) {
            return instance && instance.element !== false && !document.body.contains(instance.element);
        });
    };

    /**
     * Settings for an Ajax object.
     *
     * @typedef {object} Sofia.Ajax~element_settings
     *
     * @prop {string} url
     *   Target of the Ajax request.
     * @prop {?string} [event]
     *   Event bound to settings.element which will trigger the Ajax request.
     * @prop {bool} [keypress=true]
     *   Triggers a request on keypress events.
     * @prop {?string} selector
     *   jQuery selector targeting the element to bind events to or used with
     *   {@link Sofia.AjaxCommands}.
     * @prop {string} [effect='none']
     *   Name of the jQuery method to use for displaying new Ajax content.
     * @prop {string|number} [speed='none']
     *   Speed with which to apply the effect.
     * @prop {string} [method]
     *   Name of the jQuery method used to insert new content in the targeted
     *   element.
     * @prop {object} [progress]
     *   Settings for the display of a user-friendly loader.
     * @prop {string} [progress.type='throbber']
     *   Type of progress element, core provides `'bar'`, `'throbber'` and
     *   `'fullscreen'`.
     * @prop {string} [progress.message=Sofia.t('Please wait...')]
     *   Custom message to be used with the bar indicator.
     * @prop {object} [submit]
     *   Extra data to be sent with the Ajax request.
     * @prop {bool} [submit.js=true]
     *   Allows the PHP side to know this comes from an Ajax request.
     * @prop {object} [dialog]
     *   Options for {@link Sofia.dialog}.
     * @prop {string} [dialogType]
     *   One of `'modal'` or `'dialog'`.
     * @prop {string} [prevent]
     *   List of events on which to stop default action and stop propagation.
     */

    /**
     * Ajax constructor.
     *
     * The Ajax request returns an array of commands encoded in JSON, which is
     * then executed to make any changes that are necessary to the page.
     *
     * Sofia uses this file to enhance form elements with `#ajax['url']` and
     * `#ajax['wrapper']` properties. If set, this file will automatically be
     * included to provide Ajax capabilities.
     *
     * @constructor
     *
     * @param {string} [base]
     *   Base parameter of {@link Sofia.Ajax} constructor
     * @param {HTMLElement} [element]
     *   Element parameter of {@link Sofia.Ajax} constructor, element on which
     *   event listeners will be bound.
     * @param {Sofia.Ajax~element_settings} element_settings
     *   Settings for this Ajax object.
     */
    Sofia.Ajax = function(base, element, element_settings) {
        var defaults = {
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? '#' + base : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Sofia.t('Please wait...')
            },
            submit: {
                js: true
            }
        };

        $.extend(this, defaults, element_settings);

        /**
         * @type {Sofia.AjaxCommands}
         */
        this.commands = new Sofia.AjaxCommands();

        /**
         * @type {bool|number}
         */
        this.instanceIndex = false;

        // @todo Remove this after refactoring the PHP code to:
        //   - Call this 'selector'.
        //   - Include the '#' for ID-based selectors.
        //   - Support non-ID-based selectors.
        if (this.wrapper) {

            /**
             * @type {string}
             */
            this.wrapper = '#' + this.wrapper;
        }

        /**
         * @type {HTMLElement}
         */
        this.element = element;

        /**
         * @type {Sofia.Ajax~element_settings}
         */
        this.element_settings = element_settings;

        // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
        // bind Ajax to links as well.
        if (this.element && this.element.form) {

            /**
             * @type {jQuery}
             */
            this.$form = $(this.element.form);
        }

        // If no Ajax callback URL was given, use the link href or form action.
        if (!this.url) {
            var $element = $(this.element);
            if ($element.is('a')) {
                this.url = $element.attr('href');
            } else if (this.element && element.form) {
                this.url = this.$form.attr('action');
            }
        }

        // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
        // the server detect when it needs to degrade gracefully.
        // There are four scenarios to check for:
        // 1. /nojs/
        // 2. /nojs$ - The end of a URL string.
        // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
        // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
        var originalUrl = this.url;

        /**
         * Processed Ajax URL.
         *
         * @type {string}
         */
        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
        // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
        // version.
        // if (SofiaSettings.ajaxTrustedUrl[originalUrl]) {
        //     SofiaSettings.ajaxTrustedUrl[this.url] = true;
        // }

        // Set the options for the ajaxSubmit function.
        // The 'this' variable will not persist inside of the options object.
        var ajax = this;

        /**
         * Options for the jQuery.ajax function.
         *
         * @name Sofia.Ajax#options
         *
         * @type {object}
         *
         * @prop {string} url
         *   Ajax URL to be called.
         * @prop {object} data
         *   Ajax payload.
         * @prop {function} beforeSerialize
         *   Implement jQuery beforeSerialize function to call
         *   {@link Sofia.Ajax#beforeSerialize}.
         * @prop {function} beforeSubmit
         *   Implement jQuery beforeSubmit function to call
         *   {@link Sofia.Ajax#beforeSubmit}.
         * @prop {function} beforeSend
         *   Implement jQuery beforeSend function to call
         *   {@link Sofia.Ajax#beforeSend}.
         * @prop {function} success
         *   Implement jQuery success function to call
         *   {@link Sofia.Ajax#success}.
         * @prop {function} complete
         *   Implement jQuery success function to clean up ajax state and trigger an
         *   error if needed.
         * @prop {string} dataType='json'
         *   Type of the response expected.
         * @prop {string} type='POST'
         *   HTTP method to use for the Ajax request.
         */
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            beforeSerialize: function(element_settings, options) {
                return ajax.beforeSerialize(element_settings, options);
            },
            beforeSubmit: function(form_values, element_settings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(form_values, element_settings, options);
            },
            beforeSend: function(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success: function(response, status, xmlhttprequest) {
                // Sanity check for browser support (object expected).
                // When using iFrame uploads, responses must be returned as a string.
                if (typeof response === 'string') {
                    response = $.parseJSON(response);
                }

                // Prior to invoking the response's commands, verify that they can be
                // trusted by checking for a response header. See
                // \Sofia\Core\EventSubscriber\AjaxResponseSubscriber for details.
                // - Empty responses are harmless so can bypass verification. This
                //   avoids an alert message for server-generated no-op responses that
                //   skip Ajax rendering.
                // - Ajax objects with trusted URLs (e.g., ones defined server-side via
                //   #ajax) can bypass header verification. This is especially useful
                //   for Ajax with multipart forms. Because IFRAME transport is used,
                //   the response headers cannot be accessed for verification.
                // if (response !== null && !SofiaSettings.ajaxTrustedUrl[ajax.url]) {
                //     if (xmlhttprequest.getResponseHeader('X-sofia-Ajax-Token') !== '1') {
                //         var customMessage = Sofia.t('The response failed verification so will not be processed.');
                //         return ajax.error(xmlhttprequest, ajax.url, customMessage);
                //     }
                // }

                return ajax.success(response, status);
            },
            complete: function(xmlhttprequest, status) {
                ajax.ajaxing = false;
                if (status === 'error' || status === 'parsererror') {
                    return ajax.error(xmlhttprequest, ajax.url);
                }
            },
            dataType: 'json',
            type: 'POST'
        };

        if (element_settings.dialog) {
            ajax.options.data.dialogOptions = element_settings.dialog;
        }

        // Ensure that we have a valid URL by adding ? when no query parameter is
        // yet available, otherwise append using &.
        if (ajax.options.url.indexOf('?') === -1) {
            ajax.options.url += '?';
        } else {
            ajax.options.url += '&';
        }
        ajax.options.url += Sofia.ajax.WRAPPER_FORMAT + '=Sofia_' + (element_settings.dialogType || 'ajax');

        // Bind the ajaxSubmit function to the element event.
        // $(ajax.element).on(element_settings.event, function(event) {
        //     if (!SofiaSettings.ajaxTrustedUrl[ajax.url] && !Sofia.url.isLocal(ajax.url)) {
        //         throw new Error(Sofia.t('The callback URL is not local and not trusted: !url', {
        //             '!url': ajax.url
        //         }));
        //     }
        //     return ajax.eventResponse(this, event);
        // });

        // If necessary, enable keyboard submission so that Ajax behaviors
        // can be triggered through keyboard input as well as e.g. a mousedown
        // action.
        if (element_settings.keypress) {
            $(ajax.element).on('keypress', function(event) {
                return ajax.keypressResponse(this, event);
            });
        }

        // If necessary, prevent the browser default action of an additional event.
        // For example, prevent the browser default action of a click, even if the
        // Ajax behavior binds to mousedown.
        if (element_settings.prevent) {
            $(ajax.element).on(element_settings.prevent, false);
        }
    };

    /**
     * URL query attribute to indicate the wrapper used to render a request.
     *
     * The wrapper format determines how the HTML is wrapped, for example in a
     * modal dialog.
     *
     * @const {string}
     *
     * @default
     */
    Sofia.ajax.WRAPPER_FORMAT = '_wrapper_format';

    /**
     * Request parameter to indicate that a request is a Sofia Ajax request.
     *
     * @const {string}
     *
     * @default
     */
    Sofia.Ajax.AJAX_REQUEST_PARAMETER = '_Sofia_ajax';

    /**
     * Execute the ajax request.
     *
     * Allows developers to execute an Ajax request manually without specifying
     * an event to respond to.
     *
     * @return {object}
     *   Returns the jQuery.Deferred object underlying the Ajax request. If
     *   pre-serialization fails, the Deferred will be returned in the rejected
     *   state.
     */
    Sofia.Ajax.prototype.execute = function() {
        // Do not perform another ajax command if one is already in progress.
        if (this.ajaxing) {
            return;
        }

        try {
            this.beforeSerialize(this.element, this.options);
            // Return the jqXHR so that external code can hook into the Deferred API.
            return $.ajax(this.options);
        } catch (e) {
            // Unset the ajax.ajaxing flag here because it won't be unset during
            // the complete response.
            this.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
            // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
            // so that calling code can take appropriate action.
            return $.Deferred().reject();
        }
    };

    /**
     * Handle a key press.
     *
     * The Ajax object will, if instructed, bind to a key press response. This
     * will test to see if the key press is valid to trigger this event and
     * if it is, trigger it for us and prevent other keypresses from triggering.
     * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
     * and 32. RETURN is often used to submit a form when in a textfield, and
     * SPACE is often used to activate an element without submitting.
     *
     * @param {HTMLElement} element
     *   Element the event was triggered on.
     * @param {jQuery.Event} event
     *   Triggered event.
     */
    Sofia.Ajax.prototype.keypressResponse = function(element, event) {
        // Create a synonym for this to reduce code confusion.
        var ajax = this;

        // Detect enter key and space bar and allow the standard response for them,
        // except for form elements of type 'text', 'tel', 'number' and 'textarea',
        // where the spacebar activation causes inappropriate activation if
        // #ajax['keypress'] is TRUE. On a text-type widget a space should always
        // be a space.
        if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
                element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
            event.preventDefault();
            event.stopPropagation();
            $(ajax.element_settings.element).trigger(ajax.element_settings.event);
        }
    };

    /**
     * Handle an event that triggers an Ajax response.
     *
     * When an event that triggers an Ajax response happens, this method will
     * perform the actual Ajax call. It is bound to the event using
     * bind() in the constructor, and it uses the options specified on the
     * Ajax object.
     *
     * @param {HTMLElement} element
     *   Element the event was triggered on.
     * @param {jQuery.Event} event
     *   Triggered event.
     */
    Sofia.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();

        // Create a synonym for this to reduce code confusion.
        var ajax = this;

        // Do not perform another Ajax command if one is already in progress.
        if (ajax.ajaxing) {
            return;
        }

        try {
            if (ajax.$form) {
                // If setClick is set, we must set this to ensure that the button's
                // value is passed.
                if (ajax.setClick) {
                    // Mark the clicked button. 'form.clk' is a special variable for
                    // ajaxSubmit that tells the system which element got clicked to
                    // trigger the submit. Without it there would be no 'op' or
                    // equivalent.
                    element.form.clk = element;
                }

                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            // Unset the ajax.ajaxing flag here because it won't be unset during
            // the complete response.
            ajax.ajaxing = false;
            window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
        }
    };

    /**
     * Handler for the form serialization.
     *
     * Runs before the beforeSend() handler (see below), and unlike that one, runs
     * before field data is collected.
     *
     * @param {object} [element]
     *   Ajax object's `element_settings`.
     * @param {object} options
     *   jQuery.ajax options.
     */
    Sofia.Ajax.prototype.beforeSerialize = function(element, options) {
        // Allow detaching behaviors to update field values before collecting them.
        // This is only needed when field values are added to the POST data, so only
        // when there is a form such that this.$form.ajaxSubmit() is used instead of
        // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
        // isn't called, but don't rely on that: explicitly check this.$form.
        if (this.$form) {
            var settings = this.settings || SofiaSettings;
            Sofia.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }

        // Inform Sofia that this is an AJAX request.
        options.data[Sofia.Ajax.AJAX_REQUEST_PARAMETER] = 1;

        // Allow Sofia to return new JavaScript and CSS files to load without
        // returning the ones already loaded.
        // @see \Sofia\Core\Theme\AjaxBasePageNegotiator
        // @see \Sofia\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
        // @see system_js_settings_alter()
        var pageState = SofiaSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    };

    /**
     * Modify form values prior to form submission.
     *
     * @param {Array.<object>} form_values
     *   Processed form values.
     * @param {jQuery} element
     *   The form node as a jQuery object.
     * @param {object} options
     *   jQuery.ajax options.
     */
    Sofia.Ajax.prototype.beforeSubmit = function(form_values, element, options) {
        // This function is left empty to make it simple to override for modules
        // that wish to add functionality here.
    };

    /**
     * Prepare the Ajax request before it is sent.
     *
     * @param {XMLHttpRequest} xmlhttprequest
     *   Native Ajax object.
     * @param {object} options
     *   jQuery.ajax options.
     */
    Sofia.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        // For forms without file inputs, the jQuery Form plugin serializes the
        // form values, and then calls jQuery's $.ajax() function, which invokes
        // this handler. In this circumstance, options.extraData is never used. For
        // forms with file inputs, the jQuery Form plugin uses the browser's normal
        // form submission mechanism, but captures the response in a hidden IFRAME.
        // In this circumstance, it calls this handler first, and then appends
        // hidden fields to the form to submit the values in options.extraData.
        // There is no simple way to know which submission mechanism will be used,
        // so we add to extraData regardless, and allow it to be ignored in the
        // former case.
        if (this.$form) {
            options.extraData = options.extraData || {};

            // Let the server know when the IFRAME submission mechanism is used. The
            // server can use this information to wrap the JSON response in a
            // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
            options.extraData.ajax_iframe_upload = '1';

            // The triggering element is about to be disabled (see below), but if it
            // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
            // that value is included in the submission. As per above, submissions
            // that use $.ajax() are already serialized prior to the element being
            // disabled, so this is only needed for IFRAME submissions.
            var v = $.fieldValue(this.element);
            if (v !== null) {
                options.extraData[this.element.name] = v;
            }
        }

        // Disable the element that received the change to prevent user interface
        // interaction while the Ajax request is in progress. ajax.ajaxing prevents
        // the element from triggering a new request, but does not prevent the user
        // from changing its value.
        $(this.element).prop('disabled', true);

        if (!this.progress || !this.progress.type) {
            return;
        }

        // Insert progress indicator.
        var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
            this[progressIndicatorMethod].call(this);
        }
    };

    /**
     * Sets the progress bar progress indicator.
     */
    Sofia.Ajax.prototype.setProgressIndicatorBar = function() {
        var progressBar = new Sofia.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
        if (this.progress.message) {
            progressBar.setProgress(-1, this.progress.message);
        }
        if (this.progress.url) {
            progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        }
        this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    };

    /**
     * Sets the throbber progress indicator.
     */
    Sofia.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
        if (this.progress.message) {
            this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
        }
        $(this.element).after(this.progress.element);
    };

    /**
     * Sets the fullscreen progress indicator.
     */
    Sofia.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
        $('body').after(this.progress.element);
    };

    /**
     * Handler for the form redirection completion.
     *
     * @param {Array.<Sofia.AjaxCommands~commandDefinition>} response
     *   Sofia Ajax response.
     * @param {number} status
     *   XMLHttpRequest status.
     */
    Sofia.Ajax.prototype.success = function(response, status) {
        // Remove the progress element.
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.element).prop('disabled', false);

        // Save element's ancestors tree so if the element is removed from the dom
        // we can try to refocus one of its parents. Using addBack reverse the
        // result array, meaning that index 0 is the highest parent in the hierarchy
        // in this situation it is usually a <form> element.
        var elementParents = $(this.element).parents('[data-sofia-selector]').addBack().toArray();

        // Track if any command is altering the focus so we can avoid changing the
        // focus set by the Ajax command.
        var focusChanged = false;
        for (var i in response) {
            if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
                this.commands[response[i].command](this, response[i], status);
                if (response[i].command === 'invoke' && response[i].method === 'focus') {
                    focusChanged = true;
                }
            }
        }

        // If the focus hasn't be changed by the ajax commands, try to refocus the
        // triggering element or one of its parents if that element does not exist
        // anymore.
        if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
            var target = false;

            for (var n = elementParents.length - 1; !target && n > 0; n--) {
                target = document.querySelector('[data-sofia-selector="' + elementParents[n].getAttribute('data-sofia-selector') + '"]');
            }

            if (target) {
                $(target).trigger('focus');
            }
        }

        // Reattach behaviors, if they were detached in beforeSerialize(). The
        // attachBehaviors() called on the new content from processing the response
        // commands is not sufficient, because behaviors from the entire form need
        // to be reattached.
        if (this.$form) {
            var settings = this.settings || SofiaSettings;
            Sofia.attachBehaviors(this.$form.get(0), settings);
        }

        // Remove any response-specific settings so they don't get used on the next
        // call by mistake.
        this.settings = null;
    };

    /**
     * Build an effect object to apply an effect when adding new HTML.
     *
     * @param {object} response
     *   Sofia Ajax response.
     * @param {string} [response.effect]
     *   Override the default value of {@link Sofia.Ajax#element_settings}.
     * @param {string|number} [response.speed]
     *   Override the default value of {@link Sofia.Ajax#element_settings}.
     *
     * @return {object}
     *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
     *   properties.
     */
    Sofia.Ajax.prototype.getEffect = function(response) {
        var type = response.effect || this.effect;
        var speed = response.speed || this.speed;

        var effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = type + 'Toggle';
            effect.hideEffect = type + 'Toggle';
            effect.showSpeed = speed;
        }

        return effect;
    };

    /**
     * Handler for the form redirection error.
     *
     * @param {object} xmlhttprequest
     *   Native XMLHttpRequest object.
     * @param {string} uri
     *   Ajax Request URI.
     * @param {string} [customMessage]
     *   Extra message to print with the Ajax error.
     */
    Sofia.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        // Remove the progress element.
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        // Undo hide.
        $(this.wrapper).show();
        // Re-enable the element.
        $(this.element).prop('disabled', false);
        // Reattach behaviors, if they were detached in beforeSerialize().
        if (this.$form) {
            var settings = this.settings || SofiaSettings;
            Sofia.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Sofia.AjaxError(xmlhttprequest, uri, customMessage);
    };

    /**
     * @typedef {object} Sofia.AjaxCommands~commandDefinition
     *
     * @prop {string} command
     * @prop {string} [method]
     * @prop {string} [selector]
     * @prop {string} [data]
     * @prop {object} [settings]
     * @prop {bool} [asterisk]
     * @prop {string} [text]
     * @prop {string} [title]
     * @prop {string} [url]
     * @prop {object} [argument]
     * @prop {string} [name]
     * @prop {string} [value]
     * @prop {string} [old]
     * @prop {string} [new]
     * @prop {bool} [merge]
     * @prop {Array} [args]
     *
     * @see Sofia.AjaxCommands
     */

    /**
     * Provide a series of commands that the client will perform.
     *
     * @constructor
     */
    Sofia.AjaxCommands = function() {};
    Sofia.AjaxCommands.prototype = {

        /**
         * Command to insert new content into the DOM.
         *
         * @param {Sofia.Ajax} ajax
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.data
         *   The data to use with the jQuery method.
         * @param {string} [response.method]
         *   The jQuery DOM manipulation method to be used.
         * @param {string} [response.selector]
         *   A optional jQuery selector string.
         * @param {object} [response.settings]
         *   An optional array of settings that will be used.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        insert: function(ajax, response, status) {
            // Get information from the response. If it is not there, default to
            // our presets.
            var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            var method = response.method || ajax.method;
            var effect = ajax.getEffect(response);
            var settings;

            // We don't know what response.data contains: it might be a string of text
            // without HTML, so don't rely on jQuery correctly interpreting
            // $(response.data) as new HTML rather than a CSS selector. Also, if
            // response.data contains top-level text nodes, they get lost with either
            // $(response.data) or $('<div></div>').replaceWith(response.data).
            var $new_content_wrapped = $('<div></div>').html(response.data);
            var $new_content = $new_content_wrapped.contents();

            // For legacy reasons, the effects processing code assumes that
            // $new_content consists of a single top-level element. Also, it has not
            // been sufficiently tested whether attachBehaviors() can be successfully
            // called with a context object that includes top-level text nodes.
            // However, to give developers full control of the HTML appearing in the
            // page, and to enable Ajax content to be inserted in places where <div>
            // elements are not allowed (e.g., within <table>, <tr>, and <span>
            // parents), we check if the new content satisfies the requirement
            // of a single top-level element, and only use the container <div> created
            // above when it doesn't. For more information, please see
            // https://www.Sofia.org/node/736066.
            if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
                $new_content = $new_content_wrapped;
            }

            // If removing content from the wrapper, detach behaviors first.
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    settings = response.settings || ajax.settings || SofiaSettings;
                    Sofia.detachBehaviors($wrapper.get(0), settings);
            }

            // Add the new content to the page.
            $wrapper[method]($new_content);

            // Immediately hide the new content if we're using any effects.
            if (effect.showEffect !== 'show') {
                $new_content.hide();
            }

            // Determine which effect to use and what content will receive the
            // effect, then show the new content.
            if ($new_content.find('.ajax-new-content').length > 0) {
                $new_content.find('.ajax-new-content').hide();
                $new_content.show();
                $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
            } else if (effect.showEffect !== 'show') {
                $new_content[effect.showEffect](effect.showSpeed);
            }

            // Attach all JavaScript behaviors to the new content, if it was
            // successfully added to the page, this if statement allows
            // `#ajax['wrapper']` to be optional.
            if ($new_content.parents('html').length > 0) {
                // Apply any settings from the returned JSON if available.
                settings = response.settings || ajax.settings || SofiaSettings;
                Sofia.attachBehaviors($new_content.get(0), settings);
            }
        },

        /**
         * Command to remove a chunk from the page.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {object} [response.settings]
         *   An optional array of settings that will be used.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        remove: function(ajax, response, status) {
            var settings = response.settings || ajax.settings || SofiaSettings;
            $(response.selector).each(function() {
                    Sofia.detachBehaviors(this, settings);
                })
                .remove();
        },

        /**
         * Command to mark a chunk changed.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The JSON response object from the Ajax request.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {bool} [response.asterisk]
         *   An optional CSS selector. If specified, an asterisk will be
         *   appended to the HTML inside the provided selector.
         * @param {number} [status]
         *   The request status.
         */
        changed: function(ajax, response, status) {
            var $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) {
                    $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Sofia.t('Changed') + '">*</abbr> ');
                }
            }
        },

        /**
         * Command to provide an alert.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The JSON response from the Ajax request.
         * @param {string} response.text
         *   The text that will be displayed in an alert dialog.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        alert: function(ajax, response, status) {
            window.alert(response.text, response.title);
        },

        /**
         * Command to set the window.location, redirecting the browser.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.url
         *   The URL to redirect to.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        redirect: function(ajax, response, status) {
            window.location = response.url;
        },

        /**
         * Command to provide the jQuery css() function.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {object} response.argument
         *   An array of key/value pairs to set in the CSS for the selector.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        css: function(ajax, response, status) {
            $(response.selector).css(response.argument);
        },

        /**
         * Command to set the settings used for other commands in this response.
         *
         * This method will also remove expired `SofiaSettings.ajax` settings.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {bool} response.merge
         *   Determines whether the additional settings should be merged to the
         *   global settings.
         * @param {object} response.settings
         *   Contains additional settings to add to the global settings.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        settings: function(ajax, response, status) {
            var ajaxSettings = SofiaSettings.ajax;

            // Clean up SofiaSettings.ajax.
            if (ajaxSettings) {
                Sofia.ajax.expired().forEach(function(instance) {
                    // If the Ajax object has been created through SofiaSettings.ajax
                    // it will have a selector. When there is no selector the object
                    // has been initialized with a special class name picked up by the
                    // Ajax behavior.

                    if (instance.selector) {
                        var selector = instance.selector.replace('#', '');
                        if (selector in ajaxSettings) {
                            delete ajaxSettings[selector];
                        }
                    }
                });
            }

            if (response.merge) {
                $.extend(true, SofiaSettings, response.settings);
            } else {
                ajax.settings = response.settings;
            }
        },

        /**
         * Command to attach data using jQuery's data API.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.name
         *   The name or key (in the key value pair) of the data attached to this
         *   selector.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {string|object} response.value
         *   The value of to be attached.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        data: function(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },

        /**
         * Command to apply a jQuery method.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {Array} response.args
         *   An array of arguments to the jQuery method, if any.
         * @param {string} response.method
         *   The jQuery method to invoke.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        invoke: function(ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, response.args);
        },

        /**
         * Command to restripe a table.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.selector
         *   A jQuery selector string.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        restripe: function(ajax, response, status) {
            // :even and :odd are reversed because jQuery counts from 0 and
            // we count from 1, so we're out of sync.
            // Match immediate children of the parent element to allow nesting.
            $(response.selector).find('> tbody > tr:visible, > tr:visible')
                .removeClass('odd even')
                .filter(':even').addClass('odd').end()
                .filter(':odd').addClass('even');
        },

        /**
         * Command to update a form's build ID.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.old
         *   The old form build ID.
         * @param {string} response.new
         *   The new form build ID.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        update_build_id: function(ajax, response, status) {
            $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
        },

        /**
         * Command to add css.
         *
         * Uses the proprietary addImport method if available as browsers which
         * support that method ignore @import statements in dynamically added
         * stylesheets.
         *
         * @param {Sofia.Ajax} [ajax]
         *   {@link Sofia.Ajax} object created by {@link Sofia.ajax}.
         * @param {object} response
         *   The response from the Ajax request.
         * @param {string} response.data
         *   A string that contains the styles to be added.
         * @param {number} [status]
         *   The XMLHttpRequest status.
         */
        add_css: function(ajax, response, status) {
            // Add the styles in the normal way.
            $('head').prepend(response.data);
            // Add imports in the styles using the addImport method if available.
            var match;
            var importMatch = /^@import url\("(.*)"\);$/igm;
            if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
                importMatch.lastIndex = 0;
                do {
                    match = importMatch.exec(response.data);
                    document.styleSheets[0].addImport(match[1]);
                } while (match);
            }
        }
    };

})(jQuery, window, Sofia, SofiaSettings);;
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    return function() {
        function h(e, t, n) {
            return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
        }

        function p(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }

        function d(t) {
            var n = t[0];
            return n.nodeType === 9 ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(n) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : n.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: n.pageY,
                    left: n.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.ui = e.ui || {};
        var t, n, r = Math.max,
            i = Math.abs,
            s = Math.round,
            o = /left|center|right/,
            u = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            f = /^\w+/,
            l = /%$/,
            c = e.fn.position;
        e.position = {
                scrollbarWidth: function() {
                    if (t !== undefined) return t;
                    var n, r, i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        s = i.children()[0];
                    return e("body").append(i), n = s.offsetWidth, i.css("overflow", "scroll"), r = s.offsetWidth, n === r && (r = i[0].clientWidth), i.remove(), t = n - r
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                        s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                    return {
                        width: s ? e.position.scrollbarWidth() : 0,
                        height: i ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                        r = e.isWindow(n[0]),
                        i = !!n[0] && n[0].nodeType === 9;
                    return {
                        element: n,
                        isWindow: r,
                        isDocument: i,
                        offset: n.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: r || i ? n.width() : n.outerWidth(),
                        height: r || i ? n.height() : n.outerHeight()
                    }
                }
            }, e.fn.position = function(t) {
                if (!t || !t.of) return c.apply(this, arguments);
                t = e.extend({}, t);
                var l, v, m, g, y, b, w = e(t.of),
                    E = e.position.getWithinInfo(t.within),
                    S = e.position.getScrollInfo(E),
                    x = (t.collision || "flip").split(" "),
                    T = {};
                return b = d(w), w[0].preventDefault && (t.at = "left top"), v = b.width, m = b.height, g = b.offset, y = e.extend({}, g), e.each(["my", "at"], function() {
                    var e = (t[this] || "").split(" "),
                        n, r;
                    e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), T[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
                }), x.length === 1 && (x[1] = x[0]), t.at[0] === "right" ? y.left += v : t.at[0] === "center" && (y.left += v / 2), t.at[1] === "bottom" ? y.top += m : t.at[1] === "center" && (y.top += m / 2), l = h(T.at, v, m), y.left += l[0], y.top += l[1], this.each(function() {
                    var o, u, a = e(this),
                        f = a.outerWidth(),
                        c = a.outerHeight(),
                        d = p(this, "marginLeft"),
                        b = p(this, "marginTop"),
                        N = f + d + p(this, "marginRight") + S.width,
                        C = c + b + p(this, "marginBottom") + S.height,
                        k = e.extend({}, y),
                        L = h(T.my, a.outerWidth(), a.outerHeight());
                    t.my[0] === "right" ? k.left -= f : t.my[0] === "center" && (k.left -= f / 2), t.my[1] === "bottom" ? k.top -= c : t.my[1] === "center" && (k.top -= c / 2), k.left += L[0], k.top += L[1], n || (k.left = s(k.left), k.top = s(k.top)), o = {
                        marginLeft: d,
                        marginTop: b
                    }, e.each(["left", "top"], function(n, r) {
                        e.ui.position[x[n]] && e.ui.position[x[n]][r](k, {
                            targetWidth: v,
                            targetHeight: m,
                            elemWidth: f,
                            elemHeight: c,
                            collisionPosition: o,
                            collisionWidth: N,
                            collisionHeight: C,
                            offset: [l[0] + L[0], l[1] + L[1]],
                            my: t.my,
                            at: t.at,
                            within: E,
                            elem: a
                        })
                    }), t.using && (u = function(e) {
                        var n = g.left - k.left,
                            s = n + v - f,
                            o = g.top - k.top,
                            u = o + m - c,
                            l = {
                                target: {
                                    element: w,
                                    left: g.left,
                                    top: g.top,
                                    width: v,
                                    height: m
                                },
                                element: {
                                    element: a,
                                    left: k.left,
                                    top: k.top,
                                    width: f,
                                    height: c
                                },
                                horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                                vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                            };
                        v < f && i(n + s) < v && (l.horizontal = "center"), m < c && i(o + u) < m && (l.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? l.important = "horizontal" : l.important = "vertical", t.using.call(this, e, l)
                    }), a.offset(e.extend(k, {
                        using: u
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n = t.within,
                            i = n.isWindow ? n.scrollLeft : n.offset.left,
                            s = n.width,
                            o = e.left - t.collisionPosition.marginLeft,
                            u = i - o,
                            a = o + t.collisionWidth - s - i,
                            f;
                        t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                    },
                    top: function(e, t) {
                        var n = t.within,
                            i = n.isWindow ? n.scrollTop : n.offset.top,
                            s = t.within.height,
                            o = e.top - t.collisionPosition.marginTop,
                            u = i - o,
                            a = o + t.collisionHeight - s - i,
                            f;
                        t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n = t.within,
                            r = n.offset.left + n.scrollLeft,
                            s = n.width,
                            o = n.isWindow ? n.scrollLeft : n.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            a = u - o,
                            f = u + t.collisionWidth - s - o,
                            l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                            c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                            h = -2 * t.offset[0],
                            p, d;
                        if (a < 0) {
                            p = e.left + l + c + h + t.collisionWidth - s - r;
                            if (p < 0 || p < i(a)) e.left += l + c + h
                        } else if (f > 0) {
                            d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                            if (d > 0 || i(d) < f) e.left += l + c + h
                        }
                    },
                    top: function(e, t) {
                        var n = t.within,
                            r = n.offset.top + n.scrollTop,
                            s = n.height,
                            o = n.isWindow ? n.scrollTop : n.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            a = u - o,
                            f = u + t.collisionHeight - s - o,
                            l = t.my[1] === "top",
                            c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                            h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                            p = -2 * t.offset[1],
                            d, v;
                        if (a < 0) {
                            v = e.top + c + h + p + t.collisionHeight - s - r;
                            if (v < 0 || v < i(a)) e.top += c + h + p
                        } else if (f > 0) {
                            d = e.top - t.collisionPosition.marginTop + c + h + p - o;
                            if (d > 0 || i(d) < f) e.top += c + h + p
                        }
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, r, i, s, o, u = document.getElementsByTagName("body")[0],
                    a = document.createElement("div");
                t = document.createElement(u ? "div" : "body"), i = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, u && e.extend(i, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (o in i) t.style[o] = i[o];
                t.appendChild(a), r = u || document.documentElement, r.insertBefore(t, r.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = e(a).offset().left, n = s > 10 && s < 11, t.innerHTML = "", r.removeChild(t)
            }()
    }(), e.ui.position
});;
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery", "./core", "./widget", "./position"], e) : e(jQuery)
})(function(e) {
    return e.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var n = e(t.target);
                    !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (this.previousFilter) return;
                    var n = e(t.currentTarget);
                    n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, n)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            var n, r, i, s, o = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, n = this._filterMenuItems(i), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), n = this._filterMenuItems(i)), n.length ? (this.focus(t, n), this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, n, r = this,
                i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this),
                    n = t.parent(),
                    r = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(r), t.attr("aria-labelledby", n.attr("id"))
            }), t = s.add(this.element), n = t.find(this.options.items), n.not(".ui-menu-item").each(function() {
                var t = e(this);
                r._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            e === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), e === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        focus: function(e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.outerHeight(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay)
        },
        _open: function(t) {
            var n = e.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active) r = this.activeMenu.find(this.options.items)[t]();
            this.focus(n, r)
        },
        nextPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r - i < 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())
        },
        previousPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r + i > 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
        },
        _filterMenuItems: function(t) {
            var n = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                r = new RegExp("^" + n, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return r.test(e.trim(e(this).text()))
            })
        }
    })
});;
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], e) : e(jQuery)
})(function(e) {
    return e.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, n, r, i = this.element[0].nodeName.toLowerCase(),
                s = i === "textarea",
                o = i === "input";
            this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        t = !0, r = !0, n = !0;
                        return
                    }
                    t = !1, r = !1, n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                        case s.PAGE_UP:
                            t = !0, this._move("previousPage", i);
                            break;
                        case s.PAGE_DOWN:
                            t = !0, this._move("nextPage", i);
                            break;
                        case s.UP:
                            t = !0, this._keyEvent("previous", i);
                            break;
                        case s.DOWN:
                            t = !0, this._keyEvent("next", i);
                            break;
                        case s.ENTER:
                            this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                            break;
                        case s.TAB:
                            this.menu.active && this.menu.select(i);
                            break;
                        case s.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(i), i.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(i)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                        return
                    }
                    if (n) return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                        case i.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case i.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case i.UP:
                            this._keyEvent("previous", r);
                            break;
                        case i.DOWN:
                            this._keyEvent("next", r)
                    }
                },
                input: function(e) {
                    if (r) {
                        r = !1, e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function(t, n) {
                    var r, i;
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    i = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: i
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value), r = n.item.attr("aria-label") || i.value, r && e.trim(r).length && (this.liveRegion.children().hide(), e("<div>").text(r).appendTo(this.liveRegion))
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this._appendTo()), e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0));
            if (!t || !t[0]) t = this.element.closest(".ui-front");
            return t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
                r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var t = this.term === this._value(),
                    n = this.menu.element.is(":visible"),
                    r = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                if (!t || t && !n && !r) this.selectedItem = null, this.search(null, e)
            }, this.options.delay)
        },
        search: function(e, t) {
            e = e != null ? e : this._value(), this.term = this._value();
            if (e.length < this.options.minLength) return this.close(t);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty();
            this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, n) {
            return e("<li>").text(n.label).appendTo(t)
        },
        _move: function(e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this.isMultiLine || this._value(this.term), this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var n;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            t && t.length ? n = this.options.messages.results(t.length) : n = this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion)
        }
    }), e.ui.autocomplete
});;
(function($, Sofia, SofiaSettings) {
    "use strict";
    var autocomplete

    function escapeRegExp(str) {
        str = $.trim(str);
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }

    function autocompleteSplitValues(value) {
        var result = [],
            quote = false,
            current = '',
            valueLength = value.length,
            i, character;
        for (i = 0; i < valueLength; i++) {
            character = value.charAt(i);
            if (character === '"') {
                current += character;
                quote = !quote
            } else if (character === ',' && !quote) {
                result.push(current.trim());
                current = ''
            } else current += character
        };
        if (value.length > 0) result.push($.trim(current));
        return result
    }

    function extractLastTerm(terms) {
        return autocomplete.splitValues(terms).pop()
    }

    function searchHandler(event) {
        var options = autocomplete.options,
            term = autocomplete.extractLastTerm(event.target.value);
        if (term.length > 0 && options.firstCharacterBlacklist.indexOf(term[0]) !== -1) return false;
        return term.length >= options.minLength
    }

    function sourceData(request, response) {
        var elementId = this.element.attr('id');
        if (!(elementId in autocomplete.cache)) autocomplete.cache[elementId] = {};
        var key = this.element.data("key")

        function showSuggestions(suggestions) {
            var tagged = autocomplete.splitValues(request.term);
            for (var i = 0, il = tagged.length; i < il; i++) {
                var index = suggestions.indexOf(tagged[i]);
                if (index >= 0) suggestions.splice(index, 1)
            };
            response(suggestions)
        }

        function sourceCallbackHandler(data) {
            autocomplete.cache[elementId][term] = data;
            if (key) data.slice(0, autocomplete.options.forms[key].maxSuggestions);
            if (key)
                if (data.length) {
                    var moreResults = replaceInObject(autocomplete.options.forms[key].moreResults, '\\[search-phrase\\]', request.term);
                    data.push(moreResults)
                } else {
                    var noResult = replaceInObject(autocomplete.options.forms[key].noResult, '\\[search-phrase\\]', request.term);
                    data.push(noResult)
                };
            showSuggestions(data)
        };
        var term = autocomplete.extractLastTerm(request.term);
        if (autocomplete.cache[elementId].hasOwnProperty(term)) {
            showSuggestions(autocomplete.cache[elementId][term])
        } else {
            var data = {},
                path = '';
            if (key && autocomplete.options.forms[key]) {
                path = autocomplete.options.forms[key].source;
                $.each(autocomplete.options.forms[key].filters, function(key, value) {
                    data[value] = term
                })
            } else {
                path = this.element.attr('data-autocomplete-path');
                data.q = term
            };
            var options = $.extend({
                success: sourceCallbackHandler,
                data: data
            }, autocomplete.ajax);
            $.ajax(path, options)
        }
    }

    function focusHandler() {
        return false
    }

    function selectHandler(event, ui) {
        var terms = autocomplete.splitValues(event.target.value);
        terms.pop();
        if (ui.item.value.search(",") > 0) {
            terms.push('"' + ui.item.value + '"')
        } else terms.push(ui.item.value);
        event.target.value = terms.join(', ');
        var key = $(event.target).data('key');
        if (key && autocomplete.options.forms[key].autoRedirect == 1 && ui.item.link) {
            document.location.href = ui.item.link
        } else if (key && autocomplete.options.forms[key].autoSubmit == 1 && ui.item.value) {
            $(this).val(ui.item.value);
            $(this).closest("form").submit()
        };
        return false
    }

    function renderItem(ul, item) {
        var term = this.term,
            first = ("group" in item) ? 'first' : '',
            innerHTML = '<div class="ui-autocomplete-fields ' + first + '">',
            regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
        if (item.fields) {
            $.each(item.fields, function(key, value) {
                var output = value;
                if (value.indexOf('src=') == -1 && value.indexOf('href=') == -1) output = value.replace(regex, "<span class='ui-autocomplete-field-term'>$1</span>");
                innerHTML += ('<div class="ui-autocomplete-field-' + key + '">' + output + '</div>')
            })
        } else {
            var output = item.label;
            if (item.group && item.group.group_id != 'more_results' && item.group.group_id != 'no_results') output = item.label.replace(regex, "<span class='ui-autocomplete-field-term'>$1</span>");
            innerHTML += ('<div class="ui-autocomplete-field">' + output + '</div>')
        };
        innerHTML += '</div>';
        if ("group" in item) {
            var groupId = typeof(item.group.group_id) !== 'undefined' ? item.group.group_id : '',
                groupName = typeof(item.group.group_name) !== 'undefined' ? item.group.group_name : '';
            $('<div class="ui-autocomplete-field-group ui-state-disabled ' + groupId + '">' + groupName + '</div>').appendTo(ul)
        };
        var elem = $("<li class=ui-menu-item-" + first + "></li>").append("<a>" + innerHTML + "</a>");
        if (item.value == '') elem = $("<li class='ui-state-disabled ui-menu-item-" + first + " ui-menu-item'>" + item.label + "</li>");
        elem.data("item.autocomplete", item).appendTo(ul);
        return elem
    }

    function resizeMenu() {
        var ul = this.menu.element;
        ul.outerWidth(Math.max(ul.width("").outerWidth() + 5, this.options.position.of == null ? this.element.outerWidth() : this.options.position.of.outerWidth()))
    }

    function replaceInObject(stash, needle, replacement) {
        var regex = new RegExp(needle, "g"),
            input = Sofia.checkPlain(replacement),
            result = [];
        $.each(stash, function(index, value) {
            if ($.type(value) === "string") {
                result[index] = value.replace(regex, input)
            } else result[index] = value
        });
        return result
    };
    Sofia.behaviors.autocomplete = {
        attach: function(context) {
            var $autocomplete = $(context).find('input.form-autocomplete');
            $.each(autocomplete.options.forms, function(key, value) {
                var elem = $(context).find(autocomplete.options.forms[key].selector).data("key", key).attr("class", "form-autocomplete").attr('data-id', key);
                $autocomplete = $.merge($autocomplete, elem)
            });
            $.each($autocomplete, function(key, value) {
                value = $(value);
                value.once('autocomplete');
                if (value.length) {
                    var blacklist = value.attr('data-autocomplete-first-character-blacklist');
                    $.extend(autocomplete.options, {
                        firstCharacterBlacklist: blacklist ? blacklist : ''
                    });
                    value.autocomplete(autocomplete.options).data("ui-autocomplete")._renderItem = autocomplete.options.renderItem;
                    if (value.data("key")) value.autocomplete("widget").attr("data-sa-theme", autocomplete.options.forms[value.data("key")].theme)
                }
            })
        },
        detach: function(context, settings, trigger) {
            if (trigger === 'unload') $(context).find('input.form-autocomplete').removeOnce('autocomplete').autocomplete('destroy')
        }
    };
    autocomplete = {
        cache: {},
        splitValues: autocompleteSplitValues,
        extractLastTerm: extractLastTerm,
        options: {
            source: sourceData,
            focus: focusHandler,
            search: searchHandler,
            select: selectHandler,
            renderItem: renderItem,
            resizeMenu: resizeMenu,
            minLength: 1,
            firstCharacterBlacklist: '',
            forms: SofiaSettings.search_autocomplete ? SofiaSettings.search_autocomplete : []
        },
        ajax: {
            dataType: 'json'
        }
    };
    Sofia.autocomplete = autocomplete
})(jQuery, Sofia, SofiaSettings);