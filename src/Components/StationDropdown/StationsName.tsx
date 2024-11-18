"use client"

import React, { useState, useEffect } from 'react';
import { useStationContext } from '../Context/StationContext';
import stationsData from '../Data/stationsData.json';
import { ChevronDown, ChevronUp} from 'lucide-react';

// Define the Station type
interface Station {
  Station_Name: string;
  // Add other station properties if needed
}

const StationDropdown = () => {
  const { selectStation, selectedStation } = useStationContext();
  const [isOpen, setIsOpen] = useState(false);
  // Set first station as default on component mount and check system theme preference
  useEffect(() => {
    if (!selectedStation && stationsData.length > 0) {
      selectStation(stationsData[0].Station_Name);
    }
  }, [selectedStation, selectStation]);

  const handleSelect = (stationName: string) => {
    selectStation(stationName);
    setIsOpen(false);
  };

  // Get the current station name to display
  const displayedStationName: string = selectedStation?.Station_Name || stationsData[0]?.Station_Name || 'Select Station';

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1">
          <div
            className="w-full px-4 py-2 border rounded-md flex items-center justify-between cursor-pointer 
                       hover:border-blue-400 dark:hover:border-blue-500
                       bg-white dark:bg-gray-800 dark:border-gray-600
                       transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="flex-1 dark:text-white">
              {displayedStationName}
            </span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto 
                       bg-white dark:bg-gray-800 
                       border dark:border-gray-600 rounded-md 
                       shadow-lg dark:shadow-gray-900">
          {stationsData.map((station: Station) => (
            <li
              key={station.Station_Name}
              onClick={() => handleSelect(station.Station_Name)}
              className={`px-4 py-2 cursor-pointer
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         ${selectedStation?.Station_Name === station.Station_Name 
                           ? 'bg-blue-50 dark:bg-blue-900/30' 
                           : ''
                         }
                         text-gray-900 dark:text-gray-100
                         transition-colors`}
            >
              {station.Station_Name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationDropdown;