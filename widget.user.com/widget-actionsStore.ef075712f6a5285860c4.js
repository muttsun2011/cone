"use strict";
(self.webpackChunkusercom_widget = self.webpackChunkusercom_widget || []).push([
    [471], {
        1328: (t, e, o) => {
            o.r(e), o.d(e, {
                default: () => m
            });
            var r = o(1154),
                n = o(3477);

            function a(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(o), !0).forEach((function(e) {
                        i(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function i(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            var l = [],
                u = [],
                s = ["input", "select", "textarea"];
            const m = {
                namespaced: !0,
                state: {
                    busy: !1,
                    form: {
                        content: "",
                        id: null,
                        show: !1,
                        has_thanks: null,
                        has_redirect: null
                    },
                    dataCollectors: {}
                },
                mutations: {
                    MAKE_BUSY: function(t) {
                        t.busy = !0
                    },
                    MAKE_FREE: function(t) {
                        t.busy = !1
                    },
                    FORM_RECEIVED: function(t, e) {
                        t.form.content = e.content, t.form.key = e.key, t.form.action_id = e.action_id, t.form.has_redirect = e.has_redirect, t.form.has_thanks = e.has_thanks, t.form.show = !0
                    },
                    HIDE_FORM: function(t) {
                        t.form.show = !1, t.form.id = null, t.form.content = ""
                    },
                    ADD_DATA_COLLECTOR: function(t, e) {
                        var o = e.id,
                            r = e.form;
                        t.dataCollectors[o] = r
                    }
                },
                actions: {
                    handleMessage: function(t, e) {
                        var o = t.dispatch;
                        "form" === e.type ? o("handleForm", e) : "html_block" === e.type ? o("handleHtmlBlock", e) : "data_collector" === e.type ? o("handleDataCollector", e) : "json_payload" === e.type ? o("handleJsonPayload", e) : "html_payload" === e.type ? o("handleHtmlPayload", e) : "webpush_prompt" === e.type && o("showWebpushPrompt", e)
                    },
                    showWebpushPrompt: function(t) {
                        var e = t.dispatch;
                        if (null !== localStorage.getItem("__ca__wp")) {
                            localStorage.removeItem("__ca__wp");
                            e("getWebpushDialogContent", !1, {
                                root: !0
                            })
                        }
                    },
                    handleJsonPayload: function(t, e) {
                        var o = t.rootState;
                        o.callbacks.onPayloadReceived && o.callbacks.onPayloadReceived(e.content)
                    },
                    handleHtmlPayload: function(t, e) {
                        t.state, t.commit, t.rootState;
                        var o = document.createElement("div");
                        o.innerHTML = e.content, document.body.appendChild(o)
                    },
                    handleForm: function(t, e) {
                        var o = t.state,
                            a = t.commit,
                            i = t.rootState;
                        if (!o.form.show) {
                            var l = {
                                app_key: i.civchat.apiKey,
                                key: i.user.key,
                                form: e.form
                            };
                            e.hasOwnProperty("check_page") && !(0, n.Dp)(e) || r.Z.fetchForm(l).then((function(t) {
                                o.form.show || a("FORM_RECEIVED", c(c({}, e), t))
                            })).catch((function(t) {}))
                        }
                    },
                    submitRedirectForm: function(t, e) {
                        var o = t.state,
                            n = t.commit,
                            a = t.rootState,
                            c = {
                                action_id: o.form.action_id,
                                key: a.user.key,
                                app_key: a.civchat.apiKey,
                                form: o.form.key,
                                data: {
                                    popup_redirect: e.popup_redirect
                                }
                            };
                        r.Z.submitForm(c).then(e.onRedirect).catch(e.onError).then((function() {
                            return n("HIDE_FORM")
                        }))
                    },
                    submitForm: function(t, e) {
                        var o = t.state,
                            n = t.commit,
                            a = t.rootState,
                            c = {
                                action_id: o.form.action_id,
                                key: a.user.key,
                                app_key: a.civchat.apiKey,
                                form: o.form.key,
                                data: e
                            };
                        r.Z.submitForm(c).then((function() {
                            return n("HIDE_FORM")
                        })).catch((function() {
                            return n("HIDE_FORM")
                        }))
                    },
                    dismissForm: function(t) {
                        (0, t.commit)("HIDE_FORM")
                    },
                    handleDataCollector: function(t, e) {
                        var o = t.state,
                            r = t.commit,
                            n = t.dispatch,
                            a = e.id,
                            c = e.form_data;
                        if (!o.dataCollectors[a]) {
                            ! function(t, e, o) {
                                if ("mouseenter" === e) e = "mouseover";
                                else if ("mouseleave" === e) e = "mouseout";
                                else if ("mouseover" === e) return;
                                var r = function(e) {
                                    var r, n = e.target,
                                        a = e.relatedTarget,
                                        c = !1;
                                    for (r = n && n.matches && n.matches(t); n && n !== document && !r;) r = (n = n.parentNode) && n.matches && n.matches(t);
                                    if (r) {
                                        for ("FORM" === n.tagName && (c = !0); a && a !== n && a !== document;) a = a.parentNode;
                                        n !== a && (c && e.preventDefault(), o.call(n, e).then((function() {
                                            c && n.submit()
                                        })))
                                    }
                                };
                                document.addEventListener(e, r, !1), l.push({
                                    eventType: e,
                                    handler: r
                                })
                            }(c.trigger.element, c.trigger.event, (function() {
                                return n("submitDataCollector", a)
                            })), r("ADD_DATA_COLLECTOR", {
                                id: a,
                                form: c
                            })
                        }
                    },
                    submitDataCollector: function(t, e) {
                        var o = t.state,
                            n = t.rootState,
                            a = o.dataCollectors[e];
                        if (!a) return new Promise((function(t) {
                            return t()
                        }));
                        var c = {};
                        a.fields.forEach((function(t) {
                            var e, o = document.querySelector(t.selector);
                            if (!o) return new Promise((function(t) {
                                return t()
                            }));
                            var r = o.tagName.toLowerCase();
                            s.indexOf(r) > -1 ? (e = o.value, "checkbox" === o.type && (e = o.checked)) : e = o.innerText, c[t.field] = e
                        }));
                        var i = {
                            apiKey: n.civchat.apiKey,
                            key: n.user.key,
                            id: e,
                            data: c
                        };
                        return r.Z.submitDataCollector(i)
                    },
                    destroyDataCollectors: function() {
                        l.forEach((function(t) {
                            var e = t.eventType,
                                o = t.handler;
                            document.removeEventListener(e, o, !1)
                        }))
                    },
                    handleHtmlBlock: function(t, e) {
                        var o = t.dispatch,
                            r = document.getElementsByClassName(e.class);
                        Array.prototype.slice.call(r).forEach((function(t) {
                            if (!t.getAttribute("data-ue_block_id")) {
                                t.innerHTML = e.contents, t.setAttribute("data-ue_block_id", e.block_id), t.setAttribute("data-ue_brick_id", e.brick_id);
                                var r = function(t) {
                                    o("submitHtmlBlockClick", t.currentTarget)
                                };
                                t.addEventListener("click", r), u.push({
                                    element: t,
                                    handler: r
                                })
                            }
                        }))
                    },
                    submitHtmlBlockClick: function(t, e) {
                        var o = t.rootState,
                            n = {
                                block: e.getAttribute("data-ue_block_id"),
                                brick: e.getAttribute("data-ue_brick_id"),
                                apiKey: o.civchat.apiKey,
                                key: o.user.key
                            };
                        r.Z.submitHtmlBlockClick(n)
                    },
                    destroyHtmlBlocks: function() {
                        u.forEach((function(t) {
                            var e = t.element,
                                o = t.handler;
                            e.removeEventListener("click", o)
                        }))
                    }
                }
            }
        }
    }
]);