"use client";

import {ServerWithMembersWithProfiles} from "@/types";
import { MemberRole } from "@prisma/client";
import {
    ChevronDown,
    PlusCircle,
    UserPlus,
    Settings,
    Users
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="focus:outline-none" asChild>
                <button
                    className="w-full text-md font-semibold px-3 flex items-center
                        h-12 border-neutral-200 dark:border-neutral-800 border-b-2
                       hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
                    {server.name}
                    <ChevronDown className="h-5 w-5 wl-auto" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2x]">
                {isModerator && (<DropdownMenuItem
                    className="text-indigo-600 dark:text-indigo-400 px-3 py-2
                        text-sm cursor-pointer">
                    invite People
                    <UserPlus className="h-4 w-4 ml-auto" />
                </DropdownMenuItem>
                )}
                {isAdmin && (<DropdownMenuItem
                    className="px-3 py-2 text-sm cursor-pointer">
                   Server Settings
                    <Settings className="h-4 w-4 ml-auto" />
                </DropdownMenuItem>
                )}
                {isAdmin && (<DropdownMenuItem
                    className="px-3 py-2 text-sm cursor-pointer">
                    Manage Members
                    <Users className="h-4 w-4 ml-auto" />
                </DropdownMenuItem>
                )}
                {isModerator && (<DropdownMenuItem
                    className="px-3 py-2 text-sm cursor-pointer">
                    Create Channel 
                    <PlusCircle className="h-4 w-4 ml-auto" />
                </DropdownMenuItem>
                )}
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}