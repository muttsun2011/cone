"use strict";
(self.webpackChunkusercom_widget = self.webpackChunkusercom_widget || []).push([
    [878], {
        663: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(3718),
                i = r.n(n),
                a = r(8610),
                o = r(5379),
                s = r(5980);
            const c = i().component("IFrame", {
                props: {
                    target: {
                        type: String,
                        required: !1,
                        default: "_parent"
                    },
                    styled: {
                        type: String,
                        required: !1,
                        default: ""
                    },
                    enableTabIndex: {
                        type: String,
                        required: !1,
                        default: ""
                    },
                    direction: {
                        type: Number,
                        required: !1,
                        default: 1
                    }
                },
                data: function() {
                    return {
                        FrameApp: ""
                    }
                },
                beforeUpdate: function() {
                    "string" != typeof this.FrameApp && (this.FrameApp.children = Object.freeze(this.$slots.default))
                },
                methods: {
                    renderChildren: function() {
                        var e = this.$slots.default,
                            t = this.$el.contentDocument,
                            r = t.head,
                            n = "body { margin:0; } form { margin:0; } ";
                        this.styled.length && this.styled.split(" ").forEach((function(e) {
                            n += (0, o.M)(e)
                        }));
                        var c = document.createElement("style");
                        c.appendChild(document.createTextNode(n));
                        var l = document.createElement("base");
                        l.target = this.target, r.appendChild(l), r.appendChild(c);
                        var d = t.body,
                            u = document.createElement("div");
                        d.appendChild(u), this.direction && d.setAttribute("dir", s.kE[this.direction]), this.enableTabIndex.length && (d.classList.add("usercom-mouse-click"), d.addEventListener("mouseup", (function() {
                            d.classList.contains("usercom-enter-click") && (d.classList.add("usercom-mouse-click"), d.classList.remove("usercom-enter-click"))
                        })), d.addEventListener("keyup", (function(e) {
                            9 == e.keyCode && (d.classList.add("usercom-enter-click"), d.classList.remove("usercom-mouse-click"))
                        })));
                        var h = new(i())({
                            name: "FrameApp",
                            store: a.Z,
                            data: {
                                children: Object.freeze(e)
                            },
                            render: function() {
                                return this.children
                            }
                        });
                        h.$mount(u), h.$el.querySelectorAll("script").forEach((function(e) {
                            var t = document.createElement("script");
                            t.type = "text/javascript", t.innerHTML = e.innerHTML, r.appendChild(t)
                        })), this.FrameApp = h
                    }
                },
                render: function(e) {
                    return e("iframe", {
                        on: {
                            load: this.renderChildren
                        }
                    })
                }
            })
        },
        3287: (e, t, r) => {
            r(663);
            var n = r(3718);
            r.n(n)().component("Loader", {
                render: function(e) {
                    return e("div", {
                        class: ["usercom-spinner"]
                    })
                }
            }), r(7161)
        },
        7161: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => l
            });
            var n = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "usercom-branding"
                }, [r("transition", {
                    attrs: {
                        name: "usercom-slide-from-bottom-fade-in",
                        appear: ""
                    }
                }, [r("p", [e._v("\n      Powered by\n      "), r("a", {
                    attrs: {
                        href: "https://user.com/en/?utm_source=" + e.documentPATH + "&utm_medium=client_livechat",
                        target: "_blank"
                    }
                }, [r("svg", {
                    attrs: {
                        width: "39",
                        height: "10",
                        viewBox: "0 0 78 20"
                    }
                }, [r("g", [r("g", [r("path", {
                    attrs: {
                        fill: "#afafaf",
                        d: "M73.4 12.4h3.8v3.8a3.8 3.8 0 1 1-3.8-3.8zM57.6 20V0h5.062v3.033C64.017 1.339 66.409 0 68.8 0v4.884c-.359-.08-.837-.119-1.395-.119-1.674 0-3.906.906-4.743 2.127V20zM46.212 3.657c-3.083 0-4.41 2.327-4.644 4.22h9.287c-.117-1.814-1.365-4.22-4.643-4.22zM36.4 9.98C36.4 4.458 40.42 0 46.156 0c5.62 0 9.444 4.26 9.444 10.493v1.105H41.59c.312 2.406 2.225 4.418 5.425 4.418 1.756 0 3.824-.71 5.034-1.894l2.185 3.235C52.322 19.132 49.395 20 46.468 20 40.732 20 36.4 16.095 36.4 9.98zm-17.6 7.061l2.174-3.51c1.384 1.301 4.23 2.603 6.602 2.603 2.174 0 3.201-.75 3.201-1.933 0-1.341-1.66-1.814-3.834-2.248-3.28-.632-7.51-1.42-7.51-5.957C19.432 2.801 22.238 0 27.258 0c3.242 0 5.811 1.105 7.669 2.604l-1.976 3.431c-1.147-1.222-3.32-2.209-5.653-2.209-1.819 0-3.004.671-3.004 1.776 0 1.183 1.502 1.617 3.636 2.05 3.281.632 7.669 1.5 7.669 6.234 0 3.51-2.965 6.114-8.262 6.114-3.32 0-6.522-1.105-8.538-2.959zm-5.838 2.943v-2.857C11.653 18.583 9.352 20 6.22 20 2.014 20 .03 17.718.03 14.019L0 0h5.038l.03 12.051c0 2.637 1.389 3.502 3.53 3.502 1.944 0 3.492-1.062 4.364-2.164L12.932 0h5.037L18 19.984z"
                    }
                })])])])])])])], 1)
            };
            n._withStripped = !0;
            var i = r(3718),
                a = r.n(i),
                o = r(5379);
            const s = a().extend({
                name: "Branding",
                computed: {
                    documentPATH: function() {
                        return window.top.location.hostname
                    }
                },
                mounted: function() {
                    (0, o.n)(this.$el, ["styleBranding"])
                }
            });
            var c = (0, r(1900).Z)(s, n, [], !1, null, null, null);
            c.options.__file = "src/components/Branding.vue";
            const l = c.exports
        },
        5669: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => p
            });
            var n = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    on: {
                        mouseenter: e.showLauncherGreeting,
                        mouseleave: e.hideLauncherGreeting
                    }
                }, [r("transition", {
                    attrs: {
                        name: "usercom-greeting"
                    }
                }, [r("greeting", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isLauncherGreetingVisible && !e.isNotificationVisible,
                        expression: "isLauncherGreetingVisible && !isNotificationVisible"
                    }]
                })], 1), e._v(" "), r("div", [e.getUnreadConversationCount && !e.isBoardVisible ? r("div", {
                    staticClass: "usercom-launcher-counter"
                }, [r("span", [e._v(e._s(e.getUnreadConversationCount))])]) : e._e(), e._v(" "), r("i-frame", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !(e.isBoardFullScreen && e.isBoardVisible),
                        expression: "!(isBoardFullScreen && isBoardVisible)"
                    }],
                    ref: "usercom-launcher-dot-frame",
                    attrs: {
                        id: "usercom-launcher-dot-frame",
                        name: "usercom-launcher-dot-frame",
                        styled: e.styled,
                        "enable-tab-index": "usercom-launcher-dot-frame",
                        direction: e.direction
                    }
                }, [r("div", {
                    staticClass: "usercom-launcher-dot",
                    style: e.injectCSSVariables,
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        click: e.toggleBoard,
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.toggleBoard.apply(null, arguments)
                        }
                    }
                }, [e.getLauncherIcon ? r("img", {
                    attrs: {
                        src: e.getLauncherIcon,
                        alt: "icon"
                    }
                }) : r("svg", {
                    attrs: {
                        viewBox: "0 0 140 140"
                    }
                }, [r("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M27.53 98.35c11.453 15.271 27.47 22.796 44.462 21.958 15.889-.782 31.115-8.911 41.039-21.937a3.5 3.5 0 00-5.568-4.242c-8.683 11.396-22.003 18.508-35.815 19.188-14.671.723-28.46-5.755-38.518-19.167a3.5 3.5 0 10-5.6 4.2z"
                    }
                })])])])], 1)], 1)
            };
            n._withStripped = !0;
            var i = r(3718),
                a = r.n(i),
                o = r(5908),
                s = (r(3287), r(5379)),
                c = r(3477),
                l = r(5980);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        h(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const m = a().extend({
                name: "Launcher",
                components: {
                    greeting: function() {
                        return r.e(878).then(r.bind(r, 8))
                    }
                },
                computed: u(u(u({}, (0, o.mapState)({
                    direction: function(e) {
                        return e.settings.direction
                    }
                })), (0, o.mapGetters)(["isBoardVisible", "isBoardFullScreen", "isLauncherGreetingVisible", "getUnreadConversationCount", "getSettings", "isNotificationVisible", "getPrimaryColor", "useGradientTheme", "getLauncherState", "getCivchatInstance"])), {}, {
                    getLauncherIcon: function() {
                        return this.getSettings.launcher_icon || null
                    },
                    injectCSSVariables: function() {
                        return (0, c.D7)(this.getPrimaryColor, this.useGradientTheme)
                    },
                    widgetState: function() {
                        var e, t, r, n = l.KR.without_welcome_message,
                            i = (null === (e = this.getCivchatInstance) || void 0 === e || null === (t = e.widget) || void 0 === t ? void 0 : t.state) || (null === (r = this.getCivchatInstance) || void 0 === r ? void 0 : r.state) || null;
                        return "string" == typeof i && (n = l.fR[i]), n
                    },
                    styled: function() {
                        var e = ["styleLauncherDotContextFrame"];
                        return "#FFFFFF" == this.getPrimaryColor && e.push("whiteThemeStyle"), e.join(" ")
                    }
                }),
                watch: {
                    isBoardVisible: function(e) {
                        return e && this.isBoardFullScreen ? ((t = document.createElement("meta")).id = "usercom-viewport-meta", t.name = "viewport", t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover", void document.getElementsByTagName("head")[0].appendChild(t)) : function() {
                            var e = document.getElementById("usercom-viewport-meta");
                            e && e.parentNode.removeChild(e)
                        }();
                        var t
                    }
                },
                mounted: function() {
                    var e = this;
                    (0, s.n)(document.getElementById("usercom-widget"), ["styleLauncherDotFrame"]), this.checkWindowFullScreen(), window.addEventListener("resize", (function() {
                        e.checkWindowFullScreen()
                    }))
                },
                methods: u(u({}, (0, o.mapActions)(["hideGreeting", "showGreeting", "showBoard", "hideBoard", "openMessageFromNotification", "setAboveFullScreen", "setBelowFullScreen", "eventWidgetClickedOpen", "eventWidgetClickedClosed"])), {}, {
                    toggleBoard: function() {
                        this.isBoardVisible ? (this.hideBoard(), this.getLauncherState !== this.widgetState && this.showGreeting(), this.eventWidgetClickedClosed()) : this.isNotificationVisible ? (this.hideGreeting(), this.openMessageFromNotification()) : (this.hideGreeting(), this.showBoard(), this.eventWidgetClickedOpen()), this.checkWindowFullScreen()
                    },
                    showLauncherGreeting: function() {
                        this.isBoardVisible || this.getLauncherState !== this.widgetState && this.showGreeting()
                    },
                    hideLauncherGreeting: function() {
                        this.isBoardVisible || this.hideGreeting()
                    },
                    checkWindowFullScreen: function() {
                        window.innerWidth <= 550 || window.innerHeight <= 550 ? this.setAboveFullScreen() : this.setBelowFullScreen()
                    }
                })
            });
            var g = (0, r(1900).Z)(m, n, [], !1, null, null, null);
            g.options.__file = "src/modules/Launcher.vue";
            const p = g.exports
        },
        8: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => g
            });
            var n = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "usercom-launcher-container",
                    attrs: {
                        "data-footer": e.showBranding
                    }
                }, [r("i-frame", {
                    ref: "usercom-greeting-wrapper-frame",
                    attrs: {
                        id: "usercom-greeting-wrapper-frame",
                        name: "usercom-greeting-wrapper-frame",
                        styled: "styleLauncherGreetingContextFrame",
                        "enable-tab-index": "usercom-greeting-wrapper-frame",
                        direction: e.direction
                    }
                }, [r("div", {
                    staticClass: "usercom-greeting-wrapper",
                    style: e.injectCSSVariables,
                    on: {
                        click: e.triggerBoard
                    }
                }, [r("div", {
                    staticClass: "usercom-greeting-header"
                }, [e.randomAgentAvatar ? r("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: e.randomAgentAvatar,
                        alt: "avatar"
                    }
                }) : e._e(), e._v(" "), r("div", {
                    staticClass: "usercom-greeting-header-text"
                }, [r("h3", [e._v(e._s(e.$translationsFor("greeting_title")))]), e._v(" "), r("p", [e._v(e._s(e.$translationsFor("greeting")))])])]), e._v(" "), r("div", {
                    staticClass: "usercom-greeting-typing",
                    attrs: {
                        "data-footer": e.showBranding,
                        tabindex: "0"
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.triggerBoard.apply(null, arguments)
                        }
                    }
                }, [r("p", {
                    staticClass: "usercom-greeting-prompt"
                }, [e._v("\n          " + e._s(e.$translationsFor("prompt")) + "\n        ")]), e._v(" "), r("svg", {
                    attrs: {
                        width: "17.5",
                        height: "17.5",
                        viewBox: "0 0 35 35"
                    }
                }, [r("path", {
                    attrs: {
                        fill: "#afafaf",
                        d: "M33 0L1 18a2 2 0 000 3l7 3L28 7l1 1-17 20v5c0 2 2 3 3 1l4-5 9 4 2-2 5-29-2-2z"
                    }
                })])]), e._v(" "), e.showBranding ? r("branding") : e._e()], 1)]), e._v(" "), r("div", {
                    staticClass: "usercom-launcher-container--close",
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.hideLauncherGreetingFor48h.apply(null, arguments)
                        }
                    }
                }, [r("svg", {
                    attrs: {
                        width: "37",
                        height: "37",
                        viewBox: "0 0 74 74"
                    }
                }, [r("path", {
                    attrs: {
                        "fill-opacity": "0.2",
                        d: "M37 74a37 37 0 100-74 37 37 0 000 74z"
                    }
                }), e._v(" "), r("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M26 22l11 12 10-12 3 3-11 12 11 12-3 3-10-12-11 12-3-3 11-12-11-12z"
                    }
                })])])], 1)
            };
            n._withStripped = !0;
            var i = r(3718),
                a = r.n(i),
                o = r(5908),
                s = r(5379),
                c = r(3477);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        u(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const h = a().extend({
                components: {
                    Branding: function() {
                        return Promise.resolve().then(r.bind(r, 7161))
                    }
                },
                computed: d(d(d({}, (0, o.mapState)({
                    direction: function(e) {
                        return e.settings.direction
                    }
                })), (0, o.mapGetters)(["showBranding", "getRandomAgentObj", "getPrimaryColor", "useGradientTheme", "getModules"])), {}, {
                    randomAgentAvatar: function() {
                        var e;
                        return null === (e = this.getRandomAgentObj) || void 0 === e ? void 0 : e.avatar
                    },
                    injectCSSVariables: function() {
                        return (0, c.D7)(this.getPrimaryColor, this.useGradientTheme)
                    }
                }),
                mounted: function() {
                    (0, s.n)(document.getElementById("usercom-widget"), ["styleLauncherGreetingFrame"])
                },
                methods: d(d({}, (0, o.mapActions)(["showBoard", "hideGreeting", "hideLauncherGreetingFor48h", "eventWidgetClickedOpen"])), {}, {
                    triggerBoard: function() {
                        this.showBoard(), this.eventWidgetClickedOpen(), this.hideGreeting()
                    }
                })
            });
            var m = (0, r(1900).Z)(h, n, [], !1, null, null, null);
            m.options.__file = "src/modules/LauncherGreeting.vue";
            const g = m.exports
        }
    }
]);