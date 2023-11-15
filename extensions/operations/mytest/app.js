import { defineOperationApp } from '@directus/extensions-sdk';

var app = defineOperationApp({
  id: "custom",
  name: "Custom1222",
  icon: "box",
  description: "This is my custom operation!",
  overview: ({ name }) => [
    {
      label: "name",
      text: name
    }
  ],
  options: [
    {
      field: "text",
      name: "name",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    }
  ]
});

export { app as default };
