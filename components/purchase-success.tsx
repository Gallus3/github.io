"use client"

import { CheckCircle2, Wrench, Zap, ArrowLeft, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceCarousel } from "@/components/service-carousel"
import { useState } from "react"

export function PurchaseSuccess() {
  const [selectedService, setSelectedService] = useState<"electrician" | "plumber" | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products, orders, services..."
            className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Success Header */}
      <div className="bg-accent text-accent-foreground px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-balance">Purchase Successful!</h1>
          <p className="text-accent-foreground/90 text-sm leading-relaxed">Your order has been confirmed</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="px-4 py-6 max-w-md mx-auto">
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src="/tumble-dryer-machine-appliance.jpg"
                  alt="Tumble Dryer"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-base mb-1">Premium Tumble Dryer</h2>
                <p className="text-sm text-muted-foreground mb-2">Model: TD-9000X</p>
                <p className="text-lg font-bold text-foreground">$599.99</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Order Number</span>
                <span className="font-medium">#ORD-2024-1847</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Date</span>
                <span className="font-medium">Jan 15, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Installation Services */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center mb-4 text-balance">Would You Need Help Installing This?</h2>
          <div className="flex gap-3">
            <Button
              variant={selectedService === "plumber" ? "default" : "outline"}
              className="flex-1 h-auto py-4 flex flex-col gap-2"
              onClick={() => setSelectedService("plumber")}
            >
              <Wrench className="w-6 h-6" />
              <span className="font-semibold">Plumber</span>
            </Button>
            <Button
              variant={selectedService === "electrician" ? "default" : "outline"}
              className="flex-1 h-auto py-4 flex flex-col gap-2"
              onClick={() => setSelectedService("electrician")}
            >
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Electrician</span>
            </Button>
          </div>
        </div>

        {/* Service Providers Carousel */}
        <ServiceCarousel selectedService={selectedService} />

        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-12 flex items-center justify-center gap-2 bg-transparent"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          <Button className="flex-1 h-12 flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Order Summary</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
