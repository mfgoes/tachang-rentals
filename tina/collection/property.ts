// collection/property.ts
import { Collection } from "tinacms";

const Property: Collection = {
  name: "properties",
  label: "Properties",
  path: "content/properties",
  format: "mdx",
  ui: {
    filename: {
      readonly: false,
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'property'}`
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Property Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "featuredImage",
      label: "Featured Image",
      required: true,
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      required: true,
    },
    {
      type: "number",
      name: "size",
      label: "Size (sqft)",
      required: true,
    },
    {
      type: "number",
      name: "bedrooms",
      label: "Bedrooms",
      required: true,
    },
    {
      type: "number",
      name: "bathrooms",
      label: "Bathrooms",
      required: true,
    },
    {
      type: "datetime",
      name: "availableFrom",
      label: "Available From",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Description",
      isBody: true,
    },
    {
      type: "number",
      name: "price",
      label: "Monthly Rent",
      required: true,
    },
    {
      type: "boolean",
      name: "available",
      label: "Currently Available",
      required: true,
      description: "Is this property currently available for rent?",
    },
    {
      type: "string",
      name: "propertyType",
      label: "Property Type",
      options: ["Apartment", "House", "Condo", "Townhouse"],
      required: true,
    }
  ],
};

export default Property;