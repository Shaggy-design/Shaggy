import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this data would come from a database
  const hotels = [
    {
      id: 1,
      name: "Luxury Resort",
      location: "Beach City",
      price: 250,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      amenities: ["Pool", "Spa", "Gym", "Restaurant"],
      roomTypes: ["Standard", "Deluxe", "Suite"]
    },
    {
      id: 2,
      name: "City Center Hotel",
      location: "Metropolis",
      price: 180,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
      amenities: ["Free Wi-Fi", "Business Center", "Parking"],
      roomTypes: ["Standard", "Business"]
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Alpine Valley",
      price: 200,
      image: "https://images.unsplash.com/photo-1518602164578-cd0074062767?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      amenities: ["Fireplace", "Hiking Trails", "Scenic Views"],
      roomTypes: ["Cabin", "Suite"]
    },
  ]

  return NextResponse.json(hotels)
}