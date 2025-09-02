'use client'

import './globals.css'
import { ReactNode, Suspense } from 'react'
import { AppProvider } from './context/UserContext'
import { AuthProvider } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'
import { ActionProvider } from './context/ActionContext'
import { Header } from '../components/Header'
import { BottomNav } from '../components/navigation/BottomNav'
import { AjudaLinks } from '@/components/AjudaLinks'
import { SplashScreen } from '@/components/SplashScreen' // ✅
import WelcomeModal from '@/components/WelcomeModal'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <meta name="theme-color" content="#e7c465" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/logo-128x128" />
      <link rel="apple-touch-icon" href="/logo-128x128" />

      <body className="bg-[#e7c465] min-h-screen w-full overflow-x-hidden flex flex-col relative">
        
        <SplashScreen /> 
        
              <WelcomeModal />

        <AppProvider>
          <AuthProvider>
            <NotificationProvider>
              <ActionProvider>
                <Header />

                <Suspense fallback={
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    Carregando...
                  </div>
                }>
                  <main className="flex-grow">{children}</main>
                </Suspense>

                <AjudaLinks />
                <BottomNav />

              </ActionProvider>
            </NotificationProvider>
          </AuthProvider>
        </AppProvider>

      </body>
    </html>
  )
}
