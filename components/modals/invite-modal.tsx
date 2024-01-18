"use client"
import { Copy } from "lucide-react"

import { 
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"

import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const InviteModal = () => {
    const { isOpen, onClose, type } = useModal();
    const router = useRouter();

    const isModalOpen = isOpen && type === "invite";

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Invite Friends
                    </DialogTitle>
                </DialogHeader>
                <div className="p-6">
                    <Label
                        className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Server invite Link
                    </Label>
                    <div className="flex items-center mt-2 gap-x-2">
                        <Input
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0
                            text-black focus-visible:ring-offset-0"
                            value="invite-link"/>
                    </div>
                    <Button size="icon">
                        <Copy />
                    </Button>
                </div>
                </DialogContent>
        </Dialog>
        )
}