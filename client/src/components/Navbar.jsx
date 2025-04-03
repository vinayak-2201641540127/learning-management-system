import { Menu, School } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import DarkMode from '@/DarkMode';

const Navbar = () => {
  const user = true;
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b  dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
      {/*Desktop*/}
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className='flex items-center gap-2'>
          <School size={"30"} />
          <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
        </div>
        {/* user and dark mode icon */}
        <div className='flex items-center gap-8'>
          {
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar >
                    <AvatarImage src="https://github.com/shadcn.png" className="w-8 h-8" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      My learning
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex items-center gap-2'>
                <Button variant='outline'>Login</Button>
                <Button>Signup</Button>
              </div>
            )}
          <DarkMode />
        </div>
      </div>



      {/*Mobile Devices*/}
      <div className='flex md:hidden items-center justify-between px-4 h-full'>
        <h1 className='font-extrabold text-2xl'>E-Learning</h1>
        <MobileNavbar />
      </div>
    </div>

  )
}

export default Navbar;


const MobileNavbar = () => {
  const role = 'instructor';
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='rounded-full bg-gray-200 hover:bg-gray-200' variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='flex flex-row items-center justify-between'>
          <SheetTitle>E-Learning</SheetTitle>
          <DarkMode />
        </SheetHeader>
        {/* <Seperator className='mr-2'></Seperator> */}
        <nav className='flex flex-col space-y-4'>
          <span>
            My Learning
          </span>
          <span>
            Edit Profile
          </span>
          <span>
            Log out
          </span>
        </nav>
        {
          role === 'instructor' && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">DashBoard</Button>
              </SheetClose>
            </SheetFooter>
          )
        }

      </SheetContent>
    </Sheet>
  );
}