import { themeColors, themeRadiuses } from '@/constants/theme'
import { ThemeProvider } from '@/contexts/theme'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      name="mode"
      attribute="class"
      storageKey="ui-theme-mode"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <ThemeProvider
        name="color"
        attribute="data-ui-theme-color"
        storageKey="ui-theme-color"
        defaultTheme="neutral"
        themes={themeColors.map(({ name }) => name)}
        disableTransitionOnChange
        enableColorScheme={false}
        enableSystem={false}
      >
        <ThemeProvider
          name="radius"
          attribute="data-ui-theme-radius"
          storageKey="ui-theme-radius"
          defaultTheme="0.5"
          themes={themeRadiuses}
          disableTransitionOnChange
          enableColorScheme={false}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  )
}
