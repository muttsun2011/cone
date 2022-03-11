(self.webpackChunkusercom_widget = self.webpackChunkusercom_widget || []).push([
    [143], {
        3571: (e, t, r) => {
            r(3370), r(9970)
        },
        9970: (e, t, r) => {
            "use strict";
            r.r(t);
            var o = r(3718),
                i = r.n(o);
            i().config.productionTip = !1, i().config.devtools = !1
        },
        3370: (e, t, r) => {
            "use strict";
            r.r(t);
            var o = r(3718),
                i = r.n(o);
            i().prototype.$translationsFor = function(e) {
                return this.$store.getters.getTranslationFor(e) || ""
            }, i().prototype.$getUuid = function() {
                return Math.random().toString(36).substring(7)
            }
        },
        5379: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => P,
                M: () => U
            });
            var o = r(5548),
                i = r.n(o),
                a = r(6216),
                n = r.n(a),
                s = r(7348),
                p = r.n(s),
                c = r(6654),
                l = r.n(c),
                d = r(2053),
                m = r.n(d),
                u = r(8129),
                f = r.n(u),
                x = r(3744),
                h = r.n(x),
                g = r(8100),
                b = r.n(g),
                w = r(5024),
                k = r.n(w),
                v = r(5549),
                y = r.n(v),
                _ = r(658),
                z = r.n(_),
                j = r(4067),
                R = r.n(j),
                I = r(7630),
                M = r.n(I),
                C = r(1622),
                W = r.n(C),
                D = r(8956),
                S = r.n(D),
                N = r(9696),
                H = r.n(N),
                $ = r(786),
                O = r.n($),
                T = r(9732),
                B = r.n(T),
                F = r(8032),
                V = r.n(F),
                E = r(9469),
                L = r.n(E),
                A = {
                    styleMain: i(),
                    styleWebpush: l(),
                    styleBranding: f(),
                    styleBoardHeading: p(),
                    styleBoardList: h(),
                    styleChat: n(),
                    styleKnowledgeBase: m(),
                    styleMessages: b(),
                    styleChatBot: k(),
                    styleLauncherDotFrame: y(),
                    styleLauncherDotContextFrame: z(),
                    styleLauncherGreetingFrame: R(),
                    styleLauncherGreetingContextFrame: M(),
                    styleBoardFrame: W(),
                    styleBoardContextFrame: S(),
                    styleLightboxFrame: H(),
                    styleLightboxContextFrame: O(),
                    styleNotificationFrame: B(),
                    styleNotificationContextFrame: V(),
                    whiteThemeStyle: L()
                },
                P = function(e, t) {
                    var r = e;
                    if (r) {
                        var o = document.createElement("style");
                        t.forEach((function(e) {
                            void 0 !== A[e] && o.appendChild(document.createTextNode(A[e]))
                        })), r.appendChild(o)
                    }
                },
                U = function(e) {
                    if (void 0 !== A[e]) return A[e]
                }
        },
        7938: (e, t, r) => {
            "use strict";
            r.r(t);
            var o = r(3718),
                i = r.n(o),
                a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: [e.positionAlignment],
                        attrs: {
                            id: "usercom-widget"
                        }
                    }, [e.isWidgetVisible && !e.withoutChat ? [e.isBoardVisible ? r("board") : e._e(), e._v(" "), e.isLauncherVisible ? r("launcher") : e._e(), e._v(" "), e.isNotificationVisible && !e.isBoardVisible ? r("notification") : e._e(), e._v(" "), e.isLightboxVisible ? r("lightbox") : e._e()] : e._e(), e._v(" "), e.form.show ? [r("div", {
                        attrs: {
                            id: "ue_popups"
                        }
                    }, [e.form.show ? r("action-frame") : e._e()], 1)] : e._e(), e._v(" "), !e.isWebpushEnabled || e.form.show || e.isLightboxVisible ? e._e() : [r("div", {
                        attrs: {
                            id: "ue_popups"
                        }
                    }, [e.isWebpushShowed ? r("webpush-dialog") : e._e()], 1)]], 2)
                };
            a._withStripped = !0;
            var n = r(5908),
                s = r(5980),
                p = r(5379);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        d(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const m = i().extend({
                components: {
                    Board: function() {
                        return r.e(967).then(r.bind(r, 8325))
                    },
                    Launcher: function() {
                        return r.e(878).then(r.bind(r, 5669))
                    },
                    ActionFrame: function() {
                        return r.e(963).then(r.bind(r, 8754))
                    },
                    WebpushDialog: function() {
                        return r.e(757).then(r.bind(r, 4633))
                    },
                    Notification: function() {
                        return Promise.all([r.e(176), r.e(200)]).then(r.bind(r, 8065))
                    },
                    Lightbox: function() {
                        return Promise.all([r.e(176), r.e(200)]).then(r.bind(r, 7556))
                    }
                },
                computed: l(l({}, (0, n.mapGetters)(["getCivchatInstance", "isWidgetInitialize", "isWebpushEnabled", "isWebpushShowed", "isBoardVisible", "isLauncherVisible", "isNotificationVisible", "isWidgetVisible", "getPrimaryColor", "getSettings", "withoutChat"])), {}, {
                    form: {
                        get: function() {
                            var e, t;
                            return (null === (e = this.$store.state) || void 0 === e || null === (t = e.actions) || void 0 === t ? void 0 : t.form) || {
                                content: "",
                                id: null,
                                show: !1,
                                has_thanks: null,
                                has_redirect: null
                            }
                        },
                        cache: !1
                    },
                    positionAlignment: function() {
                        return this.getSettings.alignment === s.cE.right ? "usercom-alignment-right" : "usercom-alignment-left"
                    },
                    isLightboxVisible: {
                        get: function() {
                            return this.$store.getters["chat/isLightboxVisible"] || !1
                        },
                        cache: !1
                    }
                }),
                watch: {
                    isWidgetInitialize: function(e) {
                        e && (this.withoutChat || this.$store.dispatch("initializeChatStore"))
                    }
                },
                mounted: function() {
                    var e = this;
                    r.e(471).then(r.bind(r, 1328)).then((function(t) {
                        e.$store.registerModule("actions", t.default)
                    })), (0, p.n)(this.$el, ["styleMain", "styleWebpush"]), this.turbolinksSupport()
                },
                methods: l(l({}, (0, n.mapActions)(["ping", "destroyWidget"])), {}, {
                    turbolinksSupport: function() {
                        var e = this;
                        ["turbolinks:visit", "page:before-change", "turbolinks:before-cache", "turbolinks:load", "page:change"].forEach((function(t) {
                            document.addEventListener(t, e.turbolinksInitWidget)
                        })), void 0 !== window.civchat && this.ping(window.civchat)
                    },
                    turbolinksInitWidget: function() {
                        this.destroyWidget()
                    }
                })
            });
            var u = (0, r(1900).Z)(m, a, [], !1, null, null, null);
            u.options.__file = "src/modules/Instance.vue";
            const f = u.exports;
            r(3571);
            var x = r(8610),
                h = r(3477);
            new(i())({
                el: "#__ue_widget_mount",
                store: x.Z,
                beforeCreate: function() {
                    var e, t, o = this;
                    null === (e = (0, h.wb)("initialize 🌗")) || void 0 === e || e.group("widget"), null === (t = (0, h.wb)(r.h())) || void 0 === t || t.group("version"), window.UsercomInstance = {
                        destroy: function() {
                            o.$destroy()
                        }
                    }
                },
                beforeDestroy: function() {
                    this.$store.dispatch("destroyInstance"), this.$store.state.intervalId && (clearInterval(this.$store.state.intervalId), document.title = this.$store.state.originalTitle), delete window.UsercomInstance, this.$el.remove(), window.UE.__internal.destroyed = !0, window.UE.isReady = !1
                },
                render: function(e) {
                    return e(f)
                }
            })
        },
        2881: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, '.usercom-branding{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#afafaf;border:1px solid #ebeef3;background:#fff;border-radius:0 0 3px 12px;height:50px;overflow:hidden}.usercom-branding p{display:flex;justify-content:center;align-items:center;font-size:14px;height:100%;margin:0}.usercom-branding p a{padding:4px}\n', ""]), e.exports = i
        },
        7912: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".ue-brick{box-shadow:-5px -5px 15px rgba(255,255,255,0.07),5px 5px 15px rgba(174,174,192,0.4);border-radius:12px 12px 3px;border:1px solid #ebeef3;background-color:#fff;padding:20px;display:flex;align-items:center;margin-bottom:20px;width:100%;cursor:pointer}.ue-brick .icon-container{display:flex;justify-content:center;align-items:center;width:50px;height:50px;min-width:50px;min-height:50px;border-radius:3px;border:1px solid #f0f0f3;background-color:#f5f6f9;position:relative}.ue-brick .icon-container .notification-circle{width:16px;height:16px;min-width:16px;min-height:16px;max-width:16px;max-height:16px;border-radius:50%;position:absolute;background:var(--usercom-primary-color);right:-9px;top:-9px;font-size:10px;color:white;overflow:hidden;display:flex;justify-content:center;align-items:center;text-align:center;font-style:normal}.ue-brick--link{text-decoration:none}.ue-brick--order-1{order:1}.ue-brick--order-2{order:2}.ue-brick--order-3{order:3}.ue-brick-image{border-radius:2px;min-height:160px;max-height:160px;height:160px;margin-bottom:15px;background-size:cover;background-position:center;background-repeat:no-repeat;box-shadow:-5px -5px 15px rgba(255,255,255,0.07),5px 5px 15px rgba(174,174,192,0.4)}.ue-brick-description{max-width:100%;display:flex;flex-direction:column;justify-content:center;padding-left:20px;overflow:hidden}.ue-brick-description--no-padding{padding:0}.ue-brick-description--no-overflow{overflow:unset}.ue-brick h3{margin:0;color:#242c3d;font-size:16px;line-height:18px;font-weight:400;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ue-brick p{margin-top:7px;color:#5d719d;margin-bottom:0;font-size:14px;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:40px;line-height:20px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.ue-brick .article-h{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;hyphens:none;white-space:unset;text-overflow:ellipsis}.ue-brick .article-p{max-height:80px;-webkit-line-clamp:4;text-overflow:ellipsis}.ue-brick-icon-wrapper{display:flex;align-items:center;width:100%}.ue-brick-with-input{flex-direction:column}.ue-brick-with-input .main-board-slot-kb{width:100%;margin-top:20px;display:flex;height:50px;min-height:50px}.ue-brick-with-input .main-board-slot-kb input{padding:16px;border-radius:3px;border-bottom-right-radius:0;border-top-right-radius:0;border:1px solid #ebeef3;border-right:0;background:#fafafa;flex:1}.ue-brick-with-input .main-board-slot-kb input::placeholder{color:#afafaf}.ue-brick-with-input .main-board-slot-kb .main-kb-search-input{background:var(--usercom-primary-color--dark);width:50px;height:50px;min-width:50px;max-width:50px;min-height:50px;display:flex;justify-content:center;border-radius:3px;border-bottom-left-radius:0;border-top-left-radius:0;cursor:pointer}.ue-brick-with-input .main-board-slot-kb svg{fill:var(--usercom-font-color);width:20px}\n", ""]), e.exports = i
        },
        7882: (e, t, r) => {
            var o = r(8081),
                i = r(3645),
                a = r(1667),
                n = r(2926),
                s = r(1888),
                p = r(1857),
                c = r(5792),
                l = r(8401),
                d = r(583),
                m = i(o),
                u = a(n),
                f = a(s),
                x = a(p),
                h = a(c),
                g = a(l),
                b = a(d);
            m.push([e.id, ".usercom-status-fade-enter-active,.usercom-status-fade-leave-active{transition:opacity 0.5s}.usercom-status-fade-enter,.usercom-status-fade-leave-to{opacity:0}.usercom-fade-in-enter-active,.usercom-fade-in-leave-active{transition:opacity 0.3s}.usercom-fade-in-enter,.usercom-fade-in-leave-to{opacity:0}.usercom-messages-module{flex:1;border-radius:12px 12px 0 0;border:1px solid #ebeef3;border-bottom:none;margin-top:-8px;position:relative;background:#fafafa;overflow:hidden;z-index:0;height:100%;border-top:0}.usercom-messages-module::after{content:'';background-position:bottom;background-size:contain;position:absolute;top:0;left:0;z-index:-1;opacity:1;width:100%;height:100%}.usercom-messages-module-wallpaper1::after{background-image:url(" + u + ")}.usercom-messages-module-wallpaper2::after{background-image:url(" + f + ")}.usercom-messages-module-wallpaper3::after{background-image:url(" + x + ")}.usercom-messages-module-wallpaper4::after{background-image:url(" + h + ")}.usercom-messages-module-wallpaper5::after{background-image:url(" + g + ")}.usercom-messages-module-wallpaper6::after{background-image:url(" + b + ")}.usercom-messages-module .usercom-view-wrapper{overflow:hidden auto;height:calc(100% - 80px);background-color:transparent;position:relative}.usercom-messages-module .usercom-view-wrapper-mask{-webkit-mask-image:linear-gradient(transparent, #000 4%)}.usercom-messages-module .usercom-view-wrapper .usercom-loader-wrapper{height:100%}.isNative,.message-wrapper[data-native='true']{justify-content:flex-start;align-items:flex-start}.isNative.usercom-avatar-in-message,.usercom-avatar-in-message.message-wrapper[data-native='true']{margin-left:15px}.isNative.usercom-avatar-in-message:not(.lastMessageInGroup),.usercom-avatar-in-message.message-wrapper:not(.lastMessageInGroup)[data-native='true']{margin-left:58px}.isNative.usercom-avatar-in-message:not(.lastMessageInGroup) .message-date,.usercom-avatar-in-message.message-wrapper:not(.lastMessageInGroup)[data-native='true'] .message-date{margin-left:0}.isNative.usercom-avatar-in-message .message-date,.usercom-avatar-in-message.message-wrapper[data-native='true'] .message-date{margin-left:38px}.isNative .usercom-message-content-wrapper,.message-wrapper[data-native='true'] .usercom-message-content-wrapper{display:flex;align-items:flex-end}.isNative .usercom-message-agent img,.message-wrapper[data-native='true'] .usercom-message-agent img{width:35px;height:35px;background-color:#fafafa;border-radius:50%;margin-right:8px}.isNative .message-brick,.message-wrapper[data-native='true'] .message-brick{border-radius:12px 12px 12px 0;color:#242c3d !important;background-color:#fff !important;border:1px solid #ebeef3}.isNative .message-brick p,.message-wrapper[data-native='true'] .message-brick p{margin:0}.isNative .message-brick a,.message-wrapper[data-native='true'] .message-brick a{color:#2555df}.isNative .message-info,.message-wrapper[data-native='true'] .message-info{display:flex;flex-direction:row}.message-wrapper{padding:3px 0;margin:0 15px;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end}.message-wrapper.usercom-avatar-in-message{margin-left:58px}.message-wrapper:first-child{margin-top:25px}.message-brick{box-shadow:10px 10px 25px rgba(174,174,192,0.2);border-radius:12px 12px 0 12px;padding:15px;background-color:var(--usercom-primary-color);color:var(--usercom-font-color);font-size:14px;white-space:pre-wrap;line-height:22px;max-width:100%;position:relative;word-wrap:break-word !important;word-break:break-word !important}.message-brick iframe{max-width:100%}.message-brick img{max-width:100%;height:auto;cursor:zoom-in}.message-brick a{color:var(--usercom-font-color);text-decoration:underline}.message-info{margin-top:5px;display:flex;flex-direction:row-reverse;align-items:center}.message-status{line-height:12px;margin-left:5px;display:flex}.message-status div{line-height:5px}.message-date{color:#afafaf;font-size:12px;margin-left:5px;text-transform:uppercase}.usercom-bot-answer-item{padding:5px 15px;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;cursor:pointer;text-align:right}.usercom-bot-answer-item p{margin:0;padding:15px;box-shadow:0 1px 25px rgba(0,0,0,0.06);border-radius:12px 12px 0 12px;background-color:#e5eaf7;color:#2555df;font-size:14px;white-space:pre-wrap;max-width:100%;transition:all 200ms;word-break:normal !important;word-wrap:break-word !important}.usercom-bot-answer-item p:hover,.usercom-bot-answer-item p:focus{background:#d9e1f3}.usercom-dots-container{margin:15px;position:relative;width:70px;height:40px;border-radius:20px 20px 20px 4px;background-color:#ebeef3}.usercom-dots-block{left:50%;top:50%;transform:translate(-50%, -50%);position:absolute;align-items:center;display:flex;height:17px}.usercom-dots-item{animation:typingAnimation 1.5s infinite ease-in-out;border-radius:100%;display:inline-block;height:10px;margin-right:4px;background-color:#90949c;width:10px}.usercom-dots-item:nth-child(1){animation-delay:200ms}.usercom-dots-item:nth-child(2){animation-delay:300ms}.usercom-dots-item:nth-child(3){animation-delay:400ms}@-webkit-keyframes typingAnimation{0%{transform:translateY(0px)}28%{transform:translateY(-5px)}44%{transform:translateY(0px)}}.closed{opacity:0.2}.usercom-status-slide-enter-active,.usercom-status-slide-leave-active{transition:all 0.2s;opacity:1}.usercom-status-slide-enter,.usercom-status-slide-leave-to{transform:translateX(-5px);margin-left:5px;opacity:0}@keyframes pulse{0%{transform:scale(0.8);box-shadow:0 0 0 0 rgba(175,175,175,0.7)}70%{transform:scale(1);box-shadow:0 0 0 5px rgba(175,175,175,0)}100%{transform:scale(0.8);box-shadow:0 0 0 0 rgba(175,175,175,0)}}.usercom-status{display:flex}.usercom-status--not-sent{border-radius:50%;margin:1px 3px 4px 3px;height:6px;width:6px;transform:scale(1);background:#afafaf;box-shadow:0 0 0 0 #afafaf;animation:pulse 2s infinite}.usercom-status--read{margin-right:-6px}.usercom-email-prompt{display:flex;flex-direction:column;justify-content:space-between;max-width:100%;box-shadow:10px 10px 25px rgba(174,174,192,0.2);border-radius:12px 12px 12px 0;border:1px solid #ebeef3;background-color:#fff}.usercom-email-prompt p{color:#242c3d;font-size:14px;margin:10px;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:88px;line-height:22px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}.usercom-email-prompt .email-wrapper{display:flex;height:40px;justify-content:space-between;width:100%}.usercom-email-prompt .email-wrapper input{width:100%;border-color:transparent;padding-left:8px;font-size:14px;border-top:1px solid #ebeef3;outline:none;background-color:#fafafa}.usercom-email-prompt .email-wrapper button{width:45px;border:1px solid var(--usercom-primary-color);background-color:var(--usercom-primary-color);border-radius:0 0 12px 0;outline:none;cursor:pointer}.usercom-email-prompt .email-wrapper[data-error] input{border:1px solid #ff3535}.usercom-email-prompt .email-wrapper[data-error] button{background-color:#ff3535;border:1px solid #ff3535;border-left:none}.usercom-email-prompt .email-wrapper[data-success] button{background-color:#5ac05a;border:1px solid #5ac05a;border-left:none;cursor:auto}.usercom-assigned{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;width:100%}.usercom-assigned::before{content:'';height:1px;background:#ebeef3;position:absolute;width:100%;left:0;top:50%}.usercom-assigned-content{font-size:14px;z-index:1;border:1px solid #ebeef3;border-radius:12px;padding:8px 10px;background:#fff}.usercom-compose-box{width:100%;padding:15px}.usercom-compose-wrapper{display:flex;align-items:center;justify-content:flex-end;border-radius:5px;min-height:50px;position:relative}.usercom-compose-wrapper[data-error]::before,.usercom-compose-wrapper[data-error-upload]::before{content:attr(data-error);position:absolute;color:#fff;left:0;right:0;bottom:46px;margin:auto;background-color:#ff3535;padding:7px 15px;font-size:14px;border-top-left-radius:5px;border-top-right-radius:5px;animation:wobble-hor-bottom 0.3s both}.usercom-compose-wrapper[data-error] input:focus,.usercom-compose-wrapper[data-error-upload] input:focus{outline-color:#ff3535}@keyframes wobble-hor-bottom{0%,100%{transform:translateX(0%);transform-origin:50% 50%}15%{transform:translateX(-30px) rotate(-6deg)}30%{transform:translateX(15px) rotate(6deg)}45%{transform:translateX(-15px) rotate(-3.6deg)}60%{transform:translateX(9px) rotate(2.4deg)}75%{transform:translateX(-6px) rotate(-1.2deg)}}.usercom-compose-wrapper[data-error-upload]::before{content:attr(data-error-upload)}.usercom-compose-wrapper[data-error-upload] textarea:focus{outline-color:#ff3535}.usercom-compose-wrapper input.usercom-compose-textarea{padding-right:14px}.usercom-compose-wrapper input.usercom-compose-textarea+.usercom-compose-actions{display:none}.usercom-compose-textarea{width:100%;min-height:50px;box-shadow:10px 10px 25px rgba(174,174,192,0.2);border-radius:5px;resize:none;padding:14px 74px 14px 14px;font-family:\"Helvetica Neue\",Helvetica,sans-serif;color:#242c3d;font-size:14px;line-height:20px;height:50px;background-color:#fff;border:1px solid #ebeef3}.usercom-compose-textarea::placeholder{color:#afafaf}.usercom-compose-textarea:focus{-webkit-overflow-scrolling:touch;-webkit-overflow-scrolling:auto;outline:none;border:1px solid var(--usercom-primary-color)}.usercom-compose-actions{position:absolute;padding:15px;top:0}.usercom-compose-actions-widgets{display:flex;align-items:center}.usercom-compose-actions-widgets .icon-send path{fill:var(--usercom-primary-color)}.usercom-compose-actions-widgets .widget{cursor:pointer;margin-right:4px}.usercom-compose-actions-widgets .widget-open{padding:3px}.usercom-compose-actions-widgets .widget:last-child{margin-right:0px}[data-disabled='true']{cursor:default;pointer-events:none}.usercom-widget-active{padding:20px;background:#fff;overflow:hidden;border-radius:12px 12px 3px;margin-right:0;cursor:default;position:fixed;bottom:0;left:0;right:0;height:calc(100% - 58px);margin:0 1px;display:flex;flex-direction:column}[data-footer] .usercom-widget-active{height:calc(100% - 108px);bottom:50px}.usercom-widget-empty{display:flex;justify-content:center;align-items:center;text-align:center;height:100%}.usercom-widget-empty h5{margin-top:10px;margin-bottom:7px;color:#242c3d;font-size:16px;font-weight:400}.usercom-widget-empty p{margin-top:7px;margin-bottom:0;color:#646d7f;font-size:14px}.usercom-widget-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.usercom-widget-title p{margin:0;font-size:16px;font-weight:400}.usercom-widget-title .icon{cursor:pointer;line-height:15px;padding:3px}.usercom-widget-search input{border-radius:3px;border:1px solid #f5f6f9;background-color:#fafafa;width:100%;height:50px;color:#afafaf;font-size:14px;padding:12px;margin-bottom:10px}.usercom-widget-search input::placeholder{color:#afafaf}.usercom-widget-search input:focus{-webkit-overflow-scrolling:touch;-webkit-overflow-scrolling:auto;outline:none;padding:11px;border:2px solid var(--usercom-primary-color)}.usercom-widget-content{height:calc(100% - 15px);overflow:hidden auto}.usercom-widget-content .usercom-loader-wrapper{height:480px}@media only screen and (max-width: 550px){.usercom-widget-content .usercom-loader-wrapper{height:100% !important}}.usercom-widget-items{display:flex;flex-wrap:wrap;justify-content:flex-start}.usercom-h100{height:100%}.usercom-h100 .usercom-widget-empty{width:100%}.usercom-widget-items-emoji{line-height:28px;font-size:28px;cursor:pointer;text-align:center;margin:1px;padding:10px;flex:0 0 16%;width:28px;position:relative}.usercom-emoji-category{display:flex;flex:1;align-items:center;justify-content:space-between;margin:2px 0 0}.usercom-emoji-category.active-group-0 svg:nth-child(1) path{fill:#242c3d !important}.usercom-emoji-category.active-group-1 svg:nth-child(2) path{fill:#242c3d !important}.usercom-emoji-category.active-group-2 svg:nth-child(3) path{fill:#242c3d !important}.usercom-emoji-category.active-group-3 svg:nth-child(4) path{fill:#242c3d !important}.usercom-emoji-category.active-group-4 svg:nth-child(5) path{fill:#242c3d !important}.usercom-emoji-category.active-group-5 svg:nth-child(6) path{fill:#242c3d !important}.usercom-emoji-category.active-group-6 svg:nth-child(7) path{fill:#242c3d !important}.usercom-emoji-category.active-group-7 svg:nth-child(8) path{fill:#242c3d !important}.usercom-emoji-category.active-group-8 svg:nth-child(9) path{fill:#242c3d !important}.usercom-emoji-category.active-group-9 svg:nth-child(10) path{fill:#242c3d !important}.usercom-emoji-category.active-group-10 svg:nth-child(11) path{fill:#242c3d !important}.usercom-emoji-category svg{cursor:pointer;transform:scale(0.5);height:48px}.usercom-emoji-category svg path{fill:#afafaf}.usercom-emoji-category svg:hover path{fill:#242c3d}.usercom-widget-emoji-skintone{position:fixed;z-index:1;box-shadow:10px 10px 25px rgba(174,174,192,0.2);border:1px solid #ebeef3;border-radius:3px;background:#ffffff}.usercom-widget-emoji-skintone-list{display:flex;flex-direction:row}.usercom-widget-emoji-skintone-list span{padding:8px 12px;position:relative;z-index:2}.usercom-widget-emoji-skintone-after{display:block;width:20px;height:20px;background:#ffffff;position:fixed;transform-origin:left;transform:rotate(45deg) translateX(-50%);z-index:0;border-right:1px solid #ebeef3;border-bottom:1px solid #ebeef3}.usercom-emoji-group{width:100%;font-size:14px;line-height:16px;color:#afafaf;margin:9px 0}.usercom-widget-gifs-wrapper-item{flex:1 0 auto;height:106px;width:106px;margin-bottom:7px;overflow:hidden;cursor:pointer;margin-left:3px;margin-right:3px}.usercom-widget-gifs-wrapper-item::before{content:'';padding-top:100%;float:left}.usercom-widget-gifs-wrapper-item:hover{box-shadow:0 1px 13px rgba(0,0,0,0.06)}.usercom-widget-gifs-item{background-size:cover;background-position:center;height:100%}.lastMessageInGroup .usercom-gif-wrapper::before{position:absolute;content:'via Tenor';left:0;bottom:-23px;color:#afafaf;font-size:12px}.usercom-loader-wrapper{align-items:center;justify-content:center;display:flex}.usercom-loader-wrapper .usercom-spinner{width:50px;height:50px}.usercom-loader-mini-wrapper{height:60px;align-items:center;justify-content:center;display:flex}.usercom-loader-mini-wrapper .usercom-spinner{width:30px;height:30px}.usercom-spinner{margin:0;background:transparent;border-top:4px solid #afafaf;border-right:4px solid transparent;border-radius:50%;-webkit-animation:1s spin linear infinite;animation:1s spin linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\n", ""]), e.exports = m
        },
        7960: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, '.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\'\';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.flatpickr-calendar{padding-top:15px;box-shadow:0 -5px 25px rgba(174,174,192,0.3);border-radius:12px 12px 3px;border:1px solid #ebeef3;width:342px}.flatpickr-calendar .numInput{border-radius:2px;border:1px solid #ebeef3}.flatpickr-calendar .numInput:focus{border:1px solid #ebeef3}.flatpickr-calendar .numInput:focus,.flatpickr-calendar .numInput:hover{background:#fff}.flatpickr-calendar .numInputWrapper:focus{border:1px solid #ebeef3}.flatpickr-calendar .numInputWrapper:focus,.flatpickr-calendar .numInputWrapper:hover{background:#fff}.flatpickr-innerContainer{justify-content:center;margin-bottom:10px}.flatpickr-day{font-family:"Helvetica Neue",Helvetica,sans-serif}.flatpickr-day:hover{background:var(--usercom-primary-color--light);border-color:transparent}.flatpickr-day.today{border-color:transparent;color:#2555df;font-weight:400;line-height:2.7}.flatpickr-day.selected{border-color:transparent;color:#2555df;background:var(--usercom-primary-color--light);font-weight:400;line-height:2.7}.flatpickr-weekdays{height:36px}.flatpickr-weekday{text-transform:uppercase;font-size:14px;color:#242c3d;font-weight:400}.flatpickr-current-month .numInputWrapper{width:87px}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{top:10px}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{stroke:black}.flatpickr-current-month .flatpickr-monthDropdown-months{padding:0 0 0 0}.flatpickr-current-month .flatpickr-monthDropdown-months:hover,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{background:none}.flatpickr-current-month input.cur-year{padding:0 0 0 35px;color:#242c3d;font-family:"Helvetica Neue",Helvetica,sans-serif;font-size:16px;font-weight:400}.flatpickr-current-month .flatpickr-monthDropdown-months{font-size:16px;font-weight:400;color:#242c3d;width:105px}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:100px}.flatpickr-calendar.hasTime .flatpickr-time{height:60px;border-top:1px solid #ebeef3}.flatpickr-time{max-height:100px;display:flex;align-items:center;padding:0 0 0 20px}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:40px}.usercom-picker{font-family:"Helvetica Neue",Helvetica,sans-serif;display:flex;flex-direction:column;align-items:center;padding:0 15px;position:relative}.usercom-picker-message{cursor:pointer;align-self:flex-end;background:#e5eaf7;color:#2555df;border-radius:12px 12px 12px 3px}.usercom-picker-message div{display:flex;align-items:center;font-size:14px;font-weight:400;padding:10px}.usercom-picker-message svg{margin-right:5px}.usercom-picker-calendar{position:absolute;top:-5px}.usercom-picker-submit-container{display:flex;justify-content:center;margin:6px 0 16px 0}.usercom-picker-submit{cursor:pointer;color:#fff;background:var(--usercom-primary-color);padding:9px 15px;border-radius:5px;align-self:end}\n', ""]), e.exports = i
        },
        5665: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "*{box-sizing:border-box}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0px rgba(0,0,0,0)}::-webkit-scrollbar-thumb{border-radius:6px;-webkit-box-shadow:inset 0 20px 20px #afafaf}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.usercom-mouse-click .usercom-header-close:focus,.usercom-mouse-click .usercom-header-back:focus,.usercom-mouse-click .ue-brick:focus,.usercom-mouse-click .conversation-brick:focus,.usercom-mouse-click .widget-open:focus,.usercom-mouse-click .usercom-widget-title .icon:focus,.usercom-mouse-click .usercom-widget-items-emoji:focus,.usercom-mouse-click .usercom-widget-gifs-item:focus,.usercom-mouse-click .usercom-knowledgebase-search-input:focus{outline:0}.usercom-enter-click .ue-brick:focus,.usercom-enter-click .conversation-brick:focus,.usercom-enter-click .widget-open:focus,.usercom-enter-click .usercom-widget-title .icon:focus,.usercom-enter-click .usercom-widget-items-emoji:focus,.usercom-enter-click .usercom-branding a:focus,.usercom-enter-click .usercom-widget-search input:focus,.usercom-enter-click .usercom-compose-textarea:focus,.usercom-enter-click .usercom-widget-gifs-item:focus,.usercom-enter-click .usercom-knowledgebase-search-input:focus{outline:0px;box-shadow:inset 0px 0px 0px 2px var(--usercom-outline-color)}.usercom-enter-click .usercom-widget-search input:focus,.usercom-enter-click .usercom-compose-textarea:focus{border-color:white}.usercom-enter-click .usercom-header-close:focus,.usercom-enter-click .usercom-button-primary:focus,.usercom-enter-click .usercom-widget-gifs-wrapper-item:focus,.usercom-enter-click .usercom-header-back:focus{outline:0px;box-shadow:inset 0px 0px 0px 2px var(--usercom-outline-color--contrast)}.usercom-current-view{font-family:\"Helvetica Neue\",Helvetica,sans-serif;height:714px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}@media screen and (max-width: 550px){.usercom-current-view{height:100%;max-height:100vh;width:100%}}@media screen and (max-height: 550px) and (orientation: landscape){.usercom-current-view{height:100%}}.usercom-notification-close{position:absolute;right:13px;top:12px;width:13px;height:13px}.usercom-notification-close::before,.usercom-notification-close::after{position:absolute;left:6.5px;content:' ';height:13px;width:1px;background-color:#afafaf}.usercom-notification-close::before{transform:rotate(45deg)}.usercom-notification-close::after{transform:rotate(-45deg)}.usercom-header{max-height:238px;border-radius:12px 12px 0 0;background-image:linear-gradient(126deg, var(--usercom-primary-color) 0%, var(--usercom-primary-color--dark) 100%);position:relative;transition:all .3s}.usercom-header-mini-view{min-height:66px}.usercom-header-mini-view[data-view='chatConversations'],.usercom-header-mini-view[data-view='boardList'],.usercom-header-mini-view[data-view='knowledgeBaseResults']{max-height:66px}.usercom-header-full-screen{border-radius:0px}.usercom-modules-expanded .ue-brick--order-1{margin-top:0px !important}.usercom-modules-expanded>.usercom-modules-scroll-wrapper-1{top:0 !important;height:100% !important}.usercom-modules-expanded.usercom-knowledgebase-module .ue-brick:first-child{margin-top:0px !important}.usercom-modules.usercom-knowledgebase-module .ue-brick:first-child{transition:margin-top .3s;margin-top:-20px}.usercom-modules .ue-brick--order-1{transition:margin-top .3s;margin-top:-20px}.usercom-view-wrapper{flex:1;position:relative;margin-top:-8px;background-color:#fff;border-radius:12px 12px 0 0}.usercom-modules-scroll-wrapper-1{overflow:hidden auto;height:calc(100% + 24px);position:absolute;width:100%;top:-24px;padding:20px 20px 0;display:flex;flex-direction:column}.usercom-slide-from-bottom-fade-in-enter-active{transition:all 0.5s ease}.usercom-slide-from-bottom-fade-in-leave-active{transition:all 0.2s cubic-bezier(1, 0.5, 0.8, 1)}.usercom-slide-from-bottom-fade-in-enter,.slide-from-bottom-fade-in-leave-to{transform:translateY(20px);opacity:0}.usercom-fade-enter-active,.usercom-fade-leave-active{transition:opacity 0.3s}.usercom-fade-enter,.usercom-fade-leave-to{opacity:0}.usercom-composer-widget-enter-active{transition:opacity 0.3s ease}.usercom-composer-widget-leave-active{transition:none}.usercom-composer-widget-enter,.usercom-composer-widget-leave-to{opacity:0;width:0}.usercom-brick-element .usercom-conversation-hr{margin:0 20px;border:0;border-top:1px solid #ebeef3}.usercom-brick-element:last-child .usercom-conversation-hr{display:none}\n", ""]), e.exports = i
        },
        1662: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "#usercom-board-frame[name]{z-index:2147483645;position:fixed;right:20px;bottom:calc(60px + 20px + 10px);height:714px;max-height:calc(100% - 110px);width:380px;background-color:transparent;transition:all 0.15s;display:flex;flex-direction:column;justify-content:space-between;min-height:288px;box-shadow:10px 10px 25px rgba(0,0,0,0.06);border-radius:12px 12px 3px 12px;overflow:hidden}.usercom-alignment-left #usercom-board-frame[name]{right:auto;left:20px;border-radius:12px 12px 12px 3px}@media screen and (max-width: 550px){.usercom-alignment-left #usercom-board-frame[name]{left:0;right:0;border-radius:0}}@media screen and (max-width: 550px){#usercom-board-frame[name]{height:100%;max-height:100vh;width:100%;right:0;top:0;bottom:0;min-height:0;border-radius:0}}@media screen and (max-height: 550px) and (orientation: landscape){#usercom-board-frame[name]{height:100%;max-height:100vh;width:100%;right:0;top:0;bottom:0;min-height:0;border-radius:0}}.usercom-board{position:fixed;z-index:2147483645}.usercom-fade-enter-active,.usercom-fade-leave-active{transition:opacity 0.2s}.usercom-fade-enter,.usercom-fade-leave-to{opacity:0}\n", ""]), e.exports = i
        },
        3862: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "*{box-sizing:border-box}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0px rgba(0,0,0,0)}::-webkit-scrollbar-thumb{border-radius:6px;-webkit-box-shadow:inset 0 20px 20px #afafaf}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.usercom-mouse-click .usercom-launcher-dot:focus{outline:0}.usercom-enter-click .usercom-launcher-dot:focus{outline:0px;box-shadow:inset 0px 0px 0px 2px var(--usercom-outline-color)}.usercom-launcher-dot{border-radius:53px 3px 53px 53px;border:0 solid #979797;background-color:var(--usercom-primary-color);overflow:hidden;cursor:pointer}.usercom-launcher-dot img{max-height:60px;max-width:60px;height:100%;width:100%}\n", ""]), e.exports = i
        },
        1486: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, '.usercom-launcher-counter{width:28px;height:28px;max-width:28px;max-height:28px;border-radius:50%;z-index:2147483646;position:fixed;bottom:65px;right:7px;color:#fff;display:flex;justify-content:center;align-items:center;background:#ff3535;font-family:"Helvetica Neue",Helvetica,sans-serif;font-size:17px}@media screen and (max-width: 550px){.usercom-launcher-counter{transform:scale(.75);bottom:57px}}.usercom-alignment-left .usercom-launcher-counter{right:auto;left:75px}@media screen and (max-width: 550px){.usercom-alignment-left .usercom-launcher-counter{transform:scale(.75);left:55px}}#usercom-launcher-dot-frame[name]{width:60px !important;height:70px !important;padding-top:10px;z-index:2147483645;position:fixed;bottom:20px;right:20px}@media screen and (max-width: 550px){#usercom-launcher-dot-frame[name]{width:50px !important;height:60px !important}}.usercom-alignment-left #usercom-launcher-dot-frame[name]{left:20px;right:auto}.usercom-greeting-enter-active{transition:opacity 0.2s}.usercom-greeting-leave-active{transition:opacity 0.1s}.usercom-greeting-enter,.usercom-greeting-leave-to{transform:none;opacity:0}@media screen and (max-width: 550px){.usercom-greeting-enter,.usercom-greeting-leave-to{transform:scale(.75);bottom:60px;right:-30px}}\n', ""]), e.exports = i
        },
        8670: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, '*{box-sizing:border-box}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0px rgba(0,0,0,0)}::-webkit-scrollbar-thumb{border-radius:6px;-webkit-box-shadow:inset 0 20px 20px #afafaf}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.usercom-mouse-click .usercom-greeting-typing:focus{outline:0}.usercom-enter-click .usercom-greeting-typing:focus{outline:0px;border-radius:0px;box-shadow:inset 0px 0px 0px 2px var(--usercom-outline-color)}.usercom-greeting-wrapper{font-family:"Helvetica Neue",Helvetica,sans-serif;border-radius:12px 12px 3px;cursor:pointer}.usercom-greeting-header{height:102px;border-radius:12px 12px 0 0;background-image:linear-gradient(126deg, var(--usercom-primary-color) 0%, var(--usercom-primary-color--dark) 100%);display:flex;justify-content:start;align-items:center;padding:2px 15px 15px 15px;color:var(--usercom-font-color)}.usercom-greeting-header-text{overflow:hidden}.usercom-greeting-header-text h3,.usercom-greeting-header-text p{margin:0;overflow:hidden}.usercom-greeting-header-text h3{color:var(--usercom-font-color);font-size:16px;font-weight:400;text-overflow:ellipsis;white-space:nowrap}.usercom-greeting-header-text p{color:var(--usercom-font-color);opacity:0.7;font-size:14px;line-height:20px;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.usercom-greeting-header .avatar{height:55px;width:55px;min-height:55px;min-width:55px;border-radius:50%;background:transparent;margin-right:12px}.usercom-greeting-typing{height:50px;background-color:#fff;color:#afafaf;font-size:14px;border-radius:12px 12px 3px 12px;border:1px solid #ebeef3;margin:-8px 0 0 0;background-color:#fff;display:flex;align-items:center;padding:15px;justify-content:space-between}.usercom-greeting-typing .usercom-greeting-prompt{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:250px;margin:0}.usercom-greeting-typing[data-footer]{margin:-9px 0 -1px 0px;border-radius:12px 12px 0 0;border-bottom:none}\n', ""]), e.exports = i
        },
        4055: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".usercom-launcher-container{z-index:2147483645;position:fixed}@media screen and (max-width: 550px){.usercom-launcher-container{display:none !important}}.usercom-launcher-container--close{opacity:0;z-index:2147483645;position:fixed;bottom:197px;right:20px;padding-bottom:75px;height:37px;width:37px}.usercom-alignment-left .usercom-launcher-container--close{right:auto;left:370px}@media screen and (max-width: 550px){.usercom-alignment-left .usercom-launcher-container--close{transform:scale(.75);left:275px;bottom:197px !important}}@media screen and (max-width: 550px){.usercom-launcher-container--close{transform:scale(.75);bottom:197px !important;right:10px}}.usercom-launcher-container--close svg{cursor:pointer}.usercom-launcher-container:hover .usercom-launcher-container--close{bottom:235px;opacity:1;transition:bottom 0.1s, opacity 0.1s}.usercom-launcher-container[data-footer] .usercom-launcher-container--close{bottom:247px}.usercom-launcher-container[data-footer]:hover .usercom-launcher-container--close{transition:bottom 0.1s, opacity 0.1s;opacity:1;bottom:280px}#usercom-greeting-wrapper-frame[name]{box-shadow:10px 10px 25px rgba(0,0,0,0.06);width:380px !important;z-index:2147483645;position:fixed;bottom:90px;right:20px;max-height:144px;height:100%;border-radius:12px 12px 3px 12px}.usercom-alignment-left #usercom-greeting-wrapper-frame[name]{right:auto;left:20px;border-radius:12px 12px 12px 3px}@media screen and (max-width: 550px){.usercom-alignment-left #usercom-greeting-wrapper-frame[name]{transform:scale(.75);left:-30px}}@media screen and (max-width: 550px){#usercom-greeting-wrapper-frame[name]{transform:scale(.75);bottom:55px;right:-30px}}.usercom-launcher-container[data-footer] #usercom-greeting-wrapper-frame[name]{max-height:192px}\n", ""]), e.exports = i
        },
        5251: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "*{box-sizing:border-box}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0px rgba(0,0,0,0)}::-webkit-scrollbar-thumb{border-radius:6px;-webkit-box-shadow:inset 0 20px 20px #afafaf}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.usercom-lightbox{background-color:rgba(0,0,0,0.6);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;width:100%;height:100%}.usercom-lightbox-box{position:relative;cursor:default}.usercom-lightbox-close{width:36px;height:36px;background-color:rgba(0,0,0,0.5);border-radius:50%;position:absolute;top:16px;right:16px;cursor:pointer}.usercom-lightbox-close::before,.usercom-lightbox-close::after{position:absolute;left:18px;top:10px;content:'';height:15px;width:1px;background-color:#fff}.usercom-lightbox-close::before{transform:rotate(45deg)}.usercom-lightbox-close::after{transform:rotate(-45deg)}.usercom-lightbox-media{max-width:99%;margin:0 auto}.usercom-lightbox-media img{border-radius:9px;max-width:100%;max-height:90vh;height:auto}\n", ""]), e.exports = i
        },
        4426: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "#usercom-lightbox-frame[name]{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:2147483647}\n", ""]), e.exports = i
        },
        2949: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, '*{box-sizing:border-box}::-webkit-scrollbar-track{background-color:transparent}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3)}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0px rgba(0,0,0,0)}::-webkit-scrollbar-thumb{border-radius:6px;-webkit-box-shadow:inset 0 20px 20px #afafaf}input,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.usercom-notification-avatar,.usercom-notification--medium .avatar{position:absolute;top:0%;left:50%;transform:translate(-50%, -50%);border:1px solid #ebeef3;border-radius:50%}.usercom-notification-bigger,.usercom-notification--medium{background-color:#fff;box-shadow:10px 10px 38px rgba(174,174,192,0.4);border-radius:17px 17px 4px;border:1px solid #ebeef3;max-width:100%}.usercom-notification-span,.usercom-notification--medium span,.usercom-notification-small-context>div{line-height:20px;padding:45px 16px 16px;margin:0;max-height:70px;overflow-y:auto}.usercom-notification{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#242c3d;cursor:pointer;display:flex;align-items:flex-end}.usercom-notification p{margin:0}.usercom-notification--medium{width:380px;right:20px;top:110px}@media screen and (max-width: 550px){.usercom-notification--medium{transform:scale(.75);right:-30px}}@media screen and (max-width: 388px){.usercom-notification--medium{right:0px}}.usercom-notification--medium .avatar{max-width:70px;max-height:70px;width:70px;height:70px}.usercom-notification--medium span{font-size:14px}.usercom-notification-small-context{max-width:100%;max-height:100%;display:flex;justify-content:flex-end;align-items:flex-end;right:0;position:absolute;bottom:0;cursor:pointer}.usercom-notification-small-context .usercom-notification-message{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#242c3d}.usercom-notification-small-context .usercom-notification-message img,.usercom-notification-small-context .usercom-notification-message iframe{display:none}.usercom-notification-small-context p{margin:0}.usercom-notification-small-context .avatar{max-width:50px;max-height:50px;width:50px;height:50px;margin-right:12px;border-radius:50%}.usercom-notification-small-context>div{font-size:14px;box-shadow:0 1px 25px rgba(0,0,0,0.06);border-radius:12px 12px 12px 0;background-color:#fff;padding:15px;overflow:hidden}.usercom-notification-small-context>div div,.usercom-notification-small-context>div p{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.usercom-notification-small-context>div p+p{display:none}.usercom-notification--micro-context{width:28px;height:28px;border-radius:50%;color:#fff;display:flex;justify-content:center;align-items:center;background:#ff3535;font-family:"Helvetica Neue",Helvetica,sans-serif;font-size:17px}.usercom-notification--medium-context{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#242c3d;max-width:100%;width:380px;padding-top:40px;height:100vh;overflow:hidden;border-bottom:1px solid #ebeef3;border-radius:17px 17px 4px}.usercom-notification--medium-context p{margin:0}.usercom-notification--medium-context .usercom-notification-message{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#242c3d;background:#fff;border-radius:17px 17px 4px;border:1px solid #ebeef3;padding:45px 0 16px}.usercom-notification--medium-context .usercom-notification-message .usercom-notification-content{padding:0 16px;overflow-y:auto;min-height:20px}.usercom-notification--medium-context .usercom-notification-message .usercom-notification-content img{max-width:100%}.usercom-notification--medium-context .avatar{position:absolute;top:0%;left:50%;transform:translate(-50%, 0%);border:1px solid #ebeef3;border-radius:50%;max-width:70px;max-height:70px;width:70px;height:70px;background:#fff}.usercom-notification--medium-context div,.usercom-notification--medium-context div p{line-height:20px;margin:0;overflow-y:auto;font-size:14px}.usercom-notification--big-context{font-family:"Helvetica Neue",Helvetica,sans-serif;color:#242c3d;cursor:pointer;max-width:100%;padding-top:40px;height:100vh;overflow:hidden;border-bottom:1px solid #ebeef3;border-radius:17px 17px 4px}.usercom-notification--big-context p{margin:0}.usercom-notification--big-context .usercom-notification-message{background:#fff;border-radius:17px 17px 4px;border:1px solid #ebeef3;padding:45px 0 16px;overflow:hidden}.usercom-notification--big-context .usercom-notification-message .usercom-notification-content{padding:0 16px;overflow-y:auto;min-height:20px}.usercom-notification--big-context .usercom-notification-message .usercom-notification-content img{max-width:100%}.usercom-notification--big-context .avatar{position:absolute;top:0%;left:50%;transform:translate(-50%, 0%);border:1px solid #ebeef3;border-radius:50%;max-width:70px;max-height:70px;width:70px;height:70px;background:#fff}.usercom-notification--big-context div,.usercom-notification--big-context div p{line-height:20px;margin:0;overflow-y:auto;font-size:14px}.usercom-notification-close{position:absolute;right:13px;top:52px;width:13px;height:13px;cursor:pointer}.usercom-notification-close::before,.usercom-notification-close::after{position:absolute;left:6.5px;content:\' \';height:13px;width:1px;background-color:#afafaf}.usercom-notification-close::before{transform:rotate(45deg)}.usercom-notification-close::after{transform:rotate(-45deg)}\n', ""]), e.exports = i
        },
        4586: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".usercom-notification--small{position:fixed;height:70px;width:380px;right:20px;bottom:90px;z-index:2147483645;pointer-events:none;text-align:right}@media screen and (max-width: 550px){.usercom-notification--small{transform:scale(.75);bottom:80px;right:-25px}}.usercom-alignment-left .usercom-notification--small{right:auto;left:20px;flex-direction:row-reverse;text-align:left}@media screen and (max-width: 550px){.usercom-alignment-left .usercom-notification--small{left:-20px}}#usercom-notification-small-frame[name]{width:100%;height:100%;pointer-events:auto}#usercom-notification-micro-frame[name]{width:28px;height:28px;z-index:2147483646;position:fixed;bottom:65px;right:7px}@media screen and (max-width: 550px){#usercom-notification-micro-frame[name]{transform:scale(.75);bottom:55px}}.usercom-alignment-left #usercom-notification-micro-frame[name]{right:auto;left:65px}@media screen and (max-width: 550px){.usercom-alignment-left #usercom-notification-micro-frame[name]{left:55px}}.usercom-notification--medium{width:380px;z-index:2147483646;position:fixed;right:20px;top:110px}@media screen and (max-width: 550px){.usercom-notification--medium{transform:scale(.75);right:-25px}}@media screen and (max-width: 388px){.usercom-notification--medium{right:0}}.usercom-alignment-left .usercom-notification--medium{left:20px;right:auto}@media screen and (max-width: 550px){.usercom-alignment-left .usercom-notification--medium{transform:scale(.75);left:-25px}}#usercom-notification-medium-frame[name]{width:100%;height:100%;max-height:calc(100vh - 140px - 90px)}.usercom-notification--big{width:90vw;right:50%;top:50%;transform:translate(50%, -50%);z-index:2147483646;position:fixed;overscroll-behavior:none}#usercom-notification-big-frame[name]{width:100%;height:100%;max-height:calc(100vh - 140px - 90px);box-shadow:10px 40px 38px -20px rgba(174,174,192,0.4)}\n", ""]), e.exports = i
        },
        6510: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "#usercom-widget iframe{font-family:'Helvetica Neue', 'Apple Color Emoji', Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;font-size:100%;font-style:normal;letter-spacing:normal;text-transform:none;animation-play-state:running;backface-visibility:visible;background-color:transparent;background-image:none;border:0px none transparent;border-radius:0px;bottom:auto;z-index:auto;text-align:start;direction:ltr;display:inline;empty-cells:show;float:none;height:auto;-webkit-hyphenate-character:auto;hyphens:manual;font-weight:normal;text-align-last:initial;text-decoration:none;text-indent:0px;text-shadow:none;text-transform:none;animation-play-state:running;backface-visibility:visible;image-rendering:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto auto;column-gap:normal;content:normal;counter-increment:none;counter-reset:none;cursor:auto;padding:0px;break-after:auto;break-before:auto;break-inside:auto;perspective:none;perspective-origin:50% 50%;column-fill:balance;pointer-events:auto;position:static;font-stretch:normal;quotes:none;resize:none;right:auto;size:auto;table-layout:auto;top:auto;transform:none;transform-origin:50% 50% 0px;text-shadow:none;transform-style:flat;unicode-bidi:normal;vertical-align:baseline;white-space:normal;widows:2;width:auto;word-break:normal;word-spacing:normal;overflow-wrap:normal;orphans:2;font-variant:normal;font-weight:normal;text-align-last:initial;text-decoration:none;text-indent:0px;left:auto;line-height:inherit;list-style:outside none disc;margin:0px;max-height:none;max-width:none;min-height:0px;min-width:0px;opacity:1;outline-offset:0px;overflow:visible}#usercom-widget *{box-sizing:border-box !important}.userengage-widget-mobile-active{overflow:hidden;height:100%;width:100%;position:fixed}\n", ""]), e.exports = i
        },
        9762: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".usercom-loader-wrapper{align-items:center;justify-content:center;display:flex}.usercom-loader-wrapper .usercom-spinner{width:50px;height:50px}.usercom-loader-mini-wrapper{height:60px;align-items:center;justify-content:center;display:flex}.usercom-loader-mini-wrapper .usercom-spinner{width:30px;height:30px}.usercom-spinner{margin:0;background:transparent;border-top:4px solid #afafaf;border-right:4px solid transparent;border-radius:50%;-webkit-animation:1s spin linear infinite;animation:1s spin linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.conversation-brick{display:flex;align-items:center;padding:20px}.conversation-brick:hover{cursor:pointer;background-color:rgba(26,27,30,0.03)}.conversation-row{display:flex;flex-direction:row;justify-content:space-between}.conversation-column{display:flex;flex-direction:column;flex-basis:100%;white-space:nowrap;margin-left:12px;overflow:hidden}.conversation-avatar,.conversation-avatar img{width:45px;height:45px;border-radius:50%}.conversation-name{color:#242c3d;font-size:16px;font-weight:400;margin-bottom:3px;width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.conversation-time{color:#afafaf;font-size:14px}.conversation-snippet{color:#afafaf;font-size:14px;line-height:18px;height:18px;width:100%;max-width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.conversation-count{background-color:var(--usercom-primary-color);border-radius:50%;width:18px;height:18px;text-align:center;display:flex;justify-content:center;align-items:center;color:white;line-height:9px;font-size:9px;font-weight:400}.messages-module{overflow:hidden auto}.usercom-conversations-module{flex:1;border-radius:12px 12px 3px 12px;border:1px solid #ebeef3;margin-top:-9px;position:relative;background:#fff;overflow:hidden;height:100%}.usercom-conversations-module[data-footer]{border-radius:12px 12px 0 0;border-bottom:none}.usercom-wrapper-list{position:relative;height:calc(100% - 10px);overflow:hidden auto}.usercom-wrapper-list[data-start-conversation]{height:calc(100% - 80px)}.usercom-wrapper-list-mask{-webkit-mask-image:linear-gradient(#000 85%, transparent)}.usercom-wrapper-button{padding:20px}.usercom-loader-wrapper{height:100%}.usercom-empty-conversation-list{display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column}.usercom-empty-conversation-list-p{font-size:16px;line-height:19px;text-align:center;color:#242c3d}.usercom-empty-conversation-svg{width:62px;margin-bottom:24px}.usercom-button-primary{color:var(--usercom-button-color-font);width:100%;font-size:16px;background:var(--usercom-button-color-background);border-radius:3px;box-shadow:0 1px 25px rgba(49,94,251,0.06);border:none;text-decoration:none;transition:200ms;cursor:pointer;padding:10px;display:flex;justify-content:center;align-items:center}.usercom-button-primary svg path{fill:var(--usercom-button-color-font)}.usercom-button-primary span{padding-top:2px;margin-left:5px}.usercom-button-primary:hover,.usercom-button-primary:active{background:var(--usercom-primary-color--dark)}.usercom-slide-in-move{transition:opacity 0.1s linear, transform 0.1s ease-in-out}.usercom-slide-in-leave-active{transition:opacity 0.1s linear,transform 0.1s cubic-bezier(0.1, 0, 0.2, 0.1);transition-delay:calc(0.1s * (var(--total) - var(--i)))}.usercom-slide-in-enter-active{transition:opacity 0.1s linear,transform 0.1s cubic-bezier(0.1, 0.2, 0.1, 0.1);transition-delay:calc(0.1s * var(--i))}.usercom-slide-in-enter,.usercom-slide-in-leave-to{opacity:0}.usercom-slide-in-enter{transform:translateY(1em)}.usercom-slide-in-leave-to{transform:translateY(0)}\n", ""]), e.exports = i
        },
        387: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".usercom-heading{padding:0 20px}.usercom-heading .usercom-heading-small,.usercom-heading #usercom-s-heading-logo{height:32px}.usercom-heading .usercom-heading-small img,.usercom-heading #usercom-s-heading-logo img{max-width:100%;max-height:100%}.usercom-heading-board-h1{color:var(--usercom-font-color);font-size:22px;margin:22px 0 0 0;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:48px;line-height:24px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.usercom-heading-board-h2{color:var(--usercom-font-color);font-size:16px;opacity:0.3;margin:4px 0 0 0;font-weight:400;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:54px;line-height:18px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.usercom-heading-board+.usercom-header-distance{height:59px}.usercom-heading-small{font-size:16px;color:#fff}.usercom-center-elems{text-align:center;margin:0 auto}.usercom-heading-conversations{white-space:nowrap !important}.usercom-heading-conversations .usercom-conversation-h1{height:27px;color:var(--usercom-font-color);font-size:22px;margin-top:6px}.usercom-heading-conversations .usercom-conversation-h2{height:19px;color:var(--usercom-font-color);opacity:0.5;font-size:16px;margin-top:4px}.usercom-heading-conversations .usercom-center-elems .usercom-brandname{margin:0 auto}.usercom-text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.usercom-heading-knowledgebase-results .usercom-knowledgebase-h1{height:27px;color:var(--usercom-font-color);font-size:22px;margin-top:6px}.usercom-heading-knowledgebase-results .usercom-conversation-block{margin-top:5px}.usercom-heading-knowledgebase-results .usercom-conversation-block input{width:100%;padding:16px;border-radius:3px;border:0 none;background:var(--usercom-knowledgebase-search-bg);color:var(--usercom-font-color)}.usercom-heading-knowledgebase-results .usercom-conversation-block ::placeholder{color:var(--usercom-font-color)}.usercom-heading-knowledgebase-results .usercom-center-elems .usercom-brandname{margin:0 auto}.usercom-heading-knowledgebase-results+.usercom-header-distance{height:59px}.usercom-heading-messages{white-space:nowrap;color:#fff}.usercom-heading-messages--middle{display:flex;justify-items:center;align-items:center;flex-direction:column;text-align:center}.usercom-heading-messages .usercom-messages-extraContent{white-space:inherit}.usercom-heading-messages .usercom-messages-wrapper{overflow:hidden;width:100%}.usercom-heading-messages .usercom-messages-h1{margin-top:6px;height:17px;color:var(--usercom-font-color);font-size:14px;overflow:hidden;text-overflow:ellipsis;width:100%}.usercom-heading-messages .usercom-messages-h2{margin-top:2px;height:15px;color:var(--usercom-font-color);opacity:0.5;font-size:12px;overflow:hidden;text-overflow:ellipsis;width:100%}.usercom-heading-messages .usercom-messages-avatar{width:50px;height:50px;overflow:hidden;border-radius:50%;background-color:#fafafa}.usercom-heading-messages .usercom-messages-avatar img{max-width:100%;height:auto}.usercom-heading-messages--small{flex-direction:row;margin-left:30px;margin-right:36px;margin-top:-10px}.usercom-heading-messages--small+.usercom-header-distance{height:20px}.usercom-heading-messages--small .usercom-messages-wrapper{margin-left:12px;text-align:left}.usercom-heading-messages--small .usercom-messages-h1{margin-top:2px}.usercom-heading-messages--small .usercom-messages-avatar{min-width:35px;width:35px;height:35px}.usercom-heading-messages--small .usercom-message-wrapper-agent{height:36px;display:flex;align-items:flex-start;flex-direction:column;justify-content:center;text-align:left}.usercom-heading-messages--extraContent{white-space:normal}.usercom-heading-messages--extraContent .usercom-messages-bio{margin-top:9px;color:var(--usercom-font-color);opacity:0.5;font-size:12px;line-height:17px;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:120px;overflow:hidden auto}.usercom-heading-messages--extraContent .usercom-messages-socialMedia{margin-top:13px;display:flex;align-items:center}.usercom-heading-messages--extraContent .usercom-messages-socialMedia a{margin-right:8px}.usercom-heading-messages--extraContent .usercom-messages-avatar{align-self:flex-start;margin-top:1px}.usercom-conversation-agents{margin-top:8px;height:35px}.usercom-conversation-agents img{width:35px;height:35px;background-color:#fafafa;border-radius:50%;margin-left:-2px;border:1px solid var(--usercom-primary-color)}.usercom-conversation-agents img:first-child{margin-left:0}.usercom-header-distance{height:28px}.usercom-header-controls{position:relative;height:20px}.usercom-header-back{position:absolute;top:20px;height:23px;cursor:pointer;margin-top:-3px;left:20px;padding:3px}.usercom-header-back svg{width:10px;height:17px}.usercom-header-back svg path{fill:var(--usercom-font-color)}.usercom-header-close{position:absolute;top:20px;height:23px;cursor:pointer;margin-top:-3px;right:20px;padding:3px}.usercom-header-close svg{width:16px;height:17px}.usercom-header-close svg path{fill:var(--usercom-font-color)}.usercom-social-icon{width:30px;height:30px;border-radius:3px;background-color:var(--usercom-primary-color);display:inline-flex;align-items:center;justify-content:center}.usercom-social-icon svg path{fill:var(--usercom-font-color)}.usercom-brandname{color:var(--usercom-font-color);font-size:20px;height:24px;line-height:20px;font-weight:400;text-overflow:ellipsis;overflow:hidden;max-width:260px}.usercom-fade-height-enter-active,.usercom-fade-height-leave-active{transition:all 0.2s;max-height:130px}.usercom-fade-height-enter,.usercom-fade-height-leave-to{opacity:0;max-height:36px}.usercom-fade-in-enter-active,.usercom-fade-in-leave-active{transition:opacity 0.2s;visibility:visible}.usercom-fade-in-enter,.usercom-fade-in-leave-to{opacity:0;visibility:hidden}\n", ""]), e.exports = i
        },
        9376: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".ue-brick{box-shadow:-5px -5px 15px rgba(255,255,255,0.07),5px 5px 15px rgba(174,174,192,0.4);border-radius:12px 12px 3px;border:1px solid #ebeef3;background-color:#fff;padding:20px;display:flex;align-items:center;margin-bottom:20px;width:100%;cursor:pointer}.ue-brick .icon-container{display:flex;justify-content:center;align-items:center;width:50px;height:50px;min-width:50px;min-height:50px;border-radius:3px;border:1px solid #f0f0f3;background-color:#f5f6f9;position:relative}.ue-brick .icon-container .notification-circle{width:16px;height:16px;min-width:16px;min-height:16px;max-width:16px;max-height:16px;border-radius:50%;position:absolute;background:var(--usercom-primary-color);right:-9px;top:-9px;font-size:10px;color:white;overflow:hidden;display:flex;justify-content:center;align-items:center;text-align:center;font-style:normal}.ue-brick--link{text-decoration:none}.ue-brick--order-1{order:1}.ue-brick--order-2{order:2}.ue-brick--order-3{order:3}.ue-brick-image{border-radius:2px;min-height:160px;max-height:160px;height:160px;margin-bottom:15px;background-size:cover;background-position:center;background-repeat:no-repeat;box-shadow:-5px -5px 15px rgba(255,255,255,0.07),5px 5px 15px rgba(174,174,192,0.4)}.ue-brick-description{max-width:100%;display:flex;flex-direction:column;justify-content:center;padding-left:20px;overflow:hidden}.ue-brick-description--no-padding{padding:0}.ue-brick-description--no-overflow{overflow:unset}.ue-brick h3{margin:0;color:#242c3d;font-size:16px;line-height:18px;font-weight:400;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ue-brick p{margin-top:7px;color:#5d719d;margin-bottom:0;font-size:14px;word-break:break-word;word-wrap:break-word;hyphens:auto;white-space:normal;max-height:40px;line-height:20px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.ue-brick .article-h{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;hyphens:none;white-space:unset;text-overflow:ellipsis}.ue-brick .article-p{max-height:80px;-webkit-line-clamp:4;text-overflow:ellipsis}.ue-brick-icon-wrapper{display:flex;align-items:center;width:100%}.ue-brick-with-input{flex-direction:column}.ue-brick-with-input .main-board-slot-kb{width:100%;margin-top:20px;display:flex;height:50px;min-height:50px}.ue-brick-with-input .main-board-slot-kb input{padding:16px;border-radius:3px;border-bottom-right-radius:0;border-top-right-radius:0;border:1px solid #ebeef3;border-right:0;background:#fafafa;flex:1}.ue-brick-with-input .main-board-slot-kb input::placeholder{color:#afafaf}.ue-brick-with-input .main-board-slot-kb .main-kb-search-input{background:var(--usercom-primary-color--dark);width:50px;height:50px;min-width:50px;max-width:50px;min-height:50px;display:flex;justify-content:center;border-radius:3px;border-bottom-left-radius:0;border-top-left-radius:0;cursor:pointer}.ue-brick-with-input .main-board-slot-kb svg{fill:var(--usercom-font-color);width:20px}.usercom-loader-wrapper{align-items:center;justify-content:center;display:flex}.usercom-loader-wrapper .usercom-spinner{width:50px;height:50px}.usercom-loader-mini-wrapper{height:60px;align-items:center;justify-content:center;display:flex}.usercom-loader-mini-wrapper .usercom-spinner{width:30px;height:30px}.usercom-spinner{margin:0;background:transparent;border-top:4px solid #afafaf;border-right:4px solid transparent;border-radius:50%;-webkit-animation:1s spin linear infinite;animation:1s spin linear infinite}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.usercom-rating{min-height:130px}.usercom-rating-box{margin:3px 15px;border-radius:12px 12px 3px;padding:20px 10px;text-align:center;border:1px solid #ebeef3;background-color:#fff}.usercom-rating-box .closed{opacity:0.2}.usercom-rating-box p{margin-top:0px;margin-bottom:5px;color:#242c3d;font-size:14px}.usercom-rating-box button{outline:0;font-size:22px;cursor:pointer;line-height:22px;border:0;background:none;opacity:0.5;transition:200ms}.usercom-rating-box button:hover{opacity:1}.usercom-rating-result{margin:5px 15px 3px;color:#afafaf;font-size:14px}.usercom-knowledgebase-module .usercom-rating-box{margin:0;box-shadow:-5px -5px 15px rgba(255,255,255,0.07),5px 5px 15px rgba(174,174,192,0.4)}.usercom-knowledgebase-module .usercom-rating-box button{opacity:1}.usercom-knowledgebase-module .usercom-rating-box button:hover{transform:scale(1.2)}.usercom-knowledgebase-module .usercom-rated-marks .usercom-voted{transform:scale(1.2)}.usercom-knowledgebase-module .usercom-rated-marks button:not(.usercom-voted){opacity:0.2}.usercom-knowledgebase-module .usercom-rated-marks button{pointer-events:none}.usercom-knowledgebase-module .usercom-rating-result{margin:12px 0 0;text-align:center}[data-view='knowledgeBaseView']+.usercom-knowledgebase-module{flex:1;border-radius:12px 12px 3px 12px;border:1px solid #ebeef3;margin-top:-9px;position:relative;background:#fff;overflow:hidden;height:100%}[data-view='knowledgeBaseView']+.usercom-knowledgebase-module .usercom-wrapper-list{position:relative;height:calc(100% - 10px);overflow:hidden auto}[data-view='knowledgeBaseView'] .usercom-header-distance{height:20px}.usercom-knowledgebase-module[data-footer]{border-radius:12px 12px 0 0;border-bottom:none}.usercom-knowledgebase-module .usercom-wrapper-list-mask{-webkit-mask-image:linear-gradient(#000 85%, transparent)}.usercom-empty-knowledgebase-list{display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column}.usercom-empty-knowledgebase-list-p{font-size:16px;line-height:19px;text-align:center;color:#242c3d;font-weight:bold}.usercom-empty-knowledgebase-svg{width:62px;margin-bottom:15px}.usercom-wrapper-list--el{padding:20px 20px 0}.usercom-wrapper-list--el .ue-brick-description{padding-left:0}.usercom-article-title-wrapper{display:flex;align-items:top;justify-content:space-between}.usercom-article-title-wrapper .usercom-article-redirect{padding-left:24px}.usercom-article-title-wrapper .usercom-article-redirect svg{width:20px;height:18px}h1.usercom-article-title{font-size:22px;line-height:27px;color:#242c3d;margin-top:0;margin-bottom:16px}h2.usercom-article-intro{font-weight:normal;font-size:14px;line-height:22px;color:#646d7f;margin-top:0}.usercom-article-author-wrapper{display:flex;align-items:center}.usercom-article-author-wrapper img{width:20px;height:20px;border-radius:50%;margin-right:8px}.usercom-article-author-wrapper span{color:#afafaf;font-size:14px;line-height:16px}.usercom-article-category-wrapper,.usercom-article-tags-wrapper{margin-top:22px;margin-left:-2px}.usercom-article-category-wrapper a,.usercom-article-tags-wrapper a{text-decoration:none;text-transform:uppercase;color:#2555df;font-size:12px;line-height:15px;padding:4px 8px;display:inline-block;background:#f4f7fe;border-radius:3px;margin:2px}.usercom-article-tags-wrapper{margin-bottom:22px}.usercom-article-tags-wrapper a{color:#646d7f;background:#ebeef3}.usercom-article-divider{border:1px solid #ebeef3;margin:24px 0 20px}.usercom-article-content{color:#242c3d}.usercom-article-content p{font-size:14px;line-height:22px;overflow-wrap:break-word}.usercom-article-content a{text-decoration:none;color:#2555df}.usercom-article-content img{max-width:100%;height:auto;border-radius:12px;cursor:zoom-in}.usercom-article-content blockquote{margin:20px 0;border-left:8px solid #ebeef3;padding-left:20px;color:#646d7f;border-radius:4px}.usercom-loader-wrapper{height:100%}.hljs{display:block;overflow-x:auto;padding:0.5em;color:#383a42;background:#fafafa}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#a626a4}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e45649}.hljs-literal{color:#0184bb}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#50a14f}.hljs-built_in,.hljs-class .hljs-title{color:#c18401}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#986801}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#4078f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-link{text-decoration:underline}pre.ql-syntax{white-space:pre-wrap;word-wrap:break-word}\n", ""]), e.exports = i
        },
        3886: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, "#ue_popups{position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none;z-index:2147483647}#ue_popups #ue_form{position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:auto}#ue_popups #ue_form iframe{width:100%;height:100%;border:0}#ue_popups #ue_push_dialog{width:367px !important;display:inline-flex !important;flex-direction:column !important;padding:0 !important;margin:10px 10px !important;position:relative !important;overflow:hidden !important;border-radius:7.5px !important;background-color:#ffffff !important;box-shadow:0 1px 13px 0 rgba(0,0,0,0.1) !important}#ue_popups #ue_push_dialog *{letter-spacing:normal !important;font-family:Arial, sans-serif !important;pointer-events:auto}@media screen and (max-width: 521px){#ue_popups #ue_push_dialog{max-width:367px !important;width:auto !important}}@media screen and (min-width: 520px){#ue_popups #ue_push_dialog.__ue__placement-left{position:absolute !important;left:0;margin:10px 10px 10px 104px !important}#ue_popups #ue_push_dialog.__ue__placement-right{position:absolute !important;right:0;margin:10px 104px 10px 10px !important}#ue_popups #ue_push_dialog.__ue__placement-center{position:absolute !important;left:50%;transform:translateX(-50%)}}#ue_popups #ue_push_dialog .__ue__close{position:absolute !important;right:10px !important;top:10px !important;font-size:16px !important;width:16px !important;height:16px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;color:#afaeae !important;cursor:pointer !important}#ue_popups #ue_push_dialog .__ue__close:hover{color:#7a7979 !important}#ue_popups #ue_push_dialog .__ue__content{padding:17.5px 17.5px 0 !important;display:flex !important}#ue_popups #ue_push_dialog .__ue__content h6{font-size:16px !important;font-weight:600 !important;line-height:normal !important;margin:0 8.5px 8.5px 0 !important;text-align:left !important;color:#373737 !important}#ue_popups #ue_push_dialog .__ue__content p{font-size:14px !important;font-weight:normal !important;font-style:normal !important;font-stretch:normal !important;line-height:normal !important;letter-spacing:normal !important;text-align:left !important;color:#6f6f6f !important;margin:0 !important;padding:0 !important}#ue_popups #ue_push_dialog .__ue__footer{display:flex !important;justify-content:space-between !important;align-items:center !important;padding:15px 17.5px 10px !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__button{font-size:14px !important;font-weight:normal !important;font-style:normal !important;font-stretch:normal !important;line-height:1.5 !important;letter-spacing:normal !important;text-align:center !important;color:#949292 !important;background-color:transparent !important;border-radius:3px !important;transition:color 0.2s ease, background-color 0.2s ease !important;border:0 !important;box-shadow:none !important;height:auto !important;text-decoration:initial !important;text-transform:initial !important;padding:1px 7px 2px !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__button:hover{background-color:#f2f2f2 !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__button_primary{color:#0088ff !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__button_primary:hover{background-color:#dbeeff !important;color:#0088ff !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__branding__href{font-size:11px !important;font-weight:normal !important;font-family:inherit !important;font-style:normal !important;vertical-align:initial !important;font-stretch:normal !important;line-height:2.67 !important;letter-spacing:normal !important;text-align:left !important;color:#afaeae !important;display:inline-flex !important;align-items:center !important;transition:color 0.2s ease !important;border:0 !important;text-decoration:initial !important;margin:0 !important;padding:0 !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__branding__href:hover{color:#7a7979 !important}#ue_popups #ue_push_dialog .__ue__footer .__ue__branding__href img{margin-right:4px !important}#ue_popups #ue_push_dialog .__ue__logo{width:50px !important;min-width:50px !important;max-width:50px !important;margin-right:17.5px !important}#ue_popups #ue_push_dialog .__ue__logo img{width:100% !important}\n", ""]), e.exports = i
        },
        4853: (e, t, r) => {
            var o = r(8081),
                i = r(3645)(o);
            i.push([e.id, ".usercom-launcher-dot{background-color:#242c3d !important}.notification-circle{background-color:#242c3d !important}.main-kb-search-input{background-color:#242c3d !important}.main-kb-search-input path{fill:white}.icon-container path{fill:#242c3d !important}.conversation-count{background-color:#242c3d !important}.usercom-button-primary{background-color:#242c3d !important}.usercom-button-primary:hover,.usercom-button-primary:active{background-color:#414c63 !important}.message-brick{background-color:#242c3d !important;color:white !important}.usercom-status path{fill:#242c3d !important}.usercom-email-prompt .email-wrapper:not([data-error]):not([data-success]) button{border-color:#242c3d !important;background-color:#242c3d !important}.usercom-compose-textarea:focus,.usercom-compose-textarea:active{border-color:#242c3d !important}.icon-send path{fill:#242c3d !important}.usercom-widget-search input:focus{border-color:#242c3d !important}\n", ""]), e.exports = i
        },
        3645: e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var r = "",
                            o = void 0 !== t[5];
                        return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), o && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), o && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r
                    })).join("")
                }, t.i = function(e, r, o, i, a) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var n = {};
                    if (o)
                        for (var s = 0; s < this.length; s++) {
                            var p = this[s][0];
                            null != p && (n[p] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var l = [].concat(e[c]);
                        o && n[l[0]] || (void 0 !== a && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = a), r && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = r) : l[2] = r), i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = i) : l[4] = "".concat(i)), t.push(l))
                    }
                }, t
            }
        },
        1667: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        },
        8081: e => {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        },
        8129: (e, t, r) => {
            var o = r(2881);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        3744: (e, t, r) => {
            var o = r(7912);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        8100: (e, t, r) => {
            var o = r(7882);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        5024: (e, t, r) => {
            var o = r(7960);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        8956: (e, t, r) => {
            var o = r(5665);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        1622: (e, t, r) => {
            var o = r(1662);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        658: (e, t, r) => {
            var o = r(3862);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        5549: (e, t, r) => {
            var o = r(1486);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        7630: (e, t, r) => {
            var o = r(8670);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        4067: (e, t, r) => {
            var o = r(4055);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        786: (e, t, r) => {
            var o = r(5251);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        9696: (e, t, r) => {
            var o = r(4426);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        8032: (e, t, r) => {
            var o = r(2949);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        9732: (e, t, r) => {
            var o = r(4586);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        5548: (e, t, r) => {
            var o = r(6510);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        6216: (e, t, r) => {
            var o = r(9762);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        7348: (e, t, r) => {
            var o = r(387);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        2053: (e, t, r) => {
            var o = r(9376);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        6654: (e, t, r) => {
            var o = r(3886);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        9469: (e, t, r) => {
            var o = r(4853);
            o && o.__esModule && (o = o.default), e.exports = "string" == typeof o ? o : o.toString()
        },
        1900: (e, t, r) => {
            "use strict";

            function o(e, t, r, o, i, a, n, s) {
                var p, c = "function" == typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = r, c._compiled = !0), o && (c.functional = !0), a && (c._scopeId = "data-v-" + a), n ? (p = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(n)
                    }, c._ssrRegister = p) : i && (p = s ? function() {
                        i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : i), p)
                    if (c.functional) {
                        c._injectStyles = p;
                        var l = c.render;
                        c.render = function(e, t) {
                            return p.call(t), l(e, t)
                        }
                    } else {
                        var d = c.beforeCreate;
                        c.beforeCreate = d ? [].concat(d, p) : [p]
                    }
                return {
                    exports: e,
                    options: c
                }
            }
            r.d(t, {
                Z: () => o
            })
        },
        2926: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/1.png?36a693e1f5c5db138abb"
        },
        1888: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/2.png?3b1ade11432d29b156eb"
        },
        1857: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/3.png?bffddf9927311c492e04"
        },
        5792: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/4.png?b7889dda20eb2df1f424"
        },
        8401: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/5.png?e3cde51873d2c4df1bb1"
        },
        583: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/wallpapers/6.png?616fc51246e44b3e4417"
        }
    }
]);