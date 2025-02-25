'use client'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

import { motion } from 'framer-motion'

export interface MenuCardProps {
  item: {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    ingredients: string[]
    menuCategoryId: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
  }
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        <CardContent className="p-0">
          <Image
            src={item.imageUrl || `/placeholder.svg?height=200&width=400`}
            alt={item.name}
            width={400}
            height={200}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold">{item.name}</h3>
            <p className="mb-4 line-clamp-3 text-muted-foreground">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">R$ {item.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
