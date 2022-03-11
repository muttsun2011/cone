"use strict";
(self.webpackChunkusercom_widget = self.webpackChunkusercom_widget || []).push([
    [236], {
        8196: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => R
            });
            var o = n(8415),
                i = n(8061),
                a = n(1154),
                r = n(5980);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function(e) {
                        _(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function _(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var E = function(t) {
                    return (null == t ? void 0 : t.websocket) && null != t.websocket && 1 === t.websocket.socket.readyState
                },
                d = {
                    list: [],
                    pending: !1,
                    fullyLoaded: !0,
                    next_page: null,
                    newMessagePending: !1
                },
                m = {
                    list: [],
                    pending: !1,
                    fullyLoaded: !0,
                    hasEmailPrompt: !1,
                    next_page: null
                },
                v = {
                    lightbox: {
                        visible: !1,
                        src: null
                    }
                },
                p = {
                    SHOW_LIGHTBOX: function(t, e) {
                        t.lightbox.visible = !0, t.lightbox.src = e
                    },
                    HIDE_LIGHTBOX: function(t) {
                        t.lightbox.visible = !1, t.lightbox.src = null
                    }
                },
                A = {
                    showLightbox: function(t, e) {
                        (0, t.commit)("SHOW_LIGHTBOX", e)
                    },
                    hideLightbox: function(t) {
                        (0, t.commit)("HIDE_LIGHTBOX")
                    }
                },
                f = {
                    isLightboxVisible: function(t) {
                        return t.lightbox.visible
                    },
                    getLightboxSrc: function(t) {
                        return t.lightbox.src
                    }
                },
                S = {
                    state: {
                        chatbot: {
                            composer: {
                                valid: !0,
                                error: null
                            }
                        }
                    },
                    mutations: {
                        CHAT_BOT_COMPOSER_RESET: function(t) {
                            t.chatbot.composer.valid = !0, t.chatbot.composer.error = null
                        },
                        CHAT_BOT_COMPOSER_UPDATE: function(t, e) {
                            var n = e.valid,
                                o = e.error;
                            t.chatbot.composer.valid = n, t.chatbot.composer.error = o
                        }
                    },
                    actions: {
                        chatBotComposerReset: function(t) {
                            (0, t.commit)("CHAT_BOT_COMPOSER_RESET")
                        },
                        chatBotUpdateComposer: function(t, e) {
                            (0, t.commit)("CHAT_BOT_COMPOSER_UPDATE", e)
                        }
                    },
                    getters: {
                        botConditionMessage: function(t) {
                            var e = t.messages.list[t.messages.list.length - 1];
                            return {
                                isBot: (null == e ? void 0 : e.chat_bot) || !1,
                                data: (null == e ? void 0 : e.extra_data) || {}
                            }
                        },
                        botRequireUserInteraction: function(t, e) {
                            var n = e.botNumberAnswerType;
                            return n == r.qH.date || n == r.qH.datetime || n == r.qH.fixed
                        },
                        botNumberAnswerType: function(t, e) {
                            var n = e.botConditionMessage.data.answer_type;
                            return n ? Number(n) : r.qH.text
                        },
                        botShowWidgets: function(t, e) {
                            var n = !e.botRequireUserInteraction;
                            return e.botNumberAnswerType === r.qH.text && (n = !1), e.botConditionMessage.isBot && n
                        },
                        botComposer: function(t) {
                            return t.chatbot.composer
                        }
                    }
                },
                g = {
                    client: {
                        typingMessage: ""
                    }
                },
                T = {
                    CLIENT_TYPING_MESSAGE: function(t, e) {
                        t.client.typingMessage = e
                    }
                },
                O = {
                    clientTyping: function(t, e) {
                        (0, t.commit)("CLIENT_TYPING_MESSAGE", e)
                    }
                },
                h = {
                    clientTypingMessage: function(t) {
                        return t.client.typingMessage
                    }
                },
                N = l(l(l(l({
                    conversations: l({}, d),
                    conversation: null,
                    messages: l({}, m),
                    typingAgent: {
                        show: !1,
                        timeout: null
                    },
                    expandExtraContent: !1,
                    availableExtraContent: !0,
                    upload: {
                        valid: !0,
                        error: null
                    }
                }, v), S.state), g), {
                    showAnswersAgentAvatar: !0
                }),
                C = l(l(l({
                    UPLOAD_ERROR_RESET: function(t) {
                        t.upload.valid = !0, t.upload.error = null
                    },
                    UPLOAD_ERROR_UPDATE: function(t, e) {
                        var n = e.valid,
                            o = e.error;
                        t.upload.valid = n, t.upload.error = o
                    },
                    MESSAGES_SCOPE_CLEAR: function(t) {
                        t.messages = l({}, m)
                    },
                    MESSAGES_LIST_UPDATE: function(t, e) {
                        var n = e.results;
                        t.messages.next_page = e.next;
                        var i = n ? n.reverse() : e;
                        t.messages.list = [].concat(s(i), s(t.messages.list), s((0, o.jC)(t)))
                    },
                    MESSAGES_LIST_LOADED: function(t, e) {
                        t.messages.fullyLoaded = e
                    },
                    MESSAGE_RECEIVE: function(t, e) {
                        var n;
                        (null === (n = t.messages.list[0]) || void 0 === n ? void 0 : n.conversation_id) === e.conversation_id && (void 0 !== t.messages.list.find((function(t) {
                            return t.entropy === e.entropy
                        })) && e.entropy || t.messages.list.push(e))
                    },
                    CONVERSATION_UPDATE_FROM_PAYLOAD: function(t, e) {
                        var n = t.conversations.list.find((function(t) {
                            return t.id === e.conversation_id
                        }));
                        n && (n.last_message_snippet = e.content, n.last_message_timestamp = e.timestamp, e.is_native && (n.last_message_author = e.author))
                    },
                    MESSAGE_RECEIVE_UNSET: function(t, e) {
                        t.messages.list[0].conversation_id === e.convo_id && t.messages.list.push(e)
                    },
                    SHOW_AGENT_TYPING_INDICATOR: function(t, e) {
                        var n, o = e.payload,
                            i = e.timeout;
                        clearTimeout(t.typingAgent.timeout), t.typingAgent.timeout = i, (null === (n = t.messages.list[0]) || void 0 === n ? void 0 : n.conversation_id) === o.conversation_id && (t.typingAgent.show = !0)
                    },
                    HIDE_AGENT_TYPING_INDICATOR: function(t, e) {
                        t.typingAgent.show = !1
                    },
                    AGENT_READ_MESSAGE: function(t, e) {
                        var n;
                        (null === (n = t.messages.list[0]) || void 0 === n ? void 0 : n.conversation_id) === e.conversation_id && t.messages.list.filter((function(t) {
                            return !1 === t.read
                        })).map((function(t) {
                            return t.read = !0
                        }))
                    },
                    CONVERSATIONS_SCOPE_CLEAR: function(t) {
                        t.conversations = l({}, d)
                    },
                    CONVERSATIONS_LIST_UPDATE: function(t, e) {
                        t.conversations.next_page = e.next;
                        var n = t.conversations.list;
                        t.conversations.list = [].concat(s(n), s(e.results))
                    },
                    CONVERSATIONS_LIST_UPDATE_NEW: function(t, e) {
                        t.conversations.list.unshift(e), t.conversation = e
                    },
                    CONVERSATION_LIST_LOADED: function(t, e) {
                        t.conversations.fullyLoaded = e
                    },
                    CREATE_NEW_CONVERSATION_PENDING: function(t, e) {
                        t.conversations.newMessagePending = e
                    },
                    CONVERSATION_ACTIVE: function(t, e) {
                        t.conversation = e
                    },
                    CLEAR_CONVERSATION: function(t, e) {
                        t.conversation = null
                    },
                    MESSAGE_REAL_ID: function(t, e) {
                        var n = t.messages.list.find((function(t) {
                            return t.id === e.temp_id
                        }));
                        n && (n.sent = !0, n.delivered = !0, n.id = e.real_id)
                    },
                    SHOW_EMAIL_PROMPT: function(t, e) {
                        t.messages.list.push(e), t.messages.hasEmailPrompt = !0
                    },
                    SET_EXPAND_EXTRA_CONTENT: function(t, e) {
                        t.expandExtraContent = e
                    },
                    SET_AVAILABLE_EXTRA_CONTENT: function(t, e) {
                        t.availableExtraContent = e
                    }
                }, p), S.mutations), T),
                I = l(l(l({
                    sendMessage: function(t, e) {
                        var n = t.rootState,
                            i = t.state,
                            a = t.dispatch,
                            r = e.content,
                            s = e.convo_id,
                            c = {
                                id: n.user.id,
                                name: n.user.name,
                                avatar: n.user.avatar
                            },
                            u = (0, o.nI)(9),
                            _ = l({
                                page: location.pathname,
                                source: n.civchat.source_context || 1
                            }, n.civchat.source_context),
                            d = i.conversations.newMessagePending;
                        if (!s && !d) return a("createNewConversation", {
                            source_context: _,
                            content: r
                        });
                        var m = {
                            payload: {
                                author: c,
                                content: r,
                                convo_id: s,
                                delivered: !1,
                                entropy: u,
                                id: "".concat(u),
                                is_meta: !1,
                                is_native: !1,
                                read: !1,
                                source: 1,
                                source_context: _,
                                type: "message"
                            },
                            type: "chat"
                        };
                        E(n) ? (s && a("showEmailPrompt", s), n.websocket.send(m)) : a("addToUnsent", m.payload)
                    },
                    addToUnsent: function(t, e) {
                        var n = t.commit;
                        e.sent = !1, e.timestamp = Date.now(), e.local_timestamp = !0, localStorage.setItem("".concat(i.sE, "-").concat(e.entropy, "-").concat(e.convo_id), JSON.stringify(e)), n("MESSAGE_RECEIVE_UNSET", e)
                    },
                    retryMessage: function(t, e) {
                        var n = t.rootState;
                        t.dispatch;
                        return new Promise((function(t, o) {
                            E(n) ? (null != e && e.content && "" !== (null == e ? void 0 : e.content) && n.websocket.send({
                                type: "chat",
                                payload: e
                            }), localStorage.removeItem("".concat(i.sE, "-").concat(e.entropy, "-").concat(e.convo_id)), t()) : o()
                        }))
                    },
                    userTyping: function(t, e) {
                        var n = t.rootState,
                            o = e.content,
                            i = e.conversation_id;
                        if (o.length && i) {
                            var a = {
                                payload: {
                                    content: o,
                                    conversation_id: i
                                },
                                type: "typing"
                            };
                            E(n) && n.websocket.send(a)
                        }
                    },
                    receiveMessage: function(t, e) {
                        var n = t.rootState,
                            o = t.dispatch,
                            i = t.commit;
                        e.chat_bot ? o("delayChatBotReceiveMessage", e) : (i("MESSAGE_RECEIVE", e), i("CONVERSATION_UPDATE_FROM_PAYLOAD", e), e.is_native && (i("HIDE_AGENT_TYPING_INDICATOR"), n.board.visible && o("markAsReadMessages", e.conversation_id)))
                    },
                    delayChatBotReceiveMessage: function(t, e) {
                        var n = t.rootState,
                            o = t.dispatch,
                            i = t.commit;
                        i("CONVERSATION_UPDATE_FROM_PAYLOAD", e), setTimeout((function() {
                            i("MESSAGE_RECEIVE", e)
                        }), 1e3);
                        var a = setTimeout((function() {
                            i("HIDE_AGENT_TYPING_INDICATOR")
                        }), 1e3);
                        i("SHOW_AGENT_TYPING_INDICATOR", {
                            payload: e,
                            timeout: a
                        }), e.is_native && n.board.visible && o("markAsReadMessages", e.conversation_id)
                    },
                    clearConversationsScope: function(t) {
                        (0, t.commit)("CONVERSATIONS_SCOPE_CLEAR")
                    },
                    clearConversationScope: function(t) {
                        (0, t.commit)("CLEAR_CONVERSATION")
                    },
                    markAsReadMessages: function(t, e) {
                        var n = t.rootState;
                        if (void 0 !== e) {
                            var o = {
                                payload: {
                                    conversation_id: e
                                },
                                type: "read"
                            };
                            n.websocket.send(o)
                        }
                    },
                    handleRead: function(t, e) {
                        var n = t.state,
                            o = t.dispatch,
                            i = (t.commit, e.payload),
                            a = n.conversations.list.find((function(t) {
                                return t.id === i.conversation_id
                            }));
                        a && (a.unread = !1, o("decrementUnreadConversationCountById", i.conversation_id, {
                            root: !0
                        }))
                    },
                    handleDelivered: function(t, e) {
                        (0, t.commit)("MESSAGE_REAL_ID", e.payload)
                    },
                    handleTyping: function(t, e) {
                        var n = t.rootState,
                            o = t.commit,
                            a = e.payload;
                        if (n.board.visible && n.currentViewBoard === i.L2.CHAT_MESSAGES) {
                            var r = setTimeout((function() {
                                o("HIDE_AGENT_TYPING_INDICATOR")
                            }), 1e3);
                            o("SHOW_AGENT_TYPING_INDICATOR", {
                                payload: a,
                                timeout: r
                            })
                        }
                    },
                    handleAgentRead: function(t, e) {
                        (0, t.commit)("AGENT_READ_MESSAGE", e.payload)
                    },
                    fetchConversations: function(t) {
                        var e = t.rootState,
                            n = t.state,
                            o = t.commit,
                            i = t.dispatch;
                        o("CONVERSATION_LIST_LOADED", !1);
                        var r = n.conversations.next_page;
                        a.Z.fetchConversations(r, e.user.key).then((function(t) {
                            o("CONVERSATION_LIST_LOADED", !0), o("CONVERSATIONS_LIST_UPDATE", t), i("setUnreadConversationCountFromResponse", null, {
                                root: !0
                            })
                        })).catch((function(t) {}))
                    },
                    clearMessagesScope: function(t) {
                        (0, t.commit)("MESSAGES_SCOPE_CLEAR")
                    },
                    fetchMessages: function(t, e) {
                        var n = t.rootState,
                            o = t.state,
                            i = t.commit;
                        t.dispatch;
                        i("HIDE_AGENT_TYPING_INDICATOR");
                        var r = {
                            convo_id: e,
                            user_key: n.user.key
                        };
                        i("MESSAGES_LIST_LOADED", !1);
                        var s = o.messages.next_page;
                        a.Z.fetchMessages(s, r).then((function(t) {
                            i("MESSAGES_LIST_LOADED", !0), i("MESSAGES_LIST_UPDATE", t)
                        })).catch((function(t) {}))
                    },
                    createNewConversation: function(t, e) {
                        var n = t.rootState,
                            o = t.commit,
                            i = t.dispatch,
                            r = {
                                source_context: e.source_context,
                                message: e.content,
                                api_key: n.civchat.apiKey,
                                user_key: n.user.key
                            };
                        o("CREATE_NEW_CONVERSATION_PENDING", !0), a.Z.postNewConversation(r).then((function(t) {
                            t.message.delivered = !0, t.message.read = !1, o("MESSAGES_LIST_UPDATE", [t.message]), o("CONVERSATIONS_LIST_UPDATE_NEW", t.conversation), i("showEmailPrompt", t.message.conversation_id), o("CREATE_NEW_CONVERSATION_PENDING", !1)
                        })).catch((function(t) {}))
                    },
                    uploadFile: function(t, e) {
                        var n = t.rootState,
                            o = t.commit,
                            i = e.file,
                            r = e.convo_id;
                        o("UPLOAD_ERROR_RESET");
                        var s = {
                            file: i,
                            api_key: n.civchat.apiKey,
                            user_key: n.user.key,
                            convo_id: r
                        };
                        return a.Z.uploadFile(s)
                    },
                    uploadResetError: function(t) {
                        (0, t.commit)("UPLOAD_ERROR_RESET")
                    },
                    setErrorUploadFile: function(t, e) {
                        (0, t.commit)("UPLOAD_ERROR_UPDATE", e)
                    },
                    setConversationObj: function(t, e) {
                        (0, t.commit)("CONVERSATION_ACTIVE", e)
                    },
                    showEmailPrompt: function(t, e) {
                        var n, o, i, a, r = t.rootState,
                            s = t.state,
                            c = t.commit,
                            u = t.getters,
                            l = s.conversations.list.find((function(t) {
                                return t.id === e
                            }));
                        if (!(null != l && l.chat_bot || s.messages.hasEmailPrompt || !1 === (null === (n = r.modules) || void 0 === n || null === (o = n.chat) || void 0 === o ? void 0 : o.show_prompt) || r.user.email || r.user.email && null !== (i = r.modules) && void 0 !== i && null !== (a = i.chat) && void 0 !== a && a.show_prompt)) {
                            var _ = {
                                id: -99,
                                is_native: !0,
                                timestamp: Date.now(),
                                type: "prompt"
                            };
                            s.showAnswersAgentAvatar && (_.author = u.getLastResponseAgentProfile), c("SHOW_EMAIL_PROMPT", _)
                        }
                    },
                    submitEmailPrompt: function(t, e) {
                        var n = t.rootState,
                            o = {
                                apiKey: n.civchat.apiKey,
                                key: n.user.key,
                                email: e
                            };
                        return a.Z.submitEmailPrompt(o)
                    },
                    setExpandExtraContent: function(t, e) {
                        (0, t.commit)("SET_EXPAND_EXTRA_CONTENT", e)
                    },
                    setAvailableExtraContent: function(t, e) {
                        (0, t.commit)("SET_AVAILABLE_EXTRA_CONTENT", e)
                    }
                }, A), S.actions), O),
                y = l(l(l({
                    upload: function(t) {
                        return t.upload
                    },
                    getConversationsObj: function(t) {
                        return t.conversations
                    },
                    getMessagesObj: function(t) {
                        return t.messages
                    },
                    agentIsTyping: function(t) {
                        return t.typingAgent.show
                    },
                    getLastResponseAgentProfile: function(t, e, n, o) {
                        var i, a = {
                            avatar: o.getRandomAgentObj.avatar,
                            name: o.getTranslationFor("chat_heading_title"),
                            title: o.getTranslationFor("chat_heading_description")
                        };
                        return (null === (i = t.conversation) || void 0 === i ? void 0 : i.last_message_author) || a
                    },
                    authorExpandExtraContent: function(t) {
                        return t.expandExtraContent
                    },
                    authorAvailableExtraContent: function(t) {
                        return t.availableExtraContent
                    }
                }, f), S.getters), h);
            const R = {
                namespaced: !0,
                state: N,
                mutations: C,
                actions: I,
                getters: y
            }
        }
    }
]);