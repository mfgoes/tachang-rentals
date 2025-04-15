// tina/config.tsx
import { defineConfig, defineSchema } from "tinacms";

// Import collection definitions
import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";
import Property from "./collection/property";

// Define the schema using the imported collections
const schema = defineSchema({
  collections: [
    Property, // Use the imported Property collection
    Page,     // Use the imported Page collection
    Post,     // Use the imported Post collection
    Author,   // Use the imported Author collection
    Global,   // Use the imported Global collection
    // Add contact collection if not already defined in an imported file
    {
      name: "contact",
      label: "Contact",
      path: "content/contact",
      format: "mdx",
      ui: {
        filename: {
          readonly: true,
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Page Title",
          isTitle: true,
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body Content",
          isBody: true,
        },
        {
          type: "string",
          name: "email",
          label: "Contact Email",
        },
        {
          type: "string",
          name: "phone",
          label: "Contact Phone",
        },
        {
          type: "string",
          name: "address",
          label: "Address",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
});

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema,
  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },
});