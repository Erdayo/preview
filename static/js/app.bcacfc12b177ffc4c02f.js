webpackJsonp([0], [, , , function (t, e, n) {
    t.exports = n.p + "./static/img/1.ceef5b6.jpg"
}, , , , , , , , , function (t, e, n) {
    "use strict";
    var s = n(5), i = n(81), a = n(63), r = n.n(a), o = n(64), c = n.n(o), u = n(58), l = n.n(u), f = n(59), d = n.n(f), p = n(65), m = n.n(p), h = n(67), v = n.n(h), _ = n(62), w = n.n(_), g = n(4), C = n.n(g);
    s.a.use(i.a), s.a.use(C.a, {name: "v-touch"}), e.a = new i.a({
        routes: [{
            path: "/msg",
            name: "Msg",
            component: r.a
        }, {path: "/404", name: "NotFound", component: c.a}, {
            path: "/contact",
            name: "Contact",
            component: l.a
        }, {path: "/dialog/:id", name: "Dialog", component: d.a}, {
            path: "/other",
            name: "Other",
            component: m.a
        }, {path: "/setting", name: "Setting", component: v.a}, {
            path: "/information",
            name: "Information",
            component: w.a
        }]
    })
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
    n(55);
    var s = n(1)(n(34), n(80), null, null);
    t.exports = s.exports
}, , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(5), i = n(15), a = n.n(i), r = n(12), o = n(11), c = n.n(o), u = n(4), l = n.n(u), f = n(14), d = (n.n(f), n(13));
    n.n(d);
    s.a.config.productionTip = !1, s.a.prototype.$ajax = c.a, s.a.use(l.a, {name: "v-touch"}), r.a.replace("msg"), new s.a({
        el: "#app",
        router: r.a,
        template: "<App/>",
        components: {App: a.a}
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(61), i = n.n(s), a = n(60), r = n.n(a), o = n(66), c = n.n(o), u = n(68), l = n.n(u);
    e.default = {
        name: "app", components: {Headers: i.a, Footers: r.a, Search: c.a, Sidebar: l.a}, data: function () {
            return {info: [], keywords: "", isSwipe: ""}
        }, methods: {
            sendData: function () {
                var t = this;
                return "" === this.keywords ? this.info : this.info.filter(function (e) {
                        return e.descName.toLowerCase().indexOf(t.keywords.toLowerCase()) !== -1
                    })
            }, changeFunc: function (t) {
                this.keywords = t
            }, calcShow: function (t) {
                for (var e = !0, n = t.split(","), s = 0; s < n.length; s++)e = this.$route.name.toLowerCase().indexOf(n[s].toLowerCase()) === -1 && e;
                return e
            }, isSwipeFunc: function (t) {
                this.isSwipe = t
            }
        }, mounted: function () {
            var t = this;
            this.$ajax.get("./static/data/list.json").then(function (e) {
                t.info = e.data.info, t.isSwipe = e.data.isSwipe
            }, function (t) {
                console.log("error")
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "contact",
        props: ["currentData"],
        data: function () {
            return {newInfo: ""}
        },
        mounted: function () {
            this.newInfo = this.newInfoList()
        },
        methods: {
            showName: function (t, e) {
                return "" === e ? t : e
            }, isOnline: function (t) {
                return t ? "在线" : "离线"
            }, newInfoList: function () {
                for (var t = [], e = 0; e < this.currentData.length; e++) {
                    var n = this.currentData[e].categoryName;
                    0 === t.length && t.push({cate: n, isShow: !1, info: []});
                    for (var s = 0; s < t.length; s++) {
                        t[s].cate.indexOf(n) !== -1 ? t[s].info.push(this.currentData[e]) : t.push({
                                cate: n,
                                isShow: !1,
                                info: []
                            })
                    }
                }
                return t
            }, showCate: function (t) {
                this.newInfo[t].isShow = !this.newInfo[t].isShow
            }, addMsg: function (t) {
                this.currentData[t].isRemove = !1, this.currentData[t].isSwipe = !1
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "dialog",
        props: ["currentData"],
        data: function () {
            return {newData: "", selfImg: n(3), content: "", sub: "", tmp: ""}
        },
        mounted: function () {
            this.newData = this.filterData(), this.scrollBottom()
        },
        methods: {
            filterData: function () {
                var t = this.currentData, e = this.$route.params.id, n = this;
                return t.filter(function (t, s) {
                    return t.id === e && (n.sub = s), t.id === e
                })
            }, updateInfo: function () {
                var t = this;
                this.tmp = this.content, this.currentData[this.sub].lastContent = this.content, this.currentData[this.sub].lastTime = t.getCurrentTime(), this.currentData[this.sub].dialog.push({
                    isSelf: !0,
                    content: t.tmp,
                    time: t.getCurrentTime()
                }), this.scrollBottom(), setTimeout(function () {
                    t.$ajax("http://www.tuling123.com/openapi/api?key=42d602c9a21b46d4bfb5a4c7c486a70c&info=" + t.tmp).then(function (e) {
                        t.currentData[t.sub].dialog.push({
                            isSelf: !1,
                            content: e.data.text,
                            time: t.getCurrentTime()
                        }), t.currentData[t.sub].lastContent = e.data.text, t.currentData[t.sub].lastTime = t.getCurrentTime(), t.scrollBottom()
                    }, function (t) {
                        console.log("error")
                    })
                }, 1e3), t.content = ""
            }, getCurrentTime: function () {
                var t = new Date;
                return t.getHours() + ":" + t.getMinutes()
            }, scrollBottom: function () {
                setTimeout(function () {
                    var t = document.getElementById("dialog"), e = window.innerHeight;
                    t.style.height = e - 121 + "px", t.scrollTop = t.scrollHeight
                }, 10)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "footers", data: function () {
            return {menuList: [{url: "/msg", name: "消息"}, {url: "/contact", name: "联系人"}, {url: "/other", name: "其他"}]}
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "headers",
        props: ["currentName", "currentData"],
        data: function () {
            return {
                headImg: n(3),
                more: !1,
                lists: [{url: "", name: "添加好友"}, {url: "", name: "添加群"}],
                fade: "fade",
                isShow: !0
            }
        },
        methods: {
            outputName: function (t) {
                if ("Msg" === t)return this.isShow = !0, "消息列表";
                if ("Contact" === t)return this.isShow = !0, "联系列表";
                if ("Dialog" === t) {
                    var e = this.$route.params.id;
                    this.isShow = !1;
                    for (var n = 0, s = this.currentData.length; n < s; n++)if (e === this.currentData[n].id)return this.currentData[n].descName
                }
                return "Other" === t ? (this.isShow = !1, "其他") : void 0
            }, isSwipeFunc: function () {
                this.$emit("swipeon", !0)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "information", data: function () {
            return {}
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "msg",
        props: ["currentData", "query"],
        data: function () {
            return {isSwipe: !1}
        },
        mounted: function () {
        },
        methods: {
            showName: function (t, e) {
                return "" === e ? t : e
            }, isUnread: function (t) {
                return t > 0
            }, remove: function (t) {
                this.currentData[t].isRemove = !0
            }, readFunc: function (t) {
                this.currentData[t].unreadNum = 0
            }, compare: function () {
                for (var t = void 0, e = 1; e < this.currentData.length; e++)this.currentData[e - 1].lastTime < this.currentData[e].lastTime && (t = this.currentData[e - 1], this.currentData[e - 1] = this.currentData[e], this.currentData[e] = t)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "notFound", data: function () {
            return {}
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "other", data: function () {
            return {}
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "search", data: function () {
            return {keywords: ""}
        }, methods: {
            sendDataFunc: function () {
                var t = this;
                this.$emit("change", t.keywords)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "setting",
        props: ["currentData"],
        data: function () {
            return {}
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "sidebar", data: function () {
            return {
                src: n(3),
                username: "Erdayo",
                desc: "233333",
                linkList: [{url: "", name: "link1"}, {url: "", name: "link2"}, {url: "", name: "link3"}, {
                    url: "",
                    name: "link4"
                }, {url: "", name: "link5"}],
                settingPath: "/setting"
            }
        }, methods: {
            swipeFunc: function () {
                this.$emit("swipeoff", !1)
            }
        }
    }
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, , , function (t, e, n) {
    n(47);
    var s = n(1)(n(35), n(70), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(54);
    var s = n(1)(n(36), n(79), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(49);
    var s = n(1)(n(37), n(73), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(50);
    var s = n(1)(n(38), n(75), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    var s = n(1)(n(39), n(74), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(52);
    var s = n(1)(n(40), n(77), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    var s = n(1)(n(41), n(72), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(51);
    var s = n(1)(n(42), n(76), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(53);
    var s = n(1)(n(43), n(78), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(46);
    var s = n(1)(n(44), n(69), null, null);
    t.exports = s.exports
}, function (t, e, n) {
    n(48);
    var s = n(1)(n(45), n(71), null, null);
    t.exports = s.exports
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {staticClass: "setting mt10"}, [t._v("\n  setting\n")])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "contact mt10"}, [n("ul", t._l(t.newInfo, function (e, s) {
                return n("li", {staticClass: "ovf category"}, [n("p", {
                    staticClass: "categoryName",
                    on: {
                        click: function (e) {
                            t.showCate(s)
                        }
                    }
                }, [e.isShow ? t._e() : n("label", [t._v(" → ")]), t._v(" "), e.isShow ? n("label", [t._v(" ↓ ")]) : t._e(), t._v(" "), n("span", [t._v(t._s(e.cate))])]), t._v(" "), n("ol", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShow,
                        expression: "items.isShow"
                    }]
                }, t._l(e.info, function (e, s) {
                    return n("li", {
                        staticClass: "link ovf", on: {
                            click: function (e) {
                                t.addMsg(s)
                            }
                        }
                    }, [n("router-link", {attrs: {to: e.url}}, [n("img", {
                        staticClass: "fl",
                        attrs: {src: e.src}
                    }), t._v(" "), n("span", {staticClass: "fl"}, [t._v(t._s(t.showName(e.nickName, e.descName)))]), t._v(" "), n("label", {staticClass: "fr"}, [t._v(t._s(t.isOnline(e.isOnline)))])])], 1)
                }))])
            }))])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "sidebar"}, [n("div", {staticClass: "first"}, [n("img", {
                staticClass: "headImg",
                attrs: {src: t.src}
            }), t._v(" "), n("div", {staticClass: "info"}, [n("p", {staticClass: "username"}, [t._v(t._s(t.username))]), t._v(" "), n("p", {staticClass: "desc"}, [t._v(t._s(t.desc))])])]), t._v(" "), n("div", {staticClass: "second"}, [n("ul", t._l(t.linkList, function (e) {
                return n("li", [t._v(t._s(e.name))])
            }))]), t._v(" "), n("div", {staticClass: "third"}, [n("ul", [n("li", {
                on: {
                    click: function (e) {
                        t.swipeFunc()
                    }
                }
            }, [n("router-link", {attrs: {to: t.settingPath}}, [t._v("setting")])], 1), t._v(" "), n("li", {
                on: {
                    click: function (e) {
                        t.swipeFunc()
                    }
                }
            }, [t._v("close")])])])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {staticClass: "notFound"}, [t._v("\n  404\n")])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "footer"}, [n("ul", t._l(t.menuList, function (e) {
                return n("li", [n("router-link", {attrs: {to: e.url}}, [t._v(t._s(e.name))])], 1)
            }))])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {staticClass: "info"})
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "header pad10"}, [t.isShow ? n("img", {
                    staticClass: "headImg fl",
                    attrs: {src: t.headImg},
                    on: {
                        click: function (e) {
                            t.isSwipeFunc()
                        }
                    }
                }) : t._e(), t._v(" "), t.isShow ? t._e() : n("a", {
                    staticClass: "back fl",
                    attrs: {href: "javascript:history.back()"}
                }, [t._v("←")]), t._v(" "), n("label", {staticClass: "headName"}, [t._v(t._s(t.outputName(t.currentName)))]), t._v(" "), t.isShow ? n("div", {staticClass: "plus fr"}, [n("span", {
                    on: {
                        click: function (e) {
                            t.more = !t.more
                        }
                    }
                }, [t._v("+")]), t._v(" "), n("transition", {
                    attrs: {
                        name: "fade",
                        "enter-active-class": "animated fadeIn"
                    }
                }, [t.more ? n("div", {staticClass: "moreList"}, [n("label", {staticClass: "tran fr"}), t._v(" "), n("ul", t._l(t.lists, function (e) {
                        return n("li", [n("router-link", {attrs: {to: e.url}}, [t._v(t._s(e.name))])], 1)
                    }))]) : t._e()])], 1) : t._e()])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "other mt10"}, [n("h1", [t._v("敬请期待")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "msg mt10"}, [n("ul", t._l(t.currentData, function (e, s) {
                return e.isRemove ? t._e() : n("li", {
                        on: {
                            click: function (e) {
                                t.readFunc(s)
                            }
                        }
                    }, [n("v-touch", {
                        class: {swipe: e.isSwipe}, on: {
                            swipeleft: function (t) {
                                e.isSwipe = !0
                            }, swiperight: function (t) {
                                e.isSwipe = !1
                            }
                        }
                    }, [n("router-link", {attrs: {to: e.url}}, [n("img", {
                        staticClass: "headImg fl",
                        attrs: {src: e.src}
                    }), t._v(" "), n("div", {staticClass: "personalInfo fl"}, [n("p", {staticClass: "name"}, [t._v(t._s(t.showName(e.nickName, e.descName)))]), t._v(" "), n("p", {staticClass: "content"}, [t._v(t._s(e.lastContent))])]), t._v(" "), n("div", {staticClass: "otherInfo fr"}, [n("span", [t._v(t._s(e.lastTime))]), t._v(" "), t.isUnread(e.unreadNum) ? n("span", {staticClass: "unread"}, [t._v(t._s(e.unreadNum))]) : t._e()])]), t._v(" "), n("div", {
                        staticClass: "del",
                        on: {
                            click: function (e) {
                                t.remove(s)
                            }
                        }
                    }, [t._v("删除")])], 1)], 1)
            }))])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "search mt10 pad10"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.keywords,
                    expression: "keywords"
                }],
                attrs: {type: "text", placeholder: "搜索"},
                domProps: {value: t.keywords},
                on: {
                    keyup: t.sendDataFunc, input: function (e) {
                        e.target.composing || (t.keywords = e.target.value)
                    }
                }
            })])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "dialog mt10"}, [n("div", {attrs: {id: "dialog"}}, [n("ul", t._l(t.newData, function (e) {
                return n("li", {staticClass: "obj ovf"}, [n("ol", t._l(e.dialog, function (s) {
                    return n("li", {
                        staticClass: "detail",
                        class: {txtR: s.isSelf}
                    }, [n("p", {staticClass: "time"}, [t._v(t._s(s.time))]), t._v(" "), n("div", {staticClass: "contents"}, [s.isSelf ? t._e() : n("img", {attrs: {src: e.src}}), t._v(" "), n("div", {staticClass: "info"}, [n("span"), t._v(" "), n("p", [t._v(t._s(s.content))])]), t._v(" "), s.isSelf ? n("img", {attrs: {src: t.selfImg}}) : t._e()])])
                }))])
            }))]), t._v(" "), n("div", {staticClass: "func ovf"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.content,
                    expression: "content"
                }],
                attrs: {type: "text", placeholder: "", autofocus: ""},
                domProps: {value: t.content},
                on: {
                    keyup: function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        t.updateInfo()
                    }, input: function (e) {
                        e.target.composing || (t.content = e.target.value)
                    }
                }
            }), t._v(" "), n("input", {
                attrs: {type: "submit", value: "发送"}, on: {
                    click: function (e) {
                        t.updateInfo()
                    }, keyup: function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        t.updateInfo()
                    }
                }
            })])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {attrs: {id: "app"}}, [n("v-touch", {
                staticClass: "touch", on: {
                    swipeleft: function (e) {
                        t.isSwipe = !1
                    }, swiperight: function (e) {
                        t.isSwipe = !0
                    }
                }
            }), t._v(" "), n("v-touch", {
                on: {
                    swipeleft: function (e) {
                        t.isSwipe = !1
                    }, swiperight: function (e) {
                        t.isSwipe = !0
                    }
                }
            }, [n("headers", {
                class: {swipe: t.isSwipe},
                attrs: {"current-name": t.$route.name, "current-data": t.sendData()},
                on: {swipeon: t.isSwipeFunc}
            }), t._v(" "), t.calcShow("Dialog,Other,Setting") ? n("search", {
                    class: {swipe: t.isSwipe},
                    on: {change: t.changeFunc}
                }) : t._e(), t._v(" "), n("sidebar", {
                class: {swipe: t.isSwipe},
                on: {swipeoff: t.isSwipeFunc}
            })], 1), t._v(" "), n("router-view", {
                class: {swipe: t.isSwipe},
                attrs: {"current-data": t.sendData()}
            }), t._v(" "), n("v-touch", {
                on: {
                    swipeleft: function (e) {
                        t.isSwipe = !1
                    }, swiperight: function (e) {
                        t.isSwipe = !0
                    }
                }
            }, [t.calcShow("Dialog,Other,Setting") ? n("footers", {class: {swipe: t.isSwipe}}) : t._e()], 1)], 1)
        }, staticRenderFns: []
    }
}], [33]);
//# sourceMappingURL=app.bcacfc12b177ffc4c02f.js.map