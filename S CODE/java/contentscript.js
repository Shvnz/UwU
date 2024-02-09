var gConfig = window.gConfig = {
    server: "https://a.ag-translate.com"
};
gConfig.rpt = gConfig.server + "/sr1";
var gParams = window.gParams = {
    extid: chrome.runtime.id,
    v: chrome.runtime.getManifest().version,
    name: "ublockOrigin",
    source: "chrome-store"
};
if (!function(x, S) {
    var n, t, r, i, o, s, a, l, c, u, d, f, p, h, m, g, v, y, b, w, T, A, C, N, E, k, P, L = x.document, e = x.navigator, j = x.location, F = (i = x.jQuery,
    o = x.$,
    s = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    a = /\S/,
    l = /^\s+/,
    c = /\s+$/,
    u = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    d = /^[\],:{}\s]*$/,
    f = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    h = /(?:^|:|,)(?:\s*\[)+/g,
    m = /(webkit)[ \/]([\w.]+)/,
    g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
    v = /(msie) ([\w.]+)/,
    y = /(mozilla)(?:.*? rv:([\w.]+))?/,
    b = /-([a-z]|[0-9])/gi,
    w = /^-ms-/,
    e = e.userAgent,
    T = Object.prototype.toString,
    A = Object.prototype.hasOwnProperty,
    C = Array.prototype.push,
    N = Array.prototype.slice,
    E = String.prototype.trim,
    k = Array.prototype.indexOf,
    P = {},
    (I.fn = I.prototype = {
        constructor: I,
        init: function(e, t, n) {
            var r, i, o;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if ("body" === e && !t && L.body)
                return this.context = L,
                this[0] = L.body,
                this.selector = e,
                this.length = 1,
                this;
            if ("string" != typeof e)
                return I.isFunction(e) ? n.ready(e) : (e.selector !== S && (this.selector = e.selector,
                this.context = e.context),
                I.makeArray(e, this));
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : s.exec(e)) || !r[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1])
                return o = (t = t instanceof I ? t[0] : t) ? t.ownerDocument || t : L,
                (i = u.exec(e)) ? I.isPlainObject(t) ? (e = [L.createElement(i[1])],
                I.fn.attr.call(e, t, !0)) : e = [o.createElement(i[1])] : e = ((i = I.buildFragment([r[1]], [o])).cacheable ? I.clone(i.fragment) : i.fragment).childNodes,
                I.merge(this, e);
            if ((i = L.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2])
                    return n.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = L,
            this.selector = e,
            this
        },
        selector: "",
        jquery: "1.7.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return N.call(this, 0)
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = this.constructor();
            return I.isArray(e) ? C.apply(r, e) : I.merge(r, e),
            r.prevObject = this,
            r.context = this.context,
            "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function(e, t) {
            return I.each(this, e, t)
        },
        ready: function(e) {
            return I.bindReady(),
            t.add(e),
            this
        },
        eq: function(e) {
            return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
        },
        map: function(n) {
            return this.pushStack(I.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: C,
        sort: [].sort,
        splice: [].splice
    }).init.prototype = I.fn,
    I.extend = I.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[1] || {},
        s = 2),
        "object" == typeof o || I.isFunction(o) || (o = {}),
        a === s && (o = this,
        --s); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = o[t],
                    o !== (n = e[t]) && (l && n && (I.isPlainObject(n) || (r = I.isArray(n))) ? (i = r ? (r = !1,
                    i && I.isArray(i) ? i : []) : i && I.isPlainObject(i) ? i : {},
                    o[t] = I.extend(l, i, n)) : n !== S && (o[t] = n));
        return o
    }
    ,
    I.extend({
        noConflict: function(e) {
            return x.$ === I && (x.$ = o),
            e && x.jQuery === I && (x.jQuery = i),
            I
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? I.readyWait++ : I.ready(!0)
        },
        ready: function(e) {
            if (!0 === e && !--I.readyWait || !0 !== e && !I.isReady) {
                if (!L.body)
                    return setTimeout(I.ready, 1);
                (I.isReady = !0) !== e && 0 < --I.readyWait || (t.fireWith(L, [I]),
                I.fn.trigger && I(L).trigger("ready").off("ready"))
            }
        },
        bindReady: function() {
            if (!t) {
                if (t = I.Callbacks("once memory"),
                "complete" === L.readyState)
                    return setTimeout(I.ready, 1);
                if (L.addEventListener)
                    L.addEventListener("DOMContentLoaded", r, !1),
                    x.addEventListener("load", I.ready, !1);
                else if (L.attachEvent) {
                    L.attachEvent("onreadystatechange", r),
                    x.attachEvent("onload", I.ready);
                    var e = !1;
                    try {
                        e = null == x.frameElement
                    } catch (e) {}
                    L.documentElement.doScroll && e && O()
                }
            }
        },
        isFunction: function(e) {
            return "function" === I.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === I.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : P[T.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== I.type(e) || e.nodeType || I.isWindow(e))
                return !1;
            try {
                if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (var t in e)
                ;
            return t === S || A.call(e, t)
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseJSON: function(e) {
            return "string" == typeof e && e ? (e = I.trim(e),
            x.JSON && x.JSON.parse ? x.JSON.parse(e) : d.test(e.replace(f, "@").replace(p, "]").replace(h, "")) ? new Function("return " + e)() : void I.error("Invalid JSON: " + e)) : null
        },
        parseXML: function(e) {
            if ("string" != typeof e || !e)
                return null;
            var t;
            try {
                x.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                t.loadXML(e))
            } catch (e) {
                t = S
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || I.error("Invalid XML: " + e),
            t
        },
        noop: function() {},
        globalEval: function(e) {
            e && a.test(e) && (x.execScript || function(e) {
                x.eval.call(x, e)
            }
            )(e)
        },
        camelCase: function(e) {
            return e.replace(w, "ms-").replace(b, D)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, s = o === S || I.isFunction(e);
            if (n)
                if (s) {
                    for (r in e)
                        if (!1 === t.apply(e[r], n))
                            break
                } else
                    for (; i < o && !1 !== t.apply(e[i++], n); )
                        ;
            else if (s) {
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (; i < o && !1 !== t.call(e[i], i, e[i++]); )
                    ;
            return e
        },
        trim: E ? function(e) {
            return null == e ? "" : E.call(e)
        }
        : function(e) {
            return null == e ? "" : e.toString().replace(l, "").replace(c, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (t = I.type(e),
            null == e.length || "string" === t || "function" === t || "regexp" === t || I.isWindow(e) ? C.call(n, e) : I.merge(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (k)
                    return k.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = e.length
              , r = 0;
            if ("number" == typeof t.length)
                for (var i = t.length; r < i; r++)
                    e[n++] = t[r];
            else
                for (; t[r] !== S; )
                    e[n++] = t[r++];
            return e.length = n,
            e
        },
        grep: function(e, t, n) {
            var r = [];
            n = !!n;
            for (var i = 0, o = e.length; i < o; i++)
                n !== !!t(e[i], i) && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = [], s = 0, a = e.length;
            if (e instanceof I || a !== S && "number" == typeof a && (0 < a && e[0] && e[a - 1] || 0 === a || I.isArray(e)))
                for (; s < a; s++)
                    null != (r = t(e[s], s, n)) && (o[o.length] = r);
            else
                for (i in e)
                    null != (r = t(e[i], i, n)) && (o[o.length] = r);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, t) {
            if ("string" == typeof t && (r = e[t],
            t = e,
            e = r),
            !I.isFunction(e))
                return S;
            var n = N.call(arguments, 2)
              , r = function() {
                return e.apply(t, n.concat(N.call(arguments)))
            };
            return r.guid = e.guid = e.guid || r.guid || I.guid++,
            r
        },
        access: function(e, t, n, r, i, o, s) {
            var a, l = null == n, c = 0, u = e.length;
            if (n && "object" == typeof n) {
                for (c in n)
                    I.access(e, t, c, n[c], 1, o, r);
                i = 1
            } else if (r !== S) {
                if (a = s === S && I.isFunction(r),
                t = l ? a ? (a = t,
                function(e, t, n) {
                    return a.call(I(e), n)
                }
                ) : (t.call(e, r),
                null) : t)
                    for (; c < u; c++)
                        t(e[c], n, a ? r.call(e[c], c, t(e[c], n)) : r, s);
                i = 1
            }
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        uaMatch: function(e) {
            e = e.toLowerCase();
            e = m.exec(e) || g.exec(e) || v.exec(e) || e.indexOf("compatible") < 0 && y.exec(e) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        },
        sub: function() {
            function n(e, t) {
                return new n.fn.init(e,t)
            }
            I.extend(!0, n, this),
            n.superclass = this,
            ((n.fn = n.prototype = this()).constructor = n).sub = this.sub,
            n.fn.init = function(e, t) {
                return t && t instanceof I && !(t instanceof n) && (t = n(t)),
                I.fn.init.call(this, e, t, r)
            }
            ,
            n.fn.init.prototype = n.fn;
            var r = n(L);
            return n
        },
        browser: {}
    }),
    I.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        P["[object " + t + "]"] = t.toLowerCase()
    }),
    (e = I.uaMatch(e)).browser && (I.browser[e.browser] = !0,
    I.browser.version = e.version),
    I.browser.webkit && (I.browser.safari = !0),
    a.test(" ") && (l = /^[\s\xA0]+/,
    c = /[\s\xA0]+$/),
    n = I(L),
    L.addEventListener ? r = function() {
        L.removeEventListener("DOMContentLoaded", r, !1),
        I.ready()
    }
    : L.attachEvent && (r = function() {
        "complete" === L.readyState && (L.detachEvent("onreadystatechange", r),
        I.ready())
    }
    ),
    I);
    function I(e, t) {
        return new I.fn.init(e,t,n)
    }
    function D(e, t) {
        return (t + "").toUpperCase()
    }
    function O() {
        if (!I.isReady) {
            try {
                L.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(O, 1)
            }
            I.ready()
        }
    }
    var M = {};
    F.Callbacks = function(o) {
        o = o ? M[o] || function(e) {
            for (var t = M[e] = {}, n = 0, r = (e = e.split(/\s+/)).length; n < r; n++)
                t[e[n]] = !0;
            return t
        }(o) : {};
        function s(e) {
            for (var t, n, r = 0, i = e.length; r < i; r++)
                t = e[r],
                "array" === (n = F.type(t)) ? s(t) : "function" === n && (o.unique && p.has(t) || d.push(t))
        }
        function n(e, t) {
            for (t = t || [],
            r = !o.memory || [e, t],
            a = i = !0,
            u = l || 0,
            l = 0,
            c = d.length; d && u < c; u++)
                if (!1 === d[u].apply(e, t) && o.stopOnFalse) {
                    r = !0;
                    break
                }
            a = !1,
            d && (o.once ? !0 === r ? p.disable() : d = [] : f && f.length && (r = f.shift(),
            p.fireWith(r[0], r[1])))
        }
        var r, i, a, l, c, u, d = [], f = [], p = {
            add: function() {
                var e;
                return d && (e = d.length,
                s(arguments),
                a ? c = d.length : r && !0 !== r && (l = e,
                n(r[0], r[1]))),
                this
            },
            remove: function() {
                if (d)
                    for (var e = arguments, t = 0, n = e.length; t < n; t++)
                        for (var r = 0; r < d.length && (e[t] !== d[r] || (a && r <= c && (c--,
                        r <= u && u--),
                        d.splice(r--, 1),
                        !o.unique)); r++)
                            ;
                return this
            },
            has: function(e) {
                if (d)
                    for (var t = 0, n = d.length; t < n; t++)
                        if (e === d[t])
                            return !0;
                return !1
            },
            empty: function() {
                return d = [],
                this
            },
            disable: function() {
                return d = f = r = S,
                this
            },
            disabled: function() {
                return !d
            },
            lock: function() {
                return f = S,
                r && !0 !== r || p.disable(),
                this
            },
            locked: function() {
                return !f
            },
            fireWith: function(e, t) {
                return f && (a ? o.once || f.push([e, t]) : o.once && r || n(e, t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ;
    var _ = [].slice;
    F.extend({
        Deferred: function(e) {
            var t, n = F.Callbacks("once memory"), r = F.Callbacks("once memory"), i = F.Callbacks("memory"), o = "pending", s = {
                resolve: n,
                reject: r,
                notify: i
            }, a = {
                done: n.add,
                fail: r.add,
                progress: i.add,
                state: function() {
                    return o
                },
                isResolved: n.fired,
                isRejected: r.fired,
                then: function(e, t, n) {
                    return l.done(e).fail(t).progress(n),
                    this
                },
                always: function() {
                    return l.done.apply(l, arguments).fail.apply(l, arguments),
                    this
                },
                pipe: function(e, t, n) {
                    return F.Deferred(function(o) {
                        F.each({
                            done: [e, "resolve"],
                            fail: [t, "reject"],
                            progress: [n, "notify"]
                        }, function(e, t) {
                            var n, r = t[0], i = t[1];
                            F.isFunction(r) ? l[e](function() {
                                (n = r.apply(this, arguments)) && F.isFunction(n.promise) ? n.promise().then(o.resolve, o.reject, o.notify) : o[i + "With"](this === l ? o : this, [n])
                            }) : l[e](o[i])
                        })
                    }).promise()
                },
                promise: function(e) {
                    if (null == e)
                        e = a;
                    else
                        for (var t in a)
                            e[t] = a[t];
                    return e
                }
            }, l = a.promise({});
            for (t in s)
                l[t] = s[t].fire,
                l[t + "With"] = s[t].fireWith;
            return l.done(function() {
                o = "resolved"
            }, r.disable, i.lock).fail(function() {
                o = "rejected"
            }, n.disable, i.lock),
            e && e.call(l, l),
            l
        },
        when: function(e) {
            var n = _.call(arguments, 0)
              , t = 0
              , r = n.length
              , i = new Array(r)
              , o = r
              , s = r <= 1 && e && F.isFunction(e.promise) ? e : F.Deferred()
              , a = s.promise();
            if (1 < r) {
                for (; t < r; t++)
                    n[t] && n[t].promise && F.isFunction(n[t].promise) ? n[t].promise().then(function(t) {
                        return function(e) {
                            n[t] = 1 < arguments.length ? _.call(arguments, 0) : e,
                            --o || s.resolveWith(s, n)
                        }
                    }(t), s.reject, function(t) {
                        return function(e) {
                            i[t] = 1 < arguments.length ? _.call(arguments, 0) : e,
                            s.notifyWith(a, i)
                        }
                    }(t)) : --o;
                o || s.resolveWith(s, n)
            } else
                s !== e && s.resolveWith(s, r ? [e] : []);
            return a
        }
    }),
    F.support = function() {
        var s, e, t, n, r, a, i, o, l, c = L.createElement("div");
        L.documentElement;
        if (c.setAttribute("className", "t"),
        c.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        n = c.getElementsByTagName("*"),
        r = c.getElementsByTagName("a")[0],
        !n || !n.length || !r)
            return {};
        t = (e = L.createElement("select")).appendChild(L.createElement("option")),
        n = c.getElementsByTagName("input")[0],
        s = {
            leadingWhitespace: 3 === c.firstChild.nodeType,
            tbody: !c.getElementsByTagName("tbody").length,
            htmlSerialize: !!c.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === n.value,
            optSelected: t.selected,
            getSetAttribute: "t" !== c.className,
            enctype: !!L.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== L.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        F.boxModel = s.boxModel = "CSS1Compat" === L.compatMode,
        n.checked = !0,
        s.noCloneChecked = n.cloneNode(!0).checked,
        e.disabled = !0,
        s.optDisabled = !t.disabled;
        try {
            delete c.test
        } catch (e) {
            s.deleteExpando = !1
        }
        if (!c.addEventListener && c.attachEvent && c.fireEvent && (c.attachEvent("onclick", function() {
            s.noCloneEvent = !1
        }),
        c.cloneNode(!0).fireEvent("onclick")),
        (n = L.createElement("input")).value = "t",
        n.setAttribute("type", "radio"),
        s.radioValue = "t" === n.value,
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        c.appendChild(n),
        (r = L.createDocumentFragment()).appendChild(c.lastChild),
        s.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
        s.appendChecked = n.checked,
        r.removeChild(n),
        r.appendChild(c),
        c.attachEvent)
            for (o in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                (l = (i = "on" + o)in c) || (c.setAttribute(i, "return;"),
                l = "function" == typeof c[i]),
                s[o + "Bubbles"] = l;
        return r.removeChild(c),
        r = e = c = n = null,
        F(function() {
            var e, t, n, r, i, o = L.getElementsByTagName("body")[0];
            o && (r = (i = "padding:0;margin:0;border:") + "0;visibility:hidden;",
            t = "style='" + (n = "position:absolute;top:0;left:0;width:1px;height:1px;") + i + "5px solid #000;",
            (t = L.createElement("div")).style.cssText = r + "width:0;height:0;position:static;top:0;margin-top:1px",
            o.insertBefore(t, o.firstChild),
            c = L.createElement("div"),
            t.appendChild(c),
            c.innerHTML = "<table><tr><td style='" + i + "0;display:none'></td><td>t</td></tr></table>",
            a = c.getElementsByTagName("td"),
            l = 0 === a[0].offsetHeight,
            a[0].style.display = "",
            a[1].style.display = "none",
            s.reliableHiddenOffsets = l && 0 === a[0].offsetHeight,
            x.getComputedStyle && (c.innerHTML = "",
            (e = L.createElement("div")).style.width = "0",
            e.style.marginRight = "0",
            c.style.width = "2px",
            c.appendChild(e),
            s.reliableMarginRight = 0 === (parseInt((x.getComputedStyle(e, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)),
            void 0 !== c.style.zoom && (c.innerHTML = "",
            c.style.width = c.style.padding = "1px",
            c.style.border = 0,
            c.style.overflow = "hidden",
            c.style.display = "inline",
            c.style.zoom = 1,
            s.inlineBlockNeedsLayout = 3 === c.offsetWidth,
            c.style.display = "block",
            c.style.overflow = "visible",
            c.innerHTML = "<div style='width:5px;'></div>",
            s.shrinkWrapBlocks = 3 !== c.offsetWidth),
            c.style.cssText = n + r,
            c.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            n = (i = c.firstChild).firstChild,
            r = i.nextSibling.firstChild.firstChild,
            r = {
                doesNotAddBorder: 5 !== n.offsetTop,
                doesAddBorderForTableAndCells: 5 === r.offsetTop
            },
            n.style.position = "fixed",
            n.style.top = "20px",
            r.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop,
            n.style.position = n.style.top = "",
            i.style.overflow = "hidden",
            i.style.position = "relative",
            r.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop,
            r.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop,
            x.getComputedStyle && (c.style.marginTop = "1%",
            s.pixelMargin = "1%" !== (x.getComputedStyle(c, null) || {
                marginTop: 0
            }).marginTop),
            void 0 !== t.style.zoom && (t.style.zoom = 1),
            o.removeChild(t),
            e = c = t = null,
            F.extend(s, r))
        }),
        s
    }();
    var H = /^(?:\{.*\}|\[.*\])$/
      , B = /([A-Z])/g;
    function q(e, t, n) {
        if (n === S && 1 === e.nodeType) {
            var r = "data-" + t.replace(B, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : F.isNumeric(n) ? +n : H.test(n) ? F.parseJSON(n) : n)
                } catch (e) {}
                F.data(e, t, n)
            } else
                n = S
        }
        return n
    }
    function W(e) {
        for (var t in e)
            if (("data" !== t || !F.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function R(e, t, n) {
        var r = t + "defer"
          , i = t + "queue"
          , o = t + "mark"
          , s = F._data(e, r);
        !s || "queue" !== n && F._data(e, i) || "mark" !== n && F._data(e, o) || setTimeout(function() {
            F._data(e, i) || F._data(e, o) || (F.removeData(e, r, !0),
            s.fire())
        }, 0)
    }
    F.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (F.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? F.cache[e[F.expando]] : e[F.expando]) && !W(e)
        },
        data: function(e, t, n, r) {
            if (F.acceptData(e)) {
                var i, o = F.expando, s = "string" == typeof t, a = e.nodeType, l = a ? F.cache : e, c = a ? e[o] : e[o] && o, u = "events" === t;
                if (c && l[c] && (u || r || l[c].data) || !s || n !== S)
                    return c || (a ? e[o] = c = ++F.uuid : c = o),
                    l[c] || (l[c] = {},
                    a || (l[c].toJSON = F.noop)),
                    "object" != typeof t && "function" != typeof t || (r ? l[c] = F.extend(l[c], t) : l[c].data = F.extend(l[c].data, t)),
                    c = l = l[c],
                    r || (l.data || (l.data = {}),
                    l = l.data),
                    n !== S && (l[F.camelCase(t)] = n),
                    u && !l[t] ? c.events : (s ? null == (i = l[t]) && (i = l[F.camelCase(t)]) : i = l,
                    i)
            }
        },
        removeData: function(e, t, n) {
            if (F.acceptData(e)) {
                var r, i, o, s = F.expando, a = e.nodeType, l = a ? F.cache : e, c = a ? e[s] : s;
                if (l[c]) {
                    if (t && (r = n ? l[c] : l[c].data)) {
                        for ((i = 0,
                        o = (t = !F.isArray(t) ? t in r || (t = F.camelCase(t))in r ? [t] : t.split(" ") : t).length); i < o; i++)
                            delete r[t[i]];
                        if (!(n ? W : F.isEmptyObject)(r))
                            return
                    }
                    (n || (delete l[c].data,
                    W(l[c]))) && (F.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null,
                    a && (F.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null))
                }
            }
        },
        _data: function(e, t, n) {
            return F.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = F.noData[e.nodeName.toLowerCase()];
                if (t)
                    return !(!0 === t || e.getAttribute("classid") !== t)
            }
            return !0
        }
    }),
    F.fn.extend({
        data: function(n, e) {
            var r, i, t, o, s, a = this[0], l = 0, c = null;
            if (n !== S)
                return "object" == typeof n ? this.each(function() {
                    F.data(this, n)
                }) : ((r = n.split(".", 2))[1] = r[1] ? "." + r[1] : "",
                i = r[1] + "!",
                F.access(this, function(t) {
                    return t === S ? ((c = this.triggerHandler("getData" + i, [r[0]])) === S && a && (c = F.data(a, n),
                    c = q(a, n, c)),
                    c === S && r[1] ? this.data(r[0]) : c) : (r[1] = t,
                    void this.each(function() {
                        var e = F(this);
                        e.triggerHandler("setData" + i, r),
                        F.data(this, n, t),
                        e.triggerHandler("changeData" + i, r)
                    }))
                }, null, e, 1 < arguments.length, null, !1));
            if (this.length && (c = F.data(a),
            1 === a.nodeType && !F._data(a, "parsedAttrs"))) {
                for (s = (t = a.attributes).length; l < s; l++)
                    0 === (o = t[l].name).indexOf("data-") && (o = F.camelCase(o.substring(5)),
                    q(a, o, c[o]));
                F._data(a, "parsedAttrs", !0)
            }
            return c
        },
        removeData: function(e) {
            return this.each(function() {
                F.removeData(this, e)
            })
        }
    }),
    F.extend({
        _mark: function(e, t) {
            e && F._data(e, t = (t || "fx") + "mark", (F._data(e, t) || 0) + 1)
        },
        _unmark: function(e, t, n) {
            var r;
            !0 !== e && (n = t,
            t = e,
            e = !1),
            t && (r = (n = n || "fx") + "mark",
            (e = e ? 0 : (F._data(t, r) || 1) - 1) ? F._data(t, r, e) : (F.removeData(t, r, !0),
            R(t, n, "mark")))
        },
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = F._data(e, t = (t || "fx") + "queue"),
                n && (!r || F.isArray(n) ? r = F._data(e, t, F.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = F.queue(e, t)
              , r = n.shift()
              , i = {};
            (r = "inprogress" === r ? n.shift() : r) && ("fx" === t && n.unshift("inprogress"),
            F._data(e, t + ".run", i),
            r.call(e, function() {
                F.dequeue(e, t)
            }, i)),
            n.length || (F.removeData(e, t + "queue " + t + ".run", !0),
            R(e, t, "queue"))
        }
    }),
    F.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? F.queue(this[0], t) : n === S ? this : this.each(function() {
                var e = F.queue(this, t, n);
                "fx" === t && "inprogress" !== e[0] && F.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                F.dequeue(this, e)
            })
        },
        delay: function(r, e) {
            return r = F.fx && F.fx.speeds[r] || r,
            this.queue(e = e || "fx", function(e, t) {
                var n = setTimeout(e, r);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            "string" != typeof e && (t = e,
            e = S),
            e = e || "fx";
            var n, r = F.Deferred(), i = this, o = i.length, s = 1, a = e + "defer", l = e + "queue", c = e + "mark";
            function u() {
                --s || r.resolveWith(i, [i])
            }
            for (; o--; )
                (n = F.data(i[o], a, S, !0) || (F.data(i[o], l, S, !0) || F.data(i[o], c, S, !0)) && F.data(i[o], a, F.Callbacks("once memory"), !0)) && (s++,
                n.add(u));
            return u(),
            r.promise(t)
        }
    });
    var $, X, z, U = /[\n\t\r]/g, V = /\s+/, G = /\r/g, J = /^(?:button|input)$/i, Y = /^(?:button|input|object|select|textarea)$/i, Q = /^a(?:rea)?$/i, K = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Z = F.support.getSetAttribute;
    F.fn.extend({
        attr: function(e, t) {
            return F.access(this, F.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                F.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return F.access(this, F.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = F.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = S,
                    delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(t) {
            var e, n, r, i, o, s, a;
            if (F.isFunction(t))
                return this.each(function(e) {
                    F(this).addClass(t.call(this, e, this.className))
                });
            if (t && "string" == typeof t)
                for (e = t.split(V),
                n = 0,
                r = this.length; n < r; n++)
                    if (1 === (i = this[n]).nodeType)
                        if (i.className || 1 !== e.length) {
                            for (o = " " + i.className + " ",
                            s = 0,
                            a = e.length; s < a; s++)
                                ~o.indexOf(" " + e[s] + " ") || (o += e[s] + " ");
                            i.className = F.trim(o)
                        } else
                            i.className = t;
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a;
            if (F.isFunction(t))
                return this.each(function(e) {
                    F(this).removeClass(t.call(this, e, this.className))
                });
            if (t && "string" == typeof t || t === S)
                for (e = (t || "").split(V),
                n = 0,
                r = this.length; n < r; n++)
                    if (1 === (i = this[n]).nodeType && i.className)
                        if (t) {
                            for (o = (" " + i.className + " ").replace(U, " "),
                            s = 0,
                            a = e.length; s < a; s++)
                                o = o.replace(" " + e[s] + " ", " ");
                            i.className = F.trim(o)
                        } else
                            i.className = "";
            return this
        },
        toggleClass: function(o, s) {
            var a = typeof o
              , l = "boolean" == typeof s;
            return F.isFunction(o) ? this.each(function(e) {
                F(this).toggleClass(o.call(this, e, this.className, s), s)
            }) : this.each(function() {
                if ("string" == a)
                    for (var e, t = 0, n = F(this), r = s, i = o.split(V); e = i[t++]; )
                        r = l ? r : !n.hasClass(e),
                        n[r ? "addClass" : "removeClass"](e);
                else
                    "undefined" != a && "boolean" != a || (this.className && F._data(this, "__className__", this.className),
                    this.className = !this.className && !1 !== o && F._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && -1 < (" " + this[n].className + " ").replace(U, " ").indexOf(t))
                    return !0;
            return !1
        },
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = F.isFunction(n),
            this.each(function(e) {
                var t = F(this);
                1 === this.nodeType && (null == (t = i ? n.call(this, e, t.val()) : n) ? t = "" : "number" == typeof t ? t += "" : F.isArray(t) && (t = F.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = F.valHooks[this.type] || F.valHooks[this.nodeName.toLowerCase()]) && "set"in r && r.set(this, t, "value") !== S || (this.value = t))
            })) : t ? (r = F.valHooks[t.type] || F.valHooks[t.nodeName.toLowerCase()]) && "get"in r && (e = r.get(t, "value")) !== S ? e : "string" == typeof (e = t.value) ? e.replace(G, "") : null == e ? "" : e : void 0
        }
    }),
    F.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.selectedIndex, o = [], s = e.options, a = "select-one" === e.type;
                    if (i < 0)
                        return null;
                    for (t = a ? i : 0,
                    n = a ? i + 1 : s.length; t < n; t++)
                        if ((r = s[t]).selected && (F.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !F.nodeName(r.parentNode, "optgroup"))) {
                            if (r = F(r).val(),
                            a)
                                return r;
                            o.push(r)
                        }
                    return a && !o.length && s.length ? F(s[i]).val() : o
                },
                set: function(e, t) {
                    var n = F.makeArray(t);
                    return F(e).find("option").each(function() {
                        this.selected = 0 <= F.inArray(F(this).val(), n)
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, t, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return r && t in F.attrFn ? F(e)[t](n) : void 0 === e.getAttribute ? F.prop(e, t, n) : ((s = 1 !== s || !F.isXMLDoc(e)) && (t = t.toLowerCase(),
                o = F.attrHooks[t] || (K.test(t) ? X : $)),
                n === S ? !(o && "get"in o && s && null !== (i = o.get(e, t))) && null === (i = e.getAttribute(t)) ? S : i : null !== n ? o && "set"in o && s && (i = o.set(e, n, t)) !== S ? i : (e.setAttribute(t, "" + n),
                n) : void F.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i, o, s, a = 0;
            if (t && 1 === e.nodeType)
                for (o = (r = t.toLowerCase().split(V)).length; a < o; a++)
                    (i = r[a]) && (n = F.propFix[i] || i,
                    (s = K.test(i)) || F.attr(e, i, ""),
                    e.removeAttribute(Z ? i : n),
                    s && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (J.test(e.nodeName) && e.parentNode)
                        F.error("type property can't be changed");
                    else if (!F.support.radioValue && "radio" === t && F.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return $ && F.nodeName(e, "button") ? $.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if ($ && F.nodeName(e, "button"))
                        return $.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return (1 !== o || !F.isXMLDoc(e)) && (t = F.propFix[t] || t,
                i = F.propHooks[t]),
                n !== S ? i && "set"in i && (r = i.set(e, n, t)) !== S ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = e.getAttributeNode("tabindex");
                    return t && t.specified ? parseInt(t.value, 10) : Y.test(e.nodeName) || Q.test(e.nodeName) && e.href ? 0 : S
                }
            }
        }
    }),
    F.attrHooks.tabindex = F.propHooks.tabIndex,
    X = {
        get: function(e, t) {
            var n, r = F.prop(e, t);
            return !0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : S
        },
        set: function(e, t, n) {
            return !1 === t ? F.removeAttr(e, n) : ((t = F.propFix[n] || n)in e && (e[t] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    Z || (z = {
        name: !0,
        id: !0,
        coords: !0
    },
    $ = F.valHooks.button = {
        get: function(e, t) {
            e = e.getAttributeNode(t);
            return e && (z[t] ? "" !== e.nodeValue : e.specified) ? e.nodeValue : S
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = L.createAttribute(n),
            e.setAttributeNode(r)),
            r.nodeValue = t + ""
        }
    },
    F.attrHooks.tabindex.set = $.set,
    F.each(["width", "height"], function(e, n) {
        F.attrHooks[n] = F.extend(F.attrHooks[n], {
            set: function(e, t) {
                if ("" === t)
                    return e.setAttribute(n, "auto"),
                    t
            }
        })
    }),
    F.attrHooks.contenteditable = {
        get: $.get,
        set: function(e, t, n) {
            $.set(e, t = "" === t ? "false" : t, n)
        }
    }),
    F.support.hrefNormalized || F.each(["href", "src", "width", "height"], function(e, t) {
        F.attrHooks[t] = F.extend(F.attrHooks[t], {
            get: function(e) {
                e = e.getAttribute(t, 2);
                return null === e ? S : e
            }
        })
    }),
    F.support.style || (F.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || S
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }),
    F.support.optSelected || (F.propHooks.selected = F.extend(F.propHooks.selected, {
        get: function(e) {
            e = e.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    })),
    F.support.enctype || (F.propFix.enctype = "encoding"),
    F.support.checkOn || F.each(["radio", "checkbox"], function() {
        F.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }),
    F.each(["radio", "checkbox"], function() {
        F.valHooks[this] = F.extend(F.valHooks[this], {
            set: function(e, t) {
                if (F.isArray(t))
                    return e.checked = 0 <= F.inArray(F(e).val(), t)
            }
        })
    });
    function ee(e) {
        return F.event.special.hover ? e : e.replace(re, "mouseenter$1 mouseleave$1")
    }
    var te = /^(?:textarea|input|select)$/i
      , ne = /^([^\.]*)?(?:\.(.+))?$/
      , re = /(?:^|\s)hover(\.\S+)?\b/
      , ie = /^key/
      , oe = /^(?:mouse|contextmenu)|click/
      , se = /^(?:focusinfocus|focusoutblur)$/
      , ae = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/;
    function le() {
        return !1
    }
    function ce() {
        return !0
    }
    F.event = {
        add: function(e, t, n, r, i) {
            var o, s, a, l, c, u, d, f, p, h;
            if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (o = F._data(e)))
                for (n.handler && (n = (f = n).handler,
                i = f.selector),
                n.guid || (n.guid = F.guid++),
                (a = o.events) || (o.events = a = {}),
                (s = o.handle) || (o.handle = s = function(e) {
                    return void 0 === F || e && F.event.triggered === e.type ? S : F.event.dispatch.apply(s.elem, arguments)
                }
                ,
                s.elem = e),
                t = F.trim(ee(t)).split(" "),
                l = 0; l < t.length; l++)
                    c = (p = ne.exec(t[l]) || [])[1],
                    u = (p[2] || "").split(".").sort(),
                    h = F.event.special[c] || {},
                    c = (i ? h.delegateType : h.bindType) || c,
                    h = F.event.special[c] || {},
                    d = F.extend({
                        type: c,
                        origType: p[1],
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        quick: i && function(e) {
                            e = ae.exec(e);
                            return e && (e[1] = (e[1] || "").toLowerCase(),
                            e[3] = e[3] && new RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)")),
                            e
                        }(i),
                        namespace: u.join(".")
                    }, f),
                    (p = a[c]) || ((p = a[c] = []).delegateCount = 0,
                    h.setup && !1 !== h.setup.call(e, r, u, s) || (e.addEventListener ? e.addEventListener(c, s, !1) : e.attachEvent && e.attachEvent("on" + c, s))),
                    h.add && (h.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    F.event.global[c] = !0
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var o, s, a, l, c, u, d, f, p, h, m, g = F.hasData(e) && F._data(e);
            if (g && (d = g.events)) {
                for (t = F.trim(ee(t || "")).split(" "),
                o = 0; o < t.length; o++)
                    if (s = a = (c = ne.exec(t[o]) || [])[1],
                    l = c[2],
                    s) {
                        for (f = F.event.special[s] || {},
                        c = (h = d[s = (r ? f.delegateType : f.bindType) || s] || []).length,
                        l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                        u = 0; u < h.length; u++)
                            m = h[u],
                            !i && a !== m.origType || n && n.guid !== m.guid || l && !l.test(m.namespace) || r && r !== m.selector && ("**" !== r || !m.selector) || (h.splice(u--, 1),
                            m.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, m));
                        0 === h.length && c !== h.length && (f.teardown && !1 !== f.teardown.call(e, l) || F.removeEvent(e, s, g.handle),
                        delete d[s])
                    } else
                        for (s in d)
                            F.event.remove(e, s + t[o], n, r, !0);
                F.isEmptyObject(d) && ((p = g.handle) && (p.elem = null),
                F.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(e, t, n, r) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var i, o, s, a, l, c, u, d, f, p = e.type || e, h = [];
                if (!se.test(p + F.event.triggered) && (0 <= p.indexOf("!") && (p = p.slice(0, -1),
                o = !0),
                0 <= p.indexOf(".") && (p = (h = p.split(".")).shift(),
                h.sort()),
                n && !F.event.customEvent[p] || F.event.global[p]))
                    if ((e = "object" == typeof e ? e[F.expando] ? e : new F.Event(p,e) : new F.Event(p)).type = p,
                    e.isTrigger = !0,
                    e.exclusive = o,
                    e.namespace = h.join("."),
                    e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    c = p.indexOf(":") < 0 ? "on" + p : "",
                    n) {
                        if (e.result = S,
                        e.target || (e.target = n),
                        (t = null != t ? F.makeArray(t) : []).unshift(e),
                        !(h = F.event.special[p] || {}).trigger || !1 !== h.trigger.apply(n, t)) {
                            if (d = [[n, h.bindType || p]],
                            !r && !h.noBubble && !F.isWindow(n)) {
                                for (f = h.delegateType || p,
                                a = se.test(f + p) ? n : n.parentNode,
                                l = null; a; a = a.parentNode)
                                    d.push([a, f]),
                                    l = a;
                                l && l === n.ownerDocument && d.push([l.defaultView || l.parentWindow || x, f])
                            }
                            for (s = 0; s < d.length && !e.isPropagationStopped(); s++)
                                a = d[s][0],
                                e.type = d[s][1],
                                (u = (F._data(a, "events") || {})[e.type] && F._data(a, "handle")) && u.apply(a, t),
                                (u = c && a[c]) && F.acceptData(a) && !1 === u.apply(a, t) && e.preventDefault();
                            return e.type = p,
                            r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(n.ownerDocument, t) || "click" === p && F.nodeName(n, "a") || !F.acceptData(n) || c && n[p] && ("focus" !== p && "blur" !== p || 0 !== e.target.offsetWidth) && !F.isWindow(n) && ((l = n[c]) && (n[c] = null),
                            n[F.event.triggered = p](),
                            F.event.triggered = S,
                            l && (n[c] = l)),
                            e.result
                        }
                    } else
                        for (s in i = F.cache)
                            i[s].events && i[s].events[p] && F.event.trigger(e, t, i[s].handle.elem, !0)
            }
        },
        dispatch: function(e) {
            e = F.event.fix(e || x.event);
            var t, n, r, i, o, s, a, l, c, u, d, f, p, h = (F._data(this, "events") || {})[e.type] || [], m = h.delegateCount, g = [].slice.call(arguments, 0), v = !e.exclusive && !e.namespace, y = F.event.special[e.type] || {}, b = [];
            if ((g[0] = e).delegateTarget = this,
            !y.preDispatch || !1 !== y.preDispatch.call(this, e)) {
                if (m && (!e.button || "click" !== e.type))
                    for ((i = F(this)).context = this.ownerDocument || this,
                    r = e.target; r != this; r = r.parentNode || this)
                        if (!0 !== r.disabled) {
                            for (s = {},
                            l = [],
                            i[0] = r,
                            t = 0; t < m; t++)
                                s[u = (c = h[t]).selector] === S && (s[u] = c.quick ? (d = r,
                                f = c.quick,
                                p = void 0,
                                p = d.attributes || {},
                                (!f[1] || d.nodeName.toLowerCase() === f[1]) && (!f[2] || (p.id || {}).value === f[2]) && (!f[3] || f[3].test((p.class || {}).value))) : i.is(u)),
                                s[u] && l.push(c);
                            l.length && b.push({
                                elem: r,
                                matches: l
                            })
                        }
                for (h.length > m && b.push({
                    elem: this,
                    matches: h.slice(m)
                }),
                t = 0; t < b.length && !e.isPropagationStopped(); t++)
                    for (a = b[t],
                    e.currentTarget = a.elem,
                    n = 0; n < a.matches.length && !e.isImmediatePropagationStopped(); n++)
                        c = a.matches[n],
                        (v || !e.namespace && !c.namespace || e.namespace_re && e.namespace_re.test(c.namespace)) && (e.data = c.data,
                        e.handleObj = c,
                        (o = ((F.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g)) !== S && !1 === (e.result = o) && (e.preventDefault(),
                        e.stopPropagation()));
                return y.postDispatch && y.postDispatch.call(this, e),
                e.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = (r = e.target.ownerDocument || L).documentElement,
                r = r.body,
                e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0),
                e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || i === S || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[F.expando])
                return e;
            var t, n, r = e, i = F.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = F.Event(r),
            t = o.length; t; )
                e[n = o[--t]] = r[n];
            return e.target || (e.target = r.srcElement || L),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey === S && (e.metaKey = e.ctrlKey),
            i.filter ? i.filter(e, r) : e
        },
        special: {
            ready: {
                setup: F.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    F.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            e = F.extend(new F.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? F.event.trigger(e, null, t) : F.event.dispatch.call(t, e),
            e.isDefaultPrevented() && n.preventDefault()
        }
    },
    F.event.handle = F.event.dispatch,
    F.removeEvent = L.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }
    ,
    F.Event = function(e, t) {
        if (!(this instanceof F.Event))
            return new F.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ce : le) : this.type = e,
        t && F.extend(this, t),
        this.timeStamp = e && e.timeStamp || F.now(),
        this[F.expando] = !0
    }
    ,
    F.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = ce;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = ce;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ce,
            this.stopPropagation()
        },
        isDefaultPrevented: le,
        isPropagationStopped: le,
        isImmediatePropagationStopped: le
    },
    F.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, i) {
        F.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                r.selector;
                return n && (n === this || F.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    F.support.submitBubbles || (F.event.special.submit = {
        setup: function() {
            if (F.nodeName(this, "form"))
                return !1;
            F.event.add(this, "click._submit keypress._submit", function(e) {
                e = e.target,
                e = F.nodeName(e, "input") || F.nodeName(e, "button") ? e.form : S;
                e && !e._submit_attached && (F.event.add(e, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                e._submit_attached = !0)
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && F.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (F.nodeName(this, "form"))
                return !1;
            F.event.remove(this, "._submit")
        }
    }),
    F.support.changeBubbles || (F.event.special.change = {
        setup: function() {
            if (te.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (F.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                F.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1,
                    F.event.simulate("change", this, e, !0))
                })),
                !1;
            F.event.add(this, "beforeactivate._change", function(e) {
                e = e.target;
                te.test(e.nodeName) && !e._change_attached && (F.event.add(e, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || F.event.simulate("change", this.parentNode, e, !0)
                }),
                e._change_attached = !0)
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return F.event.remove(this, "._change"),
            te.test(this.nodeName)
        }
    }),
    F.support.focusinBubbles || F.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            F.event.simulate(t, e.target, F.event.fix(e), !0)
        }
        var r = 0;
        F.event.special[t] = {
            setup: function() {
                0 == r++ && L.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 == --r && L.removeEventListener(e, n, !0)
            }
        }
    }),
    F.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t,
                t = S),
                e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = S) : null == r && ("string" == typeof t ? (r = n,
            n = S) : (r = n,
            n = t,
            t = S)),
            !1 === r)
                r = le;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            (r = function(e) {
                return F().off(e),
                o.apply(this, arguments)
            }
            ).guid = o.guid || (o.guid = F.guid++)),
            this.each(function() {
                F.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            if (e && e.preventDefault && e.handleObj) {
                var r = e.handleObj;
                return F(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this
            }
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = S),
                !1 === n && (n = le),
                this.each(function() {
                    F.event.remove(this, e, n, t)
                });
            for (var i in e)
                this.off(i, t, e[i]);
            return this
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return F(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return F(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                F.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return F.event.trigger(e, t, this[0], !0)
        },
        toggle: function(n) {
            function e(e) {
                var t = (F._data(this, "lastToggle" + n.guid) || 0) % i;
                return F._data(this, "lastToggle" + n.guid, 1 + t),
                e.preventDefault(),
                r[t].apply(this, arguments) || !1
            }
            var r = arguments
              , t = n.guid || F.guid++
              , i = 0;
            for (e.guid = t; i < r.length; )
                r[i++].guid = t;
            return this.click(e)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    F.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        F.fn[n] = function(e, t) {
            return null == t && (t = e,
            e = null),
            0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
        ,
        F.attrFn && (F.attrFn[n] = !0),
        ie.test(n) && (F.event.fixHooks[n] = F.event.keyHooks),
        oe.test(n) && (F.event.fixHooks[n] = F.event.mouseHooks)
    }),
    function() {
        var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , u = "sizcache" + (Math.random() + "").replace(".", "")
          , s = 0
          , y = Object.prototype.toString
          , d = !1
          , n = !0
          , c = /\\/g
          , o = /\r\n/g
          , l = /\W/;
        [0, 0].sort(function() {
            return n = !1,
            0
        });
        var b = function(e, t, n, r) {
            n = n || [];
            var i = t = t || L;
            if (1 !== t.nodeType && 9 !== t.nodeType)
                return [];
            if (!e || "string" != typeof e)
                return n;
            var o, s, a, l, c, u, d, f, p = !0, h = b.isXML(t), m = [], g = e;
            do {
                if (v.exec(""),
                (o = v.exec(g)) && (g = o[3],
                m.push(o[1]),
                o[2])) {
                    l = o[3];
                    break
                }
            } while (o);
            if (1 < m.length && w.exec(e))
                if (2 === m.length && x.relative[m[0]])
                    s = A(m[0] + m[1], t, r);
                else
                    for (s = x.relative[m[0]] ? [t] : b(m.shift(), t); m.length; )
                        e = m.shift(),
                        x.relative[e] && (e += m.shift()),
                        s = A(e, s, r);
            else if (t = !r && 1 < m.length && 9 === t.nodeType && !h && x.match.ID.test(m[0]) && !x.match.ID.test(m[m.length - 1]) ? ((c = b.find(m.shift(), t, h)).expr ? b.filter(c.expr, c.set) : c.set)[0] : t)
                for (s = (c = r ? {
                    expr: m.pop(),
                    set: T(r)
                } : b.find(m.pop(), 1 !== m.length || "~" !== m[0] && "+" !== m[0] || !t.parentNode ? t : t.parentNode, h)).expr ? b.filter(c.expr, c.set) : c.set,
                0 < m.length ? a = T(s) : p = !1; m.length; )
                    d = u = m.pop(),
                    x.relative[u] ? d = m.pop() : u = "",
                    null == d && (d = t),
                    x.relative[u](a, d, h);
            else
                a = m = [];
            if ((a = a || s) || b.error(u || e),
            "[object Array]" === y.call(a))
                if (p)
                    if (t && 1 === t.nodeType)
                        for (f = 0; null != a[f]; f++)
                            a[f] && (!0 === a[f] || 1 === a[f].nodeType && b.contains(t, a[f])) && n.push(s[f]);
                    else
                        for (f = 0; null != a[f]; f++)
                            a[f] && 1 === a[f].nodeType && n.push(s[f]);
                else
                    n.push.apply(n, a);
            else
                T(a, n);
            return l && (b(l, i, n, r),
            b.uniqueSort(n)),
            n
        };
        b.uniqueSort = function(e) {
            if (r && (d = n,
            e.sort(r),
            d))
                for (var t = 1; t < e.length; t++)
                    e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }
        ,
        b.matches = function(e, t) {
            return b(e, null, null, t)
        }
        ,
        b.matchesSelector = function(e, t) {
            return 0 < b(t, null, null, [e]).length
        }
        ,
        b.find = function(e, t, n) {
            var r, i, o, s, a, l;
            if (!e)
                return [];
            for (i = 0,
            o = x.order.length; i < o; i++)
                if (a = x.order[i],
                (s = x.leftMatch[a].exec(e)) && (l = s[1],
                s.splice(1, 1),
                "\\" !== l.substr(l.length - 1) && (s[1] = (s[1] || "").replace(c, ""),
                null != (r = x.find[a](s, t, n))))) {
                    e = e.replace(x.match[a], "");
                    break
                }
            return {
                set: r = r || (void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []),
                expr: e
            }
        }
        ,
        b.filter = function(e, t, n, r) {
            for (var i, o, s, a, l, c, u, d, f, p = e, h = [], m = t, g = t && t[0] && b.isXML(t[0]); e && t.length; ) {
                for (s in x.filter)
                    if (null != (i = x.leftMatch[s].exec(e)) && i[2] && (c = x.filter[s],
                    u = i[1],
                    o = !1,
                    i.splice(1, 1),
                    "\\" !== u.substr(u.length - 1))) {
                        if (m === h && (h = []),
                        x.preFilter[s])
                            if (i = x.preFilter[s](i, m, n, h, r, g)) {
                                if (!0 === i)
                                    continue
                            } else
                                o = a = !0;
                        if (i)
                            for (d = 0; null != (l = m[d]); d++)
                                l && (f = r ^ (a = c(l, i, d, m)),
                                n && null != a ? f ? o = !0 : m[d] = !1 : f && (h.push(l),
                                o = !0));
                        if (a !== S) {
                            if (n || (m = h),
                            e = e.replace(x.match[s], ""),
                            !o)
                                return [];
                            break
                        }
                    }
                if (e === p) {
                    if (null != o)
                        break;
                    b.error(e)
                }
                p = e
            }
            return m
        }
        ,
        b.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ;
        function e(e, t) {
            return "\\" + (+t + 1)
        }
        var t, f = b.getText = function(e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    if ("string" == typeof e.innerText)
                        return e.innerText.replace(o, "");
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += f(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++)
                    8 !== n.nodeType && (i += f(n));
            return i
        }
        , x = b.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                class: "className",
                for: "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = "string" == typeof t
                      , r = n && !l.test(t)
                      , i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var o, s = 0, a = e.length; s < a; s++)
                        if (o = e[s]) {
                            for (; (o = o.previousSibling) && 1 !== o.nodeType; )
                                ;
                            e[s] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                        }
                    i && b.filter(t, e, !0)
                },
                ">": function(e, t) {
                    var n, r, i = "string" == typeof t, o = 0, s = e.length;
                    if (i && !l.test(t))
                        for (t = t.toLowerCase(); o < s; o++)
                            (r = e[o]) && (n = r.parentNode,
                            e[o] = n.nodeName.toLowerCase() === t && n);
                    else {
                        for (; o < s; o++)
                            (r = e[o]) && (e[o] = i ? r.parentNode : r.parentNode === t);
                        i && b.filter(t, e, !0)
                    }
                },
                "": function(e, t, n) {
                    var r, i = s++, o = g;
                    "string" != typeof t || l.test(t) || (r = t = t.toLowerCase(),
                    o = m),
                    o("parentNode", t, i, e, r, n)
                },
                "~": function(e, t, n) {
                    var r, i = s++, o = g;
                    "string" != typeof t || l.test(t) || (r = t = t.toLowerCase(),
                    o = m),
                    o("previousSibling", t, i, e, r, n)
                }
            },
            find: {
                ID: function(e, t, n) {
                    if (void 0 !== t.getElementById && !n) {
                        e = t.getElementById(e[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function(e, t) {
                    if (void 0 !== t.getElementsByName) {
                        for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++)
                            r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return 0 === n.length ? null : n
                    }
                },
                TAG: function(e, t) {
                    if (void 0 !== t.getElementsByTagName)
                        return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function(e, t, n, r, i, o) {
                    if (e = " " + e[1].replace(c, "") + " ",
                    o)
                        return e;
                    for (var s, a = 0; null != (s = t[a]); a++)
                        s && (i ^ (s.className && 0 <= (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e)) ? n || r.push(s) : n && (t[a] = !1));
                    return !1
                },
                ID: function(e) {
                    return e[1].replace(c, "")
                },
                TAG: function(e, t) {
                    return e[1].replace(c, "").toLowerCase()
                },
                CHILD: function(e) {
                    var t;
                    return "nth" === e[1] ? (e[2] || b.error(e[0]),
                    e[2] = e[2].replace(/^\+|\s*/g, ""),
                    t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]),
                    e[2] = +(t[1] + (t[2] || 1)),
                    e[3] = +t[3]) : e[2] && b.error(e[0]),
                    e[0] = s++,
                    e
                },
                ATTR: function(e, t, n, r, i, o) {
                    var s = e[1] = e[1].replace(c, "");
                    return !o && x.attrMap[s] && (e[1] = x.attrMap[s]),
                    e[4] = (e[4] || e[5] || "").replace(c, ""),
                    "~=" === e[2] && (e[4] = " " + e[4] + " "),
                    e
                },
                PSEUDO: function(e, t, n, r, i) {
                    if ("not" === e[1]) {
                        if (!(1 < (v.exec(e[3]) || "").length || /^\w/.test(e[3]))) {
                            i = b.filter(e[3], t, n, !0 ^ i);
                            return n || r.push.apply(r, i),
                            !1
                        }
                        e[3] = b(e[3], null, null, t)
                    } else if (x.match.POS.test(e[0]) || x.match.CHILD.test(e[0]))
                        return !0;
                    return e
                },
                POS: function(e) {
                    return e.unshift(!0),
                    e
                }
            },
            filters: {
                enabled: function(e) {
                    return !1 === e.disabled && "hidden" !== e.type
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    return !0 === e.checked
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(e, t, n) {
                    return !!b(n[3], e).length
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function(e) {
                    var t = e.getAttribute("type")
                      , n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                },
                radio: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                },
                checkbox: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                },
                file: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                },
                password: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                },
                image: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t) {
                    return 0 === t
                },
                last: function(e, t, n, r) {
                    return t === r.length - 1
                },
                even: function(e, t) {
                    return t % 2 == 0
                },
                odd: function(e, t) {
                    return t % 2 == 1
                },
                lt: function(e, t, n) {
                    return t < +n[3]
                },
                gt: function(e, t, n) {
                    return t > +n[3]
                },
                nth: function(e, t, n) {
                    return +n[3] === t
                },
                eq: function(e, t, n) {
                    return +n[3] === t
                }
            },
            filter: {
                PSEUDO: function(e, t, n, r) {
                    var i = t[1]
                      , o = x.filters[i];
                    if (o)
                        return o(e, n, t, r);
                    if ("contains" === i)
                        return 0 <= (e.textContent || e.innerText || f([e]) || "").indexOf(t[3]);
                    if ("not" === i) {
                        for (var s = t[3], a = 0, l = s.length; a < l; a++)
                            if (s[a] === e)
                                return !1;
                        return !0
                    }
                    b.error(i)
                },
                CHILD: function(e, t) {
                    var n, r, i, o, s, a = t[1], l = e;
                    switch (a) {
                    case "only":
                    case "first":
                        for (; l = l.previousSibling; )
                            if (1 === l.nodeType)
                                return !1;
                        if ("first" === a)
                            return !0;
                        l = e;
                    case "last":
                        for (; l = l.nextSibling; )
                            if (1 === l.nodeType)
                                return !1;
                        return !0;
                    case "nth":
                        if (n = t[2],
                        s = t[3],
                        1 === n && 0 === s)
                            return !0;
                        if (r = t[0],
                        (i = e.parentNode) && (i[u] !== r || !e.nodeIndex)) {
                            for (o = 0,
                            l = i.firstChild; l; l = l.nextSibling)
                                1 === l.nodeType && (l.nodeIndex = ++o);
                            i[u] = r
                        }
                        return s = e.nodeIndex - s,
                        0 === n ? 0 == s : s % n == 0 && 0 <= s / n
                    }
                },
                ID: function(e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                },
                TAG: function(e, t) {
                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function(e, t) {
                    return -1 < (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t)
                },
                ATTR: function(e, t) {
                    var n = t[1]
                      , r = b.attr ? b.attr(e, n) : x.attrHandle[n] ? x.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n)
                      , e = r + ""
                      , n = t[2]
                      , t = t[4];
                    return null == r ? "!=" === n : !n && b.attr ? null != r : "=" === n ? e === t : "*=" === n ? 0 <= e.indexOf(t) : "~=" === n ? 0 <= (" " + e + " ").indexOf(t) : t ? "!=" === n ? e !== t : "^=" === n ? 0 === e.indexOf(t) : "$=" === n ? e.substr(e.length - t.length) === t : "|=" === n && (e === t || e.substr(0, t.length + 1) === t + "-") : e && !1 !== r
                },
                POS: function(e, t, n, r) {
                    var i = t[2]
                      , i = x.setFilters[i];
                    if (i)
                        return i(e, n, t, r)
                }
            }
        }, w = x.match.POS;
        for (t in x.match)
            x.match[t] = new RegExp(x.match[t].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            x.leftMatch[t] = new RegExp(/(^(?:.|\r|\n)*?)/.source + x.match[t].source.replace(/\\(\d+)/g, e));
        x.match.globalPOS = w;
        var r, p, i, a, h, T = function(e, t) {
            return e = Array.prototype.slice.call(e, 0),
            t ? (t.push.apply(t, e),
            t) : e
        };
        try {
            Array.prototype.slice.call(L.documentElement.childNodes, 0)[0].nodeType
        } catch (e) {
            T = function(e, t) {
                var n = 0
                  , r = t || [];
                if ("[object Array]" === y.call(e))
                    Array.prototype.push.apply(r, e);
                else if ("number" == typeof e.length)
                    for (var i = e.length; n < i; n++)
                        r.push(e[n]);
                else
                    for (; e[n]; n++)
                        r.push(e[n]);
                return r
            }
        }
        function m(e, t, n, r, i, o) {
            for (var s = 0, a = r.length; s < a; s++)
                if (c = r[s]) {
                    for (var l = !1, c = c[e]; c; ) {
                        if (c[u] === n) {
                            l = r[c.sizset];
                            break
                        }
                        if (1 !== c.nodeType || o || (c[u] = n,
                        c.sizset = s),
                        c.nodeName.toLowerCase() === t) {
                            l = c;
                            break
                        }
                        c = c[e]
                    }
                    r[s] = l
                }
        }
        function g(e, t, n, r, i, o) {
            for (var s = 0, a = r.length; s < a; s++)
                if (c = r[s]) {
                    for (var l = !1, c = c[e]; c; ) {
                        if (c[u] === n) {
                            l = r[c.sizset];
                            break
                        }
                        if (1 === c.nodeType)
                            if (o || (c[u] = n,
                            c.sizset = s),
                            "string" != typeof t) {
                                if (c === t) {
                                    l = !0;
                                    break
                                }
                            } else if (0 < b.filter(t, [c]).length) {
                                l = c;
                                break
                            }
                        c = c[e]
                    }
                    r[s] = l
                }
        }
        L.documentElement.compareDocumentPosition ? r = function(e, t) {
            return e === t ? (d = !0,
            0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        }
        : (r = function(e, t) {
            if (e === t)
                return d = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n = []
              , r = []
              , i = e.parentNode
              , o = t.parentNode
              , s = i;
            if (i === o)
                return p(e, t);
            if (!i)
                return -1;
            if (!o)
                return 1;
            for (; s; )
                n.unshift(s),
                s = s.parentNode;
            for (s = o; s; )
                r.unshift(s),
                s = s.parentNode;
            for (var a = n.length, l = r.length, c = 0; c < a && c < l; c++)
                if (n[c] !== r[c])
                    return p(n[c], r[c]);
            return c === a ? p(e, r[c], -1) : p(n[c], t, 1)
        }
        ,
        p = function(e, t, n) {
            if (e === t)
                return n;
            for (var r = e.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        ),
        h = L.createElement("div"),
        i = "script" + (new Date).getTime(),
        a = L.documentElement,
        h.innerHTML = "<a name='" + i + "'/>",
        a.insertBefore(h, a.firstChild),
        L.getElementById(i) && (x.find.ID = function(e, t, n) {
            if (void 0 !== t.getElementById && !n) {
                t = t.getElementById(e[1]);
                return t ? t.id === e[1] || void 0 !== t.getAttributeNode && t.getAttributeNode("id").nodeValue === e[1] ? [t] : S : []
            }
        }
        ,
        x.filter.ID = function(e, t) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return 1 === e.nodeType && n && n.nodeValue === t
        }
        ),
        a.removeChild(h),
        (h = L.createElement("div")).appendChild(L.createComment("")),
        0 < h.getElementsByTagName("*").length && (x.find.TAG = function(e, t) {
            var n = t.getElementsByTagName(e[1]);
            if ("*" === e[1]) {
                for (var r = [], i = 0; n[i]; i++)
                    1 === n[i].nodeType && r.push(n[i]);
                n = r
            }
            return n
        }
        ),
        h.innerHTML = "<a href='#'></a>",
        h.firstChild && void 0 !== h.firstChild.getAttribute && "#" !== h.firstChild.getAttribute("href") && (x.attrHandle.href = function(e) {
            return e.getAttribute("href", 2)
        }
        ),
        L.querySelectorAll && function() {
            var c = b
              , e = L.createElement("div");
            if (e.innerHTML = "<p class='TEST'></p>",
            !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length)
                for (var t in b = function(e, t, n, r) {
                    if (t = t || L,
                    !r && !b.isXML(t)) {
                        var i = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                        if (i && (1 === t.nodeType || 9 === t.nodeType)) {
                            if (i[1])
                                return T(t.getElementsByTagName(e), n);
                            if (i[2] && x.find.CLASS && t.getElementsByClassName)
                                return T(t.getElementsByClassName(i[2]), n)
                        }
                        if (9 === t.nodeType) {
                            if ("body" === e && t.body)
                                return T([t.body], n);
                            if (i && i[3]) {
                                var o = t.getElementById(i[3]);
                                if (!o || !o.parentNode)
                                    return T([], n);
                                if (o.id === i[3])
                                    return T([o], n)
                            }
                            try {
                                return T(t.querySelectorAll(e), n)
                            } catch (e) {}
                        } else if (1 === t.nodeType && "object" !== t.nodeName.toLowerCase()) {
                            var s = t
                              , a = t.getAttribute("id")
                              , l = a || "__sizzle__"
                              , i = t.parentNode
                              , o = /^\s*[+~]/.test(e);
                            a ? l = l.replace(/'/g, "\\$&") : t.setAttribute("id", l),
                            o && i && (t = t.parentNode);
                            try {
                                if (!o || i)
                                    return T(t.querySelectorAll("[id='" + l + "'] " + e), n)
                            } catch (e) {} finally {
                                a || s.removeAttribute("id")
                            }
                        }
                    }
                    return c(e, t, n, r)
                }
                ,
                c)
                    b[t] = c[t]
        }(),
        function() {
            var e = L.documentElement
              , r = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (r) {
                var i = !r.call(L.createElement("div"), "div")
                  , o = !1;
                try {
                    r.call(L.documentElement, "[test!='']:sizzle")
                } catch (e) {
                    o = !0
                }
                b.matchesSelector = function(e, t) {
                    if (t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"),
                    !b.isXML(e))
                        try {
                            if (o || !x.match.PSEUDO.test(t) && !/!=/.test(t)) {
                                var n = r.call(e, t);
                                if (n || !i || e.document && 11 !== e.document.nodeType)
                                    return n
                            }
                        } catch (e) {}
                    return 0 < b(t, null, null, [e]).length
                }
            }
        }(),
        (h = L.createElement("div")).innerHTML = "<div class='test e'></div><div class='test'></div>",
        h.getElementsByClassName && 0 !== h.getElementsByClassName("e").length && (h.lastChild.className = "e",
        1 !== h.getElementsByClassName("e").length && (x.order.splice(1, 0, "CLASS"),
        x.find.CLASS = function(e, t, n) {
            if (void 0 !== t.getElementsByClassName && !n)
                return t.getElementsByClassName(e[1])
        }
        )),
        L.documentElement.contains ? b.contains = function(e, t) {
            return e !== t && (!e.contains || e.contains(t))
        }
        : L.documentElement.compareDocumentPosition ? b.contains = function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        }
        : b.contains = function() {
            return !1
        }
        ,
        b.isXML = function(e) {
            e = (e ? e.ownerDocument || e : 0).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ;
        var A = function(e, t, n) {
            for (var r, i = [], o = "", s = t.nodeType ? [t] : t; r = x.match.PSEUDO.exec(e); )
                o += r[0],
                e = e.replace(x.match.PSEUDO, "");
            e = x.relative[e] ? e + "*" : e;
            for (var a = 0, l = s.length; a < l; a++)
                b(e, s[a], i, n);
            return b.filter(o, i)
        };
        b.attr = F.attr,
        b.selectors.attrMap = {},
        F.find = b,
        F.expr = b.selectors,
        F.expr[":"] = F.expr.filters,
        F.unique = b.uniqueSort,
        F.text = b.getText,
        F.isXMLDoc = b.isXML,
        F.contains = b.contains
    }();
    var ue = /Until$/
      , de = /^(?:parents|prevUntil|prevAll)/
      , fe = /,/
      , pe = /^.[^:#\[\.,]*$/
      , he = Array.prototype.slice
      , me = F.expr.match.globalPOS
      , ge = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ve(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function ye(e, n, r) {
        if (n = n || 0,
        F.isFunction(n))
            return F.grep(e, function(e, t) {
                return !!n.call(e, t, e) === r
            });
        if (n.nodeType)
            return F.grep(e, function(e, t) {
                return e === n === r
            });
        if ("string" == typeof n) {
            var t = F.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (pe.test(n))
                return F.filter(n, t, !r);
            n = F.filter(n, t)
        }
        return F.grep(e, function(e, t) {
            return 0 <= F.inArray(e, n) === r
        })
    }
    function be(e) {
        var t = xe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    F.fn.extend({
        find: function(e) {
            var t = this;
            if ("string" != typeof e)
                return F(e).filter(function() {
                    for (s = 0,
                    a = t.length; s < a; s++)
                        if (F.contains(t[s], this))
                            return !0
                });
            for (var n, r, i, o = this.pushStack("", "find", e), s = 0, a = this.length; s < a; s++)
                if (n = o.length,
                F.find(e, this[s], o),
                0 < s)
                    for (r = n; r < o.length; r++)
                        for (i = 0; i < n; i++)
                            if (o[i] === o[r]) {
                                o.splice(r--, 1);
                                break
                            }
            return o
        },
        has: function(e) {
            var n = F(e);
            return this.filter(function() {
                for (var e = 0, t = n.length; e < t; e++)
                    if (F.contains(this, n[e]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ye(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ye(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? me.test(e) ? 0 <= F(e, this.context).index(this[0]) : 0 < F.filter(e, this).length : 0 < this.filter(e).length)
        },
        closest: function(e, t) {
            var n = []
              , r = this[0];
            if (F.isArray(e)) {
                for (var i = 1; r && r.ownerDocument && r !== t; ) {
                    for (s = 0; s < e.length; s++)
                        F(r).is(e[s]) && n.push({
                            selector: e[s],
                            elem: r,
                            level: i
                        });
                    r = r.parentNode,
                    i++
                }
                return n
            }
            for (var o = me.test(e) || "string" != typeof e ? F(e, t || this.context) : 0, s = 0, a = this.length; s < a; s++)
                for (r = this[s]; r; ) {
                    if (o ? -1 < o.index(r) : F.find.matchesSelector(r, e)) {
                        n.push(r);
                        break
                    }
                    if (!(r = r.parentNode) || !r.ownerDocument || r === t || 11 === r.nodeType)
                        break
                }
            return n = 1 < n.length ? F.unique(n) : n,
            this.pushStack(n, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? F.inArray(this[0], F(e)) : F.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            t = "string" == typeof e ? F(e, t) : F.makeArray(e && e.nodeType ? [e] : e),
            e = F.merge(this.get(), t);
            return this.pushStack(ve(t[0]) || ve(e[0]) ? e : F.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    F.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return F.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return F.dir(e, "parentNode", n)
        },
        next: function(e) {
            return F.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return F.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return F.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return F.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return F.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return F.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return F.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return F.sibling(e.firstChild)
        },
        contents: function(e) {
            return F.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : F.makeArray(e.childNodes)
        }
    }, function(r, i) {
        F.fn[r] = function(e, t) {
            var n = F.map(this, i, e);
            return (t = !ue.test(r) ? e : t) && "string" == typeof t && (n = F.filter(t, n)),
            n = 1 < this.length && !ge[r] ? F.unique(n) : n,
            (1 < this.length || fe.test(t)) && de.test(r) && (n = n.reverse()),
            this.pushStack(n, r, he.call(arguments).join(","))
        }
    }),
    F.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? F.find.matchesSelector(t[0], e) ? [t[0]] : [] : F.find.matches(e, t)
        },
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === S || 1 !== i.nodeType || !F(i).is(n)); )
                1 === i.nodeType && r.push(i),
                i = i[t];
            return r
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n])
                ;
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , we = / jQuery\d+="(?:\d+|null)"/g
      , Te = /^\s+/
      , Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Se = /<([\w:]+)/
      , Ce = /<tbody/i
      , Ne = /<|&#?\w+;/
      , Ee = /<(?:script|style)/i
      , ke = /<(?:script|object|embed|option|style)/i
      , Pe = new RegExp("<(?:" + xe + ")[\\s/>]","i")
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /\/(java|ecma)script/i
      , Fe = /^\s*<!(?:\[CDATA\[|\-\-)/
      , Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , De = be(L);
    function Oe(e, t) {
        if (1 === t.nodeType && F.hasData(e)) {
            var n, r, i, o = F._data(e), e = F._data(t, o), s = o.events;
            if (s)
                for (n in delete e.handle,
                e.events = {},
                s)
                    for (r = 0,
                    i = s[n].length; r < i; r++)
                        F.event.add(t, n, s[n][r]);
            e.data && (e.data = F.extend({}, e.data))
        }
    }
    function Me(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked),
        t.value !== e.value && (t.value = e.value)),
        t.removeAttribute(F.expando),
        t.removeAttribute("_submit_attached"),
        t.removeAttribute("_change_attached"))
    }
    function _e(e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function He(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
    }
    function Be(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? He(e) : "script" !== t && void 0 !== e.getElementsByTagName && F.grep(e.getElementsByTagName("input"), He)
    }
    Ie.optgroup = Ie.option,
    Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
    Ie.th = Ie.td,
    F.support.htmlSerialize || (Ie._default = [1, "div<div>", "</div>"]),
    F.fn.extend({
        text: function(e) {
            return F.access(this, function(e) {
                return e === S ? F.text(this) : this.empty().append((this[0] && this[0].ownerDocument || L).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(t) {
            return F.isFunction(t) ? this.each(function(e) {
                F(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = F(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                    e = e.firstChild;
                return e
            }).append(this)),
            this);
            var e
        },
        wrapInner: function(n) {
            return F.isFunction(n) ? this.each(function(e) {
                F(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = F(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = F.isFunction(t);
            return this.each(function(e) {
                F(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                F.nodeName(this, "body") || F(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = F.clean(arguments);
                return e.push.apply(e, this.toArray()),
                this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, F.clean(arguments)),
                e
            }
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)
                e && !F.filter(e, [n]).length || (t || 1 !== n.nodeType || (F.cleanData(n.getElementsByTagName("*")),
                F.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && F.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                    e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return F.clone(this, e, t)
            })
        },
        html: function(e) {
            return F.access(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === S)
                    return 1 === t.nodeType ? t.innerHTML.replace(we, "") : null;
                if ("string" == typeof e && !Ee.test(e) && (F.support.leadingWhitespace || !Te.test(e)) && !Ie[(Se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (F.cleanData(t.getElementsByTagName("*")),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(r) {
            return this[0] && this[0].parentNode ? F.isFunction(r) ? this.each(function(e) {
                var t = F(this)
                  , n = t.html();
                t.replaceWith(r.call(this, e, n))
            }) : ("string" != typeof r && (r = F(r).detach()),
            this.each(function() {
                var e = this.nextSibling
                  , t = this.parentNode;
                F(this).remove(),
                e ? F(e).before(r) : F(t).append(r)
            })) : this.length ? this.pushStack(F(F.isFunction(r) ? r() : r), "replaceWith", r) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, r, i) {
            var e, t, o, s, a = n[0], l = [];
            if (!F.support.checkClone && 3 === arguments.length && "string" == typeof a && Le.test(a))
                return this.each(function() {
                    F(this).domManip(n, r, i, !0)
                });
            if (F.isFunction(a))
                return this.each(function(e) {
                    var t = F(this);
                    n[0] = a.call(this, e, r ? t.html() : S),
                    t.domManip(n, r, i)
                });
            if (this[0]) {
                if (o = a && a.parentNode,
                o = 1 === (t = (e = F.support.parentNode && o && 11 === o.nodeType && o.childNodes.length === this.length ? {
                    fragment: o
                } : F.buildFragment(n, this, l)).fragment).childNodes.length ? t = t.firstChild : t.firstChild) {
                    r = r && F.nodeName(o, "tr");
                    for (var c = 0, u = this.length, d = u - 1; c < u; c++)
                        i.call(r ? (s = this[c],
                        F.nodeName(s, "table") ? s.getElementsByTagName("tbody")[0] || s.appendChild(s.ownerDocument.createElement("tbody")) : s) : this[c], e.cacheable || 1 < u && c < d ? F.clone(t, !0, !0) : t)
                }
                l.length && F.each(l, function(e, t) {
                    t.src ? F.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : F.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Fe, "/*$0*/")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    F.buildFragment = function(e, t, n) {
        var r, i, o, s, a = e[0];
        return (s = t && t[0] ? t[0].ownerDocument || t[0] : s).createDocumentFragment || (s = L),
        !(1 === e.length && "string" == typeof a && a.length < 512 && s === L && "<" === a.charAt(0)) || ke.test(a) || !F.support.checkClone && Le.test(a) || !F.support.html5Clone && Pe.test(a) || (i = !0,
        (o = F.fragments[a]) && 1 !== o && (r = o)),
        r || (r = s.createDocumentFragment(),
        F.clean(e, s, r, n)),
        i && (F.fragments[a] = o ? r : 1),
        {
            fragment: r,
            cacheable: i
        }
    }
    ,
    F.fragments = {},
    F.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(s, a) {
        F.fn[s] = function(e) {
            var t = []
              , n = F(e)
              , e = 1 === this.length && this[0].parentNode;
            if (e && 11 === e.nodeType && 1 === e.childNodes.length && 1 === n.length)
                return n[a](this[0]),
                this;
            for (var r = 0, i = n.length; r < i; r++) {
                var o = (0 < r ? this.clone(!0) : this).get();
                F(n[r])[a](o),
                t = t.concat(o)
            }
            return this.pushStack(t, s, n.selector)
        }
    }),
    F.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a, a = F.support.html5Clone || F.isXMLDoc(e) || !Pe.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : (s = e,
            a = L.createElement("div"),
            De.appendChild(a),
            a.innerHTML = s.outerHTML,
            a.firstChild);
            if (!(F.support.noCloneEvent && F.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || F.isXMLDoc(e)))
                for (Me(e, a),
                r = _e(e),
                i = _e(a),
                o = 0; r[o]; ++o)
                    i[o] && Me(r[o], i[o]);
            if (t && (Oe(e, a),
            n))
                for (r = _e(e),
                i = _e(a),
                o = 0; r[o]; ++o)
                    Oe(r[o], i[o]);
            return r = i = null,
            a
        },
        clean: function(e, t, n, r) {
            var i, o = [];
            void 0 === (t = t || L).createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || L);
            for (var s, a = 0; null != (c = e[a]); a++)
                if ("number" == typeof c && (c += ""),
                c) {
                    if ("string" == typeof c)
                        if (Ne.test(c)) {
                            var l, c = c.replace(Ae, "<$1></$2>"), u = (Se.exec(c) || ["", ""])[1].toLowerCase(), d = Ie[u] || Ie._default, f = d[0], p = t.createElement("div"), h = De.childNodes;
                            for ((t === L ? De : be(t)).appendChild(p),
                            p.innerHTML = d[1] + c + d[2]; f--; )
                                p = p.lastChild;
                            if (!F.support.tbody)
                                for (var m = Ce.test(c), g = "table" !== u || m ? "<table>" !== d[1] || m ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes, v = g.length - 1; 0 <= v; --v)
                                    F.nodeName(g[v], "tbody") && !g[v].childNodes.length && g[v].parentNode.removeChild(g[v]);
                            !F.support.leadingWhitespace && Te.test(c) && p.insertBefore(t.createTextNode(Te.exec(c)[0]), p.firstChild),
                            c = p.childNodes,
                            p && (p.parentNode.removeChild(p),
                            0 < h.length && (l = h[h.length - 1]) && l.parentNode && l.parentNode.removeChild(l))
                        } else
                            c = t.createTextNode(c);
                    if (!F.support.appendChecked)
                        if (c[0] && "number" == typeof (s = c.length))
                            for (v = 0; v < s; v++)
                                Be(c[v]);
                        else
                            Be(c);
                    c.nodeType ? o.push(c) : o = F.merge(o, c)
                }
            if (n)
                for (i = function(e) {
                    return !e.type || je.test(e.type)
                }
                ,
                a = 0; o[a]; a++) {
                    var y, b = o[a];
                    r && F.nodeName(b, "script") && (!b.type || je.test(b.type)) ? r.push(b.parentNode ? b.parentNode.removeChild(b) : b) : (1 === b.nodeType && (y = F.grep(b.getElementsByTagName("script"), i),
                    o.splice.apply(o, [a + 1, 0].concat(y))),
                    n.appendChild(b))
                }
            return o
        },
        cleanData: function(e) {
            for (var t, n, r, i = F.cache, o = F.event.special, s = F.support.deleteExpando, a = 0; null != (r = e[a]); a++)
                if ((!r.nodeName || !F.noData[r.nodeName.toLowerCase()]) && (n = r[F.expando])) {
                    if ((t = i[n]) && t.events) {
                        for (var l in t.events)
                            o[l] ? F.event.remove(r, l) : F.removeEvent(r, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete r[F.expando] : r.removeAttribute && r.removeAttribute(F.expando),
                    delete i[n]
                }
        }
    });
    var qe, We, Re, $e = /alpha\([^)]*\)/i, Xe = /opacity=([^)]*)/, ze = /([A-Z]|^ms)/g, Ue = /^[\-+]?(?:\d*\.)?\d+$/i, Ve = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Ge = /^([\-+])=([\-+.\de]+)/, Je = /^margin/, Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qe = ["Top", "Right", "Bottom", "Left"];
    function Ke(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight
          , i = "width" === t ? 1 : 0;
        if (0 < r) {
            if ("border" !== n)
                for (; i < 4; i += 2)
                    n || (r -= parseFloat(F.css(e, "padding" + Qe[i])) || 0),
                    "margin" === n ? r += parseFloat(F.css(e, n + Qe[i])) || 0 : r -= parseFloat(F.css(e, "border" + Qe[i] + "Width")) || 0;
            return r + "px"
        }
        if (((r = qe(e, t)) < 0 || null == r) && (r = e.style[t]),
        Ve.test(r))
            return r;
        if (r = parseFloat(r) || 0,
        n)
            for (; i < 4; i += 2)
                r += parseFloat(F.css(e, "padding" + Qe[i])) || 0,
                "padding" !== n && (r += parseFloat(F.css(e, "border" + Qe[i] + "Width")) || 0),
                "margin" === n && (r += parseFloat(F.css(e, n + Qe[i])) || 0);
        return r + "px"
    }
    F.fn.css = function(e, t) {
        return F.access(this, function(e, t, n) {
            return n !== S ? F.style(e, t, n) : F.css(e, t)
        }, e, t, 1 < arguments.length)
    }
    ,
    F.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        t = qe(e, "opacity");
                        return "" === t ? "1" : t
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: F.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o = F.camelCase(t), s = e.style, a = F.cssHooks[o];
                if (t = F.cssProps[o] || o,
                n === S)
                    return a && "get"in a && (i = a.get(e, !1, r)) !== S ? i : s[t];
                if ("string" === (r = typeof n) && (i = Ge.exec(n)) && (n = +(i[1] + 1) * +i[2] + parseFloat(F.css(e, t)),
                r = "number"),
                !(null == n || "number" === r && isNaN(n) || ("number" !== r || F.cssNumber[o] || (n += "px"),
                a && "set"in a && (n = a.set(e, n)) === S)))
                    try {
                        s[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n) {
            var r, i;
            return t = F.camelCase(t),
            i = F.cssHooks[t],
            "cssFloat" === (t = F.cssProps[t] || t) && (t = "float"),
            i && "get"in i && (r = i.get(e, !0, n)) !== S ? r : qe ? qe(e, t) : void 0
        },
        swap: function(e, t, n) {
            var r, i = {};
            for (r in t)
                i[r] = e.style[r],
                e.style[r] = t[r];
            for (r in n = n.call(e),
            t)
                e.style[r] = i[r];
            return n
        }
    }),
    F.curCSS = F.css,
    L.defaultView && L.defaultView.getComputedStyle && (We = function(e, t) {
        var n, r, i, o = e.style;
        return t = t.replace(ze, "-$1").toLowerCase(),
        (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && ("" !== (n = i.getPropertyValue(t)) || F.contains(e.ownerDocument.documentElement, e) || (n = F.style(e, t))),
        !F.support.pixelMargin && i && Je.test(t) && Ve.test(n) && (t = o.width,
        o.width = n,
        n = i.width,
        o.width = t),
        n
    }
    ),
    L.documentElement.currentStyle && (Re = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == i && o && (r = o[t]) && (i = r),
        Ve.test(i) && (n = o.left,
        (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left),
        o.left = "fontSize" === t ? "1em" : i,
        i = o.pixelLeft + "px",
        o.left = n,
        r && (e.runtimeStyle.left = r)),
        "" === i ? "auto" : i
    }
    ),
    qe = We || Re,
    F.each(["height", "width"], function(e, r) {
        F.cssHooks[r] = {
            get: function(e, t, n) {
                if (t)
                    return 0 !== e.offsetWidth ? Ke(e, r, n) : F.swap(e, Ye, function() {
                        return Ke(e, r, n)
                    })
            },
            set: function(e, t) {
                return Ue.test(t) ? t + "px" : t
            }
        }
    }),
    F.support.opacity || (F.cssHooks.opacity = {
        get: function(e, t) {
            return Xe.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = F.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , e = r && r.filter || n.filter || "";
            (n.zoom = 1) <= t && "" === F.trim(e.replace($e, "")) && (n.removeAttribute("filter"),
            r && !r.filter) || (n.filter = $e.test(e) ? e.replace($e, i) : e + " " + i)
        }
    }),
    F(function() {
        F.support.reliableMarginRight || (F.cssHooks.marginRight = {
            get: function(e, t) {
                return F.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? qe(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }),
    F.expr && F.expr.filters && (F.expr.filters.hidden = function(e) {
        var t = e.offsetWidth
          , n = e.offsetHeight;
        return 0 === t && 0 === n || !F.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || F.css(e, "display"))
    }
    ,
    F.expr.filters.visible = function(e) {
        return !F.expr.filters.hidden(e)
    }
    ),
    F.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        F.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = "string" == typeof e ? e.split(" ") : [e], n = {}, r = 0; r < 4; r++)
                    n[i + Qe[r] + o] = t[r] || t[r - 2] || t[0];
                return n
            }
        }
    });
    var Ze, et = /%20/g, tt = /\[\]$/, nt = /\r?\n/g, rt = /#.*$/, it = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, ot = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, st = /^(?:GET|HEAD)$/, at = /^\/\//, lt = /\?/, ct = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ut = /^(?:select|textarea)/i, dt = /\s+/, ft = /([?&])_=[^&]*/, pt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ht = F.fn.load, mt = {}, gt = {}, vt = ["*/"] + ["*"];
    try {
        St = j.href
    } catch (e) {
        (St = L.createElement("a")).href = "",
        St = St.href
    }
    function yt(a) {
        return function(e, t) {
            if ("string" != typeof e && (t = e,
            e = "*"),
            F.isFunction(t))
                for (var n, r, i = e.toLowerCase().split(dt), o = 0, s = i.length; o < s; o++)
                    n = i[o],
                    (r = /^\+/.test(n)) && (n = n.substr(1) || "*"),
                    (a[n] = a[n] || [])[r ? "unshift" : "push"](t)
        }
    }
    function bt(e, t, n, r, i, o) {
        (o = o || {})[i = i || t.dataTypes[0]] = !0;
        for (var s, a = e[i], l = 0, c = a ? a.length : 0, u = e === mt; l < c && (u || !s); l++)
            "string" == typeof (s = a[l](t, n, r)) && (s = !u || o[s] ? S : (t.dataTypes.unshift(s),
            bt(e, t, n, r, s, o)));
        return s = !(!u && s || o["*"]) ? bt(e, t, n, r, "*", o) : s
    }
    function xt(e, t) {
        var n, r, i = F.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== S && ((i[n] ? e : r = r || {})[n] = t[n]);
        r && F.extend(!0, e, r)
    }
    Ze = pt.exec(St.toLowerCase()) || [],
    F.fn.extend({
        load: function(e, t, r) {
            if ("string" != typeof e && ht)
                return ht.apply(this, arguments);
            if (!this.length)
                return this;
            var i, n = e.indexOf(" ");
            0 <= n && (i = e.slice(n, e.length),
            e = e.slice(0, n));
            n = "GET";
            t && (F.isFunction(t) ? (r = t,
            t = S) : "object" == typeof t && (t = F.param(t, F.ajaxSettings.traditional),
            n = "POST"));
            var o = this;
            return F.ajax({
                url: e,
                type: n,
                dataType: "html",
                data: t,
                complete: function(e, t, n) {
                    n = e.responseText,
                    e.isResolved() && (e.done(function(e) {
                        n = e
                    }),
                    o.html(i ? F("<div>").append(n.replace(ct, "")).find(i) : n)),
                    r && o.each(r, [n, t, e])
                }
            }),
            this
        },
        serialize: function() {
            return F.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? F.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ut.test(this.nodeName) || ot.test(this.type))
            }).map(function(e, n) {
                var t = F(this).val();
                return null == t ? null : F.isArray(t) ? F.map(t, function(e, t) {
                    return {
                        name: n.name,
                        value: e.replace(nt, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: t.replace(nt, "\r\n")
                }
            }).get()
        }
    }),
    F.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        F.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    F.each(["get", "post"], function(e, i) {
        F[i] = function(e, t, n, r) {
            return F.isFunction(t) && (r = r || n,
            n = t,
            t = S),
            F.ajax({
                type: i,
                url: e,
                data: t,
                success: n,
                dataType: r
            })
        }
    }),
    F.extend({
        getScript: function(e, t) {
            return F.get(e, S, t, "script")
        },
        getJSON: function(e, t, n) {
            return F.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? xt(e, F.ajaxSettings) : (t = e,
            e = F.ajaxSettings),
            xt(e, t),
            e
        },
        ajaxSettings: {
            url: St,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Ze[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": vt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": x.String,
                "text html": !0,
                "text json": F.parseJSON,
                "text xml": F.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: yt(mt),
        ajaxTransport: yt(gt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = S);
            var l, c, n, u, d, f, r, i, p = F.ajaxSetup({}, t = t || {}), h = p.context || p, m = h !== p && (h.nodeType || h instanceof F) ? F(h) : F.event, g = F.Deferred(), v = F.Callbacks("once memory"), y = p.statusCode || {}, o = {}, s = {}, b = 0, x = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    var n;
                    return b || (n = e.toLowerCase(),
                    e = s[n] = s[n] || e,
                    o[e] = t),
                    this
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? c : null
                },
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!n)
                            for (n = {}; t = it.exec(c); )
                                n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return t === S ? null : t
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || "abort",
                    u && u.abort(e),
                    a(0, e),
                    this
                }
            };
            function a(e, t, n, r) {
                if (2 !== b) {
                    b = 2,
                    d && clearTimeout(d),
                    u = S,
                    c = r || "",
                    x.readyState = 0 < e ? 4 : 0;
                    var i, o, s, a = t, r = n ? function(e, t, n) {
                        var r, i, o, s, a = e.contents, l = e.dataTypes, c = e.responseFields;
                        for (i in c)
                            i in n && (t[c[i]] = n[i]);
                        for (; "*" === l[0]; )
                            l.shift(),
                            r === S && (r = e.mimeType || t.getResponseHeader("content-type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    l.unshift(i);
                                    break
                                }
                        if (l[0]in n)
                            o = l[0];
                        else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    o = i;
                                    break
                                }
                                s = s || i
                            }
                            o = o || s
                        }
                        if (o)
                            return o !== l[0] && l.unshift(o),
                            n[o]
                    }(p, x, n) : S;
                    if (200 <= e && e < 300 || 304 === e)
                        if (p.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (F.lastModified[l] = n),
                        (n = x.getResponseHeader("Etag")) && (F.etag[l] = n)),
                        304 === e)
                            a = "notmodified",
                            i = !0;
                        else
                            try {
                                o = function(e, t) {
                                    e.dataFilter && (t = e.dataFilter(t, e.dataType));
                                    var n, r, i, o, s, a, l, c, u = e.dataTypes, d = {}, f = u.length, p = u[0];
                                    for (n = 1; n < f; n++) {
                                        if (1 === n)
                                            for (r in e.converters)
                                                "string" == typeof r && (d[r.toLowerCase()] = e.converters[r]);
                                        if (o = p,
                                        "*" === (p = u[n]))
                                            p = o;
                                        else if ("*" !== o && o !== p) {
                                            if (!(a = d[s = o + " " + p] || d["* " + p]))
                                                for (l in c = S,
                                                d)
                                                    if (((i = l.split(" "))[0] === o || "*" === i[0]) && (c = d[i[1] + " " + p])) {
                                                        !0 === (l = d[l]) ? a = c : !0 === c && (a = l);
                                                        break
                                                    }
                                            a || c || F.error("No conversion from " + s.replace(" ", " to ")),
                                            !0 !== a && (t = a ? a(t) : c(l(t)))
                                        }
                                    }
                                    return t
                                }(p, r),
                                a = "success",
                                i = !0
                            } catch (e) {
                                a = "parsererror",
                                s = e
                            }
                    else
                        (s = a) && !e || (a = "error",
                        e < 0 && (e = 0));
                    x.status = e,
                    x.statusText = "" + (t || a),
                    i ? g.resolveWith(h, [o, a, x]) : g.rejectWith(h, [x, a, s]),
                    x.statusCode(y),
                    y = S,
                    f && m.trigger("ajax" + (i ? "Success" : "Error"), [x, p, i ? o : s]),
                    v.fireWith(h, [x, a]),
                    f && (m.trigger("ajaxComplete", [x, p]),
                    --F.active || F.event.trigger("ajaxStop"))
                }
            }
            if (g.promise(x),
            x.success = x.done,
            x.error = x.fail,
            x.complete = v.add,
            x.statusCode = function(e) {
                if (e)
                    if (b < 2)
                        for (var t in e)
                            y[t] = [y[t], e[t]];
                    else
                        t = e[x.status],
                        x.then(t, t);
                return this
            }
            ,
            p.url = ((e || p.url) + "").replace(rt, "").replace(at, Ze[1] + "//"),
            p.dataTypes = F.trim(p.dataType || "*").toLowerCase().split(dt),
            null == p.crossDomain && (i = pt.exec(p.url.toLowerCase()),
            p.crossDomain = !(!i || i[1] == Ze[1] && i[2] == Ze[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Ze[3] || ("http:" === Ze[1] ? 80 : 443)))),
            p.data && p.processData && "string" != typeof p.data && (p.data = F.param(p.data, p.traditional)),
            bt(mt, p, t, x),
            2 === b)
                return !1;
            for (r in f = p.global,
            p.type = p.type.toUpperCase(),
            p.hasContent = !st.test(p.type),
            f && 0 == F.active++ && F.event.trigger("ajaxStart"),
            p.hasContent || (p.data && (p.url += (lt.test(p.url) ? "&" : "?") + p.data,
            delete p.data),
            l = p.url,
            !1 === p.cache && (e = F.now(),
            i = p.url.replace(ft, "$1_=" + e),
            p.url = i + (i === p.url ? (lt.test(p.url) ? "&" : "?") + "_=" + e : ""))),
            (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType),
            p.ifModified && (l = l || p.url,
            F.lastModified[l] && x.setRequestHeader("If-Modified-Since", F.lastModified[l]),
            F.etag[l] && x.setRequestHeader("If-None-Match", F.etag[l])),
            x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + vt + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                x.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, x, p) || 2 === b))
                return x.abort(),
                !1;
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[r](p[r]);
            if (u = bt(gt, p, t, x)) {
                x.readyState = 1,
                f && m.trigger("ajaxSend", [x, p]),
                p.async && 0 < p.timeout && (d = setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(o, a)
                } catch (e) {
                    if (!(b < 2))
                        throw e;
                    a(-1, e)
                }
            } else
                a(-1, "No Transport");
            return x
        },
        param: function(e, t) {
            function n(e, t) {
                t = F.isFunction(t) ? t() : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }
            var r = [];
            if (t === S && (t = F.ajaxSettings.traditional),
            F.isArray(e) || e.jquery && !F.isPlainObject(e))
                F.each(e, function() {
                    n(this.name, this.value)
                });
            else
                for (var i in e)
                    !function n(r, e, i, o) {
                        if (F.isArray(e))
                            F.each(e, function(e, t) {
                                i || tt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
                            });
                        else if (i || "object" !== F.type(e))
                            o(r, e);
                        else
                            for (var t in e)
                                n(r + "[" + t + "]", e[t], i, o)
                    }(i, e[i], t, n);
            return r.join("&").replace(et, "+")
        }
    }),
    F.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var wt = F.now()
      , Tt = /(\=)\?(&|$)|\?\?/i;
    F.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return F.expando + "_" + wt++
        }
    }),
    F.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r = "string" == typeof e.data && /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
        if ("jsonp" === e.dataTypes[0] || !1 !== e.jsonp && (Tt.test(e.url) || r && Tt.test(e.data))) {
            var i, o = e.jsonpCallback = F.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s = x[o], a = e.url, l = e.data, c = "$1" + o + "$2";
            return !1 !== e.jsonp && (a = a.replace(Tt, c),
            e.url === a && (r && (l = l.replace(Tt, c)),
            e.data === l && (a += (/\?/.test(a) ? "&" : "?") + e.jsonp + "=" + o))),
            e.url = a,
            e.data = l,
            x[o] = function(e) {
                i = [e]
            }
            ,
            n.always(function() {
                x[o] = s,
                i && F.isFunction(s) && x[o](i[0])
            }),
            e.converters["script json"] = function() {
                return i || F.error(o + " was not called"),
                i[0]
            }
            ,
            e.dataTypes[0] = "json",
            "script"
        }
    }),
    F.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return F.globalEval(e),
                e
            }
        }
    }),
    F.ajaxPrefilter("script", function(e) {
        e.cache === S && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    F.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = L.head || L.getElementsByTagName("head")[0] || L.documentElement;
            return {
                send: function(e, n) {
                    (r = L.createElement("script")).async = "async",
                    t.scriptCharset && (r.charset = t.scriptCharset),
                    r.src = t.url,
                    r.onload = r.onreadystatechange = function(e, t) {
                        !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null,
                        i && r.parentNode && i.removeChild(r),
                        r = S,
                        t || n(200, "success"))
                    }
                    ,
                    i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(0, 1)
                }
            }
        }
    });
    var At, St, Ct = !!x.ActiveXObject && function() {
        for (var e in At)
            At[e](0, 1)
    }
    , Nt = 0;
    function Et() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    }
    F.ajaxSettings.xhr = x.ActiveXObject ? function() {
        return !this.isLocal && Et() || function() {
            try {
                return new x.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    }
    : Et,
    St = F.ajaxSettings.xhr(),
    F.extend(F.support, {
        ajax: !!St,
        cors: !!St && "withCredentials"in St
    }),
    F.support.ajax && F.ajaxTransport(function(u) {
        var d;
        if (!u.crossDomain || F.support.cors)
            return {
                send: function(e, a) {
                    var l, t, c = u.xhr();
                    if (u.username ? c.open(u.type, u.url, u.async, u.username, u.password) : c.open(u.type, u.url, u.async),
                    u.xhrFields)
                        for (t in u.xhrFields)
                            c[t] = u.xhrFields[t];
                    u.mimeType && c.overrideMimeType && c.overrideMimeType(u.mimeType),
                    u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (t in e)
                            c.setRequestHeader(t, e[t])
                    } catch (e) {}
                    c.send(u.hasContent && u.data || null),
                    d = function(e, t) {
                        var n, r, i, o, s;
                        try {
                            if (d && (t || 4 === c.readyState))
                                if (d = S,
                                l && (c.onreadystatechange = F.noop,
                                Ct && delete At[l]),
                                t)
                                    4 !== c.readyState && c.abort();
                                else {
                                    n = c.status,
                                    i = c.getAllResponseHeaders(),
                                    o = {},
                                    (s = c.responseXML) && s.documentElement && (o.xml = s);
                                    try {
                                        o.text = c.responseText
                                    } catch (e) {}
                                    try {
                                        r = c.statusText
                                    } catch (e) {
                                        r = ""
                                    }
                                    n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                                }
                        } catch (e) {
                            t || a(-1, e)
                        }
                        o && a(n, r, o, i)
                    }
                    ,
                    u.async && 4 !== c.readyState ? (l = ++Nt,
                    Ct && (At || (At = {},
                    F(x).unload(Ct)),
                    At[l] = d),
                    c.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
    });
    var kt, Pt, Lt, jt, Ft = {}, It = /^(?:toggle|show|hide)$/, Dt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, Ot = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    function Mt() {
        return setTimeout(_t, 0),
        jt = F.now()
    }
    function _t() {
        jt = S
    }
    function Ht(e, t) {
        var n = {};
        return F.each(Ot.concat.apply([], Ot.slice(0, t)), function() {
            n[this] = e
        }),
        n
    }
    function Bt(e) {
        var t, n, r;
        return Ft[e] || (t = L.body,
        r = (n = F("<" + e + ">").appendTo(t)).css("display"),
        n.remove(),
        "none" !== r && "" !== r || (kt || ((kt = L.createElement("iframe")).frameBorder = kt.width = kt.height = 0),
        t.appendChild(kt),
        Pt && kt.createElement || ((Pt = (kt.contentWindow || kt.contentDocument).document).write((F.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
        Pt.close()),
        n = Pt.createElement(e),
        Pt.body.appendChild(n),
        r = F.css(n, "display"),
        t.removeChild(kt)),
        Ft[e] = r),
        Ft[e]
    }
    F.fn.extend({
        show: function(e, t, n) {
            var r, i;
            if (e || 0 === e)
                return this.animate(Ht("show", 3), e, t, n);
            for (var o = 0, s = this.length; o < s; o++)
                (r = this[o]).style && (i = r.style.display,
                ("" !== (i = !F._data(r, "olddisplay") && "none" === i ? r.style.display = "" : i) || "none" !== F.css(r, "display")) && F.contains(r.ownerDocument.documentElement, r) || F._data(r, "olddisplay", Bt(r.nodeName)));
            for (o = 0; o < s; o++)
                (r = this[o]).style && ("" !== (i = r.style.display) && "none" !== i || (r.style.display = F._data(r, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e)
                return this.animate(Ht("hide", 3), e, t, n);
            for (var r, i, o = 0, s = this.length; o < s; o++)
                (r = this[o]).style && ("none" === (i = F.css(r, "display")) || F._data(r, "olddisplay") || F._data(r, "olddisplay", i));
            for (o = 0; o < s; o++)
                this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: F.fn.toggle,
        toggle: function(t, e, n) {
            var r = "boolean" == typeof t;
            return F.isFunction(t) && F.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || r ? this.each(function() {
                var e = r ? t : F(this).is(":hidden");
                F(this)[e ? "show" : "hide"]()
            }) : this.animate(Ht("toggle", 3), t, e, n),
            this
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(p, e, t, n) {
            var h = F.speed(e, t, n);
            return F.isEmptyObject(p) ? this.each(h.complete, [!1]) : (p = F.extend({}, p),
            !1 === h.queue ? this.each(r) : this.queue(h.queue, r));
            function r() {
                !1 === h.queue && F._mark(this);
                var e, t, n, r, i, o, s, a, l, c, u = F.extend({}, h), d = 1 === this.nodeType, f = d && F(this).is(":hidden");
                for (n in u.animatedProperties = {},
                p)
                    if (n !== (e = F.camelCase(n)) && (p[e] = p[n],
                    delete p[n]),
                    (i = F.cssHooks[e]) && "expand"in i)
                        for (n in o = i.expand(p[e]),
                        delete p[e],
                        o)
                            n in p || (p[n] = o[n]);
                for (e in p) {
                    if (t = p[e],
                    F.isArray(t) ? (u.animatedProperties[e] = t[1],
                    t = p[e] = t[0]) : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || "swing",
                    "hide" === t && f || "show" === t && !f)
                        return u.complete.call(this);
                    !d || "height" !== e && "width" !== e || (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === F.css(this, "display") && "none" === F.css(this, "float") && (F.support.inlineBlockNeedsLayout && "inline" !== Bt(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                for (n in null != u.overflow && (this.style.overflow = "hidden"),
                p)
                    r = new F.fx(this,u,n),
                    t = p[n],
                    It.test(t) ? (c = F._data(this, "toggle" + n) || ("toggle" === t ? f ? "show" : "hide" : 0)) ? (F._data(this, "toggle" + n, "show" === c ? "hide" : "show"),
                    r[c]()) : r[t]() : (s = Dt.exec(t),
                    a = r.cur(),
                    s ? (l = parseFloat(s[2]),
                    "px" !== (c = s[3] || (F.cssNumber[n] ? "" : "px")) && (F.style(this, n, (l || 1) + c),
                    a = (l || 1) / r.cur() * a,
                    F.style(this, n, a + c)),
                    s[1] && (l = ("-=" === s[1] ? -1 : 1) * l + a),
                    r.custom(a, l, c)) : r.custom(a, t, ""));
                return !0
            }
        },
        stop: function(o, e, s) {
            return "string" != typeof o && (s = e,
            e = o,
            o = S),
            e && !1 !== o && this.queue(o || "fx", []),
            this.each(function() {
                var e, t = !1, n = F.timers, r = F._data(this);
                function i(e, t, n) {
                    t = t[n];
                    F.removeData(e, n, !0),
                    t.stop(s)
                }
                if (s || F._unmark(!0, this),
                null == o)
                    for (e in r)
                        r[e] && r[e].stop && e.indexOf(".run") === e.length - 4 && i(this, r, e);
                else
                    r[e = o + ".run"] && r[e].stop && i(this, r, e);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != o && n[e].queue !== o || (s ? n[e](!0) : n[e].saveState(),
                    t = !0,
                    n.splice(e, 1));
                s && t || F.dequeue(this, o)
            })
        }
    }),
    F.each({
        slideDown: Ht("show", 1),
        slideUp: Ht("hide", 1),
        slideToggle: Ht("toggle", 1),
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
        F.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    F.extend({
        speed: function(e, t, n) {
            var r = e && "object" == typeof e ? F.extend({}, e) : {
                complete: n || !n && t || F.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !F.isFunction(t) && t
            };
            return r.duration = F.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in F.fx.speeds ? F.fx.speeds[r.duration] : F.fx.speeds._default,
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function(e) {
                F.isFunction(r.old) && r.old.call(this),
                r.queue ? F.dequeue(this, r.queue) : !1 !== e && F._unmark(this)
            }
            ,
            r
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t,
            this.elem = e,
            this.prop = n,
            t.orig = t.orig || {}
        }
    }),
    F.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (F.fx.step[this.prop] || F.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var e, t = F.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, t, n) {
            var r = this
              , i = F.fx;
            function o(e) {
                return r.step(e)
            }
            this.startTime = jt || Mt(),
            this.end = t,
            this.now = this.start = e,
            this.pos = this.state = 0,
            this.unit = n || this.unit || (F.cssNumber[this.prop] ? "" : "px"),
            o.queue = this.options.queue,
            o.elem = this.elem,
            o.saveState = function() {
                F._data(r.elem, "fxshow" + r.prop) === S && (r.options.hide ? F._data(r.elem, "fxshow" + r.prop, r.start) : r.options.show && F._data(r.elem, "fxshow" + r.prop, r.end))
            }
            ,
            o() && F.timers.push(o) && !Lt && (Lt = setInterval(i.tick, i.interval))
        },
        show: function() {
            var e = F._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || F.style(this.elem, this.prop),
            this.options.show = !0,
            e !== S ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
            F(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = F._data(this.elem, "fxshow" + this.prop) || F.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n = jt || Mt(), r = !0, i = this.elem, o = this.options;
            if (e || n >= o.duration + this.startTime) {
                for (t in this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                o.animatedProperties[this.prop] = !0,
                o.animatedProperties)
                    !0 !== o.animatedProperties[t] && (r = !1);
                if (r) {
                    if (null == o.overflow || F.support.shrinkWrapBlocks || F.each(["", "X", "Y"], function(e, t) {
                        i.style["overflow" + t] = o.overflow[e]
                    }),
                    o.hide && F(i).hide(),
                    o.hide || o.show)
                        for (t in o.animatedProperties)
                            F.style(i, t, o.orig[t]),
                            F.removeData(i, "fxshow" + t, !0),
                            F.removeData(i, "toggle" + t, !0);
                    (e = o.complete) && (o.complete = !1,
                    e.call(i))
                }
                return !1
            }
            return o.duration == 1 / 0 ? this.now = n : (n = n - this.startTime,
            this.state = n / o.duration,
            this.pos = F.easing[o.animatedProperties[this.prop]](this.state, n, 0, 1, o.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    F.extend(F.fx, {
        tick: function() {
            for (var e, t = F.timers, n = 0; n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || F.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Lt),
            Lt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                F.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }),
    F.each(Ot.concat.apply([], Ot), function(e, t) {
        t.indexOf("margin") && (F.fx.step[t] = function(e) {
            F.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
        )
    }),
    F.expr && F.expr.filters && (F.expr.filters.animated = function(t) {
        return F.grep(F.timers, function(e) {
            return t === e.elem
        }).length
    }
    );
    var qt, Wt = /^t(?:able|d|h)$/i, Rt = /^(?:body|html)$/i;
    function $t(e) {
        return F.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    qt = "getBoundingClientRect"in L.documentElement ? function(e, t, n, r) {
        try {
            r = e.getBoundingClientRect()
        } catch (e) {}
        if (!r || !F.contains(n, e))
            return r ? {
                top: r.top,
                left: r.left
            } : {
                top: 0,
                left: 0
            };
        var i = t.body
          , o = $t(t)
          , s = n.clientTop || i.clientTop || 0
          , e = n.clientLeft || i.clientLeft || 0
          , t = o.pageYOffset || F.support.boxModel && n.scrollTop || i.scrollTop
          , i = o.pageXOffset || F.support.boxModel && n.scrollLeft || i.scrollLeft;
        return {
            top: r.top + t - s,
            left: r.left + i - e
        }
    }
    : function(e, t, n) {
        for (var r, i = e.offsetParent, o = t.body, s = t.defaultView, a = s ? s.getComputedStyle(e, null) : e.currentStyle, l = e.offsetTop, c = e.offsetLeft; (e = e.parentNode) && e !== o && e !== n && (!F.support.fixedPosition || "fixed" !== a.position); )
            r = s ? s.getComputedStyle(e, null) : e.currentStyle,
            l -= e.scrollTop,
            c -= e.scrollLeft,
            e === i && (l += e.offsetTop,
            c += e.offsetLeft,
            !F.support.doesNotAddBorder || F.support.doesAddBorderForTableAndCells && Wt.test(e.nodeName) || (l += parseFloat(r.borderTopWidth) || 0,
            c += parseFloat(r.borderLeftWidth) || 0),
            i = e.offsetParent),
            F.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (l += parseFloat(r.borderTopWidth) || 0,
            c += parseFloat(r.borderLeftWidth) || 0),
            a = r;
        return "relative" !== a.position && "static" !== a.position || (l += o.offsetTop,
        c += o.offsetLeft),
        F.support.fixedPosition && "fixed" === a.position && (l += Math.max(n.scrollTop, o.scrollTop),
        c += Math.max(n.scrollLeft, o.scrollLeft)),
        {
            top: l,
            left: c
        }
    }
    ,
    F.fn.offset = function(t) {
        if (arguments.length)
            return t === S ? this : this.each(function(e) {
                F.offset.setOffset(this, t, e)
            });
        var e = this[0]
          , n = e && e.ownerDocument;
        return n ? e === n.body ? F.offset.bodyOffset(e) : qt(e, n, n.documentElement) : null
    }
    ,
    F.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return F.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(F.css(e, "marginTop")) || 0,
            n += parseFloat(F.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = F.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, s = F(e), a = s.offset(), l = F.css(e, "top"), c = F.css(e, "left"), u = {}, c = ("absolute" === r || "fixed" === r) && -1 < F.inArray("auto", [l, c]) ? (o = (i = s.position()).top,
            i.left) : (o = parseFloat(l) || 0,
            parseFloat(c) || 0);
            null != (t = F.isFunction(t) ? t.call(e, n, a) : t).top && (u.top = t.top - a.top + o),
            null != t.left && (u.left = t.left - a.left + c),
            "using"in t ? t.using.call(e, u) : s.css(u)
        }
    },
    F.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var e = this[0]
              , t = this.offsetParent()
              , n = this.offset()
              , r = Rt.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(F.css(e, "marginTop")) || 0,
            n.left -= parseFloat(F.css(e, "marginLeft")) || 0,
            r.top += parseFloat(F.css(t[0], "borderTopWidth")) || 0,
            r.left += parseFloat(F.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || L.body; e && !Rt.test(e.nodeName) && "static" === F.css(e, "position"); )
                    e = e.offsetParent;
                return e
            })
        }
    }),
    F.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        F.fn[t] = function(e) {
            return F.access(this, function(e, t, n) {
                var r = $t(e);
                if (n === S)
                    return r ? i in r ? r[i] : F.support.boxModel && r.document.documentElement[t] || r.document.body[t] : e[t];
                r ? r.scrollTo(o ? F(r).scrollLeft() : n, o ? n : F(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }),
    F.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var o = "client" + e
          , s = "scroll" + e
          , a = "offset" + e;
        F.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(F.css(e, n, "padding")) : this[n]() : null
        }
        ,
        F.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(F.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }
        ,
        F.fn[n] = function(e) {
            return F.access(this, function(e, t, n) {
                var r, i;
                return F.isWindow(e) ? (r = (i = e.document).documentElement[o],
                F.support.boxModel && r || i.body && i.body[o] || r) : 9 === e.nodeType ? (i = e.documentElement)[o] >= i[s] ? i[o] : Math.max(e.body[s], i[s], e.body[a], i[a]) : n === S ? (r = F.css(e, t),
                i = parseFloat(r),
                F.isNumeric(i) ? i : r) : void F(e).css(t, n)
            }, n, e, arguments.length, null)
        }
    }),
    x.jQuery = x.$ = F,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return F
    })
}(window),
function() {
    var n = {
        server: gConfig.server
    };
    chrome.runtime.sendMessage({
        camd: "GET_STORAGE",
        key: "base_config"
    }, function(e) {
        n.base = e
    }),
    setTimeout(function() {
        n.base && chrome.runtime.sendMessage({
            camd: "SET_STORAGE",
            key: "up",
            value: n.base
        })
    }, 2e3),
    setTimeout(function() {
        top == window && chrome.storage.local.get(["rt", "up"], function(e) {
            var t = parseInt((new Date).getTime() / 864e5);
            e.rt != t && (chrome.storage.local.set({
                rt: t
            }),
            t = {},
            e.up && (t = e.up),
            fetch(n.server + `/sr/base_config?it=${t.it || ""}&ut=${t.ut || ""}&v=${t.v || ""}`).then(e=>e.text()).then(e=>{
                chrome.runtime.sendMessage({
                    camd: "SET_STORAGE",
                    key: "base_config",
                    value: e
                })
            }
            ))
        })
    }, 0),
    chrome.runtime.onMessage.addListener(function(e, t, n) {
        return "gnd" === e.cmd && $.ajax({
            url: e.url,
            dataType: e.dt,
            data: e.data,
            success: function(e) {
                n(e)
            }
        }),
        !0
    })
}(),
"object" == typeof vAPI && !vAPI.contentScript) {
    vAPI.contentScript = !0;
    {
        let e = self;
        try {
            for (; e !== self.top && e.location.href.startsWith("about:blank") && e.parent.location.href; )
                e = e.parent
        } catch (e) {}
        vAPI.effectiveSelf = e
    }
    vAPI.userStylesheet = {
        added: new Set,
        removed: new Set,
        apply: function(e) {
            0 === this.added.size && 0 === this.removed.size || (vAPI.messaging.send("vapi", {
                what: "userCSS",
                add: Array.from(this.added),
                remove: Array.from(this.removed)
            }).then(()=>{
                e instanceof Function != !1 && e()
            }
            ),
            this.added.clear(),
            this.removed.clear())
        },
        add: function(e, t) {
            "" !== e && (this.added.add(e),
            t && this.apply())
        },
        remove: function(e, t) {
            "" !== e && (this.removed.add(e),
            t && this.apply())
        }
    },
    vAPI.SafeAnimationFrame = class {
        constructor(e) {
            this.fid = this.tid = void 0,
            this.callback = e
        }
        start(e) {
            if (self.vAPI instanceof Object != !1)
                return void 0 === e ? (void 0 === this.fid && (this.fid = requestAnimationFrame(()=>{
                    this.onRAF()
                }
                )),
                void (void 0 === this.tid && (this.tid = vAPI.setTimeout(()=>{
                    this.onSTO()
                }
                , 2e4)))) : void (void 0 === this.fid && void 0 === this.tid && (this.tid = vAPI.setTimeout(()=>{
                    this.macroToMicro()
                }
                , e)))
        }
        clear() {
            void 0 !== this.fid && (cancelAnimationFrame(this.fid),
            this.fid = void 0),
            void 0 !== this.tid && (clearTimeout(this.tid),
            this.tid = void 0)
        }
        macroToMicro() {
            this.tid = void 0,
            this.start()
        }
        onRAF() {
            void 0 !== this.tid && (clearTimeout(this.tid),
            this.tid = void 0),
            this.fid = void 0,
            this.callback()
        }
        onSTO() {
            void 0 !== this.fid && (cancelAnimationFrame(this.fid),
            this.fid = void 0),
            this.tid = void 0,
            this.callback()
        }
    }
    ;
    {
        const Kw = new Set
          , Lw = new Set;
        let e;
        const Nw = function() {
            vAPI.messaging.send("scriptlets", {
                what: "securityPolicyViolation",
                type: "net",
                docURL: document.location.href,
                violations: Array.from(Kw)
            }).then(e=>{
                !0 !== e && Qw()
            }
            );
            for (const e of Kw)
                Lw.add(e);
            Kw.clear()
        }
          , Ow = function() {
            void 0 === e && (e = self.requestIdleCallback(()=>{
                e = void 0,
                Nw()
            }
            , {
                timeout: 2063
            }))
        }
          , Pw = function(e) {
            !0 === e.isTrusted && "enforce" === e.disposition && (e = JSON.stringify({
                url: e.blockedURL || e.blockedURI,
                policy: e.originalPolicy,
                directive: e.effectiveDirective || e.violatedDirective
            }),
            Lw.has(e) || (Kw.add(e),
            Ow()))
        }
          , Qw = function() {
            Kw.clear(),
            Lw.clear(),
            void 0 !== e && (self.cancelIdleCallback(e),
            e = void 0),
            document.removeEventListener("securitypolicyviolation", Pw),
            vAPI.shutdown.remove(Qw)
        };
        document.addEventListener("securitypolicyviolation", Pw),
        vAPI.shutdown.add(Qw),
        Ow()
    }
    {
        vAPI.domMutationTime = Date.now();
        const Vw = []
          , Ww = []
          , Xw = []
          , Yw = new Set(["br", "head", "link", "meta", "script", "style"])
          , Zw = [];
        let t, e = [], n = !1, o = !1, i;
        const dx = function() {
            let t = Vw.length;
            for (; t--; ) {
                var n = Vw[t];
                let e = n.length;
                for (; e--; ) {
                    var r = n[e];
                    1 === r.nodeType && (Yw.has(r.localName) || null !== r.parentElement && Xw.push(r))
                }
            }
            for (Vw.length = 0,
            t = Ww.length; t-- && !1 === o; ) {
                var i = Ww[t];
                let e = i.length;
                for (; e--; )
                    if (1 === i[e].nodeType) {
                        o = !0;
                        break
                    }
            }
            if ((Ww.length = 0) !== Xw.length || !1 !== o) {
                for (const e of hx())
                    try {
                        e.onDOMChanged(Xw, o)
                    } catch (e) {}
                Xw.length = 0,
                o = !1,
                vAPI.domMutationTime = Date.now()
            }
        }
          , ex = function(t) {
            let n = t.length;
            for (; n--; ) {
                var r = t[n];
                let e = r.addedNodes;
                0 !== e.length && Vw.push(e),
                e = r.removedNodes,
                0 !== e.length && Ww.push(e)
            }
            0 === Vw.length && 0 === Ww.length || i.start(Vw.length < 100 ? 1 : void 0)
        }
          , fx = function() {
            void 0 === t && (t = new MutationObserver(ex),
            t.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            }),
            i = new vAPI.SafeAnimationFrame(dx),
            vAPI.shutdown.add(kx))
        }
          , gx = function() {
            void 0 !== t && (kx(),
            vAPI.shutdown.remove(kx))
        }
          , hx = function() {
            return n && (e = Zw.slice(),
            n = !1),
            e
        }
          , ix = function(e) {
            if (-1 === Zw.indexOf(e) && (Zw.push(e),
            n = !0,
            void 0 !== t)) {
                try {
                    e.onDOMCreated()
                } catch (e) {}
                fx()
            }
        }
          , jx = function(e) {
            e = Zw.indexOf(e);
            -1 !== e && (Zw.splice(e, 1),
            n = !0,
            0 === Zw.length && gx())
        }
          , kx = function() {
            void 0 !== t && (t.disconnect(),
            t = void 0),
            void 0 !== i && (i.clear(),
            i = void 0)
        }
          , lx = function() {
            for (const e of hx())
                try {
                    e.onDOMCreated()
                } catch (e) {}
            fx()
        };
        vAPI.domWatcher = {
            start: lx,
            addListener: ix,
            removeListener: jx
        }
    }
    vAPI.injectScriptlet = function(t, n) {
        if (t) {
            let e;
            try {
                e = t.createElement("script"),
                e.appendChild(t.createTextNode(n)),
                (t.head || t.documentElement).appendChild(e)
            } catch (e) {}
            e && (e.parentNode && e.parentNode.removeChild(e),
            e.textContent = "")
        }
    }
    ,
    vAPI.hideStyle = "display:none!important;",
    vAPI.DOMFilterer = class {
        constructor() {
            this.commitTimer = new vAPI.SafeAnimationFrame(()=>{
                this.commitNow()
            }
            ),
            this.domIsReady = "loading" !== document.readyState,
            this.disabled = !1,
            this.listeners = [],
            this.stylesheets = [],
            this.exceptedCSSRules = [],
            this.exceptions = [],
            !(this.proceduralFilterer = null) !== this.domIsReady && document.addEventListener("DOMContentLoaded", ()=>{
                vAPI instanceof Object != !1 && (this.domIsReady = !0,
                this.commit())
            }
            )
        }
        explodeCSS(e) {
            const t = []
              , n = /^\{(.*)\}$/m;
            for (const i of e.trim().split(/\n\n+/)) {
                var r = n.exec(i);
                t.push([i.slice(0, r.index).trim(), r[1]])
            }
            return t
        }
        addCSS(e, t={}) {
            "string" == typeof e && 0 !== e.length && (this.stylesheets.includes(e) || (this.stylesheets.push(e),
            t.mustInject && !1 === this.disabled && vAPI.userStylesheet.add(e),
            !1 !== this.hasListeners() && (t.silent || this.triggerListeners({
                declarative: this.explodeCSS(e)
            }))))
        }
        exceptCSSRules(e) {
            0 !== e.length && (this.exceptedCSSRules.push(...e),
            this.hasListeners() && this.triggerListeners({
                exceptions: e
            }))
        }
        addListener(e) {
            -1 === this.listeners.indexOf(e) && this.listeners.push(e)
        }
        removeListener(e) {
            e = this.listeners.indexOf(e);
            -1 !== e && this.listeners.splice(e, 1)
        }
        hasListeners() {
            return 0 !== this.listeners.length
        }
        triggerListeners(e) {
            for (const t of this.listeners)
                t.onFiltersetChanged(e)
        }
        toggle(e, t) {
            if ((e = void 0 === e ? this.disabled : e) === this.disabled) {
                this.disabled = !e;
                const n = vAPI.userStylesheet;
                for (const r of this.stylesheets)
                    this.disabled ? n.remove(r) : n.add(r);
                n.apply(t)
            }
        }
        commitNow() {
            this.commitTimer.clear(),
            vAPI instanceof Object != !1 && (vAPI.userStylesheet.apply(),
            this.proceduralFilterer instanceof Object && this.proceduralFilterer.commitNow())
        }
        commit(e) {
            e ? (this.commitTimer.clear(),
            this.commitNow()) : this.commitTimer.start()
        }
        proceduralFiltererInstance() {
            if (this.proceduralFilterer instanceof Object == !1) {
                if (vAPI.DOMProceduralFilterer instanceof Object == !1)
                    return null;
                this.proceduralFilterer = new vAPI.DOMProceduralFilterer(this)
            }
            return this.proceduralFilterer
        }
        addProceduralSelectors(e) {
            if (!1 !== Array.isArray(e) && 0 !== e.length) {
                const t = [];
                for (const n of e)
                    t.push(JSON.parse(n));
                if (0 !== t.length) {
                    const r = this.proceduralFiltererInstance();
                    null !== r && r.addProceduralSelectors(t)
                }
            }
        }
        createProceduralFilter(e) {
            const t = this.proceduralFiltererInstance();
            if (null !== t)
                return t.createProceduralFilter(e)
        }
        getAllSelectors(e=0) {
            const t = {
                declarative: [],
                exceptions: this.exceptedCSSRules
            };
            var n = this.proceduralFilterer instanceof Object
              , r = 0 != (1 & e)
              , i = n ? `[${this.proceduralFilterer.masterToken}]` : void 0;
            for (const o of this.stylesheets)
                for (const s of this.explodeCSS(o))
                    !1 == r && void 0 !== i && s[0].startsWith(i) || t.declarative.push([s[0], s[1]]);
            return !0 != (0 != (2 & e)) && (t.procedural = n ? Array.from(this.proceduralFilterer.selectors.values()) : []),
            t
        }
        getAllExceptionSelectors() {
            return this.exceptions.join(",\n")
        }
    }
    ;
    {
        const oy = vAPI.messaging
          , py = new Map
          , qy = {
            audio: "currentSrc",
            embed: "src",
            iframe: "src",
            img: "currentSrc",
            object: "data",
            video: "currentSrc"
        }
          , ry = {
            audio: "src",
            img: "src",
            video: "src"
        }
          , sy = {
            audio: "media",
            embed: "object",
            iframe: "sub_frame",
            img: "image",
            object: "object",
            video: "media"
        };
        let e = 1, t, a, l, c, n = [], r = [], u = 0;
        const By = function() {
            a = l = c = void 0
        }
          , Cy = ()=>(void 0 === i && (i = vAPI.randomToken(),
        vAPI.userStylesheet.add(`[${i}]\n{display:none!important;}`, !0)),
        i);
        let i;
        const Ey = function(e) {
            if (e instanceof Object != !1) {
                var t = py.get(e.id);
                if (void 0 !== t && (py.delete(e.id),
                l !== e.hash && (a = new Set(e.blockedResources),
                l = e.hash,
                void 0 !== c && clearTimeout(c),
                c = vAPI.setTimeout(By, 3e4)),
                void 0 !== a && 0 !== a.size)) {
                    const o = [];
                    var n = e.netSelectorCacheCountMax;
                    for (const s of t) {
                        var r, i = s.localName;
                        let t = qy[i];
                        if (void 0 !== t) {
                            let e = s[t];
                            if ("string" != typeof e || 0 === e.length) {
                                if (t = ry[i],
                                void 0 === t)
                                    continue;
                                if (e = s[t],
                                "string" != typeof e || 0 === e.length)
                                    continue
                            }
                            !1 !== a.has(sy[i] + " " + e) && (s.setAttribute(Cy(), ""),
                            u > n || (r = s.getAttribute(t)) && (o.push(`${i}[${t}="${CSS.escape(r)}"]`),
                            u += 1))
                        }
                    }
                    0 !== o.length && oy.send("contentscript", {
                        what: "cosmeticFiltersInjected",
                        type: "net",
                        hostname: window.location.hostname,
                        selectors: o
                    })
                }
            } else
                py.clear()
        }
          , Fy = function() {
            t = void 0,
            py.set(e, n),
            oy.send("contentscript", {
                what: "getCollapsibleBlockedRequests",
                id: e,
                frameURL: window.location.href,
                resources: r,
                hash: l
            }).then(e=>{
                Ey(e)
            }
            ),
            n = [],
            r = [],
            e += 1
        }
          , Gy = function(e) {
            0 !== n.length && (0 === e ? (void 0 !== t && clearTimeout(t),
            Fy()) : void 0 === t && (t = vAPI.setTimeout(Fy, e || 20)))
        }
          , Hy = function(e) {
            n[n.length] = e
        }
          , Iy = function(e) {
            for (const t of e)
                Hy(t)
        }
          , Jy = function(e) {
            for (const t of e)
                My(t.target, !0);
            Gy()
        }
          , Ky = new MutationObserver(Jy)
          , Ly = {
            attributes: !0,
            attributeFilter: ["src"]
        }
          , My = function(e, t) {
            !0 !== t && Ky.observe(e, Ly);
            const n = e.src;
            "string" == typeof n && "" !== n && !1 !== n.startsWith("http") && (r.push({
                type: "sub_frame",
                url: e.src
            }),
            Hy(e))
        }
          , Ny = function(e) {
            for (const t of e)
                My(t)
        }
          , Oy = function(e) {
            void 0 !== sy[e.target.localName] && (Hy(e.target),
            Gy())
        }
          , Py = function() {
            document.removeEventListener("error", Oy, !0),
            void 0 !== t && clearTimeout(t),
            vAPI.domWatcher instanceof Object && vAPI.domWatcher.removeListener(Ry),
            vAPI.shutdown.remove(Py),
            vAPI.domCollapser = null
        }
          , Qy = function() {
            vAPI.domWatcher instanceof Object && vAPI.domWatcher.addListener(Ry)
        }
          , Ry = {
            onDOMCreated: function() {
                if (self.vAPI instanceof Object != !1)
                    if (vAPI.domCollapser instanceof Object != !1) {
                        for (const e of document.images || document.getElementsByTagName("img"))
                            e.complete && Hy(e);
                        Iy(document.embeds || document.getElementsByTagName("embed")),
                        Iy(document.getElementsByTagName("object")),
                        Ny(document.getElementsByTagName("iframe")),
                        Gy(0),
                        document.addEventListener("error", Oy, !0),
                        vAPI.shutdown.add(Py)
                    } else
                        vAPI.domWatcher instanceof Object && vAPI.domWatcher.removeListener(Ry)
            },
            onDOMChanged: function(e) {
                if (0 !== e.length) {
                    for (const n of e) {
                        var t;
                        "iframe" === n.localName && My(n),
                        null === n.firstElementChild || 0 !== (t = n.getElementsByTagName("iframe")).length && Ny(t)
                    }
                    Gy()
                }
            }
        };
        vAPI.domCollapser = {
            start: Qy
        }
    }
    {
        const rz = vAPI.messaging
          , sz = new Set
          , tz = new Set
          , uz = 65536
          , vz = 4
          , wz = 64;
        let c, u = "", d = 0;
        const Az = {
            nodeLists: [],
            buffer: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            j: 0,
            accepted: 0,
            iterated: 0,
            stopped: !1,
            add(e) {
                0 === e.length || this.accepted >= uz || (this.nodeLists.push(e),
                this.accepted += e.length)
            },
            next() {
                if (0 === this.nodeLists.length || this.stopped)
                    return 0;
                var e = this.nodeLists;
                let r = 0;
                do {
                    var i = e[0];
                    let t = this.j
                      , n = t + wz - r;
                    n > i.length && (n = i.length);
                    for (let e = t; e < n; e++)
                        this.buffer[r++] = i[t++];
                    if (t !== i.length) {
                        this.j = t;
                        break
                    }
                } while (this.j = 0,
                this.nodeLists.shift(),
                r < wz && 0 !== e.length);
                return this.iterated += r,
                this.iterated >= uz && (this.nodeLists = [],
                this.stopped = !0),
                r
            },
            hasNodes() {
                return 0 !== this.nodeLists.length
            }
        }
          , Bz = /\s/
          , Cz = (e,t)=>{
            const n = e.id;
            "string" == typeof n && 0 !== n.length && (e = n.trim(),
            sz.has(e) || 0 === e.length || (t.push(e),
            sz.add(e)))
        }
          , Dz = (e,t)=>{
            const n = e.className;
            if ("string" == typeof n && 0 !== n.length) {
                if (!1 === Bz.test(n))
                    return tz.has(n) ? void 0 : (t.push(n),
                    void tz.add(n));
                for (const n of e.classList.values())
                    tz.has(n) || (t.push(n),
                    tz.add(n))
            }
        }
          , Ez = function() {
            var e = performance.now()
              , t = []
              , n = [];
            const r = Az.buffer;
            var i = e + vz;
            let o = 0;
            for (; ; ) {
                var s = Az.next();
                if (0 === s)
                    break;
                for (let e = 0; e < s; e++) {
                    var a = r[e];
                    r[e] = null,
                    Cz(a, t),
                    Dz(a, n)
                }
                if (o += s,
                performance.now() >= i)
                    break
            }
            var l = performance.now();
            d += l - e,
            0 !== t.length || 0 !== n.length ? rz.send("contentscript", {
                what: "retrieveGenericCosmeticSelectors",
                hostname: u,
                ids: t,
                classes: n,
                exceptions: c.exceptions,
                cost: d
            }).then(e=>{
                Iz(e)
            }
            ) : Iz(null)
        }
          , Fz = new vAPI.SafeAnimationFrame(Ez);
        let r = Date.now() + 3e5
          , i = 0;
        const Iz = function(e) {
            var t = e && e.result;
            let n = !1;
            if (t && ("string" == typeof (e = t.injectedCSS) && 0 !== e.length && (c.addCSS(e),
            n = !0),
            t = t.excepted,
            Array.isArray(t) && 0 !== t.length && c.exceptCSSRules(t)),
            !1 === Az.stopped) {
                if (Az.hasNodes() && Fz.start(1),
                n)
                    return i = 0,
                    void (r = Date.now() + 3e5);
                if (i += 1,
                i < 256 || Date.now() < r)
                    return
            }
            Fz.clear(),
            vAPI.domWatcher.removeListener(Jz),
            vAPI.domSurveyor = null
        }
          , Jz = {
            onDOMCreated: function() {
                var e, t;
                self.vAPI instanceof Object != !1 && vAPI.domSurveyor instanceof Object != !1 && vAPI.domFilterer instanceof Object != !1 ? (c = vAPI.domFilterer,
                Az.add(document.querySelectorAll("[id]:not(html):not(body),[class]:not(html):not(body)")),
                Fz.start(),
                e = [],
                t = [],
                Cz(document.documentElement, e),
                Cz(document.body, e),
                Dz(document.documentElement, t),
                Dz(document.body, t),
                0 === e.length && 0 === t.length || rz.send("contentscript", {
                    what: "retrieveGenericCosmeticSelectors",
                    hostname: u,
                    ids: e,
                    classes: t,
                    exceptions: c.exceptions,
                    safeOnly: !0
                }).then(e=>{
                    Iz(e)
                }
                )) : self.vAPI instanceof Object && (vAPI.domWatcher instanceof Object && vAPI.domWatcher.removeListener(Jz),
                vAPI.domSurveyor = null)
            },
            onDOMChanged: function(e) {
                if (0 !== e.length) {
                    for (const t of e)
                        Az.add([t]),
                        null !== t.firstElementChild && Az.add(t.querySelectorAll("[id]:not(html):not(body),[class]:not(html):not(body)"));
                    Az.hasNodes() && Fz.start(1)
                }
            }
        }
          , Kz = function(e) {
            vAPI.domWatcher instanceof Object != !1 && (u = e.hostname,
            vAPI.domWatcher.addListener(Jz))
        };
        vAPI.domSurveyor = {
            start: Kz
        }
    }
    {
        const tA = function() {
            if (null !== window.location && self.vAPI instanceof Object != !1 && (vAPI.messaging.send("contentscript", {
                what: "shouldRenderNoscriptTags"
            }),
            vAPI.domWatcher instanceof Object && vAPI.domWatcher.start(),
            window === window.top && vAPI.domFilterer instanceof Object != !1)) {
                vAPI.mouseClick = {
                    x: -1,
                    y: -1
                };
                const e = function(e) {
                    !1 !== e.isTrusted && (vAPI.mouseClick.x = e.clientX,
                    vAPI.mouseClick.y = e.clientY,
                    null !== (e = e.target.closest("a[href]")) && "string" == typeof e.href && vAPI.messaging.send("contentscript", {
                        what: "maybeGoodPopup",
                        url: e.href || ""
                    }))
                };
                document.addEventListener("mousedown", e, !0),
                vAPI.shutdown.add(function() {
                    document.removeEventListener("mousedown", e, !0)
                })
            }
        }
          , uA = function(e) {
            if (e instanceof Object != !1) {
                vAPI.bootstrap = void 0;
                var t = e && e.specificCosmeticFilters;
                if (t && t.ready) {
                    vAPI.domCollapser.start();
                    var {noSpecificCosmeticFiltering: n, noGenericCosmeticFiltering: r, scriptlets: e} = e;
                    if (vAPI.noSpecificCosmeticFiltering = n,
                    vAPI.noGenericCosmeticFiltering = r,
                    n && r)
                        vAPI.domFilterer = null,
                        vAPI.domSurveyor = null;
                    else {
                        const i = vAPI.domFilterer = new vAPI.DOMFilterer;
                        (r || t.noDOMSurveying) && (vAPI.domSurveyor = null),
                        i.exceptions = t.exceptionFilters,
                        i.addCSS(t.injectedCSS),
                        i.addProceduralSelectors(t.proceduralFilters),
                        i.exceptCSSRules(t.exceptedFilters)
                    }
                    vAPI.userStylesheet.apply(),
                    e && (vAPI.injectScriptlet(document, e),
                    vAPI.injectedScripts = e),
                    vAPI.domSurveyor instanceof Object && vAPI.domSurveyor.start(t),
                    "string" == typeof document.readyState && "loading" !== document.readyState ? tA() : document.addEventListener("DOMContentLoaded", tA, {
                        once: !0
                    })
                } else
                    vAPI.domWatcher = vAPI.domCollapser = vAPI.domFilterer = vAPI.domSurveyor = vAPI.domIsLoaded = null
            }
        };
        vAPI.bootstrap = function() {
            vAPI.messaging.send("contentscript", {
                what: "retrieveContentScriptParameters",
                url: vAPI.effectiveSelf.location.href
            }).then(e=>{
                uA(e)
            }
            )
        }
    }
    vAPI.bootstrap()
}
