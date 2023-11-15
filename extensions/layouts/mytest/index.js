import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, ref } from 'vue';
import { defineLayout } from '@directus/extensions-sdk';

var _sfc_main = defineComponent({
  inheritAttrs: false,
  props: {
    collection: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode(
      "p",
      null,
      "Name: " + toDisplayString(_ctx.name),
      1
      /* TEXT */
    ),
    createElementVNode(
      "p",
      null,
      "Collection: " + toDisplayString(_ctx.collection),
      1
      /* TEXT */
    )
  ]);
}
var LayoutComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "layout.vue"]]);

var index = defineLayout({
  id: "custom",
  name: "Custom",
  icon: "box",
  component: LayoutComponent,
  slots: {
    options: () => null,
    sidebar: () => null,
    actions: () => null
  },
  setup() {
    const name = ref("Custom Layout");
    return { name };
  }
});

export { index as default };
