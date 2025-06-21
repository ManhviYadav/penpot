import { useState } from 'react'

const useNavigation = () => {
  const [activeRoute, setActiveRoute] = useState('onboarding')

  const navigationItems = [
    { id: 'onboarding', label: 'Onboarding', href: '/onboarding', color: '#FF6B00' },
    { id: 'menu', label: 'Menu', href: '/menu', color: '#FF9B21' },
    { id: 'orders', label: 'Orders', href: '/orders', color: '#2F80ED' },
    { id: 'inventory', label: 'Inventory', href: '/inventory', color: '#219653' },
    { id: 'analytics', label: 'Analytics', href: '/analytics', color: '#9B51E0' },
    { id: 'team', label: 'Team', href: '/team', color: '#F2994A' },
    { id: 'settings', label: 'Settings', href: '/settings', color: '#828282' }
  ]

  const handleNavigation = (route) => {
    setActiveRoute(route)
  }

  return {
    activeRoute,
    navigationItems,
    handleNavigation
  }
}

export default useNavigation 