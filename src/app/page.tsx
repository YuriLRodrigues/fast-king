import { HeroSection } from './components/hero-section'
import { MenuGrid } from './components/menu'
import { StoreGrid } from './components/store'

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StoreGrid />
      <MenuGrid />
    </div>
  )
}
