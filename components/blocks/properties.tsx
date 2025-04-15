// components/blocks/properties.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../util/container';
import { Section } from '../util/section';
import type { Template } from 'tinacms';
import { client } from "../../tina/__generated__/client";
import { Properties as PropertyType } from "../../tina/__generated__/types";

// Define proper TypeScript interfaces
interface PropertyNode {
  __typename?: string;
  id: string;
  title: string;
  slug?: string;
  featuredImage: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  size: number;
  available: boolean;
  propertyType: string;
  availableFrom: string;
}

interface PropertiesData {
  title?: string | null;
  subtitle?: string | null;
}

// Export the schema definition for Tina
export const propertiesBlockSchema: Template = {
  name: 'properties',
  label: 'Properties',
  ui: {
    previewSrc: '/blocks/properties.png',
    defaultItem: {
      title: 'Featured Properties',
      subtitle: 'Browse our available properties',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle',
    },
  ],
};

export const Properties = ({ data }: { data: PropertiesData }) => {
  const [properties, setProperties] = useState<PropertyNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch properties from Tina CMS
        const propertiesResponse = await client.queries.propertiesConnection();
        
        if (propertiesResponse.data.propertiesConnection?.edges) {
          // Filter out null values and extract nodes
          const propertyNodes = propertiesResponse.data.propertiesConnection.edges
            .filter(edge => edge !== null && edge.node !== null)
            .map(edge => edge.node) as PropertyType[];
            
          // Cast to our PropertyNode type
          setProperties(propertyNodes as unknown as PropertyNode[]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Section className="properties-section">
      <Container size="large">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{data.title || 'Featured Properties'}</h2>
          <p className="text-xl text-gray-600">{data.subtitle || 'Browse our available properties'}</p>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <p>Loading properties...</p>
          </div>
        ) : (
          <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.length > 0 ? (
              properties.map((property) => {
                return (
                  <div key={property.id} className="property-card bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link href={`/properties/${property.slug || property.id}`}>
                      <div className="property-image-container relative h-64">
                        <Image 
                          src={property.featuredImage} 
                          alt={property.title}
                          fill
                          className="property-image object-cover"
                        />
                        {property.available && (
                          <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Available
                          </span>
                        )}
                      </div>
                      <div className="property-details p-6">
                        <h3 className="property-title text-xl font-bold mb-2">{property.title}</h3>
                        <p className="property-location text-gray-600 mb-4">{property.location}</p>
                        <p className="property-type text-sm text-gray-500 mb-2">{property.propertyType}</p>
                        <div className="property-specs flex justify-between text-gray-700">
                          <span>{property.bedrooms} Beds</span>
                          <span>{property.bathrooms} Baths</span>
                          <span>{property.size} sqft</span>
                        </div>
                        <div className="property-price mt-4 text-xl font-bold text-primary">
                          ${property.price.toLocaleString()}/mo
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="no-properties col-span-3 text-center py-12">
                <p className="text-gray-500 text-lg">No properties available at this time.</p>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};