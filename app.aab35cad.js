(function(e) {
    function t(t) {
        for (var o, i, r = t[0], c = t[1], l = t[2], d = 0, p = []; d < r.length; d++)
            i = r[d],
            Object.prototype.hasOwnProperty.call(s, i) && s[i] && p.push(s[i][0]),
            s[i] = 0;
        for (o in c)
            Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        u && u(t);
        while (p.length)
            p.shift()();
        return a.push.apply(a, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== s[c] && (o = !1)
            }
            o && (a.splice(t--, 1),
            e = i(i.s = n[0]))
        }
        return e
    }
    var o = {}
      , s = {
        app: 0
    }
      , a = [];
    function i(t) {
        if (o[t])
            return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = o,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var l = 0; l < r.length; l++)
        t(r[l]);
    var u = c;
    a.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0064": function(e, t, n) {
        "use strict";
        var o = n("3d75")
          , s = n.n(o);
        s.a
    },
    "057c": function(e, t, n) {},
    "0e06": function(e, t, n) {},
    "278c": function(e, t, n) {
        "use strict";
        var o = n("057c")
          , s = n.n(o);
        s.a
    },
    "2a62": function(e, t, n) {
        "use strict";
        var o = n("0e06")
          , s = n.n(o);
        s.a
    },
    "2a66": function(e, t, n) {
        "use strict";
        var o = n("5661")
          , s = n.n(o);
        s.a
    },
    "3d75": function(e, t, n) {},
    "421f": function(e, t, n) {},
    4770: function(e, t, n) {
        "use strict";
        var o = n("ef2b")
          , s = n.n(o);
        s.a
    },
    "4b68": function(e, t, n) {
        "use strict";
        var o = n("421f")
          , s = n.n(o);
        s.a
    },
    5661: function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("7f7f"),
        n("cadf"),
        n("551c"),
        n("f751"),
        n("097d");
        var o = n("2b0e")
          , s = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("div", {
                staticClass: "common-main"
            }, [n("router-view")], 1), n("div", {
                staticClass: "common-bottom"
            }, [n("p", {
                staticClass: "common-copyright"
            }, [e._v(e._s(e.$t("common bottom copy right")))]), n("p", {
                staticClass: "common-publicrecord"
            }, [e._v(e._s(e.$t("common bottom public record")))])])])
        }
          , a = []
          , i = (n("8e6e"),
        n("ac6a"),
        n("456d"),
        n("bd86"))
          , r = n("a925")
          , c = n("76ff")
          , l = n("61b6")
          , u = n("84d4");
        function d(e, t) {
            void 0 === t ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(t))
        }
        function p(e) {
            var t = localStorage.getItem(e);
            if (null !== t)
                return JSON.parse(localStorage.getItem(e))
        }
        var f = n("4897")
          , m = n.n(f)
          , v = n("b2d6")
          , g = n.n(v)
          , b = n("f0d9")
          , h = n.n(b)
          , C = n("fcff")
          , y = n.n(C);
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(n, !0).forEach(function(t) {
                    Object(i["a"])(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        o["default"].use(r["a"]);
        var I = {
            en: $({}, c, {}, g.a),
            "zh-CN": $({}, l, {}, h.a),
            ko: $({}, u, {}, y.a)
        };
        function _() {
            var e = p("locale");
            if (e)
                return e;
            for (var t = (navigator.language || navigator.browserLanguage).toLowerCase(), n = Object.keys(I), o = 0, s = n; o < s.length; o++) {
                var a = s[o];
                if (t.indexOf(a) > -1)
                    return a
            }
            return "ko"
        }
        var P = new r["a"]({
            locale: _(),
            messages: I
        });
        function k(e) {
            P.locale = e,
            document.querySelector("html").setAttribute("lang", e),
            d("locale", e)
        }
        m.a.i18n(function(e, t) {
            return P.t(e, t)
        });
        var x = P
          , F = {
            name: "app",
            computed: {
                language: function() {
                    return this.$i18n.locale
                }
            },
            watch: {
                language: function(e) {
                    k(e)
                }
            }
        }
          , L = F
          , R = (n("2a62"),
        n("2877"))
          , S = Object(R["a"])(L, s, a, !1, null, "1a798921", null)
          , q = S.exports
          , T = n("a78e")
          , O = n.n(T)
          , M = {
            set: function(e) {
                d("secure", "admin" !== e ? "1" : "0")
            },
            get: function() {
                return "1" === p("secure")
            }
        }
          , A = n("5c96")
          , E = n("8c4f")
          , j = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "login-main"
            }, [o("img", {
                staticClass: "login-background-img-1",
                attrs: {
                    src: n("964f")
                }
            }), o("img", {
                staticClass: "login-background-img-2",
                attrs: {
                    src: n("c5ab")
                }
            }), o("div", {
                staticClass: "login-widget"
            }, [o("div", {
                staticClass: "login-logo-widget"
            }, [o("img", {
                staticClass: "login-logo",
                attrs: {
                    src: n("cf05")
                }
            }), o("p", {
                staticClass: "login-logo-name"
            }, [e._v(e._s(e.$t("simadada company")))])]), o("div", {
                staticClass: "login-form-widget"
            }, [o("div", {
                staticClass: "login-language"
            }, [o("el-select", {
                staticClass: "login-language-select",
                model: {
                    value: e.language,
                    callback: function(t) {
                        e.language = t
                    },
                    expression: "language"
                }
            }, e._l(e.languageList, function(e) {
                return o("el-option", {
                    key: e.value,
                    attrs: {
                        label: e.label,
                        value: e.value
                    }
                })
            }), 1)], 1), o("p", {
                staticClass: "login-title"
            }, [e._v(e._s(e.$t("VDMS-T-4")))]), o("el-form", {
                ref: "loginForm",
                staticClass: "login-form",
                attrs: {
                    model: e.loginForm,
                    rules: e.loginFormRules
                }
            }, [o("div", {
                staticClass: "login-input-item"
            }, [o("div", {
                staticClass: "login-input-icon"
            }, [o("i", {
                staticClass: "el-icon-user"
            })]), o("el-form-item", {
                ref: "accountItem",
                staticClass: "login-input-form-item",
                attrs: {
                    prop: "account"
                }
            }, [o("el-input", {
                staticClass: "login-input",
                attrs: {
                    placeholder: e.$t("please input your account")
                },
                model: {
                    value: e.loginForm.account,
                    callback: function(t) {
                        e.$set(e.loginForm, "account", t)
                    },
                    expression: "loginForm.account"
                }
            })], 1)], 1), o("div", {
                staticClass: "login-input-item"
            }, [o("div", {
                staticClass: "login-input-icon"
            }, [o("i", {
                staticClass: "el-icon-lock"
            })]), o("el-form-item", {
                ref: "passwordItem",
                staticClass: "login-input-form-item",
                attrs: {
                    prop: "password"
                }
            }, [o("el-input", {
                staticClass: "login-input",
                attrs: {
                    type: "password",
                    "show-password": "",
                    placeholder: e.$t("please input the password")
                },
                model: {
                    value: e.loginForm.password,
                    callback: function(t) {
                        e.$set(e.loginForm, "password", t)
                    },
                    expression: "loginForm.password"
                }
            })], 1)], 1)]), o("div", {
                staticClass: "login-button-item"
            }, [o("el-button", {
                staticClass: "login-button",
                attrs: {
                    type: "primary",
                    loading: e.loginLoading
                },
                on: {
                    click: e.login
                }
            }, [e._v(e._s(e.$t("login")))])], 1)], 1)])])
        }
          , D = []
          , Q = (n("a481"),
        n("55dd"),
        n("bc3a"))
          , B = n.n(Q)
          , N = B.a.create({
            timeout: 1e4
        });
        N.interceptors.response.use(function(e) {
            return e
        }, function(e) {
            return void 0 === e.response ? A["Message"].error("request ".concat(e.message)) : (A["Message"].error("request ".concat(e.response.status, " ").concat(e.response.statusText)),
            401 == e.response.status && (O.a.remove("session"),
            "/" !== it.currentRoute.path && it.replace("/"))),
            Promise.reject(e)
        });
        var U = N;
        function V(e) {
            var t = e.account
              , n = e.password;
            return U({
                url: "/api/login",
                method: "post",
                data: {
                    account: t,
                    password: n
                }
            })
        }
        function G() {
            return U({
                url: "/api/logout",
                method: "get"
            })
        }
        function Y() {
            return U({
                url: "/api/reset",
                method: "get"
            })
        }
        function J(e) {
            var t = e.account
              , n = e.oldPassword
              , o = e.password;
            return U({
                url: "/api/changeAccount",
                method: "post",
                data: {
                    newAccount: t,
                    oldPassword: n,
                    newPassword: o
                }
            })
        }
        function z() {
            return U({
                url: "/api/getNetConfiguration",
                method: "get"
            })
        }
        function H(e) {
            return U({
                url: "/api/setNetConfiguration",
                method: "post",
                data: e
            })
        }
        function K() {
            return U({
                url: "/api/getVideoCongurations",
                method: "get"
            })
        }
        function W(e) {
            return U({
                url: "/api/setVideoCongurations",
                method: "post",
                data: e
            })
        }
        function Z() {
            return U({
                url: "/api/getVersion",
                method: "get"
            })
        }
        function X() {
            return U({
                url: "/api/reboot",
                method: "get"
            })
        }
        function ee() {
            return U({
                url: "/api/ntpinfo",
                method: "get"
            })
        }
        function te(e) {
            return U({
                url: "/api/ntpinfo",
                method: "post",
                data: e
            })
        }
        function ne() {
            return U({
                url: "/api/autoreboot",
                method: "get"
            })
        }
        function oe(e) {
            return U({
                url: "/api/autoreboot",
                method: "post",
                data: e
            })
        }
        var se = {
            data: function() {
                return {
                    loginForm: {
                        account: "",
                        password: ""
                    },
                    loginLoading: !1
                }
            },
            computed: {
                language: {
                    get: function() {
                        return this.$i18n.locale
                    },
                    set: function(e) {
                        k(e),
                        this.resetSpecialStrings()
                    }
                },
                loginFormRules: function() {
                    var e = this;
                    return {
                        account: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("account is required"))) : /^\w{5,15}$/.test(n) ? o() : o(new Error(e.$t("5-15 characters,letters/numbers/underscores")))
                            }
                        }],
                        password: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("password is required"))) : /^\w{5,15}$/.test(n) ? o() : o(new Error(e.$t("5-15 characters,letters/numbers/underscores")))
                            }
                        }]
                    }
                },
                languageList: function() {
                    var e = this.language;
                    return [{
                        label: this.$t("chinese"),
                        value: "zh-CN"
                    }, {
                        label: this.$t("english"),
                        value: "en"
                    }, {
                        label: this.$t("korean"),
                        value: "ko"
                    }].sort(function(t, n) {
                        return t.value === e ? -1 : n.value === e ? 1 : 0
                    })
                }
            },
            methods: {
                login: function() {
                    var e = this;
                    this.$refs["loginForm"].validate(function(t) {
                        if (!t)
                            return !1;
                        e.loginLoading = !0,
                        V(e.loginForm).then(function() {
                            M.set(e.loginForm.password),
                            e.loginLoading = !1,
                            M.get() ? e.$router.replace("/config") : e.$router.replace("/config/account")
                        }).catch(function() {
                            e.loginLoading = !1
                        })
                    })
                },
                resetSpecialStrings: function() {
                    var e = this
                      , t = this.$refs["accountItem"].validateState
                      , n = this.$refs["passwordItem"].validateState;
                    setTimeout(function() {
                        "" === t ? e.$refs["accountItem"].clearValidate() : e.$refs["accountItem"].validate(),
                        "" === n ? e.$refs["passwordItem"].clearValidate() : e.$refs["passwordItem"].validate()
                    }, 0)
                }
            }
        }
          , ae = se
          , ie = (n("4770"),
        n("f58e"),
        Object(R["a"])(ae, j, D, !1, null, "307a9f85", null))
          , re = ie.exports
          , ce = function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "config-main"
            }, [o("div", {
                staticClass: "config-header"
            }, [o("img", {
                staticClass: "config-header-img-title",
                attrs: {
                    src: n("6188"),
                    alt: "logo img;The designer do it,no me."
                }
            }), o("div", {
                staticClass: "config-header-action-bar"
            }, [o("a", {
                staticClass: "config-header-action",
                on: {
                    click: e.logout
                }
            }, [e._v(e._s(e.$t("logout")))]), o("span", [e._v(e._s(" | "))]), o("a", {
                staticClass: "config-header-action",
                on: {
                    click: e.reboot
                }
            }, [e._v(e._s(e.$t("reboot device")))]), o("span", [e._v(e._s(" | "))]), o("a", {
                staticClass: "config-header-action",
                on: {
                    click: e.reset
                }
            }, [e._v(e._s(e.$t("reset device")))])])]), o("div", {
                staticClass: "config-body"
            }, [o("div", {
                staticClass: "config-side"
            }, [o("el-menu", {
                staticClass: "config-side-menu",
                attrs: {
                    router: "",
                    "default-active": e.currentIndex
                }
            }, [o("el-menu-item", {
                attrs: {
                    index: "/config/ipc"
                }
            }, [o("i", {
                staticClass: "el-icon-s-operation config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("video parameters")))])]), o("el-menu-item", {
                attrs: {
                    index: "/config/device"
                }
            }, [o("i", {
                staticClass: "el-icon-setting config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("network settings")))])]), o("el-menu-item", {
                attrs: {
                    index: "/config/account"
                }
            }, [o("i", {
                staticClass: "el-icon-user config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("account management")))])]), o("el-menu-item", {
                attrs: {
                    index: "/config/version"
                }
            }, [o("i", {
                staticClass: "el-icon-sell config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("update version")))])]), o("el-menu-item", {
                attrs: {
                    index: "/config/ntp"
                }
            }, [o("i", {
                staticClass: "el-icon-time config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("ntp config")))])]), o("el-menu-item", {
                attrs: {
                    index: "/config/autoReboot"
                }
            }, [o("i", {
                staticClass: "el-icon-s-open config-nav-icon"
            }), o("span", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e._v(e._s(e.$t("auto reboot config")))])])], 1)], 1), o("div", {
                staticClass: "config-body-main"
            }, [o("keep-alive", [o("router-view")], 1)], 1)])])
        }
          , le = []
          , ue = {
            data: function() {
                return {
                    currentIndex: this.$route.fullPath
                }
            },
            methods: {
                logout: function() {
                    var e = this;
                    G().catch(function() {}).finally(function() {
                        O.a.remove("session"),
                        e.$router.push("/")
                    })
                },
                reset: function() {
                    var e = this;
                    this.$messageBox.confirm(this.$t("Reset the device?"), this.$t("tip"), {
                        confirmButtonText: this.$t("confirm"),
                        cancelButtonText: this.$t("cancel"),
                        type: "warning"
                    }).then(function() {
                        return Y().then(function() {
                            e.$message({
                                type: "success",
                                message: e.$t("Reset device successfully!")
                            })
                        }).catch(function() {
                            e.$message({
                                type: "error",
                                message: e.$t("Reset device failed!")
                            })
                        })
                    }).catch(function() {})
                },
                reboot: function() {
                    var e = this;
                    this.$messageBox.confirm(this.$t("Reboot the device?\nYes,and the device cannot be accessed In about two minutes."), this.$t("tip"), {
                        confirmButtonText: this.$t("confirm"),
                        cancelButtonText: this.$t("cancel"),
                        type: "warning"
                    }).then(function() {
                        return X().then(function() {
                            e.$message({
                                type: "success",
                                message: e.$t("Reboot device successfully!")
                            }),
                            setTimeout(function() {
                                location.reload()
                            }, 1e3)
                        }).catch(function() {
                            e.$message({
                                type: "error",
                                message: e.$t("Reboot device failed!")
                            })
                        })
                    }).catch(function() {})
                }
            }
        }
          , de = ue
          , pe = (n("0064"),
        n("bdf3"),
        Object(R["a"])(de, ce, le, !1, null, "4af959d0", null))
          , fe = pe.exports
          , me = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "ipc-main"
            }, [n("div", {
                staticClass: "ipc-nav"
            }, [n("span", {
                staticStyle: {
                    "margin-right": "20px"
                }
            }, [e._v(e._s(e.$t("enable")))]), e._l(e.deviceList, function(t, o) {
                return n("el-checkbox", {
                    key: t.name,
                    on: {
                        change: function(t) {
                            return e.changeDeviceStartStatus(o)
                        }
                    },
                    model: {
                        value: t.startStatus,
                        callback: function(n) {
                            e.$set(t, "startStatus", n)
                        },
                        expression: "device.startStatus"
                    }
                }, [e._v(e._s(t.name))])
            })], 2), n("div", {
                ref: "ipc-data",
                staticClass: "ipc-data"
            }, [n("div", {
                staticClass: "ipc-content"
            }, e._l(e.deviceList, function(t, o) {
                return n("div", {
                    key: o,
                    ref: "ipc-content-item-" + o,
                    refInFor: !0,
                    staticClass: "ipc-content-index"
                }, [n("transition", {
                    attrs: {
                        name: "el-fade-in-linear"
                    }
                }, [e.deviceList[o].startStatus ? n("ipc-content", {
                    staticClass: "ipc-content-item",
                    model: {
                        value: e.deviceList[o],
                        callback: function(t) {
                            e.$set(e.deviceList, o, t)
                        },
                        expression: "deviceList[index]"
                    }
                }) : e._e()], 1)], 1)
            }), 0)]), n("div", {
                staticClass: "ipc-action-bar"
            }, [n("el-button", {
                attrs: {
                    type: "primary",
                    loading: e.saveLoading
                },
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("save conguration")))]), n("el-button", {
                attrs: {
                    type: "primary",
                    loading: e.refreshLoading
                },
                on: {
                    click: e.refresh
                }
            }, [e._v(e._s(e.$t("refresh conguration")))]), n("el-button", {
                attrs: {
                    type: "primary",
                    loading: e.rebootLoading
                },
                on: {
                    click: e.reboot
                }
            }, [e._v(e._s(e.$t("reboot device")))])], 1)])
        }
          , ve = []
          , ge = (n("f559"),
        n("6b54"),
        function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "content-main"
            }, [n("p", {
                staticClass: "content-title"
            }, [e._v(e._s(e.selfContent.name))]), n("div", {
                staticClass: "content-form"
            }, [e.selfContent.ipcConguration ? n("div", [n("p", {
                staticClass: "content-group-title"
            }, [e._v(e._s(this.$t("IPC settings")))]), n("el-form", {
                staticClass: "content-ipc-form",
                attrs: {
                    "label-position": "left",
                    "label-width": "auto",
                    size: "mini",
                    model: e.selfContent.ipcConguration,
                    rules: e.ipcCongurationRules
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("IP address"),
                    prop: "ip"
                }
            }, [n("el-input", {
                model: {
                    value: e.selfContent.ipcConguration.ip,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "ip", t)
                    },
                    expression: "selfContent.ipcConguration.ip"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("port")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 0,
                    max: 65535,
                    precision: 0
                },
                model: {
                    value: e.selfContent.ipcConguration.port,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "port", t)
                    },
                    expression: "selfContent.ipcConguration.port"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("username")
                }
            }, [n("el-input", {
                model: {
                    value: e.selfContent.ipcConguration.username,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "username", t)
                    },
                    expression: "selfContent.ipcConguration.username"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("password")
                }
            }, [n("el-input", {
                model: {
                    value: e.selfContent.ipcConguration.password,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "password", t)
                    },
                    expression: "selfContent.ipcConguration.password"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("channel")
                }
            }, [n("el-input", {
                model: {
                    value: e.selfContent.ipcConguration.channel,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "channel", t)
                    },
                    expression: "selfContent.ipcConguration.channel"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("protocol")
                }
            }, [n("el-select", {
                model: {
                    value: e.selfContent.ipcConguration.protocolType,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "protocolType", t)
                    },
                    expression: "selfContent.ipcConguration.protocolType"
                }
            }, e._l(e.protocolTypeList, function(e, t) {
                return n("el-option", {
                    key: t,
                    attrs: {
                        label: e,
                        value: t
                    }
                })
            }), 1)], 1), e.selfContent.ipcConguration.protocolType ? n("el-form-item", {
                attrs: {
                    label: e.$t("rtsp address")
                }
            }, [n("el-input", {
                model: {
                    value: e.selfContent.ipcConguration.rtspAddr,
                    callback: function(t) {
                        e.$set(e.selfContent.ipcConguration, "rtspAddr", t)
                    },
                    expression: "selfContent.ipcConguration.rtspAddr"
                }
            })], 1) : e._e()], 1)], 1) : e._e(), e.selfContent.compressionConguration ? n("div", {
                class: e.selfContent.ipcConguration ? "content-compress" : ""
            }, [n("p", {
                staticClass: "content-group-title"
            }, [e._v(e._s(this.$t("compressed parameters settings")))]), n("el-form", {
                staticClass: "content-compress-form",
                attrs: {
                    "label-position": "left",
                    "label-width": "auto",
                    size: "mini"
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("payload")
                }
            }, [n("el-select", {
                model: {
                    value: e.selfContent.compressionConguration.payload,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "payload", t)
                    },
                    expression: "selfContent.compressionConguration.payload"
                }
            }, e._l(e.payloadList, function(e, t) {
                return n("el-option", {
                    key: t,
                    attrs: {
                        value: e
                    }
                })
            }), 1)], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("image quality")
                }
            }, [n("el-select", {
                model: {
                    value: e.selfContent.compressionConguration.imageQuality,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "imageQuality", t)
                    },
                    expression: "selfContent.compressionConguration.imageQuality"
                }
            }, e._l(e.imageQualityList, function(e, t) {
                return n("el-option", {
                    key: t,
                    attrs: {
                        value: e
                    }
                })
            }), 1)], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("mode")
                }
            }, [n("el-select", {
                model: {
                    value: e.selfContent.compressionConguration.mode,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "mode", t)
                    },
                    expression: "selfContent.compressionConguration.mode"
                }
            }, e._l(e.modeList, function(e) {
                return n("el-option", {
                    key: e,
                    attrs: {
                        value: e
                    }
                })
            }), 1)], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("I frame interval")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 1,
                    max: 1e3,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.IFrmInterval,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "IFrmInterval", t)
                    },
                    expression: "selfContent.compressionConguration.IFrmInterval"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("src frame rate")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 1,
                    max: 240,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.srcFrmRate,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "srcFrmRate", t)
                    },
                    expression: "selfContent.compressionConguration.srcFrmRate"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("dst frame rate")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 1,
                    max: 240,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.dstFrmRate,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "dstFrmRate", t)
                    },
                    expression: "selfContent.compressionConguration.dstFrmRate"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("max bit rate")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 2,
                    max: 102400,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.bitRate,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "bitRate", t)
                    },
                    expression: "selfContent.compressionConguration.bitRate"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("IQp")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 0,
                    max: 51,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.IQp,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "IQp", t)
                    },
                    expression: "selfContent.compressionConguration.IQp"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("PQp")
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 0,
                    max: 51,
                    precision: 0
                },
                model: {
                    value: e.selfContent.compressionConguration.PQp,
                    callback: function(t) {
                        e.$set(e.selfContent.compressionConguration, "PQp", t)
                    },
                    expression: "selfContent.compressionConguration.PQp"
                }
            })], 1)], 1)], 1) : e._e()])])
        }
        )
          , be = []
          , he = n("7618")
          , Ce = function e(t) {
            if ("object" !== Object(he["a"])(t) || null === t)
                return t;
            var n, o = Array.isArray(t) ? [] : {};
            for (n in t)
                "object" === Object(he["a"])(t[n]) && e(t[n]),
                o[n] = t[n];
            return o
        }
          , ye = {
            model: {
                prop: "content",
                event: "change"
            },
            props: {
                content: Object
            },
            data: function() {
                var e = this;
                return {
                    selfContent: Ce(this.content),
                    protocolTypeList: ["onvif", "rtsp"],
                    payloadList: ["H264", "H265", "BBW"],
                    imageQualityList: ["720P", "1080P", "2K", "4K"],
                    modeList: [0, 1, 2],
                    ipcCongurationRules: {
                        ip: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("IP address is required"))) : /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(n) ? o() : o(new Error(e.$t("IP address is invalid")))
                            }
                        }]
                    }
                }
            },
            watch: {
                selfContent: function(e) {
                    this.$emit("change", e)
                }
            }
        }
          , we = ye
          , $e = (n("278c"),
        n("9355"),
        Object(R["a"])(we, ge, be, !1, null, "3db6386e", null))
          , Ie = $e.exports;
        document.aaa = void 0,
        document.bbb = void 0;
        var _e = {
            data: function() {
                return {
                    deviceList: [],
                    originalDeviceList: [],
                    saveLoading: !1,
                    refreshLoading: !1,
                    rebootLoading: !1
                }
            },
            created: function() {
                this.refresh()
            },
            methods: {
                changeDeviceStartStatus: function(e) {
                    var t = this;
                    setTimeout(function() {
                        !0 === t.deviceList[e].startStatus && t.$refs["ipc-data"].scrollTo({
                            top: t.$refs["ipc-content-item-".concat(e.toString())][0].offsetTop - 110,
                            left: 0,
                            behavior: "smooth"
                        })
                    }, 0)
                },
                save: function() {
                    var e = this;
                    this.saveLoading = !0,
                    W({
                        videos: this.originalDeviceList
                    }).then(function() {
                        e.saveLoading = !1,
                        e.$message.success(e.$t("IPC Congurations saved successfully")),
                        document.rebootTip || (document.rebootTip = !0,
                        e.$notify({
                            message: e.$t("you need to reboot device"),
                            position: "top-right",
                            offset: 100,
                            showClose: !1,
                            duration: 0,
                            type: "warning"
                        }))
                    }).catch(function() {
                        e.saveLoading = !1
                    })
                },
                refresh: function() {
                    var e = this;
                    this.refreshLoading = !0,
                    this.originalDeviceList = [],
                    this.deviceList = [],
                    K().then(function(t) {
                        e.refreshLoading = !1,
                        e.originalDeviceList = t.data.videos.map(function(e) {
                            return e.ipcConguration || delete e.ipcConguration,
                            e
                        }),
                        e.deviceList = e.originalDeviceList.filter(function(e) {
                            return e.name.startsWith("IPC")
                        })
                    }).catch(function() {
                        e.refreshLoading = !1,
                        e.originalDeviceList = [],
                        e.deviceList = []
                    })
                },
                reboot: function() {
                    var e = this;
                    this.$messageBox.confirm(this.$t("Reboot the device?\nYes,and the device cannot be accessed In about two minutes."), this.$t("tip"), {
                        confirmButtonText: this.$t("confirm"),
                        cancelButtonText: this.$t("cancel"),
                        type: "warning"
                    }).then(function() {
                        return X().then(function() {
                            e.$message({
                                type: "success",
                                message: e.$t("Reboot device successfully!")
                            }),
                            setTimeout(function() {
                                location.reload()
                            }, 1e3)
                        }).catch(function() {
                            e.$message({
                                type: "error",
                                message: e.$t("Reboot device failed!")
                            })
                        })
                    }).catch(function() {})
                }
            },
            components: {
                "ipc-content": Ie
            }
        }
          , Pe = _e
          , ke = (n("4b68"),
        Object(R["a"])(Pe, me, ve, !1, null, "e7cd6b16", null))
          , xe = ke.exports
          , Fe = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("p", {
                staticClass: "device-title"
            }, [e._v(e._s(e.$t("device conguration")))]), n("el-form", {
                ref: "deviceForm",
                staticClass: "device-form",
                attrs: {
                    model: e.deviceForm,
                    rules: e.deviceFormRules,
                    "label-position": "right",
                    "label-width": "auto"
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("IP address"),
                    prop: "localIpAddress"
                }
            }, [n("el-input", {
                attrs: {
                    placeholder: "ip"
                },
                model: {
                    value: e.deviceForm.localIpAddress,
                    callback: function(t) {
                        e.$set(e.deviceForm, "localIpAddress", t)
                    },
                    expression: "deviceForm.localIpAddress"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("subnet mask"),
                    prop: "subnetMask"
                }
            }, [n("el-input", {
                model: {
                    value: e.deviceForm.subnetMask,
                    callback: function(t) {
                        e.$set(e.deviceForm, "subnetMask", t)
                    },
                    expression: "deviceForm.subnetMask"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("gateway"),
                    prop: "gatewayIpAddress"
                }
            }, [n("el-input", {
                attrs: {
                    placeholder: "ip"
                },
                model: {
                    value: e.deviceForm.gatewayIpAddress,
                    callback: function(t) {
                        e.$set(e.deviceForm, "gatewayIpAddress", t)
                    },
                    expression: "deviceForm.gatewayIpAddress"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("cloudserver"),
                    prop: "cloudIpAddress"
                }
            }, [n("el-checkbox", {
                staticClass: "device-line-first",
                model: {
                    value: e.deviceForm.cloudEnabled,
                    callback: function(t) {
                        e.$set(e.deviceForm, "cloudEnabled", t)
                    },
                    expression: "deviceForm.cloudEnabled"
                }
            }), n("el-input", {
                staticClass: "device-line-input",
                attrs: {
                    disabled: !e.deviceForm.cloudEnabled,
                    placeholder: "ip:port"
                },
                model: {
                    value: e.deviceForm.cloudIpAddress,
                    callback: function(t) {
                        e.$set(e.deviceForm, "cloudIpAddress", t)
                    },
                    expression: "deviceForm.cloudIpAddress"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("MAC address")
                }
            }, [n("el-input", {
                attrs: {
                    readonly: ""
                },
                model: {
                    value: e.deviceForm.macAddress,
                    callback: function(t) {
                        e.$set(e.deviceForm, "macAddress", t)
                    },
                    expression: "deviceForm.macAddress"
                }
            })], 1), n("el-form-item", [n("el-button", {
                staticClass: "device-button",
                attrs: {
                    type: "primary",
                    loading: e.saveLoading
                },
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("confirm")))])], 1)], 1)], 1)
        }
          , Le = []
          , Re = {
            data: function() {
                var e = this;
                return {
                    deviceForm: {
                        localIpAddress: "",
                        subnetMask: "",
                        gatewayIpAddress: "",
                        cloudEnabled: !1,
                        cloudIpAddress: "",
                        macAddress: ""
                    },
                    deviceFormRules: {
                        localIpAddress: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("IP address is required"))) : /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(n) ? o() : o(new Error(e.$t("IP address is invalid")))
                            }
                        }],
                        subnetMask: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("Subnet mask is required"))) : /^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/.test(n) ? o() : o(new Error(e.$t("Subnet mask is invalid")))
                            }
                        }],
                        gatewayIpAddress: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("Gateway IP address is required"))) : /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(n) ? o() : o(new Error(e.$t("Gateway IP address is invalid")))
                            }
                        }],
                        cloudIpAddress: [{
                            validator: function(t, n, o) {
                                return e.deviceForm.cloudEnabled ? void 0 === n ? o(new Error(e.$t("Cloud server IP address is required"))) : /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?):([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(n) ? o() : o(new Error(e.$t("Cloud server IP address is invalid"))) : o()
                            }
                        }]
                    },
                    saveLoading: !1
                }
            },
            created: function() {
                var e = this;
                z().then(function(t) {
                    e.deviceForm = t.data
                }).catch(function() {
                    e.deviceForm = {},
                    setTimeout(function() {
                        e.$refs.deviceForm.clearValidate()
                    }, 0)
                })
            },
            methods: {
                save: function() {
                    var e = this;
                    this.$refs.deviceForm.validate(function(t) {
                        if (!t)
                            return !1;
                        e.saveLoading = !0,
                        H(e.deviceForm).then(function() {
                            e.saveLoading = !1,
                            e.$message.success(e.$t("Device config changed successfully")),
                            document.rebootTip || (document.rebootTip = !0,
                            e.$notify({
                                message: e.$t("you need to reboot device"),
                                position: "top-right",
                                offset: 100,
                                showClose: !1,
                                duration: 0,
                                type: "warning"
                            }))
                        }).catch(function() {
                            e.saveLoading = !1
                        })
                    })
                }
            }
        }
          , Se = Re
          , qe = (n("8eee"),
        Object(R["a"])(Se, Fe, Le, !1, null, "8019d266", null))
          , Te = qe.exports
          , Oe = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-form", {
                ref: "accountForm",
                staticClass: "account-form",
                attrs: {
                    model: e.accountForm,
                    rules: e.accountFormRules,
                    "label-position": "right",
                    "label-width": "auto"
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("new account"),
                    prop: "account"
                }
            }, [n("el-input", {
                attrs: {
                    placeholder: e.$t("optional")
                },
                model: {
                    value: e.accountForm.account,
                    callback: function(t) {
                        e.$set(e.accountForm, "account", t)
                    },
                    expression: "accountForm.account"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("old password"),
                    prop: "oldPassword"
                }
            }, [n("el-input", {
                attrs: {
                    type: "password"
                },
                model: {
                    value: e.accountForm.oldPassword,
                    callback: function(t) {
                        e.$set(e.accountForm, "oldPassword", t)
                    },
                    expression: "accountForm.oldPassword"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("new password"),
                    prop: "password"
                }
            }, [n("el-input", {
                attrs: {
                    type: "password",
                    "show-password": ""
                },
                model: {
                    value: e.accountForm.password,
                    callback: function(t) {
                        e.$set(e.accountForm, "password", t)
                    },
                    expression: "accountForm.password"
                }
            })], 1), n("el-form-item", [n("el-button", {
                staticClass: "account-button",
                attrs: {
                    type: "primary",
                    loading: e.buttonLoading
                },
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("confirm")))])], 1)], 1)
        }
          , Me = []
          , Ae = {
            data: function() {
                return {
                    accountForm: {
                        account: "",
                        oldPassword: "",
                        password: ""
                    },
                    buttonLoading: !1
                }
            },
            computed: {
                accountFormRules: function() {
                    var e = this
                      , t = function(t, n, o) {
                        return n ? /^\w{5,15}$/.test(n) ? o() : o(new Error(e.$t("5-15 characters,letters/numbers/underscores"))) : o()
                    }
                      , n = function(t, n, o) {
                        return void 0 === n ? o(new Error(e.$t("password is required"))) : /^\w{5,15}$/.test(n) ? o() : o(new Error(e.$t("5-15 characters,letters/numbers/underscores")))
                    };
                    return {
                        account: [{
                            validator: t
                        }],
                        oldPassword: [{
                            validator: n
                        }],
                        password: [{
                            validator: n
                        }]
                    }
                }
            },
            created: function() {
                var e = O.a.get("session");
                e || this.$router.replace("/")
            },
            methods: {
                save: function() {
                    var e = this;
                    this.$refs.accountForm.validate(function(t) {
                        if (!t)
                            return !1;
                        e.buttonLoading = !0,
                        J(e.accountForm).then(function() {
                            M.set(e.accountForm.password),
                            e.buttonLoading = !1,
                            O.a.remove("session"),
                            e.$router.push("/"),
                            e.$message.success(e.$t("account and password changed successfully"))
                        }).catch(function() {
                            e.buttonLoading = !1
                        })
                    })
                }
            }
        }
          , Ee = Ae
          , je = (n("5a11"),
        Object(R["a"])(Ee, Oe, Me, !1, null, "972dd9e2", null))
          , De = je.exports
          , Qe = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "version-main"
            }, [n("p", {
                staticClass: "version-current"
            }, [e._v("\n    " + e._s(e.$t("current version")) + "\n    "), n("span", {
                staticStyle: {
                    "margin-left": "20px"
                }
            }, [e._v(e._s(e.version))])]), n("el-upload", {
                ref: "upload",
                staticClass: "version-upload",
                attrs: {
                    action: "/api/updateVersion",
                    "auto-upload": !0,
                    "on-exceed": e.whenUploadExceed,
                    "on-success": e.whenUploadSuccess,
                    "on-error": e.whenUploadError,
                    drag: "",
                    accept: ".img",
                    "with-credentials": "",
                    limit: 1
                }
            }, [n("i", {
                staticClass: "el-icon-upload"
            }), n("div", {
                staticClass: "el-upload__text"
            }, [e._v("\n      " + e._s(e.$t("drop file here,or")) + "\n      "), n("em", [e._v(e._s(e.$t("click to upload")))])]), n("div", {
                staticClass: "el-upload__tip",
                attrs: {
                    slot: "tip"
                },
                slot: "tip"
            }, [e._v("\n      " + e._s(e.$t("only one file can be uploaded")) + "\n    ")])])], 1)
        }
          , Be = []
          , Ne = {
            data: function() {
                return {
                    version: ""
                }
            },
            created: function() {
                var e = this;
                Z().then(function(t) {
                    e.version = t.data.version
                }).catch(function() {})
            },
            methods: {
                whenUploadSuccess: function() {
                    this.$message.success(this.$t("Upload new version file successfully!")),
                    document.rebootTip || (document.rebootTip = !0,
                    this.$notify({
                        message: this.$t("you need to reboot device"),
                        position: "top-right",
                        offset: 100,
                        showClose: !1,
                        duration: 0,
                        type: "warning"
                    }))
                },
                whenUploadError: function() {
                    this.$message.error(this.$t("Upload new version file failed!"))
                },
                whenUploadExceed: function() {
                    this.$message.warning(this.$t("only one file can be uploaded"))
                }
            }
        }
          , Ue = Ne
          , Ve = (n("2a66"),
        Object(R["a"])(Ue, Qe, Be, !1, null, "7f85cc89", null))
          , Ge = Ve.exports
          , Ye = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-form", {
                ref: "ntpInfoForm",
                staticClass: "ntpInfo-form",
                attrs: {
                    model: e.ntpinfo,
                    rules: e.ntpInfoFormRules,
                    "label-position": "right",
                    "label-width": "auto"
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("ntp ip"),
                    prop: "ntpServerIp"
                }
            }, [n("el-input", {
                model: {
                    value: e.ntpinfo.ntpServerIp,
                    callback: function(t) {
                        e.$set(e.ntpinfo, "ntpServerIp", t)
                    },
                    expression: "ntpinfo.ntpServerIp"
                }
            })], 1), n("el-form-item", [n("el-button", {
                staticClass: "ntpInfo-button",
                attrs: {
                    type: "primary",
                    loading: e.buttonLoading
                },
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("confirm")))])], 1)], 1)
        }
          , Je = []
          , ze = {
            data: function() {
                var e = this;
                return {
                    ntpinfo: {
                        ntpServerIp: "192.168.1.1",
                        ntpServerPort: 123
                    },
                    buttonLoading: !1,
                    ntpInfoFormRules: {
                        ntpServerIp: [{
                            validator: function(t, n, o) {
                                return void 0 === n ? o(new Error(e.$t("IP address is required"))) : /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(n) ? o() : o(new Error(e.$t("IP address is invalid")))
                            }
                        }]
                    }
                }
            },
            created: function() {
                var e = this;
                ee().then(function(t) {
                    e.ntpinfo = t.data
                }).catch(function() {
                    e.ntpinfo = {
                        ntpServerIp: "192.168.1.1",
                        ntpServerPort: 123
                    },
                    setTimeout(function() {
                        e.$refs.ntpInfoForm.clearValidate()
                    }, 0)
                })
            },
            methods: {
                save: function() {
                    var e = this;
                    this.$refs.ntpInfoForm.validate(function(t) {
                        if (!t)
                            return !1;
                        e.buttonLoading = !0,
                        te(e.ntpinfo).then(function() {
                            e.buttonLoading = !1,
                            e.$message.success(e.$t("ntpInfo changed successfully"))
                        }).catch(function() {
                            e.buttonLoading = !1
                        })
                    })
                }
            }
        }
          , He = ze
          , Ke = (n("e1b7"),
        Object(R["a"])(He, Ye, Je, !1, null, "532e9002", null))
          , We = Ke.exports
          , Ze = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-form", {
                ref: "dataForm",
                staticClass: "data-form",
                attrs: {
                    model: e.data,
                    "label-position": "right",
                    "label-width": "auto"
                }
            }, [n("el-form-item", {
                attrs: {
                    label: e.$t("enable")
                }
            }, [n("el-checkbox", {
                model: {
                    value: e.data.enable,
                    callback: function(t) {
                        e.$set(e.data, "enable", t)
                    },
                    expression: "data.enable"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("day frequency"),
                    prop: "frequencyDays"
                }
            }, [n("el-input-number", {
                attrs: {
                    controls: !1,
                    min: 1,
                    max: 7,
                    precision: 0
                },
                model: {
                    value: e.data.frequencyDays,
                    callback: function(t) {
                        e.$set(e.data, "frequencyDays", t)
                    },
                    expression: "data.frequencyDays"
                }
            })], 1), n("el-form-item", {
                attrs: {
                    label: e.$t("reboot time")
                }
            }, [n("el-time-picker", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    clearable: !1,
                    "value-format": "H m s"
                },
                model: {
                    value: e.ntpTime,
                    callback: function(t) {
                        e.ntpTime = t
                    },
                    expression: "ntpTime"
                }
            })], 1), n("el-form-item", [n("el-button", {
                staticClass: "data-button",
                attrs: {
                    type: "primary",
                    loading: e.buttonLoading
                },
                on: {
                    click: e.save
                }
            }, [e._v(e._s(e.$t("confirm")))])], 1)], 1)
        }
          , Xe = []
          , et = (n("28a5"),
        n("768b"))
          , tt = {
            data: function() {
                return {
                    data: {
                        hour: 0,
                        minute: 0,
                        second: 0,
                        frequencyDays: 1,
                        enable: !1
                    },
                    buttonLoading: !1
                }
            },
            computed: {
                ntpTime: {
                    get: function() {
                        var e = this.data.hour
                          , t = this.data.minute
                          , n = this.data.second;
                        return "".concat(e, " ").concat(t, " ").concat(n)
                    },
                    set: function(e) {
                        var t = e.split(" ")
                          , n = Object(et["a"])(t, 3)
                          , o = n[0]
                          , s = n[1]
                          , a = n[2];
                        this.data.hour = parseInt(o),
                        this.data.minute = parseInt(s),
                        this.data.second = parseInt(a)
                    }
                }
            },
            created: function() {
                var e = this;
                ne().then(function(t) {
                    e.data = t.data
                }).catch(function() {
                    e.data = {
                        hour: 0,
                        minute: 0,
                        second: 0,
                        frequencyDays: 1,
                        enable: !1
                    },
                    setTimeout(function() {
                        e.$refs.dataForm.clearValidate()
                    }, 0)
                })
            },
            methods: {
                save: function() {
                    var e = this;
                    this.buttonLoading = !0,
                    oe(this.data).then(function() {
                        e.buttonLoading = !1,
                        e.$message.success(e.$t("Reboot config changed successfully"))
                    }).catch(function() {
                        e.buttonLoading = !1
                    })
                }
            }
        }
          , nt = tt
          , ot = (n("7da5"),
        Object(R["a"])(nt, Ze, Xe, !1, null, "82876774", null))
          , st = ot.exports;
        o["default"].use(E["a"]);
        var at = new E["a"]({
            routes: [{
                path: "/",
                redirect: "/login"
            }, {
                path: "/login",
                component: re
            }, {
                path: "/config",
                component: fe,
                children: [{
                    path: "",
                    redirect: "ipc"
                }, {
                    path: "ipc",
                    component: xe
                }, {
                    path: "device",
                    component: Te
                }, {
                    path: "account",
                    component: De
                }, {
                    path: "version",
                    component: Ge
                }, {
                    path: "ntp",
                    component: We
                }, {
                    path: "autoReboot",
                    component: st
                }, {
                    path: "*",
                    redirect: "/login"
                }]
            }, {
                path: "*",
                redirect: "/login"
            }]
        });
        at.beforeEach(function(e, t, n) {
            var o = O.a.get("session");
            void 0 !== o ? M.get() ? "/login" !== e.path ? n() : n("/config") : (Object(A["Message"])({
                message: x.t("your password is not safe"),
                type: "warning"
            }),
            "/config/account" !== e.path ? n("/config/account") : n()) : "/login" !== e.path ? n("/login") : n()
        });
        var it = at;
        n("0fae"),
        n("acc7");
        o["default"].config.productionTip = !1,
        o["default"].use(A["Button"]),
        o["default"].use(A["Icon"]),
        o["default"].use(A["Input"]),
        o["default"].use(A["Form"]),
        o["default"].use(A["FormItem"]),
        o["default"].use(A["Select"]),
        o["default"].use(A["Option"]),
        o["default"].use(A["Menu"]),
        o["default"].use(A["MenuItem"]),
        o["default"].use(A["Checkbox"]),
        o["default"].use(A["InputNumber"]),
        o["default"].use(A["Upload"]),
        o["default"].use(A["TimePicker"]),
        o["default"].component(A["MessageBox"].name, A["MessageBox"]),
        o["default"].prototype.$messageBox = A["MessageBox"],
        o["default"].component(A["Message"].name, A["Message"]),
        o["default"].prototype.$message = A["Message"],
        o["default"].prototype.$notify = A["Notification"],
        new o["default"]({
            i18n: x,
            router: it,
            render: function(e) {
                return e(q)
            }
        }).$mount("#app")
    },
    "5a11": function(e, t, n) {
        "use strict";
        var o = n("fc41")
          , s = n.n(o);
        s.a
    },
    6188: function(e, t, n) {
        e.exports = n.p + "https://raw.githubusercontent.com/moonphase97/hwasung_args/master/coconutlab/color/coconutlab_CI_land.png"
    },
    "61b6": function(e) {
        e.exports = JSON.parse('{"_utils":"~~~~~~~~~~~~~~~~~~","common bottom copy right":"Copyright CoconutLab Company. All rights reserved.","common bottom public record":"","simadada company":"코코넛랩","chinese":"简体中文","english":"English","korean":"한국어","VDMS-T-4":"VDMS-T-4","please input your account":"请输入您的账户","please input the password":"请输入对应密码","account is required":"账户不可为空","password is required":"密码不可为空","5-15 characters,letters/numbers/underscores":"5~15位,字母数字或下划线","login":"登录","logout":"登出","you need to reboot device":"你需要重新启动设备来应用保存的配置!","reboot device":"重新启动","Reboot the device?\\nYes,and the device cannot be accessed In about two minutes.":"确定要重启设备吗？\\n确定则设备将在大概两分钟内无法访问。","tip":"提示","your password is not safe":"当前密码为默认密码,请修改密码后再进行设备操作!","cancel":"取消","Reboot device successfully!":"重启设备成功！","Reboot device failed!":"重启设备失败！","Reset the device?":"确定要重置设备吗？\\n确定则设备将在大概两分钟内无法访问。","reset device":"重置设备","Reset device successfully!":"重置设备成功!","Reset device failed!":"重置设备失败!","_device":"~~~~~~~~~~~~~~~~~~","video parameters":"视频参数","IPC settings":"摄像头设置","IP address":"IP地址","port":"端口","username":"用户名","password":"密码","channel":"通道号","protocol":"传输协议","rtsp address":"rtsp地址","compressed parameters settings":"压缩参数设置","payload":"编码格式","image quality":"图像质量","mode":"压缩方式","I frame interval":"I帧间隔","src frame rate":"原始帧率","dst frame rate":"目标帧率","max bit rate":"码率上限","IQp":"压缩参数1","PQp":"压缩参数2","IPC Congurations saved successfully":"视频参数配置更新成功！","_network":"~~~~~~~~~~~~~~~~~~","network settings":"网络设置","save conguration":"保存配置","refresh conguration":"刷新配置","device conguration":"设备配置","subnet mask":"子网掩码","gateway":"网关","cloudserver":"云服务器","enable":"启用","enabled":"已启用","diabled":"已禁用","MAC address":"MAC地址","IP address is required":"IP地址不可为空","IP address is invalid":"IP地址无效","Subnet mask is required":"子网掩码不可为空","Subnet mask is invalid":"子网掩码无效","Gateway IP address is required":"网关IP地址不可为空","Gateway IP address is invalid":"网关IP地址无效","Cloud server IP address is required":"云服务器IP地址不可为空","Cloud server IP address is invalid":"云服务器IP地址无效","Mac address is required":"Mac地址不可为空","Mac address is invalid":"Mac地址无效","Device config changed successfully":"网络设置更新成功！","_account":"~~~~~~~~~~~~~~~~~~","account management":"账户管理","new account":"新账户","new password":"新密码","old password":"旧密码","please input the old password":"请输入原来的密码","please input the new password":"请输入新的密码","optional":"可选","confirm":"确认","account and password changed successfully":"账户密码修改成功！","_version":"~~~~~~~~~~~~~~~~~~","update version":"更新升级","drop file here,or":"将文件拖到此处，或","click to upload":"点击上传","current version":"当前版本号","new version":"新的版本号","only one file can be uploaded":"只能上传一个文件！","Upload new version file successfully!":"上传新版本文件成功！","Upload new version file failed!":"上传新文件失败！","_ntp":"~~~~~~~~~~~~~~~~~~~","ntp config":"校时设置","ntp ip":"NTP服务器IP","ntp port":"NTP服务器端口","ntp frequency":"校时周期/天","ntp time":"校时时间点","ntpInfo changed successfully":"NTP校时服务器设置成功！","_autoreboot":"~~~~~~~~~~~~~~~~~~~","auto reboot config":"自动重启","day frequency":"重启周期/天","reboot time":"重启时间","Reboot config changed successfully":"自动重启设置修改成功！"}')
    },
    "64d7": function(e, t, n) {},
    "76ff": function(e) {
        e.exports = JSON.parse('{"_utils":"~~~~~~~~~~~~~~~~~~","common bottom copy right":"Copyright CoconutLab Company. All rights reserved.","common bottom public record":"","simadada company":"코코넛랩","chinese":"简体中文","english":"English","korean":"한국어","VDMS-T-4":"VDMS-T-4","please input your account":"Please input your account","please input the password":"Please input the password","account is required":"Account is required","password is required":"Password is required","5-15 characters,letters/numbers/underscores":"5-15 letters/numbers/underscores","login":"Login","logout":"Logout","you need to reboot device":"You need to reboot device to use saved config!","reboot device":"Reboot device","Reboot the device?\\nYes,and the device cannot be accessed In about two minutes.":"Reboot the device?\\nYes,and the device cannot be accessed In about two minutes.","tip":"tip","your password is not safe":"Use default password is not safe, please change the password before the device operation!","cancel":"Cancel","Reboot device successfully!":"Reboot device successfully!","Reboot device failed!":"Reboot device failed!","reset device":"Reset device","Reset the device?":"Reset the device?\\nYes,and the device cannot be accessed In about two minutes.","Reset device successfully!":"Reset device successfully!","Reset device failed!":"Reset device failed!","_device":"~~~~~~~~~~~~~~~~~~","video parameters":"Camera","IPC settings":"IPC settings","IP address":"IP address","port":"port","username":"username","password":"password","channel":"channel","protocol":"protocol","rtsp address":"rtsp address","compressed parameters settings":"compressed parameters settings","payload":"payload","image quality":"image quality","mode":"mode","I frame interval":"I frame interval","src frame rate":"src frame rate","dst frame rate":"dst frame rate","max bit rate":"max bit rate","IQp":"IQp","PQp":"PQp","save conguration":"Save configuration","refresh conguration":"Refresh configuration","IPC Congurations saved successfully":"Camera Configurations saved successfully!","_network":"~~~~~~~~~~~~~~~~~~","network settings":"Device","device conguration":"Device configuration","subnet mask":"subnet mask","gateway":"gateway","cloudserver":"cloud server","enable":"Enable","enabled":"enabled","diabled":"diabled","MAC address":"MAC address","IP address is required":"IP address is required","IP address is invalid":"IP address is invalid","Subnet mask is required":"Subnet mask is required","Subnet mask is invalid":"Subnet mask is invalid","Gateway IP address is required":"Gateway IP address is required","Gateway IP address is invalid":"Gateway IP address is invalid","Cloud server IP address is required":"Cloud server IP address is required","Cloud server IP address is invalid":"Cloud server IP address is invalid","Mac address is required":"Mac address is required","Mac address is invalid":"Mac address is invalid","Device config changed successfully":"Device Configurations saved successfully!","_account":"~~~~~~~~~~~~~~~~~~","account management":"Account","new account":"new account","new password":"new password","old password":"old password","please input the old password":"Please input the old password","please input the new password":"please input the new password","optional":"Optional","confirm":"Confirm","account and password changed successfully":"Account and password changed successfully!","_version":"~~~~~~~~~~~~~~~~~~","update version":"Version","drop file here,or":"Drop file here,or","click to upload":"click to upload","current version":"current version","new version":"new version","only one file can be uploaded":"Only one file can be uploaded!","Upload new version file successfully!":"Upload new version file successfully!","Upload new version file failed!":"Upload new version file failed!","_ntp":"~~~~~~~~~~~~~~~~~~~","ntp config":"Ntp Timing","ntp ip":"NTP server IP","ntp port":"NTP server Port","ntp frequency":"Frequency/Day","ntp time":"Time of Day","ntpInfo changed successfully":"Ntp Timing config changed successfully!","_autoreboot":"~~~~~~~~~~~~~~~~~~~","auto reboot config":"Auto Reboot","day frequency":"Frequency/day","reboot time":"Reboot Time","Reboot config changed successfully":"Auto reboot config changed successfully!"}')
    },
    "7da5": function(e, t, n) {
        "use strict";
        var o = n("b5fb")
          , s = n.n(o);
        s.a
    },
    "84d4": function(e) {
        e.exports = JSON.parse('{"_utils":"~~~~~~~~~~~~~~~~~~","common bottom copy right":"주식회사 코코넛랩 © Copyright CoconutLab Company. All rights reserved.","common bottom public record":"","simadada company":"코코넛랩","chinese":"简体中文","english":"English","korean":"한국어","VDMS-T-4":"VDMS-T-4","please input your account":"아이디","please input the password":"비밀번호","account is required":"필수","password is required":"필수","5-15 characters,letters/numbers/underscores":"5~15 a-zA-Z0-9_","login":"로그인","logout":"로그아웃","you need to reboot device":"저장된 설정을 적용하려면 새로 시작해야 합니다!","reboot device":"재부팅","Reboot the device?\\nYes,and the device cannot be accessed In about two minutes.":"장치를 재부팅 하시겠습니까?","tip":"알림","your password is not safe":"비밀번호 변경 후 사용하세요.","cancel":"아니오","Reboot device successfully!":"장치 재가동에 성공했습니다!","Reboot device failed!":"장치를 다시 여는 데 실패했습니다!","reset device":"장치 초기화","Reset the device?":"초기화하시겠습니까?","Reset device successfully!":"초기화에 성공함!","Reset device failed!":"초기화에 실패했습니다!","_device":"~~~~~~~~~~~~~~~~~~","video parameters":"카메라","IPC settings":"카메라세팅","IP address":"IP주소","port":"포트","username":"아이디","password":"비밀번호","channel":"채널","protocol":"프로토콜","rtsp address":"rtsp주소","compressed parameters settings":"압축 설정값 세팅","payload":"압축알고리즘","image quality":"해상도","mode":"압축모드","I frame interval":"i-프레임 간격","src frame rate":"시작점 프레임레이트","dst frame rate":"도착점 프레임레이트","max bit rate":"비트레이트","IQp":"인코더 매개변수1(IQp)","PQp":"인코더 매개변수2(PQp)","IPC Congurations saved successfully":"카메라 설정이 업데이트 되었습니다!","_network":"~~~~~~~~~~~~~~~~~~","network settings":"장치설정","save conguration":"적용","refresh conguration":"이전","device conguration":"장치설정","subnet mask":"서브넷마스크","gateway":"게이트웨이","cloudserver":"클라우드서버","enable":"사용","enabled":"활성화됨","diabled":"비활성화됨","MAC address":"MAC주소","IP address is required":"필요한","IP address is invalid":"유효하지","Subnet mask is required":"필요한","Subnet mask is invalid":"유효하지","Gateway IP address is required":"필요한","Gateway IP address is invalid":"유효하지","Cloud server IP address is required":"필요한","Cloud server IP address is invalid":"유효하지","Mac address is required":"필요한","Mac address is invalid":"유효하지","Device config changed successfully":"장치설정이 업데이트 되었습니다!","_account":"~~~~~~~~~~~~~~~~~~","account management":"계정설정","new account":"신규 계정","new password":"신규 비밀번호","old password":"이전 비밀번호","please input the old password":"이전 암호","please input the new password":"새 암호","optional":"선택","confirm":"적용","account and password changed successfully":"계정 비밀번호 변경 성공!","_version":"~~~~~~~~~~~~~~~~~~","update version":"버전","drop file here,or":"첨부파일을 마우스로 끌어 넣으세요.","click to upload":"","current version":"현재 버젼","new version":"새로운 버전","only one file can be uploaded":"한 개의 파일만 업로드 하세요.","Upload new version file successfully!":"새 파일 업로드하는 데 성공했습니다!","Upload new version file failed!":"새 파일을 업로드하는 데 실패했습니다!","_ntp":"~~~~~~~~~~~~~~~~~~~","ntp config":"NTP 설정","ntp ip":"NTP 서버 IP","ntp port":"NTP 서버 포트","ntp frequency":"교시 주기/일","ntp time":"교시 시간","ntpInfo changed successfully":"NTP 서버가 설정되었습니다!","_autoreboot":"~~~~~~~~~~~~~~~~~~~","auto reboot config":"재부팅 설정","day frequency":"주기/일","reboot time":"재부팅 시간설정","Reboot config changed successfully":"설정을 자동으로 다시 시작하였습니다!"}')
    },
    "8eee": function(e, t, n) {
        "use strict";
        var o = n("a55e")
          , s = n.n(o);
        s.a
    },
    9355: function(e, t, n) {
        "use strict";
        var o = n("fe47")
          , s = n.n(o);
        s.a
    },
    "964f": function(e, t, n) {
        e.exports = n.p + "static/img/login-bakcground-1.61bcce3e.png"
    },
    a55e: function(e, t, n) {},
    acc7: function(e, t, n) {},
    b5fb: function(e, t, n) {},
    bdf3: function(e, t, n) {
        "use strict";
        var o = n("edfb")
          , s = n.n(o);
        s.a
    },
    c5ab: function(e, t, n) {
        e.exports = n.p + "static/img/login-bakcground-2.d4b57da6.png"
    },
    c639: function(e, t, n) {},
    cf05: function(e, t, n) {
        e.exports = n.p + "https://raw.githubusercontent.com/moonphase97/hwasung_args/master/coconutlab/white/coconutlab_CI_200.png"
    },
    e1b7: function(e, t, n) {
        "use strict";
        var o = n("64d7")
          , s = n.n(o);
        s.a
    },
    edfb: function(e, t, n) {},
    ef2b: function(e, t, n) {},
    f58e: function(e, t, n) {
        "use strict";
        var o = n("c639")
          , s = n.n(o);
        s.a
    },
    fc41: function(e, t, n) {},
    fe47: function(e, t, n) {}
});
