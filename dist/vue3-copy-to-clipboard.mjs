import { defineComponent as c, openBlock as l, createBlock as s, resolveDynamicComponent as d, withModifiers as C, withCtx as y, renderSlot as u } from "vue";
import b from "copy-to-clipboard";
function n() {
  return {
    copyToClipboard: (r) => {
      try {
        b(r);
      } catch {
        throw new Error("Unable to copy");
      }
    }
  };
}
const f = /* @__PURE__ */ c({
  __name: "CopyToClipboard",
  props: {
    as: {
      required: !1,
      type: String,
      default: "button"
    },
    copy: {
      required: !0,
      type: String
    }
  },
  emits: ["success", "error"],
  setup(o, { emit: r }) {
    const t = o;
    c({
      name: "CopyToClipboard"
    });
    const a = () => {
      const { copyToClipboard: e } = n();
      try {
        e(t.copy), r("success");
      } catch (p) {
        r("error", p);
      }
    };
    return (e, p) => (l(), s(d(o.as), {
      onClick: C(a, ["prevent"])
    }, {
      default: y(() => [
        u(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["onClick"]));
  }
}), { copyToClipboard: i } = n(), h = {
  install(o) {
    o.config.globalProperties.$copyToClipboard = i, o.component("CopyToClipboard", f);
  }
};
function g(o) {
  return i(o);
}
export {
  g as $copyToClipboard,
  f as CopyToClipboard,
  h as default
};
