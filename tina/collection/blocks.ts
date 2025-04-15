// tina/collection/blocks.ts
import type { Template } from "tinacms";

export const heroBlock: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      background: "",
    },
  },
  fields: [
    {
      type: "string",
      name: "background",
      label: "Background",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "tagline",
      label: "Tagline",
    },
    {
      type: "object",
      name: "image",
      label: "Image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
        {
          name: "videoUrl",
          label: "Video URL",
          type: "string",
          description: "YouTube or Vimeo embed URL (optional)",
        },
      ],
    },
    {
      type: "object",
      name: "actions",
      label: "Actions",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: { name: "", color: "" },
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          type: "string",
          name: "label",
          label: "Label",
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          type: "object",
          name: "icon",
          label: "Icon",
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "string",
              name: "color",
              label: "Color",
              ui: {
                component: "color",
              },
            },
            {
              type: "string",
              name: "style",
              label: "Style",
              options: [
                { label: "Circle", value: "circle" },
                { label: "Float", value: "float" },
              ],
            },
          ],
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ],
};

export const propertiesBlock: Template = {
  name: "properties",
  label: "Properties",
  ui: {
    previewSrc: "/blocks/properties.png",
    defaultItem: {
      title: "Featured Properties",
      description: "Explore our available properties",
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
  ],
};

export const featuresBlock: Template = {
  name: "features",
  label: "Features",
  ui: {
    // ...existing config
  },
  fields: [
    // ...existing fields
  ],
};

export const testimonialsBlock: Template = {
  name: "testimonial",
  label: "Testimonials",
  ui: {
    // ...existing config
  },
  fields: [
    // ...existing fields
  ],
};

// Include any other existing block templates

// Export all blocks for use in the TinaCMS config
export const blocks = {
  heroBlock,
  propertiesBlock,
  featuresBlock,
  testimonialsBlock,
  // Add other blocks
};