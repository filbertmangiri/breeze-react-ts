import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'

export const themeModes = [
  {
    name: 'light',
    label: 'Terang',
    icon: SunIcon,
  },
  {
    name: 'dark',
    label: 'Gelap',
    icon: MoonIcon,
  },
  {
    name: 'system',
    label: 'Sistem',
    icon: MonitorIcon,
  },
]

export const themeColors = [
  {
    name: 'zinc',
    label: 'Zinc',
    activeColor: {
      light: '240 5.9% 10%',
      dark: '240 5.2% 33.9%',
    },
  },
  {
    name: 'slate',
    label: 'Slate',
    activeColor: {
      light: '215.4 16.3% 46.9%',
      dark: '215.3 19.3% 34.5%',
    },
  },
  {
    name: 'stone',
    label: 'Stone',
    activeColor: {
      light: '25 5.3% 44.7%',
      dark: '33.3 5.5% 32.4%',
    },
  },
  {
    name: 'gray',
    label: 'Gray',
    activeColor: {
      light: '220 8.9% 46.1%',
      dark: '215 13.8% 34.1%',
    },
  },
  {
    name: 'neutral',
    label: 'Netral',
    activeColor: {
      light: '0 0% 45.1%',
      dark: '0 0% 32.2%',
    },
  },
  {
    name: 'red',
    label: 'Merah',
    activeColor: {
      light: '0 72.2% 50.6%',
      dark: '0 72.2% 50.6%',
    },
  },
  {
    name: 'rose',
    label: 'Pink',
    activeColor: {
      light: '346.8 77.2% 49.8%',
      dark: '346.8 77.2% 49.8%',
    },
  },
  {
    name: 'orange',
    label: 'Oranye',
    activeColor: {
      light: '24.6 95% 53.1%',
      dark: '20.5 90.2% 48.2%',
    },
  },
  {
    name: 'green',
    label: 'Hijau',
    activeColor: {
      light: '142.1 76.2% 36.3%',
      dark: '142.1 70.6% 45.3%',
    },
  },
  {
    name: 'blue',
    label: 'Biru',
    activeColor: {
      light: '221.2 83.2% 53.3%',
      dark: '217.2 91.2% 59.8%',
    },
  },
  {
    name: 'yellow',
    label: 'Kuning',
    activeColor: {
      light: '47.9 95.8% 53.1%',
      dark: '47.9 95.8% 53.1%',
    },
  },
  {
    name: 'violet',
    label: 'Ungu',
    activeColor: {
      light: '262.1 83.3% 57.8%',
      dark: '263.4 70% 50.4%',
    },
  },
]

export const themeRadiuses = ['0', '0.3', '0.5', '0.75', '1']
