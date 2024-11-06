import React from 'react'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

const SearchDialog = () => {
  return (
    <div className='search-btn'>
        <Dialog>
            <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
        </Dialog>
    </div>
  )
}

export default SearchDialog