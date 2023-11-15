import { definePanel } from '@directus/extensions-sdk';
import { defineComponent, openBlock, createElementBlock, normalizeClass, toDisplayString } from 'vue';

var _sfc_main = defineComponent({
  props: {
    showHeader: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  }
});

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.text[data-v-5e5e6054] {\n\tpadding: 12px;\n}\n.text.has-header[data-v-5e5e6054] {\n\tpadding: 0 12px;\n}\n";
n(css,{});

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
    {
      class: normalizeClass(["text", { "has-header": _ctx.showHeader }])
    },
    toDisplayString(_ctx.text),
    3
    /* TEXT, CLASS */
  );
}
var PanelComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e5e6054"], ["__file", "panel.vue"]]);

var index = definePanel({
  id: "custom",
  name: "Custom",
  icon: "box",
  description: "This is my custom panel!",
  component: PanelComponent,
  options: [
    {
      field: "text",
      name: "Text",
      type: "string",
      meta: {
        interface: "input",
        width: "full"
      }
    }
  ],
  minWidth: 12,
  minHeight: 8
});

export { index as default };
