var Ec = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var G_ = Ec((we, xe) => {
  (function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      r(s);
    new MutationObserver((s) => {
      for (const i of s)
        if (i.type === 'childList')
          for (const o of i.addedNodes)
            o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
      const i = {};
      return (
        s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === 'use-credentials'
          ? (i.credentials = 'include')
          : s.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
        i
      );
    }
    function r(s) {
      if (s.ep) return;
      s.ep = !0;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  /**
   * @vue/shared v3.4.25
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function zi(e, t) {
    const n = new Set(e.split(','));
    return (r) => n.has(r);
  }
  const Ut = {},
    Bn = [],
    Ae = () => {},
    Tc = () => !1,
    Is = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Yi = (e) => e.startsWith('onUpdate:'),
    re = Object.assign,
    ki = (e, t) => {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    },
    Sc = Object.prototype.hasOwnProperty,
    Ot = (e, t) => Sc.call(e, t),
    pt = Array.isArray,
    zn = (e) => Pr(e) === '[object Map]',
    Es = (e) => Pr(e) === '[object Set]',
    Mo = (e) => Pr(e) === '[object Date]',
    wt = (e) => typeof e == 'function',
    se = (e) => typeof e == 'string',
    Ke = (e) => typeof e == 'symbol',
    Wt = (e) => e !== null && typeof e == 'object',
    ka = (e) => (Wt(e) || wt(e)) && wt(e.then) && wt(e.catch),
    Xa = Object.prototype.toString,
    Pr = (e) => Xa.call(e),
    Cc = (e) => Pr(e).slice(8, -1),
    Va = (e) => Pr(e) === '[object Object]',
    Xi = (e) =>
      se(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    pr = zi(
      ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    Ts = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    Ac = /-(\w)/g,
    Vn = Ts((e) => e.replace(Ac, (t, n) => (n ? n.toUpperCase() : ''))),
    Mc = /\B([A-Z])/g,
    Rn = Ts((e) => e.replace(Mc, '-$1').toLowerCase()),
    Ua = Ts((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    qs = Ts((e) => (e ? `on${Ua(e)}` : '')),
    cn = (e, t) => !Object.is(e, t),
    ss = (e, t) => {
      for (let n = 0; n < e.length; n++) e[n](t);
    },
    Ha = (e, t, n) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n,
      });
    },
    hi = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    };
  let Oo;
  const Ga = () =>
    Oo ||
    (Oo =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : {});
  function Vi(e) {
    if (pt(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n],
          s = se(r) ? Nc(r) : Vi(r);
        if (s) for (const i in s) t[i] = s[i];
      }
      return t;
    } else if (se(e) || Wt(e)) return e;
  }
  const Oc = /;(?![^(]*\))/g,
    Rc = /:([^]+)/,
    $c = /\/\*[^]*?\*\//g;
  function Nc(e) {
    const t = {};
    return (
      e
        .replace($c, '')
        .split(Oc)
        .forEach((n) => {
          if (n) {
            const r = n.split(Rc);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }),
      t
    );
  }
  function Ui(e) {
    let t = '';
    if (se(e)) t = e;
    else if (pt(e))
      for (let n = 0; n < e.length; n++) {
        const r = Ui(e[n]);
        r && (t += r + ' ');
      }
    else if (Wt(e)) for (const n in e) e[n] && (t += n + ' ');
    return t.trim();
  }
  const Pc =
      'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    Lc = zi(Pc);
  function Wa(e) {
    return !!e || e === '';
  }
  function Dc(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = Ss(e[r], t[r]);
    return n;
  }
  function Ss(e, t) {
    if (e === t) return !0;
    let n = Mo(e),
      r = Mo(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (((n = Ke(e)), (r = Ke(t)), n || r)) return e === t;
    if (((n = pt(e)), (r = pt(t)), n || r)) return n && r ? Dc(e, t) : !1;
    if (((n = Wt(e)), (r = Wt(t)), n || r)) {
      if (!n || !r) return !1;
      const s = Object.keys(e).length,
        i = Object.keys(t).length;
      if (s !== i) return !1;
      for (const o in e) {
        const a = e.hasOwnProperty(o),
          l = t.hasOwnProperty(o);
        if ((a && !l) || (!a && l) || !Ss(e[o], t[o])) return !1;
      }
    }
    return String(e) === String(t);
  }
  function Ka(e, t) {
    return e.findIndex((n) => Ss(n, t));
  }
  const jc = (e) =>
      se(e)
        ? e
        : e == null
        ? ''
        : pt(e) || (Wt(e) && (e.toString === Xa || !wt(e.toString)))
        ? JSON.stringify(e, qa, 2)
        : String(e),
    qa = (e, t) =>
      t && t.__v_isRef
        ? qa(e, t.value)
        : zn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], i) => ((n[Zs(r, i) + ' =>'] = s), n),
              {}
            ),
          }
        : Es(t)
        ? { [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n)) }
        : Ke(t)
        ? Zs(t)
        : Wt(t) && !pt(t) && !Va(t)
        ? String(t)
        : t,
    Zs = (e, t = '') => {
      var n;
      return Ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
  /**
   * @vue/reactivity v3.4.25
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let _e;
  class Fc {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = _e),
        !t &&
          _e &&
          (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const n = _e;
        try {
          return (_e = this), t();
        } finally {
          _e = n;
        }
      }
    }
    on() {
      _e = this;
    }
    off() {
      _e = this.parent;
    }
    stop(t) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s &&
            s !== this &&
            ((this.parent.scopes[this.index] = s), (s.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  function Bc(e, t = _e) {
    t && t.active && t.effects.push(e);
  }
  function Za() {
    return _e;
  }
  function zc(e) {
    _e && _e.cleanups.push(e);
  }
  let Tn;
  class Hi {
    constructor(t, n, r, s) {
      (this.fn = t),
        (this.trigger = n),
        (this.scheduler = r),
        (this.active = !0),
        (this.deps = []),
        (this._dirtyLevel = 4),
        (this._trackId = 0),
        (this._runnings = 0),
        (this._shouldSchedule = !1),
        (this._depsLength = 0),
        Bc(this, s);
    }
    get dirty() {
      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
        (this._dirtyLevel = 1), pn();
        for (let t = 0; t < this._depsLength; t++) {
          const n = this.deps[t];
          if (n.computed && (Yc(n.computed), this._dirtyLevel >= 4)) break;
        }
        this._dirtyLevel === 1 && (this._dirtyLevel = 0), gn();
      }
      return this._dirtyLevel >= 4;
    }
    set dirty(t) {
      this._dirtyLevel = t ? 4 : 0;
    }
    run() {
      if (((this._dirtyLevel = 0), !this.active)) return this.fn();
      let t = ln,
        n = Tn;
      try {
        return (ln = !0), (Tn = this), this._runnings++, Ro(this), this.fn();
      } finally {
        $o(this), this._runnings--, (Tn = n), (ln = t);
      }
    }
    stop() {
      var t;
      this.active &&
        (Ro(this),
        $o(this),
        (t = this.onStop) == null || t.call(this),
        (this.active = !1));
    }
  }
  function Yc(e) {
    return e.value;
  }
  function Ro(e) {
    e._trackId++, (e._depsLength = 0);
  }
  function $o(e) {
    if (e.deps.length > e._depsLength) {
      for (let t = e._depsLength; t < e.deps.length; t++) Ja(e.deps[t], e);
      e.deps.length = e._depsLength;
    }
  }
  function Ja(e, t) {
    const n = e.get(t);
    n !== void 0 &&
      t._trackId !== n &&
      (e.delete(t), e.size === 0 && e.cleanup());
  }
  let ln = !0,
    di = 0;
  const Qa = [];
  function pn() {
    Qa.push(ln), (ln = !1);
  }
  function gn() {
    const e = Qa.pop();
    ln = e === void 0 ? !0 : e;
  }
  function Gi() {
    di++;
  }
  function Wi() {
    for (di--; !di && pi.length; ) pi.shift()();
  }
  function tl(e, t, n) {
    if (t.get(e) !== e._trackId) {
      t.set(e, e._trackId);
      const r = e.deps[e._depsLength];
      r !== t
        ? (r && Ja(r, e), (e.deps[e._depsLength++] = t))
        : e._depsLength++;
    }
  }
  const pi = [];
  function el(e, t, n) {
    Gi();
    for (const r of e.keys()) {
      let s;
      r._dirtyLevel < t &&
        (s ?? (s = e.get(r) === r._trackId)) &&
        (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        (r._dirtyLevel = t)),
        r._shouldSchedule &&
          (s ?? (s = e.get(r) === r._trackId)) &&
          (r.trigger(),
          (!r._runnings || r.allowRecurse) &&
            r._dirtyLevel !== 2 &&
            ((r._shouldSchedule = !1), r.scheduler && pi.push(r.scheduler)));
    }
    Wi();
  }
  const nl = (e, t) => {
      const n = new Map();
      return (n.cleanup = e), (n.computed = t), n;
    },
    gi = new WeakMap(),
    Sn = Symbol(''),
    mi = Symbol('');
  function me(e, t, n) {
    if (ln && Tn) {
      let r = gi.get(e);
      r || gi.set(e, (r = new Map()));
      let s = r.get(n);
      s || r.set(n, (s = nl(() => r.delete(n)))), tl(Tn, s);
    }
  }
  function We(e, t, n, r, s, i) {
    const o = gi.get(e);
    if (!o) return;
    let a = [];
    if (t === 'clear') a = [...o.values()];
    else if (n === 'length' && pt(e)) {
      const l = Number(r);
      o.forEach((c, h) => {
        (h === 'length' || (!Ke(h) && h >= l)) && a.push(c);
      });
    } else
      switch ((n !== void 0 && a.push(o.get(n)), t)) {
        case 'add':
          pt(e)
            ? Xi(n) && a.push(o.get('length'))
            : (a.push(o.get(Sn)), zn(e) && a.push(o.get(mi)));
          break;
        case 'delete':
          pt(e) || (a.push(o.get(Sn)), zn(e) && a.push(o.get(mi)));
          break;
        case 'set':
          zn(e) && a.push(o.get(Sn));
          break;
      }
    Gi();
    for (const l of a) l && el(l, 4);
    Wi();
  }
  const kc = zi('__proto__,__v_isRef,__isVue'),
    rl = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== 'arguments' && e !== 'caller')
        .map((e) => Symbol[e])
        .filter(Ke)
    ),
    No = Xc();
  function Xc() {
    const e = {};
    return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
        e[t] = function (...n) {
          const r = jt(this);
          for (let i = 0, o = this.length; i < o; i++) me(r, 'get', i + '');
          const s = r[t](...n);
          return s === -1 || s === !1 ? r[t](...n.map(jt)) : s;
        };
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
        e[t] = function (...n) {
          pn(), Gi();
          const r = jt(this)[t].apply(this, n);
          return Wi(), gn(), r;
        };
      }),
      e
    );
  }
  function Vc(e) {
    Ke(e) || (e = String(e));
    const t = jt(this);
    return me(t, 'has', e), t.hasOwnProperty(e);
  }
  class sl {
    constructor(t = !1, n = !1) {
      (this._isReadonly = t), (this._isShallow = n);
    }
    get(t, n, r) {
      const s = this._isReadonly,
        i = this._isShallow;
      if (n === '__v_isReactive') return !s;
      if (n === '__v_isReadonly') return s;
      if (n === '__v_isShallow') return i;
      if (n === '__v_raw')
        return r === (s ? (i ? rf : ll) : i ? al : ol).get(t) ||
          Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
          ? t
          : void 0;
      const o = pt(t);
      if (!s) {
        if (o && Ot(No, n)) return Reflect.get(No, n, r);
        if (n === 'hasOwnProperty') return Vc;
      }
      const a = Reflect.get(t, n, r);
      return (Ke(n) ? rl.has(n) : kc(n)) || (s || me(t, 'get', n), i)
        ? a
        : ue(a)
        ? o && Xi(n)
          ? a
          : a.value
        : Wt(a)
        ? s
          ? ul(a)
          : As(a)
        : a;
    }
  }
  class il extends sl {
    constructor(t = !1) {
      super(!1, t);
    }
    set(t, n, r, s) {
      let i = t[n];
      if (!this._isShallow) {
        const l = br(i);
        if (
          (!fs(r) && !br(r) && ((i = jt(i)), (r = jt(r))),
          !pt(t) && ue(i) && !ue(r))
        )
          return l ? !1 : ((i.value = r), !0);
      }
      const o = pt(t) && Xi(n) ? Number(n) < t.length : Ot(t, n),
        a = Reflect.set(t, n, r, s);
      return (
        t === jt(s) &&
          (o ? cn(r, i) && We(t, 'set', n, r) : We(t, 'add', n, r)),
        a
      );
    }
    deleteProperty(t, n) {
      const r = Ot(t, n);
      t[n];
      const s = Reflect.deleteProperty(t, n);
      return s && r && We(t, 'delete', n, void 0), s;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!Ke(n) || !rl.has(n)) && me(t, 'has', n), r;
    }
    ownKeys(t) {
      return me(t, 'iterate', pt(t) ? 'length' : Sn), Reflect.ownKeys(t);
    }
  }
  class Uc extends sl {
    constructor(t = !1) {
      super(!0, t);
    }
    set(t, n) {
      return !0;
    }
    deleteProperty(t, n) {
      return !0;
    }
  }
  const Hc = new il(),
    Gc = new Uc(),
    Wc = new il(!0),
    Ki = (e) => e,
    Cs = (e) => Reflect.getPrototypeOf(e);
  function Hr(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = jt(e),
      i = jt(t);
    n || (cn(t, i) && me(s, 'get', t), me(s, 'get', i));
    const { has: o } = Cs(s),
      a = r ? Ki : n ? Ji : wr;
    if (o.call(s, t)) return a(e.get(t));
    if (o.call(s, i)) return a(e.get(i));
    e !== s && e.get(t);
  }
  function Gr(e, t = !1) {
    const n = this.__v_raw,
      r = jt(n),
      s = jt(e);
    return (
      t || (cn(e, s) && me(r, 'has', e), me(r, 'has', s)),
      e === s ? n.has(e) : n.has(e) || n.has(s)
    );
  }
  function Wr(e, t = !1) {
    return (
      (e = e.__v_raw), !t && me(jt(e), 'iterate', Sn), Reflect.get(e, 'size', e)
    );
  }
  function Po(e) {
    e = jt(e);
    const t = jt(this);
    return Cs(t).has.call(t, e) || (t.add(e), We(t, 'add', e, e)), this;
  }
  function Lo(e, t) {
    t = jt(t);
    const n = jt(this),
      { has: r, get: s } = Cs(n);
    let i = r.call(n, e);
    i || ((e = jt(e)), (i = r.call(n, e)));
    const o = s.call(n, e);
    return (
      n.set(e, t), i ? cn(t, o) && We(n, 'set', e, t) : We(n, 'add', e, t), this
    );
  }
  function Do(e) {
    const t = jt(this),
      { has: n, get: r } = Cs(t);
    let s = n.call(t, e);
    s || ((e = jt(e)), (s = n.call(t, e))), r && r.call(t, e);
    const i = t.delete(e);
    return s && We(t, 'delete', e, void 0), i;
  }
  function jo() {
    const e = jt(this),
      t = e.size !== 0,
      n = e.clear();
    return t && We(e, 'clear', void 0, void 0), n;
  }
  function Kr(e, t) {
    return function (r, s) {
      const i = this,
        o = i.__v_raw,
        a = jt(o),
        l = t ? Ki : e ? Ji : wr;
      return (
        !e && me(a, 'iterate', Sn),
        o.forEach((c, h) => r.call(s, l(c), l(h), i))
      );
    };
  }
  function qr(e, t, n) {
    return function (...r) {
      const s = this.__v_raw,
        i = jt(s),
        o = zn(i),
        a = e === 'entries' || (e === Symbol.iterator && o),
        l = e === 'keys' && o,
        c = s[e](...r),
        h = n ? Ki : t ? Ji : wr;
      return (
        !t && me(i, 'iterate', l ? mi : Sn),
        {
          next() {
            const { value: d, done: w } = c.next();
            return w
              ? { value: d, done: w }
              : { value: a ? [h(d[0]), h(d[1])] : h(d), done: w };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function tn(e) {
    return function (...t) {
      return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
    };
  }
  function Kc() {
    const e = {
        get(i) {
          return Hr(this, i);
        },
        get size() {
          return Wr(this);
        },
        has: Gr,
        add: Po,
        set: Lo,
        delete: Do,
        clear: jo,
        forEach: Kr(!1, !1),
      },
      t = {
        get(i) {
          return Hr(this, i, !1, !0);
        },
        get size() {
          return Wr(this);
        },
        has: Gr,
        add: Po,
        set: Lo,
        delete: Do,
        clear: jo,
        forEach: Kr(!1, !0),
      },
      n = {
        get(i) {
          return Hr(this, i, !0);
        },
        get size() {
          return Wr(this, !0);
        },
        has(i) {
          return Gr.call(this, i, !0);
        },
        add: tn('add'),
        set: tn('set'),
        delete: tn('delete'),
        clear: tn('clear'),
        forEach: Kr(!0, !1),
      },
      r = {
        get(i) {
          return Hr(this, i, !0, !0);
        },
        get size() {
          return Wr(this, !0);
        },
        has(i) {
          return Gr.call(this, i, !0);
        },
        add: tn('add'),
        set: tn('set'),
        delete: tn('delete'),
        clear: tn('clear'),
        forEach: Kr(!0, !0),
      };
    return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
        (e[i] = qr(i, !1, !1)),
          (n[i] = qr(i, !0, !1)),
          (t[i] = qr(i, !1, !0)),
          (r[i] = qr(i, !0, !0));
      }),
      [e, n, t, r]
    );
  }
  const [qc, Zc, Jc, Qc] = Kc();
  function qi(e, t) {
    const n = t ? (e ? Qc : Jc) : e ? Zc : qc;
    return (r, s, i) =>
      s === '__v_isReactive'
        ? !e
        : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
        ? r
        : Reflect.get(Ot(n, s) && s in r ? n : r, s, i);
  }
  const tf = { get: qi(!1, !1) },
    ef = { get: qi(!1, !0) },
    nf = { get: qi(!0, !1) },
    ol = new WeakMap(),
    al = new WeakMap(),
    ll = new WeakMap(),
    rf = new WeakMap();
  function sf(e) {
    switch (e) {
      case 'Object':
      case 'Array':
        return 1;
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2;
      default:
        return 0;
    }
  }
  function of(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : sf(Cc(e));
  }
  function As(e) {
    return br(e) ? e : Zi(e, !1, Hc, tf, ol);
  }
  function af(e) {
    return Zi(e, !1, Wc, ef, al);
  }
  function ul(e) {
    return Zi(e, !0, Gc, nf, ll);
  }
  function Zi(e, t, n, r, s) {
    if (!Wt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = s.get(e);
    if (i) return i;
    const o = of(e);
    if (o === 0) return e;
    const a = new Proxy(e, o === 2 ? r : n);
    return s.set(e, a), a;
  }
  function gr(e) {
    return br(e) ? gr(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function br(e) {
    return !!(e && e.__v_isReadonly);
  }
  function fs(e) {
    return !!(e && e.__v_isShallow);
  }
  function cl(e) {
    return e ? !!e.__v_raw : !1;
  }
  function jt(e) {
    const t = e && e.__v_raw;
    return t ? jt(t) : e;
  }
  function lf(e) {
    return Object.isExtensible(e) && Ha(e, '__v_skip', !0), e;
  }
  const wr = (e) => (Wt(e) ? As(e) : e),
    Ji = (e) => (Wt(e) ? ul(e) : e);
  class fl {
    constructor(t, n, r, s) {
      (this.getter = t),
        (this._setter = n),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !1),
        (this.effect = new Hi(
          () => t(this._value),
          () => is(this, this.effect._dirtyLevel === 2 ? 2 : 3)
        )),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !s),
        (this.__v_isReadonly = r);
    }
    get value() {
      const t = jt(this);
      return (
        (!t._cacheable || t.effect.dirty) &&
          cn(t._value, (t._value = t.effect.run())) &&
          is(t, 4),
        hl(t),
        t.effect._dirtyLevel >= 2 && is(t, 2),
        t._value
      );
    }
    set value(t) {
      this._setter(t);
    }
    get _dirty() {
      return this.effect.dirty;
    }
    set _dirty(t) {
      this.effect.dirty = t;
    }
  }
  function uf(e, t, n = !1) {
    let r, s;
    const i = wt(e);
    return (
      i ? ((r = e), (s = Ae)) : ((r = e.get), (s = e.set)),
      new fl(r, s, i || !s, n)
    );
  }
  function hl(e) {
    var t;
    ln &&
      Tn &&
      ((e = jt(e)),
      tl(
        Tn,
        (t = e.dep) != null
          ? t
          : (e.dep = nl(() => (e.dep = void 0), e instanceof fl ? e : void 0))
      ));
  }
  function is(e, t = 4, n) {
    e = jt(e);
    const r = e.dep;
    r && el(r, t);
  }
  function ue(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function kt(e) {
    return cf(e, !1);
  }
  function cf(e, t) {
    return ue(e) ? e : new ff(e, t);
  }
  class ff {
    constructor(t, n) {
      (this.__v_isShallow = n),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = n ? t : jt(t)),
        (this._value = n ? t : wr(t));
    }
    get value() {
      return hl(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || fs(t) || br(t);
      (t = n ? t : jt(t)),
        cn(t, this._rawValue) &&
          ((this._rawValue = t), (this._value = n ? t : wr(t)), is(this, 4));
    }
  }
  function ct(e) {
    return ue(e) ? e.value : e;
  }
  const hf = {
    get: (e, t, n) => ct(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const s = e[t];
      return ue(s) && !ue(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
    },
  };
  function dl(e) {
    return gr(e) ? e : new Proxy(e, hf);
  }
  /**
   * @vue/runtime-core v3.4.25
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function un(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (s) {
      Ms(s, t, n);
    }
  }
  function $e(e, t, n, r) {
    if (wt(e)) {
      const s = un(e, t, n, r);
      return (
        s &&
          ka(s) &&
          s.catch((i) => {
            Ms(i, t, n);
          }),
        s
      );
    }
    if (pt(e)) {
      const s = [];
      for (let i = 0; i < e.length; i++) s.push($e(e[i], t, n, r));
      return s;
    }
  }
  function Ms(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const o = t.proxy,
        a = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; i; ) {
        const c = i.ec;
        if (c) {
          for (let h = 0; h < c.length; h++) if (c[h](e, o, a) === !1) return;
        }
        i = i.parent;
      }
      const l = t.appContext.config.errorHandler;
      if (l) {
        pn(), un(l, null, 10, [e, o, a]), gn();
        return;
      }
    }
    df(e, n, s, r);
  }
  function df(e, t, n, r = !0) {
    console.error(e);
  }
  let xr = !1,
    yi = !1;
  const ie = [];
  let je = 0;
  const Yn = [];
  let en = null,
    wn = 0;
  const pl = Promise.resolve();
  let Qi = null;
  function pf(e) {
    const t = Qi || pl;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function gf(e) {
    let t = je + 1,
      n = ie.length;
    for (; t < n; ) {
      const r = (t + n) >>> 1,
        s = ie[r],
        i = Ir(s);
      i < e || (i === e && s.pre) ? (t = r + 1) : (n = r);
    }
    return t;
  }
  function to(e) {
    (!ie.length || !ie.includes(e, xr && e.allowRecurse ? je + 1 : je)) &&
      (e.id == null ? ie.push(e) : ie.splice(gf(e.id), 0, e), gl());
  }
  function gl() {
    !xr && !yi && ((yi = !0), (Qi = pl.then(yl)));
  }
  function mf(e) {
    const t = ie.indexOf(e);
    t > je && ie.splice(t, 1);
  }
  function yf(e) {
    pt(e)
      ? Yn.push(...e)
      : (!en || !en.includes(e, e.allowRecurse ? wn + 1 : wn)) && Yn.push(e),
      gl();
  }
  function Fo(e, t, n = xr ? je + 1 : 0) {
    for (; n < ie.length; n++) {
      const r = ie[n];
      if (r && r.pre) {
        if (e && r.id !== e.uid) continue;
        ie.splice(n, 1), n--, r();
      }
    }
  }
  function ml(e) {
    if (Yn.length) {
      const t = [...new Set(Yn)].sort((n, r) => Ir(n) - Ir(r));
      if (((Yn.length = 0), en)) {
        en.push(...t);
        return;
      }
      for (en = t, wn = 0; wn < en.length; wn++) en[wn]();
      (en = null), (wn = 0);
    }
  }
  const Ir = (e) => (e.id == null ? 1 / 0 : e.id),
    vf = (e, t) => {
      const n = Ir(e) - Ir(t);
      if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1;
      }
      return n;
    };
  function yl(e) {
    (yi = !1), (xr = !0), ie.sort(vf);
    try {
      for (je = 0; je < ie.length; je++) {
        const t = ie[je];
        t && t.active !== !1 && un(t, null, 14);
      }
    } finally {
      (je = 0),
        (ie.length = 0),
        ml(),
        (xr = !1),
        (Qi = null),
        (ie.length || Yn.length) && yl();
    }
  }
  function _f(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Ut;
    let s = n;
    const i = t.startsWith('update:'),
      o = i && t.slice(7);
    if (o && o in r) {
      const h = `${o === 'modelValue' ? 'model' : o}Modifiers`,
        { number: d, trim: w } = r[h] || Ut;
      w && (s = n.map((b) => (se(b) ? b.trim() : b))), d && (s = n.map(hi));
    }
    let a,
      l = r[(a = qs(t))] || r[(a = qs(Vn(t)))];
    !l && i && (l = r[(a = qs(Rn(t)))]), l && $e(l, e, 6, s);
    const c = r[a + 'Once'];
    if (c) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      (e.emitted[a] = !0), $e(c, e, 6, s);
    }
  }
  function vl(e, t, n = !1) {
    const r = t.emitsCache,
      s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let o = {},
      a = !1;
    if (!wt(e)) {
      const l = (c) => {
        const h = vl(c, t, !0);
        h && ((a = !0), re(o, h));
      };
      !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l);
    }
    return !i && !a
      ? (Wt(e) && r.set(e, null), null)
      : (pt(i) ? i.forEach((l) => (o[l] = null)) : re(o, i),
        Wt(e) && r.set(e, o),
        o);
  }
  function Os(e, t) {
    return !e || !Is(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, '')),
        Ot(e, t[0].toLowerCase() + t.slice(1)) || Ot(e, Rn(t)) || Ot(e, t));
  }
  let be = null,
    Rs = null;
  function hs(e) {
    const t = be;
    return (be = e), (Rs = (e && e.type.__scopeId) || null), t;
  }
  function bf(e) {
    Rs = e;
  }
  function wf() {
    Rs = null;
  }
  function xf(e, t = be, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
      r._d && Wo(-1);
      const i = hs(t);
      let o;
      try {
        o = e(...s);
      } finally {
        hs(i), r._d && Wo(1);
      }
      return o;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Js(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [i],
        slots: o,
        attrs: a,
        emit: l,
        render: c,
        renderCache: h,
        props: d,
        data: w,
        setupState: b,
        ctx: I,
        inheritAttrs: M,
      } = e,
      Y = hs(e);
    let G, st;
    try {
      if (n.shapeFlag & 4) {
        const yt = s || r,
          O = yt;
        (G = De(c.call(O, yt, h, d, b, w, I))), (st = a);
      } else {
        const yt = t;
        (G = De(
          yt.length > 1 ? yt(d, { attrs: a, slots: o, emit: l }) : yt(d, null)
        )),
          (st = t.props ? a : If(a));
      }
    } catch (yt) {
      (vr.length = 0), Ms(yt, e, 1), (G = It(Er));
    }
    let ut = G;
    if (st && M !== !1) {
      const yt = Object.keys(st),
        { shapeFlag: O } = ut;
      yt.length &&
        O & 7 &&
        (i && yt.some(Yi) && (st = Ef(st, i)), (ut = Un(ut, st)));
    }
    return (
      n.dirs &&
        ((ut = Un(ut)), (ut.dirs = ut.dirs ? ut.dirs.concat(n.dirs) : n.dirs)),
      n.transition && (ut.transition = n.transition),
      (G = ut),
      hs(Y),
      G
    );
  }
  const If = (e) => {
      let t;
      for (const n in e)
        (n === 'class' || n === 'style' || Is(n)) &&
          ((t || (t = {}))[n] = e[n]);
      return t;
    },
    Ef = (e, t) => {
      const n = {};
      for (const r in e) (!Yi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
      return n;
    };
  function Tf(e, t, n) {
    const { props: r, children: s, component: i } = e,
      { props: o, children: a, patchFlag: l } = t,
      c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? Bo(r, o, c) : !!o;
      if (l & 8) {
        const h = t.dynamicProps;
        for (let d = 0; d < h.length; d++) {
          const w = h[d];
          if (o[w] !== r[w] && !Os(c, w)) return !0;
        }
      }
    } else
      return (s || a) && (!a || !a.$stable)
        ? !0
        : r === o
        ? !1
        : r
        ? o
          ? Bo(r, o, c)
          : !0
        : !!o;
    return !1;
  }
  function Bo(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (t[i] !== e[i] && !Os(n, i)) return !0;
    }
    return !1;
  }
  function Sf({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (
        (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      )
        ((e = t.vnode).el = n), (t = t.parent);
      else break;
    }
  }
  const Cf = Symbol.for('v-ndc'),
    Af = (e) => e.__isSuspense;
  function Mf(e, t) {
    t && t.pendingBranch
      ? pt(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : yf(e);
  }
  const Of = Symbol.for('v-scx'),
    Rf = () => as(Of);
  function $s(e, t) {
    return eo(e, null, t);
  }
  const Zr = {};
  function Be(e, t, n) {
    return eo(e, t, n);
  }
  function eo(
    e,
    t,
    { immediate: n, deep: r, flush: s, once: i, onTrack: o, onTrigger: a } = Ut
  ) {
    if (t && i) {
      const k = t;
      t = (...q) => {
        k(...q), O();
      };
    }
    const l = le,
      c = (k) => (r === !0 ? k : In(k, r === !1 ? 1 : void 0));
    let h,
      d = !1,
      w = !1;
    if (
      (ue(e)
        ? ((h = () => e.value), (d = fs(e)))
        : gr(e)
        ? ((h = () => c(e)), (d = !0))
        : pt(e)
        ? ((w = !0),
          (d = e.some((k) => gr(k) || fs(k))),
          (h = () =>
            e.map((k) => {
              if (ue(k)) return k.value;
              if (gr(k)) return c(k);
              if (wt(k)) return un(k, l, 2);
            })))
        : wt(e)
        ? t
          ? (h = () => un(e, l, 2))
          : (h = () => (b && b(), $e(e, l, 3, [I])))
        : (h = Ae),
      t && r)
    ) {
      const k = h;
      h = () => In(k());
    }
    let b,
      I = (k) => {
        b = ut.onStop = () => {
          un(k, l, 4), (b = ut.onStop = void 0);
        };
      },
      M;
    if (Ls)
      if (
        ((I = Ae),
        t ? n && $e(t, l, 3, [h(), w ? [] : void 0, I]) : h(),
        s === 'sync')
      ) {
        const k = Rf();
        M = k.__watcherHandles || (k.__watcherHandles = []);
      } else return Ae;
    let Y = w ? new Array(e.length).fill(Zr) : Zr;
    const G = () => {
      if (!(!ut.active || !ut.dirty))
        if (t) {
          const k = ut.run();
          (r || d || (w ? k.some((q, it) => cn(q, Y[it])) : cn(k, Y))) &&
            (b && b(),
            $e(t, l, 3, [k, Y === Zr ? void 0 : w && Y[0] === Zr ? [] : Y, I]),
            (Y = k));
        } else ut.run();
    };
    G.allowRecurse = !!t;
    let st;
    s === 'sync'
      ? (st = G)
      : s === 'post'
      ? (st = () => he(G, l && l.suspense))
      : ((G.pre = !0), l && (G.id = l.uid), (st = () => to(G)));
    const ut = new Hi(h, Ae, st),
      yt = Za(),
      O = () => {
        ut.stop(), yt && ki(yt.effects, ut);
      };
    return (
      t
        ? n
          ? G()
          : (Y = ut.run())
        : s === 'post'
        ? he(ut.run.bind(ut), l && l.suspense)
        : ut.run(),
      M && M.push(O),
      O
    );
  }
  function $f(e, t, n) {
    const r = this.proxy,
      s = se(e) ? (e.includes('.') ? _l(r, e) : () => r[e]) : e.bind(r, r);
    let i;
    wt(t) ? (i = t) : ((i = t.handler), (n = t));
    const o = Lr(this),
      a = eo(s, i.bind(r), n);
    return o(), a;
  }
  function _l(e, t) {
    const n = t.split('.');
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++) r = r[n[s]];
      return r;
    };
  }
  function In(e, t, n = 0, r) {
    if (!Wt(e) || e.__v_skip) return e;
    if (t && t > 0) {
      if (n >= t) return e;
      n++;
    }
    if (((r = r || new Set()), r.has(e))) return e;
    if ((r.add(e), ue(e))) In(e.value, t, n, r);
    else if (pt(e)) for (let s = 0; s < e.length; s++) In(e[s], t, n, r);
    else if (Es(e) || zn(e))
      e.forEach((s) => {
        In(s, t, n, r);
      });
    else if (Va(e)) for (const s in e) In(e[s], t, n, r);
    return e;
  }
  function Ct(e, t) {
    if (be === null) return e;
    const n = Ds(be) || be.proxy,
      r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
      let [i, o, a, l = Ut] = t[s];
      i &&
        (wt(i) && (i = { mounted: i, updated: i }),
        i.deep && In(o),
        r.push({
          dir: i,
          instance: n,
          value: o,
          oldValue: void 0,
          arg: a,
          modifiers: l,
        }));
    }
    return e;
  }
  function yn(e, t, n, r) {
    const s = e.dirs,
      i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
      const a = s[o];
      i && (a.oldValue = i[o].value);
      let l = a.dir[r];
      l && (pn(), $e(l, n, 8, [e.el, a, e, t]), gn());
    }
  }
  /*! #__NO_SIDE_EFFECTS__ */ function mn(e, t) {
    return wt(e) ? re({ name: e.name }, t, { setup: e }) : e;
  }
  const os = (e) => !!e.type.__asyncLoader,
    bl = (e) => e.type.__isKeepAlive;
  function Nf(e, t) {
    wl(e, 'a', t);
  }
  function Pf(e, t) {
    wl(e, 'da', t);
  }
  function wl(e, t, n = le) {
    const r =
      e.__wdc ||
      (e.__wdc = () => {
        let s = n;
        for (; s; ) {
          if (s.isDeactivated) return;
          s = s.parent;
        }
        return e();
      });
    if ((Ns(t, r, n), n)) {
      let s = n.parent;
      for (; s && s.parent; )
        bl(s.parent.vnode) && Lf(r, t, n, s), (s = s.parent);
    }
  }
  function Lf(e, t, n, r) {
    const s = Ns(t, e, r, !0);
    xl(() => {
      ki(r[t], s);
    }, n);
  }
  function Ns(e, t, n = le, r = !1) {
    if (n) {
      const s = n[e] || (n[e] = []),
        i =
          t.__weh ||
          (t.__weh = (...o) => {
            if (n.isUnmounted) return;
            pn();
            const a = Lr(n),
              l = $e(t, n, e, o);
            return a(), gn(), l;
          });
      return r ? s.unshift(i) : s.push(i), i;
    }
  }
  const qe =
      (e) =>
      (t, n = le) =>
        (!Ls || e === 'sp') && Ns(e, (...r) => t(...r), n),
    Df = qe('bm'),
    no = qe('m'),
    jf = qe('bu'),
    Ff = qe('u'),
    Bf = qe('bum'),
    xl = qe('um'),
    zf = qe('sp'),
    Yf = qe('rtg'),
    kf = qe('rtc');
  function Xf(e, t = le) {
    Ns('ec', e, t);
  }
  const vi = (e) => (e ? (jl(e) ? Ds(e) || e.proxy : vi(e.parent)) : null),
    mr = re(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => vi(e.parent),
      $root: (e) => vi(e.root),
      $emit: (e) => e.emit,
      $options: (e) => ro(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          (e.effect.dirty = !0), to(e.update);
        }),
      $nextTick: (e) => e.n || (e.n = pf.bind(e.proxy)),
      $watch: (e) => $f.bind(e),
    }),
    Qs = (e, t) => e !== Ut && !e.__isScriptSetup && Ot(e, t),
    Vf = {
      get({ _: e }, t) {
        if (t === '__v_skip') return !0;
        const {
          ctx: n,
          setupState: r,
          data: s,
          props: i,
          accessCache: o,
          type: a,
          appContext: l,
        } = e;
        let c;
        if (t[0] !== '$') {
          const b = o[t];
          if (b !== void 0)
            switch (b) {
              case 1:
                return r[t];
              case 2:
                return s[t];
              case 4:
                return n[t];
              case 3:
                return i[t];
            }
          else {
            if (Qs(r, t)) return (o[t] = 1), r[t];
            if (s !== Ut && Ot(s, t)) return (o[t] = 2), s[t];
            if ((c = e.propsOptions[0]) && Ot(c, t)) return (o[t] = 3), i[t];
            if (n !== Ut && Ot(n, t)) return (o[t] = 4), n[t];
            _i && (o[t] = 0);
          }
        }
        const h = mr[t];
        let d, w;
        if (h) return t === '$attrs' && me(e.attrs, 'get', ''), h(e);
        if ((d = a.__cssModules) && (d = d[t])) return d;
        if (n !== Ut && Ot(n, t)) return (o[t] = 4), n[t];
        if (((w = l.config.globalProperties), Ot(w, t))) return w[t];
      },
      set({ _: e }, t, n) {
        const { data: r, setupState: s, ctx: i } = e;
        return Qs(s, t)
          ? ((s[t] = n), !0)
          : r !== Ut && Ot(r, t)
          ? ((r[t] = n), !0)
          : Ot(e.props, t) || (t[0] === '$' && t.slice(1) in e)
          ? !1
          : ((i[t] = n), !0);
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: n,
            ctx: r,
            appContext: s,
            propsOptions: i,
          },
        },
        o
      ) {
        let a;
        return (
          !!n[o] ||
          (e !== Ut && Ot(e, o)) ||
          Qs(t, o) ||
          ((a = i[0]) && Ot(a, o)) ||
          Ot(r, o) ||
          Ot(mr, o) ||
          Ot(s.config.globalProperties, o)
        );
      },
      defineProperty(e, t, n) {
        return (
          n.get != null
            ? (e._.accessCache[t] = 0)
            : Ot(n, 'value') && this.set(e, t, n.value, null),
          Reflect.defineProperty(e, t, n)
        );
      },
    };
  function zo(e) {
    return pt(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
  }
  let _i = !0;
  function Uf(e) {
    const t = ro(e),
      n = e.proxy,
      r = e.ctx;
    (_i = !1), t.beforeCreate && Yo(t.beforeCreate, e, 'bc');
    const {
      data: s,
      computed: i,
      methods: o,
      watch: a,
      provide: l,
      inject: c,
      created: h,
      beforeMount: d,
      mounted: w,
      beforeUpdate: b,
      updated: I,
      activated: M,
      deactivated: Y,
      beforeDestroy: G,
      beforeUnmount: st,
      destroyed: ut,
      unmounted: yt,
      render: O,
      renderTracked: k,
      renderTriggered: q,
      errorCaptured: it,
      serverPrefetch: C,
      expose: z,
      inheritAttrs: H,
      components: J,
      directives: et,
      filters: gt,
    } = t;
    if ((c && Hf(c, r, null), o))
      for (const W in o) {
        const U = o[W];
        wt(U) && (r[W] = U.bind(n));
      }
    if (s) {
      const W = s.call(n, n);
      Wt(W) && (e.data = As(W));
    }
    if (((_i = !0), i))
      for (const W in i) {
        const U = i[W],
          at = wt(U) ? U.bind(n, n) : wt(U.get) ? U.get.bind(n, n) : Ae,
          vt = !wt(U) && wt(U.set) ? U.set.bind(n) : Ae,
          ft = gs({ get: at, set: vt });
        Object.defineProperty(r, W, {
          enumerable: !0,
          configurable: !0,
          get: () => ft.value,
          set: (Q) => (ft.value = Q),
        });
      }
    if (a) for (const W in a) Il(a[W], r, n, W);
    if (l) {
      const W = wt(l) ? l.call(n) : l;
      Reflect.ownKeys(W).forEach((U) => {
        Jf(U, W[U]);
      });
    }
    h && Yo(h, e, 'c');
    function Z(W, U) {
      pt(U) ? U.forEach((at) => W(at.bind(n))) : U && W(U.bind(n));
    }
    if (
      (Z(Df, d),
      Z(no, w),
      Z(jf, b),
      Z(Ff, I),
      Z(Nf, M),
      Z(Pf, Y),
      Z(Xf, it),
      Z(kf, k),
      Z(Yf, q),
      Z(Bf, st),
      Z(xl, yt),
      Z(zf, C),
      pt(z))
    )
      if (z.length) {
        const W = e.exposed || (e.exposed = {});
        z.forEach((U) => {
          Object.defineProperty(W, U, {
            get: () => n[U],
            set: (at) => (n[U] = at),
          });
        });
      } else e.exposed || (e.exposed = {});
    O && e.render === Ae && (e.render = O),
      H != null && (e.inheritAttrs = H),
      J && (e.components = J),
      et && (e.directives = et);
  }
  function Hf(e, t, n = Ae) {
    pt(e) && (e = bi(e));
    for (const r in e) {
      const s = e[r];
      let i;
      Wt(s)
        ? 'default' in s
          ? (i = as(s.from || r, s.default, !0))
          : (i = as(s.from || r))
        : (i = as(s)),
        ue(i)
          ? Object.defineProperty(t, r, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (o) => (i.value = o),
            })
          : (t[r] = i);
    }
  }
  function Yo(e, t, n) {
    $e(pt(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Il(e, t, n, r) {
    const s = r.includes('.') ? _l(n, r) : () => n[r];
    if (se(e)) {
      const i = t[e];
      wt(i) && Be(s, i);
    } else if (wt(e)) Be(s, e.bind(n));
    else if (Wt(e))
      if (pt(e)) e.forEach((i) => Il(i, t, n, r));
      else {
        const i = wt(e.handler) ? e.handler.bind(n) : t[e.handler];
        wt(i) && Be(s, i, e);
      }
  }
  function ro(e) {
    const t = e.type,
      { mixins: n, extends: r } = t,
      {
        mixins: s,
        optionsCache: i,
        config: { optionMergeStrategies: o },
      } = e.appContext,
      a = i.get(t);
    let l;
    return (
      a
        ? (l = a)
        : !s.length && !n && !r
        ? (l = t)
        : ((l = {}),
          s.length && s.forEach((c) => ds(l, c, o, !0)),
          ds(l, t, o)),
      Wt(t) && i.set(t, l),
      l
    );
  }
  function ds(e, t, n, r = !1) {
    const { mixins: s, extends: i } = t;
    i && ds(e, i, n, !0), s && s.forEach((o) => ds(e, o, n, !0));
    for (const o in t)
      if (!(r && o === 'expose')) {
        const a = Gf[o] || (n && n[o]);
        e[o] = a ? a(e[o], t[o]) : t[o];
      }
    return e;
  }
  const Gf = {
    data: ko,
    props: Xo,
    emits: Xo,
    methods: hr,
    computed: hr,
    beforeCreate: ae,
    created: ae,
    beforeMount: ae,
    mounted: ae,
    beforeUpdate: ae,
    updated: ae,
    beforeDestroy: ae,
    beforeUnmount: ae,
    destroyed: ae,
    unmounted: ae,
    activated: ae,
    deactivated: ae,
    errorCaptured: ae,
    serverPrefetch: ae,
    components: hr,
    directives: hr,
    watch: Kf,
    provide: ko,
    inject: Wf,
  };
  function ko(e, t) {
    return t
      ? e
        ? function () {
            return re(
              wt(e) ? e.call(this, this) : e,
              wt(t) ? t.call(this, this) : t
            );
          }
        : t
      : e;
  }
  function Wf(e, t) {
    return hr(bi(e), bi(t));
  }
  function bi(e) {
    if (pt(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function ae(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function hr(e, t) {
    return e ? re(Object.create(null), e, t) : t;
  }
  function Xo(e, t) {
    return e
      ? pt(e) && pt(t)
        ? [...new Set([...e, ...t])]
        : re(Object.create(null), zo(e), zo(t ?? {}))
      : t;
  }
  function Kf(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = re(Object.create(null), e);
    for (const r in t) n[r] = ae(e[r], t[r]);
    return n;
  }
  function El() {
    return {
      app: null,
      config: {
        isNativeTag: Tc,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let qf = 0;
  function Zf(e, t) {
    return function (r, s = null) {
      wt(r) || (r = re({}, r)), s != null && !Wt(s) && (s = null);
      const i = El(),
        o = new WeakSet();
      let a = !1;
      const l = (i.app = {
        _uid: qf++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: Eh,
        get config() {
          return i.config;
        },
        set config(c) {},
        use(c, ...h) {
          return (
            o.has(c) ||
              (c && wt(c.install)
                ? (o.add(c), c.install(l, ...h))
                : wt(c) && (o.add(c), c(l, ...h))),
            l
          );
        },
        mixin(c) {
          return i.mixins.includes(c) || i.mixins.push(c), l;
        },
        component(c, h) {
          return h ? ((i.components[c] = h), l) : i.components[c];
        },
        directive(c, h) {
          return h ? ((i.directives[c] = h), l) : i.directives[c];
        },
        mount(c, h, d) {
          if (!a) {
            const w = It(r, s);
            return (
              (w.appContext = i),
              d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
              h && t ? t(w, c) : e(w, c, d),
              (a = !0),
              (l._container = c),
              (c.__vue_app__ = l),
              Ds(w.component) || w.component.proxy
            );
          }
        },
        unmount() {
          a && (e(null, l._container), delete l._container.__vue_app__);
        },
        provide(c, h) {
          return (i.provides[c] = h), l;
        },
        runWithContext(c) {
          const h = yr;
          yr = l;
          try {
            return c();
          } finally {
            yr = h;
          }
        },
      });
      return l;
    };
  }
  let yr = null;
  function Jf(e, t) {
    if (le) {
      let n = le.provides;
      const r = le.parent && le.parent.provides;
      r === n && (n = le.provides = Object.create(r)), (n[e] = t);
    }
  }
  function as(e, t, n = !1) {
    const r = le || be;
    if (r || yr) {
      const s = r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : yr._context.provides;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return n && wt(t) ? t.call(r && r.proxy) : t;
    }
  }
  const Tl = {},
    Sl = () => Object.create(Tl),
    Cl = (e) => Object.getPrototypeOf(e) === Tl;
  function Qf(e, t, n, r = !1) {
    const s = {},
      i = Sl();
    (e.propsDefaults = Object.create(null)), Al(e, t, s, i);
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
    n
      ? (e.props = r ? s : af(s))
      : e.type.props
      ? (e.props = s)
      : (e.props = i),
      (e.attrs = i);
  }
  function th(e, t, n, r) {
    const {
        props: s,
        attrs: i,
        vnode: { patchFlag: o },
      } = e,
      a = jt(s),
      [l] = e.propsOptions;
    let c = !1;
    if ((r || o > 0) && !(o & 16)) {
      if (o & 8) {
        const h = e.vnode.dynamicProps;
        for (let d = 0; d < h.length; d++) {
          let w = h[d];
          if (Os(e.emitsOptions, w)) continue;
          const b = t[w];
          if (l)
            if (Ot(i, w)) b !== i[w] && ((i[w] = b), (c = !0));
            else {
              const I = Vn(w);
              s[I] = wi(l, a, I, b, e, !1);
            }
          else b !== i[w] && ((i[w] = b), (c = !0));
        }
      }
    } else {
      Al(e, t, s, i) && (c = !0);
      let h;
      for (const d in a)
        (!t || (!Ot(t, d) && ((h = Rn(d)) === d || !Ot(t, h)))) &&
          (l
            ? n &&
              (n[d] !== void 0 || n[h] !== void 0) &&
              (s[d] = wi(l, a, d, void 0, e, !0))
            : delete s[d]);
      if (i !== a)
        for (const d in i) (!t || !Ot(t, d)) && (delete i[d], (c = !0));
    }
    c && We(e.attrs, 'set', '');
  }
  function Al(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1,
      a;
    if (t)
      for (let l in t) {
        if (pr(l)) continue;
        const c = t[l];
        let h;
        s && Ot(s, (h = Vn(l)))
          ? !i || !i.includes(h)
            ? (n[h] = c)
            : ((a || (a = {}))[h] = c)
          : Os(e.emitsOptions, l) ||
            ((!(l in r) || c !== r[l]) && ((r[l] = c), (o = !0)));
      }
    if (i) {
      const l = jt(n),
        c = a || Ut;
      for (let h = 0; h < i.length; h++) {
        const d = i[h];
        n[d] = wi(s, l, d, c[d], e, !Ot(c, d));
      }
    }
    return o;
  }
  function wi(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
      const a = Ot(o, 'default');
      if (a && r === void 0) {
        const l = o.default;
        if (o.type !== Function && !o.skipFactory && wt(l)) {
          const { propsDefaults: c } = s;
          if (n in c) r = c[n];
          else {
            const h = Lr(s);
            (r = c[n] = l.call(null, t)), h();
          }
        } else r = l;
      }
      o[0] &&
        (i && !a ? (r = !1) : o[1] && (r === '' || r === Rn(n)) && (r = !0));
    }
    return r;
  }
  function Ml(e, t, n = !1) {
    const r = t.propsCache,
      s = r.get(e);
    if (s) return s;
    const i = e.props,
      o = {},
      a = [];
    let l = !1;
    if (!wt(e)) {
      const h = (d) => {
        l = !0;
        const [w, b] = Ml(d, t, !0);
        re(o, w), b && a.push(...b);
      };
      !n && t.mixins.length && t.mixins.forEach(h),
        e.extends && h(e.extends),
        e.mixins && e.mixins.forEach(h);
    }
    if (!i && !l) return Wt(e) && r.set(e, Bn), Bn;
    if (pt(i))
      for (let h = 0; h < i.length; h++) {
        const d = Vn(i[h]);
        Vo(d) && (o[d] = Ut);
      }
    else if (i)
      for (const h in i) {
        const d = Vn(h);
        if (Vo(d)) {
          const w = i[h],
            b = (o[d] = pt(w) || wt(w) ? { type: w } : re({}, w));
          if (b) {
            const I = Go(Boolean, b.type),
              M = Go(String, b.type);
            (b[0] = I > -1),
              (b[1] = M < 0 || I < M),
              (I > -1 || Ot(b, 'default')) && a.push(d);
          }
        }
      }
    const c = [o, a];
    return Wt(e) && r.set(e, c), c;
  }
  function Vo(e) {
    return e[0] !== '$' && !pr(e);
  }
  function Uo(e) {
    return e === null
      ? 'null'
      : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || '';
  }
  function Ho(e, t) {
    return Uo(e) === Uo(t);
  }
  function Go(e, t) {
    return pt(t) ? t.findIndex((n) => Ho(n, e)) : wt(t) && Ho(t, e) ? 0 : -1;
  }
  const Ol = (e) => e[0] === '_' || e === '$stable',
    so = (e) => (pt(e) ? e.map(De) : [De(e)]),
    eh = (e, t, n) => {
      if (t._n) return t;
      const r = xf((...s) => so(t(...s)), n);
      return (r._c = !1), r;
    },
    Rl = (e, t, n) => {
      const r = e._ctx;
      for (const s in e) {
        if (Ol(s)) continue;
        const i = e[s];
        if (wt(i)) t[s] = eh(s, i, r);
        else if (i != null) {
          const o = so(i);
          t[s] = () => o;
        }
      }
    },
    $l = (e, t) => {
      const n = so(t);
      e.slots.default = () => n;
    },
    nh = (e, t) => {
      const n = (e.slots = Sl());
      if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (re(n, t), Ha(n, '_', r)) : Rl(t, n);
      } else t && $l(e, t);
    },
    rh = (e, t, n) => {
      const { vnode: r, slots: s } = e;
      let i = !0,
        o = Ut;
      if (r.shapeFlag & 32) {
        const a = t._;
        a
          ? n && a === 1
            ? (i = !1)
            : (re(s, t), !n && a === 1 && delete s._)
          : ((i = !t.$stable), Rl(t, s)),
          (o = t);
      } else t && ($l(e, t), (o = { default: 1 }));
      if (i) for (const a in s) !Ol(a) && o[a] == null && delete s[a];
    };
  function xi(e, t, n, r, s = !1) {
    if (pt(e)) {
      e.forEach((w, b) => xi(w, t && (pt(t) ? t[b] : t), n, r, s));
      return;
    }
    if (os(r) && !s) return;
    const i = r.shapeFlag & 4 ? Ds(r.component) || r.component.proxy : r.el,
      o = s ? null : i,
      { i: a, r: l } = e,
      c = t && t.r,
      h = a.refs === Ut ? (a.refs = {}) : a.refs,
      d = a.setupState;
    if (
      (c != null &&
        c !== l &&
        (se(c)
          ? ((h[c] = null), Ot(d, c) && (d[c] = null))
          : ue(c) && (c.value = null)),
      wt(l))
    )
      un(l, a, 12, [o, h]);
    else {
      const w = se(l),
        b = ue(l);
      if (w || b) {
        const I = () => {
          if (e.f) {
            const M = w ? (Ot(d, l) ? d[l] : h[l]) : l.value;
            s
              ? pt(M) && ki(M, i)
              : pt(M)
              ? M.includes(i) || M.push(i)
              : w
              ? ((h[l] = [i]), Ot(d, l) && (d[l] = h[l]))
              : ((l.value = [i]), e.k && (h[e.k] = l.value));
          } else
            w
              ? ((h[l] = o), Ot(d, l) && (d[l] = o))
              : b && ((l.value = o), e.k && (h[e.k] = o));
        };
        o ? ((I.id = -1), he(I, n)) : I();
      }
    }
  }
  const he = Mf;
  function sh(e) {
    return ih(e);
  }
  function ih(e, t) {
    const n = Ga();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: o,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: h,
        parentNode: d,
        nextSibling: w,
        setScopeId: b = Ae,
        insertStaticContent: I,
      } = e,
      M = (
        p,
        y,
        x,
        T = null,
        S = null,
        N = null,
        X = void 0,
        $ = null,
        j = !!y.dynamicChildren
      ) => {
        if (p === y) return;
        p && !or(p, y) && ((T = zt(p)), Q(p, S, N, !0), (p = null)),
          y.patchFlag === -2 && ((j = !1), (y.dynamicChildren = null));
        const { type: A, ref: V, shapeFlag: ot } = y;
        switch (A) {
          case Ps:
            Y(p, y, x, T);
            break;
          case Er:
            G(p, y, x, T);
            break;
          case ei:
            p == null && st(y, x, T, X);
            break;
          case Xe:
            J(p, y, x, T, S, N, X, $, j);
            break;
          default:
            ot & 1
              ? O(p, y, x, T, S, N, X, $, j)
              : ot & 6
              ? et(p, y, x, T, S, N, X, $, j)
              : (ot & 64 || ot & 128) &&
                A.process(p, y, x, T, S, N, X, $, j, Mt);
        }
        V != null && S && xi(V, p && p.ref, N, y || p, !y);
      },
      Y = (p, y, x, T) => {
        if (p == null) r((y.el = a(y.children)), x, T);
        else {
          const S = (y.el = p.el);
          y.children !== p.children && c(S, y.children);
        }
      },
      G = (p, y, x, T) => {
        p == null ? r((y.el = l(y.children || '')), x, T) : (y.el = p.el);
      },
      st = (p, y, x, T) => {
        [p.el, p.anchor] = I(p.children, y, x, T, p.el, p.anchor);
      },
      ut = ({ el: p, anchor: y }, x, T) => {
        let S;
        for (; p && p !== y; ) (S = w(p)), r(p, x, T), (p = S);
        r(y, x, T);
      },
      yt = ({ el: p, anchor: y }) => {
        let x;
        for (; p && p !== y; ) (x = w(p)), s(p), (p = x);
        s(y);
      },
      O = (p, y, x, T, S, N, X, $, j) => {
        y.type === 'svg' ? (X = 'svg') : y.type === 'math' && (X = 'mathml'),
          p == null ? k(y, x, T, S, N, X, $, j) : C(p, y, S, N, X, $, j);
      },
      k = (p, y, x, T, S, N, X, $) => {
        let j, A;
        const { props: V, shapeFlag: ot, transition: rt, dirs: ht } = p;
        if (
          ((j = p.el = o(p.type, N, V && V.is, V)),
          ot & 8
            ? h(j, p.children)
            : ot & 16 && it(p.children, j, null, T, S, ti(p, N), X, $),
          ht && yn(p, null, T, 'created'),
          q(j, p, p.scopeId, X, T),
          V)
        ) {
          for (const $t in V)
            $t !== 'value' &&
              !pr($t) &&
              i(j, $t, null, V[$t], N, p.children, T, S, St);
          'value' in V && i(j, 'value', null, V.value, N),
            (A = V.onVnodeBeforeMount) && Le(A, T, p);
        }
        ht && yn(p, null, T, 'beforeMount');
        const bt = oh(S, rt);
        bt && rt.beforeEnter(j),
          r(j, y, x),
          ((A = V && V.onVnodeMounted) || bt || ht) &&
            he(() => {
              A && Le(A, T, p),
                bt && rt.enter(j),
                ht && yn(p, null, T, 'mounted');
            }, S);
      },
      q = (p, y, x, T, S) => {
        if ((x && b(p, x), T)) for (let N = 0; N < T.length; N++) b(p, T[N]);
        if (S) {
          let N = S.subTree;
          if (y === N) {
            const X = S.vnode;
            q(p, X, X.scopeId, X.slotScopeIds, S.parent);
          }
        }
      },
      it = (p, y, x, T, S, N, X, $, j = 0) => {
        for (let A = j; A < p.length; A++) {
          const V = (p[A] = $ ? nn(p[A]) : De(p[A]));
          M(null, V, y, x, T, S, N, X, $);
        }
      },
      C = (p, y, x, T, S, N, X) => {
        const $ = (y.el = p.el);
        let { patchFlag: j, dynamicChildren: A, dirs: V } = y;
        j |= p.patchFlag & 16;
        const ot = p.props || Ut,
          rt = y.props || Ut;
        let ht;
        if (
          (x && vn(x, !1),
          (ht = rt.onVnodeBeforeUpdate) && Le(ht, x, y, p),
          V && yn(y, p, x, 'beforeUpdate'),
          x && vn(x, !0),
          A
            ? z(p.dynamicChildren, A, $, x, T, ti(y, S), N)
            : X || U(p, y, $, null, x, T, ti(y, S), N, !1),
          j > 0)
        ) {
          if (j & 16) H($, y, ot, rt, x, T, S);
          else if (
            (j & 2 && ot.class !== rt.class && i($, 'class', null, rt.class, S),
            j & 4 && i($, 'style', ot.style, rt.style, S),
            j & 8)
          ) {
            const bt = y.dynamicProps;
            for (let $t = 0; $t < bt.length; $t++) {
              const Yt = bt[$t],
                Zt = ot[Yt],
                ce = rt[Yt];
              (ce !== Zt || Yt === 'value') &&
                i($, Yt, Zt, ce, S, p.children, x, T, St);
            }
          }
          j & 1 && p.children !== y.children && h($, y.children);
        } else !X && A == null && H($, y, ot, rt, x, T, S);
        ((ht = rt.onVnodeUpdated) || V) &&
          he(() => {
            ht && Le(ht, x, y, p), V && yn(y, p, x, 'updated');
          }, T);
      },
      z = (p, y, x, T, S, N, X) => {
        for (let $ = 0; $ < y.length; $++) {
          const j = p[$],
            A = y[$],
            V =
              j.el && (j.type === Xe || !or(j, A) || j.shapeFlag & 70)
                ? d(j.el)
                : x;
          M(j, A, V, null, T, S, N, X, !0);
        }
      },
      H = (p, y, x, T, S, N, X) => {
        if (x !== T) {
          if (x !== Ut)
            for (const $ in x)
              !pr($) &&
                !($ in T) &&
                i(p, $, x[$], null, X, y.children, S, N, St);
          for (const $ in T) {
            if (pr($)) continue;
            const j = T[$],
              A = x[$];
            j !== A && $ !== 'value' && i(p, $, A, j, X, y.children, S, N, St);
          }
          'value' in T && i(p, 'value', x.value, T.value, X);
        }
      },
      J = (p, y, x, T, S, N, X, $, j) => {
        const A = (y.el = p ? p.el : a('')),
          V = (y.anchor = p ? p.anchor : a(''));
        let { patchFlag: ot, dynamicChildren: rt, slotScopeIds: ht } = y;
        ht && ($ = $ ? $.concat(ht) : ht),
          p == null
            ? (r(A, x, T),
              r(V, x, T),
              it(y.children || [], x, V, S, N, X, $, j))
            : ot > 0 && ot & 64 && rt && p.dynamicChildren
            ? (z(p.dynamicChildren, rt, x, S, N, X, $),
              (y.key != null || (S && y === S.subTree)) && Nl(p, y, !0))
            : U(p, y, x, V, S, N, X, $, j);
      },
      et = (p, y, x, T, S, N, X, $, j) => {
        (y.slotScopeIds = $),
          p == null
            ? y.shapeFlag & 512
              ? S.ctx.activate(y, x, T, X, j)
              : gt(y, x, T, S, N, X, j)
            : dt(p, y, j);
      },
      gt = (p, y, x, T, S, N, X) => {
        const $ = (p.component = vh(p, T, S));
        if ((bl(p) && ($.ctx.renderer = Mt), _h($), $.asyncDep)) {
          if ((S && S.registerDep($, Z), !p.el)) {
            const j = ($.subTree = It(Er));
            G(null, j, y, x);
          }
        } else Z($, p, y, x, S, N, X);
      },
      dt = (p, y, x) => {
        const T = (y.component = p.component);
        if (Tf(p, y, x))
          if (T.asyncDep && !T.asyncResolved) {
            W(T, y, x);
            return;
          } else (T.next = y), mf(T.update), (T.effect.dirty = !0), T.update();
        else (y.el = p.el), (T.vnode = y);
      },
      Z = (p, y, x, T, S, N, X) => {
        const $ = () => {
            if (p.isMounted) {
              let { next: V, bu: ot, u: rt, parent: ht, vnode: bt } = p;
              {
                const Ye = Pl(p);
                if (Ye) {
                  V && ((V.el = bt.el), W(p, V, X)),
                    Ye.asyncDep.then(() => {
                      p.isUnmounted || $();
                    });
                  return;
                }
              }
              let $t = V,
                Yt;
              vn(p, !1),
                V ? ((V.el = bt.el), W(p, V, X)) : (V = bt),
                ot && ss(ot),
                (Yt = V.props && V.props.onVnodeBeforeUpdate) &&
                  Le(Yt, ht, V, bt),
                vn(p, !0);
              const Zt = Js(p),
                ce = p.subTree;
              (p.subTree = Zt),
                M(ce, Zt, d(ce.el), zt(ce), p, S, N),
                (V.el = Zt.el),
                $t === null && Sf(p, Zt.el),
                rt && he(rt, S),
                (Yt = V.props && V.props.onVnodeUpdated) &&
                  he(() => Le(Yt, ht, V, bt), S);
            } else {
              let V;
              const { el: ot, props: rt } = y,
                { bm: ht, m: bt, parent: $t } = p,
                Yt = os(y);
              if (
                (vn(p, !1),
                ht && ss(ht),
                !Yt && (V = rt && rt.onVnodeBeforeMount) && Le(V, $t, y),
                vn(p, !0),
                ot && ee)
              ) {
                const Zt = () => {
                  (p.subTree = Js(p)), ee(ot, p.subTree, p, S, null);
                };
                Yt
                  ? y.type.__asyncLoader().then(() => !p.isUnmounted && Zt())
                  : Zt();
              } else {
                const Zt = (p.subTree = Js(p));
                M(null, Zt, x, T, p, S, N), (y.el = Zt.el);
              }
              if ((bt && he(bt, S), !Yt && (V = rt && rt.onVnodeMounted))) {
                const Zt = y;
                he(() => Le(V, $t, Zt), S);
              }
              (y.shapeFlag & 256 ||
                ($t && os($t.vnode) && $t.vnode.shapeFlag & 256)) &&
                p.a &&
                he(p.a, S),
                (p.isMounted = !0),
                (y = x = T = null);
            }
          },
          j = (p.effect = new Hi($, Ae, () => to(A), p.scope)),
          A = (p.update = () => {
            j.dirty && j.run();
          });
        (A.id = p.uid), vn(p, !0), A();
      },
      W = (p, y, x) => {
        y.component = p;
        const T = p.vnode.props;
        (p.vnode = y),
          (p.next = null),
          th(p, y.props, T, x),
          rh(p, y.children, x),
          pn(),
          Fo(p),
          gn();
      },
      U = (p, y, x, T, S, N, X, $, j = !1) => {
        const A = p && p.children,
          V = p ? p.shapeFlag : 0,
          ot = y.children,
          { patchFlag: rt, shapeFlag: ht } = y;
        if (rt > 0) {
          if (rt & 128) {
            vt(A, ot, x, T, S, N, X, $, j);
            return;
          } else if (rt & 256) {
            at(A, ot, x, T, S, N, X, $, j);
            return;
          }
        }
        ht & 8
          ? (V & 16 && St(A, S, N), ot !== A && h(x, ot))
          : V & 16
          ? ht & 16
            ? vt(A, ot, x, T, S, N, X, $, j)
            : St(A, S, N, !0)
          : (V & 8 && h(x, ''), ht & 16 && it(ot, x, T, S, N, X, $, j));
      },
      at = (p, y, x, T, S, N, X, $, j) => {
        (p = p || Bn), (y = y || Bn);
        const A = p.length,
          V = y.length,
          ot = Math.min(A, V);
        let rt;
        for (rt = 0; rt < ot; rt++) {
          const ht = (y[rt] = j ? nn(y[rt]) : De(y[rt]));
          M(p[rt], ht, x, null, S, N, X, $, j);
        }
        A > V ? St(p, S, N, !0, !1, ot) : it(y, x, T, S, N, X, $, j, ot);
      },
      vt = (p, y, x, T, S, N, X, $, j) => {
        let A = 0;
        const V = y.length;
        let ot = p.length - 1,
          rt = V - 1;
        for (; A <= ot && A <= rt; ) {
          const ht = p[A],
            bt = (y[A] = j ? nn(y[A]) : De(y[A]));
          if (or(ht, bt)) M(ht, bt, x, null, S, N, X, $, j);
          else break;
          A++;
        }
        for (; A <= ot && A <= rt; ) {
          const ht = p[ot],
            bt = (y[rt] = j ? nn(y[rt]) : De(y[rt]));
          if (or(ht, bt)) M(ht, bt, x, null, S, N, X, $, j);
          else break;
          ot--, rt--;
        }
        if (A > ot) {
          if (A <= rt) {
            const ht = rt + 1,
              bt = ht < V ? y[ht].el : T;
            for (; A <= rt; )
              M(null, (y[A] = j ? nn(y[A]) : De(y[A])), x, bt, S, N, X, $, j),
                A++;
          }
        } else if (A > rt) for (; A <= ot; ) Q(p[A], S, N, !0), A++;
        else {
          const ht = A,
            bt = A,
            $t = new Map();
          for (A = bt; A <= rt; A++) {
            const oe = (y[A] = j ? nn(y[A]) : De(y[A]));
            oe.key != null && $t.set(oe.key, A);
          }
          let Yt,
            Zt = 0;
          const ce = rt - bt + 1;
          let Ye = !1,
            nr = 0;
          const ke = new Array(ce);
          for (A = 0; A < ce; A++) ke[A] = 0;
          for (A = ht; A <= ot; A++) {
            const oe = p[A];
            if (Zt >= ce) {
              Q(oe, S, N, !0);
              continue;
            }
            let fe;
            if (oe.key != null) fe = $t.get(oe.key);
            else
              for (Yt = bt; Yt <= rt; Yt++)
                if (ke[Yt - bt] === 0 && or(oe, y[Yt])) {
                  fe = Yt;
                  break;
                }
            fe === void 0
              ? Q(oe, S, N, !0)
              : ((ke[fe - bt] = A + 1),
                fe >= nr ? (nr = fe) : (Ye = !0),
                M(oe, y[fe], x, null, S, N, X, $, j),
                Zt++);
          }
          const Vr = Ye ? ah(ke) : Bn;
          for (Yt = Vr.length - 1, A = ce - 1; A >= 0; A--) {
            const oe = bt + A,
              fe = y[oe],
              rr = oe + 1 < V ? y[oe + 1].el : T;
            ke[A] === 0
              ? M(null, fe, x, rr, S, N, X, $, j)
              : Ye && (Yt < 0 || A !== Vr[Yt] ? ft(fe, x, rr, 2) : Yt--);
          }
        }
      },
      ft = (p, y, x, T, S = null) => {
        const { el: N, type: X, transition: $, children: j, shapeFlag: A } = p;
        if (A & 6) {
          ft(p.component.subTree, y, x, T);
          return;
        }
        if (A & 128) {
          p.suspense.move(y, x, T);
          return;
        }
        if (A & 64) {
          X.move(p, y, x, Mt);
          return;
        }
        if (X === Xe) {
          r(N, y, x);
          for (let ot = 0; ot < j.length; ot++) ft(j[ot], y, x, T);
          r(p.anchor, y, x);
          return;
        }
        if (X === ei) {
          ut(p, y, x);
          return;
        }
        if (T !== 2 && A & 1 && $)
          if (T === 0) $.beforeEnter(N), r(N, y, x), he(() => $.enter(N), S);
          else {
            const { leave: ot, delayLeave: rt, afterLeave: ht } = $,
              bt = () => r(N, y, x),
              $t = () => {
                ot(N, () => {
                  bt(), ht && ht();
                });
              };
            rt ? rt(N, bt, $t) : $t();
          }
        else r(N, y, x);
      },
      Q = (p, y, x, T = !1, S = !1) => {
        const {
          type: N,
          props: X,
          ref: $,
          children: j,
          dynamicChildren: A,
          shapeFlag: V,
          patchFlag: ot,
          dirs: rt,
        } = p;
        if (($ != null && xi($, null, x, p, !0), V & 256)) {
          y.ctx.deactivate(p);
          return;
        }
        const ht = V & 1 && rt,
          bt = !os(p);
        let $t;
        if ((bt && ($t = X && X.onVnodeBeforeUnmount) && Le($t, y, p), V & 6))
          mt(p.component, x, T);
        else {
          if (V & 128) {
            p.suspense.unmount(x, T);
            return;
          }
          ht && yn(p, null, y, 'beforeUnmount'),
            V & 64
              ? p.type.remove(p, y, x, S, Mt, T)
              : A && (N !== Xe || (ot > 0 && ot & 64))
              ? St(A, y, x, !1, !0)
              : ((N === Xe && ot & 384) || (!S && V & 16)) && St(j, y, x),
            T && F(p);
        }
        ((bt && ($t = X && X.onVnodeUnmounted)) || ht) &&
          he(() => {
            $t && Le($t, y, p), ht && yn(p, null, y, 'unmounted');
          }, x);
      },
      F = (p) => {
        const { type: y, el: x, anchor: T, transition: S } = p;
        if (y === Xe) {
          K(x, T);
          return;
        }
        if (y === ei) {
          yt(p);
          return;
        }
        const N = () => {
          s(x), S && !S.persisted && S.afterLeave && S.afterLeave();
        };
        if (p.shapeFlag & 1 && S && !S.persisted) {
          const { leave: X, delayLeave: $ } = S,
            j = () => X(x, N);
          $ ? $(p.el, N, j) : j();
        } else N();
      },
      K = (p, y) => {
        let x;
        for (; p !== y; ) (x = w(p)), s(p), (p = x);
        s(y);
      },
      mt = (p, y, x) => {
        const { bum: T, scope: S, update: N, subTree: X, um: $ } = p;
        T && ss(T),
          S.stop(),
          N && ((N.active = !1), Q(X, p, y, x)),
          $ && he($, y),
          he(() => {
            p.isUnmounted = !0;
          }, y),
          y &&
            y.pendingBranch &&
            !y.isUnmounted &&
            p.asyncDep &&
            !p.asyncResolved &&
            p.suspenseId === y.pendingId &&
            (y.deps--, y.deps === 0 && y.resolve());
      },
      St = (p, y, x, T = !1, S = !1, N = 0) => {
        for (let X = N; X < p.length; X++) Q(p[X], y, x, T, S);
      },
      zt = (p) =>
        p.shapeFlag & 6
          ? zt(p.component.subTree)
          : p.shapeFlag & 128
          ? p.suspense.next()
          : w(p.anchor || p.el);
    let Nt = !1;
    const Pt = (p, y, x) => {
        p == null
          ? y._vnode && Q(y._vnode, null, null, !0)
          : M(y._vnode || null, p, y, null, null, null, x),
          Nt || ((Nt = !0), Fo(), ml(), (Nt = !1)),
          (y._vnode = p);
      },
      Mt = {
        p: M,
        um: Q,
        m: ft,
        r: F,
        mt: gt,
        mc: it,
        pc: U,
        pbc: z,
        n: zt,
        o: e,
      };
    let nt, ee;
    return { render: Pt, hydrate: nt, createApp: Zf(Pt, nt) };
  }
  function ti({ type: e, props: t }, n) {
    return (n === 'svg' && e === 'foreignObject') ||
      (n === 'mathml' &&
        e === 'annotation-xml' &&
        t &&
        t.encoding &&
        t.encoding.includes('html'))
      ? void 0
      : n;
  }
  function vn({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function oh(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
  }
  function Nl(e, t, n = !1) {
    const r = e.children,
      s = t.children;
    if (pt(r) && pt(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let a = s[i];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) &&
            ((a = s[i] = nn(s[i])), (a.el = o.el)),
          n || Nl(o, a)),
          a.type === Ps && (a.el = o.el);
      }
  }
  function ah(e) {
    const t = e.slice(),
      n = [0];
    let r, s, i, o, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const c = e[r];
      if (c !== 0) {
        if (((s = n[n.length - 1]), e[s] < c)) {
          (t[r] = s), n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          (a = (i + o) >> 1), e[n[a]] < c ? (i = a + 1) : (o = a);
        c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
    return n;
  }
  function Pl(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Pl(t);
  }
  const lh = (e) => e.__isTeleport,
    Xe = Symbol.for('v-fgt'),
    Ps = Symbol.for('v-txt'),
    Er = Symbol.for('v-cmt'),
    ei = Symbol.for('v-stc'),
    vr = [];
  let Re = null;
  function Ee(e = !1) {
    vr.push((Re = e ? null : []));
  }
  function uh() {
    vr.pop(), (Re = vr[vr.length - 1] || null);
  }
  let Tr = 1;
  function Wo(e) {
    Tr += e;
  }
  function Ll(e) {
    return (
      (e.dynamicChildren = Tr > 0 ? Re || Bn : null),
      uh(),
      Tr > 0 && Re && Re.push(e),
      e
    );
  }
  function Me(e, t, n, r, s, i) {
    return Ll(D(e, t, n, r, s, i, !0));
  }
  function ch(e, t, n, r, s) {
    return Ll(It(e, t, n, r, s, !0));
  }
  function fh(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function or(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Dl = ({ key: e }) => e ?? null,
    ls = ({ ref: e, ref_key: t, ref_for: n }) => (
      typeof e == 'number' && (e = '' + e),
      e != null
        ? se(e) || ue(e) || wt(e)
          ? { i: be, r: e, k: t, f: !!n }
          : e
        : null
    );
  function D(
    e,
    t = null,
    n = null,
    r = 0,
    s = null,
    i = e === Xe ? 0 : 1,
    o = !1,
    a = !1
  ) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Dl(t),
      ref: t && ls(t),
      scopeId: Rs,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: be,
    };
    return (
      a
        ? (io(l, n), i & 128 && e.normalize(l))
        : n && (l.shapeFlag |= se(n) ? 8 : 16),
      Tr > 0 &&
        !o &&
        Re &&
        (l.patchFlag > 0 || i & 6) &&
        l.patchFlag !== 32 &&
        Re.push(l),
      l
    );
  }
  const It = hh;
  function hh(e, t = null, n = null, r = 0, s = null, i = !1) {
    if (((!e || e === Cf) && (e = Er), fh(e))) {
      const a = Un(e, t, !0);
      return (
        n && io(a, n),
        Tr > 0 &&
          !i &&
          Re &&
          (a.shapeFlag & 6 ? (Re[Re.indexOf(e)] = a) : Re.push(a)),
        (a.patchFlag |= -2),
        a
      );
    }
    if ((Ih(e) && (e = e.__vccOpts), t)) {
      t = dh(t);
      let { class: a, style: l } = t;
      a && !se(a) && (t.class = Ui(a)),
        Wt(l) && (cl(l) && !pt(l) && (l = re({}, l)), (t.style = Vi(l)));
    }
    const o = se(e) ? 1 : Af(e) ? 128 : lh(e) ? 64 : Wt(e) ? 4 : wt(e) ? 2 : 0;
    return D(e, t, n, r, s, o, i, !0);
  }
  function dh(e) {
    return e ? (cl(e) || Cl(e) ? re({}, e) : e) : null;
  }
  function Un(e, t, n = !1) {
    const { props: r, ref: s, patchFlag: i, children: o } = e,
      a = t ? gh(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Dl(a),
      ref:
        t && t.ref
          ? n && s
            ? pt(s)
              ? s.concat(ls(t))
              : [s, ls(t)]
            : ls(t)
          : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Xe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Un(e.ssContent),
      ssFallback: e.ssFallback && Un(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  }
  function ph(e = ' ', t = 0) {
    return It(Ps, null, e, t);
  }
  function De(e) {
    return e == null || typeof e == 'boolean'
      ? It(Er)
      : pt(e)
      ? It(Xe, null, e.slice())
      : typeof e == 'object'
      ? nn(e)
      : It(Ps, null, String(e));
  }
  function nn(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Un(e);
  }
  function io(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (pt(t)) n = 16;
    else if (typeof t == 'object')
      if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), io(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !Cl(t)
          ? (t._ctx = be)
          : s === 3 &&
            be &&
            (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      wt(t)
        ? ((t = { default: t, _ctx: be }), (n = 32))
        : ((t = String(t)), r & 64 ? ((n = 16), (t = [ph(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
  }
  function gh(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r)
        if (s === 'class')
          t.class !== r.class && (t.class = Ui([t.class, r.class]));
        else if (s === 'style') t.style = Vi([t.style, r.style]);
        else if (Is(s)) {
          const i = t[s],
            o = r[s];
          o &&
            i !== o &&
            !(pt(i) && i.includes(o)) &&
            (t[s] = i ? [].concat(i, o) : o);
        } else s !== '' && (t[s] = r[s]);
    }
    return t;
  }
  function Le(e, t, n, r = null) {
    $e(e, t, 7, [n, r]);
  }
  const mh = El();
  let yh = 0;
  function vh(e, t, n) {
    const r = e.type,
      s = (t ? t.appContext : e.appContext) || mh,
      i = {
        uid: yh++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Fc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ml(r, s),
        emitsOptions: vl(r, s),
        emit: null,
        emitted: null,
        propsDefaults: Ut,
        inheritAttrs: r.inheritAttrs,
        ctx: Ut,
        data: Ut,
        props: Ut,
        attrs: Ut,
        slots: Ut,
        refs: Ut,
        setupState: Ut,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (
      (i.ctx = { _: i }),
      (i.root = t ? t.root : i),
      (i.emit = _f.bind(null, i)),
      e.ce && e.ce(i),
      i
    );
  }
  let le = null,
    ps,
    Ii;
  {
    const e = Ga(),
      t = (n, r) => {
        let s;
        return (
          (s = e[n]) || (s = e[n] = []),
          s.push(r),
          (i) => {
            s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
          }
        );
      };
    (ps = t('__VUE_INSTANCE_SETTERS__', (n) => (le = n))),
      (Ii = t('__VUE_SSR_SETTERS__', (n) => (Ls = n)));
  }
  const Lr = (e) => {
      const t = le;
      return (
        ps(e),
        e.scope.on(),
        () => {
          e.scope.off(), ps(t);
        }
      );
    },
    Ko = () => {
      le && le.scope.off(), ps(null);
    };
  function jl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Ls = !1;
  function _h(e, t = !1) {
    t && Ii(t);
    const { props: n, children: r } = e.vnode,
      s = jl(e);
    Qf(e, n, s, t), nh(e, r);
    const i = s ? bh(e, t) : void 0;
    return t && Ii(!1), i;
  }
  function bh(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Vf));
    const { setup: r } = n;
    if (r) {
      const s = (e.setupContext = r.length > 1 ? xh(e) : null),
        i = Lr(e);
      pn();
      const o = un(r, e, 0, [e.props, s]);
      if ((gn(), i(), ka(o))) {
        if ((o.then(Ko, Ko), t))
          return o
            .then((a) => {
              qo(e, a, t);
            })
            .catch((a) => {
              Ms(a, e, 0);
            });
        e.asyncDep = o;
      } else qo(e, o, t);
    } else Fl(e, t);
  }
  function qo(e, t, n) {
    wt(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : Wt(t) && (e.setupState = dl(t)),
      Fl(e, n);
  }
  let Zo;
  function Fl(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && Zo && !r.render) {
        const s = r.template || ro(e).template;
        if (s) {
          const { isCustomElement: i, compilerOptions: o } =
              e.appContext.config,
            { delimiters: a, compilerOptions: l } = r,
            c = re(re({ isCustomElement: i, delimiters: a }, o), l);
          r.render = Zo(s, c);
        }
      }
      e.render = r.render || Ae;
    }
    {
      const s = Lr(e);
      pn();
      try {
        Uf(e);
      } finally {
        gn(), s();
      }
    }
  }
  const wh = {
    get(e, t) {
      return me(e, 'get', ''), e[t];
    },
  };
  function xh(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, wh),
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
  }
  function Ds(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(dl(lf(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in mr) return mr[n](e);
          },
          has(t, n) {
            return n in t || n in mr;
          },
        }))
      );
  }
  function Ih(e) {
    return wt(e) && '__vccOpts' in e;
  }
  const gs = (e, t) => uf(e, t, Ls),
    Eh = '3.4.25';
  /**
   * @vue/runtime-dom v3.4.25
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ const Th = 'http://www.w3.org/2000/svg',
    Sh = 'http://www.w3.org/1998/Math/MathML',
    rn = typeof document < 'u' ? document : null,
    Jo = rn && rn.createElement('template'),
    Ch = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, n, r) => {
        const s =
          t === 'svg'
            ? rn.createElementNS(Th, e)
            : t === 'mathml'
            ? rn.createElementNS(Sh, e)
            : rn.createElement(e, n ? { is: n } : void 0);
        return (
          e === 'select' &&
            r &&
            r.multiple != null &&
            s.setAttribute('multiple', r.multiple),
          s
        );
      },
      createText: (e) => rn.createTextNode(e),
      createComment: (e) => rn.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => rn.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, '');
      },
      insertStaticContent(e, t, n, r, s, i) {
        const o = n ? n.previousSibling : t.lastChild;
        if (s && (s === i || s.nextSibling))
          for (
            ;
            t.insertBefore(s.cloneNode(!0), n),
              !(s === i || !(s = s.nextSibling));

          );
        else {
          Jo.innerHTML =
            r === 'svg'
              ? `<svg>${e}</svg>`
              : r === 'mathml'
              ? `<math>${e}</math>`
              : e;
          const a = Jo.content;
          if (r === 'svg' || r === 'mathml') {
            const l = a.firstChild;
            for (; l.firstChild; ) a.appendChild(l.firstChild);
            a.removeChild(l);
          }
          t.insertBefore(a, n);
        }
        return [
          o ? o.nextSibling : t.firstChild,
          n ? n.previousSibling : t.lastChild,
        ];
      },
    },
    Ah = Symbol('_vtc');
  function Mh(e, t, n) {
    const r = e[Ah];
    r && (t = (t ? [t, ...r] : [...r]).join(' ')),
      t == null
        ? e.removeAttribute('class')
        : n
        ? e.setAttribute('class', t)
        : (e.className = t);
  }
  const ms = Symbol('_vod'),
    Bl = Symbol('_vsh'),
    Kt = {
      beforeMount(e, { value: t }, { transition: n }) {
        (e[ms] = e.style.display === 'none' ? '' : e.style.display),
          n && t ? n.beforeEnter(e) : ar(e, t);
      },
      mounted(e, { value: t }, { transition: n }) {
        n && t && n.enter(e);
      },
      updated(e, { value: t, oldValue: n }, { transition: r }) {
        !t != !n &&
          (r
            ? t
              ? (r.beforeEnter(e), ar(e, !0), r.enter(e))
              : r.leave(e, () => {
                  ar(e, !1);
                })
            : ar(e, t));
      },
      beforeUnmount(e, { value: t }) {
        ar(e, t);
      },
    };
  function ar(e, t) {
    (e.style.display = t ? e[ms] : 'none'), (e[Bl] = !t);
  }
  const Oh = Symbol(''),
    Rh = /(^|;)\s*display\s*:/;
  function $h(e, t, n) {
    const r = e.style,
      s = se(n);
    let i = !1;
    if (n && !s) {
      if (t)
        if (se(t))
          for (const o of t.split(';')) {
            const a = o.slice(0, o.indexOf(':')).trim();
            n[a] == null && us(r, a, '');
          }
        else for (const o in t) n[o] == null && us(r, o, '');
      for (const o in n) o === 'display' && (i = !0), us(r, o, n[o]);
    } else if (s) {
      if (t !== n) {
        const o = r[Oh];
        o && (n += ';' + o), (r.cssText = n), (i = Rh.test(n));
      }
    } else t && e.removeAttribute('style');
    ms in e && ((e[ms] = i ? r.display : ''), e[Bl] && (r.display = 'none'));
  }
  const Qo = /\s*!important$/;
  function us(e, t, n) {
    if (pt(n)) n.forEach((r) => us(e, t, r));
    else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
    else {
      const r = Nh(e, t);
      Qo.test(n)
        ? e.setProperty(Rn(r), n.replace(Qo, ''), 'important')
        : (e[r] = n);
    }
  }
  const ta = ['Webkit', 'Moz', 'ms'],
    ni = {};
  function Nh(e, t) {
    const n = ni[t];
    if (n) return n;
    let r = Vn(t);
    if (r !== 'filter' && r in e) return (ni[t] = r);
    r = Ua(r);
    for (let s = 0; s < ta.length; s++) {
      const i = ta[s] + r;
      if (i in e) return (ni[t] = i);
    }
    return t;
  }
  const ea = 'http://www.w3.org/1999/xlink';
  function Ph(e, t, n, r, s) {
    if (r && t.startsWith('xlink:'))
      n == null
        ? e.removeAttributeNS(ea, t.slice(6, t.length))
        : e.setAttributeNS(ea, t, n);
    else {
      const i = Lc(t);
      n == null || (i && !Wa(n))
        ? e.removeAttribute(t)
        : e.setAttribute(t, i ? '' : n);
    }
  }
  function Lh(e, t, n, r, s, i, o) {
    if (t === 'innerHTML' || t === 'textContent') {
      r && o(r, s, i), (e[t] = n ?? '');
      return;
    }
    const a = e.tagName;
    if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
      const c = a === 'OPTION' ? e.getAttribute('value') || '' : e.value,
        h = n ?? '';
      (c !== h || !('_value' in e)) && (e.value = h),
        n == null && e.removeAttribute(t),
        (e._value = n);
      return;
    }
    let l = !1;
    if (n === '' || n == null) {
      const c = typeof e[t];
      c === 'boolean'
        ? (n = Wa(n))
        : n == null && c === 'string'
        ? ((n = ''), (l = !0))
        : c === 'number' && ((n = 0), (l = !0));
    }
    try {
      e[t] = n;
    } catch {}
    l && e.removeAttribute(t);
  }
  function xn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Dh(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const na = Symbol('_vei');
  function jh(e, t, n, r, s = null) {
    const i = e[na] || (e[na] = {}),
      o = i[t];
    if (r && o) o.value = r;
    else {
      const [a, l] = Fh(t);
      if (r) {
        const c = (i[t] = Yh(r, s));
        xn(e, a, c, l);
      } else o && (Dh(e, a, o, l), (i[t] = void 0));
    }
  }
  const ra = /(?:Once|Passive|Capture)$/;
  function Fh(e) {
    let t;
    if (ra.test(e)) {
      t = {};
      let r;
      for (; (r = e.match(ra)); )
        (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
    }
    return [e[2] === ':' ? e.slice(3) : Rn(e.slice(2)), t];
  }
  let ri = 0;
  const Bh = Promise.resolve(),
    zh = () => ri || (Bh.then(() => (ri = 0)), (ri = Date.now()));
  function Yh(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      $e(kh(r, n.value), t, 5, [r]);
    };
    return (n.value = e), (n.attached = zh()), n;
  }
  function kh(e, t) {
    if (pt(t)) {
      const n = e.stopImmediatePropagation;
      return (
        (e.stopImmediatePropagation = () => {
          n.call(e), (e._stopped = !0);
        }),
        t.map((r) => (s) => !s._stopped && r && r(s))
      );
    } else return t;
  }
  const sa = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      e.charCodeAt(2) > 96 &&
      e.charCodeAt(2) < 123,
    Xh = (e, t, n, r, s, i, o, a, l) => {
      const c = s === 'svg';
      t === 'class'
        ? Mh(e, r, c)
        : t === 'style'
        ? $h(e, n, r)
        : Is(t)
        ? Yi(t) || jh(e, t, n, r, o)
        : (
            t[0] === '.'
              ? ((t = t.slice(1)), !0)
              : t[0] === '^'
              ? ((t = t.slice(1)), !1)
              : Vh(e, t, r, c)
          )
        ? Lh(e, t, r, i, o, a, l)
        : (t === 'true-value'
            ? (e._trueValue = r)
            : t === 'false-value' && (e._falseValue = r),
          Ph(e, t, r, c));
    };
  function Vh(e, t, n, r) {
    if (r)
      return !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && sa(t) && wt(n))
      );
    if (
      t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA')
    )
      return !1;
    if (t === 'width' || t === 'height') {
      const s = e.tagName;
      if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE')
        return !1;
    }
    return sa(t) && se(n) ? !1 : t in e;
  }
  const ys = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1;
    return pt(t) ? (n) => ss(t, n) : t;
  };
  function Uh(e) {
    e.target.composing = !0;
  }
  function ia(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
  }
  const kn = Symbol('_assign'),
    He = {
      created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
        e[kn] = ys(s);
        const i = r || (s.props && s.props.type === 'number');
        xn(e, t ? 'change' : 'input', (o) => {
          if (o.target.composing) return;
          let a = e.value;
          n && (a = a.trim()), i && (a = hi(a)), e[kn](a);
        }),
          n &&
            xn(e, 'change', () => {
              e.value = e.value.trim();
            }),
          t ||
            (xn(e, 'compositionstart', Uh),
            xn(e, 'compositionend', ia),
            xn(e, 'change', ia));
      },
      mounted(e, { value: t }) {
        e.value = t ?? '';
      },
      beforeUpdate(
        e,
        { value: t, modifiers: { lazy: n, trim: r, number: s } },
        i
      ) {
        if (((e[kn] = ys(i)), e.composing)) return;
        const o =
            (s || e.type === 'number') && !/^0\d/.test(e.value)
              ? hi(e.value)
              : e.value,
          a = t ?? '';
        o !== a &&
          ((document.activeElement === e &&
            e.type !== 'range' &&
            (n || (r && e.value.trim() === a))) ||
            (e.value = a));
      },
    },
    js = {
      deep: !0,
      created(e, t, n) {
        (e[kn] = ys(n)),
          xn(e, 'change', () => {
            const r = e._modelValue,
              s = Hh(e),
              i = e.checked,
              o = e[kn];
            if (pt(r)) {
              const a = Ka(r, s),
                l = a !== -1;
              if (i && !l) o(r.concat(s));
              else if (!i && l) {
                const c = [...r];
                c.splice(a, 1), o(c);
              }
            } else if (Es(r)) {
              const a = new Set(r);
              i ? a.add(s) : a.delete(s), o(a);
            } else o(zl(e, i));
          });
      },
      mounted: oa,
      beforeUpdate(e, t, n) {
        (e[kn] = ys(n)), oa(e, t, n);
      },
    };
  function oa(e, { value: t, oldValue: n }, r) {
    (e._modelValue = t),
      pt(t)
        ? (e.checked = Ka(t, r.props.value) > -1)
        : Es(t)
        ? (e.checked = t.has(r.props.value))
        : t !== n && (e.checked = Ss(t, zl(e, !0)));
  }
  function Hh(e) {
    return '_value' in e ? e._value : e.value;
  }
  function zl(e, t) {
    const n = t ? '_trueValue' : '_falseValue';
    return n in e ? e[n] : t;
  }
  const Gh = {
      esc: 'escape',
      space: ' ',
      up: 'arrow-up',
      left: 'arrow-left',
      right: 'arrow-right',
      down: 'arrow-down',
      delete: 'backspace',
    },
    Wh = (e, t) => {
      const n = e._withKeys || (e._withKeys = {}),
        r = t.join('.');
      return (
        n[r] ||
        (n[r] = (s) => {
          if (!('key' in s)) return;
          const i = Rn(s.key);
          if (t.some((o) => o === i || Gh[o] === i)) return e(s);
        })
      );
    },
    Kh = re({ patchProp: Xh }, Ch);
  let aa;
  function qh() {
    return aa || (aa = sh(Kh));
  }
  const Zh = (...e) => {
    const t = qh().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = Qh(r);
        if (!s) return;
        const i = t._component;
        !wt(i) && !i.render && !i.template && (i.template = s.innerHTML),
          (s.innerHTML = '');
        const o = n(s, !1, Jh(s));
        return (
          s instanceof Element &&
            (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          o
        );
      }),
      t
    );
  };
  function Jh(e) {
    if (e instanceof SVGElement) return 'svg';
    if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
      return 'mathml';
  }
  function Qh(e) {
    return se(e) ? document.querySelector(e) : e;
  }
  function td(e) {
    return Za() ? (zc(e), !0) : !1;
  }
  function Sr(e) {
    return typeof e == 'function' ? e() : ct(e);
  }
  const Yl = typeof window < 'u' && typeof document < 'u';
  typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
  const ed = Object.prototype.toString,
    nd = (e) => ed.call(e) === '[object Object]',
    Cr = () => {};
  function kl(e, t) {
    function n(...r) {
      return new Promise((s, i) => {
        Promise.resolve(
          e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })
        )
          .then(s)
          .catch(i);
      });
    }
    return n;
  }
  const rd = (e) => e();
  function sd(e, t = {}) {
    let n,
      r,
      s = Cr;
    const i = (a) => {
      clearTimeout(a), s(), (s = Cr);
    };
    return (a) => {
      const l = Sr(e),
        c = Sr(t.maxWait);
      return (
        n && i(n),
        l <= 0 || (c !== void 0 && c <= 0)
          ? (r && (i(r), (r = null)), Promise.resolve(a()))
          : new Promise((h, d) => {
              (s = t.rejectOnCancel ? d : h),
                c &&
                  !r &&
                  (r = setTimeout(() => {
                    n && i(n), (r = null), h(a());
                  }, c)),
                (n = setTimeout(() => {
                  r && i(r), (r = null), h(a());
                }, l));
            })
      );
    };
  }
  function id(...e) {
    let t = 0,
      n,
      r = !0,
      s = Cr,
      i,
      o,
      a,
      l,
      c;
    !ue(e[0]) && typeof e[0] == 'object'
      ? ({
          delay: o,
          trailing: a = !0,
          leading: l = !0,
          rejectOnCancel: c = !1,
        } = e[0])
      : ([o, a = !0, l = !0, c = !1] = e);
    const h = () => {
      n && (clearTimeout(n), (n = void 0), s(), (s = Cr));
    };
    return (w) => {
      const b = Sr(o),
        I = Date.now() - t,
        M = () => (i = w());
      return (
        h(),
        b <= 0
          ? ((t = Date.now()), M())
          : (I > b && (l || !r)
              ? ((t = Date.now()), M())
              : a &&
                (i = new Promise((Y, G) => {
                  (s = c ? G : Y),
                    (n = setTimeout(() => {
                      (t = Date.now()), (r = !0), Y(M()), h();
                    }, Math.max(0, b - I)));
                })),
            !l && !n && (n = setTimeout(() => (r = !0), b)),
            (r = !1),
            i)
      );
    };
  }
  function od(e, t = 200, n = !1, r = !0, s = !1) {
    return kl(id(t, n, r, s), e);
  }
  function ad(e, t, n = {}) {
    const { eventFilter: r = rd, ...s } = n;
    return Be(e, kl(r, t), s);
  }
  function Xl(e, t, n = {}) {
    const { debounce: r = 0, maxWait: s = void 0, ...i } = n;
    return ad(e, t, { ...i, eventFilter: sd(r, { maxWait: s }) });
  }
  function ld(e) {
    var t;
    const n = Sr(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n;
  }
  const ud = Yl ? window : void 0,
    cd = Yl ? window.document : void 0;
  function vs(...e) {
    let t, n, r, s;
    if (
      (typeof e[0] == 'string' || Array.isArray(e[0])
        ? (([n, r, s] = e), (t = ud))
        : ([t, n, r, s] = e),
      !t)
    )
      return Cr;
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
    const i = [],
      o = () => {
        i.forEach((h) => h()), (i.length = 0);
      },
      a = (h, d, w, b) => (
        h.addEventListener(d, w, b), () => h.removeEventListener(d, w, b)
      ),
      l = Be(
        () => [ld(t), Sr(s)],
        ([h, d]) => {
          if ((o(), !h)) return;
          const w = nd(d) ? { ...d } : d;
          i.push(...n.flatMap((b) => r.map((I) => a(h, b, I, w))));
        },
        { immediate: !0, flush: 'post' }
      ),
      c = () => {
        l(), o();
      };
    return td(c), c;
  }
  const fd = ['mousedown', 'mouseup', 'keydown', 'keyup'];
  function hd(e, t = {}) {
    const { events: n = fd, document: r = cd, initial: s = null } = t,
      i = kt(s);
    return (
      r &&
        n.forEach((o) => {
          vs(r, o, (a) => {
            typeof a.getModifierState == 'function' &&
              (i.value = a.getModifierState(e));
          });
        }),
      i
    );
  }
  const Ei = {},
    Vl = [];
  function xt(e, t) {
    if (Array.isArray(e)) {
      for (const n of e) xt(n, t);
      return;
    }
    if (typeof e == 'object') {
      for (const n in e) xt(n, e[n]);
      return;
    }
    Ul(Object.getOwnPropertyNames(t)), (Ei[e] = Object.assign(Ei[e] || {}, t));
  }
  function ye(e) {
    return Ei[e] || {};
  }
  function dd() {
    return [...new Set(Vl)];
  }
  function Ul(e) {
    Vl.push(...e);
  }
  function oo(e, t) {
    let n;
    const r = e.length,
      s = [];
    for (n = 0; n < r; n++) s.push(t(e[n]));
    return s;
  }
  function pd(e, t) {
    let n;
    const r = e.length,
      s = [];
    for (n = 0; n < r; n++) t(e[n]) && s.push(e[n]);
    return s;
  }
  function si(e) {
    return ((e % 360) * Math.PI) / 180;
  }
  function Jr(e) {
    return e.toLowerCase().replace(/-(.)/g, function (t, n) {
      return n.toUpperCase();
    });
  }
  function gd(e) {
    return e.replace(/([A-Z])/g, function (t, n) {
      return '-' + n.toLowerCase();
    });
  }
  function Hl(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Kn(e, t, n, r) {
    return (
      (t == null || n == null) &&
        ((r = r || e.bbox()),
        t == null
          ? (t = (r.width / r.height) * n)
          : n == null && (n = (r.height / r.width) * t)),
      { width: t, height: n }
    );
  }
  function Ti(e, t) {
    const n = e.origin;
    let r = e.ox != null ? e.ox : e.originX != null ? e.originX : 'center',
      s = e.oy != null ? e.oy : e.originY != null ? e.originY : 'center';
    n != null &&
      ([r, s] = Array.isArray(n)
        ? n
        : typeof n == 'object'
        ? [n.x, n.y]
        : [n, n]);
    const i = typeof r == 'string',
      o = typeof s == 'string';
    if (i || o) {
      const { height: a, width: l, x: c, y: h } = t.bbox();
      i &&
        (r = r.includes('left') ? c : r.includes('right') ? c + l : c + l / 2),
        o &&
          (s = s.includes('top')
            ? h
            : s.includes('bottom')
            ? h + a
            : h + a / 2);
    }
    return [r, s];
  }
  const ao = 'http://www.w3.org/2000/svg',
    md = 'http://www.w3.org/1999/xhtml',
    Qr = 'http://www.w3.org/2000/xmlns/',
    Dr = 'http://www.w3.org/1999/xlink',
    yd = 'http://svgjs.dev/svgjs',
    Rt = {
      window: typeof window > 'u' ? null : window,
      document: typeof document > 'u' ? null : document,
    };
  class lo {}
  const Cn = {},
    uo = '___SYMBOL___ROOT___';
  function Ar(e, t = ao) {
    return Rt.document.createElementNS(t, e);
  }
  function pe(e, t = !1) {
    if (e instanceof lo) return e;
    if (typeof e == 'object') return ii(e);
    if (e == null) return new Cn[uo]();
    if (typeof e == 'string' && e.charAt(0) !== '<')
      return ii(Rt.document.querySelector(e));
    const n = t ? Rt.document.createElement('div') : Ar('svg');
    return (
      (n.innerHTML = e), (e = ii(n.firstChild)), n.removeChild(n.firstChild), e
    );
  }
  function Gt(e, t) {
    return t && t.ownerDocument && t instanceof t.ownerDocument.defaultView.Node
      ? t
      : Ar(e);
  }
  function Ce(e) {
    if (!e) return null;
    if (e.instance instanceof lo) return e.instance;
    if (e.nodeName === '#document-fragment') return new Cn.Fragment(e);
    let t = Hl(e.nodeName || 'Dom');
    return (
      t === 'LinearGradient' || t === 'RadialGradient'
        ? (t = 'Gradient')
        : Cn[t] || (t = 'Dom'),
      new Cn[t](e)
    );
  }
  let ii = Ce;
  function At(e, t = e.name, n = !1) {
    return (
      (Cn[t] = e),
      n && (Cn[uo] = e),
      Ul(Object.getOwnPropertyNames(e.prototype)),
      e
    );
  }
  function vd(e) {
    return Cn[e];
  }
  let _d = 1e3;
  function Gl(e) {
    return 'Svgjs' + Hl(e) + _d++;
  }
  function Wl(e) {
    for (let t = e.children.length - 1; t >= 0; t--) Wl(e.children[t]);
    return e.id && (e.id = Gl(e.nodeName)), e;
  }
  function Et(e, t) {
    let n, r;
    for (e = Array.isArray(e) ? e : [e], r = e.length - 1; r >= 0; r--)
      for (n in t) e[r].prototype[n] = t[n];
  }
  function Ht(e) {
    return function (...t) {
      const n = t[t.length - 1];
      return n && n.constructor === Object && !(n instanceof Array)
        ? e.apply(this, t.slice(0, -1)).attr(n)
        : e.apply(this, t);
    };
  }
  function bd() {
    return this.parent().children();
  }
  function wd() {
    return this.parent().index(this);
  }
  function xd() {
    return this.siblings()[this.position() + 1];
  }
  function Id() {
    return this.siblings()[this.position() - 1];
  }
  function Ed() {
    const e = this.position();
    return this.parent().add(this.remove(), e + 1), this;
  }
  function Td() {
    const e = this.position();
    return this.parent().add(this.remove(), e ? e - 1 : 0), this;
  }
  function Sd() {
    return this.parent().add(this.remove()), this;
  }
  function Cd() {
    return this.parent().add(this.remove(), 0), this;
  }
  function Ad(e) {
    (e = pe(e)), e.remove();
    const t = this.position();
    return this.parent().add(e, t), this;
  }
  function Md(e) {
    (e = pe(e)), e.remove();
    const t = this.position();
    return this.parent().add(e, t + 1), this;
  }
  function Od(e) {
    return (e = pe(e)), e.before(this), this;
  }
  function Rd(e) {
    return (e = pe(e)), e.after(this), this;
  }
  xt('Dom', {
    siblings: bd,
    position: wd,
    next: xd,
    prev: Id,
    forward: Ed,
    backward: Td,
    front: Sd,
    back: Cd,
    before: Ad,
    after: Md,
    insertBefore: Od,
    insertAfter: Rd,
  });
  const Kl = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
    $d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    Nd = /rgb\((\d+),(\d+),(\d+)\)/,
    Pd = /(#[a-z_][a-z0-9\-_]*)/i,
    Ld = /\)\s*,?\s*/,
    Dd = /\s/g,
    la = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,
    ua = /^rgb\(/,
    ca = /^(\s+)?$/,
    fa = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    jd = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
    Ze = /[\s,]+/,
    co = /[MLHVCSQTAZ]/i;
  function Fd() {
    const e = this.attr('class');
    return e == null ? [] : e.trim().split(Ze);
  }
  function Bd(e) {
    return this.classes().indexOf(e) !== -1;
  }
  function zd(e) {
    if (!this.hasClass(e)) {
      const t = this.classes();
      t.push(e), this.attr('class', t.join(' '));
    }
    return this;
  }
  function Yd(e) {
    return (
      this.hasClass(e) &&
        this.attr(
          'class',
          this.classes()
            .filter(function (t) {
              return t !== e;
            })
            .join(' ')
        ),
      this
    );
  }
  function kd(e) {
    return this.hasClass(e) ? this.removeClass(e) : this.addClass(e);
  }
  xt('Dom', {
    classes: Fd,
    hasClass: Bd,
    addClass: zd,
    removeClass: Yd,
    toggleClass: kd,
  });
  function Xd(e, t) {
    const n = {};
    if (arguments.length === 0)
      return (
        this.node.style.cssText
          .split(/\s*;\s*/)
          .filter(function (r) {
            return !!r.length;
          })
          .forEach(function (r) {
            const s = r.split(/\s*:\s*/);
            n[s[0]] = s[1];
          }),
        n
      );
    if (arguments.length < 2) {
      if (Array.isArray(e)) {
        for (const r of e) {
          const s = Jr(r);
          n[r] = this.node.style[s];
        }
        return n;
      }
      if (typeof e == 'string') return this.node.style[Jr(e)];
      if (typeof e == 'object')
        for (const r in e)
          this.node.style[Jr(r)] = e[r] == null || ca.test(e[r]) ? '' : e[r];
    }
    return (
      arguments.length === 2 &&
        (this.node.style[Jr(e)] = t == null || ca.test(t) ? '' : t),
      this
    );
  }
  function Vd() {
    return this.css('display', '');
  }
  function Ud() {
    return this.css('display', 'none');
  }
  function Hd() {
    return this.css('display') !== 'none';
  }
  xt('Dom', { css: Xd, show: Vd, hide: Ud, visible: Hd });
  function Gd(e, t, n) {
    if (e == null)
      return this.data(
        oo(
          pd(this.node.attributes, (r) => r.nodeName.indexOf('data-') === 0),
          (r) => r.nodeName.slice(5)
        )
      );
    if (e instanceof Array) {
      const r = {};
      for (const s of e) r[s] = this.data(s);
      return r;
    } else if (typeof e == 'object') for (t in e) this.data(t, e[t]);
    else if (arguments.length < 2)
      try {
        return JSON.parse(this.attr('data-' + e));
      } catch {
        return this.attr('data-' + e);
      }
    else
      this.attr(
        'data-' + e,
        t === null
          ? null
          : n === !0 || typeof t == 'string' || typeof t == 'number'
          ? t
          : JSON.stringify(t)
      );
    return this;
  }
  xt('Dom', { data: Gd });
  function Wd(e, t) {
    if (typeof arguments[0] == 'object')
      for (const n in e) this.remember(n, e[n]);
    else {
      if (arguments.length === 1) return this.memory()[e];
      this.memory()[e] = t;
    }
    return this;
  }
  function Kd() {
    if (arguments.length === 0) this._memory = {};
    else
      for (let e = arguments.length - 1; e >= 0; e--)
        delete this.memory()[arguments[e]];
    return this;
  }
  function qd() {
    return (this._memory = this._memory || {});
  }
  xt('Dom', { remember: Wd, forget: Kd, memory: qd });
  function Zd(e) {
    return e.length === 4
      ? [
          '#',
          e.substring(1, 2),
          e.substring(1, 2),
          e.substring(2, 3),
          e.substring(2, 3),
          e.substring(3, 4),
          e.substring(3, 4),
        ].join('')
      : e;
  }
  function Jd(e) {
    const t = Math.round(e),
      r = Math.max(0, Math.min(255, t)).toString(16);
    return r.length === 1 ? '0' + r : r;
  }
  function Ln(e, t) {
    for (let n = t.length; n--; ) if (e[t[n]] == null) return !1;
    return !0;
  }
  function Qd(e, t) {
    const n = Ln(e, 'rgb')
      ? { _a: e.r, _b: e.g, _c: e.b, _d: 0, space: 'rgb' }
      : Ln(e, 'xyz')
      ? { _a: e.x, _b: e.y, _c: e.z, _d: 0, space: 'xyz' }
      : Ln(e, 'hsl')
      ? { _a: e.h, _b: e.s, _c: e.l, _d: 0, space: 'hsl' }
      : Ln(e, 'lab')
      ? { _a: e.l, _b: e.a, _c: e.b, _d: 0, space: 'lab' }
      : Ln(e, 'lch')
      ? { _a: e.l, _b: e.c, _c: e.h, _d: 0, space: 'lch' }
      : Ln(e, 'cmyk')
      ? { _a: e.c, _b: e.m, _c: e.y, _d: e.k, space: 'cmyk' }
      : { _a: 0, _b: 0, _c: 0, space: 'rgb' };
    return (n.space = t || n.space), n;
  }
  function tp(e) {
    return e === 'lab' || e === 'xyz' || e === 'lch';
  }
  function oi(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + (t - e) * 6 * n
        : n < 1 / 2
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  class Bt {
    constructor(...t) {
      this.init(...t);
    }
    static isColor(t) {
      return t && (t instanceof Bt || this.isRgb(t) || this.test(t));
    }
    static isRgb(t) {
      return (
        t &&
        typeof t.r == 'number' &&
        typeof t.g == 'number' &&
        typeof t.b == 'number'
      );
    }
    static random(t = 'vibrant', n, r) {
      const { random: s, round: i, sin: o, PI: a } = Math;
      if (t === 'vibrant') {
        const l = 24 * s() + 57,
          c = 38 * s() + 45,
          h = 360 * s();
        return new Bt(l, c, h, 'lch');
      } else if (t === 'sine') {
        n = n ?? s();
        const l = i(80 * o((2 * a * n) / 0.5 + 0.01) + 150),
          c = i(50 * o((2 * a * n) / 0.5 + 4.6) + 200),
          h = i(100 * o((2 * a * n) / 0.5 + 2.3) + 150);
        return new Bt(l, c, h);
      } else if (t === 'pastel') {
        const l = 8 * s() + 86,
          c = 17 * s() + 9,
          h = 360 * s();
        return new Bt(l, c, h, 'lch');
      } else if (t === 'dark') {
        const l = 10 + 10 * s(),
          c = 50 * s() + 86,
          h = 360 * s();
        return new Bt(l, c, h, 'lch');
      } else if (t === 'rgb') {
        const l = 255 * s(),
          c = 255 * s(),
          h = 255 * s();
        return new Bt(l, c, h);
      } else if (t === 'lab') {
        const l = 100 * s(),
          c = 256 * s() - 128,
          h = 256 * s() - 128;
        return new Bt(l, c, h, 'lab');
      } else if (t === 'grey') {
        const l = 255 * s();
        return new Bt(l, l, l);
      } else throw new Error('Unsupported random color mode');
    }
    static test(t) {
      return typeof t == 'string' && (la.test(t) || ua.test(t));
    }
    cmyk() {
      const { _a: t, _b: n, _c: r } = this.rgb(),
        [s, i, o] = [t, n, r].map((w) => w / 255),
        a = Math.min(1 - s, 1 - i, 1 - o);
      if (a === 1) return new Bt(0, 0, 0, 1, 'cmyk');
      const l = (1 - s - a) / (1 - a),
        c = (1 - i - a) / (1 - a),
        h = (1 - o - a) / (1 - a);
      return new Bt(l, c, h, a, 'cmyk');
    }
    hsl() {
      const { _a: t, _b: n, _c: r } = this.rgb(),
        [s, i, o] = [t, n, r].map((M) => M / 255),
        a = Math.max(s, i, o),
        l = Math.min(s, i, o),
        c = (a + l) / 2,
        h = a === l,
        d = a - l,
        w = h ? 0 : c > 0.5 ? d / (2 - a - l) : d / (a + l),
        b = h
          ? 0
          : a === s
          ? ((i - o) / d + (i < o ? 6 : 0)) / 6
          : a === i
          ? ((o - s) / d + 2) / 6
          : a === o
          ? ((s - i) / d + 4) / 6
          : 0;
      return new Bt(360 * b, 100 * w, 100 * c, 'hsl');
    }
    init(t = 0, n = 0, r = 0, s = 0, i = 'rgb') {
      if (((t = t || 0), this.space))
        for (const d in this.space) delete this[this.space[d]];
      if (typeof t == 'number')
        (i = typeof s == 'string' ? s : i),
          (s = typeof s == 'string' ? 0 : s),
          Object.assign(this, { _a: t, _b: n, _c: r, _d: s, space: i });
      else if (t instanceof Array)
        (this.space = n || (typeof t[3] == 'string' ? t[3] : t[4]) || 'rgb'),
          Object.assign(this, { _a: t[0], _b: t[1], _c: t[2], _d: t[3] || 0 });
      else if (t instanceof Object) {
        const d = Qd(t, n);
        Object.assign(this, d);
      } else if (typeof t == 'string')
        if (ua.test(t)) {
          const d = t.replace(Dd, ''),
            [w, b, I] = Nd.exec(d)
              .slice(1, 4)
              .map((M) => parseInt(M));
          Object.assign(this, { _a: w, _b: b, _c: I, _d: 0, space: 'rgb' });
        } else if (la.test(t)) {
          const d = (M) => parseInt(M, 16),
            [, w, b, I] = $d.exec(Zd(t)).map(d);
          Object.assign(this, { _a: w, _b: b, _c: I, _d: 0, space: 'rgb' });
        } else throw Error("Unsupported string format, can't construct Color");
      const { _a: o, _b: a, _c: l, _d: c } = this,
        h =
          this.space === 'rgb'
            ? { r: o, g: a, b: l }
            : this.space === 'xyz'
            ? { x: o, y: a, z: l }
            : this.space === 'hsl'
            ? { h: o, s: a, l }
            : this.space === 'lab'
            ? { l: o, a, b: l }
            : this.space === 'lch'
            ? { l: o, c: a, h: l }
            : this.space === 'cmyk'
            ? { c: o, m: a, y: l, k: c }
            : {};
      Object.assign(this, h);
    }
    lab() {
      const { x: t, y: n, z: r } = this.xyz(),
        s = 116 * n - 16,
        i = 500 * (t - n),
        o = 200 * (n - r);
      return new Bt(s, i, o, 'lab');
    }
    lch() {
      const { l: t, a: n, b: r } = this.lab(),
        s = Math.sqrt(n ** 2 + r ** 2);
      let i = (180 * Math.atan2(r, n)) / Math.PI;
      return i < 0 && ((i *= -1), (i = 360 - i)), new Bt(t, s, i, 'lch');
    }
    rgb() {
      if (this.space === 'rgb') return this;
      if (tp(this.space)) {
        let { x: t, y: n, z: r } = this;
        if (this.space === 'lab' || this.space === 'lch') {
          let { l: b, a: I, b: M } = this;
          if (this.space === 'lch') {
            const { c: k, h: q } = this,
              it = Math.PI / 180;
            (I = k * Math.cos(it * q)), (M = k * Math.sin(it * q));
          }
          const Y = (b + 16) / 116,
            G = I / 500 + Y,
            st = Y - M / 200,
            ut = 16 / 116,
            yt = 0.008856,
            O = 7.787;
          (t = 0.95047 * (G ** 3 > yt ? G ** 3 : (G - ut) / O)),
            (n = 1 * (Y ** 3 > yt ? Y ** 3 : (Y - ut) / O)),
            (r = 1.08883 * (st ** 3 > yt ? st ** 3 : (st - ut) / O));
        }
        const s = t * 3.2406 + n * -1.5372 + r * -0.4986,
          i = t * -0.9689 + n * 1.8758 + r * 0.0415,
          o = t * 0.0557 + n * -0.204 + r * 1.057,
          a = Math.pow,
          l = 0.0031308,
          c = s > l ? 1.055 * a(s, 1 / 2.4) - 0.055 : 12.92 * s,
          h = i > l ? 1.055 * a(i, 1 / 2.4) - 0.055 : 12.92 * i,
          d = o > l ? 1.055 * a(o, 1 / 2.4) - 0.055 : 12.92 * o;
        return new Bt(255 * c, 255 * h, 255 * d);
      } else if (this.space === 'hsl') {
        let { h: t, s: n, l: r } = this;
        if (((t /= 360), (n /= 100), (r /= 100), n === 0))
          return (r *= 255), new Bt(r, r, r);
        const s = r < 0.5 ? r * (1 + n) : r + n - r * n,
          i = 2 * r - s,
          o = 255 * oi(i, s, t + 1 / 3),
          a = 255 * oi(i, s, t),
          l = 255 * oi(i, s, t - 1 / 3);
        return new Bt(o, a, l);
      } else if (this.space === 'cmyk') {
        const { c: t, m: n, y: r, k: s } = this,
          i = 255 * (1 - Math.min(1, t * (1 - s) + s)),
          o = 255 * (1 - Math.min(1, n * (1 - s) + s)),
          a = 255 * (1 - Math.min(1, r * (1 - s) + s));
        return new Bt(i, o, a);
      } else return this;
    }
    toArray() {
      const { _a: t, _b: n, _c: r, _d: s, space: i } = this;
      return [t, n, r, s, i];
    }
    toHex() {
      const [t, n, r] = this._clamped().map(Jd);
      return `#${t}${n}${r}`;
    }
    toRgb() {
      const [t, n, r] = this._clamped();
      return `rgb(${t},${n},${r})`;
    }
    toString() {
      return this.toHex();
    }
    xyz() {
      const { _a: t, _b: n, _c: r } = this.rgb(),
        [s, i, o] = [t, n, r].map((G) => G / 255),
        a = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92,
        l = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92,
        c = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92,
        h = (a * 0.4124 + l * 0.3576 + c * 0.1805) / 0.95047,
        d = (a * 0.2126 + l * 0.7152 + c * 0.0722) / 1,
        w = (a * 0.0193 + l * 0.1192 + c * 0.9505) / 1.08883,
        b = h > 0.008856 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116,
        I = d > 0.008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116,
        M = w > 0.008856 ? Math.pow(w, 1 / 3) : 7.787 * w + 16 / 116;
      return new Bt(b, I, M, 'xyz');
    }
    _clamped() {
      const { _a: t, _b: n, _c: r } = this.rgb(),
        { max: s, min: i, round: o } = Math,
        a = (l) => s(0, i(o(l), 255));
      return [t, n, r].map(a);
    }
  }
  class qt {
    constructor(...t) {
      this.init(...t);
    }
    clone() {
      return new qt(this);
    }
    init(t, n) {
      const r = { x: 0, y: 0 },
        s = Array.isArray(t)
          ? { x: t[0], y: t[1] }
          : typeof t == 'object'
          ? { x: t.x, y: t.y }
          : { x: t, y: n };
      return (
        (this.x = s.x == null ? r.x : s.x),
        (this.y = s.y == null ? r.y : s.y),
        this
      );
    }
    toArray() {
      return [this.x, this.y];
    }
    transform(t) {
      return this.clone().transformO(t);
    }
    transformO(t) {
      lt.isMatrixLike(t) || (t = new lt(t));
      const { x: n, y: r } = this;
      return (
        (this.x = t.a * n + t.c * r + t.e),
        (this.y = t.b * n + t.d * r + t.f),
        this
      );
    }
  }
  function ep(e, t) {
    return new qt(e, t).transformO(this.screenCTM().inverseO());
  }
  function Dn(e, t, n) {
    return Math.abs(t - e) < 1e-6;
  }
  class lt {
    constructor(...t) {
      this.init(...t);
    }
    static formatTransforms(t) {
      const n = t.flip === 'both' || t.flip === !0,
        r = t.flip && (n || t.flip === 'x') ? -1 : 1,
        s = t.flip && (n || t.flip === 'y') ? -1 : 1,
        i =
          t.skew && t.skew.length
            ? t.skew[0]
            : isFinite(t.skew)
            ? t.skew
            : isFinite(t.skewX)
            ? t.skewX
            : 0,
        o =
          t.skew && t.skew.length
            ? t.skew[1]
            : isFinite(t.skew)
            ? t.skew
            : isFinite(t.skewY)
            ? t.skewY
            : 0,
        a =
          t.scale && t.scale.length
            ? t.scale[0] * r
            : isFinite(t.scale)
            ? t.scale * r
            : isFinite(t.scaleX)
            ? t.scaleX * r
            : r,
        l =
          t.scale && t.scale.length
            ? t.scale[1] * s
            : isFinite(t.scale)
            ? t.scale * s
            : isFinite(t.scaleY)
            ? t.scaleY * s
            : s,
        c = t.shear || 0,
        h = t.rotate || t.theta || 0,
        d = new qt(
          t.origin || t.around || t.ox || t.originX,
          t.oy || t.originY
        ),
        w = d.x,
        b = d.y,
        I = new qt(
          t.position || t.px || t.positionX || NaN,
          t.py || t.positionY || NaN
        ),
        M = I.x,
        Y = I.y,
        G = new qt(t.translate || t.tx || t.translateX, t.ty || t.translateY),
        st = G.x,
        ut = G.y,
        yt = new qt(t.relative || t.rx || t.relativeX, t.ry || t.relativeY),
        O = yt.x,
        k = yt.y;
      return {
        scaleX: a,
        scaleY: l,
        skewX: i,
        skewY: o,
        shear: c,
        theta: h,
        rx: O,
        ry: k,
        tx: st,
        ty: ut,
        ox: w,
        oy: b,
        px: M,
        py: Y,
      };
    }
    static fromArray(t) {
      return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
    }
    static isMatrixLike(t) {
      return (
        t.a != null ||
        t.b != null ||
        t.c != null ||
        t.d != null ||
        t.e != null ||
        t.f != null
      );
    }
    static matrixMultiply(t, n, r) {
      const s = t.a * n.a + t.c * n.b,
        i = t.b * n.a + t.d * n.b,
        o = t.a * n.c + t.c * n.d,
        a = t.b * n.c + t.d * n.d,
        l = t.e + t.a * n.e + t.c * n.f,
        c = t.f + t.b * n.e + t.d * n.f;
      return (
        (r.a = s), (r.b = i), (r.c = o), (r.d = a), (r.e = l), (r.f = c), r
      );
    }
    around(t, n, r) {
      return this.clone().aroundO(t, n, r);
    }
    aroundO(t, n, r) {
      const s = t || 0,
        i = n || 0;
      return this.translateO(-s, -i).lmultiplyO(r).translateO(s, i);
    }
    clone() {
      return new lt(this);
    }
    decompose(t = 0, n = 0) {
      const r = this.a,
        s = this.b,
        i = this.c,
        o = this.d,
        a = this.e,
        l = this.f,
        c = r * o - s * i,
        h = c > 0 ? 1 : -1,
        d = h * Math.sqrt(r * r + s * s),
        w = Math.atan2(h * s, h * r),
        b = (180 / Math.PI) * w,
        I = Math.cos(w),
        M = Math.sin(w),
        Y = (r * i + s * o) / c,
        G = (i * d) / (Y * r - s) || (o * d) / (Y * s + r),
        st = a - t + t * I * d + n * (Y * I * d - M * G),
        ut = l - n + t * M * d + n * (Y * M * d + I * G);
      return {
        scaleX: d,
        scaleY: G,
        shear: Y,
        rotate: b,
        translateX: st,
        translateY: ut,
        originX: t,
        originY: n,
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f,
      };
    }
    equals(t) {
      if (t === this) return !0;
      const n = new lt(t);
      return (
        Dn(this.a, n.a) &&
        Dn(this.b, n.b) &&
        Dn(this.c, n.c) &&
        Dn(this.d, n.d) &&
        Dn(this.e, n.e) &&
        Dn(this.f, n.f)
      );
    }
    flip(t, n) {
      return this.clone().flipO(t, n);
    }
    flipO(t, n) {
      return t === 'x'
        ? this.scaleO(-1, 1, n, 0)
        : t === 'y'
        ? this.scaleO(1, -1, 0, n)
        : this.scaleO(-1, -1, t, n || t);
    }
    init(t) {
      const n = lt.fromArray([1, 0, 0, 1, 0, 0]);
      return (
        (t =
          t instanceof Pe
            ? t.matrixify()
            : typeof t == 'string'
            ? lt.fromArray(t.split(Ze).map(parseFloat))
            : Array.isArray(t)
            ? lt.fromArray(t)
            : typeof t == 'object' && lt.isMatrixLike(t)
            ? t
            : typeof t == 'object'
            ? new lt().transform(t)
            : arguments.length === 6
            ? lt.fromArray([].slice.call(arguments))
            : n),
        (this.a = t.a != null ? t.a : n.a),
        (this.b = t.b != null ? t.b : n.b),
        (this.c = t.c != null ? t.c : n.c),
        (this.d = t.d != null ? t.d : n.d),
        (this.e = t.e != null ? t.e : n.e),
        (this.f = t.f != null ? t.f : n.f),
        this
      );
    }
    inverse() {
      return this.clone().inverseO();
    }
    inverseO() {
      const t = this.a,
        n = this.b,
        r = this.c,
        s = this.d,
        i = this.e,
        o = this.f,
        a = t * s - n * r;
      if (!a) throw new Error('Cannot invert ' + this);
      const l = s / a,
        c = -n / a,
        h = -r / a,
        d = t / a,
        w = -(l * i + h * o),
        b = -(c * i + d * o);
      return (
        (this.a = l),
        (this.b = c),
        (this.c = h),
        (this.d = d),
        (this.e = w),
        (this.f = b),
        this
      );
    }
    lmultiply(t) {
      return this.clone().lmultiplyO(t);
    }
    lmultiplyO(t) {
      const n = this,
        r = t instanceof lt ? t : new lt(t);
      return lt.matrixMultiply(r, n, this);
    }
    multiply(t) {
      return this.clone().multiplyO(t);
    }
    multiplyO(t) {
      const n = this,
        r = t instanceof lt ? t : new lt(t);
      return lt.matrixMultiply(n, r, this);
    }
    rotate(t, n, r) {
      return this.clone().rotateO(t, n, r);
    }
    rotateO(t, n = 0, r = 0) {
      t = si(t);
      const s = Math.cos(t),
        i = Math.sin(t),
        { a: o, b: a, c: l, d: c, e: h, f: d } = this;
      return (
        (this.a = o * s - a * i),
        (this.b = a * s + o * i),
        (this.c = l * s - c * i),
        (this.d = c * s + l * i),
        (this.e = h * s - d * i + r * i - n * s + n),
        (this.f = d * s + h * i - n * i - r * s + r),
        this
      );
    }
    scale(t, n, r, s) {
      return this.clone().scaleO(...arguments);
    }
    scaleO(t, n = t, r = 0, s = 0) {
      arguments.length === 3 && ((s = r), (r = n), (n = t));
      const { a: i, b: o, c: a, d: l, e: c, f: h } = this;
      return (
        (this.a = i * t),
        (this.b = o * n),
        (this.c = a * t),
        (this.d = l * n),
        (this.e = c * t - r * t + r),
        (this.f = h * n - s * n + s),
        this
      );
    }
    shear(t, n, r) {
      return this.clone().shearO(t, n, r);
    }
    shearO(t, n = 0, r = 0) {
      const { a: s, b: i, c: o, d: a, e: l, f: c } = this;
      return (
        (this.a = s + i * t),
        (this.c = o + a * t),
        (this.e = l + c * t - r * t),
        this
      );
    }
    skew(t, n, r, s) {
      return this.clone().skewO(...arguments);
    }
    skewO(t, n = t, r = 0, s = 0) {
      arguments.length === 3 && ((s = r), (r = n), (n = t)),
        (t = si(t)),
        (n = si(n));
      const i = Math.tan(t),
        o = Math.tan(n),
        { a, b: l, c, d: h, e: d, f: w } = this;
      return (
        (this.a = a + l * i),
        (this.b = l + a * o),
        (this.c = c + h * i),
        (this.d = h + c * o),
        (this.e = d + w * i - s * i),
        (this.f = w + d * o - r * o),
        this
      );
    }
    skewX(t, n, r) {
      return this.skew(t, 0, n, r);
    }
    skewY(t, n, r) {
      return this.skew(0, t, n, r);
    }
    toArray() {
      return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
    toString() {
      return (
        'matrix(' +
        this.a +
        ',' +
        this.b +
        ',' +
        this.c +
        ',' +
        this.d +
        ',' +
        this.e +
        ',' +
        this.f +
        ')'
      );
    }
    transform(t) {
      if (lt.isMatrixLike(t)) return new lt(t).multiplyO(this);
      const n = lt.formatTransforms(t),
        r = this,
        { x: s, y: i } = new qt(n.ox, n.oy).transform(r),
        o = new lt()
          .translateO(n.rx, n.ry)
          .lmultiplyO(r)
          .translateO(-s, -i)
          .scaleO(n.scaleX, n.scaleY)
          .skewO(n.skewX, n.skewY)
          .shearO(n.shear)
          .rotateO(n.theta)
          .translateO(s, i);
      if (isFinite(n.px) || isFinite(n.py)) {
        const a = new qt(s, i).transform(o),
          l = isFinite(n.px) ? n.px - a.x : 0,
          c = isFinite(n.py) ? n.py - a.y : 0;
        o.translateO(l, c);
      }
      return o.translateO(n.tx, n.ty), o;
    }
    translate(t, n) {
      return this.clone().translateO(t, n);
    }
    translateO(t, n) {
      return (this.e += t || 0), (this.f += n || 0), this;
    }
    valueOf() {
      return {
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f,
      };
    }
  }
  function np() {
    return new lt(this.node.getCTM());
  }
  function rp() {
    if (typeof this.isRoot == 'function' && !this.isRoot()) {
      const e = this.rect(1, 1),
        t = e.node.getScreenCTM();
      return e.remove(), new lt(t);
    }
    return new lt(this.node.getScreenCTM());
  }
  At(lt, 'Matrix');
  function on() {
    if (!on.nodes) {
      const e = pe().size(2, 0);
      (e.node.style.cssText = [
        'opacity: 0',
        'position: absolute',
        'left: -100%',
        'top: -100%',
        'overflow: hidden',
      ].join(';')),
        e.attr('focusable', 'false'),
        e.attr('aria-hidden', 'true');
      const t = e.path().node;
      on.nodes = { svg: e, path: t };
    }
    if (!on.nodes.svg.node.parentNode) {
      const e = Rt.document.body || Rt.document.documentElement;
      on.nodes.svg.addTo(e);
    }
    return on.nodes;
  }
  function ql(e) {
    return !e.width && !e.height && !e.x && !e.y;
  }
  function sp(e) {
    return (
      e === Rt.document ||
      (
        Rt.document.documentElement.contains ||
        function (t) {
          for (; t.parentNode; ) t = t.parentNode;
          return t === Rt.document;
        }
      ).call(Rt.document.documentElement, e)
    );
  }
  class ne {
    constructor(...t) {
      this.init(...t);
    }
    addOffset() {
      return (
        (this.x += Rt.window.pageXOffset),
        (this.y += Rt.window.pageYOffset),
        new ne(this)
      );
    }
    init(t) {
      const n = [0, 0, 0, 0];
      return (
        (t =
          typeof t == 'string'
            ? t.split(Ze).map(parseFloat)
            : Array.isArray(t)
            ? t
            : typeof t == 'object'
            ? [
                t.left != null ? t.left : t.x,
                t.top != null ? t.top : t.y,
                t.width,
                t.height,
              ]
            : arguments.length === 4
            ? [].slice.call(arguments)
            : n),
        (this.x = t[0] || 0),
        (this.y = t[1] || 0),
        (this.width = this.w = t[2] || 0),
        (this.height = this.h = t[3] || 0),
        (this.x2 = this.x + this.w),
        (this.y2 = this.y + this.h),
        (this.cx = this.x + this.w / 2),
        (this.cy = this.y + this.h / 2),
        this
      );
    }
    isNulled() {
      return ql(this);
    }
    merge(t) {
      const n = Math.min(this.x, t.x),
        r = Math.min(this.y, t.y),
        s = Math.max(this.x + this.width, t.x + t.width) - n,
        i = Math.max(this.y + this.height, t.y + t.height) - r;
      return new ne(n, r, s, i);
    }
    toArray() {
      return [this.x, this.y, this.width, this.height];
    }
    toString() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
    }
    transform(t) {
      t instanceof lt || (t = new lt(t));
      let n = 1 / 0,
        r = -1 / 0,
        s = 1 / 0,
        i = -1 / 0;
      return (
        [
          new qt(this.x, this.y),
          new qt(this.x2, this.y),
          new qt(this.x, this.y2),
          new qt(this.x2, this.y2),
        ].forEach(function (a) {
          (a = a.transform(t)),
            (n = Math.min(n, a.x)),
            (r = Math.max(r, a.x)),
            (s = Math.min(s, a.y)),
            (i = Math.max(i, a.y));
        }),
        new ne(n, s, r - n, i - s)
      );
    }
  }
  function Zl(e, t, n) {
    let r;
    try {
      if (((r = t(e.node)), ql(r) && !sp(e.node)))
        throw new Error('Element not in the dom');
    } catch {
      r = n(e);
    }
    return r;
  }
  function ip() {
    const n = Zl(
      this,
      (s) => s.getBBox(),
      (s) => {
        try {
          const i = s.clone().addTo(on().svg).show(),
            o = i.node.getBBox();
          return i.remove(), o;
        } catch (i) {
          throw new Error(
            `Getting bbox of element "${
              s.node.nodeName
            }" is not possible: ${i.toString()}`
          );
        }
      }
    );
    return new ne(n);
  }
  function op(e) {
    const r = Zl(
        this,
        (i) => i.getBoundingClientRect(),
        (i) => {
          throw new Error(
            `Getting rbox of element "${i.node.nodeName}" is not possible`
          );
        }
      ),
      s = new ne(r);
    return e ? s.transform(e.screenCTM().inverseO()) : s.addOffset();
  }
  function ap(e, t) {
    const n = this.bbox();
    return e > n.x && t > n.y && e < n.x + n.width && t < n.y + n.height;
  }
  xt({
    viewbox: {
      viewbox(e, t, n, r) {
        return e == null
          ? new ne(this.attr('viewBox'))
          : this.attr('viewBox', new ne(e, t, n, r));
      },
      zoom(e, t) {
        let { width: n, height: r } = this.attr(['width', 'height']);
        if (
          (((!n && !r) || typeof n == 'string' || typeof r == 'string') &&
            ((n = this.node.clientWidth), (r = this.node.clientHeight)),
          !n || !r)
        )
          throw new Error(
            'Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element'
          );
        const s = this.viewbox(),
          i = n / s.width,
          o = r / s.height,
          a = Math.min(i, o);
        if (e == null) return a;
        let l = a / e;
        l === 1 / 0 && (l = Number.MAX_SAFE_INTEGER / 100),
          (t = t || new qt(n / 2 / i + s.x, r / 2 / o + s.y));
        const c = new ne(s).transform(new lt({ scale: l, origin: t }));
        return this.viewbox(c);
      },
    },
  });
  At(ne, 'Box');
  class An extends Array {
    constructor(t = [], ...n) {
      if ((super(t, ...n), typeof t == 'number')) return this;
      (this.length = 0), this.push(...t);
    }
  }
  Et([An], {
    each(e, ...t) {
      return typeof e == 'function'
        ? this.map((n, r, s) => e.call(n, n, r, s))
        : this.map((n) => n[e](...t));
    },
    toArray() {
      return Array.prototype.concat.apply([], this);
    },
  });
  const lp = ['toArray', 'constructor', 'each'];
  An.extend = function (e) {
    (e = e.reduce(
      (t, n) => (
        lp.includes(n) ||
          n[0] === '_' ||
          (t[n] = function (...r) {
            return this.each(n, ...r);
          }),
        t
      ),
      {}
    )),
      Et([An], e);
  };
  function qn(e, t) {
    return new An(
      oo((t || Rt.document).querySelectorAll(e), function (n) {
        return Ce(n);
      })
    );
  }
  function up(e) {
    return qn(e, this.node);
  }
  function cp(e) {
    return Ce(this.node.querySelector(e));
  }
  let fp = 0;
  const Jl = {};
  function Ql(e) {
    let t = e.getEventHolder();
    return t === Rt.window && (t = Jl), t.events || (t.events = {}), t.events;
  }
  function fo(e) {
    return e.getEventTarget();
  }
  function hp(e) {
    let t = e.getEventHolder();
    t === Rt.window && (t = Jl), t.events && (t.events = {});
  }
  function Ge(e, t, n, r, s) {
    const i = n.bind(r || e),
      o = pe(e),
      a = Ql(o),
      l = fo(o);
    (t = Array.isArray(t) ? t : t.split(Ze)),
      n._svgjsListenerId || (n._svgjsListenerId = ++fp),
      t.forEach(function (c) {
        const h = c.split('.')[0],
          d = c.split('.')[1] || '*';
        (a[h] = a[h] || {}),
          (a[h][d] = a[h][d] || {}),
          (a[h][d][n._svgjsListenerId] = i),
          l.addEventListener(h, i, s || !1);
      });
  }
  function ge(e, t, n, r) {
    const s = pe(e),
      i = Ql(s),
      o = fo(s);
    (typeof n == 'function' && ((n = n._svgjsListenerId), !n)) ||
      ((t = Array.isArray(t) ? t : (t || '').split(Ze)),
      t.forEach(function (a) {
        const l = a && a.split('.')[0],
          c = a && a.split('.')[1];
        let h, d;
        if (n)
          i[l] &&
            i[l][c || '*'] &&
            (o.removeEventListener(l, i[l][c || '*'][n], r || !1),
            delete i[l][c || '*'][n]);
        else if (l && c) {
          if (i[l] && i[l][c]) {
            for (d in i[l][c]) ge(o, [l, c].join('.'), d);
            delete i[l][c];
          }
        } else if (c)
          for (a in i) for (h in i[a]) c === h && ge(o, [a, c].join('.'));
        else if (l) {
          if (i[l]) {
            for (h in i[l]) ge(o, [l, h].join('.'));
            delete i[l];
          }
        } else {
          for (a in i) ge(o, a);
          hp(s);
        }
      }));
  }
  function dp(e, t, n, r) {
    const s = fo(e);
    return (
      t instanceof Rt.window.Event ||
        (t = new Rt.window.CustomEvent(t, { detail: n, cancelable: !0, ...r })),
      s.dispatchEvent(t),
      t
    );
  }
  class jr extends lo {
    addEventListener() {}
    dispatch(t, n, r) {
      return dp(this, t, n, r);
    }
    dispatchEvent(t) {
      const n = this.getEventHolder().events;
      if (!n) return !0;
      const r = n[t.type];
      for (const s in r) for (const i in r[s]) r[s][i](t);
      return !t.defaultPrevented;
    }
    fire(t, n, r) {
      return this.dispatch(t, n, r), this;
    }
    getEventHolder() {
      return this;
    }
    getEventTarget() {
      return this;
    }
    off(t, n, r) {
      return ge(this, t, n, r), this;
    }
    on(t, n, r, s) {
      return Ge(this, t, n, r, s), this;
    }
    removeEventListener() {}
  }
  At(jr, 'EventTarget');
  function ha() {}
  const dr = { duration: 400, ease: '>', delay: 0 },
    pp = {
      'fill-opacity': 1,
      'stroke-opacity': 1,
      'stroke-width': 0,
      'stroke-linejoin': 'miter',
      'stroke-linecap': 'butt',
      fill: '#000000',
      stroke: '#000000',
      opacity: 1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      width: 0,
      height: 0,
      r: 0,
      rx: 0,
      ry: 0,
      offset: 0,
      'stop-opacity': 1,
      'stop-color': '#000000',
      'text-anchor': 'start',
    };
  class Hn extends Array {
    constructor(...t) {
      super(...t), this.init(...t);
    }
    clone() {
      return new this.constructor(this);
    }
    init(t) {
      return typeof t == 'number'
        ? this
        : ((this.length = 0), this.push(...this.parse(t)), this);
    }
    parse(t = []) {
      return t instanceof Array ? t : t.trim().split(Ze).map(parseFloat);
    }
    toArray() {
      return Array.prototype.concat.apply([], this);
    }
    toSet() {
      return new Set(this);
    }
    toString() {
      return this.join(' ');
    }
    valueOf() {
      const t = [];
      return t.push(...this), t;
    }
  }
  class _t {
    constructor(...t) {
      this.init(...t);
    }
    convert(t) {
      return new _t(this.value, t);
    }
    divide(t) {
      return (t = new _t(t)), new _t(this / t, this.unit || t.unit);
    }
    init(t, n) {
      return (
        (n = Array.isArray(t) ? t[1] : n),
        (t = Array.isArray(t) ? t[0] : t),
        (this.value = 0),
        (this.unit = n || ''),
        typeof t == 'number'
          ? (this.value = isNaN(t)
              ? 0
              : isFinite(t)
              ? t
              : t < 0
              ? -34e37
              : 34e37)
          : typeof t == 'string'
          ? ((n = t.match(Kl)),
            n &&
              ((this.value = parseFloat(n[1])),
              n[5] === '%'
                ? (this.value /= 100)
                : n[5] === 's' && (this.value *= 1e3),
              (this.unit = n[5])))
          : t instanceof _t &&
            ((this.value = t.valueOf()), (this.unit = t.unit)),
        this
      );
    }
    minus(t) {
      return (t = new _t(t)), new _t(this - t, this.unit || t.unit);
    }
    plus(t) {
      return (t = new _t(t)), new _t(this + t, this.unit || t.unit);
    }
    times(t) {
      return (t = new _t(t)), new _t(this * t, this.unit || t.unit);
    }
    toArray() {
      return [this.value, this.unit];
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      return (
        (this.unit === '%'
          ? ~~(this.value * 1e8) / 1e6
          : this.unit === 's'
          ? this.value / 1e3
          : this.value) + this.unit
      );
    }
    valueOf() {
      return this.value;
    }
  }
  const tu = [];
  function gp(e) {
    tu.push(e);
  }
  function mp(e, t, n) {
    if (e == null) {
      (e = {}), (t = this.node.attributes);
      for (const r of t)
        e[r.nodeName] = fa.test(r.nodeValue)
          ? parseFloat(r.nodeValue)
          : r.nodeValue;
      return e;
    } else {
      if (e instanceof Array)
        return e.reduce((r, s) => ((r[s] = this.attr(s)), r), {});
      if (typeof e == 'object' && e.constructor === Object)
        for (t in e) this.attr(t, e[t]);
      else if (t === null) this.node.removeAttribute(e);
      else {
        if (t == null)
          return (
            (t = this.node.getAttribute(e)),
            t == null ? pp[e] : fa.test(t) ? parseFloat(t) : t
          );
        (t = tu.reduce((r, s) => s(e, r, this), t)),
          typeof t == 'number'
            ? (t = new _t(t))
            : Bt.isColor(t)
            ? (t = new Bt(t))
            : t.constructor === Array && (t = new Hn(t)),
          e === 'leading'
            ? this.leading && this.leading(t)
            : typeof n == 'string'
            ? this.node.setAttributeNS(n, e, t.toString())
            : this.node.setAttribute(e, t.toString()),
          this.rebuild && (e === 'font-size' || e === 'x') && this.rebuild();
      }
    }
    return this;
  }
  class fn extends jr {
    constructor(t, n) {
      super(),
        (this.node = t),
        (this.type = t.nodeName),
        n && t !== n && this.attr(n);
    }
    add(t, n) {
      return (
        (t = pe(t)),
        t.removeNamespace &&
          this.node instanceof Rt.window.SVGElement &&
          t.removeNamespace(),
        n == null
          ? this.node.appendChild(t.node)
          : t.node !== this.node.childNodes[n] &&
            this.node.insertBefore(t.node, this.node.childNodes[n]),
        this
      );
    }
    addTo(t, n) {
      return pe(t).put(this, n);
    }
    children() {
      return new An(
        oo(this.node.children, function (t) {
          return Ce(t);
        })
      );
    }
    clear() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return this;
    }
    clone(t = !0, n = !0) {
      this.writeDataToDom();
      let r = this.node.cloneNode(t);
      return n && (r = Wl(r)), new this.constructor(r);
    }
    each(t, n) {
      const r = this.children();
      let s, i;
      for (s = 0, i = r.length; s < i; s++)
        t.apply(r[s], [s, r]), n && r[s].each(t, n);
      return this;
    }
    element(t, n) {
      return this.put(new fn(Ar(t), n));
    }
    first() {
      return Ce(this.node.firstChild);
    }
    get(t) {
      return Ce(this.node.childNodes[t]);
    }
    getEventHolder() {
      return this.node;
    }
    getEventTarget() {
      return this.node;
    }
    has(t) {
      return this.index(t) >= 0;
    }
    html(t, n) {
      return this.xml(t, n, md);
    }
    id(t) {
      return (
        typeof t > 'u' && !this.node.id && (this.node.id = Gl(this.type)),
        this.attr('id', t)
      );
    }
    index(t) {
      return [].slice.call(this.node.childNodes).indexOf(t.node);
    }
    last() {
      return Ce(this.node.lastChild);
    }
    matches(t) {
      const n = this.node,
        r =
          n.matches ||
          n.matchesSelector ||
          n.msMatchesSelector ||
          n.mozMatchesSelector ||
          n.webkitMatchesSelector ||
          n.oMatchesSelector ||
          null;
      return r && r.call(n, t);
    }
    parent(t) {
      let n = this;
      if (!n.node.parentNode) return null;
      if (((n = Ce(n.node.parentNode)), !t)) return n;
      do if (typeof t == 'string' ? n.matches(t) : n instanceof t) return n;
      while ((n = Ce(n.node.parentNode)));
      return n;
    }
    put(t, n) {
      return (t = pe(t)), this.add(t, n), t;
    }
    putIn(t, n) {
      return pe(t).add(this, n);
    }
    remove() {
      return this.parent() && this.parent().removeElement(this), this;
    }
    removeElement(t) {
      return this.node.removeChild(t.node), this;
    }
    replace(t) {
      return (
        (t = pe(t)),
        this.node.parentNode &&
          this.node.parentNode.replaceChild(t.node, this.node),
        t
      );
    }
    round(t = 2, n = null) {
      const r = 10 ** t,
        s = this.attr(n);
      for (const i in s)
        typeof s[i] == 'number' && (s[i] = Math.round(s[i] * r) / r);
      return this.attr(s), this;
    }
    svg(t, n) {
      return this.xml(t, n, ao);
    }
    toString() {
      return this.id();
    }
    words(t) {
      return (this.node.textContent = t), this;
    }
    wrap(t) {
      const n = this.parent();
      if (!n) return this.addTo(t);
      const r = n.index(this);
      return n.put(t, r).put(this);
    }
    writeDataToDom() {
      return (
        this.each(function () {
          this.writeDataToDom();
        }),
        this
      );
    }
    xml(t, n, r) {
      if (
        (typeof t == 'boolean' && ((r = n), (n = t), (t = null)),
        t == null || typeof t == 'function')
      ) {
        (n = n ?? !0), this.writeDataToDom();
        let a = this;
        if (t != null) {
          if (((a = Ce(a.node.cloneNode(!0))), n)) {
            const l = t(a);
            if (((a = l || a), l === !1)) return '';
          }
          a.each(function () {
            const l = t(this),
              c = l || this;
            l === !1 ? this.remove() : l && this !== c && this.replace(c);
          }, !0);
        }
        return n ? a.node.outerHTML : a.node.innerHTML;
      }
      n = n ?? !1;
      const s = Ar('wrapper', r),
        i = Rt.document.createDocumentFragment();
      s.innerHTML = t;
      for (let a = s.children.length; a--; ) i.appendChild(s.firstElementChild);
      const o = this.parent();
      return n ? this.replace(i) && o : this.add(i);
    }
  }
  Et(fn, { attr: mp, find: up, findOne: cp });
  At(fn, 'Dom');
  let Pe = class extends fn {
    constructor(t, n) {
      super(t, n),
        (this.dom = {}),
        (this.node.instance = this),
        t.hasAttribute('svgjs:data') &&
          this.setData(JSON.parse(t.getAttribute('svgjs:data')) || {});
    }
    center(t, n) {
      return this.cx(t).cy(n);
    }
    cx(t) {
      return t == null
        ? this.x() + this.width() / 2
        : this.x(t - this.width() / 2);
    }
    cy(t) {
      return t == null
        ? this.y() + this.height() / 2
        : this.y(t - this.height() / 2);
    }
    defs() {
      const t = this.root();
      return t && t.defs();
    }
    dmove(t, n) {
      return this.dx(t).dy(n);
    }
    dx(t = 0) {
      return this.x(new _t(t).plus(this.x()));
    }
    dy(t = 0) {
      return this.y(new _t(t).plus(this.y()));
    }
    getEventHolder() {
      return this;
    }
    height(t) {
      return this.attr('height', t);
    }
    move(t, n) {
      return this.x(t).y(n);
    }
    parents(t = this.root()) {
      const n = typeof t == 'string';
      n || (t = pe(t));
      const r = new An();
      let s = this;
      for (
        ;
        (s = s.parent()) &&
        s.node !== Rt.document &&
        s.nodeName !== '#document-fragment' &&
        (r.push(s), !((!n && s.node === t.node) || (n && s.matches(t))));

      )
        if (s.node === this.root().node) return null;
      return r;
    }
    reference(t) {
      if (((t = this.attr(t)), !t)) return null;
      const n = (t + '').match(Pd);
      return n ? pe(n[1]) : null;
    }
    root() {
      const t = this.parent(vd(uo));
      return t && t.root();
    }
    setData(t) {
      return (this.dom = t), this;
    }
    size(t, n) {
      const r = Kn(this, t, n);
      return this.width(new _t(r.width)).height(new _t(r.height));
    }
    width(t) {
      return this.attr('width', t);
    }
    writeDataToDom() {
      return (
        this.node.removeAttribute('svgjs:data'),
        Object.keys(this.dom).length &&
          this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)),
        super.writeDataToDom()
      );
    }
    x(t) {
      return this.attr('x', t);
    }
    y(t) {
      return this.attr('y', t);
    }
  };
  Et(Pe, { bbox: ip, rbox: op, inside: ap, point: ep, ctm: np, screenCTM: rp });
  At(Pe, 'Element');
  const lr = {
    stroke: [
      'color',
      'width',
      'opacity',
      'linecap',
      'linejoin',
      'miterlimit',
      'dasharray',
      'dashoffset',
    ],
    fill: ['color', 'opacity', 'rule'],
    prefix: function (e, t) {
      return t === 'color' ? e : e + '-' + t;
    },
  };
  ['fill', 'stroke'].forEach(function (e) {
    const t = {};
    let n;
    (t[e] = function (r) {
      if (typeof r > 'u') return this.attr(e);
      if (
        typeof r == 'string' ||
        r instanceof Bt ||
        Bt.isRgb(r) ||
        r instanceof Pe
      )
        this.attr(e, r);
      else
        for (n = lr[e].length - 1; n >= 0; n--)
          r[lr[e][n]] != null && this.attr(lr.prefix(e, lr[e][n]), r[lr[e][n]]);
      return this;
    }),
      xt(['Element', 'Runner'], t);
  });
  xt(['Element', 'Runner'], {
    matrix: function (e, t, n, r, s, i) {
      return e == null
        ? new lt(this)
        : this.attr('transform', new lt(e, t, n, r, s, i));
    },
    rotate: function (e, t, n) {
      return this.transform({ rotate: e, ox: t, oy: n }, !0);
    },
    skew: function (e, t, n, r) {
      return arguments.length === 1 || arguments.length === 3
        ? this.transform({ skew: e, ox: t, oy: n }, !0)
        : this.transform({ skew: [e, t], ox: n, oy: r }, !0);
    },
    shear: function (e, t, n) {
      return this.transform({ shear: e, ox: t, oy: n }, !0);
    },
    scale: function (e, t, n, r) {
      return arguments.length === 1 || arguments.length === 3
        ? this.transform({ scale: e, ox: t, oy: n }, !0)
        : this.transform({ scale: [e, t], ox: n, oy: r }, !0);
    },
    translate: function (e, t) {
      return this.transform({ translate: [e, t] }, !0);
    },
    relative: function (e, t) {
      return this.transform({ relative: [e, t] }, !0);
    },
    flip: function (e = 'both', t = 'center') {
      return (
        'xybothtrue'.indexOf(e) === -1 && ((t = e), (e = 'both')),
        this.transform({ flip: e, origin: t }, !0)
      );
    },
    opacity: function (e) {
      return this.attr('opacity', e);
    },
  });
  xt('radius', {
    radius: function (e, t = e) {
      return (this._element || this).type === 'radialGradient'
        ? this.attr('r', new _t(e))
        : this.rx(e).ry(t);
    },
  });
  xt('Path', {
    length: function () {
      return this.node.getTotalLength();
    },
    pointAt: function (e) {
      return new qt(this.node.getPointAtLength(e));
    },
  });
  xt(['Element', 'Runner'], {
    font: function (e, t) {
      if (typeof e == 'object') {
        for (t in e) this.font(t, e[t]);
        return this;
      }
      return e === 'leading'
        ? this.leading(t)
        : e === 'anchor'
        ? this.attr('text-anchor', t)
        : e === 'size' ||
          e === 'family' ||
          e === 'weight' ||
          e === 'stretch' ||
          e === 'variant' ||
          e === 'style'
        ? this.attr('font-' + e, t)
        : this.attr(e, t);
    },
  });
  const yp = [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseover',
    'mouseout',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'touchstart',
    'touchmove',
    'touchleave',
    'touchend',
    'touchcancel',
  ].reduce(function (e, t) {
    const n = function (r) {
      return r === null ? this.off(t) : this.on(t, r), this;
    };
    return (e[t] = n), e;
  }, {});
  xt('Element', yp);
  function vp() {
    return this.attr('transform', null);
  }
  function _p() {
    return (this.attr('transform') || '')
      .split(Ld)
      .slice(0, -1)
      .map(function (t) {
        const n = t.trim().split('(');
        return [
          n[0],
          n[1].split(Ze).map(function (r) {
            return parseFloat(r);
          }),
        ];
      })
      .reverse()
      .reduce(function (t, n) {
        return n[0] === 'matrix'
          ? t.lmultiply(lt.fromArray(n[1]))
          : t[n[0]].apply(t, n[1]);
      }, new lt());
  }
  function bp(e, t) {
    if (this === e) return this;
    const n = this.screenCTM(),
      r = e.screenCTM().inverse();
    return this.addTo(e, t).untransform().transform(r.multiply(n)), this;
  }
  function wp(e) {
    return this.toParent(this.root(), e);
  }
  function xp(e, t) {
    if (e == null || typeof e == 'string') {
      const s = new lt(this).decompose();
      return e == null ? s : s[e];
    }
    lt.isMatrixLike(e) || (e = { ...e, origin: Ti(e, this) });
    const n = t === !0 ? this : t || !1,
      r = new lt(n).transform(e);
    return this.attr('transform', r);
  }
  xt('Element', {
    untransform: vp,
    matrixify: _p,
    toParent: bp,
    toRoot: wp,
    transform: xp,
  });
  class ve extends Pe {
    flatten(t = this, n) {
      return (
        this.each(function () {
          if (this instanceof ve) return this.flatten().ungroup();
        }),
        this
      );
    }
    ungroup(t = this.parent(), n = t.index(this)) {
      return (
        (n = n === -1 ? t.children().length : n),
        this.each(function (r, s) {
          return s[s.length - r - 1].toParent(t, n);
        }),
        this.remove()
      );
    }
  }
  At(ve, 'Container');
  class ho extends ve {
    constructor(t, n = t) {
      super(Gt('defs', t), n);
    }
    flatten() {
      return this;
    }
    ungroup() {
      return this;
    }
  }
  At(ho, 'Defs');
  class Te extends Pe {}
  At(Te, 'Shape');
  function po(e) {
    return this.attr('rx', e);
  }
  function go(e) {
    return this.attr('ry', e);
  }
  function eu(e) {
    return e == null ? this.cx() - this.rx() : this.cx(e + this.rx());
  }
  function nu(e) {
    return e == null ? this.cy() - this.ry() : this.cy(e + this.ry());
  }
  function ru(e) {
    return this.attr('cx', e);
  }
  function su(e) {
    return this.attr('cy', e);
  }
  function iu(e) {
    return e == null ? this.rx() * 2 : this.rx(new _t(e).divide(2));
  }
  function ou(e) {
    return e == null ? this.ry() * 2 : this.ry(new _t(e).divide(2));
  }
  var Ip = {
    __proto__: null,
    rx: po,
    ry: go,
    x: eu,
    y: nu,
    cx: ru,
    cy: su,
    width: iu,
    height: ou,
  };
  class Fs extends Te {
    constructor(t, n = t) {
      super(Gt('ellipse', t), n);
    }
    size(t, n) {
      const r = Kn(this, t, n);
      return this.rx(new _t(r.width).divide(2)).ry(new _t(r.height).divide(2));
    }
  }
  Et(Fs, Ip);
  xt('Container', {
    ellipse: Ht(function (e = 0, t = e) {
      return this.put(new Fs()).size(e, t).move(0, 0);
    }),
  });
  At(Fs, 'Ellipse');
  class au extends fn {
    constructor(t = Rt.document.createDocumentFragment()) {
      super(t);
    }
    xml(t, n, r) {
      if (
        (typeof t == 'boolean' && ((r = n), (n = t), (t = null)),
        t == null || typeof t == 'function')
      ) {
        const s = new fn(Ar('wrapper', r));
        return s.add(this.node.cloneNode(!0)), s.xml(!1, r);
      }
      return super.xml(t, !1, r);
    }
  }
  At(au, 'Fragment');
  function lu(e, t) {
    return (this._element || this).type === 'radialGradient'
      ? this.attr({ fx: new _t(e), fy: new _t(t) })
      : this.attr({ x1: new _t(e), y1: new _t(t) });
  }
  function uu(e, t) {
    return (this._element || this).type === 'radialGradient'
      ? this.attr({ cx: new _t(e), cy: new _t(t) })
      : this.attr({ x2: new _t(e), y2: new _t(t) });
  }
  var Ep = { __proto__: null, from: lu, to: uu };
  class Fr extends ve {
    constructor(t, n) {
      super(Gt(t + 'Gradient', typeof t == 'string' ? null : t), n);
    }
    attr(t, n, r) {
      return (
        t === 'transform' && (t = 'gradientTransform'), super.attr(t, n, r)
      );
    }
    bbox() {
      return new ne();
    }
    targets() {
      return qn('svg [fill*=' + this.id() + ']');
    }
    toString() {
      return this.url();
    }
    update(t) {
      return this.clear(), typeof t == 'function' && t.call(this, this), this;
    }
    url() {
      return 'url(#' + this.id() + ')';
    }
  }
  Et(Fr, Ep);
  xt({
    Container: {
      gradient(...e) {
        return this.defs().gradient(...e);
      },
    },
    Defs: {
      gradient: Ht(function (e, t) {
        return this.put(new Fr(e)).update(t);
      }),
    },
  });
  At(Fr, 'Gradient');
  class Mr extends ve {
    constructor(t, n = t) {
      super(Gt('pattern', t), n);
    }
    attr(t, n, r) {
      return t === 'transform' && (t = 'patternTransform'), super.attr(t, n, r);
    }
    bbox() {
      return new ne();
    }
    targets() {
      return qn('svg [fill*=' + this.id() + ']');
    }
    toString() {
      return this.url();
    }
    update(t) {
      return this.clear(), typeof t == 'function' && t.call(this, this), this;
    }
    url() {
      return 'url(#' + this.id() + ')';
    }
  }
  xt({
    Container: {
      pattern(...e) {
        return this.defs().pattern(...e);
      },
    },
    Defs: {
      pattern: Ht(function (e, t, n) {
        return this.put(new Mr())
          .update(n)
          .attr({
            x: 0,
            y: 0,
            width: e,
            height: t,
            patternUnits: 'userSpaceOnUse',
          });
      }),
    },
  });
  At(Mr, 'Pattern');
  class Bs extends Te {
    constructor(t, n = t) {
      super(Gt('image', t), n);
    }
    load(t, n) {
      if (!t) return this;
      const r = new Rt.window.Image();
      return (
        Ge(
          r,
          'load',
          function (s) {
            const i = this.parent(Mr);
            this.width() === 0 &&
              this.height() === 0 &&
              this.size(r.width, r.height),
              i instanceof Mr &&
                i.width() === 0 &&
                i.height() === 0 &&
                i.size(this.width(), this.height()),
              typeof n == 'function' && n.call(this, s);
          },
          this
        ),
        Ge(r, 'load error', function () {
          ge(r);
        }),
        this.attr('href', (r.src = t), Dr)
      );
    }
  }
  gp(function (e, t, n) {
    return (
      (e === 'fill' || e === 'stroke') &&
        jd.test(t) &&
        (t = n.root().defs().image(t)),
      t instanceof Bs &&
        (t = n
          .root()
          .defs()
          .pattern(0, 0, (r) => {
            r.add(t);
          })),
      t
    );
  });
  xt({
    Container: {
      image: Ht(function (e, t) {
        return this.put(new Bs()).size(0, 0).load(e, t);
      }),
    },
  });
  At(Bs, 'Image');
  class hn extends Hn {
    bbox() {
      let t = -1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        s = 1 / 0;
      return (
        this.forEach(function (i) {
          (t = Math.max(i[0], t)),
            (n = Math.max(i[1], n)),
            (r = Math.min(i[0], r)),
            (s = Math.min(i[1], s));
        }),
        new ne(r, s, t - r, n - s)
      );
    }
    move(t, n) {
      const r = this.bbox();
      if (((t -= r.x), (n -= r.y), !isNaN(t) && !isNaN(n)))
        for (let s = this.length - 1; s >= 0; s--)
          this[s] = [this[s][0] + t, this[s][1] + n];
      return this;
    }
    parse(t = [0, 0]) {
      const n = [];
      t instanceof Array
        ? (t = Array.prototype.concat.apply([], t))
        : (t = t.trim().split(Ze).map(parseFloat)),
        t.length % 2 !== 0 && t.pop();
      for (let r = 0, s = t.length; r < s; r = r + 2) n.push([t[r], t[r + 1]]);
      return n;
    }
    size(t, n) {
      let r;
      const s = this.bbox();
      for (r = this.length - 1; r >= 0; r--)
        s.width && (this[r][0] = ((this[r][0] - s.x) * t) / s.width + s.x),
          s.height && (this[r][1] = ((this[r][1] - s.y) * n) / s.height + s.y);
      return this;
    }
    toLine() {
      return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
    }
    toString() {
      const t = [];
      for (let n = 0, r = this.length; n < r; n++) t.push(this[n].join(','));
      return t.join(' ');
    }
    transform(t) {
      return this.clone().transformO(t);
    }
    transformO(t) {
      lt.isMatrixLike(t) || (t = new lt(t));
      for (let n = this.length; n--; ) {
        const [r, s] = this[n];
        (this[n][0] = t.a * r + t.c * s + t.e),
          (this[n][1] = t.b * r + t.d * s + t.f);
      }
      return this;
    }
  }
  const Tp = hn;
  function Sp(e) {
    return e == null ? this.bbox().x : this.move(e, this.bbox().y);
  }
  function Cp(e) {
    return e == null ? this.bbox().y : this.move(this.bbox().x, e);
  }
  function Ap(e) {
    const t = this.bbox();
    return e == null ? t.width : this.size(e, t.height);
  }
  function Mp(e) {
    const t = this.bbox();
    return e == null ? t.height : this.size(t.width, e);
  }
  var mo = {
    __proto__: null,
    MorphArray: Tp,
    x: Sp,
    y: Cp,
    width: Ap,
    height: Mp,
  };
  class Or extends Te {
    constructor(t, n = t) {
      super(Gt('line', t), n);
    }
    array() {
      return new hn([
        [this.attr('x1'), this.attr('y1')],
        [this.attr('x2'), this.attr('y2')],
      ]);
    }
    move(t, n) {
      return this.attr(this.array().move(t, n).toLine());
    }
    plot(t, n, r, s) {
      return t == null
        ? this.array()
        : (typeof n < 'u'
            ? (t = { x1: t, y1: n, x2: r, y2: s })
            : (t = new hn(t).toLine()),
          this.attr(t));
    }
    size(t, n) {
      const r = Kn(this, t, n);
      return this.attr(this.array().size(r.width, r.height).toLine());
    }
  }
  Et(Or, mo);
  xt({
    Container: {
      line: Ht(function (...e) {
        return Or.prototype.plot.apply(
          this.put(new Or()),
          e[0] != null ? e : [0, 0, 0, 0]
        );
      }),
    },
  });
  At(Or, 'Line');
  class _s extends ve {
    constructor(t, n = t) {
      super(Gt('marker', t), n);
    }
    height(t) {
      return this.attr('markerHeight', t);
    }
    orient(t) {
      return this.attr('orient', t);
    }
    ref(t, n) {
      return this.attr('refX', t).attr('refY', n);
    }
    toString() {
      return 'url(#' + this.id() + ')';
    }
    update(t) {
      return this.clear(), typeof t == 'function' && t.call(this, this), this;
    }
    width(t) {
      return this.attr('markerWidth', t);
    }
  }
  xt({
    Container: {
      marker(...e) {
        return this.defs().marker(...e);
      },
    },
    Defs: {
      marker: Ht(function (e, t, n) {
        return this.put(new _s())
          .size(e, t)
          .ref(e / 2, t / 2)
          .viewbox(0, 0, e, t)
          .attr('orient', 'auto')
          .update(n);
      }),
    },
    marker: {
      marker(e, t, n, r) {
        let s = ['marker'];
        return (
          e !== 'all' && s.push(e),
          (s = s.join('-')),
          (e =
            arguments[1] instanceof _s
              ? arguments[1]
              : this.defs().marker(t, n, r)),
          this.attr(s, e)
        );
      },
    },
  });
  At(_s, 'Marker');
  function Fn(e, t) {
    return function (n) {
      return n == null ? this[e] : ((this[e] = n), t && t.call(this), this);
    };
  }
  const Op = {
    '-': function (e) {
      return e;
    },
    '<>': function (e) {
      return -Math.cos(e * Math.PI) / 2 + 0.5;
    },
    '>': function (e) {
      return Math.sin((e * Math.PI) / 2);
    },
    '<': function (e) {
      return -Math.cos((e * Math.PI) / 2) + 1;
    },
    bezier: function (e, t, n, r) {
      return function (s) {
        return s < 0
          ? e > 0
            ? (t / e) * s
            : n > 0
            ? (r / n) * s
            : 0
          : s > 1
          ? n < 1
            ? ((1 - r) / (1 - n)) * s + (r - n) / (1 - n)
            : e < 1
            ? ((1 - t) / (1 - e)) * s + (t - e) / (1 - e)
            : 1
          : 3 * s * (1 - s) ** 2 * t + 3 * s ** 2 * (1 - s) * r + s ** 3;
      };
    },
    steps: function (e, t = 'end') {
      t = t.split('-').reverse()[0];
      let n = e;
      return (
        t === 'none' ? --n : t === 'both' && ++n,
        (r, s = !1) => {
          let i = Math.floor(r * e);
          const o = (r * i) % 1 === 0;
          return (
            (t === 'start' || t === 'both') && ++i,
            s && o && --i,
            r >= 0 && i < 0 && (i = 0),
            r <= 1 && i > n && (i = n),
            i / n
          );
        }
      );
    },
  };
  class yo {
    done() {
      return !1;
    }
  }
  class Si extends yo {
    constructor(t = dr.ease) {
      super(), (this.ease = Op[t] || t);
    }
    step(t, n, r) {
      return typeof t != 'number'
        ? r < 1
          ? t
          : n
        : t + (n - t) * this.ease(r);
    }
  }
  class bs extends yo {
    constructor(t) {
      super(), (this.stepper = t);
    }
    done(t) {
      return t.done;
    }
    step(t, n, r, s) {
      return this.stepper(t, n, r, s);
    }
  }
  function da() {
    const e = (this._duration || 500) / 1e3,
      t = this._overshoot || 0,
      n = 1e-10,
      r = Math.PI,
      s = Math.log(t / 100 + n),
      i = -s / Math.sqrt(r * r + s * s),
      o = 3.9 / (i * e);
    (this.d = 2 * i * o), (this.k = o * o);
  }
  class Rp extends bs {
    constructor(t = 500, n = 0) {
      super(), this.duration(t).overshoot(n);
    }
    step(t, n, r, s) {
      if (typeof t == 'string') return t;
      if (((s.done = r === 1 / 0), r === 1 / 0)) return n;
      if (r === 0) return t;
      r > 100 && (r = 16), (r /= 1e3);
      const i = s.velocity || 0,
        o = -this.d * i - this.k * (t - n),
        a = t + i * r + (o * r * r) / 2;
      return (
        (s.velocity = i + o * r),
        (s.done = Math.abs(n - a) + Math.abs(i) < 0.002),
        s.done ? n : a
      );
    }
  }
  Et(Rp, { duration: Fn('_duration', da), overshoot: Fn('_overshoot', da) });
  class $p extends bs {
    constructor(t = 0.1, n = 0.01, r = 0, s = 1e3) {
      super(), this.p(t).i(n).d(r).windup(s);
    }
    step(t, n, r, s) {
      if (typeof t == 'string') return t;
      if (((s.done = r === 1 / 0), r === 1 / 0)) return n;
      if (r === 0) return t;
      const i = n - t;
      let o = (s.integral || 0) + i * r;
      const a = (i - (s.error || 0)) / r,
        l = this._windup;
      return (
        l !== !1 && (o = Math.max(-l, Math.min(o, l))),
        (s.error = i),
        (s.integral = o),
        (s.done = Math.abs(i) < 0.001),
        s.done ? n : t + (this.P * i + this.I * o + this.D * a)
      );
    }
  }
  Et($p, { windup: Fn('_windup'), p: Fn('P'), i: Fn('I'), d: Fn('D') });
  const Np = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 },
    Ci = {
      M: function (e, t, n) {
        return (t.x = n.x = e[0]), (t.y = n.y = e[1]), ['M', t.x, t.y];
      },
      L: function (e, t) {
        return (t.x = e[0]), (t.y = e[1]), ['L', e[0], e[1]];
      },
      H: function (e, t) {
        return (t.x = e[0]), ['H', e[0]];
      },
      V: function (e, t) {
        return (t.y = e[0]), ['V', e[0]];
      },
      C: function (e, t) {
        return (
          (t.x = e[4]), (t.y = e[5]), ['C', e[0], e[1], e[2], e[3], e[4], e[5]]
        );
      },
      S: function (e, t) {
        return (t.x = e[2]), (t.y = e[3]), ['S', e[0], e[1], e[2], e[3]];
      },
      Q: function (e, t) {
        return (t.x = e[2]), (t.y = e[3]), ['Q', e[0], e[1], e[2], e[3]];
      },
      T: function (e, t) {
        return (t.x = e[0]), (t.y = e[1]), ['T', e[0], e[1]];
      },
      Z: function (e, t, n) {
        return (t.x = n.x), (t.y = n.y), ['Z'];
      },
      A: function (e, t) {
        return (
          (t.x = e[5]),
          (t.y = e[6]),
          ['A', e[0], e[1], e[2], e[3], e[4], e[5], e[6]]
        );
      },
    },
    ai = 'mlhvqtcsaz'.split('');
  for (let e = 0, t = ai.length; e < t; ++e)
    Ci[ai[e]] = (function (n) {
      return function (r, s, i) {
        if (n === 'H') r[0] = r[0] + s.x;
        else if (n === 'V') r[0] = r[0] + s.y;
        else if (n === 'A') (r[5] = r[5] + s.x), (r[6] = r[6] + s.y);
        else
          for (let o = 0, a = r.length; o < a; ++o)
            r[o] = r[o] + (o % 2 ? s.y : s.x);
        return Ci[n](r, s, i);
      };
    })(ai[e].toUpperCase());
  function Pp(e) {
    const t = e.segment[0];
    return Ci[t](e.segment.slice(1), e.p, e.p0);
  }
  function Ai(e) {
    return (
      e.segment.length &&
      e.segment.length - 1 === Np[e.segment[0].toUpperCase()]
    );
  }
  function Lp(e, t) {
    e.inNumber && _n(e, !1);
    const n = co.test(t);
    if (n) e.segment = [t];
    else {
      const r = e.lastCommand,
        s = r.toLowerCase(),
        i = r === s;
      e.segment = [s === 'm' ? (i ? 'l' : 'L') : r];
    }
    return (e.inSegment = !0), (e.lastCommand = e.segment[0]), n;
  }
  function _n(e, t) {
    if (!e.inNumber) throw new Error('Parser Error');
    e.number && e.segment.push(parseFloat(e.number)),
      (e.inNumber = t),
      (e.number = ''),
      (e.pointSeen = !1),
      (e.hasExponent = !1),
      Ai(e) && Mi(e);
  }
  function Mi(e) {
    (e.inSegment = !1),
      e.absolute && (e.segment = Pp(e)),
      e.segments.push(e.segment);
  }
  function Dp(e) {
    if (!e.segment.length) return !1;
    const t = e.segment[0].toUpperCase() === 'A',
      n = e.segment.length;
    return t && (n === 4 || n === 5);
  }
  function jp(e) {
    return e.lastToken.toUpperCase() === 'E';
  }
  function Fp(e, t = !0) {
    let n = 0,
      r = '';
    const s = {
      segment: [],
      inNumber: !1,
      number: '',
      lastToken: '',
      inSegment: !1,
      segments: [],
      pointSeen: !1,
      hasExponent: !1,
      absolute: t,
      p0: new qt(),
      p: new qt(),
    };
    for (; (s.lastToken = r), (r = e.charAt(n++)); )
      if (!(!s.inSegment && Lp(s, r))) {
        if (r === '.') {
          if (s.pointSeen || s.hasExponent) {
            _n(s, !1), --n;
            continue;
          }
          (s.inNumber = !0), (s.pointSeen = !0), (s.number += r);
          continue;
        }
        if (!isNaN(parseInt(r))) {
          if (s.number === '0' || Dp(s)) {
            (s.inNumber = !0), (s.number = r), _n(s, !0);
            continue;
          }
          (s.inNumber = !0), (s.number += r);
          continue;
        }
        if (r === ' ' || r === ',') {
          s.inNumber && _n(s, !1);
          continue;
        }
        if (r === '-') {
          if (s.inNumber && !jp(s)) {
            _n(s, !1), --n;
            continue;
          }
          (s.number += r), (s.inNumber = !0);
          continue;
        }
        if (r.toUpperCase() === 'E') {
          (s.number += r), (s.hasExponent = !0);
          continue;
        }
        if (co.test(r)) {
          if (s.inNumber) _n(s, !1);
          else if (Ai(s)) Mi(s);
          else throw new Error('parser Error');
          --n;
        }
      }
    return s.inNumber && _n(s, !1), s.inSegment && Ai(s) && Mi(s), s.segments;
  }
  function Bp(e) {
    let t = '';
    for (let n = 0, r = e.length; n < r; n++)
      (t += e[n][0]),
        e[n][1] != null &&
          ((t += e[n][1]),
          e[n][2] != null &&
            ((t += ' '),
            (t += e[n][2]),
            e[n][3] != null &&
              ((t += ' '),
              (t += e[n][3]),
              (t += ' '),
              (t += e[n][4]),
              e[n][5] != null &&
                ((t += ' '),
                (t += e[n][5]),
                (t += ' '),
                (t += e[n][6]),
                e[n][7] != null && ((t += ' '), (t += e[n][7]))))));
    return t + ' ';
  }
  class Mn extends Hn {
    bbox() {
      return (
        on().path.setAttribute('d', this.toString()),
        new ne(on.nodes.path.getBBox())
      );
    }
    move(t, n) {
      const r = this.bbox();
      if (((t -= r.x), (n -= r.y), !isNaN(t) && !isNaN(n)))
        for (let s, i = this.length - 1; i >= 0; i--)
          (s = this[i][0]),
            s === 'M' || s === 'L' || s === 'T'
              ? ((this[i][1] += t), (this[i][2] += n))
              : s === 'H'
              ? (this[i][1] += t)
              : s === 'V'
              ? (this[i][1] += n)
              : s === 'C' || s === 'S' || s === 'Q'
              ? ((this[i][1] += t),
                (this[i][2] += n),
                (this[i][3] += t),
                (this[i][4] += n),
                s === 'C' && ((this[i][5] += t), (this[i][6] += n)))
              : s === 'A' && ((this[i][6] += t), (this[i][7] += n));
      return this;
    }
    parse(t = 'M0 0') {
      return (
        Array.isArray(t) &&
          (t = Array.prototype.concat.apply([], t).toString()),
        Fp(t)
      );
    }
    size(t, n) {
      const r = this.bbox();
      let s, i;
      for (
        r.width = r.width === 0 ? 1 : r.width,
          r.height = r.height === 0 ? 1 : r.height,
          s = this.length - 1;
        s >= 0;
        s--
      )
        (i = this[s][0]),
          i === 'M' || i === 'L' || i === 'T'
            ? ((this[s][1] = ((this[s][1] - r.x) * t) / r.width + r.x),
              (this[s][2] = ((this[s][2] - r.y) * n) / r.height + r.y))
            : i === 'H'
            ? (this[s][1] = ((this[s][1] - r.x) * t) / r.width + r.x)
            : i === 'V'
            ? (this[s][1] = ((this[s][1] - r.y) * n) / r.height + r.y)
            : i === 'C' || i === 'S' || i === 'Q'
            ? ((this[s][1] = ((this[s][1] - r.x) * t) / r.width + r.x),
              (this[s][2] = ((this[s][2] - r.y) * n) / r.height + r.y),
              (this[s][3] = ((this[s][3] - r.x) * t) / r.width + r.x),
              (this[s][4] = ((this[s][4] - r.y) * n) / r.height + r.y),
              i === 'C' &&
                ((this[s][5] = ((this[s][5] - r.x) * t) / r.width + r.x),
                (this[s][6] = ((this[s][6] - r.y) * n) / r.height + r.y)))
            : i === 'A' &&
              ((this[s][1] = (this[s][1] * t) / r.width),
              (this[s][2] = (this[s][2] * n) / r.height),
              (this[s][6] = ((this[s][6] - r.x) * t) / r.width + r.x),
              (this[s][7] = ((this[s][7] - r.y) * n) / r.height + r.y));
      return this;
    }
    toString() {
      return Bp(this);
    }
  }
  const cu = (e) => {
    const t = typeof e;
    return t === 'number'
      ? _t
      : t === 'string'
      ? Bt.isColor(e)
        ? Bt
        : Ze.test(e)
        ? co.test(e)
          ? Mn
          : Hn
        : Kl.test(e)
        ? _t
        : Oi
      : vo.indexOf(e.constructor) > -1
      ? e.constructor
      : Array.isArray(e)
      ? Hn
      : t === 'object'
      ? Rr
      : Oi;
  };
  class bn {
    constructor(t) {
      (this._stepper = t || new Si('-')),
        (this._from = null),
        (this._to = null),
        (this._type = null),
        (this._context = null),
        (this._morphObj = null);
    }
    at(t) {
      return this._morphObj.morph(
        this._from,
        this._to,
        t,
        this._stepper,
        this._context
      );
    }
    done() {
      return this._context.map(this._stepper.done).reduce(function (n, r) {
        return n && r;
      }, !0);
    }
    from(t) {
      return t == null ? this._from : ((this._from = this._set(t)), this);
    }
    stepper(t) {
      return t == null ? this._stepper : ((this._stepper = t), this);
    }
    to(t) {
      return t == null ? this._to : ((this._to = this._set(t)), this);
    }
    type(t) {
      return t == null ? this._type : ((this._type = t), this);
    }
    _set(t) {
      this._type || this.type(cu(t));
      let n = new this._type(t);
      return (
        this._type === Bt &&
          (n = this._to
            ? n[this._to[4]]()
            : this._from
            ? n[this._from[4]]()
            : n),
        this._type === Rr &&
          (n = this._to
            ? n.align(this._to)
            : this._from
            ? n.align(this._from)
            : n),
        (n = n.toConsumable()),
        (this._morphObj = this._morphObj || new this._type()),
        (this._context =
          this._context ||
          Array.apply(null, Array(n.length))
            .map(Object)
            .map(function (r) {
              return (r.done = !0), r;
            })),
        n
      );
    }
  }
  class Oi {
    constructor(...t) {
      this.init(...t);
    }
    init(t) {
      return (t = Array.isArray(t) ? t[0] : t), (this.value = t), this;
    }
    toArray() {
      return [this.value];
    }
    valueOf() {
      return this.value;
    }
  }
  class Br {
    constructor(...t) {
      this.init(...t);
    }
    init(t) {
      return (
        Array.isArray(t) &&
          (t = {
            scaleX: t[0],
            scaleY: t[1],
            shear: t[2],
            rotate: t[3],
            translateX: t[4],
            translateY: t[5],
            originX: t[6],
            originY: t[7],
          }),
        Object.assign(this, Br.defaults, t),
        this
      );
    }
    toArray() {
      const t = this;
      return [
        t.scaleX,
        t.scaleY,
        t.shear,
        t.rotate,
        t.translateX,
        t.translateY,
        t.originX,
        t.originY,
      ];
    }
  }
  Br.defaults = {
    scaleX: 1,
    scaleY: 1,
    shear: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0,
  };
  const zp = (e, t) => (e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0);
  class Rr {
    constructor(...t) {
      this.init(...t);
    }
    align(t) {
      const n = this.values;
      for (let r = 0, s = n.length; r < s; ++r) {
        if (n[r + 1] === t[r + 1]) {
          if (n[r + 1] === Bt && t[r + 7] !== n[r + 7]) {
            const a = t[r + 7],
              l = new Bt(this.values.splice(r + 3, 5))[a]().toArray();
            this.values.splice(r + 3, 0, ...l);
          }
          r += n[r + 2] + 2;
          continue;
        }
        if (!t[r + 1]) return this;
        const i = new t[r + 1]().toArray(),
          o = n[r + 2] + 3;
        n.splice(r, o, t[r], t[r + 1], t[r + 2], ...i), (r += n[r + 2] + 2);
      }
      return this;
    }
    init(t) {
      if (((this.values = []), Array.isArray(t))) {
        this.values = t.slice();
        return;
      }
      t = t || {};
      const n = [];
      for (const r in t) {
        const s = cu(t[r]),
          i = new s(t[r]).toArray();
        n.push([r, s, i.length, ...i]);
      }
      return (
        n.sort(zp), (this.values = n.reduce((r, s) => r.concat(s), [])), this
      );
    }
    toArray() {
      return this.values;
    }
    valueOf() {
      const t = {},
        n = this.values;
      for (; n.length; ) {
        const r = n.shift(),
          s = n.shift(),
          i = n.shift(),
          o = n.splice(0, i);
        t[r] = new s(o);
      }
      return t;
    }
  }
  const vo = [Oi, Br, Rr];
  function Yp(e = []) {
    vo.push(...[].concat(e));
  }
  function kp() {
    Et(vo, {
      to(e) {
        return new bn().type(this.constructor).from(this.toArray()).to(e);
      },
      fromArray(e) {
        return this.init(e), this;
      },
      toConsumable() {
        return this.toArray();
      },
      morph(e, t, n, r, s) {
        const i = function (o, a) {
          return r.step(o, t[a], n, s[a], s);
        };
        return this.fromArray(e.map(i));
      },
    });
  }
  class Zn extends Te {
    constructor(t, n = t) {
      super(Gt('path', t), n);
    }
    array() {
      return this._array || (this._array = new Mn(this.attr('d')));
    }
    clear() {
      return delete this._array, this;
    }
    height(t) {
      return t == null ? this.bbox().height : this.size(this.bbox().width, t);
    }
    move(t, n) {
      return this.attr('d', this.array().move(t, n));
    }
    plot(t) {
      return t == null
        ? this.array()
        : this.clear().attr(
            'd',
            typeof t == 'string' ? t : (this._array = new Mn(t))
          );
    }
    size(t, n) {
      const r = Kn(this, t, n);
      return this.attr('d', this.array().size(r.width, r.height));
    }
    width(t) {
      return t == null ? this.bbox().width : this.size(t, this.bbox().height);
    }
    x(t) {
      return t == null ? this.bbox().x : this.move(t, this.bbox().y);
    }
    y(t) {
      return t == null ? this.bbox().y : this.move(this.bbox().x, t);
    }
  }
  Zn.prototype.MorphArray = Mn;
  xt({
    Container: {
      path: Ht(function (e) {
        return this.put(new Zn()).plot(e || new Mn());
      }),
    },
  });
  At(Zn, 'Path');
  function Xp() {
    return this._array || (this._array = new hn(this.attr('points')));
  }
  function Vp() {
    return delete this._array, this;
  }
  function Up(e, t) {
    return this.attr('points', this.array().move(e, t));
  }
  function Hp(e) {
    return e == null
      ? this.array()
      : this.clear().attr(
          'points',
          typeof e == 'string' ? e : (this._array = new hn(e))
        );
  }
  function Gp(e, t) {
    const n = Kn(this, e, t);
    return this.attr('points', this.array().size(n.width, n.height));
  }
  var fu = {
    __proto__: null,
    array: Xp,
    clear: Vp,
    move: Up,
    plot: Hp,
    size: Gp,
  };
  class zr extends Te {
    constructor(t, n = t) {
      super(Gt('polygon', t), n);
    }
  }
  xt({
    Container: {
      polygon: Ht(function (e) {
        return this.put(new zr()).plot(e || new hn());
      }),
    },
  });
  Et(zr, mo);
  Et(zr, fu);
  At(zr, 'Polygon');
  class Yr extends Te {
    constructor(t, n = t) {
      super(Gt('polyline', t), n);
    }
  }
  xt({
    Container: {
      polyline: Ht(function (e) {
        return this.put(new Yr()).plot(e || new hn());
      }),
    },
  });
  Et(Yr, mo);
  Et(Yr, fu);
  At(Yr, 'Polyline');
  class kr extends Te {
    constructor(t, n = t) {
      super(Gt('rect', t), n);
    }
  }
  Et(kr, { rx: po, ry: go });
  xt({
    Container: {
      rect: Ht(function (e, t) {
        return this.put(new kr()).size(e, t);
      }),
    },
  });
  At(kr, 'Rect');
  class li {
    constructor() {
      (this._first = null), (this._last = null);
    }
    first() {
      return this._first && this._first.value;
    }
    last() {
      return this._last && this._last.value;
    }
    push(t) {
      const n = typeof t.next < 'u' ? t : { value: t, next: null, prev: null };
      return (
        this._last
          ? ((n.prev = this._last), (this._last.next = n), (this._last = n))
          : ((this._last = n), (this._first = n)),
        n
      );
    }
    remove(t) {
      t.prev && (t.prev.next = t.next),
        t.next && (t.next.prev = t.prev),
        t === this._last && (this._last = t.prev),
        t === this._first && (this._first = t.next),
        (t.prev = null),
        (t.next = null);
    }
    shift() {
      const t = this._first;
      return t
        ? ((this._first = t.next),
          this._first && (this._first.prev = null),
          (this._last = this._first ? this._last : null),
          t.value)
        : null;
    }
  }
  const Dt = {
      nextDraw: null,
      frames: new li(),
      timeouts: new li(),
      immediates: new li(),
      timer: () => Rt.window.performance || Rt.window.Date,
      transforms: [],
      frame(e) {
        const t = Dt.frames.push({ run: e });
        return (
          Dt.nextDraw === null &&
            (Dt.nextDraw = Rt.window.requestAnimationFrame(Dt._draw)),
          t
        );
      },
      timeout(e, t) {
        t = t || 0;
        const n = Dt.timer().now() + t,
          r = Dt.timeouts.push({ run: e, time: n });
        return (
          Dt.nextDraw === null &&
            (Dt.nextDraw = Rt.window.requestAnimationFrame(Dt._draw)),
          r
        );
      },
      immediate(e) {
        const t = Dt.immediates.push(e);
        return (
          Dt.nextDraw === null &&
            (Dt.nextDraw = Rt.window.requestAnimationFrame(Dt._draw)),
          t
        );
      },
      cancelFrame(e) {
        e != null && Dt.frames.remove(e);
      },
      clearTimeout(e) {
        e != null && Dt.timeouts.remove(e);
      },
      cancelImmediate(e) {
        e != null && Dt.immediates.remove(e);
      },
      _draw(e) {
        let t = null;
        const n = Dt.timeouts.last();
        for (
          ;
          (t = Dt.timeouts.shift()) &&
          (e >= t.time ? t.run() : Dt.timeouts.push(t), t !== n);

        );
        let r = null;
        const s = Dt.frames.last();
        for (; r !== s && (r = Dt.frames.shift()); ) r.run(e);
        let i = null;
        for (; (i = Dt.immediates.shift()); ) i();
        Dt.nextDraw =
          Dt.timeouts.first() || Dt.frames.first()
            ? Rt.window.requestAnimationFrame(Dt._draw)
            : null;
      },
    },
    Wp = function (e) {
      const t = e.start,
        n = e.runner.duration(),
        r = t + n;
      return { start: t, duration: n, end: r, runner: e.runner };
    },
    Kp = function () {
      const e = Rt.window;
      return (e.performance || e.Date).now();
    };
  class hu extends jr {
    constructor(t = Kp) {
      super(),
        (this._timeSource = t),
        (this._startTime = 0),
        (this._speed = 1),
        (this._persist = 0),
        (this._nextFrame = null),
        (this._paused = !0),
        (this._runners = []),
        (this._runnerIds = []),
        (this._lastRunnerId = -1),
        (this._time = 0),
        (this._lastSourceTime = 0),
        (this._lastStepTime = 0),
        (this._step = this._stepFn.bind(this, !1)),
        (this._stepImmediate = this._stepFn.bind(this, !0));
    }
    active() {
      return !!this._nextFrame;
    }
    finish() {
      return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
    }
    getEndTime() {
      const t = this.getLastRunnerInfo(),
        n = t ? t.runner.duration() : 0;
      return (t ? t.start : this._time) + n;
    }
    getEndTimeOfTimeline() {
      const t = this._runners.map((n) => n.start + n.runner.duration());
      return Math.max(0, ...t);
    }
    getLastRunnerInfo() {
      return this.getRunnerInfoById(this._lastRunnerId);
    }
    getRunnerInfoById(t) {
      return this._runners[this._runnerIds.indexOf(t)] || null;
    }
    pause() {
      return (this._paused = !0), this._continue();
    }
    persist(t) {
      return t == null ? this._persist : ((this._persist = t), this);
    }
    play() {
      return (this._paused = !1), this.updateTime()._continue();
    }
    reverse(t) {
      const n = this.speed();
      if (t == null) return this.speed(-n);
      const r = Math.abs(n);
      return this.speed(t ? -r : r);
    }
    schedule(t, n, r) {
      if (t == null) return this._runners.map(Wp);
      let s = 0;
      const i = this.getEndTime();
      if (((n = n || 0), r == null || r === 'last' || r === 'after')) s = i;
      else if (r === 'absolute' || r === 'start') (s = n), (n = 0);
      else if (r === 'now') s = this._time;
      else if (r === 'relative') {
        const l = this.getRunnerInfoById(t.id);
        l && ((s = l.start + n), (n = 0));
      } else if (r === 'with-last') {
        const l = this.getLastRunnerInfo();
        s = l ? l.start : this._time;
      } else throw new Error('Invalid value for the "when" parameter');
      t.unschedule(), t.timeline(this);
      const o = t.persist(),
        a = {
          persist: o === null ? this._persist : o,
          start: s + n,
          runner: t,
        };
      return (
        (this._lastRunnerId = t.id),
        this._runners.push(a),
        this._runners.sort((l, c) => l.start - c.start),
        (this._runnerIds = this._runners.map((l) => l.runner.id)),
        this.updateTime()._continue(),
        this
      );
    }
    seek(t) {
      return this.time(this._time + t);
    }
    source(t) {
      return t == null ? this._timeSource : ((this._timeSource = t), this);
    }
    speed(t) {
      return t == null ? this._speed : ((this._speed = t), this);
    }
    stop() {
      return this.time(0), this.pause();
    }
    time(t) {
      return t == null ? this._time : ((this._time = t), this._continue(!0));
    }
    unschedule(t) {
      const n = this._runnerIds.indexOf(t.id);
      return n < 0
        ? this
        : (this._runners.splice(n, 1),
          this._runnerIds.splice(n, 1),
          t.timeline(null),
          this);
    }
    updateTime() {
      return this.active() || (this._lastSourceTime = this._timeSource()), this;
    }
    _continue(t = !1) {
      return (
        Dt.cancelFrame(this._nextFrame),
        (this._nextFrame = null),
        t
          ? this._stepImmediate()
          : this._paused
          ? this
          : ((this._nextFrame = Dt.frame(this._step)), this)
      );
    }
    _stepFn(t = !1) {
      const n = this._timeSource();
      let r = n - this._lastSourceTime;
      t && (r = 0);
      const s = this._speed * r + (this._time - this._lastStepTime);
      (this._lastSourceTime = n),
        t ||
          ((this._time += s), (this._time = this._time < 0 ? 0 : this._time)),
        (this._lastStepTime = this._time),
        this.fire('time', this._time);
      for (let o = this._runners.length; o--; ) {
        const a = this._runners[o],
          l = a.runner;
        this._time - a.start <= 0 && l.reset();
      }
      let i = !1;
      for (let o = 0, a = this._runners.length; o < a; o++) {
        const l = this._runners[o],
          c = l.runner;
        let h = s;
        const d = this._time - l.start;
        if (d <= 0) {
          i = !0;
          continue;
        } else d < h && (h = d);
        if (!c.active()) continue;
        c.step(h).done
          ? l.persist !== !0 &&
            c.duration() - c.time() + this._time + l.persist < this._time &&
            (c.unschedule(), --o, --a)
          : (i = !0);
      }
      return (
        (i && !(this._speed < 0 && this._time === 0)) ||
        (this._runnerIds.length && this._speed < 0 && this._time > 0)
          ? this._continue()
          : (this.pause(), this.fire('finished')),
        this
      );
    }
  }
  xt({
    Element: {
      timeline: function (e) {
        return e == null
          ? ((this._timeline = this._timeline || new hu()), this._timeline)
          : ((this._timeline = e), this);
      },
    },
  });
  class Ie extends jr {
    constructor(t) {
      super(),
        (this.id = Ie.id++),
        (t = t ?? dr.duration),
        (t = typeof t == 'function' ? new bs(t) : t),
        (this._element = null),
        (this._timeline = null),
        (this.done = !1),
        (this._queue = []),
        (this._duration = typeof t == 'number' && t),
        (this._isDeclarative = t instanceof bs),
        (this._stepper = this._isDeclarative ? t : new Si()),
        (this._history = {}),
        (this.enabled = !0),
        (this._time = 0),
        (this._lastTime = 0),
        (this._reseted = !0),
        (this.transforms = new lt()),
        (this.transformId = 1),
        (this._haveReversed = !1),
        (this._reverse = !1),
        (this._loopsDone = 0),
        (this._swing = !1),
        (this._wait = 0),
        (this._times = 1),
        (this._frameId = null),
        (this._persist = this._isDeclarative ? !0 : null);
    }
    static sanitise(t, n, r) {
      let s = 1,
        i = !1,
        o = 0;
      return (
        (t = t || dr.duration),
        (n = n || dr.delay),
        (r = r || 'last'),
        typeof t == 'object' &&
          !(t instanceof yo) &&
          ((n = t.delay || n),
          (r = t.when || r),
          (i = t.swing || i),
          (s = t.times || s),
          (o = t.wait || o),
          (t = t.duration || dr.duration)),
        { duration: t, delay: n, swing: i, times: s, wait: o, when: r }
      );
    }
    active(t) {
      return t == null ? this.enabled : ((this.enabled = t), this);
    }
    addTransform(t, n) {
      return this.transforms.lmultiplyO(t), this;
    }
    after(t) {
      return this.on('finished', t);
    }
    animate(t, n, r) {
      const s = Ie.sanitise(t, n, r),
        i = new Ie(s.duration);
      return (
        this._timeline && i.timeline(this._timeline),
        this._element && i.element(this._element),
        i.loop(s).schedule(s.delay, s.when)
      );
    }
    clearTransform() {
      return (this.transforms = new lt()), this;
    }
    clearTransformsFromQueue() {
      (!this.done ||
        !this._timeline ||
        !this._timeline._runnerIds.includes(this.id)) &&
        (this._queue = this._queue.filter((t) => !t.isTransform));
    }
    delay(t) {
      return this.animate(0, t);
    }
    duration() {
      return this._times * (this._wait + this._duration) - this._wait;
    }
    during(t) {
      return this.queue(null, t);
    }
    ease(t) {
      return (this._stepper = new Si(t)), this;
    }
    element(t) {
      return t == null
        ? this._element
        : ((this._element = t), t._prepareRunner(), this);
    }
    finish() {
      return this.step(1 / 0);
    }
    loop(t, n, r) {
      return (
        typeof t == 'object' && ((n = t.swing), (r = t.wait), (t = t.times)),
        (this._times = t || 1 / 0),
        (this._swing = n || !1),
        (this._wait = r || 0),
        this._times === !0 && (this._times = 1 / 0),
        this
      );
    }
    loops(t) {
      const n = this._duration + this._wait;
      if (t == null) {
        const o = Math.floor(this._time / n),
          l = (this._time - o * n) / this._duration;
        return Math.min(o + l, this._times);
      }
      const r = Math.floor(t),
        s = t % 1,
        i = n * r + this._duration * s;
      return this.time(i);
    }
    persist(t) {
      return t == null ? this._persist : ((this._persist = t), this);
    }
    position(t) {
      const n = this._time,
        r = this._duration,
        s = this._wait,
        i = this._times,
        o = this._swing,
        a = this._reverse;
      let l;
      if (t == null) {
        const w = function (I) {
            const M = o * Math.floor((I % (2 * (s + r))) / (s + r)),
              Y = (M && !a) || (!M && a),
              G = (Math.pow(-1, Y) * (I % (s + r))) / r + Y;
            return Math.max(Math.min(G, 1), 0);
          },
          b = i * (s + r) - s;
        return (
          (l =
            n <= 0
              ? Math.round(w(1e-5))
              : n < b
              ? w(n)
              : Math.round(w(b - 1e-5))),
          l
        );
      }
      const c = Math.floor(this.loops()),
        h = o && c % 2 === 0;
      return (l = c + ((h && !a) || (a && h) ? t : 1 - t)), this.loops(l);
    }
    progress(t) {
      return t == null
        ? Math.min(1, this._time / this.duration())
        : this.time(t * this.duration());
    }
    queue(t, n, r, s) {
      return (
        this._queue.push({
          initialiser: t || ha,
          runner: n || ha,
          retarget: r,
          isTransform: s,
          initialised: !1,
          finished: !1,
        }),
        this.timeline() && this.timeline()._continue(),
        this
      );
    }
    reset() {
      return this._reseted ? this : (this.time(0), (this._reseted = !0), this);
    }
    reverse(t) {
      return (this._reverse = t ?? !this._reverse), this;
    }
    schedule(t, n, r) {
      if ((t instanceof hu || ((r = n), (n = t), (t = this.timeline())), !t))
        throw Error('Runner cannot be scheduled without timeline');
      return t.schedule(this, n, r), this;
    }
    step(t) {
      if (!this.enabled) return this;
      (t = t ?? 16), (this._time += t);
      const n = this.position(),
        r = this._lastPosition !== n && this._time >= 0;
      this._lastPosition = n;
      const s = this.duration(),
        i = this._lastTime <= 0 && this._time > 0,
        o = this._lastTime < s && this._time >= s;
      (this._lastTime = this._time), i && this.fire('start', this);
      const a = this._isDeclarative;
      (this.done = !a && !o && this._time >= s), (this._reseted = !1);
      let l = !1;
      return (
        (r || a) &&
          (this._initialise(r),
          (this.transforms = new lt()),
          (l = this._run(a ? t : n)),
          this.fire('step', this)),
        (this.done = this.done || (l && a)),
        o && this.fire('finished', this),
        this
      );
    }
    time(t) {
      if (t == null) return this._time;
      const n = t - this._time;
      return this.step(n), this;
    }
    timeline(t) {
      return typeof t > 'u' ? this._timeline : ((this._timeline = t), this);
    }
    unschedule() {
      const t = this.timeline();
      return t && t.unschedule(this), this;
    }
    _initialise(t) {
      if (!(!t && !this._isDeclarative))
        for (let n = 0, r = this._queue.length; n < r; ++n) {
          const s = this._queue[n],
            i = this._isDeclarative || (!s.initialised && t);
          (t = !s.finished),
            i && t && (s.initialiser.call(this), (s.initialised = !0));
        }
    }
    _rememberMorpher(t, n) {
      if (
        ((this._history[t] = {
          morpher: n,
          caller: this._queue[this._queue.length - 1],
        }),
        this._isDeclarative)
      ) {
        const r = this.timeline();
        r && r.play();
      }
    }
    _run(t) {
      let n = !0;
      for (let r = 0, s = this._queue.length; r < s; ++r) {
        const i = this._queue[r],
          o = i.runner.call(this, t);
        (i.finished = i.finished || o === !0), (n = n && i.finished);
      }
      return n;
    }
    _tryRetarget(t, n, r) {
      if (this._history[t]) {
        if (!this._history[t].caller.initialised) {
          const i = this._queue.indexOf(this._history[t].caller);
          return this._queue.splice(i, 1), !1;
        }
        this._history[t].caller.retarget
          ? this._history[t].caller.retarget.call(this, n, r)
          : this._history[t].morpher.to(n),
          (this._history[t].caller.finished = !1);
        const s = this.timeline();
        return s && s.play(), !0;
      }
      return !1;
    }
  }
  Ie.id = 0;
  class ws {
    constructor(t = new lt(), n = -1, r = !0) {
      (this.transforms = t), (this.id = n), (this.done = r);
    }
    clearTransformsFromQueue() {}
  }
  Et([Ie, ws], {
    mergeWith(e) {
      return new ws(e.transforms.lmultiply(this.transforms), e.id);
    },
  });
  const du = (e, t) => e.lmultiplyO(t),
    pu = (e) => e.transforms;
  function qp() {
    const t = this._transformationRunners.runners.map(pu).reduce(du, new lt());
    this.transform(t),
      this._transformationRunners.merge(),
      this._transformationRunners.length() === 1 && (this._frameId = null);
  }
  class Zp {
    constructor() {
      (this.runners = []), (this.ids = []);
    }
    add(t) {
      if (this.runners.includes(t)) return;
      const n = t.id + 1;
      return this.runners.push(t), this.ids.push(n), this;
    }
    clearBefore(t) {
      const n = this.ids.indexOf(t + 1) || 1;
      return (
        this.ids.splice(0, n, 0),
        this.runners
          .splice(0, n, new ws())
          .forEach((r) => r.clearTransformsFromQueue()),
        this
      );
    }
    edit(t, n) {
      const r = this.ids.indexOf(t + 1);
      return this.ids.splice(r, 1, t + 1), this.runners.splice(r, 1, n), this;
    }
    getByID(t) {
      return this.runners[this.ids.indexOf(t + 1)];
    }
    length() {
      return this.ids.length;
    }
    merge() {
      let t = null;
      for (let n = 0; n < this.runners.length; ++n) {
        const r = this.runners[n];
        if (
          t &&
          r.done &&
          t.done &&
          (!r._timeline || !r._timeline._runnerIds.includes(r.id)) &&
          (!t._timeline || !t._timeline._runnerIds.includes(t.id))
        ) {
          this.remove(r.id);
          const i = r.mergeWith(t);
          this.edit(t.id, i), (t = i), --n;
        } else t = r;
      }
      return this;
    }
    remove(t) {
      const n = this.ids.indexOf(t + 1);
      return this.ids.splice(n, 1), this.runners.splice(n, 1), this;
    }
  }
  xt({
    Element: {
      animate(e, t, n) {
        const r = Ie.sanitise(e, t, n),
          s = this.timeline();
        return new Ie(r.duration)
          .loop(r)
          .element(this)
          .timeline(s.play())
          .schedule(r.delay, r.when);
      },
      delay(e, t) {
        return this.animate(0, e, t);
      },
      _clearTransformRunnersBefore(e) {
        this._transformationRunners.clearBefore(e.id);
      },
      _currentTransform(e) {
        return this._transformationRunners.runners
          .filter((t) => t.id <= e.id)
          .map(pu)
          .reduce(du, new lt());
      },
      _addRunner(e) {
        this._transformationRunners.add(e),
          Dt.cancelImmediate(this._frameId),
          (this._frameId = Dt.immediate(qp.bind(this)));
      },
      _prepareRunner() {
        this._frameId == null &&
          (this._transformationRunners = new Zp().add(new ws(new lt(this))));
      },
    },
  });
  const Jp = (e, t) => e.filter((n) => !t.includes(n));
  Et(Ie, {
    attr(e, t) {
      return this.styleAttr('attr', e, t);
    },
    css(e, t) {
      return this.styleAttr('css', e, t);
    },
    styleAttr(e, t, n) {
      if (typeof t == 'string') return this.styleAttr(e, { [t]: n });
      let r = t;
      if (this._tryRetarget(e, r)) return this;
      let s = new bn(this._stepper).to(r),
        i = Object.keys(r);
      return (
        this.queue(
          function () {
            s = s.from(this.element()[e](i));
          },
          function (o) {
            return this.element()[e](s.at(o).valueOf()), s.done();
          },
          function (o) {
            const a = Object.keys(o),
              l = Jp(a, i);
            if (l.length) {
              const h = this.element()[e](l),
                d = new Rr(s.from()).valueOf();
              Object.assign(d, h), s.from(d);
            }
            const c = new Rr(s.to()).valueOf();
            Object.assign(c, o), s.to(c), (i = a), (r = o);
          }
        ),
        this._rememberMorpher(e, s),
        this
      );
    },
    zoom(e, t) {
      if (this._tryRetarget('zoom', e, t)) return this;
      let n = new bn(this._stepper).to(new _t(e));
      return (
        this.queue(
          function () {
            n = n.from(this.element().zoom());
          },
          function (r) {
            return this.element().zoom(n.at(r), t), n.done();
          },
          function (r, s) {
            (t = s), n.to(r);
          }
        ),
        this._rememberMorpher('zoom', n),
        this
      );
    },
    transform(e, t, n) {
      if (
        ((t = e.relative || t),
        this._isDeclarative && !t && this._tryRetarget('transform', e))
      )
        return this;
      const r = lt.isMatrixLike(e);
      n = e.affine != null ? e.affine : n ?? !r;
      const s = new bn(this._stepper).type(n ? Br : lt);
      let i, o, a, l, c;
      function h() {
        (o = o || this.element()),
          (i = i || Ti(e, o)),
          (c = new lt(t ? void 0 : o)),
          o._addRunner(this),
          t || o._clearTransformRunnersBefore(this);
      }
      function d(b) {
        t || this.clearTransform();
        const { x: I, y: M } = new qt(i).transform(o._currentTransform(this));
        let Y = new lt({ ...e, origin: [I, M] }),
          G = this._isDeclarative && a ? a : c;
        if (n) {
          (Y = Y.decompose(I, M)), (G = G.decompose(I, M));
          const ut = Y.rotate,
            yt = G.rotate,
            O = [ut - 360, ut, ut + 360],
            k = O.map((C) => Math.abs(C - yt)),
            q = Math.min(...k),
            it = k.indexOf(q);
          Y.rotate = O[it];
        }
        t &&
          (r || (Y.rotate = e.rotate || 0),
          this._isDeclarative && l && (G.rotate = l)),
          s.from(G),
          s.to(Y);
        const st = s.at(b);
        return (
          (l = st.rotate),
          (a = new lt(st)),
          this.addTransform(a),
          o._addRunner(this),
          s.done()
        );
      }
      function w(b) {
        (b.origin || 'center').toString() !==
          (e.origin || 'center').toString() && (i = Ti(b, o)),
          (e = { ...b, origin: i });
      }
      return (
        this.queue(h, d, w, !0),
        this._isDeclarative && this._rememberMorpher('transform', s),
        this
      );
    },
    x(e, t) {
      return this._queueNumber('x', e);
    },
    y(e) {
      return this._queueNumber('y', e);
    },
    dx(e = 0) {
      return this._queueNumberDelta('x', e);
    },
    dy(e = 0) {
      return this._queueNumberDelta('y', e);
    },
    dmove(e, t) {
      return this.dx(e).dy(t);
    },
    _queueNumberDelta(e, t) {
      if (((t = new _t(t)), this._tryRetarget(e, t))) return this;
      const n = new bn(this._stepper).to(t);
      let r = null;
      return (
        this.queue(
          function () {
            (r = this.element()[e]()), n.from(r), n.to(r + t);
          },
          function (s) {
            return this.element()[e](n.at(s)), n.done();
          },
          function (s) {
            n.to(r + new _t(s));
          }
        ),
        this._rememberMorpher(e, n),
        this
      );
    },
    _queueObject(e, t) {
      if (this._tryRetarget(e, t)) return this;
      const n = new bn(this._stepper).to(t);
      return (
        this.queue(
          function () {
            n.from(this.element()[e]());
          },
          function (r) {
            return this.element()[e](n.at(r)), n.done();
          }
        ),
        this._rememberMorpher(e, n),
        this
      );
    },
    _queueNumber(e, t) {
      return this._queueObject(e, new _t(t));
    },
    cx(e) {
      return this._queueNumber('cx', e);
    },
    cy(e) {
      return this._queueNumber('cy', e);
    },
    move(e, t) {
      return this.x(e).y(t);
    },
    center(e, t) {
      return this.cx(e).cy(t);
    },
    size(e, t) {
      let n;
      return (
        (!e || !t) && (n = this._element.bbox()),
        e || (e = (n.width / n.height) * t),
        t || (t = (n.height / n.width) * e),
        this.width(e).height(t)
      );
    },
    width(e) {
      return this._queueNumber('width', e);
    },
    height(e) {
      return this._queueNumber('height', e);
    },
    plot(e, t, n, r) {
      if (arguments.length === 4) return this.plot([e, t, n, r]);
      if (this._tryRetarget('plot', e)) return this;
      const s = new bn(this._stepper).type(this._element.MorphArray).to(e);
      return (
        this.queue(
          function () {
            s.from(this._element.array());
          },
          function (i) {
            return this._element.plot(s.at(i)), s.done();
          }
        ),
        this._rememberMorpher('plot', s),
        this
      );
    },
    leading(e) {
      return this._queueNumber('leading', e);
    },
    viewbox(e, t, n, r) {
      return this._queueObject('viewbox', new ne(e, t, n, r));
    },
    update(e) {
      return typeof e != 'object'
        ? this.update({
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2],
          })
        : (e.opacity != null && this.attr('stop-opacity', e.opacity),
          e.color != null && this.attr('stop-color', e.color),
          e.offset != null && this.attr('offset', e.offset),
          this);
    },
  });
  Et(Ie, { rx: po, ry: go, from: lu, to: uu });
  At(Ie, 'Runner');
  class Gn extends ve {
    constructor(t, n = t) {
      super(Gt('svg', t), n), this.namespace();
    }
    defs() {
      return this.isRoot()
        ? Ce(this.node.querySelector('defs')) || this.put(new ho())
        : this.root().defs();
    }
    isRoot() {
      return (
        !this.node.parentNode ||
        (!(this.node.parentNode instanceof Rt.window.SVGElement) &&
          this.node.parentNode.nodeName !== '#document-fragment')
      );
    }
    namespace() {
      return this.isRoot()
        ? this.attr({ xmlns: ao, version: '1.1' })
            .attr('xmlns:xlink', Dr, Qr)
            .attr('xmlns:svgjs', yd, Qr)
        : this.root().namespace();
    }
    removeNamespace() {
      return this.attr({ xmlns: null, version: null })
        .attr('xmlns:xlink', null, Qr)
        .attr('xmlns:svgjs', null, Qr);
    }
    root() {
      return this.isRoot() ? this : super.root();
    }
  }
  xt({
    Container: {
      nested: Ht(function () {
        return this.put(new Gn());
      }),
    },
  });
  At(Gn, 'Svg', !0);
  let _o = class extends ve {
    constructor(t, n = t) {
      super(Gt('symbol', t), n);
    }
  };
  xt({
    Container: {
      symbol: Ht(function () {
        return this.put(new _o());
      }),
    },
  });
  At(_o, 'Symbol');
  function Qp(e) {
    return (
      this._build === !1 && this.clear(),
      this.node.appendChild(Rt.document.createTextNode(e)),
      this
    );
  }
  function tg() {
    return this.node.getComputedTextLength();
  }
  function eg(e, t = this.bbox()) {
    return e == null ? t.x : this.attr('x', this.attr('x') + e - t.x);
  }
  function ng(e, t = this.bbox()) {
    return e == null ? t.y : this.attr('y', this.attr('y') + e - t.y);
  }
  function rg(e, t, n = this.bbox()) {
    return this.x(e, n).y(t, n);
  }
  function sg(e, t = this.bbox()) {
    return e == null ? t.cx : this.attr('x', this.attr('x') + e - t.cx);
  }
  function ig(e, t = this.bbox()) {
    return e == null ? t.cy : this.attr('y', this.attr('y') + e - t.cy);
  }
  function og(e, t, n = this.bbox()) {
    return this.cx(e, n).cy(t, n);
  }
  function ag(e) {
    return this.attr('x', e);
  }
  function lg(e) {
    return this.attr('y', e);
  }
  function ug(e, t) {
    return this.ax(e).ay(t);
  }
  function cg(e) {
    return (this._build = !!e), this;
  }
  var gu = {
    __proto__: null,
    plain: Qp,
    length: tg,
    x: eg,
    y: ng,
    move: rg,
    cx: sg,
    cy: ig,
    center: og,
    ax: ag,
    ay: lg,
    amove: ug,
    build: cg,
  };
  class Ne extends Te {
    constructor(t, n = t) {
      super(Gt('text', t), n),
        (this.dom.leading = new _t(1.3)),
        (this._rebuild = !0),
        (this._build = !1);
    }
    leading(t) {
      return t == null
        ? this.dom.leading
        : ((this.dom.leading = new _t(t)), this.rebuild());
    }
    rebuild(t) {
      if ((typeof t == 'boolean' && (this._rebuild = t), this._rebuild)) {
        const n = this;
        let r = 0;
        const s = this.dom.leading;
        this.each(function (i) {
          const o = Rt.window
              .getComputedStyle(this.node)
              .getPropertyValue('font-size'),
            a = s * new _t(o);
          this.dom.newLined &&
            (this.attr('x', n.attr('x')),
            this.text() ===
            `
`
              ? (r += a)
              : (this.attr('dy', i ? a + r : 0), (r = 0)));
        }),
          this.fire('rebuild');
      }
      return this;
    }
    setData(t) {
      return (
        (this.dom = t), (this.dom.leading = new _t(t.leading || 1.3)), this
      );
    }
    text(t) {
      if (t === void 0) {
        const n = this.node.childNodes;
        let r = 0;
        t = '';
        for (let s = 0, i = n.length; s < i; ++s) {
          if (n[s].nodeName === 'textPath') {
            s === 0 && (r = 1);
            continue;
          }
          s !== r &&
            n[s].nodeType !== 3 &&
            Ce(n[s]).dom.newLined === !0 &&
            (t += `
`),
            (t += n[s].textContent);
        }
        return t;
      }
      if ((this.clear().build(!0), typeof t == 'function')) t.call(this, this);
      else {
        t = (t + '').split(`
`);
        for (let n = 0, r = t.length; n < r; n++) this.newLine(t[n]);
      }
      return this.build(!1).rebuild();
    }
  }
  Et(Ne, gu);
  xt({
    Container: {
      text: Ht(function (e = '') {
        return this.put(new Ne()).text(e);
      }),
      plain: Ht(function (e = '') {
        return this.put(new Ne()).plain(e);
      }),
    },
  });
  At(Ne, 'Text');
  class zs extends Te {
    constructor(t, n = t) {
      super(Gt('tspan', t), n), (this._build = !1);
    }
    dx(t) {
      return this.attr('dx', t);
    }
    dy(t) {
      return this.attr('dy', t);
    }
    newLine() {
      this.dom.newLined = !0;
      const t = this.parent();
      if (!(t instanceof Ne)) return this;
      const n = t.index(this),
        r = Rt.window.getComputedStyle(this.node).getPropertyValue('font-size'),
        s = t.dom.leading * new _t(r);
      return this.dy(n ? s : 0).attr('x', t.x());
    }
    text(t) {
      return t == null
        ? this.node.textContent +
            (this.dom.newLined
              ? `
`
              : '')
        : (typeof t == 'function'
            ? (this.clear().build(!0), t.call(this, this), this.build(!1))
            : this.plain(t),
          this);
    }
  }
  Et(zs, gu);
  xt({
    Tspan: {
      tspan: Ht(function (e = '') {
        const t = new zs();
        return this._build || this.clear(), this.put(t).text(e);
      }),
    },
    Text: {
      newLine: function (e = '') {
        return this.tspan(e).newLine();
      },
    },
  });
  At(zs, 'Tspan');
  class bo extends Te {
    constructor(t, n = t) {
      super(Gt('circle', t), n);
    }
    radius(t) {
      return this.attr('r', t);
    }
    rx(t) {
      return this.attr('r', t);
    }
    ry(t) {
      return this.rx(t);
    }
    size(t) {
      return this.radius(new _t(t).divide(2));
    }
  }
  Et(bo, { x: eu, y: nu, cx: ru, cy: su, width: iu, height: ou });
  xt({
    Container: {
      circle: Ht(function (e = 0) {
        return this.put(new bo()).size(e).move(0, 0);
      }),
    },
  });
  At(bo, 'Circle');
  class Ri extends ve {
    constructor(t, n = t) {
      super(Gt('clipPath', t), n);
    }
    remove() {
      return (
        this.targets().forEach(function (t) {
          t.unclip();
        }),
        super.remove()
      );
    }
    targets() {
      return qn('svg [clip-path*=' + this.id() + ']');
    }
  }
  xt({
    Container: {
      clip: Ht(function () {
        return this.defs().put(new Ri());
      }),
    },
    Element: {
      clipper() {
        return this.reference('clip-path');
      },
      clipWith(e) {
        const t = e instanceof Ri ? e : this.parent().clip().add(e);
        return this.attr('clip-path', 'url(#' + t.id() + ')');
      },
      unclip() {
        return this.attr('clip-path', null);
      },
    },
  });
  At(Ri, 'ClipPath');
  class mu extends Pe {
    constructor(t, n = t) {
      super(Gt('foreignObject', t), n);
    }
  }
  xt({
    Container: {
      foreignObject: Ht(function (e, t) {
        return this.put(new mu()).size(e, t);
      }),
    },
  });
  At(mu, 'ForeignObject');
  function fg(e, t) {
    return (
      this.children().forEach((n, r) => {
        let s;
        try {
          s = n.bbox();
        } catch {
          return;
        }
        const i = new lt(n),
          o = i.translate(e, t).transform(i.inverse()),
          a = new qt(s.x, s.y).transform(o);
        n.move(a.x, a.y);
      }),
      this
    );
  }
  function hg(e) {
    return this.dmove(e, 0);
  }
  function dg(e) {
    return this.dmove(0, e);
  }
  function pg(e, t = this.bbox()) {
    return e == null ? t.height : this.size(t.width, e, t);
  }
  function gg(e = 0, t = 0, n = this.bbox()) {
    const r = e - n.x,
      s = t - n.y;
    return this.dmove(r, s);
  }
  function mg(e, t, n = this.bbox()) {
    const r = Kn(this, e, t, n),
      s = r.width / n.width,
      i = r.height / n.height;
    return (
      this.children().forEach((o, a) => {
        const l = new qt(n).transform(new lt(o).inverse());
        o.scale(s, i, l.x, l.y);
      }),
      this
    );
  }
  function yg(e, t = this.bbox()) {
    return e == null ? t.width : this.size(e, t.height, t);
  }
  function vg(e, t = this.bbox()) {
    return e == null ? t.x : this.move(e, t.y, t);
  }
  function _g(e, t = this.bbox()) {
    return e == null ? t.y : this.move(t.x, e, t);
  }
  var yu = {
    __proto__: null,
    dmove: fg,
    dx: hg,
    dy: dg,
    height: pg,
    move: gg,
    size: mg,
    width: yg,
    x: vg,
    y: _g,
  };
  class Ys extends ve {
    constructor(t, n = t) {
      super(Gt('g', t), n);
    }
  }
  Et(Ys, yu);
  xt({
    Container: {
      group: Ht(function () {
        return this.put(new Ys());
      }),
    },
  });
  At(Ys, 'G');
  class xs extends ve {
    constructor(t, n = t) {
      super(Gt('a', t), n);
    }
    target(t) {
      return this.attr('target', t);
    }
    to(t) {
      return this.attr('href', t, Dr);
    }
  }
  Et(xs, yu);
  xt({
    Container: {
      link: Ht(function (e) {
        return this.put(new xs()).to(e);
      }),
    },
    Element: {
      unlink() {
        const e = this.linker();
        if (!e) return this;
        const t = e.parent();
        if (!t) return this.remove();
        const n = t.index(e);
        return t.add(this, n), e.remove(), this;
      },
      linkTo(e) {
        let t = this.linker();
        return (
          t || ((t = new xs()), this.wrap(t)),
          typeof e == 'function' ? e.call(t, t) : t.to(e),
          this
        );
      },
      linker() {
        const e = this.parent();
        return e && e.node.nodeName.toLowerCase() === 'a' ? e : null;
      },
    },
  });
  At(xs, 'A');
  class $i extends ve {
    constructor(t, n = t) {
      super(Gt('mask', t), n);
    }
    remove() {
      return (
        this.targets().forEach(function (t) {
          t.unmask();
        }),
        super.remove()
      );
    }
    targets() {
      return qn('svg [mask*=' + this.id() + ']');
    }
  }
  xt({
    Container: {
      mask: Ht(function () {
        return this.defs().put(new $i());
      }),
    },
    Element: {
      masker() {
        return this.reference('mask');
      },
      maskWith(e) {
        const t = e instanceof $i ? e : this.parent().mask().add(e);
        return this.attr('mask', 'url(#' + t.id() + ')');
      },
      unmask() {
        return this.attr('mask', null);
      },
    },
  });
  At($i, 'Mask');
  class vu extends Pe {
    constructor(t, n = t) {
      super(Gt('stop', t), n);
    }
    update(t) {
      return (
        (typeof t == 'number' || t instanceof _t) &&
          (t = {
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2],
          }),
        t.opacity != null && this.attr('stop-opacity', t.opacity),
        t.color != null && this.attr('stop-color', t.color),
        t.offset != null && this.attr('offset', new _t(t.offset)),
        this
      );
    }
  }
  xt({
    Gradient: {
      stop: function (e, t, n) {
        return this.put(new vu()).update(e, t, n);
      },
    },
  });
  At(vu, 'Stop');
  function bg(e, t) {
    if (!e) return '';
    if (!t) return e;
    let n = e + '{';
    for (const r in t) n += gd(r) + ':' + t[r] + ';';
    return (n += '}'), n;
  }
  class Ni extends Pe {
    constructor(t, n = t) {
      super(Gt('style', t), n);
    }
    addText(t = '') {
      return (this.node.textContent += t), this;
    }
    font(t, n, r = {}) {
      return this.rule('@font-face', { fontFamily: t, src: n, ...r });
    }
    rule(t, n) {
      return this.addText(bg(t, n));
    }
  }
  xt('Dom', {
    style(e, t) {
      return this.put(new Ni()).rule(e, t);
    },
    fontface(e, t, n) {
      return this.put(new Ni()).font(e, t, n);
    },
  });
  At(Ni, 'Style');
  class wo extends Ne {
    constructor(t, n = t) {
      super(Gt('textPath', t), n);
    }
    array() {
      const t = this.track();
      return t ? t.array() : null;
    }
    plot(t) {
      const n = this.track();
      let r = null;
      return n && (r = n.plot(t)), t == null ? r : this;
    }
    track() {
      return this.reference('href');
    }
  }
  xt({
    Container: {
      textPath: Ht(function (e, t) {
        return e instanceof Ne || (e = this.text(e)), e.path(t);
      }),
    },
    Text: {
      path: Ht(function (e, t = !0) {
        const n = new wo();
        e instanceof Zn || (e = this.defs().path(e)),
          n.attr('href', '#' + e, Dr);
        let r;
        if (t) for (; (r = this.node.firstChild); ) n.node.appendChild(r);
        return this.put(n);
      }),
      textPath() {
        return this.findOne('textPath');
      },
    },
    Path: {
      text: Ht(function (e) {
        return (
          e instanceof Ne || (e = new Ne().addTo(this.parent()).text(e)),
          e.path(this)
        );
      }),
      targets() {
        return qn('svg textPath').filter((e) =>
          (e.attr('href') || '').includes(this.id())
        );
      },
    },
  });
  wo.prototype.MorphArray = Mn;
  At(wo, 'TextPath');
  class _u extends Te {
    constructor(t, n = t) {
      super(Gt('use', t), n);
    }
    use(t, n) {
      return this.attr('href', (n || '') + '#' + t, Dr);
    }
  }
  xt({
    Container: {
      use: Ht(function (e, t) {
        return this.put(new _u()).use(e, t);
      }),
    },
  });
  At(_u, 'Use');
  Et([Gn, _o, Bs, Mr, _s], ye('viewbox'));
  Et([Or, Yr, zr, Zn], ye('marker'));
  Et(Ne, ye('Text'));
  Et(Zn, ye('Path'));
  Et(ho, ye('Defs'));
  Et([Ne, zs], ye('Tspan'));
  Et([kr, Fs, Fr, Ie], ye('radius'));
  Et(jr, ye('EventTarget'));
  Et(fn, ye('Dom'));
  Et(Pe, ye('Element'));
  Et(Te, ye('Shape'));
  Et([ve, au], ye('Container'));
  Et(Fr, ye('Gradient'));
  Et(Ie, ye('Runner'));
  An.extend(dd());
  Yp([_t, Bt, ne, lt, Hn, hn, Mn, qt]);
  kp();
  function wg(e, t, n) {
    vs(e, 'mousedown', (s) => {
      if ((s.stopPropagation(), e.value)) {
        let i = t.x,
          o = t.y,
          a = 0,
          l = 0;
        (a = s.clientX), (l = s.clientY);
        const c = od((d) => {
            d.preventDefault();
            const { clientX: w, clientY: b } = d,
              I = w - a,
              M = b - l;
            (t.x = i - I / n.value), (t.y = o - M / n.value);
          }, 10),
          h = () => {
            (i = 0),
              (o = 0),
              (a = 0),
              (l = 0),
              document.removeEventListener('mousemove', c),
              document.removeEventListener('mouseup', h);
          };
        document.addEventListener('mousemove', c),
          document.addEventListener('mouseup', h);
      }
    });
  }
  function xg() {
    const e = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      t = As(e),
      n = kt(),
      r = kt(1),
      s = kt(new Gn()),
      i = hd('Control', { events: ['mousewheel'] });
    no(() => {
      o();
    });
    const o = () => {
        n.value && (s.value = new Gn(n.value));
      },
      a = () => {
        (t.width = window.innerWidth), (t.height = window.innerHeight);
      },
      l = (h) => {
        if ((h.preventDefault(), i.value)) c(h);
        else {
          const { deltaY: d } = h;
          t.y += d;
        }
      },
      c = (h) => {
        if (!s.value) return;
        const { deltaY: d, clientX: w, clientY: b } = h,
          I = r.value + +(-d / 1e3).toFixed(1);
        if (I > 0.3 && I < 3) {
          const M = new qt(w, b);
          s.value.zoom(I, M);
          const { x: Y, y: G, width: st, height: ut } = s.value.viewbox();
          (t.x = Y), (t.y = G), (t.width = st), (t.height = ut);
        }
        r.value = I < 0.3 ? 0.3 : I > 3 ? 3 : I;
      };
    return (
      vs(window, 'resize', a),
      vs(n, 'mousewheel', l),
      wg(n, t, r),
      { gridRef: n, gridInfo: t, gridZoom: r, draw: s }
    );
  }
  var ur = function (t) {
    return t.touches || [{ clientX: t.clientX, clientY: t.clientY }];
  };
  Et(Gn, {
    panZoom: function (t) {
      var n,
        r,
        s,
        i,
        o,
        a,
        l,
        c,
        h,
        d,
        w,
        b,
        I = this;
      if ((this.off('.panZoom'), t === !1)) return this;
      t = (n = t) != null ? n : {};
      var M = (r = t.zoomFactor) != null ? r : 2,
        Y = (s = t.zoomMin) != null ? s : Number.MIN_VALUE,
        G = (i = t.zoomMax) != null ? i : Number.MAX_VALUE,
        st = (o = t.wheelZoom) != null ? o : !0,
        ut = (a = t.pinchZoom) != null ? a : !0,
        yt = (l = t.panning) != null ? l : !0,
        O = (c = t.panButton) != null ? c : 0,
        k = (h = t.oneFingerPan) != null ? h : !1,
        q = (d = t.margins) != null ? d : !1,
        it = (w = t.wheelZoomDeltaModeLinePixels) != null ? w : 17,
        C = (b = t.wheelZoomDeltaModeScreenPixels) != null ? b : 53,
        z,
        H,
        J = !1,
        et = this.viewbox(),
        gt = function (F) {
          if (!q) return F;
          var K = q.top,
            mt = q.left,
            St = q.bottom,
            zt = q.right,
            Nt = I.attr(['width', 'height']),
            Pt = Nt.width,
            Mt = Nt.height,
            nt = I.node.preserveAspectRatio.baseVal,
            ee = 0,
            p = 0,
            y = 0,
            x = 0;
          if (nt.align !== nt.SVG_PRESERVEASPECTRATIO_NONE) {
            var T = Pt / Mt,
              S = et.width / et.height;
            if (S !== T) {
              var N = nt.meetOrSlice !== nt.SVG_MEETORSLICE_SLICE,
                X = T > S ? 'width' : 'height',
                $ = X === 'width',
                j = (N && $) || (!N && !$),
                A = j ? T / S : S / T,
                V = F[X] - F[X] * A;
              j
                ? nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMIN ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMID ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMAX
                  ? ((ee = V / 2), (p = -V / 2))
                  : nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMIN ||
                    nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMID ||
                    nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMAX
                  ? (p = -V)
                  : (nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMIN ||
                      nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMID ||
                      nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMAX) &&
                    (ee = V)
                : nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMID ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMID ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMID
                ? ((y = V / 2), (x = -V / 2))
                : nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMIN ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMIN ||
                  nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMIN
                ? (x = -V)
                : (nt.align === nt.SVG_PRESERVEASPECTRATIO_XMINYMAX ||
                    nt.align === nt.SVG_PRESERVEASPECTRATIO_XMIDYMAX ||
                    nt.align === nt.SVG_PRESERVEASPECTRATIO_XMAXYMAX) &&
                  (y = V);
            }
          }
          var ot = et.width + et.x - mt - ee,
            rt = et.x + zt - F.width - p,
            ht = et.height + et.y - K - y,
            bt = et.y + St - F.height - x;
          return (
            (F.x = Math.min(ot, Math.max(rt, F.x))),
            (F.y = Math.min(ht, Math.max(bt, F.y))),
            F
          );
        },
        dt = function (F) {
          F.preventDefault();
          var K;
          switch (F.deltaMode) {
            case 1:
              K = F.deltaY * it;
              break;
            case 2:
              K = F.deltaY * C;
              break;
            default:
              K = F.deltaY;
              break;
          }
          var mt = Math.pow(1 + M, (-1 * K) / 100) * this.zoom(),
            St = this.point(F.clientX, F.clientY);
          if (
            (mt > G && (mt = G),
            mt < Y && (mt = Y),
            this.dispatch('zoom', { level: mt, focus: St }).defaultPrevented)
          )
            return this;
          if ((this.zoom(mt, St), q)) {
            var zt = gt(this.viewbox());
            this.viewbox(zt);
          }
        },
        Z = function Q(F) {
          if (((H = ur(F)), H.length < 2)) {
            yt && k && at.call(this, F);
            return;
          }
          yt && k && vt.call(this, F),
            F.preventDefault(),
            !this.dispatch('pinchZoomStart', { event: F }).defaultPrevented &&
              (this.off('touchstart.panZoom', Q),
              (J = !0),
              Ge(document, 'touchmove.panZoom', U, this, { passive: !1 }),
              Ge(document, 'touchend.panZoom', W, this, { passive: !1 }));
        },
        W = function Q(F) {
          F.preventDefault();
          var K = ur(F);
          K.length > 1 ||
            ((J = !1),
            this.dispatch('pinchZoomEnd', { event: F }),
            ge(document, 'touchmove.panZoom', U),
            ge(document, 'touchend.panZoom', Q),
            this.on('touchstart.panZoom', Z),
            K.length && yt && k && at.call(this, F));
        },
        U = function (F) {
          F.preventDefault();
          var K = ur(F),
            mt = this.zoom(),
            St = Math.sqrt(
              Math.pow(H[0].clientX - H[1].clientX, 2) +
                Math.pow(H[0].clientY - H[1].clientY, 2)
            ),
            zt = Math.sqrt(
              Math.pow(K[0].clientX - K[1].clientX, 2) +
                Math.pow(K[0].clientY - K[1].clientY, 2)
            ),
            Nt = St / zt;
          ((mt < Y && Nt > 1) || (mt > G && Nt < 1)) && (Nt = 1);
          var Pt = {
              x: K[0].clientX + 0.5 * (K[1].clientX - K[0].clientX),
              y: K[0].clientY + 0.5 * (K[1].clientY - K[0].clientY),
            },
            Mt = {
              x: H[0].clientX + 0.5 * (H[1].clientX - H[0].clientX),
              y: H[0].clientY + 0.5 * (H[1].clientY - H[0].clientY),
            },
            nt = this.point(Pt.x, Pt.y),
            ee = this.point(2 * Pt.x - Mt.x, 2 * Pt.y - Mt.y),
            p = new ne(this.viewbox()).transform(
              new lt()
                .translate(-ee.x, -ee.y)
                .scale(Nt, 0, 0)
                .translate(nt.x, nt.y)
            );
          gt(p),
            this.viewbox(p),
            (H = K),
            this.dispatch('zoom', { box: p, focus: ee });
        },
        at = function Q(F) {
          var K = F.type.indexOf('mouse') > -1;
          (K && F.button !== O && F.which !== O + 1) ||
            (F.preventDefault(),
            this.off('mousedown.panZoom', Q),
            (H = ur(F)),
            !J &&
              (this.dispatch('panStart', { event: F }),
              (z = { x: H[0].clientX, y: H[0].clientY }),
              Ge(document, 'touchmove.panZoom mousemove.panZoom', ft, this, {
                passive: !1,
              }),
              Ge(document, 'touchend.panZoom mouseup.panZoom', vt, this, {
                passive: !1,
              })));
        },
        vt = function Q(F) {
          F.preventDefault(),
            ge(document, 'touchmove.panZoom mousemove.panZoom', ft),
            ge(document, 'touchend.panZoom mouseup.panZoom', Q),
            this.on('mousedown.panZoom', at),
            this.dispatch('panEnd', { event: F });
        },
        ft = function (F) {
          F.preventDefault();
          var K = ur(F),
            mt = { x: K[0].clientX, y: K[0].clientY },
            St = this.point(mt.x, mt.y),
            zt = this.point(z.x, z.y),
            Nt = [zt.x - St.x, zt.y - St.y];
          if (!(!Nt[0] && !Nt[1])) {
            var Pt = new ne(this.viewbox()).transform(
              new lt().translate(Nt[0], Nt[1])
            );
            (z = mt),
              gt(Pt),
              !this.dispatch('panning', { box: Pt, event: F })
                .defaultPrevented && this.viewbox(Pt);
          }
        };
      return (
        st && this.on('wheel.panZoom', dt, this, { passive: !1 }),
        ut && this.on('touchstart.panZoom', Z, this, { passive: !1 }),
        yt && this.on('mousedown.panZoom', at, this, { passive: !1 }),
        this
      );
    },
  });
  function Ig(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function Eg(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Tg(e, t, n) {
    return (
      t && Eg(e.prototype, t),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  var pa = function (t) {
      return (
        t.changedTouches && (t = t.changedTouches[0]),
        { x: t.clientX, y: t.clientY }
      );
    },
    Sg = (function () {
      function e(t) {
        Ig(this, e),
          t.remember('_draggable', this),
          (this.el = t),
          (this.drag = this.drag.bind(this)),
          (this.startDrag = this.startDrag.bind(this)),
          (this.endDrag = this.endDrag.bind(this));
      }
      return (
        Tg(e, [
          {
            key: 'init',
            value: function (n) {
              n
                ? (this.el.on('mousedown.drag', this.startDrag),
                  this.el.on('touchstart.drag', this.startDrag, {
                    passive: !1,
                  }))
                : (this.el.off('mousedown.drag'),
                  this.el.off('touchstart.drag'));
            },
          },
          {
            key: 'startDrag',
            value: function (n) {
              var r = !n.type.indexOf('mouse');
              if (
                !(r && n.which !== 1 && n.buttons !== 0) &&
                !this.el.dispatch('beforedrag', { event: n, handler: this })
                  .defaultPrevented
              ) {
                n.preventDefault(),
                  n.stopPropagation(),
                  this.init(!1),
                  (this.box = this.el.bbox()),
                  (this.lastClick = this.el.point(pa(n)));
                var s = (r ? 'mousemove' : 'touchmove') + '.drag',
                  i = (r ? 'mouseup' : 'touchend') + '.drag';
                Ge(window, s, this.drag, this, { passive: !1 }),
                  Ge(window, i, this.endDrag, this, { passive: !1 }),
                  this.el.fire('dragstart', {
                    event: n,
                    handler: this,
                    box: this.box,
                  });
              }
            },
          },
          {
            key: 'drag',
            value: function (n) {
              var r = this.box,
                s = this.lastClick,
                i = this.el.point(pa(n)),
                o = i.x - s.x,
                a = i.y - s.y;
              if (!o && !a) return r;
              var l = r.x + o,
                c = r.y + a;
              (this.box = new ne(l, c, r.w, r.h)),
                (this.lastClick = i),
                !this.el.dispatch('dragmove', {
                  event: n,
                  handler: this,
                  box: this.box,
                }).defaultPrevented && this.move(l, c);
            },
          },
          {
            key: 'move',
            value: function (n, r) {
              this.el.type === 'svg'
                ? Ys.prototype.move.call(this.el, n, r)
                : this.el.move(n, r);
            },
          },
          {
            key: 'endDrag',
            value: function (n) {
              this.drag(n),
                this.el.fire('dragend', {
                  event: n,
                  handler: this,
                  box: this.box,
                }),
                ge(window, 'mousemove.drag'),
                ge(window, 'touchmove.drag'),
                ge(window, 'mouseup.drag'),
                ge(window, 'touchend.drag'),
                this.init(!0);
            },
          },
        ]),
        e
      );
    })();
  Et(Pe, {
    draggable: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
        n = this.remember('_draggable') || new Sg(this);
      return n.init(t), this;
    },
  });
  var bu =
      typeof global == 'object' && global && global.Object === Object && global,
    Cg = typeof self == 'object' && self && self.Object === Object && self,
    ze = bu || Cg || Function('return this')(),
    dn = ze.Symbol,
    wu = Object.prototype,
    Ag = wu.hasOwnProperty,
    Mg = wu.toString,
    cr = dn ? dn.toStringTag : void 0;
  function Og(e) {
    var t = Ag.call(e, cr),
      n = e[cr];
    try {
      e[cr] = void 0;
      var r = !0;
    } catch {}
    var s = Mg.call(e);
    return r && (t ? (e[cr] = n) : delete e[cr]), s;
  }
  var Rg = Object.prototype,
    $g = Rg.toString;
  function Ng(e) {
    return $g.call(e);
  }
  var Pg = '[object Null]',
    Lg = '[object Undefined]',
    ga = dn ? dn.toStringTag : void 0;
  function Jn(e) {
    return e == null
      ? e === void 0
        ? Lg
        : Pg
      : ga && ga in Object(e)
      ? Og(e)
      : Ng(e);
  }
  function Qn(e) {
    return e != null && typeof e == 'object';
  }
  var Dg = '[object Symbol]';
  function jg(e) {
    return typeof e == 'symbol' || (Qn(e) && Jn(e) == Dg);
  }
  function Fg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
      s[n] = t(e[n], n, e);
    return s;
  }
  var ks = Array.isArray,
    Bg = 1 / 0,
    ma = dn ? dn.prototype : void 0,
    ya = ma ? ma.toString : void 0;
  function xu(e) {
    if (typeof e == 'string') return e;
    if (ks(e)) return Fg(e, xu) + '';
    if (jg(e)) return ya ? ya.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Bg ? '-0' : t;
  }
  function Xs(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var zg = '[object AsyncFunction]',
    Yg = '[object Function]',
    kg = '[object GeneratorFunction]',
    Xg = '[object Proxy]';
  function Iu(e) {
    if (!Xs(e)) return !1;
    var t = Jn(e);
    return t == Yg || t == kg || t == zg || t == Xg;
  }
  var ui = ze['__core-js_shared__'],
    va = (function () {
      var e = /[^.]+$/.exec((ui && ui.keys && ui.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function Vg(e) {
    return !!va && va in e;
  }
  var Ug = Function.prototype,
    Hg = Ug.toString;
  function $n(e) {
    if (e != null) {
      try {
        return Hg.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var Gg = /[\\^$.*+?()[\]{}|]/g,
    Wg = /^\[object .+?Constructor\]$/,
    Kg = Function.prototype,
    qg = Object.prototype,
    Zg = Kg.toString,
    Jg = qg.hasOwnProperty,
    Qg = RegExp(
      '^' +
        Zg.call(Jg)
          .replace(Gg, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function tm(e) {
    if (!Xs(e) || Vg(e)) return !1;
    var t = Iu(e) ? Qg : Wg;
    return t.test($n(e));
  }
  function em(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Nn(e, t) {
    var n = em(e, t);
    return tm(n) ? n : void 0;
  }
  var Pi = Nn(ze, 'WeakMap'),
    _a = Object.create,
    nm = (function () {
      function e() {}
      return function (t) {
        if (!Xs(t)) return {};
        if (_a) return _a(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })(),
    ba = (function () {
      try {
        var e = Nn(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })();
  function rm(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var sm = 9007199254740991,
    im = /^(?:0|[1-9]\d*)$/;
  function om(e, t) {
    var n = typeof e;
    return (
      (t = t ?? sm),
      !!t &&
        (n == 'number' || (n != 'symbol' && im.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  function am(e, t, n) {
    t == '__proto__' && ba
      ? ba(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  function Eu(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var lm = Object.prototype,
    um = lm.hasOwnProperty;
  function cm(e, t, n) {
    var r = e[t];
    (!(um.call(e, t) && Eu(r, n)) || (n === void 0 && !(t in e))) &&
      am(e, t, n);
  }
  var fm = 9007199254740991;
  function Tu(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= fm;
  }
  function hm(e) {
    return e != null && Tu(e.length) && !Iu(e);
  }
  var dm = Object.prototype;
  function Su(e) {
    var t = e && e.constructor,
      n = (typeof t == 'function' && t.prototype) || dm;
    return e === n;
  }
  function pm(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var gm = '[object Arguments]';
  function wa(e) {
    return Qn(e) && Jn(e) == gm;
  }
  var Cu = Object.prototype,
    mm = Cu.hasOwnProperty,
    ym = Cu.propertyIsEnumerable,
    vm = wa(
      (function () {
        return arguments;
      })()
    )
      ? wa
      : function (e) {
          return Qn(e) && mm.call(e, 'callee') && !ym.call(e, 'callee');
        };
  function _m() {
    return !1;
  }
  var Au = typeof we == 'object' && we && !we.nodeType && we,
    xa = Au && typeof xe == 'object' && xe && !xe.nodeType && xe,
    bm = xa && xa.exports === Au,
    Ia = bm ? ze.Buffer : void 0,
    wm = Ia ? Ia.isBuffer : void 0,
    Mu = wm || _m,
    xm = '[object Arguments]',
    Im = '[object Array]',
    Em = '[object Boolean]',
    Tm = '[object Date]',
    Sm = '[object Error]',
    Cm = '[object Function]',
    Am = '[object Map]',
    Mm = '[object Number]',
    Om = '[object Object]',
    Rm = '[object RegExp]',
    $m = '[object Set]',
    Nm = '[object String]',
    Pm = '[object WeakMap]',
    Lm = '[object ArrayBuffer]',
    Dm = '[object DataView]',
    jm = '[object Float32Array]',
    Fm = '[object Float64Array]',
    Bm = '[object Int8Array]',
    zm = '[object Int16Array]',
    Ym = '[object Int32Array]',
    km = '[object Uint8Array]',
    Xm = '[object Uint8ClampedArray]',
    Vm = '[object Uint16Array]',
    Um = '[object Uint32Array]',
    Vt = {};
  Vt[jm] =
    Vt[Fm] =
    Vt[Bm] =
    Vt[zm] =
    Vt[Ym] =
    Vt[km] =
    Vt[Xm] =
    Vt[Vm] =
    Vt[Um] =
      !0;
  Vt[xm] =
    Vt[Im] =
    Vt[Lm] =
    Vt[Em] =
    Vt[Dm] =
    Vt[Tm] =
    Vt[Sm] =
    Vt[Cm] =
    Vt[Am] =
    Vt[Mm] =
    Vt[Om] =
    Vt[Rm] =
    Vt[$m] =
    Vt[Nm] =
    Vt[Pm] =
      !1;
  function Hm(e) {
    return Qn(e) && Tu(e.length) && !!Vt[Jn(e)];
  }
  function xo(e) {
    return function (t) {
      return e(t);
    };
  }
  var Ou = typeof we == 'object' && we && !we.nodeType && we,
    _r = Ou && typeof xe == 'object' && xe && !xe.nodeType && xe,
    Gm = _r && _r.exports === Ou,
    ci = Gm && bu.process,
    Wn = (function () {
      try {
        var e = _r && _r.require && _r.require('util').types;
        return e || (ci && ci.binding && ci.binding('util'));
      } catch {}
    })(),
    Ea = Wn && Wn.isTypedArray,
    Wm = Ea ? xo(Ea) : Hm,
    Km = Object.prototype,
    qm = Km.hasOwnProperty;
  function Zm(e, t) {
    var n = ks(e),
      r = !n && vm(e),
      s = !n && !r && Mu(e),
      i = !n && !r && !s && Wm(e),
      o = n || r || s || i,
      a = o ? pm(e.length, String) : [],
      l = a.length;
    for (var c in e)
      qm.call(e, c) &&
        !(
          o &&
          (c == 'length' ||
            (s && (c == 'offset' || c == 'parent')) ||
            (i && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
            om(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function Ru(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var Jm = Ru(Object.keys, Object),
    Qm = Object.prototype,
    ty = Qm.hasOwnProperty;
  function ey(e) {
    if (!Su(e)) return Jm(e);
    var t = [];
    for (var n in Object(e)) ty.call(e, n) && n != 'constructor' && t.push(n);
    return t;
  }
  function ny(e) {
    return hm(e) ? Zm(e) : ey(e);
  }
  var $r = Nn(Object, 'create');
  function ry() {
    (this.__data__ = $r ? $r(null) : {}), (this.size = 0);
  }
  function sy(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var iy = '__lodash_hash_undefined__',
    oy = Object.prototype,
    ay = oy.hasOwnProperty;
  function ly(e) {
    var t = this.__data__;
    if ($r) {
      var n = t[e];
      return n === iy ? void 0 : n;
    }
    return ay.call(t, e) ? t[e] : void 0;
  }
  var uy = Object.prototype,
    cy = uy.hasOwnProperty;
  function fy(e) {
    var t = this.__data__;
    return $r ? t[e] !== void 0 : cy.call(t, e);
  }
  var hy = '__lodash_hash_undefined__';
  function dy(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = $r && t === void 0 ? hy : t),
      this
    );
  }
  function On(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  On.prototype.clear = ry;
  On.prototype.delete = sy;
  On.prototype.get = ly;
  On.prototype.has = fy;
  On.prototype.set = dy;
  function py() {
    (this.__data__ = []), (this.size = 0);
  }
  function Vs(e, t) {
    for (var n = e.length; n--; ) if (Eu(e[n][0], t)) return n;
    return -1;
  }
  var gy = Array.prototype,
    my = gy.splice;
  function yy(e) {
    var t = this.__data__,
      n = Vs(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : my.call(t, n, 1), --this.size, !0;
  }
  function vy(e) {
    var t = this.__data__,
      n = Vs(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function _y(e) {
    return Vs(this.__data__, e) > -1;
  }
  function by(e, t) {
    var n = this.__data__,
      r = Vs(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function Je(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Je.prototype.clear = py;
  Je.prototype.delete = yy;
  Je.prototype.get = vy;
  Je.prototype.has = _y;
  Je.prototype.set = by;
  var Nr = Nn(ze, 'Map');
  function wy() {
    (this.size = 0),
      (this.__data__ = {
        hash: new On(),
        map: new (Nr || Je)(),
        string: new On(),
      });
  }
  function xy(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  function Us(e, t) {
    var n = e.__data__;
    return xy(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  function Iy(e) {
    var t = Us(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Ey(e) {
    return Us(this, e).get(e);
  }
  function Ty(e) {
    return Us(this, e).has(e);
  }
  function Sy(e, t) {
    var n = Us(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function tr(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  tr.prototype.clear = wy;
  tr.prototype.delete = Iy;
  tr.prototype.get = Ey;
  tr.prototype.has = Ty;
  tr.prototype.set = Sy;
  function Cy(e) {
    return e == null ? '' : xu(e);
  }
  function Ay(e, t) {
    for (var n = -1, r = t.length, s = e.length; ++n < r; ) e[s + n] = t[n];
    return e;
  }
  var My = Ru(Object.getPrototypeOf, Object);
  function Oy() {
    (this.__data__ = new Je()), (this.size = 0);
  }
  function Ry(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function $y(e) {
    return this.__data__.get(e);
  }
  function Ny(e) {
    return this.__data__.has(e);
  }
  var Py = 200;
  function Ly(e, t) {
    var n = this.__data__;
    if (n instanceof Je) {
      var r = n.__data__;
      if (!Nr || r.length < Py - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new tr(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function er(e) {
    var t = (this.__data__ = new Je(e));
    this.size = t.size;
  }
  er.prototype.clear = Oy;
  er.prototype.delete = Ry;
  er.prototype.get = $y;
  er.prototype.has = Ny;
  er.prototype.set = Ly;
  var $u = typeof we == 'object' && we && !we.nodeType && we,
    Ta = $u && typeof xe == 'object' && xe && !xe.nodeType && xe,
    Dy = Ta && Ta.exports === $u,
    Sa = Dy ? ze.Buffer : void 0;
  Sa && Sa.allocUnsafe;
  function jy(e, t) {
    return e.slice();
  }
  function Fy(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, s = 0, i = []; ++n < r; ) {
      var o = e[n];
      t(o, n, e) && (i[s++] = o);
    }
    return i;
  }
  function By() {
    return [];
  }
  var zy = Object.prototype,
    Yy = zy.propertyIsEnumerable,
    Ca = Object.getOwnPropertySymbols,
    ky = Ca
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Fy(Ca(e), function (t) {
                return Yy.call(e, t);
              }));
        }
      : By;
  function Xy(e, t, n) {
    var r = t(e);
    return ks(e) ? r : Ay(r, n(e));
  }
  function Vy(e) {
    return Xy(e, ny, ky);
  }
  var Li = Nn(ze, 'DataView'),
    Di = Nn(ze, 'Promise'),
    ji = Nn(ze, 'Set'),
    Aa = '[object Map]',
    Uy = '[object Object]',
    Ma = '[object Promise]',
    Oa = '[object Set]',
    Ra = '[object WeakMap]',
    $a = '[object DataView]',
    Hy = $n(Li),
    Gy = $n(Nr),
    Wy = $n(Di),
    Ky = $n(ji),
    qy = $n(Pi),
    Ve = Jn;
  ((Li && Ve(new Li(new ArrayBuffer(1))) != $a) ||
    (Nr && Ve(new Nr()) != Aa) ||
    (Di && Ve(Di.resolve()) != Ma) ||
    (ji && Ve(new ji()) != Oa) ||
    (Pi && Ve(new Pi()) != Ra)) &&
    (Ve = function (e) {
      var t = Jn(e),
        n = t == Uy ? e.constructor : void 0,
        r = n ? $n(n) : '';
      if (r)
        switch (r) {
          case Hy:
            return $a;
          case Gy:
            return Aa;
          case Wy:
            return Ma;
          case Ky:
            return Oa;
          case qy:
            return Ra;
        }
      return t;
    });
  var Zy = Object.prototype,
    Jy = Zy.hasOwnProperty;
  function Qy(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == 'string' &&
        Jy.call(e, 'index') &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var Na = ze.Uint8Array;
  function Io(e) {
    var t = new e.constructor(e.byteLength);
    return new Na(t).set(new Na(e)), t;
  }
  function t0(e, t) {
    var n = Io(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var e0 = /\w*$/;
  function n0(e) {
    var t = new e.constructor(e.source, e0.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var Pa = dn ? dn.prototype : void 0,
    La = Pa ? Pa.valueOf : void 0;
  function r0(e) {
    return La ? Object(La.call(e)) : {};
  }
  function s0(e, t) {
    var n = Io(e.buffer);
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var i0 = '[object Boolean]',
    o0 = '[object Date]',
    a0 = '[object Map]',
    l0 = '[object Number]',
    u0 = '[object RegExp]',
    c0 = '[object Set]',
    f0 = '[object String]',
    h0 = '[object Symbol]',
    d0 = '[object ArrayBuffer]',
    p0 = '[object DataView]',
    g0 = '[object Float32Array]',
    m0 = '[object Float64Array]',
    y0 = '[object Int8Array]',
    v0 = '[object Int16Array]',
    _0 = '[object Int32Array]',
    b0 = '[object Uint8Array]',
    w0 = '[object Uint8ClampedArray]',
    x0 = '[object Uint16Array]',
    I0 = '[object Uint32Array]';
  function E0(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case d0:
        return Io(e);
      case i0:
      case o0:
        return new r(+e);
      case p0:
        return t0(e);
      case g0:
      case m0:
      case y0:
      case v0:
      case _0:
      case b0:
      case w0:
      case x0:
      case I0:
        return s0(e);
      case a0:
        return new r();
      case l0:
      case f0:
        return new r(e);
      case u0:
        return n0(e);
      case c0:
        return new r();
      case h0:
        return r0(e);
    }
  }
  function T0(e) {
    return typeof e.constructor == 'function' && !Su(e) ? nm(My(e)) : {};
  }
  var S0 = '[object Map]';
  function C0(e) {
    return Qn(e) && Ve(e) == S0;
  }
  var Da = Wn && Wn.isMap,
    A0 = Da ? xo(Da) : C0,
    M0 = '[object Set]';
  function O0(e) {
    return Qn(e) && Ve(e) == M0;
  }
  var ja = Wn && Wn.isSet,
    R0 = ja ? xo(ja) : O0,
    Nu = '[object Arguments]',
    $0 = '[object Array]',
    N0 = '[object Boolean]',
    P0 = '[object Date]',
    L0 = '[object Error]',
    Pu = '[object Function]',
    D0 = '[object GeneratorFunction]',
    j0 = '[object Map]',
    F0 = '[object Number]',
    Lu = '[object Object]',
    B0 = '[object RegExp]',
    z0 = '[object Set]',
    Y0 = '[object String]',
    k0 = '[object Symbol]',
    X0 = '[object WeakMap]',
    V0 = '[object ArrayBuffer]',
    U0 = '[object DataView]',
    H0 = '[object Float32Array]',
    G0 = '[object Float64Array]',
    W0 = '[object Int8Array]',
    K0 = '[object Int16Array]',
    q0 = '[object Int32Array]',
    Z0 = '[object Uint8Array]',
    J0 = '[object Uint8ClampedArray]',
    Q0 = '[object Uint16Array]',
    tv = '[object Uint32Array]',
    Xt = {};
  Xt[Nu] =
    Xt[$0] =
    Xt[V0] =
    Xt[U0] =
    Xt[N0] =
    Xt[P0] =
    Xt[H0] =
    Xt[G0] =
    Xt[W0] =
    Xt[K0] =
    Xt[q0] =
    Xt[j0] =
    Xt[F0] =
    Xt[Lu] =
    Xt[B0] =
    Xt[z0] =
    Xt[Y0] =
    Xt[k0] =
    Xt[Z0] =
    Xt[J0] =
    Xt[Q0] =
    Xt[tv] =
      !0;
  Xt[L0] = Xt[Pu] = Xt[X0] = !1;
  function cs(e, t, n, r, s, i) {
    var o;
    if (o !== void 0) return o;
    if (!Xs(e)) return e;
    var a = ks(e);
    if (a) o = Qy(e);
    else {
      var l = Ve(e),
        c = l == Pu || l == D0;
      if (Mu(e)) return jy(e);
      if (l == Lu || l == Nu || (c && !s)) o = c ? {} : T0(e);
      else {
        if (!Xt[l]) return s ? e : {};
        o = E0(e, l);
      }
    }
    i || (i = new er());
    var h = i.get(e);
    if (h) return h;
    i.set(e, o),
      R0(e)
        ? e.forEach(function (b) {
            o.add(cs(b, t, n, b, e, i));
          })
        : A0(e) &&
          e.forEach(function (b, I) {
            o.set(I, cs(b, t, n, I, e, i));
          });
    var d = Vy,
      w = a ? void 0 : d(e);
    return (
      rm(w || e, function (b, I) {
        w && ((I = b), (b = e[I])), cm(o, I, cs(b, t, n, I, e, i));
      }),
      o
    );
  }
  var ev = 1,
    nv = 4;
  function rv(e) {
    return cs(e, ev | nv);
  }
  var sv = 0;
  function ts(e) {
    var t = ++sv;
    return Cy(e) + t;
  }
  const iv = '#ffc0cb',
    ov = '#f2cf9b',
    jn = 20,
    Fi = '#ff0066',
    Du = !0,
    ju = '#ff1070',
    Fu = 1,
    Xn = 1.75,
    fi = {
      fillColor: '#ffc0cb',
      strokeColor: '#f2cf9b',
      textSize: 20,
      textMultiplier: 1.75,
      textColor: '#ff0066',
      isCurvue: !0,
      lineColor: '#ff1070',
      lineWidth: 1,
    };
  var Qt = ((e) => (
      (e.RL = 'RL'),
      (e.ML = 'ML'),
      (e.MM = 'MM'),
      (e.MR = 'MR'),
      (e.LR = 'LR'),
      e
    ))(Qt || {}),
    an = ((e) => ((e.ROOT = 'root'), (e.SUB = 'sub'), (e.CHILD = 'child'), e))(
      an || {}
    );
  const Fa = (e) => {
      const { group: t, text: n } = e,
        { x: r, y: s } = t,
        { content: i, size: o } = n,
        a = r,
        l = r + o * (i.getByteLen() + 1),
        c = (r + l) / 2,
        h = s,
        d = s + o * Xn,
        w = (h + d) / 2;
      return { startX: a, midX: c, endX: l, startY: h, midY: w, endY: d };
    },
    av = (e, t) => {
      const n = Fa(e),
        r = Fa(t),
        s = { x: n.endX, y: n.midY },
        i = { x: r.startX, y: r.midY };
      if (r.startX > n.endX)
        return (
          (s.x = n.endX), (i.x = r.startX), { start: s, end: i, way: Qt.RL }
        );
      if (r.startX > n.midX && r.startX < n.endX)
        return (
          (s.x = n.midX),
          (i.x = r.startX),
          r.endY < n.startY && ((s.y = n.startY), (i.y = r.midY)),
          r.startY > n.endY && ((s.y = n.endY), (i.y = r.midY)),
          { start: s, end: i, way: Qt.ML }
        );
      if (r.startX > n.startX && r.startX < n.midX) {
        (s.x = n.midX),
          (i.x = r.midX),
          r.endY < n.startY && ((s.y = n.startY), (i.y = r.endY)),
          r.startY > n.endY && ((s.y = n.endY), (i.y = r.startY));
        let o = Qt.MM;
        return (
          r.endX < n.midX && ((i.x = r.endX), (i.y = r.midY), (o = Qt.MR)),
          { start: s, end: i, way: o }
        );
      }
      if (r.startX < n.startX) {
        (s.x = n.startX),
          (i.x = r.endX),
          r.endY < n.startY && ((s.y = n.startY), (i.y = r.endY)),
          r.startY > n.endY && ((s.y = n.endY), (i.y = r.startY));
        let o = Qt.LR;
        return (
          r.endX > n.endX && ((s.x = n.midX), (i.x = r.midX), (o = Qt.MM)),
          r.endX < n.endX &&
            r.endX > n.midX &&
            ((s.x = n.midX), (i.x = r.midX), (o = Qt.MM)),
          r.endX < n.midX &&
            r.endX > n.startX &&
            ((s.x = n.midX), (i.x = r.endX), (i.y = r.midY), (o = Qt.MR)),
          r.endX < n.startX
            ? ((s.x = n.startX),
              (s.y = n.midY),
              (i.x = r.endX),
              (i.y = r.midY),
              (o = Qt.LR),
              { start: s, end: i, way: o })
            : { start: s, end: i, way: o }
        );
      }
      return { start: s, end: i, way: Qt.RL };
    },
    En = ({ moved: e, node: t }) => {
      t.isMoveChildren &&
        t.children.forEach((n) => {
          const { group: r } = n.svgInfo,
            s = r.x + e.movementX,
            i = r.y + e.movementY;
          (r.x = s), (r.y = i), r.group.move(s, i), En({ moved: e, node: n });
        });
    },
    lv = ({ node: e, moved: t }) => {
      if (e.isMoveParent) {
        const n = sn(e);
        if (n) {
          const { group: r } = n.svgInfo,
            s = r.x + t.movementX,
            i = r.y + t.movementY;
          (r.x = s),
            (r.y = i),
            r.group.move(s, i),
            n.children.forEach((a) => {
              a.id !== e.id && de(a);
            });
        }
      }
    },
    es = (e, t) => {
      const { nodeInfo: n, draw: r, node: s } = e,
        { id: i, x: o, y: a, content: l, nodeType: c } = n,
        h = { ...n, draw: r, node: s },
        d = Bi(h, t),
        w = { group: d.group, id: i, x: o, y: a },
        b = { rect: d.rect, fillColor: iv, strokeColor: ov },
        I = { text: d.text, content: l, size: jn, color: Fi };
      let M;
      if (c !== an.ROOT && s) {
        const { svgInfo: Y } = s,
          G = { group: Y.group, text: Y.text },
          ut = zu(G, { group: w, text: I }, r);
        M = { path: ut.path, way: ut.way, isCurve: Du, color: ju, width: Fu };
      }
      return { group: w, rect: b, text: I, path: M };
    },
    Bi = (e, t) => {
      const { draw: n, id: r, x: s, y: i, content: o } = e,
        a = {
          x: s,
          y: i,
          width: jn * (o.getByteLen() + 1),
          height: jn * Xn,
          rx: 4,
          ry: 4,
        },
        l = new kr(a);
      l.stroke(Fi).fill('none');
      const c = n.plain(o);
      c.dx(a.x + jn * 0.5),
        c.dy(a.y + jn * 1.25),
        c.font({ fill: Fi, family: 'Inconsolata', size: jn });
      const h = n.group();
      return (
        h.add(l),
        h.add(c),
        h.id(r),
        h.draggable(),
        h.addClass('group-class'),
        h.on('dragmove', (d) => {
          const { handler: w, box: b, event: I } = d.detail;
          d.preventDefault(), w.move(b.x, b.y);
          const M = { movementX: I.movementX, movementY: I.movementY },
            Y = Ba(h.id());
          if (Y) {
            const { group: G } = Y.svgInfo;
            (G.x = b.x),
              (G.y = b.y),
              de(Y),
              En({ moved: M, node: Y }),
              lv({ moved: M, node: Y });
          }
        }),
        h.on('mousedown', (d) => {
          d.preventDefault();
          const w = Ba(h.id());
          if (w) {
            const { rect: b } = w.svgInfo;
            b.rect.fill(b.fillColor), t && t(w);
          }
        }),
        { group: h, rect: l, text: c }
      );
    },
    Ba = (e) => {
      if (Oe.id === String(e)) return Oe;
      let t = null;
      function n(r) {
        if (r.length)
          for (let s = 0; s < r.length; s++)
            if (r[s].id === String(e)) {
              t = r[s];
              return;
            } else n(r[s].children);
      }
      return n(Oe.children), t;
    },
    sn = (e) => {
      if (e.type === an.SUB) return Oe;
      let t = null;
      const n = e.id;
      function r(s) {
        for (let i = 0; i < s.length; i++) {
          const o = s[i].children;
          for (let a = 0; a < o.length; a++)
            if (o[a].id === n) {
              t = s[i];
              return;
            } else r(s[i].children);
        }
      }
      return r(Oe.children), t;
    },
    uv = ({ start: e, cStart: t, cEnd: n, end: r }) => `
      M ${e.x} ${e.y}
      C ${t.x} ${t.y}
      ${n.x} ${n.y}
      ${r.x} ${r.y}
  `,
    cv = (e) => {
      const { start: t, end: n } = e;
      let r = e.xGap || Math.abs(t.x - n.x),
        s = e.yGap || Math.abs(t.y - n.y);
      (r = Math.round(r)), (s = Math.round(s));
      const i = { x: t.x + r, y: t.y },
        o = { x: n.x - r, y: n.y };
      switch (e.way) {
        case Qt.RL:
          (i.x = t.x + r), (i.y = t.y), (o.x = n.x - r), (o.y = n.y);
          break;
        case Qt.ML:
          (i.x = t.x),
            (i.y = t.y > n.y ? t.y - s : t.y + s),
            (o.x = n.x - r),
            (o.y = n.y);
          break;
        case Qt.MM:
          (i.x = t.x),
            (i.y = t.y > n.y ? t.y - s : t.y + s),
            (o.x = n.x),
            (o.y = t.y > n.y ? n.y + s : n.y - s);
          break;
        case Qt.MR:
          (i.x = t.x),
            (i.y = t.y > n.y ? t.y - s : t.y + s),
            (o.x = n.x + r),
            (o.y = n.y);
          break;
        case Qt.LR:
          (i.x = t.x - r), (i.y = t.y), (o.x = n.x + r), (o.y = n.y);
          break;
      }
      return uv({ start: t, cStart: i, cEnd: o, end: n });
    },
    fv = (e) => {
      const { start: t, end: n } = e;
      let r = `
    M ${t.x} ${t.y} 
    H ${(t.x + n.x) / 2}
    V ${n.y} 
    L ${n.x} ${n.y}
  `;
      switch (e.way) {
        case Qt.RL:
          r = `
          M ${t.x} ${t.y} 
          H ${(t.x + n.x) / 2}
          V ${n.y} 
          L ${n.x} ${n.y}
      `;
          break;
        case Qt.ML:
          r = `
          M ${t.x} ${t.y} 
            ${t.x} ${n.y} 
          L ${n.x} ${n.y}
      `;
          break;
        case Qt.MM:
          r = `
          M ${t.x} ${t.y} 
          V ${(t.y + n.y) / 2} 
          H ${n.x}
          L ${n.x} ${n.y}
      `;
          break;
        case Qt.MR:
          r = `
        M ${t.x} ${t.y} 
          ${t.x} ${n.y}
        L ${n.x} ${n.y}
      `;
          break;
        case Qt.LR:
          r = `
          M ${t.x} ${t.y} 
          H ${(t.x + n.x) / 2}
          V ${n.y} 
          L ${n.x} ${n.y}
      `;
          break;
      }
      return r;
    },
    Bu = ({ node: e, path: t }) => {
      const { pNode: n, cNode: r } = e,
        s = av(n, r),
        { isCurve: i, xGap: o, yGap: a } = t;
      if (i) {
        const l = { xGap: o, yGap: a, ...s };
        return { path: cv(l), way: s.way };
      }
      return { path: fv(s), way: s.way };
    },
    zu = (e, t, n) => {
      const r = { pNode: e, cNode: t },
        s = { isCurve: Du, color: ju, width: Fu },
        i = Bu({ node: r, path: s }),
        { color: o, width: a } = s,
        l = n.path(i.path).fill('none');
      return (
        l.stroke({ color: o, width: a, linecap: 'round', linejoin: 'round' }),
        { path: l, way: i.way }
      );
    },
    za = (e, t) => {
      const n = t.svgInfo.path;
      if (!n) return;
      const r = {
        pNode: { group: e.svgInfo.group, text: e.svgInfo.text },
        cNode: { group: t.svgInfo.group, text: t.svgInfo.text },
      };
      if (n.path) {
        const s = Bu({ node: r, path: n });
        n.path.clear(), n.path.plot(s.path), (n.way = s.way);
      }
    },
    de = (e) => {
      const t = sn(e);
      t && za(t, e),
        e.children.length &&
          e.children.forEach((n) => {
            za(e, n);
          });
    };
  var ns =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {};
  function hv(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function rs(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var Yu = { exports: {} };
  /*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ (function (e, t) {
    (function (n) {
      e.exports = n();
    })(function () {
      return (function n(r, s, i) {
        function o(c, h) {
          if (!s[c]) {
            if (!r[c]) {
              var d = typeof rs == 'function' && rs;
              if (!h && d) return d(c, !0);
              if (a) return a(c, !0);
              var w = new Error("Cannot find module '" + c + "'");
              throw ((w.code = 'MODULE_NOT_FOUND'), w);
            }
            var b = (s[c] = { exports: {} });
            r[c][0].call(
              b.exports,
              function (I) {
                var M = r[c][1][I];
                return o(M || I);
              },
              b,
              b.exports,
              n,
              r,
              s,
              i
            );
          }
          return s[c].exports;
        }
        for (var a = typeof rs == 'function' && rs, l = 0; l < i.length; l++)
          o(i[l]);
        return o;
      })(
        {
          1: [
            function (n, r, s) {
              (function (i) {
                var o = i.MutationObserver || i.WebKitMutationObserver,
                  a;
                if (o) {
                  var l = 0,
                    c = new o(I),
                    h = i.document.createTextNode('');
                  c.observe(h, { characterData: !0 }),
                    (a = function () {
                      h.data = l = ++l % 2;
                    });
                } else if (!i.setImmediate && typeof i.MessageChannel < 'u') {
                  var d = new i.MessageChannel();
                  (d.port1.onmessage = I),
                    (a = function () {
                      d.port2.postMessage(0);
                    });
                } else
                  'document' in i &&
                  'onreadystatechange' in i.document.createElement('script')
                    ? (a = function () {
                        var Y = i.document.createElement('script');
                        (Y.onreadystatechange = function () {
                          I(),
                            (Y.onreadystatechange = null),
                            Y.parentNode.removeChild(Y),
                            (Y = null);
                        }),
                          i.document.documentElement.appendChild(Y);
                      })
                    : (a = function () {
                        setTimeout(I, 0);
                      });
                var w,
                  b = [];
                function I() {
                  w = !0;
                  for (var Y, G, st = b.length; st; ) {
                    for (G = b, b = [], Y = -1; ++Y < st; ) G[Y]();
                    st = b.length;
                  }
                  w = !1;
                }
                r.exports = M;
                function M(Y) {
                  b.push(Y) === 1 && !w && a();
                }
              }).call(
                this,
                typeof ns < 'u'
                  ? ns
                  : typeof self < 'u'
                  ? self
                  : typeof window < 'u'
                  ? window
                  : {}
              );
            },
            {},
          ],
          2: [
            function (n, r, s) {
              var i = n(1);
              function o() {}
              var a = {},
                l = ['REJECTED'],
                c = ['FULFILLED'],
                h = ['PENDING'];
              r.exports = d;
              function d(O) {
                if (typeof O != 'function')
                  throw new TypeError('resolver must be a function');
                (this.state = h),
                  (this.queue = []),
                  (this.outcome = void 0),
                  O !== o && M(this, O);
              }
              (d.prototype.catch = function (O) {
                return this.then(null, O);
              }),
                (d.prototype.then = function (O, k) {
                  if (
                    (typeof O != 'function' && this.state === c) ||
                    (typeof k != 'function' && this.state === l)
                  )
                    return this;
                  var q = new this.constructor(o);
                  if (this.state !== h) {
                    var it = this.state === c ? O : k;
                    b(q, it, this.outcome);
                  } else this.queue.push(new w(q, O, k));
                  return q;
                });
              function w(O, k, q) {
                (this.promise = O),
                  typeof k == 'function' &&
                    ((this.onFulfilled = k),
                    (this.callFulfilled = this.otherCallFulfilled)),
                  typeof q == 'function' &&
                    ((this.onRejected = q),
                    (this.callRejected = this.otherCallRejected));
              }
              (w.prototype.callFulfilled = function (O) {
                a.resolve(this.promise, O);
              }),
                (w.prototype.otherCallFulfilled = function (O) {
                  b(this.promise, this.onFulfilled, O);
                }),
                (w.prototype.callRejected = function (O) {
                  a.reject(this.promise, O);
                }),
                (w.prototype.otherCallRejected = function (O) {
                  b(this.promise, this.onRejected, O);
                });
              function b(O, k, q) {
                i(function () {
                  var it;
                  try {
                    it = k(q);
                  } catch (C) {
                    return a.reject(O, C);
                  }
                  it === O
                    ? a.reject(
                        O,
                        new TypeError('Cannot resolve promise with itself')
                      )
                    : a.resolve(O, it);
                });
              }
              (a.resolve = function (O, k) {
                var q = Y(I, k);
                if (q.status === 'error') return a.reject(O, q.value);
                var it = q.value;
                if (it) M(O, it);
                else {
                  (O.state = c), (O.outcome = k);
                  for (var C = -1, z = O.queue.length; ++C < z; )
                    O.queue[C].callFulfilled(k);
                }
                return O;
              }),
                (a.reject = function (O, k) {
                  (O.state = l), (O.outcome = k);
                  for (var q = -1, it = O.queue.length; ++q < it; )
                    O.queue[q].callRejected(k);
                  return O;
                });
              function I(O) {
                var k = O && O.then;
                if (
                  O &&
                  (typeof O == 'object' || typeof O == 'function') &&
                  typeof k == 'function'
                )
                  return function () {
                    k.apply(O, arguments);
                  };
              }
              function M(O, k) {
                var q = !1;
                function it(J) {
                  q || ((q = !0), a.reject(O, J));
                }
                function C(J) {
                  q || ((q = !0), a.resolve(O, J));
                }
                function z() {
                  k(C, it);
                }
                var H = Y(z);
                H.status === 'error' && it(H.value);
              }
              function Y(O, k) {
                var q = {};
                try {
                  (q.value = O(k)), (q.status = 'success');
                } catch (it) {
                  (q.status = 'error'), (q.value = it);
                }
                return q;
              }
              d.resolve = G;
              function G(O) {
                return O instanceof this ? O : a.resolve(new this(o), O);
              }
              d.reject = st;
              function st(O) {
                var k = new this(o);
                return a.reject(k, O);
              }
              d.all = ut;
              function ut(O) {
                var k = this;
                if (Object.prototype.toString.call(O) !== '[object Array]')
                  return this.reject(new TypeError('must be an array'));
                var q = O.length,
                  it = !1;
                if (!q) return this.resolve([]);
                for (
                  var C = new Array(q), z = 0, H = -1, J = new this(o);
                  ++H < q;

                )
                  et(O[H], H);
                return J;
                function et(gt, dt) {
                  k.resolve(gt).then(Z, function (W) {
                    it || ((it = !0), a.reject(J, W));
                  });
                  function Z(W) {
                    (C[dt] = W),
                      ++z === q && !it && ((it = !0), a.resolve(J, C));
                  }
                }
              }
              d.race = yt;
              function yt(O) {
                var k = this;
                if (Object.prototype.toString.call(O) !== '[object Array]')
                  return this.reject(new TypeError('must be an array'));
                var q = O.length,
                  it = !1;
                if (!q) return this.resolve([]);
                for (var C = -1, z = new this(o); ++C < q; ) H(O[C]);
                return z;
                function H(J) {
                  k.resolve(J).then(
                    function (et) {
                      it || ((it = !0), a.resolve(z, et));
                    },
                    function (et) {
                      it || ((it = !0), a.reject(z, et));
                    }
                  );
                }
              }
            },
            { 1: 1 },
          ],
          3: [
            function (n, r, s) {
              (function (i) {
                typeof i.Promise != 'function' && (i.Promise = n(2));
              }).call(
                this,
                typeof ns < 'u'
                  ? ns
                  : typeof self < 'u'
                  ? self
                  : typeof window < 'u'
                  ? window
                  : {}
              );
            },
            { 2: 2 },
          ],
          4: [
            function (n, r, s) {
              var i =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (u) {
                      return typeof u;
                    }
                  : function (u) {
                      return u &&
                        typeof Symbol == 'function' &&
                        u.constructor === Symbol &&
                        u !== Symbol.prototype
                        ? 'symbol'
                        : typeof u;
                    };
              function o(u, g) {
                if (!(u instanceof g))
                  throw new TypeError('Cannot call a class as a function');
              }
              function a() {
                try {
                  if (typeof indexedDB < 'u') return indexedDB;
                  if (typeof webkitIndexedDB < 'u') return webkitIndexedDB;
                  if (typeof mozIndexedDB < 'u') return mozIndexedDB;
                  if (typeof OIndexedDB < 'u') return OIndexedDB;
                  if (typeof msIndexedDB < 'u') return msIndexedDB;
                } catch {
                  return;
                }
              }
              var l = a();
              function c() {
                try {
                  if (!l || !l.open) return !1;
                  var u =
                      typeof openDatabase < 'u' &&
                      /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                      !/Chrome/.test(navigator.userAgent) &&
                      !/BlackBerry/.test(navigator.platform),
                    g =
                      typeof fetch == 'function' &&
                      fetch.toString().indexOf('[native code') !== -1;
                  return (
                    (!u || g) &&
                    typeof indexedDB < 'u' &&
                    typeof IDBKeyRange < 'u'
                  );
                } catch {
                  return !1;
                }
              }
              function h(u, g) {
                (u = u || []), (g = g || {});
                try {
                  return new Blob(u, g);
                } catch (m) {
                  if (m.name !== 'TypeError') throw m;
                  for (
                    var f =
                        typeof BlobBuilder < 'u'
                          ? BlobBuilder
                          : typeof MSBlobBuilder < 'u'
                          ? MSBlobBuilder
                          : typeof MozBlobBuilder < 'u'
                          ? MozBlobBuilder
                          : WebKitBlobBuilder,
                      v = new f(),
                      _ = 0;
                    _ < u.length;
                    _ += 1
                  )
                    v.append(u[_]);
                  return v.getBlob(g.type);
                }
              }
              typeof Promise > 'u' && n(3);
              var d = Promise;
              function w(u, g) {
                g &&
                  u.then(
                    function (f) {
                      g(null, f);
                    },
                    function (f) {
                      g(f);
                    }
                  );
              }
              function b(u, g, f) {
                typeof g == 'function' && u.then(g),
                  typeof f == 'function' && u.catch(f);
              }
              function I(u) {
                return (
                  typeof u != 'string' &&
                    (console.warn(
                      u + ' used as a key, but it is not a string.'
                    ),
                    (u = String(u))),
                  u
                );
              }
              function M() {
                if (
                  arguments.length &&
                  typeof arguments[arguments.length - 1] == 'function'
                )
                  return arguments[arguments.length - 1];
              }
              var Y = 'local-forage-detect-blob-support',
                G = void 0,
                st = {},
                ut = Object.prototype.toString,
                yt = 'readonly',
                O = 'readwrite';
              function k(u) {
                for (
                  var g = u.length,
                    f = new ArrayBuffer(g),
                    v = new Uint8Array(f),
                    _ = 0;
                  _ < g;
                  _++
                )
                  v[_] = u.charCodeAt(_);
                return f;
              }
              function q(u) {
                return new d(function (g) {
                  var f = u.transaction(Y, O),
                    v = h(['']);
                  f.objectStore(Y).put(v, 'key'),
                    (f.onabort = function (_) {
                      _.preventDefault(), _.stopPropagation(), g(!1);
                    }),
                    (f.oncomplete = function () {
                      var _ = navigator.userAgent.match(/Chrome\/(\d+)/),
                        m = navigator.userAgent.match(/Edge\//);
                      g(m || !_ || parseInt(_[1], 10) >= 43);
                    });
                }).catch(function () {
                  return !1;
                });
              }
              function it(u) {
                return typeof G == 'boolean'
                  ? d.resolve(G)
                  : q(u).then(function (g) {
                      return (G = g), G;
                    });
              }
              function C(u) {
                var g = st[u.name],
                  f = {};
                (f.promise = new d(function (v, _) {
                  (f.resolve = v), (f.reject = _);
                })),
                  g.deferredOperations.push(f),
                  g.dbReady
                    ? (g.dbReady = g.dbReady.then(function () {
                        return f.promise;
                      }))
                    : (g.dbReady = f.promise);
              }
              function z(u) {
                var g = st[u.name],
                  f = g.deferredOperations.pop();
                if (f) return f.resolve(), f.promise;
              }
              function H(u, g) {
                var f = st[u.name],
                  v = f.deferredOperations.pop();
                if (v) return v.reject(g), v.promise;
              }
              function J(u, g) {
                return new d(function (f, v) {
                  if (((st[u.name] = st[u.name] || Q()), u.db))
                    if (g) C(u), u.db.close();
                    else return f(u.db);
                  var _ = [u.name];
                  g && _.push(u.version);
                  var m = l.open.apply(l, _);
                  g &&
                    (m.onupgradeneeded = function (E) {
                      var R = m.result;
                      try {
                        R.createObjectStore(u.storeName),
                          E.oldVersion <= 1 && R.createObjectStore(Y);
                      } catch (P) {
                        if (P.name === 'ConstraintError')
                          console.warn(
                            'The database "' +
                              u.name +
                              '" has been upgraded from version ' +
                              E.oldVersion +
                              ' to version ' +
                              E.newVersion +
                              ', but the storage "' +
                              u.storeName +
                              '" already exists.'
                          );
                        else throw P;
                      }
                    }),
                    (m.onerror = function (E) {
                      E.preventDefault(), v(m.error);
                    }),
                    (m.onsuccess = function () {
                      var E = m.result;
                      (E.onversionchange = function (R) {
                        R.target.close();
                      }),
                        f(E),
                        z(u);
                    });
                });
              }
              function et(u) {
                return J(u, !1);
              }
              function gt(u) {
                return J(u, !0);
              }
              function dt(u, g) {
                if (!u.db) return !0;
                var f = !u.db.objectStoreNames.contains(u.storeName),
                  v = u.version < u.db.version,
                  _ = u.version > u.db.version;
                if (
                  (v &&
                    (u.version !== g &&
                      console.warn(
                        'The database "' +
                          u.name +
                          `" can't be downgraded from version ` +
                          u.db.version +
                          ' to version ' +
                          u.version +
                          '.'
                      ),
                    (u.version = u.db.version)),
                  _ || f)
                ) {
                  if (f) {
                    var m = u.db.version + 1;
                    m > u.version && (u.version = m);
                  }
                  return !0;
                }
                return !1;
              }
              function Z(u) {
                return new d(function (g, f) {
                  var v = new FileReader();
                  (v.onerror = f),
                    (v.onloadend = function (_) {
                      var m = btoa(_.target.result || '');
                      g({
                        __local_forage_encoded_blob: !0,
                        data: m,
                        type: u.type,
                      });
                    }),
                    v.readAsBinaryString(u);
                });
              }
              function W(u) {
                var g = k(atob(u.data));
                return h([g], { type: u.type });
              }
              function U(u) {
                return u && u.__local_forage_encoded_blob;
              }
              function at(u) {
                var g = this,
                  f = g._initReady().then(function () {
                    var v = st[g._dbInfo.name];
                    if (v && v.dbReady) return v.dbReady;
                  });
                return b(f, u, u), f;
              }
              function vt(u) {
                C(u);
                for (
                  var g = st[u.name], f = g.forages, v = 0;
                  v < f.length;
                  v++
                ) {
                  var _ = f[v];
                  _._dbInfo.db && (_._dbInfo.db.close(), (_._dbInfo.db = null));
                }
                return (
                  (u.db = null),
                  et(u)
                    .then(function (m) {
                      return (u.db = m), dt(u) ? gt(u) : m;
                    })
                    .then(function (m) {
                      u.db = g.db = m;
                      for (var E = 0; E < f.length; E++) f[E]._dbInfo.db = m;
                    })
                    .catch(function (m) {
                      throw (H(u, m), m);
                    })
                );
              }
              function ft(u, g, f, v) {
                v === void 0 && (v = 1);
                try {
                  var _ = u.db.transaction(u.storeName, g);
                  f(null, _);
                } catch (m) {
                  if (
                    v > 0 &&
                    (!u.db ||
                      m.name === 'InvalidStateError' ||
                      m.name === 'NotFoundError')
                  )
                    return d
                      .resolve()
                      .then(function () {
                        if (
                          !u.db ||
                          (m.name === 'NotFoundError' &&
                            !u.db.objectStoreNames.contains(u.storeName) &&
                            u.version <= u.db.version)
                        )
                          return u.db && (u.version = u.db.version + 1), gt(u);
                      })
                      .then(function () {
                        return vt(u).then(function () {
                          ft(u, g, f, v - 1);
                        });
                      })
                      .catch(f);
                  f(m);
                }
              }
              function Q() {
                return {
                  forages: [],
                  db: null,
                  dbReady: null,
                  deferredOperations: [],
                };
              }
              function F(u) {
                var g = this,
                  f = { db: null };
                if (u) for (var v in u) f[v] = u[v];
                var _ = st[f.name];
                _ || ((_ = Q()), (st[f.name] = _)),
                  _.forages.push(g),
                  g._initReady || ((g._initReady = g.ready), (g.ready = at));
                var m = [];
                function E() {
                  return d.resolve();
                }
                for (var R = 0; R < _.forages.length; R++) {
                  var P = _.forages[R];
                  P !== g && m.push(P._initReady().catch(E));
                }
                var L = _.forages.slice(0);
                return d
                  .all(m)
                  .then(function () {
                    return (f.db = _.db), et(f);
                  })
                  .then(function (B) {
                    return (
                      (f.db = B), dt(f, g._defaultConfig.version) ? gt(f) : B
                    );
                  })
                  .then(function (B) {
                    (f.db = _.db = B), (g._dbInfo = f);
                    for (var tt = 0; tt < L.length; tt++) {
                      var Tt = L[tt];
                      Tt !== g &&
                        ((Tt._dbInfo.db = f.db),
                        (Tt._dbInfo.version = f.version));
                    }
                  });
              }
              function K(u, g) {
                var f = this;
                u = I(u);
                var v = new d(function (_, m) {
                  f.ready()
                    .then(function () {
                      ft(f._dbInfo, yt, function (E, R) {
                        if (E) return m(E);
                        try {
                          var P = R.objectStore(f._dbInfo.storeName),
                            L = P.get(u);
                          (L.onsuccess = function () {
                            var B = L.result;
                            B === void 0 && (B = null),
                              U(B) && (B = W(B)),
                              _(B);
                          }),
                            (L.onerror = function () {
                              m(L.error);
                            });
                        } catch (B) {
                          m(B);
                        }
                      });
                    })
                    .catch(m);
                });
                return w(v, g), v;
              }
              function mt(u, g) {
                var f = this,
                  v = new d(function (_, m) {
                    f.ready()
                      .then(function () {
                        ft(f._dbInfo, yt, function (E, R) {
                          if (E) return m(E);
                          try {
                            var P = R.objectStore(f._dbInfo.storeName),
                              L = P.openCursor(),
                              B = 1;
                            (L.onsuccess = function () {
                              var tt = L.result;
                              if (tt) {
                                var Tt = tt.value;
                                U(Tt) && (Tt = W(Tt));
                                var Lt = u(Tt, tt.key, B++);
                                Lt !== void 0 ? _(Lt) : tt.continue();
                              } else _();
                            }),
                              (L.onerror = function () {
                                m(L.error);
                              });
                          } catch (tt) {
                            m(tt);
                          }
                        });
                      })
                      .catch(m);
                  });
                return w(v, g), v;
              }
              function St(u, g, f) {
                var v = this;
                u = I(u);
                var _ = new d(function (m, E) {
                  var R;
                  v.ready()
                    .then(function () {
                      return (
                        (R = v._dbInfo),
                        ut.call(g) === '[object Blob]'
                          ? it(R.db).then(function (P) {
                              return P ? g : Z(g);
                            })
                          : g
                      );
                    })
                    .then(function (P) {
                      ft(v._dbInfo, O, function (L, B) {
                        if (L) return E(L);
                        try {
                          var tt = B.objectStore(v._dbInfo.storeName);
                          P === null && (P = void 0);
                          var Tt = tt.put(P, u);
                          (B.oncomplete = function () {
                            P === void 0 && (P = null), m(P);
                          }),
                            (B.onabort = B.onerror =
                              function () {
                                var Lt = Tt.error
                                  ? Tt.error
                                  : Tt.transaction.error;
                                E(Lt);
                              });
                        } catch (Lt) {
                          E(Lt);
                        }
                      });
                    })
                    .catch(E);
                });
                return w(_, f), _;
              }
              function zt(u, g) {
                var f = this;
                u = I(u);
                var v = new d(function (_, m) {
                  f.ready()
                    .then(function () {
                      ft(f._dbInfo, O, function (E, R) {
                        if (E) return m(E);
                        try {
                          var P = R.objectStore(f._dbInfo.storeName),
                            L = P.delete(u);
                          (R.oncomplete = function () {
                            _();
                          }),
                            (R.onerror = function () {
                              m(L.error);
                            }),
                            (R.onabort = function () {
                              var B = L.error ? L.error : L.transaction.error;
                              m(B);
                            });
                        } catch (B) {
                          m(B);
                        }
                      });
                    })
                    .catch(m);
                });
                return w(v, g), v;
              }
              function Nt(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        ft(g._dbInfo, O, function (m, E) {
                          if (m) return _(m);
                          try {
                            var R = E.objectStore(g._dbInfo.storeName),
                              P = R.clear();
                            (E.oncomplete = function () {
                              v();
                            }),
                              (E.onabort = E.onerror =
                                function () {
                                  var L = P.error
                                    ? P.error
                                    : P.transaction.error;
                                  _(L);
                                });
                          } catch (L) {
                            _(L);
                          }
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function Pt(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        ft(g._dbInfo, yt, function (m, E) {
                          if (m) return _(m);
                          try {
                            var R = E.objectStore(g._dbInfo.storeName),
                              P = R.count();
                            (P.onsuccess = function () {
                              v(P.result);
                            }),
                              (P.onerror = function () {
                                _(P.error);
                              });
                          } catch (L) {
                            _(L);
                          }
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function Mt(u, g) {
                var f = this,
                  v = new d(function (_, m) {
                    if (u < 0) {
                      _(null);
                      return;
                    }
                    f.ready()
                      .then(function () {
                        ft(f._dbInfo, yt, function (E, R) {
                          if (E) return m(E);
                          try {
                            var P = R.objectStore(f._dbInfo.storeName),
                              L = !1,
                              B = P.openKeyCursor();
                            (B.onsuccess = function () {
                              var tt = B.result;
                              if (!tt) {
                                _(null);
                                return;
                              }
                              u === 0 || L
                                ? _(tt.key)
                                : ((L = !0), tt.advance(u));
                            }),
                              (B.onerror = function () {
                                m(B.error);
                              });
                          } catch (tt) {
                            m(tt);
                          }
                        });
                      })
                      .catch(m);
                  });
                return w(v, g), v;
              }
              function nt(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        ft(g._dbInfo, yt, function (m, E) {
                          if (m) return _(m);
                          try {
                            var R = E.objectStore(g._dbInfo.storeName),
                              P = R.openKeyCursor(),
                              L = [];
                            (P.onsuccess = function () {
                              var B = P.result;
                              if (!B) {
                                v(L);
                                return;
                              }
                              L.push(B.key), B.continue();
                            }),
                              (P.onerror = function () {
                                _(P.error);
                              });
                          } catch (B) {
                            _(B);
                          }
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function ee(u, g) {
                g = M.apply(this, arguments);
                var f = this.config();
                (u = (typeof u != 'function' && u) || {}),
                  u.name ||
                    ((u.name = u.name || f.name),
                    (u.storeName = u.storeName || f.storeName));
                var v = this,
                  _;
                if (!u.name) _ = d.reject('Invalid arguments');
                else {
                  var m = u.name === f.name && v._dbInfo.db,
                    E = m
                      ? d.resolve(v._dbInfo.db)
                      : et(u).then(function (R) {
                          var P = st[u.name],
                            L = P.forages;
                          P.db = R;
                          for (var B = 0; B < L.length; B++)
                            L[B]._dbInfo.db = R;
                          return R;
                        });
                  u.storeName
                    ? (_ = E.then(function (R) {
                        if (R.objectStoreNames.contains(u.storeName)) {
                          var P = R.version + 1;
                          C(u);
                          var L = st[u.name],
                            B = L.forages;
                          R.close();
                          for (var tt = 0; tt < B.length; tt++) {
                            var Tt = B[tt];
                            (Tt._dbInfo.db = null), (Tt._dbInfo.version = P);
                          }
                          var Lt = new d(function (Ft, te) {
                            var Jt = l.open(u.name, P);
                            (Jt.onerror = function (Se) {
                              var ir = Jt.result;
                              ir.close(), te(Se);
                            }),
                              (Jt.onupgradeneeded = function () {
                                var Se = Jt.result;
                                Se.deleteObjectStore(u.storeName);
                              }),
                              (Jt.onsuccess = function () {
                                var Se = Jt.result;
                                Se.close(), Ft(Se);
                              });
                          });
                          return Lt.then(function (Ft) {
                            L.db = Ft;
                            for (var te = 0; te < B.length; te++) {
                              var Jt = B[te];
                              (Jt._dbInfo.db = Ft), z(Jt._dbInfo);
                            }
                          }).catch(function (Ft) {
                            throw (
                              ((H(u, Ft) || d.resolve()).catch(function () {}),
                              Ft)
                            );
                          });
                        }
                      }))
                    : (_ = E.then(function (R) {
                        C(u);
                        var P = st[u.name],
                          L = P.forages;
                        R.close();
                        for (var B = 0; B < L.length; B++) {
                          var tt = L[B];
                          tt._dbInfo.db = null;
                        }
                        var Tt = new d(function (Lt, Ft) {
                          var te = l.deleteDatabase(u.name);
                          (te.onerror = function () {
                            var Jt = te.result;
                            Jt && Jt.close(), Ft(te.error);
                          }),
                            (te.onblocked = function () {
                              console.warn(
                                'dropInstance blocked for database "' +
                                  u.name +
                                  '" until all open connections are closed'
                              );
                            }),
                            (te.onsuccess = function () {
                              var Jt = te.result;
                              Jt && Jt.close(), Lt(Jt);
                            });
                        });
                        return Tt.then(function (Lt) {
                          P.db = Lt;
                          for (var Ft = 0; Ft < L.length; Ft++) {
                            var te = L[Ft];
                            z(te._dbInfo);
                          }
                        }).catch(function (Lt) {
                          throw (
                            ((H(u, Lt) || d.resolve()).catch(function () {}),
                            Lt)
                          );
                        });
                      }));
                }
                return w(_, g), _;
              }
              var p = {
                _driver: 'asyncStorage',
                _initStorage: F,
                _support: c(),
                iterate: mt,
                getItem: K,
                setItem: St,
                removeItem: zt,
                clear: Nt,
                length: Pt,
                key: Mt,
                keys: nt,
                dropInstance: ee,
              };
              function y() {
                return typeof openDatabase == 'function';
              }
              var x =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                T = '~~local_forage_type~',
                S = /^~~local_forage_type~([^~]+)~/,
                N = '__lfsc__:',
                X = N.length,
                $ = 'arbf',
                j = 'blob',
                A = 'si08',
                V = 'ui08',
                ot = 'uic8',
                rt = 'si16',
                ht = 'si32',
                bt = 'ur16',
                $t = 'ui32',
                Yt = 'fl32',
                Zt = 'fl64',
                ce = X + $.length,
                Ye = Object.prototype.toString;
              function nr(u) {
                var g = u.length * 0.75,
                  f = u.length,
                  v,
                  _ = 0,
                  m,
                  E,
                  R,
                  P;
                u[u.length - 1] === '=' &&
                  (g--, u[u.length - 2] === '=' && g--);
                var L = new ArrayBuffer(g),
                  B = new Uint8Array(L);
                for (v = 0; v < f; v += 4)
                  (m = x.indexOf(u[v])),
                    (E = x.indexOf(u[v + 1])),
                    (R = x.indexOf(u[v + 2])),
                    (P = x.indexOf(u[v + 3])),
                    (B[_++] = (m << 2) | (E >> 4)),
                    (B[_++] = ((E & 15) << 4) | (R >> 2)),
                    (B[_++] = ((R & 3) << 6) | (P & 63));
                return L;
              }
              function ke(u) {
                var g = new Uint8Array(u),
                  f = '',
                  v;
                for (v = 0; v < g.length; v += 3)
                  (f += x[g[v] >> 2]),
                    (f += x[((g[v] & 3) << 4) | (g[v + 1] >> 4)]),
                    (f += x[((g[v + 1] & 15) << 2) | (g[v + 2] >> 6)]),
                    (f += x[g[v + 2] & 63]);
                return (
                  g.length % 3 === 2
                    ? (f = f.substring(0, f.length - 1) + '=')
                    : g.length % 3 === 1 &&
                      (f = f.substring(0, f.length - 2) + '=='),
                  f
                );
              }
              function Vr(u, g) {
                var f = '';
                if (
                  (u && (f = Ye.call(u)),
                  u &&
                    (f === '[object ArrayBuffer]' ||
                      (u.buffer &&
                        Ye.call(u.buffer) === '[object ArrayBuffer]')))
                ) {
                  var v,
                    _ = N;
                  u instanceof ArrayBuffer
                    ? ((v = u), (_ += $))
                    : ((v = u.buffer),
                      f === '[object Int8Array]'
                        ? (_ += A)
                        : f === '[object Uint8Array]'
                        ? (_ += V)
                        : f === '[object Uint8ClampedArray]'
                        ? (_ += ot)
                        : f === '[object Int16Array]'
                        ? (_ += rt)
                        : f === '[object Uint16Array]'
                        ? (_ += bt)
                        : f === '[object Int32Array]'
                        ? (_ += ht)
                        : f === '[object Uint32Array]'
                        ? (_ += $t)
                        : f === '[object Float32Array]'
                        ? (_ += Yt)
                        : f === '[object Float64Array]'
                        ? (_ += Zt)
                        : g(new Error('Failed to get type for BinaryArray'))),
                    g(_ + ke(v));
                } else if (f === '[object Blob]') {
                  var m = new FileReader();
                  (m.onload = function () {
                    var E = T + u.type + '~' + ke(this.result);
                    g(N + j + E);
                  }),
                    m.readAsArrayBuffer(u);
                } else
                  try {
                    g(JSON.stringify(u));
                  } catch (E) {
                    console.error(
                      "Couldn't convert value into a JSON string: ",
                      u
                    ),
                      g(null, E);
                  }
              }
              function oe(u) {
                if (u.substring(0, X) !== N) return JSON.parse(u);
                var g = u.substring(ce),
                  f = u.substring(X, ce),
                  v;
                if (f === j && S.test(g)) {
                  var _ = g.match(S);
                  (v = _[1]), (g = g.substring(_[0].length));
                }
                var m = nr(g);
                switch (f) {
                  case $:
                    return m;
                  case j:
                    return h([m], { type: v });
                  case A:
                    return new Int8Array(m);
                  case V:
                    return new Uint8Array(m);
                  case ot:
                    return new Uint8ClampedArray(m);
                  case rt:
                    return new Int16Array(m);
                  case bt:
                    return new Uint16Array(m);
                  case ht:
                    return new Int32Array(m);
                  case $t:
                    return new Uint32Array(m);
                  case Yt:
                    return new Float32Array(m);
                  case Zt:
                    return new Float64Array(m);
                  default:
                    throw new Error('Unkown type: ' + f);
                }
              }
              var fe = {
                serialize: Vr,
                deserialize: oe,
                stringToBuffer: nr,
                bufferToString: ke,
              };
              function rr(u, g, f, v) {
                u.executeSql(
                  'CREATE TABLE IF NOT EXISTS ' +
                    g.storeName +
                    ' (id INTEGER PRIMARY KEY, key unique, value)',
                  [],
                  f,
                  v
                );
              }
              function ku(u) {
                var g = this,
                  f = { db: null };
                if (u)
                  for (var v in u)
                    f[v] = typeof u[v] != 'string' ? u[v].toString() : u[v];
                var _ = new d(function (m, E) {
                  try {
                    f.db = openDatabase(
                      f.name,
                      String(f.version),
                      f.description,
                      f.size
                    );
                  } catch (R) {
                    return E(R);
                  }
                  f.db.transaction(function (R) {
                    rr(
                      R,
                      f,
                      function () {
                        (g._dbInfo = f), m();
                      },
                      function (P, L) {
                        E(L);
                      }
                    );
                  }, E);
                });
                return (f.serializer = fe), _;
              }
              function Qe(u, g, f, v, _, m) {
                u.executeSql(
                  f,
                  v,
                  _,
                  function (E, R) {
                    R.code === R.SYNTAX_ERR
                      ? E.executeSql(
                          "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                          [g.storeName],
                          function (P, L) {
                            L.rows.length
                              ? m(P, R)
                              : rr(
                                  P,
                                  g,
                                  function () {
                                    P.executeSql(f, v, _, m);
                                  },
                                  m
                                );
                          },
                          m
                        )
                      : m(E, R);
                  },
                  m
                );
              }
              function Xu(u, g) {
                var f = this;
                u = I(u);
                var v = new d(function (_, m) {
                  f.ready()
                    .then(function () {
                      var E = f._dbInfo;
                      E.db.transaction(function (R) {
                        Qe(
                          R,
                          E,
                          'SELECT * FROM ' +
                            E.storeName +
                            ' WHERE key = ? LIMIT 1',
                          [u],
                          function (P, L) {
                            var B = L.rows.length ? L.rows.item(0).value : null;
                            B && (B = E.serializer.deserialize(B)), _(B);
                          },
                          function (P, L) {
                            m(L);
                          }
                        );
                      });
                    })
                    .catch(m);
                });
                return w(v, g), v;
              }
              function Vu(u, g) {
                var f = this,
                  v = new d(function (_, m) {
                    f.ready()
                      .then(function () {
                        var E = f._dbInfo;
                        E.db.transaction(function (R) {
                          Qe(
                            R,
                            E,
                            'SELECT * FROM ' + E.storeName,
                            [],
                            function (P, L) {
                              for (
                                var B = L.rows, tt = B.length, Tt = 0;
                                Tt < tt;
                                Tt++
                              ) {
                                var Lt = B.item(Tt),
                                  Ft = Lt.value;
                                if (
                                  (Ft && (Ft = E.serializer.deserialize(Ft)),
                                  (Ft = u(Ft, Lt.key, Tt + 1)),
                                  Ft !== void 0)
                                ) {
                                  _(Ft);
                                  return;
                                }
                              }
                              _();
                            },
                            function (P, L) {
                              m(L);
                            }
                          );
                        });
                      })
                      .catch(m);
                  });
                return w(v, g), v;
              }
              function Eo(u, g, f, v) {
                var _ = this;
                u = I(u);
                var m = new d(function (E, R) {
                  _.ready()
                    .then(function () {
                      g === void 0 && (g = null);
                      var P = g,
                        L = _._dbInfo;
                      L.serializer.serialize(g, function (B, tt) {
                        tt
                          ? R(tt)
                          : L.db.transaction(
                              function (Tt) {
                                Qe(
                                  Tt,
                                  L,
                                  'INSERT OR REPLACE INTO ' +
                                    L.storeName +
                                    ' (key, value) VALUES (?, ?)',
                                  [u, B],
                                  function () {
                                    E(P);
                                  },
                                  function (Lt, Ft) {
                                    R(Ft);
                                  }
                                );
                              },
                              function (Tt) {
                                if (Tt.code === Tt.QUOTA_ERR) {
                                  if (v > 0) {
                                    E(Eo.apply(_, [u, P, f, v - 1]));
                                    return;
                                  }
                                  R(Tt);
                                }
                              }
                            );
                      });
                    })
                    .catch(R);
                });
                return w(m, f), m;
              }
              function Uu(u, g, f) {
                return Eo.apply(this, [u, g, f, 1]);
              }
              function Hu(u, g) {
                var f = this;
                u = I(u);
                var v = new d(function (_, m) {
                  f.ready()
                    .then(function () {
                      var E = f._dbInfo;
                      E.db.transaction(function (R) {
                        Qe(
                          R,
                          E,
                          'DELETE FROM ' + E.storeName + ' WHERE key = ?',
                          [u],
                          function () {
                            _();
                          },
                          function (P, L) {
                            m(L);
                          }
                        );
                      });
                    })
                    .catch(m);
                });
                return w(v, g), v;
              }
              function Gu(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        var m = g._dbInfo;
                        m.db.transaction(function (E) {
                          Qe(
                            E,
                            m,
                            'DELETE FROM ' + m.storeName,
                            [],
                            function () {
                              v();
                            },
                            function (R, P) {
                              _(P);
                            }
                          );
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function Wu(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        var m = g._dbInfo;
                        m.db.transaction(function (E) {
                          Qe(
                            E,
                            m,
                            'SELECT COUNT(key) as c FROM ' + m.storeName,
                            [],
                            function (R, P) {
                              var L = P.rows.item(0).c;
                              v(L);
                            },
                            function (R, P) {
                              _(P);
                            }
                          );
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function Ku(u, g) {
                var f = this,
                  v = new d(function (_, m) {
                    f.ready()
                      .then(function () {
                        var E = f._dbInfo;
                        E.db.transaction(function (R) {
                          Qe(
                            R,
                            E,
                            'SELECT key FROM ' +
                              E.storeName +
                              ' WHERE id = ? LIMIT 1',
                            [u + 1],
                            function (P, L) {
                              var B = L.rows.length ? L.rows.item(0).key : null;
                              _(B);
                            },
                            function (P, L) {
                              m(L);
                            }
                          );
                        });
                      })
                      .catch(m);
                  });
                return w(v, g), v;
              }
              function qu(u) {
                var g = this,
                  f = new d(function (v, _) {
                    g.ready()
                      .then(function () {
                        var m = g._dbInfo;
                        m.db.transaction(function (E) {
                          Qe(
                            E,
                            m,
                            'SELECT key FROM ' + m.storeName,
                            [],
                            function (R, P) {
                              for (var L = [], B = 0; B < P.rows.length; B++)
                                L.push(P.rows.item(B).key);
                              v(L);
                            },
                            function (R, P) {
                              _(P);
                            }
                          );
                        });
                      })
                      .catch(_);
                  });
                return w(f, u), f;
              }
              function Zu(u) {
                return new d(function (g, f) {
                  u.transaction(
                    function (v) {
                      v.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                        [],
                        function (_, m) {
                          for (var E = [], R = 0; R < m.rows.length; R++)
                            E.push(m.rows.item(R).name);
                          g({ db: u, storeNames: E });
                        },
                        function (_, m) {
                          f(m);
                        }
                      );
                    },
                    function (v) {
                      f(v);
                    }
                  );
                });
              }
              function Ju(u, g) {
                g = M.apply(this, arguments);
                var f = this.config();
                (u = (typeof u != 'function' && u) || {}),
                  u.name ||
                    ((u.name = u.name || f.name),
                    (u.storeName = u.storeName || f.storeName));
                var v = this,
                  _;
                return (
                  u.name
                    ? (_ = new d(function (m) {
                        var E;
                        u.name === f.name
                          ? (E = v._dbInfo.db)
                          : (E = openDatabase(u.name, '', '', 0)),
                          u.storeName
                            ? m({ db: E, storeNames: [u.storeName] })
                            : m(Zu(E));
                      }).then(function (m) {
                        return new d(function (E, R) {
                          m.db.transaction(
                            function (P) {
                              function L(Lt) {
                                return new d(function (Ft, te) {
                                  P.executeSql(
                                    'DROP TABLE IF EXISTS ' + Lt,
                                    [],
                                    function () {
                                      Ft();
                                    },
                                    function (Jt, Se) {
                                      te(Se);
                                    }
                                  );
                                });
                              }
                              for (
                                var B = [], tt = 0, Tt = m.storeNames.length;
                                tt < Tt;
                                tt++
                              )
                                B.push(L(m.storeNames[tt]));
                              d.all(B)
                                .then(function () {
                                  E();
                                })
                                .catch(function (Lt) {
                                  R(Lt);
                                });
                            },
                            function (P) {
                              R(P);
                            }
                          );
                        });
                      }))
                    : (_ = d.reject('Invalid arguments')),
                  w(_, g),
                  _
                );
              }
              var Qu = {
                _driver: 'webSQLStorage',
                _initStorage: ku,
                _support: y(),
                iterate: Vu,
                getItem: Xu,
                setItem: Uu,
                removeItem: Hu,
                clear: Gu,
                length: Wu,
                key: Ku,
                keys: qu,
                dropInstance: Ju,
              };
              function tc() {
                try {
                  return (
                    typeof localStorage < 'u' &&
                    'setItem' in localStorage &&
                    !!localStorage.setItem
                  );
                } catch {
                  return !1;
                }
              }
              function To(u, g) {
                var f = u.name + '/';
                return (
                  u.storeName !== g.storeName && (f += u.storeName + '/'), f
                );
              }
              function ec() {
                var u = '_localforage_support_test';
                try {
                  return (
                    localStorage.setItem(u, !0), localStorage.removeItem(u), !1
                  );
                } catch {
                  return !0;
                }
              }
              function nc() {
                return !ec() || localStorage.length > 0;
              }
              function rc(u) {
                var g = this,
                  f = {};
                if (u) for (var v in u) f[v] = u[v];
                return (
                  (f.keyPrefix = To(u, g._defaultConfig)),
                  nc()
                    ? ((g._dbInfo = f), (f.serializer = fe), d.resolve())
                    : d.reject()
                );
              }
              function sc(u) {
                var g = this,
                  f = g.ready().then(function () {
                    for (
                      var v = g._dbInfo.keyPrefix, _ = localStorage.length - 1;
                      _ >= 0;
                      _--
                    ) {
                      var m = localStorage.key(_);
                      m.indexOf(v) === 0 && localStorage.removeItem(m);
                    }
                  });
                return w(f, u), f;
              }
              function ic(u, g) {
                var f = this;
                u = I(u);
                var v = f.ready().then(function () {
                  var _ = f._dbInfo,
                    m = localStorage.getItem(_.keyPrefix + u);
                  return m && (m = _.serializer.deserialize(m)), m;
                });
                return w(v, g), v;
              }
              function oc(u, g) {
                var f = this,
                  v = f.ready().then(function () {
                    for (
                      var _ = f._dbInfo,
                        m = _.keyPrefix,
                        E = m.length,
                        R = localStorage.length,
                        P = 1,
                        L = 0;
                      L < R;
                      L++
                    ) {
                      var B = localStorage.key(L);
                      if (B.indexOf(m) === 0) {
                        var tt = localStorage.getItem(B);
                        if (
                          (tt && (tt = _.serializer.deserialize(tt)),
                          (tt = u(tt, B.substring(E), P++)),
                          tt !== void 0)
                        )
                          return tt;
                      }
                    }
                  });
                return w(v, g), v;
              }
              function ac(u, g) {
                var f = this,
                  v = f.ready().then(function () {
                    var _ = f._dbInfo,
                      m;
                    try {
                      m = localStorage.key(u);
                    } catch {
                      m = null;
                    }
                    return m && (m = m.substring(_.keyPrefix.length)), m;
                  });
                return w(v, g), v;
              }
              function lc(u) {
                var g = this,
                  f = g.ready().then(function () {
                    for (
                      var v = g._dbInfo, _ = localStorage.length, m = [], E = 0;
                      E < _;
                      E++
                    ) {
                      var R = localStorage.key(E);
                      R.indexOf(v.keyPrefix) === 0 &&
                        m.push(R.substring(v.keyPrefix.length));
                    }
                    return m;
                  });
                return w(f, u), f;
              }
              function uc(u) {
                var g = this,
                  f = g.keys().then(function (v) {
                    return v.length;
                  });
                return w(f, u), f;
              }
              function cc(u, g) {
                var f = this;
                u = I(u);
                var v = f.ready().then(function () {
                  var _ = f._dbInfo;
                  localStorage.removeItem(_.keyPrefix + u);
                });
                return w(v, g), v;
              }
              function fc(u, g, f) {
                var v = this;
                u = I(u);
                var _ = v.ready().then(function () {
                  g === void 0 && (g = null);
                  var m = g;
                  return new d(function (E, R) {
                    var P = v._dbInfo;
                    P.serializer.serialize(g, function (L, B) {
                      if (B) R(B);
                      else
                        try {
                          localStorage.setItem(P.keyPrefix + u, L), E(m);
                        } catch (tt) {
                          (tt.name === 'QuotaExceededError' ||
                            tt.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                            R(tt),
                            R(tt);
                        }
                    });
                  });
                });
                return w(_, f), _;
              }
              function hc(u, g) {
                if (
                  ((g = M.apply(this, arguments)),
                  (u = (typeof u != 'function' && u) || {}),
                  !u.name)
                ) {
                  var f = this.config();
                  (u.name = u.name || f.name),
                    (u.storeName = u.storeName || f.storeName);
                }
                var v = this,
                  _;
                return (
                  u.name
                    ? (_ = new d(function (m) {
                        u.storeName
                          ? m(To(u, v._defaultConfig))
                          : m(u.name + '/');
                      }).then(function (m) {
                        for (var E = localStorage.length - 1; E >= 0; E--) {
                          var R = localStorage.key(E);
                          R.indexOf(m) === 0 && localStorage.removeItem(R);
                        }
                      }))
                    : (_ = d.reject('Invalid arguments')),
                  w(_, g),
                  _
                );
              }
              var dc = {
                  _driver: 'localStorageWrapper',
                  _initStorage: rc,
                  _support: tc(),
                  iterate: oc,
                  getItem: ic,
                  setItem: fc,
                  removeItem: cc,
                  clear: sc,
                  length: uc,
                  key: ac,
                  keys: lc,
                  dropInstance: hc,
                },
                pc = function (g, f) {
                  return (
                    g === f ||
                    (typeof g == 'number' &&
                      typeof f == 'number' &&
                      isNaN(g) &&
                      isNaN(f))
                  );
                },
                gc = function (g, f) {
                  for (var v = g.length, _ = 0; _ < v; ) {
                    if (pc(g[_], f)) return !0;
                    _++;
                  }
                  return !1;
                },
                So =
                  Array.isArray ||
                  function (u) {
                    return (
                      Object.prototype.toString.call(u) === '[object Array]'
                    );
                  },
                sr = {},
                Co = {},
                Pn = { INDEXEDDB: p, WEBSQL: Qu, LOCALSTORAGE: dc },
                mc = [
                  Pn.INDEXEDDB._driver,
                  Pn.WEBSQL._driver,
                  Pn.LOCALSTORAGE._driver,
                ],
                Ur = ['dropInstance'],
                Hs = [
                  'clear',
                  'getItem',
                  'iterate',
                  'key',
                  'keys',
                  'length',
                  'removeItem',
                  'setItem',
                ].concat(Ur),
                yc = {
                  description: '',
                  driver: mc.slice(),
                  name: 'localforage',
                  size: 4980736,
                  storeName: 'keyvaluepairs',
                  version: 1,
                };
              function vc(u, g) {
                u[g] = function () {
                  var f = arguments;
                  return u.ready().then(function () {
                    return u[g].apply(u, f);
                  });
                };
              }
              function Gs() {
                for (var u = 1; u < arguments.length; u++) {
                  var g = arguments[u];
                  if (g)
                    for (var f in g)
                      g.hasOwnProperty(f) &&
                        (So(g[f])
                          ? (arguments[0][f] = g[f].slice())
                          : (arguments[0][f] = g[f]));
                }
                return arguments[0];
              }
              var _c = (function () {
                  function u(g) {
                    o(this, u);
                    for (var f in Pn)
                      if (Pn.hasOwnProperty(f)) {
                        var v = Pn[f],
                          _ = v._driver;
                        (this[f] = _), sr[_] || this.defineDriver(v);
                      }
                    (this._defaultConfig = Gs({}, yc)),
                      (this._config = Gs({}, this._defaultConfig, g)),
                      (this._driverSet = null),
                      (this._initDriver = null),
                      (this._ready = !1),
                      (this._dbInfo = null),
                      this._wrapLibraryMethodsWithReady(),
                      this.setDriver(this._config.driver).catch(function () {});
                  }
                  return (
                    (u.prototype.config = function (f) {
                      if ((typeof f > 'u' ? 'undefined' : i(f)) === 'object') {
                        if (this._ready)
                          return new Error(
                            "Can't call config() after localforage has been used."
                          );
                        for (var v in f) {
                          if (
                            (v === 'storeName' &&
                              (f[v] = f[v].replace(/\W/g, '_')),
                            v === 'version' && typeof f[v] != 'number')
                          )
                            return new Error(
                              'Database version must be a number.'
                            );
                          this._config[v] = f[v];
                        }
                        return 'driver' in f && f.driver
                          ? this.setDriver(this._config.driver)
                          : !0;
                      } else
                        return typeof f == 'string'
                          ? this._config[f]
                          : this._config;
                    }),
                    (u.prototype.defineDriver = function (f, v, _) {
                      var m = new d(function (E, R) {
                        try {
                          var P = f._driver,
                            L = new Error(
                              'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                            );
                          if (!f._driver) {
                            R(L);
                            return;
                          }
                          for (
                            var B = Hs.concat('_initStorage'),
                              tt = 0,
                              Tt = B.length;
                            tt < Tt;
                            tt++
                          ) {
                            var Lt = B[tt],
                              Ft = !gc(Ur, Lt);
                            if ((Ft || f[Lt]) && typeof f[Lt] != 'function') {
                              R(L);
                              return;
                            }
                          }
                          var te = function () {
                            for (
                              var ir = function (xc) {
                                  return function () {
                                    var Ic = new Error(
                                        'Method ' +
                                          xc +
                                          ' is not implemented by the current driver'
                                      ),
                                      Ao = d.reject(Ic);
                                    return (
                                      w(Ao, arguments[arguments.length - 1]), Ao
                                    );
                                  };
                                },
                                Ws = 0,
                                wc = Ur.length;
                              Ws < wc;
                              Ws++
                            ) {
                              var Ks = Ur[Ws];
                              f[Ks] || (f[Ks] = ir(Ks));
                            }
                          };
                          te();
                          var Jt = function (ir) {
                            sr[P] &&
                              console.info(
                                'Redefining LocalForage driver: ' + P
                              ),
                              (sr[P] = f),
                              (Co[P] = ir),
                              E();
                          };
                          '_support' in f
                            ? f._support && typeof f._support == 'function'
                              ? f._support().then(Jt, R)
                              : Jt(!!f._support)
                            : Jt(!0);
                        } catch (Se) {
                          R(Se);
                        }
                      });
                      return b(m, v, _), m;
                    }),
                    (u.prototype.driver = function () {
                      return this._driver || null;
                    }),
                    (u.prototype.getDriver = function (f, v, _) {
                      var m = sr[f]
                        ? d.resolve(sr[f])
                        : d.reject(new Error('Driver not found.'));
                      return b(m, v, _), m;
                    }),
                    (u.prototype.getSerializer = function (f) {
                      var v = d.resolve(fe);
                      return b(v, f), v;
                    }),
                    (u.prototype.ready = function (f) {
                      var v = this,
                        _ = v._driverSet.then(function () {
                          return (
                            v._ready === null && (v._ready = v._initDriver()),
                            v._ready
                          );
                        });
                      return b(_, f, f), _;
                    }),
                    (u.prototype.setDriver = function (f, v, _) {
                      var m = this;
                      So(f) || (f = [f]);
                      var E = this._getSupportedDrivers(f);
                      function R() {
                        m._config.driver = m.driver();
                      }
                      function P(tt) {
                        return (
                          m._extend(tt),
                          R(),
                          (m._ready = m._initStorage(m._config)),
                          m._ready
                        );
                      }
                      function L(tt) {
                        return function () {
                          var Tt = 0;
                          function Lt() {
                            for (; Tt < tt.length; ) {
                              var Ft = tt[Tt];
                              return (
                                Tt++,
                                (m._dbInfo = null),
                                (m._ready = null),
                                m.getDriver(Ft).then(P).catch(Lt)
                              );
                            }
                            R();
                            var te = new Error(
                              'No available storage method found.'
                            );
                            return (m._driverSet = d.reject(te)), m._driverSet;
                          }
                          return Lt();
                        };
                      }
                      var B =
                        this._driverSet !== null
                          ? this._driverSet.catch(function () {
                              return d.resolve();
                            })
                          : d.resolve();
                      return (
                        (this._driverSet = B.then(function () {
                          var tt = E[0];
                          return (
                            (m._dbInfo = null),
                            (m._ready = null),
                            m.getDriver(tt).then(function (Tt) {
                              (m._driver = Tt._driver),
                                R(),
                                m._wrapLibraryMethodsWithReady(),
                                (m._initDriver = L(E));
                            })
                          );
                        }).catch(function () {
                          R();
                          var tt = new Error(
                            'No available storage method found.'
                          );
                          return (m._driverSet = d.reject(tt)), m._driverSet;
                        })),
                        b(this._driverSet, v, _),
                        this._driverSet
                      );
                    }),
                    (u.prototype.supports = function (f) {
                      return !!Co[f];
                    }),
                    (u.prototype._extend = function (f) {
                      Gs(this, f);
                    }),
                    (u.prototype._getSupportedDrivers = function (f) {
                      for (var v = [], _ = 0, m = f.length; _ < m; _++) {
                        var E = f[_];
                        this.supports(E) && v.push(E);
                      }
                      return v;
                    }),
                    (u.prototype._wrapLibraryMethodsWithReady = function () {
                      for (var f = 0, v = Hs.length; f < v; f++)
                        vc(this, Hs[f]);
                    }),
                    (u.prototype.createInstance = function (f) {
                      return new u(f);
                    }),
                    u
                  );
                })(),
                bc = new _c();
              r.exports = bc;
            },
            { 3: 3 },
          ],
        },
        {},
        [4]
      )(4);
    });
  })(Yu);
  var dv = Yu.exports;
  const Ya = hv(dv);
  let Oe;
  function pv({ draw: e, gridInfo: t, gridZoom: n }) {
    const r = kt(),
      s = kt(!1),
      i = kt(!1),
      o = kt(!1),
      a = (t.width / 20) * n.value;
    no(() => {
      l();
    }),
      Xl(
        () => r.value,
        () => {
          k();
        },
        { debounce: 1e3 * 3, maxWait: 1e3 }
      );
    const l = () => {
        if (!e.value) return;
        const C = ts(),
          z = {
            id: C,
            content: '根节点',
            x: Math.max(400, t.width / 5),
            y: Math.max(200, t.height / 4),
            nodeType: an.ROOT,
          },
          H = es({ nodeInfo: z, draw: e.value }, (J) => {
            if (r.value && r.value.id !== J.id) {
              const { rect: et } = r.value.svgInfo.rect;
              et.fill('none');
            }
            r.value = J;
          });
        Oe = {
          id: C,
          type: an.ROOT,
          children: [],
          isExpand: !0,
          isMoveChildren: !1,
          isMoveParent: !1,
          svgInfo: H,
        };
      },
      c = (C = !0) => {
        if (!r.value) return;
        const { children: z, svgInfo: H } = r.value,
          { group: J, text: et } = H,
          { x: gt, y: dt } = J,
          { content: Z, size: W } = et,
          U = an.SUB,
          at = '第二级节点';
        let vt;
        if (C) {
          const Mt = (Z.getByteLen() + 1) * W + a;
          vt = gt + Mt;
        } else {
          const Mt = (at.getByteLen() + 1) * W + a;
          vt = gt - Mt;
        }
        const ft = gt + (Z.getByteLen() + 1) * W,
          F = z
            .filter((Mt) =>
              C ? Mt.svgInfo.group.x > ft : Mt.svgInfo.group.x < gt
            )
            .sort((Mt, nt) => Mt.svgInfo.group.y - nt.svgInfo.group.y),
          K = F.length,
          mt = K ? F[K - 1].svgInfo.group.y + W * 3 : dt,
          St = ts(),
          Nt = es(
            {
              nodeInfo: { id: St, content: at, x: vt, y: mt, nodeType: U },
              draw: e.value,
              node: r.value,
            },
            (Mt) => {
              if (r.value && r.value.id !== Mt.id) {
                const { rect: nt } = r.value.svgInfo.rect;
                nt.fill('none');
              }
              r.value = Mt;
            }
          );
        if (!Nt) return;
        const Pt = {
          id: St,
          type: U,
          children: [],
          isExpand: !0,
          svgInfo: Nt,
          isMoveParent: !1,
          isMoveChildren: !1,
        };
        r.value.children.push(Pt);
      },
      h = () => {
        if (!r.value) return;
        const { children: C, svgInfo: z } = r.value,
          { group: H, text: J, path: et } = z,
          { x: gt, y: dt } = H,
          { content: Z, size: W } = J,
          U = an.CHILD,
          at = Z + '的子节点',
          vt = (Z.getByteLen() + 1) * W + a;
        let ft = gt + vt;
        const Q = et == null ? void 0 : et.way;
        Q && Q[1] === 'R' && (ft = gt - vt);
        const K = (
            Q
              ? C.filter((nt) => {
                  var ee;
                  return (
                    ((ee = nt.svgInfo.path) == null ? void 0 : ee.way) === Q
                  );
                })
              : C
          ).sort((nt, ee) => nt.svgInfo.group.y - ee.svgInfo.group.y),
          mt = K.length,
          St = mt ? K[mt - 1].svgInfo.group.y + W * 3 : dt,
          zt = ts(),
          Pt = es(
            {
              nodeInfo: { id: zt, content: at, x: ft, y: St, nodeType: U },
              node: r.value,
              draw: e.value,
            },
            (nt) => {
              if (r.value && r.value.id !== nt.id) {
                const { rect: ee } = r.value.svgInfo.rect;
                ee.fill('none');
              }
              r.value = nt;
            }
          ),
          Mt = {
            id: zt,
            type: U,
            children: [],
            isExpand: !0,
            isMoveParent: !1,
            isMoveChildren: !1,
            svgInfo: Pt,
          };
        r.value.children.push(Mt);
      },
      d = () => {
        const C = r.value;
        if (!C) return;
        const z = sn(C);
        if (!z) return;
        const { svgInfo: H, type: J } = C,
          { group: et, text: gt, path: dt } = H,
          { content: Z, size: W } = gt,
          U = Z + '的同级节点';
        let at = et.x;
        const vt = dt == null ? void 0 : dt.way;
        vt &&
          vt[1] === 'R' &&
          (at = et.x + (Z.getByteLen() - U.getByteLen()) * W);
        const Q = z.children
            .filter((Pt) => {
              var Mt;
              return ((Mt = Pt.svgInfo.path) == null ? void 0 : Mt.way) === vt;
            })
            .sort((Pt, Mt) => Pt.svgInfo.group.y - Mt.svgInfo.group.y),
          K = Q[Q.length - 1].svgInfo.group.y + W * 3,
          mt = ts(),
          zt = es(
            {
              nodeInfo: { id: mt, content: U, x: at, y: K, nodeType: J },
              node: z,
              draw: e.value,
            },
            (Pt) => {
              if (r.value && r.value.id !== Pt.id) {
                const { rect: Mt } = r.value.svgInfo.rect;
                Mt.fill('none');
              }
              r.value = Pt;
            }
          );
        if (!zt) return;
        const Nt = {
          id: mt,
          type: J,
          children: [],
          isExpand: !0,
          svgInfo: zt,
          isMoveParent: !1,
          isMoveChildren: !1,
        };
        z.children.push(Nt);
      },
      w = () => {
        var gt;
        const C = r.value;
        if (!C || !Oe) return;
        C.children.forEach((dt) => {
          var U;
          const { group: Z, path: W } = dt.svgInfo;
          (U = W == null ? void 0 : W.path) == null || U.remove(),
            Z.group.remove();
        });
        const z = sn(C);
        if (!z) return;
        const H = z.children.findIndex((dt) => {
          var Z;
          return dt.id === ((Z = r.value) == null ? void 0 : Z.id);
        });
        z.children.splice(H, 1);
        const { group: J, path: et } = C.svgInfo;
        J.group.remove(),
          (gt = et == null ? void 0 : et.path) == null || gt.remove(),
          (r.value = void 0);
      },
      b = (C) => {
        var U;
        const z = r.value;
        if (!z) return;
        const H = C || sn(z);
        if (!H) return;
        const J = C
            ? C.svgInfo.group.x +
              (C.svgInfo.text.content.getByteLen() + 1) * 20 +
              80
            : z.svgInfo.group.x,
          et = ((U = z.svgInfo.path) == null ? void 0 : U.way) || 'RL',
          dt = H.children
            .filter((at) => {
              var vt;
              return ((vt = at.svgInfo.path) == null ? void 0 : vt.way) === et;
            })
            .sort((at, vt) => at.svgInfo.group.y - vt.svgInfo.group.y);
        let Z = 80,
          W = -1;
        (W = dt.findIndex((at) => {
          var vt;
          return at.id === ((vt = r.value) == null ? void 0 : vt.id);
        })),
          W === -1 && (W = 0),
          dt.forEach((at, vt) => {
            const ft = at.svgInfo.group;
            let Q = ft.y;
            r.value && (Q = r.value.svgInfo.group.y - Z * (W - vt));
            const F = { movementX: J - ft.x, movementY: Q - ft.y };
            En({ moved: F, node: at }),
              (ft.x = J),
              (ft.y = Q),
              ft.group.move(J, Q),
              de(at);
          });
      },
      I = () => {
        var ft;
        const C = r.value;
        if (!C) return;
        const z = sn(C);
        if (!z) return;
        const { group: H, text: J } = C.svgInfo,
          { content: et, size: gt } = J,
          dt = H.x + ((et.getByteLen() + 1) * gt) / 2,
          Z = (ft = C.svgInfo.path) == null ? void 0 : ft.way,
          U = z.children
            .filter((Q) => {
              var F;
              return ((F = Q.svgInfo.path) == null ? void 0 : F.way) === Z;
            })
            .sort((Q, F) => Q.svgInfo.group.y - F.svgInfo.group.y);
        let at = 0,
          vt = -1;
        if (i.value) {
          const Q = U.length;
          (at = i.value
            ? (U[Q - 1].svgInfo.group.y - U[0].svgInfo.group.y) / (Q - 1)
            : 0),
            (vt = U.findIndex((F) => {
              var K;
              return F.id === ((K = r.value) == null ? void 0 : K.id);
            }));
        }
        U.forEach((Q, F) => {
          const K = Q.svgInfo.group;
          let mt = K.y;
          if (r.value && i.value) {
            const Pt = Q.svgInfo.text.size * (Xn * 2);
            (at = Math.max(Pt, at)),
              (mt = r.value.svgInfo.group.y - at * (vt - F));
          }
          const St = Q.svgInfo.text.content,
            zt = dt - ((St.getByteLen() + 1) * gt) / 2,
            Nt = { movementX: zt - K.x, movementY: mt - K.y };
          En({ moved: Nt, node: Q }),
            (K.x = zt),
            (K.y = mt),
            K.group.move(zt, mt),
            de(Q);
        });
      },
      M = (C) => {
        var Q;
        const z = r.value;
        if (!z) return;
        const H = C || sn(z);
        if (!H) return;
        const { group: J, text: et } = z.svgInfo,
          { content: gt, size: dt } = et,
          Z = C ? C.svgInfo.group.x - 80 : J.x + (gt.getByteLen() + 1) * dt,
          W = ((Q = z.svgInfo.path) == null ? void 0 : Q.way) || 'LR',
          at = H.children
            .filter((F) => {
              var K;
              return ((K = F.svgInfo.path) == null ? void 0 : K.way) === W;
            })
            .sort((F, K) => F.svgInfo.group.y - K.svgInfo.group.y);
        let vt = 80,
          ft = -1;
        ft === -1 && (ft = 0),
          (ft = at.findIndex((F) => {
            var K;
            return F.id === ((K = r.value) == null ? void 0 : K.id);
          })),
          at.forEach((F, K) => {
            const mt = F.svgInfo.group;
            let St = mt.y;
            r.value && (St = r.value.svgInfo.group.y - vt * (ft - K));
            const zt = F.svgInfo.text.content,
              Nt = Z - (zt.getByteLen() + 1) * dt,
              Pt = { movementX: Nt - mt.x, movementY: St - mt.y };
            En({ moved: Pt, node: F }),
              (mt.x = Nt),
              (mt.y = St),
              mt.group.move(Nt, St),
              de(F);
          });
      },
      Y = () => {
        if (!r.value) return;
        const C = r.value.svgInfo,
          { content: z, size: H } = C.text,
          J = (z.getByteLen() + 1) * H;
        r.value.children.forEach((gt) => {
          const { group: dt, text: Z } = gt.svgInfo,
            { content: W, size: U } = Z,
            at = (W.getByteLen() + 1) * U,
            vt = C.group.x + J + C.group.x - dt.x - at,
            ft = dt.y;
          dt.group.move(vt, ft), (dt.x = vt), de(gt);
        });
      },
      G = (C) => {
        if (!r.value) return;
        const z = C || r.value,
          H = z.svgInfo,
          { content: J, size: et } = H.text,
          gt = (J.getByteLen() + 1) * et;
        z.children.forEach((Z) => {
          var U;
          const W = (U = Z.svgInfo.path) == null ? void 0 : U.way;
          if (W && W[1] !== 'L') {
            const { group: at, text: vt } = Z.svgInfo,
              { content: ft, size: Q } = vt,
              F = (ft.getByteLen() + 1) * Q,
              K = H.group.x + gt + H.group.x - at.x - F,
              mt = at.y;
            at.group.move(K, mt), (at.x = K), de(Z), G(Z);
          }
        }),
          b(z);
      },
      st = (C) => {
        if (!r.value) return;
        const z = C || r.value,
          H = z.svgInfo,
          { content: J, size: et } = H.text,
          gt = (J.getByteLen() + 1) * et;
        z.children.forEach((Z) => {
          var U;
          const W = (U = Z.svgInfo.path) == null ? void 0 : U.way;
          if (W && W[1] !== 'R') {
            const { group: at, text: vt } = Z.svgInfo,
              { content: ft, size: Q } = vt,
              F = (ft.getByteLen() + 1) * Q,
              K = H.group.x + gt + H.group.x - at.x - F,
              mt = at.y;
            at.group.move(K, mt), (at.x = K), de(Z), st(Z);
          }
        }),
          M(z);
      },
      ut = () => {
        const C = r.value;
        if (!C) return;
        const z = sn(C);
        if (!z) return;
        const H = z.svgInfo,
          J = H.group.y + (H.text.size * Xn) / 2,
          et = C.svgInfo,
          gt = (et.text.size * Xn) / 2,
          dt = J - gt,
          { group: Z } = et;
        (Z.y = dt), Z.group.move(Z.x, dt), de(C);
      },
      yt = () => {
        if (!r.value) return;
        const C = !r.value.isExpand;
        r.value.isExpand = C;
        function z(J) {
          J.forEach((et) => {
            var Z, W;
            const { group: gt, path: dt } = et.svgInfo;
            C
              ? (gt.group.addTo(e.value),
                (Z = dt == null ? void 0 : dt.path) == null || Z.addTo(e.value))
              : (gt.group.remove(),
                (W = dt == null ? void 0 : dt.path) == null || W.remove()),
              z(et.children);
          });
        }
        const H = r.value.children;
        z(H);
      },
      O = () => {
        if (!Oe) return;
        const C = rv(Oe);
        (C.svgInfo.group.group = void 0),
          (C.svgInfo.rect.rect = void 0),
          (C.svgInfo.text.text = void 0);
        function z(H) {
          H.forEach((J) => {
            (J.svgInfo.group.group = void 0),
              (J.svgInfo.path.path = void 0),
              (J.svgInfo.rect.rect = void 0),
              (J.svgInfo.text.text = void 0),
              J.children && z(J.children);
          });
        }
        return z(C.children), C;
      },
      k = () => {
        const C = O();
        Ya.setItem('mindMap', C)
          .then(function () {})
          .catch(function (z) {
            console.error(z);
          });
      },
      q = (C) => {
        const z = {
            id: C.id,
            x: C.svgInfo.group.x,
            y: C.svgInfo.group.y,
            content: C.svgInfo.text.content,
            nodeType: C.type,
            draw: e.value,
            node: C,
          },
          { group: H, rect: J, text: et } = Bi(z);
        (C.svgInfo.group.group = H),
          (C.svgInfo.rect.rect = J),
          (C.svgInfo.text.text = et);
        function gt(Z, W) {
          Z.forEach((U) => {
            const at = {
                id: U.id,
                x: U.svgInfo.group.x,
                y: U.svgInfo.group.y,
                content: U.svgInfo.text.content,
                nodeType: U.type,
                draw: e.value,
                node: U,
                root: C,
              },
              { group: vt, rect: ft, text: Q } = Bi(at);
            (U.svgInfo.group.group = vt),
              (U.svgInfo.rect.rect = ft),
              (U.svgInfo.text.text = Q);
            const F = { group: W.group, text: W.text },
              K = { group: U.svgInfo.group, text: U.svgInfo.text };
            if (U.svgInfo.path) {
              const mt = zu(F, K, e.value);
              U.svgInfo.path.path = mt.path;
            }
          });
        }
        const dt = { group: C.svgInfo.group, text: C.svgInfo.text };
        gt(C.children, dt), (Oe = C);
      };
    return {
      root: Oe,
      curEditNode: r,
      isMoveParent: s,
      sameGap: i,
      sameMove: o,
      getMindMap: () => {
        Ya.getItem('mindMap')
          .then(function (C) {
            C ? q(C) : l();
          })
          .catch(function (C) {
            console.error(C), l();
          });
      },
      addSubNode: c,
      addChildNode: h,
      addSameNode: d,
      centerToParent: ut,
      deleteNode: w,
      updatePath: de,
      alignLeftEdges: b,
      alignCenterEdges: I,
      alignRightEdges: M,
      moveChildren: En,
      mirrorChildren: Y,
      moveChildrenToRight: G,
      moveChildrenToLeft: st,
      toggleChildren: yt,
    };
  }
  const Xr = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [r, s] of t) n[r] = s;
      return n;
    },
    gv = {},
    mv = {
      t: '1711865801552',
      class: 'icon',
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'p-id': '5243',
      width: '28',
      height: '28',
    },
    yv = D(
      'path',
      {
        d: 'M832 448H576V192a64 64 0 0 0-128 0v256H192a64 64 0 0 0 0 128h256v256a64 64 0 1 0 128 0V576h256a64 64 0 1 0 0-128z',
        'p-id': '5244',
      },
      null,
      -1
    ),
    vv = [yv];
  function _v(e, t) {
    return Ee(), Me('svg', mv, vv);
  }
  const fr = Xr(gv, [['render', _v]]),
    bv = {},
    wv = {
      t: '1711865729717',
      class: 'icon',
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'p-id': '4260',
      width: '28',
      height: '28',
    },
    xv = D(
      'path',
      {
        d: 'M765.505691 191.942567H639.627772c0-35.32453-28.636201-63.960731-63.96073-63.960731H447.74558c-35.32453 0-63.960731 28.636201-63.96073 63.960731H257.905908c-36.452213 0-66.00325 29.551036-66.00325 66.00325v59.875692c0 36.452213 29.551036 66.00325 66.00325 66.00325h-2.042519v445.681572c0 36.452213 29.551036 66.00325 66.003249 66.00325h379.679346c36.452213 0 66.00325-29.551036 66.00325-66.00325V383.823736h-2.04252c36.452213 0 66.00325-29.551036 66.00325-66.00325v-59.875693c-0.001023-36.452213-29.551036-66.002226-66.004273-66.002226z m-61.918211 611.470479c-0.101307 3.123131-1.743714 27.813462-27.961842 28.134781H347.905688c-27.988448-0.343831-27.969005-28.459169-27.969005-28.459169l-0.112564 0.031722V383.823736h383.763361v419.58931z m31.980365-483.550041H287.843754c-17.662265 0-31.980365-14.3181-31.980365-31.980365 0-17.662265 14.3181-31.980365 31.980365-31.980366H735.568868c17.662265 0 31.980365 14.3181 31.980366 31.980366-0.001023 17.662265-14.319124 31.980365-31.981389 31.980365z',
        'p-id': '4261',
      },
      null,
      -1
    ),
    Iv = D(
      'path',
      {
        d: 'M447.74558 767.588119c17.662265 0 31.980365-14.3181 31.980366-31.980365V479.764831c0-17.662265-14.3181-31.980365-31.980366-31.980365-17.662265 0-31.980365 14.3181-31.980365 31.980365v255.842923c0 17.662265 14.3181 31.980365 31.980365 31.980365zM575.667042 767.588119c17.662265 0 31.980365-14.3181 31.980365-31.980365V479.764831c0-17.662265-14.3181-31.980365-31.980365-31.980365-17.662265 0-31.980365 14.3181-31.980366 31.980365v255.842923c0 17.662265 14.3181 31.980365 31.980366 31.980365z',
        'p-id': '4262',
      },
      null,
      -1
    ),
    Ev = [xv, Iv];
  function Tv(e, t) {
    return Ee(), Me('svg', wv, Ev);
  }
  const Sv = Xr(bv, [['render', Tv]]),
    Cv = {},
    Av = {
      t: '1713085060853',
      class: 'icon',
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'p-id': '4409',
      width: '28',
      height: '28',
    },
    Mv = D(
      'path',
      {
        d: 'M128 896h768v-64H128z m128-192V557.248l224-224L626.752 480l-224 224H256z m352-498.752L754.752 352 672 434.752 525.248 288 608 205.248z m214.624 169.408l0.032-0.032a32 32 0 0 0 0-45.248l-0.032-0.032-191.968-191.968-0.032-0.032a32 32 0 0 0-45.248 0l-0.032 0.032L192 530.752V768h237.248l393.376-393.344z',
        fill: '#181818',
        'p-id': '4410',
      },
      null,
      -1
    ),
    Ov = [Mv];
  function Rv(e, t) {
    return Ee(), Me('svg', Av, Ov);
  }
  const Ue = Xr(Cv, [['render', Rv]]),
    $v = {},
    Nv = {
      t: '1715478968475',
      class: 'icon',
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'p-id': '4276',
      width: '32',
      height: '32',
    },
    Pv = D(
      'path',
      {
        d: 'M512 298.705455a212.014545 212.014545 0 0 0-150.900364 62.487272 212.014545 212.014545 0 0 0-62.510545 150.900364 212.014545 212.014545 0 0 0 62.510545 150.900364A212.014545 212.014545 0 0 0 512 725.504a212.014545 212.014545 0 0 0 150.900364-62.510545 212.014545 212.014545 0 0 0 62.510545-150.900364 212.014545 212.014545 0 0 0-62.510545-150.900364A212.014545 212.014545 0 0 0 512 298.705455z m0 362.58909A149.504 149.504 0 0 1 362.705455 512 149.504 149.504 0 0 1 512 362.705455 149.504 149.504 0 0 1 661.294545 512 149.504 149.504 0 0 1 512 661.294545z m448-57.297454v-183.994182l-105.099636-30.603636c-4.002909-11.194182-8.610909-22.295273-13.800728-33.093818l52.712728-96-130.094546-130.094546-95.906909 52.596364a371.432727 371.432727 0 0 0-33.303273-13.917091l-30.487272-104.890182h-184.017455l-30.487273 104.890182c-11.310545 4.119273-22.504727 8.704-33.326545 13.917091l-95.883636-52.596364-130.094546 130.094546 52.689455 96.116363a371.432727 371.432727 0 0 0-13.893819 33.28L64 419.909818v183.994182l105.192727 30.906182c4.096 11.170909 8.704 22.295273 13.800728 33.093818L130.094545 763.694545l130.094546 130.094546 96.209454-52.48c10.891636 5.189818 21.992727 9.774545 33.28 13.800727l30.324364 104.890182h183.994182l30.813091-105.006545c11.287273-4.096 22.481455-8.704 33.28-13.893819l95.604363 52.805819 130.094546-130.094546-52.596364-96.302545c5.12-10.705455 9.611636-21.713455 13.707637-32.907637l105.099636-30.603636z m-124.695273-22.993455h-20.712727l-6.493091 21.294546a311.156364 311.156364 0 0 1-22.900364 55.109818l-10.496 19.688727 15.290182 15.313455 35.304728 64.581818-68.305455 68.119273-65.792-36.305455-14.103273-14.010182-19.688727 10.496a308.596364 308.596364 0 0 1-55.109818 22.900364l-21.410909 6.516364v21.410909l-20.689455 70.586182H463.825455l-20.805819-72.215273v-19.781818l-21.410909-6.516364a308.596364 308.596364 0 0 1-55.086545-22.900364l-19.781818-10.589091-15.127273 15.290182-64.581818 35.211637-68.119273-68.096 36.305455-65.815273 14.103272-14.103273-10.496-19.688727a305.570909 305.570909 0 0 1-22.900363-55.109818l-6.516364-21.294546h-21.480727l-70.609455-20.712727v-96.372364l72.215273-20.805818h19.898182l6.493091-21.294545c5.701818-18.804364 13.498182-37.306182 22.900363-55.109818l10.496-19.712-14.708363-14.685091-35.700364-65.396364 68.119273-68.119273 65.186909 35.816728 14.615273 14.592 19.688727-10.496a301.428364 301.428364 0 0 1 55.109818-22.900364l21.410909-6.516364v-20.48l20.782546-71.400727h96.395636l20.805818 71.400727v20.48l21.410909 6.516364a305.570909 305.570909 0 0 1 55.086546 22.900364l19.898181 10.58909 14.49891-14.801454 65.093818-35.700364 68.119272 68.119273-35.816727 65.186909-14.685091 14.708364 10.472728 19.688727c9.425455 17.687273 17.128727 36.212364 22.923636 55.109818l6.516364 21.294546h20.689454l71.400727 20.805818v96.395636l-71.307636 20.805818z',
        fill: '#333333',
        'p-id': '4277',
      },
      null,
      -1
    ),
    Lv = [Pv];
  function Dv(e, t) {
    return Ee(), Me('svg', Nv, Lv);
  }
  const Fe = Xr($v, [['render', Dv]]),
    jv = D('h1', { class: 'font-semibold' }, '节点相关', -1),
    Fv = { class: 'mt-1 mb-2' },
    Bv = { class: 'flex items-center gap-2' },
    zv = { class: 'flex items-center gap-2' },
    Yv = { class: 'flex items-center gap-2' },
    kv = { class: 'flex items-center gap-2' },
    Xv = { class: 'flex items-center gap-2' },
    Vv = { class: 'flex items-center gap-2' },
    Uv = D('span', null, '是否一起移动父节点', -1),
    Hv = { class: 'flex items-center gap-2', title: '所有子节点将会一起删除' },
    Gv = mn({
      __name: 'OprateNode',
      props: { isRoot: { type: Boolean }, curEditNode: {} },
      emits: [
        'addSubNode',
        'addChildNode',
        'addSameNode',
        'centerToParent',
        'deleteNode',
      ],
      setup(e, { emit: t }) {
        const n = e,
          r = t,
          s = kt(),
          i = kt(!1);
        Be(
          () => n.curEditNode,
          (a) => {
            (s.value = a), a && (i.value = a.isMoveParent);
          }
        );
        const o = (a) => {
          (i.value = a.target.checked),
            s.value && (s.value.isMoveParent = i.value);
        };
        return (a, l) => (
          Ee(),
          Me('section', null, [
            jv,
            D('ul', Fv, [
              Ct(
                D(
                  'li',
                  Bv,
                  [
                    It(ct(fr), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[0] || (l[0] = (c) => r('addSubNode', !0)),
                      },
                      ' 添加右侧子节点 '
                    ),
                  ],
                  512
                ),
                [[Kt, a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  zv,
                  [
                    It(ct(fr), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[1] || (l[1] = (c) => r('addChildNode')),
                      },
                      ' 添加子节点 '
                    ),
                  ],
                  512
                ),
                [[Kt, !a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Yv,
                  [
                    It(ct(fr), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[2] || (l[2] = (c) => r('addSubNode', !1)),
                      },
                      ' 添加左侧子节点 '
                    ),
                  ],
                  512
                ),
                [[Kt, a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  kv,
                  [
                    It(ct(fr), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[3] || (l[3] = (c) => r('addSameNode')),
                      },
                      ' 添加同级节点 '
                    ),
                  ],
                  512
                ),
                [[Kt, !a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Xv,
                  [
                    It(ct(fr), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[4] || (l[4] = (c) => r('centerToParent')),
                      },
                      ' 与父节点中线对齐 '
                    ),
                  ],
                  512
                ),
                [[Kt, !a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Vv,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    Uv,
                    Ct(
                      D(
                        'input',
                        {
                          class: 'rounded',
                          type: 'checkbox',
                          'onUpdate:modelValue':
                            l[5] || (l[5] = (c) => (i.value = c)),
                          onChange: o,
                        },
                        null,
                        544
                      ),
                      [[js, i.value]]
                    ),
                  ],
                  512
                ),
                [[Kt, !a.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Hv,
                  [
                    It(ct(Sv), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: l[6] || (l[6] = (c) => r('deleteNode')),
                      },
                      ' 删除节点 '
                    ),
                  ],
                  512
                ),
                [[Kt, !a.isRoot]]
              ),
            ]),
          ])
        );
      },
    }),
    Wv = D('h1', { class: 'font-semibold' }, '同级节点布局相关', -1),
    Kv = { class: 'mt-1 mb-2' },
    qv = { class: 'flex items-center gap-2' },
    Zv = { class: 'flex items-center gap-2' },
    Jv = { class: 'flex items-center gap-2' },
    Qv = { class: 'flex items-center gap-2' },
    t_ = D('span', null, '是否等距调整', -1),
    e_ = mn({
      __name: 'LayoutNode',
      props: { isRoot: { type: Boolean } },
      emits: ['alignLeftEdges', 'alignCenterEdges', 'alignRightEdges'],
      setup(e, { emit: t }) {
        const n = t,
          r = kt(!1);
        return (s, i) => (
          Ee(),
          Me('section', null, [
            Wv,
            D('ul', Kv, [
              Ct(
                D(
                  'li',
                  qv,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: i[0] || (i[0] = (o) => n('alignLeftEdges')),
                      },
                      ' 同侧左对齐 '
                    ),
                  ],
                  512
                ),
                [[Kt, !s.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Zv,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: i[1] || (i[1] = (o) => n('alignCenterEdges')),
                      },
                      ' 同侧居中对齐 '
                    ),
                  ],
                  512
                ),
                [[Kt, !s.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Jv,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: i[2] || (i[2] = (o) => n('alignRightEdges')),
                      },
                      ' 同侧右对齐 '
                    ),
                  ],
                  512
                ),
                [[Kt, !s.isRoot]]
              ),
              Ct(
                D(
                  'li',
                  Qv,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    t_,
                    Ct(
                      D(
                        'input',
                        {
                          class: 'rounded',
                          type: 'checkbox',
                          'onUpdate:modelValue':
                            i[3] || (i[3] = (o) => (r.value = o)),
                        },
                        null,
                        512
                      ),
                      [[js, r.value]]
                    ),
                  ],
                  512
                ),
                [[Kt, !s.isRoot]]
              ),
            ]),
          ])
        );
      },
    }),
    n_ = D('h1', { class: 'font-semibold' }, '子节点布局相关', -1),
    r_ = { class: 'mt-1 mb-2' },
    s_ = { class: 'flex items-center gap-2' },
    i_ = { class: 'flex items-center gap-2' },
    o_ = { class: 'flex items-center gap-2' },
    a_ = { class: 'flex items-center gap-2' },
    l_ = { class: 'flex items-center gap-2' },
    u_ = D('span', null, '是否一起移动子节点', -1),
    c_ = mn({
      __name: 'LayoutChild',
      props: { curEditNode: {} },
      emits: [
        'mirrorChildren',
        'moveChildrenToRight',
        'moveChildrenToLeft',
        'toggleChildren',
      ],
      setup(e, { emit: t }) {
        const n = e,
          r = t,
          s = kt(),
          i = kt(!1);
        Be(
          () => n.curEditNode,
          (c) => {
            (s.value = c), c && (i.value = c.isMoveChildren);
          }
        );
        const o = gs(() => {
            var c;
            return (c = s.value) != null && c.isExpand ? '折叠' : '展开';
          }),
          a = gs(() => {
            var c, h;
            return (
              s.value &&
              ((h = (c = s.value) == null ? void 0 : c.children) == null
                ? void 0
                : h.length) > 0
            );
          }),
          l = (c) => {
            (i.value = c.target.checked),
              s.value && (s.value.isMoveChildren = i.value);
          };
        return (c, h) => (
          Ee(),
          Me('section', null, [
            n_,
            D('ul', r_, [
              Ct(
                D(
                  'li',
                  s_,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: h[0] || (h[0] = (d) => r('toggleChildren')),
                      },
                      jc(o.value),
                      1
                    ),
                  ],
                  512
                ),
                [[Kt, a.value]]
              ),
              Ct(
                D(
                  'li',
                  i_,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick: h[1] || (h[1] = (d) => r('mirrorChildren')),
                      },
                      ' 镜像翻转 '
                    ),
                  ],
                  512
                ),
                [[Kt, a.value]]
              ),
              Ct(
                D(
                  'li',
                  o_,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick:
                          h[2] || (h[2] = (d) => r('moveChildrenToLeft')),
                      },
                      ' 所有移至左侧 '
                    ),
                  ],
                  512
                ),
                [[Kt, a.value]]
              ),
              Ct(
                D(
                  'li',
                  a_,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    D(
                      'button',
                      {
                        class: 'text-gray-500 border hover:text-gray-800',
                        onClick:
                          h[3] || (h[3] = (d) => r('moveChildrenToRight')),
                      },
                      ' 所有移至右侧 '
                    ),
                  ],
                  512
                ),
                [[Kt, a.value]]
              ),
              Ct(
                D(
                  'li',
                  l_,
                  [
                    It(ct(Fe), { class: 'w-4' }),
                    u_,
                    Ct(
                      D(
                        'input',
                        {
                          class: 'rounded',
                          type: 'checkbox',
                          'onUpdate:modelValue':
                            h[4] || (h[4] = (d) => (i.value = d)),
                          onChange: l,
                        },
                        null,
                        544
                      ),
                      [[js, i.value]]
                    ),
                  ],
                  512
                ),
                [[Kt, a.value]]
              ),
            ]),
          ])
        );
      },
    }),
    f_ = D('h1', { class: 'font-semibold' }, '样式相关', -1),
    h_ = { class: 'mt-1 mb-2' },
    d_ = { class: 'flex items-center gap-2' },
    p_ = D('span', null, '边框颜色', -1),
    g_ = { class: 'flex items-center gap-2' },
    m_ = D('span', null, '填充颜色', -1),
    y_ = mn({
      __name: 'StyleNode',
      props: { curEditNode: {} },
      setup(e) {
        const t = e,
          n = kt(),
          r = kt('#ffc0cb'),
          s = kt('#f2cf9b');
        Be(
          () => t.curEditNode,
          (a) => (n.value = a)
        ),
          $s(() => {
            if (n.value) {
              const { rect: a } = n.value.svgInfo;
              (s.value = a.strokeColor), (r.value = a.fillColor);
            }
          });
        const i = () => {
            if (!n.value) return;
            const { rect: a } = n.value.svgInfo;
            a.rect.stroke(s.value);
          },
          o = () => {
            if (!n.value) return;
            const { rect: a } = n.value.svgInfo;
            a.rect.fill(r.value), (a.fillColor = r.value);
          };
        return (a, l) => (
          Ee(),
          Me('section', null, [
            f_,
            D('ul', h_, [
              D('li', d_, [
                It(ct(Ue), { class: 'w-4' }),
                p_,
                Ct(
                  D(
                    'input',
                    {
                      class: 'rounded',
                      type: 'color',
                      'onUpdate:modelValue':
                        l[0] || (l[0] = (c) => (s.value = c)),
                      onChange: i,
                    },
                    null,
                    544
                  ),
                  [[He, s.value]]
                ),
              ]),
              D('li', g_, [
                It(ct(Ue), { class: 'w-4' }),
                m_,
                Ct(
                  D(
                    'input',
                    {
                      class: 'rounded',
                      type: 'color',
                      'onUpdate:modelValue':
                        l[1] || (l[1] = (c) => (r.value = c)),
                      onChange: o,
                    },
                    null,
                    544
                  ),
                  [[He, r.value]]
                ),
              ]),
            ]),
          ])
        );
      },
    }),
    v_ = D('h1', { class: 'font-semibold' }, '文本相关', -1),
    __ = { class: 'mt-1 mb-2' },
    b_ = { class: 'flex items-center gap-2' },
    w_ = D('span', null, '文本颜色', -1),
    x_ = { class: 'flex items-center gap-2' },
    I_ = D('span', null, '文本大小', -1),
    E_ = mn({
      __name: 'StyleText',
      props: { curEditNode: {}, draw: {}, content: {} },
      setup(e) {
        const t = e,
          n = kt(),
          r = kt('#ff0066'),
          s = kt(20);
        Be(
          () => t.curEditNode,
          (a) => (n.value = a)
        ),
          $s(() => {
            if (n.value) {
              const { text: a } = n.value.svgInfo;
              (r.value = a.color), (s.value = a.size);
            }
          });
        const i = () => {
            if (!n.value) return;
            const { text: a } = n.value.svgInfo.text;
            a.fill(r.value);
          },
          o = () => {
            if (!n.value) return;
            const { text: a, rect: l, group: c } = n.value.svgInfo,
              { x: h, y: d } = c,
              { size: w } = a;
            a.text.remove();
            const b = t.draw.plain(t.content);
            b.dx(h + s.value * 0.5),
              b.dy(d + s.value * 1.25),
              b.font({ fill: '#f06', family: 'Inconsolata', size: s.value }),
              c.group.add(b),
              (a.text = b);
            const I = t.content.getByteLen(),
              M = (I + 1) * s.value;
            l.rect.width(M), l.rect.height(s.value * Xn);
            const G = { movementX: I * (s.value - w), movementY: 0 };
            En({ moved: G, node: n.value }),
              (a.size = s.value),
              n.value && de(n.value);
          };
        return (a, l) => (
          Ee(),
          Me('section', null, [
            v_,
            D('ul', __, [
              D('li', b_, [
                It(ct(Ue), { class: 'w-4' }),
                w_,
                Ct(
                  D(
                    'input',
                    {
                      type: 'color',
                      class: 'rounded',
                      'onUpdate:modelValue':
                        l[0] || (l[0] = (c) => (r.value = c)),
                      onChange: i,
                    },
                    null,
                    544
                  ),
                  [[He, r.value]]
                ),
              ]),
              D('li', x_, [
                It(ct(Ue), { class: 'w-4' }),
                I_,
                Ct(
                  D(
                    'input',
                    {
                      type: 'range',
                      min: '10',
                      max: '40',
                      'onUpdate:modelValue':
                        l[1] || (l[1] = (c) => (s.value = c)),
                      onChange: o,
                    },
                    null,
                    544
                  ),
                  [[He, s.value]]
                ),
              ]),
            ]),
          ])
        );
      },
    }),
    T_ = { class: 'font-semibold' },
    S_ = { class: 'mt-1 mb-2' },
    C_ = { class: 'flex items-center gap-2' },
    A_ = D('span', null, '连线粗细', -1),
    M_ = { class: 'flex items-center gap-2' },
    O_ = D('span', null, '连线颜色', -1),
    R_ = { class: 'flex items-center gap-2' },
    $_ = D('span', null, '是否曲线连接父节点', -1),
    N_ = { class: 'flex items-center gap-2' },
    P_ = D('span', null, '横向控制', -1),
    L_ = { class: 'flex items-center gap-2' },
    D_ = D('span', null, '纵向控制', -1),
    j_ = mn({
      __name: 'StyleLine',
      props: { isRoot: { type: Boolean }, curEditNode: {} },
      setup(e) {
        const t = e,
          n = kt(),
          r = kt(1),
          s = kt('#ff1070'),
          i = kt(!1),
          o = kt(50),
          a = kt(50);
        Be(
          () => t.curEditNode,
          (b) => (n.value = b)
        ),
          $s(() => {
            if (n.value) {
              const { path: b } = n.value.svgInfo;
              (i.value = (b == null ? void 0 : b.isCurve) || fi.isCurvue),
                (s.value = (b == null ? void 0 : b.color) || fi.lineColor),
                (r.value = (b == null ? void 0 : b.width) || fi.lineWidth);
            }
          });
        const l = () => {
            var I;
            if (!n.value) return;
            const { path: b } = n.value.svgInfo;
            b &&
              ((b.width = r.value),
              (I = b.path) == null || I.stroke({ width: r.value }));
          },
          c = () => {
            var I;
            if (!n.value) return;
            const { path: b } = n.value.svgInfo;
            b &&
              ((b.color = s.value),
              (I = b.path) == null || I.stroke({ color: s.value }));
          },
          h = () => {
            if (!n.value) return;
            const { path: b } = n.value.svgInfo;
            b && ((b.isCurve = !i.value), n.value && de(n.value));
          },
          d = () => {
            if (!n.value) return;
            const { path: b } = n.value.svgInfo;
            b && ((b.xGap = o.value), n.value && de(n.value));
          },
          w = () => {
            if (!n.value) return;
            const { path: b } = n.value.svgInfo;
            b && ((b.yGap = a.value), n.value && de(n.value));
          };
        return (b, I) => (
          Ee(),
          Me('section', null, [
            Ct(D('h1', T_, '连线相关', 512), [[Kt, !b.isRoot]]),
            Ct(
              D(
                'ul',
                S_,
                [
                  D('li', C_, [
                    It(ct(Ue), { class: 'w-4' }),
                    A_,
                    Ct(
                      D(
                        'input',
                        {
                          type: 'range',
                          'onUpdate:modelValue':
                            I[0] || (I[0] = (M) => (r.value = M)),
                          min: '1',
                          max: '6',
                          onChange: l,
                        },
                        null,
                        544
                      ),
                      [[He, r.value]]
                    ),
                  ]),
                  D('li', M_, [
                    It(ct(Ue), { class: 'w-4' }),
                    O_,
                    Ct(
                      D(
                        'input',
                        {
                          type: 'color',
                          'onUpdate:modelValue':
                            I[1] || (I[1] = (M) => (s.value = M)),
                          onChange: c,
                        },
                        null,
                        544
                      ),
                      [[He, s.value]]
                    ),
                  ]),
                  D('li', R_, [
                    It(ct(Ue), { class: 'w-4' }),
                    $_,
                    Ct(
                      D(
                        'input',
                        {
                          type: 'checkbox',
                          'onUpdate:modelValue':
                            I[2] || (I[2] = (M) => (i.value = M)),
                          onClick: h,
                        },
                        null,
                        512
                      ),
                      [[js, i.value]]
                    ),
                  ]),
                  Ct(
                    D(
                      'li',
                      N_,
                      [
                        It(ct(Ue), { class: 'w-4' }),
                        P_,
                        Ct(
                          D(
                            'input',
                            {
                              type: 'range',
                              'onUpdate:modelValue':
                                I[3] || (I[3] = (M) => (o.value = M)),
                              min: '50',
                              max: '400',
                              onChange: d,
                            },
                            null,
                            544
                          ),
                          [[He, o.value]]
                        ),
                      ],
                      512
                    ),
                    [[Kt, i.value]]
                  ),
                  Ct(
                    D(
                      'li',
                      L_,
                      [
                        It(ct(Ue), { class: 'w-4' }),
                        D_,
                        Ct(
                          D(
                            'input',
                            {
                              type: 'range',
                              'onUpdate:modelValue':
                                I[4] || (I[4] = (M) => (a.value = M)),
                              min: '50',
                              max: '400',
                              onChange: w,
                            },
                            null,
                            544
                          ),
                          [[He, a.value]]
                        ),
                      ],
                      512
                    ),
                    [[Kt, i.value]]
                  ),
                ],
                512
              ),
              [[Kt, !b.isRoot]]
            ),
          ])
        );
      },
    }),
    F_ = (e) => (bf('data-v-ffcfd370'), (e = e()), wf(), e),
    B_ = { class: 'relative w-full h-full overflow-hidden select-none' },
    z_ = ['viewBox'],
    Y_ = F_(() =>
      D(
        'defs',
        null,
        [
          D(
            'pattern',
            {
              id: 'gridPattern',
              patternUnits: 'userSpaceOnUse',
              x: '0',
              y: '0',
              width: '20',
              height: '20',
            },
            [
              D('path', {
                d: 'M 0 0 L 0 20',
                stroke: '#d1d5db',
                'stroke-width': '0.5',
              }),
              D('path', {
                d: 'M 0 0 L 20 0',
                stroke: '#d1d5db',
                'stroke-width': '0.5',
              }),
            ]
          ),
        ],
        -1
      )
    ),
    k_ = ['x', 'y', 'width', 'height'],
    X_ = {
      class:
        'absolute top-4 left-4 p-4 pb-2 max-h-[80vh] overflow-auto scrollbar-hide bg-gray-300/30',
    },
    V_ = mn({
      __name: 'index',
      setup(e) {
        const t = kt(null),
          n = kt(''),
          { gridRef: r, gridInfo: s, draw: i, gridZoom: o } = xg(),
          {
            curEditNode: a,
            addSubNode: l,
            addChildNode: c,
            addSameNode: h,
            centerToParent: d,
            deleteNode: w,
            updatePath: b,
            alignLeftEdges: I,
            alignCenterEdges: M,
            alignRightEdges: Y,
            moveChildren: G,
            mirrorChildren: st,
            moveChildrenToRight: ut,
            moveChildrenToLeft: yt,
            toggleChildren: O,
          } = pv({ draw: i, gridInfo: s, gridZoom: o });
        $s(() => {
          a.value ? (n.value = a.value.svgInfo.text.content) : (n.value = '');
        }),
          Xl(
            () => a.value,
            () => {
              if (t.value && r.value) {
                const it = r.value.cloneNode(!0);
                t.value.replaceChildren(it);
              }
            },
            { debounce: 1e3 * 3, maxWait: 1e3 }
          );
        const k = gs(() => {
            var it;
            return ((it = a.value) == null ? void 0 : it.type) === an.ROOT;
          }),
          q = () => {
            if (!a.value) return;
            const { text: it, rect: C } = a.value.svgInfo,
              { size: z, content: H } = it,
              et = {
                movementX: (n.value.getByteLen() - H.getByteLen()) * z,
                movementY: 0,
              };
            G({ moved: et, node: a.value }),
              (it.content = n.value),
              it.text.plain(n.value),
              C.rect.width((n.value.getByteLen() + 1) * z),
              a.value && b(a.value);
          };
        return (it, C) => (
          Ee(),
          Me('div', B_, [
            (Ee(),
            Me(
              'svg',
              {
                ref_key: 'gridRef',
                ref: r,
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: Object.values(ct(s)).join(' '),
              },
              [
                Y_,
                D(
                  'rect',
                  {
                    x: ct(s).x,
                    y: ct(s).y,
                    width: ct(s).width,
                    height: ct(s).height,
                    fill: 'url(#gridPattern)',
                  },
                  null,
                  8,
                  k_
                ),
              ],
              8,
              z_
            )),
            Ct(
              D(
                'div',
                X_,
                [
                  It(
                    Gv,
                    {
                      onAddSubNode: ct(l),
                      onAddChildNode: ct(c),
                      onAddSameNode: ct(h),
                      onDeleteNode: ct(w),
                      onCenterToParent: ct(d),
                      isRoot: k.value,
                      curEditNode: ct(a),
                    },
                    null,
                    8,
                    [
                      'onAddSubNode',
                      'onAddChildNode',
                      'onAddSameNode',
                      'onDeleteNode',
                      'onCenterToParent',
                      'isRoot',
                      'curEditNode',
                    ]
                  ),
                  It(
                    e_,
                    {
                      onAlignLeftEdges: ct(I),
                      onAlignCenterEdges: ct(M),
                      onAlignRightEdges: ct(Y),
                      isRoot: k.value,
                    },
                    null,
                    8,
                    [
                      'onAlignLeftEdges',
                      'onAlignCenterEdges',
                      'onAlignRightEdges',
                      'isRoot',
                    ]
                  ),
                  It(
                    c_,
                    {
                      onMirrorChildren: ct(st),
                      onMoveChildrenToRight: ct(ut),
                      onMoveChildrenToLeft: ct(yt),
                      onToggleChildren: ct(O),
                      curEditNode: ct(a),
                    },
                    null,
                    8,
                    [
                      'onMirrorChildren',
                      'onMoveChildrenToRight',
                      'onMoveChildrenToLeft',
                      'onToggleChildren',
                      'curEditNode',
                    ]
                  ),
                  It(y_, { curEditNode: ct(a) }, null, 8, ['curEditNode']),
                  It(
                    E_,
                    { curEditNode: ct(a), draw: ct(i), content: n.value },
                    null,
                    8,
                    ['curEditNode', 'draw', 'content']
                  ),
                  It(j_, { curEditNode: ct(a), isRoot: k.value }, null, 8, [
                    'curEditNode',
                    'isRoot',
                  ]),
                ],
                512
              ),
              [[Kt, ct(a)]]
            ),
            Ct(
              D(
                'input',
                {
                  type: 'text',
                  placeholder: '请输入...',
                  class:
                    'absolute bottom-4 left-1/2 -translate-x-1/2 text-input',
                  style: { transform: 'translateX(-50%)' },
                  'onUpdate:modelValue': C[0] || (C[0] = (z) => (n.value = z)),
                  onKeyup: Wh(q, ['enter']),
                  onBlur: q,
                },
                null,
                544
              ),
              [
                [He, n.value, void 0, { trim: !0 }],
                [Kt, ct(a)],
              ]
            ),
            D(
              'div',
              {
                ref_key: 'eagleEyeRef',
                ref: t,
                class: 'absolute bottom-4 right-4 w-[200px] h-[160px] border',
              },
              null,
              512
            ),
          ])
        );
      },
    }),
    U_ = Xr(V_, [['__scopeId', 'data-v-ffcfd370']]),
    H_ = mn({
      __name: 'App',
      setup(e) {
        return (t, n) => (Ee(), ch(U_));
      },
    });
  String.prototype.getByteLen = function () {
    let e = 0;
    for (let t = 0; t < this.length; t++)
      this.charCodeAt(t) < 256 ? (e += 0.55) : (e += 1);
    return e;
  };
  Zh(H_).mount('#app');
});
export default G_();
