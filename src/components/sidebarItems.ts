type SidebarItem = {
  label: string
  to: string
  icon: string
}

// left sidebar
export const leftSidebarItems : SidebarItem[] = [
  { label: 'Розклад', to: '/dashboard', icon: 'uil:schedule' },
  {
    label: 'Плата за навчання',
    to: '/access',
    icon: 'material-symbols:payments-outline-rounded',
  },
  { label: 'Вступнику', to: '/prepare', icon: 'uil:graduation-cap' },
]


// right sidebar
export const rightSidebarItems : SidebarItem[] = [
  { label: 'Новини', to: '/dashboard', icon: 'fluent-mdl2:news-search' },
  { label: 'Розклад дзвінків', to: '/access', icon: 'mdi:schedule' },
  { label: 'Онлайн Карта', to: '/prepare', icon: 'uil:map' },
]