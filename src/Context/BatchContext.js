import React, { createContext, useState } from 'react';

// Create the context
export const BatchContext = createContext();

// Provider component
export const BatchProvider = ({ children }) => {
  const [batchDetails, setBatchDetails] = useState(null);

  // Function to fetch batch data by ID
  const getBatchById = async (batchId) => {
    try {
        const response = await fetch(
            `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${batchId}`
          );
          
      if (!response.ok) {
        throw new Error('Failed to fetch batch details');
      }
      const data = await response.json();
      setBatchDetails(data); // Set fetched data into the context state
      return data;
    } catch (error) {
      console.error('Error fetching batch details:', error);
      throw error;
    }
  };

  return (
    <BatchContext.Provider value={{ batchDetails, setBatchDetails, getBatchById }}>
      {children}
    </BatchContext.Provider>
  );
};
