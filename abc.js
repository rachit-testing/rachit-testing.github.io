(function() {
    var pushcrewConfig = {
        companyName: "Rachit Development Pvt Ltd",
        hash: "895dc831cea73c7ef99d9373baea5cde",
        origin: "https",
        subdomainFlag: "0",
        swPath: "myservice-worker/background-worker.js",
        firefoxSwPath: "/ffsw-pushcrew.js",
        manifestUrl: "manifest.json",
        serverSyncUrl: "https://pushcrew.com",
        subdomain: "",
        domainForStorageUtil: "self",
        selfHostedSubdomainUrl: "",
        triggerAutomaticOptIn: 1,
        secondsTrigger: 10,
        safariWebsitePushId: "",
        unsubscribeNCFlag: 1,
        pcBranding: 0,
        style: {
            type: "safari",
            iconUrl: "https://cdn.pushcrew.com/img/logos/895dc831cea73c7ef99d9373baea5cde/425a6c02-2ca7-458f-aea3-74d9d0d73a92.png",
            allowTextChildWindow: "",
            offerTextChildWindow: "Get updates and offers from Rachit Development Pvt Ltd by subscribing to push notifications.",
            chicketText: "Some Default Text",
            chickletBgColor: "#4D9DE0",
            chickletTextColor: "#FFFFFF",
            chickletPosition: "tr",
            chromeTitle: "ct1",
            chromeSubtitle: "ct2",
            safariTitle: "The website “Rachit Development Pvt Ltd” would like to send you push notifications.",
            safariSubtitle: "Notifications can be turned off anytime from browser settings.",
            allowText: "",
            dontAllowText: "",
            brandingType: 0,
            brandingText: "",
            isMobileEnabled: 1,
            safariMobileTitle: "",
            mobileChickletPosition: "mobile-chicklet-right"
        }
    };
    /*
 Uglified file for push-crew 2016-08-08 
*/
    (function() {
        /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
        !function(a, b) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
                if (!a.document)
                    throw new Error("jQuery requires a window with a document");
                return b(a)
            }
            : b(a)
        }("undefined" != typeof window ? window : this, function(a, b) {
            function s(a) {
                var b = "length"in a && a.length
                  , c = n.type(a);
                return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
            }
            function x(a, b, c) {
                if (n.isFunction(b))
                    return n.grep(a, function(a, d) {
                        return !!b.call(a, d, a) !== c
                    });
                if (b.nodeType)
                    return n.grep(a, function(a) {
                        return a === b !== c
                    });
                if ("string" == typeof b) {
                    if (w.test(b))
                        return n.filter(b, a, c);
                    b = n.filter(b, a)
                }
                return n.grep(a, function(a) {
                    return g.call(b, a) >= 0 !== c
                })
            }
            function D(a, b) {
                for (; (a = a[b]) && 1 !== a.nodeType; )
                    ;
                return a
            }
            function G(a) {
                var b = F[a] = {};
                return n.each(a.match(E) || [], function(a, c) {
                    b[c] = !0
                }),
                b
            }
            function I() {
                l.removeEventListener("DOMContentLoaded", I, !1),
                a.removeEventListener("load", I, !1),
                n.ready()
            }
            function K() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }),
                this.expando = n.expando + K.uid++
            }
            function P(a, b, c) {
                var d;
                if (void 0 === c && 1 === a.nodeType)
                    if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
                    c = a.getAttribute(d),
                    "string" == typeof c) {
                        try {
                            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                        } catch (e) {}
                        M.set(a, b, c)
                    } else
                        c = void 0;
                return c
            }
            function Z() {
                return !0
            }
            function $() {
                return !1
            }
            function _() {
                try {
                    return l.activeElement
                } catch (a) {}
            }
            function ja(a, b) {
                return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }
            function ka(a) {
                return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
                a
            }
            function la(a) {
                var b = ga.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"),
                a
            }
            function ma(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
            }
            function na(a, b) {
                var c, d, e, f, g, h, i, j;
                if (1 === b.nodeType) {
                    if (L.hasData(a) && (f = L.access(a),
                    g = L.set(b, f),
                    j = f.events)) {
                        delete g.handle,
                        g.events = {};
                        for (e in j)
                            for (c = 0,
                            d = j[e].length; d > c; c++)
                                n.event.add(b, e, j[e][c])
                    }
                    M.hasData(a) && (h = M.access(a),
                    i = n.extend({}, h),
                    M.set(b, i))
                }
            }
            function oa(a, b) {
                var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
            }
            function pa(a, b) {
                var c = b.nodeName.toLowerCase();
                "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
            function sa(b, c) {
                var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
                return e.detach(),
                f
            }
            function ta(a) {
                var b = l
                  , c = ra[a];
                return c || (c = sa(a, b),
                "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
                b = qa[0].contentDocument,
                b.write(),
                b.close(),
                c = sa(a, b),
                qa.detach()),
                ra[a] = c),
                c
            }
            function xa(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || wa(a),
                c && (g = c.getPropertyValue(b) || c[b]),
                c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
                va.test(g) && ua.test(b) && (d = h.width,
                e = h.minWidth,
                f = h.maxWidth,
                h.minWidth = h.maxWidth = h.width = g,
                g = c.width,
                h.width = d,
                h.minWidth = e,
                h.maxWidth = f)),
                void 0 !== g ? g + "" : g
            }
            function ya(a, b) {
                return {
                    get: function() {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }
            function Fa(a, b) {
                if (b in a)
                    return b;
                for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--; )
                    if (b = Ea[e] + c,
                    b in a)
                        return b;
                return d
            }
            function Ga(a, b, c) {
                var d = Aa.exec(b);
                return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
            }
            function Ha(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                    "margin" === c && (g += n.css(a, c + R[f], !0, e)),
                    d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
                    "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
                    "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
                return g
            }
            function Ia(a, b, c) {
                var d = !0
                  , e = "width" === b ? a.offsetWidth : a.offsetHeight
                  , f = wa(a)
                  , g = "border-box" === n.css(a, "boxSizing", !1, f);
                if (0 >= e || null == e) {
                    if (e = xa(a, b, f),
                    (0 > e || null == e) && (e = a.style[b]),
                    va.test(e))
                        return e;
                    d = g && (k.boxSizingReliable() || e === a.style[b]),
                    e = parseFloat(e) || 0
                }
                return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
            }
            function Ja(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                    d = a[g],
                    d.style && (f[g] = L.get(d, "olddisplay"),
                    c = d.style.display,
                    b ? (f[g] || "none" !== c || (d.style.display = ""),
                    "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d),
                    "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
                for (g = 0; h > g; g++)
                    d = a[g],
                    d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                return a
            }
            function Ka(a, b, c, d, e) {
                return new Ka.prototype.init(a,b,c,d,e)
            }
            function Sa() {
                return setTimeout(function() {
                    La = void 0
                }),
                La = n.now()
            }
            function Ta(a, b) {
                var c, d = 0, e = {
                    height: a
                };
                for (b = b ? 1 : 0; 4 > d; d += 2 - b)
                    c = R[d],
                    e["margin" + c] = e["padding" + c] = a;
                return b && (e.opacity = e.width = a),
                e
            }
            function Ua(a, b, c) {
                for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
                    if (d = e[f].call(c, b, a))
                        return d
            }
            function Va(a, b, c) {
                var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
                c.queue || (h = n._queueHooks(a, "fx"),
                null == h.unqueued && (h.unqueued = 0,
                i = h.empty.fire,
                h.empty.fire = function() {
                    h.unqueued || i()
                }
                ),
                h.unqueued++,
                l.always(function() {
                    l.always(function() {
                        h.unqueued--,
                        n.queue(a, "fx").length || h.empty.fire()
                    })
                })),
                1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
                j = n.css(a, "display"),
                k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j,
                "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
                c.overflow && (o.overflow = "hidden",
                l.always(function() {
                    o.overflow = c.overflow[0],
                    o.overflowX = c.overflow[1],
                    o.overflowY = c.overflow[2]
                }));
                for (d in b)
                    if (e = b[d],
                    Na.exec(e)) {
                        if (delete b[d],
                        f = f || "toggle" === e,
                        e === (p ? "hide" : "show")) {
                            if ("show" !== e || !q || void 0 === q[d])
                                continue;p = !0
                        }
                        m[d] = q && q[d] || n.style(a, d)
                    } else
                        j = void 0;
                if (n.isEmptyObject(m))
                    "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
                else {
                    q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
                    f && (q.hidden = !p),
                    p ? n(a).show() : l.done(function() {
                        n(a).hide()
                    }),
                    l.done(function() {
                        var b;
                        L.remove(a, "fxshow");
                        for (b in m)
                            n.style(a, b, m[b])
                    });
                    for (d in m)
                        g = Ua(p ? q[d] : 0, d, l),
                        d in q || (q[d] = g.start,
                        p && (g.end = g.start,
                        g.start = "width" === d || "height" === d ? 1 : 0))
                }
            }
            function Wa(a, b) {
                var c, d, e, f, g;
                for (c in a)
                    if (d = n.camelCase(c),
                    e = b[d],
                    f = a[c],
                    n.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                    c !== d && (a[d] = f,
                    delete a[c]),
                    g = n.cssHooks[d],
                    g && "expand"in g) {
                        f = g.expand(f),
                        delete a[d];
                        for (c in f)
                            c in a || (a[c] = f[c],
                            b[c] = e)
                    } else
                        b[d] = e
            }
            function Xa(a, b, c) {
                var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
                    delete i.elem
                }), i = function() {
                    if (e)
                        return !1;
                    for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                        j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]),
                    !1)
                }
                , j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: La || Sa(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d),
                        d
                    },
                    stop: function(b) {
                        var c = 0
                          , d = b ? j.tweens.length : 0;
                        if (e)
                            return this;
                        for (e = !0; d > c; c++)
                            j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                        this
                    }
                }), k = j.props;
                for (Wa(k, j.opts.specialEasing); g > f; f++)
                    if (d = Qa[f].call(j, a, k, j.opts))
                        return d;
                return n.map(k, Ua, j),
                n.isFunction(j.opts.start) && j.opts.start.call(a, j),
                n.fx.timer(n.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })),
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            }
            function qb(a) {
                return function(b, c) {
                    "string" != typeof b && (c = b,
                    b = "*");
                    var d, e = 0, f = b.toLowerCase().match(E) || [];
                    if (n.isFunction(c))
                        for (; d = f[e++]; )
                            "+" === d[0] ? (d = d.slice(1) || "*",
                            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
            function rb(a, b, c, d) {
                function g(h) {
                    var i;
                    return e[h] = !0,
                    n.each(a[h] || [], function(a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                        g(j),
                        !1)
                    }),
                    i
                }
                var e = {}
                  , f = a === mb;
                return g(b.dataTypes[0]) || !e["*"] && g("*")
            }
            function sb(a, b) {
                var c, d, e = n.ajaxSettings.flatOptions || {};
                for (c in b)
                    void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                return d && n.extend(!0, a, d),
                a
            }
            function tb(a, b, c) {
                for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
                    i.shift(),
                    void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                if (d)
                    for (e in h)
                        if (h[e] && h[e].test(d)) {
                            i.unshift(e);
                            break
                        }
                if (i[0]in c)
                    f = i[0];
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
                return f ? (f !== i[0] && i.unshift(f),
                c[f]) : void 0
            }
            function ub(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1])
                    for (g in a.converters)
                        j[g.toLowerCase()] = a.converters[g];
                for (f = k.shift(); f; )
                    if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                    i = f,
                    f = k.shift())
                        if ("*" === f)
                            f = i;
                        else if ("*" !== i && i !== f) {
                            if (g = j[i + " " + f] || j["* " + f],
                            !g)
                                for (e in j)
                                    if (h = e.split(" "),
                                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                        k.unshift(h[1]));
                                        break
                                    }
                            if (g !== !0)
                                if (g && a["throws"])
                                    b = g(b);
                                else
                                    try {
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
            function Ab(a, b, c, d) {
                var e;
                if (n.isArray(b))
                    n.each(b, function(b, e) {
                        c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                    });
                else if (c || "object" !== n.type(b))
                    d(a, b);
                else
                    for (e in b)
                        Ab(a + "[" + e + "]", b[e], c, d)
            }
            function Jb(a) {
                return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
            }
            var c = []
              , d = c.slice
              , e = c.concat
              , f = c.push
              , g = c.indexOf
              , h = {}
              , i = h.toString
              , j = h.hasOwnProperty
              , k = {}
              , l = a.document
              , m = "2.1.4"
              , n = function(a, b) {
                return new n.fn.init(a,b)
            }
              , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , p = /^-ms-/
              , q = /-([\da-z])/gi
              , r = function(a, b) {
                return b.toUpperCase()
            }
            ;
            n.fn = n.prototype = {
                jquery: m,
                constructor: n,
                selector: "",
                length: 0,
                toArray: function() {
                    return d.call(this)
                },
                get: function(a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
                },
                pushStack: function(a) {
                    var b = n.merge(this.constructor(), a);
                    return b.prevObject = this,
                    b.context = this.context,
                    b
                },
                each: function(a, b) {
                    return n.each(this, a, b)
                },
                map: function(a) {
                    return this.pushStack(n.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                slice: function() {
                    return this.pushStack(d.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length
                      , c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null )
                },
                push: f,
                sort: c.sort,
                splice: c.splice
            },
            n.extend = n.fn.extend = function() {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g,
                g = arguments[h] || {},
                h++),
                "object" == typeof g || n.isFunction(g) || (g = {}),
                h === i && (g = this,
                h--); i > h; h++)
                    if (null != (a = arguments[h]))
                        for (b in a)
                            c = g[b],
                            d = a[b],
                            g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                            f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                            g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                return g
            }
            ,
            n.extend({
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
                    return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
                },
                isPlainObject: function(a) {
                    return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : !a.constructor || j.call(a.constructor.prototype, "isPrototypeOf")
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a)
                        return !1;
                    return !0
                },
                type: function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
                },
                globalEval: function(a) {
                    var b, c = eval;
                    a = n.trim(a),
                    a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
                    b.text = a,
                    l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                },
                camelCase: function(a) {
                    return a.replace(p, "ms-").replace(q, r)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b, c) {
                    var d, e = 0, f = a.length, g = s(a);
                    if (c) {
                        if (g)
                            for (; f > e && (d = b.apply(a[e], c),
                            d !== !1); e++)
                                ;
                        else
                            for (e in a)
                                if (d = b.apply(a[e], c),
                                d === !1)
                                    break
                    } else if (g)
                        for (; f > e && (d = b.call(a[e], e, a[e]),
                        d !== !1); e++)
                            ;
                    else
                        for (e in a)
                            if (d = b.call(a[e], e, a[e]),
                            d === !1)
                                break;
                    return a
                },
                trim: function(a) {
                    return null == a ? "" : (a + "").replace(o, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
                    c
                },
                inArray: function(a, b, c) {
                    return null == b ? -1 : g.call(b, a, c)
                },
                merge: function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                        a[e++] = b[d];
                    return a.length = e,
                    a
                },
                grep: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                        d = !b(a[f], f),
                        d !== h && e.push(a[f]);
                    return e
                },
                map: function(a, b, c) {
                    var d, f = 0, g = a.length, h = s(a), i = [];
                    if (h)
                        for (; g > f; f++)
                            d = b(a[f], f, c),
                            null != d && i.push(d);
                    else
                        for (f in a)
                            d = b(a[f], f, c),
                            null != d && i.push(d);
                    return e.apply([], i)
                },
                guid: 1,
                proxy: function(a, b) {
                    var c, e, f;
                    return "string" == typeof b && (c = a[b],
                    b = a,
                    a = c),
                    n.isFunction(a) ? (e = d.call(arguments, 2),
                    f = function() {
                        return a.apply(b || this, e.concat(d.call(arguments)))
                    }
                    ,
                    f.guid = a.guid = a.guid || n.guid++,
                    f) : void 0
                },
                now: Date.now,
                support: k
            }),
            n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                h["[object " + b + "]"] = b.toLowerCase()
            });
            var t = function(a) {
                function ga(a, b, d, e) {
                    var f, h, j, k, l, o, r, s, w, x;
                    if ((b ? b.ownerDocument || b : v) !== n && m(b),
                    b = b || n,
                    d = d || [],
                    k = b.nodeType,
                    "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                        return d;
                    if (!e && p) {
                        if (11 !== k && (f = _.exec(a)))
                            if (j = f[1]) {
                                if (9 === k) {
                                    if (h = b.getElementById(j),
                                    !h || !h.parentNode)
                                        return d;
                                    if (h.id === j)
                                        return d.push(h),
                                        d
                                } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                                    return d.push(h),
                                    d
                            } else {
                                if (f[2])
                                    return H.apply(d, b.getElementsByTagName(a)),
                                    d;
                                if ((j = f[3]) && c.getElementsByClassName)
                                    return H.apply(d, b.getElementsByClassName(j)),
                                    d
                            }
                        if (c.qsa && (!q || !q.test(a))) {
                            if (s = r = u,
                            w = b,
                            x = 1 !== k && a,
                            1 === k && "object" !== b.nodeName.toLowerCase()) {
                                for (o = g(a),
                                (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                                s = "[id='" + s + "'] ",
                                l = o.length; l--; )
                                    o[l] = s + ra(o[l]);
                                w = aa.test(a) && pa(b.parentNode) || b,
                                x = o.join(",")
                            }
                            if (x)
                                try {
                                    return H.apply(d, w.querySelectorAll(x)),
                                    d
                                } catch (y) {} finally {
                                    r || b.removeAttribute("id")
                                }
                        }
                    }
                    return i(a.replace(R, "$1"), b, d, e)
                }
                function ha() {
                    function b(c, e) {
                        return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                        b[c + " "] = e
                    }
                    var a = [];
                    return b
                }
                function ia(a) {
                    return a[u] = !0,
                    a
                }
                function ja(a) {
                    var b = n.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null
                    }
                }
                function ka(a, b) {
                    for (var c = a.split("|"), e = a.length; e--; )
                        d.attrHandle[c[e]] = b
                }
                function la(a, b) {
                    var c = b && a
                      , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                    if (d)
                        return d;
                    if (c)
                        for (; c = c.nextSibling; )
                            if (c === b)
                                return -1;
                    return a ? 1 : -1
                }
                function ma(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }
                function na(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }
                function oa(a) {
                    return ia(function(b) {
                        return b = +b,
                        ia(function(c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--; )
                                c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }
                function pa(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a
                }
                function qa() {}
                function ra(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++)
                        d += a[b].value;
                    return d
                }
                function sa(a, b, c) {
                    var d = b.dir
                      , e = c && "parentNode" === d
                      , f = x++;
                    return b.first ? function(b, c, f) {
                        for (; b = b[d]; )
                            if (1 === b.nodeType || e)
                                return a(b, c, f)
                    }
                    : function(b, c, g) {
                        var h, i, j = [w, f];
                        if (g) {
                            for (; b = b[d]; )
                                if ((1 === b.nodeType || e) && a(b, c, g))
                                    return !0
                        } else
                            for (; b = b[d]; )
                                if (1 === b.nodeType || e) {
                                    if (i = b[u] || (b[u] = {}),
                                    (h = i[d]) && h[0] === w && h[1] === f)
                                        return j[2] = h[2];
                                    if (i[d] = j,
                                    j[2] = a(b, c, g))
                                        return !0
                                }
                    }
                }
                function ta(a) {
                    return a.length > 1 ? function(b, c, d) {
                        for (var e = a.length; e--; )
                            if (!a[e](b, c, d))
                                return !1;
                        return !0
                    }
                    : a[0]
                }
                function ua(a, b, c) {
                    for (var d = 0, e = b.length; e > d; d++)
                        ga(a, b[d], c);
                    return c
                }
                function va(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                        j && b.push(h));
                    return g
                }
                function wa(a, b, c, d, e, f) {
                    return d && !d[u] && (d = wa(d)),
                    e && !e[u] && (e = wa(e, f)),
                    ia(function(f, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i),
                        d)
                            for (j = va(r, n),
                            d(j, [], h, i),
                            k = j.length; k--; )
                                (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    for (j = [],
                                    k = r.length; k--; )
                                        (l = r[k]) && j.push(q[k] = l);
                                    e(null , r = [], j, i)
                                }
                                for (k = r.length; k--; )
                                    (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        } else
                            r = va(r === g ? r.splice(o, r.length) : r),
                            e ? e(null , g, r, i) : H.apply(g, r)
                    })
                }
                function xa(a) {
                    for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                        return a === b
                    }, h, !0), l = sa(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null ,
                        e
                    }
                    ]; f > i; i++)
                        if (c = d.relative[a[i].type])
                            m = [sa(ta(m), c)];
                        else {
                            if (c = d.filter[a[i].type].apply(null , a[i].matches),
                            c[u]) {
                                for (e = ++i; f > e && !d.relative[a[e].type]; e++)
                                    ;
                                return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*" : ""
                                })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                            }
                            m.push(c)
                        }
                    return ta(m)
                }
                function ya(a, b) {
                    var c = b.length > 0
                      , e = a.length > 0
                      , f = function(f, g, h, i, k) {
                        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                for (m = 0; o = a[m++]; )
                                    if (o(l, g, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = v)
                            }
                            c && ((l = !o && l) && p--,
                            f && r.push(l))
                        }
                        if (p += q,
                        c && q !== p) {
                            for (m = 0; o = b[m++]; )
                                o(r, s, g, h);
                            if (f) {
                                if (p > 0)
                                    for (; q--; )
                                        r[q] || s[q] || (s[q] = F.call(i));
                                s = va(s)
                            }
                            H.apply(i, s),
                            k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                        }
                        return k && (w = v,
                        j = t),
                        r
                    }
                    ;
                    return c ? ia(f) : f
                }
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
                    return a === b && (l = !0),
                    0
                }
                , C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b)
                            return c;
                    return -1
                }
                , K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + O),
                    PSEUDO: new RegExp("^" + P),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + K + ")$","i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
                }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                }
                , ea = function() {
                    m()
                }
                ;
                try {
                    H.apply(E = I.call(v.childNodes), v.childNodes),
                    E[v.childNodes.length].nodeType
                } catch (fa) {
                    H = {
                        apply: E.length ? function(a, b) {
                            G.apply(a, I.call(b))
                        }
                        : function(a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++]; )
                                ;
                            a.length = c - 1
                        }
                    }
                }
                c = ga.support = {},
                f = ga.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }
                ,
                m = ga.setDocument = function(a) {
                    var b, e, g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
                    o = g.documentElement,
                    e = g.defaultView,
                    e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
                    p = !f(g),
                    c.attributes = ja(function(a) {
                        return a.className = "i",
                        !a.getAttribute("className")
                    }),
                    c.getElementsByTagName = ja(function(a) {
                        return a.appendChild(g.createComment("")),
                        !a.getElementsByTagName("*").length
                    }),
                    c.getElementsByClassName = $.test(g.getElementsByClassName),
                    c.getById = ja(function(a) {
                        return o.appendChild(a).id = u,
                        !g.getElementsByName || !g.getElementsByName(u).length
                    }),
                    c.getById ? (d.find.ID = function(a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }
                    ,
                    d.filter.ID = function(a) {
                        var b = a.replace(ca, da);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }
                    ) : (delete d.find.ID,
                    d.filter.ID = function(a) {
                        var b = a.replace(ca, da);
                        return function(a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }
                    ),
                    d.find.TAG = c.getElementsByTagName ? function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    }
                    : function(a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++]; )
                                1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }
                    ,
                    d.find.CLASS = c.getElementsByClassName && function(a, b) {
                        return p ? b.getElementsByClassName(a) : void 0
                    }
                    ,
                    r = [],
                    q = [],
                    (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                        a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                        a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                        a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                        a.querySelectorAll(":checked").length || q.push(":checked"),
                        a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                    }),
                    ja(function(a) {
                        var b = g.createElement("input");
                        b.setAttribute("type", "hidden"),
                        a.appendChild(b).setAttribute("name", "D"),
                        a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                        a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                        a.querySelectorAll("*,:x"),
                        q.push(",.*:")
                    })),
                    (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                        c.disconnectedMatch = s.call(a, "div"),
                        s.call(a, "[s!='']:x"),
                        r.push("!=", P)
                    }),
                    q = q.length && new RegExp(q.join("|")),
                    r = r.length && new RegExp(r.join("|")),
                    b = $.test(o.compareDocumentPosition),
                    t = b || $.test(o.contains) ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a
                          , d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    }
                    : function(a, b) {
                        if (b)
                            for (; b = b.parentNode; )
                                if (b === a)
                                    return !0;
                        return !1
                    }
                    ,
                    B = b ? function(a, b) {
                        if (a === b)
                            return l = !0,
                            0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                        1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    }
                    : function(a, b) {
                        if (a === b)
                            return l = !0,
                            0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f)
                            return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f)
                            return la(a, b);
                        for (c = a; c = c.parentNode; )
                            h.unshift(c);
                        for (c = b; c = c.parentNode; )
                            i.unshift(c);
                        for (; h[d] === i[d]; )
                            d++;
                        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                    }
                    ,
                    g) : n
                }
                ,
                ga.matches = function(a, b) {
                    return ga(a, null , null , b)
                }
                ,
                ga.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== n && m(a),
                    b = b.replace(U, "='$1']"),
                    !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                        try {
                            var d = s.call(a, b);
                            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                                return d
                        } catch (e) {}
                    return ga(b, n, null , [a]).length > 0
                }
                ,
                ga.contains = function(a, b) {
                    return (a.ownerDocument || a) !== n && m(a),
                    t(a, b)
                }
                ,
                ga.attr = function(a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()]
                      , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
                }
                ,
                ga.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }
                ,
                ga.uniqueSort = function(a) {
                    var b, d = [], e = 0, f = 0;
                    if (l = !c.detectDuplicates,
                    k = !c.sortStable && a.slice(0),
                    a.sort(B),
                    l) {
                        for (; b = a[f++]; )
                            b === a[f] && (e = d.push(f));
                        for (; e--; )
                            a.splice(d[e], 1)
                    }
                    return k = null ,
                    a
                }
                ,
                e = ga.getText = function(a) {
                    var b, c = "", d = 0, f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)
                                return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)
                                c += e(a)
                        } else if (3 === f || 4 === f)
                            return a.nodeValue
                    } else
                        for (; b = a[d++]; )
                            c += e(b);
                    return c
                }
                ,
                d = ga.selectors = {
                    cacheLength: 50,
                    createPseudo: ia,
                    match: X,
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
                            return a[1] = a[1].replace(ca, da),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                            a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                            a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                            a
                        },
                        PSEUDO: function(a) {
                            var b, c = !a[6] && a[2];
                            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                            a[2] = c.slice(0, b)),
                            a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(ca, da).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            }
                            : function(a) {
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
                                var e = ga.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "",
                                "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3)
                              , g = "last" !== a.slice(-4)
                              , h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode
                            }
                            : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                if (q) {
                                    if (f) {
                                        for (; p; ) {
                                            for (l = b; l = l[p]; )
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild],
                                    g && s) {
                                        for (k = q[u] || (q[u] = {}),
                                        j = k[a] || [],
                                        n = j[0] === w && j[1],
                                        m = j[0] === w && j[2],
                                        l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [w, n, m];
                                                break
                                            }
                                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                        m = j[1];
                                    else
                                        for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                        l !== b)); )
                                            ;
                                    return m -= e,
                                    m === d || m % d === 0 && m / d >= 0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                            d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                                for (var d, f = e(a, b), g = f.length; g--; )
                                    d = J(a, f[g]),
                                    a[d] = !(c[d] = f[g])
                            }) : function(a) {
                                return e(a, 0, c)
                            }
                            ) : e
                        }
                    },
                    pseudos: {
                        not: ia(function(a) {
                            var b = []
                              , c = []
                              , d = h(a.replace(R, "$1"));
                            return d[u] ? ia(function(a, b, c, e) {
                                for (var f, g = d(a, null , e, []), h = a.length; h--; )
                                    (f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function(a, e, f) {
                                return b[0] = a,
                                d(b, null , f, c),
                                b[0] = null ,
                                !c.pop()
                            }
                        }),
                        has: ia(function(a) {
                            return function(b) {
                                return ga(a, b).length > 0
                            }
                        }),
                        contains: ia(function(a) {
                            return a = a.replace(ca, da),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                        }),
                        lang: ia(function(a) {
                            return W.test(a || "") || ga.error("unsupported lang: " + a),
                            a = a.replace(ca, da).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return c = c.toLowerCase(),
                                        c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);return !1
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
                            return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !d.pseudos.empty(a)
                        },
                        header: function(a) {
                            return Z.test(a.nodeName)
                        },
                        input: function(a) {
                            return Y.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: oa(function() {
                            return [0]
                        }),
                        last: oa(function(a, b) {
                            return [b - 1]
                        }),
                        eq: oa(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: oa(function(a, b) {
                            for (var c = 0; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        odd: oa(function(a, b) {
                            for (var c = 1; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        lt: oa(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; )
                                a.push(d);
                            return a
                        }),
                        gt: oa(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; )
                                a.push(d);
                            return a
                        })
                    }
                },
                d.pseudos.nth = d.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    d.pseudos[b] = ma(b);
                for (b in {
                    submit: !0,
                    reset: !0
                })
                    d.pseudos[b] = na(b);
                return qa.prototype = d.filters = d.pseudos,
                d.setFilters = new qa,
                g = ga.tokenize = function(a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k)
                        return b ? 0 : k.slice(0);
                    for (h = a,
                    i = [],
                    j = d.preFilter; h; ) {
                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                        i.push(f = [])),
                        c = !1,
                        (e = T.exec(h)) && (c = e.shift(),
                        f.push({
                            value: c,
                            type: e[0].replace(R, " ")
                        }),
                        h = h.slice(c.length));
                        for (g in d.filter)
                            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                            f.push({
                                value: c,
                                type: g,
                                matches: e
                            }),
                            h = h.slice(c.length));
                        if (!c)
                            break
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
                }
                ,
                h = ga.compile = function(a, b) {
                    var c, d = [], e = [], f = A[a + " "];
                    if (!f) {
                        for (b || (b = g(a)),
                        c = b.length; c--; )
                            f = xa(b[c]),
                            f[u] ? d.push(f) : e.push(f);
                        f = A(a, ya(e, d)),
                        f.selector = a
                    }
                    return f
                }
                ,
                i = ga.select = function(a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                    if (e = e || [],
                    1 === o.length) {
                        if (j = o[0] = o[0].slice(0),
                        j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                            !b)
                                return e;
                            n && (b = b.parentNode),
                            a = a.slice(j.shift().value.length)
                        }
                        for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i],
                        !d.relative[l = k.type]); )
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                                if (j.splice(i, 1),
                                a = f.length && ra(j),
                                !a)
                                    return H.apply(e, f),
                                    e;
                                break
                            }
                    }
                    return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
                    e
                }
                ,
                c.sortStable = u.split("").sort(B).join("") === u,
                c.detectDuplicates = !!l,
                m(),
                c.sortDetached = ja(function(a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"))
                }),
                ja(function(a) {
                    return a.innerHTML = "<a href='#'></a>",
                    "#" === a.firstChild.getAttribute("href")
                }) || ka("type|href|height|width", function(a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }),
                c.attributes && ja(function(a) {
                    return a.innerHTML = "<input/>",
                    a.firstChild.setAttribute("value", ""),
                    "" === a.firstChild.getAttribute("value")
                }) || ka("value", function(a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }),
                ja(function(a) {
                    return null == a.getAttribute("disabled")
                }) || ka(K, function(a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }),
                ga
            }(a);
            n.find = t,
            n.expr = t.selectors,
            n.expr[":"] = n.expr.pseudos,
            n.unique = t.uniqueSort,
            n.text = t.getText,
            n.isXMLDoc = t.isXML,
            n.contains = t.contains;
            var u = n.expr.match.needsContext
              , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
              , w = /^.[^:#\[\.,]*$/;
            n.filter = function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"),
                1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            }
            ,
            n.fn.extend({
                find: function(a) {
                    var b, c = this.length, d = [], e = this;
                    if ("string" != typeof a)
                        return this.pushStack(n(a).filter(function() {
                            for (b = 0; c > b; b++)
                                if (n.contains(e[b], this))
                                    return !0
                        }));
                    for (b = 0; c > b; b++)
                        n.find(a, e[b], d);
                    return d = this.pushStack(c > 1 ? n.unique(d) : d),
                    d.selector = this.selector ? this.selector + " " + a : a,
                    d
                },
                filter: function(a) {
                    return this.pushStack(x(this, a || [], !1))
                },
                not: function(a) {
                    return this.pushStack(x(this, a || [], !0))
                },
                is: function(a) {
                    return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
                }
            });
            var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
                var c, d;
                if (!a)
                    return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null , a, null ] : z.exec(a),
                    !c || !c[1] && b)
                        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof n ? b[0] : b,
                        n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                        v.test(c[1]) && n.isPlainObject(b))
                            for (c in b)
                                n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = l.getElementById(c[2]),
                    d && d.parentNode && (this.length = 1,
                    this[0] = d),
                    this.context = l,
                    this.selector = a,
                    this
                }
                return a.nodeType ? (this.context = this[0] = a,
                this.length = 1,
                this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
                this.context = a.context),
                n.makeArray(a, this))
            }
            ;
            A.prototype = n.fn,
            y = n(l);
            var B = /^(?:parents|prev(?:Until|All))/
              , C = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            n.extend({
                dir: function(a, b, c) {
                    for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                        if (1 === a.nodeType) {
                            if (e && n(a).is(c))
                                break;
                            d.push(a)
                        }
                    return d
                },
                sibling: function(a, b) {
                    for (var c = []; a; a = a.nextSibling)
                        1 === a.nodeType && a !== b && c.push(a);
                    return c
                }
            }),
            n.fn.extend({
                has: function(a) {
                    var b = n(a, this)
                      , c = b.length;
                    return this.filter(function() {
                        for (var a = 0; c > a; a++)
                            if (n.contains(this, b[a]))
                                return !0
                    })
                },
                closest: function(a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                    return this.pushStack(f.length > 1 ? n.unique(f) : f)
                },
                index: function(a) {
                    return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(a, b) {
                    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
                },
                addBack: function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }),
            n.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                },
                parents: function(a) {
                    return n.dir(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return n.dir(a, "parentNode", c)
                },
                next: function(a) {
                    return D(a, "nextSibling")
                },
                prev: function(a) {
                    return D(a, "previousSibling")
                },
                nextAll: function(a) {
                    return n.dir(a, "nextSibling")
                },
                prevAll: function(a) {
                    return n.dir(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return n.dir(a, "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return n.dir(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return n.sibling((a.parentNode || {}).firstChild, a)
                },
                children: function(a) {
                    return n.sibling(a.firstChild)
                },
                contents: function(a) {
                    return a.contentDocument || n.merge([], a.childNodes)
                }
            }, function(a, b) {
                n.fn[a] = function(c, d) {
                    var e = n.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = n.filter(d, e)),
                    this.length > 1 && (C[a] || n.unique(e),
                    B.test(a) && e.reverse()),
                    this.pushStack(e)
                }
            });
            var E = /\S+/g
              , F = {};
            n.Callbacks = function(a) {
                a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
                var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
                    for (b = a.memory && l,
                    c = !0,
                    g = e || 0,
                    e = 0,
                    f = h.length,
                    d = !0; h && f > g; g++)
                        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1,
                    h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
                }
                , k = {
                    add: function() {
                        if (h) {
                            var c = h.length;
                            !function g(b) {
                                n.each(b, function(b, c) {
                                    var d = n.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                                })
                            }(arguments),
                            d ? f = h.length : b && (e = c,
                            j(b))
                        }
                        return this
                    },
                    remove: function() {
                        return h && n.each(arguments, function(a, b) {
                            for (var c; (c = n.inArray(b, h, c)) > -1; )
                                h.splice(c, 1),
                                d && (f >= c && f--,
                                g >= c && g--)
                        }),
                        this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                    },
                    empty: function() {
                        return h = [],
                        f = 0,
                        this
                    },
                    disable: function() {
                        return h = i = b = void 0,
                        this
                    },
                    disabled: function() {
                        return !h
                    },
                    lock: function() {
                        return i = void 0,
                        b || k.disable(),
                        this
                    },
                    locked: function() {
                        return !i
                    },
                    fireWith: function(a, b) {
                        return !h || c && !i || (b = b || [],
                        b = [a, b.slice ? b.slice() : b],
                        d ? i.push(b) : j(b)),
                        this
                    },
                    fire: function() {
                        return k.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!c
                    }
                };
                return k
            }
            ,
            n.extend({
                Deferred: function(a) {
                    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
                      , c = "pending"
                      , d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }),
                                a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    }
                      , e = {};
                    return d.pipe = d.then,
                    n.each(b, function(a, f) {
                        var g = f[2]
                          , h = f[3];
                        d[f[1]] = g.add,
                        h && g.add(function() {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock),
                        e[f[0]] = function() {
                            return e[f[0] + "With"](this === e ? d : this, arguments),
                            this
                        }
                        ,
                        e[f[0] + "With"] = g.fireWith
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                },
                when: function(a) {
                    var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                        return function(e) {
                            b[a] = this,
                            c[a] = arguments.length > 1 ? d.call(arguments) : e,
                            c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    }
                    ;
                    if (e > 1)
                        for (i = new Array(e),
                        j = new Array(e),
                        k = new Array(e); e > b; b++)
                            c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                    return f || g.resolveWith(k, c),
                    g.promise()
                }
            });
            var H;
            n.fn.ready = function(a) {
                return n.ready.promise().done(a),
                this
            }
            ,
            n.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? n.readyWait++ : n.ready(!0)
                },
                ready: function(a) {
                    (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
                    a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
                    n.fn.triggerHandler && (n(l).triggerHandler("ready"),
                    n(l).off("ready"))))
                }
            }),
            n.ready.promise = function(b) {
                return H || (H = n.Deferred(),
                "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
                a.addEventListener("load", I, !1))),
                H.promise(b)
            }
            ,
            n.ready.promise();
            var J = n.access = function(a, b, c, d, e, f, g) {
                var h = 0
                  , i = a.length
                  , j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c)
                        n.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0,
                n.isFunction(d) || (g = !0),
                j && (g ? (b.call(a, d),
                b = null ) : (j = b,
                b = function(a, b, c) {
                    return j.call(n(a), c)
                }
                )),
                b))
                    for (; i > h; h++)
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }
            ;
            n.acceptData = function(a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            }
            ,
            K.uid = 1,
            K.accepts = n.acceptData,
            K.prototype = {
                key: function(a) {
                    if (!K.accepts(a))
                        return 0;
                    var b = {}
                      , c = a[this.expando];
                    if (!c) {
                        c = K.uid++;
                        try {
                            b[this.expando] = {
                                value: c
                            },
                            Object.defineProperties(a, b)
                        } catch (d) {
                            b[this.expando] = c,
                            n.extend(a, b)
                        }
                    }
                    return this.cache[c] || (this.cache[c] = {}),
                    c
                },
                set: function(a, b, c) {
                    var d, e = this.key(a), f = this.cache[e];
                    if ("string" == typeof b)
                        f[b] = c;
                    else if (n.isEmptyObject(f))
                        n.extend(this.cache[e], b);
                    else
                        for (d in b)
                            f[d] = b[d];
                    return f
                },
                get: function(a, b) {
                    var c = this.cache[this.key(a)];
                    return void 0 === b ? c : c[b]
                },
                access: function(a, b, c) {
                    var d;
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
                    void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
                    void 0 !== c ? c : b)
                },
                remove: function(a, b) {
                    var c, d, e, f = this.key(a), g = this.cache[f];
                    if (void 0 === b)
                        this.cache[f] = {};
                    else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                        b in g ? d = [b, e] : (d = e,
                        d = d in g ? [d] : d.match(E) || [])),
                        c = d.length;
                        for (; c--; )
                            delete g[d[c]]
                    }
                },
                hasData: function(a) {
                    return !n.isEmptyObject(this.cache[a[this.expando]] || {})
                },
                discard: function(a) {
                    a[this.expando] && delete this.cache[a[this.expando]]
                }
            };
            var L = new K
              , M = new K
              , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , O = /([A-Z])/g;
            n.extend({
                hasData: function(a) {
                    return M.hasData(a) || L.hasData(a)
                },
                data: function(a, b, c) {
                    return M.access(a, b, c)
                },
                removeData: function(a, b) {
                    M.remove(a, b)
                },
                _data: function(a, b, c) {
                    return L.access(a, b, c)
                },
                _removeData: function(a, b) {
                    L.remove(a, b)
                }
            }),
            n.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = M.get(f),
                        1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                            for (c = g.length; c--; )
                                g[c] && (d = g[c].name,
                                0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                                P(f, d, e[d])));
                            L.set(f, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function() {
                        M.set(this, a)
                    }) : J(this, function(b) {
                        var c, d = n.camelCase(a);
                        if (f && void 0 === b) {
                            if (c = M.get(f, a),
                            void 0 !== c)
                                return c;
                            if (c = M.get(f, d),
                            void 0 !== c)
                                return c;
                            if (c = P(f, d, void 0),
                            void 0 !== c)
                                return c
                        } else
                            this.each(function() {
                                var c = M.get(this, d);
                                M.set(this, d, b),
                                -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                            })
                    }, null , b, arguments.length > 1, null , !0)
                },
                removeData: function(a) {
                    return this.each(function() {
                        M.remove(this, a)
                    })
                }
            }),
            n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue",
                    d = L.get(a, b),
                    c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
                    d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b)
                      , d = c.length
                      , e = c.shift()
                      , f = n._queueHooks(a, b)
                      , g = function() {
                        n.dequeue(a, b)
                    }
                    ;
                    "inprogress" === e && (e = c.shift(),
                    d--),
                    e && ("fx" === b && c.unshift("inprogress"),
                    delete f.stop,
                    e.call(a, g, f)),
                    !d && f && f.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return L.get(a, c) || L.access(a, c, {
                        empty: n.Callbacks("once memory").add(function() {
                            L.remove(a, [b + "queue", c])
                        })
                    })
                }
            }),
            n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a,
                    a = "fx",
                    c--),
                    arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a),
                        "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
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
                    var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                        --d || e.resolveWith(f, [f])
                    }
                    ;
                    for ("string" != typeof a && (b = a,
                    a = void 0),
                    a = a || "fx"; g--; )
                        c = L.get(f[g], a + "queueHooks"),
                        c && c.empty && (d++,
                        c.empty.add(h));
                    return h(),
                    e.promise(b)
                }
            });
            var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , R = ["Top", "Right", "Bottom", "Left"]
              , S = function(a, b) {
                return a = b || a,
                "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            }
              , T = /^(?:checkbox|radio)$/i;
            !function() {
                var a = l.createDocumentFragment()
                  , b = a.appendChild(l.createElement("div"))
                  , c = l.createElement("input");
                c.setAttribute("type", "radio"),
                c.setAttribute("checked", "checked"),
                c.setAttribute("name", "t"),
                b.appendChild(c),
                k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.innerHTML = "<textarea>x</textarea>",
                k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
            }();
            var U = "undefined";
            k.focusinBubbles = "onfocusin"in a;
            var V = /^key/
              , W = /^(?:mouse|pointer|contextmenu)|click/
              , X = /^(?:focusinfocus|focusoutblur)$/
              , Y = /^([^.]*)(?:\.(.+)|)$/;
            n.event = {
                global: {},
                add: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                    if (r)
                        for (c.handler && (f = c,
                        c = f.handler,
                        e = f.selector),
                        c.guid || (c.guid = n.guid++),
                        (i = r.events) || (i = r.events = {}),
                        (g = r.handle) || (g = r.handle = function(b) {
                            return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                        }
                        ),
                        b = (b || "").match(E) || [""],
                        j = b.length; j--; )
                            h = Y.exec(b[j]) || [],
                            o = q = h[1],
                            p = (h[2] || "").split(".").sort(),
                            o && (l = n.event.special[o] || {},
                            o = (e ? l.delegateType : l.bindType) || o,
                            l = n.event.special[o] || {},
                            k = n.extend({
                                type: o,
                                origType: q,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && n.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, f),
                            (m = i[o]) || (m = i[o] = [],
                            m.delegateCount = 0,
                            l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                            l.add && (l.add.call(a, k),
                            k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            n.event.global[o] = !0)
                },
                remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                    if (r && (i = r.events)) {
                        for (b = (b || "").match(E) || [""],
                        j = b.length; j--; )
                            if (h = Y.exec(b[j]) || [],
                            o = q = h[1],
                            p = (h[2] || "").split(".").sort(),
                            o) {
                                for (l = n.event.special[o] || {},
                                o = (d ? l.delegateType : l.bindType) || o,
                                m = i[o] || [],
                                h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                g = f = m.length; f--; )
                                    k = m[f],
                                    !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                                g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                                delete i[o])
                            } else
                                for (o in i)
                                    n.event.remove(a, o + b[j], c, d, !0);
                        n.isEmptyObject(i) && (delete r.handle,
                        L.remove(a, "events"))
                    }
                },
                trigger: function(b, c, d, e) {
                    var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (g = h = d = d || l,
                    3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
                    q = r.shift(),
                    r.sort()),
                    k = q.indexOf(":") < 0 && "on" + q,
                    b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
                    b.isTrigger = e ? 2 : 3,
                    b.namespace = r.join("."),
                    b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    b.result = void 0,
                    b.target || (b.target = d),
                    c = null == c ? [b] : n.makeArray(c, [b]),
                    o = n.event.special[q] || {},
                    e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                        if (!e && !o.noBubble && !n.isWindow(d)) {
                            for (i = o.delegateType || q,
                            X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                                p.push(g),
                                h = g;
                            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                        }
                        for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); )
                            b.type = f > 1 ? i : o.bindType || q,
                            m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                            m && m.apply(g, c),
                            m = k && g[k],
                            m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                            b.result === !1 && b.preventDefault());
                        return b.type = q,
                        e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                        h && (d[k] = null ),
                        n.event.triggered = q,
                        d[q](),
                        n.event.triggered = void 0,
                        h && (d[k] = h)),
                        b.result
                    }
                },
                dispatch: function(a) {
                    a = n.event.fix(a);
                    var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                    if (i[0] = a,
                    a.delegateTarget = this,
                    !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                        for (h = n.event.handlers.call(this, a, j),
                        b = 0; (f = h[b++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = f.elem,
                            c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                                (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                                a.data = g.data,
                                e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                                void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                                a.stopPropagation()));
                        return k.postDispatch && k.postDispatch.call(this, a),
                        a.result
                    }
                },
                handlers: function(a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && (!a.button || "click" !== a.type))
                        for (; i !== this; i = i.parentNode || this)
                            if (i.disabled !== !0 || "click" !== a.type) {
                                for (d = [],
                                c = 0; h > c; c++)
                                    f = b[c],
                                    e = f.selector + " ",
                                    void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null , [i]).length),
                                    d[e] && d.push(f);
                                d.length && g.push({
                                    elem: i,
                                    handlers: d
                                })
                            }
                    return h < b.length && g.push({
                        elem: this,
                        handlers: b.slice(h)
                    }),
                    g
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                        a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(a, b) {
                        var c, d, e, f = b.button;
                        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l,
                        d = c.documentElement,
                        e = c.body,
                        a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                        a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                    }
                },
                fix: function(a) {
                    if (a[n.expando])
                        return a;
                    var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                    for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
                    d = g.props ? this.props.concat(g.props) : this.props,
                    a = new n.Event(f),
                    b = d.length; b--; )
                        c = d[b],
                        a[c] = f[c];
                    return a.target || (a.target = l),
                    3 === a.target.nodeType && (a.target = a.target.parentNode),
                    g.filter ? g.filter(a, f) : a
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== _() && this.focus ? (this.focus(),
                            !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === _() && this.blur ? (this.blur(),
                            !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                            !1) : void 0
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
                },
                simulate: function(a, b, c, d) {
                    var e = n.extend(new n.Event, c, {
                        type: a,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    d ? n.event.trigger(e, null , b) : n.event.dispatch.call(b, e),
                    e.isDefaultPrevented() && c.preventDefault()
                }
            },
            n.removeEvent = function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }
            ,
            n.Event = function(a, b) {
                return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
                b && n.extend(this, b),
                this.timeStamp = a && a.timeStamp || n.now(),
                void (this[n.expando] = !0)) : new n.Event(a,b)
            }
            ,
            n.Event.prototype = {
                isDefaultPrevented: $,
                isPropagationStopped: $,
                isImmediatePropagationStopped: $,
                preventDefault: function() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = Z,
                    a && a.preventDefault && a.preventDefault()
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Z,
                    a && a.stopPropagation && a.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Z,
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            n.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                        c = f.handler.apply(this, arguments),
                        a.type = b),
                        c
                    }
                }
            }),
            k.focusinBubbles || n.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = function(a) {
                    n.event.simulate(b, a.target, n.event.fix(a), !0)
                }
                ;
                n.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this
                          , e = L.access(d, b);
                        e || d.addEventListener(a, c, !0),
                        L.access(d, b, (e || 0) + 1)
                    },
                    teardown: function() {
                        var d = this.ownerDocument || this
                          , e = L.access(d, b) - 1;
                        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                        L.remove(d, b))
                    }
                }
            }),
            n.fn.extend({
                on: function(a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && (c = c || b,
                        b = void 0);
                        for (g in a)
                            this.on(g, b, c, a[g], e);
                        return this
                    }
                    if (null == c && null == d ? (d = b,
                    c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                    c = void 0) : (d = c,
                    c = b,
                    b = void 0)),
                    d === !1)
                        d = $;
                    else if (!d)
                        return this;
                    return 1 === e && (f = d,
                    d = function(a) {
                        return n().off(a),
                        f.apply(this, arguments)
                    }
                    ,
                    d.guid = f.guid || (f.guid = n.guid++)),
                    this.each(function() {
                        n.event.add(this, a, d, c, b)
                    })
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function(a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)
                        return d = a.handleObj,
                        n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this;
                    if ("object" == typeof a) {
                        for (e in a)
                            this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || "function" == typeof b) && (c = b,
                    b = void 0),
                    c === !1 && (c = $),
                    this.each(function() {
                        n.event.remove(this, a, c, b)
                    })
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        n.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0
                }
            });
            var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
              , ba = /<([\w:]+)/
              , ca = /<|&#?\w+;/
              , da = /<(?:script|style|link)/i
              , ea = /checked\s*(?:[^=]|=\s*.checked.)/i
              , fa = /^$|\/(?:java|ecma)script/i
              , ga = /^true\/(.*)/
              , ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
              , ia = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ia.optgroup = ia.option,
            ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead,
            ia.th = ia.td,
            n.extend({
                clone: function(a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                    if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                        for (g = oa(h),
                        f = oa(a),
                        d = 0,
                        e = f.length; e > d; d++)
                            pa(f[d], g[d]);
                    if (b)
                        if (c)
                            for (f = f || oa(a),
                            g = g || oa(h),
                            d = 0,
                            e = f.length; e > d; d++)
                                na(f[d], g[d]);
                        else
                            na(a, h);
                    return g = oa(h, "script"),
                    g.length > 0 && ma(g, !i && oa(a, "script")),
                    h
                },
                buildFragment: function(a, b, c, d) {
                    for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                        if (e = a[m],
                        e || 0 === e)
                            if ("object" === n.type(e))
                                n.merge(l, e.nodeType ? [e] : e);
                            else if (ca.test(e)) {
                                for (f = f || k.appendChild(b.createElement("div")),
                                g = (ba.exec(e) || ["", ""])[1].toLowerCase(),
                                h = ia[g] || ia._default,
                                f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2],
                                j = h[0]; j--; )
                                    f = f.lastChild;
                                n.merge(l, f.childNodes),
                                f = k.firstChild,
                                f.textContent = ""
                            } else
                                l.push(b.createTextNode(e));
                    for (k.textContent = "",
                    m = 0; e = l[m++]; )
                        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                        f = oa(k.appendChild(e), "script"),
                        i && ma(f),
                        c))
                            for (j = 0; e = f[j++]; )
                                fa.test(e.type || "") && c.push(e);
                    return k
                },
                cleanData: function(a) {
                    for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                        if (n.acceptData(c) && (e = c[L.expando],
                        e && (b = L.cache[e]))) {
                            if (b.events)
                                for (d in b.events)
                                    f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            L.cache[e] && delete L.cache[e]
                        }
                        delete M.cache[c[M.expando]]
                    }
                }
            }),
            n.fn.extend({
                text: function(a) {
                    return J(this, function(a) {
                        return void 0 === a ? n.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                        })
                    }, null , a, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.appendChild(a)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                },
                remove: function(a, b) {
                    for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                        b || 1 !== c.nodeType || n.cleanData(oa(c)),
                        c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                        c.parentNode.removeChild(c));
                    return this
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++)
                        1 === a.nodeType && (n.cleanData(oa(a, !1)),
                        a.textContent = "");
                    return this
                },
                clone: function(a, b) {
                    return a = null == a ? !1 : a,
                    b = null == b ? a : b,
                    this.map(function() {
                        return n.clone(this, a, b)
                    })
                },
                html: function(a) {
                    return J(this, function(a) {
                        var b = this[0] || {}
                          , c = 0
                          , d = this.length;
                        if (void 0 === a && 1 === b.nodeType)
                            return b.innerHTML;
                        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(aa, "<$1></$2>");
                            try {
                                for (; d > c; c++)
                                    b = this[c] || {},
                                    1 === b.nodeType && (n.cleanData(oa(b, !1)),
                                    b.innerHTML = a);
                                b = 0
                            } catch (e) {}
                        }
                        b && this.empty().append(a)
                    }, null , a, arguments.length)
                },
                replaceWith: function() {
                    var a = arguments[0];
                    return this.domManip(arguments, function(b) {
                        a = this.parentNode,
                        n.cleanData(oa(this)),
                        a && a.replaceChild(b, this)
                    }),
                    a && (a.length || a.nodeType) ? this : this.remove()
                },
                detach: function(a) {
                    return this.remove(a, !0)
                },
                domManip: function(a, b) {
                    a = e.apply([], a);
                    var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                    if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
                        return this.each(function(c) {
                            var d = m.eq(c);
                            q && (a[0] = p.call(this, c, d.html())),
                            d.domManip(a, b)
                        });
                    if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
                    d = c.firstChild,
                    1 === c.childNodes.length && (c = d),
                    d)) {
                        for (f = n.map(oa(c, "script"), ka),
                        g = f.length; l > j; j++)
                            h = c,
                            j !== o && (h = n.clone(h, !0, !0),
                            g && n.merge(f, oa(h, "script"))),
                            b.call(this[j], h, j);
                        if (g)
                            for (i = f[f.length - 1].ownerDocument,
                            n.map(f, la),
                            j = 0; g > j; j++)
                                h = f[j],
                                fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
                    }
                    return this
                }
            }),
            n.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                n.fn[a] = function(a) {
                    for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                        c = h === g ? this : this.clone(!0),
                        n(e[h])[b](c),
                        f.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
            var qa, ra = {}, ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i"), wa = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null ) : a.getComputedStyle(b, null )
            }
            ;
            !function() {
                function g() {
                    f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    f.innerHTML = "",
                    d.appendChild(e);
                    var g = a.getComputedStyle(f, null );
                    b = "1%" !== g.top,
                    c = "4px" === g.width,
                    d.removeChild(e)
                }
                var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
                f.style && (f.style.backgroundClip = "content-box",
                f.cloneNode(!0).style.backgroundClip = "",
                k.clearCloneStyle = "content-box" === f.style.backgroundClip,
                e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
                e.appendChild(f),
                a.getComputedStyle && n.extend(k, {
                    pixelPosition: function() {
                        return g(),
                        b
                    },
                    boxSizingReliable: function() {
                        return null == c && g(),
                        c
                    },
                    reliableMarginRight: function() {
                        var b, c = f.appendChild(l.createElement("div"));
                        return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        c.style.marginRight = c.style.width = "0",
                        f.style.width = "1px",
                        d.appendChild(e),
                        b = !parseFloat(a.getComputedStyle(c, null ).marginRight),
                        d.removeChild(e),
                        f.removeChild(c),
                        b
                    }
                }))
            }(),
            n.swap = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b)
                    g[f] = a.style[f],
                    a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)
                    a.style[f] = g[f];
                return e
            }
            ;
            var za = /^(none|table(?!-c[ea]).+)/
              , Aa = new RegExp("^(" + Q + ")(.*)$","i")
              , Ba = new RegExp("^([+-])=(" + Q + ")","i")
              , Ca = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Da = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , Ea = ["Webkit", "O", "Moz", "ms"];
            n.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = xa(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                },
                cssNumber: {
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
                        var e, f, g, h = n.camelCase(b), i = a.style;
                        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)),
                        g = n.cssHooks[b] || n.cssHooks[h],
                        void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                        "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                        f = "number"),
                        void (null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                        k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                        g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                    }
                },
                css: function(a, b, c, d) {
                    var e, f, g, h = n.camelCase(b);
                    return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)),
                    g = n.cssHooks[b] || n.cssHooks[h],
                    g && "get"in g && (e = g.get(a, !0, c)),
                    void 0 === e && (e = xa(a, b, d)),
                    "normal" === e && b in Da && (e = Da[b]),
                    "" === c || c ? (f = parseFloat(e),
                    c === !0 || n.isNumeric(f) ? f || 0 : e) : e
                }
            }),
            n.each(["height", "width"], function(a, b) {
                n.cssHooks[b] = {
                    get: function(a, c, d) {
                        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                            return Ia(a, b, d)
                        }) : Ia(a, b, d) : void 0
                    },
                    set: function(a, c, d) {
                        var e = d && wa(a);
                        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                    }
                }
            }),
            n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
                return b ? n.swap(a, {
                    display: "inline-block"
                }, xa, [a, "marginRight"]) : void 0
            }),
            n.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                n.cssHooks[a + b] = {
                    expand: function(c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                },
                ua.test(a) || (n.cssHooks[a + b].set = Ga)
            }),
            n.fn.extend({
                css: function(a, b) {
                    return J(this, function(a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (n.isArray(b)) {
                            for (d = wa(a),
                            e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                    }, a, b, arguments.length > 1)
                },
                show: function() {
                    return Ja(this, !0)
                },
                hide: function() {
                    return Ja(this)
                },
                toggle: function(a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                        S(this) ? n(this).show() : n(this).hide()
                    })
                }
            }),
            n.Tween = Ka,
            Ka.prototype = {
                constructor: Ka,
                init: function(a, b, c, d, e, f) {
                    this.elem = a,
                    this.prop = c,
                    this.easing = e || "swing",
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (n.cssNumber[c] ? "" : "px")
                },
                cur: function() {
                    var a = Ka.propHooks[this.prop];
                    return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
                },
                run: function(a) {
                    var b, c = Ka.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
                    this
                }
            },
            Ka.prototype.init.prototype = Ka.prototype,
            Ka.propHooks = {
                _default: {
                    get: function(a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                        b && "auto" !== b ? b : 0) : a.elem[a.prop]
                    },
                    set: function(a) {
                        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            },
            Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            },
            n.easing = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }
            },
            n.fx = Ka.prototype.init,
            n.fx.step = {};
            var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b)
                      , d = c.cur()
                      , e = Oa.exec(b)
                      , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
                      , g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a))
                      , h = 1
                      , i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3],
                        e = e || [],
                        g = +d || 1;
                        do
                            h = h || ".5",
                            g /= h,
                            n.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0,
                    c.unit = f,
                    c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                    c
                }
                ]
            };
            n.Animation = n.extend(Xa, {
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a,
                    a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++)
                        c = a[d],
                        Ra[c] = Ra[c] || [],
                        Ra[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? Qa.unshift(a) : Qa.push(a)
                }
            }),
            n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                d.old = d.complete,
                d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this),
                    d.queue && n.dequeue(this, d.queue)
                }
                ,
                d
            }
            ,
            n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(S).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a)
                      , f = n.speed(b, c, d)
                      , g = function() {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    }
                    ;
                    return g.finish = g,
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop,
                        b(c)
                    }
                    ;
                    return "string" != typeof a && (c = b,
                    b = a,
                    a = void 0),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        var b = !0
                          , e = null != a && a + "queueHooks"
                          , f = n.timers
                          , g = L.get(this);
                        if (e)
                            g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                            b = !1,
                            f.splice(e, 1));
                        (b || !c) && n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"),
                    this.each(function() {
                        var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                        for (c.finish = !0,
                        n.queue(this, a, []),
                        e && e.stop && e.stop.call(this, !0),
                        b = f.length; b--; )
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                            f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }),
            n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
                }
            }),
            n.each({
                slideDown: Ta("show"),
                slideUp: Ta("hide"),
                slideToggle: Ta("toggle"),
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
            }),
            n.timers = [],
            n.fx.tick = function() {
                var a, b = 0, c = n.timers;
                for (La = n.now(); b < c.length; b++)
                    a = c[b],
                    a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(),
                La = void 0
            }
            ,
            n.fx.timer = function(a) {
                n.timers.push(a),
                a() ? n.fx.start() : n.timers.pop()
            }
            ,
            n.fx.interval = 13,
            n.fx.start = function() {
                Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
            }
            ,
            n.fx.stop = function() {
                clearInterval(Ma),
                Ma = null
            }
            ,
            n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            n.fn.delay = function(a, b) {
                return a = n.fx ? n.fx.speeds[a] || a : a,
                b = b || "fx",
                this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            }
            ,
            function() {
                var a = l.createElement("input")
                  , b = l.createElement("select")
                  , c = b.appendChild(l.createElement("option"));
                a.type = "checkbox",
                k.checkOn = "" !== a.value,
                k.optSelected = c.selected,
                b.disabled = !0,
                k.optDisabled = !c.disabled,
                a = l.createElement("input"),
                a.value = "t",
                a.type = "radio",
                k.radioValue = "t" === a.value
            }();
            var Ya, Za, $a = n.expr.attrHandle;
            n.fn.extend({
                attr: function(a, b) {
                    return J(this, n.attr, a, b, arguments.length > 1)
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        n.removeAttr(this, a)
                    })
                }
            }),
            n.extend({
                attr: function(a, b, c) {
                    var d, e, f = a.nodeType;
                    return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                    d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                    void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                    null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                    c) : void n.removeAttr(a, b)) : void 0
                },
                removeAttr: function(a, b) {
                    var c, d, e = 0, f = b && b.match(E);
                    if (f && 1 === a.nodeType)
                        for (; c = f[e++]; )
                            d = n.propFix[c] || c,
                            n.expr.match.bool.test(c) && (a[d] = !1),
                            a.removeAttribute(c)
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b),
                                c && (a.value = c),
                                b
                            }
                        }
                    }
                }
            }),
            Za = {
                set: function(a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
                    c
                }
            },
            n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
                var c = $a[b] || n.find.attr;
                $a[b] = function(a, b, d) {
                    var e, f;
                    return d || (f = $a[b],
                    $a[b] = e,
                    e = null != c(a, b, d) ? b.toLowerCase() : null ,
                    $a[b] = f),
                    e
                }
            });
            var _a = /^(?:input|select|textarea|button)$/i;
            n.fn.extend({
                prop: function(a, b) {
                    return J(this, n.prop, a, b, arguments.length > 1)
                },
                removeProp: function(a) {
                    return this.each(function() {
                        delete this[n.propFix[a] || a]
                    })
                }
            }),
            n.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(a, b, c) {
                    var d, e, f, g = a.nodeType;
                    return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a),
                    f && (b = n.propFix[b] || b,
                    e = n.propHooks[b]),
                    void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                        }
                    }
                }
            }),
            k.optSelected || (n.propHooks.selected = {
                get: function(a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex,
                    null
                }
            }),
            n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                n.propFix[this.toLowerCase()] = this
            });
            var ab = /[\t\r\n\f]/g;
            n.fn.extend({
                addClass: function(a) {
                    var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))
                        return this.each(function(b) {
                            n(this).addClass(a.call(this, b, this.className))
                        });
                    if (h)
                        for (b = (a || "").match(E) || []; j > i; i++)
                            if (c = this[i],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                                for (f = 0; e = b[f++]; )
                                    d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                                g = n.trim(d),
                                c.className !== g && (c.className = g)
                            }
                    return this
                },
                removeClass: function(a) {
                    var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))
                        return this.each(function(b) {
                            n(this).removeClass(a.call(this, b, this.className))
                        });
                    if (h)
                        for (b = (a || "").match(E) || []; j > i; i++)
                            if (c = this[i],
                            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                                for (f = 0; e = b[f++]; )
                                    for (; d.indexOf(" " + e + " ") >= 0; )
                                        d = d.replace(" " + e + " ", " ");
                                g = a ? n.trim(d) : "",
                                c.className !== g && (c.className = g)
                            }
                    return this
                },
                toggleClass: function(a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                        n(this).toggleClass(a.call(this, c, this.className, b), b)
                    }
                    : function() {
                        if ("string" === c)
                            for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; )
                                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                        else
                            (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                            this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                    }
                    )
                },
                hasClass: function(a) {
                    for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)
                            return !0;
                    return !1
                }
            });
            var bb = /\r/g;
            n.fn.extend({
                val: function(a) {
                    var b, c, d, e = this[0];
                    return arguments.length ? (d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)) : void 0
                }
            }),
            n.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a))
                        }
                    },
                    select: {
                        get: function(a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                if (c = d[i],
                                !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                                    if (b = n(c).val(),
                                    f)
                                        return b;
                                    g.push(b)
                                }
                            return g
                        },
                        set: function(a, b) {
                            for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; )
                                d = e[g],
                                (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                            return c || (a.selectedIndex = -1),
                            f
                        }
                    }
                }
            }),
            n.each(["radio", "checkbox"], function() {
                n.valHooks[this] = {
                    set: function(a, b) {
                        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
                    }
                },
                k.checkOn || (n.valHooks[this].get = function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
                )
            }),
            n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                n.fn[b] = function(a, c) {
                    return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
                }
            }),
            n.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                },
                bind: function(a, b, c) {
                    return this.on(a, null , b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null , b)
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
            var cb = n.now()
              , db = /\?/;
            n.parseJSON = function(a) {
                return JSON.parse(a + "")
            }
            ,
            n.parseXML = function(a) {
                var b, c;
                if (!a || "string" != typeof a)
                    return null ;
                try {
                    c = new DOMParser,
                    b = c.parseFromString(a, "text/xml")
                } catch (d) {
                    b = void 0
                }
                return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
                b
            }
            ;
            var eb = /#.*$/
              , fb = /([?&])_=[^&]*/
              , gb = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , ib = /^(?:GET|HEAD)$/
              , jb = /^\/\//
              , kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
              , lb = {}
              , mb = {}
              , nb = "*/".concat("*")
              , ob = a.location.href
              , pb = kb.exec(ob.toLowerCase()) || [];
            n.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ob,
                    type: "GET",
                    isLocal: hb.test(pb[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": nb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
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
                    return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
                },
                ajaxPrefilter: qb(lb),
                ajaxTransport: qb(mb),
                ajax: function(a, b) {
                    function x(a, b, f, h) {
                        var j, r, s, u, w, x = b;
                        2 !== t && (t = 2,
                        g && clearTimeout(g),
                        c = void 0,
                        e = h || "",
                        v.readyState = a > 0 ? 4 : 0,
                        j = a >= 200 && 300 > a || 304 === a,
                        f && (u = tb(k, v, f)),
                        u = ub(k, u, v, j),
                        j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                        w && (n.lastModified[d] = w),
                        w = v.getResponseHeader("etag"),
                        w && (n.etag[d] = w)),
                        204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                        r = u.data,
                        s = u.error,
                        j = !s)) : (s = x,
                        (a || !x) && (x = "error",
                        0 > a && (a = 0))),
                        v.status = a,
                        v.statusText = (b || x) + "",
                        j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                        v.statusCode(q),
                        q = void 0,
                        i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                        p.fireWith(l, [v, x]),
                        i && (m.trigger("ajaxComplete", [v, k]),
                        --n.active || n.event.trigger("ajaxStop")))
                    }
                    "object" == typeof a && (b = a,
                    a = void 0),
                    b = b || {};
                    var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!f)
                                    for (f = {}; b = gb.exec(e); )
                                        f[b[1].toLowerCase()] = b[2];
                                b = f[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? e : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a,
                            r[a] = b),
                            this
                        },
                        overrideMimeType: function(a) {
                            return t || (k.mimeType = a),
                            this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a)
                                        q[b] = [q[b], a[b]];
                                else
                                    v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return c && c.abort(b),
                            x(0, b),
                            this
                        }
                    };
                    if (o.promise(v).complete = p.add,
                    v.success = v.done,
                    v.error = v.fail,
                    k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"),
                    k.type = b.method || b.type || k.method || k.type,
                    k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
                    null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()),
                    k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))),
                    k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
                    rb(lb, k, b, v),
                    2 === t)
                        return v;
                    i = n.event && k.global,
                    i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                    k.type = k.type.toUpperCase(),
                    k.hasContent = !ib.test(k.type),
                    d = k.url,
                    k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data,
                    delete k.data),
                    k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
                    k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
                    n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                    (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
                    v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
                    for (j in k.headers)
                        v.setRequestHeader(j, k.headers[j]);
                    if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                        return v.abort();
                    u = "abort";
                    for (j in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        v[j](k[j]);
                    if (c = rb(mb, k, b, v)) {
                        v.readyState = 1,
                        i && m.trigger("ajaxSend", [v, k]),
                        k.async && k.timeout > 0 && (g = setTimeout(function() {
                            v.abort("timeout")
                        }, k.timeout));
                        try {
                            t = 1,
                            c.send(r, x)
                        } catch (w) {
                            if (!(2 > t))
                                throw w;
                            x(-1, w)
                        }
                    } else
                        x(-1, "No Transport");
                    return v
                },
                getJSON: function(a, b, c) {
                    return n.get(a, b, c, "json")
                },
                getScript: function(a, b) {
                    return n.get(a, void 0, b, "script")
                }
            }),
            n.each(["get", "post"], function(a, b) {
                n[b] = function(a, c, d, e) {
                    return n.isFunction(c) && (e = e || d,
                    d = c,
                    c = void 0),
                    n.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    })
                }
            }),
            n._evalUrl = function(a) {
                return n.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            n.fn.extend({
                wrapAll: function(a) {
                    var b;
                    return n.isFunction(a) ? this.each(function(b) {
                        n(this).wrapAll(a.call(this, b))
                    }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        for (var a = this; a.firstElementChild; )
                            a = a.firstElementChild;
                        return a
                    }).append(this)),
                    this)
                },
                wrapInner: function(a) {
                    return this.each(n.isFunction(a) ? function(b) {
                        n(this).wrapInner(a.call(this, b))
                    }
                    : function() {
                        var b = n(this)
                          , c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    }
                    )
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
            }),
            n.expr.filters.hidden = function(a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0
            }
            ,
            n.expr.filters.visible = function(a) {
                return !n.expr.filters.hidden(a)
            }
            ;
            var vb = /%20/g
              , wb = /\[\]$/
              , xb = /\r?\n/g
              , yb = /^(?:submit|button|image|reset|file)$/i
              , zb = /^(?:input|select|textarea|keygen)/i;
            n.param = function(a, b) {
                var c, d = [], e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                }
                ;
                if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
                n.isArray(a) || a.jquery && !n.isPlainObject(a))
                    n.each(a, function() {
                        e(this.name, this.value)
                    });
                else
                    for (c in a)
                        Ab(c, a[c], b, e);
                return d.join("&").replace(vb, "+")
            }
            ,
            n.fn.extend({
                serialize: function() {
                    return n.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var a = n.prop(this, "elements");
                        return a ? n.makeArray(a) : this
                    }).filter(function() {
                        var a = this.type;
                        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
                    }).map(function(a, b) {
                        var c = n(this).val();
                        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                            return {
                                name: b.name,
                                value: a.replace(xb, "\r\n")
                            }
                        }) : {
                            name: b.name,
                            value: c.replace(xb, "\r\n")
                        }
                    }).get()
                }
            }),
            n.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (a) {}
            }
            ;
            var Bb = 0
              , Cb = {}
              , Db = {
                0: 200,
                1223: 204
            }
              , Eb = n.ajaxSettings.xhr();
            a.attachEvent && a.attachEvent("onunload", function() {
                for (var a in Cb)
                    Cb[a]()
            }),
            k.cors = !!Eb && "withCredentials"in Eb,
            k.ajax = Eb = !!Eb,
            n.ajaxTransport(function(a) {
                var b;
                return k.cors || Eb && !a.crossDomain ? {
                    send: function(c, d) {
                        var e, f = a.xhr(), g = ++Bb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password),
                        a.xhrFields)
                            for (e in a.xhrFields)
                                f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                        a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c)
                            f.setRequestHeader(e, c[e]);
                        b = function(a) {
                            return function() {
                                b && (delete Cb[g],
                                b = f.onload = f.onerror = null ,
                                "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                    text: f.responseText
                                } : void 0, f.getAllResponseHeaders()))
                            }
                        }
                        ,
                        f.onload = b(),
                        f.onerror = b("error"),
                        b = Cb[g] = b("abort");
                        try {
                            f.send(a.hasContent && a.data || null )
                        } catch (h) {
                            if (b)
                                throw h
                        }
                    },
                    abort: function() {
                        b && b()
                    }
                } : void 0
            }),
            n.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(a) {
                        return n.globalEval(a),
                        a
                    }
                }
            }),
            n.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET")
            }),
            n.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function(d, e) {
                            b = n("<script>").prop({
                                async: !0,
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function(a) {
                                b.remove(),
                                c = null ,
                                a && e("error" === a.type ? 404 : 200, a.type)
                            }
                            ),
                            l.head.appendChild(b[0])
                        },
                        abort: function() {
                            c && c()
                        }
                    }
                }
            });
            var Fb = []
              , Gb = /(=)\?(?=&|$)|\?\?/;
            n.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = Fb.pop() || n.expando + "_" + cb++;
                    return this[a] = !0,
                    a
                }
            }),
            n.ajaxPrefilter("json jsonp", function(b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                b.converters["script json"] = function() {
                    return g || n.error(e + " was not called"),
                    g[0]
                }
                ,
                b.dataTypes[0] = "json",
                f = a[e],
                a[e] = function() {
                    g = arguments
                }
                ,
                d.always(function() {
                    a[e] = f,
                    b[e] && (b.jsonpCallback = c.jsonpCallback,
                    Fb.push(e)),
                    g && n.isFunction(f) && f(g[0]),
                    g = f = void 0
                }),
                "script") : void 0
            }),
            n.parseHTML = function(a, b, c) {
                if (!a || "string" != typeof a)
                    return null ;
                "boolean" == typeof b && (c = b,
                b = !1),
                b = b || l;
                var d = v.exec(a)
                  , e = !c && [];
                return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
                e && e.length && n(e).remove(),
                n.merge([], d.childNodes))
            }
            ;
            var Hb = n.fn.load;
            n.fn.load = function(a, b, c) {
                if ("string" != typeof a && Hb)
                    return Hb.apply(this, arguments);
                var d, e, f, g = this, h = a.indexOf(" ");
                return h >= 0 && (d = n.trim(a.slice(h)),
                a = a.slice(0, h)),
                n.isFunction(b) ? (c = b,
                b = void 0) : b && "object" == typeof b && (e = "POST"),
                g.length > 0 && n.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b
                }).done(function(a) {
                    f = arguments,
                    g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
                }).complete(c && function(a, b) {
                    g.each(c, f || [a.responseText, b, a])
                }
                ),
                this
            }
            ,
            n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
                n.fn[b] = function(a) {
                    return this.on(b, a)
                }
            }),
            n.expr.filters.animated = function(a) {
                return n.grep(n.timers, function(b) {
                    return a === b.elem
                }).length
            }
            ;
            var Ib = a.document.documentElement;
            n.offset = {
                setOffset: function(a, b, c) {
                    var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
                    "static" === k && (a.style.position = "relative"),
                    h = l.offset(),
                    f = n.css(a, "top"),
                    i = n.css(a, "left"),
                    j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                    j ? (d = l.position(),
                    g = d.top,
                    e = d.left) : (g = parseFloat(f) || 0,
                    e = parseFloat(i) || 0),
                    n.isFunction(b) && (b = b.call(a, c, h)),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using"in b ? b.using.call(a, m) : l.css(m)
                }
            },
            n.fn.extend({
                offset: function(a) {
                    if (arguments.length)
                        return void 0 === a ? this : this.each(function(b) {
                            n.offset.setOffset(this, a, b)
                        });
                    var b, c, d = this[0], e = {
                        top: 0,
                        left: 0
                    }, f = d && d.ownerDocument;
                    return f ? (b = f.documentElement,
                    n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                    c = Jb(f),
                    {
                        top: e.top + c.pageYOffset - b.clientTop,
                        left: e.left + c.pageXOffset - b.clientLeft
                    }) : e) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var a, b, c = this[0], d = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                        b = this.offset(),
                        n.nodeName(a[0], "html") || (d = a.offset()),
                        d.top += n.css(a[0], "borderTopWidth", !0),
                        d.left += n.css(a[0], "borderLeftWidth", !0)),
                        {
                            top: b.top - d.top - n.css(c, "marginTop", !0),
                            left: b.left - d.left - n.css(c, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); )
                            a = a.offsetParent;
                        return a || Ib
                    })
                }
            }),
            n.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(b, c) {
                var d = "pageYOffset" === c;
                n.fn[b] = function(e) {
                    return J(this, function(b, e, f) {
                        var g = Jb(b);
                        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                    }, b, e, arguments.length, null )
                }
            }),
            n.each(["top", "left"], function(a, b) {
                n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
                    return c ? (c = xa(a, b),
                    va.test(c) ? n(a).position()[b] + "px" : c) : void 0
                })
            }),
            n.each({
                Height: "height",
                Width: "width"
            }, function(a, b) {
                n.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function(c, d) {
                    n.fn[d] = function(d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d)
                          , g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return J(this, function(b, c, d) {
                            var e;
                            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null )
                    }
                })
            }),
            n.fn.size = function() {
                return this.length
            }
            ,
            n.fn.andSelf = n.fn.addBack,
            "function" == typeof define && !1 && define.amd && define("jquery", [], function() {
                return n
            });
            var Kb = a.jQuery
              , Lb = a.$;
            return n.noConflict = function(b) {
                return a.$ === n && (a.$ = Lb),
                b && a.jQuery === n && (a.jQuery = Kb),
                n
            }
            ,
            typeof b === U && (a.jQuery = a.$ = n),
            n
        }),
        function($pushcrew) {
            "use strict";
            function retry(isDone, next) {
                var current_trial = 0
                  , max_retry = 50
                  , is_timeout = !1
                  , id = window.setInterval(function() {
                    isDone() && (window.clearInterval(id),
                    next(is_timeout)),
                    current_trial++ > max_retry && (window.clearInterval(id),
                    is_timeout = !0,
                    next(is_timeout))
                }, 10)
            }
            function isIE10OrLater(user_agent) {
                var ua = user_agent.toLowerCase();
                if (0 === ua.indexOf("msie") && 0 === ua.indexOf("trident"))
                    return !1;
                var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
                return !!(match && parseInt(match[1], 10) >= 10)
            }
            function detectPrivateMode(callback) {
                var is_private;
                if (window.webkitRequestFileSystem)
                    window.webkitRequestFileSystem(window.TEMPORARY, 1, function() {
                        is_private = !1
                    }, function(e) {
                        is_private = !0
                    });
                else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                    var db;
                    try {
                        db = window.indexedDB.open("test")
                    } catch (e) {
                        is_private = !0
                    }
                    "undefined" == typeof is_private && retry(function() {
                        return "done" === db.readyState
                    }, function(is_timeout) {
                        is_timeout || (is_private = !db.result)
                    })
                } else if (isIE10OrLater(window.navigator.userAgent)) {
                    is_private = !1;
                    try {
                        window.indexedDB || (is_private = !0)
                    } catch (e) {
                        is_private = !0
                    }
                } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                    try {
                        window.localStorage.setItem("test", 1)
                    } catch (e) {
                        is_private = !0
                    }
                    "undefined" == typeof is_private && (is_private = !1,
                    window.localStorage.removeItem("test"))
                }
                retry(function() {
                    return "undefined" != typeof is_private
                }, function(is_timeout) {
                    callback(is_private)
                })
            }
            function getBrowser() {
                var tem, ua = navigator.userAgent, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                return /trident/i.test(M[1]) ? (tem = /\brv[ :]+(\d+)/g.exec(ua) || [],
                {
                    name: "IE",
                    version: tem[1] || ""
                }) : "Chrome" === M[1] && (tem = ua.match(/\bOPR\/(\d+)/),
                null != tem) ? {
                    name: "Opera",
                    version: tem[1]
                } : (M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"],
                null != (tem = ua.match(/version\/(\d+)/i)) && M.splice(1, 1, tem[1]),
                isiOS && (M[0] = "iOS"),
                M[0] = M[0].toLowerCase(),
                {
                    name: M[0],
                    version: M[1]
                })
            }
            function getAndroidVersion() {
                var ua = navigator.userAgent.toLowerCase()
                  , match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : !1
            }
            function initAPIValues() {
                var subscriberId = pushAPI.storageUtil.getFromStorage("wingify_push_subscriber_id") || !1;
                "denied" === Notification.permission && (subscriberId = -1),
                pushcrew.subscriberId = subscriberId
            }
            function executeInternalQueue() {
                var _old_internalq = _internalq;
                _internalq = new internalQueue,
                _internalq.push.apply(_internalq, _old_internalq)
            }
            var pushAPI = pushAPI || {};
            pushAPI.pushSubscription = function() {
                var isPushEnabled = !1;
                return {
                    canPushBeEnabled: !0,
                    serviceWorkerPath: "",
                    isUserSubscriptionDenied: !1,
                    websiteSafariPushId: "",
                    browserType: "",
                    initialiseState: function() {
                        return "showNotification"in ServiceWorkerRegistration.prototype ? "denied" === Notification.permission ? (pushAPI.pushSubscription.canPushBeEnabled = !1,
                        pushAPI.pushSubscription.isUserSubscriptionDenied = !0,
                        !1) : "PushManager"in window ? !0 : (pushAPI.pushSubscription.canPushBeEnabled = !1,
                        !1) : (pushAPI.pushSubscription.canPushBeEnabled = !1,
                        !1)
                    },
                    registerServiceWorker: function() {
                        "serviceWorker"in navigator && navigator.serviceWorker.register(this.serviceWorkerPath,{scope:'../'}).then(this.initialiseState)
                    },
                    detectBrowserType: function() {
                        "safari"in window && "pushNotification"in window.safari ? this.browserType = "safari" : "chrome"in window && "serviceWorker"in navigator ? this.browserType = "chrome" : /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && "serviceWorker"in navigator ? this.browserType = "firefox" : (this.browserType = "not-supported",
                        this.canPushBeEnabled = !1)
                    },
                    subscribe: function() {
                        var promise = $pushcrew.Deferred();
                        return navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
                            serviceWorkerRegistration.pushManager.subscribe({
                                userVisibleOnly: !0
                            }).then(function(subscription) {
                                isPushEnabled = !0,
                                promise.resolve(subscription)
                            })["catch"](function() {
                                "denied" !== Notification.permission ? promise.resolve("error") : promise.resolve("denied")
                            })
                        }),
                        promise
                    },
                    getUserSubscription: function() {
                        var promise = $pushcrew.Deferred();
                        return navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
                            serviceWorkerRegistration.pushManager.getSubscription().then(function(subscription) {
                                subscription ? promise.resolve(subscription) : promise.resolve(!1)
                            })["catch"](function() {
                                promise.resolve(!1)
                            })
                        }),
                        promise
                    },
                    unsubscribe: function() {
                        var promise = $pushcrew.Deferred();
                        return navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
                            serviceWorkerRegistration.pushManager.getSubscription().then(function(subscription) {
                                subscription || (isPushEnabled = !1,
                                promise.resolve("error")),
                                subscription.unsubscribe().then(function() {
                                    isPushEnabled = !1,
                                    promise.resolve(subscription)
                                })["catch"](function() {
                                    promise.resolve("error")
                                })
                            })["catch"](function() {
                                promise.resolve("error")
                            })
                        }),
                        promise
                    },
                    registerForSafari: function() {
                        var permissionData = window.safari.pushNotification.permission(this.websiteSafariPushId);
                        return permissionData
                    }
                }
            }();
            var pushAPI = pushAPI || {};
            pushAPI.storageUtil = function() {
                var isLocalStorageEnabled = !1
                  , domainForCookieStorage = "";
                return {
                    initialiseState: function(domainForStorageUtil) {
                        domainForCookieStorage = domainForStorageUtil;
                        try {
                            "localStorage"in window && null !== window.localStorage && (isLocalStorageEnabled = !0)
                        } catch (e) {
                            isLocalStorageEnabled = !1
                        }
                    },
                    getCookie: function(cname) {
                        for (var name = cname + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                            for (var c = ca[i]; " " === c.charAt(0); )
                                c = c.substring(1);
                            if (0 === c.indexOf(name))
                                return c.substring(name.length, c.length)
                        }
                        return !1
                    },
                    setCookie: function(name, value, exdays) {
                        var d = new Date;
                        d.setTime(d.getTime() + 24 * parseInt(exdays) * 60 * 60 * 1e3);
                        var expires = "expires=" + d.toUTCString();
                        "self" == domainForCookieStorage ? document.cookie = name + "=" + value + ";path=/;" + expires : document.cookie = name + "=" + value + ";domain=" + domainForCookieStorage + ";path=/;" + expires
                    },
                    addToStorage: function(name, value, exdays) {
                        isLocalStorageEnabled && localStorage.setItem(name, value),
                        this.setCookie(name, value, exdays)
                    },
                    getFromStorage: function(cname) {
                        return localStorage.getItem(cname) || this.getCookie(cname) ? localStorage.getItem(cname) || this.getCookie(cname) : ""
                    },
                    deleteFromStorage: function(cname) {
                        isLocalStorageEnabled && localStorage[cname] && localStorage.removeItem(cname),
                        this.getCookie(cname) && this.setCookie(cname, "", -1)
                    }
                }
            }();
            var pushAPI = pushAPI || {};
            pushAPI.manageSubscription = function() {
                var syncServerURL = pushcrewConfig.serverSyncUrl
                  , safariServerURL = pushcrewConfig.serverSyncUrl
                  , firefoxEncryptionKey = "";
                return {
                    doesUserResponseExists: !1,
                    customerHash: "",
                    callSyncSubscription: function(data, promise, action, subscriptionId, subscriptionEndPoint) {
                        var setPushSubscriptionStorage = function() {
                            "unsubscribe-ui" !== action && "unsubscribe-native" !== action && (pushAPI.storageUtil.addToStorage("wingify_push_subscription_id", subscriptionId, 1e4),
                            pushAPI.storageUtil.addToStorage("wingify_push_subscription_endpoint", subscriptionEndPoint, 1e4))
                        }
                        ;
                        $pushcrew.ajax({
                            url: syncServerURL + "/syncSubscription.php",
                            type: "POST",
                            data: data,
                            dataType: "jsonp",
                            error: function() {
                                pushAPI.storageUtil.addToStorage("wingify_push_db_status", "false", 1e4),
                                setPushSubscriptionStorage(),
                                promise.resolve("error")
                            },
                            success: function(response) {
                                "success" === response.status ? (response.hasOwnProperty("subscriber_id") && (pushAPI.storageUtil.addToStorage("wingify_push_subscriber_id", response.subscriber_id, 1e4),
                                pushAPI.storageUtil.addToStorage("wingify_push_db_status", "true", 1e4),
                                pushAPI.storageUtil.addToStorage("wingify_push_subscription_status", "subscribed", 1e4)),
                                "unsubscribe-ui" !== action && "unsubscribe-native" !== action || (pushAPI.storageUtil.addToStorage("wingify_push_subscription_status", "unsubscribed", 1e4),
                                pushAPI.storageUtil.deleteFromStorage("wingify_push_subscriber_id"),
                                pushAPI.storageUtil.deleteFromStorage("wingify_push_db_status"),
                                pushAPI.storageUtil.deleteFromStorage("wingify_push_subscription_endpoint"),
                                pushAPI.storageUtil.deleteFromStorage("wingify_push_subscription_id")),
                                setPushSubscriptionStorage(),
                                promise.resolve("success")) : "failure" === response.status && (setPushSubscriptionStorage(),
                                pushAPI.storageUtil.addToStorage("wingify_push_db_status", "false", 1e4),
                                promise.resolve("error"))
                            }
                        })
                    },
                    syncSubscription: function(subscription, subscriberId, previousSubscriptionId, subscriptionId, subscriptionEndPoint, action) {
                        var promise = $pushcrew.Deferred();
                        subscriberId = subscriberId || "";
                        var data = "hash=" + pushcrewConfig.hash + "&subscription=" + subscription + "&subscriberId=" + subscriberId + "&previousSubscriptionId=" + previousSubscriptionId + "&subscriptionId=" + subscriptionId + "&subscriptionEndPoint=" + subscriptionEndPoint + "&action=" + action + "&origin=" + pushcrewConfig.origin + "&firefoxEncryptionKey=" + encodeURIComponent(firefoxEncryptionKey) + "&browserType=" + pushAPI.pushSubscription.browserType;
                        return "insert" != action && "insert-failed" !== action || "chrome" !== pushAPI.pushSubscription.browserType ? pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint) : $pushcrew.ajax({
                            url: pushcrewConfig.manifestUrl + "?v=" + (new Date).getTime(),
                            type: "GET",
                            timeout: 2e3,
                            success: function(manifestjson) {
                                null !== manifestjson && "object" == typeof manifestjson && manifestjson.gcm_sender_id && !isNaN(manifestjson.gcm_sender_id) && (data += "&gcmSenderId=" + manifestjson.gcm_sender_id),
                                pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint)
                            },
                            error: function(error) {
                                pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint)
                            }
                        }),
                        promise
                    },
                    updateSubscription: function(subscriptionDetails) {
                        var promise = $pushcrew.Deferred()
                          , subscription = this.splitSubscriptionParameters(subscriptionDetails)
                          , wingifyPushDbStatus = pushAPI.storageUtil.getFromStorage("wingify_push_db_status")
                          , wingifyPushSubscriberId = pushAPI.storageUtil.getFromStorage("wingify_push_subscriber_id")
                          , wingifyPushSubscriptionId = pushAPI.storageUtil.getFromStorage("wingify_push_subscription_id")
                          , wingifyPushSubscriptionEndpoint = pushAPI.storageUtil.getFromStorage("wingify_push_subscription_endpoint")
                          , subscriptionString = JSON.stringify(subscriptionDetails);
                        return "false" === wingifyPushDbStatus ? this.syncSubscription(subscriptionString, wingifyPushSubscriberId, wingifyPushSubscriptionId, subscription.subscriptionId, subscription.endpoint, "insert-failed").then(function(response) {
                            promise.resolve(response)
                        }) : (wingifyPushSubscriptionId === subscription.subscriptionId && "" === wingifyPushSubscriberId && this.syncSubscription(subscriptionString, "", "", subscription.subscriptionId, subscription.endpoint, "get-subscriberid-from-server").then(function(response) {
                            promise.resolve(response)
                        }),
                        wingifyPushSubscriptionId !== subscription.subscriptionId || wingifyPushSubscriptionEndpoint !== subscription.endpoint ? "" === wingifyPushSubscriptionId ? this.syncSubscription(subscriptionString, wingifyPushSubscriberId, "", subscription.subscriptionId, subscription.endpoint, "update").then(function(response) {
                            promise.resolve(response)
                        }) : this.syncSubscription(subscriptionString, wingifyPushSubscriberId, wingifyPushSubscriptionId, subscription.subscriptionId, subscription.endpoint, "update-google-registration-id").then(function(response) {
                            promise.resolve(response)
                        }) : promise.resolve("already-updated")),
                        promise
                    },
                    splitSubscriptionParameters: function(subscriptionDetails) {
                        if ("error" !== subscriptionDetails && "denied" !== subscriptionDetails) {
                            var endpointURL = ""
                              , endpoint = "";
                            if ("firefox" === pushAPI.pushSubscription.browserType) {
                                var offset = subscriptionDetails.endpoint.lastIndexOf("/");
                                endpointURL = subscriptionDetails.endpoint.substring(0, offset),
                                endpoint = subscriptionDetails.endpoint
                            } else
                                endpointURL = "https://android.googleapis.com/gcm/send",
                                endpoint = subscriptionDetails.endpoint;
                            if (0 === endpoint.indexOf(endpointURL + "/")) {
                                var updatedSubscription = {};
                                return updatedSubscription.subscriptionId = endpoint.replace(endpointURL + "/", ""),
                                updatedSubscription.endpoint = endpointURL,
                                "firefox" === pushAPI.pushSubscription.browserType && (firefoxEncryptionKey = btoa(String.fromCharCode.apply(null , new Uint8Array(subscriptionDetails.getKey("p256dh"))))),
                                updatedSubscription
                            }
                        }
                        return subscriptionDetails
                    },
                    setNewPushSubscriber: function(subscriptionDetails, sendFirstNotification) {
                        var promise = $pushcrew.Deferred()
                          , response = this.splitSubscriptionParameters(subscriptionDetails);
                        return "error" !== response && "denied" !== response ? (this.syncSubscription(JSON.stringify(subscriptionDetails), "", "", response.subscriptionId, response.endpoint, "insert").then(function(value) {
                            pushAPI.storageUtil.addToStorage("wingify_push_subscription_status", "subscribed", 1e4),
                            promise.resolve(value)
                        }),
                        promise) : void 0
                    },
                    unsubscribeFromPushNotification: function() {
                        var promise = pushAPI.pushSubscription.unsubscribe()
                          , promiseInside = $pushcrew.Deferred();
                        return promise.then(function(response) {
                            if ("error" !== response) {
                                var subscriptionDetails = pushAPI.manageSubscription.splitSubscriptionParameters(response)
                                  , wingifyPushSubscriberId = pushAPI.storageUtil.getFromStorage("wingify_push_subscriber_id")
                                  , wingifyPushSubscriptionId = pushAPI.storageUtil.getFromStorage("wingify_push_subscription_id");
                                pushAPI.manageSubscription.syncSubscription("", wingifyPushSubscriberId, wingifyPushSubscriptionId, subscriptionDetails.subscriptionId, subscriptionDetails.endpoint, "unsubscribe-ui").then(function(value) {
                                    promiseInside.resolve(value)
                                })
                            } else
                                promiseInside.resolve("already-unsubscribed")
                        }),
                        promiseInside
                    },
                    syncUnsubscribedUsers: function() {
                        var promise = $pushcrew.Deferred()
                          , wingifyPushSubscriberId = pushAPI.storageUtil.getFromStorage("wingify_push_subscriber_id")
                          , wingifyPushSubscriptionId = pushAPI.storageUtil.getFromStorage("wingify_push_subscription_id");
                        return pushAPI.pushSubscription.initialiseState(),
                        (!pushAPI.pushSubscription.isUserSubscriptionDenied || "" === wingifyPushSubscriberId && "" === wingifyPushSubscriptionId) && ("default" !== Notification.permission || "" === wingifyPushSubscriberId && "" === wingifyPushSubscriptionId) ? promise.resolve("default") : this.syncSubscription("", wingifyPushSubscriberId, "", wingifyPushSubscriptionId, "", "unsubscribe-native").then(function(value) {
                            promise.resolve(value)
                        }),
                        promise
                    },
                    isHttpSite: function() {
                        return "https:" !== location.protocol && 0 !== location.host.indexOf("localhost") && 0 !== location.host.indexOf("127.0.0.1")
                    },
                    getSafariDeviceToken: function(permissionData) {
                        "default" === permissionData.permission ? window.safari.pushNotification.requestPermission(safariServerURL, pushAPI.pushSubscription.websiteSafariPushId, {}, this.getSafariDeviceToken) : "denied" === permissionData.permission ? console.log("Safari Subscription Status - Denied") : "granted" === permissionData.permission && console.log("Safari Subscription Status - Granted")
                    }
                }
            }();
            var APIReadyState = {
                UNINITIALIZED: !1,
                READY: !0,
                FAILED: 2
            }
              , apiFailureQueue = []
              , _pushcrew = {}
              , pushcrew = {
                isAPIReady: APIReadyState.UNINITIALIZED
            }
              , _internalq = [];
            _pushcrew.triggerBox = {};
            var _utils = {};
            _utils.validString = function(value) {
                return /^[A-Za-z0-9_-]*$/.test(value)
            }
            ,
            function() {
                var pushSubscription, manageSubscription, storageUtil;
                pushSubscription = pushAPI.pushSubscription,
                manageSubscription = pushAPI.manageSubscription,
                storageUtil = pushAPI.storageUtil,
                _pushcrew.noTrigger = function(value) {
                    pushcrew.noTrigger = value
                }
                ,
                _pushcrew._currentTime = function(value) {
                    pushcrew._currentTime = value
                }
                ,
                _pushcrew.APIReady = function(callback) {
                    callback()
                }
                ,
                _pushcrew.executeFailureQueue = function(reason) {
                    for (var i = 0; i < apiFailureQueue.length; i++)
                        apiFailureQueue[i](reason);
                    apiFailureQueue = []
                }
                ,
                _pushcrew.subscriptionSuccessCallback = function(callback) {
                    "function" == typeof callback ? pushcrew.subscriptionSuccessCallback = callback : pushcrew.subscriptionSuccessCallback = null
                }
                ,
                _pushcrew.subscriptionFailureCallback = function(callback) {
                    "function" == typeof callback ? pushcrew.subscriptionFailureCallback = callback : pushcrew.subscriptionFailureCallback = null
                }
                ,
                _pushcrew.triggerOptOut = function() {
                    return pushcrew.isAPIReady === APIReadyState.UNINITIALIZED ? void _internalq.push(["triggerOptOut"]) : void _pushcrew.showModal({}, 4)
                }
                ,
                _pushcrew.addSubscriberToSegment = function(segment, callback) {
                    var subscriberId, subscriptionId, returnValue;
                    if (pushcrew.isAPIReady === APIReadyState.UNINITIALIZED)
                        return void _internalq.push(["addSubscriberToSegment", segment, callback]);
                    if (subscriberId = storageUtil.getFromStorage("wingify_push_subscriber_id"),
                    subscriptionId = storageUtil.getFromStorage("wingify_push_subscription_id"),
                    segment.length >= 30 && 0 !== segment.length || !_utils.validString(segment))
                        returnValue = !1;
                    else if (subscriberId) {
                        var img = new Image
                          , count = 0;
                        img.src = pushcrewConfig.serverSyncUrl + "/c.gif?hash=" + pushcrewConfig.hash + "&subscriberId=" + subscriberId + "&subscriptionId=" + subscriptionId + "&segment=" + segment + "&action=add-segment",
                        img.onerror = function() {
                            count += 1,
                            3 > count && (img.src = pushcrewConfig.serverSyncUrl + "/c.gif?hash=" + pushcrewConfig.hash + "&subscriberId=" + subscriberId + "&subscriptionId=" + subscriptionId + "&segment=" + segment + "&action=add-segment")
                        }
                        ,
                        returnValue = !0
                    } else
                        returnValue = -1;
                    callback && callback(returnValue)
                }
                ,
                _pushcrew.triggerOptIn = function(triggerBox) {
                    pushcrew.isAPIReady === APIReadyState.READY ? _pushcrew.triggerOptInExecute(triggerBox) : _pushcrew.triggerBox = triggerBox
                }
                ,
                _pushcrew.removeSubscriberFromSegment = function(segment, callback) {
                    var returnValue, subscriberId = storageUtil.getFromStorage("wingify_push_subscriber_id"), subscriptionId = storageUtil.getFromStorage("wingify_push_subscription_id");
                    if (segment.length >= 30 && 0 !== segment.length || !_utils.validString(segment))
                        returnValue = !1;
                    else if (subscriberId) {
                        var img = new Image
                          , count = 0;
                        img.src = pushcrewConfig.serverSyncUrl + "/c.gif?hash=" + pushcrewConfig.hash + "&subscriberId=" + subscriberId + "&subscriptionId=" + subscriptionId + "&segment=" + segment + "&action=remove-segment",
                        img.onerror = function() {
                            count += 1,
                            3 > count && (img.src = pushcrewConfig.serverSyncUrl + "/c.gif?hash=" + pushcrewConfig.hash + "&subscriberId=" + subscriberId + "&subscriptionId=" + subscriptionId + "&segment=" + segment + "&action=remove-segment")
                        }
                        ,
                        returnValue = !0
                    } else
                        returnValue = -1;
                    callback && callback(returnValue)
                }
                ,
                _pushcrew.triggerOptInExecute = function(triggerBoxObject) {
                    var isModal, textArray;
                    textArray = {};
                    var triggerBox = triggerBoxObject || {};
                    triggerBox.modal ? (isModal = !0,
                    "string" == typeof triggerBox.modal.text && (textArray.SUBSCRIBE = triggerBox.modal.text,
                    textArray.ALREADYSUBSCRIBED = "You are already subscribed to get instant alerts from us. Keep an eye on your browser for new notifications from us.",
                    textArray.BLOCKED = "Uh-oh! You seem to have blocked the notifications last time you came on our website. To see how to subscribe",
                    triggerBox.modal.text = textArray)) : isModal = !1;
                    var subscriberSegment = triggerBox.subscriberSegment || ""
                      , isUserSubscribed = pushcrew.subscriberId;
                    -1 === isUserSubscribed && isModal ? _pushcrew.showModal(triggerBox.modal, 3) : isUserSubscribed === !1 ? (isModal && _pushcrew.showModal(triggerBox.modal, 2),
                    _pushcrew.subscribeToPush(subscriberSegment, triggerBox.modal)) : isUserSubscribed && isModal && _pushcrew.showModal(triggerBox.modal, 1)
                }
                ,
                _pushcrew.showModal = function(modal, category) {
                    var textOfModal;
                    modal.blackenBackground = modal.blackenBackground !== !1,
                    1 === category ? textOfModal = modal.text.ALREADYSUBSCRIBED || "You are already subscribed to get instant alerts from us. Keep an eye on your browser for new notifications from us." : 3 === category && (textOfModal = modal.text.BLOCKED || "Uh-oh! You seem to have blocked the notifications last time you came on our website. To see how to subscribe");
                    var modalShown1 = '<div id="pushcrew-popup" class="pushcrew-modal-box">      <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">×</a>  <div class="pushcrew-modal-body"><img src=' + pushcrewConfig.style.iconUrl + " width=86/>  <p style='margin-top:20px'>" + textOfModal + "</p>  </div></div>"
                      , modalShown3 = '<div id="pushcrew-popup" class="pushcrew-modal-box">      <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">×</a>  <div class="pushcrew-modal-body"><img src=' + pushcrewConfig.style.iconUrl + ' width=86/>  <p style="pushcrew-margin-top:20px">' + textOfModal + '</p><a href="https://pushcrew.com/enable-notifications-for-browsers/" target="_blank" style="text-decoration: underline;font-weight:bold;">Click Here</a>  </div></div>'
                      , modalShown4 = '<div id="pushcrew-popup" class="pushcrew-modal-box">      <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">×</a>  <div class="pushcrew-modal-body"><img src="https://pushcrew.com/assets/images/opt-out.png" width="100%"/>  <p style="margin-top:20px"> To change settings or to unsubscribe push notifications,<a href="https://pushcrew.com/enable-notifications-for-browsers/" target="_blank" style="text-decoration: underline;font-weight:bold;"> go through these steps</a> in your browser and change notification options</p></div></div>';
                    $pushcrew("#pushcrew-popup").remove(),
                    1 === category ? $pushcrew("body").append(modalShown1) : 3 === category ? $pushcrew("body").append(modalShown3) : 4 === category && $pushcrew("body").append(modalShown4);
                    var appendOverlay = "<div class='pushcrew-modal-overlay js-pushcrew-modal-close'></div>";
                    $pushcrew("body").append(appendOverlay),
                    modal.blackenBackground ? $pushcrew(".pushcrew-modal-overlay").fadeTo(500, .8) : $pushcrew(".pushcrew-modal-overlay").fadeTo(500, 0);
                    var modalBox = "pushcrew-popup";
                    $pushcrew("#" + modalBox).show(),
                    $pushcrew(".js-pushcrew-modal-close, .pushcrew-modal-overlay").click(function() {
                        $pushcrew(".pushcrew-modal-box, .pushcrew-modal-overlay").fadeOut(500, function() {
                            $pushcrew(".pushcrew-modal-overlay").remove()
                        })
                    }),
                    $pushcrew(window).resize(function() {
                        $pushcrew(".pushcrew-modal-box").css({
                            top: ($pushcrew(window).height() - $pushcrew(".pushcrew-modal-box").outerHeight()) / 2,
                            left: ($pushcrew(window).width() - $pushcrew(".pushcrew-modal-box").outerWidth()) / 2
                        })
                    }),
                    $pushcrew(window).resize()
                }
                ,
                _pushcrew.subscribeToPush = function(segmentName, modal) {
                    var httpsBrandingModal, brandingText;
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 1 === pushcrewConfig.pcBranding && (httpsBrandingModal = '<div class="pushcrew-https-branding-modal-mobile-box">      <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-mobile-close pushcrew-https-branding-mobile-close">×</a>  <div class="pushcrew-https-branding-modal-mobile-body"><a href="https://pushcrew.com/?ref=' + pushcrewConfig.companyName + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="https://pushcrew.com/assets/images/pushcrew-white.png" width=85/></a></div></div>',
                    $pushcrew(document).scroll(function() {
                        $pushcrew(".pushcrew-https-branding-modal-mobile-box").fadeOut()
                    })) : 1 === pushcrewConfig.style.brandingType || modal ? (brandingText = modal ? modal.text.SUBSCRIBE || pushcrewConfig.style.brandingText || "Please Click on 'Allow' in the permission box to get instant notifications from our website. No Email Required." : pushcrewConfig.style.brandingText || "Please Click on 'Allow' in the permission box to get instant notifications from our website. No Email Required.",
                    httpsBrandingModal = '<div class="pushcrew-https-branding-modal-context-box">      <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-context-close pushcrew-https-branding-context-close">×</a><div class="pushcrew-https-branding-modal-context-body"><div class="pushcrew-context"><img src="' + pushcrewConfig.style.iconUrl + '" width="60" height="60"><p>' + brandingText + "</p></div>",
                    1 === pushcrewConfig.pcBranding && (httpsBrandingModal += '<div class="pushcrew-branding"><a href="https://pushcrew.com/?ref=' + pushcrewConfig.companyName + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="https://pushcrew.com/assets/images/pushcrew-white.png" width=85/></a></div>'),
                    httpsBrandingModal += "</div></div>") : 0 === pushcrewConfig.style.brandingType && 1 === pushcrewConfig.pcBranding && (httpsBrandingModal = '<div class="pushcrew-https-branding-modal-box">      <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-close pushcrew-https-branding-close">×</a>  <div class="pushcrew-https-branding-modal-body"><a href="https://pushcrew.com/?ref=' + pushcrewConfig.companyName + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="https://pushcrew.com/assets/images/pushcrew-white.png" width=85/></a></div></div>'),
                    $pushcrew("body").append(httpsBrandingModal),
                    $pushcrew(".js-pushcrew-https-branding-modal-close").on("click", function() {
                        $pushcrew(".pushcrew-https-branding-modal-box").remove()
                    }),
                    $pushcrew(".js-pushcrew-https-branding-modal-context-close").on("click", function() {
                        $pushcrew(".pushcrew-https-branding-modal-context-box").remove()
                    }),
                    $pushcrew(".js-pushcrew-https-branding-modal-mobile-close").on("click", function() {
                        $pushcrew(".pushcrew-https-branding-modal-mobile-box").remove()
                    });
                    var subscribePromise = pushSubscription.subscribe();
                    subscribePromise.then(function(newSubscription) {
                        manageSubscription.doesUserResponseExists = !0,
                        $pushcrew(".pushcrew-modal-box, .pushcrew-modal-overlay").fadeOut(500, function() {
                            $pushcrew(".pushcrew-modal-overlay").remove()
                        }),
                        $pushcrew(".pushcrew-https-branding-modal-box").remove(),
                        $pushcrew(".pushcrew-https-branding-modal-context-box").remove(),
                        $pushcrew(".pushcrew-https-branding-modal-mobile-box").remove();
                        var response = manageSubscription.splitSubscriptionParameters(newSubscription);
                        "error" !== response && "denied" !== response ? manageSubscription.syncSubscription(JSON.stringify(newSubscription), "", "", response.subscriptionId, response.endpoint, "insert").then(function() {
                            initAPIValues(),
                            pushcrew.subscriptionSuccessCallback && pushcrew.subscriptionSuccessCallback(pushcrew.subscriberId, {
                                status: "SUBSCRIBED",
                                message: "User has subscribed to push notifications."
                            }),
                            storageUtil.addToStorage("wingify_push_subscription_status", "subscribed", 1e4),
                            "" !== segmentName && _pushcrew.addSubscriberToSegment(segmentName)
                        }) : (initAPIValues(),
                        pushcrew.subscriptionFailureCallback && ("denied" === response ? pushcrew.subscriptionFailureCallback({
                            status: "BLOCKED",
                            message: "User has blocked push notifications."
                        }) : "error" === response && pushcrew.subscriptionFailureCallback({
                            status: "CANCELLED",
                            message: "User has closed the notifications opt-in."
                        })))
                    })
                }
            }();
            var pushCrewQueue = function() {
                this.push = function() {
                    for (var i = 0; i < arguments.length; i++)
                        try {
                            pushcrew.isAPIReady === APIReadyState.UNINITIALIZED ? ("APIReady" === arguments[i][0] && void 0 !== arguments[i][2] && "function" == typeof arguments[i][2] && apiFailureQueue.push(arguments[i][2]),
                            "function" != typeof arguments[i][1] ? void 0 !== arguments[i][2] ? _pushcrew[arguments[i][0]](arguments[i][1], arguments[i][2]) : _pushcrew[arguments[i][0]](arguments[i][1], null ) : _internalq.push(arguments[i])) : pushcrew.isAPIReady === APIReadyState.FAILED ? "APIReady" === arguments[i][0] && void 0 !== arguments[i][2] && "function" == typeof arguments[i][2] && arguments[i][2](_pushcrew.apiFailureReasons) : pushcrew.isAPIReady === APIReadyState.READY && (void 0 !== arguments[i][2] ? _pushcrew[arguments[i][0]](arguments[i][1], arguments[i][2]) : _pushcrew[arguments[i][0]](arguments[i][1], null ))
                        } catch (e) {}
                }
            }
              , internalQueue = function() {
                this.push = function() {
                    for (var i = 0; i < arguments.length; i++)
                        try {
                            void 0 !== arguments[i][2] ? _pushcrew[arguments[i][0]](arguments[i][1], arguments[i][2]) : _pushcrew[arguments[i][0]](arguments[i][1], null )
                        } catch (e) {}
                }
            }
              , _old_pcq = window._pcq;
            window._pcq = new pushCrewQueue,
            window._pcq.push.apply(window._pcq, _old_pcq),
            $pushcrew(document).ready(function() {
                function preload(sources) {
                    for (var images = [], i = 0, length = sources.length; length > i; ++i)
                        images[i] = new Image,
                        images[i].src = sources[i]
                }
                function notificationClickBranding() {
                    var httpsBranding, isBrandingPossible = 1 === pushcrewConfig.pcBranding && -1 !== window.location.search.indexOf("pushcrew_powered"), isUnsubscribePossible = 1 === pushcrewConfig.unsubscribeNCFlag && (-1 !== window.location.search.indexOf("_p_c") || -1 !== window.location.search.indexOf("pushcrew_powered"));
                    (isBrandingPossible || isUnsubscribePossible) && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (httpsBranding = '<div class="pushcrew-https-branding-modal-mobile-click-box">      <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-mobile-click-close pushcrew-https-branding-mobile-click-close">×</a>',
                    isUnsubscribePossible && (httpsBranding += '    <a href="javascript:void(0);" class="pushcrew-unsubscribe">Unsubscribe from Notifications</a>'),
                    isBrandingPossible && (httpsBranding += '<div class="pushcrew-https-branding-modal-mobile-click-body"><a href="https://pushcrew.com/?ref=' + pushcrewConfig.companyName + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="https://pushcrew.com/assets/images/pushcrew-white.png" width=85/></a></div>'),
                    httpsBranding += "</div>") : (httpsBranding = '<div class="pushcrew-https-branding-modal-clicked-box">      <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-clicked-close pushcrew-https-branding-clicked-close">×</a>',
                    isUnsubscribePossible && (httpsBranding += '    <a href="javascript:void(0);" class="pushcrew-unsubscribe">Unsubscribe from Notifications</a>'),
                    isBrandingPossible && (httpsBranding += '  <div class="pushcrew-https-branding-modal-clicked-body"><a href="https://pushcrew.com/?ref=' + pushcrewConfig.companyName + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="https://pushcrew.com/assets/images/pushcrew-white.png" alt="pushcrew" width=85/></a></div>'),
                    httpsBranding += "</div>"),
                    httpsBranding && $pushcrew("body").append(httpsBranding),
                    $pushcrew("body").on("click", ".pushcrew-unsubscribe", function() {
                        var responseHtml;
                        responseHtml = '<div class="pushcrew-unsubscribe-response"><span> Are you sure?</span>&nbsp;<a class="pushcrew-unsubscribe-yes" href="javascript:void(0);">Yes</a>&nbsp;/&nbsp;<a class="pushcrew-unsubscribe-no" href="javascript:void(0);">No</a></div>',
                        $pushcrew(this).after(responseHtml),
                        $pushcrew(this).remove()
                    }),
                    $pushcrew("body").on("click", ".pushcrew-unsubscribe-yes", function() {
                        manageSubscription.unsubscribeFromPushNotification().then(function() {
                            $pushcrew(".pushcrew-unsubscribe-response").html("<span>You have been unsubscribed</span>")
                        })
                    }),
                    $pushcrew("body").on("click", ".pushcrew-unsubscribe-no", function() {
                        var htmlUnsubscribe;
                        htmlUnsubscribe = '<a href="javascript:void(0);" class="pushcrew-unsubscribe" style="color:white;padding-bottom:2px;display:inline-block">Unsubscribe from Notifications</a>',
                        $pushcrew(".pushcrew-unsubscribe-response").after(htmlUnsubscribe),
                        $pushcrew(".pushcrew-unsubscribe-response").remove()
                    }),
                    $pushcrew(".js-pushcrew-https-branding-modal-clicked-close").on("click", function() {
                        $pushcrew(".pushcrew-https-branding-modal-clicked-box").remove()
                    }),
                    $pushcrew(".js-pushcrew-https-branding-modal-mobile-click-close").on("click", function() {
                        $pushcrew(".pushcrew-https-branding-modal-mobile-click-box").remove()
                    }))
                }
                function initAPIValues() {
                    var subscriberId = pushAPI.storageUtil.getFromStorage("wingify_push_subscriber_id") || !1;
                    "denied" === Notification.permission && (subscriberId = -1),
                    pushcrew.subscriberId = subscriberId
                }
                function safartiInit() {
                    manageSubscription.getSafariDeviceToken(pushSubscription.registerForSafari())
                }
                var storageUtil, manageSubscription, pushSubscription, cssUrl, head, link, prefetchImagesList, secondsTrigger, timestamp;
                storageUtil = pushAPI.storageUtil,
                manageSubscription = pushAPI.manageSubscription,
                pushSubscription = pushAPI.pushSubscription,
                cssUrl = "https://pushcrew.com/https-v2/https-v2.css?v=9",
                head = document.getElementsByTagName("head")[0],
                link = document.createElement("link");
                var isChromeSupported = "chrome"in window && "serviceWorker"in navigator && getBrowser().version >= 42
                  , isFirefoxSupported = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && "serviceWorker"in navigator && getBrowser().version >= 44;
                parseFloat(getAndroidVersion());
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isFirefoxSupported = !1),
                isChromeSupported || isFirefoxSupported ? (detectPrivateMode(function(is_private) {
                    is_private ? (_pushcrew.apiFailureReasons = {
                        reasons: ["PRIVATE_BROWSING"]
                    },
                    pushcrew.isAPIReady = APIReadyState.FAILED,
                    _pushcrew.executeFailureQueue(_pushcrew.apiFailureReasons)) : (timestamp = Date.now(),
                    $pushcrew("head").append('<link rel="manifest" href="' + pushcrewConfig.manifestUrl + "?t=" + timestamp + '">'),
                    link.type = "text/css",
                    link.rel = "stylesheet",
                    link.href = cssUrl,
                    prefetchImagesList = ["https://pushcrew.com/assets/images/pushcrew-white.png", pushcrewConfig.style.iconUrl],
                    preload(prefetchImagesList),
                    head.appendChild(link),
                    link.onload = function() {
                        if (notificationClickBranding(),
                        storageUtil.initialiseState(pushcrewConfig.domainForStorageUtil),
                        manageSubscription.customerHash = pushcrewConfig.hash,
                        pushSubscription.detectBrowserType(),
                        secondsTrigger = pushcrewConfig.secondsTrigger - (Date.now() - pushcrew._currentTime) / 1e3,
                        secondsTrigger = secondsTrigger > 0 ? secondsTrigger : 0,
                        "chrome" === pushSubscription.browserType)
                            pushSubscription.serviceWorkerPath = pushcrewConfig.swPath,
                            pushSubscription.registerServiceWorker(),
                            promise = pushSubscription.getUserSubscription(),
                            promise.then(function(response) {
                                response === !1 && pushSubscription.canPushBeEnabled === !0 ? manageSubscription.syncUnsubscribedUsers().then(function() {
                                    return "unsubscribed" === pushAPI.storageUtil.getFromStorage("wingify_push_subscription_status") && "granted" === Notification.permission ? (initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    void executeInternalQueue()) : (initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue(),
                                    void (pushcrew.noTrigger || 0 === pushcrewConfig.triggerAutomaticOptIn || setTimeout(function() {
                                        _pushcrew.triggerOptInExecute(_pushcrew.triggerBox)
                                    }, 1e3 * secondsTrigger)))
                                }) : response !== !1 && pushSubscription.canPushBeEnabled === !0 ? (manageSubscription.doesUserResponseExists = !0,
                                manageSubscription.updateSubscription(response).then(function() {
                                    initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue()
                                })) : manageSubscription.syncUnsubscribedUsers().then(function() {
                                    initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue(),
                                    pushcrew.noTrigger || 0 === pushcrewConfig.triggerAutomaticOptIn || _pushcrew.triggerOptInExecute(_pushcrew.triggerBox)
                                })
                            });
                        else if ("safari" === pushSubscription.browserType && "" !== pushcrewConfig.safariWebsitePushId) {
                            if (pushSubscription.websiteSafariPushId = pushcrewConfig.safariWebsitePushId,
                            pushcrew.noTrigger || 0 === pushcrewConfig.triggerAutomaticOptIn)
                                return;
                            setTimeout(function() {
                                safartiInit()
                            }, 1e3 * secondsTrigger)
                        } else if ("firefox" === pushSubscription.browserType) {
                            pushSubscription.serviceWorkerPath = pushcrewConfig.firefoxSwPath,
                            pushSubscription.registerServiceWorker();
                            var promise = pushSubscription.getUserSubscription();
                            promise.then(function(response) {
                                response === !1 && pushSubscription.canPushBeEnabled === !0 ? manageSubscription.syncUnsubscribedUsers().then(function() {
                                    return "unsubscribed" === pushAPI.storageUtil.getFromStorage("wingify_push_subscription_status") && "granted" === Notification.permission ? (initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    void executeInternalQueue()) : (initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue(),
                                    void (pushcrew.noTrigger || 0 === pushcrewConfig.triggerAutomaticOptIn || setTimeout(function() {
                                        _pushcrew.triggerOptInExecute(_pushcrew.triggerBox)
                                    }, 1e3 * secondsTrigger)))
                                }) : response !== !1 && pushSubscription.canPushBeEnabled === !0 ? (manageSubscription.doesUserResponseExists = !0,
                                manageSubscription.updateSubscription(response).then(function() {
                                    initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue()
                                })) : manageSubscription.syncUnsubscribedUsers().then(function() {
                                    initAPIValues(),
                                    pushcrew.isAPIReady = APIReadyState.READY,
                                    executeInternalQueue(),
                                    pushcrew.noTrigger || 0 === pushcrewConfig.triggerAutomaticOptIn || _pushcrew.triggerOptInExecute(_pushcrew.triggerBox)
                                })
                            })
                        }
                    }
                    )
                }),
                void (window.pushcrew = pushcrew)) : (_pushcrew.apiFailureReasons = {
                    reasons: ["BROWSER_NOT_SUPPORTED"]
                },
                pushcrew.isAPIReady = APIReadyState.FAILED,
                void _pushcrew.executeFailureQueue(_pushcrew.apiFailureReasons))
            })
        }(jQuery.noConflict(!0));
    })();
})();

