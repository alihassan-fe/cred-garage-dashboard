# 🚗 CRED Garage Dashboard

A modern, responsive dashboard inspired by CRED Garage, built with Next.js and featuring gamification elements, reward tracking, and a beautiful user interface.

![CRED Garage Dashboard](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC)

## 🌟 Live Demo

🔗 **[View Live Demo](https://your-deployment-url.vercel.app)**

## 📸 Screenshots

### Light Mode Dashboard
![Light Mode Dashboard](./screenshots/dashboard-light.png)

### Dark Mode Dashboard
![Dark Mode Dashboard](./screenshots/dashboard-dark.png)

### Mobile Responsive View
![Mobile View](./screenshots/mobile-view.png)

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
git clone https://github.com/yourusername/cred-garage-dashboard.git
cd cred-garage-dashboard
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
cred-garage-dashboard/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.jsx           # Root layout with providers
│   └── page.jsx             # Main dashboard page
├── components/
│   ├── ui/                  # ShadCN UI components
│   ├── avatar-selector.jsx  # Avatar selection modal
│   ├── benefits-section.jsx # Benefits cards grid
│   ├── dashboard.jsx        # Main dashboard layout
│   ├── loading-skeleton.jsx # Loading state components
│   ├── reward-progress.jsx  # Charts and progress tracking
│   ├── theme-toggle.jsx     # Dark/light mode toggle
│   └── user-profile.jsx     # User profile card
├── contexts/
│   ├── app-context.jsx      # Global app state management
│   └── theme-context.jsx    # Theme management context
├── public/
│   ├── avatar.png           # Default user avatar
│   ├── avatar-2.png         # Alternative avatar option
│   └── avatar-3.png         # Alternative avatar option
└── README.md
\`\`\`

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

## 🧪 Testing

### Run Tests
\`\`\`bash
npm test
# or
yarn test
\`\`\`

### Component Testing
- Unit tests for individual components
- Integration tests for context providers
- E2E tests for user workflows

## 📈 Performance Optimizations

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components loaded on demand
- **Caching** - Static asset caching
- **Bundle Analysis** - Webpack bundle analyzer

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit changes (\`git commit -m 'Add amazing feature'\`)
4. Push to branch (\`git push origin feature/amazing-feature\`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CRED** - Design inspiration
- **ShadCN** - UI component library
- **Vercel** - Deployment platform
- **Tailwind Labs** - CSS framework

## 📞 Support

For support and questions:
- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/cred-garage-dashboard/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/cred-garage-dashboard/discussions)

---

**Built with ❤️ by [Your Name]**

⭐ Star this repository if you found it helpful!
\`\`\`

Let's also create a package.json file to ensure all dependencies are properly documented:
