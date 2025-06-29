# 🚗 CRED Garage Dashboard

A modern, responsive dashboard inspired by CRED Garage, built with Next.js and featuring gamification elements, reward tracking, and a beautiful user interface.

![CRED Garage Dashboard](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC)

## 🌟 Live Demo

🔗 **[View Live Demo](https://cred-garage-dashboard-psi.vercel.app/)**

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and context

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN UI** - Modern component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Data Visualization
- **Recharts** - Chart library for React
- **Custom Progress Components** - Gamification elements

### State Management
- **React Context API** - Global state management
- **localStorage** - Persistent user preferences

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🚀 Features Overview

### 👤 User Profile Management
- **Avatar Customization** - Choose from multiple avatar options
- **Level System** - Gamified user progression with XP tracking
- **Tier Badges** - Visual representation of user status
- **Progress Tracking** - Real-time XP progress visualization

### 🎁 Benefits & Rewards System
- **Interactive Benefit Cards** - 6 different benefit categories
- **One-Click Claiming** - Instant benefit activation
- **Visual Status Indicators** - Clear claimed/unclaimed states
- **Hover Animations** - Smooth micro-interactions

### 📊 Reward Points Analytics
- **Circular Progress Chart** - Visual progress to next tier
- **Monthly Trends** - Bar chart showing points earned over time
- **Goal Tracking** - Progress towards Platinum status
- **Real-time Updates** - Dynamic point calculations

### 🌓 Theme Management
- **Dark/Light Mode Toggle** - Seamless theme switching
- **Persistent Preferences** - Theme choice saved locally
- **Smooth Transitions** - Animated theme changes
- **System Theme Detection** - Respects user's OS preference

### ⚡ Performance Features
- **Loading Skeletons** - Elegant loading states
- **Optimized Images** - Next.js Image optimization
- **Lazy Loading** - Improved performance
- **Responsive Design** - Mobile-first approach

### 🎨 UI/UX Excellence
- **Smooth Animations** - Framer Motion powered transitions
- **Gradient Backgrounds** - CRED-inspired design language
- **Card-based Layout** - Modern, clean interface
- **Accessibility** - WCAG compliant components

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/alihassan-fe/cred-garage-dashboard
cd cred-garage-dashboard
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install

### 3. Run Development Server
\`\`\`bash
npm run dev

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### AppProvider Context
Manages global application state including:
- User profile data
- Benefits and rewards
- Loading states
- Avatar selection

### ThemeProvider Context
Handles theme management:
- Dark/light mode switching
- Persistent theme storage
- System theme detection

### Dashboard Layout
Main container component featuring:
- Responsive header with navigation
- Grid-based content layout
- Smooth page transitions

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (#8b5cf6 to #06b6d4)
- **Secondary**: Blue accents
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Spacing
- **Base Unit**: 4px (Tailwind's spacing scale)
- **Card Padding**: 24px
- **Section Gaps**: 32px

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Benefits
1. Update \`mockBenefits\` array in \`contexts/app-context.jsx\`
2. Add new benefit object with required properties
3. Component will automatically render new cards

### Changing Theme Colors
1. Modify CSS variables in \`app/globals.css\`
2. Update Tailwind config for custom colors
3. Restart development server

### Adding New Avatar Options
1. Add image files to \`public/\` directory
2. Update \`avatarOptions\` array in \`components/avatar-selector.jsx\`
3. Include new avatar in selection modal

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default Next.js settings

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📈 Performance Optimizations

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components loaded on demand
- **Caching** - Static asset caching
- **Bundle Analysis** - Webpack bundle analyzer

## 🙏 Acknowledgments

- **CRED** - Design inspiration
- **ShadCN** - UI component library
- **Vercel** - Deployment platform
- **Tailwind Labs** - CSS framework

**Built with ❤️ by [Ali Hassan]**
