import { defineComponent as p, openBlock as i, createBlock as s, resolveDynamicComponent as C, withModifiers as d, withCtx as y, renderSlot as b } from "vue";
import u from "copy-to-clipboard";
function n() {
  return {
    copyToClipboard: (r) => {
      try {
        u(r);
      } catch {
        throw new Error("Unable to copy");
      }
    }
  };
}
const T = /* @__PURE__ */ p({
  __name: "CopyToClipboard",
  props: {
    as: { default: "button" },
    copy: null
  },
  emits: ["success", "error"],
  setup(o, { emit: r }) {
    const c = o;
    p({
      name: "CopyToClipboard"
    });
    const l = () => {
      const { copyToClipboard: t } = n();
      try {
        t(c.copy), r("success");
      } catch (e) {
        r("error", e);
      }
    };
    return (t, e) => (i(), s(C(o.as), {
      onClick: d(l, ["prevent"])
    }, {
      default: y(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["onClick"]));
  }
}), { copyToClipboard: a } = n(), h = {
  install(o) {
    o.config.globalProperties.$copyToClipboard = a, o.component("CopyToClipboard", T);
  }
};
function k(o) {
  return a(o);
}
export {
  k as $copyToClipboard,
  T as CopyToClipboard,
  h as default
};
