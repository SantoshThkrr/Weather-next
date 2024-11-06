import React from 'react'
import { Button } from './ui/button'
import { ThemeDropdown } from './ThemeDropdown/ThemeDropdown'
import SearchDialog from './SearchDialog/SearchDialog'


const Navbar = () => {
  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className="left"></div>
        <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
            <SearchDialog />
            <ThemeDropdown/>
            <Button>Button</Button>
        </div>
    </div>
  )
}

export default Navbar