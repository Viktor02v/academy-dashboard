export type SidebarItem = {
  label: string
  to?: string
  icon?: string
  src?: string
  subItems?: SidebarItem[]
}

// left sidebar
export const leftSidebarItems : SidebarItem[] = [
  { label: 'Розклад', to: '/dashboard', icon: 'uil:schedule', subItems: [{label:'Денна форма', src: 'https://kogpa.edu.ua/uk/studentu/denna-forma-navchannia'}, {label:'Заочна форма', src: 'https://kogpa.edu.ua/uk/studentu/zaochna-forma-navchannia'}] },
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