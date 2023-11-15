import { defineDisplay } from '@directus/extensions-sdk';
import { defineComponent, openBlock, createElementBlock, toDisplayString } from 'vue';

var _sfc_main = defineComponent({
  props: {
    value: {
      type: String,
      default: null
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
  return openBlock(), createElementBlock(
    "div",
    null,
    "Value: " + toDisplayString(_ctx.value),
    1
    /* TEXT */
  );
}
var DisplayComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "display.vue"]]);

var index = defineDisplay({
  id: "custom",
  name: "Custom",
  icon: "box",
  description: "This is my custom display!",
  component: DisplayComponent,
  options: null,
  types: ["string"]
});

export { index as default };
