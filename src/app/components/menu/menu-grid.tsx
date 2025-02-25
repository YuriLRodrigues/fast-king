import { db } from '@/lib/prisma'

import { MenuCard } from './menu-card'

export async function MenuGrid() {
  const items = await db.product.findMany({ take: 5 })

  return (
    <section className="container mx-auto space-y-4 p-6 text-center">
      <h2 className="text-3xl font-bold">Cardápio em Destaque</h2>
      <p className="text-muted-foreground">Descubra nossos produtos mais pedidos</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
