import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from './ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { LinkIcon, LogOut } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className="py-4 flex justify-between items-center">
        <Link to ="/">
            <img src="/logo.png" className="h-16" alt="URL shorter logo"/>
        </Link>
        <div>
            {!user ?(
            <Button onClick={() => navigate("/auth")}> Login</Button>
            ):(
            <DropdownMenu>
            <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>ZS</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Zain Syed</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LinkIcon className='mr-2 h-4 w-4'/>
                        My Links
                    </DropdownMenuItem>
                <DropdownMenuItem className=" text-red-400">
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span> LogOut </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            )
            }
        </div>
    </nav>
  );
};

export default Header