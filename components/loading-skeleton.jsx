"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function UserProfileSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-2 w-full" />
        </div>
      </div>
    </Card>
  )
}

export function BenefitCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-9 w-full" />
      </CardContent>
    </Card>
  )
}

export function RewardProgressSkeleton() {
  return (
    <Card className="p-6">
      <div className="text-center space-y-4">
        <Skeleton className="h-6 w-32 mx-auto" />
        <Skeleton className="h-32 w-32 rounded-full mx-auto" />
        <Skeleton className="h-8 w-24 mx-auto" />
      </div>
    </Card>
  )
}
