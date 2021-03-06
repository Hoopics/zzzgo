/*!
 * Web3 module to add transaction PoW for Ebakus. v1.0.0
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */
!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports['web3-ebakus'] = e())
    : (t.Web3Ebakus = e())
})(window, function() {
  return (function(t) {
    var e = {}
    function r(n) {
      if (e[n]) return e[n].exports
      var i = (e[n] = { i: n, l: !1, exports: {} })
      return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
      }),
      (r.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (r.t = function(t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            r.d(
              n,
              i,
              function(e) {
                return t[e]
              }.bind(null, i)
            )
        return n
      }),
      (r.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return r.d(e, 'a', e), e
      }),
      (r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (r.p = ''),
      r((r.s = 167))
    )
  })([
    function(t, e) {
      'function' == typeof Object.create
        ? (t.exports = function(t, e) {
            ;(t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }))
          })
        : (t.exports = function(t, e) {
            t.super_ = e
            var r = function() {}
            ;(r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t)
          })
    },
    function(t, e, r) {
      var n = r(3),
        i = n.Buffer
      function o(t, e) {
        for (var r in t) e[r] = t[r]
      }
      function a(t, e, r) {
        return i(t, e, r)
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = a)),
        o(i, a),
        (a.from = function(t, e, r) {
          if ('number' == typeof t)
            throw new TypeError('Argument must not be a number')
          return i(t, e, r)
        }),
        (a.alloc = function(t, e, r) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number')
          var n = i(t)
          return (
            void 0 !== e
              ? 'string' == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          )
        }),
        (a.allocUnsafe = function(t) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number')
          return i(t)
        }),
        (a.allocUnsafeSlow = function(t) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number')
          return n.SlowBuffer(t)
        })
    },
    function(t, e, r) {
      ;(function(t) {
        !(function(t, e) {
          'use strict'
          function n(t, e) {
            if (!t) throw new Error(e || 'Assertion failed')
          }
          function i(t, e) {
            t.super_ = e
            var r = function() {}
            ;(r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t)
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (('le' !== e && 'be' !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || 'be'))
          }
          var a
          'object' == typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26)
          try {
            a = r(119).Buffer
          } catch (t) {}
          function f(t, e, r) {
            for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
              var a = t.charCodeAt(o) - 48
              ;(n <<= 4),
                (n |=
                  a >= 49 && a <= 54
                    ? a - 49 + 10
                    : a >= 17 && a <= 22
                    ? a - 17 + 10
                    : 15 & a)
            }
            return n
          }
          function s(t, e, r, n) {
            for (var i = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
              var f = t.charCodeAt(a) - 48
              ;(i *= n),
                (i += f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f)
            }
            return i
          }
          ;(o.isBN = function(t) {
            return (
              t instanceof o ||
              (null !== t &&
                'object' == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            )
          }),
            (o.max = function(t, e) {
              return t.cmp(e) > 0 ? t : e
            }),
            (o.min = function(t, e) {
              return t.cmp(e) < 0 ? t : e
            }),
            (o.prototype._init = function(t, e, r) {
              if ('number' == typeof t) return this._initNumber(t, e, r)
              if ('object' == typeof t) return this._initArray(t, e, r)
              'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
              var i = 0
              '-' === (t = t.toString().replace(/\s+/g, ''))[0] && i++,
                16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
                '-' === t[0] && (this.negative = 1),
                this.strip(),
                'le' === r && this._initArray(this.toArray(), e, r)
            }),
            (o.prototype._initNumber = function(t, e, r) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (n(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === r && this._initArray(this.toArray(), e, r)
            }),
            (o.prototype._initArray = function(t, e, r) {
              if ((n('number' == typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var o,
                a,
                f = 0
              if ('be' === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (a = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (a << f) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - f)) & 67108863),
                    (f += 24) >= 26 && ((f -= 26), o++)
              else if ('le' === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (a = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (a << f) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - f)) & 67108863),
                    (f += 24) >= 26 && ((f -= 26), o++)
              return this.strip()
            }),
            (o.prototype._parseHex = function(t, e) {
              ;(this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length))
              for (var r = 0; r < this.length; r++) this.words[r] = 0
              var n,
                i,
                o = 0
              for (r = t.length - 6, n = 0; r >= e; r -= 6)
                (i = f(t, r, r + 6)),
                  (this.words[n] |= (i << o) & 67108863),
                  (this.words[n + 1] |= (i >>> (26 - o)) & 4194303),
                  (o += 24) >= 26 && ((o -= 26), n++)
              r + 6 !== e &&
                ((i = f(t, e, r + 6)),
                (this.words[n] |= (i << o) & 67108863),
                (this.words[n + 1] |= (i >>> (26 - o)) & 4194303)),
                this.strip()
            }),
            (o.prototype._parseBase = function(t, e, r) {
              ;(this.words = [0]), (this.length = 1)
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++
              n--, (i = (i / e) | 0)
              for (
                var o = t.length - r,
                  a = o % n,
                  f = Math.min(o, o - a) + r,
                  c = 0,
                  h = r;
                h < f;
                h += n
              )
                (c = s(t, h, h + n, e)),
                  this.imuln(i),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c)
              if (0 !== a) {
                var u = 1
                for (c = s(t, h, t.length, e), h = 0; h < a; h++) u *= e
                this.imuln(u),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c)
              }
            }),
            (o.prototype.copy = function(t) {
              t.words = new Array(this.length)
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
              ;(t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red)
            }),
            (o.prototype.clone = function() {
              var t = new o(null)
              return this.copy(t), t
            }),
            (o.prototype._expand = function(t) {
              for (; this.length < t; ) this.words[this.length++] = 0
              return this
            }),
            (o.prototype.strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--
              return this._normSign()
            }),
            (o.prototype._normSign = function() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              )
            }),
            (o.prototype.inspect = function() {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
            })
          var c = [
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
              '0000000000000000000000000',
            ],
            h = [
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
              5,
            ],
            u = [
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
              60466176,
            ]
          function d(t, e, r) {
            r.negative = e.negative ^ t.negative
            var n = (t.length + e.length) | 0
            ;(r.length = n), (n = (n - 1) | 0)
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              a = i * o,
              f = 67108863 & a,
              s = (a / 67108864) | 0
            r.words[0] = f
            for (var c = 1; c < n; c++) {
              for (
                var h = s >>> 26,
                  u = 67108863 & s,
                  d = Math.min(c, e.length - 1),
                  l = Math.max(0, c - t.length + 1);
                l <= d;
                l++
              ) {
                var p = (c - l) | 0
                ;(h +=
                  ((a = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + u) /
                    67108864) |
                  0),
                  (u = 67108863 & a)
              }
              ;(r.words[c] = 0 | u), (s = 0 | h)
            }
            return 0 !== s ? (r.words[c] = 0 | s) : r.length--, r.strip()
          }
          ;(o.prototype.toString = function(t, e) {
            var r
            if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
              r = ''
              for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                var f = this.words[a],
                  s = (16777215 & ((f << i) | o)).toString(16)
                ;(r =
                  0 != (o = (f >>> (24 - i)) & 16777215) ||
                  a !== this.length - 1
                    ? c[6 - s.length] + s + r
                    : s + r),
                  (i += 2) >= 26 && ((i -= 26), a--)
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
                r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var d = h[t],
                l = u[t]
              r = ''
              var p = this.clone()
              for (p.negative = 0; !p.isZero(); ) {
                var b = p.modn(l).toString(t)
                r = (p = p.idivn(l)).isZero() ? b + r : c[d - b.length] + b + r
              }
              for (this.isZero() && (r = '0' + r); r.length % e != 0; )
                r = '0' + r
              return 0 !== this.negative && (r = '-' + r), r
            }
            n(!1, 'Base should be between 2 and 36')
          }),
            (o.prototype.toNumber = function() {
              var t = this.words[0]
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    n(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -t : t
              )
            }),
            (o.prototype.toJSON = function() {
              return this.toString(16)
            }),
            (o.prototype.toBuffer = function(t, e) {
              return n(void 0 !== a), this.toArrayLike(a, t, e)
            }),
            (o.prototype.toArray = function(t, e) {
              return this.toArrayLike(Array, t, e)
            }),
            (o.prototype.toArrayLike = function(t, e, r) {
              var i = this.byteLength(),
                o = r || Math.max(1, i)
              n(i <= o, 'byte array longer than desired length'),
                n(o > 0, 'Requested array length <= 0'),
                this.strip()
              var a,
                f,
                s = 'le' === e,
                c = new t(o),
                h = this.clone()
              if (s) {
                for (f = 0; !h.isZero(); f++)
                  (a = h.andln(255)), h.iushrn(8), (c[f] = a)
                for (; f < o; f++) c[f] = 0
              } else {
                for (f = 0; f < o - i; f++) c[f] = 0
                for (f = 0; !h.isZero(); f++)
                  (a = h.andln(255)), h.iushrn(8), (c[o - f - 1] = a)
              }
              return c
            }),
            Math.clz32
              ? (o.prototype._countBits = function(t) {
                  return 32 - Math.clz32(t)
                })
              : (o.prototype._countBits = function(t) {
                  var e = t,
                    r = 0
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  )
                }),
            (o.prototype._zeroBits = function(t) {
              if (0 === t) return 26
              var e = t,
                r = 0
              return (
                0 == (8191 & e) && ((r += 13), (e >>>= 13)),
                0 == (127 & e) && ((r += 7), (e >>>= 7)),
                0 == (15 & e) && ((r += 4), (e >>>= 4)),
                0 == (3 & e) && ((r += 2), (e >>>= 2)),
                0 == (1 & e) && r++,
                r
              )
            }),
            (o.prototype.bitLength = function() {
              var t = this.words[this.length - 1],
                e = this._countBits(t)
              return 26 * (this.length - 1) + e
            }),
            (o.prototype.zeroBits = function() {
              if (this.isZero()) return 0
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e])
                if (((t += r), 26 !== r)) break
              }
              return t
            }),
            (o.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (o.prototype.toTwos = function(t) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(t)
                    .iaddn(1)
                : this.clone()
            }),
            (o.prototype.fromTwos = function(t) {
              return this.testn(t - 1)
                ? this.notn(t)
                    .iaddn(1)
                    .ineg()
                : this.clone()
            }),
            (o.prototype.isNeg = function() {
              return 0 !== this.negative
            }),
            (o.prototype.neg = function() {
              return this.clone().ineg()
            }),
            (o.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (o.prototype.iuor = function(t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e]
              return this.strip()
            }),
            (o.prototype.ior = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuor(t)
            }),
            (o.prototype.or = function(t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this)
            }),
            (o.prototype.uor = function(t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this)
            }),
            (o.prototype.iuand = function(t) {
              var e
              e = this.length > t.length ? t : this
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r]
              return (this.length = e.length), this.strip()
            }),
            (o.prototype.iand = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuand(t)
            }),
            (o.prototype.and = function(t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this)
            }),
            (o.prototype.uand = function(t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this)
            }),
            (o.prototype.iuxor = function(t) {
              var e, r
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this))
              for (var n = 0; n < r.length; n++)
                this.words[n] = e.words[n] ^ r.words[n]
              if (this !== e)
                for (; n < e.length; n++) this.words[n] = e.words[n]
              return (this.length = e.length), this.strip()
            }),
            (o.prototype.ixor = function(t) {
              return n(0 == (this.negative | t.negative)), this.iuxor(t)
            }),
            (o.prototype.xor = function(t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this)
            }),
            (o.prototype.uxor = function(t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this)
            }),
            (o.prototype.inotn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = 0 | Math.ceil(t / 26),
                r = t % 26
              this._expand(e), r > 0 && e--
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i]
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this.strip()
              )
            }),
            (o.prototype.notn = function(t) {
              return this.clone().inotn(t)
            }),
            (o.prototype.setn = function(t, e) {
              n('number' == typeof t && t >= 0)
              var r = (t / 26) | 0,
                i = t % 26
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this.strip()
              )
            }),
            (o.prototype.iadd = function(t) {
              var e, r, n
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                )
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                )
              this.length > t.length
                ? ((r = this), (n = t))
                : ((r = t), (n = this))
              for (var i = 0, o = 0; o < n.length; o++)
                (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26)
              for (; 0 !== i && o < r.length; o++)
                (e = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26)
              if (((this.length = r.length), 0 !== i))
                (this.words[this.length] = i), this.length++
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o]
              return this
            }),
            (o.prototype.add = function(t) {
              var e
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this)
            }),
            (o.prototype.isub = function(t) {
              if (0 !== t.negative) {
                t.negative = 0
                var e = this.iadd(t)
                return (t.negative = 1), e._normSign()
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                )
              var r,
                n,
                i = this.cmp(t)
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                )
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
              for (var o = 0, a = 0; a < n.length; a++)
                (o = (e = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & e)
              for (; 0 !== o && a < r.length; a++)
                (o = (e = (0 | r.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & e)
              if (0 === o && a < r.length && r !== this)
                for (; a < r.length; a++) this.words[a] = r.words[a]
              return (
                (this.length = Math.max(this.length, a)),
                r !== this && (this.negative = 1),
                this.strip()
              )
            }),
            (o.prototype.sub = function(t) {
              return this.clone().isub(t)
            })
          var l = function(t, e, r) {
            var n,
              i,
              o,
              a = t.words,
              f = e.words,
              s = r.words,
              c = 0,
              h = 0 | a[0],
              u = 8191 & h,
              d = h >>> 13,
              l = 0 | a[1],
              p = 8191 & l,
              b = l >>> 13,
              y = 0 | a[2],
              m = 8191 & y,
              g = y >>> 13,
              v = 0 | a[3],
              _ = 8191 & v,
              w = v >>> 13,
              S = 0 | a[4],
              M = 8191 & S,
              k = S >>> 13,
              E = 0 | a[5],
              A = 8191 & E,
              x = E >>> 13,
              I = 0 | a[6],
              B = 8191 & I,
              R = I >>> 13,
              C = 0 | a[7],
              T = 8191 & C,
              P = C >>> 13,
              j = 0 | a[8],
              O = 8191 & j,
              N = j >>> 13,
              D = 0 | a[9],
              U = 8191 & D,
              L = D >>> 13,
              z = 0 | f[0],
              q = 8191 & z,
              F = z >>> 13,
              K = 0 | f[1],
              W = 8191 & K,
              H = K >>> 13,
              Y = 0 | f[2],
              V = 8191 & Y,
              X = Y >>> 13,
              J = 0 | f[3],
              G = 8191 & J,
              Z = J >>> 13,
              $ = 0 | f[4],
              Q = 8191 & $,
              tt = $ >>> 13,
              et = 0 | f[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | f[6],
              ot = 8191 & it,
              at = it >>> 13,
              ft = 0 | f[7],
              st = 8191 & ft,
              ct = ft >>> 13,
              ht = 0 | f[8],
              ut = 8191 & ht,
              dt = ht >>> 13,
              lt = 0 | f[9],
              pt = 8191 & lt,
              bt = lt >>> 13
            ;(r.negative = t.negative ^ e.negative), (r.length = 19)
            var yt =
              (((c + (n = Math.imul(u, q))) | 0) +
                ((8191 & (i = ((i = Math.imul(u, F)) + Math.imul(d, q)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((o = Math.imul(d, F)) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(p, q)),
              (i = ((i = Math.imul(p, F)) + Math.imul(b, q)) | 0),
              (o = Math.imul(b, F))
            var mt =
              (((c + (n = (n + Math.imul(u, W)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, H)) | 0) + Math.imul(d, W)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, H)) | 0) + (i >>> 13)) | 0) +
                (mt >>> 26)) |
              0),
              (mt &= 67108863),
              (n = Math.imul(m, q)),
              (i = ((i = Math.imul(m, F)) + Math.imul(g, q)) | 0),
              (o = Math.imul(g, F)),
              (n = (n + Math.imul(p, W)) | 0),
              (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, H)) | 0)
            var gt =
              (((c + (n = (n + Math.imul(u, V)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, X)) | 0) + Math.imul(d, V)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, X)) | 0) + (i >>> 13)) | 0) +
                (gt >>> 26)) |
              0),
              (gt &= 67108863),
              (n = Math.imul(_, q)),
              (i = ((i = Math.imul(_, F)) + Math.imul(w, q)) | 0),
              (o = Math.imul(w, F)),
              (n = (n + Math.imul(m, W)) | 0),
              (i = ((i = (i + Math.imul(m, H)) | 0) + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, H)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(b, V)) | 0),
              (o = (o + Math.imul(b, X)) | 0)
            var vt =
              (((c + (n = (n + Math.imul(u, G)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, Z)) | 0) + Math.imul(d, G)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, Z)) | 0) + (i >>> 13)) | 0) +
                (vt >>> 26)) |
              0),
              (vt &= 67108863),
              (n = Math.imul(M, q)),
              (i = ((i = Math.imul(M, F)) + Math.imul(k, q)) | 0),
              (o = Math.imul(k, F)),
              (n = (n + Math.imul(_, W)) | 0),
              (i = ((i = (i + Math.imul(_, H)) | 0) + Math.imul(w, W)) | 0),
              (o = (o + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(m, V)) | 0),
              (i = ((i = (i + Math.imul(m, X)) | 0) + Math.imul(g, V)) | 0),
              (o = (o + Math.imul(g, X)) | 0),
              (n = (n + Math.imul(p, G)) | 0),
              (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(b, G)) | 0),
              (o = (o + Math.imul(b, Z)) | 0)
            var _t =
              (((c + (n = (n + Math.imul(u, Q)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, tt)) | 0) + Math.imul(d, Q)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (n = Math.imul(A, q)),
              (i = ((i = Math.imul(A, F)) + Math.imul(x, q)) | 0),
              (o = Math.imul(x, F)),
              (n = (n + Math.imul(M, W)) | 0),
              (i = ((i = (i + Math.imul(M, H)) | 0) + Math.imul(k, W)) | 0),
              (o = (o + Math.imul(k, H)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (i = ((i = (i + Math.imul(_, X)) | 0) + Math.imul(w, V)) | 0),
              (o = (o + Math.imul(w, X)) | 0),
              (n = (n + Math.imul(m, G)) | 0),
              (i = ((i = (i + Math.imul(m, Z)) | 0) + Math.imul(g, G)) | 0),
              (o = (o + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0)
            var wt =
              (((c + (n = (n + Math.imul(u, rt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, nt)) | 0) + Math.imul(d, rt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (n = Math.imul(B, q)),
              (i = ((i = Math.imul(B, F)) + Math.imul(R, q)) | 0),
              (o = Math.imul(R, F)),
              (n = (n + Math.imul(A, W)) | 0),
              (i = ((i = (i + Math.imul(A, H)) | 0) + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(x, H)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (i = ((i = (i + Math.imul(M, X)) | 0) + Math.imul(k, V)) | 0),
              (o = (o + Math.imul(k, X)) | 0),
              (n = (n + Math.imul(_, G)) | 0),
              (i = ((i = (i + Math.imul(_, Z)) | 0) + Math.imul(w, G)) | 0),
              (o = (o + Math.imul(w, Z)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
              (o = (o + Math.imul(b, nt)) | 0)
            var St =
              (((c + (n = (n + Math.imul(u, ot)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, at)) | 0) + Math.imul(d, ot)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, at)) | 0) + (i >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (n = Math.imul(T, q)),
              (i = ((i = Math.imul(T, F)) + Math.imul(P, q)) | 0),
              (o = Math.imul(P, F)),
              (n = (n + Math.imul(B, W)) | 0),
              (i = ((i = (i + Math.imul(B, H)) | 0) + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (i = ((i = (i + Math.imul(A, X)) | 0) + Math.imul(x, V)) | 0),
              (o = (o + Math.imul(x, X)) | 0),
              (n = (n + Math.imul(M, G)) | 0),
              (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(k, G)) | 0),
              (o = (o + Math.imul(k, Z)) | 0),
              (n = (n + Math.imul(_, Q)) | 0),
              (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(w, Q)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (i = ((i = (i + Math.imul(m, nt)) | 0) + Math.imul(g, rt)) | 0),
              (o = (o + Math.imul(g, nt)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, at)) | 0)
            var Mt =
              (((c + (n = (n + Math.imul(u, st)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, ct)) | 0) + Math.imul(d, st)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, ct)) | 0) + (i >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (n = Math.imul(O, q)),
              (i = ((i = Math.imul(O, F)) + Math.imul(N, q)) | 0),
              (o = Math.imul(N, F)),
              (n = (n + Math.imul(T, W)) | 0),
              (i = ((i = (i + Math.imul(T, H)) | 0) + Math.imul(P, W)) | 0),
              (o = (o + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(B, V)) | 0),
              (i = ((i = (i + Math.imul(B, X)) | 0) + Math.imul(R, V)) | 0),
              (o = (o + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(A, G)) | 0),
              (i = ((i = (i + Math.imul(A, Z)) | 0) + Math.imul(x, G)) | 0),
              (o = (o + Math.imul(x, Z)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (n = (n + Math.imul(_, rt)) | 0),
              (i = ((i = (i + Math.imul(_, nt)) | 0) + Math.imul(w, rt)) | 0),
              (o = (o + Math.imul(w, nt)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (i = ((i = (i + Math.imul(m, at)) | 0) + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(b, st)) | 0),
              (o = (o + Math.imul(b, ct)) | 0)
            var kt =
              (((c + (n = (n + Math.imul(u, ut)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, dt)) | 0) + Math.imul(d, ut)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) +
                (kt >>> 26)) |
              0),
              (kt &= 67108863),
              (n = Math.imul(U, q)),
              (i = ((i = Math.imul(U, F)) + Math.imul(L, q)) | 0),
              (o = Math.imul(L, F)),
              (n = (n + Math.imul(O, W)) | 0),
              (i = ((i = (i + Math.imul(O, H)) | 0) + Math.imul(N, W)) | 0),
              (o = (o + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(T, V)) | 0),
              (i = ((i = (i + Math.imul(T, X)) | 0) + Math.imul(P, V)) | 0),
              (o = (o + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(B, G)) | 0),
              (i = ((i = (i + Math.imul(B, Z)) | 0) + Math.imul(R, G)) | 0),
              (o = (o + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(x, Q)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (i = ((i = (i + Math.imul(M, nt)) | 0) + Math.imul(k, rt)) | 0),
              (o = (o + Math.imul(k, nt)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (i = ((i = (i + Math.imul(_, at)) | 0) + Math.imul(w, ot)) | 0),
              (o = (o + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (i = ((i = (i + Math.imul(m, ct)) | 0) + Math.imul(g, st)) | 0),
              (o = (o + Math.imul(g, ct)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, dt)) | 0)
            var Et =
              (((c + (n = (n + Math.imul(u, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(u, bt)) | 0) + Math.imul(d, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (n = Math.imul(U, W)),
              (i = ((i = Math.imul(U, H)) + Math.imul(L, W)) | 0),
              (o = Math.imul(L, H)),
              (n = (n + Math.imul(O, V)) | 0),
              (i = ((i = (i + Math.imul(O, X)) | 0) + Math.imul(N, V)) | 0),
              (o = (o + Math.imul(N, X)) | 0),
              (n = (n + Math.imul(T, G)) | 0),
              (i = ((i = (i + Math.imul(T, Z)) | 0) + Math.imul(P, G)) | 0),
              (o = (o + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(B, Q)) | 0),
              (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(x, rt)) | 0),
              (o = (o + Math.imul(x, nt)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (i = ((i = (i + Math.imul(M, at)) | 0) + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, at)) | 0),
              (n = (n + Math.imul(_, st)) | 0),
              (i = ((i = (i + Math.imul(_, ct)) | 0) + Math.imul(w, st)) | 0),
              (o = (o + Math.imul(w, ct)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (i = ((i = (i + Math.imul(m, dt)) | 0) + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, dt)) | 0)
            var At =
              (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) +
                (At >>> 26)) |
              0),
              (At &= 67108863),
              (n = Math.imul(U, V)),
              (i = ((i = Math.imul(U, X)) + Math.imul(L, V)) | 0),
              (o = Math.imul(L, X)),
              (n = (n + Math.imul(O, G)) | 0),
              (i = ((i = (i + Math.imul(O, Z)) | 0) + Math.imul(N, G)) | 0),
              (o = (o + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(T, Q)) | 0),
              (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(P, Q)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(R, rt)) | 0),
              (o = (o + Math.imul(R, nt)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (i = ((i = (i + Math.imul(A, at)) | 0) + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (i = ((i = (i + Math.imul(M, ct)) | 0) + Math.imul(k, st)) | 0),
              (o = (o + Math.imul(k, ct)) | 0),
              (n = (n + Math.imul(_, ut)) | 0),
              (i = ((i = (i + Math.imul(_, dt)) | 0) + Math.imul(w, ut)) | 0),
              (o = (o + Math.imul(w, dt)) | 0)
            var xt =
              (((c + (n = (n + Math.imul(m, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(m, bt)) | 0) + Math.imul(g, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) +
                (xt >>> 26)) |
              0),
              (xt &= 67108863),
              (n = Math.imul(U, G)),
              (i = ((i = Math.imul(U, Z)) + Math.imul(L, G)) | 0),
              (o = Math.imul(L, Z)),
              (n = (n + Math.imul(O, Q)) | 0),
              (i = ((i = (i + Math.imul(O, tt)) | 0) + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (i = ((i = (i + Math.imul(T, nt)) | 0) + Math.imul(P, rt)) | 0),
              (o = (o + Math.imul(P, nt)) | 0),
              (n = (n + Math.imul(B, ot)) | 0),
              (i = ((i = (i + Math.imul(B, at)) | 0) + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (i = ((i = (i + Math.imul(A, ct)) | 0) + Math.imul(x, st)) | 0),
              (o = (o + Math.imul(x, ct)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (i = ((i = (i + Math.imul(M, dt)) | 0) + Math.imul(k, ut)) | 0),
              (o = (o + Math.imul(k, dt)) | 0)
            var It =
              (((c + (n = (n + Math.imul(_, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(_, bt)) | 0) + Math.imul(w, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(w, bt)) | 0) + (i >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863),
              (n = Math.imul(U, Q)),
              (i = ((i = Math.imul(U, tt)) + Math.imul(L, Q)) | 0),
              (o = Math.imul(L, tt)),
              (n = (n + Math.imul(O, rt)) | 0),
              (i = ((i = (i + Math.imul(O, nt)) | 0) + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, nt)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (i = ((i = (i + Math.imul(T, at)) | 0) + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (i = ((i = (i + Math.imul(B, ct)) | 0) + Math.imul(R, st)) | 0),
              (o = (o + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(x, ut)) | 0),
              (o = (o + Math.imul(x, dt)) | 0)
            var Bt =
              (((c + (n = (n + Math.imul(M, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, bt)) | 0) + Math.imul(k, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(k, bt)) | 0) + (i >>> 13)) | 0) +
                (Bt >>> 26)) |
              0),
              (Bt &= 67108863),
              (n = Math.imul(U, rt)),
              (i = ((i = Math.imul(U, nt)) + Math.imul(L, rt)) | 0),
              (o = Math.imul(L, nt)),
              (n = (n + Math.imul(O, ot)) | 0),
              (i = ((i = (i + Math.imul(O, at)) | 0) + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(T, st)) | 0),
              (i = ((i = (i + Math.imul(T, ct)) | 0) + Math.imul(P, st)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(B, ut)) | 0),
              (i = ((i = (i + Math.imul(B, dt)) | 0) + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(R, dt)) | 0)
            var Rt =
              (((c + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(x, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(x, bt)) | 0) + (i >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (n = Math.imul(U, ot)),
              (i = ((i = Math.imul(U, at)) + Math.imul(L, ot)) | 0),
              (o = Math.imul(L, at)),
              (n = (n + Math.imul(O, st)) | 0),
              (i = ((i = (i + Math.imul(O, ct)) | 0) + Math.imul(N, st)) | 0),
              (o = (o + Math.imul(N, ct)) | 0),
              (n = (n + Math.imul(T, ut)) | 0),
              (i = ((i = (i + Math.imul(T, dt)) | 0) + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, dt)) | 0)
            var Ct =
              (((c + (n = (n + Math.imul(B, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(B, bt)) | 0) + Math.imul(R, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(R, bt)) | 0) + (i >>> 13)) | 0) +
                (Ct >>> 26)) |
              0),
              (Ct &= 67108863),
              (n = Math.imul(U, st)),
              (i = ((i = Math.imul(U, ct)) + Math.imul(L, st)) | 0),
              (o = Math.imul(L, ct)),
              (n = (n + Math.imul(O, ut)) | 0),
              (i = ((i = (i + Math.imul(O, dt)) | 0) + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, dt)) | 0)
            var Tt =
              (((c + (n = (n + Math.imul(T, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(T, bt)) | 0) + Math.imul(P, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (n = Math.imul(U, ut)),
              (i = ((i = Math.imul(U, dt)) + Math.imul(L, ut)) | 0),
              (o = Math.imul(L, dt))
            var Pt =
              (((c + (n = (n + Math.imul(O, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(O, bt)) | 0) + Math.imul(N, pt)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((o = (o + Math.imul(N, bt)) | 0) + (i >>> 13)) | 0) +
                (Pt >>> 26)) |
              0),
              (Pt &= 67108863)
            var jt =
              (((c + (n = Math.imul(U, pt))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(U, bt)) + Math.imul(L, pt)) | 0)) <<
                  13)) |
              0
            return (
              (c =
                ((((o = Math.imul(L, bt)) + (i >>> 13)) | 0) + (jt >>> 26)) |
                0),
              (jt &= 67108863),
              (s[0] = yt),
              (s[1] = mt),
              (s[2] = gt),
              (s[3] = vt),
              (s[4] = _t),
              (s[5] = wt),
              (s[6] = St),
              (s[7] = Mt),
              (s[8] = kt),
              (s[9] = Et),
              (s[10] = At),
              (s[11] = xt),
              (s[12] = It),
              (s[13] = Bt),
              (s[14] = Rt),
              (s[15] = Ct),
              (s[16] = Tt),
              (s[17] = Pt),
              (s[18] = jt),
              0 !== c && ((s[19] = c), r.length++),
              r
            )
          }
          function p(t, e, r) {
            return new b().mulp(t, e, r)
          }
          function b(t, e) {
            ;(this.x = t), (this.y = e)
          }
          Math.imul || (l = d),
            (o.prototype.mulTo = function(t, e) {
              var r = this.length + t.length
              return 10 === this.length && 10 === t.length
                ? l(this, t, e)
                : r < 63
                ? d(this, t, e)
                : r < 1024
                ? (function(t, e, r) {
                    ;(r.negative = e.negative ^ t.negative),
                      (r.length = t.length + e.length)
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                      var a = i
                      i = 0
                      for (
                        var f = 67108863 & n,
                          s = Math.min(o, e.length - 1),
                          c = Math.max(0, o - t.length + 1);
                        c <= s;
                        c++
                      ) {
                        var h = o - c,
                          u = (0 | t.words[h]) * (0 | e.words[c]),
                          d = 67108863 & u
                        ;(f = 67108863 & (d = (d + f) | 0)),
                          (i +=
                            (a =
                              ((a = (a + ((u / 67108864) | 0)) | 0) +
                                (d >>> 26)) |
                              0) >>> 26),
                          (a &= 67108863)
                      }
                      ;(r.words[o] = f), (n = a), (a = i)
                    }
                    return 0 !== n ? (r.words[o] = n) : r.length--, r.strip()
                  })(this, t, e)
                : p(this, t, e)
            }),
            (b.prototype.makeRBT = function(t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
                n < t;
                n++
              )
                e[n] = this.revBin(n, r, t)
              return e
            }),
            (b.prototype.revBin = function(t, e, r) {
              if (0 === t || t === r - 1) return t
              for (var n = 0, i = 0; i < e; i++)
                (n |= (1 & t) << (e - i - 1)), (t >>= 1)
              return n
            }),
            (b.prototype.permute = function(t, e, r, n, i, o) {
              for (var a = 0; a < o; a++) (n[a] = e[t[a]]), (i[a] = r[t[a]])
            }),
            (b.prototype.transform = function(t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i)
              for (var a = 1; a < i; a <<= 1)
                for (
                  var f = a << 1,
                    s = Math.cos((2 * Math.PI) / f),
                    c = Math.sin((2 * Math.PI) / f),
                    h = 0;
                  h < i;
                  h += f
                )
                  for (var u = s, d = c, l = 0; l < a; l++) {
                    var p = r[h + l],
                      b = n[h + l],
                      y = r[h + l + a],
                      m = n[h + l + a],
                      g = u * y - d * m
                    ;(m = u * m + d * y),
                      (y = g),
                      (r[h + l] = p + y),
                      (n[h + l] = b + m),
                      (r[h + l + a] = p - y),
                      (n[h + l + a] = b - m),
                      l !== f &&
                        ((g = s * u - c * d), (d = s * d + c * u), (u = g))
                  }
            }),
            (b.prototype.guessLen13b = function(t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0
              for (r = (r / 2) | 0; r; r >>>= 1) i++
              return 1 << (i + 1 + n)
            }),
            (b.prototype.conjugate = function(t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n]
                  ;(t[n] = t[r - n - 1]),
                    (t[r - n - 1] = i),
                    (i = e[n]),
                    (e[n] = -e[r - n - 1]),
                    (e[r - n - 1] = -i)
                }
            }),
            (b.prototype.normalize13b = function(t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i =
                  8192 * Math.round(t[2 * n + 1] / e) +
                  Math.round(t[2 * n] / e) +
                  r
                ;(t[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0)
              }
              return t
            }),
            (b.prototype.convert13b = function(t, e, r, i) {
              for (var o = 0, a = 0; a < e; a++)
                (o += 0 | t[a]),
                  (r[2 * a] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * a + 1] = 8191 & o),
                  (o >>>= 13)
              for (a = 2 * e; a < i; ++a) r[a] = 0
              n(0 === o), n(0 == (-8192 & o))
            }),
            (b.prototype.stub = function(t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
              return e
            }),
            (b.prototype.mulp = function(t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                a = new Array(n),
                f = new Array(n),
                s = new Array(n),
                c = new Array(n),
                h = new Array(n),
                u = new Array(n),
                d = r.words
              ;(d.length = n),
                this.convert13b(t.words, t.length, a, n),
                this.convert13b(e.words, e.length, c, n),
                this.transform(a, o, f, s, n, i),
                this.transform(c, o, h, u, n, i)
              for (var l = 0; l < n; l++) {
                var p = f[l] * h[l] - s[l] * u[l]
                ;(s[l] = f[l] * u[l] + s[l] * h[l]), (f[l] = p)
              }
              return (
                this.conjugate(f, s, n),
                this.transform(f, s, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r.strip()
              )
            }),
            (o.prototype.mul = function(t) {
              var e = new o(null)
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              )
            }),
            (o.prototype.mulf = function(t) {
              var e = new o(null)
              return (
                (e.words = new Array(this.length + t.length)), p(this, t, e)
              )
            }),
            (o.prototype.imul = function(t) {
              return this.clone().mulTo(t, this)
            }),
            (o.prototype.imuln = function(t) {
              n('number' == typeof t), n(t < 67108864)
              for (var e = 0, r = 0; r < this.length; r++) {
                var i = (0 | this.words[r]) * t,
                  o = (67108863 & i) + (67108863 & e)
                ;(e >>= 26),
                  (e += (i / 67108864) | 0),
                  (e += o >>> 26),
                  (this.words[r] = 67108863 & o)
              }
              return 0 !== e && ((this.words[r] = e), this.length++), this
            }),
            (o.prototype.muln = function(t) {
              return this.clone().imuln(t)
            }),
            (o.prototype.sqr = function() {
              return this.mul(this)
            }),
            (o.prototype.isqr = function() {
              return this.imul(this.clone())
            }),
            (o.prototype.pow = function(t) {
              var e = (function(t) {
                for (
                  var e = new Array(t.bitLength()), r = 0;
                  r < e.length;
                  r++
                ) {
                  var n = (r / 26) | 0,
                    i = r % 26
                  e[r] = (t.words[n] & (1 << i)) >>> i
                }
                return e
              })(t)
              if (0 === e.length) return new o(1)
              for (
                var r = this, n = 0;
                n < e.length && 0 === e[n];
                n++, r = r.sqr()
              );
              if (++n < e.length)
                for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                  0 !== e[n] && (r = r.mul(i))
              return r
            }),
            (o.prototype.iushln = function(t) {
              n('number' == typeof t && t >= 0)
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var a = 0
                for (e = 0; e < this.length; e++) {
                  var f = this.words[e] & o,
                    s = ((0 | this.words[e]) - f) << r
                  ;(this.words[e] = s | a), (a = f >>> (26 - r))
                }
                a && ((this.words[e] = a), this.length++)
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e]
                for (e = 0; e < i; e++) this.words[e] = 0
                this.length += i
              }
              return this.strip()
            }),
            (o.prototype.ishln = function(t) {
              return n(0 === this.negative), this.iushln(t)
            }),
            (o.prototype.iushrn = function(t, e, r) {
              var i
              n('number' == typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0)
              var o = t % 26,
                a = Math.min((t - o) / 26, this.length),
                f = 67108863 ^ ((67108863 >>> o) << o),
                s = r
              if (((i -= a), (i = Math.max(0, i)), s)) {
                for (var c = 0; c < a; c++) s.words[c] = this.words[c]
                s.length = a
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + a]
              else (this.words[0] = 0), (this.length = 1)
              var h = 0
              for (c = this.length - 1; c >= 0 && (0 !== h || c >= i); c--) {
                var u = 0 | this.words[c]
                ;(this.words[c] = (h << (26 - o)) | (u >>> o)), (h = u & f)
              }
              return (
                s && 0 !== h && (s.words[s.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              )
            }),
            (o.prototype.ishrn = function(t, e, r) {
              return n(0 === this.negative), this.iushrn(t, e, r)
            }),
            (o.prototype.shln = function(t) {
              return this.clone().ishln(t)
            }),
            (o.prototype.ushln = function(t) {
              return this.clone().iushln(t)
            }),
            (o.prototype.shrn = function(t) {
              return this.clone().ishrn(t)
            }),
            (o.prototype.ushrn = function(t) {
              return this.clone().iushrn(t)
            }),
            (o.prototype.testn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              return !(this.length <= r || !(this.words[r] & i))
            }),
            (o.prototype.imaskn = function(t) {
              n('number' == typeof t && t >= 0)
              var e = t % 26,
                r = (t - e) / 26
              if (
                (n(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= r)
              )
                return this
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e)
                this.words[this.length - 1] &= i
              }
              return this.strip()
            }),
            (o.prototype.maskn = function(t) {
              return this.clone().imaskn(t)
            }),
            (o.prototype.iaddn = function(t) {
              return (
                n('number' == typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              )
            }),
            (o.prototype._iaddn = function(t) {
              this.words[0] += t
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++
              return (this.length = Math.max(this.length, e + 1)), this
            }),
            (o.prototype.isubn = function(t) {
              if ((n('number' == typeof t), n(t < 67108864), t < 0))
                return this.iaddn(-t)
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                )
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1)
              return this.strip()
            }),
            (o.prototype.addn = function(t) {
              return this.clone().iaddn(t)
            }),
            (o.prototype.subn = function(t) {
              return this.clone().isubn(t)
            }),
            (o.prototype.iabs = function() {
              return (this.negative = 0), this
            }),
            (o.prototype.abs = function() {
              return this.clone().iabs()
            }),
            (o.prototype._ishlnsubmul = function(t, e, r) {
              var i,
                o,
                a = t.length + r
              this._expand(a)
              var f = 0
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + f
                var s = (0 | t.words[i]) * e
                ;(f = ((o -= 67108863 & s) >> 26) - ((s / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o)
              }
              for (; i < this.length - r; i++)
                (f = (o = (0 | this.words[i + r]) + f) >> 26),
                  (this.words[i + r] = 67108863 & o)
              if (0 === f) return this.strip()
              for (n(-1 === f), f = 0, i = 0; i < this.length; i++)
                (f = (o = -(0 | this.words[i]) + f) >> 26),
                  (this.words[i] = 67108863 & o)
              return (this.negative = 1), this.strip()
            }),
            (o.prototype._wordDiv = function(t, e) {
              var r = (this.length, t.length),
                n = this.clone(),
                i = t,
                a = 0 | i.words[i.length - 1]
              0 != (r = 26 - this._countBits(a)) &&
                ((i = i.ushln(r)), n.iushln(r), (a = 0 | i.words[i.length - 1]))
              var f,
                s = n.length - i.length
              if ('mod' !== e) {
                ;((f = new o(null)).length = s + 1),
                  (f.words = new Array(f.length))
                for (var c = 0; c < f.length; c++) f.words[c] = 0
              }
              var h = n.clone()._ishlnsubmul(i, 1, s)
              0 === h.negative && ((n = h), f && (f.words[s] = 1))
              for (var u = s - 1; u >= 0; u--) {
                var d =
                  67108864 * (0 | n.words[i.length + u]) +
                  (0 | n.words[i.length + u - 1])
                for (
                  d = Math.min((d / a) | 0, 67108863), n._ishlnsubmul(i, d, u);
                  0 !== n.negative;

                )
                  d--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, u),
                    n.isZero() || (n.negative ^= 1)
                f && (f.words[u] = d)
              }
              return (
                f && f.strip(),
                n.strip(),
                'div' !== e && 0 !== r && n.iushrn(r),
                { div: f || null, mod: n }
              )
            }),
            (o.prototype.divmod = function(t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((f = this.neg().divmod(t, e)),
                    'mod' !== e && (i = f.div.neg()),
                    'div' !== e &&
                      ((a = f.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                    { div: i, mod: a })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((f = this.divmod(t.neg(), e)),
                    'mod' !== e && (i = f.div.neg()),
                    { div: i, mod: f.mod })
                  : 0 != (this.negative & t.negative)
                  ? ((f = this.neg().divmod(t.neg(), e)),
                    'div' !== e &&
                      ((a = f.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                    { div: f.div, mod: a })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? 'div' === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : 'mod' === e
                    ? { div: null, mod: new o(this.modn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              )
              var i, a, f
            }),
            (o.prototype.div = function(t) {
              return this.divmod(t, 'div', !1).div
            }),
            (o.prototype.mod = function(t) {
              return this.divmod(t, 'mod', !1).mod
            }),
            (o.prototype.umod = function(t) {
              return this.divmod(t, 'mod', !0).mod
            }),
            (o.prototype.divRound = function(t) {
              var e = this.divmod(t)
              if (e.mod.isZero()) return e.div
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n)
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1)
            }),
            (o.prototype.modn = function(t) {
              n(t <= 67108863)
              for (
                var e = (1 << 26) % t, r = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                r = (e * r + (0 | this.words[i])) % t
              return r
            }),
            (o.prototype.idivn = function(t) {
              n(t <= 67108863)
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = (0 | this.words[r]) + 67108864 * e
                ;(this.words[r] = (i / t) | 0), (e = i % t)
              }
              return this.strip()
            }),
            (o.prototype.divn = function(t) {
              return this.clone().idivn(t)
            }),
            (o.prototype.egcd = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (
                var i = new o(1),
                  a = new o(0),
                  f = new o(0),
                  s = new o(1),
                  c = 0;
                e.isEven() && r.isEven();

              )
                e.iushrn(1), r.iushrn(1), ++c
              for (var h = r.clone(), u = e.clone(); !e.isZero(); ) {
                for (
                  var d = 0, l = 1;
                  0 == (e.words[0] & l) && d < 26;
                  ++d, l <<= 1
                );
                if (d > 0)
                  for (e.iushrn(d); d-- > 0; )
                    (i.isOdd() || a.isOdd()) && (i.iadd(h), a.isub(u)),
                      i.iushrn(1),
                      a.iushrn(1)
                for (
                  var p = 0, b = 1;
                  0 == (r.words[0] & b) && p < 26;
                  ++p, b <<= 1
                );
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (f.isOdd() || s.isOdd()) && (f.iadd(h), s.isub(u)),
                      f.iushrn(1),
                      s.iushrn(1)
                e.cmp(r) >= 0
                  ? (e.isub(r), i.isub(f), a.isub(s))
                  : (r.isub(e), f.isub(i), s.isub(a))
              }
              return { a: f, b: s, gcd: r.iushln(c) }
            }),
            (o.prototype._invmp = function(t) {
              n(0 === t.negative), n(!t.isZero())
              var e = this,
                r = t.clone()
              e = 0 !== e.negative ? e.umod(t) : e.clone()
              for (
                var i, a = new o(1), f = new o(0), s = r.clone();
                e.cmpn(1) > 0 && r.cmpn(1) > 0;

              ) {
                for (
                  var c = 0, h = 1;
                  0 == (e.words[0] & h) && c < 26;
                  ++c, h <<= 1
                );
                if (c > 0)
                  for (e.iushrn(c); c-- > 0; )
                    a.isOdd() && a.iadd(s), a.iushrn(1)
                for (
                  var u = 0, d = 1;
                  0 == (r.words[0] & d) && u < 26;
                  ++u, d <<= 1
                );
                if (u > 0)
                  for (r.iushrn(u); u-- > 0; )
                    f.isOdd() && f.iadd(s), f.iushrn(1)
                e.cmp(r) >= 0 ? (e.isub(r), a.isub(f)) : (r.isub(e), f.isub(a))
              }
              return (i = 0 === e.cmpn(1) ? a : f).cmpn(0) < 0 && i.iadd(t), i
            }),
            (o.prototype.gcd = function(t) {
              if (this.isZero()) return t.abs()
              if (t.isZero()) return this.abs()
              var e = this.clone(),
                r = t.clone()
              ;(e.negative = 0), (r.negative = 0)
              for (var n = 0; e.isEven() && r.isEven(); n++)
                e.iushrn(1), r.iushrn(1)
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1)
                for (; r.isEven(); ) r.iushrn(1)
                var i = e.cmp(r)
                if (i < 0) {
                  var o = e
                  ;(e = r), (r = o)
                } else if (0 === i || 0 === r.cmpn(1)) break
                e.isub(r)
              }
              return r.iushln(n)
            }),
            (o.prototype.invm = function(t) {
              return this.egcd(t).a.umod(t)
            }),
            (o.prototype.isEven = function() {
              return 0 == (1 & this.words[0])
            }),
            (o.prototype.isOdd = function() {
              return 1 == (1 & this.words[0])
            }),
            (o.prototype.andln = function(t) {
              return this.words[0] & t
            }),
            (o.prototype.bincn = function(t) {
              n('number' == typeof t)
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e
              if (this.length <= r)
                return this._expand(r + 1), (this.words[r] |= i), this
              for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                var f = 0 | this.words[a]
                ;(o = (f += o) >>> 26), (f &= 67108863), (this.words[a] = f)
              }
              return 0 !== o && ((this.words[a] = o), this.length++), this
            }),
            (o.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (o.prototype.cmpn = function(t) {
              var e,
                r = t < 0
              if (0 !== this.negative && !r) return -1
              if (0 === this.negative && r) return 1
              if ((this.strip(), this.length > 1)) e = 1
              else {
                r && (t = -t), n(t <= 67108863, 'Number is too big')
                var i = 0 | this.words[0]
                e = i === t ? 0 : i < t ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.cmp = function(t) {
              if (0 !== this.negative && 0 === t.negative) return -1
              if (0 === this.negative && 0 !== t.negative) return 1
              var e = this.ucmp(t)
              return 0 !== this.negative ? 0 | -e : e
            }),
            (o.prototype.ucmp = function(t) {
              if (this.length > t.length) return 1
              if (this.length < t.length) return -1
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r]
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1)
                  break
                }
              }
              return e
            }),
            (o.prototype.gtn = function(t) {
              return 1 === this.cmpn(t)
            }),
            (o.prototype.gt = function(t) {
              return 1 === this.cmp(t)
            }),
            (o.prototype.gten = function(t) {
              return this.cmpn(t) >= 0
            }),
            (o.prototype.gte = function(t) {
              return this.cmp(t) >= 0
            }),
            (o.prototype.ltn = function(t) {
              return -1 === this.cmpn(t)
            }),
            (o.prototype.lt = function(t) {
              return -1 === this.cmp(t)
            }),
            (o.prototype.lten = function(t) {
              return this.cmpn(t) <= 0
            }),
            (o.prototype.lte = function(t) {
              return this.cmp(t) <= 0
            }),
            (o.prototype.eqn = function(t) {
              return 0 === this.cmpn(t)
            }),
            (o.prototype.eq = function(t) {
              return 0 === this.cmp(t)
            }),
            (o.red = function(t) {
              return new S(t)
            }),
            (o.prototype.toRed = function(t) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                n(0 === this.negative, 'red works only with positives'),
                t.convertTo(this)._forceRed(t)
              )
            }),
            (o.prototype.fromRed = function() {
              return (
                n(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              )
            }),
            (o.prototype._forceRed = function(t) {
              return (this.red = t), this
            }),
            (o.prototype.forceRed = function(t) {
              return (
                n(!this.red, 'Already a number in reduction context'),
                this._forceRed(t)
              )
            }),
            (o.prototype.redAdd = function(t) {
              return (
                n(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, t)
              )
            }),
            (o.prototype.redIAdd = function(t) {
              return (
                n(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, t)
              )
            }),
            (o.prototype.redSub = function(t) {
              return (
                n(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, t)
              )
            }),
            (o.prototype.redISub = function(t) {
              return (
                n(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, t)
              )
            }),
            (o.prototype.redShl = function(t) {
              return (
                n(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, t)
              )
            }),
            (o.prototype.redMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              )
            }),
            (o.prototype.redIMul = function(t) {
              return (
                n(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              )
            }),
            (o.prototype.redSqr = function() {
              return (
                n(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              )
            }),
            (o.prototype.redISqr = function() {
              return (
                n(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              )
            }),
            (o.prototype.redSqrt = function() {
              return (
                n(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              )
            }),
            (o.prototype.redInvm = function() {
              return (
                n(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              )
            }),
            (o.prototype.redNeg = function() {
              return (
                n(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              )
            }),
            (o.prototype.redPow = function(t) {
              return (
                n(this.red && !t.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, t)
              )
            })
          var y = { k256: null, p224: null, p192: null, p25519: null }
          function m(t, e) {
            ;(this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function g() {
            m.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            )
          }
          function v() {
            m.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            )
          }
          function _() {
            m.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            )
          }
          function w() {
            m.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            )
          }
          function S(t) {
            if ('string' == typeof t) {
              var e = o._prime(t)
              ;(this.m = e.p), (this.prime = e)
            } else
              n(t.gtn(1), 'modulus must be greater than 1'),
                (this.m = t),
                (this.prime = null)
          }
          function M(t) {
            S.call(this, t),
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
              (this.minv = this.r.sub(this.minv))
          }
          ;(m.prototype._tmp = function() {
            var t = new o(null)
            return (t.words = new Array(Math.ceil(this.n / 13))), t
          }),
            (m.prototype.ireduce = function(t) {
              var e,
                r = t
              do {
                this.split(r, this.tmp),
                  (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (e > this.n)
              var n = e < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : r.strip(),
                r
              )
            }),
            (m.prototype.split = function(t, e) {
              t.iushrn(this.n, 0, e)
            }),
            (m.prototype.imulK = function(t) {
              return t.imul(this.k)
            }),
            i(g, m),
            (g.prototype.split = function(t, e) {
              for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
                e.words[n] = t.words[n]
              if (((e.length = r), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1)
              var i = t.words[9]
              for (
                e.words[e.length++] = 4194303 & i, n = 10;
                n < t.length;
                n++
              ) {
                var o = 0 | t.words[n]
                ;(t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o)
              }
              ;(i >>>= 22),
                (t.words[n - 10] = i),
                0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
            }),
            (g.prototype.imulK = function(t) {
              ;(t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2)
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r]
                ;(e += 977 * n),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * n + ((e / 67108864) | 0))
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              )
            }),
            i(v, m),
            i(_, m),
            i(w, m),
            (w.prototype.imulK = function(t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n
                ;(n >>>= 26), (t.words[r] = i), (e = n)
              }
              return 0 !== e && (t.words[t.length++] = e), t
            }),
            (o._prime = function(t) {
              if (y[t]) return y[t]
              var e
              if ('k256' === t) e = new g()
              else if ('p224' === t) e = new v()
              else if ('p192' === t) e = new _()
              else {
                if ('p25519' !== t) throw new Error('Unknown prime ' + t)
                e = new w()
              }
              return (y[t] = e), e
            }),
            (S.prototype._verify1 = function(t) {
              n(0 === t.negative, 'red works only with positives'),
                n(t.red, 'red works only with red numbers')
            }),
            (S.prototype._verify2 = function(t, e) {
              n(
                0 == (t.negative | e.negative),
                'red works only with positives'
              ),
                n(t.red && t.red === e.red, 'red works only with red numbers')
            }),
            (S.prototype.imod = function(t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this)
            }),
            (S.prototype.neg = function(t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }),
            (S.prototype.add = function(t, e) {
              this._verify2(t, e)
              var r = t.add(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
            }),
            (S.prototype.iadd = function(t, e) {
              this._verify2(t, e)
              var r = t.iadd(e)
              return r.cmp(this.m) >= 0 && r.isub(this.m), r
            }),
            (S.prototype.sub = function(t, e) {
              this._verify2(t, e)
              var r = t.sub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
            }),
            (S.prototype.isub = function(t, e) {
              this._verify2(t, e)
              var r = t.isub(e)
              return r.cmpn(0) < 0 && r.iadd(this.m), r
            }),
            (S.prototype.shl = function(t, e) {
              return this._verify1(t), this.imod(t.ushln(e))
            }),
            (S.prototype.imul = function(t, e) {
              return this._verify2(t, e), this.imod(t.imul(e))
            }),
            (S.prototype.mul = function(t, e) {
              return this._verify2(t, e), this.imod(t.mul(e))
            }),
            (S.prototype.isqr = function(t) {
              return this.imul(t, t.clone())
            }),
            (S.prototype.sqr = function(t) {
              return this.mul(t, t)
            }),
            (S.prototype.sqrt = function(t) {
              if (t.isZero()) return t.clone()
              var e = this.m.andln(3)
              if ((n(e % 2 == 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2)
                return this.pow(t, r)
              }
              for (
                var i = this.m.subn(1), a = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                a++, i.iushrn(1)
              n(!i.isZero())
              var f = new o(1).toRed(this),
                s = f.redNeg(),
                c = this.m.subn(1).iushrn(1),
                h = this.m.bitLength()
              for (
                h = new o(2 * h * h).toRed(this);
                0 !== this.pow(h, c).cmp(s);

              )
                h.redIAdd(s)
              for (
                var u = this.pow(h, i),
                  d = this.pow(t, i.addn(1).iushrn(1)),
                  l = this.pow(t, i),
                  p = a;
                0 !== l.cmp(f);

              ) {
                for (var b = l, y = 0; 0 !== b.cmp(f); y++) b = b.redSqr()
                n(y < p)
                var m = this.pow(u, new o(1).iushln(p - y - 1))
                ;(d = d.redMul(m)), (u = m.redSqr()), (l = l.redMul(u)), (p = y)
              }
              return d
            }),
            (S.prototype.invm = function(t) {
              var e = t._invmp(this.m)
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e)
            }),
            (S.prototype.pow = function(t, e) {
              if (e.isZero()) return new o(1).toRed(this)
              if (0 === e.cmpn(1)) return t.clone()
              var r = new Array(16)
              ;(r[0] = new o(1).toRed(this)), (r[1] = t)
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
              var i = r[0],
                a = 0,
                f = 0,
                s = e.bitLength() % 26
              for (0 === s && (s = 26), n = e.length - 1; n >= 0; n--) {
                for (var c = e.words[n], h = s - 1; h >= 0; h--) {
                  var u = (c >> h) & 1
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== u || 0 !== a
                      ? ((a <<= 1),
                        (a |= u),
                        (4 == ++f || (0 === n && 0 === h)) &&
                          ((i = this.mul(i, r[a])), (f = 0), (a = 0)))
                      : (f = 0)
                }
                s = 26
              }
              return i
            }),
            (S.prototype.convertTo = function(t) {
              var e = t.umod(this.m)
              return e === t ? e.clone() : e
            }),
            (S.prototype.convertFrom = function(t) {
              var e = t.clone()
              return (e.red = null), e
            }),
            (o.mont = function(t) {
              return new M(t)
            }),
            i(M, S),
            (M.prototype.convertTo = function(t) {
              return this.imod(t.ushln(this.shift))
            }),
            (M.prototype.convertFrom = function(t) {
              var e = this.imod(t.mul(this.rinv))
              return (e.red = null), e
            }),
            (M.prototype.imul = function(t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              )
            }),
            (M.prototype.mul = function(t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                a = i
              return (
                i.cmp(this.m) >= 0
                  ? (a = i.isub(this.m))
                  : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
              )
            }),
            (M.prototype.invm = function(t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })(t, this)
      }.call(this, r(118)(t)))
    },
    function(t, e, r) {
      'use strict'
      ;(function(t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(80),
          i = r(81),
          o = r(42)
        function a() {
          return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function f(t, e) {
          if (a() < e) throw new RangeError('Invalid typed array length')
          return (
            s.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = s.prototype)
              : (null === t && (t = new s(e)), (t.length = e)),
            t
          )
        }
        function s(t, e, r) {
          if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
            return new s(t, e, r)
          if ('number' == typeof t) {
            if ('string' == typeof e)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              )
            return u(this, t)
          }
          return c(this, t, e, r)
        }
        function c(t, e, r, n) {
          if ('number' == typeof e)
            throw new TypeError('"value" argument must not be a number')
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function(t, e, r, n) {
                if ((e.byteLength, r < 0 || e.byteLength < r))
                  throw new RangeError("'offset' is out of bounds")
                if (e.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds")
                return (
                  (e =
                    void 0 === r && void 0 === n
                      ? new Uint8Array(e)
                      : void 0 === n
                      ? new Uint8Array(e, r)
                      : new Uint8Array(e, r, n)),
                  s.TYPED_ARRAY_SUPPORT
                    ? ((t = e).__proto__ = s.prototype)
                    : (t = d(t, e)),
                  t
                )
              })(t, e, r, n)
            : 'string' == typeof e
            ? (function(t, e, r) {
                if (
                  (('string' == typeof r && '' !== r) || (r = 'utf8'),
                  !s.isEncoding(r))
                )
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  )
                var n = 0 | p(e, r),
                  i = (t = f(t, n)).write(e, r)
                return i !== n && (t = t.slice(0, i)), t
              })(t, e, r)
            : (function(t, e) {
                if (s.isBuffer(e)) {
                  var r = 0 | l(e.length)
                  return 0 === (t = f(t, r)).length
                    ? t
                    : (e.copy(t, 0, 0, r), t)
                }
                if (e) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    'length' in e
                  )
                    return 'number' != typeof e.length || (n = e.length) != n
                      ? f(t, 0)
                      : d(t, e)
                  if ('Buffer' === e.type && o(e.data)) return d(t, e.data)
                }
                var n
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                )
              })(t, e)
        }
        function h(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number')
          if (t < 0)
            throw new RangeError('"size" argument must not be negative')
        }
        function u(t, e) {
          if ((h(e), (t = f(t, e < 0 ? 0 : 0 | l(e))), !s.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < e; ++r) t[r] = 0
          return t
        }
        function d(t, e) {
          var r = e.length < 0 ? 0 : 0 | l(e.length)
          t = f(t, r)
          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n]
          return t
        }
        function l(t) {
          if (t >= a())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                a().toString(16) +
                ' bytes'
            )
          return 0 | t
        }
        function p(t, e) {
          if (s.isBuffer(t)) return t.length
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength
          'string' != typeof t && (t = '' + t)
          var r = t.length
          if (0 === r) return 0
          for (var n = !1; ; )
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return r
              case 'utf8':
              case 'utf-8':
              case void 0:
                return L(t).length
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * r
              case 'hex':
                return r >>> 1
              case 'base64':
                return z(t).length
              default:
                if (n) return L(t).length
                ;(e = ('' + e).toLowerCase()), (n = !0)
            }
        }
        function b(t, e, r) {
          var n = t[e]
          ;(t[e] = t[r]), (t[r] = n)
        }
        function y(t, e, r, n, i) {
          if (0 === t.length) return -1
          if (
            ('string' == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (i) return -1
            r = t.length - 1
          } else if (r < 0) {
            if (!i) return -1
            r = 0
          }
          if (('string' == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
            return 0 === e.length ? -1 : m(t, e, r, n, i)
          if ('number' == typeof e)
            return (
              (e &= 255),
              s.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : m(t, [e], r, n, i)
            )
          throw new TypeError('val must be string, number or Buffer')
        }
        function m(t, e, r, n, i) {
          var o,
            a = 1,
            f = t.length,
            s = e.length
          if (
            void 0 !== n &&
            ('ucs2' === (n = String(n).toLowerCase()) ||
              'ucs-2' === n ||
              'utf16le' === n ||
              'utf-16le' === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1
            ;(a = 2), (f /= 2), (s /= 2), (r /= 2)
          }
          function c(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a)
          }
          if (i) {
            var h = -1
            for (o = r; o < f; o++)
              if (c(t, o) === c(e, -1 === h ? 0 : o - h)) {
                if ((-1 === h && (h = o), o - h + 1 === s)) return h * a
              } else -1 !== h && (o -= o - h), (h = -1)
          } else
            for (r + s > f && (r = f - s), o = r; o >= 0; o--) {
              for (var u = !0, d = 0; d < s; d++)
                if (c(t, o + d) !== c(e, d)) {
                  u = !1
                  break
                }
              if (u) return o
            }
          return -1
        }
        function g(t, e, r, n) {
          r = Number(r) || 0
          var i = t.length - r
          n ? (n = Number(n)) > i && (n = i) : (n = i)
          var o = e.length
          if (o % 2 != 0) throw new TypeError('Invalid hex string')
          n > o / 2 && (n = o / 2)
          for (var a = 0; a < n; ++a) {
            var f = parseInt(e.substr(2 * a, 2), 16)
            if (isNaN(f)) return a
            t[r + a] = f
          }
          return a
        }
        function v(t, e, r, n) {
          return q(L(e, t.length - r), t, r, n)
        }
        function _(t, e, r, n) {
          return q(
            (function(t) {
              for (var e = [], r = 0; r < t.length; ++r)
                e.push(255 & t.charCodeAt(r))
              return e
            })(e),
            t,
            r,
            n
          )
        }
        function w(t, e, r, n) {
          return _(t, e, r, n)
        }
        function S(t, e, r, n) {
          return q(z(e), t, r, n)
        }
        function M(t, e, r, n) {
          return q(
            (function(t, e) {
              for (
                var r, n, i, o = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (n = (r = t.charCodeAt(a)) >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n)
              return o
            })(e, t.length - r),
            t,
            r,
            n
          )
        }
        function k(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r))
        }
        function E(t, e, r) {
          r = Math.min(t.length, r)
          for (var n = [], i = e; i < r; ) {
            var o,
              a,
              f,
              s,
              c = t[i],
              h = null,
              u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1
            if (i + u <= r)
              switch (u) {
                case 1:
                  c < 128 && (h = c)
                  break
                case 2:
                  128 == (192 & (o = t[i + 1])) &&
                    (s = ((31 & c) << 6) | (63 & o)) > 127 &&
                    (h = s)
                  break
                case 3:
                  ;(o = t[i + 1]),
                    (a = t[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      (s = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) >
                        2047 &&
                      (s < 55296 || s > 57343) &&
                      (h = s)
                  break
                case 4:
                  ;(o = t[i + 1]),
                    (a = t[i + 2]),
                    (f = t[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      128 == (192 & f) &&
                      (s =
                        ((15 & c) << 18) |
                        ((63 & o) << 12) |
                        ((63 & a) << 6) |
                        (63 & f)) > 65535 &&
                      s < 1114112 &&
                      (h = s)
              }
            null === h
              ? ((h = 65533), (u = 1))
              : h > 65535 &&
                ((h -= 65536),
                n.push(((h >>> 10) & 1023) | 55296),
                (h = 56320 | (1023 & h))),
              n.push(h),
              (i += u)
          }
          return (function(t) {
            var e = t.length
            if (e <= A) return String.fromCharCode.apply(String, t)
            for (var r = '', n = 0; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += A)))
            return r
          })(n)
        }
        ;(e.Buffer = s),
          (e.SlowBuffer = function(t) {
            return +t != t && (t = 0), s.alloc(+t)
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (s.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var t = new Uint8Array(1)
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42
                        },
                      }),
                      42 === t.foo() &&
                        'function' == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    )
                  } catch (t) {
                    return !1
                  }
                })()),
          (e.kMaxLength = a()),
          (s.poolSize = 8192),
          (s._augment = function(t) {
            return (t.__proto__ = s.prototype), t
          }),
          (s.from = function(t, e, r) {
            return c(null, t, e, r)
          }),
          s.TYPED_ARRAY_SUPPORT &&
            ((s.prototype.__proto__ = Uint8Array.prototype),
            (s.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              s[Symbol.species] === s &&
              Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (s.alloc = function(t, e, r) {
            return (function(t, e, r, n) {
              return (
                h(e),
                e <= 0
                  ? f(null, e)
                  : void 0 !== r
                  ? 'string' == typeof n
                    ? f(null, e).fill(r, n)
                    : f(null, e).fill(r)
                  : f(null, e)
              )
            })(0, t, e, r)
          }),
          (s.allocUnsafe = function(t) {
            return u(null, t)
          }),
          (s.allocUnsafeSlow = function(t) {
            return u(null, t)
          }),
          (s.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
          }),
          (s.compare = function(t, e) {
            if (!s.isBuffer(t) || !s.isBuffer(e))
              throw new TypeError('Arguments must be Buffers')
            if (t === e) return 0
            for (
              var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                ;(r = t[i]), (n = e[i])
                break
              }
            return r < n ? -1 : n < r ? 1 : 0
          }),
          (s.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
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
                return !0
              default:
                return !1
            }
          }),
          (s.concat = function(t, e) {
            if (!o(t))
              throw new TypeError('"list" argument must be an Array of Buffers')
            if (0 === t.length) return s.alloc(0)
            var r
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
            var n = s.allocUnsafe(e),
              i = 0
            for (r = 0; r < t.length; ++r) {
              var a = t[r]
              if (!s.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              a.copy(n, i), (i += a.length)
            }
            return n
          }),
          (s.byteLength = p),
          (s.prototype._isBuffer = !0),
          (s.prototype.swap16 = function() {
            var t = this.length
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits')
            for (var e = 0; e < t; e += 2) b(this, e, e + 1)
            return this
          }),
          (s.prototype.swap32 = function() {
            var t = this.length
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits')
            for (var e = 0; e < t; e += 4)
              b(this, e, e + 3), b(this, e + 1, e + 2)
            return this
          }),
          (s.prototype.swap64 = function() {
            var t = this.length
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits')
            for (var e = 0; e < t; e += 8)
              b(this, e, e + 7),
                b(this, e + 1, e + 6),
                b(this, e + 2, e + 5),
                b(this, e + 3, e + 4)
            return this
          }),
          (s.prototype.toString = function() {
            var t = 0 | this.length
            return 0 === t
              ? ''
              : 0 === arguments.length
              ? E(this, 0, t)
              : function(t, e, r) {
                  var n = !1
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return ''
                  if (
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0)
                  )
                    return ''
                  if ((r >>>= 0) <= (e >>>= 0)) return ''
                  for (t || (t = 'utf8'); ; )
                    switch (t) {
                      case 'hex':
                        return B(this, e, r)
                      case 'utf8':
                      case 'utf-8':
                        return E(this, e, r)
                      case 'ascii':
                        return x(this, e, r)
                      case 'latin1':
                      case 'binary':
                        return I(this, e, r)
                      case 'base64':
                        return k(this, e, r)
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return R(this, e, r)
                      default:
                        if (n) throw new TypeError('Unknown encoding: ' + t)
                        ;(t = (t + '').toLowerCase()), (n = !0)
                    }
                }.apply(this, arguments)
          }),
          (s.prototype.equals = function(t) {
            if (!s.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
            return this === t || 0 === s.compare(this, t)
          }),
          (s.prototype.inspect = function() {
            var t = '',
              r = e.INSPECT_MAX_BYTES
            return (
              this.length > 0 &&
                ((t = this.toString('hex', 0, r)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > r && (t += ' ... ')),
              '<Buffer ' + t + '>'
            )
          }),
          (s.prototype.compare = function(t, e, r, n, i) {
            if (!s.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              e < 0 || r > t.length || n < 0 || i > this.length)
            )
              throw new RangeError('out of range index')
            if (n >= i && e >= r) return 0
            if (n >= i) return -1
            if (e >= r) return 1
            if (this === t) return 0
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (e >>>= 0),
                f = Math.min(o, a),
                c = this.slice(n, i),
                h = t.slice(e, r),
                u = 0;
              u < f;
              ++u
            )
              if (c[u] !== h[u]) {
                ;(o = c[u]), (a = h[u])
                break
              }
            return o < a ? -1 : a < o ? 1 : 0
          }),
          (s.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
          }),
          (s.prototype.indexOf = function(t, e, r) {
            return y(this, t, e, r, !0)
          }),
          (s.prototype.lastIndexOf = function(t, e, r) {
            return y(this, t, e, r, !1)
          }),
          (s.prototype.write = function(t, e, r, n) {
            if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
            else if (void 0 === r && 'string' == typeof e)
              (n = e), (r = this.length), (e = 0)
            else {
              if (!isFinite(e))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                )
              ;(e |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = 'utf8'))
                  : ((n = r), (r = void 0))
            }
            var i = this.length - e
            if (
              ((void 0 === r || r > i) && (r = i),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds')
            n || (n = 'utf8')
            for (var o = !1; ; )
              switch (n) {
                case 'hex':
                  return g(this, t, e, r)
                case 'utf8':
                case 'utf-8':
                  return v(this, t, e, r)
                case 'ascii':
                  return _(this, t, e, r)
                case 'latin1':
                case 'binary':
                  return w(this, t, e, r)
                case 'base64':
                  return S(this, t, e, r)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return M(this, t, e, r)
                default:
                  if (o) throw new TypeError('Unknown encoding: ' + n)
                  ;(n = ('' + n).toLowerCase()), (o = !0)
              }
          }),
          (s.prototype.toJSON = function() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            }
          })
        var A = 4096
        function x(t, e, r) {
          var n = ''
          r = Math.min(t.length, r)
          for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
          return n
        }
        function I(t, e, r) {
          var n = ''
          r = Math.min(t.length, r)
          for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
          return n
        }
        function B(t, e, r) {
          var n,
            i = t.length
          ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i)
          for (var o = '', a = e; a < r; ++a)
            o += (n = t[a]) < 16 ? '0' + n.toString(16) : n.toString(16)
          return o
        }
        function R(t, e, r) {
          for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1])
          return i
        }
        function C(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint')
          if (t + e > r)
            throw new RangeError('Trying to access beyond buffer length')
        }
        function T(t, e, r, n, i, o) {
          if (!s.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance')
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds')
          if (r + n > t.length) throw new RangeError('Index out of range')
        }
        function P(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1)
          for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
            t[r + i] =
              (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i))
        }
        function j(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1)
          for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
            t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255
        }
        function O(t, e, r, n, i, o) {
          if (r + n > t.length) throw new RangeError('Index out of range')
          if (r < 0) throw new RangeError('Index out of range')
        }
        function N(t, e, r, n, o) {
          return o || O(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
        }
        function D(t, e, r, n, o) {
          return o || O(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
        }
        ;(s.prototype.slice = function(t, e) {
          var r,
            n = this.length
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            s.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = s.prototype
          else {
            var i = e - t
            r = new s(i, void 0)
            for (var o = 0; o < i; ++o) r[o] = this[o + t]
          }
          return r
        }),
          (s.prototype.readUIntLE = function(t, e, r) {
            ;(t |= 0), (e |= 0), r || C(t, e, this.length)
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i
            return n
          }),
          (s.prototype.readUIntBE = function(t, e, r) {
            ;(t |= 0), (e |= 0), r || C(t, e, this.length)
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
              n += this[t + --e] * i
            return n
          }),
          (s.prototype.readUInt8 = function(t, e) {
            return e || C(t, 1, this.length), this[t]
          }),
          (s.prototype.readUInt16LE = function(t, e) {
            return e || C(t, 2, this.length), this[t] | (this[t + 1] << 8)
          }),
          (s.prototype.readUInt16BE = function(t, e) {
            return e || C(t, 2, this.length), (this[t] << 8) | this[t + 1]
          }),
          (s.prototype.readUInt32LE = function(t, e) {
            return (
              e || C(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            )
          }),
          (s.prototype.readUInt32BE = function(t, e) {
            return (
              e || C(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            )
          }),
          (s.prototype.readIntLE = function(t, e, r) {
            ;(t |= 0), (e |= 0), r || C(t, e, this.length)
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
          }),
          (s.prototype.readIntBE = function(t, e, r) {
            ;(t |= 0), (e |= 0), r || C(t, e, this.length)
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
              o += this[t + --n] * i
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
          }),
          (s.prototype.readInt8 = function(t, e) {
            return (
              e || C(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            )
          }),
          (s.prototype.readInt16LE = function(t, e) {
            e || C(t, 2, this.length)
            var r = this[t] | (this[t + 1] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (s.prototype.readInt16BE = function(t, e) {
            e || C(t, 2, this.length)
            var r = this[t + 1] | (this[t] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (s.prototype.readInt32LE = function(t, e) {
            return (
              e || C(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            )
          }),
          (s.prototype.readInt32BE = function(t, e) {
            return (
              e || C(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            )
          }),
          (s.prototype.readFloatLE = function(t, e) {
            return e || C(t, 4, this.length), i.read(this, t, !0, 23, 4)
          }),
          (s.prototype.readFloatBE = function(t, e) {
            return e || C(t, 4, this.length), i.read(this, t, !1, 23, 4)
          }),
          (s.prototype.readDoubleLE = function(t, e) {
            return e || C(t, 8, this.length), i.read(this, t, !0, 52, 8)
          }),
          (s.prototype.readDoubleBE = function(t, e) {
            return e || C(t, 8, this.length), i.read(this, t, !1, 52, 8)
          }),
          (s.prototype.writeUIntLE = function(t, e, r, n) {
            ;(t = +t),
              (e |= 0),
              (r |= 0),
              n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            var i = 1,
              o = 0
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255
            return e + r
          }),
          (s.prototype.writeUIntBE = function(t, e, r, n) {
            ;(t = +t),
              (e |= 0),
              (r |= 0),
              n || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            var i = r - 1,
              o = 1
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255
            return e + r
          }),
          (s.prototype.writeUInt8 = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 1, 255, 0),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            )
          }),
          (s.prototype.writeUInt16LE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : P(this, t, e, !0),
              e + 2
            )
          }),
          (s.prototype.writeUInt16BE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : P(this, t, e, !1),
              e + 2
            )
          }),
          (s.prototype.writeUInt32LE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : j(this, t, e, !0),
              e + 4
            )
          }),
          (s.prototype.writeUInt32BE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : j(this, t, e, !1),
              e + 4
            )
          }),
          (s.prototype.writeIntLE = function(t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1)
              T(this, t, e, r, i - 1, -i)
            }
            var o = 0,
              a = 1,
              f = 0
            for (this[e] = 255 & t; ++o < r && (a *= 256); )
              t < 0 && 0 === f && 0 !== this[e + o - 1] && (f = 1),
                (this[e + o] = (((t / a) >> 0) - f) & 255)
            return e + r
          }),
          (s.prototype.writeIntBE = function(t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1)
              T(this, t, e, r, i - 1, -i)
            }
            var o = r - 1,
              a = 1,
              f = 0
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
              t < 0 && 0 === f && 0 !== this[e + o + 1] && (f = 1),
                (this[e + o] = (((t / a) >> 0) - f) & 255)
            return e + r
          }),
          (s.prototype.writeInt8 = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 1, 127, -128),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            )
          }),
          (s.prototype.writeInt16LE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : P(this, t, e, !0),
              e + 2
            )
          }),
          (s.prototype.writeInt16BE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : P(this, t, e, !1),
              e + 2
            )
          }),
          (s.prototype.writeInt32LE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 4, 2147483647, -2147483648),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : j(this, t, e, !0),
              e + 4
            )
          }),
          (s.prototype.writeInt32BE = function(t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || T(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : j(this, t, e, !1),
              e + 4
            )
          }),
          (s.prototype.writeFloatLE = function(t, e, r) {
            return N(this, t, e, !0, r)
          }),
          (s.prototype.writeFloatBE = function(t, e, r) {
            return N(this, t, e, !1, r)
          }),
          (s.prototype.writeDoubleLE = function(t, e, r) {
            return D(this, t, e, !0, r)
          }),
          (s.prototype.writeDoubleBE = function(t, e, r) {
            return D(this, t, e, !1, r)
          }),
          (s.prototype.copy = function(t, e, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0
            if (0 === t.length || 0 === this.length) return 0
            if (e < 0) throw new RangeError('targetStart out of bounds')
            if (r < 0 || r >= this.length)
              throw new RangeError('sourceStart out of bounds')
            if (n < 0) throw new RangeError('sourceEnd out of bounds')
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r)
            var i,
              o = n - r
            if (this === t && r < e && e < n)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r]
            else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + r]
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e)
            return o
          }),
          (s.prototype.fill = function(t, e, r, n) {
            if ('string' == typeof t) {
              if (
                ('string' == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : 'string' == typeof r && ((n = r), (r = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0)
                i < 256 && (t = i)
              }
              if (void 0 !== n && 'string' != typeof n)
                throw new TypeError('encoding must be a string')
              if ('string' == typeof n && !s.isEncoding(n))
                throw new TypeError('Unknown encoding: ' + n)
            } else 'number' == typeof t && (t &= 255)
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError('Out of range index')
            if (r <= e) return this
            var o
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              'number' == typeof t)
            )
              for (o = e; o < r; ++o) this[o] = t
            else {
              var a = s.isBuffer(t) ? t : L(new s(t, n).toString()),
                f = a.length
              for (o = 0; o < r - e; ++o) this[o + e] = a[o % f]
            }
            return this
          })
        var U = /[^+\/0-9A-Za-z-_]/g
        function L(t, e) {
          var r
          e = e || 1 / 0
          for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
            if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  ;(e -= 3) > -1 && o.push(239, 191, 189)
                  continue
                }
                if (a + 1 === n) {
                  ;(e -= 3) > -1 && o.push(239, 191, 189)
                  continue
                }
                i = r
                continue
              }
              if (r < 56320) {
                ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
                continue
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320))
            } else i && (e -= 3) > -1 && o.push(239, 191, 189)
            if (((i = null), r < 128)) {
              if ((e -= 1) < 0) break
              o.push(r)
            } else if (r < 2048) {
              if ((e -= 2) < 0) break
              o.push((r >> 6) | 192, (63 & r) | 128)
            } else if (r < 65536) {
              if ((e -= 3) < 0) break
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
            } else {
              if (!(r < 1114112)) throw new Error('Invalid code point')
              if ((e -= 4) < 0) break
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              )
            }
          }
          return o
        }
        function z(t) {
          return n.toByteArray(
            (function(t) {
              if (
                (t = (function(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '')
                })(t).replace(U, '')).length < 2
              )
                return ''
              for (; t.length % 4 != 0; ) t += '='
              return t
            })(t)
          )
        }
        function q(t, e, r, n) {
          for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
            e[i + r] = t[i]
          return i
        }
      }.call(this, r(8)))
    },
    function(t, e, r) {
      'use strict'
      var n = e
      ;(n.version = r(125).version),
        (n.utils = r(126)),
        (n.rand = r(64)),
        (n.curve = r(24)),
        (n.curves = r(131)),
        (n.ec = r(139)),
        (n.eddsa = r(143))
    },
    function(t, e, r) {
      r(78)
      const n = (t, e) => parseInt(t.slice(2 * e + 2, 2 * e + 4), 16),
        i = t => (t.length - 2) / 2,
        o = (t, e) => (e.length === 2 * t + 2 ? e : o(t, '0x0' + e.slice(2))),
        a = (t, e) => (e.length === 2 * t + 2 ? e : a(t, e + '0')),
        f = t => {
          let e = []
          for (let r = 2, n = t.length; r < n; r += 2)
            e.push(parseInt(t.slice(r, r + 2), 16))
          return e
        },
        s = t => {
          let e = '0x'
          for (let r = 0, n = t.length; r < n; ++r) {
            let n = t[r]
            e += (n < 16 ? '0' : '') + n.toString(16)
          }
          return e
        }
      t.exports = {
        random: t => {
          let e
          e =
            'undefined' != typeof window &&
            window.crypto &&
            window.crypto.getRandomValues
              ? window.crypto.getRandomValues(new Uint8Array(t))
              : r(79).randomBytes(t)
          let n = '0x'
          for (let r = 0; r < t; ++r) n += ('00' + e[r].toString(16)).slice(-2)
          return n
        },
        length: i,
        concat: (t, e) => t.concat(e.slice(2)),
        flatten: t => '0x' + t.reduce((t, e) => t + e.slice(2), ''),
        slice: (t, e, r) => '0x' + r.slice(2 * t + 2, 2 * e + 2),
        reverse: t => {
          let e = '0x'
          for (let r = 0, n = i(t); r < n; ++r)
            e += t.slice(2 * (n - r), 2 * (n - r + 1))
          return e
        },
        pad: o,
        padRight: a,
        fromAscii: t => {
          let e = '0x'
          for (let r = 0; r < t.length; ++r)
            e += ('00' + t.charCodeAt(r).toString(16)).slice(-2)
          return e
        },
        toAscii: t => {
          let e = ''
          for (let r = 2; r < t.length; r += 2)
            e += String.fromCharCode(parseInt(t.slice(r, r + 2), 16))
          return e
        },
        fromString: t => {
          const e = t => {
            const e = t.toString(16)
            return e.length < 2 ? '0' + e : e
          }
          let r = '0x'
          for (let n = 0; n != t.length; n++) {
            let i = t.charCodeAt(n)
            if (i < 128) r += e(i)
            else {
              if (i < 2048) r += e((i >> 6) | 192)
              else {
                if (i > 55295 && i < 56320) {
                  if (++n == t.length) return null
                  let o = t.charCodeAt(n)
                  if (o < 56320 || o > 57343) return null
                  ;(r += e(
                    ((i = 65536 + ((1023 & i) << 10) + (1023 & o)) >> 18) | 240
                  )),
                    (r += e(((i >> 12) & 63) | 128))
                } else r += e((i >> 12) | 224)
                r += e(((i >> 6) & 63) | 128)
              }
              r += e((63 & i) | 128)
            }
          }
          return r
        },
        toString: t => {
          let e = '',
            r = 0,
            o = i(t)
          for (; r < o; ) {
            let i = n(t, r++)
            if (i > 127) {
              if (i > 191 && i < 224) {
                if (r >= o) return null
                i = ((31 & i) << 6) | (63 & n(t, r))
              } else if (i > 223 && i < 240) {
                if (r + 1 >= o) return null
                i = ((15 & i) << 12) | ((63 & n(t, r)) << 6) | (63 & n(t, ++r))
              } else {
                if (!(i > 239 && i < 248)) return null
                if (r + 2 >= o) return null
                i =
                  ((7 & i) << 18) |
                  ((63 & n(t, r)) << 12) |
                  ((63 & n(t, ++r)) << 6) |
                  (63 & n(t, ++r))
              }
              ++r
            }
            if (i <= 65535) e += String.fromCharCode(i)
            else {
              if (!(i <= 1114111)) return null
              ;(i -= 65536),
                (e += String.fromCharCode((i >> 10) | 55296)),
                (e += String.fromCharCode((1023 & i) | 56320))
            }
          }
          return e
        },
        fromNumber: t => {
          let e = t.toString(16)
          return e.length % 2 == 0 ? '0x' + e : '0x0' + e
        },
        toNumber: t => parseInt(t.slice(2), 16),
        fromNat: t =>
          '0x0' === t ? '0x' : t.length % 2 == 0 ? t : '0x0' + t.slice(2),
        toNat: t => ('0' === t[2] ? '0x' + t.slice(3) : t),
        fromArray: s,
        toArray: f,
        fromUint8Array: t => s([].slice.call(t, 0)),
        toUint8Array: t => new Uint8Array(f(t)),
      }
    },
    function(t, e) {
      function r(t, e) {
        if (!t) throw new Error(e || 'Assertion failed')
      }
      ;(t.exports = r),
        (r.equal = function(t, e, r) {
          if (t != e)
            throw new Error(r || 'Assertion failed: ' + t + ' != ' + e)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(6),
        i = r(0)
      function o(t, e) {
        return (
          55296 == (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 == (64512 & t.charCodeAt(e + 1))
        )
      }
      function a(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        )
      }
      function f(t) {
        return 1 === t.length ? '0' + t : t
      }
      function s(t) {
        return 7 === t.length
          ? '0' + t
          : 6 === t.length
          ? '00' + t
          : 5 === t.length
          ? '000' + t
          : 4 === t.length
          ? '0000' + t
          : 3 === t.length
          ? '00000' + t
          : 2 === t.length
          ? '000000' + t
          : 1 === t.length
          ? '0000000' + t
          : t
      }
      ;(e.inherits = i),
        (e.toArray = function(t, e) {
          if (Array.isArray(t)) return t.slice()
          if (!t) return []
          var r = []
          if ('string' == typeof t)
            if (e) {
              if ('hex' === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                    (t = '0' + t),
                    i = 0;
                  i < t.length;
                  i += 2
                )
                  r.push(parseInt(t[i] + t[i + 1], 16))
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i)
                a < 128
                  ? (r[n++] = a)
                  : a < 2048
                  ? ((r[n++] = (a >> 6) | 192), (r[n++] = (63 & a) | 128))
                  : o(t, i)
                  ? ((a =
                      65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i))),
                    (r[n++] = (a >> 18) | 240),
                    (r[n++] = ((a >> 12) & 63) | 128),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128))
                  : ((r[n++] = (a >> 12) | 224),
                    (r[n++] = ((a >> 6) & 63) | 128),
                    (r[n++] = (63 & a) | 128))
              }
          else for (i = 0; i < t.length; i++) r[i] = 0 | t[i]
          return r
        }),
        (e.toHex = function(t) {
          for (var e = '', r = 0; r < t.length; r++) e += f(t[r].toString(16))
          return e
        }),
        (e.htonl = a),
        (e.toHex32 = function(t, e) {
          for (var r = '', n = 0; n < t.length; n++) {
            var i = t[n]
            'little' === e && (i = a(i)), (r += s(i.toString(16)))
          }
          return r
        }),
        (e.zero2 = f),
        (e.zero8 = s),
        (e.join32 = function(t, e, r, i) {
          var o = r - e
          n(o % 4 == 0)
          for (
            var a = new Array(o / 4), f = 0, s = e;
            f < a.length;
            f++, s += 4
          ) {
            var c
            ;(c =
              'big' === i
                ? (t[s] << 24) | (t[s + 1] << 16) | (t[s + 2] << 8) | t[s + 3]
                : (t[s + 3] << 24) | (t[s + 2] << 16) | (t[s + 1] << 8) | t[s]),
              (a[f] = c >>> 0)
          }
          return a
        }),
        (e.split32 = function(t, e) {
          for (
            var r = new Array(4 * t.length), n = 0, i = 0;
            n < t.length;
            n++, i += 4
          ) {
            var o = t[n]
            'big' === e
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o))
          }
          return r
        }),
        (e.rotr32 = function(t, e) {
          return (t >>> e) | (t << (32 - e))
        }),
        (e.rotl32 = function(t, e) {
          return (t << e) | (t >>> (32 - e))
        }),
        (e.sum32 = function(t, e) {
          return (t + e) >>> 0
        }),
        (e.sum32_3 = function(t, e, r) {
          return (t + e + r) >>> 0
        }),
        (e.sum32_4 = function(t, e, r, n) {
          return (t + e + r + n) >>> 0
        }),
        (e.sum32_5 = function(t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0
        }),
        (e.sum64 = function(t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0,
            a = (o < n ? 1 : 0) + r + i
          ;(t[e] = a >>> 0), (t[e + 1] = o)
        }),
        (e.sum64_hi = function(t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0
        }),
        (e.sum64_lo = function(t, e, r, n) {
          return (e + n) >>> 0
        }),
        (e.sum64_4_hi = function(t, e, r, n, i, o, a, f) {
          var s = 0,
            c = e
          return (
            (s += (c = (c + n) >>> 0) < e ? 1 : 0),
            (s += (c = (c + o) >>> 0) < o ? 1 : 0),
            (t + r + i + a + (s += (c = (c + f) >>> 0) < f ? 1 : 0)) >>> 0
          )
        }),
        (e.sum64_4_lo = function(t, e, r, n, i, o, a, f) {
          return (e + n + o + f) >>> 0
        }),
        (e.sum64_5_hi = function(t, e, r, n, i, o, a, f, s, c) {
          var h = 0,
            u = e
          return (
            (h += (u = (u + n) >>> 0) < e ? 1 : 0),
            (h += (u = (u + o) >>> 0) < o ? 1 : 0),
            (h += (u = (u + f) >>> 0) < f ? 1 : 0),
            (t + r + i + a + s + (h += (u = (u + c) >>> 0) < c ? 1 : 0)) >>> 0
          )
        }),
        (e.sum64_5_lo = function(t, e, r, n, i, o, a, f, s, c) {
          return (e + n + o + f + c) >>> 0
        }),
        (e.rotr64_hi = function(t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0
        }),
        (e.rotr64_lo = function(t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0
        }),
        (e.shr64_hi = function(t, e, r) {
          return t >>> r
        }),
        (e.shr64_lo = function(t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0
        })
    },
    function(t, e) {
      var r
      r = (function() {
        return this
      })()
      try {
        r = r || new Function('return this')()
      } catch (t) {
        'object' == typeof window && (r = window)
      }
      t.exports = r
    },
    function(t, e) {
      var r,
        n,
        i = (t.exports = {})
      function o() {
        throw new Error('setTimeout has not been defined')
      }
      function a() {
        throw new Error('clearTimeout has not been defined')
      }
      function f(t) {
        if (r === setTimeout) return setTimeout(t, 0)
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(t, 0)
        try {
          return r(t, 0)
        } catch (e) {
          try {
            return r.call(null, t, 0)
          } catch (e) {
            return r.call(this, t, 0)
          }
        }
      }
      !(function() {
        try {
          r = 'function' == typeof setTimeout ? setTimeout : o
        } catch (t) {
          r = o
        }
        try {
          n = 'function' == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
          n = a
        }
      })()
      var s,
        c = [],
        h = !1,
        u = -1
      function d() {
        h &&
          s &&
          ((h = !1), s.length ? (c = s.concat(c)) : (u = -1), c.length && l())
      }
      function l() {
        if (!h) {
          var t = f(d)
          h = !0
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++u < e; ) s && s[u].run()
            ;(u = -1), (e = c.length)
          }
          ;(s = null),
            (h = !1),
            (function(t) {
              if (n === clearTimeout) return clearTimeout(t)
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t)
              try {
                n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            })(t)
        }
      }
      function p(t, e) {
        ;(this.fun = t), (this.array = e)
      }
      function b() {}
      ;(i.nextTick = function(t) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
        c.push(new p(t, e)), 1 !== c.length || h || f(l)
      }),
        (p.prototype.run = function() {
          this.fun.apply(null, this.array)
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
        (i.listeners = function(t) {
          return []
        }),
        (i.binding = function(t) {
          throw new Error('process.binding is not supported')
        }),
        (i.cwd = function() {
          return '/'
        }),
        (i.chdir = function(t) {
          throw new Error('process.chdir is not supported')
        }),
        (i.umask = function() {
          return 0
        })
    },
    function(t, e, r) {
      var n = r(1).Buffer,
        i = r(28).Transform,
        o = r(32).StringDecoder
      function a(t) {
        i.call(this),
          (this.hashMode = 'string' == typeof t),
          this.hashMode
            ? (this[t] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null)
      }
      r(0)(a, i),
        (a.prototype.update = function(t, e, r) {
          'string' == typeof t && (t = n.from(t, e))
          var i = this._update(t)
          return this.hashMode ? this : (r && (i = this._toString(i, r)), i)
        }),
        (a.prototype.setAutoPadding = function() {}),
        (a.prototype.getAuthTag = function() {
          throw new Error('trying to get auth tag in unsupported state')
        }),
        (a.prototype.setAuthTag = function() {
          throw new Error('trying to set auth tag in unsupported state')
        }),
        (a.prototype.setAAD = function() {
          throw new Error('trying to set aad in unsupported state')
        }),
        (a.prototype._transform = function(t, e, r) {
          var n
          try {
            this.hashMode ? this._update(t) : this.push(this._update(t))
          } catch (t) {
            n = t
          } finally {
            r(n)
          }
        }),
        (a.prototype._flush = function(t) {
          var e
          try {
            this.push(this.__final())
          } catch (t) {
            e = t
          }
          t(e)
        }),
        (a.prototype._finalOrDigest = function(t) {
          var e = this.__final() || n.alloc(0)
          return t && (e = this._toString(e, t, !0)), e
        }),
        (a.prototype._toString = function(t, e, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(e)), (this._encoding = e)),
            this._encoding !== e)
          )
            throw new Error("can't switch encodings")
          var n = this._decoder.write(t)
          return r && (n += this._decoder.end()), n
        }),
        (t.exports = a)
    },
    function(t, e) {
      t.exports = {
        encode: t => {
          const e = t =>
              (t => (t.length % 2 == 0 ? t : '0' + t))(t.toString(16)),
            r = (t, r) =>
              t < 56 ? e(r + t) : e(r + e(t).length / 2 + 55) + e(t),
            n = t => {
              if ('string' == typeof t) {
                const e = t.slice(2)
                return (
                  (2 != e.length || e >= '80' ? r(e.length / 2, 128) : '') + e
                )
              }
              {
                const e = t.map(n).join('')
                return r(e.length / 2, 192) + e
              }
            }
          return '0x' + n(t)
        },
        decode: t => {
          let e = 2
          const r = () => {
              if (e >= t.length) throw ''
              const r = t.slice(e, e + 2)
              return r < '80' ? ((e += 2), '0x' + r) : r < 'c0' ? i() : o()
            },
            n = () => {
              const r = parseInt(t.slice(e, (e += 2)), 16) % 64
              return r < 56 ? r : parseInt(t.slice(e, (e += 2 * (r - 55))), 16)
            },
            i = () => {
              const r = n()
              return '0x' + t.slice(e, (e += 2 * r))
            },
            o = () => {
              const t = 2 * n() + e
              let i = []
              for (; e < t; ) i.push(r())
              return i
            }
          try {
            return r()
          } catch (t) {
            return []
          }
        },
      }
    },
    function(t, e, r) {
      'use strict'
      var n = r(21),
        i =
          Object.keys ||
          function(t) {
            var e = []
            for (var r in t) e.push(r)
            return e
          }
      t.exports = u
      var o = r(16)
      o.inherits = r(0)
      var a = r(44),
        f = r(31)
      o.inherits(u, a)
      for (var s = i(f.prototype), c = 0; c < s.length; c++) {
        var h = s[c]
        u.prototype[h] || (u.prototype[h] = f.prototype[h])
      }
      function u(t) {
        if (!(this instanceof u)) return new u(t)
        a.call(this, t),
          f.call(this, t),
          t && !1 === t.readable && (this.readable = !1),
          t && !1 === t.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', d)
      }
      function d() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this)
      }
      function l(t) {
        t.end()
      }
      Object.defineProperty(u.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark
        },
      }),
        Object.defineProperty(u.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            )
          },
          set: function(t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t))
          },
        }),
        (u.prototype._destroy = function(t, e) {
          this.push(null), this.end(), n.nextTick(e, t)
        })
    },
    function(t, e, r) {
      'use strict'
      ;(function(e, n) {
        var i = r(1).Buffer,
          o = e.crypto || e.msCrypto
        o && o.getRandomValues
          ? (t.exports = function(t, r) {
              if (t > 65536) throw new Error('requested too many random bytes')
              var a = new e.Uint8Array(t)
              t > 0 && o.getRandomValues(a)
              var f = i.from(a.buffer)
              return 'function' == typeof r
                ? n.nextTick(function() {
                    r(null, f)
                  })
                : f
            })
          : (t.exports = function() {
              throw new Error(
                'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
              )
            })
      }.call(this, r(8), r(9)))
    },
    function(t, e, r) {
      var n = r(1).Buffer
      function i(t, e) {
        ;(this._block = n.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0)
      }
      ;(i.prototype.update = function(t, e) {
        'string' == typeof t && ((e = e || 'utf8'), (t = n.from(t, e)))
        for (
          var r = this._block,
            i = this._blockSize,
            o = t.length,
            a = this._len,
            f = 0;
          f < o;

        ) {
          for (var s = a % i, c = Math.min(o - f, i - s), h = 0; h < c; h++)
            r[s + h] = t[f + h]
          ;(f += c), (a += c) % i == 0 && this._update(r)
        }
        return (this._len += o), this
      }),
        (i.prototype.digest = function(t) {
          var e = this._len % this._blockSize
          ;(this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0))
          var r = 8 * this._len
          if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4)
          else {
            var n = (4294967295 & r) >>> 0,
              i = (r - n) / 4294967296
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4)
          }
          this._update(this._block)
          var o = this._hash()
          return t ? o.toString(t) : o
        }),
        (i.prototype._update = function() {
          throw new Error('_update must be implemented by subclass')
        }),
        (t.exports = i)
    },
    function(t, e, r) {
      'use strict'
      var n = r(0),
        i = r(27),
        o = r(33),
        a = r(34),
        f = r(10)
      function s(t) {
        f.call(this, 'digest'), (this._hash = t)
      }
      n(s, f),
        (s.prototype._update = function(t) {
          this._hash.update(t)
        }),
        (s.prototype._final = function() {
          return this._hash.digest()
        }),
        (t.exports = function(t) {
          return 'md5' === (t = t.toLowerCase())
            ? new i()
            : 'rmd160' === t || 'ripemd160' === t
            ? new o()
            : new s(a(t))
        })
    },
    function(t, e, r) {
      ;(function(t) {
        function r(t) {
          return Object.prototype.toString.call(t)
        }
        ;(e.isArray = function(t) {
          return Array.isArray ? Array.isArray(t) : '[object Array]' === r(t)
        }),
          (e.isBoolean = function(t) {
            return 'boolean' == typeof t
          }),
          (e.isNull = function(t) {
            return null === t
          }),
          (e.isNullOrUndefined = function(t) {
            return null == t
          }),
          (e.isNumber = function(t) {
            return 'number' == typeof t
          }),
          (e.isString = function(t) {
            return 'string' == typeof t
          }),
          (e.isSymbol = function(t) {
            return 'symbol' == typeof t
          }),
          (e.isUndefined = function(t) {
            return void 0 === t
          }),
          (e.isRegExp = function(t) {
            return '[object RegExp]' === r(t)
          }),
          (e.isObject = function(t) {
            return 'object' == typeof t && null !== t
          }),
          (e.isDate = function(t) {
            return '[object Date]' === r(t)
          }),
          (e.isError = function(t) {
            return '[object Error]' === r(t) || t instanceof Error
          }),
          (e.isFunction = function(t) {
            return 'function' == typeof t
          }),
          (e.isPrimitive = function(t) {
            return (
              null === t ||
              'boolean' == typeof t ||
              'number' == typeof t ||
              'string' == typeof t ||
              'symbol' == typeof t ||
              void 0 === t
            )
          }),
          (e.isBuffer = t.isBuffer)
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        t.exports = function(t, r) {
          for (
            var n = Math.min(t.length, r.length), i = new e(n), o = 0;
            o < n;
            ++o
          )
            i[o] = t[o] ^ r[o]
          return i
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(6)
      function o() {
        ;(this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32)
      }
      ;(e.BlockHash = o),
        (o.prototype.update = function(t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8
            ;(this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian))
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32)
          }
          return this
        }),
        (o.prototype.digest = function(t) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(t)
          )
        }),
        (o.prototype._pad = function() {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength)
          n[0] = 128
          for (var i = 1; i < r; i++) n[i] = 0
          if (((t <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0
            ;(n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t)
          } else
            for (
              n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              n[i++] = 0
          return n
        })
    },
    function(t, e, r) {
      var n = e
      ;(n.bignum = r(2)),
        (n.define = r(147).define),
        (n.base = r(20)),
        (n.constants = r(70)),
        (n.decoders = r(153)),
        (n.encoders = r(155))
    },
    function(t, e, r) {
      var n = e
      ;(n.Reporter = r(150).Reporter),
        (n.DecoderBuffer = r(69).DecoderBuffer),
        (n.EncoderBuffer = r(69).EncoderBuffer),
        (n.Node = r(151))
    },
    function(t, e, r) {
      'use strict'
      ;(function(e) {
        !e.version ||
        0 === e.version.indexOf('v0.') ||
        (0 === e.version.indexOf('v1.') && 0 !== e.version.indexOf('v1.8.'))
          ? (t.exports = {
              nextTick: function(t, r, n, i) {
                if ('function' != typeof t)
                  throw new TypeError('"callback" argument must be a function')
                var o,
                  a,
                  f = arguments.length
                switch (f) {
                  case 0:
                  case 1:
                    return e.nextTick(t)
                  case 2:
                    return e.nextTick(function() {
                      t.call(null, r)
                    })
                  case 3:
                    return e.nextTick(function() {
                      t.call(null, r, n)
                    })
                  case 4:
                    return e.nextTick(function() {
                      t.call(null, r, n, i)
                    })
                  default:
                    for (o = new Array(f - 1), a = 0; a < o.length; )
                      o[a++] = arguments[a]
                    return e.nextTick(function() {
                      t.apply(null, o)
                    })
                }
              },
            })
          : (t.exports = e)
      }.call(this, r(9)))
    },
    function(t, e, r) {
      var n = r(1).Buffer
      function i(t) {
        n.isBuffer(t) || (t = n.from(t))
        for (var e = (t.length / 4) | 0, r = new Array(e), i = 0; i < e; i++)
          r[i] = t.readUInt32BE(4 * i)
        return r
      }
      function o(t) {
        for (; 0 < t.length; t++) t[0] = 0
      }
      function a(t, e, r, n, i) {
        for (
          var o,
            a,
            f,
            s,
            c = r[0],
            h = r[1],
            u = r[2],
            d = r[3],
            l = t[0] ^ e[0],
            p = t[1] ^ e[1],
            b = t[2] ^ e[2],
            y = t[3] ^ e[3],
            m = 4,
            g = 1;
          g < i;
          g++
        )
          (o =
            c[l >>> 24] ^
            h[(p >>> 16) & 255] ^
            u[(b >>> 8) & 255] ^
            d[255 & y] ^
            e[m++]),
            (a =
              c[p >>> 24] ^
              h[(b >>> 16) & 255] ^
              u[(y >>> 8) & 255] ^
              d[255 & l] ^
              e[m++]),
            (f =
              c[b >>> 24] ^
              h[(y >>> 16) & 255] ^
              u[(l >>> 8) & 255] ^
              d[255 & p] ^
              e[m++]),
            (s =
              c[y >>> 24] ^
              h[(l >>> 16) & 255] ^
              u[(p >>> 8) & 255] ^
              d[255 & b] ^
              e[m++]),
            (l = o),
            (p = a),
            (b = f),
            (y = s)
        return (
          (o =
            ((n[l >>> 24] << 24) |
              (n[(p >>> 16) & 255] << 16) |
              (n[(b >>> 8) & 255] << 8) |
              n[255 & y]) ^
            e[m++]),
          (a =
            ((n[p >>> 24] << 24) |
              (n[(b >>> 16) & 255] << 16) |
              (n[(y >>> 8) & 255] << 8) |
              n[255 & l]) ^
            e[m++]),
          (f =
            ((n[b >>> 24] << 24) |
              (n[(y >>> 16) & 255] << 16) |
              (n[(l >>> 8) & 255] << 8) |
              n[255 & p]) ^
            e[m++]),
          (s =
            ((n[y >>> 24] << 24) |
              (n[(l >>> 16) & 255] << 16) |
              (n[(p >>> 8) & 255] << 8) |
              n[255 & b]) ^
            e[m++]),
          [(o >>>= 0), (a >>>= 0), (f >>>= 0), (s >>>= 0)]
        )
      }
      var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        s = (function() {
          for (var t = new Array(256), e = 0; e < 256; e++)
            t[e] = e < 128 ? e << 1 : (e << 1) ^ 283
          for (
            var r = [],
              n = [],
              i = [[], [], [], []],
              o = [[], [], [], []],
              a = 0,
              f = 0,
              s = 0;
            s < 256;
            ++s
          ) {
            var c = f ^ (f << 1) ^ (f << 2) ^ (f << 3) ^ (f << 4)
            ;(c = (c >>> 8) ^ (255 & c) ^ 99), (r[a] = c), (n[c] = a)
            var h = t[a],
              u = t[h],
              d = t[u],
              l = (257 * t[c]) ^ (16843008 * c)
            ;(i[0][a] = (l << 24) | (l >>> 8)),
              (i[1][a] = (l << 16) | (l >>> 16)),
              (i[2][a] = (l << 8) | (l >>> 24)),
              (i[3][a] = l),
              (l = (16843009 * d) ^ (65537 * u) ^ (257 * h) ^ (16843008 * a)),
              (o[0][c] = (l << 24) | (l >>> 8)),
              (o[1][c] = (l << 16) | (l >>> 16)),
              (o[2][c] = (l << 8) | (l >>> 24)),
              (o[3][c] = l),
              0 === a ? (a = f = 1) : ((a = h ^ t[t[t[d ^ h]]]), (f ^= t[t[f]]))
          }
          return { SBOX: r, INV_SBOX: n, SUB_MIX: i, INV_SUB_MIX: o }
        })()
      function c(t) {
        ;(this._key = i(t)), this._reset()
      }
      ;(c.blockSize = 16),
        (c.keySize = 32),
        (c.prototype.blockSize = c.blockSize),
        (c.prototype.keySize = c.keySize),
        (c.prototype._reset = function() {
          for (
            var t = this._key,
              e = t.length,
              r = e + 6,
              n = 4 * (r + 1),
              i = [],
              o = 0;
            o < e;
            o++
          )
            i[o] = t[o]
          for (o = e; o < n; o++) {
            var a = i[o - 1]
            o % e == 0
              ? ((a = (a << 8) | (a >>> 24)),
                (a =
                  (s.SBOX[a >>> 24] << 24) |
                  (s.SBOX[(a >>> 16) & 255] << 16) |
                  (s.SBOX[(a >>> 8) & 255] << 8) |
                  s.SBOX[255 & a]),
                (a ^= f[(o / e) | 0] << 24))
              : e > 6 &&
                o % e == 4 &&
                (a =
                  (s.SBOX[a >>> 24] << 24) |
                  (s.SBOX[(a >>> 16) & 255] << 16) |
                  (s.SBOX[(a >>> 8) & 255] << 8) |
                  s.SBOX[255 & a]),
              (i[o] = i[o - e] ^ a)
          }
          for (var c = [], h = 0; h < n; h++) {
            var u = n - h,
              d = i[u - (h % 4 ? 0 : 4)]
            c[h] =
              h < 4 || u <= 4
                ? d
                : s.INV_SUB_MIX[0][s.SBOX[d >>> 24]] ^
                  s.INV_SUB_MIX[1][s.SBOX[(d >>> 16) & 255]] ^
                  s.INV_SUB_MIX[2][s.SBOX[(d >>> 8) & 255]] ^
                  s.INV_SUB_MIX[3][s.SBOX[255 & d]]
          }
          ;(this._nRounds = r),
            (this._keySchedule = i),
            (this._invKeySchedule = c)
        }),
        (c.prototype.encryptBlockRaw = function(t) {
          return a(
            (t = i(t)),
            this._keySchedule,
            s.SUB_MIX,
            s.SBOX,
            this._nRounds
          )
        }),
        (c.prototype.encryptBlock = function(t) {
          var e = this.encryptBlockRaw(t),
            r = n.allocUnsafe(16)
          return (
            r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
          )
        }),
        (c.prototype.decryptBlock = function(t) {
          var e = (t = i(t))[1]
          ;(t[1] = t[3]), (t[3] = e)
          var r = a(
              t,
              this._invKeySchedule,
              s.INV_SUB_MIX,
              s.INV_SBOX,
              this._nRounds
            ),
            o = n.allocUnsafe(16)
          return (
            o.writeUInt32BE(r[0], 0),
            o.writeUInt32BE(r[3], 4),
            o.writeUInt32BE(r[2], 8),
            o.writeUInt32BE(r[1], 12),
            o
          )
        }),
        (c.prototype.scrub = function() {
          o(this._keySchedule), o(this._invKeySchedule), o(this._key)
        }),
        (t.exports.AES = c)
    },
    function(t, e, r) {
      var n = r(1).Buffer,
        i = r(27)
      t.exports = function(t, e, r, o) {
        if (
          (n.isBuffer(t) || (t = n.from(t, 'binary')),
          e && (n.isBuffer(e) || (e = n.from(e, 'binary')), 8 !== e.length))
        )
          throw new RangeError('salt should be Buffer with 8 byte length')
        for (
          var a = r / 8, f = n.alloc(a), s = n.alloc(o || 0), c = n.alloc(0);
          a > 0 || o > 0;

        ) {
          var h = new i()
          h.update(c), h.update(t), e && h.update(e), (c = h.digest())
          var u = 0
          if (a > 0) {
            var d = f.length - a
            ;(u = Math.min(a, c.length)), c.copy(f, d, 0, u), (a -= u)
          }
          if (u < c.length && o > 0) {
            var l = s.length - o,
              p = Math.min(o, c.length - u)
            c.copy(s, l, u, u + p), (o -= p)
          }
        }
        return c.fill(0), { key: f, iv: s }
      }
    },
    function(t, e, r) {
      'use strict'
      var n = e
      ;(n.base = r(127)),
        (n.short = r(128)),
        (n.mont = r(129)),
        (n.edwards = r(130))
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(146),
          i = r(158),
          o = r(159),
          a = r(36),
          f = r(53)
        function s(t) {
          var r
          'object' != typeof t ||
            e.isBuffer(t) ||
            ((r = t.passphrase), (t = t.key)),
            'string' == typeof t && (t = new e(t))
          var s,
            c,
            h = o(t, r),
            u = h.tag,
            d = h.data
          switch (u) {
            case 'CERTIFICATE':
              c = n.certificate.decode(d, 'der').tbsCertificate
                .subjectPublicKeyInfo
            case 'PUBLIC KEY':
              switch (
                (c || (c = n.PublicKey.decode(d, 'der')),
                (s = c.algorithm.algorithm.join('.')))
              ) {
                case '1.2.840.113549.1.1.1':
                  return n.RSAPublicKey.decode(c.subjectPublicKey.data, 'der')
                case '1.2.840.10045.2.1':
                  return (
                    (c.subjectPrivateKey = c.subjectPublicKey),
                    { type: 'ec', data: c }
                  )
                case '1.2.840.10040.4.1':
                  return (
                    (c.algorithm.params.pub_key = n.DSAparam.decode(
                      c.subjectPublicKey.data,
                      'der'
                    )),
                    { type: 'dsa', data: c.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + s)
              }
              throw new Error('unknown key type ' + u)
            case 'ENCRYPTED PRIVATE KEY':
              d = (function(t, r) {
                var n = t.algorithm.decrypt.kde.kdeparams.salt,
                  o = parseInt(
                    t.algorithm.decrypt.kde.kdeparams.iters.toString(),
                    10
                  ),
                  s = i[t.algorithm.decrypt.cipher.algo.join('.')],
                  c = t.algorithm.decrypt.cipher.iv,
                  h = t.subjectPrivateKey,
                  u = parseInt(s.split('-')[1], 10) / 8,
                  d = f.pbkdf2Sync(r, n, o, u),
                  l = a.createDecipheriv(s, d, c),
                  p = []
                return p.push(l.update(h)), p.push(l.final()), e.concat(p)
              })((d = n.EncryptedPrivateKey.decode(d, 'der')), r)
            case 'PRIVATE KEY':
              switch (
                (s = (c = n.PrivateKey.decode(
                  d,
                  'der'
                )).algorithm.algorithm.join('.'))
              ) {
                case '1.2.840.113549.1.1.1':
                  return n.RSAPrivateKey.decode(c.subjectPrivateKey, 'der')
                case '1.2.840.10045.2.1':
                  return {
                    curve: c.algorithm.curve,
                    privateKey: n.ECPrivateKey.decode(
                      c.subjectPrivateKey,
                      'der'
                    ).privateKey,
                  }
                case '1.2.840.10040.4.1':
                  return (
                    (c.algorithm.params.priv_key = n.DSAparam.decode(
                      c.subjectPrivateKey,
                      'der'
                    )),
                    { type: 'dsa', params: c.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + s)
              }
              throw new Error('unknown key type ' + u)
            case 'RSA PUBLIC KEY':
              return n.RSAPublicKey.decode(d, 'der')
            case 'RSA PRIVATE KEY':
              return n.RSAPrivateKey.decode(d, 'der')
            case 'DSA PRIVATE KEY':
              return { type: 'dsa', params: n.DSAPrivateKey.decode(d, 'der') }
            case 'EC PRIVATE KEY':
              return {
                curve: (d = n.ECPrivateKey.decode(d, 'der')).parameters.value,
                privateKey: d.privateKey,
              }
            default:
              throw new Error('unknown key type ' + u)
          }
        }
        ;(t.exports = s), (s.signature = n.signature)
      }.call(this, r(3).Buffer))
    },
    function(t, e) {
      const r = '0123456789abcdef'.split(''),
        n = [1, 256, 65536, 16777216],
        i = [0, 8, 16, 24],
        o = [
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
          2147483648,
        ],
        a = t => {
          var e,
            r,
            n,
            i,
            a,
            f,
            s,
            c,
            h,
            u,
            d,
            l,
            p,
            b,
            y,
            m,
            g,
            v,
            _,
            w,
            S,
            M,
            k,
            E,
            A,
            x,
            I,
            B,
            R,
            C,
            T,
            P,
            j,
            O,
            N,
            D,
            U,
            L,
            z,
            q,
            F,
            K,
            W,
            H,
            Y,
            V,
            X,
            J,
            G,
            Z,
            $,
            Q,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            at,
            ft,
            st,
            ct,
            ht
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (a = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (f = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (u = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e =
                (l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((f << 1) | (s >>> 31))),
              (r =
                (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((s << 1) | (f >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((c << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (c >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = f ^ ((u << 1) | (d >>> 31))),
              (r = s ^ ((d << 1) | (u >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = c ^ ((l << 1) | (p >>> 31))),
              (r = h ^ ((p << 1) | (l >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = u ^ ((i << 1) | (a >>> 31))),
              (r = d ^ ((a << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (b = t[0]),
              (y = t[1]),
              (V = (t[11] << 4) | (t[10] >>> 28)),
              (X = (t[10] << 4) | (t[11] >>> 28)),
              (B = (t[20] << 3) | (t[21] >>> 29)),
              (R = (t[21] << 3) | (t[20] >>> 29)),
              (ft = (t[31] << 9) | (t[30] >>> 23)),
              (st = (t[30] << 9) | (t[31] >>> 23)),
              (K = (t[40] << 18) | (t[41] >>> 14)),
              (W = (t[41] << 18) | (t[40] >>> 14)),
              (O = (t[2] << 1) | (t[3] >>> 31)),
              (N = (t[3] << 1) | (t[2] >>> 31)),
              (m = (t[13] << 12) | (t[12] >>> 20)),
              (g = (t[12] << 12) | (t[13] >>> 20)),
              (J = (t[22] << 10) | (t[23] >>> 22)),
              (G = (t[23] << 10) | (t[22] >>> 22)),
              (C = (t[33] << 13) | (t[32] >>> 19)),
              (T = (t[32] << 13) | (t[33] >>> 19)),
              (ct = (t[42] << 2) | (t[43] >>> 30)),
              (ht = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (D = (t[14] << 6) | (t[15] >>> 26)),
              (U = (t[15] << 6) | (t[14] >>> 26)),
              (v = (t[25] << 11) | (t[24] >>> 21)),
              (_ = (t[24] << 11) | (t[25] >>> 21)),
              (Z = (t[34] << 15) | (t[35] >>> 17)),
              ($ = (t[35] << 15) | (t[34] >>> 17)),
              (P = (t[45] << 29) | (t[44] >>> 3)),
              (j = (t[44] << 29) | (t[45] >>> 3)),
              (E = (t[6] << 28) | (t[7] >>> 4)),
              (A = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (L = (t[26] << 25) | (t[27] >>> 7)),
              (z = (t[27] << 25) | (t[26] >>> 7)),
              (w = (t[36] << 21) | (t[37] >>> 11)),
              (S = (t[37] << 21) | (t[36] >>> 11)),
              (Q = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (H = (t[8] << 27) | (t[9] >>> 5)),
              (Y = (t[9] << 27) | (t[8] >>> 5)),
              (x = (t[18] << 20) | (t[19] >>> 12)),
              (I = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (at = (t[28] << 7) | (t[29] >>> 25)),
              (q = (t[38] << 8) | (t[39] >>> 24)),
              (F = (t[39] << 8) | (t[38] >>> 24)),
              (M = (t[48] << 14) | (t[49] >>> 18)),
              (k = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = b ^ (~m & v)),
              (t[1] = y ^ (~g & _)),
              (t[10] = E ^ (~x & B)),
              (t[11] = A ^ (~I & R)),
              (t[20] = O ^ (~D & L)),
              (t[21] = N ^ (~U & z)),
              (t[30] = H ^ (~V & J)),
              (t[31] = Y ^ (~X & G)),
              (t[40] = et ^ (~nt & ot)),
              (t[41] = rt ^ (~it & at)),
              (t[2] = m ^ (~v & w)),
              (t[3] = g ^ (~_ & S)),
              (t[12] = x ^ (~B & C)),
              (t[13] = I ^ (~R & T)),
              (t[22] = D ^ (~L & q)),
              (t[23] = U ^ (~z & F)),
              (t[32] = V ^ (~J & Z)),
              (t[33] = X ^ (~G & $)),
              (t[42] = nt ^ (~ot & ft)),
              (t[43] = it ^ (~at & st)),
              (t[4] = v ^ (~w & M)),
              (t[5] = _ ^ (~S & k)),
              (t[14] = B ^ (~C & P)),
              (t[15] = R ^ (~T & j)),
              (t[24] = L ^ (~q & K)),
              (t[25] = z ^ (~F & W)),
              (t[34] = J ^ (~Z & Q)),
              (t[35] = G ^ (~$ & tt)),
              (t[44] = ot ^ (~ft & ct)),
              (t[45] = at ^ (~st & ht)),
              (t[6] = w ^ (~M & b)),
              (t[7] = S ^ (~k & y)),
              (t[16] = C ^ (~P & E)),
              (t[17] = T ^ (~j & A)),
              (t[26] = q ^ (~K & O)),
              (t[27] = F ^ (~W & N)),
              (t[36] = Z ^ (~Q & H)),
              (t[37] = $ ^ (~tt & Y)),
              (t[46] = ft ^ (~ct & et)),
              (t[47] = st ^ (~ht & rt)),
              (t[8] = M ^ (~b & m)),
              (t[9] = k ^ (~y & g)),
              (t[18] = P ^ (~E & x)),
              (t[19] = j ^ (~A & I)),
              (t[28] = K ^ (~O & D)),
              (t[29] = W ^ (~N & U)),
              (t[38] = Q ^ (~H & V)),
              (t[39] = tt ^ (~Y & X)),
              (t[48] = ct ^ (~et & nt)),
              (t[49] = ht ^ (~rt & it)),
              (t[0] ^= o[n]),
              (t[1] ^= o[n + 1])
        },
        f = t => e => {
          var o
          if ('0x' === e.slice(0, 2)) {
            o = []
            for (var f = 2, s = e.length; f < s; f += 2)
              o.push(parseInt(e.slice(f, f + 2), 16))
          } else o = e
          return ((t, e) => {
            for (
              var o,
                f = e.length,
                s = t.blocks,
                c = t.blockCount << 2,
                h = t.blockCount,
                u = t.outputBlocks,
                d = t.s,
                l = 0;
              l < f;

            ) {
              if (t.reset)
                for (t.reset = !1, s[0] = t.block, y = 1; y < h + 1; ++y)
                  s[y] = 0
              if ('string' != typeof e)
                for (y = t.start; l < f && y < c; ++l)
                  s[y >> 2] |= e[l] << i[3 & y++]
              else
                for (y = t.start; l < f && y < c; ++l)
                  (o = e.charCodeAt(l)) < 128
                    ? (s[y >> 2] |= o << i[3 & y++])
                    : o < 2048
                    ? ((s[y >> 2] |= (192 | (o >> 6)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | (63 & o)) << i[3 & y++]))
                    : o < 55296 || o >= 57344
                    ? ((s[y >> 2] |= (224 | (o >> 12)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | ((o >> 6) & 63)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | (63 & o)) << i[3 & y++]))
                    : ((o =
                        65536 +
                        (((1023 & o) << 10) | (1023 & e.charCodeAt(++l)))),
                      (s[y >> 2] |= (240 | (o >> 18)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | ((o >> 12) & 63)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | ((o >> 6) & 63)) << i[3 & y++]),
                      (s[y >> 2] |= (128 | (63 & o)) << i[3 & y++]))
              if (((t.lastByteIndex = y), y >= c)) {
                for (t.start = y - c, t.block = s[h], y = 0; y < h; ++y)
                  d[y] ^= s[y]
                a(d), (t.reset = !0)
              } else t.start = y
            }
            if (
              ((s[(y = t.lastByteIndex) >> 2] |= n[3 & y]),
              t.lastByteIndex === c)
            )
              for (s[0] = s[h], y = 1; y < h + 1; ++y) s[y] = 0
            for (s[h - 1] |= 2147483648, y = 0; y < h; ++y) d[y] ^= s[y]
            a(d)
            for (var p, b = '', y = 0, m = 0; m < u; ) {
              for (y = 0; y < h && m < u; ++y, ++m)
                (p = d[y]),
                  (b +=
                    r[(p >> 4) & 15] +
                    r[15 & p] +
                    r[(p >> 12) & 15] +
                    r[(p >> 8) & 15] +
                    r[(p >> 20) & 15] +
                    r[(p >> 16) & 15] +
                    r[(p >> 28) & 15] +
                    r[(p >> 24) & 15])
              m % h == 0 && (a(d), (y = 0))
            }
            return '0x' + b
          })(
            (t => ({
              blocks: [],
              reset: !0,
              block: 0,
              start: 0,
              blockCount: (1600 - (t << 1)) >> 5,
              outputBlocks: t >> 5,
              s: (t => [].concat(t, t, t, t, t))([
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
              ]),
            }))(t),
            o
          )
        }
      t.exports = {
        keccak256: f(256),
        keccak512: f(512),
        keccak256s: f(256),
        keccak512s: f(512),
      }
    },
    function(t, e, r) {
      'use strict'
      var n = r(0),
        i = r(43),
        o = r(1).Buffer,
        a = new Array(16)
      function f() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878)
      }
      function s(t, e) {
        return (t << e) | (t >>> (32 - e))
      }
      function c(t, e, r, n, i, o, a) {
        return (s((t + ((e & r) | (~e & n)) + i + o) | 0, a) + e) | 0
      }
      function h(t, e, r, n, i, o, a) {
        return (s((t + ((e & n) | (r & ~n)) + i + o) | 0, a) + e) | 0
      }
      function u(t, e, r, n, i, o, a) {
        return (s((t + (e ^ r ^ n) + i + o) | 0, a) + e) | 0
      }
      function d(t, e, r, n, i, o, a) {
        return (s((t + (r ^ (e | ~n)) + i + o) | 0, a) + e) | 0
      }
      n(f, i),
        (f.prototype._update = function() {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e)
          var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d
          ;(r = c(r, n, i, o, t[0], 3614090360, 7)),
            (o = c(o, r, n, i, t[1], 3905402710, 12)),
            (i = c(i, o, r, n, t[2], 606105819, 17)),
            (n = c(n, i, o, r, t[3], 3250441966, 22)),
            (r = c(r, n, i, o, t[4], 4118548399, 7)),
            (o = c(o, r, n, i, t[5], 1200080426, 12)),
            (i = c(i, o, r, n, t[6], 2821735955, 17)),
            (n = c(n, i, o, r, t[7], 4249261313, 22)),
            (r = c(r, n, i, o, t[8], 1770035416, 7)),
            (o = c(o, r, n, i, t[9], 2336552879, 12)),
            (i = c(i, o, r, n, t[10], 4294925233, 17)),
            (n = c(n, i, o, r, t[11], 2304563134, 22)),
            (r = c(r, n, i, o, t[12], 1804603682, 7)),
            (o = c(o, r, n, i, t[13], 4254626195, 12)),
            (i = c(i, o, r, n, t[14], 2792965006, 17)),
            (r = h(
              r,
              (n = c(n, i, o, r, t[15], 1236535329, 22)),
              i,
              o,
              t[1],
              4129170786,
              5
            )),
            (o = h(o, r, n, i, t[6], 3225465664, 9)),
            (i = h(i, o, r, n, t[11], 643717713, 14)),
            (n = h(n, i, o, r, t[0], 3921069994, 20)),
            (r = h(r, n, i, o, t[5], 3593408605, 5)),
            (o = h(o, r, n, i, t[10], 38016083, 9)),
            (i = h(i, o, r, n, t[15], 3634488961, 14)),
            (n = h(n, i, o, r, t[4], 3889429448, 20)),
            (r = h(r, n, i, o, t[9], 568446438, 5)),
            (o = h(o, r, n, i, t[14], 3275163606, 9)),
            (i = h(i, o, r, n, t[3], 4107603335, 14)),
            (n = h(n, i, o, r, t[8], 1163531501, 20)),
            (r = h(r, n, i, o, t[13], 2850285829, 5)),
            (o = h(o, r, n, i, t[2], 4243563512, 9)),
            (i = h(i, o, r, n, t[7], 1735328473, 14)),
            (r = u(
              r,
              (n = h(n, i, o, r, t[12], 2368359562, 20)),
              i,
              o,
              t[5],
              4294588738,
              4
            )),
            (o = u(o, r, n, i, t[8], 2272392833, 11)),
            (i = u(i, o, r, n, t[11], 1839030562, 16)),
            (n = u(n, i, o, r, t[14], 4259657740, 23)),
            (r = u(r, n, i, o, t[1], 2763975236, 4)),
            (o = u(o, r, n, i, t[4], 1272893353, 11)),
            (i = u(i, o, r, n, t[7], 4139469664, 16)),
            (n = u(n, i, o, r, t[10], 3200236656, 23)),
            (r = u(r, n, i, o, t[13], 681279174, 4)),
            (o = u(o, r, n, i, t[0], 3936430074, 11)),
            (i = u(i, o, r, n, t[3], 3572445317, 16)),
            (n = u(n, i, o, r, t[6], 76029189, 23)),
            (r = u(r, n, i, o, t[9], 3654602809, 4)),
            (o = u(o, r, n, i, t[12], 3873151461, 11)),
            (i = u(i, o, r, n, t[15], 530742520, 16)),
            (r = d(
              r,
              (n = u(n, i, o, r, t[2], 3299628645, 23)),
              i,
              o,
              t[0],
              4096336452,
              6
            )),
            (o = d(o, r, n, i, t[7], 1126891415, 10)),
            (i = d(i, o, r, n, t[14], 2878612391, 15)),
            (n = d(n, i, o, r, t[5], 4237533241, 21)),
            (r = d(r, n, i, o, t[12], 1700485571, 6)),
            (o = d(o, r, n, i, t[3], 2399980690, 10)),
            (i = d(i, o, r, n, t[10], 4293915773, 15)),
            (n = d(n, i, o, r, t[1], 2240044497, 21)),
            (r = d(r, n, i, o, t[8], 1873313359, 6)),
            (o = d(o, r, n, i, t[15], 4264355552, 10)),
            (i = d(i, o, r, n, t[6], 2734768916, 15)),
            (n = d(n, i, o, r, t[13], 1309151649, 21)),
            (r = d(r, n, i, o, t[4], 4149444226, 6)),
            (o = d(o, r, n, i, t[11], 3174756917, 10)),
            (i = d(i, o, r, n, t[2], 718787259, 15)),
            (n = d(n, i, o, r, t[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + n) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0)
        }),
        (f.prototype._digest = function() {
          ;(this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update()
          var t = o.allocUnsafe(16)
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
          )
        }),
        (t.exports = f)
    },
    function(t, e, r) {
      t.exports = i
      var n = r(29).EventEmitter
      function i() {
        n.call(this)
      }
      r(0)(i, n),
        (i.Readable = r(30)),
        (i.Writable = r(89)),
        (i.Duplex = r(90)),
        (i.Transform = r(91)),
        (i.PassThrough = r(92)),
        (i.Stream = i),
        (i.prototype.pipe = function(t, e) {
          var r = this
          function i(e) {
            t.writable && !1 === t.write(e) && r.pause && r.pause()
          }
          function o() {
            r.readable && r.resume && r.resume()
          }
          r.on('data', i),
            t.on('drain', o),
            t._isStdio ||
              (e && !1 === e.end) ||
              (r.on('end', f), r.on('close', s))
          var a = !1
          function f() {
            a || ((a = !0), t.end())
          }
          function s() {
            a || ((a = !0), 'function' == typeof t.destroy && t.destroy())
          }
          function c(t) {
            if ((h(), 0 === n.listenerCount(this, 'error'))) throw t
          }
          function h() {
            r.removeListener('data', i),
              t.removeListener('drain', o),
              r.removeListener('end', f),
              r.removeListener('close', s),
              r.removeListener('error', c),
              t.removeListener('error', c),
              r.removeListener('end', h),
              r.removeListener('close', h),
              t.removeListener('close', h)
          }
          return (
            r.on('error', c),
            t.on('error', c),
            r.on('end', h),
            r.on('close', h),
            t.on('close', h),
            t.emit('pipe', r),
            t
          )
        })
    },
    function(t, e) {
      function r() {
        ;(this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0)
      }
      function n(t) {
        return 'function' == typeof t
      }
      function i(t) {
        return 'object' == typeof t && null !== t
      }
      function o(t) {
        return void 0 === t
      }
      ;(t.exports = r),
        (r.EventEmitter = r),
        (r.prototype._events = void 0),
        (r.prototype._maxListeners = void 0),
        (r.defaultMaxListeners = 10),
        (r.prototype.setMaxListeners = function(t) {
          if ('number' != typeof t || t < 0 || isNaN(t))
            throw TypeError('n must be a positive number')
          return (this._maxListeners = t), this
        }),
        (r.prototype.emit = function(t) {
          var e, r, a, f, s, c
          if (
            (this._events || (this._events = {}),
            'error' === t &&
              (!this._events.error ||
                (i(this._events.error) && !this._events.error.length)))
          ) {
            if ((e = arguments[1]) instanceof Error) throw e
            var h = new Error(
              'Uncaught, unspecified "error" event. (' + e + ')'
            )
            throw ((h.context = e), h)
          }
          if (o((r = this._events[t]))) return !1
          if (n(r))
            switch (arguments.length) {
              case 1:
                r.call(this)
                break
              case 2:
                r.call(this, arguments[1])
                break
              case 3:
                r.call(this, arguments[1], arguments[2])
                break
              default:
                ;(f = Array.prototype.slice.call(arguments, 1)),
                  r.apply(this, f)
            }
          else if (i(r))
            for (
              f = Array.prototype.slice.call(arguments, 1),
                a = (c = r.slice()).length,
                s = 0;
              s < a;
              s++
            )
              c[s].apply(this, f)
          return !0
        }),
        (r.prototype.addListener = function(t, e) {
          var a
          if (!n(e)) throw TypeError('listener must be a function')
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit('newListener', t, n(e.listener) ? e.listener : e),
            this._events[t]
              ? i(this._events[t])
                ? this._events[t].push(e)
                : (this._events[t] = [this._events[t], e])
              : (this._events[t] = e),
            i(this._events[t]) &&
              !this._events[t].warned &&
              (a = o(this._maxListeners)
                ? r.defaultMaxListeners
                : this._maxListeners) &&
              a > 0 &&
              this._events[t].length > a &&
              ((this._events[t].warned = !0), console.trace),
            this
          )
        }),
        (r.prototype.on = r.prototype.addListener),
        (r.prototype.once = function(t, e) {
          if (!n(e)) throw TypeError('listener must be a function')
          var r = !1
          function i() {
            this.removeListener(t, i), r || ((r = !0), e.apply(this, arguments))
          }
          return (i.listener = e), this.on(t, i), this
        }),
        (r.prototype.removeListener = function(t, e) {
          var r, o, a, f
          if (!n(e)) throw TypeError('listener must be a function')
          if (!this._events || !this._events[t]) return this
          if (
            ((a = (r = this._events[t]).length),
            (o = -1),
            r === e || (n(r.listener) && r.listener === e))
          )
            delete this._events[t],
              this._events.removeListener && this.emit('removeListener', t, e)
          else if (i(r)) {
            for (f = a; f-- > 0; )
              if (r[f] === e || (r[f].listener && r[f].listener === e)) {
                o = f
                break
              }
            if (o < 0) return this
            1 === r.length
              ? ((r.length = 0), delete this._events[t])
              : r.splice(o, 1),
              this._events.removeListener && this.emit('removeListener', t, e)
          }
          return this
        }),
        (r.prototype.removeAllListeners = function(t) {
          var e, r
          if (!this._events) return this
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[t] && delete this._events[t],
              this
            )
          if (0 === arguments.length) {
            for (e in this._events)
              'removeListener' !== e && this.removeAllListeners(e)
            return (
              this.removeAllListeners('removeListener'),
              (this._events = {}),
              this
            )
          }
          if (n((r = this._events[t]))) this.removeListener(t, r)
          else if (r) for (; r.length; ) this.removeListener(t, r[r.length - 1])
          return delete this._events[t], this
        }),
        (r.prototype.listeners = function(t) {
          return this._events && this._events[t]
            ? n(this._events[t])
              ? [this._events[t]]
              : this._events[t].slice()
            : []
        }),
        (r.prototype.listenerCount = function(t) {
          if (this._events) {
            var e = this._events[t]
            if (n(e)) return 1
            if (e) return e.length
          }
          return 0
        }),
        (r.listenerCount = function(t, e) {
          return t.listenerCount(e)
        })
    },
    function(t, e, r) {
      ;((e = t.exports = r(44)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(31)),
        (e.Duplex = r(12)),
        (e.Transform = r(47)),
        (e.PassThrough = r(88))
    },
    function(t, e, r) {
      'use strict'
      ;(function(e, n, i) {
        var o = r(21)
        function a(t) {
          var e = this
          ;(this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(t, e, r) {
                var n = t.entry
                for (t.entry = null; n; ) {
                  var i = n.callback
                  e.pendingcb--, i(void 0), (n = n.next)
                }
                e.corkedRequestsFree
                  ? (e.corkedRequestsFree.next = t)
                  : (e.corkedRequestsFree = t)
              })(e, t)
            })
        }
        t.exports = g
        var f,
          s =
            !e.browser && ['v0.10', 'v0.9.'].indexOf(e.version.slice(0, 5)) > -1
              ? n
              : o.nextTick
        g.WritableState = m
        var c = r(16)
        c.inherits = r(0)
        var h,
          u = { deprecate: r(87) },
          d = r(45),
          l = r(1).Buffer,
          p = i.Uint8Array || function() {},
          b = r(46)
        function y() {}
        function m(t, e) {
          ;(f = f || r(12)), (t = t || {})
          var n = e instanceof f
          ;(this.objectMode = !!t.objectMode),
            n && (this.objectMode = this.objectMode || !!t.writableObjectMode)
          var i = t.highWaterMark,
            c = t.writableHighWaterMark,
            h = this.objectMode ? 16 : 16384
          ;(this.highWaterMark =
            i || 0 === i ? i : n && (c || 0 === c) ? c : h),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1)
          var u = !1 === t.decodeStrings
          ;(this.decodeStrings = !u),
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(t) {
              !(function(t, e) {
                var r = t._writableState,
                  n = r.sync,
                  i = r.writecb
                if (
                  ((function(t) {
                    ;(t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0)
                  })(r),
                  e)
                )
                  !(function(t, e, r, n, i) {
                    --e.pendingcb,
                      r
                        ? (o.nextTick(i, n),
                          o.nextTick(k, t, e),
                          (t._writableState.errorEmitted = !0),
                          t.emit('error', n))
                        : (i(n),
                          (t._writableState.errorEmitted = !0),
                          t.emit('error', n),
                          k(t, e))
                  })(t, r, n, e, i)
                else {
                  var a = S(r)
                  a ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    w(t, r),
                    n ? s(_, t, r, a, i) : _(t, r, a, i)
                }
              })(e, t)
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new a(this))
        }
        function g(t) {
          if (((f = f || r(12)), !(h.call(g, this) || this instanceof f)))
            return new g(t)
          ;(this._writableState = new m(t, this)),
            (this.writable = !0),
            t &&
              ('function' == typeof t.write && (this._write = t.write),
              'function' == typeof t.writev && (this._writev = t.writev),
              'function' == typeof t.destroy && (this._destroy = t.destroy),
              'function' == typeof t.final && (this._final = t.final)),
            d.call(this)
        }
        function v(t, e, r, n, i, o, a) {
          ;(e.writelen = n),
            (e.writecb = a),
            (e.writing = !0),
            (e.sync = !0),
            r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
            (e.sync = !1)
        }
        function _(t, e, r, n) {
          r ||
            (function(t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit('drain'))
            })(t, e),
            e.pendingcb--,
            n(),
            k(t, e)
        }
        function w(t, e) {
          e.bufferProcessing = !0
          var r = e.bufferedRequest
          if (t._writev && r && r.next) {
            var n = e.bufferedRequestCount,
              i = new Array(n),
              o = e.corkedRequestsFree
            o.entry = r
            for (var f = 0, s = !0; r; )
              (i[f] = r), r.isBuf || (s = !1), (r = r.next), (f += 1)
            ;(i.allBuffers = s),
              v(t, e, !0, e.length, i, '', o.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              o.next
                ? ((e.corkedRequestsFree = o.next), (o.next = null))
                : (e.corkedRequestsFree = new a(e)),
              (e.bufferedRequestCount = 0)
          } else {
            for (; r; ) {
              var c = r.chunk,
                h = r.encoding,
                u = r.callback
              if (
                (v(t, e, !1, e.objectMode ? 1 : c.length, c, h, u),
                (r = r.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break
            }
            null === r && (e.lastBufferedRequest = null)
          }
          ;(e.bufferedRequest = r), (e.bufferProcessing = !1)
        }
        function S(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          )
        }
        function M(t, e) {
          t._final(function(r) {
            e.pendingcb--,
              r && t.emit('error', r),
              (e.prefinished = !0),
              t.emit('prefinish'),
              k(t, e)
          })
        }
        function k(t, e) {
          var r = S(e)
          return (
            r &&
              ((function(t, e) {
                e.prefinished ||
                  e.finalCalled ||
                  ('function' == typeof t._final
                    ? (e.pendingcb++, (e.finalCalled = !0), o.nextTick(M, t, e))
                    : ((e.prefinished = !0), t.emit('prefinish')))
              })(t, e),
              0 === e.pendingcb && ((e.finished = !0), t.emit('finish'))),
            r
          )
        }
        c.inherits(g, d),
          (m.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next)
            return e
          }),
          (function() {
            try {
              Object.defineProperty(m.prototype, 'buffer', {
                get: u.deprecate(
                  function() {
                    return this.getBuffer()
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                ),
              })
            } catch (t) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((h = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(g, Symbol.hasInstance, {
                value: function(t) {
                  return (
                    !!h.call(this, t) ||
                    (this === g && t && t._writableState instanceof m)
                  )
                },
              }))
            : (h = function(t) {
                return t instanceof this
              }),
          (g.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe, not readable'))
          }),
          (g.prototype.write = function(t, e, r) {
            var n,
              i = this._writableState,
              a = !1,
              f = !i.objectMode && ((n = t), l.isBuffer(n) || n instanceof p)
            return (
              f &&
                !l.isBuffer(t) &&
                (t = (function(t) {
                  return l.from(t)
                })(t)),
              'function' == typeof e && ((r = e), (e = null)),
              f ? (e = 'buffer') : e || (e = i.defaultEncoding),
              'function' != typeof r && (r = y),
              i.ended
                ? (function(t, e) {
                    var r = new Error('write after end')
                    t.emit('error', r), o.nextTick(e, r)
                  })(this, r)
                : (f ||
                    (function(t, e, r, n) {
                      var i = !0,
                        a = !1
                      return (
                        null === r
                          ? (a = new TypeError(
                              'May not write null values to stream'
                            ))
                          : 'string' == typeof r ||
                            void 0 === r ||
                            e.objectMode ||
                            (a = new TypeError(
                              'Invalid non-string/buffer chunk'
                            )),
                        a && (t.emit('error', a), o.nextTick(n, a), (i = !1)),
                        i
                      )
                    })(this, i, t, r)) &&
                  (i.pendingcb++,
                  (a = (function(t, e, r, n, i, o) {
                    if (!r) {
                      var a = (function(t, e, r) {
                        return (
                          t.objectMode ||
                            !1 === t.decodeStrings ||
                            'string' != typeof e ||
                            (e = l.from(e, r)),
                          e
                        )
                      })(e, n, i)
                      n !== a && ((r = !0), (i = 'buffer'), (n = a))
                    }
                    var f = e.objectMode ? 1 : n.length
                    e.length += f
                    var s = e.length < e.highWaterMark
                    if ((s || (e.needDrain = !0), e.writing || e.corked)) {
                      var c = e.lastBufferedRequest
                      ;(e.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null,
                      }),
                        c
                          ? (c.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1)
                    } else v(t, e, !1, f, n, i, o)
                    return s
                  })(this, i, f, t, e, r))),
              a
            )
          }),
          (g.prototype.cork = function() {
            this._writableState.corked++
          }),
          (g.prototype.uncork = function() {
            var t = this._writableState
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.finished ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                w(this, t))
          }),
          (g.prototype.setDefaultEncoding = function(t) {
            if (
              ('string' == typeof t && (t = t.toLowerCase()),
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
                  'raw',
                ].indexOf((t + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + t)
            return (this._writableState.defaultEncoding = t), this
          }),
          Object.defineProperty(g.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark
            },
          }),
          (g.prototype._write = function(t, e, r) {
            r(new Error('_write() is not implemented'))
          }),
          (g.prototype._writev = null),
          (g.prototype.end = function(t, e, r) {
            var n = this._writableState
            'function' == typeof t
              ? ((r = t), (t = null), (e = null))
              : 'function' == typeof e && ((r = e), (e = null)),
              null != t && this.write(t, e),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                n.finished ||
                (function(t, e, r) {
                  ;(e.ending = !0),
                    k(t, e),
                    r && (e.finished ? o.nextTick(r) : t.once('finish', r)),
                    (e.ended = !0),
                    (t.writable = !1)
                })(this, n, r)
          }),
          Object.defineProperty(g.prototype, 'destroyed', {
            get: function() {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              )
            },
            set: function(t) {
              this._writableState && (this._writableState.destroyed = t)
            },
          }),
          (g.prototype.destroy = b.destroy),
          (g.prototype._undestroy = b.undestroy),
          (g.prototype._destroy = function(t, e) {
            this.end(), e(t)
          })
      }.call(this, r(9), r(85).setImmediate, r(8)))
    },
    function(t, e, r) {
      'use strict'
      var n = r(1).Buffer,
        i =
          n.isEncoding ||
          function(t) {
            switch ((t = '' + t) && t.toLowerCase()) {
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
                return !0
              default:
                return !1
            }
          }
      function o(t) {
        var e
        switch (
          ((this.encoding = (function(t) {
            var e = (function(t) {
              if (!t) return 'utf8'
              for (var e; ; )
                switch (t) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return t
                  default:
                    if (e) return
                    ;(t = ('' + t).toLowerCase()), (e = !0)
                }
            })(t)
            if ('string' != typeof e && (n.isEncoding === i || !i(t)))
              throw new Error('Unknown encoding: ' + t)
            return e || t
          })(t)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = s), (this.end = c), (e = 4)
            break
          case 'utf8':
            ;(this.fillLast = f), (e = 4)
            break
          case 'base64':
            ;(this.text = h), (this.end = u), (e = 3)
            break
          default:
            return (this.write = d), void (this.end = l)
        }
        ;(this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e))
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : t >> 6 == 2
          ? -1
          : -2
      }
      function f(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function(t, e, r) {
            if (128 != (192 & e[0])) return (t.lastNeed = 0), '???'
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 != (192 & e[1])) return (t.lastNeed = 1), '???'
              if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                return (t.lastNeed = 2), '???'
            }
          })(this, t)
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length))
      }
      function s(t, e) {
        if ((t.length - e) % 2 == 0) {
          var r = t.toString('utf16le', e)
          if (r) {
            var n = r.charCodeAt(r.length - 1)
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              )
          }
          return r
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString('utf16le', e, t.length - 1)
        )
      }
      function c(t) {
        var e = t && t.length ? this.write(t) : ''
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed
          return e + this.lastChar.toString('utf16le', 0, r)
        }
        return e
      }
      function h(t, e) {
        var r = (t.length - e) % 3
        return 0 === r
          ? t.toString('base64', e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString('base64', e, t.length - r))
      }
      function u(t) {
        var e = t && t.length ? this.write(t) : ''
        return this.lastNeed
          ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : e
      }
      function d(t) {
        return t.toString(this.encoding)
      }
      function l(t) {
        return t && t.length ? this.write(t) : ''
      }
      ;(e.StringDecoder = o),
        (o.prototype.write = function(t) {
          if (0 === t.length) return ''
          var e, r
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return ''
            ;(r = this.lastNeed), (this.lastNeed = 0)
          } else r = 0
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || ''
        }),
        (o.prototype.end = function(t) {
          var e = t && t.length ? this.write(t) : ''
          return this.lastNeed ? e + '???' : e
        }),
        (o.prototype.text = function(t, e) {
          var r = (function(t, e, r) {
            var n = e.length - 1
            if (n < r) return 0
            var i = a(e[n])
            return i >= 0
              ? (i > 0 && (t.lastNeed = i - 1), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(e[n])) >= 0
              ? (i > 0 && (t.lastNeed = i - 2), i)
              : --n < r || -2 === i
              ? 0
              : (i = a(e[n])) >= 0
              ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
              : 0
          })(this, t, e)
          if (!this.lastNeed) return t.toString('utf8', e)
          this.lastTotal = r
          var n = t.length - (r - this.lastNeed)
          return t.copy(this.lastChar, 0, n), t.toString('utf8', e, n)
        }),
        (o.prototype.fillLast = function(t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(3).Buffer,
        i = r(0),
        o = r(43),
        a = new Array(16),
        f = [
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
          13,
        ],
        s = [
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
          11,
        ],
        c = [
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
          6,
        ],
        h = [
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
          11,
        ],
        u = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        d = [1352829926, 1548603684, 1836072691, 2053994217, 0]
      function l() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520)
      }
      function p(t, e) {
        return (t << e) | (t >>> (32 - e))
      }
      function b(t, e, r, n, i, o, a, f) {
        return (p((t + (e ^ r ^ n) + o + a) | 0, f) + i) | 0
      }
      function y(t, e, r, n, i, o, a, f) {
        return (p((t + ((e & r) | (~e & n)) + o + a) | 0, f) + i) | 0
      }
      function m(t, e, r, n, i, o, a, f) {
        return (p((t + ((e | ~r) ^ n) + o + a) | 0, f) + i) | 0
      }
      function g(t, e, r, n, i, o, a, f) {
        return (p((t + ((e & n) | (r & ~n)) + o + a) | 0, f) + i) | 0
      }
      function v(t, e, r, n, i, o, a, f) {
        return (p((t + (e ^ (r | ~n)) + o + a) | 0, f) + i) | 0
      }
      i(l, o),
        (l.prototype._update = function() {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e)
          for (
            var r = 0 | this._a,
              n = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              _ = 0 | this._a,
              w = 0 | this._b,
              S = 0 | this._c,
              M = 0 | this._d,
              k = 0 | this._e,
              E = 0;
            E < 80;
            E += 1
          ) {
            var A, x
            E < 16
              ? ((A = b(r, n, i, o, l, t[f[E]], u[0], c[E])),
                (x = v(_, w, S, M, k, t[s[E]], d[0], h[E])))
              : E < 32
              ? ((A = y(r, n, i, o, l, t[f[E]], u[1], c[E])),
                (x = g(_, w, S, M, k, t[s[E]], d[1], h[E])))
              : E < 48
              ? ((A = m(r, n, i, o, l, t[f[E]], u[2], c[E])),
                (x = m(_, w, S, M, k, t[s[E]], d[2], h[E])))
              : E < 64
              ? ((A = g(r, n, i, o, l, t[f[E]], u[3], c[E])),
                (x = y(_, w, S, M, k, t[s[E]], d[3], h[E])))
              : ((A = v(r, n, i, o, l, t[f[E]], u[4], c[E])),
                (x = b(_, w, S, M, k, t[s[E]], d[4], h[E]))),
              (r = l),
              (l = o),
              (o = p(i, 10)),
              (i = n),
              (n = A),
              (_ = k),
              (k = M),
              (M = p(S, 10)),
              (S = w),
              (w = x)
          }
          var I = (this._b + i + M) | 0
          ;(this._b = (this._c + o + k) | 0),
            (this._c = (this._d + l + _) | 0),
            (this._d = (this._e + r + w) | 0),
            (this._e = (this._a + n + S) | 0),
            (this._a = I)
        }),
        (l.prototype._digest = function() {
          ;(this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update()
          var t = n.alloc ? n.alloc(20) : new n(20)
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
          )
        }),
        (t.exports = l)
    },
    function(t, e, r) {
      ;((e = t.exports = function(t) {
        t = t.toLowerCase()
        var r = e[t]
        if (!r)
          throw new Error(t + ' is not supported (we accept pull requests)')
        return new r()
      }).sha = r(93)),
        (e.sha1 = r(94)),
        (e.sha224 = r(95)),
        (e.sha256 = r(48)),
        (e.sha384 = r(96)),
        (e.sha512 = r(49))
    },
    function(t, e, r) {
      'use strict'
      ;(e.utils = r(102)),
        (e.Cipher = r(103)),
        (e.DES = r(104)),
        (e.CBC = r(105)),
        (e.EDE = r(106))
    },
    function(t, e, r) {
      var n = r(107),
        i = r(115),
        o = r(59)
      ;(e.createCipher = e.Cipher = n.createCipher),
        (e.createCipheriv = e.Cipheriv = n.createCipheriv),
        (e.createDecipher = e.Decipher = i.createDecipher),
        (e.createDecipheriv = e.Decipheriv = i.createDecipheriv),
        (e.listCiphers = e.getCiphers = function() {
          return Object.keys(o)
        })
    },
    function(t, e, r) {
      var n = {
          ECB: r(108),
          CBC: r(109),
          CFB: r(110),
          CFB8: r(111),
          CFB1: r(112),
          OFB: r(113),
          CTR: r(57),
          GCM: r(57),
        },
        i = r(59)
      for (var o in i) i[o].module = n[i[o].mode]
      t.exports = i
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(2),
          i = r(13)
        function o(t, r) {
          var i = (function(t) {
              var e = a(t)
              return {
                blinder: e
                  .toRed(n.mont(t.modulus))
                  .redPow(new n(t.publicExponent))
                  .fromRed(),
                unblinder: e.invm(t.modulus),
              }
            })(r),
            o = r.modulus.byteLength(),
            f = (n.mont(r.modulus), new n(t).mul(i.blinder).umod(r.modulus)),
            s = f.toRed(n.mont(r.prime1)),
            c = f.toRed(n.mont(r.prime2)),
            h = r.coefficient,
            u = r.prime1,
            d = r.prime2,
            l = s.redPow(r.exponent1),
            p = c.redPow(r.exponent2)
          ;(l = l.fromRed()), (p = p.fromRed())
          var b = l
            .isub(p)
            .imul(h)
            .umod(u)
          return (
            b.imul(d),
            p.iadd(b),
            new e(
              p
                .imul(i.unblinder)
                .umod(r.modulus)
                .toArray(!1, o)
            )
          )
        }
        function a(t) {
          for (
            var e = t.modulus.byteLength(), r = new n(i(e));
            r.cmp(t.modulus) >= 0 || !r.umod(t.prime1) || !r.umod(t.prime2);

          )
            r = new n(i(e))
          return r
        }
        ;(t.exports = o), (o.getr = a)
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      var n = e
      ;(n.utils = r(7)),
        (n.common = r(18)),
        (n.sha = r(132)),
        (n.ripemd = r(136)),
        (n.hmac = r(137)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160)
    },
    function(t, e, r) {
      const n = r(2),
        i = r(5),
        o = t => new n(t.slice(2), 16),
        a = t => {
          const e =
            '0x' +
            ('0x' === t.slice(0, 2)
              ? new n(t.slice(2), 16)
              : new n(t, 10)
            ).toString('hex')
          return '0x0' === e ? '0x' : e
        },
        f = t =>
          'string' == typeof t
            ? /^0x/.test(t)
              ? t
              : '0x' + t
            : '0x' + new n(t).toString('hex'),
        s = t => o(t).toNumber(),
        c = t => (e, r) => (t => '0x' + t.toString('hex'))(o(e)[t](o(r))),
        h = c('add'),
        u = c('mul'),
        d = c('div'),
        l = c('sub')
      t.exports = {
        toString: t => o(t).toString(10),
        fromString: a,
        toNumber: s,
        fromNumber: f,
        toEther: t => s(d(t, a('10000000000'))) / 1e8,
        fromEther: t => u(f(Math.floor(1e8 * t)), a('10000000000')),
        toUint256: t => i.pad(32, t),
        add: h,
        mul: u,
        div: d,
        sub: l,
      }
    },
    function(t, e, r) {
      ;(function(e) {
        const n = r(5),
          i = r(40),
          o = r(4),
          a = (r(11), new o.ec('secp256k1')),
          { keccak256: f, keccak256s: s } = r(26),
          c = t => {
            const e = s(t.slice(2))
            let r = '0x'
            for (let n = 0; n < 40; n++)
              r +=
                parseInt(e[n + 2], 16) > 7 ? t[n + 2].toUpperCase() : t[n + 2]
            return r
          },
          h = t => {
            const r = new e(t.slice(2), 'hex'),
              n =
                '0x' +
                a
                  .keyFromPrivate(r)
                  .getPublic(!1, 'hex')
                  .slice(2),
              i = f(n)
            return { address: c('0x' + i.slice(-40)), privateKey: t }
          },
          u = ([t, e, r]) => n.flatten([e, r, t]),
          d = t => [
            n.slice(64, n.length(t), t),
            n.slice(0, 32, t),
            n.slice(32, 64, t),
          ],
          l = t => (r, o) => {
            const f = a
              .keyFromPrivate(new e(o.slice(2), 'hex'))
              .sign(new e(r.slice(2), 'hex'), { canonical: !0 })
            return u([
              i.fromString(n.fromNumber(t + f.recoveryParam)),
              n.pad(32, n.fromNat('0x' + f.r.toString(16))),
              n.pad(32, n.fromNat('0x' + f.s.toString(16))),
            ])
          },
          p = l(27)
        t.exports = {
          create: t => {
            const e = f(n.concat(n.random(32), t || n.random(32))),
              r = n.concat(n.concat(n.random(32), e), n.random(32)),
              i = f(r)
            return h(i)
          },
          toChecksum: c,
          fromPrivate: h,
          sign: p,
          makeSigner: l,
          recover: (t, r) => {
            const i = d(r),
              o = { v: n.toNumber(i[0]), r: i[1].slice(2), s: i[2].slice(2) },
              s =
                '0x' +
                a
                  .recoverPubKey(
                    new e(t.slice(2), 'hex'),
                    o,
                    o.v < 2 ? o.v : 1 - (o.v % 2)
                  )
                  .encode('hex', !1)
                  .slice(2),
              h = f(s)
            return c('0x' + h.slice(-40))
          },
          encodeSignature: u,
          decodeSignature: d,
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e) {
      var r = {}.toString
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == r.call(t)
        }
    },
    function(t, e, r) {
      'use strict'
      var n = r(1).Buffer,
        i = r(28).Transform
      function o(t) {
        i.call(this),
          (this._block = n.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1)
      }
      r(0)(o, i),
        (o.prototype._transform = function(t, e, r) {
          var n = null
          try {
            this.update(t, e)
          } catch (t) {
            n = t
          }
          r(n)
        }),
        (o.prototype._flush = function(t) {
          var e = null
          try {
            this.push(this.digest())
          } catch (t) {
            e = t
          }
          t(e)
        }),
        (o.prototype.update = function(t, e) {
          if (
            ((function(t, e) {
              if (!n.isBuffer(t) && 'string' != typeof t)
                throw new TypeError('Data must be a string or a buffer')
            })(t),
            this._finalized)
          )
            throw new Error('Digest already called')
          n.isBuffer(t) || (t = n.from(t, e))
          for (
            var r = this._block, i = 0;
            this._blockOffset + t.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = t[i++]
            this._update(), (this._blockOffset = 0)
          }
          for (; i < t.length; ) r[this._blockOffset++] = t[i++]
          for (var a = 0, f = 8 * t.length; f > 0; ++a)
            (this._length[a] += f),
              (f = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * f)
          return this
        }),
        (o.prototype._update = function() {
          throw new Error('_update is not implemented')
        }),
        (o.prototype.digest = function(t) {
          if (this._finalized) throw new Error('Digest already called')
          this._finalized = !0
          var e = this._digest()
          void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0)
          for (var r = 0; r < 4; ++r) this._length[r] = 0
          return e
        }),
        (o.prototype._digest = function() {
          throw new Error('_digest is not implemented')
        }),
        (t.exports = o)
    },
    function(t, e, r) {
      'use strict'
      ;(function(e, n) {
        var i = r(21)
        t.exports = v
        var o,
          a = r(42)
        ;(v.ReadableState = g), r(29).EventEmitter
        var f = function(t, e) {
            return t.listeners(e).length
          },
          s = r(45),
          c = r(1).Buffer,
          h = e.Uint8Array || function() {},
          u = r(16)
        u.inherits = r(0)
        var d = r(82),
          l = void 0
        l = d && d.debuglog ? d.debuglog('stream') : function() {}
        var p,
          b = r(83),
          y = r(46)
        u.inherits(v, s)
        var m = ['error', 'close', 'destroy', 'pause', 'resume']
        function g(t, e) {
          t = t || {}
          var n = e instanceof (o = o || r(12))
          ;(this.objectMode = !!t.objectMode),
            n && (this.objectMode = this.objectMode || !!t.readableObjectMode)
          var i = t.highWaterMark,
            a = t.readableHighWaterMark,
            f = this.objectMode ? 16 : 16384
          ;(this.highWaterMark =
            i || 0 === i ? i : n && (a || 0 === a) ? a : f),
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
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (p || (p = r(32).StringDecoder),
              (this.decoder = new p(t.encoding)),
              (this.encoding = t.encoding))
        }
        function v(t) {
          if (((o = o || r(12)), !(this instanceof v))) return new v(t)
          ;(this._readableState = new g(t, this)),
            (this.readable = !0),
            t &&
              ('function' == typeof t.read && (this._read = t.read),
              'function' == typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this)
        }
        function _(t, e, r, n, i) {
          var o,
            a = t._readableState
          return (
            null === e
              ? ((a.reading = !1),
                (function(t, e) {
                  if (!e.ended) {
                    if (e.decoder) {
                      var r = e.decoder.end()
                      r &&
                        r.length &&
                        (e.buffer.push(r),
                        (e.length += e.objectMode ? 1 : r.length))
                    }
                    ;(e.ended = !0), k(t)
                  }
                })(t, a))
              : (i ||
                  (o = (function(t, e) {
                    var r, n
                    return (
                      (n = e),
                      c.isBuffer(n) ||
                        n instanceof h ||
                        'string' == typeof e ||
                        void 0 === e ||
                        t.objectMode ||
                        (r = new TypeError('Invalid non-string/buffer chunk')),
                      r
                    )
                  })(a, e)),
                o
                  ? t.emit('error', o)
                  : a.objectMode || (e && e.length > 0)
                  ? ('string' == typeof e ||
                      a.objectMode ||
                      Object.getPrototypeOf(e) === c.prototype ||
                      (e = (function(t) {
                        return c.from(t)
                      })(e)),
                    n
                      ? a.endEmitted
                        ? t.emit(
                            'error',
                            new Error('stream.unshift() after end event')
                          )
                        : w(t, a, e, !0)
                      : a.ended
                      ? t.emit('error', new Error('stream.push() after EOF'))
                      : ((a.reading = !1),
                        a.decoder && !r
                          ? ((e = a.decoder.write(e)),
                            a.objectMode || 0 !== e.length
                              ? w(t, a, e, !1)
                              : A(t, a))
                          : w(t, a, e, !1)))
                  : n || (a.reading = !1)),
            (function(t) {
              return (
                !t.ended &&
                (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
              )
            })(a)
          )
        }
        function w(t, e, r, n) {
          e.flowing && 0 === e.length && !e.sync
            ? (t.emit('data', r), t.read(0))
            : ((e.length += e.objectMode ? 1 : r.length),
              n ? e.buffer.unshift(r) : e.buffer.push(r),
              e.needReadable && k(t)),
            A(t, e)
        }
        Object.defineProperty(v.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            )
          },
          set: function(t) {
            this._readableState && (this._readableState.destroyed = t)
          },
        }),
          (v.prototype.destroy = y.destroy),
          (v.prototype._undestroy = y.undestroy),
          (v.prototype._destroy = function(t, e) {
            this.push(null), e(t)
          }),
          (v.prototype.push = function(t, e) {
            var r,
              n = this._readableState
            return (
              n.objectMode
                ? (r = !0)
                : 'string' == typeof t &&
                  ((e = e || n.defaultEncoding) !== n.encoding &&
                    ((t = c.from(t, e)), (e = '')),
                  (r = !0)),
              _(this, t, e, !1, r)
            )
          }),
          (v.prototype.unshift = function(t) {
            return _(this, t, null, !0, !1)
          }),
          (v.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
          }),
          (v.prototype.setEncoding = function(t) {
            return (
              p || (p = r(32).StringDecoder),
              (this._readableState.decoder = new p(t)),
              (this._readableState.encoding = t),
              this
            )
          })
        var S = 8388608
        function M(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function(t) {
                  return (
                    t >= S
                      ? (t = S)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  )
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0))
        }
        function k(t) {
          var e = t._readableState
          ;(e.needReadable = !1),
            e.emittedReadable ||
              (l('emitReadable', e.flowing),
              (e.emittedReadable = !0),
              e.sync ? i.nextTick(E, t) : E(t))
        }
        function E(t) {
          l('emit readable'), t.emit('readable'), R(t)
        }
        function A(t, e) {
          e.readingMore || ((e.readingMore = !0), i.nextTick(x, t, e))
        }
        function x(t, e) {
          for (
            var r = e.length;
            !e.reading &&
            !e.flowing &&
            !e.ended &&
            e.length < e.highWaterMark &&
            (l('maybeReadMore read 0'), t.read(0), r !== e.length);

          )
            r = e.length
          e.readingMore = !1
        }
        function I(t) {
          l('readable nexttick read 0'), t.read(0)
        }
        function B(t, e) {
          e.reading || (l('resume read 0'), t.read(0)),
            (e.resumeScheduled = !1),
            (e.awaitDrain = 0),
            t.emit('resume'),
            R(t),
            e.flowing && !e.reading && t.read(0)
        }
        function R(t) {
          var e = t._readableState
          for (l('flow', e.flowing); e.flowing && null !== t.read(); );
        }
        function C(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (r = e.buffer.shift())
                : !t || t >= e.length
                ? ((r = e.decoder
                    ? e.buffer.join('')
                    : 1 === e.buffer.length
                    ? e.buffer.head.data
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (r = (function(t, e, r) {
                    var n
                    return (
                      t < e.head.data.length
                        ? ((n = e.head.data.slice(0, t)),
                          (e.head.data = e.head.data.slice(t)))
                        : (n =
                            t === e.head.data.length
                              ? e.shift()
                              : r
                              ? (function(t, e) {
                                  var r = e.head,
                                    n = 1,
                                    i = r.data
                                  for (t -= i.length; (r = r.next); ) {
                                    var o = r.data,
                                      a = t > o.length ? o.length : t
                                    if (
                                      (a === o.length
                                        ? (i += o)
                                        : (i += o.slice(0, t)),
                                      0 == (t -= a))
                                    ) {
                                      a === o.length
                                        ? (++n,
                                          r.next
                                            ? (e.head = r.next)
                                            : (e.head = e.tail = null))
                                        : ((e.head = r), (r.data = o.slice(a)))
                                      break
                                    }
                                    ++n
                                  }
                                  return (e.length -= n), i
                                })(t, e)
                              : (function(t, e) {
                                  var r = c.allocUnsafe(t),
                                    n = e.head,
                                    i = 1
                                  for (
                                    n.data.copy(r), t -= n.data.length;
                                    (n = n.next);

                                  ) {
                                    var o = n.data,
                                      a = t > o.length ? o.length : t
                                    if (
                                      (o.copy(r, r.length - t, 0, a),
                                      0 == (t -= a))
                                    ) {
                                      a === o.length
                                        ? (++i,
                                          n.next
                                            ? (e.head = n.next)
                                            : (e.head = e.tail = null))
                                        : ((e.head = n), (n.data = o.slice(a)))
                                      break
                                    }
                                    ++i
                                  }
                                  return (e.length -= i), r
                                })(t, e)),
                      n
                    )
                  })(t, e.buffer, e.decoder)),
              r)
          var r
        }
        function T(t) {
          var e = t._readableState
          if (e.length > 0)
            throw new Error('"endReadable()" called on non-empty stream')
          e.endEmitted || ((e.ended = !0), i.nextTick(P, e, t))
        }
        function P(t, e) {
          t.endEmitted ||
            0 !== t.length ||
            ((t.endEmitted = !0), (e.readable = !1), e.emit('end'))
        }
        function j(t, e) {
          for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r
          return -1
        }
        ;(v.prototype.read = function(t) {
          l('read', t), (t = parseInt(t, 10))
          var e = this._readableState,
            r = t
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              (e.length >= e.highWaterMark || e.ended))
          )
            return (
              l('read: emitReadable', e.length, e.ended),
              0 === e.length && e.ended ? T(this) : k(this),
              null
            )
          if (0 === (t = M(t, e)) && e.ended)
            return 0 === e.length && T(this), null
          var n,
            i = e.needReadable
          return (
            l('need readable', i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              l('length less than watermark', (i = !0)),
            e.ended || e.reading
              ? l('reading or ended', (i = !1))
              : i &&
                (l('do read'),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = M(r, e))),
            null === (n = t > 0 ? C(t, e) : null)
              ? ((e.needReadable = !0), (t = 0))
              : (e.length -= t),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), r !== t && e.ended && T(this)),
            null !== n && this.emit('data', n),
            n
          )
        }),
          (v.prototype._read = function(t) {
            this.emit('error', new Error('_read() is not implemented'))
          }),
          (v.prototype.pipe = function(t, e) {
            var r = this,
              o = this._readableState
            switch (o.pipesCount) {
              case 0:
                o.pipes = t
                break
              case 1:
                o.pipes = [o.pipes, t]
                break
              default:
                o.pipes.push(t)
            }
            ;(o.pipesCount += 1), l('pipe count=%d opts=%j', o.pipesCount, e)
            var s =
              (e && !1 === e.end) || t === n.stdout || t === n.stderr ? g : c
            function c() {
              l('onend'), t.end()
            }
            o.endEmitted ? i.nextTick(s) : r.once('end', s),
              t.on('unpipe', function e(n, i) {
                l('onunpipe'),
                  n === r &&
                    i &&
                    !1 === i.hasUnpiped &&
                    ((i.hasUnpiped = !0),
                    l('cleanup'),
                    t.removeListener('close', y),
                    t.removeListener('finish', m),
                    t.removeListener('drain', h),
                    t.removeListener('error', b),
                    t.removeListener('unpipe', e),
                    r.removeListener('end', c),
                    r.removeListener('end', g),
                    r.removeListener('data', p),
                    (u = !0),
                    !o.awaitDrain ||
                      (t._writableState && !t._writableState.needDrain) ||
                      h())
              })
            var h = (function(t) {
              return function() {
                var e = t._readableState
                l('pipeOnDrain', e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain && f(t, 'data') && ((e.flowing = !0), R(t))
              }
            })(r)
            t.on('drain', h)
            var u = !1,
              d = !1
            function p(e) {
              l('ondata'),
                (d = !1),
                !1 !== t.write(e) ||
                  d ||
                  (((1 === o.pipesCount && o.pipes === t) ||
                    (o.pipesCount > 1 && -1 !== j(o.pipes, t))) &&
                    !u &&
                    (l(
                      'false write response, pause',
                      r._readableState.awaitDrain
                    ),
                    r._readableState.awaitDrain++,
                    (d = !0)),
                  r.pause())
            }
            function b(e) {
              l('onerror', e),
                g(),
                t.removeListener('error', b),
                0 === f(t, 'error') && t.emit('error', e)
            }
            function y() {
              t.removeListener('finish', m), g()
            }
            function m() {
              l('onfinish'), t.removeListener('close', y), g()
            }
            function g() {
              l('unpipe'), r.unpipe(t)
            }
            return (
              r.on('data', p),
              (function(t, e, r) {
                if ('function' == typeof t.prependListener)
                  return t.prependListener('error', r)
                t._events && t._events.error
                  ? a(t._events.error)
                    ? t._events.error.unshift(r)
                    : (t._events.error = [r, t._events.error])
                  : t.on('error', r)
              })(t, 0, b),
              t.once('close', y),
              t.once('finish', m),
              t.emit('pipe', r),
              o.flowing || (l('pipe resume'), r.resume()),
              t
            )
          }),
          (v.prototype.unpipe = function(t) {
            var e = this._readableState,
              r = { hasUnpiped: !1 }
            if (0 === e.pipesCount) return this
            if (1 === e.pipesCount)
              return t && t !== e.pipes
                ? this
                : (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit('unpipe', this, r),
                  this)
            if (!t) {
              var n = e.pipes,
                i = e.pipesCount
              ;(e.pipes = null), (e.pipesCount = 0), (e.flowing = !1)
              for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r)
              return this
            }
            var a = j(e.pipes, t)
            return -1 === a
              ? this
              : (e.pipes.splice(a, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit('unpipe', this, r),
                this)
          }),
          (v.prototype.on = function(t, e) {
            var r = s.prototype.on.call(this, t, e)
            if ('data' === t)
              !1 !== this._readableState.flowing && this.resume()
            else if ('readable' === t) {
              var n = this._readableState
              n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.emittedReadable = !1),
                n.reading ? n.length && k(this) : i.nextTick(I, this))
            }
            return r
          }),
          (v.prototype.addListener = v.prototype.on),
          (v.prototype.resume = function() {
            var t = this._readableState
            return (
              t.flowing ||
                (l('resume'),
                (t.flowing = !0),
                (function(t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), i.nextTick(B, t, e))
                })(this, t)),
              this
            )
          }),
          (v.prototype.pause = function() {
            return (
              l('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (l('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              this
            )
          }),
          (v.prototype.wrap = function(t) {
            var e = this,
              r = this._readableState,
              n = !1
            for (var i in (t.on('end', function() {
              if ((l('wrapped end'), r.decoder && !r.ended)) {
                var t = r.decoder.end()
                t && t.length && e.push(t)
              }
              e.push(null)
            }),
            t.on('data', function(i) {
              l('wrapped data'),
                r.decoder && (i = r.decoder.write(i)),
                (r.objectMode && null == i) ||
                  ((r.objectMode || (i && i.length)) &&
                    (e.push(i) || ((n = !0), t.pause())))
            }),
            t))
              void 0 === this[i] &&
                'function' == typeof t[i] &&
                (this[i] = (function(e) {
                  return function() {
                    return t[e].apply(t, arguments)
                  }
                })(i))
            for (var o = 0; o < m.length; o++)
              t.on(m[o], this.emit.bind(this, m[o]))
            return (
              (this._read = function(e) {
                l('wrapped _read', e), n && ((n = !1), t.resume())
              }),
              this
            )
          }),
          Object.defineProperty(v.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._readableState.highWaterMark
            },
          }),
          (v._fromList = C)
      }.call(this, r(8), r(9)))
    },
    function(t, e, r) {
      t.exports = r(29).EventEmitter
    },
    function(t, e, r) {
      'use strict'
      var n = r(21)
      function i(t, e) {
        t.emit('error', e)
      }
      t.exports = {
        destroy: function(t, e) {
          var r = this,
            o = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed
          return o || a
            ? (e
                ? e(t)
                : !t ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  n.nextTick(i, this, t),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function(t) {
                !e && t
                  ? (n.nextTick(i, r, t),
                    r._writableState && (r._writableState.errorEmitted = !0))
                  : e && e(t)
              }),
              this)
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
              (this._writableState.errorEmitted = !1))
        },
      }
    },
    function(t, e, r) {
      'use strict'
      t.exports = a
      var n = r(12),
        i = r(16)
      function o(t, e) {
        var r = this._transformState
        r.transforming = !1
        var n = r.writecb
        if (!n)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          )
        ;(r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          n(t)
        var i = this._readableState
        ;(i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark)
      }
      function a(t) {
        if (!(this instanceof a)) return new a(t)
        n.call(this, t),
          (this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ('function' == typeof t.transform &&
              (this._transform = t.transform),
            'function' == typeof t.flush && (this._flush = t.flush)),
          this.on('prefinish', f)
      }
      function f() {
        var t = this
        'function' == typeof this._flush
          ? this._flush(function(e, r) {
              s(t, e, r)
            })
          : s(this, null, null)
      }
      function s(t, e, r) {
        if (e) return t.emit('error', e)
        if ((null != r && t.push(r), t._writableState.length))
          throw new Error('Calling transform done when ws.length != 0')
        if (t._transformState.transforming)
          throw new Error('Calling transform done when still transforming')
        return t.push(null)
      }
      ;(i.inherits = r(0)),
        i.inherits(a, n),
        (a.prototype.push = function(t, e) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, t, e)
          )
        }),
        (a.prototype._transform = function(t, e, r) {
          throw new Error('_transform() is not implemented')
        }),
        (a.prototype._write = function(t, e, r) {
          var n = this._transformState
          if (
            ((n.writecb = r),
            (n.writechunk = t),
            (n.writeencoding = e),
            !n.transforming)
          ) {
            var i = this._readableState
            ;(n.needTransform ||
              i.needReadable ||
              i.length < i.highWaterMark) &&
              this._read(i.highWaterMark)
          }
        }),
        (a.prototype._read = function(t) {
          var e = this._transformState
          null !== e.writechunk && e.writecb && !e.transforming
            ? ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            : (e.needTransform = !0)
        }),
        (a.prototype._destroy = function(t, e) {
          var r = this
          n.prototype._destroy.call(this, t, function(t) {
            e(t), r.emit('close')
          })
        })
    },
    function(t, e, r) {
      var n = r(0),
        i = r(14),
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
          3329325298,
        ],
        f = new Array(64)
      function s() {
        this.init(), (this._w = f), i.call(this, 64, 56)
      }
      function c(t, e, r) {
        return r ^ (t & (e ^ r))
      }
      function h(t, e, r) {
        return (t & e) | (r & (t | e))
      }
      function u(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        )
      }
      function d(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        )
      }
      function l(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3)
      }
      n(s, i),
        (s.prototype.init = function() {
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
          )
        }),
        (s.prototype._update = function(t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              f = 0 | this._d,
              s = 0 | this._e,
              p = 0 | this._f,
              b = 0 | this._g,
              y = 0 | this._h,
              m = 0;
            m < 16;
            ++m
          )
            r[m] = t.readInt32BE(4 * m)
          for (; m < 64; ++m)
            r[m] =
              0 |
              (((((e = r[m - 2]) >>> 17) | (e << 15)) ^
                ((e >>> 19) | (e << 13)) ^
                (e >>> 10)) +
                r[m - 7] +
                l(r[m - 15]) +
                r[m - 16])
          for (var g = 0; g < 64; ++g) {
            var v = (y + d(s) + c(s, p, b) + a[g] + r[g]) | 0,
              _ = (u(n) + h(n, i, o)) | 0
            ;(y = b),
              (b = p),
              (p = s),
              (s = (f + v) | 0),
              (f = o),
              (o = i),
              (i = n),
              (n = (v + _) | 0)
          }
          ;(this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (f + this._d) | 0),
            (this._e = (s + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (y + this._h) | 0)
        }),
        (s.prototype._hash = function() {
          var t = o.allocUnsafe(32)
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      var n = r(0),
        i = r(14),
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
          1246189591,
        ],
        f = new Array(160)
      function s() {
        this.init(), (this._w = f), i.call(this, 128, 112)
      }
      function c(t, e, r) {
        return r ^ (t & (e ^ r))
      }
      function h(t, e, r) {
        return (t & e) | (r & (t | e))
      }
      function u(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        )
      }
      function d(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        )
      }
      function l(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7)
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        )
      }
      function b(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6)
      }
      function y(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        )
      }
      function m(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
      }
      n(s, i),
        (s.prototype.init = function() {
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
          )
        }),
        (s.prototype._update = function(t) {
          for (
            var e = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              f = 0 | this._eh,
              s = 0 | this._fh,
              g = 0 | this._gh,
              v = 0 | this._hh,
              _ = 0 | this._al,
              w = 0 | this._bl,
              S = 0 | this._cl,
              M = 0 | this._dl,
              k = 0 | this._el,
              E = 0 | this._fl,
              A = 0 | this._gl,
              x = 0 | this._hl,
              I = 0;
            I < 32;
            I += 2
          )
            (e[I] = t.readInt32BE(4 * I)), (e[I + 1] = t.readInt32BE(4 * I + 4))
          for (; I < 160; I += 2) {
            var B = e[I - 30],
              R = e[I - 30 + 1],
              C = l(B, R),
              T = p(R, B),
              P = b((B = e[I - 4]), (R = e[I - 4 + 1])),
              j = y(R, B),
              O = e[I - 14],
              N = e[I - 14 + 1],
              D = e[I - 32],
              U = e[I - 32 + 1],
              L = (T + N) | 0,
              z = (C + O + m(L, T)) | 0
            ;(z =
              ((z = (z + P + m((L = (L + j) | 0), j)) | 0) +
                D +
                m((L = (L + U) | 0), U)) |
              0),
              (e[I] = z),
              (e[I + 1] = L)
          }
          for (var q = 0; q < 160; q += 2) {
            ;(z = e[q]), (L = e[q + 1])
            var F = h(r, n, i),
              K = h(_, w, S),
              W = u(r, _),
              H = u(_, r),
              Y = d(f, k),
              V = d(k, f),
              X = a[q],
              J = a[q + 1],
              G = c(f, s, g),
              Z = c(k, E, A),
              $ = (x + V) | 0,
              Q = (v + Y + m($, x)) | 0
            Q =
              ((Q =
                ((Q = (Q + G + m(($ = ($ + Z) | 0), Z)) | 0) +
                  X +
                  m(($ = ($ + J) | 0), J)) |
                0) +
                z +
                m(($ = ($ + L) | 0), L)) |
              0
            var tt = (H + K) | 0,
              et = (W + F + m(tt, H)) | 0
            ;(v = g),
              (x = A),
              (g = s),
              (A = E),
              (s = f),
              (E = k),
              (f = (o + Q + m((k = (M + $) | 0), M)) | 0),
              (o = i),
              (M = S),
              (i = n),
              (S = w),
              (n = r),
              (w = _),
              (r = (Q + et + m((_ = ($ + tt) | 0), $)) | 0)
          }
          ;(this._al = (this._al + _) | 0),
            (this._bl = (this._bl + w) | 0),
            (this._cl = (this._cl + S) | 0),
            (this._dl = (this._dl + M) | 0),
            (this._el = (this._el + k) | 0),
            (this._fl = (this._fl + E) | 0),
            (this._gl = (this._gl + A) | 0),
            (this._hl = (this._hl + x) | 0),
            (this._ah = (this._ah + r + m(this._al, _)) | 0),
            (this._bh = (this._bh + n + m(this._bl, w)) | 0),
            (this._ch = (this._ch + i + m(this._cl, S)) | 0),
            (this._dh = (this._dh + o + m(this._dl, M)) | 0),
            (this._eh = (this._eh + f + m(this._el, k)) | 0),
            (this._fh = (this._fh + s + m(this._fl, E)) | 0),
            (this._gh = (this._gh + g + m(this._gl, A)) | 0),
            (this._hh = (this._hh + v + m(this._hl, x)) | 0)
        }),
        (s.prototype._hash = function() {
          var t = o.allocUnsafe(64)
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      'use strict'
      var n = r(0),
        i = r(97),
        o = r(10),
        a = r(1).Buffer,
        f = r(51),
        s = r(33),
        c = r(34),
        h = a.alloc(128)
      function u(t, e) {
        o.call(this, 'digest'), 'string' == typeof e && (e = a.from(e))
        var r = 'sha512' === t || 'sha384' === t ? 128 : 64
        ;(this._alg = t),
          (this._key = e),
          e.length > r
            ? (e = ('rmd160' === t ? new s() : c(t)).update(e).digest())
            : e.length < r && (e = a.concat([e, h], r))
        for (
          var n = (this._ipad = a.allocUnsafe(r)),
            i = (this._opad = a.allocUnsafe(r)),
            f = 0;
          f < r;
          f++
        )
          (n[f] = 54 ^ e[f]), (i[f] = 92 ^ e[f])
        ;(this._hash = 'rmd160' === t ? new s() : c(t)), this._hash.update(n)
      }
      n(u, o),
        (u.prototype._update = function(t) {
          this._hash.update(t)
        }),
        (u.prototype._final = function() {
          var t = this._hash.digest()
          return ('rmd160' === this._alg ? new s() : c(this._alg))
            .update(this._opad)
            .update(t)
            .digest()
        }),
        (t.exports = function(t, e) {
          return 'rmd160' === (t = t.toLowerCase()) || 'ripemd160' === t
            ? new u('rmd160', e)
            : 'md5' === t
            ? new i(f, e)
            : new u(t, e)
        })
    },
    function(t, e, r) {
      var n = r(27)
      t.exports = function(t) {
        return new n().update(t).digest()
      }
    },
    function(t) {
      t.exports = {
        sha224WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha224',
          id: '302d300d06096086480165030402040500041c',
        },
        'RSA-SHA224': {
          sign: 'ecdsa/rsa',
          hash: 'sha224',
          id: '302d300d06096086480165030402040500041c',
        },
        sha256WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha256',
          id: '3031300d060960864801650304020105000420',
        },
        'RSA-SHA256': {
          sign: 'ecdsa/rsa',
          hash: 'sha256',
          id: '3031300d060960864801650304020105000420',
        },
        sha384WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha384',
          id: '3041300d060960864801650304020205000430',
        },
        'RSA-SHA384': {
          sign: 'ecdsa/rsa',
          hash: 'sha384',
          id: '3041300d060960864801650304020205000430',
        },
        sha512WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha512',
          id: '3051300d060960864801650304020305000440',
        },
        'RSA-SHA512': {
          sign: 'ecdsa/rsa',
          hash: 'sha512',
          id: '3051300d060960864801650304020305000440',
        },
        'RSA-SHA1': {
          sign: 'rsa',
          hash: 'sha1',
          id: '3021300906052b0e03021a05000414',
        },
        'ecdsa-with-SHA1': { sign: 'ecdsa', hash: 'sha1', id: '' },
        sha256: { sign: 'ecdsa', hash: 'sha256', id: '' },
        sha224: { sign: 'ecdsa', hash: 'sha224', id: '' },
        sha384: { sign: 'ecdsa', hash: 'sha384', id: '' },
        sha512: { sign: 'ecdsa', hash: 'sha512', id: '' },
        'DSA-SHA': { sign: 'dsa', hash: 'sha1', id: '' },
        'DSA-SHA1': { sign: 'dsa', hash: 'sha1', id: '' },
        DSA: { sign: 'dsa', hash: 'sha1', id: '' },
        'DSA-WITH-SHA224': { sign: 'dsa', hash: 'sha224', id: '' },
        'DSA-SHA224': { sign: 'dsa', hash: 'sha224', id: '' },
        'DSA-WITH-SHA256': { sign: 'dsa', hash: 'sha256', id: '' },
        'DSA-SHA256': { sign: 'dsa', hash: 'sha256', id: '' },
        'DSA-WITH-SHA384': { sign: 'dsa', hash: 'sha384', id: '' },
        'DSA-SHA384': { sign: 'dsa', hash: 'sha384', id: '' },
        'DSA-WITH-SHA512': { sign: 'dsa', hash: 'sha512', id: '' },
        'DSA-SHA512': { sign: 'dsa', hash: 'sha512', id: '' },
        'DSA-RIPEMD160': { sign: 'dsa', hash: 'rmd160', id: '' },
        ripemd160WithRSA: {
          sign: 'rsa',
          hash: 'rmd160',
          id: '3021300906052b2403020105000414',
        },
        'RSA-RIPEMD160': {
          sign: 'rsa',
          hash: 'rmd160',
          id: '3021300906052b2403020105000414',
        },
        md5WithRSAEncryption: {
          sign: 'rsa',
          hash: 'md5',
          id: '3020300c06082a864886f70d020505000410',
        },
        'RSA-MD5': {
          sign: 'rsa',
          hash: 'md5',
          id: '3020300c06082a864886f70d020505000410',
        },
      }
    },
    function(t, e, r) {
      ;(e.pbkdf2 = r(99)), (e.pbkdf2Sync = r(56))
    },
    function(t, e, r) {
      ;(function(e) {
        var r = Math.pow(2, 30) - 1
        function n(t, r) {
          if ('string' != typeof t && !e.isBuffer(t))
            throw new TypeError(r + ' must be a buffer or string')
        }
        t.exports = function(t, e, i, o) {
          if ((n(t, 'Password'), n(e, 'Salt'), 'number' != typeof i))
            throw new TypeError('Iterations not a number')
          if (i < 0) throw new TypeError('Bad iterations')
          if ('number' != typeof o)
            throw new TypeError('Key length not a number')
          if (o < 0 || o > r || o != o) throw new TypeError('Bad key length')
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        var r
        ;(r = e.browser
          ? 'utf-8'
          : parseInt(e.version.split('.')[0].slice(1), 10) >= 6
          ? 'utf-8'
          : 'binary'),
          (t.exports = r)
      }.call(this, r(9)))
    },
    function(t, e, r) {
      var n = r(51),
        i = r(33),
        o = r(34),
        a = r(54),
        f = r(55),
        s = r(1).Buffer,
        c = s.alloc(128),
        h = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20,
        }
      function u(t, e, r) {
        var a = (function(t) {
            return 'rmd160' === t || 'ripemd160' === t
              ? function(t) {
                  return new i().update(t).digest()
                }
              : 'md5' === t
              ? n
              : function(e) {
                  return o(t)
                    .update(e)
                    .digest()
                }
          })(t),
          f = 'sha512' === t || 'sha384' === t ? 128 : 64
        e.length > f ? (e = a(e)) : e.length < f && (e = s.concat([e, c], f))
        for (
          var u = s.allocUnsafe(f + h[t]), d = s.allocUnsafe(f + h[t]), l = 0;
          l < f;
          l++
        )
          (u[l] = 54 ^ e[l]), (d[l] = 92 ^ e[l])
        var p = s.allocUnsafe(f + r + 4)
        u.copy(p, 0, 0, f),
          (this.ipad1 = p),
          (this.ipad2 = u),
          (this.opad = d),
          (this.alg = t),
          (this.blocksize = f),
          (this.hash = a),
          (this.size = h[t])
      }
      ;(u.prototype.run = function(t, e) {
        return (
          t.copy(e, this.blocksize),
          this.hash(e).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        )
      }),
        (t.exports = function(t, e, r, n, i) {
          a(t, e, r, n),
            s.isBuffer(t) || (t = s.from(t, f)),
            s.isBuffer(e) || (e = s.from(e, f))
          var o = new u((i = i || 'sha1'), t, e.length),
            c = s.allocUnsafe(n),
            d = s.allocUnsafe(e.length + 4)
          e.copy(d, 0, 0, e.length)
          for (var l = 0, p = h[i], b = Math.ceil(n / p), y = 1; y <= b; y++) {
            d.writeUInt32BE(y, e.length)
            for (var m = o.run(d, o.ipad1), g = m, v = 1; v < r; v++) {
              g = o.run(g, o.ipad2)
              for (var _ = 0; _ < p; _++) m[_] ^= g[_]
            }
            m.copy(c, l), (l += p)
          }
          return c
        })
    },
    function(t, e, r) {
      var n = r(17),
        i = r(1).Buffer,
        o = r(58)
      function a(t) {
        var e = t._cipher.encryptBlockRaw(t._prev)
        return o(t._prev), e
      }
      e.encrypt = function(t, e) {
        var r = Math.ceil(e.length / 16),
          o = t._cache.length
        t._cache = i.concat([t._cache, i.allocUnsafe(16 * r)])
        for (var f = 0; f < r; f++) {
          var s = a(t),
            c = o + 16 * f
          t._cache.writeUInt32BE(s[0], c + 0),
            t._cache.writeUInt32BE(s[1], c + 4),
            t._cache.writeUInt32BE(s[2], c + 8),
            t._cache.writeUInt32BE(s[3], c + 12)
        }
        var h = t._cache.slice(0, e.length)
        return (t._cache = t._cache.slice(e.length)), n(e, h)
      }
    },
    function(t, e) {
      t.exports = function(t) {
        for (var e, r = t.length; r--; ) {
          if (255 !== (e = t.readUInt8(r))) {
            e++, t.writeUInt8(e, r)
            break
          }
          t.writeUInt8(0, r)
        }
      }
    },
    function(t) {
      t.exports = {
        'aes-128-ecb': {
          cipher: 'AES',
          key: 128,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-192-ecb': {
          cipher: 'AES',
          key: 192,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-256-ecb': {
          cipher: 'AES',
          key: 256,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-128-cbc': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        'aes-192-cbc': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        'aes-256-cbc': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        aes128: { cipher: 'AES', key: 128, iv: 16, mode: 'CBC', type: 'block' },
        aes192: { cipher: 'AES', key: 192, iv: 16, mode: 'CBC', type: 'block' },
        aes256: { cipher: 'AES', key: 256, iv: 16, mode: 'CBC', type: 'block' },
        'aes-128-cfb': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-192-cfb': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-256-cfb': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-128-cfb8': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-192-cfb8': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-256-cfb8': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-128-cfb1': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-192-cfb1': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-256-cfb1': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-128-ofb': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-192-ofb': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-256-ofb': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-128-ctr': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-192-ctr': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-256-ctr': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-128-gcm': {
          cipher: 'AES',
          key: 128,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
        'aes-192-gcm': {
          cipher: 'AES',
          key: 192,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
        'aes-256-gcm': {
          cipher: 'AES',
          key: 256,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
      }
    },
    function(t, e, r) {
      var n = r(22),
        i = r(1).Buffer,
        o = r(10),
        a = r(0),
        f = r(114),
        s = r(17),
        c = r(58)
      function h(t, e, r, a) {
        o.call(this)
        var s = i.alloc(4, 0)
        this._cipher = new n.AES(e)
        var h = this._cipher.encryptBlock(s)
        ;(this._ghash = new f(h)),
          (r = (function(t, e, r) {
            if (12 === e.length)
              return (
                (t._finID = i.concat([e, i.from([0, 0, 0, 1])])),
                i.concat([e, i.from([0, 0, 0, 2])])
              )
            var n = new f(r),
              o = e.length,
              a = o % 16
            n.update(e),
              a && ((a = 16 - a), n.update(i.alloc(a, 0))),
              n.update(i.alloc(8, 0))
            var s = 8 * o,
              h = i.alloc(8)
            h.writeUIntBE(s, 0, 8), n.update(h), (t._finID = n.state)
            var u = i.from(t._finID)
            return c(u), u
          })(this, r, h)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = a),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = t),
          (this._authTag = null),
          (this._called = !1)
      }
      a(h, o),
        (h.prototype._update = function(t) {
          if (!this._called && this._alen) {
            var e = 16 - (this._alen % 16)
            e < 16 && ((e = i.alloc(e, 0)), this._ghash.update(e))
          }
          this._called = !0
          var r = this._mode.encrypt(this, t)
          return (
            this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            (this._len += t.length),
            r
          )
        }),
        (h.prototype._final = function() {
          if (this._decrypt && !this._authTag)
            throw new Error('Unsupported state or unable to authenticate data')
          var t = s(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          )
          if (
            this._decrypt &&
            (function(t, e) {
              var r = 0
              t.length !== e.length && r++
              for (var n = Math.min(t.length, e.length), i = 0; i < n; ++i)
                r += t[i] ^ e[i]
              return r
            })(t, this._authTag)
          )
            throw new Error('Unsupported state or unable to authenticate data')
          ;(this._authTag = t), this._cipher.scrub()
        }),
        (h.prototype.getAuthTag = function() {
          if (this._decrypt || !i.isBuffer(this._authTag))
            throw new Error('Attempting to get auth tag in unsupported state')
          return this._authTag
        }),
        (h.prototype.setAuthTag = function(t) {
          if (!this._decrypt)
            throw new Error('Attempting to set auth tag in unsupported state')
          this._authTag = t
        }),
        (h.prototype.setAAD = function(t) {
          if (this._called)
            throw new Error('Attempting to set AAD in unsupported state')
          this._ghash.update(t), (this._alen += t.length)
        }),
        (t.exports = h)
    },
    function(t, e, r) {
      var n = r(22),
        i = r(1).Buffer,
        o = r(10)
      function a(t, e, r, a) {
        o.call(this),
          (this._cipher = new n.AES(e)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = a),
          (this._mode = t)
      }
      r(0)(a, o),
        (a.prototype._update = function(t) {
          return this._mode.encrypt(this, t, this._decrypt)
        }),
        (a.prototype._final = function() {
          this._cipher.scrub()
        }),
        (t.exports = a)
    },
    function(t, e, r) {
      var n = r(13)
      ;(t.exports = g), (g.simpleSieve = y), (g.fermatTest = m)
      var i = r(2),
        o = new i(24),
        a = new (r(63))(),
        f = new i(1),
        s = new i(2),
        c = new i(5),
        h = (new i(16), new i(8), new i(10)),
        u = new i(3),
        d = (new i(7), new i(11)),
        l = new i(4),
        p = (new i(12), null)
      function b() {
        if (null !== p) return p
        var t = []
        t[0] = 2
        for (var e = 1, r = 3; r < 1048576; r += 2) {
          for (
            var n = Math.ceil(Math.sqrt(r)), i = 0;
            i < e && t[i] <= n && r % t[i] != 0;
            i++
          );
          ;(e !== i && t[i] <= n) || (t[e++] = r)
        }
        return (p = t), t
      }
      function y(t) {
        for (var e = b(), r = 0; r < e.length; r++)
          if (0 === t.modn(e[r])) return 0 === t.cmpn(e[r])
        return !0
      }
      function m(t) {
        var e = i.mont(t)
        return (
          0 ===
          s
            .toRed(e)
            .redPow(t.subn(1))
            .fromRed()
            .cmpn(1)
        )
      }
      function g(t, e) {
        if (t < 16) return new i(2 === e || 5 === e ? [140, 123] : [140, 39])
        var r, p
        for (e = new i(e); ; ) {
          for (r = new i(n(Math.ceil(t / 8))); r.bitLength() > t; ) r.ishrn(1)
          if ((r.isEven() && r.iadd(f), r.testn(1) || r.iadd(s), e.cmp(s))) {
            if (!e.cmp(c)) for (; r.mod(h).cmp(u); ) r.iadd(l)
          } else for (; r.mod(o).cmp(d); ) r.iadd(l)
          if (
            y((p = r.shrn(1))) &&
            y(r) &&
            m(p) &&
            m(r) &&
            a.test(p) &&
            a.test(r)
          )
            return r
        }
      }
    },
    function(t, e, r) {
      var n = r(2),
        i = r(64)
      function o(t) {
        this.rand = t || new i.Rand()
      }
      ;(t.exports = o),
        (o.create = function(t) {
          return new o(t)
        }),
        (o.prototype._randbelow = function(t) {
          var e = t.bitLength(),
            r = Math.ceil(e / 8)
          do {
            var i = new n(this.rand.generate(r))
          } while (i.cmp(t) >= 0)
          return i
        }),
        (o.prototype._randrange = function(t, e) {
          var r = e.sub(t)
          return t.add(this._randbelow(r))
        }),
        (o.prototype.test = function(t, e, r) {
          var i = t.bitLength(),
            o = n.mont(t),
            a = new n(1).toRed(o)
          e || (e = Math.max(1, (i / 48) | 0))
          for (var f = t.subn(1), s = 0; !f.testn(s); s++);
          for (var c = t.shrn(s), h = f.toRed(o); e > 0; e--) {
            var u = this._randrange(new n(2), f)
            r && r(u)
            var d = u.toRed(o).redPow(c)
            if (0 !== d.cmp(a) && 0 !== d.cmp(h)) {
              for (var l = 1; l < s; l++) {
                if (0 === (d = d.redSqr()).cmp(a)) return !1
                if (0 === d.cmp(h)) break
              }
              if (l === s) return !1
            }
          }
          return !0
        }),
        (o.prototype.getDivisor = function(t, e) {
          var r = t.bitLength(),
            i = n.mont(t),
            o = new n(1).toRed(i)
          e || (e = Math.max(1, (r / 48) | 0))
          for (var a = t.subn(1), f = 0; !a.testn(f); f++);
          for (var s = t.shrn(f), c = a.toRed(i); e > 0; e--) {
            var h = this._randrange(new n(2), a),
              u = t.gcd(h)
            if (0 !== u.cmpn(1)) return u
            var d = h.toRed(i).redPow(s)
            if (0 !== d.cmp(o) && 0 !== d.cmp(c)) {
              for (var l = 1; l < f; l++) {
                if (0 === (d = d.redSqr()).cmp(o))
                  return d
                    .fromRed()
                    .subn(1)
                    .gcd(t)
                if (0 === d.cmp(c)) break
              }
              if (l === f)
                return (d = d.redSqr())
                  .fromRed()
                  .subn(1)
                  .gcd(t)
            }
          }
          return !1
        })
    },
    function(t, e, r) {
      var n
      function i(t) {
        this.rand = t
      }
      if (
        ((t.exports = function(t) {
          return n || (n = new i(null)), n.generate(t)
        }),
        (t.exports.Rand = i),
        (i.prototype.generate = function(t) {
          return this._rand(t)
        }),
        (i.prototype._rand = function(t) {
          if (this.rand.getBytes) return this.rand.getBytes(t)
          for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
            e[r] = this.rand.getByte()
          return e
        }),
        'object' == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (i.prototype._rand = function(t) {
              var e = new Uint8Array(t)
              return self.crypto.getRandomValues(e), e
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (i.prototype._rand = function(t) {
              var e = new Uint8Array(t)
              return self.msCrypto.getRandomValues(e), e
            })
          : 'object' == typeof window &&
            (i.prototype._rand = function() {
              throw new Error('Not implemented yet')
            })
      else
        try {
          var o = r(120)
          if ('function' != typeof o.randomBytes)
            throw new Error('Not supported')
          i.prototype._rand = function(t) {
            return o.randomBytes(t)
          }
        } catch (t) {}
    },
    function(t, e, r) {
      'use strict'
      var n = e
      function i(t) {
        return 1 === t.length ? '0' + t : t
      }
      function o(t) {
        for (var e = '', r = 0; r < t.length; r++) e += i(t[r].toString(16))
        return e
      }
      ;(n.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice()
        if (!t) return []
        var r = []
        if ('string' != typeof t) {
          for (var n = 0; n < t.length; n++) r[n] = 0 | t[n]
          return r
        }
        if ('hex' === e)
          for (
            (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
              (t = '0' + t),
              n = 0;
            n < t.length;
            n += 2
          )
            r.push(parseInt(t[n] + t[n + 1], 16))
        else
          for (n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n),
              o = i >> 8,
              a = 255 & i
            o ? r.push(o, a) : r.push(a)
          }
        return r
      }),
        (n.zero2 = i),
        (n.toHex = o),
        (n.encode = function(t, e) {
          return 'hex' === e ? o(t) : t
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7).rotr32
      function i(t, e, r) {
        return (t & e) ^ (~t & r)
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r)
      }
      function a(t, e, r) {
        return t ^ e ^ r
      }
      ;(e.ft_1 = function(t, e, r, n) {
        return 0 === t
          ? i(e, r, n)
          : 1 === t || 3 === t
          ? a(e, r, n)
          : 2 === t
          ? o(e, r, n)
          : void 0
      }),
        (e.ch32 = i),
        (e.maj32 = o),
        (e.p32 = a),
        (e.s0_256 = function(t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22)
        }),
        (e.s1_256 = function(t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25)
        }),
        (e.g0_256 = function(t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3)
        }),
        (e.g1_256 = function(t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(18),
        o = r(66),
        a = r(6),
        f = n.sum32,
        s = n.sum32_4,
        c = n.sum32_5,
        h = o.ch32,
        u = o.maj32,
        d = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        y = i.BlockHash,
        m = [
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
          3329325298,
        ]
      function g() {
        if (!(this instanceof g)) return new g()
        y.call(this),
          (this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ]),
          (this.k = m),
          (this.W = new Array(64))
      }
      n.inherits(g, y),
        (t.exports = g),
        (g.blockSize = 512),
        (g.outSize = 256),
        (g.hmacStrength = 192),
        (g.padLength = 64),
        (g.prototype._update = function(t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
          for (; n < r.length; n++)
            r[n] = s(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16])
          var i = this.h[0],
            o = this.h[1],
            y = this.h[2],
            m = this.h[3],
            g = this.h[4],
            v = this.h[5],
            _ = this.h[6],
            w = this.h[7]
          for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var S = c(w, l(g), h(g, v, _), this.k[n], r[n]),
              M = f(d(i), u(i, o, y))
            ;(w = _),
              (_ = v),
              (v = g),
              (g = f(m, S)),
              (m = y),
              (y = o),
              (o = i),
              (i = f(S, M))
          }
          ;(this.h[0] = f(this.h[0], i)),
            (this.h[1] = f(this.h[1], o)),
            (this.h[2] = f(this.h[2], y)),
            (this.h[3] = f(this.h[3], m)),
            (this.h[4] = f(this.h[4], g)),
            (this.h[5] = f(this.h[5], v)),
            (this.h[6] = f(this.h[6], _)),
            (this.h[7] = f(this.h[7], w))
        }),
        (g.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(18),
        o = r(6),
        a = n.rotr64_hi,
        f = n.rotr64_lo,
        s = n.shr64_hi,
        c = n.shr64_lo,
        h = n.sum64,
        u = n.sum64_hi,
        d = n.sum64_lo,
        l = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        y = n.sum64_5_lo,
        m = i.BlockHash,
        g = [
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
          1246189591,
        ]
      function v() {
        if (!(this instanceof v)) return new v()
        m.call(this),
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
            327033209,
          ]),
          (this.k = g),
          (this.W = new Array(160))
      }
      function _(t, e, r, n, i) {
        var o = (t & r) ^ (~t & i)
        return o < 0 && (o += 4294967296), o
      }
      function w(t, e, r, n, i, o) {
        var a = (e & n) ^ (~e & o)
        return a < 0 && (a += 4294967296), a
      }
      function S(t, e, r, n, i) {
        var o = (t & r) ^ (t & i) ^ (r & i)
        return o < 0 && (o += 4294967296), o
      }
      function M(t, e, r, n, i, o) {
        var a = (e & n) ^ (e & o) ^ (n & o)
        return a < 0 && (a += 4294967296), a
      }
      function k(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function E(t, e) {
        var r = f(t, e, 28) ^ f(e, t, 2) ^ f(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function A(t, e) {
        var r = f(t, e, 14) ^ f(t, e, 18) ^ f(e, t, 9)
        return r < 0 && (r += 4294967296), r
      }
      function x(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ s(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function I(t, e) {
        var r = f(t, e, 1) ^ f(t, e, 8) ^ c(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function B(t, e) {
        var r = f(t, e, 19) ^ f(e, t, 29) ^ c(t, e, 6)
        return r < 0 && (r += 4294967296), r
      }
      n.inherits(v, m),
        (t.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function(t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n]
          for (; n < r.length; n += 2) {
            var i = ((y = r[n - 4]),
              (m = r[n - 3]),
              (g = void 0),
              (g = a(y, m, 19) ^ a(m, y, 29) ^ s(y, m, 6)) < 0 &&
                (g += 4294967296),
              g),
              o = B(r[n - 4], r[n - 3]),
              f = r[n - 14],
              c = r[n - 13],
              h = x(r[n - 30], r[n - 29]),
              u = I(r[n - 30], r[n - 29]),
              d = r[n - 32],
              b = r[n - 31]
            ;(r[n] = l(i, o, f, c, h, u, d, b)),
              (r[n + 1] = p(i, o, f, c, h, u, d, b))
          }
          var y, m, g
        }),
        (v.prototype._update = function(t, e) {
          this._prepareBlock(t, e)
          var r,
            n,
            i,
            f = this.W,
            s = this.h[0],
            c = this.h[1],
            l = this.h[2],
            p = this.h[3],
            m = this.h[4],
            g = this.h[5],
            v = this.h[6],
            x = this.h[7],
            I = this.h[8],
            B = this.h[9],
            R = this.h[10],
            C = this.h[11],
            T = this.h[12],
            P = this.h[13],
            j = this.h[14],
            O = this.h[15]
          o(this.k.length === f.length)
          for (var N = 0; N < f.length; N += 2) {
            var D = j,
              U = O,
              L = ((i = void 0),
              (i = a((r = I), (n = B), 14) ^ a(r, n, 18) ^ a(n, r, 9)) < 0 &&
                (i += 4294967296),
              i),
              z = A(I, B),
              q = _(I, 0, R, 0, T),
              F = w(0, B, 0, C, 0, P),
              K = this.k[N],
              W = this.k[N + 1],
              H = f[N],
              Y = f[N + 1],
              V = b(D, U, L, z, q, F, K, W, H, Y),
              X = y(D, U, L, z, q, F, K, W, H, Y)
            ;(D = k(s, c)),
              (U = E(s, c)),
              (L = S(s, 0, l, 0, m)),
              (z = M(0, c, 0, p, 0, g))
            var J = u(D, U, L, z),
              G = d(D, U, L, z)
            ;(j = T),
              (O = P),
              (T = R),
              (P = C),
              (R = I),
              (C = B),
              (I = u(v, x, V, X)),
              (B = d(x, x, V, X)),
              (v = m),
              (x = g),
              (m = l),
              (g = p),
              (l = s),
              (p = c),
              (s = u(V, X, J, G)),
              (c = d(V, X, J, G))
          }
          h(this.h, 0, s, c),
            h(this.h, 2, l, p),
            h(this.h, 4, m, g),
            h(this.h, 6, v, x),
            h(this.h, 8, I, B),
            h(this.h, 10, R, C),
            h(this.h, 12, T, P),
            h(this.h, 14, j, O)
        }),
        (v.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      var n = r(0),
        i = r(20).Reporter,
        o = r(3).Buffer
      function a(t, e) {
        i.call(this, e),
          o.isBuffer(t)
            ? ((this.base = t), (this.offset = 0), (this.length = t.length))
            : this.error('Input not Buffer')
      }
      function f(t, e) {
        if (Array.isArray(t))
          (this.length = 0),
            (this.value = t.map(function(t) {
              return (
                t instanceof f || (t = new f(t, e)),
                (this.length += t.length),
                t
              )
            }, this))
        else if ('number' == typeof t) {
          if (!(0 <= t && t <= 255))
            return e.error('non-byte EncoderBuffer value')
          ;(this.value = t), (this.length = 1)
        } else if ('string' == typeof t)
          (this.value = t), (this.length = o.byteLength(t))
        else {
          if (!o.isBuffer(t)) return e.error('Unsupported type: ' + typeof t)
          ;(this.value = t), (this.length = t.length)
        }
      }
      n(a, i),
        (e.DecoderBuffer = a),
        (a.prototype.save = function() {
          return { offset: this.offset, reporter: i.prototype.save.call(this) }
        }),
        (a.prototype.restore = function(t) {
          var e = new a(this.base)
          return (
            (e.offset = t.offset),
            (e.length = this.offset),
            (this.offset = t.offset),
            i.prototype.restore.call(this, t.reporter),
            e
          )
        }),
        (a.prototype.isEmpty = function() {
          return this.offset === this.length
        }),
        (a.prototype.readUInt8 = function(t) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(t || 'DecoderBuffer overrun')
        }),
        (a.prototype.skip = function(t, e) {
          if (!(this.offset + t <= this.length))
            return this.error(e || 'DecoderBuffer overrun')
          var r = new a(this.base)
          return (
            (r._reporterState = this._reporterState),
            (r.offset = this.offset),
            (r.length = this.offset + t),
            (this.offset += t),
            r
          )
        }),
        (a.prototype.raw = function(t) {
          return this.base.slice(t ? t.offset : this.offset, this.length)
        }),
        (e.EncoderBuffer = f),
        (f.prototype.join = function(t, e) {
          return (
            t || (t = new o(this.length)),
            e || (e = 0),
            0 === this.length
              ? t
              : (Array.isArray(this.value)
                  ? this.value.forEach(function(r) {
                      r.join(t, e), (e += r.length)
                    })
                  : ('number' == typeof this.value
                      ? (t[e] = this.value)
                      : 'string' == typeof this.value
                      ? t.write(this.value, e)
                      : o.isBuffer(this.value) && this.value.copy(t, e),
                    (e += this.length)),
                t)
          )
        })
    },
    function(t, e, r) {
      var n = e
      ;(n._reverse = function(t) {
        var e = {}
        return (
          Object.keys(t).forEach(function(r) {
            ;(0 | r) == r && (r |= 0)
            var n = t[r]
            e[n] = r
          }),
          e
        )
      }),
        (n.der = r(152))
    },
    function(t, e, r) {
      var n = r(0),
        i = r(19),
        o = i.base,
        a = i.bignum,
        f = i.constants.der
      function s(t) {
        ;(this.enc = 'der'),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new c()),
          this.tree._init(t.body)
      }
      function c(t) {
        o.Node.call(this, 'der', t)
      }
      function h(t, e) {
        var r = t.readUInt8(e)
        if (t.isError(r)) return r
        var n = f.tagClass[r >> 6],
          i = 0 == (32 & r)
        if (31 == (31 & r)) {
          var o = r
          for (r = 0; 128 == (128 & o); ) {
            if (((o = t.readUInt8(e)), t.isError(o))) return o
            ;(r <<= 7), (r |= 127 & o)
          }
        } else r &= 31
        return { cls: n, primitive: i, tag: r, tagStr: f.tag[r] }
      }
      function u(t, e, r) {
        var n = t.readUInt8(r)
        if (t.isError(n)) return n
        if (!e && 128 === n) return null
        if (0 == (128 & n)) return n
        var i = 127 & n
        if (i > 4) return t.error('length octect is too long')
        n = 0
        for (var o = 0; o < i; o++) {
          n <<= 8
          var a = t.readUInt8(r)
          if (t.isError(a)) return a
          n |= a
        }
        return n
      }
      ;(t.exports = s),
        (s.prototype.decode = function(t, e) {
          return (
            t instanceof o.DecoderBuffer || (t = new o.DecoderBuffer(t, e)),
            this.tree._decode(t, e)
          )
        }),
        n(c, o.Node),
        (c.prototype._peekTag = function(t, e, r) {
          if (t.isEmpty()) return !1
          var n = t.save(),
            i = h(t, 'Failed to peek tag: "' + e + '"')
          return t.isError(i)
            ? i
            : (t.restore(n),
              i.tag === e || i.tagStr === e || i.tagStr + 'of' === e || r)
        }),
        (c.prototype._decodeTag = function(t, e, r) {
          var n = h(t, 'Failed to decode tag of "' + e + '"')
          if (t.isError(n)) return n
          var i = u(t, n.primitive, 'Failed to get length of "' + e + '"')
          if (t.isError(i)) return i
          if (!r && n.tag !== e && n.tagStr !== e && n.tagStr + 'of' !== e)
            return t.error('Failed to match tag: "' + e + '"')
          if (n.primitive || null !== i)
            return t.skip(i, 'Failed to match body of: "' + e + '"')
          var o = t.save(),
            a = this._skipUntilEnd(
              t,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            )
          return t.isError(a)
            ? a
            : ((i = t.offset - o.offset),
              t.restore(o),
              t.skip(i, 'Failed to match body of: "' + e + '"'))
        }),
        (c.prototype._skipUntilEnd = function(t, e) {
          for (;;) {
            var r = h(t, e)
            if (t.isError(r)) return r
            var n,
              i = u(t, r.primitive, e)
            if (t.isError(i)) return i
            if (
              ((n =
                r.primitive || null !== i
                  ? t.skip(i)
                  : this._skipUntilEnd(t, e)),
              t.isError(n))
            )
              return n
            if ('end' === r.tagStr) break
          }
        }),
        (c.prototype._decodeList = function(t, e, r, n) {
          for (var i = []; !t.isEmpty(); ) {
            var o = this._peekTag(t, 'end')
            if (t.isError(o)) return o
            var a = r.decode(t, 'der', n)
            if (t.isError(a) && o) break
            i.push(a)
          }
          return i
        }),
        (c.prototype._decodeStr = function(t, e) {
          if ('bitstr' === e) {
            var r = t.readUInt8()
            return t.isError(r) ? r : { unused: r, data: t.raw() }
          }
          if ('bmpstr' === e) {
            var n = t.raw()
            if (n.length % 2 == 1)
              return t.error('Decoding of string type: bmpstr length mismatch')
            for (var i = '', o = 0; o < n.length / 2; o++)
              i += String.fromCharCode(n.readUInt16BE(2 * o))
            return i
          }
          if ('numstr' === e) {
            var a = t.raw().toString('ascii')
            return this._isNumstr(a)
              ? a
              : t.error(
                  'Decoding of string type: numstr unsupported characters'
                )
          }
          if ('octstr' === e) return t.raw()
          if ('objDesc' === e) return t.raw()
          if ('printstr' === e) {
            var f = t.raw().toString('ascii')
            return this._isPrintstr(f)
              ? f
              : t.error(
                  'Decoding of string type: printstr unsupported characters'
                )
          }
          return /str$/.test(e)
            ? t.raw().toString()
            : t.error('Decoding of string type: ' + e + ' unsupported')
        }),
        (c.prototype._decodeObjid = function(t, e, r) {
          for (var n, i = [], o = 0; !t.isEmpty(); ) {
            var a = t.readUInt8()
            ;(o <<= 7), (o |= 127 & a), 0 == (128 & a) && (i.push(o), (o = 0))
          }
          128 & a && i.push(o)
          var f = (i[0] / 40) | 0,
            s = i[0] % 40
          if (((n = r ? i : [f, s].concat(i.slice(1))), e)) {
            var c = e[n.join(' ')]
            void 0 === c && (c = e[n.join('.')]), void 0 !== c && (n = c)
          }
          return n
        }),
        (c.prototype._decodeTime = function(t, e) {
          var r = t.raw().toString()
          if ('gentime' === e)
            var n = 0 | r.slice(0, 4),
              i = 0 | r.slice(4, 6),
              o = 0 | r.slice(6, 8),
              a = 0 | r.slice(8, 10),
              f = 0 | r.slice(10, 12),
              s = 0 | r.slice(12, 14)
          else {
            if ('utctime' !== e)
              return t.error('Decoding ' + e + ' time is not supported yet')
            ;(n = 0 | r.slice(0, 2)),
              (i = 0 | r.slice(2, 4)),
              (o = 0 | r.slice(4, 6)),
              (a = 0 | r.slice(6, 8)),
              (f = 0 | r.slice(8, 10)),
              (s = 0 | r.slice(10, 12)),
              (n = n < 70 ? 2e3 + n : 1900 + n)
          }
          return Date.UTC(n, i - 1, o, a, f, s, 0)
        }),
        (c.prototype._decodeNull = function(t) {
          return null
        }),
        (c.prototype._decodeBool = function(t) {
          var e = t.readUInt8()
          return t.isError(e) ? e : 0 !== e
        }),
        (c.prototype._decodeInt = function(t, e) {
          var r = t.raw(),
            n = new a(r)
          return e && (n = e[n.toString(10)] || n), n
        }),
        (c.prototype._use = function(t, e) {
          return 'function' == typeof t && (t = t(e)), t._getDecoder('der').tree
        })
    },
    function(t, e, r) {
      var n = r(0),
        i = r(3).Buffer,
        o = r(19),
        a = o.base,
        f = o.constants.der
      function s(t) {
        ;(this.enc = 'der'),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new c()),
          this.tree._init(t.body)
      }
      function c(t) {
        a.Node.call(this, 'der', t)
      }
      function h(t) {
        return t < 10 ? '0' + t : t
      }
      ;(t.exports = s),
        (s.prototype.encode = function(t, e) {
          return this.tree._encode(t, e).join()
        }),
        n(c, a.Node),
        (c.prototype._encodeComposite = function(t, e, r, n) {
          var o,
            a = (function(t, e, r, n) {
              var i
              if (
                ('seqof' === t ? (t = 'seq') : 'setof' === t && (t = 'set'),
                f.tagByName.hasOwnProperty(t))
              )
                i = f.tagByName[t]
              else {
                if ('number' != typeof t || (0 | t) !== t)
                  return n.error('Unknown tag: ' + t)
                i = t
              }
              return i >= 31
                ? n.error('Multi-octet tag encoding unsupported')
                : (e || (i |= 32),
                  i | (f.tagClassByName[r || 'universal'] << 6))
            })(t, e, r, this.reporter)
          if (n.length < 128)
            return (
              ((o = new i(2))[0] = a),
              (o[1] = n.length),
              this._createEncoderBuffer([o, n])
            )
          for (var s = 1, c = n.length; c >= 256; c >>= 8) s++
          ;((o = new i(2 + s))[0] = a), (o[1] = 128 | s), (c = 1 + s)
          for (var h = n.length; h > 0; c--, h >>= 8) o[c] = 255 & h
          return this._createEncoderBuffer([o, n])
        }),
        (c.prototype._encodeStr = function(t, e) {
          if ('bitstr' === e)
            return this._createEncoderBuffer([0 | t.unused, t.data])
          if ('bmpstr' === e) {
            for (var r = new i(2 * t.length), n = 0; n < t.length; n++)
              r.writeUInt16BE(t.charCodeAt(n), 2 * n)
            return this._createEncoderBuffer(r)
          }
          return 'numstr' === e
            ? this._isNumstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  'Encoding of string type: numstr supports only digits and space'
                )
            : 'printstr' === e
            ? this._isPrintstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                )
            : /str$/.test(e)
            ? this._createEncoderBuffer(t)
            : 'objDesc' === e
            ? this._createEncoderBuffer(t)
            : this.reporter.error(
                'Encoding of string type: ' + e + ' unsupported'
              )
        }),
        (c.prototype._encodeObjid = function(t, e, r) {
          if ('string' == typeof t) {
            if (!e)
              return this.reporter.error(
                'string objid given, but no values map found'
              )
            if (!e.hasOwnProperty(t))
              return this.reporter.error('objid not found in values map')
            t = e[t].split(/[\s\.]+/g)
            for (var n = 0; n < t.length; n++) t[n] |= 0
          } else if (Array.isArray(t))
            for (t = t.slice(), n = 0; n < t.length; n++) t[n] |= 0
          if (!Array.isArray(t))
            return this.reporter.error(
              'objid() should be either array or string, got: ' +
                JSON.stringify(t)
            )
          if (!r) {
            if (t[1] >= 40)
              return this.reporter.error('Second objid identifier OOB')
            t.splice(0, 2, 40 * t[0] + t[1])
          }
          var o = 0
          for (n = 0; n < t.length; n++) {
            var a = t[n]
            for (o++; a >= 128; a >>= 7) o++
          }
          var f = new i(o),
            s = f.length - 1
          for (n = t.length - 1; n >= 0; n--)
            for (a = t[n], f[s--] = 127 & a; (a >>= 7) > 0; )
              f[s--] = 128 | (127 & a)
          return this._createEncoderBuffer(f)
        }),
        (c.prototype._encodeTime = function(t, e) {
          var r,
            n = new Date(t)
          return (
            'gentime' === e
              ? (r = [
                  h(n.getFullYear()),
                  h(n.getUTCMonth() + 1),
                  h(n.getUTCDate()),
                  h(n.getUTCHours()),
                  h(n.getUTCMinutes()),
                  h(n.getUTCSeconds()),
                  'Z',
                ].join(''))
              : 'utctime' === e
              ? (r = [
                  h(n.getFullYear() % 100),
                  h(n.getUTCMonth() + 1),
                  h(n.getUTCDate()),
                  h(n.getUTCHours()),
                  h(n.getUTCMinutes()),
                  h(n.getUTCSeconds()),
                  'Z',
                ].join(''))
              : this.reporter.error(
                  'Encoding ' + e + ' time is not supported yet'
                ),
            this._encodeStr(r, 'octstr')
          )
        }),
        (c.prototype._encodeNull = function() {
          return this._createEncoderBuffer('')
        }),
        (c.prototype._encodeInt = function(t, e) {
          if ('string' == typeof t) {
            if (!e)
              return this.reporter.error(
                'String int or enum given, but no values map'
              )
            if (!e.hasOwnProperty(t))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(t)
              )
            t = e[t]
          }
          if ('number' != typeof t && !i.isBuffer(t)) {
            var r = t.toArray()
            !t.sign && 128 & r[0] && r.unshift(0), (t = new i(r))
          }
          if (i.isBuffer(t)) {
            var n = t.length
            0 === t.length && n++
            var o = new i(n)
            return (
              t.copy(o),
              0 === t.length && (o[0] = 0),
              this._createEncoderBuffer(o)
            )
          }
          if (t < 128) return this._createEncoderBuffer(t)
          if (t < 256) return this._createEncoderBuffer([0, t])
          n = 1
          for (var a = t; a >= 256; a >>= 8) n++
          for (a = (o = new Array(n)).length - 1; a >= 0; a--)
            (o[a] = 255 & t), (t >>= 8)
          return 128 & o[0] && o.unshift(0), this._createEncoderBuffer(new i(o))
        }),
        (c.prototype._encodeBool = function(t) {
          return this._createEncoderBuffer(t ? 255 : 0)
        }),
        (c.prototype._use = function(t, e) {
          return 'function' == typeof t && (t = t(e)), t._getEncoder('der').tree
        }),
        (c.prototype._skipDefault = function(t, e, r) {
          var n,
            i = this._baseState
          if (null === i.default) return !1
          var o = t.join()
          if (
            (void 0 === i.defaultBuffer &&
              (i.defaultBuffer = this._encodeValue(i.default, e, r).join()),
            o.length !== i.defaultBuffer.length)
          )
            return !1
          for (n = 0; n < o.length; n++)
            if (o[n] !== i.defaultBuffer[n]) return !1
          return !0
        })
    },
    function(t) {
      t.exports = {
        '1.3.132.0.10': 'secp256k1',
        '1.3.132.0.33': 'p224',
        '1.2.840.10045.3.1.1': 'p192',
        '1.2.840.10045.3.1.7': 'p256',
        '1.3.132.0.34': 'p384',
        '1.3.132.0.35': 'p521',
      }
    },
    function(t, e, r) {
      var n = r(15),
        i = r(1).Buffer
      function o(t) {
        var e = i.allocUnsafe(4)
        return e.writeUInt32BE(t, 0), e
      }
      t.exports = function(t, e) {
        for (var r, a = i.alloc(0), f = 0; a.length < e; )
          (r = o(f++)),
            (a = i.concat([
              a,
              n('sha1')
                .update(t)
                .update(r)
                .digest(),
            ]))
        return a.slice(0, e)
      }
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var r = t.length, n = -1; ++n < r; ) t[n] ^= e[n]
        return t
      }
    },
    function(t, e, r) {
      var n = r(2),
        i = r(1).Buffer
      t.exports = function(t, e) {
        return i.from(
          t
            .toRed(n.mont(e.modulus))
            .redPow(new n(e.publicExponent))
            .fromRed()
            .toArray()
        )
      }
    },
    function(t, e, r) {
      t.exports = function() {
        return r(166)(
          '/*!\n * Web3 module to add transaction PoW for Ebakus. v1.0.0\n * \n * @author Chris Ziogas <chris@ebakus.com>\n * @website https://www.ebakus.com/\n * \n * @copyright Ebakus 2019\n * @license MIT\n */!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){(function(n,o){var i;\n/**\n * [js-sha3]{@link https://github.com/emn178/js-sha3}\n *\n * @version 0.8.0\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\n * @copyright Chen, Yi-Cyuan 2015-2018\n * @license MIT\n */\n/**\n * [js-sha3]{@link https://github.com/emn178/js-sha3}\n *\n * @version 0.8.0\n * @author Chen, Yi-Cyuan [emn178@gmail.com]\n * @copyright Chen, Yi-Cyuan 2015-2018\n * @license MIT\n */\n!function(){"use strict";var u="input is invalid type",a="object"==typeof window,s=a?window:{};s.JS_SHA3_NO_WINDOW&&(a=!1);var f=!a&&"object"==typeof self;!s.JS_SHA3_NO_NODE_JS&&"object"==typeof n&&n.versions&&n.versions.node?s=o:f&&(s=self);var c=!s.JS_SHA3_NO_COMMON_JS&&"object"==typeof t&&t.exports,h=r(4),l=!s.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,p="0123456789abcdef".split(""),y=[4,1024,262144,67108864],d=[0,8,16,24],b=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],v=[224,256,384,512],w=[128,256],m=["hex","buffer","arrayBuffer","array","digest"],g={128:168,256:136};!s.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!l||!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(t,e,r){return function(n){return new W(t,e,t).update(n)[r]()}},_=function(t,e,r){return function(n,o){return new W(t,e,o).update(n)[r]()}},B=function(t,e,r){return function(e,n,o,i){return O["cshake"+t].update(e,n,o,i)[r]()}},k=function(t,e,r){return function(e,n,o,i){return O["kmac"+t].update(e,n,o,i)[r]()}},S=function(t,e,r,n){for(var o=0;o<m.length;++o){var i=m[o];t[i]=e(r,n,i)}return t},x=function(t,e){var r=A(t,e,"hex");return r.create=function(){return new W(t,e,t)},r.update=function(t){return r.create().update(t)},S(r,A,t,e)},M=[{name:"keccak",padding:[1,256,65536,16777216],bits:v,createMethod:x},{name:"sha3",padding:[6,1536,393216,100663296],bits:v,createMethod:x},{name:"shake",padding:[31,7936,2031616,520093696],bits:w,createMethod:function(t,e){var r=_(t,e,"hex");return r.create=function(r){return new W(t,e,r)},r.update=function(t,e){return r.create(e).update(t)},S(r,_,t,e)}},{name:"cshake",padding:y,bits:w,createMethod:function(t,e){var r=g[t],n=B(t,0,"hex");return n.create=function(n,o,i){return o||i?new W(t,e,n).bytepad([o,i],r):O["shake"+t].create(n)},n.update=function(t,e,r,o){return n.create(e,r,o).update(t)},S(n,B,t,e)}},{name:"kmac",padding:y,bits:w,createMethod:function(t,e){var r=g[t],n=k(t,0,"hex");return n.create=function(n,o,i){return new I(t,e,o).bytepad(["KMAC",i],r).bytepad([n],r)},n.update=function(t,e,r,o){return n.create(t,r,o).update(e)},S(n,k,t,e)}}],O={},T=[],j=0;j<M.length;++j)for(var C=M[j],E=C.bits,z=0;z<E.length;++z){var N=C.name+"_"+E[z];if(T.push(N),O[N]=C.createMethod(E[z],C.padding),"sha3"!==C.name){var U=C.name+E[z];T.push(U),O[U]=O[N]}}function W(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function I(t,e,r){W.call(this,t,e,r)}W.prototype.update=function(t){if(this.finalized)throw new Error("finalize already called");var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(u);if(null===t)throw new Error(u);if(l&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||l&&ArrayBuffer.isView(t)))throw new Error(u);e=!0}for(var n,o,i=this.blocks,a=this.byteCount,s=t.length,f=this.blockCount,c=0,h=this.s;c<s;){if(this.reset)for(this.reset=!1,i[0]=this.block,n=1;n<f+1;++n)i[n]=0;if(e)for(n=this.start;c<s&&n<a;++c)i[n>>2]|=t[c]<<d[3&n++];else for(n=this.start;c<s&&n<a;++c)(o=t.charCodeAt(c))<128?i[n>>2]|=o<<d[3&n++]:o<2048?(i[n>>2]|=(192|o>>6)<<d[3&n++],i[n>>2]|=(128|63&o)<<d[3&n++]):o<55296||o>=57344?(i[n>>2]|=(224|o>>12)<<d[3&n++],i[n>>2]|=(128|o>>6&63)<<d[3&n++],i[n>>2]|=(128|63&o)<<d[3&n++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++c)),i[n>>2]|=(240|o>>18)<<d[3&n++],i[n>>2]|=(128|o>>12&63)<<d[3&n++],i[n>>2]|=(128|o>>6&63)<<d[3&n++],i[n>>2]|=(128|63&o)<<d[3&n++]);if(this.lastByteIndex=n,n>=a){for(this.start=n-a,this.block=i[f],n=0;n<f;++n)h[n]^=i[n];J(h),this.reset=!0}else this.start=n}return this},W.prototype.encode=function(t,e){var r=255&t,n=1,o=[r];for(r=255&(t>>=8);r>0;)o.unshift(r),r=255&(t>>=8),++n;return e?o.push(n):o.unshift(n),this.update(o),o.length},W.prototype.encodeString=function(t){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(u);if(null===t)throw new Error(u);if(l&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||l&&ArrayBuffer.isView(t)))throw new Error(u);e=!0}var n=0,o=t.length;if(e)n=o;else for(var i=0;i<t.length;++i){var a=t.charCodeAt(i);a<128?n+=1:a<2048?n+=2:a<55296||a>=57344?n+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++i)),n+=4)}return n+=this.encode(8*n),this.update(t),n},W.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var o=e-r%e,i=[];return i.length=o,this.update(i),this},W.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},W.prototype.toString=W.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,u=0,a="";u<n;){for(i=0;i<e&&u<n;++i,++u)t=r[i],a+=p[t>>4&15]+p[15&t]+p[t>>12&15]+p[t>>8&15]+p[t>>20&15]+p[t>>16&15]+p[t>>28&15]+p[t>>24&15];u%e==0&&(J(r),i=0)}return o&&(t=r[i],a+=p[t>>4&15]+p[15&t],o>1&&(a+=p[t>>12&15]+p[t>>8&15]),o>2&&(a+=p[t>>20&15]+p[t>>16&15])),a},W.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,u=0,a=this.outputBits>>3;t=o?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var s=new Uint32Array(t);u<n;){for(i=0;i<e&&u<n;++i,++u)s[u]=r[i];u%e==0&&J(r)}return o&&(s[i]=r[i],t=t.slice(0,a)),t},W.prototype.buffer=W.prototype.arrayBuffer,W.prototype.digest=W.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,o=this.outputBlocks,i=this.extraBytes,u=0,a=0,s=[];a<o;){for(u=0;u<r&&a<o;++u,++a)t=a<<2,e=n[u],s[t]=255&e,s[t+1]=e>>8&255,s[t+2]=e>>16&255,s[t+3]=e>>24&255;a%r==0&&J(n)}return i&&(t=a<<2,e=n[u],s[t]=255&e,i>1&&(s[t+1]=e>>8&255),i>2&&(s[t+2]=e>>16&255)),s},I.prototype=new W,I.prototype.finalize=function(){return this.encode(this.outputBits,!0),W.prototype.finalize.call(this)};var J=function(t){var e,r,n,o,i,u,a,s,f,c,h,l,p,y,d,v,w,m,g,A,_,B,k,S,x,M,O,T,j,C,E,z,N,U,W,I,J,D,H,L,R,V,F,P,Y,K,q,G,Q,X,Z,$,tt,et,rt,nt,ot,it,ut,at,st,ft,ct;for(n=0;n<48;n+=2)o=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],u=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],s=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(l=t[8]^t[18]^t[28]^t[38]^t[48])^(u<<1|a>>>31),r=(p=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|u>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=o^(s<<1|f>>>31),r=i^(f<<1|s>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=u^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=s^(l<<1|p>>>31),r=f^(p<<1|l>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(o<<1|i>>>31),r=h^(i<<1|o>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],d=t[1],K=t[11]<<4|t[10]>>>28,q=t[10]<<4|t[11]>>>28,T=t[20]<<3|t[21]>>>29,j=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,st=t[30]<<9|t[31]>>>23,V=t[40]<<18|t[41]>>>14,F=t[41]<<18|t[40]>>>14,U=t[2]<<1|t[3]>>>31,W=t[3]<<1|t[2]>>>31,v=t[13]<<12|t[12]>>>20,w=t[12]<<12|t[13]>>>20,G=t[22]<<10|t[23]>>>22,Q=t[23]<<10|t[22]>>>22,C=t[33]<<13|t[32]>>>19,E=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,I=t[14]<<6|t[15]>>>26,J=t[15]<<6|t[14]>>>26,m=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,z=t[45]<<29|t[44]>>>3,N=t[44]<<29|t[45]>>>3,S=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,ot=t[16]<<23|t[17]>>>9,D=t[26]<<25|t[27]>>>7,H=t[27]<<25|t[26]>>>7,A=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,P=t[8]<<27|t[9]>>>5,Y=t[9]<<27|t[8]>>>5,M=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,it=t[29]<<7|t[28]>>>25,ut=t[28]<<7|t[29]>>>25,L=t[38]<<8|t[39]>>>24,R=t[39]<<8|t[38]>>>24,B=t[48]<<14|t[49]>>>18,k=t[49]<<14|t[48]>>>18,t[0]=y^~v&m,t[1]=d^~w&g,t[10]=S^~M&T,t[11]=x^~O&j,t[20]=U^~I&D,t[21]=W^~J&H,t[30]=P^~K&G,t[31]=Y^~q&Q,t[40]=et^~nt&it,t[41]=rt^~ot&ut,t[2]=v^~m&A,t[3]=w^~g&_,t[12]=M^~T&C,t[13]=O^~j&E,t[22]=I^~D&L,t[23]=J^~H&R,t[32]=K^~G&X,t[33]=q^~Q&Z,t[42]=nt^~it&at,t[43]=ot^~ut&st,t[4]=m^~A&B,t[5]=g^~_&k,t[14]=T^~C&z,t[15]=j^~E&N,t[24]=D^~L&V,t[25]=H^~R&F,t[34]=G^~X&$,t[35]=Q^~Z&tt,t[44]=it^~at&ft,t[45]=ut^~st&ct,t[6]=A^~B&y,t[7]=_^~k&d,t[16]=C^~z&S,t[17]=E^~N&x,t[26]=L^~V&U,t[27]=R^~F&W,t[36]=X^~$&P,t[37]=Z^~tt&Y,t[46]=at^~ft&et,t[47]=st^~ct&rt,t[8]=B^~y&v,t[9]=k^~d&w,t[18]=z^~S&M,t[19]=N^~x&O,t[28]=V^~U&I,t[29]=F^~W&J,t[38]=$^~P&K,t[39]=tt^~Y&q,t[48]=ft^~et&nt,t[49]=ct^~rt&ot,t[0]^=b[n],t[1]^=b[n+1]};if(c)t.exports=O;else{for(j=0;j<T.length;++j)s[T[j]]=O[T[j]];h&&(void 0===(i=function(){return O}.call(e,r,e,t))||(t.exports=i))}}()}).call(this,r(2),r(3))},function(t,e){t.exports=function(t){for(var e=0,r=0;r<t.length;r++,e+=8)if(0!==t[r]){e+=Math.clz32(t[r])-24;break}return e}},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var s,f=[],c=!1,h=-1;function l(){c&&s&&(c=!1,s.length?f=s.concat(f):h=-1,f.length&&p())}function p(){if(!c){var t=a(l);c=!0;for(var e=f.length;e;){for(s=f,f=[];++h<e;)s&&s[h].run();h=-1,e=f.length}s=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new y(t,e)),1!==f.length||c||a(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){try{if("object"===("undefined"==typeof WebAssembly?"undefined":i(WebAssembly))&&"function"==typeof WebAssembly.instantiate){var t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(t instanceof WebAssembly.Module)new WebAssembly.Instance(t),WebAssembly.Instance}}catch(t){}}();var u=r(0);onmessage=function(t){var e,r,n=t.data,i=n.hash,a=n.targetDifficulty,s=0,f=(500,e=function(){postMessage({cmd:"current",workNonce:s})},r=0,function(){var t=(new Date).getTime();if(!(t-r<500))return r=t,e.apply(void 0,arguments)});!function(){var t=Math.log2(a),e=t=Math.ceil(t);i=i.slice(2);var r=new ArrayBuffer(128),n=new Uint8Array(r,64,64),c=function(t,e,r){for(var n=new Uint8Array(t,r,e.length/2),o=0;o<e.length/2;o++)n[o]=parseInt(e.substr(2*o,2),16);return n}(r,i,64),h=new Uint8Array(u.sha3_256.arrayBuffer(c));n.set(h);var l=new DataView(r,n.byteOffset,n.byteLength),p=0;do{l.setUint32(60,s);var y=new Uint8Array(u.sha3_256.arrayBuffer(n)),d=o()(y);if(d>p&&(p=d)>=e)break;s++,f()}while(p<=e)}(),postMessage({cmd:"finished",workNonce:s})},postMessage({cmd:"ready"})}]);',
          r.p + 'calculateWorkNonce.worker.js'
        )
      }
    },
    function(t, e) {
      const r = (t, e) => {
        let r = []
        for (var n = 0; n < t; ++n) r.push(e(n))
        return r
      }
      t.exports = {
        generate: r,
        replicate: (t, e) => r(t, () => e),
        concat: (t, e) => t.concat(e),
        flatten: t => {
          let e = []
          for (let r = 0, n = t.length; r < n; ++r)
            for (let n = 0, i = t[r].length; n < i; ++n) e.push(t[r][n])
          return e
        },
        chunksOf: (t, e) => {
          let r = []
          for (let n = 0, i = e.length; n < i; n += t) r.push(e.slice(n, n + t))
          return r
        },
      }
    },
    function(t, e, r) {
      'use strict'
      ;(e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r(13)),
        (e.createHash = e.Hash = r(15)),
        (e.createHmac = e.Hmac = r(50))
      var n = r(98),
        i = Object.keys(n),
        o = [
          'sha1',
          'sha224',
          'sha256',
          'sha384',
          'sha512',
          'md5',
          'rmd160',
        ].concat(i)
      e.getHashes = function() {
        return o
      }
      var a = r(53)
      ;(e.pbkdf2 = a.pbkdf2), (e.pbkdf2Sync = a.pbkdf2Sync)
      var f = r(100)
      ;(e.Cipher = f.Cipher),
        (e.createCipher = f.createCipher),
        (e.Cipheriv = f.Cipheriv),
        (e.createCipheriv = f.createCipheriv),
        (e.Decipher = f.Decipher),
        (e.createDecipher = f.createDecipher),
        (e.Decipheriv = f.Decipheriv),
        (e.createDecipheriv = f.createDecipheriv),
        (e.getCiphers = f.getCiphers),
        (e.listCiphers = f.listCiphers)
      var s = r(117)
      ;(e.DiffieHellmanGroup = s.DiffieHellmanGroup),
        (e.createDiffieHellmanGroup = s.createDiffieHellmanGroup),
        (e.getDiffieHellman = s.getDiffieHellman),
        (e.createDiffieHellman = s.createDiffieHellman),
        (e.DiffieHellman = s.DiffieHellman)
      var c = r(123)
      ;(e.createSign = c.createSign),
        (e.Sign = c.Sign),
        (e.createVerify = c.createVerify),
        (e.Verify = c.Verify),
        (e.createECDH = r(161))
      var h = r(162)
      ;(e.publicEncrypt = h.publicEncrypt),
        (e.privateEncrypt = h.privateEncrypt),
        (e.publicDecrypt = h.publicDecrypt),
        (e.privateDecrypt = h.privateDecrypt)
      var u = r(165)
      ;(e.randomFill = u.randomFill),
        (e.randomFillSync = u.randomFillSync),
        (e.createCredentials = function() {
          throw new Error(
            [
              'sorry, createCredentials is not implemented yet',
              'we accept pull requests',
              'https://github.com/crypto-browserify/crypto-browserify',
            ].join('\n')
          )
        }),
        (e.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6,
        })
    },
    function(t, e, r) {
      'use strict'
      ;(e.byteLength = function(t) {
        var e = c(t),
          r = e[0],
          n = e[1]
        return (3 * (r + n)) / 4 - n
      }),
        (e.toByteArray = function(t) {
          for (
            var e,
              r = c(t),
              n = r[0],
              a = r[1],
              f = new o(
                (function(t, e, r) {
                  return (3 * (e + r)) / 4 - r
                })(0, n, a)
              ),
              s = 0,
              h = a > 0 ? n - 4 : n,
              u = 0;
            u < h;
            u += 4
          )
            (e =
              (i[t.charCodeAt(u)] << 18) |
              (i[t.charCodeAt(u + 1)] << 12) |
              (i[t.charCodeAt(u + 2)] << 6) |
              i[t.charCodeAt(u + 3)]),
              (f[s++] = (e >> 16) & 255),
              (f[s++] = (e >> 8) & 255),
              (f[s++] = 255 & e)
          return (
            2 === a &&
              ((e = (i[t.charCodeAt(u)] << 2) | (i[t.charCodeAt(u + 1)] >> 4)),
              (f[s++] = 255 & e)),
            1 === a &&
              ((e =
                (i[t.charCodeAt(u)] << 10) |
                (i[t.charCodeAt(u + 1)] << 4) |
                (i[t.charCodeAt(u + 2)] >> 2)),
              (f[s++] = (e >> 8) & 255),
              (f[s++] = 255 & e)),
            f
          )
        }),
        (e.fromByteArray = function(t) {
          for (
            var e, r = t.length, i = r % 3, o = [], a = 0, f = r - i;
            a < f;
            a += 16383
          )
            o.push(h(t, a, a + 16383 > f ? f : a + 16383))
          return (
            1 === i
              ? ((e = t[r - 1]), o.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
              : 2 === i &&
                ((e = (t[r - 2] << 8) + t[r - 1]),
                o.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '=')),
            o.join('')
          )
        })
      for (
        var n = [],
          i = [],
          o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          a =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          f = 0,
          s = a.length;
        f < s;
        ++f
      )
        (n[f] = a[f]), (i[a.charCodeAt(f)] = f)
      function c(t) {
        var e = t.length
        if (e % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4')
        var r = t.indexOf('=')
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)]
      }
      function h(t, e, r) {
        for (var i, o, a = [], f = e; f < r; f += 3)
          (i =
            ((t[f] << 16) & 16711680) +
            ((t[f + 1] << 8) & 65280) +
            (255 & t[f + 2])),
            a.push(
              n[((o = i) >> 18) & 63] +
                n[(o >> 12) & 63] +
                n[(o >> 6) & 63] +
                n[63 & o]
            )
        return a.join('')
      }
      ;(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63)
    },
    function(t, e) {
      ;(e.read = function(t, e, r, n, i) {
        var o,
          a,
          f = 8 * i - n - 1,
          s = (1 << f) - 1,
          c = s >> 1,
          h = -7,
          u = r ? i - 1 : 0,
          d = r ? -1 : 1,
          l = t[e + u]
        for (
          u += d, o = l & ((1 << -h) - 1), l >>= -h, h += f;
          h > 0;
          o = 256 * o + t[e + u], u += d, h -= 8
        );
        for (
          a = o & ((1 << -h) - 1), o >>= -h, h += n;
          h > 0;
          a = 256 * a + t[e + u], u += d, h -= 8
        );
        if (0 === o) o = 1 - c
        else {
          if (o === s) return a ? NaN : (1 / 0) * (l ? -1 : 1)
          ;(a += Math.pow(2, n)), (o -= c)
        }
        return (l ? -1 : 1) * a * Math.pow(2, o - n)
      }),
        (e.write = function(t, e, r, n, i, o) {
          var a,
            f,
            s,
            c = 8 * o - i - 1,
            h = (1 << c) - 1,
            u = h >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : o - 1,
            p = n ? 1 : -1,
            b = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((f = isNaN(e) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (s = Math.pow(2, -a)) < 1 && (a--, (s *= 2)),
                  (e += a + u >= 1 ? d / s : d * Math.pow(2, 1 - u)) * s >= 2 &&
                    (a++, (s /= 2)),
                  a + u >= h
                    ? ((f = 0), (a = h))
                    : a + u >= 1
                    ? ((f = (e * s - 1) * Math.pow(2, i)), (a += u))
                    : ((f = e * Math.pow(2, u - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[r + l] = 255 & f, l += p, f /= 256, i -= 8
          );
          for (
            a = (a << i) | f, c += i;
            c > 0;
            t[r + l] = 255 & a, l += p, a /= 256, c -= 8
          );
          t[r + l - p] |= 128 * b
        })
    },
    function(t, e) {},
    function(t, e, r) {
      'use strict'
      var n = r(1).Buffer,
        i = r(84)
      ;(t.exports = (function() {
        function t() {
          !(function(e, r) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        return (
          (t.prototype.push = function(t) {
            var e = { data: t, next: null }
            this.length > 0 ? (this.tail.next = e) : (this.head = e),
              (this.tail = e),
              ++this.length
          }),
          (t.prototype.unshift = function(t) {
            var e = { data: t, next: this.head }
            0 === this.length && (this.tail = e), (this.head = e), ++this.length
          }),
          (t.prototype.shift = function() {
            if (0 !== this.length) {
              var t = this.head.data
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                t
              )
            }
          }),
          (t.prototype.clear = function() {
            ;(this.head = this.tail = null), (this.length = 0)
          }),
          (t.prototype.join = function(t) {
            if (0 === this.length) return ''
            for (var e = this.head, r = '' + e.data; (e = e.next); )
              r += t + e.data
            return r
          }),
          (t.prototype.concat = function(t) {
            if (0 === this.length) return n.alloc(0)
            if (1 === this.length) return this.head.data
            for (
              var e, r, i = n.allocUnsafe(t >>> 0), o = this.head, a = 0;
              o;

            )
              (e = i),
                (r = a),
                o.data.copy(e, r),
                (a += o.data.length),
                (o = o.next)
            return i
          }),
          t
        )
      })()),
        i &&
          i.inspect &&
          i.inspect.custom &&
          (t.exports.prototype[i.inspect.custom] = function() {
            var t = i.inspect({ length: this.length })
            return this.constructor.name + ' ' + t
          })
    },
    function(t, e) {},
    function(t, e, r) {
      ;(function(t) {
        var n =
            (void 0 !== t && t) ||
            ('undefined' != typeof self && self) ||
            window,
          i = Function.prototype.apply
        function o(t, e) {
          ;(this._id = t), (this._clearFn = e)
        }
        ;(e.setTimeout = function() {
          return new o(i.call(setTimeout, n, arguments), clearTimeout)
        }),
          (e.setInterval = function() {
            return new o(i.call(setInterval, n, arguments), clearInterval)
          }),
          (e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
          }),
          (o.prototype.unref = o.prototype.ref = function() {}),
          (o.prototype.close = function() {
            this._clearFn.call(n, this._id)
          }),
          (e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e)
          }),
          (e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1)
          }),
          (e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId)
            var e = t._idleTimeout
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
              }, e))
          }),
          r(86),
          (e.setImmediate =
            ('undefined' != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ('undefined' != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate))
      }.call(this, r(8)))
    },
    function(t, e, r) {
      ;(function(t, e) {
        !(function(t, r) {
          'use strict'
          if (!t.setImmediate) {
            var n,
              i,
              o,
              a,
              f,
              s = 1,
              c = {},
              h = !1,
              u = t.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(t)
            ;(d = d && d.setTimeout ? d : t),
              '[object process]' === {}.toString.call(t.process)
                ? (n = function(t) {
                    e.nextTick(function() {
                      p(t)
                    })
                  })
                : (function() {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        r = t.onmessage
                      return (
                        (t.onmessage = function() {
                          e = !1
                        }),
                        t.postMessage('', '*'),
                        (t.onmessage = r),
                        e
                      )
                    }
                  })()
                ? ((a = 'setImmediate$' + Math.random() + '$'),
                  (f = function(e) {
                    e.source === t &&
                      'string' == typeof e.data &&
                      0 === e.data.indexOf(a) &&
                      p(+e.data.slice(a.length))
                  }),
                  t.addEventListener
                    ? t.addEventListener('message', f, !1)
                    : t.attachEvent('onmessage', f),
                  (n = function(e) {
                    t.postMessage(a + e, '*')
                  }))
                : t.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function(t) {
                    p(t.data)
                  }),
                  (n = function(t) {
                    o.port2.postMessage(t)
                  }))
                : u && 'onreadystatechange' in u.createElement('script')
                ? ((i = u.documentElement),
                  (n = function(t) {
                    var e = u.createElement('script')
                    ;(e.onreadystatechange = function() {
                      p(t),
                        (e.onreadystatechange = null),
                        i.removeChild(e),
                        (e = null)
                    }),
                      i.appendChild(e)
                  }))
                : (n = function(t) {
                    setTimeout(p, 0, t)
                  }),
              (d.setImmediate = function(t) {
                'function' != typeof t && (t = new Function('' + t))
                for (
                  var e = new Array(arguments.length - 1), r = 0;
                  r < e.length;
                  r++
                )
                  e[r] = arguments[r + 1]
                var i = { callback: t, args: e }
                return (c[s] = i), n(s), s++
              }),
              (d.clearImmediate = l)
          }
          function l(t) {
            delete c[t]
          }
          function p(t) {
            if (h) setTimeout(p, 0, t)
            else {
              var e = c[t]
              if (e) {
                h = !0
                try {
                  !(function(t) {
                    var e = t.callback,
                      n = t.args
                    switch (n.length) {
                      case 0:
                        e()
                        break
                      case 1:
                        e(n[0])
                        break
                      case 2:
                        e(n[0], n[1])
                        break
                      case 3:
                        e(n[0], n[1], n[2])
                        break
                      default:
                        e.apply(r, n)
                    }
                  })(e)
                } finally {
                  l(t), (h = !1)
                }
              }
            }
          }
        })('undefined' == typeof self ? (void 0 === t ? this : t) : self)
      }.call(this, r(8), r(9)))
    },
    function(t, e, r) {
      ;(function(e) {
        function r(t) {
          try {
            if (!e.localStorage) return !1
          } catch (t) {
            return !1
          }
          var r = e.localStorage[t]
          return null != r && 'true' === String(r).toLowerCase()
        }
        t.exports = function(t, e) {
          if (r('noDeprecation')) return t
          var n = !1
          return function() {
            if (!n) {
              if (r('throwDeprecation')) throw new Error(e)
              r('traceDeprecation'), (n = !0)
            }
            return t.apply(this, arguments)
          }
        }
      }.call(this, r(8)))
    },
    function(t, e, r) {
      'use strict'
      t.exports = o
      var n = r(47),
        i = r(16)
      function o(t) {
        if (!(this instanceof o)) return new o(t)
        n.call(this, t)
      }
      ;(i.inherits = r(0)),
        i.inherits(o, n),
        (o.prototype._transform = function(t, e, r) {
          r(null, t)
        })
    },
    function(t, e, r) {
      t.exports = r(31)
    },
    function(t, e, r) {
      t.exports = r(12)
    },
    function(t, e, r) {
      t.exports = r(30).Transform
    },
    function(t, e, r) {
      t.exports = r(30).PassThrough
    },
    function(t, e, r) {
      var n = r(0),
        i = r(14),
        o = r(1).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        f = new Array(80)
      function s() {
        this.init(), (this._w = f), i.call(this, 64, 56)
      }
      function c(t) {
        return (t << 30) | (t >>> 2)
      }
      function h(t, e, r, n) {
        return 0 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e & r) | (e & n) | (r & n)
          : e ^ r ^ n
      }
      n(s, i),
        (s.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (s.prototype._update = function(t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              f = 0 | this._d,
              s = 0 | this._e,
              u = 0;
            u < 16;
            ++u
          )
            r[u] = t.readInt32BE(4 * u)
          for (; u < 80; ++u) r[u] = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]
          for (var d = 0; d < 80; ++d) {
            var l = ~~(d / 20),
              p =
                0 |
                ((((e = n) << 5) | (e >>> 27)) +
                  h(l, i, o, f) +
                  s +
                  r[d] +
                  a[l])
            ;(s = f), (f = o), (o = c(i)), (i = n), (n = p)
          }
          ;(this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (f + this._d) | 0),
            (this._e = (s + this._e) | 0)
        }),
        (s.prototype._hash = function() {
          var t = o.allocUnsafe(20)
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      var n = r(0),
        i = r(14),
        o = r(1).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        f = new Array(80)
      function s() {
        this.init(), (this._w = f), i.call(this, 64, 56)
      }
      function c(t) {
        return (t << 5) | (t >>> 27)
      }
      function h(t) {
        return (t << 30) | (t >>> 2)
      }
      function u(t, e, r, n) {
        return 0 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e & r) | (e & n) | (r & n)
          : e ^ r ^ n
      }
      n(s, i),
        (s.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (s.prototype._update = function(t) {
          for (
            var e,
              r = this._w,
              n = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              f = 0 | this._d,
              s = 0 | this._e,
              d = 0;
            d < 16;
            ++d
          )
            r[d] = t.readInt32BE(4 * d)
          for (; d < 80; ++d)
            r[d] =
              ((e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1) |
              (e >>> 31)
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20),
              b = (c(n) + u(p, i, o, f) + s + r[l] + a[p]) | 0
            ;(s = f), (f = o), (o = h(i)), (i = n), (n = b)
          }
          ;(this._a = (n + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (f + this._d) | 0),
            (this._e = (s + this._e) | 0)
        }),
        (s.prototype._hash = function() {
          var t = o.allocUnsafe(20)
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      var n = r(0),
        i = r(48),
        o = r(14),
        a = r(1).Buffer,
        f = new Array(64)
      function s() {
        this.init(), (this._w = f), o.call(this, 64, 56)
      }
      n(s, i),
        (s.prototype.init = function() {
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
          )
        }),
        (s.prototype._hash = function() {
          var t = a.allocUnsafe(28)
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      var n = r(0),
        i = r(49),
        o = r(14),
        a = r(1).Buffer,
        f = new Array(160)
      function s() {
        this.init(), (this._w = f), o.call(this, 128, 112)
      }
      n(s, i),
        (s.prototype.init = function() {
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
          )
        }),
        (s.prototype._hash = function() {
          var t = a.allocUnsafe(48)
          function e(e, r, n) {
            t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          )
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      'use strict'
      var n = r(0),
        i = r(1).Buffer,
        o = r(10),
        a = i.alloc(128),
        f = 64
      function s(t, e) {
        o.call(this, 'digest'),
          'string' == typeof e && (e = i.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > f ? (e = t(e)) : e.length < f && (e = i.concat([e, a], f))
        for (
          var r = (this._ipad = i.allocUnsafe(f)),
            n = (this._opad = i.allocUnsafe(f)),
            s = 0;
          s < f;
          s++
        )
          (r[s] = 54 ^ e[s]), (n[s] = 92 ^ e[s])
        this._hash = [r]
      }
      n(s, o),
        (s.prototype._update = function(t) {
          this._hash.push(t)
        }),
        (s.prototype._final = function() {
          var t = this._alg(i.concat(this._hash))
          return this._alg(i.concat([this._opad, t]))
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      t.exports = r(52)
    },
    function(t, e, r) {
      ;(function(e, n) {
        var i,
          o = r(54),
          a = r(55),
          f = r(56),
          s = r(1).Buffer,
          c = e.crypto && e.crypto.subtle,
          h = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512',
          },
          u = []
        function d(t, e, r, n, i) {
          return c
            .importKey('raw', t, { name: 'PBKDF2' }, !1, ['deriveBits'])
            .then(function(t) {
              return c.deriveBits(
                { name: 'PBKDF2', salt: e, iterations: r, hash: { name: i } },
                t,
                n << 3
              )
            })
            .then(function(t) {
              return s.from(t)
            })
        }
        t.exports = function(t, r, l, p, b, y) {
          'function' == typeof b && ((y = b), (b = void 0))
          var m = h[(b = b || 'sha1').toLowerCase()]
          if (!m || 'function' != typeof e.Promise)
            return n.nextTick(function() {
              var e
              try {
                e = f(t, r, l, p, b)
              } catch (t) {
                return y(t)
              }
              y(null, e)
            })
          if ((o(t, r, l, p), 'function' != typeof y))
            throw new Error('No callback provided to pbkdf2')
          s.isBuffer(t) || (t = s.from(t, a)),
            s.isBuffer(r) || (r = s.from(r, a)),
            (function(t, e) {
              t.then(
                function(t) {
                  n.nextTick(function() {
                    e(null, t)
                  })
                },
                function(t) {
                  n.nextTick(function() {
                    e(t)
                  })
                }
              )
            })(
              (function(t) {
                if (e.process && !e.process.browser) return Promise.resolve(!1)
                if (!c || !c.importKey || !c.deriveBits)
                  return Promise.resolve(!1)
                if (void 0 !== u[t]) return u[t]
                var r = d((i = i || s.alloc(8)), i, 10, 128, t)
                  .then(function() {
                    return !0
                  })
                  .catch(function() {
                    return !1
                  })
                return (u[t] = r), r
              })(m).then(function(e) {
                return e ? d(t, r, l, p, m) : f(t, r, l, p, b)
              }),
              y
            )
        }
      }.call(this, r(8), r(9)))
    },
    function(t, e, r) {
      var n = r(101),
        i = r(36),
        o = r(37),
        a = r(116),
        f = r(23)
      function s(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createCipheriv(t, e, r)
        if (a[t]) return new n({ key: e, iv: r, mode: t })
        throw new TypeError('invalid suite type')
      }
      function c(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createDecipheriv(t, e, r)
        if (a[t]) return new n({ key: e, iv: r, mode: t, decrypt: !0 })
        throw new TypeError('invalid suite type')
      }
      ;(e.createCipher = e.Cipher = function(t, e) {
        var r, n
        if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv)
        else {
          if (!a[t]) throw new TypeError('invalid suite type')
          ;(r = 8 * a[t].key), (n = a[t].iv)
        }
        var i = f(e, !1, r, n)
        return s(t, i.key, i.iv)
      }),
        (e.createCipheriv = e.Cipheriv = s),
        (e.createDecipher = e.Decipher = function(t, e) {
          var r, n
          if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv)
          else {
            if (!a[t]) throw new TypeError('invalid suite type')
            ;(r = 8 * a[t].key), (n = a[t].iv)
          }
          var i = f(e, !1, r, n)
          return c(t, i.key, i.iv)
        }),
        (e.createDecipheriv = e.Decipheriv = c),
        (e.listCiphers = e.getCiphers = function() {
          return Object.keys(a).concat(i.getCiphers())
        })
    },
    function(t, e, r) {
      var n = r(10),
        i = r(35),
        o = r(0),
        a = r(1).Buffer,
        f = {
          'des-ede3-cbc': i.CBC.instantiate(i.EDE),
          'des-ede3': i.EDE,
          'des-ede-cbc': i.CBC.instantiate(i.EDE),
          'des-ede': i.EDE,
          'des-cbc': i.CBC.instantiate(i.DES),
          'des-ecb': i.DES,
        }
      function s(t) {
        n.call(this)
        var e,
          r = t.mode.toLowerCase(),
          i = f[r]
        e = t.decrypt ? 'decrypt' : 'encrypt'
        var o = t.key
        a.isBuffer(o) || (o = a.from(o)),
          ('des-ede' !== r && 'des-ede-cbc' !== r) ||
            (o = a.concat([o, o.slice(0, 8)]))
        var s = t.iv
        a.isBuffer(s) || (s = a.from(s)),
          (this._des = i.create({ key: o, iv: s, type: e }))
      }
      ;(f.des = f['des-cbc']),
        (f.des3 = f['des-ede3-cbc']),
        (t.exports = s),
        o(s, n),
        (s.prototype._update = function(t) {
          return a.from(this._des.update(t))
        }),
        (s.prototype._final = function() {
          return a.from(this._des.final())
        })
    },
    function(t, e, r) {
      'use strict'
      ;(e.readUInt32BE = function(t, e) {
        return (
          ((t[0 + e] << 24) | (t[1 + e] << 16) | (t[2 + e] << 8) | t[3 + e]) >>>
          0
        )
      }),
        (e.writeUInt32BE = function(t, e, r) {
          ;(t[0 + r] = e >>> 24),
            (t[1 + r] = (e >>> 16) & 255),
            (t[2 + r] = (e >>> 8) & 255),
            (t[3 + r] = 255 & e)
        }),
        (e.ip = function(t, e, r, n) {
          for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var f = 0; f <= 24; f += 8)
              (i <<= 1), (i |= (e >>> (f + a)) & 1)
            for (f = 0; f <= 24; f += 8) (i <<= 1), (i |= (t >>> (f + a)) & 1)
          }
          for (a = 6; a >= 0; a -= 2) {
            for (f = 1; f <= 25; f += 8) (o <<= 1), (o |= (e >>> (f + a)) & 1)
            for (f = 1; f <= 25; f += 8) (o <<= 1), (o |= (t >>> (f + a)) & 1)
          }
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.rip = function(t, e, r, n) {
          for (var i = 0, o = 0, a = 0; a < 4; a++)
            for (var f = 24; f >= 0; f -= 8)
              (i <<= 1),
                (i |= (e >>> (f + a)) & 1),
                (i <<= 1),
                (i |= (t >>> (f + a)) & 1)
          for (a = 4; a < 8; a++)
            for (f = 24; f >= 0; f -= 8)
              (o <<= 1),
                (o |= (e >>> (f + a)) & 1),
                (o <<= 1),
                (o |= (t >>> (f + a)) & 1)
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.pc1 = function(t, e, r, n) {
          for (var i = 0, o = 0, a = 7; a >= 5; a--) {
            for (var f = 0; f <= 24; f += 8)
              (i <<= 1), (i |= (e >> (f + a)) & 1)
            for (f = 0; f <= 24; f += 8) (i <<= 1), (i |= (t >> (f + a)) & 1)
          }
          for (f = 0; f <= 24; f += 8) (i <<= 1), (i |= (e >> (f + a)) & 1)
          for (a = 1; a <= 3; a++) {
            for (f = 0; f <= 24; f += 8) (o <<= 1), (o |= (e >> (f + a)) & 1)
            for (f = 0; f <= 24; f += 8) (o <<= 1), (o |= (t >> (f + a)) & 1)
          }
          for (f = 0; f <= 24; f += 8) (o <<= 1), (o |= (t >> (f + a)) & 1)
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.r28shl = function(t, e) {
          return ((t << e) & 268435455) | (t >>> (28 - e))
        })
      var n = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24,
      ]
      ;(e.pc2 = function(t, e, r, i) {
        for (var o = 0, a = 0, f = n.length >>> 1, s = 0; s < f; s++)
          (o <<= 1), (o |= (t >>> n[s]) & 1)
        for (s = f; s < n.length; s++) (a <<= 1), (a |= (e >>> n[s]) & 1)
        ;(r[i + 0] = o >>> 0), (r[i + 1] = a >>> 0)
      }),
        (e.expand = function(t, e, r) {
          var n = 0,
            i = 0
          n = ((1 & t) << 5) | (t >>> 27)
          for (var o = 23; o >= 15; o -= 4) (n <<= 6), (n |= (t >>> o) & 63)
          for (o = 11; o >= 3; o -= 4) (i |= (t >>> o) & 63), (i <<= 6)
          ;(i |= ((31 & t) << 1) | (t >>> 31)),
            (e[r + 0] = n >>> 0),
            (e[r + 1] = i >>> 0)
        })
      var i = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11,
      ]
      e.substitute = function(t, e) {
        for (var r = 0, n = 0; n < 4; n++)
          (r <<= 4), (r |= i[64 * n + ((t >>> (18 - 6 * n)) & 63)])
        for (n = 0; n < 4; n++)
          (r <<= 4), (r |= i[256 + 64 * n + ((e >>> (18 - 6 * n)) & 63)])
        return r >>> 0
      }
      var o = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7,
      ]
      ;(e.permute = function(t) {
        for (var e = 0, r = 0; r < o.length; r++)
          (e <<= 1), (e |= (t >>> o[r]) & 1)
        return e >>> 0
      }),
        (e.padSplit = function(t, e, r) {
          for (var n = t.toString(2); n.length < e; ) n = '0' + n
          for (var i = [], o = 0; o < e; o += r) i.push(n.slice(o, o + r))
          return i.join(' ')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(6)
      function i(t) {
        ;(this.options = t),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0)
      }
      ;(t.exports = i),
        (i.prototype._init = function() {}),
        (i.prototype.update = function(t) {
          return 0 === t.length
            ? []
            : 'decrypt' === this.type
            ? this._updateDecrypt(t)
            : this._updateEncrypt(t)
        }),
        (i.prototype._buffer = function(t, e) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, t.length - e),
              n = 0;
            n < r;
            n++
          )
            this.buffer[this.bufferOff + n] = t[e + n]
          return (this.bufferOff += r), r
        }),
        (i.prototype._flushBuffer = function(t, e) {
          return (
            this._update(this.buffer, 0, t, e),
            (this.bufferOff = 0),
            this.blockSize
          )
        }),
        (i.prototype._updateEncrypt = function(t) {
          var e = 0,
            r = 0,
            n = ((this.bufferOff + t.length) / this.blockSize) | 0,
            i = new Array(n * this.blockSize)
          0 !== this.bufferOff &&
            ((e += this._buffer(t, e)),
            this.bufferOff === this.buffer.length &&
              (r += this._flushBuffer(i, r)))
          for (
            var o = t.length - ((t.length - e) % this.blockSize);
            e < o;
            e += this.blockSize
          )
            this._update(t, e, i, r), (r += this.blockSize)
          for (; e < t.length; e++, this.bufferOff++)
            this.buffer[this.bufferOff] = t[e]
          return i
        }),
        (i.prototype._updateDecrypt = function(t) {
          for (
            var e = 0,
              r = 0,
              n = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1,
              i = new Array(n * this.blockSize);
            n > 0;
            n--
          )
            (e += this._buffer(t, e)), (r += this._flushBuffer(i, r))
          return (e += this._buffer(t, e)), i
        }),
        (i.prototype.final = function(t) {
          var e, r
          return (
            t && (e = this.update(t)),
            (r =
              'encrypt' === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            e ? e.concat(r) : r
          )
        }),
        (i.prototype._pad = function(t, e) {
          if (0 === e) return !1
          for (; e < t.length; ) t[e++] = 0
          return !0
        }),
        (i.prototype._finalEncrypt = function() {
          if (!this._pad(this.buffer, this.bufferOff)) return []
          var t = new Array(this.blockSize)
          return this._update(this.buffer, 0, t, 0), t
        }),
        (i.prototype._unpad = function(t) {
          return t
        }),
        (i.prototype._finalDecrypt = function() {
          n.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt')
          var t = new Array(this.blockSize)
          return this._flushBuffer(t, 0), this._unpad(t)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(6),
        i = r(0),
        o = r(35),
        a = o.utils,
        f = o.Cipher
      function s() {
        ;(this.tmp = new Array(2)), (this.keys = null)
      }
      function c(t) {
        f.call(this, t)
        var e = new s()
        ;(this._desState = e), this.deriveKeys(e, t.key)
      }
      i(c, f),
        (t.exports = c),
        (c.create = function(t) {
          return new c(t)
        })
      var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]
      ;(c.prototype.deriveKeys = function(t, e) {
        ;(t.keys = new Array(32)),
          n.equal(e.length, this.blockSize, 'Invalid key length')
        var r = a.readUInt32BE(e, 0),
          i = a.readUInt32BE(e, 4)
        a.pc1(r, i, t.tmp, 0), (r = t.tmp[0]), (i = t.tmp[1])
        for (var o = 0; o < t.keys.length; o += 2) {
          var f = h[o >>> 1]
          ;(r = a.r28shl(r, f)), (i = a.r28shl(i, f)), a.pc2(r, i, t.keys, o)
        }
      }),
        (c.prototype._update = function(t, e, r, n) {
          var i = this._desState,
            o = a.readUInt32BE(t, e),
            f = a.readUInt32BE(t, e + 4)
          a.ip(o, f, i.tmp, 0),
            (o = i.tmp[0]),
            (f = i.tmp[1]),
            'encrypt' === this.type
              ? this._encrypt(i, o, f, i.tmp, 0)
              : this._decrypt(i, o, f, i.tmp, 0),
            (o = i.tmp[0]),
            (f = i.tmp[1]),
            a.writeUInt32BE(r, o, n),
            a.writeUInt32BE(r, f, n + 4)
        }),
        (c.prototype._pad = function(t, e) {
          for (var r = t.length - e, n = e; n < t.length; n++) t[n] = r
          return !0
        }),
        (c.prototype._unpad = function(t) {
          for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++)
            n.equal(t[r], e)
          return t.slice(0, t.length - e)
        }),
        (c.prototype._encrypt = function(t, e, r, n, i) {
          for (var o = e, f = r, s = 0; s < t.keys.length; s += 2) {
            var c = t.keys[s],
              h = t.keys[s + 1]
            a.expand(f, t.tmp, 0), (c ^= t.tmp[0]), (h ^= t.tmp[1])
            var u = a.substitute(c, h),
              d = f
            ;(f = (o ^ a.permute(u)) >>> 0), (o = d)
          }
          a.rip(f, o, n, i)
        }),
        (c.prototype._decrypt = function(t, e, r, n, i) {
          for (var o = r, f = e, s = t.keys.length - 2; s >= 0; s -= 2) {
            var c = t.keys[s],
              h = t.keys[s + 1]
            a.expand(o, t.tmp, 0), (c ^= t.tmp[0]), (h ^= t.tmp[1])
            var u = a.substitute(c, h),
              d = o
            ;(o = (f ^ a.permute(u)) >>> 0), (f = d)
          }
          a.rip(o, f, n, i)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(6),
        i = r(0),
        o = {}
      function a(t) {
        n.equal(t.length, 8, 'Invalid IV length'), (this.iv = new Array(8))
        for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
      }
      ;(e.instantiate = function(t) {
        function e(e) {
          t.call(this, e), this._cbcInit()
        }
        i(e, t)
        for (var r = Object.keys(o), n = 0; n < r.length; n++) {
          var a = r[n]
          e.prototype[a] = o[a]
        }
        return (
          (e.create = function(t) {
            return new e(t)
          }),
          e
        )
      }),
        (o._cbcInit = function() {
          var t = new a(this.options.iv)
          this._cbcState = t
        }),
        (o._update = function(t, e, r, n) {
          var i = this._cbcState,
            o = this.constructor.super_.prototype,
            a = i.iv
          if ('encrypt' === this.type) {
            for (var f = 0; f < this.blockSize; f++) a[f] ^= t[e + f]
            for (
              o._update.call(this, a, 0, r, n), f = 0;
              f < this.blockSize;
              f++
            )
              a[f] = r[n + f]
          } else {
            for (
              o._update.call(this, t, e, r, n), f = 0;
              f < this.blockSize;
              f++
            )
              r[n + f] ^= a[f]
            for (f = 0; f < this.blockSize; f++) a[f] = t[e + f]
          }
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(6),
        i = r(0),
        o = r(35),
        a = o.Cipher,
        f = o.DES
      function s(t, e) {
        n.equal(e.length, 24, 'Invalid key length')
        var r = e.slice(0, 8),
          i = e.slice(8, 16),
          o = e.slice(16, 24)
        this.ciphers =
          'encrypt' === t
            ? [
                f.create({ type: 'encrypt', key: r }),
                f.create({ type: 'decrypt', key: i }),
                f.create({ type: 'encrypt', key: o }),
              ]
            : [
                f.create({ type: 'decrypt', key: o }),
                f.create({ type: 'encrypt', key: i }),
                f.create({ type: 'decrypt', key: r }),
              ]
      }
      function c(t) {
        a.call(this, t)
        var e = new s(this.type, this.options.key)
        this._edeState = e
      }
      i(c, a),
        (t.exports = c),
        (c.create = function(t) {
          return new c(t)
        }),
        (c.prototype._update = function(t, e, r, n) {
          var i = this._edeState
          i.ciphers[0]._update(t, e, r, n),
            i.ciphers[1]._update(r, n, r, n),
            i.ciphers[2]._update(r, n, r, n)
        }),
        (c.prototype._pad = f.prototype._pad),
        (c.prototype._unpad = f.prototype._unpad)
    },
    function(t, e, r) {
      var n = r(37),
        i = r(60),
        o = r(1).Buffer,
        a = r(61),
        f = r(10),
        s = r(22),
        c = r(23)
      function h(t, e, r) {
        f.call(this),
          (this._cache = new d()),
          (this._cipher = new s.AES(e)),
          (this._prev = o.from(r)),
          (this._mode = t),
          (this._autopadding = !0)
      }
      r(0)(h, f),
        (h.prototype._update = function(t) {
          var e, r
          this._cache.add(t)
          for (var n = []; (e = this._cache.get()); )
            (r = this._mode.encrypt(this, e)), n.push(r)
          return o.concat(n)
        })
      var u = o.alloc(16, 16)
      function d() {
        this.cache = o.allocUnsafe(0)
      }
      function l(t, e, r) {
        var f = n[t.toLowerCase()]
        if (!f) throw new TypeError('invalid suite type')
        if (('string' == typeof e && (e = o.from(e)), e.length !== f.key / 8))
          throw new TypeError('invalid key length ' + e.length)
        if (
          ('string' == typeof r && (r = o.from(r)),
          'GCM' !== f.mode && r.length !== f.iv)
        )
          throw new TypeError('invalid iv length ' + r.length)
        return 'stream' === f.type
          ? new a(f.module, e, r)
          : 'auth' === f.type
          ? new i(f.module, e, r)
          : new h(f.module, e, r)
      }
      ;(h.prototype._final = function() {
        var t = this._cache.flush()
        if (this._autopadding)
          return (t = this._mode.encrypt(this, t)), this._cipher.scrub(), t
        if (!t.equals(u))
          throw (this._cipher.scrub(),
          new Error('data not multiple of block length'))
      }),
        (h.prototype.setAutoPadding = function(t) {
          return (this._autopadding = !!t), this
        }),
        (d.prototype.add = function(t) {
          this.cache = o.concat([this.cache, t])
        }),
        (d.prototype.get = function() {
          if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16)
            return (this.cache = this.cache.slice(16)), t
          }
          return null
        }),
        (d.prototype.flush = function() {
          for (
            var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1;
            ++r < t;

          )
            e.writeUInt8(t, r)
          return o.concat([this.cache, e])
        }),
        (e.createCipheriv = l),
        (e.createCipher = function(t, e) {
          var r = n[t.toLowerCase()]
          if (!r) throw new TypeError('invalid suite type')
          var i = c(e, !1, r.key, r.iv)
          return l(t, i.key, i.iv)
        })
    },
    function(t, e) {
      ;(e.encrypt = function(t, e) {
        return t._cipher.encryptBlock(e)
      }),
        (e.decrypt = function(t, e) {
          return t._cipher.decryptBlock(e)
        })
    },
    function(t, e, r) {
      var n = r(17)
      ;(e.encrypt = function(t, e) {
        var r = n(e, t._prev)
        return (t._prev = t._cipher.encryptBlock(r)), t._prev
      }),
        (e.decrypt = function(t, e) {
          var r = t._prev
          t._prev = e
          var i = t._cipher.decryptBlock(e)
          return n(i, r)
        })
    },
    function(t, e, r) {
      var n = r(1).Buffer,
        i = r(17)
      function o(t, e, r) {
        var o = e.length,
          a = i(e, t._cache)
        return (
          (t._cache = t._cache.slice(o)),
          (t._prev = n.concat([t._prev, r ? e : a])),
          a
        )
      }
      e.encrypt = function(t, e, r) {
        for (var i, a = n.allocUnsafe(0); e.length; ) {
          if (
            (0 === t._cache.length &&
              ((t._cache = t._cipher.encryptBlock(t._prev)),
              (t._prev = n.allocUnsafe(0))),
            !(t._cache.length <= e.length))
          ) {
            a = n.concat([a, o(t, e, r)])
            break
          }
          ;(i = t._cache.length),
            (a = n.concat([a, o(t, e.slice(0, i), r)])),
            (e = e.slice(i))
        }
        return a
      }
    },
    function(t, e, r) {
      var n = r(1).Buffer
      function i(t, e, r) {
        var i = t._cipher.encryptBlock(t._prev)[0] ^ e
        return (t._prev = n.concat([t._prev.slice(1), n.from([r ? e : i])])), i
      }
      e.encrypt = function(t, e, r) {
        for (var o = e.length, a = n.allocUnsafe(o), f = -1; ++f < o; )
          a[f] = i(t, e[f], r)
        return a
      }
    },
    function(t, e, r) {
      var n = r(1).Buffer
      function i(t, e, r) {
        for (var n, i, a = -1, f = 0; ++a < 8; )
          (n = e & (1 << (7 - a)) ? 128 : 0),
            (f +=
              (128 & (i = t._cipher.encryptBlock(t._prev)[0] ^ n)) >> a % 8),
            (t._prev = o(t._prev, r ? n : i))
        return f
      }
      function o(t, e) {
        var r = t.length,
          i = -1,
          o = n.allocUnsafe(t.length)
        for (t = n.concat([t, n.from([e])]); ++i < r; )
          o[i] = (t[i] << 1) | (t[i + 1] >> 7)
        return o
      }
      e.encrypt = function(t, e, r) {
        for (var o = e.length, a = n.allocUnsafe(o), f = -1; ++f < o; )
          a[f] = i(t, e[f], r)
        return a
      }
    },
    function(t, e, r) {
      ;(function(t) {
        var n = r(17)
        function i(t) {
          return (t._prev = t._cipher.encryptBlock(t._prev)), t._prev
        }
        e.encrypt = function(e, r) {
          for (; e._cache.length < r.length; )
            e._cache = t.concat([e._cache, i(e)])
          var o = e._cache.slice(0, r.length)
          return (e._cache = e._cache.slice(r.length)), n(r, o)
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      var n = r(1).Buffer,
        i = n.alloc(16, 0)
      function o(t) {
        var e = n.allocUnsafe(16)
        return (
          e.writeUInt32BE(t[0] >>> 0, 0),
          e.writeUInt32BE(t[1] >>> 0, 4),
          e.writeUInt32BE(t[2] >>> 0, 8),
          e.writeUInt32BE(t[3] >>> 0, 12),
          e
        )
      }
      function a(t) {
        ;(this.h = t),
          (this.state = n.alloc(16, 0)),
          (this.cache = n.allocUnsafe(0))
      }
      ;(a.prototype.ghash = function(t) {
        for (var e = -1; ++e < t.length; ) this.state[e] ^= t[e]
        this._multiply()
      }),
        (a.prototype._multiply = function() {
          for (
            var t,
              e,
              r,
              n = [
                (t = this.h).readUInt32BE(0),
                t.readUInt32BE(4),
                t.readUInt32BE(8),
                t.readUInt32BE(12),
              ],
              i = [0, 0, 0, 0],
              a = -1;
            ++a < 128;

          ) {
            for (
              0 != (this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) &&
                ((i[0] ^= n[0]),
                (i[1] ^= n[1]),
                (i[2] ^= n[2]),
                (i[3] ^= n[3])),
                r = 0 != (1 & n[3]),
                e = 3;
              e > 0;
              e--
            )
              n[e] = (n[e] >>> 1) | ((1 & n[e - 1]) << 31)
            ;(n[0] = n[0] >>> 1), r && (n[0] = n[0] ^ (225 << 24))
          }
          this.state = o(i)
        }),
        (a.prototype.update = function(t) {
          var e
          for (
            this.cache = n.concat([this.cache, t]);
            this.cache.length >= 16;

          )
            (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(e)
        }),
        (a.prototype.final = function(t, e) {
          return (
            this.cache.length && this.ghash(n.concat([this.cache, i], 16)),
            this.ghash(o([0, t, 0, e])),
            this.state
          )
        }),
        (t.exports = a)
    },
    function(t, e, r) {
      var n = r(60),
        i = r(1).Buffer,
        o = r(37),
        a = r(61),
        f = r(10),
        s = r(22),
        c = r(23)
      function h(t, e, r) {
        f.call(this),
          (this._cache = new u()),
          (this._last = void 0),
          (this._cipher = new s.AES(e)),
          (this._prev = i.from(r)),
          (this._mode = t),
          (this._autopadding = !0)
      }
      function u() {
        this.cache = i.allocUnsafe(0)
      }
      function d(t, e, r) {
        var f = o[t.toLowerCase()]
        if (!f) throw new TypeError('invalid suite type')
        if (
          ('string' == typeof r && (r = i.from(r)),
          'GCM' !== f.mode && r.length !== f.iv)
        )
          throw new TypeError('invalid iv length ' + r.length)
        if (('string' == typeof e && (e = i.from(e)), e.length !== f.key / 8))
          throw new TypeError('invalid key length ' + e.length)
        return 'stream' === f.type
          ? new a(f.module, e, r, !0)
          : 'auth' === f.type
          ? new n(f.module, e, r, !0)
          : new h(f.module, e, r)
      }
      r(0)(h, f),
        (h.prototype._update = function(t) {
          var e, r
          this._cache.add(t)
          for (var n = []; (e = this._cache.get(this._autopadding)); )
            (r = this._mode.decrypt(this, e)), n.push(r)
          return i.concat(n)
        }),
        (h.prototype._final = function() {
          var t = this._cache.flush()
          if (this._autopadding)
            return (function(t) {
              var e = t[15]
              if (e < 1 || e > 16) throw new Error('unable to decrypt data')
              for (var r = -1; ++r < e; )
                if (t[r + (16 - e)] !== e)
                  throw new Error('unable to decrypt data')
              if (16 !== e) return t.slice(0, 16 - e)
            })(this._mode.decrypt(this, t))
          if (t) throw new Error('data not multiple of block length')
        }),
        (h.prototype.setAutoPadding = function(t) {
          return (this._autopadding = !!t), this
        }),
        (u.prototype.add = function(t) {
          this.cache = i.concat([this.cache, t])
        }),
        (u.prototype.get = function(t) {
          var e
          if (t) {
            if (this.cache.length > 16)
              return (
                (e = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                e
              )
          } else if (this.cache.length >= 16)
            return (
              (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              e
            )
          return null
        }),
        (u.prototype.flush = function() {
          if (this.cache.length) return this.cache
        }),
        (e.createDecipher = function(t, e) {
          var r = o[t.toLowerCase()]
          if (!r) throw new TypeError('invalid suite type')
          var n = c(e, !1, r.key, r.iv)
          return d(t, n.key, n.iv)
        }),
        (e.createDecipheriv = d)
    },
    function(t, e) {
      ;(e['des-ecb'] = { key: 8, iv: 0 }),
        (e['des-cbc'] = e.des = { key: 8, iv: 8 }),
        (e['des-ede3-cbc'] = e.des3 = { key: 24, iv: 8 }),
        (e['des-ede3'] = { key: 24, iv: 0 }),
        (e['des-ede-cbc'] = { key: 16, iv: 8 }),
        (e['des-ede'] = { key: 16, iv: 0 })
    },
    function(t, e, r) {
      ;(function(t) {
        var n = r(62),
          i = r(121),
          o = r(122),
          a = { binary: !0, hex: !0, base64: !0 }
        ;(e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(
          e
        ) {
          var r = new t(i[e].prime, 'hex'),
            n = new t(i[e].gen, 'hex')
          return new o(r, n)
        }),
          (e.createDiffieHellman = e.DiffieHellman = function e(r, i, f, s) {
            return t.isBuffer(i) || void 0 === a[i]
              ? e(r, 'binary', i, f)
              : ((i = i || 'binary'),
                (s = s || 'binary'),
                (f = f || new t([2])),
                t.isBuffer(f) || (f = new t(f, s)),
                'number' == typeof r
                  ? new o(n(r, f), f, !0)
                  : (t.isBuffer(r) || (r = new t(r, i)), new o(r, f, !0)))
          })
      }.call(this, r(3).Buffer))
    },
    function(t, e) {
      t.exports = function(t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function() {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        )
      }
    },
    function(t, e) {},
    function(t, e) {},
    function(t) {
      t.exports = {
        modp1: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff',
        },
        modp2: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff',
        },
        modp5: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff',
        },
        modp14: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff',
        },
        modp15: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff',
        },
        modp16: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff',
        },
        modp17: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff',
        },
        modp18: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff',
        },
      }
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(2),
          i = new (r(63))(),
          o = new n(24),
          a = new n(11),
          f = new n(10),
          s = new n(3),
          c = new n(7),
          h = r(62),
          u = r(13)
        function d(t, r) {
          return (
            (r = r || 'utf8'),
            e.isBuffer(t) || (t = new e(t, r)),
            (this._pub = new n(t)),
            this
          )
        }
        function l(t, r) {
          return (
            (r = r || 'utf8'),
            e.isBuffer(t) || (t = new e(t, r)),
            (this._priv = new n(t)),
            this
          )
        }
        t.exports = b
        var p = {}
        function b(t, e, r) {
          this.setGenerator(e),
            (this.__prime = new n(t)),
            (this._prime = n.mont(this.__prime)),
            (this._primeLen = t.length),
            (this._pub = void 0),
            (this._priv = void 0),
            (this._primeCode = void 0),
            r
              ? ((this.setPublicKey = d), (this.setPrivateKey = l))
              : (this._primeCode = 8)
        }
        function y(t, r) {
          var n = new e(t.toArray())
          return r ? n.toString(r) : n
        }
        Object.defineProperty(b.prototype, 'verifyError', {
          enumerable: !0,
          get: function() {
            return (
              'number' != typeof this._primeCode &&
                (this._primeCode = (function(t, e) {
                  var r = e.toString('hex'),
                    n = [r, t.toString(16)].join('_')
                  if (n in p) return p[n]
                  var u,
                    d = 0
                  if (
                    t.isEven() ||
                    !h.simpleSieve ||
                    !h.fermatTest(t) ||
                    !i.test(t)
                  )
                    return (
                      (d += 1),
                      (d += '02' === r || '05' === r ? 8 : 4),
                      (p[n] = d),
                      d
                    )
                  switch ((i.test(t.shrn(1)) || (d += 2), r)) {
                    case '02':
                      t.mod(o).cmp(a) && (d += 8)
                      break
                    case '05':
                      ;(u = t.mod(f)).cmp(s) && u.cmp(c) && (d += 8)
                      break
                    default:
                      d += 4
                  }
                  return (p[n] = d), d
                })(this.__prime, this.__gen)),
              this._primeCode
            )
          },
        }),
          (b.prototype.generateKeys = function() {
            return (
              this._priv || (this._priv = new n(u(this._primeLen))),
              (this._pub = this._gen
                .toRed(this._prime)
                .redPow(this._priv)
                .fromRed()),
              this.getPublicKey()
            )
          }),
          (b.prototype.computeSecret = function(t) {
            var r = (t = (t = new n(t)).toRed(this._prime))
                .redPow(this._priv)
                .fromRed(),
              i = new e(r.toArray()),
              o = this.getPrime()
            if (i.length < o.length) {
              var a = new e(o.length - i.length)
              a.fill(0), (i = e.concat([a, i]))
            }
            return i
          }),
          (b.prototype.getPublicKey = function(t) {
            return y(this._pub, t)
          }),
          (b.prototype.getPrivateKey = function(t) {
            return y(this._priv, t)
          }),
          (b.prototype.getPrime = function(t) {
            return y(this.__prime, t)
          }),
          (b.prototype.getGenerator = function(t) {
            return y(this._gen, t)
          }),
          (b.prototype.setGenerator = function(t, r) {
            return (
              (r = r || 'utf8'),
              e.isBuffer(t) || (t = new e(t, r)),
              (this.__gen = t),
              (this._gen = new n(t)),
              this
            )
          })
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(15),
          i = r(28),
          o = r(0),
          a = r(124),
          f = r(160),
          s = r(52)
        function c(t) {
          i.Writable.call(this)
          var e = s[t]
          if (!e) throw new Error('Unknown message digest')
          ;(this._hashType = e.hash),
            (this._hash = n(e.hash)),
            (this._tag = e.id),
            (this._signType = e.sign)
        }
        function h(t) {
          i.Writable.call(this)
          var e = s[t]
          if (!e) throw new Error('Unknown message digest')
          ;(this._hash = n(e.hash)),
            (this._tag = e.id),
            (this._signType = e.sign)
        }
        function u(t) {
          return new c(t)
        }
        function d(t) {
          return new h(t)
        }
        Object.keys(s).forEach(function(t) {
          ;(s[t].id = new e(s[t].id, 'hex')), (s[t.toLowerCase()] = s[t])
        }),
          o(c, i.Writable),
          (c.prototype._write = function(t, e, r) {
            this._hash.update(t), r()
          }),
          (c.prototype.update = function(t, r) {
            return (
              'string' == typeof t && (t = new e(t, r)),
              this._hash.update(t),
              this
            )
          }),
          (c.prototype.sign = function(t, e) {
            this.end()
            var r = this._hash.digest(),
              n = a(r, t, this._hashType, this._signType, this._tag)
            return e ? n.toString(e) : n
          }),
          o(h, i.Writable),
          (h.prototype._write = function(t, e, r) {
            this._hash.update(t), r()
          }),
          (h.prototype.update = function(t, r) {
            return (
              'string' == typeof t && (t = new e(t, r)),
              this._hash.update(t),
              this
            )
          }),
          (h.prototype.verify = function(t, r, n) {
            'string' == typeof r && (r = new e(r, n)), this.end()
            var i = this._hash.digest()
            return f(r, i, t, this._signType, this._tag)
          }),
          (t.exports = { Sign: u, Verify: d, createSign: u, createVerify: d })
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(50),
          i = r(38),
          o = r(4).ec,
          a = r(2),
          f = r(25),
          s = r(73)
        function c(t, r, i, o) {
          if ((t = new e(t.toArray())).length < r.byteLength()) {
            var a = new e(r.byteLength() - t.length)
            a.fill(0), (t = e.concat([a, t]))
          }
          var f = i.length,
            s = (function(t, r) {
              t = (t = h(t, r)).mod(r)
              var n = new e(t.toArray())
              if (n.length < r.byteLength()) {
                var i = new e(r.byteLength() - n.length)
                i.fill(0), (n = e.concat([i, n]))
              }
              return n
            })(i, r),
            c = new e(f)
          c.fill(1)
          var u = new e(f)
          return (
            u.fill(0),
            (u = n(o, u)
              .update(c)
              .update(new e([0]))
              .update(t)
              .update(s)
              .digest()),
            (c = n(o, u)
              .update(c)
              .digest()),
            {
              k: (u = n(o, u)
                .update(c)
                .update(new e([1]))
                .update(t)
                .update(s)
                .digest()),
              v: (c = n(o, u)
                .update(c)
                .digest()),
            }
          )
        }
        function h(t, e) {
          var r = new a(t),
            n = (t.length << 3) - e.bitLength()
          return n > 0 && r.ishrn(n), r
        }
        function u(t, r, i) {
          var o, a
          do {
            for (o = new e(0); 8 * o.length < t.bitLength(); )
              (r.v = n(i, r.k)
                .update(r.v)
                .digest()),
                (o = e.concat([o, r.v]))
            ;(a = h(o, t)),
              (r.k = n(i, r.k)
                .update(r.v)
                .update(new e([0]))
                .digest()),
              (r.v = n(i, r.k)
                .update(r.v)
                .digest())
          } while (-1 !== a.cmp(t))
          return a
        }
        function d(t, e, r, n) {
          return t
            .toRed(a.mont(r))
            .redPow(e)
            .fromRed()
            .mod(n)
        }
        ;(t.exports = function(t, r, n, l, p) {
          var b = f(r)
          if (b.curve) {
            if ('ecdsa' !== l && 'ecdsa/rsa' !== l)
              throw new Error('wrong private key type')
            return (function(t, r) {
              var n = s[r.curve.join('.')]
              if (!n) throw new Error('unknown curve ' + r.curve.join('.'))
              var i = new o(n).keyFromPrivate(r.privateKey).sign(t)
              return new e(i.toDER())
            })(t, b)
          }
          if ('dsa' === b.type) {
            if ('dsa' !== l) throw new Error('wrong private key type')
            return (function(t, r, n) {
              for (
                var i,
                  o = r.params.priv_key,
                  f = r.params.p,
                  s = r.params.q,
                  l = r.params.g,
                  p = new a(0),
                  b = h(t, s).mod(s),
                  y = !1,
                  m = c(o, s, t, n);
                !1 === y;

              )
                (p = d(l, (i = u(s, m, n)), f, s)),
                  0 ===
                    (y = i
                      .invm(s)
                      .imul(b.add(o.mul(p)))
                      .mod(s)).cmpn(0) && ((y = !1), (p = new a(0)))
              return (function(t, r) {
                ;(t = t.toArray()),
                  (r = r.toArray()),
                  128 & t[0] && (t = [0].concat(t)),
                  128 & r[0] && (r = [0].concat(r))
                var n = [48, t.length + r.length + 4, 2, t.length]
                return (n = n.concat(t, [2, r.length], r)), new e(n)
              })(p, y)
            })(t, b, n)
          }
          if ('rsa' !== l && 'ecdsa/rsa' !== l)
            throw new Error('wrong private key type')
          t = e.concat([p, t])
          for (
            var y = b.modulus.byteLength(), m = [0, 1];
            t.length + m.length + 1 < y;

          )
            m.push(255)
          m.push(0)
          for (var g = -1; ++g < t.length; ) m.push(t[g])
          return i(m, b)
        }),
          (t.exports.getKey = c),
          (t.exports.makeKey = u)
      }.call(this, r(3).Buffer))
    },
    function(t) {
      t.exports = {
        name: 'elliptic',
        version: '6.4.1',
        description: 'EC cryptography',
        main: 'lib/elliptic.js',
        files: ['lib'],
        scripts: {
          jscs:
            'jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js',
          jshint:
            'jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js',
          lint: 'npm run jscs && npm run jshint',
          unit: 'istanbul test _mocha --reporter=spec test/index.js',
          test: 'npm run lint && npm run unit',
          version: 'grunt dist && git add dist/',
        },
        repository: { type: 'git', url: 'git@github.com:indutny/elliptic' },
        keywords: ['EC', 'Elliptic', 'curve', 'Cryptography'],
        author: 'Fedor Indutny <fedor@indutny.com>',
        license: 'MIT',
        bugs: { url: 'https://github.com/indutny/elliptic/issues' },
        homepage: 'https://github.com/indutny/elliptic',
        devDependencies: {
          brfs: '^1.4.3',
          coveralls: '^2.11.3',
          grunt: '^0.4.5',
          'grunt-browserify': '^5.0.0',
          'grunt-cli': '^1.2.0',
          'grunt-contrib-connect': '^1.0.0',
          'grunt-contrib-copy': '^1.0.0',
          'grunt-contrib-uglify': '^1.0.1',
          'grunt-mocha-istanbul': '^3.0.1',
          'grunt-saucelabs': '^8.6.2',
          istanbul: '^0.4.2',
          jscs: '^2.9.0',
          jshint: '^2.6.0',
          mocha: '^2.1.0',
        },
        dependencies: {
          'bn.js': '^4.4.0',
          brorand: '^1.0.1',
          'hash.js': '^1.0.0',
          'hmac-drbg': '^1.0.0',
          inherits: '^2.0.1',
          'minimalistic-assert': '^1.0.0',
          'minimalistic-crypto-utils': '^1.0.0',
        },
      }
    },
    function(t, e, r) {
      'use strict'
      var n = e,
        i = r(2),
        o = r(6),
        a = r(65)
      ;(n.assert = o),
        (n.toArray = a.toArray),
        (n.zero2 = a.zero2),
        (n.toHex = a.toHex),
        (n.encode = a.encode),
        (n.getNAF = function(t, e) {
          for (var r = [], n = 1 << (e + 1), i = t.clone(); i.cmpn(1) >= 0; ) {
            var o
            if (i.isOdd()) {
              var a = i.andln(n - 1)
              ;(o = a > (n >> 1) - 1 ? (n >> 1) - a : a), i.isubn(o)
            } else o = 0
            r.push(o)
            for (
              var f = 0 !== i.cmpn(0) && 0 === i.andln(n - 1) ? e + 1 : 1,
                s = 1;
              s < f;
              s++
            )
              r.push(0)
            i.iushrn(f)
          }
          return r
        }),
        (n.getJSF = function(t, e) {
          var r = [[], []]
          ;(t = t.clone()), (e = e.clone())
          for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
            var o,
              a,
              f,
              s = (t.andln(3) + n) & 3,
              c = (e.andln(3) + i) & 3
            3 === s && (s = -1),
              3 === c && (c = -1),
              (o =
                0 == (1 & s)
                  ? 0
                  : (3 != (f = (t.andln(7) + n) & 7) && 5 !== f) || 2 !== c
                  ? s
                  : -s),
              r[0].push(o),
              (a =
                0 == (1 & c)
                  ? 0
                  : (3 != (f = (e.andln(7) + i) & 7) && 5 !== f) || 2 !== s
                  ? c
                  : -c),
              r[1].push(a),
              2 * n === o + 1 && (n = 1 - n),
              2 * i === a + 1 && (i = 1 - i),
              t.iushrn(1),
              e.iushrn(1)
          }
          return r
        }),
        (n.cachedProperty = function(t, e, r) {
          var n = '_' + e
          t.prototype[e] = function() {
            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this))
          }
        }),
        (n.parseBytes = function(t) {
          return 'string' == typeof t ? n.toArray(t, 'hex') : t
        }),
        (n.intFromLE = function(t) {
          return new i(t, 'hex', 'le')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(2),
        i = r(4).utils,
        o = i.getNAF,
        a = i.getJSF,
        f = i.assert
      function s(t, e) {
        ;(this.type = t),
          (this.p = new n(e.p, 16)),
          (this.red = e.prime ? n.red(e.prime) : n.mont(this.p)),
          (this.zero = new n(0).toRed(this.red)),
          (this.one = new n(1).toRed(this.red)),
          (this.two = new n(2).toRed(this.red)),
          (this.n = e.n && new n(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4))
        var r = this.n && this.p.div(this.n)
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
      }
      function c(t, e) {
        ;(this.curve = t), (this.type = e), (this.precomputed = null)
      }
      ;(t.exports = s),
        (s.prototype.point = function() {
          throw new Error('Not implemented')
        }),
        (s.prototype.validate = function() {
          throw new Error('Not implemented')
        }),
        (s.prototype._fixedNafMul = function(t, e) {
          f(t.precomputed)
          var r = t._getDoubles(),
            n = o(e, 1),
            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1)
          i /= 3
          for (var a = [], s = 0; s < n.length; s += r.step) {
            var c = 0
            for (e = s + r.step - 1; e >= s; e--) c = (c << 1) + n[e]
            a.push(c)
          }
          for (
            var h = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              d = i;
            d > 0;
            d--
          ) {
            for (s = 0; s < a.length; s++)
              (c = a[s]) === d
                ? (u = u.mixedAdd(r.points[s]))
                : c === -d && (u = u.mixedAdd(r.points[s].neg()))
            h = h.add(u)
          }
          return h.toP()
        }),
        (s.prototype._wnafMul = function(t, e) {
          var r = 4,
            n = t._getNAFPoints(r)
          r = n.wnd
          for (
            var i = n.points,
              a = o(e, r),
              s = this.jpoint(null, null, null),
              c = a.length - 1;
            c >= 0;
            c--
          ) {
            for (e = 0; c >= 0 && 0 === a[c]; c--) e++
            if ((c >= 0 && e++, (s = s.dblp(e)), c < 0)) break
            var h = a[c]
            f(0 !== h),
              (s =
                'affine' === t.type
                  ? h > 0
                    ? s.mixedAdd(i[(h - 1) >> 1])
                    : s.mixedAdd(i[(-h - 1) >> 1].neg())
                  : h > 0
                  ? s.add(i[(h - 1) >> 1])
                  : s.add(i[(-h - 1) >> 1].neg()))
          }
          return 'affine' === t.type ? s.toP() : s
        }),
        (s.prototype._wnafMulAdd = function(t, e, r, n, i) {
          for (
            var f = this._wnafT1,
              s = this._wnafT2,
              c = this._wnafT3,
              h = 0,
              u = 0;
            u < n;
            u++
          ) {
            var d = (E = e[u])._getNAFPoints(t)
            ;(f[u] = d.wnd), (s[u] = d.points)
          }
          for (u = n - 1; u >= 1; u -= 2) {
            var l = u - 1,
              p = u
            if (1 === f[l] && 1 === f[p]) {
              var b = [e[l], null, null, e[p]]
              0 === e[l].y.cmp(e[p].y)
                ? ((b[1] = e[l].add(e[p])),
                  (b[2] = e[l].toJ().mixedAdd(e[p].neg())))
                : 0 === e[l].y.cmp(e[p].y.redNeg())
                ? ((b[1] = e[l].toJ().mixedAdd(e[p])),
                  (b[2] = e[l].add(e[p].neg())))
                : ((b[1] = e[l].toJ().mixedAdd(e[p])),
                  (b[2] = e[l].toJ().mixedAdd(e[p].neg())))
              var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                m = a(r[l], r[p])
              ;(h = Math.max(m[0].length, h)),
                (c[l] = new Array(h)),
                (c[p] = new Array(h))
              for (var g = 0; g < h; g++) {
                var v = 0 | m[0][g],
                  _ = 0 | m[1][g]
                ;(c[l][g] = y[3 * (v + 1) + (_ + 1)]), (c[p][g] = 0), (s[l] = b)
              }
            } else
              (c[l] = o(r[l], f[l])),
                (c[p] = o(r[p], f[p])),
                (h = Math.max(c[l].length, h)),
                (h = Math.max(c[p].length, h))
          }
          var w = this.jpoint(null, null, null),
            S = this._wnafT4
          for (u = h; u >= 0; u--) {
            for (var M = 0; u >= 0; ) {
              var k = !0
              for (g = 0; g < n; g++)
                (S[g] = 0 | c[g][u]), 0 !== S[g] && (k = !1)
              if (!k) break
              M++, u--
            }
            if ((u >= 0 && M++, (w = w.dblp(M)), u < 0)) break
            for (g = 0; g < n; g++) {
              var E,
                A = S[g]
              0 !== A &&
                (A > 0
                  ? (E = s[g][(A - 1) >> 1])
                  : A < 0 && (E = s[g][(-A - 1) >> 1].neg()),
                (w = 'affine' === E.type ? w.mixedAdd(E) : w.add(E)))
            }
          }
          for (u = 0; u < n; u++) s[u] = null
          return i ? w : w.toP()
        }),
        (s.BasePoint = c),
        (c.prototype.eq = function() {
          throw new Error('Not implemented')
        }),
        (c.prototype.validate = function() {
          return this.curve.validate(this)
        }),
        (s.prototype.decodePoint = function(t, e) {
          t = i.toArray(t, e)
          var r = this.p.byteLength()
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0]
                ? f(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && f(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            )
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0])
          throw new Error('Unknown point format')
        }),
        (c.prototype.encodeCompressed = function(t) {
          return this.encode(t, !0)
        }),
        (c.prototype._encode = function(t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray('be', e)
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', e))
        }),
        (c.prototype.encode = function(t, e) {
          return i.encode(this._encode(e), t)
        }),
        (c.prototype.precompute = function(t) {
          if (this.precomputed) return this
          var e = { doubles: null, naf: null, beta: null }
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          )
        }),
        (c.prototype._hasDoubles = function(t) {
          if (!this.precomputed) return !1
          var e = this.precomputed.doubles
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          )
        }),
        (c.prototype._getDoubles = function(t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl()
            r.push(n)
          }
          return { step: t, points: r }
        }),
        (c.prototype._getNAFPoints = function(t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n)
          return { wnd: t, points: e }
        }),
        (c.prototype._getBeta = function() {
          return null
        }),
        (c.prototype.dblp = function(t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl()
          return e
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(4),
        o = r(2),
        a = r(0),
        f = n.base,
        s = i.utils.assert
      function c(t) {
        f.call(this, 'short', t),
          (this.a = new o(t.a, 16).toRed(this.red)),
          (this.b = new o(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4))
      }
      function h(t, e, r, n) {
        f.BasePoint.call(this, t, 'affine'),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new o(e, 16)),
              (this.y = new o(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
      }
      function u(t, e, r, n) {
        f.BasePoint.call(this, t, 'jacobian'),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new o(0)))
            : ((this.x = new o(e, 16)),
              (this.y = new o(r, 16)),
              (this.z = new o(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one)
      }
      a(c, f),
        (t.exports = c),
        (c.prototype._getEndomorphism = function(t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r
            if (t.beta) e = new o(t.beta, 16).toRed(this.red)
            else {
              var n = this._getEndoRoots(this.p)
              e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
            }
            if (t.lambda) r = new o(t.lambda, 16)
            else {
              var i = this._getEndoRoots(this.n)
              0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))
                ? (r = i[0])
                : ((r = i[1]), s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
            }
            return {
              beta: e,
              lambda: r,
              basis: t.basis
                ? t.basis.map(function(t) {
                    return { a: new o(t.a, 16), b: new o(t.b, 16) }
                  })
                : this._getEndoBasis(r),
            }
          }
        }),
        (c.prototype._getEndoRoots = function(t) {
          var e = t === this.p ? this.red : o.mont(t),
            r = new o(2).toRed(e).redInvm(),
            n = r.redNeg(),
            i = new o(3)
              .toRed(e)
              .redNeg()
              .redSqrt()
              .redMul(r)
          return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
        }),
        (c.prototype._getEndoBasis = function(t) {
          for (
            var e,
              r,
              n,
              i,
              a,
              f,
              s,
              c,
              h,
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              l = this.n.clone(),
              p = new o(1),
              b = new o(0),
              y = new o(0),
              m = new o(1),
              g = 0;
            0 !== d.cmpn(0);

          ) {
            var v = l.div(d)
            ;(c = l.sub(v.mul(d))), (h = y.sub(v.mul(p)))
            var _ = m.sub(v.mul(b))
            if (!n && c.cmp(u) < 0)
              (e = s.neg()), (r = p), (n = c.neg()), (i = h)
            else if (n && 2 == ++g) break
            ;(s = c), (l = d), (d = c), (y = p), (p = h), (m = b), (b = _)
          }
          ;(a = c.neg()), (f = h)
          var w = n.sqr().add(i.sqr())
          return (
            a
              .sqr()
              .add(f.sqr())
              .cmp(w) >= 0 && ((a = e), (f = r)),
            n.negative && ((n = n.neg()), (i = i.neg())),
            a.negative && ((a = a.neg()), (f = f.neg())),
            [{ a: n, b: i }, { a: a, b: f }]
          )
        }),
        (c.prototype._endoSplit = function(t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b
              .neg()
              .mul(t)
              .divRound(this.n),
            a = i.mul(r.a),
            f = o.mul(n.a),
            s = i.mul(r.b),
            c = o.mul(n.b)
          return { k1: t.sub(a).sub(f), k2: s.add(c).neg() }
        }),
        (c.prototype.pointFromX = function(t, e) {
          ;(t = new o(t, 16)).red || (t = t.toRed(this.red))
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt()
          if (
            0 !==
            n
              .redSqr()
              .redSub(r)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var i = n.fromRed().isOdd()
          return ((e && !i) || (!e && i)) && (n = n.redNeg()), this.point(t, n)
        }),
        (c.prototype.validate = function(t) {
          if (t.inf) return !0
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e
              .redSqr()
              .redMul(e)
              .redIAdd(n)
              .redIAdd(this.b)
          return (
            0 ===
            r
              .redSqr()
              .redISub(i)
              .cmpn(0)
          )
        }),
        (c.prototype._endoWnafMulAdd = function(t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var a = this._endoSplit(e[o]),
              f = t[o],
              s = f._getBeta()
            a.k1.negative && (a.k1.ineg(), (f = f.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (s = s.neg(!0))),
              (n[2 * o] = f),
              (n[2 * o + 1] = s),
              (i[2 * o] = a.k1),
              (i[2 * o + 1] = a.k2)
          }
          for (
            var c = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0;
            h < 2 * o;
            h++
          )
            (n[h] = null), (i[h] = null)
          return c
        }),
        a(h, f.BasePoint),
        (c.prototype.point = function(t, e, r) {
          return new h(this, t, e, r)
        }),
        (c.prototype.pointFromJSON = function(t, e) {
          return h.fromJSON(this, t, e)
        }),
        (h.prototype._getBeta = function() {
          if (this.curve.endo) {
            var t = this.precomputed
            if (t && t.beta) return t.beta
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            )
            if (t) {
              var r = this.curve,
                n = function(t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y)
                }
              ;(t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                })
            }
            return e
          }
        }),
        (h.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y]
        }),
        (h.fromJSON = function(t, e, r) {
          'string' == typeof e && (e = JSON.parse(e))
          var n = t.point(e[0], e[1], r)
          if (!e[2]) return n
          function i(e) {
            return t.point(e[0], e[1], r)
          }
          var o = e[2]
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          )
        }),
        (h.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>'
        }),
        (h.prototype.isInfinity = function() {
          return this.inf
        }),
        (h.prototype.add = function(t) {
          if (this.inf) return t
          if (t.inf) return this
          if (this.eq(t)) return this.dbl()
          if (this.neg().eq(t)) return this.curve.point(null, null)
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null)
          var e = this.y.redSub(t.y)
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()))
          var r = e
              .redSqr()
              .redISub(this.x)
              .redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y)
          return this.curve.point(r, n)
        }),
        (h.prototype.dbl = function() {
          if (this.inf) return this
          var t = this.y.redAdd(this.y)
          if (0 === t.cmpn(0)) return this.curve.point(null, null)
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r
              .redAdd(r)
              .redIAdd(r)
              .redIAdd(e)
              .redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y)
          return this.curve.point(o, a)
        }),
        (h.prototype.getX = function() {
          return this.x.fromRed()
        }),
        (h.prototype.getY = function() {
          return this.y.fromRed()
        }),
        (h.prototype.mul = function(t) {
          return (
            (t = new o(t, 16)),
            this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          )
        }),
        (h.prototype.mulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2)
        }),
        (h.prototype.jmulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }),
        (h.prototype.eq = function(t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          )
        }),
        (h.prototype.neg = function(t) {
          if (this.inf) return this
          var e = this.curve.point(this.x, this.y.redNeg())
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function(t) {
                return t.neg()
              }
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            }
          }
          return e
        }),
        (h.prototype.toJ = function() {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one)
        }),
        a(u, f.BasePoint),
        (c.prototype.jpoint = function(t, e, r) {
          return new u(this, t, e, r)
        }),
        (u.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null)
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t)
          return this.curve.point(r, n)
        }),
        (u.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }),
        (u.prototype.add = function(t) {
          if (this.isInfinity()) return t
          if (t.isInfinity()) return this
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            a = t.y.redMul(r.redMul(this.z)),
            f = n.redSub(i),
            s = o.redSub(a)
          if (0 === f.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var c = f.redSqr(),
            h = c.redMul(f),
            u = n.redMul(c),
            d = s
              .redSqr()
              .redIAdd(h)
              .redISub(u)
              .redISub(u),
            l = s.redMul(u.redISub(d)).redISub(o.redMul(h)),
            p = this.z.redMul(t.z).redMul(f)
          return this.curve.jpoint(d, l, p)
        }),
        (u.prototype.mixedAdd = function(t) {
          if (this.isInfinity()) return t.toJ()
          if (t.isInfinity()) return this
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            a = r.redSub(n),
            f = i.redSub(o)
          if (0 === a.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var s = a.redSqr(),
            c = s.redMul(a),
            h = r.redMul(s),
            u = f
              .redSqr()
              .redIAdd(c)
              .redISub(h)
              .redISub(h),
            d = f.redMul(h.redISub(u)).redISub(i.redMul(c)),
            l = this.z.redMul(a)
          return this.curve.jpoint(u, d, l)
        }),
        (u.prototype.dblp = function(t) {
          if (0 === t) return this
          if (this.isInfinity()) return this
          if (!t) return this.dbl()
          if (this.curve.zeroA || this.curve.threeA) {
            for (var e = this, r = 0; r < t; r++) e = e.dbl()
            return e
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            f = this.z,
            s = f.redSqr().redSqr(),
            c = a.redAdd(a)
          for (r = 0; r < t; r++) {
            var h = o.redSqr(),
              u = c.redSqr(),
              d = u.redSqr(),
              l = h
                .redAdd(h)
                .redIAdd(h)
                .redIAdd(n.redMul(s)),
              p = o.redMul(u),
              b = l.redSqr().redISub(p.redAdd(p)),
              y = p.redISub(b),
              m = l.redMul(y)
            m = m.redIAdd(m).redISub(d)
            var g = c.redMul(f)
            r + 1 < t && (s = s.redMul(d)), (o = b), (f = g), (c = m)
          }
          return this.curve.jpoint(o, c.redMul(i), f)
        }),
        (u.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl()
        }),
        (u.prototype._zeroDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            a = a.redIAdd(a)
            var f = n.redAdd(n).redIAdd(n),
              s = f
                .redSqr()
                .redISub(a)
                .redISub(a),
              c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)),
              (t = s),
              (e = f.redMul(a.redISub(s)).redISub(c)),
              (r = this.y.redAdd(this.y))
          } else {
            var h = this.x.redSqr(),
              u = this.y.redSqr(),
              d = u.redSqr(),
              l = this.x
                .redAdd(u)
                .redSqr()
                .redISub(h)
                .redISub(d)
            l = l.redIAdd(l)
            var p = h.redAdd(h).redIAdd(h),
              b = p.redSqr(),
              y = d.redIAdd(d)
            ;(y = (y = y.redIAdd(y)).redIAdd(y)),
              (t = b.redISub(l).redISub(l)),
              (e = p.redMul(l.redISub(t)).redISub(y)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (u.prototype._threeDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            a = a.redIAdd(a)
            var f = n
                .redAdd(n)
                .redIAdd(n)
                .redIAdd(this.curve.a),
              s = f
                .redSqr()
                .redISub(a)
                .redISub(a)
            t = s
            var c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = f.redMul(a.redISub(s)).redISub(c)),
              (r = this.y.redAdd(this.y))
          } else {
            var h = this.z.redSqr(),
              u = this.y.redSqr(),
              d = this.x.redMul(u),
              l = this.x.redSub(h).redMul(this.x.redAdd(h))
            l = l.redAdd(l).redIAdd(l)
            var p = d.redIAdd(d),
              b = (p = p.redIAdd(p)).redAdd(p)
            ;(t = l.redSqr().redISub(b)),
              (r = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(u)
                .redISub(h))
            var y = u.redSqr()
            ;(y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)),
              (e = l.redMul(p.redISub(t)).redISub(y))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (u.prototype._dbl = function() {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            a = r.redSqr(),
            f = o
              .redAdd(o)
              .redIAdd(o)
              .redIAdd(t.redMul(i)),
            s = e.redAdd(e),
            c = (s = s.redIAdd(s)).redMul(a),
            h = f.redSqr().redISub(c.redAdd(c)),
            u = c.redISub(h),
            d = a.redSqr()
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d)
          var l = f.redMul(u).redISub(d),
            p = r.redAdd(r).redMul(n)
          return this.curve.jpoint(h, l, p)
        }),
        (u.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this)
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            a = this.x
              .redAdd(e)
              .redSqr()
              .redISub(t)
              .redISub(n),
            f = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              o
            )).redSqr(),
            s = n.redIAdd(n)
          s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s)
          var c = i
              .redIAdd(a)
              .redSqr()
              .redISub(o)
              .redISub(f)
              .redISub(s),
            h = e.redMul(c)
          h = (h = h.redIAdd(h)).redIAdd(h)
          var u = this.x.redMul(f).redISub(h)
          u = (u = u.redIAdd(u)).redIAdd(u)
          var d = this.y.redMul(c.redMul(s.redISub(c)).redISub(a.redMul(f)))
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d)
          var l = this.z
            .redAdd(a)
            .redSqr()
            .redISub(r)
            .redISub(f)
          return this.curve.jpoint(u, d, l)
        }),
        (u.prototype.mul = function(t, e) {
          return (t = new o(t, e)), this.curve._wnafMul(this, t)
        }),
        (u.prototype.eq = function(t) {
          if ('affine' === t.type) return this.eq(t.toJ())
          if (this === t) return !0
          var e = this.z.redSqr(),
            r = t.z.redSqr()
          if (
            0 !==
            this.x
              .redMul(r)
              .redISub(t.x.redMul(e))
              .cmpn(0)
          )
            return !1
          var n = e.redMul(this.z),
            i = r.redMul(t.z)
          return (
            0 ===
            this.y
              .redMul(i)
              .redISub(t.y.redMul(n))
              .cmpn(0)
          )
        }),
        (u.prototype.eqXToP = function(t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e)
          if (0 === this.x.cmp(r)) return !0
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0
          }
        }),
        (u.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>'
        }),
        (u.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(2),
        o = r(0),
        a = n.base,
        f = r(4).utils
      function s(t) {
        a.call(this, 'mont', t),
          (this.a = new i(t.a, 16).toRed(this.red)),
          (this.b = new i(t.b, 16).toRed(this.red)),
          (this.i4 = new i(4).toRed(this.red).redInvm()),
          (this.two = new i(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)))
      }
      function c(t, e, r) {
        a.BasePoint.call(this, t, 'projective'),
          null === e && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new i(e, 16)),
              (this.z = new i(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)))
      }
      o(s, a),
        (t.exports = s),
        (s.prototype.validate = function(t) {
          var e = t.normalize().x,
            r = e.redSqr(),
            n = r
              .redMul(e)
              .redAdd(r.redMul(this.a))
              .redAdd(e)
          return (
            0 ===
            n
              .redSqrt()
              .redSqr()
              .cmp(n)
          )
        }),
        o(c, a.BasePoint),
        (s.prototype.decodePoint = function(t, e) {
          return this.point(f.toArray(t, e), 1)
        }),
        (s.prototype.point = function(t, e) {
          return new c(this, t, e)
        }),
        (s.prototype.pointFromJSON = function(t) {
          return c.fromJSON(this, t)
        }),
        (c.prototype.precompute = function() {}),
        (c.prototype._encode = function() {
          return this.getX().toArray('be', this.curve.p.byteLength())
        }),
        (c.fromJSON = function(t, e) {
          return new c(t, e[0], e[1] || t.one)
        }),
        (c.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>'
        }),
        (c.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        }),
        (c.prototype.dbl = function() {
          var t = this.x.redAdd(this.z).redSqr(),
            e = this.x.redSub(this.z).redSqr(),
            r = t.redSub(e),
            n = t.redMul(e),
            i = r.redMul(e.redAdd(this.curve.a24.redMul(r)))
          return this.curve.point(n, i)
        }),
        (c.prototype.add = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (c.prototype.diffAdd = function(t, e) {
          var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = t.x.redAdd(t.z),
            o = t.x.redSub(t.z).redMul(r),
            a = i.redMul(n),
            f = e.z.redMul(o.redAdd(a).redSqr()),
            s = e.x.redMul(o.redISub(a).redSqr())
          return this.curve.point(f, s)
        }),
        (c.prototype.mul = function(t) {
          for (
            var e = t.clone(),
              r = this,
              n = this.curve.point(null, null),
              i = [];
            0 !== e.cmpn(0);
            e.iushrn(1)
          )
            i.push(e.andln(1))
          for (var o = i.length - 1; o >= 0; o--)
            0 === i[o]
              ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
              : ((n = r.diffAdd(n, this)), (r = r.dbl()))
          return n
        }),
        (c.prototype.mulAdd = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (c.prototype.jumlAdd = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (c.prototype.eq = function(t) {
          return 0 === this.getX().cmp(t.getX())
        }),
        (c.prototype.normalize = function() {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          )
        }),
        (c.prototype.getX = function() {
          return this.normalize(), this.x.fromRed()
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(24),
        i = r(4),
        o = r(2),
        a = r(0),
        f = n.base,
        s = i.utils.assert
      function c(t) {
        ;(this.twisted = 1 != (0 | t.a)),
          (this.mOneA = this.twisted && -1 == (0 | t.a)),
          (this.extended = this.mOneA),
          f.call(this, 'edwards', t),
          (this.a = new o(t.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new o(t.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new o(t.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 == (0 | t.c))
      }
      function h(t, e, r, n, i) {
        f.BasePoint.call(this, t, 'projective'),
          null === e && null === r && null === n
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new o(e, 16)),
              (this.y = new o(r, 16)),
              (this.z = n ? new o(n, 16) : this.curve.one),
              (this.t = i && new o(i, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
      }
      a(c, f),
        (t.exports = c),
        (c.prototype._mulA = function(t) {
          return this.mOneA ? t.redNeg() : this.a.redMul(t)
        }),
        (c.prototype._mulC = function(t) {
          return this.oneC ? t : this.c.redMul(t)
        }),
        (c.prototype.jpoint = function(t, e, r, n) {
          return this.point(t, e, r, n)
        }),
        (c.prototype.pointFromX = function(t, e) {
          ;(t = new o(t, 16)).red || (t = t.toRed(this.red))
          var r = t.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            i = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = n.redMul(i.redInvm()),
            f = a.redSqrt()
          if (
            0 !==
            f
              .redSqr()
              .redSub(a)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var s = f.fromRed().isOdd()
          return ((e && !s) || (!e && s)) && (f = f.redNeg()), this.point(t, f)
        }),
        (c.prototype.pointFromY = function(t, e) {
          ;(t = new o(t, 16)).red || (t = t.toRed(this.red))
          var r = t.redSqr(),
            n = r.redSub(this.c2),
            i = r
              .redMul(this.d)
              .redMul(this.c2)
              .redSub(this.a),
            a = n.redMul(i.redInvm())
          if (0 === a.cmp(this.zero)) {
            if (e) throw new Error('invalid point')
            return this.point(this.zero, t)
          }
          var f = a.redSqrt()
          if (
            0 !==
            f
              .redSqr()
              .redSub(a)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          return f.fromRed().isOdd() !== e && (f = f.redNeg()), this.point(f, t)
        }),
        (c.prototype.validate = function(t) {
          if (t.isInfinity()) return !0
          t.normalize()
          var e = t.x.redSqr(),
            r = t.y.redSqr(),
            n = e.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)))
          return 0 === n.cmp(i)
        }),
        a(h, f.BasePoint),
        (c.prototype.pointFromJSON = function(t) {
          return h.fromJSON(this, t)
        }),
        (c.prototype.point = function(t, e, r, n) {
          return new h(this, t, e, r, n)
        }),
        (h.fromJSON = function(t, e) {
          return new h(t, e[0], e[1], e[2])
        }),
        (h.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>'
        }),
        (h.prototype.isInfinity = function() {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          )
        }),
        (h.prototype._extDbl = function() {
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr()
          r = r.redIAdd(r)
          var n = this.curve._mulA(t),
            i = this.x
              .redAdd(this.y)
              .redSqr()
              .redISub(t)
              .redISub(e),
            o = n.redAdd(e),
            a = o.redSub(r),
            f = n.redSub(e),
            s = i.redMul(a),
            c = o.redMul(f),
            h = i.redMul(f),
            u = a.redMul(o)
          return this.curve.point(s, c, u, h)
        }),
        (h.prototype._projDbl = function() {
          var t,
            e,
            r,
            n = this.x.redAdd(this.y).redSqr(),
            i = this.x.redSqr(),
            o = this.y.redSqr()
          if (this.curve.twisted) {
            var a = (c = this.curve._mulA(i)).redAdd(o)
            if (this.zOne)
              (t = n
                .redSub(i)
                .redSub(o)
                .redMul(a.redSub(this.curve.two))),
                (e = a.redMul(c.redSub(o))),
                (r = a
                  .redSqr()
                  .redSub(a)
                  .redSub(a))
            else {
              var f = this.z.redSqr(),
                s = a.redSub(f).redISub(f)
              ;(t = n
                .redSub(i)
                .redISub(o)
                .redMul(s)),
                (e = a.redMul(c.redSub(o))),
                (r = a.redMul(s))
            }
          } else {
            var c = i.redAdd(o)
            ;(f = this.curve._mulC(this.z).redSqr()),
              (s = c.redSub(f).redSub(f)),
              (t = this.curve._mulC(n.redISub(c)).redMul(s)),
              (e = this.curve._mulC(c).redMul(i.redISub(o))),
              (r = c.redMul(s))
          }
          return this.curve.point(t, e, r)
        }),
        (h.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl()
        }),
        (h.prototype._extAdd = function(t) {
          var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
            r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            n = this.t.redMul(this.curve.dd).redMul(t.t),
            i = this.z.redMul(t.z.redAdd(t.z)),
            o = r.redSub(e),
            a = i.redSub(n),
            f = i.redAdd(n),
            s = r.redAdd(e),
            c = o.redMul(a),
            h = f.redMul(s),
            u = o.redMul(s),
            d = a.redMul(f)
          return this.curve.point(c, h, d, u)
        }),
        (h.prototype._projAdd = function(t) {
          var e,
            r,
            n = this.z.redMul(t.z),
            i = n.redSqr(),
            o = this.x.redMul(t.x),
            a = this.y.redMul(t.y),
            f = this.curve.d.redMul(o).redMul(a),
            s = i.redSub(f),
            c = i.redAdd(f),
            h = this.x
              .redAdd(this.y)
              .redMul(t.x.redAdd(t.y))
              .redISub(o)
              .redISub(a),
            u = n.redMul(s).redMul(h)
          return (
            this.curve.twisted
              ? ((e = n.redMul(c).redMul(a.redSub(this.curve._mulA(o)))),
                (r = s.redMul(c)))
              : ((e = n.redMul(c).redMul(a.redSub(o))),
                (r = this.curve._mulC(s).redMul(c))),
            this.curve.point(u, e, r)
          )
        }),
        (h.prototype.add = function(t) {
          return this.isInfinity()
            ? t
            : t.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(t)
            : this._projAdd(t)
        }),
        (h.prototype.mul = function(t) {
          return this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve._wnafMul(this, t)
        }),
        (h.prototype.mulAdd = function(t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
        }),
        (h.prototype.jmulAdd = function(t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
        }),
        (h.prototype.normalize = function() {
          if (this.zOne) return this
          var t = this.z.redInvm()
          return (
            (this.x = this.x.redMul(t)),
            (this.y = this.y.redMul(t)),
            this.t && (this.t = this.t.redMul(t)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          )
        }),
        (h.prototype.neg = function() {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          )
        }),
        (h.prototype.getX = function() {
          return this.normalize(), this.x.fromRed()
        }),
        (h.prototype.getY = function() {
          return this.normalize(), this.y.fromRed()
        }),
        (h.prototype.eq = function(t) {
          return (
            this === t ||
            (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()))
          )
        }),
        (h.prototype.eqXToP = function(t) {
          var e = t.toRed(this.curve.red).redMul(this.z)
          if (0 === this.x.cmp(e)) return !0
          for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1
            if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0
          }
        }),
        (h.prototype.toP = h.prototype.normalize),
        (h.prototype.mixedAdd = h.prototype.add)
    },
    function(t, e, r) {
      'use strict'
      var n,
        i = e,
        o = r(39),
        a = r(4),
        f = a.utils.assert
      function s(t) {
        'short' === t.type
          ? (this.curve = new a.curve.short(t))
          : 'edwards' === t.type
          ? (this.curve = new a.curve.edwards(t))
          : (this.curve = new a.curve.mont(t)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = t.hash),
          f(this.g.validate(), 'Invalid curve'),
          f(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O')
      }
      function c(t, e) {
        Object.defineProperty(i, t, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            var r = new s(e)
            return (
              Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
              }),
              r
            )
          },
        })
      }
      ;(i.PresetCurve = s),
        c('p192', {
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
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
          ],
        }),
        c('p224', {
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
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
          ],
        }),
        c('p256', {
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
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
          ],
        }),
        c('p384', {
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
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
          ],
        }),
        c('p521', {
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
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
          ],
        }),
        c('curve25519', {
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
          g: ['9'],
        }),
        c('ed25519', {
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
            '6666666666666666666666666666666666666666666666666666666666666658',
          ],
        })
      try {
        n = r(138)
      } catch (t) {
        n = void 0
      }
      c('secp256k1', {
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
            b: '-e4437ed6010e88286f547fa90abfe4c3',
          },
          {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15',
          },
        ],
        gRed: !1,
        g: [
          '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
          n,
        ],
      })
    },
    function(t, e, r) {
      'use strict'
      ;(e.sha1 = r(133)),
        (e.sha224 = r(134)),
        (e.sha256 = r(67)),
        (e.sha384 = r(135)),
        (e.sha512 = r(68))
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(18),
        o = r(66),
        a = n.rotl32,
        f = n.sum32,
        s = n.sum32_5,
        c = o.ft_1,
        h = i.BlockHash,
        u = [1518500249, 1859775393, 2400959708, 3395469782]
      function d() {
        if (!(this instanceof d)) return new d()
        h.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520,
          ]),
          (this.W = new Array(80))
      }
      n.inherits(d, h),
        (t.exports = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 80),
        (d.padLength = 64),
        (d.prototype._update = function(t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
          for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1)
          var i = this.h[0],
            o = this.h[1],
            h = this.h[2],
            d = this.h[3],
            l = this.h[4]
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              b = s(a(i, 5), c(p, o, h, d), l, r[n], u[p])
            ;(l = d), (d = h), (h = a(o, 30)), (o = i), (i = b)
          }
          ;(this.h[0] = f(this.h[0], i)),
            (this.h[1] = f(this.h[1], o)),
            (this.h[2] = f(this.h[2], h)),
            (this.h[3] = f(this.h[3], d)),
            (this.h[4] = f(this.h[4], l))
        }),
        (d.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h, 'big')
            : n.split32(this.h, 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(67)
      function o() {
        if (!(this instanceof o)) return new o()
        i.call(this),
          (this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428,
          ])
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h.slice(0, 7), 'big')
            : n.split32(this.h.slice(0, 7), 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(68)
      function o() {
        if (!(this instanceof o)) return new o()
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
            3204075428,
          ])
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h.slice(0, 12), 'big')
            : n.split32(this.h.slice(0, 12), 'big')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(18),
        o = n.rotl32,
        a = n.sum32,
        f = n.sum32_3,
        s = n.sum32_4,
        c = i.BlockHash
      function h() {
        if (!(this instanceof h)) return new h()
        c.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520,
          ]),
          (this.endian = 'little')
      }
      function u(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n)
      }
      function d(t) {
        return t <= 15
          ? 0
          : t <= 31
          ? 1518500249
          : t <= 47
          ? 1859775393
          : t <= 63
          ? 2400959708
          : 2840853838
      }
      function l(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
          ? 1548603684
          : t <= 47
          ? 1836072691
          : t <= 63
          ? 2053994217
          : 0
      }
      n.inherits(h, c),
        (e.ripemd160 = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 192),
        (h.padLength = 64),
        (h.prototype._update = function(t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              c = this.h[3],
              h = this.h[4],
              g = r,
              v = n,
              _ = i,
              w = c,
              S = h,
              M = 0;
            M < 80;
            M++
          ) {
            var k = a(o(s(r, u(M, n, i, c), t[p[M] + e], d(M)), y[M]), h)
            ;(r = h),
              (h = c),
              (c = o(i, 10)),
              (i = n),
              (n = k),
              (k = a(o(s(g, u(79 - M, v, _, w), t[b[M] + e], l(M)), m[M]), S)),
              (g = S),
              (S = w),
              (w = o(_, 10)),
              (_ = v),
              (v = k)
          }
          ;(k = f(this.h[1], i, w)),
            (this.h[1] = f(this.h[2], c, S)),
            (this.h[2] = f(this.h[3], h, g)),
            (this.h[3] = f(this.h[4], r, v)),
            (this.h[4] = f(this.h[0], n, _)),
            (this.h[0] = k)
        }),
        (h.prototype._digest = function(t) {
          return 'hex' === t
            ? n.toHex32(this.h, 'little')
            : n.split32(this.h, 'little')
        })
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
          13,
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
          11,
        ],
        y = [
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
          6,
        ],
        m = [
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
          11,
        ]
    },
    function(t, e, r) {
      'use strict'
      var n = r(7),
        i = r(6)
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r)
        ;(this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r))
      }
      ;(t.exports = o),
        (o.prototype._init = function(t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize)
          for (var e = t.length; e < this.blockSize; e++) t.push(0)
          for (e = 0; e < t.length; e++) t[e] ^= 54
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
            t[e] ^= 106
          this.outer = new this.Hash().update(t)
        }),
        (o.prototype.update = function(t, e) {
          return this.inner.update(t, e), this
        }),
        (o.prototype.digest = function(t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t)
        })
    },
    function(t, e) {
      t.exports = {
        doubles: {
          step: 4,
          points: [
            [
              'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
              'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821',
            ],
            [
              '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
              '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf',
            ],
            [
              '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
              'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695',
            ],
            [
              '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
              '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9',
            ],
            [
              '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
              '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36',
            ],
            [
              '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
              '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f',
            ],
            [
              'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
              '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999',
            ],
            [
              '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
              'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09',
            ],
            [
              'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
              '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d',
            ],
            [
              'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
              'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088',
            ],
            [
              'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
              '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d',
            ],
            [
              '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
              '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8',
            ],
            [
              '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
              '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a',
            ],
            [
              '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
              '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453',
            ],
            [
              '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
              '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160',
            ],
            [
              '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
              '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0',
            ],
            [
              '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
              '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6',
            ],
            [
              '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
              '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589',
            ],
            [
              '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
              'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17',
            ],
            [
              'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
              '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda',
            ],
            [
              'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
              '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd',
            ],
            [
              '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
              '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2',
            ],
            [
              '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
              '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6',
            ],
            [
              'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
              '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f',
            ],
            [
              '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
              'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01',
            ],
            [
              'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
              '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3',
            ],
            [
              'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
              'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f',
            ],
            [
              'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
              '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7',
            ],
            [
              'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
              'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78',
            ],
            [
              'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
              '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1',
            ],
            [
              '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
              'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150',
            ],
            [
              '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
              '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82',
            ],
            [
              'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
              '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc',
            ],
            [
              '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
              'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b',
            ],
            [
              'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
              '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51',
            ],
            [
              'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
              '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45',
            ],
            [
              'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
              'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120',
            ],
            [
              '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
              '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84',
            ],
            [
              '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
              '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d',
            ],
            [
              '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
              'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d',
            ],
            [
              '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
              '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8',
            ],
            [
              'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
              '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8',
            ],
            [
              '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
              '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac',
            ],
            [
              '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
              'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f',
            ],
            [
              '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
              '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962',
            ],
            [
              'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
              '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907',
            ],
            [
              '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
              'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec',
            ],
            [
              'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
              'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d',
            ],
            [
              'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
              '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414',
            ],
            [
              '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
              'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd',
            ],
            [
              '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
              'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0',
            ],
            [
              'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
              '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811',
            ],
            [
              'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
              '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1',
            ],
            [
              'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
              '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c',
            ],
            [
              '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
              'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73',
            ],
            [
              '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
              '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd',
            ],
            [
              'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
              'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405',
            ],
            [
              '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
              'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589',
            ],
            [
              '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
              '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e',
            ],
            [
              '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
              '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27',
            ],
            [
              'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
              'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1',
            ],
            [
              '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
              '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482',
            ],
            [
              '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
              '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945',
            ],
            [
              'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
              '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573',
            ],
            [
              'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
              'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82',
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
              '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672',
            ],
            [
              '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
              'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6',
            ],
            [
              '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
              '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da',
            ],
            [
              'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
              'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37',
            ],
            [
              '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
              'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b',
            ],
            [
              'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
              'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81',
            ],
            [
              'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
              '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58',
            ],
            [
              'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
              '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77',
            ],
            [
              '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
              '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a',
            ],
            [
              '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
              '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c',
            ],
            [
              '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
              '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67',
            ],
            [
              '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
              '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402',
            ],
            [
              'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
              'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55',
            ],
            [
              'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
              '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482',
            ],
            [
              '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
              'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82',
            ],
            [
              '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
              'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396',
            ],
            [
              '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
              '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49',
            ],
            [
              '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
              '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf',
            ],
            [
              '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
              '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a',
            ],
            [
              '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
              'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7',
            ],
            [
              'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
              'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933',
            ],
            [
              '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
              '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a',
            ],
            [
              '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
              '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6',
            ],
            [
              'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
              'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37',
            ],
            [
              '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
              '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e',
            ],
            [
              'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
              'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6',
            ],
            [
              'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
              'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476',
            ],
            [
              '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
              '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40',
            ],
            [
              '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
              '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61',
            ],
            [
              '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
              '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683',
            ],
            [
              'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
              '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5',
            ],
            [
              '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
              '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b',
            ],
            [
              'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
              '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417',
            ],
            [
              '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
              'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868',
            ],
            [
              '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
              'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a',
            ],
            [
              'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
              'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6',
            ],
            [
              '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
              '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996',
            ],
            [
              '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
              'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e',
            ],
            [
              'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
              'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d',
            ],
            [
              '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
              '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2',
            ],
            [
              '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
              'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e',
            ],
            [
              '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
              '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437',
            ],
            [
              '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
              'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311',
            ],
            [
              'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
              '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4',
            ],
            [
              '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
              '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575',
            ],
            [
              '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
              'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d',
            ],
            [
              '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
              'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d',
            ],
            [
              'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
              'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629',
            ],
            [
              'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
              'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06',
            ],
            [
              '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
              '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374',
            ],
            [
              '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
              '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee',
            ],
            [
              'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
              '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1',
            ],
            [
              'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
              'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b',
            ],
            [
              '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
              '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661',
            ],
            [
              '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
              '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6',
            ],
            [
              'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
              '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e',
            ],
            [
              '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
              '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d',
            ],
            [
              'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
              'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc',
            ],
            [
              '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
              'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4',
            ],
            [
              '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
              '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c',
            ],
            [
              'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
              '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b',
            ],
            [
              'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
              '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913',
            ],
            [
              '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
              '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154',
            ],
            [
              '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
              '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865',
            ],
            [
              '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
              'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc',
            ],
            [
              '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
              'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224',
            ],
            [
              '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
              '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e',
            ],
            [
              '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
              '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6',
            ],
            [
              '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
              '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511',
            ],
            [
              '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
              'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b',
            ],
            [
              'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
              'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2',
            ],
            [
              '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
              'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c',
            ],
            [
              'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
              '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3',
            ],
            [
              'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
              '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d',
            ],
            [
              'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
              '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700',
            ],
            [
              'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
              '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4',
            ],
            [
              '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
              'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196',
            ],
            [
              '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
              '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4',
            ],
            [
              '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
              'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257',
            ],
            [
              'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
              'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13',
            ],
            [
              'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
              '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096',
            ],
            [
              'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
              'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38',
            ],
            [
              'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
              '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f',
            ],
            [
              '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
              '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448',
            ],
            [
              'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
              '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a',
            ],
            [
              'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
              '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4',
            ],
            [
              '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
              '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437',
            ],
            [
              '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
              'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7',
            ],
            [
              'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
              '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d',
            ],
            [
              'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
              '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a',
            ],
            [
              'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
              '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54',
            ],
            [
              '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
              '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77',
            ],
            [
              'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
              'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517',
            ],
            [
              '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
              'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10',
            ],
            [
              'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
              'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125',
            ],
            [
              'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
              '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e',
            ],
            [
              '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
              'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1',
            ],
            [
              'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
              '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2',
            ],
            [
              'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
              '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423',
            ],
            [
              'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
              '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8',
            ],
            [
              '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
              'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758',
            ],
            [
              '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
              'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375',
            ],
            [
              'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
              '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d',
            ],
            [
              '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
              'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec',
            ],
            [
              '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
              '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0',
            ],
            [
              '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
              'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c',
            ],
            [
              'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
              'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4',
            ],
            [
              '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
              'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f',
            ],
            [
              '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
              '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649',
            ],
            [
              '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
              'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826',
            ],
            [
              '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
              '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5',
            ],
            [
              'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
              'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87',
            ],
            [
              '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
              '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b',
            ],
            [
              'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
              '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc',
            ],
            [
              '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
              '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c',
            ],
            [
              'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
              'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f',
            ],
            [
              'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
              '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a',
            ],
            [
              'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
              'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46',
            ],
            [
              '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
              'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f',
            ],
            [
              '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
              '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03',
            ],
            [
              '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
              'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08',
            ],
            [
              '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
              '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8',
            ],
            [
              '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
              '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373',
            ],
            [
              '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
              'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3',
            ],
            [
              '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
              '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8',
            ],
            [
              '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
              '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1',
            ],
            [
              '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
              '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9',
            ],
          ],
        },
      }
    },
    function(t, e, r) {
      'use strict'
      var n = r(2),
        i = r(140),
        o = r(4),
        a = o.utils.assert,
        f = r(141),
        s = r(142)
      function c(t) {
        if (!(this instanceof c)) return new c(t)
        'string' == typeof t &&
          (a(o.curves.hasOwnProperty(t), 'Unknown curve ' + t),
          (t = o.curves[t])),
          t instanceof o.curves.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash)
      }
      ;(t.exports = c),
        (c.prototype.keyPair = function(t) {
          return new f(this, t)
        }),
        (c.prototype.keyFromPrivate = function(t, e) {
          return f.fromPrivate(this, t, e)
        }),
        (c.prototype.keyFromPublic = function(t, e) {
          return f.fromPublic(this, t, e)
        }),
        (c.prototype.genKeyPair = function(t) {
          t || (t = {})
          for (
            var e = new i({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || 'utf8',
                entropy: t.entropy || o.rand(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              a = this.n.sub(new n(2));
            ;

          ) {
            var f = new n(e.generate(r))
            if (!(f.cmp(a) > 0)) return f.iaddn(1), this.keyFromPrivate(f)
          }
        }),
        (c.prototype._truncateToN = function(t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength()
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          )
        }),
        (c.prototype.sign = function(t, e, r, o) {
          'object' == typeof r && ((o = r), (r = null)),
            o || (o = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new n(t, 16)))
          for (
            var a = this.n.byteLength(),
              f = e.getPrivate().toArray('be', a),
              c = t.toArray('be', a),
              h = new i({
                hash: this.hash,
                entropy: f,
                nonce: c,
                pers: o.pers,
                persEnc: o.persEnc || 'utf8',
              }),
              u = this.n.sub(new n(1)),
              d = 0;
            ;
            d++
          ) {
            var l = o.k ? o.k(d) : new n(h.generate(this.n.byteLength()))
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)
            ) {
              var p = this.g.mul(l)
              if (!p.isInfinity()) {
                var b = p.getX(),
                  y = b.umod(this.n)
                if (0 !== y.cmpn(0)) {
                  var m = l.invm(this.n).mul(y.mul(e.getPrivate()).iadd(t))
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0)
                    return (
                      o.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (g ^= 1)),
                      new s({ r: y, s: m, recoveryParam: g })
                    )
                  }
                }
              }
            }
          }
        }),
        (c.prototype.verify = function(t, e, r, i) {
          ;(t = this._truncateToN(new n(t, 16))), (r = this.keyFromPublic(r, i))
          var o = (e = new s(e, 'hex')).r,
            a = e.s
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1
          var f,
            c = a.invm(this.n),
            h = c.mul(t).umod(this.n),
            u = c.mul(o).umod(this.n)
          return this.curve._maxwellTrick
            ? !(f = this.g.jmulAdd(h, r.getPublic(), u)).isInfinity() &&
                f.eqXToP(o)
            : !(f = this.g.mulAdd(h, r.getPublic(), u)).isInfinity() &&
                0 ===
                  f
                    .getX()
                    .umod(this.n)
                    .cmp(o)
        }),
        (c.prototype.recoverPubKey = function(t, e, r, i) {
          a((3 & r) === r, 'The recovery param is more than two bits'),
            (e = new s(e, i))
          var o = this.n,
            f = new n(t),
            c = e.r,
            h = e.s,
            u = 1 & r,
            d = r >> 1
          if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
            throw new Error('Unable to find sencond key candinate')
          c = d
            ? this.curve.pointFromX(c.add(this.curve.n), u)
            : this.curve.pointFromX(c, u)
          var l = e.r.invm(o),
            p = o
              .sub(f)
              .mul(l)
              .umod(o),
            b = h.mul(l).umod(o)
          return this.g.mulAdd(p, c, b)
        }),
        (c.prototype.getKeyRecoveryParam = function(t, e, r, n) {
          if (null !== (e = new s(e, n)).recoveryParam) return e.recoveryParam
          for (var i = 0; i < 4; i++) {
            var o
            try {
              o = this.recoverPubKey(t, e, i)
            } catch (t) {
              continue
            }
            if (o.eq(r)) return i
          }
          throw new Error('Unable to find valid recovery factor')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(39),
        i = r(65),
        o = r(6)
      function a(t) {
        if (!(this instanceof a)) return new a(t)
        ;(this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null)
        var e = i.toArray(t.entropy, t.entropyEnc || 'hex'),
          r = i.toArray(t.nonce, t.nonceEnc || 'hex'),
          n = i.toArray(t.pers, t.persEnc || 'hex')
        o(
          e.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(e, r, n)
      }
      ;(t.exports = a),
        (a.prototype._init = function(t, e, r) {
          var n = t.concat(e).concat(r)
          ;(this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8))
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1)
          this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656)
        }),
        (a.prototype._hmac = function() {
          return new n.hmac(this.hash, this.K)
        }),
        (a.prototype._update = function(t) {
          var e = this._hmac()
            .update(this.V)
            .update([0])
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()))
        }),
        (a.prototype.reseed = function(t, e, r, n) {
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            (t = i.toArray(t, e)),
            (r = i.toArray(r, n)),
            o(
              t.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1)
        }),
        (a.prototype.generate = function(t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required')
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = i.toArray(r, n || 'hex')), this._update(r))
          for (var o = []; o.length < t; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (o = o.concat(this.V))
          var a = o.slice(0, t)
          return this._update(r), this._reseed++, i.encode(a, e)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(2),
        i = r(4).utils.assert
      function o(t, e) {
        ;(this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc)
      }
      ;(t.exports = o),
        (o.fromPublic = function(t, e, r) {
          return e instanceof o ? e : new o(t, { pub: e, pubEnc: r })
        }),
        (o.fromPrivate = function(t, e, r) {
          return e instanceof o ? e : new o(t, { priv: e, privEnc: r })
        }),
        (o.prototype.validate = function() {
          var t = this.getPublic()
          return t.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' }
        }),
        (o.prototype.getPublic = function(t, e) {
          return (
            'string' == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          )
        }),
        (o.prototype.getPrivate = function(t) {
          return 'hex' === t ? this.priv.toString(16, 2) : this.priv
        }),
        (o.prototype._importPrivate = function(t, e) {
          ;(this.priv = new n(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n))
        }),
        (o.prototype._importPublic = function(t, e) {
          if (t.x || t.y)
            return (
              'mont' === this.ec.curve.type
                ? i(t.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type &&
                    'edwards' !== this.ec.curve.type) ||
                  i(t.x && t.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            )
          this.pub = this.ec.curve.decodePoint(t, e)
        }),
        (o.prototype.derive = function(t) {
          return t.mul(this.priv).getX()
        }),
        (o.prototype.sign = function(t, e, r) {
          return this.ec.sign(t, this, e, r)
        }),
        (o.prototype.verify = function(t, e) {
          return this.ec.verify(t, e, this)
        }),
        (o.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          )
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(2),
        i = r(4).utils,
        o = i.assert
      function a(t, e) {
        if (t instanceof a) return t
        this._importDER(t, e) ||
          (o(t.r && t.s, 'Signature without r or s'),
          (this.r = new n(t.r, 16)),
          (this.s = new n(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam))
      }
      function f() {
        this.place = 0
      }
      function s(t, e) {
        var r = t[e.place++]
        if (!(128 & r)) return r
        for (var n = 15 & r, i = 0, o = 0, a = e.place; o < n; o++, a++)
          (i <<= 8), (i |= t[a])
        return (e.place = a), i
      }
      function c(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++
        return 0 === e ? t : t.slice(e)
      }
      function h(t, e) {
        if (e < 128) t.push(e)
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3)
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255)
          t.push(e)
        }
      }
      ;(t.exports = a),
        (a.prototype._importDER = function(t, e) {
          t = i.toArray(t, e)
          var r = new f()
          if (48 !== t[r.place++]) return !1
          if (s(t, r) + r.place !== t.length) return !1
          if (2 !== t[r.place++]) return !1
          var o = s(t, r),
            a = t.slice(r.place, o + r.place)
          if (((r.place += o), 2 !== t[r.place++])) return !1
          var c = s(t, r)
          if (t.length !== c + r.place) return !1
          var h = t.slice(r.place, c + r.place)
          return (
            0 === a[0] && 128 & a[1] && (a = a.slice(1)),
            0 === h[0] && 128 & h[1] && (h = h.slice(1)),
            (this.r = new n(a)),
            (this.s = new n(h)),
            (this.recoveryParam = null),
            !0
          )
        }),
        (a.prototype.toDER = function(t) {
          var e = this.r.toArray(),
            r = this.s.toArray()
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = c(e),
              r = c(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1)
          var n = [2]
          h(n, e.length), (n = n.concat(e)).push(2), h(n, r.length)
          var o = n.concat(r),
            a = [48]
          return h(a, o.length), (a = a.concat(o)), i.encode(a, t)
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(39),
        i = r(4),
        o = i.utils,
        a = o.assert,
        f = o.parseBytes,
        s = r(144),
        c = r(145)
      function h(t) {
        if (
          (a('ed25519' === t, 'only tested with ed25519 so far'),
          !(this instanceof h))
        )
          return new h(t)
        ;(t = i.curves[t].curve),
          (this.curve = t),
          (this.g = t.g),
          this.g.precompute(t.n.bitLength() + 1),
          (this.pointClass = t.point().constructor),
          (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
          (this.hash = n.sha512)
      }
      ;(t.exports = h),
        (h.prototype.sign = function(t, e) {
          t = f(t)
          var r = this.keyFromSecret(e),
            n = this.hashInt(r.messagePrefix(), t),
            i = this.g.mul(n),
            o = this.encodePoint(i),
            a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
            s = n.add(a).umod(this.curve.n)
          return this.makeSignature({ R: i, S: s, Rencoded: o })
        }),
        (h.prototype.verify = function(t, e, r) {
          ;(t = f(t)), (e = this.makeSignature(e))
          var n = this.keyFromPublic(r),
            i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
            o = this.g.mul(e.S())
          return e
            .R()
            .add(n.pub().mul(i))
            .eq(o)
        }),
        (h.prototype.hashInt = function() {
          for (var t = this.hash(), e = 0; e < arguments.length; e++)
            t.update(arguments[e])
          return o.intFromLE(t.digest()).umod(this.curve.n)
        }),
        (h.prototype.keyFromPublic = function(t) {
          return s.fromPublic(this, t)
        }),
        (h.prototype.keyFromSecret = function(t) {
          return s.fromSecret(this, t)
        }),
        (h.prototype.makeSignature = function(t) {
          return t instanceof c ? t : new c(this, t)
        }),
        (h.prototype.encodePoint = function(t) {
          var e = t.getY().toArray('le', this.encodingLength)
          return (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0), e
        }),
        (h.prototype.decodePoint = function(t) {
          var e = (t = o.parseBytes(t)).length - 1,
            r = t.slice(0, e).concat(-129 & t[e]),
            n = 0 != (128 & t[e]),
            i = o.intFromLE(r)
          return this.curve.pointFromY(i, n)
        }),
        (h.prototype.encodeInt = function(t) {
          return t.toArray('le', this.encodingLength)
        }),
        (h.prototype.decodeInt = function(t) {
          return o.intFromLE(t)
        }),
        (h.prototype.isPoint = function(t) {
          return t instanceof this.pointClass
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(4).utils,
        i = n.assert,
        o = n.parseBytes,
        a = n.cachedProperty
      function f(t, e) {
        ;(this.eddsa = t),
          (this._secret = o(e.secret)),
          t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = o(e.pub))
      }
      ;(f.fromPublic = function(t, e) {
        return e instanceof f ? e : new f(t, { pub: e })
      }),
        (f.fromSecret = function(t, e) {
          return e instanceof f ? e : new f(t, { secret: e })
        }),
        (f.prototype.secret = function() {
          return this._secret
        }),
        a(f, 'pubBytes', function() {
          return this.eddsa.encodePoint(this.pub())
        }),
        a(f, 'pub', function() {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv())
        }),
        a(f, 'privBytes', function() {
          var t = this.eddsa,
            e = this.hash(),
            r = t.encodingLength - 1,
            n = e.slice(0, t.encodingLength)
          return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n
        }),
        a(f, 'priv', function() {
          return this.eddsa.decodeInt(this.privBytes())
        }),
        a(f, 'hash', function() {
          return this.eddsa
            .hash()
            .update(this.secret())
            .digest()
        }),
        a(f, 'messagePrefix', function() {
          return this.hash().slice(this.eddsa.encodingLength)
        }),
        (f.prototype.sign = function(t) {
          return (
            i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(t, this)
          )
        }),
        (f.prototype.verify = function(t, e) {
          return this.eddsa.verify(t, e, this)
        }),
        (f.prototype.getSecret = function(t) {
          return (
            i(this._secret, 'KeyPair is public only'),
            n.encode(this.secret(), t)
          )
        }),
        (f.prototype.getPublic = function(t) {
          return n.encode(this.pubBytes(), t)
        }),
        (t.exports = f)
    },
    function(t, e, r) {
      'use strict'
      var n = r(2),
        i = r(4).utils,
        o = i.assert,
        a = i.cachedProperty,
        f = i.parseBytes
      function s(t, e) {
        ;(this.eddsa = t),
          'object' != typeof e && (e = f(e)),
          Array.isArray(e) &&
            (e = {
              R: e.slice(0, t.encodingLength),
              S: e.slice(t.encodingLength),
            }),
          o(e.R && e.S, 'Signature without R or S'),
          t.isPoint(e.R) && (this._R = e.R),
          e.S instanceof n && (this._S = e.S),
          (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
          (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded)
      }
      a(s, 'S', function() {
        return this.eddsa.decodeInt(this.Sencoded())
      }),
        a(s, 'R', function() {
          return this.eddsa.decodePoint(this.Rencoded())
        }),
        a(s, 'Rencoded', function() {
          return this.eddsa.encodePoint(this.R())
        }),
        a(s, 'Sencoded', function() {
          return this.eddsa.encodeInt(this.S())
        }),
        (s.prototype.toBytes = function() {
          return this.Rencoded().concat(this.Sencoded())
        }),
        (s.prototype.toHex = function() {
          return i.encode(this.toBytes(), 'hex').toUpperCase()
        }),
        (t.exports = s)
    },
    function(t, e, r) {
      'use strict'
      var n = r(19)
      e.certificate = r(157)
      var i = n.define('RSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('modulus').int(),
          this.key('publicExponent').int(),
          this.key('privateExponent').int(),
          this.key('prime1').int(),
          this.key('prime2').int(),
          this.key('exponent1').int(),
          this.key('exponent2').int(),
          this.key('coefficient').int()
        )
      })
      e.RSAPrivateKey = i
      var o = n.define('RSAPublicKey', function() {
        this.seq().obj(
          this.key('modulus').int(),
          this.key('publicExponent').int()
        )
      })
      e.RSAPublicKey = o
      var a = n.define('SubjectPublicKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm').use(f),
          this.key('subjectPublicKey').bitstr()
        )
      })
      e.PublicKey = a
      var f = n.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('none')
              .null_()
              .optional(),
            this.key('curve')
              .objid()
              .optional(),
            this.key('params')
              .seq()
              .obj(
                this.key('p').int(),
                this.key('q').int(),
                this.key('g').int()
              )
              .optional()
          )
        }),
        s = n.define('PrivateKeyInfo', function() {
          this.seq().obj(
            this.key('version').int(),
            this.key('algorithm').use(f),
            this.key('subjectPrivateKey').octstr()
          )
        })
      e.PrivateKey = s
      var c = n.define('EncryptedPrivateKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm')
            .seq()
            .obj(
              this.key('id').objid(),
              this.key('decrypt')
                .seq()
                .obj(
                  this.key('kde')
                    .seq()
                    .obj(
                      this.key('id').objid(),
                      this.key('kdeparams')
                        .seq()
                        .obj(this.key('salt').octstr(), this.key('iters').int())
                    ),
                  this.key('cipher')
                    .seq()
                    .obj(this.key('algo').objid(), this.key('iv').octstr())
                )
            ),
          this.key('subjectPrivateKey').octstr()
        )
      })
      e.EncryptedPrivateKey = c
      var h = n.define('DSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('p').int(),
          this.key('q').int(),
          this.key('g').int(),
          this.key('pub_key').int(),
          this.key('priv_key').int()
        )
      })
      ;(e.DSAPrivateKey = h),
        (e.DSAparam = n.define('DSAparam', function() {
          this.int()
        }))
      var u = n.define('ECPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('privateKey').octstr(),
          this.key('parameters')
            .optional()
            .explicit(0)
            .use(d),
          this.key('publicKey')
            .optional()
            .explicit(1)
            .bitstr()
        )
      })
      e.ECPrivateKey = u
      var d = n.define('ECParameters', function() {
        this.choice({ namedCurve: this.objid() })
      })
      e.signature = n.define('signature', function() {
        this.seq().obj(this.key('r').int(), this.key('s').int())
      })
    },
    function(t, e, r) {
      var n = r(19),
        i = r(0)
      function o(t, e) {
        ;(this.name = t),
          (this.body = e),
          (this.decoders = {}),
          (this.encoders = {})
      }
      ;(e.define = function(t, e) {
        return new o(t, e)
      }),
        (o.prototype._createNamed = function(t) {
          var e
          try {
            e = r(148).runInThisContext(
              '(function ' +
                this.name +
                '(entity) {\n  this._initNamed(entity);\n})'
            )
          } catch (t) {
            e = function(t) {
              this._initNamed(t)
            }
          }
          return (
            i(e, t),
            (e.prototype._initNamed = function(e) {
              t.call(this, e)
            }),
            new e(this)
          )
        }),
        (o.prototype._getDecoder = function(t) {
          return (
            (t = t || 'der'),
            this.decoders.hasOwnProperty(t) ||
              (this.decoders[t] = this._createNamed(n.decoders[t])),
            this.decoders[t]
          )
        }),
        (o.prototype.decode = function(t, e, r) {
          return this._getDecoder(e).decode(t, r)
        }),
        (o.prototype._getEncoder = function(t) {
          return (
            (t = t || 'der'),
            this.encoders.hasOwnProperty(t) ||
              (this.encoders[t] = this._createNamed(n.encoders[t])),
            this.encoders[t]
          )
        }),
        (o.prototype.encode = function(t, e, r) {
          return this._getEncoder(e).encode(t, r)
        })
    },
    function(module, exports, __webpack_require__) {
      var indexOf = __webpack_require__(149),
        Object_keys = function(t) {
          if (Object.keys) return Object.keys(t)
          var e = []
          for (var r in t) e.push(r)
          return e
        },
        forEach = function(t, e) {
          if (t.forEach) return t.forEach(e)
          for (var r = 0; r < t.length; r++) e(t[r], r, t)
        },
        defineProp = (function() {
          try {
            return (
              Object.defineProperty({}, '_', {}),
              function(t, e, r) {
                Object.defineProperty(t, e, {
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                  value: r,
                })
              }
            )
          } catch (t) {
            return function(t, e, r) {
              t[e] = r
            }
          }
        })(),
        globals = [
          'Array',
          'Boolean',
          'Date',
          'Error',
          'EvalError',
          'Function',
          'Infinity',
          'JSON',
          'Math',
          'NaN',
          'Number',
          'Object',
          'RangeError',
          'ReferenceError',
          'RegExp',
          'String',
          'SyntaxError',
          'TypeError',
          'URIError',
          'decodeURI',
          'decodeURIComponent',
          'encodeURI',
          'encodeURIComponent',
          'escape',
          'eval',
          'isFinite',
          'isNaN',
          'parseFloat',
          'parseInt',
          'undefined',
          'unescape',
        ]
      function Context() {}
      Context.prototype = {}
      var Script = (exports.Script = function(t) {
        if (!(this instanceof Script)) return new Script(t)
        this.code = t
      })
      ;(Script.prototype.runInContext = function(t) {
        if (!(t instanceof Context))
          throw new TypeError("needs a 'context' argument.")
        var e = document.createElement('iframe')
        e.style || (e.style = {}),
          (e.style.display = 'none'),
          document.body.appendChild(e)
        var r = e.contentWindow,
          n = r.eval,
          i = r.execScript
        !n && i && (i.call(r, 'null'), (n = r.eval)),
          forEach(Object_keys(t), function(e) {
            r[e] = t[e]
          }),
          forEach(globals, function(e) {
            t[e] && (r[e] = t[e])
          })
        var o = Object_keys(r),
          a = n.call(r, this.code)
        return (
          forEach(Object_keys(r), function(e) {
            ;(e in t || -1 === indexOf(o, e)) && (t[e] = r[e])
          }),
          forEach(globals, function(e) {
            e in t || defineProp(t, e, r[e])
          }),
          document.body.removeChild(e),
          a
        )
      }),
        (Script.prototype.runInThisContext = function() {
          return eval(this.code)
        }),
        (Script.prototype.runInNewContext = function(t) {
          var e = Script.createContext(t),
            r = this.runInContext(e)
          return (
            forEach(Object_keys(e), function(r) {
              t[r] = e[r]
            }),
            r
          )
        }),
        forEach(Object_keys(Script.prototype), function(t) {
          exports[t] = Script[t] = function(e) {
            var r = Script(e)
            return r[t].apply(r, [].slice.call(arguments, 1))
          }
        }),
        (exports.createScript = function(t) {
          return exports.Script(t)
        }),
        (exports.createContext = Script.createContext = function(t) {
          var e = new Context()
          return (
            'object' == typeof t &&
              forEach(Object_keys(t), function(r) {
                e[r] = t[r]
              }),
            e
          )
        })
    },
    function(t, e) {
      var r = [].indexOf
      t.exports = function(t, e) {
        if (r) return t.indexOf(e)
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n
        return -1
      }
    },
    function(t, e, r) {
      var n = r(0)
      function i(t) {
        this._reporterState = {
          obj: null,
          path: [],
          options: t || {},
          errors: [],
        }
      }
      function o(t, e) {
        ;(this.path = t), this.rethrow(e)
      }
      ;(e.Reporter = i),
        (i.prototype.isError = function(t) {
          return t instanceof o
        }),
        (i.prototype.save = function() {
          var t = this._reporterState
          return { obj: t.obj, pathLen: t.path.length }
        }),
        (i.prototype.restore = function(t) {
          var e = this._reporterState
          ;(e.obj = t.obj), (e.path = e.path.slice(0, t.pathLen))
        }),
        (i.prototype.enterKey = function(t) {
          return this._reporterState.path.push(t)
        }),
        (i.prototype.exitKey = function(t) {
          var e = this._reporterState
          e.path = e.path.slice(0, t - 1)
        }),
        (i.prototype.leaveKey = function(t, e, r) {
          var n = this._reporterState
          this.exitKey(t), null !== n.obj && (n.obj[e] = r)
        }),
        (i.prototype.path = function() {
          return this._reporterState.path.join('/')
        }),
        (i.prototype.enterObject = function() {
          var t = this._reporterState,
            e = t.obj
          return (t.obj = {}), e
        }),
        (i.prototype.leaveObject = function(t) {
          var e = this._reporterState,
            r = e.obj
          return (e.obj = t), r
        }),
        (i.prototype.error = function(t) {
          var e,
            r = this._reporterState,
            n = t instanceof o
          if (
            ((e = n
              ? t
              : new o(
                  r.path
                    .map(function(t) {
                      return '[' + JSON.stringify(t) + ']'
                    })
                    .join(''),
                  t.message || t,
                  t.stack
                )),
            !r.options.partial)
          )
            throw e
          return n || r.errors.push(e), e
        }),
        (i.prototype.wrapResult = function(t) {
          var e = this._reporterState
          return e.options.partial
            ? { result: this.isError(t) ? null : t, errors: e.errors }
            : t
        }),
        n(o, Error),
        (o.prototype.rethrow = function(t) {
          if (
            ((this.message = t + ' at: ' + (this.path || '(shallow)')),
            Error.captureStackTrace && Error.captureStackTrace(this, o),
            !this.stack)
          )
            try {
              throw new Error(this.message)
            } catch (t) {
              this.stack = t.stack
            }
          return this
        })
    },
    function(t, e, r) {
      var n = r(20).Reporter,
        i = r(20).EncoderBuffer,
        o = r(20).DecoderBuffer,
        a = r(6),
        f = [
          'seq',
          'seqof',
          'set',
          'setof',
          'objid',
          'bool',
          'gentime',
          'utctime',
          'null_',
          'enum',
          'int',
          'objDesc',
          'bitstr',
          'bmpstr',
          'charstr',
          'genstr',
          'graphstr',
          'ia5str',
          'iso646str',
          'numstr',
          'octstr',
          'printstr',
          't61str',
          'unistr',
          'utf8str',
          'videostr',
        ],
        s = [
          'key',
          'obj',
          'use',
          'optional',
          'explicit',
          'implicit',
          'def',
          'choice',
          'any',
          'contains',
        ].concat(f)
      function c(t, e) {
        var r = {}
        ;(this._baseState = r),
          (r.enc = t),
          (r.parent = e || null),
          (r.children = null),
          (r.tag = null),
          (r.args = null),
          (r.reverseArgs = null),
          (r.choice = null),
          (r.optional = !1),
          (r.any = !1),
          (r.obj = !1),
          (r.use = null),
          (r.useDecoder = null),
          (r.key = null),
          (r.default = null),
          (r.explicit = null),
          (r.implicit = null),
          (r.contains = null),
          r.parent || ((r.children = []), this._wrap())
      }
      t.exports = c
      var h = [
        'enc',
        'parent',
        'children',
        'tag',
        'args',
        'reverseArgs',
        'choice',
        'optional',
        'any',
        'obj',
        'use',
        'alteredUse',
        'key',
        'default',
        'explicit',
        'implicit',
        'contains',
      ]
      ;(c.prototype.clone = function() {
        var t = this._baseState,
          e = {}
        h.forEach(function(r) {
          e[r] = t[r]
        })
        var r = new this.constructor(e.parent)
        return (r._baseState = e), r
      }),
        (c.prototype._wrap = function() {
          var t = this._baseState
          s.forEach(function(e) {
            this[e] = function() {
              var r = new this.constructor(this)
              return t.children.push(r), r[e].apply(r, arguments)
            }
          }, this)
        }),
        (c.prototype._init = function(t) {
          var e = this._baseState
          a(null === e.parent),
            t.call(this),
            (e.children = e.children.filter(function(t) {
              return t._baseState.parent === this
            }, this)),
            a.equal(e.children.length, 1, 'Root node can have only one child')
        }),
        (c.prototype._useArgs = function(t) {
          var e = this._baseState,
            r = t.filter(function(t) {
              return t instanceof this.constructor
            }, this)
          ;(t = t.filter(function(t) {
            return !(t instanceof this.constructor)
          }, this)),
            0 !== r.length &&
              (a(null === e.children),
              (e.children = r),
              r.forEach(function(t) {
                t._baseState.parent = this
              }, this)),
            0 !== t.length &&
              (a(null === e.args),
              (e.args = t),
              (e.reverseArgs = t.map(function(t) {
                if ('object' != typeof t || t.constructor !== Object) return t
                var e = {}
                return (
                  Object.keys(t).forEach(function(r) {
                    r == (0 | r) && (r |= 0)
                    var n = t[r]
                    e[n] = r
                  }),
                  e
                )
              })))
        }),
        [
          '_peekTag',
          '_decodeTag',
          '_use',
          '_decodeStr',
          '_decodeObjid',
          '_decodeTime',
          '_decodeNull',
          '_decodeInt',
          '_decodeBool',
          '_decodeList',
          '_encodeComposite',
          '_encodeStr',
          '_encodeObjid',
          '_encodeTime',
          '_encodeNull',
          '_encodeInt',
          '_encodeBool',
        ].forEach(function(t) {
          c.prototype[t] = function() {
            var e = this._baseState
            throw new Error(t + ' not implemented for encoding: ' + e.enc)
          }
        }),
        f.forEach(function(t) {
          c.prototype[t] = function() {
            var e = this._baseState,
              r = Array.prototype.slice.call(arguments)
            return a(null === e.tag), (e.tag = t), this._useArgs(r), this
          }
        }),
        (c.prototype.use = function(t) {
          a(t)
          var e = this._baseState
          return a(null === e.use), (e.use = t), this
        }),
        (c.prototype.optional = function() {
          return (this._baseState.optional = !0), this
        }),
        (c.prototype.def = function(t) {
          var e = this._baseState
          return a(null === e.default), (e.default = t), (e.optional = !0), this
        }),
        (c.prototype.explicit = function(t) {
          var e = this._baseState
          return (
            a(null === e.explicit && null === e.implicit),
            (e.explicit = t),
            this
          )
        }),
        (c.prototype.implicit = function(t) {
          var e = this._baseState
          return (
            a(null === e.explicit && null === e.implicit),
            (e.implicit = t),
            this
          )
        }),
        (c.prototype.obj = function() {
          var t = this._baseState,
            e = Array.prototype.slice.call(arguments)
          return (t.obj = !0), 0 !== e.length && this._useArgs(e), this
        }),
        (c.prototype.key = function(t) {
          var e = this._baseState
          return a(null === e.key), (e.key = t), this
        }),
        (c.prototype.any = function() {
          return (this._baseState.any = !0), this
        }),
        (c.prototype.choice = function(t) {
          var e = this._baseState
          return (
            a(null === e.choice),
            (e.choice = t),
            this._useArgs(
              Object.keys(t).map(function(e) {
                return t[e]
              })
            ),
            this
          )
        }),
        (c.prototype.contains = function(t) {
          var e = this._baseState
          return a(null === e.use), (e.contains = t), this
        }),
        (c.prototype._decode = function(t, e) {
          var r = this._baseState
          if (null === r.parent)
            return t.wrapResult(r.children[0]._decode(t, e))
          var n,
            i = r.default,
            a = !0,
            f = null
          if ((null !== r.key && (f = t.enterKey(r.key)), r.optional)) {
            var s = null
            if (
              (null !== r.explicit
                ? (s = r.explicit)
                : null !== r.implicit
                ? (s = r.implicit)
                : null !== r.tag && (s = r.tag),
              null !== s || r.any)
            ) {
              if (((a = this._peekTag(t, s, r.any)), t.isError(a))) return a
            } else {
              var c = t.save()
              try {
                null === r.choice
                  ? this._decodeGeneric(r.tag, t, e)
                  : this._decodeChoice(t, e),
                  (a = !0)
              } catch (t) {
                a = !1
              }
              t.restore(c)
            }
          }
          if ((r.obj && a && (n = t.enterObject()), a)) {
            if (null !== r.explicit) {
              var h = this._decodeTag(t, r.explicit)
              if (t.isError(h)) return h
              t = h
            }
            var u = t.offset
            if (null === r.use && null === r.choice) {
              r.any && (c = t.save())
              var d = this._decodeTag(
                t,
                null !== r.implicit ? r.implicit : r.tag,
                r.any
              )
              if (t.isError(d)) return d
              r.any ? (i = t.raw(c)) : (t = d)
            }
            if (
              (e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), u, t.length, 'tagged'),
              e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), t.offset, t.length, 'content'),
              (i = r.any
                ? i
                : null === r.choice
                ? this._decodeGeneric(r.tag, t, e)
                : this._decodeChoice(t, e)),
              t.isError(i))
            )
              return i
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function(r) {
                  r._decode(t, e)
                }),
              r.contains && ('octstr' === r.tag || 'bitstr' === r.tag))
            ) {
              var l = new o(i)
              i = this._getUse(r.contains, t._reporterState.obj)._decode(l, e)
            }
          }
          return (
            r.obj && a && (i = t.leaveObject(n)),
            null === r.key || (null === i && !0 !== a)
              ? null !== f && t.exitKey(f)
              : t.leaveKey(f, r.key, i),
            i
          )
        }),
        (c.prototype._decodeGeneric = function(t, e, r) {
          var n = this._baseState
          return 'seq' === t || 'set' === t
            ? null
            : 'seqof' === t || 'setof' === t
            ? this._decodeList(e, t, n.args[0], r)
            : /str$/.test(t)
            ? this._decodeStr(e, t, r)
            : 'objid' === t && n.args
            ? this._decodeObjid(e, n.args[0], n.args[1], r)
            : 'objid' === t
            ? this._decodeObjid(e, null, null, r)
            : 'gentime' === t || 'utctime' === t
            ? this._decodeTime(e, t, r)
            : 'null_' === t
            ? this._decodeNull(e, r)
            : 'bool' === t
            ? this._decodeBool(e, r)
            : 'objDesc' === t
            ? this._decodeStr(e, t, r)
            : 'int' === t || 'enum' === t
            ? this._decodeInt(e, n.args && n.args[0], r)
            : null !== n.use
            ? this._getUse(n.use, e._reporterState.obj)._decode(e, r)
            : e.error('unknown tag: ' + t)
        }),
        (c.prototype._getUse = function(t, e) {
          var r = this._baseState
          return (
            (r.useDecoder = this._use(t, e)),
            a(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()),
              (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          )
        }),
        (c.prototype._decodeChoice = function(t, e) {
          var r = this._baseState,
            n = null,
            i = !1
          return (
            Object.keys(r.choice).some(function(o) {
              var a = t.save(),
                f = r.choice[o]
              try {
                var s = f._decode(t, e)
                if (t.isError(s)) return !1
                ;(n = { type: o, value: s }), (i = !0)
              } catch (e) {
                return t.restore(a), !1
              }
              return !0
            }, this),
            i ? n : t.error('Choice not matched')
          )
        }),
        (c.prototype._createEncoderBuffer = function(t) {
          return new i(t, this.reporter)
        }),
        (c.prototype._encode = function(t, e, r) {
          var n = this._baseState
          if (null === n.default || n.default !== t) {
            var i = this._encodeValue(t, e, r)
            if (void 0 !== i && !this._skipDefault(i, e, r)) return i
          }
        }),
        (c.prototype._encodeValue = function(t, e, r) {
          var i = this._baseState
          if (null === i.parent) return i.children[0]._encode(t, e || new n())
          var o = null
          if (((this.reporter = e), i.optional && void 0 === t)) {
            if (null === i.default) return
            t = i.default
          }
          var a = null,
            f = !1
          if (i.any) o = this._createEncoderBuffer(t)
          else if (i.choice) o = this._encodeChoice(t, e)
          else if (i.contains)
            (a = this._getUse(i.contains, r)._encode(t, e)), (f = !0)
          else if (i.children)
            (a = i.children
              .map(function(r) {
                if ('null_' === r._baseState.tag) return r._encode(null, e, t)
                if (null === r._baseState.key)
                  return e.error('Child should have a key')
                var n = e.enterKey(r._baseState.key)
                if ('object' != typeof t)
                  return e.error('Child expected, but input is not object')
                var i = r._encode(t[r._baseState.key], e, t)
                return e.leaveKey(n), i
              }, this)
              .filter(function(t) {
                return t
              })),
              (a = this._createEncoderBuffer(a))
          else if ('seqof' === i.tag || 'setof' === i.tag) {
            if (!i.args || 1 !== i.args.length)
              return e.error('Too many args for : ' + i.tag)
            if (!Array.isArray(t))
              return e.error('seqof/setof, but data is not Array')
            var s = this.clone()
            ;(s._baseState.implicit = null),
              (a = this._createEncoderBuffer(
                t.map(function(r) {
                  var n = this._baseState
                  return this._getUse(n.args[0], t)._encode(r, e)
                }, s)
              ))
          } else
            null !== i.use
              ? (o = this._getUse(i.use, r)._encode(t, e))
              : ((a = this._encodePrimitive(i.tag, t)), (f = !0))
          if (!i.any && null === i.choice) {
            var c = null !== i.implicit ? i.implicit : i.tag,
              h = null === i.implicit ? 'universal' : 'context'
            null === c
              ? null === i.use &&
                e.error('Tag could be omitted only for .use()')
              : null === i.use && (o = this._encodeComposite(c, f, h, a))
          }
          return (
            null !== i.explicit &&
              (o = this._encodeComposite(i.explicit, !1, 'context', o)),
            o
          )
        }),
        (c.prototype._encodeChoice = function(t, e) {
          var r = this._baseState,
            n = r.choice[t.type]
          return (
            n ||
              a(
                !1,
                t.type +
                  ' not found in ' +
                  JSON.stringify(Object.keys(r.choice))
              ),
            n._encode(t.value, e)
          )
        }),
        (c.prototype._encodePrimitive = function(t, e) {
          var r = this._baseState
          if (/str$/.test(t)) return this._encodeStr(e, t)
          if ('objid' === t && r.args)
            return this._encodeObjid(e, r.reverseArgs[0], r.args[1])
          if ('objid' === t) return this._encodeObjid(e, null, null)
          if ('gentime' === t || 'utctime' === t) return this._encodeTime(e, t)
          if ('null_' === t) return this._encodeNull()
          if ('int' === t || 'enum' === t)
            return this._encodeInt(e, r.args && r.reverseArgs[0])
          if ('bool' === t) return this._encodeBool(e)
          if ('objDesc' === t) return this._encodeStr(e, t)
          throw new Error('Unsupported tag: ' + t)
        }),
        (c.prototype._isNumstr = function(t) {
          return /^[0-9 ]*$/.test(t)
        }),
        (c.prototype._isPrintstr = function(t) {
          return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)
        })
    },
    function(t, e, r) {
      var n = r(70)
      ;(e.tagClass = {
        0: 'universal',
        1: 'application',
        2: 'context',
        3: 'private',
      }),
        (e.tagClassByName = n._reverse(e.tagClass)),
        (e.tag = {
          0: 'end',
          1: 'bool',
          2: 'int',
          3: 'bitstr',
          4: 'octstr',
          5: 'null_',
          6: 'objid',
          7: 'objDesc',
          8: 'external',
          9: 'real',
          10: 'enum',
          11: 'embed',
          12: 'utf8str',
          13: 'relativeOid',
          16: 'seq',
          17: 'set',
          18: 'numstr',
          19: 'printstr',
          20: 't61str',
          21: 'videostr',
          22: 'ia5str',
          23: 'utctime',
          24: 'gentime',
          25: 'graphstr',
          26: 'iso646str',
          27: 'genstr',
          28: 'unistr',
          29: 'charstr',
          30: 'bmpstr',
        }),
        (e.tagByName = n._reverse(e.tag))
    },
    function(t, e, r) {
      var n = e
      ;(n.der = r(71)), (n.pem = r(154))
    },
    function(t, e, r) {
      var n = r(0),
        i = r(3).Buffer,
        o = r(71)
      function a(t) {
        o.call(this, t), (this.enc = 'pem')
      }
      n(a, o),
        (t.exports = a),
        (a.prototype.decode = function(t, e) {
          for (
            var r = t.toString().split(/[\r\n]+/g),
              n = e.label.toUpperCase(),
              a = /^-----(BEGIN|END) ([^-]+)-----$/,
              f = -1,
              s = -1,
              c = 0;
            c < r.length;
            c++
          ) {
            var h = r[c].match(a)
            if (null !== h && h[2] === n) {
              if (-1 !== f) {
                if ('END' !== h[1]) break
                s = c
                break
              }
              if ('BEGIN' !== h[1]) break
              f = c
            }
          }
          if (-1 === f || -1 === s)
            throw new Error('PEM section not found for: ' + n)
          var u = r.slice(f + 1, s).join('')
          u.replace(/[^a-z0-9\+\/=]+/gi, '')
          var d = new i(u, 'base64')
          return o.prototype.decode.call(this, d, e)
        })
    },
    function(t, e, r) {
      var n = e
      ;(n.der = r(72)), (n.pem = r(156))
    },
    function(t, e, r) {
      var n = r(0),
        i = r(72)
      function o(t) {
        i.call(this, t), (this.enc = 'pem')
      }
      n(o, i),
        (t.exports = o),
        (o.prototype.encode = function(t, e) {
          for (
            var r = i.prototype.encode.call(this, t).toString('base64'),
              n = ['-----BEGIN ' + e.label + '-----'],
              o = 0;
            o < r.length;
            o += 64
          )
            n.push(r.slice(o, o + 64))
          return n.push('-----END ' + e.label + '-----'), n.join('\n')
        })
    },
    function(t, e, r) {
      'use strict'
      var n = r(19),
        i = n.define('Time', function() {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() })
        }),
        o = n.define('AttributeTypeValue', function() {
          this.seq().obj(this.key('type').objid(), this.key('value').any())
        }),
        a = n.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('parameters').optional()
          )
        }),
        f = n.define('SubjectPublicKeyInfo', function() {
          this.seq().obj(
            this.key('algorithm').use(a),
            this.key('subjectPublicKey').bitstr()
          )
        }),
        s = n.define('RelativeDistinguishedName', function() {
          this.setof(o)
        }),
        c = n.define('RDNSequence', function() {
          this.seqof(s)
        }),
        h = n.define('Name', function() {
          this.choice({ rdnSequence: this.use(c) })
        }),
        u = n.define('Validity', function() {
          this.seq().obj(
            this.key('notBefore').use(i),
            this.key('notAfter').use(i)
          )
        }),
        d = n.define('Extension', function() {
          this.seq().obj(
            this.key('extnID').objid(),
            this.key('critical')
              .bool()
              .def(!1),
            this.key('extnValue').octstr()
          )
        }),
        l = n.define('TBSCertificate', function() {
          this.seq().obj(
            this.key('version')
              .explicit(0)
              .int(),
            this.key('serialNumber').int(),
            this.key('signature').use(a),
            this.key('issuer').use(h),
            this.key('validity').use(u),
            this.key('subject').use(h),
            this.key('subjectPublicKeyInfo').use(f),
            this.key('issuerUniqueID')
              .implicit(1)
              .bitstr()
              .optional(),
            this.key('subjectUniqueID')
              .implicit(2)
              .bitstr()
              .optional(),
            this.key('extensions')
              .explicit(3)
              .seqof(d)
              .optional()
          )
        }),
        p = n.define('X509Certificate', function() {
          this.seq().obj(
            this.key('tbsCertificate').use(l),
            this.key('signatureAlgorithm').use(a),
            this.key('signatureValue').bitstr()
          )
        })
      t.exports = p
    },
    function(t) {
      t.exports = {
        '2.16.840.1.101.3.4.1.1': 'aes-128-ecb',
        '2.16.840.1.101.3.4.1.2': 'aes-128-cbc',
        '2.16.840.1.101.3.4.1.3': 'aes-128-ofb',
        '2.16.840.1.101.3.4.1.4': 'aes-128-cfb',
        '2.16.840.1.101.3.4.1.21': 'aes-192-ecb',
        '2.16.840.1.101.3.4.1.22': 'aes-192-cbc',
        '2.16.840.1.101.3.4.1.23': 'aes-192-ofb',
        '2.16.840.1.101.3.4.1.24': 'aes-192-cfb',
        '2.16.840.1.101.3.4.1.41': 'aes-256-ecb',
        '2.16.840.1.101.3.4.1.42': 'aes-256-cbc',
        '2.16.840.1.101.3.4.1.43': 'aes-256-ofb',
        '2.16.840.1.101.3.4.1.44': 'aes-256-cfb',
      }
    },
    function(t, e, r) {
      ;(function(e) {
        var n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
          i = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m,
          o = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
          a = r(23),
          f = r(36)
        t.exports = function(t, r) {
          var s,
            c = t.toString(),
            h = c.match(n)
          if (h) {
            var u = 'aes' + h[1],
              d = new e(h[2], 'hex'),
              l = new e(h[3].replace(/[\r\n]/g, ''), 'base64'),
              p = a(r, d.slice(0, 8), parseInt(h[1], 10)).key,
              b = [],
              y = f.createDecipheriv(u, p, d)
            b.push(y.update(l)), b.push(y.final()), (s = e.concat(b))
          } else {
            var m = c.match(o)
            s = new e(m[2].replace(/[\r\n]/g, ''), 'base64')
          }
          return { tag: c.match(i)[1], data: s }
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(2),
          i = r(4).ec,
          o = r(25),
          a = r(73)
        function f(t, e) {
          if (t.cmpn(0) <= 0) throw new Error('invalid sig')
          if (t.cmp(e) >= e) throw new Error('invalid sig')
        }
        t.exports = function(t, r, s, c, h) {
          var u = o(s)
          if ('ec' === u.type) {
            if ('ecdsa' !== c && 'ecdsa/rsa' !== c)
              throw new Error('wrong public key type')
            return (function(t, e, r) {
              var n = a[r.data.algorithm.curve.join('.')]
              if (!n)
                throw new Error(
                  'unknown curve ' + r.data.algorithm.curve.join('.')
                )
              var o = new i(n),
                f = r.data.subjectPrivateKey.data
              return o.verify(e, t, f)
            })(t, r, u)
          }
          if ('dsa' === u.type) {
            if ('dsa' !== c) throw new Error('wrong public key type')
            return (function(t, e, r) {
              var i = r.data.p,
                a = r.data.q,
                s = r.data.g,
                c = r.data.pub_key,
                h = o.signature.decode(t, 'der'),
                u = h.s,
                d = h.r
              f(u, a), f(d, a)
              var l = n.mont(i),
                p = u.invm(a)
              return (
                0 ===
                s
                  .toRed(l)
                  .redPow(new n(e).mul(p).mod(a))
                  .fromRed()
                  .mul(
                    c
                      .toRed(l)
                      .redPow(d.mul(p).mod(a))
                      .fromRed()
                  )
                  .mod(i)
                  .mod(a)
                  .cmp(d)
              )
            })(t, r, u)
          }
          if ('rsa' !== c && 'ecdsa/rsa' !== c)
            throw new Error('wrong public key type')
          r = e.concat([h, r])
          for (
            var d = u.modulus.byteLength(), l = [1], p = 0;
            r.length + l.length + 2 < d;

          )
            l.push(255), p++
          l.push(0)
          for (var b = -1; ++b < r.length; ) l.push(r[b])
          l = new e(l)
          var y = n.mont(u.modulus)
          ;(t = (t = new n(t).toRed(y)).redPow(new n(u.publicExponent))),
            (t = new e(t.fromRed().toArray()))
          var m = p < 8 ? 1 : 0
          for (
            d = Math.min(t.length, l.length),
              t.length !== l.length && (m = 1),
              b = -1;
            ++b < d;

          )
            m |= t[b] ^ l[b]
          return 0 === m
        }
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(function(e) {
        var n = r(4),
          i = r(2)
        t.exports = function(t) {
          return new a(t)
        }
        var o = {
          secp256k1: { name: 'secp256k1', byteLength: 32 },
          secp224r1: { name: 'p224', byteLength: 28 },
          prime256v1: { name: 'p256', byteLength: 32 },
          prime192v1: { name: 'p192', byteLength: 24 },
          ed25519: { name: 'ed25519', byteLength: 32 },
          secp384r1: { name: 'p384', byteLength: 48 },
          secp521r1: { name: 'p521', byteLength: 66 },
        }
        function a(t) {
          ;(this.curveType = o[t]),
            this.curveType || (this.curveType = { name: t }),
            (this.curve = new n.ec(this.curveType.name)),
            (this.keys = void 0)
        }
        function f(t, r, n) {
          Array.isArray(t) || (t = t.toArray())
          var i = new e(t)
          if (n && i.length < n) {
            var o = new e(n - i.length)
            o.fill(0), (i = e.concat([o, i]))
          }
          return r ? i.toString(r) : i
        }
        ;(o.p224 = o.secp224r1),
          (o.p256 = o.secp256r1 = o.prime256v1),
          (o.p192 = o.secp192r1 = o.prime192v1),
          (o.p384 = o.secp384r1),
          (o.p521 = o.secp521r1),
          (a.prototype.generateKeys = function(t, e) {
            return (
              (this.keys = this.curve.genKeyPair()), this.getPublicKey(t, e)
            )
          }),
          (a.prototype.computeSecret = function(t, r, n) {
            return (
              (r = r || 'utf8'),
              e.isBuffer(t) || (t = new e(t, r)),
              f(
                this.curve
                  .keyFromPublic(t)
                  .getPublic()
                  .mul(this.keys.getPrivate())
                  .getX(),
                n,
                this.curveType.byteLength
              )
            )
          }),
          (a.prototype.getPublicKey = function(t, e) {
            var r = this.keys.getPublic('compressed' === e, !0)
            return (
              'hybrid' === e && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
              f(r, t)
            )
          }),
          (a.prototype.getPrivateKey = function(t) {
            return f(this.keys.getPrivate(), t)
          }),
          (a.prototype.setPublicKey = function(t, r) {
            return (
              (r = r || 'utf8'),
              e.isBuffer(t) || (t = new e(t, r)),
              this.keys._importPublic(t),
              this
            )
          }),
          (a.prototype.setPrivateKey = function(t, r) {
            ;(r = r || 'utf8'), e.isBuffer(t) || (t = new e(t, r))
            var n = new i(t)
            return (
              (n = n.toString(16)),
              (this.keys = this.curve.genKeyPair()),
              this.keys._importPrivate(n),
              this
            )
          })
      }.call(this, r(3).Buffer))
    },
    function(t, e, r) {
      ;(e.publicEncrypt = r(163)),
        (e.privateDecrypt = r(164)),
        (e.privateEncrypt = function(t, r) {
          return e.publicEncrypt(t, r, !0)
        }),
        (e.publicDecrypt = function(t, r) {
          return e.privateDecrypt(t, r, !0)
        })
    },
    function(t, e, r) {
      var n = r(25),
        i = r(13),
        o = r(15),
        a = r(74),
        f = r(75),
        s = r(2),
        c = r(76),
        h = r(38),
        u = r(1).Buffer
      t.exports = function(t, e, r) {
        var d
        d = t.padding ? t.padding : r ? 1 : 4
        var l,
          p = n(t)
        if (4 === d)
          l = (function(t, e) {
            var r = t.modulus.byteLength(),
              n = e.length,
              c = o('sha1')
                .update(u.alloc(0))
                .digest(),
              h = c.length,
              d = 2 * h
            if (n > r - d - 2) throw new Error('message too long')
            var l = u.alloc(r - n - d - 2),
              p = r - h - 1,
              b = i(h),
              y = f(u.concat([c, l, u.alloc(1, 1), e], p), a(b, p)),
              m = f(b, a(y, h))
            return new s(u.concat([u.alloc(1), m, y], r))
          })(p, e)
        else if (1 === d)
          l = (function(t, e, r) {
            var n,
              o = e.length,
              a = t.modulus.byteLength()
            if (o > a - 11) throw new Error('message too long')
            return (
              (n = r
                ? u.alloc(a - o - 3, 255)
                : (function(t) {
                    for (
                      var e, r = u.allocUnsafe(t), n = 0, o = i(2 * t), a = 0;
                      n < t;

                    )
                      a === o.length && ((o = i(2 * t)), (a = 0)),
                        (e = o[a++]) && (r[n++] = e)
                    return r
                  })(a - o - 3)),
              new s(u.concat([u.from([0, r ? 1 : 2]), n, u.alloc(1), e], a))
            )
          })(p, e, r)
        else {
          if (3 !== d) throw new Error('unknown padding')
          if ((l = new s(e)).cmp(p.modulus) >= 0)
            throw new Error('data too long for modulus')
        }
        return r ? h(l, p) : c(l, p)
      }
    },
    function(t, e, r) {
      var n = r(25),
        i = r(74),
        o = r(75),
        a = r(2),
        f = r(38),
        s = r(15),
        c = r(76),
        h = r(1).Buffer
      t.exports = function(t, e, r) {
        var u
        u = t.padding ? t.padding : r ? 1 : 4
        var d,
          l = n(t),
          p = l.modulus.byteLength()
        if (e.length > p || new a(e).cmp(l.modulus) >= 0)
          throw new Error('decryption error')
        d = r ? c(new a(e), l) : f(e, l)
        var b = h.alloc(p - d.length)
        if (((d = h.concat([b, d], p)), 4 === u))
          return (function(t, e) {
            var r = t.modulus.byteLength(),
              n = s('sha1')
                .update(h.alloc(0))
                .digest(),
              a = n.length
            if (0 !== e[0]) throw new Error('decryption error')
            var f = e.slice(1, a + 1),
              c = e.slice(a + 1),
              u = o(f, i(c, a)),
              d = o(c, i(u, r - a - 1))
            if (
              (function(t, e) {
                ;(t = h.from(t)), (e = h.from(e))
                var r = 0,
                  n = t.length
                t.length !== e.length &&
                  (r++, (n = Math.min(t.length, e.length)))
                for (var i = -1; ++i < n; ) r += t[i] ^ e[i]
                return r
              })(n, d.slice(0, a))
            )
              throw new Error('decryption error')
            for (var l = a; 0 === d[l]; ) l++
            if (1 !== d[l++]) throw new Error('decryption error')
            return d.slice(l)
          })(l, d)
        if (1 === u)
          return (function(t, e, r) {
            for (var n = e.slice(0, 2), i = 2, o = 0; 0 !== e[i++]; )
              if (i >= e.length) {
                o++
                break
              }
            var a = e.slice(2, i - 1)
            if (
              ((('0002' !== n.toString('hex') && !r) ||
                ('0001' !== n.toString('hex') && r)) &&
                o++,
              a.length < 8 && o++,
              o)
            )
              throw new Error('decryption error')
            return e.slice(i)
          })(0, d, r)
        if (3 === u) return d
        throw new Error('unknown padding')
      }
    },
    function(t, e, r) {
      'use strict'
      ;(function(t, n) {
        function i() {
          throw new Error(
            'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
          )
        }
        var o = r(1),
          a = r(13),
          f = o.Buffer,
          s = o.kMaxLength,
          c = t.crypto || t.msCrypto,
          h = Math.pow(2, 32) - 1
        function u(t, e) {
          if ('number' != typeof t || t != t)
            throw new TypeError('offset must be a number')
          if (t > h || t < 0) throw new TypeError('offset must be a uint32')
          if (t > s || t > e) throw new RangeError('offset out of range')
        }
        function d(t, e, r) {
          if ('number' != typeof t || t != t)
            throw new TypeError('size must be a number')
          if (t > h || t < 0) throw new TypeError('size must be a uint32')
          if (t + e > r || t > s) throw new RangeError('buffer too small')
        }
        function l(t, e, r, i) {
          if (n.browser) {
            var o = t.buffer,
              f = new Uint8Array(o, e, r)
            return (
              c.getRandomValues(f),
              i
                ? void n.nextTick(function() {
                    i(null, t)
                  })
                : t
            )
          }
          if (!i) return a(r).copy(t, e), t
          a(r, function(r, n) {
            if (r) return i(r)
            n.copy(t, e), i(null, t)
          })
        }
        ;(c && c.getRandomValues) || !n.browser
          ? ((e.randomFill = function(e, r, n, i) {
              if (!(f.isBuffer(e) || e instanceof t.Uint8Array))
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              if ('function' == typeof r) (i = r), (r = 0), (n = e.length)
              else if ('function' == typeof n) (i = n), (n = e.length - r)
              else if ('function' != typeof i)
                throw new TypeError('"cb" argument must be a function')
              return u(r, e.length), d(n, r, e.length), l(e, r, n, i)
            }),
            (e.randomFillSync = function(e, r, n) {
              if (
                (void 0 === r && (r = 0),
                !(f.isBuffer(e) || e instanceof t.Uint8Array))
              )
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              return (
                u(r, e.length),
                void 0 === n && (n = e.length - r),
                d(n, r, e.length),
                l(e, r, n)
              )
            }))
          : ((e.randomFill = i), (e.randomFillSync = i))
      }.call(this, r(8), r(9)))
    },
    function(t, e, r) {
      'use strict'
      var n = window.URL || window.webkitURL
      t.exports = function(t, e) {
        try {
          try {
            var r
            try {
              ;(r = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(t),
                (r = r.getBlob())
            } catch (e) {
              r = new Blob([t])
            }
            return new Worker(n.createObjectURL(r))
          } catch (e) {
            return new Worker(
              'data:application/javascript,' + encodeURIComponent(t)
            )
          }
        } catch (t) {
          if (!e) throw Error('Inline worker is not supported')
          return new Worker(e)
        }
      }
    },
    function(t, e, r) {
      'use strict'
      r.r(e)
      var n,
        i = r(5),
        o = r.n(i),
        a = r(11),
        f = r.n(a),
        s = r(77),
        c = r.n(s),
        h = r(41),
        u = r.n(h),
        d = r(26),
        l = r.n(d),
        p = r(40),
        b = r.n(p)
      function y(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      var m = function(t) {
          return null == t
        },
        g = function(t) {
          for (; t && t.startsWith('0x0'); ) t = '0x'.concat(t.slice(3))
          return t
        },
        v = function(t) {
          return t.length % 2 == 1 && (t = t.replace('0x', '0x0')), t
        }
      function _(t) {
        return (_ =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      var w = (function() {
        try {
          if (
            'object' ===
              ('undefined' == typeof WebAssembly
                ? 'undefined'
                : _(WebAssembly)) &&
            'function' == typeof WebAssembly.instantiate
          ) {
            var t = new WebAssembly.Module(
              Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            )
            if (t instanceof WebAssembly.Module)
              return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
          }
        } catch (t) {}
        return !1
      })()
      function S(t) {
        return (S =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      e.default = function(t) {
        ;(t.eth.calculateWorkForTransaction = function(e, r, n, i) {
          var a = !1
          return (
            (i = i || function() {}),
            w
              ? e
                ? Promise.resolve(
                    (function(e) {
                      if (
                        (r || (a = new Error('"targetDifficulty" is missing')),
                        e.gas || (a = new Error('"gas" is missing')),
                        (e.nonce < 0 || e.gas < 0 || e.chainId < 0) &&
                          (a = new Error(
                            'Gas, nonce or chainId is lower than 0'
                          )),
                        a)
                      )
                        return i(a), Promise.reject(a)
                      try {
                        e = t.extend.formatters.inputCallFormatter(e)
                        var s = {
                          hash: f.a.encode([
                            o.a.fromNat(e.nonce),
                            o.a.fromNat('0x'),
                            o.a.fromNat(e.gas),
                            e.to ? e.to.toLowerCase() : '',
                            o.a.fromNat(e.value || '0x'),
                            e.data || '0x',
                            o.a.fromNat(
                              t.utils.numberToHex(e.chainId) || '0x1'
                            ),
                            '0x',
                            '0x',
                          ]),
                          targetDifficulty: r,
                        }
                        return new Promise(function(r, o) {
                          var a = 0,
                            f = !1,
                            h = new c.a()
                          performance.now(),
                            (h.onmessage = function(n) {
                              var o = n.target,
                                c = n.data,
                                u = c.cmd,
                                d = c.workNonce
                              switch (u) {
                                case 'ready':
                                  ;(f = !0), h.postMessage(s)
                                  break
                                case 'current':
                                  a = d
                                  break
                                case 'finished':
                                  ;(e.workNonce = t.utils.numberToHex(d)),
                                    (f = !1),
                                    o.terminate(),
                                    i(null, e),
                                    r(e)
                              }
                            }),
                            'object' === S(n) &&
                              ((n.isRunning = function() {
                                return f
                              }),
                              (n.getCurrentWorkNonce = function() {
                                return a
                              }),
                              (n.kill = function() {
                                ;(f = !1),
                                  (a = 0),
                                  h.terminate(),
                                  o('Worker terminated by user')
                              }))
                        })
                      } catch (t) {
                        return i(t), Promise.reject(t)
                      }
                    })(e)
                  )
                : ((a = new Error('No transaction object given!')),
                  i(a),
                  Promise.reject(a))
              : ((a = new Error(
                  "Wasm is not supported by browser. CryptoNight can't load."
                )),
                i(a),
                Promise.reject(a))
          )
        }),
          t.eth.extend({
            methods: [
              {
                name: 'suggestDifficulty',
                call: 'eth_suggestDifficulty',
                params: 1,
                inputFormatter: [t.utils.toChecksumAddress],
                outputFormatter: t.utils.toFloat,
              },
            ],
          })
        var e = t.eth.accounts._addAccountFunctions
        return (
          (t.eth.accounts._addAccountFunctions = function(r) {
            return (
              ((r = e.call(this, r)).signTransaction = function(t, e) {
                return (function(t, e, r) {
                  var i,
                    a = !1
                  if (((r = r || function() {}), !t))
                    return (
                      (a = new Error('No transaction object given!')),
                      r(a),
                      Promise.reject(a)
                    )
                  function s(t) {
                    if (
                      (t.gas || t.gasLimit || (a = new Error('gas is missing')),
                      (t.nonce < 0 ||
                        t.gas < 0 ||
                        t.workNonce < 0 ||
                        t.chainId < 0) &&
                        (a = new Error(
                          'Gas, gasPrice, nonce or chainId is lower than 0'
                        )),
                      a)
                    )
                      return r(a), Promise.reject(a)
                    try {
                      var s = (t = n.extend.formatters.inputCallFormatter(t))
                      ;(s.to = t.to || '0x'),
                        (s.data = t.data || '0x'),
                        (s.value = t.value || '0x'),
                        (s.chainId = n.utils.numberToHex(t.chainId))
                      var c = f.a.encode([
                          o.a.fromNat(s.nonce),
                          o.a.fromNat(s.workNonce || '0x'),
                          o.a.fromNat(s.gas),
                          s.to.toLowerCase(),
                          o.a.fromNat(s.value),
                          s.data,
                          o.a.fromNat(s.chainId || '0x1'),
                          '0x',
                          '0x',
                        ]),
                        h = l.a.keccak256(c),
                        d = u.a.makeSigner(
                          2 * b.a.toNumber(s.chainId || '0x1') + 35
                        )(l.a.keccak256(c), e),
                        p = f.a
                          .decode(c)
                          .slice(0, 6)
                          .concat(u.a.decodeSignature(d))
                      ;(p[6] = v(g(p[6]))),
                        (p[7] = v(g(p[7]))),
                        (p[8] = v(g(p[8])))
                      var y = f.a.encode(p),
                        m = f.a.decode(y)
                      i = {
                        messageHash: h,
                        v: g(m[6]),
                        r: g(m[7]),
                        s: g(m[8]),
                        rawTransaction: y,
                      }
                    } catch (t) {
                      return r(t), Promise.reject(t)
                    }
                    return r(null, i), i
                  }
                  return void 0 !== t.nonce && void 0 !== t.chainId
                    ? Promise.resolve(s(t))
                    : Promise.all([
                        m(t.chainId) ? n.eth.net.getId() : t.chainId,
                        m(t.nonce)
                          ? n.eth.getTransactionCount(
                              n.eth.accounts.privateKeyToAccount(e).address
                            )
                          : t.nonce,
                      ]).then(function(e) {
                        if (m(e[0]) || m(e[1]))
                          throw new Error(
                            "One of the values 'chainId', or 'nonce' couldn't be fetched: ".concat(
                              JSON.stringify(e)
                            )
                          )
                        return s(
                          (function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(r)
                              'function' ==
                                typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                  Object.getOwnPropertySymbols(r).filter(
                                    function(t) {
                                      return Object.getOwnPropertyDescriptor(
                                        r,
                                        t
                                      ).enumerable
                                    }
                                  )
                                )),
                                n.forEach(function(e) {
                                  y(t, e, r[e])
                                })
                            }
                            return t
                          })({}, t, { chainId: e[0], nonce: e[1] })
                        )
                      })
                })(t, r.privateKey, e)
              }),
              (r.calculateWorkForTransaction =
                t.eth.calculateWorkForTransaction),
              r
            )
          }),
          (n = t),
          t
        )
      }
    },
  ]).default
})
