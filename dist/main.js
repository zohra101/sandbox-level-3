(() => {
	var r = {
			879: (r) => {
				r.exports = function (r) {
					return t.test(r)
						? r.toLowerCase()
						: e.test(r)
							? (
									(function (r) {
										return r.replace(n, function (r, t) {
											return t ? " " + t : "";
										});
									})(r) || r
								).toLowerCase()
							: o.test(r)
								? (function (r) {
										return r.replace(s, function (r, t, e) {
											return t + " " + e.toLowerCase().split("").join(" ");
										});
									})(r).toLowerCase()
								: r.toLowerCase();
				};
				var t = /\s/,
					e = /(_|-|\.|:)/,
					o = /([a-z][A-Z]|[A-Z][a-z])/,
					n = /[\W_]+(.|$)/g,
					s = /(.)([A-Z]+)/g;
			},
			214: (r, t, e) => {
				var o = e(879);
				r.exports = function (r) {
					return o(r)
						.replace(/[\W_]+(.|$)/g, function (r, t) {
							return t ? " " + t : "";
						})
						.trim();
				};
			},
		},
		t = {};
	function e(o) {
		var n = t[o];
		if (void 0 !== n) return n.exports;
		var s = (t[o] = { exports: {} });
		return r[o](s, s.exports, e), s.exports;
	}
	(() => {
		"use strict";
		const r = e(214)("AlexMarjanovic");
		var t;
		(t = r), console.log(`Hello, ${t}!`);
	})();
})();
