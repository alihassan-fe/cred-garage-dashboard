"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useApp } from "@/contexts/app-context"
import { UserProfileSkeleton } from "./loading-skeleton"
import Image from "next/image"
import { AvatarSelector } from "./avatar-selector"

export function UserProfile() {
  const { user, loading, updateUserAvatar } = useApp()

  if (loading) {
    return <UserProfileSkeleton />
  }

  const xpPercentage = (user.xp / user.maxXp) * 100

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-lg">
        <div className="flex items-center space-x-6">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="relative">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-white shadow-lg object-cover w-20 h-20"
                priority
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=80&width=80"
                }}
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-green-600 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">{user.level}</span>
              </div>
              <AvatarSelector currentAvatar={user.avatar} onAvatarChange={updateUserAvatar} />
            </div>
          </motion.div>

          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <Badge variant="primary" className="mt-1">
                {user.tier}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Level {user.level} Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {user.xp} / {user.maxXp} XP
                </span>
              </div>
              <Progress value={xpPercentage} className="h-3 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
