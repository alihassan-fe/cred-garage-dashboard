"use client"

import { motion } from "framer-motion"
import { UserProfile } from "./user-profile"
import { BenefitsSection } from "./benefits-section"
import { RewardProgress } from "./reward-progress"
import { ThemeToggle } from "./theme-toggle"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CRED Garage
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* User Profile */}
          <UserProfile />

          {/* Reward Progress */}
          <RewardProgress />

          {/* Benefits Section */}
          <BenefitsSection />
        </div>
      </main>
    </div>
  )
}
