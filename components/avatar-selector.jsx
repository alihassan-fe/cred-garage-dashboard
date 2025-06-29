"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"
import { Camera } from "lucide-react"

const avatarOptions = [
  { id: 1, src: "/avatar.png", name: "Alex" },
  { id: 2, src: "/avatar-2.png", name: "Sarah" },
  { id: 3, src: "/avatar-3.png", name: "Mike" },
]

export function AvatarSelector({ currentAvatar, onAvatarChange }) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar)
  const [open, setOpen] = useState(false)

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar)
    onAvatarChange(avatar)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Your Avatar</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 py-4">
          {avatarOptions.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className={`p-2 h-auto rounded-xl ${
                  selectedAvatar === avatar.src ? "ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20" : ""
                }`}
                onClick={() => handleAvatarSelect(avatar.src)}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    src={avatar.src || "/placeholder.svg"}
                    alt={avatar.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <span className="text-xs font-medium">{avatar.name}</span>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
