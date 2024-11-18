"use client"

import React, {createContext, useContext, useState } from 'react';
import stationsData from '../Data/stationsData.json';
import { Station, StationContextType } from '../Type/Types';


// Create context with proper typing
const StationContext = createContext<StationContextType | undefined>(undefined);

// Custom hook to use the context
export const useStationContext = () => {
  const context = useContext(StationContext);
  if (context === undefined) {
    throw new Error('useStationContext must be used within a StationProvider');
  }
  return context;
};

// Context provider
export const StationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  // Function to update the selected station data
  const selectStation = (stationName: string) => {
    const station = stationsData.find(st => st.Station_Name === stationName);
    setSelectedStation(station || null);
  };

  return (
    <StationContext.Provider value={{ selectedStation, selectStation }}>
      {children}
    </StationContext.Provider>
  );
};