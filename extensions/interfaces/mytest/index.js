import { defineInterface } from '@directus/extensions-sdk';
import { defineComponent, openBlock, createElementBlock } from 'vue';

var _sfc_main = defineComponent({
  props: {
    value: {
      type: String,
      default: null
    }
  },
  emits: ["input"],
  setup(props, { emit }) {
    return { handleChange };
    function handleChange(value) {
      emit("input", value);
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

const _hoisted_1 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: _ctx.value,
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.handleChange($event.target.value))
  }, null, 40, _hoisted_1);
}
var InterfaceComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "interface.vue"]]);

var index = defineInterface({
  id: "custom",
  name: "Custom",
  icon: "box",
  description: "This is my custom interface!",
  component: InterfaceComponent,
  options: null,
  types: ["string"]
});

export { index as default };
