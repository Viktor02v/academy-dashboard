export type SidebarItem = {
  label: string
  to?: string
  icon?: string
  src?: string
}

// left sidebar
export const leftSidebarItems : SidebarItem[] = [
  { label: 'Розклад', to: '/schedule', icon: 'uil:schedule' },
  {
    label: 'Плата за навчання',
    to: '/payment',
    icon: 'material-symbols:payments-outline-rounded',
  },
  { label: 'Вступнику', icon: 'uil:graduation-cap', src:'https://kogpa.edu.ua/uk/vstupnyku' },
]


// right sidebar
export const rightSidebarItems : SidebarItem[] = [
  { label: 'Новини', icon: 'fluent-mdl2:news-search', src: 'https://kogpa.edu.ua/uk/golovna/novyny' },
  { label: 'Розклад дзвінків', icon: 'mdi:schedule', src: 'https://kogpa.edu.ua/uk/studentu/rozklad-dzvinkiv-akademii' },
  { label: 'Онлайн Карта', to: '/prepare', icon: 'uil:map' },
]