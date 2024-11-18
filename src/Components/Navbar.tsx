import React from 'react';
import { ThemeDropdown } from './ThemeDropdown/ThemeDropdown';
import StationDropdown from './StationDropdown/StationsName';

const Navbar = () => {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit z-10">
        <ThemeDropdown />
        <StationDropdown />
      </div>
    </div>
  );
};

export default Navbar;
