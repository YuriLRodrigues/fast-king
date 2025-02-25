'use client'

import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { motion } from 'framer-motion'
import { Calendar, LinkIcon } from 'lucide-react'

export interface Store {
  avatarImageUrl: string
  coverImageUrl: string
  createdAt: Date
  description: string
  id: string
  name: string
  slug: string
  updatedAt: Date
}

export function StoreCard({ store }: { store: Store }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="group overflow-hidden">
        <div className="relative h-48">
          {/* Cover Image */}
          <div className="absolute inset-0">
            <img
              src={store.coverImageUrl || '/placeholder.svg'}
              alt={`Capa da loja ${store.name}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Store Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-3 p-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-lg">
              <AvatarImage src={store.avatarImageUrl} alt={store.name} />
              <AvatarFallback>{store.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-white">
              <h3 className="truncate text-xl font-bold">{store.name}</h3>
              <p className="flex items-center gap-2 text-sm text-gray-200">
                <Calendar className="h-4 w-4" />
                Desde{' '}
                {formatDistanceToNow(new Date(store.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <p className="line-clamp-2 text-muted-foreground">{store.description}</p>
        </CardContent>

        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <Link href={`/${store.slug}`}>
            <Button variant="outline" size="sm" className="gap-2">
              <LinkIcon className="h-4 w-4" />
              Visitar Loja
            </Button>
          </Link>
          <span className="text-sm text-muted-foreground">ID: {store.id.slice(0, 8)}</span>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
