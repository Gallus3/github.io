"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ServiceProvider {
  id: string
  name: string
  rating: number
  reviews: number
  distance: string
  availability: string
  price: string
  specialty: string
  image: string
}

const electricians: ServiceProvider[] = [
  {
    id: "e1",
    name: "Mike Johnson",
    rating: 4.9,
    reviews: 127,
    distance: "2.3 mi",
    availability: "Available Today",
    price: "$85/hr",
    specialty: "Appliance Installation",
    image: "/professional-electrician-portrait.jpg",
  },
  {
    id: "e2",
    name: "Sarah Chen",
    rating: 4.8,
    reviews: 94,
    distance: "3.1 mi",
    availability: "Tomorrow",
    price: "$90/hr",
    specialty: "Residential Electrical",
    image: "/female-electrician-portrait.jpg",
  },
  {
    id: "e3",
    name: "David Martinez",
    rating: 5.0,
    reviews: 156,
    distance: "4.5 mi",
    availability: "Available Today",
    price: "$95/hr",
    specialty: "Home Appliances",
    image: "/electrician-professional-portrait.jpg",
  },
]

const plumbers: ServiceProvider[] = [
  {
    id: "p1",
    name: "Tom Anderson",
    rating: 4.7,
    reviews: 89,
    distance: "1.8 mi",
    availability: "Available Today",
    price: "$80/hr",
    specialty: "Appliance Hookup",
    image: "/professional-plumber-portrait.png",
  },
  {
    id: "p2",
    name: "Lisa Brown",
    rating: 4.9,
    reviews: 112,
    distance: "2.7 mi",
    availability: "Tomorrow",
    price: "$85/hr",
    specialty: "Water Line Installation",
    image: "/female-plumber-portrait.png",
  },
  {
    id: "p3",
    name: "James Wilson",
    rating: 4.8,
    reviews: 143,
    distance: "3.2 mi",
    availability: "Available Today",
    price: "$88/hr",
    specialty: "Residential Plumbing",
    image: "/plumber-professional-portrait.jpg",
  },
]

interface ServiceCarouselProps {
  selectedService: "electrician" | "plumber" | null
}

export function ServiceCarousel({ selectedService }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const providers =
    selectedService === "electrician"
      ? electricians
      : selectedService === "plumber"
        ? plumbers
        : [...electricians, ...plumbers]

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll)
      return () => scrollElement.removeEventListener("scroll", checkScroll)
    }
  }, [providers])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">
        {selectedService === "electrician" && "Available Electricians"}
        {selectedService === "plumber" && "Available Plumbers"}
        {!selectedService && "Recommended Service Providers"}
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {providers.map((provider) => (
            <Card key={provider.id} className="flex-shrink-0 w-[280px] snap-start">
              <CardContent className="p-4">
                <div className="flex gap-3 mb-3">
                  <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 overflow-hidden">
                    <img
                      src={provider.image || "/placeholder.svg"}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base mb-1 truncate">{provider.name}</h4>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                      <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{provider.specialty}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{provider.distance} away</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-accent font-medium">{provider.availability}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{provider.price}</span>
                  <Button size="sm">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
