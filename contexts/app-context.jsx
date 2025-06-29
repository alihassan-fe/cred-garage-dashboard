"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

// Mock data
const mockUser = {
  name: "Alex Johnson",
  level: 12,
  xp: 2450,
  maxXp: 3000,
  avatar: "/avatar.png", // Changed from placeholder to local image
  rewardPoints: 15420,
  tier: "Gold Member",
}

const mockBenefits = [
  {
    id: 1,
    title: "Cashback Rewards",
    description: "Get up to 5% cashback on all purchases",
    icon: "💰",
    value: "5%",
    type: "cashback",
    claimed: false,
  },
  {
    id: 2,
    title: "Premium Lounge Access",
    description: "Access to 1000+ airport lounges worldwide",
    icon: "✈️",
    value: "1000+",
    type: "travel",
    claimed: true,
  },
  {
    id: 3,
    title: "Dining Discounts",
    description: "Up to 30% off at partner restaurants",
    icon: "🍽️",
    value: "30%",
    type: "dining",
    claimed: false,
  },
  {
    id: 4,
    title: "Movie Tickets",
    description: "Buy 1 Get 1 free movie tickets",
    icon: "🎬",
    value: "BOGO",
    type: "entertainment",
    claimed: false,
  },
  {
    id: 5,
    title: "Fuel Surcharge Waiver",
    description: "No fuel surcharge on flight bookings",
    icon: "⛽",
    value: "Free",
    type: "travel",
    claimed: true,
  },
  {
    id: 6,
    title: "Shopping Vouchers",
    description: "₹500 vouchers for online shopping",
    icon: "🛍️",
    value: "₹500",
    type: "shopping",
    claimed: false,
  },
]

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [benefits, setBenefits] = useState([])
  const [loading, setLoading] = useState(true)

  const updateUserAvatar = (newAvatar) => {
    setUser((prev) => ({ ...prev, avatar: newAvatar }))
    // You could also save this to localStorage or send to an API
    localStorage.setItem("userAvatar", newAvatar)
  }

  // Simulate API loading
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Load saved avatar from localStorage
      const savedAvatar = localStorage.getItem("userAvatar")
      const userData = { ...mockUser }
      if (savedAvatar) {
        userData.avatar = savedAvatar
      }

      setUser(userData)
      setBenefits(mockBenefits)
      setLoading(false)
    }

    loadData()
  }, [])

  const claimBenefit = (benefitId) => {
    setBenefits((prev) => prev.map((benefit) => (benefit.id === benefitId ? { ...benefit, claimed: true } : benefit)))
  }

  return (
    <AppContext.Provider
      value={{
        user,
        benefits,
        loading,
        claimBenefit,
        updateUserAvatar, // Add this new function
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
