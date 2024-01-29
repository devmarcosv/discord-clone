"use client"

import axios from "axios"
import { Copy, RefreshCw, Check } from "lucide-react"
import { useState } from "react"

import { 
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"

import { useModal } from "@/hooks/use-modal-store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DialogDescription } from "@radix-ui/react-dialog";

export const LeaveServerModal = () => {
    const { onOpen, isOpen, onClose, type, data } = useModal();

    const isModalOpen = isOpen && type === "leaveServer";
    const { server } = data;
    const [copied, setCopied] = useState(false);
    const[isLoading, setIsLoading] = useState(false);


    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                       Leave Server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        tem certeza que deseja sair do servidor <span className="font-semibold text-indigo-500">{ server?.name} </span> ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">

                </DialogFooter>                  
                </DialogContent>
        </Dialog>
        )
}