"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useApp } from "@/contexts/app-context"
import { BenefitCardSkeleton } from "./loading-skeleton"
import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const { benefits, loading, claimBenefit } = useApp()

  if (loading) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Your Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <BenefitCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Benefits</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{benefit.icon}</div>
                  <Badge
                    variant={benefit.claimed ? "default" : "secondary"}
                    className={
                      benefit.claimed ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : ""
                    }
                  >
                    {benefit.value}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>

                <Button
                  onClick={() => claimBenefit(benefit.id)}
                  disabled={benefit.claimed}
                  className="w-full"
                  variant={benefit.claimed ? "outline" : "default"}
                >
                  {benefit.claimed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Claimed
                    </>
                  ) : (
                    "Claim Now"
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
