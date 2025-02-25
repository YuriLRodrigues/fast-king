'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-background py-20">
      <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-6xl">
            Sabor que
            <br />
            <span className="text-red-500">Conecta</span> Pessoas
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Descubra o prazer de pedir seu lanche favorito de forma rápida e fácil. Entrega em minutos, sabor
            inesquecível.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Fazer Pedido
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Ver Cardápio
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[400px] w-fit overflow-hidden rounded-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Burger Hero"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
