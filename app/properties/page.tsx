// app/properties/page.tsx
import React from 'react';
import { safeGet, optional } from '../../utils/nullSafety';

// Define proper TypeScript interfaces (similar to the ones in properties.tsx)
interface PropertyNode {
  id?: string;
  title?: string;
  slug?: string;
  // Add other properties as needed
}

interface PropertyEdge {
  node?: PropertyNode | null;
}

interface PropertiesData {
  propertiesConnection?: {
    edges?: (PropertyEdge | null)[] | null;
  } | null;
}

// This assumes you're using a data fetching function to get properties
// Replace with your actual data fetching logic
async function getProperties(): Promise<PropertiesData> {
  // Implementation of your data fetching logic
  // For example, fetching from Tina CMS API
  return {}; // Replace with actual implementation
}

export default async function PropertiesPage() {
  const data = await getProperties();
  
  // Safely process the data
  const properties = safeGet(data, d => 
    optional(d.propertiesConnection?.edges, [])
      .filter((edge): edge is PropertyEdge => edge !== null)
      .map(edge => edge.node)
      .filter((node): node is PropertyNode => node !== null)
  ) || [];

  return (
    <main>
      <h1>Our Properties</h1>
      <div className="properties-list">
        {properties.map(property => (
          <div key={property?.id || 'unknown'} className="property-item">
            <h2>{property?.title || 'Untitled Property'}</h2>
            {/* Add more property details as needed */}
          </div>
        ))}
      </div>
    </main>
  );
}