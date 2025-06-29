"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useApp } from "@/contexts/app-context"
import { RewardProgressSkeleton } from "./loading-skeleton"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const COLORS = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]

export function RewardProgress() {
  const { user, loading } = useApp()

  if (loading) {
    return <RewardProgressSkeleton />
  }

  const progressData = [
    { name: "Current Points", value: user.rewardPoints, color: "#8b5cf6" },
    { name: "Next Tier", value: 25000 - user.rewardPoints, color: "#e5e7eb" },
  ]

  const monthlyData = [
    { month: "Jan", points: 2400 },
    { month: "Feb", points: 1800 },
    { month: "Mar", points: 3200 },
    { month: "Apr", points: 2800 },
    { month: "May", points: 3600 },
    { month: "Jun", points: 2900 },
  ]

  const percentage = (user.rewardPoints / 25000) * 100

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-center">Reward Points Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">{Math.round(percentage)}%</span>
                <span className="text-sm text-gray-500">Complete</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{user.rewardPoints.toLocaleString()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {(25000 - user.rewardPoints).toLocaleString()} points to Platinum
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Monthly Points Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="points" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
