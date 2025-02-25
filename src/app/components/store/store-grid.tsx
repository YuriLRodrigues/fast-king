import { db } from '@/lib/prisma'

import { StoreCard } from './store-card'

export async function StoreGrid() {
  const stores = await db.restaurant.findMany()

  return (
    <div className="container mx-auto space-y-4 p-6 text-center">
      <h2 className="text-2xl font-bold">Nossas Lojas</h2>
      <p className="text-muted-foreground">Conheça nossas lojas disponíveis ou para realizar pedidos</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  )
}
