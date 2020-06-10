!(function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    var r = t();
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n];
  }
})(window, function() {
  return (function(e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 286))
    );
  })([
    function(e, t) {
      'function' == typeof Object.create
        ? (e.exports = function(e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })));
          })
        : (e.exports = function(e, t) {
            if (t) {
              e.super_ = t;
              var r = function() {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    function(e, t, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
      var n = r(4),
        i = n.Buffer;
      function o(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function a(e, t, r) {
        return i(e, t, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = a)),
        (a.prototype = Object.create(i.prototype)),
        o(i, a),
        (a.from = function(e, t, r) {
          if ('number' == typeof e)
            throw new TypeError('Argument must not be a number');
          return i(e, t, r);
        }),
        (a.alloc = function(e, t, r) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          var n = i(e);
          return (
            void 0 !== t
              ? 'string' == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return i(e);
        }),
        (a.allocUnsafeSlow = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return n.SlowBuffer(e);
        });
    },
    function(e, t, r) {
      (function(e) {
        !(function(e, t) {
          'use strict';
          function n(e, t) {
            if (!e) throw new Error(t || 'Assertion failed');
          }
          function i(e, t) {
            e.super_ = t;
            var r = function() {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
          function o(e, t, r) {
            if (o.isBN(e)) return e;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (('le' !== t && 'be' !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || 'be'));
          }
          var a;
          'object' == typeof e ? (e.exports = o) : (t.BN = o),
            (o.BN = o),
            (o.wordSize = 26);
          try {
            a = r(241).Buffer;
          } catch (e) {}
          function s(e, t, r) {
            for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
              var a = e.charCodeAt(o) - 48;
              (n <<= 4),
                (n |=
                  a >= 49 && a <= 54
                    ? a - 49 + 10
                    : a >= 17 && a <= 22
                    ? a - 17 + 10
                    : 15 & a);
            }
            return n;
          }
          function f(e, t, r, n) {
            for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
              var s = e.charCodeAt(a) - 48;
              (i *= n),
                (i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
            }
            return i;
          }
          (o.isBN = function(e) {
            return (
              e instanceof o ||
              (null !== e &&
                'object' == typeof e &&
                e.constructor.wordSize === o.wordSize &&
                Array.isArray(e.words))
            );
          }),
            (o.max = function(e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (o.min = function(e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function(e, t, r) {
              if ('number' == typeof e) return this._initNumber(e, t, r);
              if ('object' == typeof e) return this._initArray(e, t, r);
              'hex' === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
              var i = 0;
              '-' === (e = e.toString().replace(/\s+/g, ''))[0] && i++,
                16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i),
                '-' === e[0] && (this.negative = 1),
                this.strip(),
                'le' === r && this._initArray(this.toArray(), t, r);
            }),
            (o.prototype._initNumber = function(e, t, r) {
              e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                  ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                    (this.length = 2))
                  : (n(e < 9007199254740992),
                    (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === r && this._initArray(this.toArray(), t, r);
            }),
            (o.prototype._initArray = function(e, t, r) {
              if ((n('number' == typeof e.length), e.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                a,
                s = 0;
              if ('be' === r)
                for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                  (a = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              else if ('le' === r)
                for (i = 0, o = 0; i < e.length; i += 3)
                  (a = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              return this.strip();
            }),
            (o.prototype._parseHex = function(e, t) {
              (this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                i,
                o = 0;
              for (r = e.length - 6, n = 0; r >= t; r -= 6)
                (i = s(e, r, r + 6)),
                  (this.words[n] |= (i << o) & 67108863),
                  (this.words[n + 1] |= (i >>> (26 - o)) & 4194303),
                  (o += 24) >= 26 && ((o -= 26), n++);
              r + 6 !== t &&
                ((i = s(e, t, r + 6)),
                (this.words[n] |= (i << o) & 67108863),
                (this.words[n + 1] |= (i >>> (26 - o)) & 4194303)),
                this.strip();
            }),
            (o.prototype._parseBase = function(e, t, r) {
              (this.words = [0]), (this.length = 1);
              for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
              n--, (i = (i / t) | 0);
              for (
                var o = e.length - r,
                  a = o % n,
                  s = Math.min(o, o - a) + r,
                  u = 0,
                  c = r;
                c < s;
                c += n
              )
                (u = f(e, c, c + n, t)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== a) {
                var d = 1;
                for (u = f(e, c, e.length, t), c = 0; c < a; c++) d *= t;
                this.imuln(d),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
            }),
            (o.prototype.copy = function(e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              (e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red);
            }),
            (o.prototype.clone = function() {
              var e = new o(null);
              return this.copy(e), e;
            }),
            (o.prototype._expand = function(e) {
              for (; this.length < e; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype.strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (o.prototype.inspect = function() {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
            });
          var u = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000'
            ],
            c = [
              0,
              0,
              25,
              16,
              12,
              11,
              10,
              9,
              8,
              8,
              7,
              7,
              7,
              7,
              6,
              6,
              6,
              6,
              6,
              6,
              6,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5
            ],
            d = [
              0,
              0,
              33554432,
              43046721,
              16777216,
              48828125,
              60466176,
              40353607,
              16777216,
              43046721,
              1e7,
              19487171,
              35831808,
              62748517,
              7529536,
              11390625,
              16777216,
              24137569,
              34012224,
              47045881,
              64e6,
              4084101,
              5153632,
              6436343,
              7962624,
              9765625,
              11881376,
              14348907,
              17210368,
              20511149,
              243e5,
              28629151,
              33554432,
              39135393,
              45435424,
              52521875,
              60466176
            ];
          function h(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0;
            (r.length = n), (n = (n - 1) | 0);
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              a = i * o,
              s = 67108863 & a,
              f = (a / 67108864) | 0;
            r.words[0] = s;
            for (var u = 1; u < n; u++) {
              for (
                var c = f >>> 26,
                  d = 67108863 & f,
                  h = Math.min(u, t.length - 1),
                  l = Math.max(0, u - e.length + 1);
                l <= h;
                l++
              ) {
                var p = (u - l) | 0;
                (c +=
                  ((a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + d) /
                    67108864) |
                  0),
                  (d = 67108863 & a);
              }
              (r.words[u] = 0 | d), (f = 0 | c);
            }
            return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
          }
          (o.prototype.toString = function(e, t) {
            var r;
            if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
              r = '';
              for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                var s = this.words[a],
                  f = (16777215 & ((s << i) | o)).toString(16);
                (r =
                  0 !== (o = (s >>> (24 - i)) & 16777215) ||
                  a !== this.length - 1
                    ? u[6 - f.length] + f + r
                    : f + r),
                  (i += 2) >= 26 && ((i -= 26), a--);
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % t != 0; )
                r = '0' + r;
              return 0 !== this.negative && (r = '-' + r), r;
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var h = c[e],
                l = d[e];
              r = '';
              var p = this.clone();
              for (p.negative = 0; !p.isZero(); ) {
                var b = p.modn(l).toString(e);
                r = (p = p.idivn(l)).isZero() ? b + r : u[h - b.length] + b + r;
              }
              for (this.isZero() && (r = '0' + r); r.length % t != 0; )
                r = '0' + r;
              return 0 !== this.negative && (r = '-' + r), r;
            }
            n(!1, 'Base should be between 2 and 36');
          }),
            (o.prototype.toNumber = function() {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (e += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    n(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function() {
              return this.toString(16);
            }),
            (o.prototype.toBuffer = function(e, t) {
              return n(void 0 !== a), this.toArrayLike(a, e, t);
            }),
            (o.prototype.toArray = function(e, t) {
              return this.toArrayLike(Array, e, t);
            }),
            (o.prototype.toArrayLike = function(e, t, r) {
              var i = this.byteLength(),
                o = r || Math.max(1, i);
              n(i <= o, 'byte array longer than desired length'),
                n(o > 0, 'Requested array length <= 0'),
                this.strip();
              var a,
                s,
                f = 'le' === t,
                u = new e(o),
                c = this.clone();
              if (f) {
                for (s = 0; !c.isZero(); s++)
                  (a = c.andln(255)), c.iushrn(8), (u[s] = a);
                for (; s < o; s++) u[s] = 0;
              } else {
                for (s = 0; s < o - i; s++) u[s] = 0;
                for (s = 0; !c.isZero(); s++)
                  (a = c.andln(255)), c.iushrn(8), (u[o - s - 1] = a);
              }
              return u;
            }),
            Math.clz32
              ? (o.prototype._countBits = function(e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function(e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (o.prototype._zeroBits = function(e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 == (8191 & t) && ((r += 13), (t >>>= 13)),
                0 == (127 & t) && ((r += 7), (t >>>= 7)),
                0 == (15 & t) && ((r += 4), (t >>>= 4)),
                0 == (3 & t) && ((r += 2), (t >>>= 2)),
                0 == (1 & t) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function() {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function() {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function(e) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(e)
                    .iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function(e) {
              return this.testn(e - 1)
                ? this.notn(e)
                    .iaddn(1)
                    .ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function() {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function() {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function(e) {
              for (; this.length < e.length; ) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this.strip();
            }),
            (o.prototype.ior = function(e) {
              return n(0 == (this.negative | e.negative)), this.iuor(e);
            }),
            (o.prototype.or = function(e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function(e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function(e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return (this.length = t.length), this.strip();
            }),
            (o.prototype.iand = function(e) {
              return n(0 == (this.negative | e.negative)), this.iuand(e);
            }),
            (o.prototype.and = function(e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function(e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function(e) {
              var t, r;
              this.length > e.length
                ? ((t = this), (r = e))
                : ((t = e), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = t.words[n] ^ r.words[n];
              if (this !== t)
                for (; n < t.length; n++) this.words[n] = t.words[n];
              return (this.length = t.length), this.strip();
            }),
            (o.prototype.ixor = function(e) {
              return n(0 == (this.negative | e.negative)), this.iuxor(e);
            }),
            (o.prototype.xor = function(e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function(e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function(e) {
              n('number' == typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              this._expand(t), r > 0 && t--;
              for (var i = 0; i < t; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this.strip()
              );
            }),
            (o.prototype.notn = function(e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function(e, t) {
              n('number' == typeof e && e >= 0);
              var r = (e / 26) | 0,
                i = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this.strip()
              );
            }),
            (o.prototype.iadd = function(e) {
              var t, r, n;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((r = this), (n = e))
                : ((r = e), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                (t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              for (; 0 !== i && o < r.length; o++)
                (t = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              if (((this.length = r.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function(e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (t = e.sub(this)),
                  (this.negative = 1),
                  t)
                : this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this);
            }),
            (o.prototype.isub = function(e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return (e.negative = 1), t._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(e);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
              for (var o = 0, a = 0; a < n.length; a++)
                (o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              for (; 0 !== o && a < r.length; a++)
                (o = (t = (0 | r.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              if (0 === o && a < r.length && r !== this)
                for (; a < r.length; a++) this.words[a] = r.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                r !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (o.prototype.sub = function(e) {
              return this.clone().isub(e);
            });
          var l = function(e, t, r) {
            var n,
              i,
              o,
              a = e.words,
              s = t.words,
              f = r.words,
              u = 0,
              c = 0 | a[0],
              d = 8191 & c,
              h = c >>> 13,
              l = 0 | a[1],
              p = 8191 & l,
              b = l >>> 13,
              g = 0 | a[2],
              y = 8191 & g,
              v = g >>> 13,
              m = 0 | a[3],
              _ = 8191 & m,
              w = m >>> 13,
              E = 0 | a[4],
              S = 8191 & E,
              A = E >>> 13,
              T = 0 | a[5],
              M = 8191 & T,
              x = T >>> 13,
              I = 0 | a[6],
              L = 8191 & I,
              R = I >>> 13,
              P = 0 | a[7],
              k = 8191 & P,
              N = P >>> 13,
              C = 0 | a[8],
              O = 8191 & C,
              B = C >>> 13,
              j = 0 | a[9],
              D = 8191 & j,
              z = j >>> 13,
              U = 0 | s[0],
              K = 8191 & U,
              q = U >>> 13,
              Y = 0 | s[1],
              F = 8191 & Y,
              V = Y >>> 13,
              H = 0 | s[2],
              W = 8191 & H,
              G = H >>> 13,
              Z = 0 | s[3],
              J = 8191 & Z,
              $ = Z >>> 13,
              X = 0 | s[4],
              Q = 8191 & X,
              ee = X >>> 13,
              te = 0 | s[5],
              re = 8191 & te,
              ne = te >>> 13,
              ie = 0 | s[6],
              oe = 8191 & ie,
              ae = ie >>> 13,
              se = 0 | s[7],
              fe = 8191 & se,
              ue = se >>> 13,
              ce = 0 | s[8],
              de = 8191 & ce,
              he = ce >>> 13,
              le = 0 | s[9],
              pe = 8191 & le,
              be = le >>> 13;
            (r.negative = e.negative ^ t.negative), (r.length = 19);
            var ge =
              (((u + (n = Math.imul(d, K))) | 0) +
                ((8191 & (i = ((i = Math.imul(d, q)) + Math.imul(h, K)) | 0)) <<
                  13)) |
              0;
            (u =
              ((((o = Math.imul(h, q)) + (i >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (n = Math.imul(p, K)),
              (i = ((i = Math.imul(p, q)) + Math.imul(b, K)) | 0),
              (o = Math.imul(b, q));
            var ye =
              (((u + (n = (n + Math.imul(d, F)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, V)) | 0) + Math.imul(h, F)) | 0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, V)) | 0) + (i >>> 13)) | 0) +
                (ye >>> 26)) |
              0),
              (ye &= 67108863),
              (n = Math.imul(y, K)),
              (i = ((i = Math.imul(y, q)) + Math.imul(v, K)) | 0),
              (o = Math.imul(v, q)),
              (n = (n + Math.imul(p, F)) | 0),
              (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(b, F)) | 0),
              (o = (o + Math.imul(b, V)) | 0);
            var ve =
              (((u + (n = (n + Math.imul(d, W)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, G)) | 0) + Math.imul(h, W)) | 0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, G)) | 0) + (i >>> 13)) | 0) +
                (ve >>> 26)) |
              0),
              (ve &= 67108863),
              (n = Math.imul(_, K)),
              (i = ((i = Math.imul(_, q)) + Math.imul(w, K)) | 0),
              (o = Math.imul(w, q)),
              (n = (n + Math.imul(y, F)) | 0),
              (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(v, F)) | 0),
              (o = (o + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(p, W)) | 0),
              (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, G)) | 0);
            var me =
              (((u + (n = (n + Math.imul(d, J)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, $)) | 0) + Math.imul(h, J)) | 0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, $)) | 0) + (i >>> 13)) | 0) +
                (me >>> 26)) |
              0),
              (me &= 67108863),
              (n = Math.imul(S, K)),
              (i = ((i = Math.imul(S, q)) + Math.imul(A, K)) | 0),
              (o = Math.imul(A, q)),
              (n = (n + Math.imul(_, F)) | 0),
              (i = ((i = (i + Math.imul(_, V)) | 0) + Math.imul(w, F)) | 0),
              (o = (o + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(y, W)) | 0),
              (i = ((i = (i + Math.imul(y, G)) | 0) + Math.imul(v, W)) | 0),
              (o = (o + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(p, J)) | 0),
              (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(b, J)) | 0),
              (o = (o + Math.imul(b, $)) | 0);
            var _e =
              (((u + (n = (n + Math.imul(d, Q)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, ee)) | 0) + Math.imul(h, Q)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, ee)) | 0) + (i >>> 13)) | 0) +
                (_e >>> 26)) |
              0),
              (_e &= 67108863),
              (n = Math.imul(M, K)),
              (i = ((i = Math.imul(M, q)) + Math.imul(x, K)) | 0),
              (o = Math.imul(x, q)),
              (n = (n + Math.imul(S, F)) | 0),
              (i = ((i = (i + Math.imul(S, V)) | 0) + Math.imul(A, F)) | 0),
              (o = (o + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(_, W)) | 0),
              (i = ((i = (i + Math.imul(_, G)) | 0) + Math.imul(w, W)) | 0),
              (o = (o + Math.imul(w, G)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (i = ((i = (i + Math.imul(y, $)) | 0) + Math.imul(v, J)) | 0),
              (o = (o + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, ee)) | 0);
            var we =
              (((u + (n = (n + Math.imul(d, re)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, ne)) | 0) + Math.imul(h, re)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, ne)) | 0) + (i >>> 13)) | 0) +
                (we >>> 26)) |
              0),
              (we &= 67108863),
              (n = Math.imul(L, K)),
              (i = ((i = Math.imul(L, q)) + Math.imul(R, K)) | 0),
              (o = Math.imul(R, q)),
              (n = (n + Math.imul(M, F)) | 0),
              (i = ((i = (i + Math.imul(M, V)) | 0) + Math.imul(x, F)) | 0),
              (o = (o + Math.imul(x, V)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (i = ((i = (i + Math.imul(S, G)) | 0) + Math.imul(A, W)) | 0),
              (o = (o + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (i = ((i = (i + Math.imul(_, $)) | 0) + Math.imul(w, J)) | 0),
              (o = (o + Math.imul(w, $)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (i = ((i = (i + Math.imul(y, ee)) | 0) + Math.imul(v, Q)) | 0),
              (o = (o + Math.imul(v, ee)) | 0),
              (n = (n + Math.imul(p, re)) | 0),
              (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(b, re)) | 0),
              (o = (o + Math.imul(b, ne)) | 0);
            var Ee =
              (((u + (n = (n + Math.imul(d, oe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, ae)) | 0) + Math.imul(h, oe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, ae)) | 0) + (i >>> 13)) | 0) +
                (Ee >>> 26)) |
              0),
              (Ee &= 67108863),
              (n = Math.imul(k, K)),
              (i = ((i = Math.imul(k, q)) + Math.imul(N, K)) | 0),
              (o = Math.imul(N, q)),
              (n = (n + Math.imul(L, F)) | 0),
              (i = ((i = (i + Math.imul(L, V)) | 0) + Math.imul(R, F)) | 0),
              (o = (o + Math.imul(R, V)) | 0),
              (n = (n + Math.imul(M, W)) | 0),
              (i = ((i = (i + Math.imul(M, G)) | 0) + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(x, G)) | 0),
              (n = (n + Math.imul(S, J)) | 0),
              (i = ((i = (i + Math.imul(S, $)) | 0) + Math.imul(A, J)) | 0),
              (o = (o + Math.imul(A, $)) | 0),
              (n = (n + Math.imul(_, Q)) | 0),
              (i = ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(w, Q)) | 0),
              (o = (o + Math.imul(w, ee)) | 0),
              (n = (n + Math.imul(y, re)) | 0),
              (i = ((i = (i + Math.imul(y, ne)) | 0) + Math.imul(v, re)) | 0),
              (o = (o + Math.imul(v, ne)) | 0),
              (n = (n + Math.imul(p, oe)) | 0),
              (i = ((i = (i + Math.imul(p, ae)) | 0) + Math.imul(b, oe)) | 0),
              (o = (o + Math.imul(b, ae)) | 0);
            var Se =
              (((u + (n = (n + Math.imul(d, fe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, ue)) | 0) + Math.imul(h, fe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, ue)) | 0) + (i >>> 13)) | 0) +
                (Se >>> 26)) |
              0),
              (Se &= 67108863),
              (n = Math.imul(O, K)),
              (i = ((i = Math.imul(O, q)) + Math.imul(B, K)) | 0),
              (o = Math.imul(B, q)),
              (n = (n + Math.imul(k, F)) | 0),
              (i = ((i = (i + Math.imul(k, V)) | 0) + Math.imul(N, F)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(L, W)) | 0),
              (i = ((i = (i + Math.imul(L, G)) | 0) + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(R, G)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (i = ((i = (i + Math.imul(M, $)) | 0) + Math.imul(x, J)) | 0),
              (o = (o + Math.imul(x, $)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (i = ((i = (i + Math.imul(S, ee)) | 0) + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, ee)) | 0),
              (n = (n + Math.imul(_, re)) | 0),
              (i = ((i = (i + Math.imul(_, ne)) | 0) + Math.imul(w, re)) | 0),
              (o = (o + Math.imul(w, ne)) | 0),
              (n = (n + Math.imul(y, oe)) | 0),
              (i = ((i = (i + Math.imul(y, ae)) | 0) + Math.imul(v, oe)) | 0),
              (o = (o + Math.imul(v, ae)) | 0),
              (n = (n + Math.imul(p, fe)) | 0),
              (i = ((i = (i + Math.imul(p, ue)) | 0) + Math.imul(b, fe)) | 0),
              (o = (o + Math.imul(b, ue)) | 0);
            var Ae =
              (((u + (n = (n + Math.imul(d, de)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, he)) | 0) + Math.imul(h, de)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, he)) | 0) + (i >>> 13)) | 0) +
                (Ae >>> 26)) |
              0),
              (Ae &= 67108863),
              (n = Math.imul(D, K)),
              (i = ((i = Math.imul(D, q)) + Math.imul(z, K)) | 0),
              (o = Math.imul(z, q)),
              (n = (n + Math.imul(O, F)) | 0),
              (i = ((i = (i + Math.imul(O, V)) | 0) + Math.imul(B, F)) | 0),
              (o = (o + Math.imul(B, V)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (i = ((i = (i + Math.imul(k, G)) | 0) + Math.imul(N, W)) | 0),
              (o = (o + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (i = ((i = (i + Math.imul(L, $)) | 0) + Math.imul(R, J)) | 0),
              (o = (o + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (i = ((i = (i + Math.imul(M, ee)) | 0) + Math.imul(x, Q)) | 0),
              (o = (o + Math.imul(x, ee)) | 0),
              (n = (n + Math.imul(S, re)) | 0),
              (i = ((i = (i + Math.imul(S, ne)) | 0) + Math.imul(A, re)) | 0),
              (o = (o + Math.imul(A, ne)) | 0),
              (n = (n + Math.imul(_, oe)) | 0),
              (i = ((i = (i + Math.imul(_, ae)) | 0) + Math.imul(w, oe)) | 0),
              (o = (o + Math.imul(w, ae)) | 0),
              (n = (n + Math.imul(y, fe)) | 0),
              (i = ((i = (i + Math.imul(y, ue)) | 0) + Math.imul(v, fe)) | 0),
              (o = (o + Math.imul(v, ue)) | 0),
              (n = (n + Math.imul(p, de)) | 0),
              (i = ((i = (i + Math.imul(p, he)) | 0) + Math.imul(b, de)) | 0),
              (o = (o + Math.imul(b, he)) | 0);
            var Te =
              (((u + (n = (n + Math.imul(d, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(d, be)) | 0) + Math.imul(h, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(h, be)) | 0) + (i >>> 13)) | 0) +
                (Te >>> 26)) |
              0),
              (Te &= 67108863),
              (n = Math.imul(D, F)),
              (i = ((i = Math.imul(D, V)) + Math.imul(z, F)) | 0),
              (o = Math.imul(z, V)),
              (n = (n + Math.imul(O, W)) | 0),
              (i = ((i = (i + Math.imul(O, G)) | 0) + Math.imul(B, W)) | 0),
              (o = (o + Math.imul(B, G)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (i = ((i = (i + Math.imul(k, $)) | 0) + Math.imul(N, J)) | 0),
              (o = (o + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (i = ((i = (i + Math.imul(L, ee)) | 0) + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, ee)) | 0),
              (n = (n + Math.imul(M, re)) | 0),
              (i = ((i = (i + Math.imul(M, ne)) | 0) + Math.imul(x, re)) | 0),
              (o = (o + Math.imul(x, ne)) | 0),
              (n = (n + Math.imul(S, oe)) | 0),
              (i = ((i = (i + Math.imul(S, ae)) | 0) + Math.imul(A, oe)) | 0),
              (o = (o + Math.imul(A, ae)) | 0),
              (n = (n + Math.imul(_, fe)) | 0),
              (i = ((i = (i + Math.imul(_, ue)) | 0) + Math.imul(w, fe)) | 0),
              (o = (o + Math.imul(w, ue)) | 0),
              (n = (n + Math.imul(y, de)) | 0),
              (i = ((i = (i + Math.imul(y, he)) | 0) + Math.imul(v, de)) | 0),
              (o = (o + Math.imul(v, he)) | 0);
            var Me =
              (((u + (n = (n + Math.imul(p, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, be)) | 0) + Math.imul(b, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(b, be)) | 0) + (i >>> 13)) | 0) +
                (Me >>> 26)) |
              0),
              (Me &= 67108863),
              (n = Math.imul(D, W)),
              (i = ((i = Math.imul(D, G)) + Math.imul(z, W)) | 0),
              (o = Math.imul(z, G)),
              (n = (n + Math.imul(O, J)) | 0),
              (i = ((i = (i + Math.imul(O, $)) | 0) + Math.imul(B, J)) | 0),
              (o = (o + Math.imul(B, $)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (i = ((i = (i + Math.imul(k, ee)) | 0) + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, ee)) | 0),
              (n = (n + Math.imul(L, re)) | 0),
              (i = ((i = (i + Math.imul(L, ne)) | 0) + Math.imul(R, re)) | 0),
              (o = (o + Math.imul(R, ne)) | 0),
              (n = (n + Math.imul(M, oe)) | 0),
              (i = ((i = (i + Math.imul(M, ae)) | 0) + Math.imul(x, oe)) | 0),
              (o = (o + Math.imul(x, ae)) | 0),
              (n = (n + Math.imul(S, fe)) | 0),
              (i = ((i = (i + Math.imul(S, ue)) | 0) + Math.imul(A, fe)) | 0),
              (o = (o + Math.imul(A, ue)) | 0),
              (n = (n + Math.imul(_, de)) | 0),
              (i = ((i = (i + Math.imul(_, he)) | 0) + Math.imul(w, de)) | 0),
              (o = (o + Math.imul(w, he)) | 0);
            var xe =
              (((u + (n = (n + Math.imul(y, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(y, be)) | 0) + Math.imul(v, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(v, be)) | 0) + (i >>> 13)) | 0) +
                (xe >>> 26)) |
              0),
              (xe &= 67108863),
              (n = Math.imul(D, J)),
              (i = ((i = Math.imul(D, $)) + Math.imul(z, J)) | 0),
              (o = Math.imul(z, $)),
              (n = (n + Math.imul(O, Q)) | 0),
              (i = ((i = (i + Math.imul(O, ee)) | 0) + Math.imul(B, Q)) | 0),
              (o = (o + Math.imul(B, ee)) | 0),
              (n = (n + Math.imul(k, re)) | 0),
              (i = ((i = (i + Math.imul(k, ne)) | 0) + Math.imul(N, re)) | 0),
              (o = (o + Math.imul(N, ne)) | 0),
              (n = (n + Math.imul(L, oe)) | 0),
              (i = ((i = (i + Math.imul(L, ae)) | 0) + Math.imul(R, oe)) | 0),
              (o = (o + Math.imul(R, ae)) | 0),
              (n = (n + Math.imul(M, fe)) | 0),
              (i = ((i = (i + Math.imul(M, ue)) | 0) + Math.imul(x, fe)) | 0),
              (o = (o + Math.imul(x, ue)) | 0),
              (n = (n + Math.imul(S, de)) | 0),
              (i = ((i = (i + Math.imul(S, he)) | 0) + Math.imul(A, de)) | 0),
              (o = (o + Math.imul(A, he)) | 0);
            var Ie =
              (((u + (n = (n + Math.imul(_, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(_, be)) | 0) + Math.imul(w, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(w, be)) | 0) + (i >>> 13)) | 0) +
                (Ie >>> 26)) |
              0),
              (Ie &= 67108863),
              (n = Math.imul(D, Q)),
              (i = ((i = Math.imul(D, ee)) + Math.imul(z, Q)) | 0),
              (o = Math.imul(z, ee)),
              (n = (n + Math.imul(O, re)) | 0),
              (i = ((i = (i + Math.imul(O, ne)) | 0) + Math.imul(B, re)) | 0),
              (o = (o + Math.imul(B, ne)) | 0),
              (n = (n + Math.imul(k, oe)) | 0),
              (i = ((i = (i + Math.imul(k, ae)) | 0) + Math.imul(N, oe)) | 0),
              (o = (o + Math.imul(N, ae)) | 0),
              (n = (n + Math.imul(L, fe)) | 0),
              (i = ((i = (i + Math.imul(L, ue)) | 0) + Math.imul(R, fe)) | 0),
              (o = (o + Math.imul(R, ue)) | 0),
              (n = (n + Math.imul(M, de)) | 0),
              (i = ((i = (i + Math.imul(M, he)) | 0) + Math.imul(x, de)) | 0),
              (o = (o + Math.imul(x, he)) | 0);
            var Le =
              (((u + (n = (n + Math.imul(S, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(S, be)) | 0) + Math.imul(A, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(A, be)) | 0) + (i >>> 13)) | 0) +
                (Le >>> 26)) |
              0),
              (Le &= 67108863),
              (n = Math.imul(D, re)),
              (i = ((i = Math.imul(D, ne)) + Math.imul(z, re)) | 0),
              (o = Math.imul(z, ne)),
              (n = (n + Math.imul(O, oe)) | 0),
              (i = ((i = (i + Math.imul(O, ae)) | 0) + Math.imul(B, oe)) | 0),
              (o = (o + Math.imul(B, ae)) | 0),
              (n = (n + Math.imul(k, fe)) | 0),
              (i = ((i = (i + Math.imul(k, ue)) | 0) + Math.imul(N, fe)) | 0),
              (o = (o + Math.imul(N, ue)) | 0),
              (n = (n + Math.imul(L, de)) | 0),
              (i = ((i = (i + Math.imul(L, he)) | 0) + Math.imul(R, de)) | 0),
              (o = (o + Math.imul(R, he)) | 0);
            var Re =
              (((u + (n = (n + Math.imul(M, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, be)) | 0) + Math.imul(x, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(x, be)) | 0) + (i >>> 13)) | 0) +
                (Re >>> 26)) |
              0),
              (Re &= 67108863),
              (n = Math.imul(D, oe)),
              (i = ((i = Math.imul(D, ae)) + Math.imul(z, oe)) | 0),
              (o = Math.imul(z, ae)),
              (n = (n + Math.imul(O, fe)) | 0),
              (i = ((i = (i + Math.imul(O, ue)) | 0) + Math.imul(B, fe)) | 0),
              (o = (o + Math.imul(B, ue)) | 0),
              (n = (n + Math.imul(k, de)) | 0),
              (i = ((i = (i + Math.imul(k, he)) | 0) + Math.imul(N, de)) | 0),
              (o = (o + Math.imul(N, he)) | 0);
            var Pe =
              (((u + (n = (n + Math.imul(L, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(L, be)) | 0) + Math.imul(R, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(R, be)) | 0) + (i >>> 13)) | 0) +
                (Pe >>> 26)) |
              0),
              (Pe &= 67108863),
              (n = Math.imul(D, fe)),
              (i = ((i = Math.imul(D, ue)) + Math.imul(z, fe)) | 0),
              (o = Math.imul(z, ue)),
              (n = (n + Math.imul(O, de)) | 0),
              (i = ((i = (i + Math.imul(O, he)) | 0) + Math.imul(B, de)) | 0),
              (o = (o + Math.imul(B, he)) | 0);
            var ke =
              (((u + (n = (n + Math.imul(k, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(k, be)) | 0) + Math.imul(N, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(N, be)) | 0) + (i >>> 13)) | 0) +
                (ke >>> 26)) |
              0),
              (ke &= 67108863),
              (n = Math.imul(D, de)),
              (i = ((i = Math.imul(D, he)) + Math.imul(z, de)) | 0),
              (o = Math.imul(z, he));
            var Ne =
              (((u + (n = (n + Math.imul(O, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(O, be)) | 0) + Math.imul(B, pe)) |
                    0)) <<
                  13)) |
              0;
            (u =
              ((((o = (o + Math.imul(B, be)) | 0) + (i >>> 13)) | 0) +
                (Ne >>> 26)) |
              0),
              (Ne &= 67108863);
            var Ce =
              (((u + (n = Math.imul(D, pe))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(D, be)) + Math.imul(z, pe)) | 0)) <<
                  13)) |
              0;
            return (
              (u =
                ((((o = Math.imul(z, be)) + (i >>> 13)) | 0) + (Ce >>> 26)) |
                0),
              (Ce &= 67108863),
              (f[0] = ge),
              (f[1] = ye),
              (f[2] = ve),
              (f[3] = me),
              (f[4] = _e),
              (f[5] = we),
              (f[6] = Ee),
              (f[7] = Se),
              (f[8] = Ae),
              (f[9] = Te),
              (f[10] = Me),
              (f[11] = xe),
              (f[12] = Ie),
              (f[13] = Le),
              (f[14] = Re),
              (f[15] = Pe),
              (f[16] = ke),
              (f[17] = Ne),
              (f[18] = Ce),
              0 !== u && ((f[19] = u), r.length++),
              r
            );
          };
          function p(e, t, r) {
            return new b().mulp(e, t, r);
          }
          function b(e, t) {
            (this.x = e), (this.y = t);
          }
          Math.imul || (l = h),
            (o.prototype.mulTo = function(e, t) {
              var r = this.length + e.length;
              return 10 === this.length && 10 === e.length
                ? l(this, e, t)
                : r < 63
                ? h(this, e, t)
                : r < 1024
                ? (function(e, t, r) {
                    (r.negative = t.negative ^ e.negative),
                      (r.length = e.length + t.length);
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                      var a = i;
                      i = 0;
                      for (
                        var s = 67108863 & n,
                          f = Math.min(o, t.length - 1),
                          u = Math.max(0, o - e.length + 1);
                        u <= f;
                        u++
                      ) {
                        var c = o - u,
                          d = (0 | e.words[c]) * (0 | t.words[u]),
                          h = 67108863 & d;
                        (s = 67108863 & (h = (h + s) | 0)),
                          (i +=
                            (a =
                              ((a = (a + ((d / 67108864) | 0)) | 0) +
                                (h >>> 26)) |
                              0) >>> 26),
                          (a &= 67108863);
                      }
                      (r.words[o] = s), (n = a), (a = i);
                    }
                    return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                  })(this, e, t)
                : p(this, e, t);
            }),
            (b.prototype.makeRBT = function(e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (b.prototype.revBin = function(e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                (n |= (1 & e) << (t - i - 1)), (e >>= 1);
              return n;
            }),
            (b.prototype.permute = function(e, t, r, n, i, o) {
              for (var a = 0; a < o; a++) (n[a] = t[e[a]]), (i[a] = r[e[a]]);
            }),
            (b.prototype.transform = function(e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var a = 1; a < i; a <<= 1)
                for (
                  var s = a << 1,
                    f = Math.cos((2 * Math.PI) / s),
                    u = Math.sin((2 * Math.PI) / s),
                    c = 0;
                  c < i;
                  c += s
                )
                  for (var d = f, h = u, l = 0; l < a; l++) {
                    var p = r[c + l],
                      b = n[c + l],
                      g = r[c + l + a],
                      y = n[c + l + a],
                      v = d * g - h * y;
                    (y = d * y + h * g),
                      (g = v),
                      (r[c + l] = p + g),
                      (n[c + l] = b + y),
                      (r[c + l + a] = p - g),
                      (n[c + l + a] = b - y),
                      l !== s &&
                        ((v = f * d - u * h), (h = f * h + u * d), (d = v));
                  }
            }),
            (b.prototype.guessLen13b = function(e, t) {
              var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (b.prototype.conjugate = function(e, t, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = e[n];
                  (e[n] = e[r - n - 1]),
                    (e[r - n - 1] = i),
                    (i = t[n]),
                    (t[n] = -t[r - n - 1]),
                    (t[r - n - 1] = -i);
                }
            }),
            (b.prototype.normalize13b = function(e, t) {
              for (var r = 0, n = 0; n < t / 2; n++) {
                var i =
                  8192 * Math.round(e[2 * n + 1] / t) +
                  Math.round(e[2 * n] / t) +
                  r;
                (e[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return e;
            }),
            (b.prototype.convert13b = function(e, t, r, i) {
              for (var o = 0, a = 0; a < t; a++)
                (o += 0 | e[a]),
                  (r[2 * a] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * a + 1] = 8191 & o),
                  (o >>>= 13);
              for (a = 2 * t; a < i; ++a) r[a] = 0;
              n(0 === o), n(0 == (-8192 & o));
            }),
            (b.prototype.stub = function(e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (b.prototype.mulp = function(e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                a = new Array(n),
                s = new Array(n),
                f = new Array(n),
                u = new Array(n),
                c = new Array(n),
                d = new Array(n),
                h = r.words;
              (h.length = n),
                this.convert13b(e.words, e.length, a, n),
                this.convert13b(t.words, t.length, u, n),
                this.transform(a, o, s, f, n, i),
                this.transform(u, o, c, d, n, i);
              for (var l = 0; l < n; l++) {
                var p = s[l] * c[l] - f[l] * d[l];
                (f[l] = s[l] * d[l] + f[l] * c[l]), (s[l] = p);
              }
              return (
                this.conjugate(s, f, n),
                this.transform(s, f, h, o, n, i),
                this.conjugate(h, o, n),
                this.normalize13b(h, n),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r.strip()
              );
            }),
            (o.prototype.mul = function(e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function(e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), p(this, e, t)
              );
            }),
            (o.prototype.imul = function(e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function(e) {
              n('number' == typeof e), n(e < 67108864);
              for (var t = 0, r = 0; r < this.length; r++) {
                var i = (0 | this.words[r]) * e,
                  o = (67108863 & i) + (67108863 & t);
                (t >>= 26),
                  (t += (i / 67108864) | 0),
                  (t += o >>> 26),
                  (this.words[r] = 67108863 & o);
              }
              return 0 !== t && ((this.words[r] = t), this.length++), this;
            }),
            (o.prototype.muln = function(e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function() {
              return this.mul(this);
            }),
            (o.prototype.isqr = function() {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function(e) {
              var t = (function(e) {
                for (
                  var t = new Array(e.bitLength()), r = 0;
                  r < t.length;
                  r++
                ) {
                  var n = (r / 26) | 0,
                    i = r % 26;
                  t[r] = (e.words[n] & (1 << i)) >>> i;
                }
                return t;
              })(e);
              if (0 === t.length) return new o(1);
              for (
                var r = this, n = 0;
                n < t.length && 0 === t[n];
                n++, r = r.sqr()
              );
              if (++n < t.length)
                for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                  0 !== t[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function(e) {
              n('number' == typeof e && e >= 0);
              var t,
                r = e % 26,
                i = (e - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var a = 0;
                for (t = 0; t < this.length; t++) {
                  var s = this.words[t] & o,
                    f = ((0 | this.words[t]) - s) << r;
                  (this.words[t] = f | a), (a = s >>> (26 - r));
                }
                a && ((this.words[t] = a), this.length++);
              }
              if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
              }
              return this.strip();
            }),
            (o.prototype.ishln = function(e) {
              return n(0 === this.negative), this.iushln(e);
            }),
            (o.prototype.iushrn = function(e, t, r) {
              var i;
              n('number' == typeof e && e >= 0),
                (i = t ? (t - (t % 26)) / 26 : 0);
              var o = e % 26,
                a = Math.min((e - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                f = r;
              if (((i -= a), (i = Math.max(0, i)), f)) {
                for (var u = 0; u < a; u++) f.words[u] = this.words[u];
                f.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + a];
              else (this.words[0] = 0), (this.length = 1);
              var c = 0;
              for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                var d = 0 | this.words[u];
                (this.words[u] = (c << (26 - o)) | (d >>> o)), (c = d & s);
              }
              return (
                f && 0 !== c && (f.words[f.length++] = c),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (o.prototype.ishrn = function(e, t, r) {
              return n(0 === this.negative), this.iushrn(e, t, r);
            }),
            (o.prototype.shln = function(e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function(e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function(e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function(e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function(e) {
              n('number' == typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              return !(this.length <= r) && !!(this.words[r] & i);
            }),
            (o.prototype.imaskn = function(e) {
              n('number' == typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (n(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t)
              ) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
              }
              return this.strip();
            }),
            (o.prototype.maskn = function(e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function(e) {
              return (
                n('number' == typeof e),
                n(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < e
                    ? ((this.words[0] = e - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(e),
                      (this.negative = 1),
                      this)
                  : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function(e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                (this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++;
              return (this.length = Math.max(this.length, t + 1)), this;
            }),
            (o.prototype.isubn = function(e) {
              if ((n('number' == typeof e), n(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(e), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  (this.words[t] += 67108864), (this.words[t + 1] -= 1);
              return this.strip();
            }),
            (o.prototype.addn = function(e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function(e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function() {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function() {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function(e, t, r) {
              var i,
                o,
                a = e.length + r;
              this._expand(a);
              var s = 0;
              for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + r]) + s;
                var f = (0 | e.words[i]) * t;
                (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o);
              }
              for (; i < this.length - r; i++)
                (s = (o = (0 | this.words[i + r]) + s) >> 26),
                  (this.words[i + r] = 67108863 & o);
              if (0 === s) return this.strip();
              for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                (s = (o = -(0 | this.words[i]) + s) >> 26),
                  (this.words[i] = 67108863 & o);
              return (this.negative = 1), this.strip();
            }),
            (o.prototype._wordDiv = function(e, t) {
              var r = (this.length, e.length),
                n = this.clone(),
                i = e,
                a = 0 | i.words[i.length - 1];
              0 !== (r = 26 - this._countBits(a)) &&
                ((i = i.ushln(r)),
                n.iushln(r),
                (a = 0 | i.words[i.length - 1]));
              var s,
                f = n.length - i.length;
              if ('mod' !== t) {
                ((s = new o(null)).length = f + 1),
                  (s.words = new Array(s.length));
                for (var u = 0; u < s.length; u++) s.words[u] = 0;
              }
              var c = n.clone()._ishlnsubmul(i, 1, f);
              0 === c.negative && ((n = c), s && (s.words[f] = 1));
              for (var d = f - 1; d >= 0; d--) {
                var h =
                  67108864 * (0 | n.words[i.length + d]) +
                  (0 | n.words[i.length + d - 1]);
                for (
                  h = Math.min((h / a) | 0, 67108863), n._ishlnsubmul(i, h, d);
                  0 !== n.negative;

                )
                  h--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, d),
                    n.isZero() || (n.negative ^= 1);
                s && (s.words[d] = h);
              }
              return (
                s && s.strip(),
                n.strip(),
                'div' !== t && 0 !== r && n.iushrn(r),
                { div: s || null, mod: n }
              );
            }),
            (o.prototype.divmod = function(e, t, r) {
              return (
                n(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                  ? ((s = this.neg().divmod(e, t)),
                    'mod' !== t && (i = s.div.neg()),
                    'div' !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                    { div: i, mod: a })
                  : 0 === this.negative && 0 !== e.negative
                  ? ((s = this.divmod(e.neg(), t)),
                    'mod' !== t && (i = s.div.neg()),
                    { div: i, mod: s.mod })
                  : 0 != (this.negative & e.negative)
                  ? ((s = this.neg().divmod(e.neg(), t)),
                    'div' !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                    { div: s.div, mod: a })
                  : e.length > this.length || this.cmp(e) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === e.length
                  ? 'div' === t
                    ? { div: this.divn(e.words[0]), mod: null }
                    : 'mod' === t
                    ? { div: null, mod: new o(this.modn(e.words[0])) }
                    : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0]))
                      }
                  : this._wordDiv(e, t)
              );
              var i, a, s;
            }),
            (o.prototype.div = function(e) {
              return this.divmod(e, 'div', !1).div;
            }),
            (o.prototype.mod = function(e) {
              return this.divmod(e, 'mod', !1).mod;
            }),
            (o.prototype.umod = function(e) {
              return this.divmod(e, 'mod', !0).mod;
            }),
            (o.prototype.divRound = function(e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1),
                i = e.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? t.div
                : 0 !== t.div.negative
                ? t.div.isubn(1)
                : t.div.iaddn(1);
            }),
            (o.prototype.modn = function(e) {
              n(e <= 67108863);
              for (
                var t = (1 << 26) % e, r = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                r = (t * r + (0 | this.words[i])) % e;
              return r;
            }),
            (o.prototype.idivn = function(e) {
              n(e <= 67108863);
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var i = (0 | this.words[r]) + 67108864 * t;
                (this.words[r] = (i / e) | 0), (t = i % e);
              }
              return this.strip();
            }),
            (o.prototype.divn = function(e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function(e) {
              n(0 === e.negative), n(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var i = new o(1),
                  a = new o(0),
                  s = new o(0),
                  f = new o(1),
                  u = 0;
                t.isEven() && r.isEven();

              )
                t.iushrn(1), r.iushrn(1), ++u;
              for (var c = r.clone(), d = t.clone(); !t.isZero(); ) {
                for (
                  var h = 0, l = 1;
                  0 == (t.words[0] & l) && h < 26;
                  ++h, l <<= 1
                );
                if (h > 0)
                  for (t.iushrn(h); h-- > 0; )
                    (i.isOdd() || a.isOdd()) && (i.iadd(c), a.isub(d)),
                      i.iushrn(1),
                      a.iushrn(1);
                for (
                  var p = 0, b = 1;
                  0 == (r.words[0] & b) && p < 26;
                  ++p, b <<= 1
                );
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(d)),
                      s.iushrn(1),
                      f.iushrn(1);
                t.cmp(r) >= 0
                  ? (t.isub(r), i.isub(s), a.isub(f))
                  : (r.isub(t), s.isub(i), f.isub(a));
              }
              return { a: s, b: f, gcd: r.iushln(u) };
            }),
            (o.prototype._invmp = function(e) {
              n(0 === e.negative), n(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var i, a = new o(1), s = new o(0), f = r.clone();
                t.cmpn(1) > 0 && r.cmpn(1) > 0;

              ) {
                for (
                  var u = 0, c = 1;
                  0 == (t.words[0] & c) && u < 26;
                  ++u, c <<= 1
                );
                if (u > 0)
                  for (t.iushrn(u); u-- > 0; )
                    a.isOdd() && a.iadd(f), a.iushrn(1);
                for (
                  var d = 0, h = 1;
                  0 == (r.words[0] & h) && d < 26;
                  ++d, h <<= 1
                );
                if (d > 0)
                  for (r.iushrn(d); d-- > 0; )
                    s.isOdd() && s.iadd(f), s.iushrn(1);
                t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a));
              }
              return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i;
            }),
            (o.prototype.gcd = function(e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              (t.negative = 0), (r.negative = 0);
              for (var n = 0; t.isEven() && r.isEven(); n++)
                t.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var i = t.cmp(r);
                if (i < 0) {
                  var o = t;
                  (t = r), (r = o);
                } else if (0 === i || 0 === r.cmpn(1)) break;
                t.isub(r);
              }
              return r.iushln(n);
            }),
            (o.prototype.invm = function(e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function() {
              return 0 == (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function() {
              return 1 == (1 & this.words[0]);
            }),
            (o.prototype.andln = function(e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function(e) {
              n('number' == typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r)
                return this._expand(r + 1), (this.words[r] |= i), this;
              for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                var s = 0 | this.words[a];
                (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
              }
              return 0 !== o && ((this.words[a] = o), this.length++), this;
            }),
            (o.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function(e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this.strip(), this.length > 1)) t = 1;
              else {
                r && (e = -e), n(e <= 67108863, 'Number is too big');
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.cmp = function(e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.ucmp = function(e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | e.words[r];
                if (n !== i) {
                  n < i ? (t = -1) : n > i && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function(e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function(e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function(e) {
              return this.cmpn(e) >= 0;
            }),
            (o.prototype.gte = function(e) {
              return this.cmp(e) >= 0;
            }),
            (o.prototype.ltn = function(e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function(e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function(e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function(e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function(e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function(e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function(e) {
              return new E(e);
            }),
            (o.prototype.toRed = function(e) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                n(0 === this.negative, 'red works only with positives'),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (o.prototype.fromRed = function() {
              return (
                n(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function(e) {
              return (this.red = e), this;
            }),
            (o.prototype.forceRed = function(e) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function(e) {
              return (
                n(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function(e) {
              return (
                n(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function(e) {
              return (
                n(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function(e) {
              return (
                n(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function(e) {
              return (
                n(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function(e) {
              return (
                n(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function(e) {
              return (
                n(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (o.prototype.redSqr = function() {
              return (
                n(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function() {
              return (
                n(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function() {
              return (
                n(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function() {
              return (
                n(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function() {
              return (
                n(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function(e) {
              return (
                n(this.red && !e.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            });
          var g = { k256: null, p224: null, p192: null, p25519: null };
          function y(e, t) {
            (this.name = e),
              (this.p = new o(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function v() {
            y.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            );
          }
          function m() {
            y.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            );
          }
          function _() {
            y.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            );
          }
          function w() {
            y.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            );
          }
          function E(e) {
            if ('string' == typeof e) {
              var t = o._prime(e);
              (this.m = t.p), (this.prime = t);
            } else
              n(e.gtn(1), 'modulus must be greater than 1'),
                (this.m = e),
                (this.prime = null);
          }
          function S(e) {
            E.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv
                .mul(this.r)
                .isubn(1)
                .div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (y.prototype._tmp = function() {
            var e = new o(null);
            return (e.words = new Array(Math.ceil(this.n / 13))), e;
          }),
            (y.prototype.ireduce = function(e) {
              var t,
                r = e;
              do {
                this.split(r, this.tmp),
                  (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
              } while (t > this.n);
              var n = t < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              );
            }),
            (y.prototype.split = function(e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (y.prototype.imulK = function(e) {
              return e.imul(this.k);
            }),
            i(v, y),
            (v.prototype.split = function(e, t) {
              for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                t.words[n] = e.words[n];
              if (((t.length = r), e.length <= 9))
                return (e.words[0] = 0), void (e.length = 1);
              var i = e.words[9];
              for (
                t.words[t.length++] = 4194303 & i, n = 10;
                n < e.length;
                n++
              ) {
                var o = 0 | e.words[n];
                (e.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
              }
              (i >>>= 22),
                (e.words[n - 10] = i),
                0 === i && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
            }),
            (v.prototype.imulK = function(e) {
              (e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2);
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 0 | e.words[r];
                (t += 977 * n),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * n + ((t / 67108864) | 0));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(m, y),
            i(_, y),
            i(w, y),
            (w.prototype.imulK = function(e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
                (n >>>= 26), (e.words[r] = i), (t = n);
              }
              return 0 !== t && (e.words[e.length++] = t), e;
            }),
            (o._prime = function(e) {
              if (g[e]) return g[e];
              var t;
              if ('k256' === e) t = new v();
              else if ('p224' === e) t = new m();
              else if ('p192' === e) t = new _();
              else {
                if ('p25519' !== e) throw new Error('Unknown prime ' + e);
                t = new w();
              }
              return (g[e] = t), t;
            }),
            (E.prototype._verify1 = function(e) {
              n(0 === e.negative, 'red works only with positives'),
                n(e.red, 'red works only with red numbers');
            }),
            (E.prototype._verify2 = function(e, t) {
              n(
                0 == (e.negative | t.negative),
                'red works only with positives'
              ),
                n(e.red && e.red === t.red, 'red works only with red numbers');
            }),
            (E.prototype.imod = function(e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : e.umod(this.m)._forceRed(this);
            }),
            (E.prototype.neg = function(e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (E.prototype.add = function(e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }),
            (E.prototype.iadd = function(e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }),
            (E.prototype.sub = function(e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }),
            (E.prototype.isub = function(e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }),
            (E.prototype.shl = function(e, t) {
              return this._verify1(e), this.imod(e.ushln(t));
            }),
            (E.prototype.imul = function(e, t) {
              return this._verify2(e, t), this.imod(e.imul(t));
            }),
            (E.prototype.mul = function(e, t) {
              return this._verify2(e, t), this.imod(e.mul(t));
            }),
            (E.prototype.isqr = function(e) {
              return this.imul(e, e.clone());
            }),
            (E.prototype.sqr = function(e) {
              return this.mul(e, e);
            }),
            (E.prototype.sqrt = function(e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((n(t % 2 == 1), 3 === t)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, r);
              }
              for (
                var i = this.m.subn(1), a = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                a++, i.iushrn(1);
              n(!i.isZero());
              var s = new o(1).toRed(this),
                f = s.redNeg(),
                u = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
              for (
                c = new o(2 * c * c).toRed(this);
                0 !== this.pow(c, u).cmp(f);

              )
                c.redIAdd(f);
              for (
                var d = this.pow(c, i),
                  h = this.pow(e, i.addn(1).iushrn(1)),
                  l = this.pow(e, i),
                  p = a;
                0 !== l.cmp(s);

              ) {
                for (var b = l, g = 0; 0 !== b.cmp(s); g++) b = b.redSqr();
                n(g < p);
                var y = this.pow(d, new o(1).iushln(p - g - 1));
                (h = h.redMul(y)), (d = y.redSqr()), (l = l.redMul(d)), (p = g);
              }
              return h;
            }),
            (E.prototype.invm = function(e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (E.prototype.pow = function(e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = new Array(16);
              (r[0] = new o(1).toRed(this)), (r[1] = e);
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
              var i = r[0],
                a = 0,
                s = 0,
                f = t.bitLength() % 26;
              for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                for (var u = t.words[n], c = f - 1; c >= 0; c--) {
                  var d = (u >> c) & 1;
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        (4 === ++s || (0 === n && 0 === c)) &&
                          ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                      : (s = 0);
                }
                f = 26;
              }
              return i;
            }),
            (E.prototype.convertTo = function(e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (E.prototype.convertFrom = function(e) {
              var t = e.clone();
              return (t.red = null), t;
            }),
            (o.mont = function(e) {
              return new S(e);
            }),
            i(S, E),
            (S.prototype.convertTo = function(e) {
              return this.imod(e.ushln(this.shift));
            }),
            (S.prototype.convertFrom = function(e) {
              var t = this.imod(e.mul(this.rinv));
              return (t.red = null), t;
            }),
            (S.prototype.imul = function(e, t) {
              if (e.isZero() || t.isZero())
                return (e.words[0] = 0), (e.length = 1), e;
              var r = e.imul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (S.prototype.mul = function(e, t) {
              if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
              var r = e.mul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                a = i;
              return (
                i.cmp(this.m) >= 0
                  ? (a = i.isub(this.m))
                  : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (S.prototype.invm = function(e) {
              return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(e, this);
      }.call(this, r(49)(e)));
    },
    function(e, t, r) {
      e.exports = r(108);
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(207),
          i = r(208),
          o = r(80);
        function a() {
          return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(e, t) {
          if (a() < t) throw new RangeError('Invalid typed array length');
          return (
            f.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = f.prototype)
              : (null === e && (e = new f(t)), (e.length = t)),
            e
          );
        }
        function f(e, t, r) {
          if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
            return new f(e, t, r);
          if ('number' == typeof e) {
            if ('string' == typeof t)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              );
            return d(this, e);
          }
          return u(this, e, t, r);
        }
        function u(e, t, r, n) {
          if ('number' == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function(e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                    ? new Uint8Array(t, r)
                    : new Uint8Array(t, r, n);
                f.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = f.prototype)
                  : (e = h(e, t));
                return e;
              })(e, t, r, n)
            : 'string' == typeof t
            ? (function(e, t, r) {
                ('string' == typeof r && '' !== r) || (r = 'utf8');
                if (!f.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | p(t, r),
                  i = (e = s(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e;
              })(e, t, r)
            : (function(e, t) {
                if (f.isBuffer(t)) {
                  var r = 0 | l(t.length);
                  return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e;
                }
                if (t) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    'length' in t
                  )
                    return 'number' != typeof t.length || (n = t.length) != n
                      ? s(e, 0)
                      : h(e, t);
                  if ('Buffer' === t.type && o(t.data)) return h(e, t.data);
                }
                var n;
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                );
              })(e, t);
        }
        function c(e) {
          if ('number' != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function d(e, t) {
          if ((c(t), (e = s(e, t < 0 ? 0 : 0 | l(t))), !f.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function h(e, t) {
          var r = t.length < 0 ? 0 : 0 | l(t.length);
          e = s(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function l(e) {
          if (e >= a())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                a().toString(16) +
                ' bytes'
            );
          return 0 | e;
        }
        function p(e, t) {
          if (f.isBuffer(e)) return e.length;
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          'string' != typeof e && (e = '' + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return r;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return U(e).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * r;
              case 'hex':
                return r >>> 1;
              case 'base64':
                return K(e).length;
              default:
                if (n) return U(e).length;
                (t = ('' + t).toLowerCase()), (n = !0);
            }
        }
        function b(e, t, r) {
          var n = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return '';
          if ((r >>>= 0) <= (t >>>= 0)) return '';
          for (e || (e = 'utf8'); ; )
            switch (e) {
              case 'hex':
                return L(this, t, r);
              case 'utf8':
              case 'utf-8':
                return M(this, t, r);
              case 'ascii':
                return x(this, t, r);
              case 'latin1':
              case 'binary':
                return I(this, t, r);
              case 'base64':
                return T(this, t, r);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return R(this, t, r);
              default:
                if (n) throw new TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (n = !0);
            }
        }
        function g(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function y(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ('string' == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (('string' == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, r, n, i);
          if ('number' == typeof t)
            return (
              (t &= 255),
              f.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : v(e, [t], r, n, i)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function v(e, t, r, n, i) {
          var o,
            a = 1,
            s = e.length,
            f = t.length;
          if (
            void 0 !== n &&
            ('ucs2' === (n = String(n).toLowerCase()) ||
              'ucs-2' === n ||
              'utf16le' === n ||
              'utf-16le' === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (a = 2), (s /= 2), (f /= 2), (r /= 2);
          }
          function u(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (i) {
            var c = -1;
            for (o = r; o < s; o++)
              if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                if ((-1 === c && (c = o), o - c + 1 === f)) return c * a;
              } else -1 !== c && (o -= o - c), (c = -1);
          } else
            for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
              for (var d = !0, h = 0; h < f; h++)
                if (u(e, o + h) !== u(t, h)) {
                  d = !1;
                  break;
                }
              if (d) return o;
            }
          return -1;
        }
        function m(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = t.length;
          if (o % 2 != 0) throw new TypeError('Invalid hex string');
          n > o / 2 && (n = o / 2);
          for (var a = 0; a < n; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            e[r + a] = s;
          }
          return a;
        }
        function _(e, t, r, n) {
          return q(U(t, e.length - r), e, r, n);
        }
        function w(e, t, r, n) {
          return q(
            (function(e) {
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function E(e, t, r, n) {
          return w(e, t, r, n);
        }
        function S(e, t, r, n) {
          return q(K(t), e, r, n);
        }
        function A(e, t, r, n) {
          return q(
            (function(e, t) {
              for (
                var r, n, i, o = [], a = 0;
                a < e.length && !((t -= 2) < 0);
                ++a
              )
                (r = e.charCodeAt(a)),
                  (n = r >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function T(e, t, r) {
          return 0 === t && r === e.length
            ? n.fromByteArray(e)
            : n.fromByteArray(e.slice(t, r));
        }
        function M(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r; ) {
            var o,
              a,
              s,
              f,
              u = e[i],
              c = null,
              d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + d <= r)
              switch (d) {
                case 1:
                  u < 128 && (c = u);
                  break;
                case 2:
                  128 == (192 & (o = e[i + 1])) &&
                    (f = ((31 & u) << 6) | (63 & o)) > 127 &&
                    (c = f);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      (f = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                        2047 &&
                      (f < 55296 || f > 57343) &&
                      (c = f);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    (s = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      (f =
                        ((15 & u) << 18) |
                        ((63 & o) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      f < 1114112 &&
                      (c = f);
              }
            null === c
              ? ((c = 65533), (d = 1))
              : c > 65535 &&
                ((c -= 65536),
                n.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              n.push(c),
              (i += d);
          }
          return (function(e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            var r = '',
              n = 0;
            for (; n < t; )
              r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
            return r;
          })(n);
        }
        (t.Buffer = f),
          (t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return f.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (f.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        }
                      }),
                      42 === e.foo() &&
                        'function' == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = a()),
          (f.poolSize = 8192),
          (f._augment = function(e) {
            return (e.__proto__ = f.prototype), e;
          }),
          (f.from = function(e, t, r) {
            return u(null, e, t, r);
          }),
          f.TYPED_ARRAY_SUPPORT &&
            ((f.prototype.__proto__ = Uint8Array.prototype),
            (f.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              f[Symbol.species] === f &&
              Object.defineProperty(f, Symbol.species, {
                value: null,
                configurable: !0
              })),
          (f.alloc = function(e, t, r) {
            return (function(e, t, r, n) {
              return (
                c(t),
                t <= 0
                  ? s(e, t)
                  : void 0 !== r
                  ? 'string' == typeof n
                    ? s(e, t).fill(r, n)
                    : s(e, t).fill(r)
                  : s(e, t)
              );
            })(null, e, t, r);
          }),
          (f.allocUnsafe = function(e) {
            return d(null, e);
          }),
          (f.allocUnsafeSlow = function(e) {
            return d(null, e);
          }),
          (f.isBuffer = function(e) {
            return !(null == e || !e._isBuffer);
          }),
          (f.compare = function(e, t) {
            if (!f.isBuffer(e) || !f.isBuffer(t))
              throw new TypeError('Arguments must be Buffers');
            if (e === t) return 0;
            for (
              var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (f.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (f.concat = function(e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return f.alloc(0);
            var r;
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = f.allocUnsafe(t),
              i = 0;
            for (r = 0; r < e.length; ++r) {
              var a = e[r];
              if (!f.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(n, i), (i += a.length);
            }
            return n;
          }),
          (f.byteLength = p),
          (f.prototype._isBuffer = !0),
          (f.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this;
          }),
          (f.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var t = 0; t < e; t += 4)
              g(this, t, t + 3), g(this, t + 1, t + 2);
            return this;
          }),
          (f.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var t = 0; t < e; t += 8)
              g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this;
          }),
          (f.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e
              ? ''
              : 0 === arguments.length
              ? M(this, 0, e)
              : b.apply(this, arguments);
          }),
          (f.prototype.equals = function(e) {
            if (!f.isBuffer(e))
              throw new TypeError('Argument must be a Buffer');
            return this === e || 0 === f.compare(this, e);
          }),
          (f.prototype.inspect = function() {
            var e = '',
              r = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString('hex', 0, r)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > r && (e += ' ... ')),
              '<Buffer ' + e + '>'
            );
          }),
          (f.prototype.compare = function(e, t, r, n, i) {
            if (!f.isBuffer(e))
              throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError('out of range index');
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (t >>>= 0),
                s = Math.min(o, a),
                u = this.slice(n, i),
                c = e.slice(t, r),
                d = 0;
              d < s;
              ++d
            )
              if (u[d] !== c[d]) {
                (o = u[d]), (a = c[d]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (f.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (f.prototype.indexOf = function(e, t, r) {
            return y(this, e, t, r, !0);
          }),
          (f.prototype.lastIndexOf = function(e, t, r) {
            return y(this, e, t, r, !1);
          }),
          (f.prototype.write = function(e, t, r, n) {
            if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
            else if (void 0 === r && 'string' == typeof t)
              (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                );
              (t |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = 'utf8'))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === r || r > i) && (r = i),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            n || (n = 'utf8');
            for (var o = !1; ; )
              switch (n) {
                case 'hex':
                  return m(this, e, t, r);
                case 'utf8':
                case 'utf-8':
                  return _(this, e, t, r);
                case 'ascii':
                  return w(this, e, t, r);
                case 'latin1':
                case 'binary':
                  return E(this, e, t, r);
                case 'base64':
                  return S(this, e, t, r);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return A(this, e, t, r);
                default:
                  if (o) throw new TypeError('Unknown encoding: ' + n);
                  (n = ('' + n).toLowerCase()), (o = !0);
              }
          }),
          (f.prototype.toJSON = function() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          });
        function x(e, t, r) {
          var n = '';
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function I(e, t, r) {
          var n = '';
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function L(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = '', o = t; o < r; ++o) i += z(e[o]);
          return i;
        }
        function R(e, t, r) {
          for (var n = e.slice(t, r), i = '', o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function P(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
          if (e + t > r)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function k(e, t, r, n, i, o) {
          if (!f.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError('Index out of range');
        }
        function N(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
            e[r + i] =
              (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function C(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
            e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function O(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError('Index out of range');
          if (r < 0) throw new RangeError('Index out of range');
        }
        function B(e, t, r, n, o) {
          return o || O(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function j(e, t, r, n, o) {
          return o || O(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (f.prototype.slice = function(e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0
              ? (t += n) < 0 && (t = 0)
              : t > n && (t = n),
            t < e && (t = e),
            f.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = f.prototype;
          else {
            var i = t - e;
            r = new f(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + e];
          }
          return r;
        }),
          (f.prototype.readUIntLE = function(e, t, r) {
            (e |= 0), (t |= 0), r || P(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n;
          }),
          (f.prototype.readUIntBE = function(e, t, r) {
            (e |= 0), (t |= 0), r || P(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
          (f.prototype.readUInt8 = function(e, t) {
            return t || P(e, 1, this.length), this[e];
          }),
          (f.prototype.readUInt16LE = function(e, t) {
            return t || P(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (f.prototype.readUInt16BE = function(e, t) {
            return t || P(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (f.prototype.readUInt32LE = function(e, t) {
            return (
              t || P(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (f.prototype.readUInt32BE = function(e, t) {
            return (
              t || P(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (f.prototype.readIntLE = function(e, t, r) {
            (e |= 0), (t |= 0), r || P(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
          }),
          (f.prototype.readIntBE = function(e, t, r) {
            (e |= 0), (t |= 0), r || P(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
              o += this[e + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (f.prototype.readInt8 = function(e, t) {
            return (
              t || P(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (f.prototype.readInt16LE = function(e, t) {
            t || P(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt16BE = function(e, t) {
            t || P(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt32LE = function(e, t) {
            return (
              t || P(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (f.prototype.readInt32BE = function(e, t) {
            return (
              t || P(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (f.prototype.readFloatLE = function(e, t) {
            return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (f.prototype.readFloatBE = function(e, t) {
            return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (f.prototype.readDoubleLE = function(e, t) {
            return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (f.prototype.readDoubleBE = function(e, t) {
            return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (f.prototype.writeUIntLE = function(e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              k(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + r;
          }),
          (f.prototype.writeUIntBE = function(e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              k(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + r;
          }),
          (f.prototype.writeUInt8 = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 1, 255, 0),
              f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (f.prototype.writeUInt16LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 2, 65535, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : N(this, e, t, !0),
              t + 2
            );
          }),
          (f.prototype.writeUInt16BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 2, 65535, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : N(this, e, t, !1),
              t + 2
            );
          }),
          (f.prototype.writeUInt32LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 4, 4294967295, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : C(this, e, t, !0),
              t + 4
            );
          }),
          (f.prototype.writeUInt32BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 4, 4294967295, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : C(this, e, t, !1),
              t + 4
            );
          }),
          (f.prototype.writeIntLE = function(e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              k(this, e, t, r, i - 1, -i);
            }
            var o = 0,
              a = 1,
              s = 0;
            for (this[t] = 255 & e; ++o < r && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                (this[t + o] = (((e / a) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeIntBE = function(e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              k(this, e, t, r, i - 1, -i);
            }
            var o = r - 1,
              a = 1,
              s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                (this[t + o] = (((e / a) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeInt8 = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 1, 127, -128),
              f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (f.prototype.writeInt16LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 2, 32767, -32768),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : N(this, e, t, !0),
              t + 2
            );
          }),
          (f.prototype.writeInt16BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 2, 32767, -32768),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : N(this, e, t, !1),
              t + 2
            );
          }),
          (f.prototype.writeInt32LE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 4, 2147483647, -2147483648),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : C(this, e, t, !0),
              t + 4
            );
          }),
          (f.prototype.writeInt32BE = function(e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || k(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : C(this, e, t, !1),
              t + 4
            );
          }),
          (f.prototype.writeFloatLE = function(e, t, r) {
            return B(this, e, t, !0, r);
          }),
          (f.prototype.writeFloatBE = function(e, t, r) {
            return B(this, e, t, !1, r);
          }),
          (f.prototype.writeDoubleLE = function(e, t, r) {
            return j(this, e, t, !0, r);
          }),
          (f.prototype.writeDoubleBE = function(e, t, r) {
            return j(this, e, t, !1, r);
          }),
          (f.prototype.copy = function(e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError('targetStart out of bounds');
            if (r < 0 || r >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (n < 0) throw new RangeError('sourceEnd out of bounds');
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
            var i,
              o = n - r;
            if (this === e && r < t && t < n)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o;
          }),
          (f.prototype.fill = function(e, t, r, n) {
            if ('string' == typeof e) {
              if (
                ('string' == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : 'string' == typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== n && 'string' != typeof n)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof n && !f.isEncoding(n))
                throw new TypeError('Unknown encoding: ' + n);
            } else 'number' == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError('Out of range index');
            if (r <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              'number' == typeof e)
            )
              for (o = t; o < r; ++o) this[o] = e;
            else {
              var a = f.isBuffer(e) ? e : U(new f(e, n).toString()),
                s = a.length;
              for (o = 0; o < r - t; ++o) this[o + t] = a[o % s];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function z(e) {
          return e < 16 ? '0' + e.toString(16) : e.toString(16);
        }
        function U(e, t) {
          var r;
          t = t || 1 / 0;
          for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
            if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error('Invalid code point');
              if ((t -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function K(e) {
          return n.toByteArray(
            (function(e) {
              if (
                (e = (function(e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
                })(e).replace(D, '')).length < 2
              )
                return '';
              for (; e.length % 4 != 0; ) e += '=';
              return e;
            })(e)
          );
        }
        function q(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
            t[i + r] = e[i];
          return i;
        }
      }.call(this, r(11)));
    },
    function(e, t, r) {
      'use strict';
      const { coinType: n, coinGroup: i, coinName: o, klaytnTxType: a } = r(
          282
        ),
        { state: s } = r(283),
        { config: f } = r(284),
        u = r(285),
        c = r(20),
        d = {};
      var h = f.timeOutMs;
      (d.messageRequestIdx = 0),
        (d.messageResponsetIdx = 0),
        (d.popupWindow = void 0),
        (d.popupTab = void 0),
        (d.iframe = void 0),
        (d.dcentWebDeferred = function() {
          let e, t;
          const r = new Promise(async function(r, n) {
            (e = r), (t = n);
          });
          return { resolve: e, reject: t, promise: r };
        }),
        (d.dcentWebPromise = d.dcentWebDeferred()),
        (d.dcentException = function(e, t) {
          return {
            header: {
              version: '1.0',
              request_from: 'dcent-web',
              status: 'error'
            },
            body: { error: { code: e, message: t } }
          };
        });
      let l = null;
      d.setConnectionListener = function(e) {
        l = e;
      };
      const p = () => {
          d.popupWindow &&
            ((d.popupWindow = void 0),
            d.popupTab && (d.popupTab = void 0),
            (d.dcentWebPromise = d.dcentWebDeferred()),
            g.emit('popUpClosed'),
            g.removeAllListeners());
        },
        b = e => ({
          header: { version: '1.0', response_from: 'api', status: 'error' },
          body: { error: { code: 'pop-up_blocked', message: e } }
        });
      (d.dcentPopupWindow = async function() {
        try {
          u.debug('dcent.dcentPopupWindow  called ');
          if (
            'undefined' != typeof chrome &&
            chrome.runtime &&
            void 0 !== chrome.runtime.onConnect
          ) {
            u.debug('create iframe');
            const e = document.getElementById('dcent-connect');
            return (
              e && e.parentNode.removeChild(e),
              (d.iframe = document.createElement('iframe')),
              (d.iframe.src = f.popUpUrl + '/iframe'),
              (d.iframe.id = 'dcent-connect'),
              document.body.appendChild(d.iframe),
              (d.popupWindow = d.iframe.contentWindow),
              d.popupTab && (d.popupTab = void 0),
              null
            );
          }
          if (((d.popupWindow = window.open('', '_blank')), !d.popupWindow))
            return b('window is not open');
          u.debug(
            'window.open create dcent.popupWindow opener = ',
            d.popupWindow.opener
          ),
            (d.popupWindow.location.href = f.popUpUrl);
        } catch (e) {
          return b(e || e.message);
        }
        return null;
      }),
        (d._call = function(e, t) {
          v({ idx: e, event: 'BridgeRequest', type: 'json', payload: t });
        });
      const g = new c.EventEmitter(),
        y = e => {
          let t = '';
          return (t = 'Dcent.Event.' + e), t;
        };
      d.call = async function(e) {
        const t = d.messageRequestIdx++;
        return new Promise(async (r, n) => {
          if (!d.popupWindow || d.popupWindow.closed) {
            var i = await d.dcentPopupWindow();
            null !== i && n(i);
          }
          d.dcentWebPromise.promise.then(async function() {
            d._call(t, e);
          });
          const o = () => {
              n(
                d.dcentException(
                  'pop-up_closed',
                  'Pop-up windows has been closed'
                )
              );
            },
            a = setTimeout(() => {
              g.removeListener(y(t), s),
                g.removeListener('popUpClosed', o),
                n(
                  d.dcentException(
                    'time_out',
                    'The function execution time has expired'
                  )
                );
            }, h),
            s = e => {
              clearTimeout(a),
                g.removeListener('popUpClosed', o),
                u.debug('eventEmitter - emit', e);
              try {
                'success' === e.data.payload.header.status ||
                ('transaction' === e.data.payload.body.command &&
                  'user_cancel' === e.data.payload.body.error.code)
                  ? r(e.data.payload)
                  : n(e.data.payload);
              } catch (e) {}
            };
          g.once('popUpClosed', o), g.once(y(t), s);
        });
      };
      (d.messageReceive = function(e) {
        if (
          (('BridgeEvent' !== e.data.event &&
            'BridgeResponse' !== e.data.event) ||
            u.debug('messageReceive', e),
          'BridgeEvent' === e.data.event && 'data' === e.data.type)
        ) {
          if ('dcent-iframe-init' === e.data.payload)
            return (
              (d.eventSource = e.source),
              void (() => {
                if ((u.debug('createDcentTab'), 'undefined' == typeof chrome))
                  return;
                if (void 0 !== d.popupTab && null !== d.popupTab) return;
                const e = f.popUpUrl + '?_from_extension=true';
                chrome.windows.getCurrent(null, function(t) {
                  'normal' !== t.type
                    ? chrome.windows.create({ url: e }, function(e) {
                        chrome.tabs.query(
                          { windowId: e.id, active: !0 },
                          function(e) {
                            u.debug('create window and tab'),
                              (d.popupTab = e[0]);
                          }
                        );
                      })
                    : chrome.tabs.query(
                        { currentWindow: !0, active: !0 },
                        function(t) {
                          let r = 0;
                          t.length > 0 && (r = t[0].index + 1),
                            chrome.tabs.create({ url: e, index: r }, function(
                              e
                            ) {
                              d.popupTab = e;
                            });
                        }
                      );
                });
              })()
            );
          if ('popup-success' === e.data.payload)
            return void d.dcentWebPromise.resolve();
          if ('popup-close' === e.data.payload) return void p();
          if (
            ('dcent-connected' === e.data.payload ||
              'dcent-disconnected' === e.data.payload) &&
            l
          )
            return void l(e.data.payload);
        }
        if ('BridgeResponse' !== e.data.event || 'json' !== e.data.type) return;
        const t = e.data.idx || d.messageResponsetIdx++;
        g.emit(y(t), e);
      }),
        (d.popupWindowClose = function() {
          if (
            'undefined' != typeof chrome &&
            chrome.runtime &&
            void 0 !== chrome.runtime.onConnect
          ) {
            d.popupTab &&
              d.popupTab.id &&
              chrome.tabs.remove(d.popupTab.id, () => {
                (d.popupWindow = void 0), (d.popupTab = void 0);
              });
            const e = document.getElementById('dcent-connect');
            e && e.parentNode.removeChild(e), p();
          } else
            v({ event: 'BridgeEvent', type: 'data', payload: 'popup-close' });
        });
      const v = e => {
        if (d.popupWindow)
          try {
            let t = '*';
            d.iframe && (t = d.iframe.src.match(/^.+\:\/\/[^\/]+/)[0]),
              d.popupWindow.postMessage(e, t);
          } catch (e) {}
      };
      window.addEventListener('message', d.messageReceive, !1),
        window.addEventListener('beforeunload', d.popupWindowClose);
      const m = (e, t) => {
        if ('numberString' === e) {
          if ('string' != typeof t)
            throw d.dcentException('param_error', 'Invaild Parameter - ' + t);
          if (-1 === t.indexOf('0x', 0)) {
            if (/^[0-9]+$/.test(t)) return t;
          } else if (
            0 === t.indexOf('0x', 0) &&
            (e => !!/^(0x)?[0-9a-f]+$/.test(e.toLowerCase()))(t)
          )
            return t;
          throw d.dcentException('param_error', 'Invaild Parameter - - - ' + t);
        }
      };
      function _(e) {
        return !(!e || !/^[a-zA-Z\d.!#$%&\+\-_]{2,14}$/.test(e));
      }
      function w(e) {
        if (!e) return !1;
        switch (e.toLowerCase()) {
          case i.ERC20.toLowerCase():
          case i.ERC20_KOVAN.toLowerCase():
          case i.ETHEREUM.toLowerCase():
          case i.ETHEREUM_KOVAN.toLowerCase():
          case i.RRC20.toLowerCase():
          case i.RRC20_TESTNET.toLowerCase():
          case i.RSK.toLowerCase():
          case i.RSK_TESTNET.toLowerCase():
          case i.KLAYTN.toLowerCase():
          case i.KLAY_BAOBAB.toLowerCase():
          case i.KLAYTN_KCT.toLowerCase():
          case i.KCT_BAOBAB.toLowerCase():
            return !0;
          case i.BITCOIN.toLowerCase():
          case i.BITCOIN_TESTNET.toLowerCase():
          case i.MONACOIN.toLowerCase():
          case i.MONACOIN_TESTNET.toLowerCase():
          case i.RIPPLE.toLowerCase():
          case i.RIPPLE_TESTNET.toLowerCase():
          default:
            return !1;
        }
      }
      function E(e) {
        if (!e) return !1;
        switch (e.toLowerCase()) {
          case i.ERC20.toLowerCase():
          case i.ERC20_KOVAN.toLowerCase():
          case n.RRC20.toLowerCase():
          case n.RRC20_TESTNET.toLowerCase():
            return !0;
          default:
            return !1;
        }
      }
      (d.info = async function() {
        return await d.call({ method: 'info' });
      }),
        (d.setTimeOutMs = function(e) {
          if ('number' != typeof e)
            throw d.dcentException(
              'param_error',
              'timeOutMs is not Number Type'
            );
          h = e;
        }),
        (d.getDeviceInfo = async function() {
          return await d.call({ method: 'getDeviceInfo' });
        }),
        (d.setLabel = async function(e) {
          if (!_(e))
            throw d.dcentException('param_error', 'Invalid Label : ' + e);
          return await d.call({ method: 'setLabel', params: { label: e } });
        }),
        (d.syncAccount = async function(e) {
          for (var t = 0; t < e.length; t += 1) {
            const r = e[t];
            if (!w(r.coin_group))
              throw d.dcentException(
                'coin_group_error',
                'not supported coin group'
              );
            if (!E(r.coin_group) && !w(r.coin_name))
              throw d.dcentException(
                'coin_name_error',
                'not supported coin name'
              );
            if (!_(r.label))
              throw d.dcentException(
                'param_error',
                'Invalid Label - ' + r.label
              );
          }
          return await d.call({
            method: 'syncAccount',
            params: { accountInfos: e }
          });
        }),
        (d.getAccountInfo = async function() {
          return await d.call({ method: 'getAccountInfo' });
        }),
        (d.getAddress = async function(e, t) {
          if (
            !(function(e) {
              if (!e) return !1;
              switch (e.toLowerCase()) {
                case n.ETHEREUM.toLowerCase():
                case n.ETHEREUM_KOVAN.toLowerCase():
                case n.ERC20.toLowerCase():
                case n.ERC20_KOVAN.toLowerCase():
                case n.RRC20.toLowerCase():
                case n.RRC20_TESTNET.toLowerCase():
                case n.RSK.toLowerCase():
                case n.RSK_TESTNET.toLowerCase():
                case n.KLAYTN.toLowerCase():
                case n.KLAY_BAOBAB.toLowerCase():
                case n.KLAYTN_KCT.toLowerCase():
                case n.KCT_BAOBAB.toLowerCase():
                  return !0;
                case n.BITCOIN.toLowerCase():
                case n.BITCOIN_TESTNET.toLowerCase():
                case n.MONACOIN.toLowerCase():
                case n.MONACOIN_TESTNET.toLowerCase():
                case n.RIPPLE.toLowerCase():
                case n.RIPPLE_TESTNET.toLowerCase():
                default:
                  return !1;
              }
            })(e)
          )
            throw d.dcentException(
              'coin_type_error',
              'not supported coin type'
            );
          return await d.call({
            method: 'getAddress',
            params: { coinType: e, path: t }
          });
        }),
        (d.getXPUB = async function(e, t) {
          return await d.call({
            method: 'getXPUB',
            params: { key: e, bip32name: t }
          });
        }),
        (d.getEthereumSignedTransaction = async function(
          e,
          t,
          r,
          i,
          o,
          a,
          s,
          f,
          u
        ) {
          try {
            (t = m('numberString', t)),
              (r = m('numberString', r)),
              (i = m('numberString', i)),
              (a = m('numberString', a));
          } catch (e) {
            throw e;
          }
          if ('number' != typeof u)
            throw d.dcentException('param_error', 'Invaild Parameter');
          switch (e.toLowerCase()) {
            case n.ETHEREUM.toLowerCase():
            case n.ETHEREUM_KOVAN.toLowerCase():
            case n.RSK.toLowerCase():
            case n.RSK_TESTNET.toLowerCase():
              break;
            default:
              throw d.dcentException(
                'coin_type_error',
                'not supported coin type'
              );
          }
          return await d.call({
            method: 'getEthereumSignedTransaction',
            params: {
              coinType: e,
              nonce: t,
              gas_price: r,
              gas_limit: i,
              to: o,
              value: a,
              data: s,
              key: f,
              chain_id: u
            }
          });
        }),
        (d.getTokenSignedTransaction = async function(e, t, r, o, a, s, f) {
          try {
            (t = m('numberString', t)),
              (r = m('numberString', r)),
              (o = m('numberString', o)),
              (f.value = m('numberString', f.value));
          } catch (e) {
            throw e;
          }
          if ('number' != typeof s || 'number' != typeof f.decimals)
            throw d.dcentException('param_error', 'Invaild Parameter');
          switch (e.toLowerCase()) {
            case n.ERC20.toLowerCase():
            case n.ERC20_KOVAN.toLowerCase():
            case n.RRC20.toLowerCase():
            case n.RRC20_TESTNET.toLowerCase():
            case i.KLAYTN_KCT.toLowerCase():
            case i.KCT_BAOBAB.toLowerCase():
              break;
            default:
              throw d.dcentException(
                'coin_type_error',
                'not supported token type'
              );
          }
          return await d.call({
            method: 'getTokenSignedTransaction',
            params: {
              token: e,
              nonce: t,
              gas_price: r,
              gas_limit: o,
              key: a,
              chain_id: s,
              contract: f
            }
          });
        }),
        (d.getEthereumSignedMessage = async function(e, t) {
          return await d.call({
            method: 'getEthereumSignedMessage',
            params: { message: e, key: t }
          });
        }),
        (d.getKlaytnSignedTransaction = async function(
          e,
          t,
          r,
          i,
          o,
          s,
          f,
          u,
          c,
          h,
          l,
          p,
          b
        ) {
          try {
            (t = m('numberString', t)),
              (r = m('numberString', r)),
              (i = m('numberString', i)),
              (s = m('numberString', s)),
              b && (b.decimals = m('numberString', b.decimals));
          } catch (e) {
            throw e;
          }
          if ('number' != typeof c)
            throw d.dcentException(
              'param_error',
              'Invaild Parameter chainId - ' + c
            );
          switch (e.toLowerCase()) {
            case n.KLAYTN.toLowerCase():
            case n.KLAY_BAOBAB.toLowerCase():
              e = n.KLAYTN;
              break;
            case n.KLAYTN_KCT.toLowerCase():
            case n.KCT_BAOBAB.toLowerCase():
              e = n.KLAYTN_KCT;
              break;
            default:
              throw d.dcentException(
                'coin_type_error',
                'not supported coin type'
              );
          }
          if ((h || (h = a.LEGACY), !l)) {
            const t = await this.getAddress(e, u);
            t.body.parameter.address && (l = t.body.parameter.address);
          }
          return await d.call({
            method: 'getKlaytnSignedTransaction',
            params: {
              coinType: e,
              nonce: t,
              gas_price: r,
              gas_limit: i,
              to: o,
              value: s,
              data: f,
              key: u,
              chain_id: c,
              tx_type: h,
              from: l,
              fee_ratio: p,
              contract: b
            }
          });
        }),
        (d.getSignedMessage = async function(e, t, r) {
          return await d.call({
            method: 'getSignedMessage',
            params: { coinType: e, key: t, message: r }
          });
        }),
        (d.state = s),
        (d.coinType = n),
        (d.coinGroup = i),
        (d.coinName = o),
        (d.klaytnTxType = a);
      const S = d;
      (e.exports = S),
        (window.DcentWebConnector = d),
        (window.DcentWebConnector.state = s),
        (window.DcentWebConnector.coinType = n),
        (window.DcentWebConnector.coinGroup = i),
        (window.DcentWebConnector.coinName = o),
        (window.DcentWebConnector.klaytnTxType = a);
    },
    function(e, t) {
      function r(t) {
        return (
          (e.exports = r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    function(e, t) {
      var r,
        n,
        i = (e.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          r = 'function' == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          r = o;
        }
        try {
          n = 'function' == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          n = a;
        }
      })();
      var f,
        u = [],
        c = !1,
        d = -1;
      function h() {
        c &&
          f &&
          ((c = !1), f.length ? (u = f.concat(u)) : (d = -1), u.length && l());
      }
      function l() {
        if (!c) {
          var e = s(h);
          c = !0;
          for (var t = u.length; t; ) {
            for (f = u, u = []; ++d < t; ) f && f[d].run();
            (d = -1), (t = u.length);
          }
          (f = null),
            (c = !1),
            (function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function b() {}
      (i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new p(e, t)), 1 !== u.length || c || s(l);
      }),
        (p.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = b),
        (i.addListener = b),
        (i.once = b),
        (i.off = b),
        (i.removeListener = b),
        (i.removeAllListeners = b),
        (i.emit = b),
        (i.prependListener = b),
        (i.prependOnceListener = b),
        (i.listeners = function(e) {
          return [];
        }),
        (i.binding = function(e) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function() {
          return '/';
        }),
        (i.chdir = function(e) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function() {
          return 0;
        });
    },
    function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    function(e, t, r) {
      'use strict';
      var n = t,
        i = r(2),
        o = r(18),
        a = r(96);
      (n.assert = o),
        (n.toArray = a.toArray),
        (n.zero2 = a.zero2),
        (n.toHex = a.toHex),
        (n.encode = a.encode),
        (n.getNAF = function(e, t, r) {
          var n = new Array(Math.max(e.bitLength(), r) + 1);
          n.fill(0);
          for (var i = 1 << (t + 1), o = e.clone(), a = 0; a < n.length; a++) {
            var s,
              f = o.andln(i - 1);
            o.isOdd()
              ? ((s = f > (i >> 1) - 1 ? (i >> 1) - f : f), o.isubn(s))
              : (s = 0),
              (n[a] = s),
              o.iushrn(1);
          }
          return n;
        }),
        (n.getJSF = function(e, t) {
          var r = [[], []];
          (e = e.clone()), (t = t.clone());
          for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
            var o,
              a,
              s,
              f = (e.andln(3) + n) & 3,
              u = (t.andln(3) + i) & 3;
            if ((3 === f && (f = -1), 3 === u && (u = -1), 0 == (1 & f))) o = 0;
            else
              o =
                (3 !== (s = (e.andln(7) + n) & 7) && 5 !== s) || 2 !== u
                  ? f
                  : -f;
            if ((r[0].push(o), 0 == (1 & u))) a = 0;
            else
              a =
                (3 !== (s = (t.andln(7) + i) & 7) && 5 !== s) || 2 !== f
                  ? u
                  : -u;
            r[1].push(a),
              2 * n === o + 1 && (n = 1 - n),
              2 * i === a + 1 && (i = 1 - i),
              e.iushrn(1),
              t.iushrn(1);
          }
          return r;
        }),
        (n.cachedProperty = function(e, t, r) {
          var n = '_' + t;
          e.prototype[t] = function() {
            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
          };
        }),
        (n.parseBytes = function(e) {
          return 'string' == typeof e ? n.toArray(e, 'hex') : e;
        }),
        (n.intFromLE = function(e) {
          return new i(e, 'hex', 'le');
        });
    },
    function(e, t) {
      var r;
      r = (function() {
        return this;
      })();
      try {
        r = r || new Function('return this')();
      } catch (e) {
        'object' == typeof window && (r = window);
      }
      e.exports = r;
    },
    function(e, t, r) {
      'use strict';
      var n = r(18),
        i = r(0);
      function o(e, t) {
        return (
          55296 == (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) &&
            56320 == (64512 & e.charCodeAt(t + 1))
        );
      }
      function a(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function f(e) {
        return 7 === e.length
          ? '0' + e
          : 6 === e.length
          ? '00' + e
          : 5 === e.length
          ? '000' + e
          : 4 === e.length
          ? '0000' + e
          : 3 === e.length
          ? '00000' + e
          : 2 === e.length
          ? '000000' + e
          : 1 === e.length
          ? '0000000' + e
          : e;
      }
      (t.inherits = i),
        (t.toArray = function(e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ('string' == typeof e)
            if (t) {
              if ('hex' === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                    (e = '0' + e),
                    i = 0;
                  i < e.length;
                  i += 2
                )
                  r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < e.length; i++) {
                var a = e.charCodeAt(i);
                a < 128
                  ? (r[n++] = a)
                  : a < 2048
                  ? ((r[n++] = (a >> 6) | 192), (r[n++] = (63 & a) | 128))
                  : o(e, i)
                  ? ((a =
                      65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i))),
                    (r[n++] = (a >> 18) | 240),
                    (r[n++] = ((a >> 12) & 63) | 128),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128))
                  : ((r[n++] = (a >> 12) | 224),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128));
              }
          else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }),
        (t.toHex = function(e) {
          for (var t = '', r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = a),
        (t.toHex32 = function(e, t) {
          for (var r = '', n = 0; n < e.length; n++) {
            var i = e[n];
            'little' === t && (i = a(i)), (r += f(i.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = f),
        (t.join32 = function(e, t, r, i) {
          var o = r - t;
          n(o % 4 == 0);
          for (
            var a = new Array(o / 4), s = 0, f = t;
            s < a.length;
            s++, f += 4
          ) {
            var u;
            (u =
              'big' === i
                ? (e[f] << 24) | (e[f + 1] << 16) | (e[f + 2] << 8) | e[f + 3]
                : (e[f + 3] << 24) | (e[f + 2] << 16) | (e[f + 1] << 8) | e[f]),
              (a[s] = u >>> 0);
          }
          return a;
        }),
        (t.split32 = function(e, t) {
          for (
            var r = new Array(4 * e.length), n = 0, i = 0;
            n < e.length;
            n++, i += 4
          ) {
            var o = e[n];
            'big' === t
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (t.rotr32 = function(e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function(e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function(e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function(e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function(e, t, r, n) {
          return (e + t + r + n) >>> 0;
        }),
        (t.sum32_5 = function(e, t, r, n, i) {
          return (e + t + r + n + i) >>> 0;
        }),
        (t.sum64 = function(e, t, r, n) {
          var i = e[t],
            o = (n + e[t + 1]) >>> 0,
            a = (o < n ? 1 : 0) + r + i;
          (e[t] = a >>> 0), (e[t + 1] = o);
        }),
        (t.sum64_hi = function(e, t, r, n) {
          return (((t + n) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function(e, t, r, n) {
          return (t + n) >>> 0;
        }),
        (t.sum64_4_hi = function(e, t, r, n, i, o, a, s) {
          var f = 0,
            u = t;
          return (
            (f += (u = (u + n) >>> 0) < t ? 1 : 0),
            (f += (u = (u + o) >>> 0) < o ? 1 : 0),
            (e + r + i + a + (f += (u = (u + s) >>> 0) < s ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_4_lo = function(e, t, r, n, i, o, a, s) {
          return (t + n + o + s) >>> 0;
        }),
        (t.sum64_5_hi = function(e, t, r, n, i, o, a, s, f, u) {
          var c = 0,
            d = t;
          return (
            (c += (d = (d + n) >>> 0) < t ? 1 : 0),
            (c += (d = (d + o) >>> 0) < o ? 1 : 0),
            (c += (d = (d + s) >>> 0) < s ? 1 : 0),
            (e + r + i + a + f + (c += (d = (d + u) >>> 0) < u ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_5_lo = function(e, t, r, n, i, o, a, s, f, u) {
          return (t + n + o + s + u) >>> 0;
        }),
        (t.rotr64_hi = function(e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function(e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function(e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function(e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    function(e, t) {
      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      e.exports = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    },
    function(e, t, r) {
      var n = r(43);
      e.exports = function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && n(e, t);
      };
    },
    function(e, t, r) {
      var n = r(19),
        i = r(109);
      e.exports = function(e, t) {
        return !t || ('object' !== n(t) && 'function' != typeof t) ? i(e) : t;
      };
    },
    function(e, t) {
      function r(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            f = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(f) : Promise.resolve(f).then(n, i);
      }
      e.exports = function(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(i, o) {
            var a = e.apply(t, n);
            function s(e) {
              r(a, i, o, s, f, 'next', e);
            }
            function f(e) {
              r(a, i, o, s, f, 'throw', e);
            }
            s(void 0);
          });
        };
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(39),
        i =
          Object.keys ||
          function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = d;
      var o = Object.create(r(29));
      o.inherits = r(0);
      var a = r(81),
        s = r(57);
      o.inherits(d, a);
      for (var f = i(s.prototype), u = 0; u < f.length; u++) {
        var c = f[u];
        d.prototype[c] || (d.prototype[c] = s.prototype[c]);
      }
      function d(e) {
        if (!(this instanceof d)) return new d(e);
        a.call(this, e),
          s.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', h);
      }
      function h() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this);
      }
      function l(e) {
        e.end();
      }
      Object.defineProperty(d.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark;
        }
      }),
        Object.defineProperty(d.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed && this._writableState.destroyed
            );
          },
          set: function(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          }
        }),
        (d.prototype._destroy = function(e, t) {
          this.push(null), this.end(), n.nextTick(t, e);
        });
    },
    function(e, t) {
      function r(e, t) {
        if (!e) throw new Error(t || 'Assertion failed');
      }
      (e.exports = r),
        (r.equal = function(e, t, r) {
          if (e != t)
            throw new Error(r || 'Assertion failed: ' + e + ' != ' + t);
        });
    },
    function(e, t) {
      function r(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? (e.exports = r = function(e) {
                return typeof e;
              })
            : (e.exports = r = function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          r(t)
        );
      }
      e.exports = r;
    },
    function(e, t, r) {
      'use strict';
      var n,
        i = 'object' == typeof Reflect ? Reflect : null,
        o =
          i && 'function' == typeof i.apply
            ? i.apply
            : function(e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      n =
        i && 'function' == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function(e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function(e) {
              return Object.getOwnPropertyNames(e);
            };
      var a =
        Number.isNaN ||
        function(e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var f = 10;
      function u(e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function d(e, t, r, n) {
        var i, o, a, s;
        if (
          (u(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r),
                (o = e._events)),
              (a = o[t])),
          void 0 === a)
        )
          (a = o[t] = r), ++e._eventsCount;
        else if (
          ('function' == typeof a
            ? (a = o[t] = n ? [r, a] : [a, r])
            : n
            ? a.unshift(r)
            : a.push(r),
          (i = c(e)) > 0 && a.length > i && !a.warned)
        ) {
          a.warned = !0;
          var f = new Error(
            'Possible EventEmitter memory leak detected. ' +
              a.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (f.name = 'MaxListenersExceededWarning'),
            (f.emitter = e),
            (f.type = t),
            (f.count = a.length),
            (s = f),
            console && console.warn && console.warn(s);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = h.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function p(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : 'function' == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function(e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : g(i, i.length);
      }
      function b(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function g(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      Object.defineProperty(s, 'defaultMaxListeners', {
        enumerable: !0,
        get: function() {
          return f;
        },
        set: function(e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          f = e;
        }
      }),
        (s.init = function() {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function(e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function() {
          return c(this);
        }),
        (s.prototype.emit = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = 'error' === e,
            i = this._events;
          if (void 0 !== i) n = n && void 0 === i.error;
          else if (!n) return !1;
          if (n) {
            var a;
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var s = new Error(
              'Unhandled error.' + (a ? ' (' + a.message + ')' : '')
            );
            throw ((s.context = a), s);
          }
          var f = i[e];
          if (void 0 === f) return !1;
          if ('function' == typeof f) o(f, this, t);
          else {
            var u = f.length,
              c = g(f, u);
            for (r = 0; r < u; ++r) o(c[r], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function(e, t) {
          return d(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function(e, t) {
          return d(this, e, t, !0);
        }),
        (s.prototype.once = function(e, t) {
          return u(t), this.on(e, l(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function(e, t) {
          return u(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (s.prototype.removeListener = function(e, t) {
          var r, n, i, o, a;
          if ((u(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (a = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function(e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit('removeListener', e, a || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function(e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              'removeListener' !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (s.prototype.listeners = function(e) {
          return p(this, e, !0);
        }),
        (s.prototype.rawListeners = function(e) {
          return p(this, e, !1);
        }),
        (s.listenerCount = function(e, t) {
          return 'function' == typeof e.listenerCount
            ? e.listenerCount(t)
            : b.call(e, t);
        }),
        (s.prototype.listenerCount = b),
        (s.prototype.eventNames = function() {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    function(e, t, r) {
      'use strict';
      var n = {};
      function i(e, t, r) {
        r || (r = Error);
        var i = (function(e) {
          var r, n;
          function i(r, n, i) {
            return (
              e.call(
                this,
                (function(e, r, n) {
                  return 'string' == typeof t ? t : t(e, r, n);
                })(r, n, i)
              ) || this
            );
          }
          return (
            (n = e),
            ((r = i).prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n),
            i
          );
        })(r);
        (i.prototype.name = r.name), (i.prototype.code = e), (n[e] = i);
      }
      function o(e, t) {
        if (Array.isArray(e)) {
          var r = e.length;
          return (
            (e = e.map(function(e) {
              return String(e);
            })),
            r > 2
              ? 'one of '
                  .concat(t, ' ')
                  .concat(e.slice(0, r - 1).join(', '), ', or ') + e[r - 1]
              : 2 === r
              ? 'one of '
                  .concat(t, ' ')
                  .concat(e[0], ' or ')
                  .concat(e[1])
              : 'of '.concat(t, ' ').concat(e[0])
          );
        }
        return 'of '.concat(t, ' ').concat(String(e));
      }
      i(
        'ERR_INVALID_OPT_VALUE',
        function(e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        i(
          'ERR_INVALID_ARG_TYPE',
          function(e, t, r) {
            var n, i, a, s;
            if (
              ('string' == typeof t &&
              ((i = 'not '), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
                ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
                : (n = 'must be'),
              (function(e, t, r) {
                return (
                  (void 0 === r || r > e.length) && (r = e.length),
                  e.substring(r - t.length, r) === t
                );
              })(e, ' argument'))
            )
              s = 'The '
                .concat(e, ' ')
                .concat(n, ' ')
                .concat(o(t, 'type'));
            else {
              var f = (function(e, t, r) {
                return (
                  'number' != typeof r && (r = 0),
                  !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                );
              })(e, '.')
                ? 'property'
                : 'argument';
              s = 'The "'
                .concat(e, '" ')
                .concat(f, ' ')
                .concat(n, ' ')
                .concat(o(t, 'type'));
            }
            return (s += '. Received type '.concat(typeof r));
          },
          TypeError
        ),
        i('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
        i('ERR_METHOD_NOT_IMPLEMENTED', function(e) {
          return 'The ' + e + ' method is not implemented';
        }),
        i('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
        i('ERR_STREAM_DESTROYED', function(e) {
          return 'Cannot call ' + e + ' after a stream was destroyed';
        }),
        i('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
        i('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
        i('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
        i(
          'ERR_STREAM_NULL_VALUES',
          'May not write null values to stream',
          TypeError
        ),
        i(
          'ERR_UNKNOWN_ENCODING',
          function(e) {
            return 'Unknown encoding: ' + e;
          },
          TypeError
        ),
        i(
          'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
          'stream.unshift() after end event'
        ),
        (e.exports.codes = n);
    },
    function(e, t, r) {
      'use strict';
      (function(t) {
        var n =
          Object.keys ||
          function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
        e.exports = u;
        var i = r(88),
          o = r(92);
        r(0)(u, i);
        for (var a = n(o.prototype), s = 0; s < a.length; s++) {
          var f = a[s];
          u.prototype[f] || (u.prototype[f] = o.prototype[f]);
        }
        function u(e) {
          if (!(this instanceof u)) return new u(e);
          i.call(this, e),
            o.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once('end', c)));
        }
        function c() {
          this._writableState.ended || t.nextTick(d, this);
        }
        function d(e) {
          e.end();
        }
        Object.defineProperty(u.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark;
          }
        }),
          Object.defineProperty(u.prototype, 'writableBuffer', {
            enumerable: !1,
            get: function() {
              return this._writableState && this._writableState.getBuffer();
            }
          }),
          Object.defineProperty(u.prototype, 'writableLength', {
            enumerable: !1,
            get: function() {
              return this._writableState.length;
            }
          }),
          Object.defineProperty(u.prototype, 'destroyed', {
            enumerable: !1,
            get: function() {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed && this._writableState.destroyed
              );
            },
            set: function(e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            }
          });
      }.call(this, r(7)));
    },
    function(e, t, r) {
      var n = r(1).Buffer;
      function i(e, t) {
        (this._block = n.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0);
      }
      (i.prototype.update = function(e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = n.from(e, t)));
        for (
          var r = this._block,
            i = this._blockSize,
            o = e.length,
            a = this._len,
            s = 0;
          s < o;

        ) {
          for (var f = a % i, u = Math.min(o - s, i - f), c = 0; c < u; c++)
            r[f + c] = e[s + c];
          (s += u), (a += u) % i == 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function(e) {
          var t = this._len % this._blockSize;
          (this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0,
              i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return e ? o.toString(e) : o;
        }),
        (i.prototype._update = function() {
          throw new Error('_update must be implemented by subclass');
        }),
        (e.exports = i);
    },
    function(e, t, r) {
      'use strict';
      (function(t) {
        var n = r(102),
          i = r(263);
        function o(e) {
          var t = e;
          if ('string' != typeof t)
            throw new Error(
              '[ethjs-util] while padding to even, value must be string, is currently ' +
                typeof t +
                ', while padToEven.'
            );
          return t.length % 2 && (t = '0' + t), t;
        }
        function a(e) {
          return '0x' + e.toString(16);
        }
        e.exports = {
          arrayContainsArray: function(e, t, r) {
            if (!0 !== Array.isArray(e))
              throw new Error(
                "[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" +
                  typeof e +
                  "'"
              );
            if (!0 !== Array.isArray(t))
              throw new Error(
                "[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" +
                  typeof t +
                  "'"
              );
            return t[Boolean(r) ? 'some' : 'every'](function(t) {
              return e.indexOf(t) >= 0;
            });
          },
          intToBuffer: function(e) {
            var r = a(e);
            return new t(o(r.slice(2)), 'hex');
          },
          getBinarySize: function(e) {
            if ('string' != typeof e)
              throw new Error(
                "[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" +
                  typeof e +
                  "'."
              );
            return t.byteLength(e, 'utf8');
          },
          isHexPrefixed: n,
          stripHexPrefix: i,
          padToEven: o,
          intToHex: a,
          fromAscii: function(e) {
            for (var t = '', r = 0; r < e.length; r++) {
              var n = e.charCodeAt(r).toString(16);
              t += n.length < 2 ? '0' + n : n;
            }
            return '0x' + t;
          },
          fromUtf8: function(e) {
            return (
              '0x' + o(new t(e, 'utf8').toString('hex')).replace(/^0+|0+$/g, '')
            );
          },
          toAscii: function(e) {
            var t = '',
              r = 0,
              n = e.length;
            for ('0x' === e.substring(0, 2) && (r = 2); r < n; r += 2) {
              var i = parseInt(e.substr(r, 2), 16);
              t += String.fromCharCode(i);
            }
            return t;
          },
          toUtf8: function(e) {
            return new t(o(i(e).replace(/^0+|0+$/g, '')), 'hex').toString(
              'utf8'
            );
          },
          getKeys: function(e, t, r) {
            if (!Array.isArray(e))
              throw new Error(
                "[ethjs-util] method getKeys expecting type Array as 'params' input, got '" +
                  typeof e +
                  "'"
              );
            if ('string' != typeof t)
              throw new Error(
                "[ethjs-util] method getKeys expecting type String for input 'key' got '" +
                  typeof t +
                  "'."
              );
            for (var n = [], i = 0; i < e.length; i++) {
              var o = e[i][t];
              if (r && !o) o = '';
              else if ('string' != typeof o) throw new Error('invalid abi');
              n.push(o);
            }
            return n;
          },
          isHexString: function(e, t) {
            return (
              !('string' != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
              (!t || e.length === 2 + 2 * t)
            );
          }
        };
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      var n = r(68),
        i = 'object' == typeof self && self && self.Object === Object && self,
        o = n || i || Function('return this')();
      e.exports = o;
    },
    function(e, t) {
      e.exports = function() {};
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.serviceTypeTransitions = t.default = void 0);
      var i = n(r(51));
      t.default = { LOCAL: 'LOCAL', PUBLIC: 'PUBLIC', PRIVATE: 'PRIVATE' };
      var o = {
        LOCAL: {
          CREATED: [i.default.INITIALIZING],
          INITIALIZING: [i.default.CREATED, i.default.READY],
          READY: [i.default.ERROR],
          ERROR: []
        },
        PUBLIC: {
          CREATED: [i.default.INITIALIZING],
          INITIALIZING: [i.default.CREATED, i.default.OFFLINE],
          OFFLINE: [i.default.CONNECTING],
          CONNECTING: [i.default.OFFLINE, i.default.READY],
          READY: [i.default.OFFLINE, i.default.ERROR],
          ERROR: []
        },
        PRIVATE: {
          CREATED: [i.default.INITIALIZING],
          INITIALIZING: [i.default.CREATED, i.default.OFFLINE],
          OFFLINE: [i.default.CONNECTING],
          CONNECTING: [i.default.OFFLINE, i.default.ONLINE],
          ONLINE: [i.default.OFFLINE, i.default.AUTHENTICATING],
          AUTHENTICATING: [i.default.ONLINE, i.default.READY],
          READY: [i.default.OFFLINE, i.default.ONLINE, i.default.ERROR],
          ERROR: []
        }
      };
      t.serviceTypeTransitions = o;
    },
    function(e, t, r) {
      e.exports = i;
      var n = r(20).EventEmitter;
      function i() {
        n.call(this);
      }
      r(0)(i, n),
        (i.Readable = r(55)),
        (i.Writable = r(213)),
        (i.Duplex = r(214)),
        (i.Transform = r(215)),
        (i.PassThrough = r(216)),
        (i.Stream = i),
        (i.prototype.pipe = function(e, t) {
          var r = this;
          function i(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause();
          }
          function o() {
            r.readable && r.resume && r.resume();
          }
          r.on('data', i),
            e.on('drain', o),
            e._isStdio ||
              (t && !1 === t.end) ||
              (r.on('end', s), r.on('close', f));
          var a = !1;
          function s() {
            a || ((a = !0), e.end());
          }
          function f() {
            a || ((a = !0), 'function' == typeof e.destroy && e.destroy());
          }
          function u(e) {
            if ((c(), 0 === n.listenerCount(this, 'error'))) throw e;
          }
          function c() {
            r.removeListener('data', i),
              e.removeListener('drain', o),
              r.removeListener('end', s),
              r.removeListener('close', f),
              r.removeListener('error', u),
              e.removeListener('error', u),
              r.removeListener('end', c),
              r.removeListener('close', c),
              e.removeListener('close', c);
          }
          return (
            r.on('error', u),
            e.on('error', u),
            r.on('end', c),
            r.on('close', c),
            e.on('close', c),
            e.emit('pipe', r),
            e
          );
        });
    },
    function(e, t, r) {
      (function(e) {
        function r(e) {
          return Object.prototype.toString.call(e);
        }
        (t.isArray = function(e) {
          return Array.isArray ? Array.isArray(e) : '[object Array]' === r(e);
        }),
          (t.isBoolean = function(e) {
            return 'boolean' == typeof e;
          }),
          (t.isNull = function(e) {
            return null === e;
          }),
          (t.isNullOrUndefined = function(e) {
            return null == e;
          }),
          (t.isNumber = function(e) {
            return 'number' == typeof e;
          }),
          (t.isString = function(e) {
            return 'string' == typeof e;
          }),
          (t.isSymbol = function(e) {
            return 'symbol' == typeof e;
          }),
          (t.isUndefined = function(e) {
            return void 0 === e;
          }),
          (t.isRegExp = function(e) {
            return '[object RegExp]' === r(e);
          }),
          (t.isObject = function(e) {
            return 'object' == typeof e && null !== e;
          }),
          (t.isDate = function(e) {
            return '[object Date]' === r(e);
          }),
          (t.isError = function(e) {
            return '[object Error]' === r(e) || e instanceof Error;
          }),
          (t.isFunction = function(e) {
            return 'function' == typeof e;
          }),
          (t.isPrimitive = function(e) {
            return (
              null === e ||
              'boolean' == typeof e ||
              'number' == typeof e ||
              'string' == typeof e ||
              'symbol' == typeof e ||
              void 0 === e
            );
          }),
          (t.isBuffer = e.isBuffer);
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i =
          n.isEncoding ||
          function(e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function o(e) {
        var t;
        switch (
          ((this.encoding = (function(e) {
            var t = (function(e) {
              if (!e) return 'utf8';
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e;
                  default:
                    if (t) return;
                    (e = ('' + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ('string' != typeof t && (n.isEncoding === i || !i(e)))
              throw new Error('Unknown encoding: ' + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            (this.text = f), (this.end = u), (t = 4);
            break;
          case 'utf8':
            (this.fillLast = s), (t = 4);
            break;
          case 'base64':
            (this.text = c), (this.end = d), (t = 3);
            break;
          default:
            return (this.write = h), void (this.end = l);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t));
      }
      function a(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function s(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function(e, t, r) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), '�';
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), '�';
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), '�';
            }
          })(this, e);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length));
      }
      function f(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString('utf16le', t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        );
      }
      function u(e) {
        var t = e && e.length ? this.write(e) : '';
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString('utf16le', 0, r);
        }
        return t;
      }
      function c(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - r));
      }
      function d(e) {
        var t = e && e.length ? this.write(e) : '';
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t;
      }
      function h(e) {
        return e.toString(this.encoding);
      }
      function l(e) {
        return e && e.length ? this.write(e) : '';
      }
      (t.StringDecoder = o),
        (o.prototype.write = function(e) {
          if (0 === e.length) return '';
          var t, r;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return '';
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || '';
        }),
        (o.prototype.end = function(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed ? t + '�' : t;
        }),
        (o.prototype.text = function(e, t) {
          var r = (function(e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var i = a(t[n]);
            if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
            if (--n < r || -2 === i) return 0;
            if ((i = a(t[n])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
            return 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString('utf8', t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n);
        }),
        (o.prototype.fillLast = function(e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(18);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = o),
        (o.prototype.update = function(e, t) {
          if (
            ((e = n.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = n.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function(e) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(e)
          );
        }),
        (o.prototype._pad = function() {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((e <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (e >>> 24) & 255),
              (n[i++] = (e >>> 16) & 255),
              (n[i++] = (e >>> 8) & 255),
              (n[i++] = 255 & e);
          } else
            for (
              n[i++] = 255 & e,
                n[i++] = (e >>> 8) & 255,
                n[i++] = (e >>> 16) & 255,
                n[i++] = (e >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(24),
          i = r(2);
        (t.zeros = function(t) {
          return e.allocUnsafe(t).fill(0);
        }),
          (t.setLengthLeft = function(e, r, n) {
            void 0 === n && (n = !1);
            var i = t.zeros(r);
            return (
              (e = t.toBuffer(e)),
              n
                ? e.length < r
                  ? (e.copy(i), i)
                  : e.slice(0, r)
                : e.length < r
                ? (e.copy(i, r - e.length), i)
                : e.slice(-r)
            );
          }),
          (t.setLength = t.setLengthLeft),
          (t.setLengthRight = function(e, r) {
            return t.setLength(e, r, !0);
          }),
          (t.unpad = function(e) {
            for (
              var t = (e = n.stripHexPrefix(e))[0];
              e.length > 0 && '0' === t.toString();

            )
              t = (e = e.slice(1))[0];
            return e;
          }),
          (t.stripZeros = t.unpad),
          (t.toBuffer = function(t) {
            if (!e.isBuffer(t))
              if (Array.isArray(t)) t = e.from(t);
              else if ('string' == typeof t) {
                if (!n.isHexString(t))
                  throw new Error(
                    'Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ' +
                      t
                  );
                t = e.from(n.padToEven(n.stripHexPrefix(t)), 'hex');
              } else if ('number' == typeof t) t = n.intToBuffer(t);
              else if (null == t) t = e.allocUnsafe(0);
              else if (i.isBN(t)) t = t.toArrayLike(e);
              else {
                if (!t.toArray) throw new Error('invalid type');
                t = e.from(t.toArray());
              }
            return t;
          }),
          (t.bufferToInt = function(e) {
            return new i(t.toBuffer(e)).toNumber();
          }),
          (t.bufferToHex = function(e) {
            return '0x' + (e = t.toBuffer(e)).toString('hex');
          }),
          (t.fromSigned = function(e) {
            return new i(e).fromTwos(256);
          }),
          (t.toUnsigned = function(t) {
            return e.from(t.toTwos(256).toArray());
          }),
          (t.addHexPrefix = function(e) {
            return 'string' != typeof e || n.isHexPrefixed(e) ? e : '0x' + e;
          }),
          (t.baToJSON = function(r) {
            if (e.isBuffer(r)) return '0x' + r.toString('hex');
            if (r instanceof Array) {
              for (var n = [], i = 0; i < r.length; i++)
                n.push(t.baToJSON(r[i]));
              return n;
            }
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      var n = r(44)(Object, 'create');
      e.exports = n;
    },
    function(e, t, r) {
      var n = r(137);
      e.exports = function(e, t) {
        for (var r = e.length; r--; ) if (n(e[r][0], t)) return r;
        return -1;
      };
    },
    function(e, t, r) {
      var n = r(143);
      e.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r['string' == typeof t ? 'string' : 'hash'] : r.map;
      };
    },
    function(e, t, r) {
      var n = r(66),
        i = r(74);
      e.exports = function(e) {
        return null != e && i(e.length) && !n(e);
      };
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          t |= 0;
          for (
            var r = Math.max(e.length - t, 0), n = Array(r), i = 0;
            i < r;
            i++
          )
            n[i] = e[t + i];
          return n;
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isAsync = void 0);
      var n,
        i = r(190),
        o = (n = i) && n.__esModule ? n : { default: n };
      var a = 'function' == typeof Symbol;
      function s(e) {
        return a && 'AsyncFunction' === e[Symbol.toStringTag];
      }
      (t.default = function(e) {
        return s(e) ? (0, o.default)(e) : e;
      }),
        (t.isAsync = s);
    },
    function(e, t, r) {
      'use strict';
      (function(t) {
        void 0 === t ||
        !t.version ||
        0 === t.version.indexOf('v0.') ||
        (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
          ? (e.exports = {
              nextTick: function(e, r, n, i) {
                if ('function' != typeof e)
                  throw new TypeError('"callback" argument must be a function');
                var o,
                  a,
                  s = arguments.length;
                switch (s) {
                  case 0:
                  case 1:
                    return t.nextTick(e);
                  case 2:
                    return t.nextTick(function() {
                      e.call(null, r);
                    });
                  case 3:
                    return t.nextTick(function() {
                      e.call(null, r, n);
                    });
                  case 4:
                    return t.nextTick(function() {
                      e.call(null, r, n, i);
                    });
                  default:
                    for (o = new Array(s - 1), a = 0; a < o.length; )
                      o[a++] = arguments[a];
                    return t.nextTick(function() {
                      e.apply(null, o);
                    });
                }
              }
            })
          : (e.exports = t);
      }.call(this, r(7)));
    },
    function(e, t, r) {
      'use strict';
      e.exports = r(220)(r(224));
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(10),
        o = i.getNAF,
        a = i.getJSF,
        s = i.assert;
      function f(e, t) {
        (this.type = e),
          (this.p = new n(t.p, 16)),
          (this.red = t.prime ? n.red(t.prime) : n.mont(this.p)),
          (this.zero = new n(0).toRed(this.red)),
          (this.one = new n(1).toRed(this.red)),
          (this.two = new n(2).toRed(this.red)),
          (this.n = t.n && new n(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function u(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (e.exports = f),
        (f.prototype.point = function() {
          throw new Error('Not implemented');
        }),
        (f.prototype.validate = function() {
          throw new Error('Not implemented');
        }),
        (f.prototype._fixedNafMul = function(e, t) {
          s(e.precomputed);
          var r = e._getDoubles(),
            n = o(t, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
          i /= 3;
          for (var a = [], f = 0; f < n.length; f += r.step) {
            var u = 0;
            for (t = f + r.step - 1; t >= f; t--) u = (u << 1) + n[t];
            a.push(u);
          }
          for (
            var c = this.jpoint(null, null, null),
              d = this.jpoint(null, null, null),
              h = i;
            h > 0;
            h--
          ) {
            for (f = 0; f < a.length; f++) {
              (u = a[f]) === h
                ? (d = d.mixedAdd(r.points[f]))
                : u === -h && (d = d.mixedAdd(r.points[f].neg()));
            }
            c = c.add(d);
          }
          return c.toP();
        }),
        (f.prototype._wnafMul = function(e, t) {
          var r = 4,
            n = e._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              a = o(t, r, this._bitLength),
              f = this.jpoint(null, null, null),
              u = a.length - 1;
            u >= 0;
            u--
          ) {
            for (t = 0; u >= 0 && 0 === a[u]; u--) t++;
            if ((u >= 0 && t++, (f = f.dblp(t)), u < 0)) break;
            var c = a[u];
            s(0 !== c),
              (f =
                'affine' === e.type
                  ? c > 0
                    ? f.mixedAdd(i[(c - 1) >> 1])
                    : f.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? f.add(i[(c - 1) >> 1])
                  : f.add(i[(-c - 1) >> 1].neg()));
          }
          return 'affine' === e.type ? f.toP() : f;
        }),
        (f.prototype._wnafMulAdd = function(e, t, r, n, i) {
          for (
            var s = this._wnafT1,
              f = this._wnafT2,
              u = this._wnafT3,
              c = 0,
              d = 0;
            d < n;
            d++
          ) {
            var h = (T = t[d])._getNAFPoints(e);
            (s[d] = h.wnd), (f[d] = h.points);
          }
          for (d = n - 1; d >= 1; d -= 2) {
            var l = d - 1,
              p = d;
            if (1 === s[l] && 1 === s[p]) {
              var b = [t[l], null, null, t[p]];
              0 === t[l].y.cmp(t[p].y)
                ? ((b[1] = t[l].add(t[p])),
                  (b[2] = t[l].toJ().mixedAdd(t[p].neg())))
                : 0 === t[l].y.cmp(t[p].y.redNeg())
                ? ((b[1] = t[l].toJ().mixedAdd(t[p])),
                  (b[2] = t[l].add(t[p].neg())))
                : ((b[1] = t[l].toJ().mixedAdd(t[p])),
                  (b[2] = t[l].toJ().mixedAdd(t[p].neg())));
              var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = a(r[l], r[p]);
              (c = Math.max(y[0].length, c)),
                (u[l] = new Array(c)),
                (u[p] = new Array(c));
              for (var v = 0; v < c; v++) {
                var m = 0 | y[0][v],
                  _ = 0 | y[1][v];
                (u[l][v] = g[3 * (m + 1) + (_ + 1)]), (u[p][v] = 0), (f[l] = b);
              }
            } else
              (u[l] = o(r[l], s[l], this._bitLength)),
                (u[p] = o(r[p], s[p], this._bitLength)),
                (c = Math.max(u[l].length, c)),
                (c = Math.max(u[p].length, c));
          }
          var w = this.jpoint(null, null, null),
            E = this._wnafT4;
          for (d = c; d >= 0; d--) {
            for (var S = 0; d >= 0; ) {
              var A = !0;
              for (v = 0; v < n; v++)
                (E[v] = 0 | u[v][d]), 0 !== E[v] && (A = !1);
              if (!A) break;
              S++, d--;
            }
            if ((d >= 0 && S++, (w = w.dblp(S)), d < 0)) break;
            for (v = 0; v < n; v++) {
              var T,
                M = E[v];
              0 !== M &&
                (M > 0
                  ? (T = f[v][(M - 1) >> 1])
                  : M < 0 && (T = f[v][(-M - 1) >> 1].neg()),
                (w = 'affine' === T.type ? w.mixedAdd(T) : w.add(T)));
            }
          }
          for (d = 0; d < n; d++) f[d] = null;
          return i ? w : w.toP();
        }),
        (f.BasePoint = u),
        (u.prototype.eq = function() {
          throw new Error('Not implemented');
        }),
        (u.prototype.validate = function() {
          return this.curve.validate(this);
        }),
        (f.prototype.decodePoint = function(e, t) {
          e = i.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? s(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw new Error('Unknown point format');
        }),
        (u.prototype.encodeCompressed = function(e) {
          return this.encode(e, !0);
        }),
        (u.prototype._encode = function(e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray('be', t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', t));
        }),
        (u.prototype.encode = function(e, t) {
          return i.encode(this._encode(t), e);
        }),
        (u.prototype.precompute = function(e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (u.prototype._hasDoubles = function(e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (u.prototype._getDoubles = function(e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) n = n.dbl();
            r.push(n);
          }
          return { step: e, points: r };
        }),
        (u.prototype._getNAFPoints = function(e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(n);
          return { wnd: e, points: t };
        }),
        (u.prototype._getBeta = function() {
          return null;
        }),
        (u.prototype.dblp = function(e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getLength = t.decode = t.encode = void 0);
        var n = r(2);
        function i(e, t) {
          if ('00' === e.slice(0, 2))
            throw new Error('invalid RLP: extra zeros');
          return parseInt(e, t);
        }
        function o(t, r) {
          if (t < 56) return e.from([t + r]);
          var n = s(t),
            i = s(r + 55 + n.length / 2);
          return e.from(i + n, 'hex');
        }
        function a(e) {
          return '0x' === e.slice(0, 2);
        }
        function s(e) {
          if (e < 0)
            throw new Error('Invalid integer as argument, must be unsigned!');
          var t = e.toString(16);
          return t.length % 2 ? '0' + t : t;
        }
        function f(t) {
          if (!e.isBuffer(t)) {
            if ('string' == typeof t)
              return a(t)
                ? e.from(
                    (i = 'string' != typeof (o = t) ? o : a(o) ? o.slice(2) : o)
                      .length % 2
                      ? '0' + i
                      : i,
                    'hex'
                  )
                : e.from(t);
            if ('number' == typeof t || 'bigint' == typeof t)
              return t ? ((r = s(t)), e.from(r, 'hex')) : e.from([]);
            if (null == t) return e.from([]);
            if (t instanceof Uint8Array) return e.from(t);
            if (n.isBN(t)) return e.from(t.toArray());
            throw new Error('invalid type');
          }
          var r, i, o;
          return t;
        }
        (t.encode = function t(r) {
          if (Array.isArray(r)) {
            for (var n = [], i = 0; i < r.length; i++) n.push(t(r[i]));
            var a = e.concat(n);
            return e.concat([o(a.length, 192), a]);
          }
          var s = f(r);
          return 1 === s.length && s[0] < 128
            ? s
            : e.concat([o(s.length, 128), s]);
        }),
          (t.decode = function(t, r) {
            if ((void 0 === r && (r = !1), !t || 0 === t.length))
              return e.from([]);
            var n = (function t(r) {
              var n,
                o,
                a,
                s,
                f,
                u = [],
                c = r[0];
              if (c <= 127)
                return { data: r.slice(0, 1), remainder: r.slice(1) };
              if (c <= 183) {
                if (
                  ((n = c - 127),
                  (a = 128 === c ? e.from([]) : r.slice(1, n)),
                  2 === n && a[0] < 128)
                )
                  throw new Error(
                    'invalid rlp encoding: byte must be less 0x80'
                  );
                return { data: a, remainder: r.slice(n) };
              }
              if (c <= 191) {
                if (
                  ((o = c - 182),
                  (n = i(r.slice(1, o).toString('hex'), 16)),
                  (a = r.slice(o, n + o)).length < n)
                )
                  throw new Error('invalid RLP');
                return { data: a, remainder: r.slice(n + o) };
              }
              if (c <= 247) {
                for (n = c - 191, s = r.slice(1, n); s.length; )
                  (f = t(s)), u.push(f.data), (s = f.remainder);
                return { data: u, remainder: r.slice(n) };
              }
              (o = c - 246), (n = i(r.slice(1, o).toString('hex'), 16));
              var d = o + n;
              if (d > r.length)
                throw new Error(
                  'invalid rlp: total length is larger than the data'
                );
              if (0 === (s = r.slice(o, d)).length)
                throw new Error('invalid rlp, List has a invalid length');
              for (; s.length; ) (f = t(s)), u.push(f.data), (s = f.remainder);
              return { data: u, remainder: r.slice(d) };
            })(f(t));
            if (r) return n;
            if (0 !== n.remainder.length) throw new Error('invalid remainder');
            return n.data;
          }),
          (t.getLength = function(t) {
            if (!t || 0 === t.length) return e.from([]);
            var r = f(t),
              n = r[0];
            if (n <= 127) return r.length;
            if (n <= 183) return n - 127;
            if (n <= 191) return n - 182;
            if (n <= 247) return n - 191;
            var o = n - 246;
            return o + i(r.slice(1, o).toString('hex'), 16);
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t) {
      function r(t, n) {
        return (
          (e.exports = r =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          r(t, n)
        );
      }
      e.exports = r;
    },
    function(e, t, r) {
      var n = r(123),
        i = r(129);
      e.exports = function(e, t) {
        var r = i(e, t);
        return n(r) ? r : void 0;
      };
    },
    function(e, t, r) {
      var n = r(67),
        i = r(124),
        o = r(125),
        a = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(e)
          ? i(e)
          : o(e);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    function(e, t, r) {
      var n = r(6),
        i = r(43),
        o = r(158),
        a = r(159);
      function s(t) {
        var r = 'function' == typeof Map ? new Map() : void 0;
        return (
          (e.exports = s = function(e) {
            if (null === e || !o(e)) return e;
            if ('function' != typeof e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            if (void 0 !== r) {
              if (r.has(e)) return r.get(e);
              r.set(e, t);
            }
            function t() {
              return a(e, arguments, n(this).constructor);
            }
            return (
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              i(t, e)
            );
          }),
          s(t)
        );
      }
      e.exports = s;
    },
    function(e, t) {
      e.exports = function(e) {
        return null != e && 'object' == typeof e;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DependencyNotResolvedError = t.UnknownDependencyError = t.InvalidServiceError = t.default = void 0);
      var i = n(r(19)),
        o = n(r(179)),
        a = n(r(13)),
        s = n(r(8)),
        f = n(r(15)),
        u = n(r(6)),
        c = n(r(14)),
        d = n(r(47)),
        h = n(r(181)),
        l = (function(e) {
          function t(e) {
            return (
              (0, s.default)(this, t),
              (0, f.default)(this, (0, u.default)(t).call(this, e))
            );
          }
          return (0, c.default)(t, e), t;
        })((0, d.default)(Error));
      t.InvalidServiceError = l;
      var p = (function(e) {
        function t(e, r) {
          return (
            (0, s.default)(this, t),
            (0, f.default)(
              this,
              (0, u.default)(t).call(
                this,
                'Injected service ' + r + ' is not a dependency of ' + e
              )
            )
          );
        }
        return (0, c.default)(t, e), t;
      })((0, d.default)(Error));
      t.UnknownDependencyError = p;
      var b = (function(e) {
        function t(e, r) {
          return (
            (0, s.default)(this, t),
            (0, f.default)(
              this,
              (0, u.default)(t).call(
                this,
                'Dependency ' + r + ' of service ' + e + ' is unavailable.'
              )
            )
          );
        }
        return (0, c.default)(t, e), t;
      })((0, d.default)(Error));
      function g(e) {
        return Promise.all(
          this.dependencies().map(function(t) {
            return e(t);
          })
        );
      }
      t.DependencyNotResolvedError = b;
      var y = (function(e) {
        function t(e) {
          var r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null;
          if (
            ((0, s.default)(this, t),
            (r = (0, f.default)(this, (0, u.default)(t).call(this, i, o, a))),
            !e)
          )
            throw new Error('Service name must not be empty.');
          return (
            (r._name = e),
            (r._dependencies = n),
            (r._injections = {}),
            n.forEach(function(e) {
              return (r._injections[e] = null);
            }),
            r
          );
        }
        return (
          (0, c.default)(t, e),
          (0, a.default)(t, null, [
            {
              key: 'isValidService',
              value: function(e) {
                return (
                  null !== e &&
                  'object' === (0, i.default)(e) &&
                  'function' == typeof e.manager
                );
              }
            }
          ]),
          (0, a.default)(t, [
            {
              key: 'name',
              value: function() {
                return this._name;
              }
            },
            {
              key: 'dependencies',
              value: function() {
                return this._dependencies;
              }
            },
            {
              key: 'inject',
              value: function(e, r) {
                if (void 0 === this._injections[e]) throw new p(this.name(), e);
                if (!t.isValidService(r))
                  throw new l(
                    'Cannot inject invalid service in ' + this.name()
                  );
                return (this._injections[e] = r), this;
              }
            },
            {
              key: 'dependency',
              value: function(e) {
                if (!this._injections[e]) throw new b(this.name(), e);
                return this._injections[e];
              }
            },
            {
              key: 'initialize',
              value: function() {
                var e = this;
                return this.initializeDependencies().then(function() {
                  return (0, o.default)(
                    (0, u.default)(t.prototype),
                    'initialize',
                    e
                  ).call(e, e._settings);
                });
              }
            },
            {
              key: 'connect',
              value: function() {
                var e = this;
                return this.connectDependencies().then(function() {
                  return (0, o.default)(
                    (0, u.default)(t.prototype),
                    'connect',
                    e
                  ).call(e);
                });
              }
            },
            {
              key: 'authenticate',
              value: function() {
                var e = this;
                return this.authenticateDependencies().then(function() {
                  return (0, o.default)(
                    (0, u.default)(t.prototype),
                    'authenticate',
                    e
                  ).call(e);
                });
              }
            },
            {
              key: 'initializeDependencies',
              value: function() {
                var e = this;
                return g.call(this, function(t) {
                  return e
                    .dependency(t)
                    .manager()
                    .initialize();
                });
              }
            },
            {
              key: 'connectDependencies',
              value: function() {
                var e = this;
                return g.call(this, function(t) {
                  return e
                    .dependency(t)
                    .manager()
                    .connect();
                });
              }
            },
            {
              key: 'authenticateDependencies',
              value: function() {
                var e = this;
                return g.call(this, function(t) {
                  return e
                    .dependency(t)
                    .manager()
                    .authenticate();
                });
              }
            },
            {
              key: 'createService',
              value: function() {
                var e = this;
                return {
                  manager: function() {
                    return e;
                  }
                };
              }
            }
          ]),
          t
        );
      })(h.default);
      t.default = y;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n = {
        CREATED: 'CREATED',
        INITIALIZING: 'INITIALIZING',
        OFFLINE: 'OFFLINE',
        CONNECTING: 'CONNECTING',
        ONLINE: 'ONLINE',
        AUTHENTICATING: 'AUTHENTICATING',
        READY: 'READY',
        ERROR: 'ERROR'
      };
      t.default = n;
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n(r(8)),
        o = n(r(13)),
        a = n(r(50)),
        s = n(r(27)),
        f = n(r(51));
      function u(e) {
        void 0 === this.initialize && (this.initialize = function() {}),
          e !== s.default.LOCAL &&
            (void 0 === this.connect && (this.connect = function() {}),
            (this.disconnect = function() {})),
          e === s.default.PRIVATE &&
            (void 0 === this.authenticate &&
              (this.authenticate = function() {}),
            (this.deauthenticate = function() {}));
      }
      function c(e, t, r) {
        var n = this,
          i =
            e === s.default.LOCAL
              ? null
              : function(e) {
                  return (n.disconnect = e), n.connect();
                },
          o =
            e !== s.default.PRIVATE
              ? null
              : function(e) {
                  return (n.deauthenticate = e), n.authenticate();
                };
        return new a.default(
          t,
          r,
          function(e) {
            return n.initialize(e);
          },
          i,
          o
        );
      }
      function d(e) {
        var t = this;
        e.onInitialized(function() {
          e.type() !== s.default.LOCAL &&
            e.dependencies().forEach(function(e) {
              t.get(e)
                .manager()
                .onDisconnected(function() {
                  return t.disconnect();
                });
            }),
            e.type() === s.default.PRIVATE &&
              e.dependencies().forEach(function(e) {
                t.get(e)
                  .manager()
                  .onDeauthenticated(function() {
                    return t.deauthenticate();
                  });
              });
        });
      }
      function h() {
        var e = {
          initialize: this.initialize,
          connect: this.connect,
          authenticate: this.authenticate
        };
        (this.initialize = function(t) {
          if (this.manager().state() !== f.default.INITIALIZING)
            throw new Error(
              'Expected state INITIALIZING, but got ' +
                this.manager().state() +
                '. Did you mean to call service.manager().initialize() instead of service.initialize()?'
            );
          return e.initialize.apply(this, [t]);
        }),
          void 0 !== e.connect &&
            (this.connect = function() {
              if (this.manager().state() !== f.default.CONNECTING)
                throw new Error(
                  'Expected state CONNECTING, but got ' +
                    this.manager().state() +
                    '. Did you mean to call service.manager().connect() instead of service.connect()?'
                );
              return e.connect.apply(this);
            }),
          void 0 !== e.authenticate &&
            (this.authenticate = function() {
              if (this.manager().state() !== f.default.AUTHENTICATING)
                throw new Error(
                  'Expected state AUTHENTICATING, but got ' +
                    this.manager().state() +
                    '. Did you mean to call service.manager().authenticate() instead of service.authenticate()?'
                );
              return e.authenticate.apply(this);
            });
      }
      var l = (function() {
        function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (((0, i.default)(this, e), void 0 === s.default[t]))
            throw new Error('Invalid ServiceType: ' + t);
          u.call(this, t),
            (this._serviceManager = c.call(this, t, r, n)),
            d.call(this, this._serviceManager),
            h.call(this);
        }
        return (
          (0, o.default)(e, [
            {
              key: 'manager',
              value: function() {
                return this._serviceManager;
              }
            },
            {
              key: 'get',
              value: function(e) {
                return this._serviceManager.dependency(e);
              }
            }
          ]),
          e
        );
      })();
      t.default = l;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return function() {
            if (null !== e) {
              var t = e;
              (e = null), t.apply(this, arguments);
            }
          };
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return function() {
            if (null === e) throw new Error('Callback was already called.');
            var t = e;
            (e = null), t.apply(this, arguments);
          };
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      ((t = e.exports = r(81)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(57)),
        (t.Duplex = r(17)),
        (t.Transform = r(85)),
        (t.PassThrough = r(212));
    },
    function(e, t, r) {
      var n = r(4),
        i = n.Buffer;
      function o(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function a(e, t, r) {
        return i(e, t, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = a)),
        o(i, a),
        (a.from = function(e, t, r) {
          if ('number' == typeof e)
            throw new TypeError('Argument must not be a number');
          return i(e, t, r);
        }),
        (a.alloc = function(e, t, r) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          var n = i(e);
          return (
            void 0 !== t
              ? 'string' == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (a.allocUnsafe = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return i(e);
        }),
        (a.allocUnsafeSlow = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return n.SlowBuffer(e);
        });
    },
    function(e, t, r) {
      'use strict';
      (function(t, n, i) {
        var o = r(39);
        function a(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(e, t, r) {
                var n = e.entry;
                e.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  t.pendingcb--, i(r), (n = n.next);
                }
                t.corkedRequestsFree
                  ? (t.corkedRequestsFree.next = e)
                  : (t.corkedRequestsFree = e);
              })(t, e);
            });
        }
        e.exports = v;
        var s,
          f =
            !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
              ? n
              : o.nextTick;
        v.WritableState = y;
        var u = Object.create(r(29));
        u.inherits = r(0);
        var c = { deprecate: r(84) },
          d = r(82),
          h = r(56).Buffer,
          l = i.Uint8Array || function() {};
        var p,
          b = r(83);
        function g() {}
        function y(e, t) {
          (s = s || r(17)), (e = e || {});
          var n = t instanceof s;
          (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
          var i = e.highWaterMark,
            u = e.writableHighWaterMark,
            c = this.objectMode ? 16 : 16384;
          (this.highWaterMark = i || 0 === i ? i : n && (u || 0 === u) ? u : c),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var d = !1 === e.decodeStrings;
          (this.decodeStrings = !d),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(e) {
              !(function(e, t) {
                var r = e._writableState,
                  n = r.sync,
                  i = r.writecb;
                if (
                  ((function(e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function(e, t, r, n, i) {
                    --t.pendingcb,
                      r
                        ? (o.nextTick(i, n),
                          o.nextTick(A, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', n))
                        : (i(n),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', n),
                          A(e, t));
                  })(e, r, n, t, i);
                else {
                  var a = E(r);
                  a ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    w(e, r),
                    n ? f(_, e, r, a, i) : _(e, r, a, i);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new a(this));
        }
        function v(e) {
          if (((s = s || r(17)), !(p.call(v, this) || this instanceof s)))
            return new v(e);
          (this._writableState = new y(e, this)),
            (this.writable = !0),
            e &&
              ('function' == typeof e.write && (this._write = e.write),
              'function' == typeof e.writev && (this._writev = e.writev),
              'function' == typeof e.destroy && (this._destroy = e.destroy),
              'function' == typeof e.final && (this._final = e.final)),
            d.call(this);
        }
        function m(e, t, r, n, i, o, a) {
          (t.writelen = n),
            (t.writecb = a),
            (t.writing = !0),
            (t.sync = !0),
            r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }
        function _(e, t, r, n) {
          r ||
            (function(e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit('drain'));
            })(e, t),
            t.pendingcb--,
            n(),
            A(e, t);
        }
        function w(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount,
              i = new Array(n),
              o = t.corkedRequestsFree;
            o.entry = r;
            for (var s = 0, f = !0; r; )
              (i[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
            (i.allBuffers = f),
              m(e, t, !0, t.length, i, '', o.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              o.next
                ? ((t.corkedRequestsFree = o.next), (o.next = null))
                : (t.corkedRequestsFree = new a(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var u = r.chunk,
                c = r.encoding,
                d = r.callback;
              if (
                (m(e, t, !1, t.objectMode ? 1 : u.length, u, c, d),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }
        function E(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function S(e, t) {
          e._final(function(r) {
            t.pendingcb--,
              r && e.emit('error', r),
              (t.prefinished = !0),
              e.emit('prefinish'),
              A(e, t);
          });
        }
        function A(e, t) {
          var r = E(t);
          return (
            r &&
              (!(function(e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ('function' == typeof e._final
                    ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(S, e, t))
                    : ((t.prefinished = !0), e.emit('prefinish')));
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
            r
          );
        }
        u.inherits(v, d),
          (y.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function() {
            try {
              Object.defineProperty(y.prototype, 'buffer', {
                get: c.deprecate(
                  function() {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                )
              });
            } catch (e) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((p = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(v, Symbol.hasInstance, {
                value: function(e) {
                  return (
                    !!p.call(this, e) ||
                    (this === v && e && e._writableState instanceof y)
                  );
                }
              }))
            : (p = function(e) {
                return e instanceof this;
              }),
          (v.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe, not readable'));
          }),
          (v.prototype.write = function(e, t, r) {
            var n,
              i = this._writableState,
              a = !1,
              s = !i.objectMode && ((n = e), h.isBuffer(n) || n instanceof l);
            return (
              s &&
                !h.isBuffer(e) &&
                (e = (function(e) {
                  return h.from(e);
                })(e)),
              'function' == typeof t && ((r = t), (t = null)),
              s ? (t = 'buffer') : t || (t = i.defaultEncoding),
              'function' != typeof r && (r = g),
              i.ended
                ? (function(e, t) {
                    var r = new Error('write after end');
                    e.emit('error', r), o.nextTick(t, r);
                  })(this, r)
                : (s ||
                    (function(e, t, r, n) {
                      var i = !0,
                        a = !1;
                      return (
                        null === r
                          ? (a = new TypeError(
                              'May not write null values to stream'
                            ))
                          : 'string' == typeof r ||
                            void 0 === r ||
                            t.objectMode ||
                            (a = new TypeError(
                              'Invalid non-string/buffer chunk'
                            )),
                        a && (e.emit('error', a), o.nextTick(n, a), (i = !1)),
                        i
                      );
                    })(this, i, e, r)) &&
                  (i.pendingcb++,
                  (a = (function(e, t, r, n, i, o) {
                    if (!r) {
                      var a = (function(e, t, r) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          'string' != typeof t ||
                          (t = h.from(t, r));
                        return t;
                      })(t, n, i);
                      n !== a && ((r = !0), (i = 'buffer'), (n = a));
                    }
                    var s = t.objectMode ? 1 : n.length;
                    t.length += s;
                    var f = t.length < t.highWaterMark;
                    f || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var u = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null
                      }),
                        u
                          ? (u.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else m(e, t, !1, s, n, i, o);
                    return f;
                  })(this, i, s, e, t, r))),
              a
            );
          }),
          (v.prototype.cork = function() {
            this._writableState.corked++;
          }),
          (v.prototype.uncork = function() {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.finished ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                w(this, e));
          }),
          (v.prototype.setDefaultEncoding = function(e) {
            if (
              ('string' == typeof e && (e = e.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw'
                ].indexOf((e + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(v.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark;
            }
          }),
          (v.prototype._write = function(e, t, r) {
            r(new Error('_write() is not implemented'));
          }),
          (v.prototype._writev = null),
          (v.prototype.end = function(e, t, r) {
            var n = this._writableState;
            'function' == typeof e
              ? ((r = e), (e = null), (t = null))
              : 'function' == typeof t && ((r = t), (t = null)),
              null != e && this.write(e, t),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                n.finished ||
                (function(e, t, r) {
                  (t.ending = !0),
                    A(e, t),
                    r && (t.finished ? o.nextTick(r) : e.once('finish', r));
                  (t.ended = !0), (e.writable = !1);
                })(this, n, r);
          }),
          Object.defineProperty(v.prototype, 'destroyed', {
            get: function() {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function(e) {
              this._writableState && (this._writableState.destroyed = e);
            }
          }),
          (v.prototype.destroy = b.destroy),
          (v.prototype._undestroy = b.undestroy),
          (v.prototype._destroy = function(e, t) {
            this.end(), t(e);
          });
      }.call(this, r(7), r(76).setImmediate, r(11)));
    },
    function(e, t, r) {
      'use strict';
      var n = r(0),
        i = r(225),
        o = r(234),
        a = r(235),
        s = r(240);
      function f(e) {
        s.call(this, 'digest'), (this._hash = e);
      }
      n(f, s),
        (f.prototype._update = function(e) {
          this._hash.update(e);
        }),
        (f.prototype._final = function() {
          return this._hash.digest();
        }),
        (e.exports = function(e) {
          return 'md5' === (e = e.toLowerCase())
            ? new i()
            : 'rmd160' === e || 'ripemd160' === e
            ? new o()
            : new f(a(e));
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(21).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, r, o) {
        if ('function' == typeof r) return e(t, null, r);
        r || (r = {}),
          (o = (function(e) {
            var t = !1;
            return function() {
              if (!t) {
                t = !0;
                for (
                  var r = arguments.length, n = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i];
                e.apply(this, n);
              }
            };
          })(o || i));
        var a = r.readable || (!1 !== r.readable && t.readable),
          s = r.writable || (!1 !== r.writable && t.writable),
          f = function() {
            t.writable || c();
          },
          u = t._writableState && t._writableState.finished,
          c = function() {
            (s = !1), (u = !0), a || o.call(t);
          },
          d = t._readableState && t._readableState.endEmitted,
          h = function() {
            (a = !1), (d = !0), s || o.call(t);
          },
          l = function(e) {
            o.call(t, e);
          },
          p = function() {
            var e;
            return a && !d
              ? ((t._readableState && t._readableState.ended) || (e = new n()),
                o.call(t, e))
              : s && !u
              ? ((t._writableState && t._writableState.ended) || (e = new n()),
                o.call(t, e))
              : void 0;
          },
          b = function() {
            t.req.on('finish', c);
          };
        return (
          !(function(e) {
            return e.setHeader && 'function' == typeof e.abort;
          })(t)
            ? s && !t._writableState && (t.on('end', f), t.on('close', f))
            : (t.on('complete', c),
              t.on('abort', p),
              t.req ? b() : t.on('request', b)),
          t.on('end', h),
          t.on('finish', c),
          !1 !== r.error && t.on('error', l),
          t.on('close', p),
          function() {
            t.removeListener('complete', c),
              t.removeListener('abort', p),
              t.removeListener('request', b),
              t.req && t.req.removeListener('finish', c),
              t.removeListener('end', f),
              t.removeListener('close', f),
              t.removeListener('finish', c),
              t.removeListener('end', h),
              t.removeListener('error', l),
              t.removeListener('close', p);
          }
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n,
        i = t,
        o = r(61),
        a = r(98),
        s = r(10).assert;
      function f(e) {
        'short' === e.type
          ? (this.curve = new a.short(e))
          : 'edwards' === e.type
          ? (this.curve = new a.edwards(e))
          : (this.curve = new a.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          s(this.g.validate(), 'Invalid curve'),
          s(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
      }
      function u(e, t) {
        Object.defineProperty(i, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            var r = new f(t);
            return (
              Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                value: r
              }),
              r
            );
          }
        });
      }
      (i.PresetCurve = f),
        u('p192', {
          type: 'short',
          prime: 'p192',
          p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
          b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
          n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
          hash: o.sha256,
          gRed: !1,
          g: [
            '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
          ]
        }),
        u('p224', {
          type: 'short',
          prime: 'p224',
          p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
          b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
          n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
          hash: o.sha256,
          gRed: !1,
          g: [
            'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
          ]
        }),
        u('p256', {
          type: 'short',
          prime: null,
          p:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
          a:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
          b:
            '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
          n:
            'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
          hash: o.sha256,
          gRed: !1,
          g: [
            '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
          ]
        }),
        u('p384', {
          type: 'short',
          prime: null,
          p:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
          a:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
          b:
            'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
          n:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
          hash: o.sha384,
          gRed: !1,
          g: [
            'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
          ]
        }),
        u('p521', {
          type: 'short',
          prime: null,
          p:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
          a:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
          b:
            '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
          n:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
          hash: o.sha512,
          gRed: !1,
          g: [
            '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650'
          ]
        }),
        u('curve25519', {
          type: 'mont',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '76d06',
          b: '1',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: o.sha256,
          gRed: !1,
          g: ['9']
        }),
        u('ed25519', {
          type: 'edwards',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '-1',
          c: '1',
          d:
            '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: o.sha256,
          gRed: !1,
          g: [
            '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
            '6666666666666666666666666666666666666666666666666666666666666658'
          ]
        });
      try {
        n = r(254);
      } catch (e) {
        n = void 0;
      }
      u('secp256k1', {
        type: 'short',
        prime: 'k256',
        p:
          'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
        a: '0',
        b: '7',
        n:
          'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
        h: '1',
        hash: o.sha256,
        beta:
          '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
        lambda:
          '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
        basis: [
          {
            a: '3086d221a7d46bcde86c90e49284eb15',
            b: '-e4437ed6010e88286f547fa90abfe4c3'
          },
          {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15'
          }
        ],
        gRed: !1,
        g: [
          '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
          n
        ]
      });
    },
    function(e, t, r) {
      var n = t;
      (n.utils = r(12)),
        (n.common = r(31)),
        (n.sha = r(248)),
        (n.ripemd = r(252)),
        (n.hmac = r(253)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    function(e, t, r) {
      'use strict';
      (function(t) {
        var n = r(262);
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */ function i(e, t) {
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }
        function o(e) {
          return t.Buffer && 'function' == typeof t.Buffer.isBuffer
            ? t.Buffer.isBuffer(e)
            : !(null == e || !e._isBuffer);
        }
        var a = r(78),
          s = Object.prototype.hasOwnProperty,
          f = Array.prototype.slice,
          u = 'foo' === function() {}.name;
        function c(e) {
          return Object.prototype.toString.call(e);
        }
        function d(e) {
          return (
            !o(e) &&
            'function' == typeof t.ArrayBuffer &&
              ('function' == typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : !!e &&
                  (e instanceof DataView ||
                    !!(e.buffer && e.buffer instanceof ArrayBuffer)))
          );
        }
        var h = (e.exports = v),
          l = /\s*function\s+([^\(\s]*)\s*/;
        function p(e) {
          if (a.isFunction(e)) {
            if (u) return e.name;
            var t = e.toString().match(l);
            return t && t[1];
          }
        }
        function b(e, t) {
          return 'string' == typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
        }
        function g(e) {
          if (u || !a.isFunction(e)) return a.inspect(e);
          var t = p(e);
          return '[Function' + (t ? ': ' + t : '') + ']';
        }
        function y(e, t, r, n, i) {
          throw new h.AssertionError({
            message: r,
            actual: e,
            expected: t,
            operator: n,
            stackStartFunction: i
          });
        }
        function v(e, t) {
          e || y(e, !0, t, '==', h.ok);
        }
        function m(e, t, r, n) {
          if (e === t) return !0;
          if (o(e) && o(t)) return 0 === i(e, t);
          if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
          if (a.isRegExp(e) && a.isRegExp(t))
            return (
              e.source === t.source &&
              e.global === t.global &&
              e.multiline === t.multiline &&
              e.lastIndex === t.lastIndex &&
              e.ignoreCase === t.ignoreCase
            );
          if (
            (null !== e && 'object' == typeof e) ||
            (null !== t && 'object' == typeof t)
          ) {
            if (
              d(e) &&
              d(t) &&
              c(e) === c(t) &&
              !(e instanceof Float32Array || e instanceof Float64Array)
            )
              return (
                0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer))
              );
            if (o(e) !== o(t)) return !1;
            var s = (n = n || { actual: [], expected: [] }).actual.indexOf(e);
            return (
              (-1 !== s && s === n.expected.indexOf(t)) ||
              (n.actual.push(e),
              n.expected.push(t),
              (function(e, t, r, n) {
                if (null == e || null == t) return !1;
                if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
                if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                  return !1;
                var i = _(e),
                  o = _(t);
                if ((i && !o) || (!i && o)) return !1;
                if (i) return (e = f.call(e)), (t = f.call(t)), m(e, t, r);
                var s,
                  u,
                  c = S(e),
                  d = S(t);
                if (c.length !== d.length) return !1;
                for (c.sort(), d.sort(), u = c.length - 1; u >= 0; u--)
                  if (c[u] !== d[u]) return !1;
                for (u = c.length - 1; u >= 0; u--)
                  if (((s = c[u]), !m(e[s], t[s], r, n))) return !1;
                return !0;
              })(e, t, r, n))
            );
          }
          return r ? e === t : e == t;
        }
        function _(e) {
          return '[object Arguments]' == Object.prototype.toString.call(e);
        }
        function w(e, t) {
          if (!e || !t) return !1;
          if ('[object RegExp]' == Object.prototype.toString.call(t))
            return t.test(e);
          try {
            if (e instanceof t) return !0;
          } catch (e) {}
          return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
        }
        function E(e, t, r, n) {
          var i;
          if ('function' != typeof t)
            throw new TypeError('"block" argument must be a function');
          'string' == typeof r && ((n = r), (r = null)),
            (i = (function(e) {
              var t;
              try {
                e();
              } catch (e) {
                t = e;
              }
              return t;
            })(t)),
            (n =
              (r && r.name ? ' (' + r.name + ').' : '.') + (n ? ' ' + n : '.')),
            e && !i && y(i, r, 'Missing expected exception' + n);
          var o = 'string' == typeof n,
            s = !e && i && !r;
          if (
            (((!e && a.isError(i) && o && w(i, r)) || s) &&
              y(i, r, 'Got unwanted exception' + n),
            (e && i && r && !w(i, r)) || (!e && i))
          )
            throw i;
        }
        (h.AssertionError = function(e) {
          (this.name = 'AssertionError'),
            (this.actual = e.actual),
            (this.expected = e.expected),
            (this.operator = e.operator),
            e.message
              ? ((this.message = e.message), (this.generatedMessage = !1))
              : ((this.message = (function(e) {
                  return (
                    b(g(e.actual), 128) +
                    ' ' +
                    e.operator +
                    ' ' +
                    b(g(e.expected), 128)
                  );
                })(this)),
                (this.generatedMessage = !0));
          var t = e.stackStartFunction || y;
          if (Error.captureStackTrace) Error.captureStackTrace(this, t);
          else {
            var r = new Error();
            if (r.stack) {
              var n = r.stack,
                i = p(t),
                o = n.indexOf('\n' + i);
              if (o >= 0) {
                var a = n.indexOf('\n', o + 1);
                n = n.substring(a + 1);
              }
              this.stack = n;
            }
          }
        }),
          a.inherits(h.AssertionError, Error),
          (h.fail = y),
          (h.ok = v),
          (h.equal = function(e, t, r) {
            e != t && y(e, t, r, '==', h.equal);
          }),
          (h.notEqual = function(e, t, r) {
            e == t && y(e, t, r, '!=', h.notEqual);
          }),
          (h.deepEqual = function(e, t, r) {
            m(e, t, !1) || y(e, t, r, 'deepEqual', h.deepEqual);
          }),
          (h.deepStrictEqual = function(e, t, r) {
            m(e, t, !0) || y(e, t, r, 'deepStrictEqual', h.deepStrictEqual);
          }),
          (h.notDeepEqual = function(e, t, r) {
            m(e, t, !1) && y(e, t, r, 'notDeepEqual', h.notDeepEqual);
          }),
          (h.notDeepStrictEqual = function e(t, r, n) {
            m(t, r, !0) && y(t, r, n, 'notDeepStrictEqual', e);
          }),
          (h.strictEqual = function(e, t, r) {
            e !== t && y(e, t, r, '===', h.strictEqual);
          }),
          (h.notStrictEqual = function(e, t, r) {
            e === t && y(e, t, r, '!==', h.notStrictEqual);
          }),
          (h.throws = function(e, t, r) {
            E(!0, e, t, r);
          }),
          (h.doesNotThrow = function(e, t, r) {
            E(!1, e, t, r);
          }),
          (h.ifError = function(e) {
            if (e) throw e;
          }),
          (h.strict = n(
            function e(t, r) {
              t || y(t, !0, r, '==', e);
            },
            h,
            {
              equal: h.strictEqual,
              deepEqual: h.deepStrictEqual,
              notEqual: h.notStrictEqual,
              notDeepEqual: h.notDeepStrictEqual
            }
          )),
          (h.strict.strict = h.strict);
        var S =
          Object.keys ||
          function(e) {
            var t = [];
            for (var r in e) s.call(e, r) && t.push(r);
            return t;
          };
      }.call(this, r(11)));
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(270),
          i = r(58),
          o = r(24),
          a = r(42),
          s = r(32);
        (t.keccak = function(t, r) {
          return (
            void 0 === r && (r = 256),
            (t =
              'string' != typeof t || o.isHexString(t)
                ? s.toBuffer(t)
                : e.from(t, 'utf8')),
            r || (r = 256),
            n('keccak' + r)
              .update(t)
              .digest()
          );
        }),
          (t.keccak256 = function(e) {
            return t.keccak(e);
          }),
          (t.sha256 = function(e) {
            return (
              (e = s.toBuffer(e)),
              i('sha256')
                .update(e)
                .digest()
            );
          }),
          (t.ripemd160 = function(e, t) {
            e = s.toBuffer(e);
            var r = i('rmd160')
              .update(e)
              .digest();
            return !0 === t ? s.setLength(r, 32) : r;
          }),
          (t.rlphash = function(e) {
            return t.keccak(a.encode(e));
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, r) {
          if (t instanceof Array)
            return 'boolean' == typeof t[0] && r ? [o(e, t[0], r), t[1]] : t;
          var n, a;
          switch ((0, i.default)(t)) {
            case 'string':
            case 'function':
              (n = t), (a = {});
              break;
            case 'object':
              (n = !r || o(e, !0, r)), (a = t);
              break;
            case 'boolean':
              (n = r ? o(e, t, r) : t), (a = {});
              break;
            default:
              throw new Error(
                'could not parse settings for '.concat(e, ':'),
                t
              );
          }
          return [n, a];
        });
      var i = n(r(19));
      function o(e, t, r) {
        var n,
          i = r.defaults,
          o = r.disabled;
        if (t) {
          if (!(n = i[e]))
            throw new Error('The "'.concat(e, '" service has no default'));
        } else if (!(n = o[e]))
          throw new Error('The "'.concat(e, '" service cannot be disabled'));
        return n;
      }
    },
    function(e, t, r) {
      var n = r(117);
      e.exports = function(e) {
        return e && e.length ? n(e) : [];
      };
    },
    function(e, t, r) {
      var n = r(45),
        i = r(46);
      e.exports = function(e) {
        if (!i(e)) return !1;
        var t = n(e);
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      };
    },
    function(e, t, r) {
      var n = r(25).Symbol;
      e.exports = n;
    },
    function(e, t, r) {
      (function(t) {
        var r = 'object' == typeof t && t && t.Object === Object && t;
        e.exports = r;
      }.call(this, r(11)));
    },
    function(e, t) {
      e.exports = function(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function(e) {
            r[++t] = e;
          }),
          r
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(71),
        i = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.orderServices = _),
        Object.defineProperty(t, 'InvalidServiceError', {
          enumerable: !0,
          get: function() {
            return b.InvalidServiceError;
          }
        }),
        (t.ServiceNotFoundError = t.ServiceAlreadyRegisteredError = t.ExtractedServiceError = t.default = void 0);
      var o = i(r(3)),
        a = i(r(16)),
        s = i(r(13)),
        f = i(r(8)),
        u = i(r(15)),
        c = i(r(6)),
        d = i(r(14)),
        h = i(r(47)),
        l = i(r(161)),
        p = i(r(65)),
        b = n(r(50)),
        g = i(r(185)),
        y = (function(e) {
          function t(e) {
            return (
              (0, f.default)(this, t),
              (0, u.default)(
                this,
                (0, c.default)(t).call(
                  this,
                  "Service with name '" +
                    e +
                    "' is already registered with this container."
                )
              )
            );
          }
          return (0, d.default)(t, e), t;
        })((0, h.default)(Error));
      t.ServiceAlreadyRegisteredError = y;
      var v = (function(e) {
        function t(e) {
          return (
            (0, f.default)(this, t),
            (0, u.default)(
              this,
              (0, c.default)(t).call(
                this,
                "Service with name '" +
                  e +
                  "' cannot be found in this container."
              )
            )
          );
        }
        return (0, d.default)(t, e), t;
      })((0, h.default)(Error));
      t.ServiceNotFoundError = v;
      var m = (function(e) {
        function t(e) {
          return (
            (0, f.default)(this, t),
            (0, u.default)(
              this,
              (0, c.default)(t).call(
                this,
                "Service with name '" +
                  e +
                  "' has been extracted from the core dai.js library into a discrete plugin. Please refer to the documentation here to install and add it to your configuration: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins) \n\n"
              )
            )
          );
        }
        return (0, d.default)(t, e), t;
      })((0, h.default)(Error));
      function _(e) {
        var t = [],
          r = [],
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a,
              s = function() {
                var e = a.value,
                  n = e.manager().name(),
                  i = e.manager().dependencies();
                0 === i.length
                  ? r.push(n)
                  : i.forEach(function(e) {
                      return t.push([e, n]);
                    });
              },
              f = e[Symbol.iterator]();
            !(n = (a = f.next()).done);
            n = !0
          )
            s();
        } catch (e) {
          (i = !0), (o = e);
        } finally {
          try {
            n || null == f.return || f.return();
          } finally {
            if (i) throw o;
          }
        }
        return (0, p.default)((0, g.default)(t).concat(r));
      }
      t.ExtractedServiceError = m;
      var w = (function() {
        function e() {
          (0, f.default)(this, e),
            (this._services = {}),
            (this.isAuthenticated = !1);
        }
        var t;
        return (
          (0, s.default)(e, [
            {
              key: 'register',
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if (!b.default.isValidService(e))
                  throw new b.InvalidServiceError(
                    'Service must be an object with manager() method returning a valid ServiceManager'
                  );
                t = t || e.manager().name();
                var r = this.service(t, !1);
                if (void 0 !== r && r !== e) throw new y(t);
                return (this._services[t] = e), this;
              }
            },
            {
              key: 'service',
              value: function(e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = ['exchange'];
                if (!e) throw new Error('Provide a service name.');
                if (!this._services[e] && t && r.includes(e)) throw new m(e);
                if (!this._services[e] && t) throw new v(e);
                return this._services[e];
              }
            },
            {
              key: 'getRegisteredServiceNames',
              value: function() {
                return Object.keys(this._services);
              }
            },
            {
              key: 'injectDependencies',
              value: function() {
                var e = (0, l.default)(this._services),
                  t = !0,
                  r = !1,
                  n = void 0;
                try {
                  for (
                    var i, o = e[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  ) {
                    var a = i.value.manager(),
                      s = !0,
                      f = !1,
                      u = void 0;
                    try {
                      for (
                        var c, d = a.dependencies()[Symbol.iterator]();
                        !(s = (c = d.next()).done);
                        s = !0
                      ) {
                        var h = c.value;
                        if (!this._services[h]) throw new v(h);
                        a.inject(h, this._services[h]);
                      }
                    } catch (e) {
                      (f = !0), (u = e);
                    } finally {
                      try {
                        s || null == d.return || d.return();
                      } finally {
                        if (f) throw u;
                      }
                    }
                  }
                } catch (e) {
                  (r = !0), (n = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw n;
                  }
                }
              }
            },
            {
              key: 'initialize',
              value: function() {
                return this._waitForServices(function(e) {
                  return e.manager().initialize();
                });
              }
            },
            {
              key: 'connect',
              value: function() {
                return this._waitForServices(function(e) {
                  return e.manager().connect();
                });
              }
            },
            {
              key: 'authenticate',
              value: function() {
                var e = this;
                return this._waitForServices(function(e) {
                  return e.manager().authenticate();
                }).then(function() {
                  e.isAuthenticated = !0;
                });
              }
            },
            {
              key: '_waitForServices',
              value:
                ((t = (0, a.default)(
                  o.default.mark(function e(t) {
                    var r, n, i, a, s, f;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this._orderedServiceNames ||
                                (this._orderedServiceNames = _(
                                  (0, l.default)(this._services)
                                )),
                                (r = !0),
                                (n = !1),
                                (i = void 0),
                                (e.prev = 4),
                                (a = this._orderedServiceNames[
                                  Symbol.iterator
                                ]());
                            case 6:
                              if ((r = (s = a.next()).done)) {
                                e.next = 16;
                                break;
                              }
                              if (((f = s.value), this._services[f])) {
                                e.next = 11;
                                break;
                              }
                              throw new Error('No service for '.concat(f));
                            case 11:
                              return (e.next = 13), t(this._services[f]);
                            case 13:
                              (r = !0), (e.next = 6);
                              break;
                            case 16:
                              e.next = 22;
                              break;
                            case 18:
                              (e.prev = 18),
                                (e.t0 = e.catch(4)),
                                (n = !0),
                                (i = e.t0);
                            case 22:
                              (e.prev = 22),
                                (e.prev = 23),
                                r || null == a.return || a.return();
                            case 25:
                              if (((e.prev = 25), !n)) {
                                e.next = 28;
                                break;
                              }
                              throw i;
                            case 28:
                              return e.finish(25);
                            case 29:
                              return e.finish(22);
                            case 30:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [4, 18, 22, 30],
                        [23, , 25, 29]
                      ]
                    );
                  })
                )),
                function(e) {
                  return t.apply(this, arguments);
                })
            }
          ]),
          e
        );
      })();
      t.default = w;
    },
    function(e, t, r) {
      var n = r(19);
      function i() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      e.exports = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== n(e) && 'function' != typeof e))
          return { default: e };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, a, s)
              : (r[a] = e[a]);
          }
        return (r.default = e), t && t.set(e, r), r;
      };
    },
    function(e, t, r) {
      var n = r(164),
        i = r(175),
        o = r(36);
      e.exports = function(e) {
        return o(e) ? n(e) : i(e);
      };
    },
    function(e, t) {
      var r = Array.isArray;
      e.exports = r;
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.IllegalStateError = void 0);
      var i = n(r(19)),
        o = n(r(13)),
        a = n(r(8)),
        s = n(r(15)),
        f = n(r(6)),
        u = n(r(14)),
        c = (function(e) {
          function t() {
            return (
              (0, a.default)(this, t),
              (0, s.default)(this, (0, f.default)(t).apply(this, arguments))
            );
          }
          return (0, u.default)(t, e), t;
        })((0, n(r(47)).default)(Error));
      t.IllegalStateError = c;
      var d = (function() {
        function e(t, r) {
          if (((0, a.default)(this, e), 'object' !== (0, i.default)(r)))
            throw new Error(
              'StateMachine transitions parameter must be an object.'
            );
          if (
            Object.keys(r).filter(function(e) {
              return r.hasOwnProperty(e) && !(r[e] instanceof Array);
            }).length > 0
          )
            throw new Error(
              'Illegal StateMachine transition found: not an array.'
            );
          if (
            Object.keys(r).filter(function(e) {
              return (
                r.hasOwnProperty(e) &&
                r[e].filter(function(e) {
                  return !r[e];
                }).length > 0
              );
            }).length > 0
          )
            throw new Error(
              'Illegal StateMachine transition found: target state not in transition map.'
            );
          if (!(r[t] instanceof Array))
            throw new Error(
              'Initial state ' + t + ' is not set in the transitions map.'
            );
          (this._state = t),
            (this._nextStates = r),
            (this._stateChangedHandlers = []);
        }
        return (
          (0, o.default)(e, [
            {
              key: 'onStateChanged',
              value: function(e) {
                this._stateChangedHandlers.push(e);
              }
            },
            {
              key: 'state',
              value: function() {
                return this._state;
              }
            },
            {
              key: 'inState',
              value: function(e) {
                return (
                  e instanceof Array || (e = [e]), e.indexOf(this._state) >= 0
                );
              }
            },
            {
              key: 'assertState',
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '';
                if (!this.inState(e))
                  throw new c(
                    'Illegal operation for state ' +
                      this._state +
                      (t.length > 0 ? ': ' + t : '')
                  );
              }
            },
            {
              key: 'transitionTo',
              value: function(e) {
                if (void 0 === this._nextStates[e])
                  throw new c('Cannot set illegal state: ' + e);
                if (e !== this._state) {
                  if (this._nextStates[this._state].indexOf(e) < 0)
                    throw new c(
                      'Illegal state transition: ' + this._state + ' to ' + e
                    );
                  var t = this._state;
                  (this._state = e),
                    this._stateChangedHandlers.forEach(function(r) {
                      return r(t, e);
                    });
                }
                return this;
              }
            }
          ]),
          e
        );
      })();
      t.default = d;
    },
    function(e, t, r) {
      (function(e) {
        var n =
            (void 0 !== e && e) ||
            ('undefined' != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function o(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function() {
          return new o(i.call(setTimeout, n, arguments), clearTimeout);
        }),
          (t.setInterval = function() {
            return new o(i.call(setInterval, n, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close();
          }),
          (o.prototype.unref = o.prototype.ref = function() {}),
          (o.prototype.close = function() {
            this._clearFn.call(n, this._id);
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
          r(193),
          (t.setImmediate =
            ('undefined' != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ('undefined' != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, r(11)));
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {}),
        (e.exports = t.default);
    },
    function(e, t, r) {
      (function(e) {
        var n =
            Object.getOwnPropertyDescriptors ||
            function(e) {
              for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
              return r;
            },
          i = /%[sdj%]/g;
        (t.format = function(e) {
          if (!y(e)) {
            for (var t = [], r = 0; r < arguments.length; r++)
              t.push(s(arguments[r]));
            return t.join(' ');
          }
          r = 1;
          for (
            var n = arguments,
              o = n.length,
              a = String(e).replace(i, function(e) {
                if ('%%' === e) return '%';
                if (r >= o) return e;
                switch (e) {
                  case '%s':
                    return String(n[r++]);
                  case '%d':
                    return Number(n[r++]);
                  case '%j':
                    try {
                      return JSON.stringify(n[r++]);
                    } catch (e) {
                      return '[Circular]';
                    }
                  default:
                    return e;
                }
              }),
              f = n[r];
            r < o;
            f = n[++r]
          )
            b(f) || !_(f) ? (a += ' ' + f) : (a += ' ' + s(f));
          return a;
        }),
          (t.deprecate = function(r, n) {
            if (void 0 !== e && !0 === e.noDeprecation) return r;
            if (void 0 === e)
              return function() {
                return t.deprecate(r, n).apply(this, arguments);
              };
            var i = !1;
            return function() {
              if (!i) {
                if (e.throwDeprecation) throw new Error(n);
                e.traceDeprecation ? console.trace(n) : console.error(n),
                  (i = !0);
              }
              return r.apply(this, arguments);
            };
          });
        var o,
          a = {};
        function s(e, r) {
          var n = { seen: [], stylize: u };
          return (
            arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            p(r) ? (n.showHidden = r) : r && t._extend(n, r),
            v(n.showHidden) && (n.showHidden = !1),
            v(n.depth) && (n.depth = 2),
            v(n.colors) && (n.colors = !1),
            v(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = f),
            c(n, e, n.depth)
          );
        }
        function f(e, t) {
          var r = s.styles[t];
          return r
            ? '[' + s.colors[r][0] + 'm' + e + '[' + s.colors[r][1] + 'm'
            : e;
        }
        function u(e, t) {
          return e;
        }
        function c(e, r, n) {
          if (
            e.customInspect &&
            r &&
            S(r.inspect) &&
            r.inspect !== t.inspect &&
            (!r.constructor || r.constructor.prototype !== r)
          ) {
            var i = r.inspect(n, e);
            return y(i) || (i = c(e, i, n)), i;
          }
          var o = (function(e, t) {
            if (v(t)) return e.stylize('undefined', 'undefined');
            if (y(t)) {
              var r =
                "'" +
                JSON.stringify(t)
                  .replace(/^"|"$/g, '')
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return e.stylize(r, 'string');
            }
            if (g(t)) return e.stylize('' + t, 'number');
            if (p(t)) return e.stylize('' + t, 'boolean');
            if (b(t)) return e.stylize('null', 'null');
          })(e, r);
          if (o) return o;
          var a = Object.keys(r),
            s = (function(e) {
              var t = {};
              return (
                e.forEach(function(e, r) {
                  t[e] = !0;
                }),
                t
              );
            })(a);
          if (
            (e.showHidden && (a = Object.getOwnPropertyNames(r)),
            E(r) &&
              (a.indexOf('message') >= 0 || a.indexOf('description') >= 0))
          )
            return d(r);
          if (0 === a.length) {
            if (S(r)) {
              var f = r.name ? ': ' + r.name : '';
              return e.stylize('[Function' + f + ']', 'special');
            }
            if (m(r))
              return e.stylize(RegExp.prototype.toString.call(r), 'regexp');
            if (w(r)) return e.stylize(Date.prototype.toString.call(r), 'date');
            if (E(r)) return d(r);
          }
          var u,
            _ = '',
            A = !1,
            T = ['{', '}'];
          (l(r) && ((A = !0), (T = ['[', ']'])), S(r)) &&
            (_ = ' [Function' + (r.name ? ': ' + r.name : '') + ']');
          return (
            m(r) && (_ = ' ' + RegExp.prototype.toString.call(r)),
            w(r) && (_ = ' ' + Date.prototype.toUTCString.call(r)),
            E(r) && (_ = ' ' + d(r)),
            0 !== a.length || (A && 0 != r.length)
              ? n < 0
                ? m(r)
                  ? e.stylize(RegExp.prototype.toString.call(r), 'regexp')
                  : e.stylize('[Object]', 'special')
                : (e.seen.push(r),
                  (u = A
                    ? (function(e, t, r, n, i) {
                        for (var o = [], a = 0, s = t.length; a < s; ++a)
                          I(t, String(a))
                            ? o.push(h(e, t, r, n, String(a), !0))
                            : o.push('');
                        return (
                          i.forEach(function(i) {
                            i.match(/^\d+$/) || o.push(h(e, t, r, n, i, !0));
                          }),
                          o
                        );
                      })(e, r, n, s, a)
                    : a.map(function(t) {
                        return h(e, r, n, s, t, A);
                      })),
                  e.seen.pop(),
                  (function(e, t, r) {
                    if (
                      e.reduce(function(e, t) {
                        return (
                          t.indexOf('\n') >= 0 && 0,
                          e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        r[0] +
                        ('' === t ? '' : t + '\n ') +
                        ' ' +
                        e.join(',\n  ') +
                        ' ' +
                        r[1]
                      );
                    return r[0] + t + ' ' + e.join(', ') + ' ' + r[1];
                  })(u, _, T))
              : T[0] + _ + T[1]
          );
        }
        function d(e) {
          return '[' + Error.prototype.toString.call(e) + ']';
        }
        function h(e, t, r, n, i, o) {
          var a, s, f;
          if (
            ((f = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
              ? (s = f.set
                  ? e.stylize('[Getter/Setter]', 'special')
                  : e.stylize('[Getter]', 'special'))
              : f.set && (s = e.stylize('[Setter]', 'special')),
            I(n, i) || (a = '[' + i + ']'),
            s ||
              (e.seen.indexOf(f.value) < 0
                ? (s = b(r)
                    ? c(e, f.value, null)
                    : c(e, f.value, r - 1)).indexOf('\n') > -1 &&
                  (s = o
                    ? s
                        .split('\n')
                        .map(function(e) {
                          return '  ' + e;
                        })
                        .join('\n')
                        .substr(2)
                    : '\n' +
                      s
                        .split('\n')
                        .map(function(e) {
                          return '   ' + e;
                        })
                        .join('\n'))
                : (s = e.stylize('[Circular]', 'special'))),
            v(a))
          ) {
            if (o && i.match(/^\d+$/)) return s;
            (a = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, 'name')))
              : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (a = e.stylize(a, 'string')));
          }
          return a + ': ' + s;
        }
        function l(e) {
          return Array.isArray(e);
        }
        function p(e) {
          return 'boolean' == typeof e;
        }
        function b(e) {
          return null === e;
        }
        function g(e) {
          return 'number' == typeof e;
        }
        function y(e) {
          return 'string' == typeof e;
        }
        function v(e) {
          return void 0 === e;
        }
        function m(e) {
          return _(e) && '[object RegExp]' === A(e);
        }
        function _(e) {
          return 'object' == typeof e && null !== e;
        }
        function w(e) {
          return _(e) && '[object Date]' === A(e);
        }
        function E(e) {
          return _(e) && ('[object Error]' === A(e) || e instanceof Error);
        }
        function S(e) {
          return 'function' == typeof e;
        }
        function A(e) {
          return Object.prototype.toString.call(e);
        }
        function T(e) {
          return e < 10 ? '0' + e.toString(10) : e.toString(10);
        }
        (t.debuglog = function(r) {
          if (
            (v(o) && (o = e.env.NODE_DEBUG || ''), (r = r.toUpperCase()), !a[r])
          )
            if (new RegExp('\\b' + r + '\\b', 'i').test(o)) {
              var n = e.pid;
              a[r] = function() {
                var e = t.format.apply(t, arguments);
                console.error('%s %d: %s', r, n, e);
              };
            } else a[r] = function() {};
          return a[r];
        }),
          (t.inspect = s),
          (s.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
          }),
          (s.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            regexp: 'red'
          }),
          (t.isArray = l),
          (t.isBoolean = p),
          (t.isNull = b),
          (t.isNullOrUndefined = function(e) {
            return null == e;
          }),
          (t.isNumber = g),
          (t.isString = y),
          (t.isSymbol = function(e) {
            return 'symbol' == typeof e;
          }),
          (t.isUndefined = v),
          (t.isRegExp = m),
          (t.isObject = _),
          (t.isDate = w),
          (t.isError = E),
          (t.isFunction = S),
          (t.isPrimitive = function(e) {
            return (
              null === e ||
              'boolean' == typeof e ||
              'number' == typeof e ||
              'string' == typeof e ||
              'symbol' == typeof e ||
              void 0 === e
            );
          }),
          (t.isBuffer = r(202));
        var M = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ];
        function x() {
          var e = new Date(),
            t = [T(e.getHours()), T(e.getMinutes()), T(e.getSeconds())].join(
              ':'
            );
          return [e.getDate(), M[e.getMonth()], t].join(' ');
        }
        function I(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        (t.log = function() {
          console.log('%s - %s', x(), t.format.apply(t, arguments));
        }),
          (t.inherits = r(203)),
          (t._extend = function(e, t) {
            if (!t || !_(t)) return e;
            for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
            return e;
          });
        var L =
          'undefined' != typeof Symbol
            ? Symbol('util.promisify.custom')
            : void 0;
        function R(e, t) {
          if (!e) {
            var r = new Error('Promise was rejected with a falsy value');
            (r.reason = e), (e = r);
          }
          return t(e);
        }
        (t.promisify = function(e) {
          if ('function' != typeof e)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (L && e[L]) {
            var t;
            if ('function' != typeof (t = e[L]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(t, L, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
              t
            );
          }
          function t() {
            for (
              var t,
                r,
                n = new Promise(function(e, n) {
                  (t = e), (r = n);
                }),
                i = [],
                o = 0;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            i.push(function(e, n) {
              e ? r(e) : t(n);
            });
            try {
              e.apply(this, i);
            } catch (e) {
              r(e);
            }
            return n;
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            L &&
              Object.defineProperty(t, L, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
            Object.defineProperties(t, n(e))
          );
        }),
          (t.promisify.custom = L),
          (t.callbackify = function(t) {
            if ('function' != typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function r() {
              for (var r = [], n = 0; n < arguments.length; n++)
                r.push(arguments[n]);
              var i = r.pop();
              if ('function' != typeof i)
                throw new TypeError(
                  'The last argument must be of type Function'
                );
              var o = this,
                a = function() {
                  return i.apply(o, arguments);
                };
              t.apply(this, r).then(
                function(t) {
                  e.nextTick(a, null, t);
                },
                function(t) {
                  e.nextTick(R, t, a);
                }
              );
            }
            return (
              Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
              Object.defineProperties(r, n(t)),
              r
            );
          });
      }.call(this, r(7)));
    },
    function(e, t, r) {
      'use strict';
      var n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        i = r(204),
        o = r(40),
        a = r(62),
        s = r(42),
        f = r(2),
        u = r(58),
        c = r(1).Buffer;
      Object.assign(t, r(24)),
        (t.MAX_INTEGER = new f(
          'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          16
        )),
        (t.TWO_POW256 = new f(
          '10000000000000000000000000000000000000000000000000000000000000000',
          16
        )),
        (t.KECCAK256_NULL_S =
          'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'),
        (t.SHA3_NULL_S = t.KECCAK256_NULL_S),
        (t.KECCAK256_NULL = c.from(t.KECCAK256_NULL_S, 'hex')),
        (t.SHA3_NULL = t.KECCAK256_NULL),
        (t.KECCAK256_RLP_ARRAY_S =
          '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
        (t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S),
        (t.KECCAK256_RLP_ARRAY = c.from(t.KECCAK256_RLP_ARRAY_S, 'hex')),
        (t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY),
        (t.KECCAK256_RLP_S =
          '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
        (t.SHA3_RLP_S = t.KECCAK256_RLP_S),
        (t.KECCAK256_RLP = c.from(t.KECCAK256_RLP_S, 'hex')),
        (t.SHA3_RLP = t.KECCAK256_RLP),
        (t.BN = f),
        (t.rlp = s),
        (t.secp256k1 = o),
        (t.zeros = function(e) {
          return c.allocUnsafe(e).fill(0);
        }),
        (t.zeroAddress = function() {
          var e = t.zeros(20);
          return t.bufferToHex(e);
        }),
        (t.setLengthLeft = t.setLength = function(e, r, n) {
          var i = t.zeros(r);
          return (
            (e = t.toBuffer(e)),
            n
              ? e.length < r
                ? (e.copy(i), i)
                : e.slice(0, r)
              : e.length < r
              ? (e.copy(i, r - e.length), i)
              : e.slice(-r)
          );
        }),
        (t.setLengthRight = function(e, r) {
          return t.setLength(e, r, !0);
        }),
        (t.unpad = t.stripZeros = function(e) {
          for (
            var r = (e = t.stripHexPrefix(e))[0];
            e.length > 0 && '0' === r.toString();

          )
            r = (e = e.slice(1))[0];
          return e;
        }),
        (t.toBuffer = function(e) {
          if (!c.isBuffer(e))
            if (Array.isArray(e)) e = c.from(e);
            else if ('string' == typeof e)
              e = t.isHexString(e)
                ? c.from(t.padToEven(t.stripHexPrefix(e)), 'hex')
                : c.from(e);
            else if ('number' == typeof e) e = t.intToBuffer(e);
            else if (null == e) e = c.allocUnsafe(0);
            else if (f.isBN(e)) e = e.toArrayLike(c);
            else {
              if (!e.toArray) throw new Error('invalid type');
              e = c.from(e.toArray());
            }
          return e;
        }),
        (t.bufferToInt = function(e) {
          return new f(t.toBuffer(e)).toNumber();
        }),
        (t.bufferToHex = function(e) {
          return '0x' + (e = t.toBuffer(e)).toString('hex');
        }),
        (t.fromSigned = function(e) {
          return new f(e).fromTwos(256);
        }),
        (t.toUnsigned = function(e) {
          return c.from(e.toTwos(256).toArray());
        }),
        (t.keccak = function(e, r) {
          return (
            (e = t.toBuffer(e)),
            r || (r = 256),
            i('keccak' + r)
              .update(e)
              .digest()
          );
        }),
        (t.keccak256 = function(e) {
          return t.keccak(e);
        }),
        (t.sha3 = t.keccak),
        (t.sha256 = function(e) {
          return (
            (e = t.toBuffer(e)),
            u('sha256')
              .update(e)
              .digest()
          );
        }),
        (t.ripemd160 = function(e, r) {
          e = t.toBuffer(e);
          var n = u('rmd160')
            .update(e)
            .digest();
          return !0 === r ? t.setLength(n, 32) : n;
        }),
        (t.rlphash = function(e) {
          return t.keccak(s.encode(e));
        }),
        (t.isValidPrivate = function(e) {
          return o.privateKeyVerify(e);
        }),
        (t.isValidPublic = function(e, t) {
          return 64 === e.length
            ? o.publicKeyVerify(c.concat([c.from([4]), e]))
            : !!t && o.publicKeyVerify(e);
        }),
        (t.pubToAddress = t.publicToAddress = function(e, r) {
          return (
            (e = t.toBuffer(e)),
            r && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)),
            a(64 === e.length),
            t.keccak(e).slice(-20)
          );
        });
      var d = (t.privateToPublic = function(e) {
        return (e = t.toBuffer(e)), o.publicKeyCreate(e, !1).slice(1);
      });
      (t.importPublic = function(e) {
        return (
          64 !== (e = t.toBuffer(e)).length &&
            (e = o.publicKeyConvert(e, !1).slice(1)),
          e
        );
      }),
        (t.ecsign = function(e, t) {
          var r = o.sign(e, t),
            n = {};
          return (
            (n.r = r.signature.slice(0, 32)),
            (n.s = r.signature.slice(32, 64)),
            (n.v = r.recovery + 27),
            n
          );
        }),
        (t.hashPersonalMessage = function(e) {
          var r = t.toBuffer(
            'Ethereum Signed Message:\n' + e.length.toString()
          );
          return t.keccak(c.concat([r, e]));
        }),
        (t.ecrecover = function(e, r, n, i) {
          var a = c.concat([t.setLength(n, 32), t.setLength(i, 32)], 64),
            s = r - 27;
          if (0 !== s && 1 !== s) throw new Error('Invalid signature v value');
          var f = o.recover(e, a, s);
          return o.publicKeyConvert(f, !1).slice(1);
        }),
        (t.toRpcSig = function(e, r, n) {
          if (27 !== e && 28 !== e) throw new Error('Invalid recovery id');
          return t.bufferToHex(
            c.concat([
              t.setLengthLeft(r, 32),
              t.setLengthLeft(n, 32),
              t.toBuffer(e - 27)
            ])
          );
        }),
        (t.fromRpcSig = function(e) {
          if (65 !== (e = t.toBuffer(e)).length)
            throw new Error('Invalid signature length');
          var r = e[64];
          return (
            r < 27 && (r += 27), { v: r, r: e.slice(0, 32), s: e.slice(32, 64) }
          );
        }),
        (t.privateToAddress = function(e) {
          return t.publicToAddress(d(e));
        }),
        (t.isValidAddress = function(e) {
          return /^0x[0-9a-fA-F]{40}$/.test(e);
        }),
        (t.isZeroAddress = function(e) {
          return t.zeroAddress() === t.addHexPrefix(e);
        }),
        (t.toChecksumAddress = function(e) {
          e = t.stripHexPrefix(e).toLowerCase();
          for (
            var r = t.keccak(e).toString('hex'), n = '0x', i = 0;
            i < e.length;
            i++
          )
            parseInt(r[i], 16) >= 8 ? (n += e[i].toUpperCase()) : (n += e[i]);
          return n;
        }),
        (t.isValidChecksumAddress = function(e) {
          return t.isValidAddress(e) && t.toChecksumAddress(e) === e;
        }),
        (t.generateAddress = function(e, r) {
          return (
            (e = t.toBuffer(e)),
            (r = (r = new f(r)).isZero() ? null : c.from(r.toArray())),
            t.rlphash([e, r]).slice(-20)
          );
        }),
        (t.isPrecompiled = function(e) {
          var r = t.unpad(e);
          return 1 === r.length && r[0] >= 1 && r[0] <= 8;
        }),
        (t.addHexPrefix = function(e) {
          return 'string' != typeof e || t.isHexPrefixed(e) ? e : '0x' + e;
        }),
        (t.isValidSignature = function(e, t, r, n) {
          var i = new f(
              '7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0',
              16
            ),
            o = new f(
              'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
              16
            );
          return (
            32 === t.length &&
            32 === r.length &&
            (27 === e || 28 === e) &&
              ((t = new f(t)),
              (r = new f(r)),
              !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) &&
                (!1 !== n || 1 !== new f(r).cmp(i)))
          );
        }),
        (t.baToJSON = function(e) {
          if (c.isBuffer(e)) return '0x' + e.toString('hex');
          if (e instanceof Array) {
            for (var r = [], n = 0; n < e.length; n++) r.push(t.baToJSON(e[n]));
            return r;
          }
        }),
        (t.defineProperties = function(e, r, i) {
          if (
            ((e.raw = []),
            (e._fields = []),
            (e.toJSON = function(r) {
              if (r) {
                var n = {};
                return (
                  e._fields.forEach(function(t) {
                    n[t] = '0x' + e[t].toString('hex');
                  }),
                  n
                );
              }
              return t.baToJSON(this.raw);
            }),
            (e.serialize = function() {
              return s.encode(e.raw);
            }),
            r.forEach(function(r, n) {
              function i() {
                return e.raw[n];
              }
              function o(i) {
                '00' !== (i = t.toBuffer(i)).toString('hex') ||
                  r.allowZero ||
                  (i = c.allocUnsafe(0)),
                  r.allowLess && r.length
                    ? ((i = t.stripZeros(i)),
                      a(
                        r.length >= i.length,
                        'The field ' +
                          r.name +
                          ' must not have more ' +
                          r.length +
                          ' bytes'
                      ))
                    : (r.allowZero && 0 === i.length) ||
                      !r.length ||
                      a(
                        r.length === i.length,
                        'The field ' +
                          r.name +
                          ' must have byte length of ' +
                          r.length
                      ),
                  (e.raw[n] = i);
              }
              e._fields.push(r.name),
                Object.defineProperty(e, r.name, {
                  enumerable: !0,
                  configurable: !0,
                  get: i,
                  set: o
                }),
                r.default && (e[r.name] = r.default),
                r.alias &&
                  Object.defineProperty(e, r.alias, {
                    enumerable: !1,
                    configurable: !0,
                    set: o,
                    get: i
                  });
            }),
            i)
          )
            if (
              ('string' == typeof i && (i = c.from(t.stripHexPrefix(i), 'hex')),
              c.isBuffer(i) && (i = s.decode(i)),
              Array.isArray(i))
            ) {
              if (i.length > e._fields.length)
                throw new Error('wrong number of fields in data');
              i.forEach(function(r, n) {
                e[e._fields[n]] = t.toBuffer(r);
              });
            } else {
              if ('object' !== (void 0 === i ? 'undefined' : n(i)))
                throw new Error('invalid data');
              var o = Object.keys(i);
              r.forEach(function(t) {
                -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]),
                  -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]);
              });
            }
        });
    },
    function(e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function(e) {
          return '[object Array]' == r.call(e);
        };
    },
    function(e, t, r) {
      'use strict';
      (function(t, n) {
        var i = r(39);
        e.exports = m;
        var o,
          a = r(80);
        m.ReadableState = v;
        r(20).EventEmitter;
        var s = function(e, t) {
            return e.listeners(t).length;
          },
          f = r(82),
          u = r(56).Buffer,
          c = t.Uint8Array || function() {};
        var d = Object.create(r(29));
        d.inherits = r(0);
        var h = r(209),
          l = void 0;
        l = h && h.debuglog ? h.debuglog('stream') : function() {};
        var p,
          b = r(210),
          g = r(83);
        d.inherits(m, f);
        var y = ['error', 'close', 'destroy', 'pause', 'resume'];
        function v(e, t) {
          e = e || {};
          var n = t instanceof (o = o || r(17));
          (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
          var i = e.highWaterMark,
            a = e.readableHighWaterMark,
            s = this.objectMode ? 16 : 16384;
          (this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new b()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (p || (p = r(30).StringDecoder),
              (this.decoder = new p(e.encoding)),
              (this.encoding = e.encoding));
        }
        function m(e) {
          if (((o = o || r(17)), !(this instanceof m))) return new m(e);
          (this._readableState = new v(e, this)),
            (this.readable = !0),
            e &&
              ('function' == typeof e.read && (this._read = e.read),
              'function' == typeof e.destroy && (this._destroy = e.destroy)),
            f.call(this);
        }
        function _(e, t, r, n, i) {
          var o,
            a = e._readableState;
          null === t
            ? ((a.reading = !1),
              (function(e, t) {
                if (t.ended) return;
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0), S(e);
              })(e, a))
            : (i ||
                (o = (function(e, t) {
                  var r;
                  (n = t),
                    u.isBuffer(n) ||
                      n instanceof c ||
                      'string' == typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new TypeError('Invalid non-string/buffer chunk'));
                  var n;
                  return r;
                })(a, t)),
              o
                ? e.emit('error', o)
                : a.objectMode || (t && t.length > 0)
                ? ('string' == typeof t ||
                    a.objectMode ||
                    Object.getPrototypeOf(t) === u.prototype ||
                    (t = (function(e) {
                      return u.from(e);
                    })(t)),
                  n
                    ? a.endEmitted
                      ? e.emit(
                          'error',
                          new Error('stream.unshift() after end event')
                        )
                      : w(e, a, t, !0)
                    : a.ended
                    ? e.emit('error', new Error('stream.push() after EOF'))
                    : ((a.reading = !1),
                      a.decoder && !r
                        ? ((t = a.decoder.write(t)),
                          a.objectMode || 0 !== t.length
                            ? w(e, a, t, !1)
                            : T(e, a))
                        : w(e, a, t, !1)))
                : n || (a.reading = !1));
          return (function(e) {
            return (
              !e.ended &&
              (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            );
          })(a);
        }
        function w(e, t, r, n) {
          t.flowing && 0 === t.length && !t.sync
            ? (e.emit('data', r), e.read(0))
            : ((t.length += t.objectMode ? 1 : r.length),
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && S(e)),
            T(e, t);
        }
        Object.defineProperty(m.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
          }
        }),
          (m.prototype.destroy = g.destroy),
          (m.prototype._undestroy = g.undestroy),
          (m.prototype._destroy = function(e, t) {
            this.push(null), t(e);
          }),
          (m.prototype.push = function(e, t) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : 'string' == typeof e &&
                  ((t = t || n.defaultEncoding) !== n.encoding &&
                    ((e = u.from(e, t)), (t = '')),
                  (r = !0)),
              _(this, e, t, !1, r)
            );
          }),
          (m.prototype.unshift = function(e) {
            return _(this, e, null, !0, !1);
          }),
          (m.prototype.isPaused = function() {
            return !1 === this._readableState.flowing;
          }),
          (m.prototype.setEncoding = function(e) {
            return (
              p || (p = r(30).StringDecoder),
              (this._readableState.decoder = new p(e)),
              (this._readableState.encoding = e),
              this
            );
          });
        function E(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e != e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function(e) {
                  return (
                    e >= 8388608
                      ? (e = 8388608)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function S(e) {
          var t = e._readableState;
          (t.needReadable = !1),
            t.emittedReadable ||
              (l('emitReadable', t.flowing),
              (t.emittedReadable = !0),
              t.sync ? i.nextTick(A, e) : A(e));
        }
        function A(e) {
          l('emit readable'), e.emit('readable'), L(e);
        }
        function T(e, t) {
          t.readingMore || ((t.readingMore = !0), i.nextTick(M, e, t));
        }
        function M(e, t) {
          for (
            var r = t.length;
            !t.reading &&
            !t.flowing &&
            !t.ended &&
            t.length < t.highWaterMark &&
            (l('maybeReadMore read 0'), e.read(0), r !== t.length);

          )
            r = t.length;
          t.readingMore = !1;
        }
        function x(e) {
          l('readable nexttick read 0'), e.read(0);
        }
        function I(e, t) {
          t.reading || (l('resume read 0'), e.read(0)),
            (t.resumeScheduled = !1),
            (t.awaitDrain = 0),
            e.emit('resume'),
            L(e),
            t.flowing && !t.reading && e.read(0);
        }
        function L(e) {
          var t = e._readableState;
          for (l('flow', t.flowing); t.flowing && null !== e.read(); );
        }
        function R(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                    ? t.buffer.head.data
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = (function(e, t, r) {
                    var n;
                    e < t.head.data.length
                      ? ((n = t.head.data.slice(0, e)),
                        (t.head.data = t.head.data.slice(e)))
                      : (n =
                          e === t.head.data.length
                            ? t.shift()
                            : r
                            ? (function(e, t) {
                                var r = t.head,
                                  n = 1,
                                  i = r.data;
                                e -= i.length;
                                for (; (r = r.next); ) {
                                  var o = r.data,
                                    a = e > o.length ? o.length : e;
                                  if (
                                    (a === o.length
                                      ? (i += o)
                                      : (i += o.slice(0, e)),
                                    0 === (e -= a))
                                  ) {
                                    a === o.length
                                      ? (++n,
                                        r.next
                                          ? (t.head = r.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = r), (r.data = o.slice(a)));
                                    break;
                                  }
                                  ++n;
                                }
                                return (t.length -= n), i;
                              })(e, t)
                            : (function(e, t) {
                                var r = u.allocUnsafe(e),
                                  n = t.head,
                                  i = 1;
                                n.data.copy(r), (e -= n.data.length);
                                for (; (n = n.next); ) {
                                  var o = n.data,
                                    a = e > o.length ? o.length : e;
                                  if (
                                    (o.copy(r, r.length - e, 0, a),
                                    0 === (e -= a))
                                  ) {
                                    a === o.length
                                      ? (++i,
                                        n.next
                                          ? (t.head = n.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = n), (n.data = o.slice(a)));
                                    break;
                                  }
                                  ++i;
                                }
                                return (t.length -= i), r;
                              })(e, t));
                    return n;
                  })(e, t.buffer, t.decoder)),
              r);
          var r;
        }
        function P(e) {
          var t = e._readableState;
          if (t.length > 0)
            throw new Error('"endReadable()" called on non-empty stream');
          t.endEmitted || ((t.ended = !0), i.nextTick(k, t, e));
        }
        function k(e, t) {
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
        }
        function N(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        (m.prototype.read = function(e) {
          l('read', e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              (t.length >= t.highWaterMark || t.ended))
          )
            return (
              l('read: emitReadable', t.length, t.ended),
              0 === t.length && t.ended ? P(this) : S(this),
              null
            );
          if (0 === (e = E(e, t)) && t.ended)
            return 0 === t.length && P(this), null;
          var n,
            i = t.needReadable;
          return (
            l('need readable', i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              l('length less than watermark', (i = !0)),
            t.ended || t.reading
              ? l('reading or ended', (i = !1))
              : i &&
                (l('do read'),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = E(r, t))),
            null === (n = e > 0 ? R(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : (t.length -= e),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)),
            null !== n && this.emit('data', n),
            n
          );
        }),
          (m.prototype._read = function(e) {
            this.emit('error', new Error('_read() is not implemented'));
          }),
          (m.prototype.pipe = function(e, t) {
            var r = this,
              o = this._readableState;
            switch (o.pipesCount) {
              case 0:
                o.pipes = e;
                break;
              case 1:
                o.pipes = [o.pipes, e];
                break;
              default:
                o.pipes.push(e);
            }
            (o.pipesCount += 1), l('pipe count=%d opts=%j', o.pipesCount, t);
            var f =
              (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? c : m;
            function u(t, n) {
              l('onunpipe'),
                t === r &&
                  n &&
                  !1 === n.hasUnpiped &&
                  ((n.hasUnpiped = !0),
                  l('cleanup'),
                  e.removeListener('close', y),
                  e.removeListener('finish', v),
                  e.removeListener('drain', d),
                  e.removeListener('error', g),
                  e.removeListener('unpipe', u),
                  r.removeListener('end', c),
                  r.removeListener('end', m),
                  r.removeListener('data', b),
                  (h = !0),
                  !o.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    d());
            }
            function c() {
              l('onend'), e.end();
            }
            o.endEmitted ? i.nextTick(f) : r.once('end', f), e.on('unpipe', u);
            var d = (function(e) {
              return function() {
                var t = e._readableState;
                l('pipeOnDrain', t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    s(e, 'data') &&
                    ((t.flowing = !0), L(e));
              };
            })(r);
            e.on('drain', d);
            var h = !1;
            var p = !1;
            function b(t) {
              l('ondata'),
                (p = !1),
                !1 !== e.write(t) ||
                  p ||
                  (((1 === o.pipesCount && o.pipes === e) ||
                    (o.pipesCount > 1 && -1 !== N(o.pipes, e))) &&
                    !h &&
                    (l(
                      'false write response, pause',
                      r._readableState.awaitDrain
                    ),
                    r._readableState.awaitDrain++,
                    (p = !0)),
                  r.pause());
            }
            function g(t) {
              l('onerror', t),
                m(),
                e.removeListener('error', g),
                0 === s(e, 'error') && e.emit('error', t);
            }
            function y() {
              e.removeListener('finish', v), m();
            }
            function v() {
              l('onfinish'), e.removeListener('close', y), m();
            }
            function m() {
              l('unpipe'), r.unpipe(e);
            }
            return (
              r.on('data', b),
              (function(e, t, r) {
                if ('function' == typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events[t]
                  ? a(e._events[t])
                    ? e._events[t].unshift(r)
                    : (e._events[t] = [r, e._events[t]])
                  : e.on(t, r);
              })(e, 'error', g),
              e.once('close', y),
              e.once('finish', v),
              e.emit('pipe', r),
              o.flowing || (l('pipe resume'), r.resume()),
              e
            );
          }),
          (m.prototype.unpipe = function(e) {
            var t = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit('unpipe', this, r)),
                this
              );
            if (!e) {
              var n = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r);
              return this;
            }
            var a = N(t.pipes, e);
            return (
              -1 === a ||
                (t.pipes.splice(a, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit('unpipe', this, r)),
              this
            );
          }),
          (m.prototype.on = function(e, t) {
            var r = f.prototype.on.call(this, e, t);
            if ('data' === e)
              !1 !== this._readableState.flowing && this.resume();
            else if ('readable' === e) {
              var n = this._readableState;
              n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.emittedReadable = !1),
                n.reading ? n.length && S(this) : i.nextTick(x, this));
            }
            return r;
          }),
          (m.prototype.addListener = m.prototype.on),
          (m.prototype.resume = function() {
            var e = this._readableState;
            return (
              e.flowing ||
                (l('resume'),
                (e.flowing = !0),
                (function(e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), i.nextTick(I, e, t));
                })(this, e)),
              this
            );
          }),
          (m.prototype.pause = function() {
            return (
              l('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (l('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              this
            );
          }),
          (m.prototype.wrap = function(e) {
            var t = this,
              r = this._readableState,
              n = !1;
            for (var i in (e.on('end', function() {
              if ((l('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on('data', function(i) {
              (l('wrapped data'),
              r.decoder && (i = r.decoder.write(i)),
              r.objectMode && null == i) ||
                ((r.objectMode || (i && i.length)) &&
                  (t.push(i) || ((n = !0), e.pause())));
            }),
            e))
              void 0 === this[i] &&
                'function' == typeof e[i] &&
                (this[i] = (function(t) {
                  return function() {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < y.length; o++)
              e.on(y[o], this.emit.bind(this, y[o]));
            return (
              (this._read = function(t) {
                l('wrapped _read', t), n && ((n = !1), e.resume());
              }),
              this
            );
          }),
          Object.defineProperty(m.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._readableState.highWaterMark;
            }
          }),
          (m._fromList = R);
      }.call(this, r(11), r(7)));
    },
    function(e, t, r) {
      e.exports = r(20).EventEmitter;
    },
    function(e, t, r) {
      'use strict';
      var n = r(39);
      function i(e, t) {
        e.emit('error', t);
      }
      e.exports = {
        destroy: function(e, t) {
          var r = this,
            o = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed;
          return o || a
            ? (t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  n.nextTick(i, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function(e) {
                !t && e
                  ? (n.nextTick(i, r, e),
                    r._writableState && (r._writableState.errorEmitted = !0))
                  : t && t(e);
              }),
              this);
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        }
      };
    },
    function(e, t, r) {
      (function(t) {
        function r(e) {
          try {
            if (!t.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          var r = t.localStorage[e];
          return null != r && 'true' === String(r).toLowerCase();
        }
        e.exports = function(e, t) {
          if (r('noDeprecation')) return e;
          var n = !1;
          return function() {
            if (!n) {
              if (r('throwDeprecation')) throw new Error(t);
              r('traceDeprecation') ? console.trace(t) : console.warn(t),
                (n = !0);
            }
            return e.apply(this, arguments);
          };
        };
      }.call(this, r(11)));
    },
    function(e, t, r) {
      'use strict';
      e.exports = a;
      var n = r(17),
        i = Object.create(r(29));
      function o(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          );
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        n.call(this, e),
          (this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform &&
              (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', s);
      }
      function s() {
        var e = this;
        'function' == typeof this._flush
          ? this._flush(function(t, r) {
              f(e, t, r);
            })
          : f(this, null, null);
      }
      function f(e, t, r) {
        if (t) return e.emit('error', t);
        if ((null != r && e.push(r), e._writableState.length))
          throw new Error('Calling transform done when ws.length != 0');
        if (e._transformState.transforming)
          throw new Error('Calling transform done when still transforming');
        return e.push(null);
      }
      (i.inherits = r(0)),
        i.inherits(a, n),
        (a.prototype.push = function(e, t) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, e, t)
          );
        }),
        (a.prototype._transform = function(e, t, r) {
          throw new Error('_transform() is not implemented');
        }),
        (a.prototype._write = function(e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (a.prototype._read = function(e) {
          var t = this._transformState;
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0);
        }),
        (a.prototype._destroy = function(e, t) {
          var r = this;
          n.prototype._destroy.call(this, e, function(e) {
            t(e), r.emit('close');
          });
        });
    },
    function(e) {
      e.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}'
      );
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(226).Transform;
      function o(e) {
        i.call(this),
          (this._block = n.allocUnsafe(e)),
          (this._blockSize = e),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(0)(o, i),
        (o.prototype._transform = function(e, t, r) {
          var n = null;
          try {
            this.update(e, t);
          } catch (e) {
            n = e;
          }
          r(n);
        }),
        (o.prototype._flush = function(e) {
          var t = null;
          try {
            this.push(this.digest());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (o.prototype.update = function(e, t) {
          if (
            ((function(e, t) {
              if (!n.isBuffer(e) && 'string' != typeof e)
                throw new TypeError(t + ' must be a string or a buffer');
            })(e, 'Data'),
            this._finalized)
          )
            throw new Error('Digest already called');
          n.isBuffer(e) || (e = n.from(e, t));
          for (
            var r = this._block, i = 0;
            this._blockOffset + e.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = e[i++];
            this._update(), (this._blockOffset = 0);
          }
          for (; i < e.length; ) r[this._blockOffset++] = e[i++];
          for (var a = 0, s = 8 * e.length; s > 0; ++a)
            (this._length[a] += s),
              (s = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function() {
          throw new Error('_update is not implemented');
        }),
        (o.prototype.digest = function(e) {
          if (this._finalized) throw new Error('Digest already called');
          this._finalized = !0;
          var t = this._digest();
          void 0 !== e && (t = t.toString(e)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return t;
        }),
        (o.prototype._digest = function() {
          throw new Error('_digest is not implemented');
        }),
        (e.exports = o);
    },
    function(e, t, r) {
      'use strict';
      (function(t, n) {
        var i;
        (e.exports = T), (T.ReadableState = A);
        r(20).EventEmitter;
        var o = function(e, t) {
            return e.listeners(t).length;
          },
          a = r(89),
          s = r(4).Buffer,
          f = t.Uint8Array || function() {};
        var u,
          c = r(227);
        u = c && c.debuglog ? c.debuglog('stream') : function() {};
        var d,
          h,
          l,
          p = r(228),
          b = r(90),
          g = r(91).getHighWaterMark,
          y = r(21).codes,
          v = y.ERR_INVALID_ARG_TYPE,
          m = y.ERR_STREAM_PUSH_AFTER_EOF,
          _ = y.ERR_METHOD_NOT_IMPLEMENTED,
          w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(0)(T, a);
        var E = b.errorOrDestroy,
          S = ['error', 'close', 'destroy', 'pause', 'resume'];
        function A(e, t, n) {
          (i = i || r(22)),
            (e = e || {}),
            'boolean' != typeof n && (n = t instanceof i),
            (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = g(this, e, 'readableHighWaterMark', n)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (d || (d = r(30).StringDecoder),
              (this.decoder = new d(e.encoding)),
              (this.encoding = e.encoding));
        }
        function T(e) {
          if (((i = i || r(22)), !(this instanceof T))) return new T(e);
          var t = this instanceof i;
          (this._readableState = new A(e, this, t)),
            (this.readable = !0),
            e &&
              ('function' == typeof e.read && (this._read = e.read),
              'function' == typeof e.destroy && (this._destroy = e.destroy)),
            a.call(this);
        }
        function M(e, t, r, n, i) {
          u('readableAddChunk', t);
          var o,
            a = e._readableState;
          if (null === t)
            (a.reading = !1),
              (function(e, t) {
                if ((u('onEofChunk'), t.ended)) return;
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0),
                  t.sync
                    ? L(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable || ((t.emittedReadable = !0), R(e)));
              })(e, a);
          else if (
            (i ||
              (o = (function(e, t) {
                var r;
                (n = t),
                  s.isBuffer(n) ||
                    n instanceof f ||
                    'string' == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new v('chunk', ['string', 'Buffer', 'Uint8Array'], t));
                var n;
                return r;
              })(a, t)),
            o)
          )
            E(e, o);
          else if (a.objectMode || (t && t.length > 0))
            if (
              ('string' == typeof t ||
                a.objectMode ||
                Object.getPrototypeOf(t) === s.prototype ||
                (t = (function(e) {
                  return s.from(e);
                })(t)),
              n)
            )
              a.endEmitted ? E(e, new w()) : x(e, a, t, !0);
            else if (a.ended) E(e, new m());
            else {
              if (a.destroyed) return !1;
              (a.reading = !1),
                a.decoder && !r
                  ? ((t = a.decoder.write(t)),
                    a.objectMode || 0 !== t.length ? x(e, a, t, !1) : P(e, a))
                  : x(e, a, t, !1);
            }
          else n || ((a.reading = !1), P(e, a));
          return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
        }
        function x(e, t, r, n) {
          t.flowing && 0 === t.length && !t.sync
            ? ((t.awaitDrain = 0), e.emit('data', r))
            : ((t.length += t.objectMode ? 1 : r.length),
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && L(e)),
            P(e, t);
        }
        Object.defineProperty(T.prototype, 'destroyed', {
          enumerable: !1,
          get: function() {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
          }
        }),
          (T.prototype.destroy = b.destroy),
          (T.prototype._undestroy = b.undestroy),
          (T.prototype._destroy = function(e, t) {
            t(e);
          }),
          (T.prototype.push = function(e, t) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : 'string' == typeof e &&
                  ((t = t || n.defaultEncoding) !== n.encoding &&
                    ((e = s.from(e, t)), (t = '')),
                  (r = !0)),
              M(this, e, t, !1, r)
            );
          }),
          (T.prototype.unshift = function(e) {
            return M(this, e, null, !0, !1);
          }),
          (T.prototype.isPaused = function() {
            return !1 === this._readableState.flowing;
          }),
          (T.prototype.setEncoding = function(e) {
            d || (d = r(30).StringDecoder);
            var t = new d(e);
            (this._readableState.decoder = t),
              (this._readableState.encoding = this._readableState.decoder.encoding);
            for (var n = this._readableState.buffer.head, i = ''; null !== n; )
              (i += t.write(n.data)), (n = n.next);
            return (
              this._readableState.buffer.clear(),
              '' !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        function I(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e != e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function(e) {
                  return (
                    e >= 1073741824
                      ? (e = 1073741824)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function L(e) {
          var t = e._readableState;
          u('emitReadable', t.needReadable, t.emittedReadable),
            (t.needReadable = !1),
            t.emittedReadable ||
              (u('emitReadable', t.flowing),
              (t.emittedReadable = !0),
              n.nextTick(R, e));
        }
        function R(e) {
          var t = e._readableState;
          u('emitReadable_', t.destroyed, t.length, t.ended),
            t.destroyed ||
              (!t.length && !t.ended) ||
              (e.emit('readable'), (t.emittedReadable = !1)),
            (t.needReadable =
              !t.flowing && !t.ended && t.length <= t.highWaterMark),
            B(e);
        }
        function P(e, t) {
          t.readingMore || ((t.readingMore = !0), n.nextTick(k, e, t));
        }
        function k(e, t) {
          for (
            ;
            !t.reading &&
            !t.ended &&
            (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

          ) {
            var r = t.length;
            if ((u('maybeReadMore read 0'), e.read(0), r === t.length)) break;
          }
          t.readingMore = !1;
        }
        function N(e) {
          var t = e._readableState;
          (t.readableListening = e.listenerCount('readable') > 0),
            t.resumeScheduled && !t.paused
              ? (t.flowing = !0)
              : e.listenerCount('data') > 0 && e.resume();
        }
        function C(e) {
          u('readable nexttick read 0'), e.read(0);
        }
        function O(e, t) {
          u('resume', t.reading),
            t.reading || e.read(0),
            (t.resumeScheduled = !1),
            e.emit('resume'),
            B(e),
            t.flowing && !t.reading && e.read(0);
        }
        function B(e) {
          var t = e._readableState;
          for (u('flow', t.flowing); t.flowing && null !== e.read(); );
        }
        function j(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                    ? t.buffer.first()
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = t.buffer.consume(e, t.decoder)),
              r);
          var r;
        }
        function D(e) {
          var t = e._readableState;
          u('endReadable', t.endEmitted),
            t.endEmitted || ((t.ended = !0), n.nextTick(z, t, e));
        }
        function z(e, t) {
          if (
            (u('endReadableNT', e.endEmitted, e.length),
            !e.endEmitted &&
              0 === e.length &&
              ((e.endEmitted = !0),
              (t.readable = !1),
              t.emit('end'),
              e.autoDestroy))
          ) {
            var r = t._writableState;
            (!r || (r.autoDestroy && r.finished)) && t.destroy();
          }
        }
        function U(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        (T.prototype.read = function(e) {
          u('read', e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              ((0 !== t.highWaterMark
                ? t.length >= t.highWaterMark
                : t.length > 0) ||
                t.ended))
          )
            return (
              u('read: emitReadable', t.length, t.ended),
              0 === t.length && t.ended ? D(this) : L(this),
              null
            );
          if (0 === (e = I(e, t)) && t.ended)
            return 0 === t.length && D(this), null;
          var n,
            i = t.needReadable;
          return (
            u('need readable', i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              u('length less than watermark', (i = !0)),
            t.ended || t.reading
              ? u('reading or ended', (i = !1))
              : i &&
                (u('do read'),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = I(r, t))),
            null === (n = e > 0 ? j(e, t) : null)
              ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
              : ((t.length -= e), (t.awaitDrain = 0)),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && D(this)),
            null !== n && this.emit('data', n),
            n
          );
        }),
          (T.prototype._read = function(e) {
            E(this, new _('_read()'));
          }),
          (T.prototype.pipe = function(e, t) {
            var r = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = e;
                break;
              case 1:
                i.pipes = [i.pipes, e];
                break;
              default:
                i.pipes.push(e);
            }
            (i.pipesCount += 1), u('pipe count=%d opts=%j', i.pipesCount, t);
            var a =
              (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? f : g;
            function s(t, n) {
              u('onunpipe'),
                t === r &&
                  n &&
                  !1 === n.hasUnpiped &&
                  ((n.hasUnpiped = !0),
                  u('cleanup'),
                  e.removeListener('close', p),
                  e.removeListener('finish', b),
                  e.removeListener('drain', c),
                  e.removeListener('error', l),
                  e.removeListener('unpipe', s),
                  r.removeListener('end', f),
                  r.removeListener('end', g),
                  r.removeListener('data', h),
                  (d = !0),
                  !i.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    c());
            }
            function f() {
              u('onend'), e.end();
            }
            i.endEmitted ? n.nextTick(a) : r.once('end', a), e.on('unpipe', s);
            var c = (function(e) {
              return function() {
                var t = e._readableState;
                u('pipeOnDrain', t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    o(e, 'data') &&
                    ((t.flowing = !0), B(e));
              };
            })(r);
            e.on('drain', c);
            var d = !1;
            function h(t) {
              u('ondata');
              var n = e.write(t);
              u('dest.write', n),
                !1 === n &&
                  (((1 === i.pipesCount && i.pipes === e) ||
                    (i.pipesCount > 1 && -1 !== U(i.pipes, e))) &&
                    !d &&
                    (u('false write response, pause', i.awaitDrain),
                    i.awaitDrain++),
                  r.pause());
            }
            function l(t) {
              u('onerror', t),
                g(),
                e.removeListener('error', l),
                0 === o(e, 'error') && E(e, t);
            }
            function p() {
              e.removeListener('finish', b), g();
            }
            function b() {
              u('onfinish'), e.removeListener('close', p), g();
            }
            function g() {
              u('unpipe'), r.unpipe(e);
            }
            return (
              r.on('data', h),
              (function(e, t, r) {
                if ('function' == typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events[t]
                  ? Array.isArray(e._events[t])
                    ? e._events[t].unshift(r)
                    : (e._events[t] = [r, e._events[t]])
                  : e.on(t, r);
              })(e, 'error', l),
              e.once('close', p),
              e.once('finish', b),
              e.emit('pipe', r),
              i.flowing || (u('pipe resume'), r.resume()),
              e
            );
          }),
          (T.prototype.unpipe = function(e) {
            var t = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit('unpipe', this, r)),
                this
              );
            if (!e) {
              var n = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++)
                n[o].emit('unpipe', this, { hasUnpiped: !1 });
              return this;
            }
            var a = U(t.pipes, e);
            return (
              -1 === a ||
                (t.pipes.splice(a, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit('unpipe', this, r)),
              this
            );
          }),
          (T.prototype.on = function(e, t) {
            var r = a.prototype.on.call(this, e, t),
              i = this._readableState;
            return (
              'data' === e
                ? ((i.readableListening = this.listenerCount('readable') > 0),
                  !1 !== i.flowing && this.resume())
                : 'readable' === e &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    u('on readable', i.length, i.reading),
                    i.length ? L(this) : i.reading || n.nextTick(C, this))),
              r
            );
          }),
          (T.prototype.addListener = T.prototype.on),
          (T.prototype.removeListener = function(e, t) {
            var r = a.prototype.removeListener.call(this, e, t);
            return 'readable' === e && n.nextTick(N, this), r;
          }),
          (T.prototype.removeAllListeners = function(e) {
            var t = a.prototype.removeAllListeners.apply(this, arguments);
            return ('readable' !== e && void 0 !== e) || n.nextTick(N, this), t;
          }),
          (T.prototype.resume = function() {
            var e = this._readableState;
            return (
              e.flowing ||
                (u('resume'),
                (e.flowing = !e.readableListening),
                (function(e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), n.nextTick(O, e, t));
                })(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (T.prototype.pause = function() {
            return (
              u('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (u('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              (this._readableState.paused = !0),
              this
            );
          }),
          (T.prototype.wrap = function(e) {
            var t = this,
              r = this._readableState,
              n = !1;
            for (var i in (e.on('end', function() {
              if ((u('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on('data', function(i) {
              (u('wrapped data'),
              r.decoder && (i = r.decoder.write(i)),
              r.objectMode && null == i) ||
                ((r.objectMode || (i && i.length)) &&
                  (t.push(i) || ((n = !0), e.pause())));
            }),
            e))
              void 0 === this[i] &&
                'function' == typeof e[i] &&
                (this[i] = (function(t) {
                  return function() {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < S.length; o++)
              e.on(S[o], this.emit.bind(this, S[o]));
            return (
              (this._read = function(t) {
                u('wrapped _read', t), n && ((n = !1), e.resume());
              }),
              this
            );
          }),
          'function' == typeof Symbol &&
            (T.prototype[Symbol.asyncIterator] = function() {
              return void 0 === h && (h = r(230)), h(this);
            }),
          Object.defineProperty(T.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._readableState.highWaterMark;
            }
          }),
          Object.defineProperty(T.prototype, 'readableBuffer', {
            enumerable: !1,
            get: function() {
              return this._readableState && this._readableState.buffer;
            }
          }),
          Object.defineProperty(T.prototype, 'readableFlowing', {
            enumerable: !1,
            get: function() {
              return this._readableState.flowing;
            },
            set: function(e) {
              this._readableState && (this._readableState.flowing = e);
            }
          }),
          (T._fromList = j),
          Object.defineProperty(T.prototype, 'readableLength', {
            enumerable: !1,
            get: function() {
              return this._readableState.length;
            }
          }),
          'function' == typeof Symbol &&
            (T.from = function(e, t) {
              return void 0 === l && (l = r(231)), l(T, e, t);
            });
      }.call(this, r(11), r(7)));
    },
    function(e, t, r) {
      e.exports = r(20).EventEmitter;
    },
    function(e, t, r) {
      'use strict';
      (function(t) {
        function r(e, t) {
          i(e, t), n(e);
        }
        function n(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit('close');
        }
        function i(e, t) {
          e.emit('error', t);
        }
        e.exports = {
          destroy: function(e, o) {
            var a = this,
              s = this._readableState && this._readableState.destroyed,
              f = this._writableState && this._writableState.destroyed;
            return s || f
              ? (o
                  ? o(e)
                  : e &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        t.nextTick(i, this, e))
                      : t.nextTick(i, this, e)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function(e) {
                  !o && e
                    ? a._writableState
                      ? a._writableState.errorEmitted
                        ? t.nextTick(n, a)
                        : ((a._writableState.errorEmitted = !0),
                          t.nextTick(r, a, e))
                      : t.nextTick(r, a, e)
                    : o
                    ? (t.nextTick(n, a), o(e))
                    : t.nextTick(n, a);
                }),
                this);
          },
          undestroy: function() {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function(e, t) {
            var r = e._readableState,
              n = e._writableState;
            (r && r.autoDestroy) || (n && n.autoDestroy)
              ? e.destroy(t)
              : e.emit('error', t);
          }
        };
      }.call(this, r(7)));
    },
    function(e, t, r) {
      'use strict';
      var n = r(21).codes.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function(e, t, r, i) {
          var o = (function(e, t, r) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null;
          })(t, i, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(i ? r : 'highWaterMark', o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        }
      };
    },
    function(e, t, r) {
      'use strict';
      (function(t, n) {
        function i(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(e, t, r) {
                var n = e.entry;
                e.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  t.pendingcb--, i(r), (n = n.next);
                }
                t.corkedRequestsFree.next = e;
              })(t, e);
            });
        }
        var o;
        (e.exports = T), (T.WritableState = A);
        var a = { deprecate: r(84) },
          s = r(89),
          f = r(4).Buffer,
          u = t.Uint8Array || function() {};
        var c,
          d = r(90),
          h = r(91).getHighWaterMark,
          l = r(21).codes,
          p = l.ERR_INVALID_ARG_TYPE,
          b = l.ERR_METHOD_NOT_IMPLEMENTED,
          g = l.ERR_MULTIPLE_CALLBACK,
          y = l.ERR_STREAM_CANNOT_PIPE,
          v = l.ERR_STREAM_DESTROYED,
          m = l.ERR_STREAM_NULL_VALUES,
          _ = l.ERR_STREAM_WRITE_AFTER_END,
          w = l.ERR_UNKNOWN_ENCODING,
          E = d.errorOrDestroy;
        function S() {}
        function A(e, t, a) {
          (o = o || r(22)),
            (e = e || {}),
            'boolean' != typeof a && (a = t instanceof o),
            (this.objectMode = !!e.objectMode),
            a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = h(this, e, 'writableHighWaterMark', a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var s = !1 === e.decodeStrings;
          (this.decodeStrings = !s),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(e) {
              !(function(e, t) {
                var r = e._writableState,
                  i = r.sync,
                  o = r.writecb;
                if ('function' != typeof o) throw new g();
                if (
                  ((function(e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function(e, t, r, i, o) {
                    --t.pendingcb,
                      r
                        ? (n.nextTick(o, i),
                          n.nextTick(P, e, t),
                          (e._writableState.errorEmitted = !0),
                          E(e, i))
                        : (o(i),
                          (e._writableState.errorEmitted = !0),
                          E(e, i),
                          P(e, t));
                  })(e, r, i, t, o);
                else {
                  var a = L(r) || e.destroyed;
                  a ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    I(e, r),
                    i ? n.nextTick(x, e, r, a, o) : x(e, r, a, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function T(e) {
          var t = this instanceof (o = o || r(22));
          if (!t && !c.call(T, this)) return new T(e);
          (this._writableState = new A(e, this, t)),
            (this.writable = !0),
            e &&
              ('function' == typeof e.write && (this._write = e.write),
              'function' == typeof e.writev && (this._writev = e.writev),
              'function' == typeof e.destroy && (this._destroy = e.destroy),
              'function' == typeof e.final && (this._final = e.final)),
            s.call(this);
        }
        function M(e, t, r, n, i, o, a) {
          (t.writelen = n),
            (t.writecb = a),
            (t.writing = !0),
            (t.sync = !0),
            t.destroyed
              ? t.onwrite(new v('write'))
              : r
              ? e._writev(i, t.onwrite)
              : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }
        function x(e, t, r, n) {
          r ||
            (function(e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit('drain'));
            })(e, t),
            t.pendingcb--,
            n(),
            P(e, t);
        }
        function I(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount,
              o = new Array(n),
              a = t.corkedRequestsFree;
            a.entry = r;
            for (var s = 0, f = !0; r; )
              (o[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
            (o.allBuffers = f),
              M(e, t, !0, t.length, o, '', a.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              a.next
                ? ((t.corkedRequestsFree = a.next), (a.next = null))
                : (t.corkedRequestsFree = new i(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var u = r.chunk,
                c = r.encoding,
                d = r.callback;
              if (
                (M(e, t, !1, t.objectMode ? 1 : u.length, u, c, d),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }
        function L(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function R(e, t) {
          e._final(function(r) {
            t.pendingcb--,
              r && E(e, r),
              (t.prefinished = !0),
              e.emit('prefinish'),
              P(e, t);
          });
        }
        function P(e, t) {
          var r = L(t);
          if (
            r &&
            ((function(e, t) {
              t.prefinished ||
                t.finalCalled ||
                ('function' != typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit('prefinish'))
                  : (t.pendingcb++, (t.finalCalled = !0), n.nextTick(R, e, t)));
            })(e, t),
            0 === t.pendingcb &&
              ((t.finished = !0), e.emit('finish'), t.autoDestroy))
          ) {
            var i = e._readableState;
            (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
          }
          return r;
        }
        r(0)(T, s),
          (A.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function() {
            try {
              Object.defineProperty(A.prototype, 'buffer', {
                get: a.deprecate(
                  function() {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                )
              });
            } catch (e) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((c = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(T, Symbol.hasInstance, {
                value: function(e) {
                  return (
                    !!c.call(this, e) ||
                    (this === T && e && e._writableState instanceof A)
                  );
                }
              }))
            : (c = function(e) {
                return e instanceof this;
              }),
          (T.prototype.pipe = function() {
            E(this, new y());
          }),
          (T.prototype.write = function(e, t, r) {
            var i,
              o = this._writableState,
              a = !1,
              s = !o.objectMode && ((i = e), f.isBuffer(i) || i instanceof u);
            return (
              s &&
                !f.isBuffer(e) &&
                (e = (function(e) {
                  return f.from(e);
                })(e)),
              'function' == typeof t && ((r = t), (t = null)),
              s ? (t = 'buffer') : t || (t = o.defaultEncoding),
              'function' != typeof r && (r = S),
              o.ending
                ? (function(e, t) {
                    var r = new _();
                    E(e, r), n.nextTick(t, r);
                  })(this, r)
                : (s ||
                    (function(e, t, r, i) {
                      var o;
                      return (
                        null === r
                          ? (o = new m())
                          : 'string' == typeof r ||
                            t.objectMode ||
                            (o = new p('chunk', ['string', 'Buffer'], r)),
                        !o || (E(e, o), n.nextTick(i, o), !1)
                      );
                    })(this, o, e, r)) &&
                  (o.pendingcb++,
                  (a = (function(e, t, r, n, i, o) {
                    if (!r) {
                      var a = (function(e, t, r) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          'string' != typeof t ||
                          (t = f.from(t, r));
                        return t;
                      })(t, n, i);
                      n !== a && ((r = !0), (i = 'buffer'), (n = a));
                    }
                    var s = t.objectMode ? 1 : n.length;
                    t.length += s;
                    var u = t.length < t.highWaterMark;
                    u || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var c = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null
                      }),
                        c
                          ? (c.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else M(e, t, !1, s, n, i, o);
                    return u;
                  })(this, o, s, e, t, r))),
              a
            );
          }),
          (T.prototype.cork = function() {
            this._writableState.corked++;
          }),
          (T.prototype.uncork = function() {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                I(this, e));
          }),
          (T.prototype.setDefaultEncoding = function(e) {
            if (
              ('string' == typeof e && (e = e.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw'
                ].indexOf((e + '').toLowerCase()) > -1
              ))
            )
              throw new w(e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(T.prototype, 'writableBuffer', {
            enumerable: !1,
            get: function() {
              return this._writableState && this._writableState.getBuffer();
            }
          }),
          Object.defineProperty(T.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark;
            }
          }),
          (T.prototype._write = function(e, t, r) {
            r(new b('_write()'));
          }),
          (T.prototype._writev = null),
          (T.prototype.end = function(e, t, r) {
            var i = this._writableState;
            return (
              'function' == typeof e
                ? ((r = e), (e = null), (t = null))
                : 'function' == typeof t && ((r = t), (t = null)),
              null != e && this.write(e, t),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function(e, t, r) {
                  (t.ending = !0),
                    P(e, t),
                    r && (t.finished ? n.nextTick(r) : e.once('finish', r));
                  (t.ended = !0), (e.writable = !1);
                })(this, i, r),
              this
            );
          }),
          Object.defineProperty(T.prototype, 'writableLength', {
            enumerable: !1,
            get: function() {
              return this._writableState.length;
            }
          }),
          Object.defineProperty(T.prototype, 'destroyed', {
            enumerable: !1,
            get: function() {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function(e) {
              this._writableState && (this._writableState.destroyed = e);
            }
          }),
          (T.prototype.destroy = d.destroy),
          (T.prototype._undestroy = d.undestroy),
          (T.prototype._destroy = function(e, t) {
            t(e);
          });
      }.call(this, r(11), r(7)));
    },
    function(e, t, r) {
      'use strict';
      e.exports = c;
      var n = r(21).codes,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(22);
      function u(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit('error', new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        f.call(this, e),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform &&
              (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', d);
      }
      function d() {
        var e = this;
        'function' != typeof this._flush || this._readableState.destroyed
          ? h(this, null, null)
          : this._flush(function(t, r) {
              h(e, t, r);
            });
      }
      function h(e, t, r) {
        if (t) return e.emit('error', t);
        if ((null != r && e.push(r), e._writableState.length)) throw new s();
        if (e._transformState.transforming) throw new a();
        return e.push(null);
      }
      r(0)(c, f),
        (c.prototype.push = function(e, t) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, e, t)
          );
        }),
        (c.prototype._transform = function(e, t, r) {
          r(new i('_transform()'));
        }),
        (c.prototype._write = function(e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function(e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (c.prototype._destroy = function(e, t) {
          f.prototype._destroy.call(this, e, function(e) {
            t(e);
          });
        });
    },
    function(e, t, r) {
      var n = r(0),
        i = r(23),
        o = r(1).Buffer,
        a = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ],
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function c(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function d(e) {
        return (
          ((e >>> 2) | (e << 30)) ^
          ((e >>> 13) | (e << 19)) ^
          ((e >>> 22) | (e << 10))
        );
      }
      function h(e) {
        return (
          ((e >>> 6) | (e << 26)) ^
          ((e >>> 11) | (e << 21)) ^
          ((e >>> 25) | (e << 7))
        );
      }
      function l(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (f.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              p = 0 | this._f,
              b = 0 | this._g,
              g = 0 | this._h,
              y = 0;
            y < 16;
            ++y
          )
            r[y] = e.readInt32BE(4 * y);
          for (; y < 64; ++y)
            r[y] =
              0 |
              (((((t = r[y - 2]) >>> 17) | (t << 15)) ^
                ((t >>> 19) | (t << 13)) ^
                (t >>> 10)) +
                r[y - 7] +
                l(r[y - 15]) +
                r[y - 16]);
          for (var v = 0; v < 64; ++v) {
            var m = (g + h(f) + u(f, p, b) + a[v] + r[v]) | 0,
              _ = (d(n) + c(n, i, o)) | 0;
            (g = b),
              (b = p),
              (p = f),
              (f = (s + m) | 0),
              (s = o),
              (o = i),
              (i = n),
              (n = (m + _) | 0);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (g + this._h) | 0);
        }),
        (f.prototype._hash = function() {
          var e = o.allocUnsafe(32);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(0),
        i = r(23),
        o = r(1).Buffer,
        a = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ],
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), i.call(this, 128, 112);
      }
      function u(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function c(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function d(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function h(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        );
      }
      function l(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
      }
      function p(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^
          ((e >>> 8) | (t << 24)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function b(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
      }
      function g(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^
          ((t >>> 29) | (e << 3)) ^
          ((e >>> 6) | (t << 26))
        );
      }
      function y(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0;
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (f.prototype._update = function(e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              s = 0 | this._eh,
              f = 0 | this._fh,
              v = 0 | this._gh,
              m = 0 | this._hh,
              _ = 0 | this._al,
              w = 0 | this._bl,
              E = 0 | this._cl,
              S = 0 | this._dl,
              A = 0 | this._el,
              T = 0 | this._fl,
              M = 0 | this._gl,
              x = 0 | this._hl,
              I = 0;
            I < 32;
            I += 2
          )
            (t[I] = e.readInt32BE(4 * I)),
              (t[I + 1] = e.readInt32BE(4 * I + 4));
          for (; I < 160; I += 2) {
            var L = t[I - 30],
              R = t[I - 30 + 1],
              P = l(L, R),
              k = p(R, L),
              N = b((L = t[I - 4]), (R = t[I - 4 + 1])),
              C = g(R, L),
              O = t[I - 14],
              B = t[I - 14 + 1],
              j = t[I - 32],
              D = t[I - 32 + 1],
              z = (k + B) | 0,
              U = (P + O + y(z, k)) | 0;
            (U =
              ((U = (U + N + y((z = (z + C) | 0), C)) | 0) +
                j +
                y((z = (z + D) | 0), D)) |
              0),
              (t[I] = U),
              (t[I + 1] = z);
          }
          for (var K = 0; K < 160; K += 2) {
            (U = t[K]), (z = t[K + 1]);
            var q = c(r, n, i),
              Y = c(_, w, E),
              F = d(r, _),
              V = d(_, r),
              H = h(s, A),
              W = h(A, s),
              G = a[K],
              Z = a[K + 1],
              J = u(s, f, v),
              $ = u(A, T, M),
              X = (x + W) | 0,
              Q = (m + H + y(X, x)) | 0;
            Q =
              ((Q =
                ((Q = (Q + J + y((X = (X + $) | 0), $)) | 0) +
                  G +
                  y((X = (X + Z) | 0), Z)) |
                0) +
                U +
                y((X = (X + z) | 0), z)) |
              0;
            var ee = (V + Y) | 0,
              te = (F + q + y(ee, V)) | 0;
            (m = v),
              (x = M),
              (v = f),
              (M = T),
              (f = s),
              (T = A),
              (s = (o + Q + y((A = (S + X) | 0), S)) | 0),
              (o = i),
              (S = E),
              (i = n),
              (E = w),
              (n = r),
              (w = _),
              (r = (Q + te + y((_ = (X + ee) | 0), X)) | 0);
          }
          (this._al = (this._al + _) | 0),
            (this._bl = (this._bl + w) | 0),
            (this._cl = (this._cl + E) | 0),
            (this._dl = (this._dl + S) | 0),
            (this._el = (this._el + A) | 0),
            (this._fl = (this._fl + T) | 0),
            (this._gl = (this._gl + M) | 0),
            (this._hl = (this._hl + x) | 0),
            (this._ah = (this._ah + r + y(this._al, _)) | 0),
            (this._bh = (this._bh + n + y(this._bl, w)) | 0),
            (this._ch = (this._ch + i + y(this._cl, E)) | 0),
            (this._dh = (this._dh + o + y(this._dl, S)) | 0),
            (this._eh = (this._eh + s + y(this._el, A)) | 0),
            (this._fh = (this._fh + f + y(this._fl, T)) | 0),
            (this._gh = (this._gh + v + y(this._gl, M)) | 0),
            (this._hh = (this._hh + m + y(this._hl, x)) | 0);
        }),
        (f.prototype._hash = function() {
          var e = o.allocUnsafe(64);
          function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      'use strict';
      var n = t;
      function i(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function o(e) {
        for (var t = '', r = 0; r < e.length; r++) t += i(e[r].toString(16));
        return t;
      }
      (n.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ('string' != typeof e) {
          for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
          return r;
        }
        if ('hex' === t) {
          (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e);
          for (n = 0; n < e.length; n += 2)
            r.push(parseInt(e[n] + e[n + 1], 16));
        } else
          for (n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n),
              o = i >> 8,
              a = 255 & i;
            o ? r.push(o, a) : r.push(a);
          }
        return r;
      }),
        (n.zero2 = i),
        (n.toHex = o),
        (n.encode = function(e, t) {
          return 'hex' === t ? o(e) : e;
        });
    },
    function(e, t, r) {
      var n;
      function i(e) {
        this.rand = e;
      }
      if (
        ((e.exports = function(e) {
          return n || (n = new i(null)), n.generate(e);
        }),
        (e.exports.Rand = i),
        (i.prototype.generate = function(e) {
          return this._rand(e);
        }),
        (i.prototype._rand = function(e) {
          if (this.rand.getBytes) return this.rand.getBytes(e);
          for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte();
          return t;
        }),
        'object' == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (i.prototype._rand = function(e) {
              var t = new Uint8Array(e);
              return self.crypto.getRandomValues(t), t;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (i.prototype._rand = function(e) {
              var t = new Uint8Array(e);
              return self.msCrypto.getRandomValues(t), t;
            })
          : 'object' == typeof window &&
            (i.prototype._rand = function() {
              throw new Error('Not implemented yet');
            });
      else
        try {
          var o = r(244);
          if ('function' != typeof o.randomBytes)
            throw new Error('Not supported');
          i.prototype._rand = function(e) {
            return o.randomBytes(e);
          };
        } catch (e) {}
    },
    function(e, t, r) {
      'use strict';
      var n = t;
      (n.base = r(41)),
        (n.short = r(245)),
        (n.mont = r(246)),
        (n.edwards = r(247));
    },
    function(e, t, r) {
      'use strict';
      var n = r(12).rotr32;
      function i(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function o(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      function a(e, t, r) {
        return e ^ t ^ r;
      }
      (t.ft_1 = function(e, t, r, n) {
        return 0 === e
          ? i(t, r, n)
          : 1 === e || 3 === e
          ? a(t, r, n)
          : 2 === e
          ? o(t, r, n)
          : void 0;
      }),
        (t.ch32 = i),
        (t.maj32 = o),
        (t.p32 = a),
        (t.s0_256 = function(e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }),
        (t.s1_256 = function(e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }),
        (t.g0_256 = function(e) {
          return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function(e) {
          return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(31),
        o = r(99),
        a = r(18),
        s = n.sum32,
        f = n.sum32_4,
        u = n.sum32_5,
        c = o.ch32,
        d = o.maj32,
        h = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        g = i.BlockHash,
        y = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        g.call(this),
          (this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
          ]),
          (this.k = y),
          (this.W = new Array(64));
      }
      n.inherits(v, g),
        (e.exports = v),
        (v.blockSize = 512),
        (v.outSize = 256),
        (v.hmacStrength = 192),
        (v.padLength = 64),
        (v.prototype._update = function(e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            g = this.h[2],
            y = this.h[3],
            v = this.h[4],
            m = this.h[5],
            _ = this.h[6],
            w = this.h[7];
          for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = u(w, l(v), c(v, m, _), this.k[n], r[n]),
              S = s(h(i), d(i, o, g));
            (w = _),
              (_ = m),
              (m = v),
              (v = s(y, E)),
              (y = g),
              (g = o),
              (o = i),
              (i = s(E, S));
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], g)),
            (this.h[3] = s(this.h[3], y)),
            (this.h[4] = s(this.h[4], v)),
            (this.h[5] = s(this.h[5], m)),
            (this.h[6] = s(this.h[6], _)),
            (this.h[7] = s(this.h[7], w));
        }),
        (v.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big');
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(31),
        o = r(18),
        a = n.rotr64_hi,
        s = n.rotr64_lo,
        f = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        d = n.sum64_hi,
        h = n.sum64_lo,
        l = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        g = n.sum64_5_lo,
        y = i.BlockHash,
        v = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
      function m() {
        if (!(this instanceof m)) return new m();
        y.call(this),
          (this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
          ]),
          (this.k = v),
          (this.W = new Array(160));
      }
      function _(e, t, r, n, i) {
        var o = (e & r) ^ (~e & i);
        return o < 0 && (o += 4294967296), o;
      }
      function w(e, t, r, n, i, o) {
        var a = (t & n) ^ (~t & o);
        return a < 0 && (a += 4294967296), a;
      }
      function E(e, t, r, n, i) {
        var o = (e & r) ^ (e & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function S(e, t, r, n, i, o) {
        var a = (t & n) ^ (t & o) ^ (n & o);
        return a < 0 && (a += 4294967296), a;
      }
      function A(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function T(e, t) {
        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function M(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function x(e, t) {
        var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function I(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function L(e, t) {
        var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function R(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function P(e, t) {
        var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(m, y),
        (e.exports = m),
        (m.blockSize = 1024),
        (m.outSize = 512),
        (m.hmacStrength = 192),
        (m.padLength = 128),
        (m.prototype._prepareBlock = function(e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
          for (; n < r.length; n += 2) {
            var i = R(r[n - 4], r[n - 3]),
              o = P(r[n - 4], r[n - 3]),
              a = r[n - 14],
              s = r[n - 13],
              f = I(r[n - 30], r[n - 29]),
              u = L(r[n - 30], r[n - 29]),
              c = r[n - 32],
              d = r[n - 31];
            (r[n] = l(i, o, a, s, f, u, c, d)),
              (r[n + 1] = p(i, o, a, s, f, u, c, d));
          }
        }),
        (m.prototype._update = function(e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            a = this.h[2],
            s = this.h[3],
            f = this.h[4],
            u = this.h[5],
            l = this.h[6],
            p = this.h[7],
            y = this.h[8],
            v = this.h[9],
            m = this.h[10],
            I = this.h[11],
            L = this.h[12],
            R = this.h[13],
            P = this.h[14],
            k = this.h[15];
          o(this.k.length === r.length);
          for (var N = 0; N < r.length; N += 2) {
            var C = P,
              O = k,
              B = M(y, v),
              j = x(y, v),
              D = _(y, v, m, I, L),
              z = w(y, v, m, I, L, R),
              U = this.k[N],
              K = this.k[N + 1],
              q = r[N],
              Y = r[N + 1],
              F = b(C, O, B, j, D, z, U, K, q, Y),
              V = g(C, O, B, j, D, z, U, K, q, Y);
            (C = A(n, i)),
              (O = T(n, i)),
              (B = E(n, i, a, s, f)),
              (j = S(n, i, a, s, f, u));
            var H = d(C, O, B, j),
              W = h(C, O, B, j);
            (P = L),
              (k = R),
              (L = m),
              (R = I),
              (m = y),
              (I = v),
              (y = d(l, p, F, V)),
              (v = h(p, p, F, V)),
              (l = f),
              (p = u),
              (f = a),
              (u = s),
              (a = n),
              (s = i),
              (n = d(F, V, H, W)),
              (i = h(F, V, H, W));
          }
          c(this.h, 0, n, i),
            c(this.h, 2, a, s),
            c(this.h, 4, f, u),
            c(this.h, 6, l, p),
            c(this.h, 8, y, v),
            c(this.h, 10, m, I),
            c(this.h, 12, L, R),
            c(this.h, 14, P, k);
        }),
        (m.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big');
        });
    },
    function(e, t) {
      e.exports = function(e) {
        if ('string' != typeof e)
          throw new Error(
            "[is-hex-prefixed] value must be type 'string', is currently type " +
              typeof e +
              ', while checking isHexPrefixed.'
          );
        return '0x' === e.slice(0, 2);
      };
    },
    function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) r.call(n, i) && (e[i] = n[i]);
        }
        return e;
      };
      var r = Object.prototype.hasOwnProperty;
    },
    function(e, t, r) {
      const n = r(280),
        i = r(103);
      e.exports = function(e) {
        return i({ id: n(), jsonrpc: '2.0', params: [] }, e);
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'standardizeConfig', {
          enumerable: !0,
          get: function() {
            return i.default;
          }
        }),
        Object.defineProperty(t, 'ServiceProvider', {
          enumerable: !0,
          get: function() {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'Container', {
          enumerable: !0,
          get: function() {
            return a.default;
          }
        }),
        Object.defineProperty(t, 'LocalService', {
          enumerable: !0,
          get: function() {
            return s.default;
          }
        }),
        Object.defineProperty(t, 'PublicService', {
          enumerable: !0,
          get: function() {
            return f.default;
          }
        }),
        Object.defineProperty(t, 'PrivateService', {
          enumerable: !0,
          get: function() {
            return u.default;
          }
        }),
        Object.defineProperty(t, 'ServiceManager', {
          enumerable: !0,
          get: function() {
            return c.default;
          }
        }),
        Object.defineProperty(t, 'StateMachine', {
          enumerable: !0,
          get: function() {
            return d.default;
          }
        });
      var i = n(r(64)),
        o = n(r(110)),
        a = n(r(70)),
        s = n(r(186)),
        f = n(r(187)),
        u = n(r(188)),
        c = n(r(50)),
        d = n(r(75));
    },
    function(e, t, r) {
      const n = r(189),
        i = r(194),
        o = r(78).inherits,
        a = r(79),
        s = r(264),
        f = r(103),
        u = r(278),
        c = r(279),
        d = r(281),
        h = /^[0-9A-Fa-f]+$/g;
      function l(e) {
        (this.nonceLock = u(1)),
          e.getAccounts && (this.getAccounts = e.getAccounts),
          e.processTransaction &&
            (this.processTransaction = e.processTransaction),
          e.processMessage && (this.processMessage = e.processMessage),
          e.processPersonalMessage &&
            (this.processPersonalMessage = e.processPersonalMessage),
          e.processTypedMessage &&
            (this.processTypedMessage = e.processTypedMessage),
          (this.approveTransaction = e.approveTransaction || this.autoApprove),
          (this.approveMessage = e.approveMessage || this.autoApprove),
          (this.approvePersonalMessage =
            e.approvePersonalMessage || this.autoApprove),
          (this.approveDecryptMessage =
            e.approveDecryptMessage || this.autoApprove),
          (this.approveEncryptionPublicKey =
            e.approveEncryptionPublicKey || this.autoApprove),
          (this.approveTypedMessage =
            e.approveTypedMessage || this.autoApprove),
          e.signTransaction &&
            (this.signTransaction = e.signTransaction || v('signTransaction')),
          e.signMessage &&
            (this.signMessage = e.signMessage || v('signMessage')),
          e.signPersonalMessage &&
            (this.signPersonalMessage =
              e.signPersonalMessage || v('signPersonalMessage')),
          e.decryptMessage &&
            (this.decryptMessage = e.decryptMessage || v('decryptMessage')),
          e.encryptionPublicKey &&
            (this.encryptionPublicKey =
              e.encryptionPublicKey || v('encryptionPublicKey')),
          e.signTypedMessage &&
            (this.signTypedMessage =
              e.signTypedMessage || v('signTypedMessage')),
          e.recoverPersonalSignature &&
            (this.recoverPersonalSignature = e.recoverPersonalSignature),
          e.publishTransaction &&
            (this.publishTransaction = e.publishTransaction),
          (this.estimateGas = e.estimateGas || this.estimateGas),
          (this.getGasPrice = e.getGasPrice || this.getGasPrice);
      }
      function p(e) {
        return e.toLowerCase();
      }
      function b(e) {
        const t = a.addHexPrefix(e);
        return a.isValidAddress(t);
      }
      function g(e) {
        const t = a.addHexPrefix(e);
        return !a.isValidAddress(t) && y(e);
      }
      function y(e) {
        if (!('string' == typeof e)) return !1;
        if (!('0x' === e.slice(0, 2))) return !1;
        return e.slice(2).match(h);
      }
      function v(e) {
        return function(t, r) {
          r(
            new Error(
              'ProviderEngine - HookedWalletSubprovider - Must provide "' +
                e +
                '" fn in constructor options'
            )
          );
        };
      }
      (e.exports = l),
        o(l, c),
        (l.prototype.handleRequest = function(e, t, r) {
          const i = this;
          let o, a, s, u, c;
          switch (
            ((i._parityRequests = {}), (i._parityRequestCount = 0), e.method)
          ) {
            case 'eth_coinbase':
              return void i.getAccounts(function(e, t) {
                if (e) return r(e);
                let n = t[0] || null;
                r(null, n);
              });
            case 'eth_accounts':
              return void i.getAccounts(function(e, t) {
                if (e) return r(e);
                r(null, t);
              });
            case 'eth_sendTransaction':
              return (
                (o = e.params[0]),
                void n(
                  [
                    e => i.validateTransaction(o, e),
                    e => i.processTransaction(o, e)
                  ],
                  r
                )
              );
            case 'eth_signTransaction':
              return (
                (o = e.params[0]),
                void n(
                  [
                    e => i.validateTransaction(o, e),
                    e => i.processSignTransaction(o, e)
                  ],
                  r
                )
              );
            case 'eth_sign':
              return (
                (c = e.params[0]),
                (u = e.params[1]),
                (s = e.params[2] || {}),
                (a = f(s, { from: c, data: u })),
                void n(
                  [e => i.validateMessage(a, e), e => i.processMessage(a, e)],
                  r
                )
              );
            case 'personal_sign':
              return (function() {
                const t = e.params[0];
                if (g(e.params[1]) && b(t)) {
                  let t =
                    'The eth_personalSign method requires params ordered ';
                  (t +=
                    '[message, address]. This was previously handled incorrectly, '),
                    (t += 'and has been corrected automatically. '),
                    (t +=
                      'Please switch this param order for smooth behavior in the future.'),
                    console.warn(t),
                    (c = e.params[0]),
                    (u = e.params[1]);
                } else (u = e.params[0]), (c = e.params[1]);
                (s = e.params[2] || {}),
                  (a = f(s, { from: c, data: u })),
                  n(
                    [
                      e => i.validatePersonalMessage(a, e),
                      e => i.processPersonalMessage(a, e)
                    ],
                    r
                  );
              })();
            case 'eth_decryptMessage':
              return (function() {
                const t = e.params[0];
                if (g(e.params[1]) && b(t)) {
                  let t =
                    'The eth_decryptMessage method requires params ordered ';
                  (t +=
                    '[message, address]. This was previously handled incorrectly, '),
                    (t += 'and has been corrected automatically. '),
                    (t +=
                      'Please switch this param order for smooth behavior in the future.'),
                    console.warn(t),
                    (c = e.params[0]),
                    (u = e.params[1]);
                } else (u = e.params[0]), (c = e.params[1]);
                (s = e.params[2] || {}),
                  (a = f(s, { from: c, data: u })),
                  n(
                    [
                      e => i.validateDecryptMessage(a, e),
                      e => i.processDecryptMessage(a, e)
                    ],
                    r
                  );
              })();
            case 'encryption_public_key':
              return (function() {
                const t = e.params[0];
                n(
                  [
                    e => i.validateEncryptionPublicKey(t, e),
                    e => i.processEncryptionPublicKey(t, e)
                  ],
                  r
                );
              })();
            case 'personal_ecRecover':
              return (function() {
                u = e.params[0];
                let t = e.params[1];
                (s = e.params[2] || {}),
                  (a = f(s, { sig: t, data: u })),
                  i.recoverPersonalSignature(a, r);
              })();
            case 'eth_signTypedData':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
              return (function() {
                const t = e.params[0],
                  o = e.params[1];
                b(t) ? ((c = t), (u = o)) : ((u = t), (c = o)),
                  (s = e.params[2] || {}),
                  (a = f(s, { from: c, data: u })),
                  n(
                    [
                      e => i.validateTypedMessage(a, e),
                      e => i.processTypedMessage(a, e)
                    ],
                    r
                  );
              })();
            case 'parity_postTransaction':
              return (o = e.params[0]), void i.parityPostTransaction(o, r);
            case 'parity_postSign':
              return (
                (c = e.params[0]),
                (u = e.params[1]),
                void i.parityPostSign(c, u, r)
              );
            case 'parity_checkRequest':
              return (function() {
                const t = e.params[0];
                i.parityCheckRequest(t, r);
              })();
            case 'parity_defaultAccount':
              return void i.getAccounts(function(e, t) {
                if (e) return r(e);
                const n = t[0] || null;
                r(null, n);
              });
            default:
              return void t();
          }
        }),
        (l.prototype.getAccounts = function(e) {
          e(null, []);
        }),
        (l.prototype.processTransaction = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveTransaction(e, t),
              (e, t) => r.checkApproval('transaction', e, t),
              t => r.finalizeAndSubmitTx(e, t)
            ],
            t
          );
        }),
        (l.prototype.processSignTransaction = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveTransaction(e, t),
              (e, t) => r.checkApproval('transaction', e, t),
              t => r.finalizeTx(e, t)
            ],
            t
          );
        }),
        (l.prototype.processMessage = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveMessage(e, t),
              (e, t) => r.checkApproval('message', e, t),
              t => r.signMessage(e, t)
            ],
            t
          );
        }),
        (l.prototype.processPersonalMessage = function(e, t) {
          const r = this;
          n(
            [
              t => r.approvePersonalMessage(e, t),
              (e, t) => r.checkApproval('message', e, t),
              t => r.signPersonalMessage(e, t)
            ],
            t
          );
        }),
        (l.prototype.processDecryptMessage = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveDecryptMessage(e, t),
              (e, t) => r.checkApproval('decryptMessage', e, t),
              t => r.decryptMessage(e, t)
            ],
            t
          );
        }),
        (l.prototype.processEncryptionPublicKey = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveEncryptionPublicKey(e, t),
              (e, t) => r.checkApproval('encryptionPublicKey', e, t),
              t => r.encryptionPublicKey(e, t)
            ],
            t
          );
        }),
        (l.prototype.processTypedMessage = function(e, t) {
          const r = this;
          n(
            [
              t => r.approveTypedMessage(e, t),
              (e, t) => r.checkApproval('message', e, t),
              t => r.signTypedMessage(e, t)
            ],
            t
          );
        }),
        (l.prototype.autoApprove = function(e, t) {
          t(null, !0);
        }),
        (l.prototype.checkApproval = function(e, t, r) {
          r(t ? null : new Error('User denied ' + e + ' signature.'));
        }),
        (l.prototype.parityPostTransaction = function(e, t) {
          const r = this,
            n = '0x' + r._parityRequestCount.toString(16);
          r._parityRequestCount++,
            r.emitPayload(
              { method: 'eth_sendTransaction', params: [e] },
              function(e, t) {
                if (e) return void (r._parityRequests[n] = { error: e });
                const i = t.result;
                r._parityRequests[n] = i;
              }
            ),
            t(null, n);
        }),
        (l.prototype.parityPostSign = function(e, t, r) {
          const n = this,
            i = '0x' + n._parityRequestCount.toString(16);
          n._parityRequestCount++,
            n.emitPayload({ method: 'eth_sign', params: [e, t] }, function(
              e,
              t
            ) {
              if (e) return void (n._parityRequests[i] = { error: e });
              const r = t.result;
              n._parityRequests[i] = r;
            }),
            r(null, i);
        }),
        (l.prototype.parityCheckRequest = function(e, t) {
          const r = this._parityRequests[e] || null;
          return r ? (r.error ? t(r.error) : void t(null, r)) : t(null, null);
        }),
        (l.prototype.recoverPersonalSignature = function(e, t) {
          let r;
          try {
            r = s.recoverPersonalSignature(e);
          } catch (e) {
            return t(e);
          }
          t(null, r);
        }),
        (l.prototype.validateTransaction = function(e, t) {
          if (void 0 === e.from)
            return t(
              new Error(
                'Undefined address - from address required to sign transaction.'
              )
            );
          this.validateSender(e.from, function(r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    `Unknown address - unable to sign transaction for this address: "${e.from}"`
                  )
                );
          });
        }),
        (l.prototype.validateMessage = function(e, t) {
          if (void 0 === e.from)
            return t(
              new Error(
                'Undefined address - from address required to sign message.'
              )
            );
          this.validateSender(e.from, function(r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    `Unknown address - unable to sign message for this address: "${e.from}"`
                  )
                );
          });
        }),
        (l.prototype.validatePersonalMessage = function(e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  'Undefined address - from address required to sign personal message.'
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  'Undefined message - message required to sign personal message.'
                )
              )
            : y(e.data)
            ? void this.validateSender(e.from, function(r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        `Unknown address - unable to sign message for this address: "${e.from}"`
                      )
                    );
              })
            : t(
                new Error(
                  'HookedWalletSubprovider - validateMessage - message was not encoded as hex.'
                )
              );
        }),
        (l.prototype.validateDecryptMessage = function(e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  'Undefined address - from address required to decrypt message.'
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  'Undefined message - message required to decrypt message.'
                )
              )
            : y(e.data)
            ? void this.validateSender(e.from, function(r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        `Unknown address - unable to decrypt message for this address: "${e.from}"`
                      )
                    );
              })
            : t(
                new Error(
                  'HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex.'
                )
              );
        }),
        (l.prototype.validateEncryptionPublicKey = function(e, t) {
          this.validateSender(e, function(r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    `Unknown address - unable to obtain encryption public key for this address: "${e}"`
                  )
                );
          });
        }),
        (l.prototype.validateTypedMessage = function(e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  'Undefined address - from address required to sign typed data.'
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  'Undefined data - message required to sign typed data.'
                )
              )
            : void this.validateSender(e.from, function(r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        `Unknown address - unable to sign message for this address: "${e.from}"`
                      )
                    );
              });
        }),
        (l.prototype.validateSender = function(e, t) {
          if (!e) return t(null, !1);
          this.getAccounts(function(r, n) {
            if (r) return t(r);
            const i = -1 !== n.map(p).indexOf(e.toLowerCase());
            t(null, i);
          });
        }),
        (l.prototype.finalizeAndSubmitTx = function(e, t) {
          const r = this;
          r.nonceLock.take(function() {
            n(
              [
                r.fillInTxExtras.bind(r, e),
                r.signTransaction.bind(r),
                r.publishTransaction.bind(r)
              ],
              function(e, n) {
                if ((r.nonceLock.leave(), e)) return t(e);
                t(null, n);
              }
            );
          });
        }),
        (l.prototype.finalizeTx = function(e, t) {
          const r = this;
          r.nonceLock.take(function() {
            n(
              [r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)],
              function(n, i) {
                if ((r.nonceLock.leave(), n)) return t(n);
                t(null, { raw: i, tx: e });
              }
            );
          });
        }),
        (l.prototype.publishTransaction = function(e, t) {
          this.emitPayload(
            { method: 'eth_sendRawTransaction', params: [e] },
            function(e, r) {
              if (e) return t(e);
              t(null, r.result);
            }
          );
        }),
        (l.prototype.estimateGas = function(e, t) {
          d(this.engine, e, t);
        }),
        (l.prototype.getGasPrice = function(e) {
          this.emitPayload({ method: 'eth_gasPrice', params: [] }, function(
            t,
            r
          ) {
            if (t) return e(t);
            e(null, r.result);
          });
        }),
        (l.prototype.fillInTxExtras = function(e, t) {
          const r = this,
            n = e.from,
            o = {};
          void 0 === e.gasPrice && (o.gasPrice = r.getGasPrice.bind(r)),
            void 0 === e.nonce &&
              (o.nonce = r.emitPayload.bind(r, {
                method: 'eth_getTransactionCount',
                params: [n, 'pending']
              })),
            void 0 === e.gas &&
              (o.gas = r.estimateGas.bind(
                r,
                (function(e) {
                  return {
                    from: e.from,
                    to: e.to,
                    value: e.value,
                    data: e.data,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    nonce: e.nonce
                  };
                })(e)
              )),
            i(o, function(r, n) {
              if (r) return t(r);
              const i = {};
              n.gasPrice && (i.gasPrice = n.gasPrice),
                n.nonce && (i.nonce = n.nonce.result),
                n.gas && (i.gas = n.gas),
                t(null, f(e, i));
            });
        });
    },
    function(e, t, r) {
      var n = (function(e) {
        'use strict';
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = 'function' == typeof Symbol ? Symbol : {},
          i = n.iterator || '@@iterator',
          o = n.asyncIterator || '@@asyncIterator',
          a = n.toStringTag || '@@toStringTag';
        function s(e, t, r, n) {
          var i = t && t.prototype instanceof c ? t : c,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function(e, t, r) {
              var n = 'suspendedStart';
              return function(i, o) {
                if ('executing' === n)
                  throw new Error('Generator is already running');
                if ('completed' === n) {
                  if ('throw' === i) throw o;
                  return A();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var s = m(a, r);
                    if (s) {
                      if (s === u) continue;
                      return s;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if ('suspendedStart' === n)
                      throw ((n = 'completed'), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = 'executing';
                  var c = f(e, t, r);
                  if ('normal' === c.type) {
                    if (
                      ((n = r.done ? 'completed' : 'suspendedYield'),
                      c.arg === u)
                    )
                      continue;
                    return { value: c.arg, done: r.done };
                  }
                  'throw' === c.type &&
                    ((n = 'completed'), (r.method = 'throw'), (r.arg = c.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function f(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var u = {};
        function c() {}
        function d() {}
        function h() {}
        var l = {};
        l[i] = function() {
          return this;
        };
        var p = Object.getPrototypeOf,
          b = p && p(p(S([])));
        b && b !== t && r.call(b, i) && (l = b);
        var g = (h.prototype = c.prototype = Object.create(l));
        function y(e) {
          ['next', 'throw', 'return'].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e);
            };
          });
        }
        function v(e, t) {
          var n;
          this._invoke = function(i, o) {
            function a() {
              return new t(function(n, a) {
                !(function n(i, o, a, s) {
                  var u = f(e[i], e, o);
                  if ('throw' !== u.type) {
                    var c = u.arg,
                      d = c.value;
                    return d && 'object' == typeof d && r.call(d, '__await')
                      ? t.resolve(d.__await).then(
                          function(e) {
                            n('next', e, a, s);
                          },
                          function(e) {
                            n('throw', e, a, s);
                          }
                        )
                      : t.resolve(d).then(
                          function(e) {
                            (c.value = e), a(c);
                          },
                          function(e) {
                            return n('throw', e, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(i, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function m(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                m(e, t),
                'throw' === t.method)
              )
                return u;
              (t.method = 'throw'),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return u;
          }
          var n = f(r, e.iterator, t.arg);
          if ('throw' === n.type)
            return (
              (t.method = 'throw'), (t.arg = n.arg), (t.delegate = null), u
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              u);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g.constructor = h),
          (h.constructor = d),
          (h[a] = d.displayName = 'GeneratorFunction'),
          (e.isGeneratorFunction = function(e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), a in e || (e[a] = 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          y(v.prototype),
          (v.prototype[o] = function() {
            return this;
          }),
          (e.AsyncIterator = v),
          (e.async = function(t, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new v(s(t, r, n, i), o);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function(e) {
                  return e.done ? e.value : a.next();
                });
          }),
          y(g),
          (g[a] = 'Generator'),
          (g[i] = function() {
            return this;
          }),
          (g.toString = function() {
            return '[object Generator]';
          }),
          (e.keys = function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ('root' === o.tryLoc) return n('end');
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, 'catchLoc'),
                    f = r.call(o, 'finallyLoc');
                  if (s && f) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!f)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === e || 'continue' === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), u)
                  : this.complete(a)
              );
            },
            complete: function(e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                u
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), w(r), u;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var i = n.arg;
                    w(r);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                u
              );
            }
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = n;
      } catch (e) {
        Function('r', 'regeneratorRuntime = r')(n);
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n(r(19)),
        o = n(r(111)),
        a = n(r(8)),
        s = n(r(13)),
        f = n(r(65)),
        u = n(r(70)),
        c = n(r(64)),
        d = (function() {
          function e(t, r) {
            var n = r.services,
              i = r.defaults,
              o = r.disabled;
            (0, a.default)(this, e),
              (this._config = t),
              (this._services = n),
              (this._resolver = { defaults: i, disabled: o });
          }
          return (
            (0, s.default)(e, [
              {
                key: 'supports',
                value: function(e) {
                  return !!this._services[e];
                }
              },
              {
                key: 'buildContainer',
                value: function() {
                  var e = new u.default();
                  for (var t in this._config) {
                    var r = (0, c.default)(t, this._config[t], this._resolver),
                      n = (0, o.default)(r, 2),
                      a = n[0],
                      s = n[1],
                      f = void 0;
                    if ('object' == (0, i.default)(a)) f = a;
                    else if ('function' == typeof a) f = new a();
                    else {
                      if (!this.supports(a) && 'exchange' === t)
                        throw new Error(
                          'This service has been extracted from dai.js. Please refer to the documentation to add it as a plugin: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins)'
                        );
                      if (!this.supports(a))
                        throw new Error(
                          'Unsupported service in configuration: ' + a
                        );
                      f = new this._services[a]();
                    }
                    f.manager().settings(s), e.register(f, t);
                  }
                  return (
                    this._registerDependencies(e),
                    e.injectDependencies(),
                    (this._container = e),
                    e
                  );
                }
              },
              {
                key: '_registerDependencies',
                value: function(e) {
                  var t = e.getRegisteredServiceNames(),
                    r = t
                      .reduce(function(t, r) {
                        var n = e
                          .service(r)
                          .manager()
                          .dependencies();
                        return (0, f.default)(t.concat(n));
                      }, [])
                      .filter(function(e) {
                        return !t.includes(e);
                      });
                  if (0 !== r.length) {
                    var n = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = r[Symbol.iterator]();
                        !(n = (a = s.next()).done);
                        n = !0
                      ) {
                        var u = a.value,
                          c = this._resolver.defaults[u],
                          d = this._services[c];
                        if (!d)
                          throw new Error(
                            'No service found for "'.concat(u, '"')
                          );
                        e.register(new d(), u);
                      }
                    } catch (e) {
                      (i = !0), (o = e);
                    } finally {
                      try {
                        n || null == s.return || s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    this._registerDependencies(e);
                  }
                }
              },
              {
                key: 'service',
                value: function(e) {
                  return (
                    this._container || this.buildContainer(),
                    this._container.service(e)
                  );
                }
              }
            ]),
            e
          );
        })();
      t.default = d;
    },
    function(e, t, r) {
      var n = r(112),
        i = r(113),
        o = r(114),
        a = r(116);
      e.exports = function(e, t) {
        return n(e) || i(e, t) || o(e, t) || a();
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) return e;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(n = (a = s.next()).done) &&
              (r.push(a.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }
      };
    },
    function(e, t, r) {
      var n = r(115);
      e.exports = function(e, t) {
        if (e) {
          if ('string' == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      };
    },
    function(e, t) {
      e.exports = function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    function(e, t, r) {
      var n = r(118),
        i = r(149),
        o = r(154),
        a = r(155),
        s = r(156),
        f = r(69);
      e.exports = function(e, t, r) {
        var u = -1,
          c = i,
          d = e.length,
          h = !0,
          l = [],
          p = l;
        if (r) (h = !1), (c = o);
        else if (d >= 200) {
          var b = t ? null : s(e);
          if (b) return f(b);
          (h = !1), (c = a), (p = new n());
        } else p = t ? [] : l;
        e: for (; ++u < d; ) {
          var g = e[u],
            y = t ? t(g) : g;
          if (((g = r || 0 !== g ? g : 0), h && y == y)) {
            for (var v = p.length; v--; ) if (p[v] === y) continue e;
            t && p.push(y), l.push(g);
          } else c(p, y, r) || (p !== l && p.push(y), l.push(g));
        }
        return l;
      };
    },
    function(e, t, r) {
      var n = r(119),
        i = r(147),
        o = r(148);
      function a(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new n(); ++t < r; ) this.add(e[t]);
      }
      (a.prototype.add = a.prototype.push = i),
        (a.prototype.has = o),
        (e.exports = a);
    },
    function(e, t, r) {
      var n = r(120),
        i = r(142),
        o = r(144),
        a = r(145),
        s = r(146);
      function f(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (f.prototype.clear = n),
        (f.prototype.delete = i),
        (f.prototype.get = o),
        (f.prototype.has = a),
        (f.prototype.set = s),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(121),
        i = r(134),
        o = r(141);
      e.exports = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (o || i)(),
            string: new n()
          });
      };
    },
    function(e, t, r) {
      var n = r(122),
        i = r(130),
        o = r(131),
        a = r(132),
        s = r(133);
      function f(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (f.prototype.clear = n),
        (f.prototype.delete = i),
        (f.prototype.get = o),
        (f.prototype.has = a),
        (f.prototype.set = s),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(33);
      e.exports = function() {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    function(e, t, r) {
      var n = r(66),
        i = r(126),
        o = r(46),
        a = r(128),
        s = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        u = Object.prototype,
        c = f.toString,
        d = u.hasOwnProperty,
        h = RegExp(
          '^' +
            c
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      e.exports = function(e) {
        return !(!o(e) || i(e)) && (n(e) ? h : s).test(a(e));
      };
    },
    function(e, t, r) {
      var n = r(67),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = o.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0;
        } catch (e) {}
        var i = a.call(e);
        return n && (t ? (e[s] = r) : delete e[s]), i;
      };
    },
    function(e, t) {
      var r = Object.prototype.toString;
      e.exports = function(e) {
        return r.call(e);
      };
    },
    function(e, t, r) {
      var n,
        i = r(127),
        o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + n
          : '';
      e.exports = function(e) {
        return !!o && o in e;
      };
    },
    function(e, t, r) {
      var n = r(25)['__core-js_shared__'];
      e.exports = n;
    },
    function(e, t) {
      var r = Function.prototype.toString;
      e.exports = function(e) {
        if (null != e) {
          try {
            return r.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function(e, t, r) {
      var n = r(33),
        i = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return '__lodash_hash_undefined__' === r ? void 0 : r;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    function(e, t, r) {
      var n = r(33),
        i = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : i.call(t, e);
      };
    },
    function(e, t, r) {
      var n = r(33);
      e.exports = function(e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = n && void 0 === t ? '__lodash_hash_undefined__' : t),
          this
        );
      };
    },
    function(e, t, r) {
      var n = r(135),
        i = r(136),
        o = r(138),
        a = r(139),
        s = r(140);
      function f(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (f.prototype.clear = n),
        (f.prototype.delete = i),
        (f.prototype.get = o),
        (f.prototype.has = a),
        (f.prototype.set = s),
        (e.exports = f);
    },
    function(e, t) {
      e.exports = function() {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function(e, t, r) {
      var n = r(34),
        i = Array.prototype.splice;
      e.exports = function(e) {
        var t = this.__data__,
          r = n(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
        );
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return e === t || (e != e && t != t);
      };
    },
    function(e, t, r) {
      var n = r(34);
      e.exports = function(e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
    },
    function(e, t, r) {
      var n = r(34);
      e.exports = function(e) {
        return n(this.__data__, e) > -1;
      };
    },
    function(e, t, r) {
      var n = r(34);
      e.exports = function(e, t) {
        var r = this.__data__,
          i = n(r, e);
        return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
      };
    },
    function(e, t, r) {
      var n = r(44)(r(25), 'Map');
      e.exports = n;
    },
    function(e, t, r) {
      var n = r(35);
      e.exports = function(e) {
        var t = n(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      };
    },
    function(e, t, r) {
      var n = r(35);
      e.exports = function(e) {
        return n(this, e).get(e);
      };
    },
    function(e, t, r) {
      var n = r(35);
      e.exports = function(e) {
        return n(this, e).has(e);
      };
    },
    function(e, t, r) {
      var n = r(35);
      e.exports = function(e, t) {
        var r = n(this, e),
          i = r.size;
        return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return this.__data__.has(e);
      };
    },
    function(e, t, r) {
      var n = r(150);
      e.exports = function(e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    function(e, t, r) {
      var n = r(151),
        i = r(152),
        o = r(153);
      e.exports = function(e, t, r) {
        return t == t ? o(e, t, r) : n(e, i, r);
      };
    },
    function(e, t) {
      e.exports = function(e, t, r, n) {
        for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
          if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return e != e;
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
        return -1;
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
          if (r(t, e[n])) return !0;
        return !1;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return e.has(t);
      };
    },
    function(e, t, r) {
      var n = r(157),
        i = r(26),
        o = r(69),
        a =
          n && 1 / o(new n([, -0]))[1] == 1 / 0
            ? function(e) {
                return new n(e);
              }
            : i;
      e.exports = a;
    },
    function(e, t, r) {
      var n = r(44)(r(25), 'Set');
      e.exports = n;
    },
    function(e, t) {
      e.exports = function(e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      };
    },
    function(e, t, r) {
      var n = r(43),
        i = r(160);
      function o(t, r, a) {
        return (
          i()
            ? (e.exports = o = Reflect.construct)
            : (e.exports = o = function(e, t, r) {
                var i = [null];
                i.push.apply(i, t);
                var o = new (Function.bind.apply(e, i))();
                return r && n(o, r.prototype), o;
              }),
          o.apply(null, arguments)
        );
      }
      e.exports = o;
    },
    function(e, t) {
      e.exports = function() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      };
    },
    function(e, t, r) {
      var n = r(162),
        i = r(72);
      e.exports = function(e) {
        return null == e ? [] : n(e, i(e));
      };
    },
    function(e, t, r) {
      var n = r(163);
      e.exports = function(e, t) {
        return n(t, function(t) {
          return e[t];
        });
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n; )
          i[r] = t(e[r], r, e);
        return i;
      };
    },
    function(e, t, r) {
      var n = r(165),
        i = r(166),
        o = r(73),
        a = r(168),
        s = r(170),
        f = r(171),
        u = Object.prototype.hasOwnProperty;
      e.exports = function(e, t) {
        var r = o(e),
          c = !r && i(e),
          d = !r && !c && a(e),
          h = !r && !c && !d && f(e),
          l = r || c || d || h,
          p = l ? n(e.length, String) : [],
          b = p.length;
        for (var g in e)
          (!t && !u.call(e, g)) ||
            (l &&
              ('length' == g ||
                (d && ('offset' == g || 'parent' == g)) ||
                (h &&
                  ('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
                s(g, b))) ||
            p.push(g);
        return p;
      };
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
    },
    function(e, t, r) {
      var n = r(167),
        i = r(48),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        f = n(
          (function() {
            return arguments;
          })()
        )
          ? n
          : function(e) {
              return i(e) && a.call(e, 'callee') && !s.call(e, 'callee');
            };
      e.exports = f;
    },
    function(e, t, r) {
      var n = r(45),
        i = r(48);
      e.exports = function(e) {
        return i(e) && '[object Arguments]' == n(e);
      };
    },
    function(e, t, r) {
      (function(e) {
        var n = r(25),
          i = r(169),
          o = t && !t.nodeType && t,
          a = o && 'object' == typeof e && e && !e.nodeType && e,
          s = a && a.exports === o ? n.Buffer : void 0,
          f = (s ? s.isBuffer : void 0) || i;
        e.exports = f;
      }.call(this, r(49)(e)));
    },
    function(e, t) {
      e.exports = function() {
        return !1;
      };
    },
    function(e, t) {
      var r = /^(?:0|[1-9]\d*)$/;
      e.exports = function(e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == n || ('symbol' != n && r.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function(e, t, r) {
      var n = r(172),
        i = r(173),
        o = r(174),
        a = o && o.isTypedArray,
        s = a ? i(a) : n;
      e.exports = s;
    },
    function(e, t, r) {
      var n = r(45),
        i = r(74),
        o = r(48),
        a = {};
      (a['[object Float32Array]'] = a['[object Float64Array]'] = a[
        '[object Int8Array]'
      ] = a['[object Int16Array]'] = a['[object Int32Array]'] = a[
        '[object Uint8Array]'
      ] = a['[object Uint8ClampedArray]'] = a['[object Uint16Array]'] = a[
        '[object Uint32Array]'
      ] = !0),
        (a['[object Arguments]'] = a['[object Array]'] = a[
          '[object ArrayBuffer]'
        ] = a['[object Boolean]'] = a['[object DataView]'] = a[
          '[object Date]'
        ] = a['[object Error]'] = a['[object Function]'] = a[
          '[object Map]'
        ] = a['[object Number]'] = a['[object Object]'] = a[
          '[object RegExp]'
        ] = a['[object Set]'] = a['[object String]'] = a[
          '[object WeakMap]'
        ] = !1),
        (e.exports = function(e) {
          return o(e) && i(e.length) && !!a[n(e)];
        });
    },
    function(e, t) {
      e.exports = function(e) {
        return function(t) {
          return e(t);
        };
      };
    },
    function(e, t, r) {
      (function(e) {
        var n = r(68),
          i = t && !t.nodeType && t,
          o = i && 'object' == typeof e && e && !e.nodeType && e,
          a = o && o.exports === i && n.process,
          s = (function() {
            try {
              var e = o && o.require && o.require('util').types;
              return e || (a && a.binding && a.binding('util'));
            } catch (e) {}
          })();
        e.exports = s;
      }.call(this, r(49)(e)));
    },
    function(e, t, r) {
      var n = r(176),
        i = r(177),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e) {
        if (!n(e)) return i(e);
        var t = [];
        for (var r in Object(e))
          o.call(e, r) && 'constructor' != r && t.push(r);
        return t;
      };
    },
    function(e, t) {
      var r = Object.prototype;
      e.exports = function(e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || r);
      };
    },
    function(e, t, r) {
      var n = r(178)(Object.keys, Object);
      e.exports = n;
    },
    function(e, t) {
      e.exports = function(e, t) {
        return function(r) {
          return e(t(r));
        };
      };
    },
    function(e, t, r) {
      var n = r(180);
      function i(t, r, o) {
        return (
          'undefined' != typeof Reflect && Reflect.get
            ? (e.exports = i = Reflect.get)
            : (e.exports = i = function(e, t, r) {
                var i = n(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(r) : o.value;
                }
              }),
          i(t, r, o || t)
        );
      }
      e.exports = i;
    },
    function(e, t, r) {
      var n = r(6);
      e.exports = function(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));

        );
        return e;
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(71),
        i = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = i(r(8)),
        a = i(r(13)),
        s = i(r(75)),
        f = i(r(51)),
        u = n(r(27)),
        c = (0, i(r(182)).default)('dai:ServiceManagerBase');
      function d(e) {
        return new Promise(function(t, r) {
          try {
            t(e());
          } catch (e) {
            r(e.message);
          }
        });
      }
      var h = (function() {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          if (((0, o.default)(this, e), null !== t && 'function' != typeof t))
            throw new Error('Invalid argument init: not a function or null.');
          if (
            (null === t &&
              (t = function() {
                return Promise.resolve();
              }),
            null !== r && 'function' != typeof r)
          )
            throw new Error(
              'Invalid argument connect: not a function or null.'
            );
          if (
            (null === r &&
              null !== n &&
              (r = function() {
                return Promise.resolve();
              }),
            null !== n && 'function' != typeof n)
          )
            throw new Error('Invalid argument auth: not a function or null.');
          (this._init = t),
            (this._connect = r),
            (this._auth = n),
            (this._type =
              null === n
                ? null === r
                  ? u.default.LOCAL
                  : u.default.PUBLIC
                : u.default.PRIVATE),
            (this._state = new s.default(
              f.default.CREATED,
              u.serviceTypeTransitions[this._type]
            )),
            (this._initPromise = null),
            (this._connectPromise = null),
            (this._authPromise = null);
        }
        return (
          (0, a.default)(e, [
            {
              key: 'initialize',
              value: function(e) {
                var t = this;
                if (this._state.inState(f.default.CREATED)) {
                  if (this._initPromise)
                    throw new Error(
                      'Unexpected init promise in state CREATED.'
                    );
                  this._state.transitionTo(f.default.INITIALIZING),
                    (this._initPromise = d(function() {
                      return t._init(e);
                    }).then(
                      function() {
                        return t._state.transitionTo(
                          t._type === u.default.LOCAL
                            ? f.default.READY
                            : f.default.OFFLINE
                        );
                      },
                      function(e) {
                        throw (c(e),
                        t._state.transitionTo(f.default.CREATED),
                        e);
                      }
                    ));
                }
                return this._initPromise;
              }
            },
            {
              key: 'connect',
              value: function() {
                var e = this;
                return this._type === u.default.LOCAL
                  ? this.initialize()
                  : (this._state.inState([
                      f.default.CREATED,
                      f.default.INITIALIZING,
                      f.default.OFFLINE
                    ]) &&
                      null === this._connectPromise &&
                      (this._connectPromise = this.initialize().then(
                        function() {
                          return (
                            e._state.transitionTo(f.default.CONNECTING),
                            d(function() {
                              return e._connect(function() {
                                return e._disconnect();
                              });
                            }).then(
                              function() {
                                e._state.inState(f.default.CONNECTING) &&
                                  e._state.transitionTo(
                                    e._type === u.default.PUBLIC
                                      ? f.default.READY
                                      : f.default.ONLINE
                                  );
                              },
                              function(t) {
                                throw (c('connect error:', t),
                                e._state.inState(f.default.CONNECTING) &&
                                  e._state.transitionTo(f.default.OFFLINE),
                                t);
                              }
                            )
                          );
                        }
                      )),
                    this._connectPromise);
              }
            },
            {
              key: 'authenticate',
              value: function() {
                var e = this;
                return this._type !== u.default.PRIVATE
                  ? this.connect()
                  : (this._state.inState([
                      f.default.CREATED,
                      f.default.INITIALIZING,
                      f.default.OFFLINE,
                      f.default.CONNECTING,
                      f.default.ONLINE
                    ]) &&
                      null === this._authPromise &&
                      (this._authPromise = this.connect().then(function() {
                        return (
                          e._state.transitionTo(f.default.AUTHENTICATING),
                          d(function() {
                            return e._auth(function() {
                              return e._deauthenticate();
                            });
                          }).then(
                            function() {
                              e._state.inState(f.default.AUTHENTICATING) &&
                                e._state.transitionTo(f.default.READY);
                            },
                            function(t) {
                              c('authenticate error: ' + t),
                                e._state.inState(f.default.AUTHENTICATING) &&
                                  e._state.transitionTo(f.default.ONLINE);
                            }
                          )
                        );
                      })),
                    this._authPromise);
              }
            },
            {
              key: 'settings',
              value: function(e) {
                return (this._settings = e), this;
              }
            },
            {
              key: 'state',
              value: function() {
                return this._state.state();
              }
            },
            {
              key: 'type',
              value: function() {
                return this._type;
              }
            },
            {
              key: 'isInitialized',
              value: function() {
                return !this._state.inState([
                  f.default.CREATED,
                  f.default.INITIALIZING
                ]);
              }
            },
            {
              key: 'isConnected',
              value: function() {
                return this._type === u.default.LOCAL
                  ? null
                  : this._state.inState([
                      f.default.ONLINE,
                      f.default.AUTHENTICATING,
                      f.default.READY
                    ]);
              }
            },
            {
              key: 'isAuthenticated',
              value: function() {
                return this._type === u.default.PRIVATE
                  ? this._state.inState(f.default.READY)
                  : null;
              }
            },
            {
              key: 'isReady',
              value: function() {
                return this._state.inState(f.default.READY);
              }
            },
            {
              key: 'onInitialized',
              value: function(e) {
                return (
                  this._state.onStateChanged(function(t, r) {
                    t !== f.default.INITIALIZING ||
                      (r !== f.default.OFFLINE && r !== f.default.READY) ||
                      e();
                  }),
                  this
                );
              }
            },
            {
              key: 'onConnected',
              value: function(e) {
                return (
                  this._state.onStateChanged(function(t, r) {
                    t !== f.default.CONNECTING ||
                      (r !== f.default.ONLINE && r !== f.default.READY) ||
                      e();
                  }),
                  this
                );
              }
            },
            {
              key: 'onDisconnected',
              value: function(e) {
                return (
                  this._state.onStateChanged(function(t, r) {
                    r !== f.default.OFFLINE ||
                      (t !== f.default.ONLINE && t !== f.default.READY) ||
                      e();
                  }),
                  this
                );
              }
            },
            {
              key: 'onAuthenticated',
              value: function(e) {
                return (
                  this._state.onStateChanged(function(t, r) {
                    t === f.default.AUTHENTICATING &&
                      r === f.default.READY &&
                      e();
                  }),
                  this
                );
              }
            },
            {
              key: 'onDeauthenticated',
              value: function(e) {
                return (
                  this.type() === u.default.PRIVATE &&
                    this._state.onStateChanged(function(t, r) {
                      (r !== f.default.OFFLINE && r !== f.default.ONLINE) ||
                        t !== f.default.READY ||
                        e();
                    }),
                  this
                );
              }
            },
            {
              key: 'onReady',
              value: function(e) {
                return (
                  this._state.onStateChanged(function(t, r) {
                    r === f.default.READY && e();
                  }),
                  this
                );
              }
            },
            {
              key: 'onStateChanged',
              value: function(e) {
                return this._state.onStateChanged(e), this;
              }
            },
            {
              key: '_disconnect',
              value: function() {
                if (this._type === u.default.LOCAL)
                  throw new Error(
                    '_disconnect must not be called on a Local Service'
                  );
                this._state.inState(f.default.AUTHENTICATING) &&
                  this._deauthenticate(),
                  this._state.inState([
                    f.default.READY,
                    f.default.ONLINE,
                    f.default.CONNECTING
                  ]) &&
                    ((this._authPromise = null),
                    (this._connectPromise = null),
                    this._state.transitionTo(f.default.OFFLINE));
              }
            },
            {
              key: '_deauthenticate',
              value: function() {
                if (this._type !== u.default.PRIVATE)
                  throw new Error(
                    '_deauthenticate must not be called on a Local or Public Service'
                  );
                this._state.inState([
                  f.default.READY,
                  f.default.AUTHENTICATING
                ]) &&
                  ((this._authPromise = null),
                  this._state.transitionTo(f.default.ONLINE));
              }
            }
          ]),
          e
        );
      })();
      t.default = h;
    },
    function(e, t, r) {
      (function(n) {
        function i() {
          var e;
          try {
            e = t.storage.debug;
          } catch (e) {}
          return !e && void 0 !== n && 'env' in n && (e = n.env.DEBUG), e;
        }
        ((t = e.exports = r(183)).log = function() {
          return (
            'object' == typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
          (t.formatArgs = function(e) {
            var r = this.useColors;
            if (
              ((e[0] =
                (r ? '%c' : '') +
                this.namespace +
                (r ? ' %c' : ' ') +
                e[0] +
                (r ? '%c ' : ' ') +
                '+' +
                t.humanize(this.diff)),
              !r)
            )
              return;
            var n = 'color: ' + this.color;
            e.splice(1, 0, n, 'color: inherit');
            var i = 0,
              o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
              '%%' !== e && (i++, '%c' === e && (o = i));
            }),
              e.splice(o, 0, n);
          }),
          (t.save = function(e) {
            try {
              null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
            } catch (e) {}
          }),
          (t.load = i),
          (t.useColors = function() {
            if (
              'undefined' != typeof window &&
              window.process &&
              'renderer' === window.process.type
            )
              return !0;
            return (
              ('undefined' != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ('undefined' != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ('undefined' != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ('undefined' != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (t.storage =
            'undefined' != typeof chrome && void 0 !== chrome.storage
              ? chrome.storage.local
              : (function() {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            'lightseagreen',
            'forestgreen',
            'goldenrod',
            'dodgerblue',
            'darkorchid',
            'crimson'
          ]),
          (t.formatters.j = function(e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              return '[UnexpectedJSONParseError]: ' + e.message;
            }
          }),
          t.enable(i());
      }.call(this, r(7)));
    },
    function(e, t, r) {
      var n;
      function i(e) {
        function r() {
          if (r.enabled) {
            var e = r,
              i = +new Date(),
              o = i - (n || i);
            (e.diff = o), (e.prev = n), (e.curr = i), (n = i);
            for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
              a[s] = arguments[s];
            (a[0] = t.coerce(a[0])), 'string' != typeof a[0] && a.unshift('%O');
            var f = 0;
            (a[0] = a[0].replace(/%([a-zA-Z%])/g, function(r, n) {
              if ('%%' === r) return r;
              f++;
              var i = t.formatters[n];
              if ('function' == typeof i) {
                var o = a[f];
                (r = i.call(e, o)), a.splice(f, 1), f--;
              }
              return r;
            })),
              t.formatArgs.call(e, a);
            var u = r.log || t.log || console.log.bind(console);
            u.apply(e, a);
          }
        }
        return (
          (r.namespace = e),
          (r.enabled = t.enabled(e)),
          (r.useColors = t.useColors()),
          (r.color = (function(e) {
            var r,
              n = 0;
            for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          })(e)),
          'function' == typeof t.init && t.init(r),
          r
        );
      }
      ((t = e.exports = i.debug = i.default = i).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function() {
          t.enable('');
        }),
        (t.enable = function(e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var r = ('string' == typeof e ? e : '').split(/[\s,]+/),
              n = r.length,
              i = 0;
            i < n;
            i++
          )
            r[i] &&
              ('-' === (e = r[i].replace(/\*/g, '.*?'))[0]
                ? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
                : t.names.push(new RegExp('^' + e + '$')));
        }),
        (t.enabled = function(e) {
          var r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(184)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    function(e, t) {
      var r = 1e3,
        n = 6e4,
        i = 60 * n,
        o = 24 * i;
      function a(e, t, r) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + ' ' + r
            : Math.ceil(e / t) + ' ' + r + 's';
      }
      e.exports = function(e, t) {
        t = t || {};
        var s,
          f = typeof e;
        if ('string' === f && e.length > 0)
          return (function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return 315576e5 * a;
              case 'days':
              case 'day':
              case 'd':
                return a * o;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return a * i;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return a * n;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return a * r;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return a;
              default:
                return;
            }
          })(e);
        if ('number' === f && !1 === isNaN(e))
          return t.long
            ? a((s = e), o, 'day') ||
                a(s, i, 'hour') ||
                a(s, n, 'minute') ||
                a(s, r, 'second') ||
                s + ' ms'
            : (function(e) {
                if (e >= o) return Math.round(e / o) + 'd';
                if (e >= i) return Math.round(e / i) + 'h';
                if (e >= n) return Math.round(e / n) + 'm';
                if (e >= r) return Math.round(e / r) + 's';
                return e + 'ms';
              })(e);
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(e)
        );
      };
    },
    function(e, t) {
      function r(e, t) {
        var r = e.length,
          n = new Array(r),
          i = {},
          o = r,
          a = (function(e) {
            for (var t = new Map(), r = 0, n = e.length; r < n; r++) {
              var i = e[r];
              t.has(i[0]) || t.set(i[0], new Set()),
                t.has(i[1]) || t.set(i[1], new Set()),
                t.get(i[0]).add(i[1]);
            }
            return t;
          })(t),
          s = (function(e) {
            for (var t = new Map(), r = 0, n = e.length; r < n; r++)
              t.set(e[r], r);
            return t;
          })(e);
        for (
          t.forEach(function(e) {
            if (!s.has(e[0]) || !s.has(e[1]))
              throw new Error(
                'Unknown node. There is an unknown node in the supplied edges.'
              );
          });
          o--;

        )
          i[o] || f(e[o], o, new Set());
        return n;
        function f(e, t, o) {
          if (o.has(e)) {
            var u;
            try {
              u = ', node was:' + JSON.stringify(e);
            } catch (e) {
              u = '';
            }
            throw new Error('Cyclic dependency' + u);
          }
          if (!s.has(e))
            throw new Error(
              'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
                JSON.stringify(e)
            );
          if (!i[t]) {
            i[t] = !0;
            var c = a.get(e) || new Set();
            if ((t = (c = Array.from(c)).length)) {
              o.add(e);
              do {
                var d = c[--t];
                f(d, s.get(d), o);
              } while (t);
              o.delete(e);
            }
            n[--r] = e;
          }
        }
      }
      (e.exports = function(e) {
        return r(
          (function(e) {
            for (var t = new Set(), r = 0, n = e.length; r < n; r++) {
              var i = e[r];
              t.add(i[0]), t.add(i[1]);
            }
            return Array.from(t);
          })(e),
          e
        );
      }),
        (e.exports.array = r);
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n(r(8)),
        o = n(r(15)),
        a = n(r(6)),
        s = n(r(14)),
        f = n(r(27)),
        u = (function(e) {
          function t(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return (
              (0, i.default)(this, t),
              (0, o.default)(
                this,
                (0, a.default)(t).call(this, f.default.LOCAL, e, r)
              )
            );
          }
          return (0, s.default)(t, e), t;
        })(n(r(52)).default);
      t.default = u;
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n(r(8)),
        o = n(r(15)),
        a = n(r(6)),
        s = n(r(14)),
        f = n(r(27)),
        u = (function(e) {
          function t(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return (
              (0, i.default)(this, t),
              (0, o.default)(
                this,
                (0, a.default)(t).call(this, f.default.PUBLIC, e, r)
              )
            );
          }
          return (0, s.default)(t, e), t;
        })(n(r(52)).default);
      t.default = u;
    },
    function(e, t, r) {
      'use strict';
      var n = r(9);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = n(r(8)),
        o = n(r(15)),
        a = n(r(6)),
        s = n(r(14)),
        f = n(r(27)),
        u = (function(e) {
          function t(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return (
              (0, i.default)(this, t),
              (0, o.default)(
                this,
                (0, a.default)(t).call(this, f.default.PRIVATE, e, r)
              )
            );
          }
          return (0, s.default)(t, e), t;
        })(n(r(52)).default);
      t.default = u;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          if (((t = (0, o.default)(t || i.default)), !(0, n.default)(e)))
            return t(
              new Error(
                'First argument to waterfall must be an array of functions'
              )
            );
          if (!e.length) return t();
          var r = 0;
          function u(t) {
            var n = (0, f.default)(e[r++]);
            t.push((0, s.default)(c)), n.apply(null, t);
          }
          function c(n) {
            if (n || r === e.length) return t.apply(null, arguments);
            u((0, a.default)(arguments, 1));
          }
          u([]);
        });
      var n = u(r(73)),
        i = u(r(26)),
        o = u(r(53)),
        a = u(r(37)),
        s = u(r(54)),
        f = u(r(38));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return (0, i.default)(function(t, r) {
            var i;
            try {
              i = e.apply(this, t);
            } catch (e) {
              return r(e);
            }
            (0, n.default)(i) && 'function' == typeof i.then
              ? i.then(
                  function(e) {
                    s(r, null, e);
                  },
                  function(e) {
                    s(r, e.message ? e : new Error(e));
                  }
                )
              : r(null, i);
          });
        });
      var n = a(r(46)),
        i = a(r(191)),
        o = a(r(192));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t, r) {
        try {
          e(t, r);
        } catch (e) {
          (0, o.default)(f, e);
        }
      }
      function f(e) {
        throw e;
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return function() {
            var t = (0, o.default)(arguments),
              r = t.pop();
            e.call(this, t, r);
          };
        });
      var n,
        i = r(37),
        o = (n = i) && n.__esModule ? n : { default: n };
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      (function(e, n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.hasNextTick = t.hasSetImmediate = void 0),
          (t.fallback = c),
          (t.wrap = d);
        var i,
          o = r(37),
          a = (i = o) && i.__esModule ? i : { default: i };
        var s,
          f = (t.hasSetImmediate = 'function' == typeof e && e),
          u = (t.hasNextTick =
            'object' == typeof n && 'function' == typeof n.nextTick);
        function c(e) {
          setTimeout(e, 0);
        }
        function d(e) {
          return function(t) {
            var r = (0, a.default)(arguments, 1);
            e(function() {
              t.apply(null, r);
            });
          };
        }
        (s = f ? e : u ? n.nextTick : c), (t.default = d(s));
      }.call(this, r(76).setImmediate, r(7)));
    },
    function(e, t, r) {
      (function(e, t) {
        !(function(e, r) {
          'use strict';
          if (!e.setImmediate) {
            var n,
              i,
              o,
              a,
              s,
              f = 1,
              u = {},
              c = !1,
              d = e.document,
              h = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (h = h && h.setTimeout ? h : e),
              '[object process]' === {}.toString.call(e.process)
                ? (n = function(e) {
                    t.nextTick(function() {
                      p(e);
                    });
                  })
                : !(function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        r = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage('', '*'),
                        (e.onmessage = r),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((o = new MessageChannel()).port1.onmessage = function(e) {
                      p(e.data);
                    }),
                    (n = function(e) {
                      o.port2.postMessage(e);
                    }))
                  : d && 'onreadystatechange' in d.createElement('script')
                  ? ((i = d.documentElement),
                    (n = function(e) {
                      var t = d.createElement('script');
                      (t.onreadystatechange = function() {
                        p(e),
                          (t.onreadystatechange = null),
                          i.removeChild(t),
                          (t = null);
                      }),
                        i.appendChild(t);
                    }))
                  : (n = function(e) {
                      setTimeout(p, 0, e);
                    })
                : ((a = 'setImmediate$' + Math.random() + '$'),
                  (s = function(t) {
                    t.source === e &&
                      'string' == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      p(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener('message', s, !1)
                    : e.attachEvent('onmessage', s),
                  (n = function(t) {
                    e.postMessage(a + t, '*');
                  })),
              (h.setImmediate = function(e) {
                'function' != typeof e && (e = new Function('' + e));
                for (
                  var t = new Array(arguments.length - 1), r = 0;
                  r < t.length;
                  r++
                )
                  t[r] = arguments[r + 1];
                var i = { callback: e, args: t };
                return (u[f] = i), n(f), f++;
              }),
              (h.clearImmediate = l);
          }
          function l(e) {
            delete u[e];
          }
          function p(e) {
            if (c) setTimeout(p, 0, e);
            else {
              var t = u[e];
              if (t) {
                c = !0;
                try {
                  !(function(e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(void 0, r);
                    }
                  })(t);
                } finally {
                  l(e), (c = !1);
                }
              }
            }
          }
        })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, r(11), r(7)));
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          (0, i.default)(n.default, e, t);
        });
      var n = o(r(195)),
        i = o(r(201));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, r) {
          ((0, n.default)(e) ? h : l)(e, (0, c.default)(t), r);
        });
      var n = d(r(36)),
        i = d(r(77)),
        o = d(r(196)),
        a = d(r(200)),
        s = d(r(26)),
        f = d(r(53)),
        u = d(r(54)),
        c = d(r(38));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h(e, t, r) {
        r = (0, f.default)(r || s.default);
        var n = 0,
          o = 0,
          a = e.length;
        function c(e, t) {
          e ? r(e) : (++o !== a && t !== i.default) || r(null);
        }
        for (0 === a && r(null); n < a; n++) t(e[n], n, (0, u.default)(c));
      }
      var l = (0, a.default)(o.default, 1 / 0);
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, r, o) {
          (0, n.default)(t)(e, (0, i.default)(r), o);
        });
      var n = o(r(197)),
        i = o(r(38));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return function(t, r, f) {
            if (((f = (0, i.default)(f || n.default)), e <= 0 || !t))
              return f(null);
            var u = (0, o.default)(t),
              c = !1,
              d = 0,
              h = !1;
            function l(e, t) {
              if (((d -= 1), e)) (c = !0), f(e);
              else {
                if (t === s.default || (c && d <= 0)) return (c = !0), f(null);
                h || p();
              }
            }
            function p() {
              for (h = !0; d < e && !c; ) {
                var t = u();
                if (null === t) return (c = !0), void (d <= 0 && f(null));
                (d += 1), r(t.value, t.key, (0, a.default)(l));
              }
              h = !1;
            }
            p();
          };
        });
      var n = f(r(26)),
        i = f(r(53)),
        o = f(r(198)),
        a = f(r(54)),
        s = f(r(77));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          if ((0, n.default)(e))
            return (function(e) {
              var t = -1,
                r = e.length;
              return function() {
                return ++t < r ? { value: e[t], key: t } : null;
              };
            })(e);
          var t = (0, i.default)(e);
          return t
            ? (function(e) {
                var t = -1;
                return function() {
                  var r = e.next();
                  return r.done ? null : (t++, { value: r.value, key: t });
                };
              })(t)
            : ((r = e),
              (a = (0, o.default)(r)),
              (s = -1),
              (f = a.length),
              function() {
                var e = a[++s];
                return s < f ? { value: r[e], key: e } : null;
              });
          var r, a, s, f;
        });
      var n = a(r(36)),
        i = a(r(199)),
        o = a(r(72));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return n && e[n] && e[n]();
        });
      var n = 'function' == typeof Symbol && Symbol.iterator;
      e.exports = t.default;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          return function(r, n, i) {
            return e(r, t, n, i);
          };
        }),
        (e.exports = t.default);
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, r) {
          r = r || n.default;
          var s = (0, i.default)(t) ? [] : {};
          e(
            t,
            function(e, t, r) {
              (0, a.default)(e)(function(e, n) {
                arguments.length > 2 && (n = (0, o.default)(arguments, 1)),
                  (s[t] = n),
                  r(e);
              });
            },
            function(e) {
              r(e, s);
            }
          );
        });
      var n = s(r(26)),
        i = s(r(36)),
        o = s(r(37)),
        a = s(r(38));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e &&
          'object' == typeof e &&
          'function' == typeof e.copy &&
          'function' == typeof e.fill &&
          'function' == typeof e.readUInt8
        );
      };
    },
    function(e, t) {
      'function' == typeof Object.create
        ? (e.exports = function(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }));
          })
        : (e.exports = function(e, t) {
            e.super_ = t;
            var r = function() {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          });
    },
    function(e, t, r) {
      'use strict';
      e.exports = r(205)(r(218));
    },
    function(e, t, r) {
      'use strict';
      var n = r(206),
        i = r(217);
      e.exports = function(e) {
        var t = n(e),
          r = i(e);
        return function(e, n) {
          switch ('string' == typeof e ? e.toLowerCase() : e) {
            case 'keccak224':
              return new t(1152, 448, null, 224, n);
            case 'keccak256':
              return new t(1088, 512, null, 256, n);
            case 'keccak384':
              return new t(832, 768, null, 384, n);
            case 'keccak512':
              return new t(576, 1024, null, 512, n);
            case 'sha3-224':
              return new t(1152, 448, 6, 224, n);
            case 'sha3-256':
              return new t(1088, 512, 6, 256, n);
            case 'sha3-384':
              return new t(832, 768, 6, 384, n);
            case 'sha3-512':
              return new t(576, 1024, 6, 512, n);
            case 'shake128':
              return new r(1344, 256, 31, n);
            case 'shake256':
              return new r(1088, 512, 31, n);
            default:
              throw new Error('Invald algorithm: ' + e);
          }
        };
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(28).Transform,
        o = r(0);
      e.exports = function(e) {
        function t(t, r, n, o, a) {
          i.call(this, a),
            (this._rate = t),
            (this._capacity = r),
            (this._delimitedSuffix = n),
            (this._hashBitLength = o),
            (this._options = a),
            (this._state = new e()),
            this._state.initialize(t, r),
            (this._finalized = !1);
        }
        return (
          o(t, i),
          (t.prototype._transform = function(e, t, r) {
            var n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }),
          (t.prototype._flush = function(e) {
            var t = null;
            try {
              this.push(this.digest());
            } catch (e) {
              t = e;
            }
            e(t);
          }),
          (t.prototype.update = function(e, t) {
            if (!n.isBuffer(e) && 'string' != typeof e)
              throw new TypeError('Data must be a string or a buffer');
            if (this._finalized) throw new Error('Digest already called');
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }),
          (t.prototype.digest = function(e) {
            if (this._finalized) throw new Error('Digest already called');
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            var t = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== e && (t = t.toString(e)), this._resetState(), t;
          }),
          (t.prototype._resetState = function() {
            return this._state.initialize(this._rate, this._capacity), this;
          }),
          (t.prototype._clone = function() {
            var e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }),
          t
        );
      };
    },
    function(e, t, r) {
      'use strict';
      (t.byteLength = function(e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function(e) {
          var t,
            r,
            n = u(e),
            a = n[0],
            s = n[1],
            f = new o(
              (function(e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, a, s)
            ),
            c = 0,
            d = s > 0 ? a - 4 : a;
          for (r = 0; r < d; r += 4)
            (t =
              (i[e.charCodeAt(r)] << 18) |
              (i[e.charCodeAt(r + 1)] << 12) |
              (i[e.charCodeAt(r + 2)] << 6) |
              i[e.charCodeAt(r + 3)]),
              (f[c++] = (t >> 16) & 255),
              (f[c++] = (t >> 8) & 255),
              (f[c++] = 255 & t);
          2 === s &&
            ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
            (f[c++] = 255 & t));
          1 === s &&
            ((t =
              (i[e.charCodeAt(r)] << 10) |
              (i[e.charCodeAt(r + 1)] << 4) |
              (i[e.charCodeAt(r + 2)] >> 2)),
            (f[c++] = (t >> 8) & 255),
            (f[c++] = 255 & t));
          return f;
        }),
        (t.fromByteArray = function(e) {
          for (
            var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i;
            a < s;
            a += 16383
          )
            o.push(c(e, a, a + 16383 > s ? s : a + 16383));
          1 === i
            ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + '=='))
            : 2 === i &&
              ((t = (e[r - 2] << 8) + e[r - 1]),
              o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='));
          return o.join('');
        });
      for (
        var n = [],
          i = [],
          o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          a =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          s = 0,
          f = a.length;
        s < f;
        ++s
      )
        (n[s] = a[s]), (i[a.charCodeAt(s)] = s);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function c(e, t, r) {
        for (var i, o, a = [], s = t; s < r; s += 3)
          (i =
            ((e[s] << 16) & 16711680) +
            ((e[s + 1] << 8) & 65280) +
            (255 & e[s + 2])),
            a.push(
              n[((o = i) >> 18) & 63] +
                n[(o >> 12) & 63] +
                n[(o >> 6) & 63] +
                n[63 & o]
            );
        return a.join('');
      }
      (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
    },
    function(e, t) {
      (t.read = function(e, t, r, n, i) {
        var o,
          a,
          s = 8 * i - n - 1,
          f = (1 << s) - 1,
          u = f >> 1,
          c = -7,
          d = r ? i - 1 : 0,
          h = r ? -1 : 1,
          l = e[t + d];
        for (
          d += h, o = l & ((1 << -c) - 1), l >>= -c, c += s;
          c > 0;
          o = 256 * o + e[t + d], d += h, c -= 8
        );
        for (
          a = o & ((1 << -c) - 1), o >>= -c, c += n;
          c > 0;
          a = 256 * a + e[t + d], d += h, c -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === f) return a ? NaN : (1 / 0) * (l ? -1 : 1);
          (a += Math.pow(2, n)), (o -= u);
        }
        return (l ? -1 : 1) * a * Math.pow(2, o - n);
      }),
        (t.write = function(e, t, r, n, i, o) {
          var a,
            s,
            f,
            u = 8 * o - i - 1,
            c = (1 << u) - 1,
            d = c >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : o - 1,
            p = n ? 1 : -1,
            b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((s = isNaN(t) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                  (t += a + d >= 1 ? h / f : h * Math.pow(2, 1 - d)) * f >= 2 &&
                    (a++, (f /= 2)),
                  a + d >= c
                    ? ((s = 0), (a = c))
                    : a + d >= 1
                    ? ((s = (t * f - 1) * Math.pow(2, i)), (a += d))
                    : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[r + l] = 255 & s, l += p, s /= 256, i -= 8
          );
          for (
            a = (a << i) | s, u += i;
            u > 0;
            e[r + l] = 255 & a, l += p, a /= 256, u -= 8
          );
          e[r + l - p] |= 128 * b;
        });
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      var n = r(56).Buffer,
        i = r(211);
      (e.exports = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (e.prototype.push = function(e) {
            var t = { data: e, next: null };
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (e.prototype.unshift = function(e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t),
              (this.head = t),
              ++this.length;
          }),
          (e.prototype.shift = function() {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (e.prototype.clear = function() {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (e.prototype.join = function(e) {
            if (0 === this.length) return '';
            for (var t = this.head, r = '' + t.data; (t = t.next); )
              r += e + t.data;
            return r;
          }),
          (e.prototype.concat = function(e) {
            if (0 === this.length) return n.alloc(0);
            if (1 === this.length) return this.head.data;
            for (
              var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0;
              a;

            )
              (t = a.data),
                (r = o),
                (i = s),
                t.copy(r, i),
                (s += a.data.length),
                (a = a.next);
            return o;
          }),
          e
        );
      })()),
        i &&
          i.inspect &&
          i.inspect.custom &&
          (e.exports.prototype[i.inspect.custom] = function() {
            var e = i.inspect({ length: this.length });
            return this.constructor.name + ' ' + e;
          });
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      e.exports = o;
      var n = r(85),
        i = Object.create(r(29));
      function o(e) {
        if (!(this instanceof o)) return new o(e);
        n.call(this, e);
      }
      (i.inherits = r(0)),
        i.inherits(o, n),
        (o.prototype._transform = function(e, t, r) {
          r(null, e);
        });
    },
    function(e, t, r) {
      e.exports = r(57);
    },
    function(e, t, r) {
      e.exports = r(17);
    },
    function(e, t, r) {
      e.exports = r(55).Transform;
    },
    function(e, t, r) {
      e.exports = r(55).PassThrough;
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(28).Transform,
        o = r(0);
      e.exports = function(e) {
        function t(t, r, n, o) {
          i.call(this, o),
            (this._rate = t),
            (this._capacity = r),
            (this._delimitedSuffix = n),
            (this._options = o),
            (this._state = new e()),
            this._state.initialize(t, r),
            (this._finalized = !1);
        }
        return (
          o(t, i),
          (t.prototype._transform = function(e, t, r) {
            var n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }),
          (t.prototype._flush = function() {}),
          (t.prototype._read = function(e) {
            this.push(this.squeeze(e));
          }),
          (t.prototype.update = function(e, t) {
            if (!n.isBuffer(e) && 'string' != typeof e)
              throw new TypeError('Data must be a string or a buffer');
            if (this._finalized) throw new Error('Squeeze already called');
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }),
          (t.prototype.squeeze = function(e, t) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            var r = this._state.squeeze(e);
            return void 0 !== t && (r = r.toString(t)), r;
          }),
          (t.prototype._resetState = function() {
            return this._state.initialize(this._rate, this._capacity), this;
          }),
          (t.prototype._clone = function() {
            var e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }),
          t
        );
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(219);
      function o() {
        (this.state = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (o.prototype.initialize = function(e, t) {
        for (var r = 0; r < 50; ++r) this.state[r] = 0;
        (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (o.prototype.absorb = function(e) {
          for (var t = 0; t < e.length; ++t)
            (this.state[~~(this.count / 4)] ^= e[t] << ((this.count % 4) * 8)),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
        }),
        (o.prototype.absorbLastFewBits = function(e) {
          (this.state[~~(this.count / 4)] ^= e << ((this.count % 4) * 8)),
            0 != (128 & e) &&
              this.count === this.blockSize - 1 &&
              i.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (((this.blockSize - 1) % 4) * 8)),
            i.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (o.prototype.squeeze = function(e) {
          this.squeezing || this.absorbLastFewBits(1);
          for (var t = n.alloc(e), r = 0; r < e; ++r)
            (t[r] =
              (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
          return t;
        }),
        (o.prototype.copy = function(e) {
          for (var t = 0; t < 50; ++t) e.state[t] = this.state[t];
          (e.blockSize = this.blockSize),
            (e.count = this.count),
            (e.squeezing = this.squeezing);
        }),
        (e.exports = o);
    },
    function(e, t, r) {
      'use strict';
      var n = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
      ];
      t.p1600 = function(e) {
        for (var t = 0; t < 24; ++t) {
          var r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
            l = d ^ ((o << 1) | (a >>> 31)),
            p = h ^ ((a << 1) | (o >>> 31)),
            b = e[0] ^ l,
            g = e[1] ^ p,
            y = e[10] ^ l,
            v = e[11] ^ p,
            m = e[20] ^ l,
            _ = e[21] ^ p,
            w = e[30] ^ l,
            E = e[31] ^ p,
            S = e[40] ^ l,
            A = e[41] ^ p;
          (l = r ^ ((s << 1) | (f >>> 31))), (p = i ^ ((f << 1) | (s >>> 31)));
          var T = e[2] ^ l,
            M = e[3] ^ p,
            x = e[12] ^ l,
            I = e[13] ^ p,
            L = e[22] ^ l,
            R = e[23] ^ p,
            P = e[32] ^ l,
            k = e[33] ^ p,
            N = e[42] ^ l,
            C = e[43] ^ p;
          (l = o ^ ((u << 1) | (c >>> 31))), (p = a ^ ((c << 1) | (u >>> 31)));
          var O = e[4] ^ l,
            B = e[5] ^ p,
            j = e[14] ^ l,
            D = e[15] ^ p,
            z = e[24] ^ l,
            U = e[25] ^ p,
            K = e[34] ^ l,
            q = e[35] ^ p,
            Y = e[44] ^ l,
            F = e[45] ^ p;
          (l = s ^ ((d << 1) | (h >>> 31))), (p = f ^ ((h << 1) | (d >>> 31)));
          var V = e[6] ^ l,
            H = e[7] ^ p,
            W = e[16] ^ l,
            G = e[17] ^ p,
            Z = e[26] ^ l,
            J = e[27] ^ p,
            $ = e[36] ^ l,
            X = e[37] ^ p,
            Q = e[46] ^ l,
            ee = e[47] ^ p;
          (l = u ^ ((r << 1) | (i >>> 31))), (p = c ^ ((i << 1) | (r >>> 31)));
          var te = e[8] ^ l,
            re = e[9] ^ p,
            ne = e[18] ^ l,
            ie = e[19] ^ p,
            oe = e[28] ^ l,
            ae = e[29] ^ p,
            se = e[38] ^ l,
            fe = e[39] ^ p,
            ue = e[48] ^ l,
            ce = e[49] ^ p,
            de = b,
            he = g,
            le = (v << 4) | (y >>> 28),
            pe = (y << 4) | (v >>> 28),
            be = (m << 3) | (_ >>> 29),
            ge = (_ << 3) | (m >>> 29),
            ye = (E << 9) | (w >>> 23),
            ve = (w << 9) | (E >>> 23),
            me = (S << 18) | (A >>> 14),
            _e = (A << 18) | (S >>> 14),
            we = (T << 1) | (M >>> 31),
            Ee = (M << 1) | (T >>> 31),
            Se = (I << 12) | (x >>> 20),
            Ae = (x << 12) | (I >>> 20),
            Te = (L << 10) | (R >>> 22),
            Me = (R << 10) | (L >>> 22),
            xe = (k << 13) | (P >>> 19),
            Ie = (P << 13) | (k >>> 19),
            Le = (N << 2) | (C >>> 30),
            Re = (C << 2) | (N >>> 30),
            Pe = (B << 30) | (O >>> 2),
            ke = (O << 30) | (B >>> 2),
            Ne = (j << 6) | (D >>> 26),
            Ce = (D << 6) | (j >>> 26),
            Oe = (U << 11) | (z >>> 21),
            Be = (z << 11) | (U >>> 21),
            je = (K << 15) | (q >>> 17),
            De = (q << 15) | (K >>> 17),
            ze = (F << 29) | (Y >>> 3),
            Ue = (Y << 29) | (F >>> 3),
            Ke = (V << 28) | (H >>> 4),
            qe = (H << 28) | (V >>> 4),
            Ye = (G << 23) | (W >>> 9),
            Fe = (W << 23) | (G >>> 9),
            Ve = (Z << 25) | (J >>> 7),
            He = (J << 25) | (Z >>> 7),
            We = ($ << 21) | (X >>> 11),
            Ge = (X << 21) | ($ >>> 11),
            Ze = (ee << 24) | (Q >>> 8),
            Je = (Q << 24) | (ee >>> 8),
            $e = (te << 27) | (re >>> 5),
            Xe = (re << 27) | (te >>> 5),
            Qe = (ne << 20) | (ie >>> 12),
            et = (ie << 20) | (ne >>> 12),
            tt = (ae << 7) | (oe >>> 25),
            rt = (oe << 7) | (ae >>> 25),
            nt = (se << 8) | (fe >>> 24),
            it = (fe << 8) | (se >>> 24),
            ot = (ue << 14) | (ce >>> 18),
            at = (ce << 14) | (ue >>> 18);
          (e[0] = de ^ (~Se & Oe)),
            (e[1] = he ^ (~Ae & Be)),
            (e[10] = Ke ^ (~Qe & be)),
            (e[11] = qe ^ (~et & ge)),
            (e[20] = we ^ (~Ne & Ve)),
            (e[21] = Ee ^ (~Ce & He)),
            (e[30] = $e ^ (~le & Te)),
            (e[31] = Xe ^ (~pe & Me)),
            (e[40] = Pe ^ (~Ye & tt)),
            (e[41] = ke ^ (~Fe & rt)),
            (e[2] = Se ^ (~Oe & We)),
            (e[3] = Ae ^ (~Be & Ge)),
            (e[12] = Qe ^ (~be & xe)),
            (e[13] = et ^ (~ge & Ie)),
            (e[22] = Ne ^ (~Ve & nt)),
            (e[23] = Ce ^ (~He & it)),
            (e[32] = le ^ (~Te & je)),
            (e[33] = pe ^ (~Me & De)),
            (e[42] = Ye ^ (~tt & ye)),
            (e[43] = Fe ^ (~rt & ve)),
            (e[4] = Oe ^ (~We & ot)),
            (e[5] = Be ^ (~Ge & at)),
            (e[14] = be ^ (~xe & ze)),
            (e[15] = ge ^ (~Ie & Ue)),
            (e[24] = Ve ^ (~nt & me)),
            (e[25] = He ^ (~it & _e)),
            (e[34] = Te ^ (~je & Ze)),
            (e[35] = Me ^ (~De & Je)),
            (e[44] = tt ^ (~ye & Le)),
            (e[45] = rt ^ (~ve & Re)),
            (e[6] = We ^ (~ot & de)),
            (e[7] = Ge ^ (~at & he)),
            (e[16] = xe ^ (~ze & Ke)),
            (e[17] = Ie ^ (~Ue & qe)),
            (e[26] = nt ^ (~me & we)),
            (e[27] = it ^ (~_e & Ee)),
            (e[36] = je ^ (~Ze & $e)),
            (e[37] = De ^ (~Je & Xe)),
            (e[46] = ye ^ (~Le & Pe)),
            (e[47] = ve ^ (~Re & ke)),
            (e[8] = ot ^ (~de & Se)),
            (e[9] = at ^ (~he & Ae)),
            (e[18] = ze ^ (~Ke & Qe)),
            (e[19] = Ue ^ (~qe & et)),
            (e[28] = me ^ (~we & Ne)),
            (e[29] = _e ^ (~Ee & Ce)),
            (e[38] = Ze ^ (~$e & le)),
            (e[39] = Je ^ (~Xe & pe)),
            (e[48] = Le ^ (~Pe & Ye)),
            (e[49] = Re ^ (~ke & Fe)),
            (e[0] ^= n[2 * t]),
            (e[1] ^= n[2 * t + 1]);
        }
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(221),
        i = r(222),
        o = r(86);
      function a(e, t) {
        return void 0 === e
          ? t
          : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e);
      }
      e.exports = function(e) {
        return {
          privateKeyVerify: function(t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === t.length && e.privateKeyVerify(t)
            );
          },
          privateKeyExport: function(t, r) {
            n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0));
            var s = e.privateKeyExport(t, r);
            return i.privateKeyExport(t, s, r);
          },
          privateKeyImport: function(t) {
            if (
              (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (t = i.privateKeyImport(t)) &&
                32 === t.length &&
                e.privateKeyVerify(t))
            )
              return t;
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
          },
          privateKeyNegate: function(t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyNegate(t)
            );
          },
          privateKeyModInverse: function(t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyModInverse(t)
            );
          },
          privateKeyTweakAdd: function(t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakAdd(t, r)
            );
          },
          privateKeyTweakMul: function(t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakMul(t, r)
            );
          },
          publicKeyCreate: function(t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyCreate(t, r)
            );
          },
          publicKeyConvert: function(t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyConvert(t, r)
            );
          },
          publicKeyVerify: function(t) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), e.publicKeyVerify(t)
            );
          },
          publicKeyTweakAdd: function(t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakAdd(t, r, i)
            );
          },
          publicKeyTweakMul: function(t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakMul(t, r, i)
            );
          },
          publicKeyCombine: function(t, r) {
            n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID);
            for (var i = 0; i < t.length; ++i)
              n.isBuffer(t[i], o.EC_PUBLIC_KEY_TYPE_INVALID),
                n.isBufferLength2(t[i], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID);
            return (r = a(r, !0)), e.publicKeyCombine(t, r);
          },
          signatureNormalize: function(t) {
            return (
              n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              e.signatureNormalize(t)
            );
          },
          signatureExport: function(t) {
            n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID);
            var r = e.signatureExport(t);
            return i.signatureExport(r);
          },
          signatureImport: function(t) {
            n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
            var r = i.signatureImport(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          signatureImportLax: function(t) {
            n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
            var r = i.signatureImportLax(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          sign: function(t, r, i) {
            n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID);
            var a = null,
              s = null;
            return (
              void 0 !== i &&
                (n.isObject(i, o.OPTIONS_TYPE_INVALID),
                void 0 !== i.data &&
                  (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID),
                  n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (a = i.data)),
                void 0 !== i.noncefn &&
                  (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (s = i.noncefn))),
              e.sign(t, r, s, a)
            );
          },
          verify: function(t, r, i) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              e.verify(t, r, i)
            );
          },
          recover: function(t, r, i, s) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID),
              n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (s = a(s, !0)),
              e.recover(t, r, i, s)
            );
          },
          ecdh: function(t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.ecdh(t, r)
            );
          },
          ecdhUnsafe: function(t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (i = a(i, !0)),
              e.ecdhUnsafe(t, r, i)
            );
          }
        };
      };
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        var r = Object.prototype.toString;
        (t.isArray = function(e, t) {
          if (!Array.isArray(e)) throw TypeError(t);
        }),
          (t.isBoolean = function(e, t) {
            if ('[object Boolean]' !== r.call(e)) throw TypeError(t);
          }),
          (t.isBuffer = function(t, r) {
            if (!e.isBuffer(t)) throw TypeError(r);
          }),
          (t.isFunction = function(e, t) {
            if ('[object Function]' !== r.call(e)) throw TypeError(t);
          }),
          (t.isNumber = function(e, t) {
            if ('[object Number]' !== r.call(e)) throw TypeError(t);
          }),
          (t.isObject = function(e, t) {
            if ('[object Object]' !== r.call(e)) throw TypeError(t);
          }),
          (t.isBufferLength = function(e, t, r) {
            if (e.length !== t) throw RangeError(r);
          }),
          (t.isBufferLength2 = function(e, t, r, n) {
            if (e.length !== t && e.length !== r) throw RangeError(n);
          }),
          (t.isLengthGTZero = function(e, t) {
            if (0 === e.length) throw RangeError(t);
          }),
          (t.isNumberInInterval = function(e, t, r, n) {
            if (e <= t || e >= r) throw RangeError(n);
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(223),
        o = n.from([
          48,
          129,
          211,
          2,
          1,
          1,
          4,
          32,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          160,
          129,
          133,
          48,
          129,
          130,
          2,
          1,
          1,
          48,
          44,
          6,
          7,
          42,
          134,
          72,
          206,
          61,
          1,
          1,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          255,
          255,
          252,
          47,
          48,
          6,
          4,
          1,
          0,
          4,
          1,
          7,
          4,
          33,
          2,
          121,
          190,
          102,
          126,
          249,
          220,
          187,
          172,
          85,
          160,
          98,
          149,
          206,
          135,
          11,
          7,
          2,
          155,
          252,
          219,
          45,
          206,
          40,
          217,
          89,
          242,
          129,
          91,
          22,
          248,
          23,
          152,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          186,
          174,
          220,
          230,
          175,
          72,
          160,
          59,
          191,
          210,
          94,
          140,
          208,
          54,
          65,
          65,
          2,
          1,
          1,
          161,
          36,
          3,
          34,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]),
        a = n.from([
          48,
          130,
          1,
          19,
          2,
          1,
          1,
          4,
          32,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          160,
          129,
          165,
          48,
          129,
          162,
          2,
          1,
          1,
          48,
          44,
          6,
          7,
          42,
          134,
          72,
          206,
          61,
          1,
          1,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          255,
          255,
          252,
          47,
          48,
          6,
          4,
          1,
          0,
          4,
          1,
          7,
          4,
          65,
          4,
          121,
          190,
          102,
          126,
          249,
          220,
          187,
          172,
          85,
          160,
          98,
          149,
          206,
          135,
          11,
          7,
          2,
          155,
          252,
          219,
          45,
          206,
          40,
          217,
          89,
          242,
          129,
          91,
          22,
          248,
          23,
          152,
          72,
          58,
          218,
          119,
          38,
          163,
          196,
          101,
          93,
          164,
          251,
          252,
          14,
          17,
          8,
          168,
          253,
          23,
          180,
          72,
          166,
          133,
          84,
          25,
          156,
          71,
          208,
          143,
          251,
          16,
          212,
          184,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          186,
          174,
          220,
          230,
          175,
          72,
          160,
          59,
          191,
          210,
          94,
          140,
          208,
          54,
          65,
          65,
          2,
          1,
          1,
          161,
          68,
          3,
          66,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]);
      (t.privateKeyExport = function(e, t, r) {
        var i = n.from(r ? o : a);
        return e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i;
      }),
        (t.privateKeyImport = function(e) {
          var t = e.length,
            r = 0;
          if (
            !(t < r + 1 || 48 !== e[r]) &&
            !(t < (r += 1) + 1) &&
            128 & e[r]
          ) {
            var n = 127 & e[r];
            if (((r += 1), !(n < 1 || n > 2 || t < r + n))) {
              var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
              if (
                !(
                  t < (r += n) + i ||
                  t < r + 3 ||
                  2 !== e[r] ||
                  1 !== e[r + 1] ||
                  1 !== e[r + 2] ||
                  t < (r += 3) + 2 ||
                  4 !== e[r] ||
                  e[r + 1] > 32 ||
                  t < r + 2 + e[r + 1]
                )
              )
                return e.slice(r + 2, r + 2 + e[r + 1]);
            }
          }
        }),
        (t.signatureExport = function(e) {
          for (
            var t = n.concat([n.from([0]), e.r]), r = 33, o = 0;
            r > 1 && 0 === t[o] && !(128 & t[o + 1]);
            --r, ++o
          );
          for (
            var a = n.concat([n.from([0]), e.s]), s = 33, f = 0;
            s > 1 && 0 === a[f] && !(128 & a[f + 1]);
            --s, ++f
          );
          return i.encode(t.slice(o), a.slice(f));
        }),
        (t.signatureImport = function(e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0);
          try {
            var o = i.decode(e);
            if (
              (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)),
              o.r.length > 32)
            )
              throw new Error('R length is too long');
            if (
              (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)),
              o.s.length > 32)
            )
              throw new Error('S length is too long');
          } catch (e) {
            return;
          }
          return (
            o.r.copy(t, 32 - o.r.length),
            o.s.copy(r, 32 - o.s.length),
            { r: t, s: r }
          );
        }),
        (t.signatureImportLax = function(e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0),
            i = e.length,
            o = 0;
          if (48 === e[o++]) {
            var a = e[o++];
            if (!(128 & a && (o += a - 128) > i) && 2 === e[o++]) {
              var s = e[o++];
              if (128 & s) {
                if (o + (a = s - 128) > i) return;
                for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + e[o];
              }
              if (!(s > i - o)) {
                var f = o;
                if (((o += s), 2 === e[o++])) {
                  var u = e[o++];
                  if (128 & u) {
                    if (o + (a = u - 128) > i) return;
                    for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                    for (u = 0; a > 0; o += 1, a -= 1) u = (u << 8) + e[o];
                  }
                  if (!(u > i - o)) {
                    var c = o;
                    for (o += u; s > 0 && 0 === e[f]; s -= 1, f += 1);
                    if (!(s > 32)) {
                      var d = e.slice(f, f + s);
                      for (
                        d.copy(t, 32 - d.length);
                        u > 0 && 0 === e[c];
                        u -= 1, c += 1
                      );
                      if (!(u > 32)) {
                        var h = e.slice(c, c + u);
                        return h.copy(r, 32 - h.length), { r: t, s: r };
                      }
                    }
                  }
                }
              }
            }
          }
        });
    },
    function(e, t, r) {
      var n = r(1).Buffer;
      e.exports = {
        check: function(e) {
          if (e.length < 8) return !1;
          if (e.length > 72) return !1;
          if (48 !== e[0]) return !1;
          if (e[1] !== e.length - 2) return !1;
          if (2 !== e[2]) return !1;
          var t = e[3];
          if (0 === t) return !1;
          if (5 + t >= e.length) return !1;
          if (2 !== e[4 + t]) return !1;
          var r = e[5 + t];
          return (
            0 !== r &&
            6 + t + r === e.length &&
              !(128 & e[4]) &&
                !(t > 1 && 0 === e[4] && !(128 & e[5])) &&
                  !(128 & e[t + 6]) &&
                    !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
          );
        },
        decode: function(e) {
          if (e.length < 8) throw new Error('DER sequence length is too short');
          if (e.length > 72) throw new Error('DER sequence length is too long');
          if (48 !== e[0]) throw new Error('Expected DER sequence');
          if (e[1] !== e.length - 2)
            throw new Error('DER sequence length is invalid');
          if (2 !== e[2]) throw new Error('Expected DER integer');
          var t = e[3];
          if (0 === t) throw new Error('R length is zero');
          if (5 + t >= e.length) throw new Error('R length is too long');
          if (2 !== e[4 + t]) throw new Error('Expected DER integer (2)');
          var r = e[5 + t];
          if (0 === r) throw new Error('S length is zero');
          if (6 + t + r !== e.length) throw new Error('S length is invalid');
          if (128 & e[4]) throw new Error('R value is negative');
          if (t > 1 && 0 === e[4] && !(128 & e[5]))
            throw new Error('R value excessively padded');
          if (128 & e[t + 6]) throw new Error('S value is negative');
          if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
            throw new Error('S value excessively padded');
          return { r: e.slice(4, 4 + t), s: e.slice(6 + t) };
        },
        encode: function(e, t) {
          var r = e.length,
            i = t.length;
          if (0 === r) throw new Error('R length is zero');
          if (0 === i) throw new Error('S length is zero');
          if (r > 33) throw new Error('R length is too long');
          if (i > 33) throw new Error('S length is too long');
          if (128 & e[0]) throw new Error('R value is negative');
          if (128 & t[0]) throw new Error('S value is negative');
          if (r > 1 && 0 === e[0] && !(128 & e[1]))
            throw new Error('R value excessively padded');
          if (i > 1 && 0 === t[0] && !(128 & t[1]))
            throw new Error('S value excessively padded');
          var o = n.allocUnsafe(6 + r + i);
          return (
            (o[0] = 48),
            (o[1] = o.length - 2),
            (o[2] = 2),
            (o[3] = e.length),
            e.copy(o, 4),
            (o[4 + r] = 2),
            (o[5 + r] = t.length),
            t.copy(o, 6 + r),
            o
          );
        }
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(1).Buffer,
        i = r(58),
        o = r(2),
        a = r(242).ec,
        s = r(86),
        f = new a('secp256k1'),
        u = f.curve;
      function c(e) {
        var t = e[0];
        switch (t) {
          case 2:
          case 3:
            return 33 !== e.length
              ? null
              : (function(e, t) {
                  var r = new o(t);
                  if (r.cmp(u.p) >= 0) return null;
                  var n = (r = r.toRed(u.red))
                    .redSqr()
                    .redIMul(r)
                    .redIAdd(u.b)
                    .redSqrt();
                  return (
                    (3 === e) !== n.isOdd() && (n = n.redNeg()),
                    f.keyPair({ pub: { x: r, y: n } })
                  );
                })(t, e.slice(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : (function(e, t, r) {
                  var n = new o(t),
                    i = new o(r);
                  if (n.cmp(u.p) >= 0 || i.cmp(u.p) >= 0) return null;
                  if (
                    ((n = n.toRed(u.red)),
                    (i = i.toRed(u.red)),
                    (6 === e || 7 === e) && i.isOdd() !== (7 === e))
                  )
                    return null;
                  var a = n.redSqr().redIMul(n);
                  return i
                    .redSqr()
                    .redISub(a.redIAdd(u.b))
                    .isZero()
                    ? f.keyPair({ pub: { x: n, y: i } })
                    : null;
                })(t, e.slice(1, 33), e.slice(33, 65));
          default:
            return null;
        }
      }
      (t.privateKeyVerify = function(e) {
        var t = new o(e);
        return t.cmp(u.n) < 0 && !t.isZero();
      }),
        (t.privateKeyExport = function(e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
          return n.from(f.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.privateKeyNegate = function(e) {
          var t = new o(e);
          return t.isZero()
            ? n.alloc(32)
            : u.n
                .sub(t)
                .umod(u.n)
                .toArrayLike(n, 'be', 32);
        }),
        (t.privateKeyModInverse = function(e) {
          var t = new o(e);
          if (t.cmp(u.n) >= 0 || t.isZero())
            throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
          return t.invm(u.n).toArrayLike(n, 'be', 32);
        }),
        (t.privateKeyTweakAdd = function(e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          if ((r.iadd(new o(e)), r.cmp(u.n) >= 0 && r.isub(u.n), r.isZero()))
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          return r.toArrayLike(n, 'be', 32);
        }),
        (t.privateKeyTweakMul = function(e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
          return (
            r.imul(new o(e)),
            r.cmp(u.n) && (r = r.umod(u.n)),
            r.toArrayLike(n, 'be', 32)
          );
        }),
        (t.publicKeyCreate = function(e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
          return n.from(f.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.publicKeyConvert = function(e, t) {
          var r = c(e);
          if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return n.from(r.getPublic(t, !0));
        }),
        (t.publicKeyVerify = function(e) {
          return null !== c(e);
        }),
        (t.publicKeyTweakAdd = function(e, t, r) {
          var i = c(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if ((t = new o(t)).cmp(u.n) >= 0)
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          var a = u.g.mul(t).add(i.pub);
          if (a.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          return n.from(a.encode(!0, r));
        }),
        (t.publicKeyTweakMul = function(e, t, r) {
          var i = c(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if ((t = new o(t)).cmp(u.n) >= 0 || t.isZero())
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
          return n.from(i.pub.mul(t).encode(!0, r));
        }),
        (t.publicKeyCombine = function(e, t) {
          for (var r = new Array(e.length), i = 0; i < e.length; ++i)
            if (((r[i] = c(e[i])), null === r[i]))
              throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          for (var o = r[0].pub, a = 1; a < r.length; ++a) o = o.add(r[a].pub);
          if (o.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
          return n.from(o.encode(!0, t));
        }),
        (t.signatureNormalize = function(e) {
          var t = new o(e.slice(0, 32)),
            r = new o(e.slice(32, 64));
          if (t.cmp(u.n) >= 0 || r.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          var i = n.from(e);
          return (
            1 === r.cmp(f.nh) &&
              u.n
                .sub(r)
                .toArrayLike(n, 'be', 32)
                .copy(i, 32),
            i
          );
        }),
        (t.signatureExport = function(e) {
          var t = e.slice(0, 32),
            r = e.slice(32, 64);
          if (new o(t).cmp(u.n) >= 0 || new o(r).cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          return { r: t, s: r };
        }),
        (t.signatureImport = function(e) {
          var t = new o(e.r);
          t.cmp(u.n) >= 0 && (t = new o(0));
          var r = new o(e.s);
          return (
            r.cmp(u.n) >= 0 && (r = new o(0)),
            n.concat([t.toArrayLike(n, 'be', 32), r.toArrayLike(n, 'be', 32)])
          );
        }),
        (t.sign = function(e, t, r, i) {
          if ('function' == typeof r) {
            var a = r;
            r = function(r) {
              var f = a(e, t, null, i, r);
              if (!n.isBuffer(f) || 32 !== f.length)
                throw new Error(s.ECDSA_SIGN_FAIL);
              return new o(f);
            };
          }
          var c = new o(t);
          if (c.cmp(u.n) >= 0 || c.isZero()) throw new Error(s.ECDSA_SIGN_FAIL);
          var d = f.sign(e, t, { canonical: !0, k: r, pers: i });
          return {
            signature: n.concat([
              d.r.toArrayLike(n, 'be', 32),
              d.s.toArrayLike(n, 'be', 32)
            ]),
            recovery: d.recoveryParam
          };
        }),
        (t.verify = function(e, t, r) {
          var n = { r: t.slice(0, 32), s: t.slice(32, 64) },
            i = new o(n.r),
            a = new o(n.s);
          if (i.cmp(u.n) >= 0 || a.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          if (1 === a.cmp(f.nh) || i.isZero() || a.isZero()) return !1;
          var d = c(r);
          if (null === d) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return f.verify(e, n, { x: d.pub.x, y: d.pub.y });
        }),
        (t.recover = function(e, t, r, i) {
          var a = { r: t.slice(0, 32), s: t.slice(32, 64) },
            c = new o(a.r),
            d = new o(a.s);
          if (c.cmp(u.n) >= 0 || d.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          try {
            if (c.isZero() || d.isZero()) throw new Error();
            var h = f.recoverPubKey(e, a, r);
            return n.from(h.encode(!0, i));
          } catch (e) {
            throw new Error(s.ECDSA_RECOVER_FAIL);
          }
        }),
        (t.ecdh = function(e, r) {
          var n = t.ecdhUnsafe(e, r, !0);
          return i('sha256')
            .update(n)
            .digest();
        }),
        (t.ecdhUnsafe = function(e, t, r) {
          var i = c(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          var a = new o(t);
          if (a.cmp(u.n) >= 0 || a.isZero()) throw new Error(s.ECDH_FAIL);
          return n.from(i.pub.mul(a).encode(!0, r));
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(0),
        i = r(87),
        o = r(1).Buffer,
        a = new Array(16);
      function s() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function f(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function u(e, t, r, n, i, o, a) {
        return (f((e + ((t & r) | (~t & n)) + i + o) | 0, a) + t) | 0;
      }
      function c(e, t, r, n, i, o, a) {
        return (f((e + ((t & n) | (r & ~n)) + i + o) | 0, a) + t) | 0;
      }
      function d(e, t, r, n, i, o, a) {
        return (f((e + (t ^ r ^ n) + i + o) | 0, a) + t) | 0;
      }
      function h(e, t, r, n, i, o, a) {
        return (f((e + (r ^ (t | ~n)) + i + o) | 0, a) + t) | 0;
      }
      n(s, i),
        (s.prototype._update = function() {
          for (var e = a, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
          var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d;
          (r = u(r, n, i, o, e[0], 3614090360, 7)),
            (o = u(o, r, n, i, e[1], 3905402710, 12)),
            (i = u(i, o, r, n, e[2], 606105819, 17)),
            (n = u(n, i, o, r, e[3], 3250441966, 22)),
            (r = u(r, n, i, o, e[4], 4118548399, 7)),
            (o = u(o, r, n, i, e[5], 1200080426, 12)),
            (i = u(i, o, r, n, e[6], 2821735955, 17)),
            (n = u(n, i, o, r, e[7], 4249261313, 22)),
            (r = u(r, n, i, o, e[8], 1770035416, 7)),
            (o = u(o, r, n, i, e[9], 2336552879, 12)),
            (i = u(i, o, r, n, e[10], 4294925233, 17)),
            (n = u(n, i, o, r, e[11], 2304563134, 22)),
            (r = u(r, n, i, o, e[12], 1804603682, 7)),
            (o = u(o, r, n, i, e[13], 4254626195, 12)),
            (i = u(i, o, r, n, e[14], 2792965006, 17)),
            (r = c(
              r,
              (n = u(n, i, o, r, e[15], 1236535329, 22)),
              i,
              o,
              e[1],
              4129170786,
              5
            )),
            (o = c(o, r, n, i, e[6], 3225465664, 9)),
            (i = c(i, o, r, n, e[11], 643717713, 14)),
            (n = c(n, i, o, r, e[0], 3921069994, 20)),
            (r = c(r, n, i, o, e[5], 3593408605, 5)),
            (o = c(o, r, n, i, e[10], 38016083, 9)),
            (i = c(i, o, r, n, e[15], 3634488961, 14)),
            (n = c(n, i, o, r, e[4], 3889429448, 20)),
            (r = c(r, n, i, o, e[9], 568446438, 5)),
            (o = c(o, r, n, i, e[14], 3275163606, 9)),
            (i = c(i, o, r, n, e[3], 4107603335, 14)),
            (n = c(n, i, o, r, e[8], 1163531501, 20)),
            (r = c(r, n, i, o, e[13], 2850285829, 5)),
            (o = c(o, r, n, i, e[2], 4243563512, 9)),
            (i = c(i, o, r, n, e[7], 1735328473, 14)),
            (r = d(
              r,
              (n = c(n, i, o, r, e[12], 2368359562, 20)),
              i,
              o,
              e[5],
              4294588738,
              4
            )),
            (o = d(o, r, n, i, e[8], 2272392833, 11)),
            (i = d(i, o, r, n, e[11], 1839030562, 16)),
            (n = d(n, i, o, r, e[14], 4259657740, 23)),
            (r = d(r, n, i, o, e[1], 2763975236, 4)),
            (o = d(o, r, n, i, e[4], 1272893353, 11)),
            (i = d(i, o, r, n, e[7], 4139469664, 16)),
            (n = d(n, i, o, r, e[10], 3200236656, 23)),
            (r = d(r, n, i, o, e[13], 681279174, 4)),
            (o = d(o, r, n, i, e[0], 3936430074, 11)),
            (i = d(i, o, r, n, e[3], 3572445317, 16)),
            (n = d(n, i, o, r, e[6], 76029189, 23)),
            (r = d(r, n, i, o, e[9], 3654602809, 4)),
            (o = d(o, r, n, i, e[12], 3873151461, 11)),
            (i = d(i, o, r, n, e[15], 530742520, 16)),
            (r = h(
              r,
              (n = d(n, i, o, r, e[2], 3299628645, 23)),
              i,
              o,
              e[0],
              4096336452,
              6
            )),
            (o = h(o, r, n, i, e[7], 1126891415, 10)),
            (i = h(i, o, r, n, e[14], 2878612391, 15)),
            (n = h(n, i, o, r, e[5], 4237533241, 21)),
            (r = h(r, n, i, o, e[12], 1700485571, 6)),
            (o = h(o, r, n, i, e[3], 2399980690, 10)),
            (i = h(i, o, r, n, e[10], 4293915773, 15)),
            (n = h(n, i, o, r, e[1], 2240044497, 21)),
            (r = h(r, n, i, o, e[8], 1873313359, 6)),
            (o = h(o, r, n, i, e[15], 4264355552, 10)),
            (i = h(i, o, r, n, e[6], 2734768916, 15)),
            (n = h(n, i, o, r, e[13], 1309151649, 21)),
            (r = h(r, n, i, o, e[4], 4149444226, 6)),
            (o = h(o, r, n, i, e[11], 3174756917, 10)),
            (i = h(i, o, r, n, e[2], 718787259, 15)),
            (n = h(n, i, o, r, e[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + n) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function() {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = o.allocUnsafe(16);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
          );
        }),
        (e.exports = s);
    },
    function(e, t, r) {
      ((t = e.exports = r(88)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(92)),
        (t.Duplex = r(22)),
        (t.Transform = r(93)),
        (t.PassThrough = r(232)),
        (t.finished = r(59)),
        (t.pipeline = r(233));
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var a = r(4).Buffer,
        s = r(229).inspect,
        f = (s && s.custom) || 'inspect';
      e.exports = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var t, r, u;
        return (
          (t = e),
          (r = [
            {
              key: 'push',
              value: function(e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              }
            },
            {
              key: 'unshift',
              value: function(e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              }
            },
            {
              key: 'shift',
              value: function() {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              }
            },
            {
              key: 'clear',
              value: function() {
                (this.head = this.tail = null), (this.length = 0);
              }
            },
            {
              key: 'join',
              value: function(e) {
                if (0 === this.length) return '';
                for (var t = this.head, r = '' + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              }
            },
            {
              key: 'concat',
              value: function(e) {
                if (0 === this.length) return a.alloc(0);
                for (
                  var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0;
                  o;

                )
                  (t = o.data),
                    (r = i),
                    (n = s),
                    a.prototype.copy.call(t, r, n),
                    (s += o.data.length),
                    (o = o.next);
                return i;
              }
            },
            {
              key: 'consume',
              value: function(e, t) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                );
              }
            },
            {
              key: 'first',
              value: function() {
                return this.head.data;
              }
            },
            {
              key: '_getString',
              value: function(e) {
                var t = this.head,
                  r = 1,
                  n = t.data;
                for (e -= n.length; (t = t.next); ) {
                  var i = t.data,
                    o = e > i.length ? i.length : e;
                  if (
                    (o === i.length ? (n += i) : (n += i.slice(0, e)),
                    0 == (e -= o))
                  ) {
                    o === i.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              }
            },
            {
              key: '_getBuffer',
              value: function(e) {
                var t = a.allocUnsafe(e),
                  r = this.head,
                  n = 1;
                for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                  var i = r.data,
                    o = e > i.length ? i.length : e;
                  if ((i.copy(t, t.length - e, 0, o), 0 == (e -= o))) {
                    o === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), t;
              }
            },
            {
              key: f,
              value: function(e, t) {
                return s(
                  this,
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? n(Object(r), !0).forEach(function(t) {
                            i(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : n(Object(r)).forEach(function(t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  })({}, t, { depth: 0, customInspect: !1 })
                );
              }
            }
          ]) && o(t.prototype, r),
          u && o(t, u),
          e
        );
      })();
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      (function(t) {
        var n;
        function i(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        var o = r(59),
          a = Symbol('lastResolve'),
          s = Symbol('lastReject'),
          f = Symbol('error'),
          u = Symbol('ended'),
          c = Symbol('lastPromise'),
          d = Symbol('handlePromise'),
          h = Symbol('stream');
        function l(e, t) {
          return { value: e, done: t };
        }
        function p(e) {
          var t = e[a];
          if (null !== t) {
            var r = e[h].read();
            null !== r &&
              ((e[c] = null), (e[a] = null), (e[s] = null), t(l(r, !1)));
          }
        }
        function b(e) {
          t.nextTick(p, e);
        }
        var g = Object.getPrototypeOf(function() {}),
          y = Object.setPrototypeOf(
            (i(
              (n = {
                get stream() {
                  return this[h];
                },
                next: function() {
                  var e = this,
                    r = this[f];
                  if (null !== r) return Promise.reject(r);
                  if (this[u]) return Promise.resolve(l(void 0, !0));
                  if (this[h].destroyed)
                    return new Promise(function(r, n) {
                      t.nextTick(function() {
                        e[f] ? n(e[f]) : r(l(void 0, !0));
                      });
                    });
                  var n,
                    i = this[c];
                  if (i)
                    n = new Promise(
                      (function(e, t) {
                        return function(r, n) {
                          e.then(function() {
                            t[u] ? r(l(void 0, !0)) : t[d](r, n);
                          }, n);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[h].read();
                    if (null !== o) return Promise.resolve(l(o, !1));
                    n = new Promise(this[d]);
                  }
                  return (this[c] = n), n;
                }
              }),
              Symbol.asyncIterator,
              function() {
                return this;
              }
            ),
            i(n, 'return', function() {
              var e = this;
              return new Promise(function(t, r) {
                e[h].destroy(null, function(e) {
                  e ? r(e) : t(l(void 0, !0));
                });
              });
            }),
            n),
            g
          );
        e.exports = function(e) {
          var t,
            r = Object.create(
              y,
              (i((t = {}), h, { value: e, writable: !0 }),
              i(t, a, { value: null, writable: !0 }),
              i(t, s, { value: null, writable: !0 }),
              i(t, f, { value: null, writable: !0 }),
              i(t, u, { value: e._readableState.endEmitted, writable: !0 }),
              i(t, d, {
                value: function(e, t) {
                  var n = r[h].read();
                  n
                    ? ((r[c] = null), (r[a] = null), (r[s] = null), e(l(n, !1)))
                    : ((r[a] = e), (r[s] = t));
                },
                writable: !0
              }),
              t)
            );
          return (
            (r[c] = null),
            o(e, function(e) {
              if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
                var t = r[s];
                return (
                  null !== t &&
                    ((r[c] = null), (r[a] = null), (r[s] = null), t(e)),
                  void (r[f] = e)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[c] = null), (r[a] = null), (r[s] = null), n(l(void 0, !0))),
                (r[u] = !0);
            }),
            e.on('readable', b.bind(null, r)),
            r
          );
        };
      }.call(this, r(7)));
    },
    function(e, t) {
      e.exports = function() {
        throw new Error('Readable.from is not available in the browser');
      };
    },
    function(e, t, r) {
      'use strict';
      e.exports = i;
      var n = r(93);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e);
      }
      r(0)(i, n),
        (i.prototype._transform = function(e, t, r) {
          r(null, e);
        });
    },
    function(e, t, r) {
      'use strict';
      var n;
      var i = r(21).codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function s(e) {
        if (e) throw e;
      }
      function f(e, t, i, o) {
        o = (function(e) {
          var t = !1;
          return function() {
            t || ((t = !0), e.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        e.on('close', function() {
          s = !0;
        }),
          void 0 === n && (n = r(59)),
          n(e, { readable: t, writable: i }, function(e) {
            if (e) return o(e);
            (s = !0), o();
          });
        var f = !1;
        return function(t) {
          if (!s && !f)
            return (
              (f = !0),
              (function(e) {
                return e.setHeader && 'function' == typeof e.abort;
              })(e)
                ? e.abort()
                : 'function' == typeof e.destroy
                ? e.destroy()
                : void o(t || new a('pipe'))
            );
        };
      }
      function u(e) {
        e();
      }
      function c(e, t) {
        return e.pipe(t);
      }
      function d(e) {
        return e.length
          ? 'function' != typeof e[e.length - 1]
            ? s
            : e.pop()
          : s;
      }
      e.exports = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n,
          i = d(t);
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o('streams');
        var a = t.map(function(e, r) {
          var o = r < t.length - 1;
          return f(e, o, r > 0, function(e) {
            n || (n = e), e && a.forEach(u), o || (a.forEach(u), i(n));
          });
        });
        return t.reduce(c);
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(4).Buffer,
        i = r(0),
        o = r(87),
        a = new Array(16),
        s = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ],
        f = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ],
        u = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ],
        c = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ],
        d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function l() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function p(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function b(e, t, r, n, i, o, a, s) {
        return (p((e + (t ^ r ^ n) + o + a) | 0, s) + i) | 0;
      }
      function g(e, t, r, n, i, o, a, s) {
        return (p((e + ((t & r) | (~t & n)) + o + a) | 0, s) + i) | 0;
      }
      function y(e, t, r, n, i, o, a, s) {
        return (p((e + ((t | ~r) ^ n) + o + a) | 0, s) + i) | 0;
      }
      function v(e, t, r, n, i, o, a, s) {
        return (p((e + ((t & n) | (r & ~n)) + o + a) | 0, s) + i) | 0;
      }
      function m(e, t, r, n, i, o, a, s) {
        return (p((e + (t ^ (r | ~n)) + o + a) | 0, s) + i) | 0;
      }
      i(l, o),
        (l.prototype._update = function() {
          for (var e = a, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
          for (
            var r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              _ = 0 | this._a,
              w = 0 | this._b,
              E = 0 | this._c,
              S = 0 | this._d,
              A = 0 | this._e,
              T = 0;
            T < 80;
            T += 1
          ) {
            var M, x;
            T < 16
              ? ((M = b(r, n, i, o, l, e[s[T]], d[0], u[T])),
                (x = m(_, w, E, S, A, e[f[T]], h[0], c[T])))
              : T < 32
              ? ((M = g(r, n, i, o, l, e[s[T]], d[1], u[T])),
                (x = v(_, w, E, S, A, e[f[T]], h[1], c[T])))
              : T < 48
              ? ((M = y(r, n, i, o, l, e[s[T]], d[2], u[T])),
                (x = y(_, w, E, S, A, e[f[T]], h[2], c[T])))
              : T < 64
              ? ((M = v(r, n, i, o, l, e[s[T]], d[3], u[T])),
                (x = g(_, w, E, S, A, e[f[T]], h[3], c[T])))
              : ((M = m(r, n, i, o, l, e[s[T]], d[4], u[T])),
                (x = b(_, w, E, S, A, e[f[T]], h[4], c[T]))),
              (r = l),
              (l = o),
              (o = p(i, 10)),
              (i = n),
              (n = M),
              (_ = A),
              (A = S),
              (S = p(E, 10)),
              (E = w),
              (w = x);
          }
          var I = (this._b + i + S) | 0;
          (this._b = (this._c + o + A) | 0),
            (this._c = (this._d + l + _) | 0),
            (this._d = (this._e + r + w) | 0),
            (this._e = (this._a + n + E) | 0),
            (this._a = I);
        }),
        (l.prototype._digest = function() {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = n.alloc ? n.alloc(20) : new n(20);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e.writeInt32LE(this._e, 16),
            e
          );
        }),
        (e.exports = l);
    },
    function(e, t, r) {
      ((t = e.exports = function(e) {
        e = e.toLowerCase();
        var r = t[e];
        if (!r)
          throw new Error(e + ' is not supported (we accept pull requests)');
        return new r();
      }).sha = r(236)),
        (t.sha1 = r(237)),
        (t.sha224 = r(238)),
        (t.sha256 = r(94)),
        (t.sha384 = r(239)),
        (t.sha512 = r(95));
    },
    function(e, t, r) {
      var n = r(0),
        i = r(23),
        o = r(1).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(e) {
        return (e << 30) | (e >>> 2);
      }
      function c(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n;
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              d = 0;
            d < 16;
            ++d
          )
            r[d] = e.readInt32BE(4 * d);
          for (; d < 80; ++d)
            r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
          for (var h = 0; h < 80; ++h) {
            var l = ~~(h / 20),
              p =
                0 |
                ((((t = n) << 5) | (t >>> 27)) +
                  c(l, i, o, s) +
                  f +
                  r[h] +
                  a[l]);
            (f = s), (s = o), (o = u(i)), (i = n), (n = p);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function() {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(0),
        i = r(23),
        o = r(1).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function u(e) {
        return (e << 5) | (e >>> 27);
      }
      function c(e) {
        return (e << 30) | (e >>> 2);
      }
      function d(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n;
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function(e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            r[h] = e.readInt32BE(4 * h);
          for (; h < 80; ++h)
            r[h] =
              ((t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1) |
              (t >>> 31);
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20),
              b = (u(n) + d(p, i, o, s) + f + r[l] + a[p]) | 0;
            (f = s), (s = o), (o = c(i)), (i = n), (n = b);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function() {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(0),
        i = r(94),
        o = r(23),
        a = r(1).Buffer,
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), o.call(this, 64, 56);
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function() {
          var e = a.allocUnsafe(28);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(0),
        i = r(95),
        o = r(23),
        a = r(1).Buffer,
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), o.call(this, 128, 112);
      }
      n(f, i),
        (f.prototype.init = function() {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function() {
          var e = a.allocUnsafe(48);
          function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
          );
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      var n = r(1).Buffer,
        i = r(28).Transform,
        o = r(30).StringDecoder;
      function a(e) {
        i.call(this),
          (this.hashMode = 'string' == typeof e),
          this.hashMode
            ? (this[e] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(0)(a, i),
        (a.prototype.update = function(e, t, r) {
          'string' == typeof e && (e = n.from(e, t));
          var i = this._update(e);
          return this.hashMode ? this : (r && (i = this._toString(i, r)), i);
        }),
        (a.prototype.setAutoPadding = function() {}),
        (a.prototype.getAuthTag = function() {
          throw new Error('trying to get auth tag in unsupported state');
        }),
        (a.prototype.setAuthTag = function() {
          throw new Error('trying to set auth tag in unsupported state');
        }),
        (a.prototype.setAAD = function() {
          throw new Error('trying to set aad in unsupported state');
        }),
        (a.prototype._transform = function(e, t, r) {
          var n;
          try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
          } catch (e) {
            n = e;
          } finally {
            r(n);
          }
        }),
        (a.prototype._flush = function(e) {
          var t;
          try {
            this.push(this.__final());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (a.prototype._finalOrDigest = function(e) {
          var t = this.__final() || n.alloc(0);
          return e && (t = this._toString(t, e, !0)), t;
        }),
        (a.prototype._toString = function(e, t, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(t)), (this._encoding = t)),
            this._encoding !== t)
          )
            throw new Error("can't switch encodings");
          var n = this._decoder.write(e);
          return r && (n += this._decoder.end()), n;
        }),
        (e.exports = a);
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      var n = t;
      (n.version = r(243).version),
        (n.utils = r(10)),
        (n.rand = r(97)),
        (n.curve = r(98)),
        (n.curves = r(60)),
        (n.ec = r(255)),
        (n.eddsa = r(259));
    },
    function(e) {
      e.exports = JSON.parse(
        '{"name":"elliptic","version":"6.5.2","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"}}'
      );
    },
    function(e, t) {},
    function(e, t, r) {
      'use strict';
      var n = r(10),
        i = r(2),
        o = r(0),
        a = r(41),
        s = n.assert;
      function f(e) {
        a.call(this, 'short', e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      function u(e, t, r, n) {
        a.BasePoint.call(this, e, 'affine'),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function c(e, t, r, n) {
        a.BasePoint.call(this, e, 'jacobian'),
          null === t && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      o(f, a),
        (e.exports = f),
        (f.prototype._getEndomorphism = function(e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
              var n = this._getEndoRoots(this.p);
              t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (e.lambda) r = new i(e.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))
                ? (r = o[0])
                : ((r = o[1]),
                  s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return {
              beta: t,
              lambda: r,
              basis: e.basis
                ? e.basis.map(function(e) {
                    return { a: new i(e.a, 16), b: new i(e.b, 16) };
                  })
                : this._getEndoBasis(r)
            };
          }
        }),
        (f.prototype._getEndoRoots = function(e) {
          var t = e === this.p ? this.red : i.mont(e),
            r = new i(2).toRed(t).redInvm(),
            n = r.redNeg(),
            o = new i(3)
              .toRed(t)
              .redNeg()
              .redSqrt()
              .redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (f.prototype._getEndoBasis = function(e) {
          for (
            var t,
              r,
              n,
              o,
              a,
              s,
              f,
              u,
              c,
              d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              l = this.n.clone(),
              p = new i(1),
              b = new i(0),
              g = new i(0),
              y = new i(1),
              v = 0;
            0 !== h.cmpn(0);

          ) {
            var m = l.div(h);
            (u = l.sub(m.mul(h))), (c = g.sub(m.mul(p)));
            var _ = y.sub(m.mul(b));
            if (!n && u.cmp(d) < 0)
              (t = f.neg()), (r = p), (n = u.neg()), (o = c);
            else if (n && 2 == ++v) break;
            (f = u), (l = h), (h = u), (g = p), (p = c), (y = b), (b = _);
          }
          (a = u.neg()), (s = c);
          var w = n.sqr().add(o.sqr());
          return (
            a
              .sqr()
              .add(s.sqr())
              .cmp(w) >= 0 && ((a = t), (s = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            a.negative && ((a = a.neg()), (s = s.neg())),
            [
              { a: n, b: o },
              { a: a, b: s }
            ]
          );
        }),
        (f.prototype._endoSplit = function(e) {
          var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            o = r.b
              .neg()
              .mul(e)
              .divRound(this.n),
            a = i.mul(r.a),
            s = o.mul(n.a),
            f = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: e.sub(a).sub(s), k2: f.add(u).neg() };
        }),
        (f.prototype.pointFromX = function(e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (
            0 !==
            n
              .redSqr()
              .redSub(r)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          var o = n.fromRed().isOdd();
          return ((t && !o) || (!t && o)) && (n = n.redNeg()), this.point(e, n);
        }),
        (f.prototype.validate = function(e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t
              .redSqr()
              .redMul(t)
              .redIAdd(n)
              .redIAdd(this.b);
          return (
            0 ===
            r
              .redSqr()
              .redISub(i)
              .cmpn(0)
          );
        }),
        (f.prototype._endoWnafMulAdd = function(e, t, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < e.length;
            o++
          ) {
            var a = this._endoSplit(t[o]),
              s = e[o],
              f = s._getBeta();
            a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
              (n[2 * o] = s),
              (n[2 * o + 1] = f),
              (i[2 * o] = a.k1),
              (i[2 * o + 1] = a.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0;
            c < 2 * o;
            c++
          )
            (n[c] = null), (i[c] = null);
          return u;
        }),
        o(u, a.BasePoint),
        (f.prototype.point = function(e, t, r) {
          return new u(this, e, t, r);
        }),
        (f.prototype.pointFromJSON = function(e, t) {
          return u.fromJSON(this, e, t);
        }),
        (u.prototype._getBeta = function() {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                n = function(e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n)
                  }
                });
            }
            return t;
          }
        }),
        (u.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                  }
                }
              ]
            : [this.x, this.y];
        }),
        (u.fromJSON = function(e, t, r) {
          'string' == typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var o = t[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i))
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i))
              }
            }),
            n
          );
        }),
        (u.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (u.prototype.isInfinity = function() {
          return this.inf;
        }),
        (u.prototype.add = function(e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t
              .redSqr()
              .redISub(this.x)
              .redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (u.prototype.dbl = function() {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r
              .redAdd(r)
              .redIAdd(r)
              .redIAdd(t)
              .redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, a);
        }),
        (u.prototype.getX = function() {
          return this.x.fromRed();
        }),
        (u.prototype.getY = function() {
          return this.y.fromRed();
        }),
        (u.prototype.mul = function(e) {
          return (
            (e = new i(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (u.prototype.mulAdd = function(e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (u.prototype.jmulAdd = function(e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (u.prototype.eq = function(e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (u.prototype.neg = function(e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              n = function(e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n)
              }
            };
          }
          return t;
        }),
        (u.prototype.toJ = function() {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        o(c, a.BasePoint),
        (f.prototype.jpoint = function(e, t, r) {
          return new c(this, e, t, r);
        }),
        (c.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }),
        (c.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (c.prototype.add = function(e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            o = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(r.redMul(this.z)),
            s = n.redSub(i),
            f = o.redSub(a);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = s.redSqr(),
            c = u.redMul(s),
            d = n.redMul(u),
            h = f
              .redSqr()
              .redIAdd(c)
              .redISub(d)
              .redISub(d),
            l = f.redMul(d.redISub(h)).redISub(o.redMul(c)),
            p = this.z.redMul(e.z).redMul(s);
          return this.curve.jpoint(h, l, p);
        }),
        (c.prototype.mixedAdd = function(e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            a = r.redSub(n),
            s = i.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = a.redSqr(),
            u = f.redMul(a),
            c = r.redMul(f),
            d = s
              .redSqr()
              .redIAdd(u)
              .redISub(c)
              .redISub(c),
            h = s.redMul(c.redISub(d)).redISub(i.redMul(u)),
            l = this.z.redMul(a);
          return this.curve.jpoint(d, h, l);
        }),
        (c.prototype.dblp = function(e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            f = s.redSqr().redSqr(),
            u = a.redAdd(a);
          for (r = 0; r < e; r++) {
            var c = o.redSqr(),
              d = u.redSqr(),
              h = d.redSqr(),
              l = c
                .redAdd(c)
                .redIAdd(c)
                .redIAdd(n.redMul(f)),
              p = o.redMul(d),
              b = l.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(b),
              y = l.redMul(g);
            y = y.redIAdd(y).redISub(h);
            var v = u.redMul(s);
            r + 1 < e && (f = f.redMul(h)), (o = b), (s = v), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), s);
        }),
        (c.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (c.prototype._zeroDbl = function() {
          var e, t, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n),
              f = s
                .redSqr()
                .redISub(a)
                .redISub(a),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = f),
              (t = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.x.redSqr(),
              d = this.y.redSqr(),
              h = d.redSqr(),
              l = this.x
                .redAdd(d)
                .redSqr()
                .redISub(c)
                .redISub(h);
            l = l.redIAdd(l);
            var p = c.redAdd(c).redIAdd(c),
              b = p.redSqr(),
              g = h.redIAdd(h);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (e = b.redISub(l).redISub(l)),
              (t = p.redMul(l.redISub(e)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (c.prototype._threeDbl = function() {
          var e, t, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o);
            a = a.redIAdd(a);
            var s = n
                .redAdd(n)
                .redIAdd(n)
                .redIAdd(this.curve.a),
              f = s
                .redSqr()
                .redISub(a)
                .redISub(a);
            e = f;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = s.redMul(a.redISub(f)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.z.redSqr(),
              d = this.y.redSqr(),
              h = this.x.redMul(d),
              l = this.x.redSub(c).redMul(this.x.redAdd(c));
            l = l.redAdd(l).redIAdd(l);
            var p = h.redIAdd(h),
              b = (p = p.redIAdd(p)).redAdd(p);
            (e = l.redSqr().redISub(b)),
              (r = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(d)
                .redISub(c));
            var g = d.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (t = l.redMul(p.redISub(e)).redISub(g));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (c.prototype._dbl = function() {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = t.redSqr(),
            a = r.redSqr(),
            s = o
              .redAdd(o)
              .redIAdd(o)
              .redIAdd(e.redMul(i)),
            f = t.redAdd(t),
            u = (f = f.redIAdd(f)).redMul(a),
            c = s.redSqr().redISub(u.redAdd(u)),
            d = u.redISub(c),
            h = a.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = s.redMul(d).redISub(h),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(c, l, p);
        }),
        (c.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            a = this.x
              .redAdd(t)
              .redSqr()
              .redISub(e)
              .redISub(n),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              o
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var u = i
              .redIAdd(a)
              .redSqr()
              .redISub(o)
              .redISub(s)
              .redISub(f),
            c = t.redMul(u);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var d = this.x.redMul(s).redISub(c);
          d = (d = d.redIAdd(d)).redIAdd(d);
          var h = this.y.redMul(u.redMul(f.redISub(u)).redISub(a.redMul(s)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = this.z
            .redAdd(a)
            .redSqr()
            .redISub(r)
            .redISub(s);
          return this.curve.jpoint(d, h, l);
        }),
        (c.prototype.mul = function(e, t) {
          return (e = new i(e, t)), this.curve._wnafMul(this, e);
        }),
        (c.prototype.eq = function(e) {
          if ('affine' === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (
            0 !==
            this.x
              .redMul(r)
              .redISub(e.x.redMul(t))
              .cmpn(0)
          )
            return !1;
          var n = t.redMul(this.z),
            i = r.redMul(e.z);
          return (
            0 ===
            this.y
              .redMul(i)
              .redISub(e.y.redMul(n))
              .cmpn(0)
          );
        }),
        (c.prototype.eqXToP = function(e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (c.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>';
        }),
        (c.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(0),
        o = r(41),
        a = r(10);
      function s(e) {
        o.call(this, 'mont', e),
          (this.a = new n(e.a, 16).toRed(this.red)),
          (this.b = new n(e.b, 16).toRed(this.red)),
          (this.i4 = new n(4).toRed(this.red).redInvm()),
          (this.two = new n(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function f(e, t, r) {
        o.BasePoint.call(this, e, 'projective'),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new n(t, 16)),
              (this.z = new n(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      i(s, o),
        (e.exports = s),
        (s.prototype.validate = function(e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            n = r
              .redMul(t)
              .redAdd(r.redMul(this.a))
              .redAdd(t);
          return (
            0 ===
            n
              .redSqrt()
              .redSqr()
              .cmp(n)
          );
        }),
        i(f, o.BasePoint),
        (s.prototype.decodePoint = function(e, t) {
          return this.point(a.toArray(e, t), 1);
        }),
        (s.prototype.point = function(e, t) {
          return new f(this, e, t);
        }),
        (s.prototype.pointFromJSON = function(e) {
          return f.fromJSON(this, e);
        }),
        (f.prototype.precompute = function() {}),
        (f.prototype._encode = function() {
          return this.getX().toArray('be', this.curve.p.byteLength());
        }),
        (f.fromJSON = function(e, t) {
          return new f(e, t[0], t[1] || e.one);
        }),
        (f.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (f.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0);
        }),
        (f.prototype.dbl = function() {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            n = e.redMul(t),
            i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(n, i);
        }),
        (f.prototype.add = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (f.prototype.diffAdd = function(e, t) {
          var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            o = e.x.redSub(e.z).redMul(r),
            a = i.redMul(n),
            s = t.z.redMul(o.redAdd(a).redSqr()),
            f = t.x.redMul(o.redISub(a).redSqr());
          return this.curve.point(s, f);
        }),
        (f.prototype.mul = function(e) {
          for (
            var t = e.clone(),
              r = this,
              n = this.curve.point(null, null),
              i = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            i.push(t.andln(1));
          for (var o = i.length - 1; o >= 0; o--)
            0 === i[o]
              ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
              : ((n = r.diffAdd(n, this)), (r = r.dbl()));
          return n;
        }),
        (f.prototype.mulAdd = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (f.prototype.jumlAdd = function() {
          throw new Error('Not supported on Montgomery curve');
        }),
        (f.prototype.eq = function(e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (f.prototype.normalize = function() {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (f.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(10),
        i = r(2),
        o = r(0),
        a = r(41),
        s = n.assert;
      function f(e) {
        (this.twisted = 1 != (0 | e.a)),
          (this.mOneA = this.twisted && -1 == (0 | e.a)),
          (this.extended = this.mOneA),
          a.call(this, 'edwards', e),
          (this.a = new i(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new i(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 == (0 | e.c));
      }
      function u(e, t, r, n, o) {
        a.BasePoint.call(this, e, 'projective'),
          null === t && null === r && null === n
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = n ? new i(n, 16) : this.curve.one),
              (this.t = o && new i(o, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      o(f, a),
        (e.exports = f),
        (f.prototype._mulA = function(e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (f.prototype._mulC = function(e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (f.prototype.jpoint = function(e, t, r, n) {
          return this.point(e, t, r, n);
        }),
        (f.prototype.pointFromX = function(e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = n.redMul(o.redInvm()),
            s = a.redSqrt();
          if (
            0 !==
            s
              .redSqr()
              .redSub(a)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          var f = s.fromRed().isOdd();
          return ((t && !f) || (!t && f)) && (s = s.redNeg()), this.point(e, s);
        }),
        (f.prototype.pointFromY = function(e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            n = r.redSub(this.c2),
            o = r
              .redMul(this.d)
              .redMul(this.c2)
              .redSub(this.a),
            a = n.redMul(o.redInvm());
          if (0 === a.cmp(this.zero)) {
            if (t) throw new Error('invalid point');
            return this.point(this.zero, e);
          }
          var s = a.redSqrt();
          if (
            0 !==
            s
              .redSqr()
              .redSub(a)
              .cmp(this.zero)
          )
            throw new Error('invalid point');
          return (
            s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
          );
        }),
        (f.prototype.validate = function(e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            n = t.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === n.cmp(i);
        }),
        o(u, a.BasePoint),
        (f.prototype.pointFromJSON = function(e) {
          return u.fromJSON(this, e);
        }),
        (f.prototype.point = function(e, t, r, n) {
          return new u(this, e, t, r, n);
        }),
        (u.fromJSON = function(e, t) {
          return new u(e, t[0], t[1], t[2]);
        }),
        (u.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (u.prototype.isInfinity = function() {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (u.prototype._extDbl = function() {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var n = this.curve._mulA(e),
            i = this.x
              .redAdd(this.y)
              .redSqr()
              .redISub(e)
              .redISub(t),
            o = n.redAdd(t),
            a = o.redSub(r),
            s = n.redSub(t),
            f = i.redMul(a),
            u = o.redMul(s),
            c = i.redMul(s),
            d = a.redMul(o);
          return this.curve.point(f, u, d, c);
        }),
        (u.prototype._projDbl = function() {
          var e,
            t,
            r,
            n = this.x.redAdd(this.y).redSqr(),
            i = this.x.redSqr(),
            o = this.y.redSqr();
          if (this.curve.twisted) {
            var a = (u = this.curve._mulA(i)).redAdd(o);
            if (this.zOne)
              (e = n
                .redSub(i)
                .redSub(o)
                .redMul(a.redSub(this.curve.two))),
                (t = a.redMul(u.redSub(o))),
                (r = a
                  .redSqr()
                  .redSub(a)
                  .redSub(a));
            else {
              var s = this.z.redSqr(),
                f = a.redSub(s).redISub(s);
              (e = n
                .redSub(i)
                .redISub(o)
                .redMul(f)),
                (t = a.redMul(u.redSub(o))),
                (r = a.redMul(f));
            }
          } else {
            var u = i.redAdd(o);
            (s = this.curve._mulC(this.z).redSqr()),
              (f = u.redSub(s).redSub(s));
            (e = this.curve._mulC(n.redISub(u)).redMul(f)),
              (t = this.curve._mulC(u).redMul(i.redISub(o))),
              (r = u.redMul(f));
          }
          return this.curve.point(e, t, r);
        }),
        (u.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (u.prototype._extAdd = function(e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            n = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = r.redSub(t),
            a = i.redSub(n),
            s = i.redAdd(n),
            f = r.redAdd(t),
            u = o.redMul(a),
            c = s.redMul(f),
            d = o.redMul(f),
            h = a.redMul(s);
          return this.curve.point(u, c, h, d);
        }),
        (u.prototype._projAdd = function(e) {
          var t,
            r,
            n = this.z.redMul(e.z),
            i = n.redSqr(),
            o = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(a),
            f = i.redSub(s),
            u = i.redAdd(s),
            c = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(o)
              .redISub(a),
            d = n.redMul(f).redMul(c);
          return (
            this.curve.twisted
              ? ((t = n.redMul(u).redMul(a.redSub(this.curve._mulA(o)))),
                (r = f.redMul(u)))
              : ((t = n.redMul(u).redMul(a.redSub(o))),
                (r = this.curve._mulC(f).redMul(u))),
            this.curve.point(d, t, r)
          );
        }),
        (u.prototype.add = function(e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (u.prototype.mul = function(e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (u.prototype.mulAdd = function(e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
        }),
        (u.prototype.jmulAdd = function(e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
        }),
        (u.prototype.normalize = function() {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (u.prototype.neg = function() {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (u.prototype.getX = function() {
          return this.normalize(), this.x.fromRed();
        }),
        (u.prototype.getY = function() {
          return this.normalize(), this.y.fromRed();
        }),
        (u.prototype.eq = function(e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (u.prototype.eqXToP = function(e) {
          var t = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(t)) return !0;
          for (var r = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(n), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (u.prototype.toP = u.prototype.normalize),
        (u.prototype.mixedAdd = u.prototype.add);
    },
    function(e, t, r) {
      'use strict';
      (t.sha1 = r(249)),
        (t.sha224 = r(250)),
        (t.sha256 = r(100)),
        (t.sha384 = r(251)),
        (t.sha512 = r(101));
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(31),
        o = r(99),
        a = n.rotl32,
        s = n.sum32,
        f = n.sum32_5,
        u = o.ft_1,
        c = i.BlockHash,
        d = [1518500249, 1859775393, 2400959708, 3395469782];
      function h() {
        if (!(this instanceof h)) return new h();
        c.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]),
          (this.W = new Array(80));
      }
      n.inherits(h, c),
        (e.exports = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 80),
        (h.padLength = 64),
        (h.prototype._update = function(e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            c = this.h[2],
            h = this.h[3],
            l = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              b = f(a(i, 5), u(p, o, c, h), l, r[n], d[p]);
            (l = h), (h = c), (c = a(o, 30)), (o = i), (i = b);
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], c)),
            (this.h[3] = s(this.h[3], h)),
            (this.h[4] = s(this.h[4], l));
        }),
        (h.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big');
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(100);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h.slice(0, 7), 'big')
            : n.split32(this.h.slice(0, 7), 'big');
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(101);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h.slice(0, 12), 'big')
            : n.split32(this.h.slice(0, 12), 'big');
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(31),
        o = n.rotl32,
        a = n.sum32,
        s = n.sum32_3,
        f = n.sum32_4,
        u = i.BlockHash;
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]),
          (this.endian = 'little');
      }
      function d(e, t, r, n) {
        return e <= 15
          ? t ^ r ^ n
          : e <= 31
          ? (t & r) | (~t & n)
          : e <= 47
          ? (t | ~r) ^ n
          : e <= 63
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      function h(e) {
        return e <= 15
          ? 0
          : e <= 31
          ? 1518500249
          : e <= 47
          ? 1859775393
          : e <= 63
          ? 2400959708
          : 2840853838;
      }
      function l(e) {
        return e <= 15
          ? 1352829926
          : e <= 31
          ? 1548603684
          : e <= 47
          ? 1836072691
          : e <= 63
          ? 2053994217
          : 0;
      }
      n.inherits(c, u),
        (t.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function(e, t) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              c = this.h[4],
              v = r,
              m = n,
              _ = i,
              w = u,
              E = c,
              S = 0;
            S < 80;
            S++
          ) {
            var A = a(o(f(r, d(S, n, i, u), e[p[S] + t], h(S)), g[S]), c);
            (r = c),
              (c = u),
              (u = o(i, 10)),
              (i = n),
              (n = A),
              (A = a(o(f(v, d(79 - S, m, _, w), e[b[S] + t], l(S)), y[S]), E)),
              (v = E),
              (E = w),
              (w = o(_, 10)),
              (_ = m),
              (m = A);
          }
          (A = s(this.h[1], i, w)),
            (this.h[1] = s(this.h[2], u, E)),
            (this.h[2] = s(this.h[3], c, v)),
            (this.h[3] = s(this.h[4], r, m)),
            (this.h[4] = s(this.h[0], n, _)),
            (this.h[0] = A);
        }),
        (c.prototype._digest = function(e) {
          return 'hex' === e
            ? n.toHex32(this.h, 'little')
            : n.split32(this.h, 'little');
        });
      var p = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ],
        b = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ],
        g = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ],
        y = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ];
    },
    function(e, t, r) {
      'use strict';
      var n = r(12),
        i = r(18);
      function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(t, r));
      }
      (e.exports = o),
        (o.prototype._init = function(e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (o.prototype.update = function(e, t) {
          return this.inner.update(e, t), this;
        }),
        (o.prototype.digest = function(e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    function(e, t) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
              'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
            ],
            [
              '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
              '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
            ],
            [
              '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
              'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
            ],
            [
              '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
              '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
            ],
            [
              '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
              '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
            ],
            [
              '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
              '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
            ],
            [
              'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
              '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
            ],
            [
              '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
              'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
            ],
            [
              'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
              '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
            ],
            [
              'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
              'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
            ],
            [
              'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
              '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
            ],
            [
              '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
              '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
            ],
            [
              '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
              '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
            ],
            [
              '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
              '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
            ],
            [
              '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
              '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
            ],
            [
              '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
              '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
            ],
            [
              '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
              '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
            ],
            [
              '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
              '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
            ],
            [
              '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
              'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
            ],
            [
              'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
              '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
            ],
            [
              'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
              '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
            ],
            [
              '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
              '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
            ],
            [
              '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
              '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
            ],
            [
              'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
              '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
            ],
            [
              '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
              'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
            ],
            [
              'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
              '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
            ],
            [
              'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
              'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
            ],
            [
              'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
              '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
            ],
            [
              'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
              'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
            ],
            [
              'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
              '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
            ],
            [
              '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
              'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
            ],
            [
              '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
              '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
            ],
            [
              'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
              '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
            ],
            [
              '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
              'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
            ],
            [
              'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
              '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
            ],
            [
              'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
              '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
            ],
            [
              'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
              'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
            ],
            [
              '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
              '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
            ],
            [
              '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
              '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
            ],
            [
              '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
              'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
            ],
            [
              '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
              '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
            ],
            [
              'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
              '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
            ],
            [
              '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
              '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
            ],
            [
              '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
              'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
            ],
            [
              '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
              '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
            ],
            [
              'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
              '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
            ],
            [
              '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
              'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
            ],
            [
              'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
              'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
            ],
            [
              'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
              '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
            ],
            [
              '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
              'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
            ],
            [
              '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
              'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
            ],
            [
              'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
              '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
            ],
            [
              'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
              '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
            ],
            [
              'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
              '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
            ],
            [
              '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
              'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
            ],
            [
              '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
              '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
            ],
            [
              'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
              'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
            ],
            [
              '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
              'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
            ],
            [
              '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
              '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
            ],
            [
              '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
              '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
            ],
            [
              'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
              'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
            ],
            [
              '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
              '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
            ],
            [
              '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
              '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
            ],
            [
              'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
              '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
            ],
            [
              'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
              'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
            ]
          ]
        },
        naf: {
          wnd: 7,
          points: [
            [
              'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
              '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
            ],
            [
              '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
              'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
            ],
            [
              '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
              '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
            ],
            [
              'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
              'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
            ],
            [
              '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
              'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
            ],
            [
              'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
              'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
            ],
            [
              'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
              '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
            ],
            [
              'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
              '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
            ],
            [
              '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
              '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
            ],
            [
              '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
              '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
            ],
            [
              '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
              '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
            ],
            [
              '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
              '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
            ],
            [
              'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
              'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
            ],
            [
              'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
              '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
            ],
            [
              '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
              'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
            ],
            [
              '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
              'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
            ],
            [
              '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
              '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
            ],
            [
              '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
              '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
            ],
            [
              '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
              '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
            ],
            [
              '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
              'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
            ],
            [
              'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
              'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
            ],
            [
              '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
              '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
            ],
            [
              '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
              '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
            ],
            [
              'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
              'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
            ],
            [
              '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
              '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
            ],
            [
              'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
              'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
            ],
            [
              'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
              'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
            ],
            [
              '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
              '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
            ],
            [
              '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
              '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
            ],
            [
              '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
              '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
            ],
            [
              'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
              '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
            ],
            [
              '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
              '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
            ],
            [
              'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
              '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
            ],
            [
              '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
              'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
            ],
            [
              '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
              'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
            ],
            [
              'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
              'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
            ],
            [
              '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
              '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
            ],
            [
              '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
              'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
            ],
            [
              'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
              'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
            ],
            [
              '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
              '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
            ],
            [
              '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
              'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
            ],
            [
              '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
              '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
            ],
            [
              '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
              'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
            ],
            [
              'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
              '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
            ],
            [
              '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
              '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
            ],
            [
              '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
              'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
            ],
            [
              '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
              'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
            ],
            [
              'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
              'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
            ],
            [
              'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
              'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
            ],
            [
              '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
              '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
            ],
            [
              '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
              '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
            ],
            [
              'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
              '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
            ],
            [
              'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
              'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
            ],
            [
              '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
              '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
            ],
            [
              '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
              '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
            ],
            [
              'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
              '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
            ],
            [
              '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
              '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
            ],
            [
              'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
              'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
            ],
            [
              '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
              'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
            ],
            [
              '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
              '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
            ],
            [
              'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
              '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
            ],
            [
              'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
              '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
            ],
            [
              '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
              '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
            ],
            [
              '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
              '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
            ],
            [
              '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
              'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
            ],
            [
              '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
              'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
            ],
            [
              '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
              '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
            ],
            [
              '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
              '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
            ],
            [
              '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
              '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
            ],
            [
              '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
              'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
            ],
            [
              'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
              'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
            ],
            [
              '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
              'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
            ],
            [
              'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
              '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
            ],
            [
              'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
              '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
            ],
            [
              'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
              '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
            ],
            [
              'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
              '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
            ],
            [
              '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
              'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
            ],
            [
              '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
              '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
            ],
            [
              '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
              'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
            ],
            [
              'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
              'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
            ],
            [
              'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
              '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
            ],
            [
              'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
              'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
            ],
            [
              'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
              '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
            ],
            [
              '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
              '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
            ],
            [
              'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
              '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
            ],
            [
              'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
              '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
            ],
            [
              '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
              '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
            ],
            [
              '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
              'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
            ],
            [
              'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
              '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
            ],
            [
              'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
              '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
            ],
            [
              'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
              '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
            ],
            [
              '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
              '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
            ],
            [
              'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
              'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
            ],
            [
              '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
              'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
            ],
            [
              'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
              'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
            ],
            [
              'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
              '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
            ],
            [
              '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
              'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
            ],
            [
              'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
              '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
            ],
            [
              'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
              '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
            ],
            [
              'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
              '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
            ],
            [
              '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
              'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
            ],
            [
              '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
              'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
            ],
            [
              'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
              '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
            ],
            [
              '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
              'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
            ],
            [
              '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
              '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
            ],
            [
              '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
              'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
            ],
            [
              'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
              'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
            ],
            [
              '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
              'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
            ],
            [
              '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
              '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
            ],
            [
              '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
              'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
            ],
            [
              '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
              '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
            ],
            [
              'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
              'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
            ],
            [
              '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
              '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
            ],
            [
              'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
              '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
            ],
            [
              '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
              '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
            ],
            [
              'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
              'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
            ],
            [
              'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
              '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
            ],
            [
              'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
              'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
            ],
            [
              '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
              'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
            ],
            [
              '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
              '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
            ],
            [
              '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
              'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
            ],
            [
              '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
              '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
            ],
            [
              '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
              '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
            ],
            [
              '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
              'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
            ],
            [
              '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
              '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
            ],
            [
              '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
              '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
            ],
            [
              '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
              '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
            ]
          ]
        }
      };
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(256),
        o = r(10),
        a = r(60),
        s = r(97),
        f = o.assert,
        u = r(257),
        c = r(258);
      function d(e) {
        if (!(this instanceof d)) return new d(e);
        'string' == typeof e &&
          (f(a.hasOwnProperty(e), 'Unknown curve ' + e), (e = a[e])),
          e instanceof a.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = d),
        (d.prototype.keyPair = function(e) {
          return new u(this, e);
        }),
        (d.prototype.keyFromPrivate = function(e, t) {
          return u.fromPrivate(this, e, t);
        }),
        (d.prototype.keyFromPublic = function(e, t) {
          return u.fromPublic(this, e, t);
        }),
        (d.prototype.genKeyPair = function(e) {
          e || (e = {});
          for (
            var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || s(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray()
              }),
              r = this.n.byteLength(),
              o = this.n.sub(new n(2));
            ;

          ) {
            var a = new n(t.generate(r));
            if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
          }
        }),
        (d.prototype._truncateToN = function(e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (
            r > 0 && (e = e.ushrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (d.prototype.sign = function(e, t, r, o) {
          'object' == typeof r && ((o = r), (r = null)),
            o || (o = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new n(e, 16)));
          for (
            var a = this.n.byteLength(),
              s = t.getPrivate().toArray('be', a),
              f = e.toArray('be', a),
              u = new i({
                hash: this.hash,
                entropy: s,
                nonce: f,
                pers: o.pers,
                persEnc: o.persEnc || 'utf8'
              }),
              d = this.n.sub(new n(1)),
              h = 0;
            ;
            h++
          ) {
            var l = o.k ? o.k(h) : new n(u.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(d) >= 0)
            ) {
              var p = this.g.mul(l);
              if (!p.isInfinity()) {
                var b = p.getX(),
                  g = b.umod(this.n);
                if (0 !== g.cmpn(0)) {
                  var y = l.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                  if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                    var v =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(g) ? 2 : 0);
                    return (
                      o.canonical &&
                        y.cmp(this.nh) > 0 &&
                        ((y = this.n.sub(y)), (v ^= 1)),
                      new c({ r: g, s: y, recoveryParam: v })
                    );
                  }
                }
              }
            }
          }
        }),
        (d.prototype.verify = function(e, t, r, i) {
          (e = this._truncateToN(new n(e, 16))), (r = this.keyFromPublic(r, i));
          var o = (t = new c(t, 'hex')).r,
            a = t.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
          var s,
            f = a.invm(this.n),
            u = f.mul(e).umod(this.n),
            d = f.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(u, r.getPublic(), d)).isInfinity() &&
                s.eqXToP(o)
            : !(s = this.g.mulAdd(u, r.getPublic(), d)).isInfinity() &&
                0 ===
                  s
                    .getX()
                    .umod(this.n)
                    .cmp(o);
        }),
        (d.prototype.recoverPubKey = function(e, t, r, i) {
          f((3 & r) === r, 'The recovery param is more than two bits'),
            (t = new c(t, i));
          var o = this.n,
            a = new n(e),
            s = t.r,
            u = t.s,
            d = 1 & r,
            h = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw new Error('Unable to find sencond key candinate');
          s = h
            ? this.curve.pointFromX(s.add(this.curve.n), d)
            : this.curve.pointFromX(s, d);
          var l = t.r.invm(o),
            p = o
              .sub(a)
              .mul(l)
              .umod(o),
            b = u.mul(l).umod(o);
          return this.g.mulAdd(p, s, b);
        }),
        (d.prototype.getKeyRecoveryParam = function(e, t, r, n) {
          if (null !== (t = new c(t, n)).recoveryParam) return t.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(e, t, i);
            } catch (e) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error('Unable to find valid recovery factor');
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(61),
        i = r(96),
        o = r(18);
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = i.toArray(e.entropy, e.entropyEnc || 'hex'),
          r = i.toArray(e.nonce, e.nonceEnc || 'hex'),
          n = i.toArray(e.pers, e.persEnc || 'hex');
        o(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, r, n);
      }
      (e.exports = a),
        (a.prototype._init = function(e, t, r) {
          var n = e.concat(t).concat(r);
          (this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8));
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1);
          this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (a.prototype._hmac = function() {
          return new n.hmac(this.hash, this.K);
        }),
        (a.prototype._update = function(e) {
          var t = this._hmac()
            .update(this.V)
            .update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()));
        }),
        (a.prototype.reseed = function(e, t, r, n) {
          'string' != typeof t && ((n = r), (r = t), (t = null)),
            (e = i.toArray(e, t)),
            (r = i.toArray(r, n)),
            o(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (a.prototype.generate = function(e, t, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required');
          'string' != typeof t && ((n = r), (r = t), (t = null)),
            r && ((r = i.toArray(r, n || 'hex')), this._update(r));
          for (var o = []; o.length < e; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (o = o.concat(this.V));
          var a = o.slice(0, e);
          return this._update(r), this._reseed++, i.encode(a, t);
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(10).assert;
      function o(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (e.exports = o),
        (o.fromPublic = function(e, t, r) {
          return t instanceof o ? t : new o(e, { pub: t, pubEnc: r });
        }),
        (o.fromPrivate = function(e, t, r) {
          return t instanceof o ? t : new o(e, { priv: t, privEnc: r });
        }),
        (o.prototype.validate = function() {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' };
        }),
        (o.prototype.getPublic = function(e, t) {
          return (
            'string' == typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          );
        }),
        (o.prototype.getPrivate = function(e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (o.prototype._importPrivate = function(e, t) {
          (this.priv = new n(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (o.prototype._importPublic = function(e, t) {
          if (e.x || e.y)
            return (
              'mont' === this.ec.curve.type
                ? i(e.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type &&
                    'edwards' !== this.ec.curve.type) ||
                  i(e.x && e.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (o.prototype.derive = function(e) {
          return e.mul(this.priv).getX();
        }),
        (o.prototype.sign = function(e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (o.prototype.verify = function(e, t) {
          return this.ec.verify(e, t, this);
        }),
        (o.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(10),
        o = i.assert;
      function a(e, t) {
        if (e instanceof a) return e;
        this._importDER(e, t) ||
          (o(e.r && e.s, 'Signature without r or s'),
          (this.r = new n(e.r, 16)),
          (this.s = new n(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function f(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        for (var n = 15 & r, i = 0, o = 0, a = t.place; o < n; o++, a++)
          (i <<= 8), (i |= e[a]);
        return (t.place = a), i;
      }
      function u(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function c(e, t) {
        if (t < 128) e.push(t);
        else {
          var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
          for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
          e.push(t);
        }
      }
      (e.exports = a),
        (a.prototype._importDER = function(e, t) {
          e = i.toArray(e, t);
          var r = new s();
          if (48 !== e[r.place++]) return !1;
          if (f(e, r) + r.place !== e.length) return !1;
          if (2 !== e[r.place++]) return !1;
          var o = f(e, r),
            a = e.slice(r.place, o + r.place);
          if (((r.place += o), 2 !== e[r.place++])) return !1;
          var u = f(e, r);
          if (e.length !== u + r.place) return !1;
          var c = e.slice(r.place, u + r.place);
          return (
            0 === a[0] && 128 & a[1] && (a = a.slice(1)),
            0 === c[0] && 128 & c[1] && (c = c.slice(1)),
            (this.r = new n(a)),
            (this.s = new n(c)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (a.prototype.toDER = function(e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = u(t),
              r = u(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          c(n, t.length), (n = n.concat(t)).push(2), c(n, r.length);
          var o = n.concat(r),
            a = [48];
          return c(a, o.length), (a = a.concat(o)), i.encode(a, e);
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(61),
        i = r(60),
        o = r(10),
        a = o.assert,
        s = o.parseBytes,
        f = r(260),
        u = r(261);
      function c(e) {
        if (
          (a('ed25519' === e, 'only tested with ed25519 so far'),
          !(this instanceof c))
        )
          return new c(e);
        e = i[e].curve;
        (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = n.sha512);
      }
      (e.exports = c),
        (c.prototype.sign = function(e, t) {
          e = s(e);
          var r = this.keyFromSecret(t),
            n = this.hashInt(r.messagePrefix(), e),
            i = this.g.mul(n),
            o = this.encodePoint(i),
            a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
            f = n.add(a).umod(this.curve.n);
          return this.makeSignature({ R: i, S: f, Rencoded: o });
        }),
        (c.prototype.verify = function(e, t, r) {
          (e = s(e)), (t = this.makeSignature(t));
          var n = this.keyFromPublic(r),
            i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
            o = this.g.mul(t.S());
          return t
            .R()
            .add(n.pub().mul(i))
            .eq(o);
        }),
        (c.prototype.hashInt = function() {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
          return o.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (c.prototype.keyFromPublic = function(e) {
          return f.fromPublic(this, e);
        }),
        (c.prototype.keyFromSecret = function(e) {
          return f.fromSecret(this, e);
        }),
        (c.prototype.makeSignature = function(e) {
          return e instanceof u ? e : new u(this, e);
        }),
        (c.prototype.encodePoint = function(e) {
          var t = e.getY().toArray('le', this.encodingLength);
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
        }),
        (c.prototype.decodePoint = function(e) {
          var t = (e = o.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            n = 0 != (128 & e[t]),
            i = o.intFromLE(r);
          return this.curve.pointFromY(i, n);
        }),
        (c.prototype.encodeInt = function(e) {
          return e.toArray('le', this.encodingLength);
        }),
        (c.prototype.decodeInt = function(e) {
          return o.intFromLE(e);
        }),
        (c.prototype.isPoint = function(e) {
          return e instanceof this.pointClass;
        });
    },
    function(e, t, r) {
      'use strict';
      var n = r(10),
        i = n.assert,
        o = n.parseBytes,
        a = n.cachedProperty;
      function s(e, t) {
        (this.eddsa = e),
          (this._secret = o(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = o(t.pub));
      }
      (s.fromPublic = function(e, t) {
        return t instanceof s ? t : new s(e, { pub: t });
      }),
        (s.fromSecret = function(e, t) {
          return t instanceof s ? t : new s(e, { secret: t });
        }),
        (s.prototype.secret = function() {
          return this._secret;
        }),
        a(s, 'pubBytes', function() {
          return this.eddsa.encodePoint(this.pub());
        }),
        a(s, 'pub', function() {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        a(s, 'privBytes', function() {
          var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            n = t.slice(0, e.encodingLength);
          return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
        }),
        a(s, 'priv', function() {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        a(s, 'hash', function() {
          return this.eddsa
            .hash()
            .update(this.secret())
            .digest();
        }),
        a(s, 'messagePrefix', function() {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function(e) {
          return (
            i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this)
          );
        }),
        (s.prototype.verify = function(e, t) {
          return this.eddsa.verify(e, t, this);
        }),
        (s.prototype.getSecret = function(e) {
          return (
            i(this._secret, 'KeyPair is public only'),
            n.encode(this.secret(), e)
          );
        }),
        (s.prototype.getPublic = function(e) {
          return n.encode(this.pubBytes(), e);
        }),
        (e.exports = s);
    },
    function(e, t, r) {
      'use strict';
      var n = r(2),
        i = r(10),
        o = i.assert,
        a = i.cachedProperty,
        s = i.parseBytes;
      function f(e, t) {
        (this.eddsa = e),
          'object' != typeof t && (t = s(t)),
          Array.isArray(t) &&
            (t = {
              R: t.slice(0, e.encodingLength),
              S: t.slice(e.encodingLength)
            }),
          o(t.R && t.S, 'Signature without R or S'),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof n && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
      }
      a(f, 'S', function() {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        a(f, 'R', function() {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        a(f, 'Rencoded', function() {
          return this.eddsa.encodePoint(this.R());
        }),
        a(f, 'Sencoded', function() {
          return this.eddsa.encodeInt(this.S());
        }),
        (f.prototype.toBytes = function() {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (f.prototype.toHex = function() {
          return i.encode(this.toBytes(), 'hex').toUpperCase();
        }),
        (e.exports = f);
    },
    function(e, t, r) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n =
          Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      e.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t['_' + String.fromCharCode(r)] = r;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function(e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var n = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(e) {
              n[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function(e, t) {
            for (var r, s, f = a(e), u = 1; u < arguments.length; u++) {
              for (var c in (r = Object(arguments[u])))
                i.call(r, c) && (f[c] = r[c]);
              if (n) {
                s = n(r);
                for (var d = 0; d < s.length; d++)
                  o.call(r, s[d]) && (f[s[d]] = r[s[d]]);
              }
            }
            return f;
          };
    },
    function(e, t, r) {
      var n = r(102);
      e.exports = function(e) {
        return 'string' != typeof e ? e : n(e) ? e.slice(2) : e;
      };
    },
    function(e, t, r) {
      const n = r(79),
        i = r(265);
      function o(e) {
        const t = new Error('Expect argument to be non-empty array');
        if ('object' != typeof e || !e.length) throw t;
        const r = e.map(function(e) {
            return 'bytes' === e.type ? n.toBuffer(e.value) : e.value;
          }),
          o = e.map(function(e) {
            return e.type;
          }),
          a = e.map(function(e) {
            if (!e.name) throw t;
            return e.type + ' ' + e.name;
          });
        return i.soliditySHA3(
          ['bytes32', 'bytes32'],
          [
            i.soliditySHA3(new Array(e.length).fill('string'), a),
            i.soliditySHA3(o, r)
          ]
        );
      }
      function a(e, t) {
        const r = n.toBuffer(t),
          i = n.fromRpcSig(r);
        return n.ecrecover(e, i.v, i.r, i.s);
      }
      function s(e) {
        const t = n.toBuffer(e.data);
        return a(n.hashPersonalMessage(t), e.sig);
      }
      function f(e, t) {
        for (var r = '' + e; r.length < t; ) r = '0' + r;
        return r;
      }
      e.exports = {
        concatSig: function(e, t, r) {
          const i = n.fromSigned(t),
            o = n.fromSigned(r),
            a = n.bufferToInt(e),
            s = f(n.toUnsigned(i).toString('hex'), 64),
            u = f(n.toUnsigned(o).toString('hex'), 64),
            c = n.stripHexPrefix(n.intToHex(a));
          return n.addHexPrefix(s.concat(u, c)).toString('hex');
        },
        normalize: function(e) {
          if (e) {
            if ('number' == typeof e) {
              const t = n.toBuffer(e);
              e = n.bufferToHex(t);
            }
            if ('string' != typeof e) {
              var t =
                'eth-sig-util.normalize() requires hex string or integer input.';
              throw new Error((t += ' received ' + typeof e + ': ' + e));
            }
            return n.addHexPrefix(e.toLowerCase());
          }
        },
        personalSign: function(e, t) {
          var r = n.toBuffer(t.data),
            i = n.hashPersonalMessage(r),
            o = n.ecsign(i, e);
          return n.bufferToHex(this.concatSig(o.v, o.r, o.s));
        },
        recoverPersonalSignature: function(e) {
          const t = s(e),
            r = n.publicToAddress(t);
          return n.bufferToHex(r);
        },
        extractPublicKey: function(e) {
          return '0x' + s(e).toString('hex');
        },
        typedSignatureHash: function(e) {
          const t = o(e);
          return n.bufferToHex(t);
        },
        signTypedData: function(e, t) {
          const r = o(t.data),
            i = n.ecsign(r, e);
          return n.bufferToHex(this.concatSig(i.v, i.r, i.s));
        },
        recoverTypedSignature: function(e) {
          const t = a(o(e.data), e.sig),
            r = n.publicToAddress(t);
          return n.bufferToHex(r);
        }
      };
    },
    function(e, t, r) {
      e.exports = r(266);
    },
    function(e, t, r) {
      (function(t) {
        const n = r(267),
          i = r(2);
        var o = function() {};
        function a(e) {
          return e.startsWith('int[')
            ? 'int256' + e.slice(3)
            : 'int' === e
            ? 'int256'
            : e.startsWith('uint[')
            ? 'uint256' + e.slice(4)
            : 'uint' === e
            ? 'uint256'
            : e.startsWith('fixed[')
            ? 'fixed128x128' + e.slice(5)
            : 'fixed' === e
            ? 'fixed128x128'
            : e.startsWith('ufixed[')
            ? 'ufixed128x128' + e.slice(6)
            : 'ufixed' === e
            ? 'ufixed128x128'
            : e;
        }
        function s(e) {
          return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
        }
        function f(e) {
          var t = /^\D+(\d+)x(\d+)$/.exec(e);
          return [parseInt(t[1], 10), parseInt(t[2], 10)];
        }
        function u(e) {
          var t = e.match(/(.*)\[(.*?)\]$/);
          return t ? ('' === t[2] ? 'dynamic' : parseInt(t[2], 10)) : null;
        }
        function c(e) {
          var t = typeof e;
          if ('string' === t)
            return n.isHexPrefixed(e)
              ? new i(n.stripHexPrefix(e), 16)
              : new i(e, 10);
          if ('number' === t) return new i(e);
          if (e.toArray) return e;
          throw new Error('Argument is not a number');
        }
        function d(e) {
          var t = /^(\w+)\((.*)\)$/.exec(e);
          if (3 !== t.length) throw new Error('Invalid method signature');
          var r = /^(.+)\):\((.+)$/.exec(t[2]);
          if (null !== r && 3 === r.length)
            return {
              method: t[1],
              args: r[1].split(','),
              retargs: r[2].split(',')
            };
          var n = t[2].split(',');
          return (
            1 === n.length && '' === n[0] && (n = []), { method: t[1], args: n }
          );
        }
        function h(e, r) {
          var o, a, d, l;
          if ('address' === e) return h('uint160', c(r));
          if ('bool' === e) return h('uint8', r ? 1 : 0);
          if ('string' === e) return h('bytes', t.from(r, 'utf8'));
          if (g(e)) {
            if (void 0 === r.length) throw new Error('Not an array?');
            if ('dynamic' !== (o = u(e)) && 0 !== o && r.length > o)
              throw new Error('Elements exceed array size: ' + o);
            for (l in ((d = []),
            (e = e.slice(0, e.lastIndexOf('['))),
            'string' == typeof r && (r = JSON.parse(r)),
            r))
              d.push(h(e, r[l]));
            if ('dynamic' === o) {
              var p = h('uint256', r.length);
              d.unshift(p);
            }
            return t.concat(d);
          }
          if ('bytes' === e)
            return (
              (r = t.from(r)),
              (d = t.concat([h('uint256', r.length), r])),
              r.length % 32 != 0 &&
                (d = t.concat([d, n.zeros(32 - (r.length % 32))])),
              d
            );
          if (e.startsWith('bytes')) {
            if ((o = s(e)) < 1 || o > 32)
              throw new Error('Invalid bytes<N> width: ' + o);
            return n.setLengthRight(r, 32);
          }
          if (e.startsWith('uint')) {
            if ((o = s(e)) % 8 || o < 8 || o > 256)
              throw new Error('Invalid uint<N> width: ' + o);
            if ((a = c(r)).bitLength() > o)
              throw new Error(
                'Supplied uint exceeds width: ' + o + ' vs ' + a.bitLength()
              );
            if (a < 0) throw new Error('Supplied uint is negative');
            return a.toArrayLike(t, 'be', 32);
          }
          if (e.startsWith('int')) {
            if ((o = s(e)) % 8 || o < 8 || o > 256)
              throw new Error('Invalid int<N> width: ' + o);
            if ((a = c(r)).bitLength() > o)
              throw new Error(
                'Supplied int exceeds width: ' + o + ' vs ' + a.bitLength()
              );
            return a.toTwos(256).toArrayLike(t, 'be', 32);
          }
          if (e.startsWith('ufixed')) {
            if (((o = f(e)), (a = c(r)) < 0))
              throw new Error('Supplied ufixed is negative');
            return h('uint256', a.mul(new i(2).pow(new i(o[1]))));
          }
          if (e.startsWith('fixed'))
            return (o = f(e)), h('int256', c(r).mul(new i(2).pow(new i(o[1]))));
          throw new Error('Unsupported or invalid type: ' + e);
        }
        function l(e, r, n) {
          var o, a, s, f;
          if (('string' == typeof e && (e = p(e)), 'address' === e.name))
            return l(e.rawType, r, n)
              .toArrayLike(t, 'be', 20)
              .toString('hex');
          if ('bool' === e.name)
            return l(e.rawType, r, n).toString() === new i(1).toString();
          if ('string' === e.name) {
            var u = l(e.rawType, r, n);
            return t.from(u, 'utf8').toString();
          }
          if (e.isArray) {
            for (
              s = [],
                o = e.size,
                'dynamic' === e.size &&
                  ((n = l('uint256', r, n).toNumber()),
                  (o = l('uint256', r, n).toNumber()),
                  (n += 32)),
                f = 0;
              f < o;
              f++
            ) {
              var c = l(e.subArray, r, n);
              s.push(c), (n += e.subArray.memoryUsage);
            }
            return s;
          }
          if ('bytes' === e.name)
            return (
              (n = l('uint256', r, n).toNumber()),
              (o = l('uint256', r, n).toNumber()),
              r.slice(n + 32, n + 32 + o)
            );
          if (e.name.startsWith('bytes')) return r.slice(n, n + e.size);
          if (e.name.startsWith('uint')) {
            if ((a = new i(r.slice(n, n + 32), 16, 'be')).bitLength() > e.size)
              throw new Error(
                'Decoded int exceeds width: ' + e.size + ' vs ' + a.bitLength()
              );
            return a;
          }
          if (e.name.startsWith('int')) {
            if (
              (a = new i(r.slice(n, n + 32), 16, 'be').fromTwos(
                256
              )).bitLength() > e.size
            )
              throw new Error(
                'Decoded uint exceeds width: ' + e.size + ' vs ' + a.bitLength()
              );
            return a;
          }
          if (e.name.startsWith('ufixed')) {
            if (
              ((o = new i(2).pow(new i(e.size[1]))),
              !(a = l('uint256', r, n)).mod(o).isZero())
            )
              throw new Error('Decimals not supported yet');
            return a.div(o);
          }
          if (e.name.startsWith('fixed')) {
            if (
              ((o = new i(2).pow(new i(e.size[1]))),
              !(a = l('int256', r, n)).mod(o).isZero())
            )
              throw new Error('Decimals not supported yet');
            return a.div(o);
          }
          throw new Error('Unsupported or invalid type: ' + e.name);
        }
        function p(e) {
          var t, r, n;
          if (g(e)) {
            t = u(e);
            var i = e.slice(0, e.lastIndexOf('['));
            return (
              (i = p(i)),
              (r = {
                isArray: !0,
                name: e,
                size: t,
                memoryUsage: 'dynamic' === t ? 32 : i.memoryUsage * t,
                subArray: i
              })
            );
          }
          switch (e) {
            case 'address':
              n = 'uint160';
              break;
            case 'bool':
              n = 'uint8';
              break;
            case 'string':
              n = 'bytes';
          }
          if (
            ((r = { rawType: n, name: e, memoryUsage: 32 }),
            (e.startsWith('bytes') && 'bytes' !== e) ||
            e.startsWith('uint') ||
            e.startsWith('int')
              ? (r.size = s(e))
              : (e.startsWith('ufixed') || e.startsWith('fixed')) &&
                (r.size = f(e)),
            e.startsWith('bytes') &&
              'bytes' !== e &&
              (r.size < 1 || r.size > 32))
          )
            throw new Error('Invalid bytes<N> width: ' + r.size);
          if (
            (e.startsWith('uint') || e.startsWith('int')) &&
            (r.size % 8 || r.size < 8 || r.size > 256)
          )
            throw new Error('Invalid int/uint<N> width: ' + r.size);
          return r;
        }
        function b(e) {
          return 'string' === e || 'bytes' === e || 'dynamic' === u(e);
        }
        function g(e) {
          return e.lastIndexOf(']') === e.length - 1;
        }
        function y(e, t) {
          return e.startsWith('address') || e.startsWith('bytes')
            ? '0x' + t.toString('hex')
            : t.toString();
        }
        (o.eventID = function(e, r) {
          var i = e + '(' + r.map(a).join(',') + ')';
          return n.keccak256(t.from(i));
        }),
          (o.methodID = function(e, t) {
            return o.eventID(e, t).slice(0, 4);
          }),
          (o.rawEncode = function(e, r) {
            var n = [],
              i = [],
              o = 0;
            e.forEach(function(e) {
              if (g(e)) {
                var t = u(e);
                o += 'dynamic' !== t ? 32 * t : 32;
              } else o += 32;
            });
            for (var s = 0; s < e.length; s++) {
              var f = a(e[s]),
                c = h(f, r[s]);
              b(f)
                ? (n.push(h('uint256', o)), i.push(c), (o += c.length))
                : n.push(c);
            }
            return t.concat(n.concat(i));
          }),
          (o.rawDecode = function(e, r) {
            var n = [];
            r = t.from(r);
            for (var i = 0, o = 0; o < e.length; o++) {
              var s = p(a(e[o])),
                f = l(s, r, i);
              (i += s.memoryUsage), n.push(f);
            }
            return n;
          }),
          (o.simpleEncode = function(e) {
            var r = Array.prototype.slice.call(arguments).slice(1),
              n = d(e);
            if (r.length !== n.args.length)
              throw new Error('Argument count mismatch');
            return t.concat([
              o.methodID(n.method, n.args),
              o.rawEncode(n.args, r)
            ]);
          }),
          (o.simpleDecode = function(e, t) {
            var r = d(e);
            if (!r.retargs) throw new Error('No return values in method');
            return o.rawDecode(r.retargs, t);
          }),
          (o.stringify = function(e, t) {
            var r = [];
            for (var n in e) {
              var i = e[n],
                o = t[n];
              (o = /^[^\[]+\[.*\]$/.test(i)
                ? o
                    .map(function(e) {
                      return y(i, e);
                    })
                    .join(', ')
                : y(i, o)),
                r.push(o);
            }
            return r;
          }),
          (o.solidityHexValue = function(e, r, i) {
            var a, f;
            if (g(e)) {
              var d = e.replace(/\[.*?\]/, '');
              if (!g(d)) {
                var h = u(e);
                if ('dynamic' !== h && 0 !== h && r.length > h)
                  throw new Error('Elements exceed array size: ' + h);
              }
              var l = r.map(function(e) {
                return o.solidityHexValue(d, e, 256);
              });
              return t.concat(l);
            }
            if ('bytes' === e) return r;
            if ('string' === e) return t.from(r, 'utf8');
            if ('bool' === e) {
              i = i || 8;
              var p = Array(i / 4).join('0');
              return t.from(r ? p + '1' : p + '0', 'hex');
            }
            if ('address' === e) {
              var b = 20;
              return i && (b = i / 8), n.setLengthLeft(r, b);
            }
            if (e.startsWith('bytes')) {
              if ((a = s(e)) < 1 || a > 32)
                throw new Error('Invalid bytes<N> width: ' + a);
              return n.setLengthRight(r, a);
            }
            if (e.startsWith('uint')) {
              if ((a = s(e)) % 8 || a < 8 || a > 256)
                throw new Error('Invalid uint<N> width: ' + a);
              if ((f = c(r)).bitLength() > a)
                throw new Error(
                  'Supplied uint exceeds width: ' + a + ' vs ' + f.bitLength()
                );
              return (i = i || a), f.toArrayLike(t, 'be', i / 8);
            }
            if (e.startsWith('int')) {
              if ((a = s(e)) % 8 || a < 8 || a > 256)
                throw new Error('Invalid int<N> width: ' + a);
              if ((f = c(r)).bitLength() > a)
                throw new Error(
                  'Supplied int exceeds width: ' + a + ' vs ' + f.bitLength()
                );
              return (i = i || a), f.toTwos(a).toArrayLike(t, 'be', i / 8);
            }
            throw new Error('Unsupported or invalid type: ' + e);
          }),
          (o.solidityPack = function(e, r) {
            if (e.length !== r.length)
              throw new Error('Number of types are not matching the values');
            for (var n = [], i = 0; i < e.length; i++) {
              var s = a(e[i]),
                f = r[i];
              n.push(o.solidityHexValue(s, f, null));
            }
            return t.concat(n);
          }),
          (o.soliditySHA3 = function(e, t) {
            return n.keccak256(o.solidityPack(e, t));
          }),
          (o.soliditySHA256 = function(e, t) {
            return n.sha256(o.solidityPack(e, t));
          }),
          (o.solidityRIPEMD160 = function(e, t) {
            return n.ripemd160(o.solidityPack(e, t), !0);
          }),
          (o.fromSerpent = function(e) {
            for (var t, r = [], n = 0; n < e.length; n++) {
              var i = e[n];
              if ('s' === i) r.push('bytes');
              else if ('b' === i) {
                for (
                  var o = 'bytes', a = n + 1;
                  a < e.length && (t = e[a]) >= '0' && t <= '9';

                )
                  (o += e[a] - '0'), a++;
                (n = a - 1), r.push(o);
              } else if ('i' === i) r.push('int256');
              else {
                if ('a' !== i)
                  throw new Error('Unsupported or invalid type: ' + i);
                r.push('int256[]');
              }
            }
            return r;
          }),
          (o.toSerpent = function(e) {
            for (var t = [], r = 0; r < e.length; r++) {
              var n = e[r];
              if ('bytes' === n) t.push('s');
              else if (n.startsWith('bytes')) t.push('b' + s(n));
              else if ('int256' === n) t.push('i');
              else {
                if ('int256[]' !== n)
                  throw new Error('Unsupported or invalid type: ' + n);
                t.push('a');
              }
            }
            return t.join('');
          }),
          (e.exports = o);
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(40);
      t.secp256k1 = i;
      var o = r(24),
        a = r(2);
      t.BN = a;
      var s = r(42);
      (t.rlp = s),
        Object.assign(t, o),
        n(r(268)),
        n(r(269)),
        n(r(63)),
        n(r(276)),
        n(r(32)),
        n(r(277));
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(2);
        (t.MAX_INTEGER = new n(
          'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          16
        )),
          (t.TWO_POW256 = new n(
            '10000000000000000000000000000000000000000000000000000000000000000',
            16
          )),
          (t.KECCAK256_NULL_S =
            'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'),
          (t.KECCAK256_NULL = e.from(t.KECCAK256_NULL_S, 'hex')),
          (t.KECCAK256_RLP_ARRAY_S =
            '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
          (t.KECCAK256_RLP_ARRAY = e.from(t.KECCAK256_RLP_ARRAY_S, 'hex')),
          (t.KECCAK256_RLP_S =
            '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
          (t.KECCAK256_RLP = e.from(t.KECCAK256_RLP_S, 'hex'));
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(62),
          i = r(24),
          o = r(40),
          a = r(2),
          s = r(32),
          f = r(63);
        (t.zeroAddress = function() {
          var e = s.zeros(20);
          return s.bufferToHex(e);
        }),
          (t.isValidAddress = function(e) {
            return /^0x[0-9a-fA-F]{40}$/.test(e);
          }),
          (t.isZeroAddress = function(e) {
            return t.zeroAddress() === s.addHexPrefix(e);
          }),
          (t.toChecksumAddress = function(e, t) {
            e = i.stripHexPrefix(e).toLowerCase();
            for (
              var r = void 0 !== t ? t.toString() + '0x' : '',
                n = f.keccak(r + e).toString('hex'),
                o = '0x',
                a = 0;
              a < e.length;
              a++
            )
              parseInt(n[a], 16) >= 8 ? (o += e[a].toUpperCase()) : (o += e[a]);
            return o;
          }),
          (t.isValidChecksumAddress = function(e, r) {
            return t.isValidAddress(e) && t.toChecksumAddress(e, r) === e;
          }),
          (t.generateAddress = function(t, r) {
            t = s.toBuffer(t);
            var n = new a(r);
            return n.isZero()
              ? f.rlphash([t, null]).slice(-20)
              : f.rlphash([t, e.from(n.toArray())]).slice(-20);
          }),
          (t.generateAddress2 = function(t, r, i) {
            var o = s.toBuffer(t),
              a = s.toBuffer(r),
              u = s.toBuffer(i);
            return (
              n(20 === o.length),
              n(32 === a.length),
              f
                .keccak256(
                  e.concat([e.from('ff', 'hex'), o, a, f.keccak256(u)])
                )
                .slice(-20)
            );
          }),
          (t.isPrecompiled = function(e) {
            var t = s.unpad(e);
            return 1 === t.length && t[0] >= 1 && t[0] <= 8;
          }),
          (t.isValidPrivate = function(e) {
            return o.privateKeyVerify(e);
          }),
          (t.isValidPublic = function(t, r) {
            return (
              void 0 === r && (r = !1),
              64 === t.length
                ? o.publicKeyVerify(e.concat([e.from([4]), t]))
                : !!r && o.publicKeyVerify(t)
            );
          }),
          (t.pubToAddress = function(e, t) {
            return (
              void 0 === t && (t = !1),
              (e = s.toBuffer(e)),
              t && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)),
              n(64 === e.length),
              f.keccak(e).slice(-20)
            );
          }),
          (t.publicToAddress = t.pubToAddress),
          (t.privateToAddress = function(e) {
            return t.publicToAddress(t.privateToPublic(e));
          }),
          (t.privateToPublic = function(e) {
            return (e = s.toBuffer(e)), o.publicKeyCreate(e, !1).slice(1);
          }),
          (t.importPublic = function(e) {
            return (
              64 !== (e = s.toBuffer(e)).length &&
                (e = o.publicKeyConvert(e, !1).slice(1)),
              e
            );
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      e.exports = r(271)(r(274));
    },
    function(e, t, r) {
      'use strict';
      const n = r(272),
        i = r(273);
      e.exports = function(e) {
        const t = n(e),
          r = i(e);
        return function(e, n) {
          switch ('string' == typeof e ? e.toLowerCase() : e) {
            case 'keccak224':
              return new t(1152, 448, null, 224, n);
            case 'keccak256':
              return new t(1088, 512, null, 256, n);
            case 'keccak384':
              return new t(832, 768, null, 384, n);
            case 'keccak512':
              return new t(576, 1024, null, 512, n);
            case 'sha3-224':
              return new t(1152, 448, 6, 224, n);
            case 'sha3-256':
              return new t(1088, 512, 6, 256, n);
            case 'sha3-384':
              return new t(832, 768, 6, 384, n);
            case 'sha3-512':
              return new t(576, 1024, 6, 512, n);
            case 'shake128':
              return new r(1344, 256, 31, n);
            case 'shake256':
              return new r(1088, 512, 31, n);
            default:
              throw new Error('Invald algorithm: ' + e);
          }
        };
      };
    },
    function(e, t, r) {
      'use strict';
      const n = r(1).Buffer,
        i = r(28).Transform,
        o = r(0);
      e.exports = function(e) {
        function t(t, r, n, o, a) {
          i.call(this, a),
            (this._rate = t),
            (this._capacity = r),
            (this._delimitedSuffix = n),
            (this._hashBitLength = o),
            (this._options = a),
            (this._state = new e()),
            this._state.initialize(t, r),
            (this._finalized = !1);
        }
        return (
          o(t, i),
          (t.prototype._transform = function(e, t, r) {
            let n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }),
          (t.prototype._flush = function(e) {
            let t = null;
            try {
              this.push(this.digest());
            } catch (e) {
              t = e;
            }
            e(t);
          }),
          (t.prototype.update = function(e, t) {
            if (!n.isBuffer(e) && 'string' != typeof e)
              throw new TypeError('Data must be a string or a buffer');
            if (this._finalized) throw new Error('Digest already called');
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }),
          (t.prototype.digest = function(e) {
            if (this._finalized) throw new Error('Digest already called');
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            let t = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== e && (t = t.toString(e)), this._resetState(), t;
          }),
          (t.prototype._resetState = function() {
            return this._state.initialize(this._rate, this._capacity), this;
          }),
          (t.prototype._clone = function() {
            const e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }),
          t
        );
      };
    },
    function(e, t, r) {
      'use strict';
      const n = r(1).Buffer,
        i = r(28).Transform,
        o = r(0);
      e.exports = function(e) {
        function t(t, r, n, o) {
          i.call(this, o),
            (this._rate = t),
            (this._capacity = r),
            (this._delimitedSuffix = n),
            (this._options = o),
            (this._state = new e()),
            this._state.initialize(t, r),
            (this._finalized = !1);
        }
        return (
          o(t, i),
          (t.prototype._transform = function(e, t, r) {
            let n = null;
            try {
              this.update(e, t);
            } catch (e) {
              n = e;
            }
            r(n);
          }),
          (t.prototype._flush = function() {}),
          (t.prototype._read = function(e) {
            this.push(this.squeeze(e));
          }),
          (t.prototype.update = function(e, t) {
            if (!n.isBuffer(e) && 'string' != typeof e)
              throw new TypeError('Data must be a string or a buffer');
            if (this._finalized) throw new Error('Squeeze already called');
            return (
              n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
            );
          }),
          (t.prototype.squeeze = function(e, t) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            let r = this._state.squeeze(e);
            return void 0 !== t && (r = r.toString(t)), r;
          }),
          (t.prototype._resetState = function() {
            return this._state.initialize(this._rate, this._capacity), this;
          }),
          (t.prototype._clone = function() {
            const e = new t(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(e._state), (e._finalized = this._finalized), e
            );
          }),
          t
        );
      };
    },
    function(e, t, r) {
      'use strict';
      const n = r(1).Buffer,
        i = r(275);
      function o() {
        (this.state = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (o.prototype.initialize = function(e, t) {
        for (let e = 0; e < 50; ++e) this.state[e] = 0;
        (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (o.prototype.absorb = function(e) {
          for (let t = 0; t < e.length; ++t)
            (this.state[~~(this.count / 4)] ^= e[t] << ((this.count % 4) * 8)),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
        }),
        (o.prototype.absorbLastFewBits = function(e) {
          (this.state[~~(this.count / 4)] ^= e << ((this.count % 4) * 8)),
            0 != (128 & e) &&
              this.count === this.blockSize - 1 &&
              i.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (((this.blockSize - 1) % 4) * 8)),
            i.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (o.prototype.squeeze = function(e) {
          this.squeezing || this.absorbLastFewBits(1);
          const t = n.alloc(e);
          for (var r = 0; r < e; ++r)
            (t[r] =
              (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (i.p1600(this.state), (this.count = 0));
          return t;
        }),
        (o.prototype.copy = function(e) {
          for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
          (e.blockSize = this.blockSize),
            (e.count = this.count),
            (e.squeezing = this.squeezing);
        }),
        (e.exports = o);
    },
    function(e, t, r) {
      'use strict';
      const n = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
      ];
      t.p1600 = function(e) {
        for (let t = 0; t < 24; ++t) {
          const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
          let l = d ^ ((o << 1) | (a >>> 31)),
            p = h ^ ((a << 1) | (o >>> 31));
          const b = e[0] ^ l,
            g = e[1] ^ p,
            y = e[10] ^ l,
            v = e[11] ^ p,
            m = e[20] ^ l,
            _ = e[21] ^ p,
            w = e[30] ^ l,
            E = e[31] ^ p,
            S = e[40] ^ l,
            A = e[41] ^ p;
          (l = r ^ ((s << 1) | (f >>> 31))), (p = i ^ ((f << 1) | (s >>> 31)));
          const T = e[2] ^ l,
            M = e[3] ^ p,
            x = e[12] ^ l,
            I = e[13] ^ p,
            L = e[22] ^ l,
            R = e[23] ^ p,
            P = e[32] ^ l,
            k = e[33] ^ p,
            N = e[42] ^ l,
            C = e[43] ^ p;
          (l = o ^ ((u << 1) | (c >>> 31))), (p = a ^ ((c << 1) | (u >>> 31)));
          const O = e[4] ^ l,
            B = e[5] ^ p,
            j = e[14] ^ l,
            D = e[15] ^ p,
            z = e[24] ^ l,
            U = e[25] ^ p,
            K = e[34] ^ l,
            q = e[35] ^ p,
            Y = e[44] ^ l,
            F = e[45] ^ p;
          (l = s ^ ((d << 1) | (h >>> 31))), (p = f ^ ((h << 1) | (d >>> 31)));
          const V = e[6] ^ l,
            H = e[7] ^ p,
            W = e[16] ^ l,
            G = e[17] ^ p,
            Z = e[26] ^ l,
            J = e[27] ^ p,
            $ = e[36] ^ l,
            X = e[37] ^ p,
            Q = e[46] ^ l,
            ee = e[47] ^ p;
          (l = u ^ ((r << 1) | (i >>> 31))), (p = c ^ ((i << 1) | (r >>> 31)));
          const te = e[8] ^ l,
            re = e[9] ^ p,
            ne = e[18] ^ l,
            ie = e[19] ^ p,
            oe = e[28] ^ l,
            ae = e[29] ^ p,
            se = e[38] ^ l,
            fe = e[39] ^ p,
            ue = e[48] ^ l,
            ce = e[49] ^ p,
            de = b,
            he = g,
            le = (v << 4) | (y >>> 28),
            pe = (y << 4) | (v >>> 28),
            be = (m << 3) | (_ >>> 29),
            ge = (_ << 3) | (m >>> 29),
            ye = (E << 9) | (w >>> 23),
            ve = (w << 9) | (E >>> 23),
            me = (S << 18) | (A >>> 14),
            _e = (A << 18) | (S >>> 14),
            we = (T << 1) | (M >>> 31),
            Ee = (M << 1) | (T >>> 31),
            Se = (I << 12) | (x >>> 20),
            Ae = (x << 12) | (I >>> 20),
            Te = (L << 10) | (R >>> 22),
            Me = (R << 10) | (L >>> 22),
            xe = (k << 13) | (P >>> 19),
            Ie = (P << 13) | (k >>> 19),
            Le = (N << 2) | (C >>> 30),
            Re = (C << 2) | (N >>> 30),
            Pe = (B << 30) | (O >>> 2),
            ke = (O << 30) | (B >>> 2),
            Ne = (j << 6) | (D >>> 26),
            Ce = (D << 6) | (j >>> 26),
            Oe = (U << 11) | (z >>> 21),
            Be = (z << 11) | (U >>> 21),
            je = (K << 15) | (q >>> 17),
            De = (q << 15) | (K >>> 17),
            ze = (F << 29) | (Y >>> 3),
            Ue = (Y << 29) | (F >>> 3),
            Ke = (V << 28) | (H >>> 4),
            qe = (H << 28) | (V >>> 4),
            Ye = (G << 23) | (W >>> 9),
            Fe = (W << 23) | (G >>> 9),
            Ve = (Z << 25) | (J >>> 7),
            He = (J << 25) | (Z >>> 7),
            We = ($ << 21) | (X >>> 11),
            Ge = (X << 21) | ($ >>> 11),
            Ze = (ee << 24) | (Q >>> 8),
            Je = (Q << 24) | (ee >>> 8),
            $e = (te << 27) | (re >>> 5),
            Xe = (re << 27) | (te >>> 5),
            Qe = (ne << 20) | (ie >>> 12),
            et = (ie << 20) | (ne >>> 12),
            tt = (ae << 7) | (oe >>> 25),
            rt = (oe << 7) | (ae >>> 25),
            nt = (se << 8) | (fe >>> 24),
            it = (fe << 8) | (se >>> 24),
            ot = (ue << 14) | (ce >>> 18),
            at = (ce << 14) | (ue >>> 18);
          (e[0] = de ^ (~Se & Oe)),
            (e[1] = he ^ (~Ae & Be)),
            (e[10] = Ke ^ (~Qe & be)),
            (e[11] = qe ^ (~et & ge)),
            (e[20] = we ^ (~Ne & Ve)),
            (e[21] = Ee ^ (~Ce & He)),
            (e[30] = $e ^ (~le & Te)),
            (e[31] = Xe ^ (~pe & Me)),
            (e[40] = Pe ^ (~Ye & tt)),
            (e[41] = ke ^ (~Fe & rt)),
            (e[2] = Se ^ (~Oe & We)),
            (e[3] = Ae ^ (~Be & Ge)),
            (e[12] = Qe ^ (~be & xe)),
            (e[13] = et ^ (~ge & Ie)),
            (e[22] = Ne ^ (~Ve & nt)),
            (e[23] = Ce ^ (~He & it)),
            (e[32] = le ^ (~Te & je)),
            (e[33] = pe ^ (~Me & De)),
            (e[42] = Ye ^ (~tt & ye)),
            (e[43] = Fe ^ (~rt & ve)),
            (e[4] = Oe ^ (~We & ot)),
            (e[5] = Be ^ (~Ge & at)),
            (e[14] = be ^ (~xe & ze)),
            (e[15] = ge ^ (~Ie & Ue)),
            (e[24] = Ve ^ (~nt & me)),
            (e[25] = He ^ (~it & _e)),
            (e[34] = Te ^ (~je & Ze)),
            (e[35] = Me ^ (~De & Je)),
            (e[44] = tt ^ (~ye & Le)),
            (e[45] = rt ^ (~ve & Re)),
            (e[6] = We ^ (~ot & de)),
            (e[7] = Ge ^ (~at & he)),
            (e[16] = xe ^ (~ze & Ke)),
            (e[17] = Ie ^ (~Ue & qe)),
            (e[26] = nt ^ (~me & we)),
            (e[27] = it ^ (~_e & Ee)),
            (e[36] = je ^ (~Ze & $e)),
            (e[37] = De ^ (~Je & Xe)),
            (e[46] = ye ^ (~Le & Pe)),
            (e[47] = ve ^ (~Re & ke)),
            (e[8] = ot ^ (~de & Se)),
            (e[9] = at ^ (~he & Ae)),
            (e[18] = ze ^ (~Ke & Qe)),
            (e[19] = Ue ^ (~qe & et)),
            (e[28] = me ^ (~we & Ne)),
            (e[29] = _e ^ (~Ee & Ce)),
            (e[38] = Ze ^ (~$e & le)),
            (e[39] = Je ^ (~Xe & pe)),
            (e[48] = Le ^ (~Pe & Ye)),
            (e[49] = Re ^ (~ke & Fe)),
            (e[0] ^= n[2 * t]),
            (e[1] ^= n[2 * t + 1]);
        }
      };
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(40),
          i = r(2),
          o = r(32),
          a = r(63);
        function s(e, t) {
          return t ? e - (2 * t + 35) : e - 27;
        }
        function f(e) {
          return 0 === e || 1 === e;
        }
        (t.ecsign = function(e, t, r) {
          var i = n.sign(e, t),
            o = i.recovery;
          return {
            r: i.signature.slice(0, 32),
            s: i.signature.slice(32, 64),
            v: r ? o + (2 * r + 35) : o + 27
          };
        }),
          (t.ecrecover = function(t, r, i, a, u) {
            var c = e.concat([o.setLength(i, 32), o.setLength(a, 32)], 64),
              d = s(r, u);
            if (!f(d)) throw new Error('Invalid signature v value');
            var h = n.recover(t, c, d);
            return n.publicKeyConvert(h, !1).slice(1);
          }),
          (t.toRpcSig = function(t, r, n, i) {
            if (!f(s(t, i))) throw new Error('Invalid signature v value');
            return o.bufferToHex(
              e.concat([
                o.setLengthLeft(r, 32),
                o.setLengthLeft(n, 32),
                o.toBuffer(t)
              ])
            );
          }),
          (t.fromRpcSig = function(e) {
            var t = o.toBuffer(e);
            if (65 !== t.length) throw new Error('Invalid signature length');
            var r = t[64];
            return (
              r < 27 && (r += 27),
              { v: r, r: t.slice(0, 32), s: t.slice(32, 64) }
            );
          }),
          (t.isValidSignature = function(e, t, r, n, o) {
            void 0 === n && (n = !0);
            var a = new i(
                '7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0',
                16
              ),
              u = new i(
                'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
                16
              );
            if (32 !== t.length || 32 !== r.length) return !1;
            if (!f(s(e, o))) return !1;
            var c = new i(t),
              d = new i(r);
            return (
              !(c.isZero() || c.gt(u) || d.isZero() || d.gt(u)) &&
              (!n || 1 !== d.cmp(a))
            );
          }),
          (t.hashPersonalMessage = function(t) {
            var r = e.from(
              'Ethereum Signed Message:\n' + t.length.toString(),
              'utf-8'
            );
            return a.keccak(e.concat([r, t]));
          });
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      'use strict';
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = r(62),
          i = r(24),
          o = r(42),
          a = r(32);
        t.defineProperties = function(t, r, s) {
          if (
            ((t.raw = []),
            (t._fields = []),
            (t.toJSON = function(e) {
              if ((void 0 === e && (e = !1), e)) {
                var r = {};
                return (
                  t._fields.forEach(function(e) {
                    r[e] = '0x' + t[e].toString('hex');
                  }),
                  r
                );
              }
              return a.baToJSON(t.raw);
            }),
            (t.serialize = function() {
              return o.encode(t.raw);
            }),
            r.forEach(function(r, i) {
              function o() {
                return t.raw[i];
              }
              function s(o) {
                '00' !== (o = a.toBuffer(o)).toString('hex') ||
                  r.allowZero ||
                  (o = e.allocUnsafe(0)),
                  r.allowLess && r.length
                    ? ((o = a.stripZeros(o)),
                      n(
                        r.length >= o.length,
                        'The field ' +
                          r.name +
                          ' must not have more ' +
                          r.length +
                          ' bytes'
                      ))
                    : (r.allowZero && 0 === o.length) ||
                      !r.length ||
                      n(
                        r.length === o.length,
                        'The field ' +
                          r.name +
                          ' must have byte length of ' +
                          r.length
                      ),
                  (t.raw[i] = o);
              }
              t._fields.push(r.name),
                Object.defineProperty(t, r.name, {
                  enumerable: !0,
                  configurable: !0,
                  get: o,
                  set: s
                }),
                r.default && (t[r.name] = r.default),
                r.alias &&
                  Object.defineProperty(t, r.alias, {
                    enumerable: !1,
                    configurable: !0,
                    set: s,
                    get: o
                  });
            }),
            s)
          )
            if (
              ('string' == typeof s && (s = e.from(i.stripHexPrefix(s), 'hex')),
              e.isBuffer(s) && (s = o.decode(s)),
              Array.isArray(s))
            ) {
              if (s.length > t._fields.length)
                throw new Error('wrong number of fields in data');
              s.forEach(function(e, r) {
                t[t._fields[r]] = a.toBuffer(e);
              });
            } else {
              if ('object' != typeof s) throw new Error('invalid data');
              var f = Object.keys(s);
              r.forEach(function(e) {
                -1 !== f.indexOf(e.name) && (t[e.name] = s[e.name]),
                  -1 !== f.indexOf(e.alias) && (t[e.alias] = s[e.alias]);
              });
            }
        };
      }.call(this, r(4).Buffer));
    },
    function(e, t, r) {
      (function(t) {
        !(function(r) {
          'use strict';
          var n = function(e) {
            setTimeout(e, 0);
          };
          void 0 !== t &&
            t &&
            'function' == typeof t.nextTick &&
            (n = t.nextTick),
            (e.exports = function(e) {
              var t = {
                capacity: e || 1,
                current: 0,
                queue: [],
                firstHere: !1,
                take: function() {
                  if (!1 === t.firstHere) {
                    t.current++, (t.firstHere = !0);
                    var e = 1;
                  } else e = 0;
                  var r = { n: 1 };
                  'function' == typeof arguments[0]
                    ? (r.task = arguments[0])
                    : (r.n = arguments[0]),
                    arguments.length >= 2 &&
                      ('function' == typeof arguments[1]
                        ? (r.task = arguments[1])
                        : (r.n = arguments[1]));
                  var n = r.task;
                  if (
                    ((r.task = function() {
                      n(t.leave);
                    }),
                    t.current + r.n - e > t.capacity)
                  )
                    return (
                      1 === e && (t.current--, (t.firstHere = !1)),
                      t.queue.push(r)
                    );
                  (t.current += r.n - e),
                    r.task(t.leave),
                    1 === e && (t.firstHere = !1);
                },
                leave: function(e) {
                  if (((e = e || 1), (t.current -= e), t.queue.length)) {
                    var r = t.queue[0];
                    r.n + t.current > t.capacity ||
                      (t.queue.shift(), (t.current += r.n), n(r.task));
                  } else if (t.current < 0)
                    throw new Error('leave called too many times.');
                },
                available: function(e) {
                  return (e = e || 1), t.current + e <= t.capacity;
                }
              };
              return t;
            });
        })();
      }.call(this, r(7)));
    },
    function(e, t, r) {
      const n = r(104);
      function i() {}
      (e.exports = i),
        (i.prototype.setEngine = function(e) {
          const t = this;
          t.engine ||
            ((t.engine = e),
            e.on('block', function(e) {
              t.currentBlock = e;
            }),
            e.on('start', function() {
              t.start();
            }),
            e.on('stop', function() {
              t.stop();
            }));
        }),
        (i.prototype.handleRequest = function(e, t, r) {
          throw new Error('Subproviders should override `handleRequest`.');
        }),
        (i.prototype.emitPayload = function(e, t) {
          this.engine.sendAsync(n(e), t);
        }),
        (i.prototype.stop = function() {}),
        (i.prototype.start = function() {});
    },
    function(e, t) {
      e.exports = function() {
        return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
      };
    },
    function(e, t, r) {
      const n = r(104);
      e.exports = function(e, t, r) {
        e.sendAsync(n({ method: 'eth_estimateGas', params: [t] }), function(
          e,
          t
        ) {
          if (e)
            return 'no contract code at given address' === e.message
              ? r(null, '0xcf08')
              : r(e);
          r(null, t.result);
        });
      };
    },
    function(e, t, r) {
      'use strict';
      e.exports = {
        coinType: {
          BITCOIN: 'bitcoin',
          BITCOIN_TESTNET: 'bitcoin-testnet',
          ERC20: 'erc20',
          ERC20_KOVAN: 'erc20',
          ETHEREUM: 'ethereum',
          ETHEREUM_KOVAN: 'ethereum',
          KLAYTN: 'klaytn',
          KLAY_BAOBAB: 'klaytn-testnet',
          KLAYTN_KCT: 'klaytn-erc20',
          KCT_BAOBAB: 'krc20-testnet',
          MONACOIN: 'monacoin',
          MONACOIN_TESTNET: 'monacoin-testnet',
          RIPPLE: 'ripple',
          RIPPLE_TESTNET: '',
          RRC20: 'rrc20',
          RRC20_TESTNET: 'rrc20',
          RSK: 'rsk',
          RSK_TESTNET: 'rsk-testnet'
        },
        coinGroup: {
          BITCOIN: 'BITCOIN',
          BITCOIN_TESTNET: 'BTC-TESTNET',
          ERC20: 'ERC20',
          ERC20_KOVAN: 'ERC20_KOVAN',
          ETHEREUM: 'ETHEREUM',
          ETHEREUM_KOVAN: 'ETH-KOVAN',
          KLAYTN: 'KLAYTN',
          KLAY_BAOBAB: 'KLAYTN-TESTNET',
          KLAYTN_KCT: 'KLAYTN-ERC20',
          KCT_BAOBAB: 'KRC20-TESTNET',
          MONACOIN: 'MONACOIN',
          MONACOIN_TESTNET: 'MONA-TESTNET',
          RIPPLE: 'RIPPLE',
          RIPPLE_TESTNET: 'XRP-TESTNET',
          RRC20: 'RRC20',
          RRC20_TESTNET: 'RRC20-TESTNET',
          RSK: 'RSK',
          RSK_TESTNET: 'RSK-TESTNET'
        },
        coinName: {
          BITCOIN: 'BITCOIN',
          BITCOIN_TESTNET: 'BTC-TESTNET',
          ERC20: '',
          ERC20_KOVAN: '',
          ETHEREUM: 'ETHEREUM',
          ETHEREUM_KOVAN: 'ETH-KOVAN',
          KLAYTN: 'KLAYTN',
          KLAY_BAOBAB: 'KLAYTN-TESTNET',
          KLAYTN_KCT: '',
          KCT_BAOBAB: '',
          MONACOIN: 'MONACOIN',
          MONACOIN_TESTNET: 'MONA-TESTNET',
          RIPPLE: 'RIPPLE',
          RIPPLE_TESTNET: 'XRP-TESTNET',
          RRC20: '',
          RRC20_TESTNET: '',
          RSK: 'RSK',
          RSK_TESTNET: 'RSK-TESTNET'
        },
        klaytnTxType: {
          LEGACY: 255,
          FEE_PAYER: 238,
          VALUE_TRANSFER: 8,
          FEE_DELEGATED_VALUE_TRANSFER: 9,
          FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO: 10,
          VALUE_TRANSFER_MEMO: 16,
          FEE_DELEGATED_VALUE_TRANSFER_MEMO: 17,
          FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO: 18,
          SMART_CONTRACT_EXECUTION: 48,
          FEE_DELEGATED_SMART_CONTRACT_EXECUTION: 49,
          FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO: 50,
          CANCEL: 56,
          FEE_DELEGATED_CANCEL: 57,
          FEE_DELEGATED_CANCEL_WITH_RATIO: 58
        }
      };
    },
    function(e, t) {
      e.exports = {
        state: {
          CONNECTED: 'dcent-connected',
          DISCONNECTED: 'dcent-disconnected'
        }
      };
    },
    function(e, t, r) {
      'use strict';
      e.exports = {
        config: {
          timeOutMs: 6e4,
          popUpUrl: 'https://bridge.dcentwallet.com/v2'
        }
      };
    },
    function(e, t) {
      let r = console.log.bind(window.console, '[INFO] ');
      let n = console.log.bind(window.console, '[DEBUG] ');
      n = () => {};
      const i = console.warn.bind(window.console, '[WARN] '),
        o = console.error.bind(window.console, '[ERROR] '),
        a = console.warn.bind(window.console, '[TEST] ');
      e.exports = {
        test: a,
        info: r,
        debug: n,
        warn: i,
        error: o,
        NOT_IMPLEMENTED: function() {
          var e = (e => {
            if (e.indexOf('at ') < 0) return e;
            var t = e.indexOf('at '),
              r = e.slice(t + 3, e.length).split(' '),
              n = r[0],
              i = r[1].split(/\\|\//);
            return i[i.length - 1].replace(')', '') + ':' + n;
          })(new Error().stack.toString().split(/\r\n|\n/)[2]);
          throw (console.log('[NOT_IMPLEMENTED]' + e),
          new Error('NOT_IMPLEMENTED'));
        }
      };
    },
    function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r(105),
        i = r.n(n),
        o = r(3),
        a = r.n(o),
        s = r(16),
        f = r.n(s),
        u = r(8),
        c = r.n(u),
        d = r(13),
        h = r.n(d),
        l = r(14),
        p = r.n(l),
        b = r(15),
        g = r.n(b),
        y = r(6),
        v = r.n(y),
        m = r(106),
        _ = r(107),
        w = r.n(_),
        E = r(5),
        S = r.n(E);
      function A(e) {
        var t = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var r,
            n = v()(e);
          if (t) {
            var i = v()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return g()(this, r);
        };
      }
      var T,
        M = {},
        x = (function() {
          var e = f()(
            a.a.mark(function e(t) {
              var r;
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.t0 = a.a.keys(M);
                    case 1:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 7;
                        break;
                      }
                      if ((r = e.t1.value).toLowerCase() !== t.toLowerCase()) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', M[r]);
                    case 5:
                      e.next = 1;
                      break;
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        I = (function() {
          var e = f()(
            a.a.mark(function e() {
              var t;
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), S.a.dcentPopupWindow();
                    case 2:
                      if (null == (t = e.sent) || 'error' !== t.header.status) {
                        e.next = 5;
                        break;
                      }
                      throw new Error(t.body.error.message);
                    case 5:
                      return e.abrupt('return', t);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        L = (function() {
          var e = f()(
            a.a.mark(function e() {
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (S.a.popupWindow && !S.a.popupWindow.closed) {
                        e.next = 2;
                        break;
                      }
                      throw new Error('popup_closed');
                    case 2:
                      return (e.next = 4), S.a.info();
                    case 4:
                      if (e.sent.body.parameter.isUsbAttached) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 8),
                        new Promise(function(e, t) {
                          setTimeout(function() {
                            L()
                              .then(function() {
                                e();
                              })
                              .catch(function(e) {
                                t(e);
                              });
                          }, 500);
                        })
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        R = (function() {
          var e = f()(
            a.a.mark(function e() {
              var t, r, n, i, o, s, f, u, c;
              return a.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Object.keys(M).length > 0)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', Object.keys(M));
                    case 2:
                      return (e.next = 4), I();
                    case 4:
                      return (e.next = 6), L();
                    case 6:
                      return (e.next = 8), S.a.getAccountInfo();
                    case 8:
                      (t = e.sent),
                        console.log('dcent accountInfo result: ', t),
                        (r = t.body.parameter.account),
                        console.log('dcent accounts: ', r),
                        (n = r.filter(function(e) {
                          return e.coin_name === S.a.coinGroup.ETHEREUM;
                        })),
                        (i = []),
                        n.forEach(function(e) {
                          i.push(e.address_path);
                        }),
                        console.log('dcent ethereum path: ', i),
                        0 === i.length &&
                          (i.push("m/44'/60'/0'/0/0"),
                          console.warn(
                            "[D'CENT] cannot find exists ethereum accounts. use default path"
                          )),
                        (o = []),
                        (s = 0),
                        (f = i);
                    case 19:
                      if (!(s < f.length)) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (u = f[s]),
                        (e.next = 23),
                        S.a.getAddress(S.a.coinType.ETHEREUM, u)
                      );
                    case 23:
                      (c = e.sent),
                        (M[c.body.parameter.address] = u),
                        o.push(c.body.parameter.address);
                    case 26:
                      s++, (e.next = 19);
                      break;
                    case 29:
                      return (
                        console.log('dcent addresses: ', o),
                        S.a.popupWindowClose(),
                        e.abrupt('return', o)
                      );
                    case 32:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        P = function(e, t) {
          if (void 0 === t) return k(e);
          k(e)
            .then(function(e) {
              t(null, e);
            })
            .catch(function(e) {
              t(e, null);
            });
        },
        k = (function() {
          var e = f()(
            a.a.mark(function e(t) {
              var r, n;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), I();
                      case 2:
                        return (e.next = 4), L();
                      case 4:
                        return (
                          console.log('dcent signTransactionAsync txData: ', t),
                          console.log(
                            'dcent signTransactionAsync pathMap: ',
                            M
                          ),
                          (e.next = 8),
                          x(t.from)
                        );
                      case 8:
                        if ((r = e.sent)) {
                          e.next = 11;
                          break;
                        }
                        throw new Error(
                          "address unknown '".concat(t.from, "'")
                        );
                      case 11:
                        return (
                          console.log('dcent signTransactionAsync path: ', r),
                          console.log(
                            'dcent signTransactionAsync networkId: ',
                            T
                          ),
                          (e.prev = 13),
                          (e.next = 16),
                          S.a.getEthereumSignedTransaction(
                            S.a.coinType.ETHEREUM,
                            t.nonce,
                            t.gasPrice,
                            t.gas,
                            t.to,
                            t.value || '0',
                            t.data || '0x',
                            r,
                            T
                          )
                        );
                      case 16:
                        (n = e.sent), (e.next = 26);
                        break;
                      case 19:
                        if (
                          ((e.prev = 19),
                          (e.t0 = e.catch(13)),
                          'wam' !== e.t0.header.response_from)
                        ) {
                          e.next = 23;
                          break;
                        }
                        throw new Error('no_device');
                      case 23:
                        if (!e.t0.body.error.code) {
                          e.next = 25;
                          break;
                        }
                        throw new Error(e.t0.body.error.code);
                      case 25:
                        throw e.t0;
                      case 26:
                        return (
                          (e.prev = 26), S.a.popupWindowClose(), e.finish(26)
                        );
                      case 29:
                        return (
                          console.log('dcent signTransaction tx: ', n),
                          e.abrupt('return', '0x' + n.body.parameter.signed)
                        );
                      case 31:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[13, 19, 26, 29]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        N = function(e, t) {
          if (void 0 === t) return C(e);
          C(e)
            .then(function(e) {
              t(null, e);
            })
            .catch(function(e) {
              t(e, null);
            });
        },
        C = (function() {
          var e = f()(
            a.a.mark(function e(t) {
              var r, n;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), I();
                      case 2:
                        return (e.next = 4), L();
                      case 4:
                        return (
                          console.log(
                            'dcent signPersonalMessageAsync msgData= ',
                            t
                          ),
                          (e.next = 7),
                          x(t.from)
                        );
                      case 7:
                        if ((r = e.sent)) {
                          e.next = 10;
                          break;
                        }
                        throw new Error(
                          "address unknown '".concat(t.from, "'")
                        );
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.next = 13),
                          S.a.getEthereumSignedMessage(t.data, r)
                        );
                      case 13:
                        (n = e.sent), (e.next = 23);
                        break;
                      case 16:
                        if (
                          ((e.prev = 16),
                          (e.t0 = e.catch(10)),
                          'wam' !== e.t0.header.response_from)
                        ) {
                          e.next = 20;
                          break;
                        }
                        throw new Error('no_device');
                      case 20:
                        if (!e.t0.body.error.code) {
                          e.next = 22;
                          break;
                        }
                        throw new Error(e.t0.body.error.code);
                      case 22:
                        throw e.t0;
                      case 23:
                        return (
                          (e.prev = 23), S.a.popupWindowClose(), e.finish(23)
                        );
                      case 26:
                        return (
                          console.log(
                            'dcent signPersonalMessageAsync result: ',
                            n
                          ),
                          e.abrupt('return', '0x' + n.body.parameter.sign)
                        );
                      case 28:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[10, 16, 23, 26]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        O = (function(e) {
          p()(r, e);
          var t = A(r);
          function r() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            c()(this, r);
            var n = { signTransaction: P, signPersonalMessage: N },
              i = Object.assign(e, n);
            return (
              console.log(
                'dcent DcentHookedWalletSubprovider constructor options: ',
                i
              ),
              (T = e.networkId),
              t.call(this, i)
            );
          }
          return (
            h()(r, [
              {
                key: 'getAccounts',
                value: function(e) {
                  if (!e) return R();
                  R()
                    .then(function(t) {
                      e(null, t);
                    })
                    .catch(function(t) {
                      e(t, null);
                    });
                }
              }
            ]),
            r
          );
        })(w.a);
      function B(e) {
        var t = (function() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var r,
            n = v()(e);
          if (t) {
            var i = v()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return g()(this, r);
        };
      }
      var j = (function(e) {
        p()(r, e);
        var t = B(r);
        function r() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'dcent';
          return c()(this, r), t.call(this, e, ['accounts', 'web3']);
        }
        return (
          h()(r, [
            {
              key: 'initialize',
              value: function(e) {
                var t = this;
                this.get('accounts').addAccountType(
                  'dcent',
                  (function() {
                    var e = f()(
                      a.a.mark(function e(r) {
                        var n, i, o;
                        return a.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (console.log(
                                    'dcent addAccountType Settings',
                                    r
                                  ),
                                  (n = new O({
                                    networkId: t.get('web3').networkId()
                                  })),
                                  !(r.accountsLength && r.accountsLength > 1))
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                if (r.choose) {
                                  e.next = 5;
                                  break;
                                }
                                throw new Error(
                                  'If accountsLength > 1, "choose" must be defined in account options.'
                                );
                              case 5:
                                return (e.next = 7), n.getAccounts();
                              case 7:
                                return (
                                  (o = e.sent),
                                  console.log('dcent factory addresses: ', o),
                                  (e.next = 11),
                                  new Promise(function(e, t) {
                                    r.choose(o, function(r, n) {
                                      r ? t(r) : e(n);
                                    });
                                  })
                                );
                              case 11:
                                (i = e.sent),
                                  console.log('dcent factory address: ', i),
                                  (e.next = 18);
                                break;
                              case 15:
                                return (e.next = 17), n.getAccounts()[0];
                              case 17:
                                i = e.sent;
                              case 18:
                                return e.abrupt('return', {
                                  subprovider: n,
                                  address: i
                                });
                              case 19:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              }
            }
          ]),
          r
        );
      })(m.LocalService);
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function(t) {
                i()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.default = {
        addConfig: function(e) {
          return z(z({}, e), {}, { additionalServices: ['dcent'], dcent: j });
        }
      };
    }
  ]);
});
