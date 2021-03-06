import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}
type SidebarDrawerContextdata = UseDisclosureReturn
const SidebardrawerContext = createContext({} as SidebarDrawerContextdata)

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebardrawerContext.Provider value={disclosure}>
      {children}
    </SidebardrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebardrawerContext)
