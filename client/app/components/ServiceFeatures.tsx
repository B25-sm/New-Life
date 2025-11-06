'use client'

import { Plane, Smartphone, Package, Users } from 'lucide-react'

export default function ServiceFeatures() {
  const features = [
    {
      icon: Plane,
      title: "Air Shipping",
      subtitle: "Free Shipping All States"
    },
    {
      icon: Smartphone,
      title: "Easy Financing",
      subtitle: "Proven Health Benefit"
    },
    {
      icon: Package,
      title: "Returns & exchanges",
      subtitle: "Years of Research"
    },
    {
      icon: Users,
      title: "24/7 Customer Support",
      subtitle: "Years of Research"
    }
  ]

  return (
    <section className="w-full bg-gray-50" aria-label="Service Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 relative"
            >
              {/* Icon with white fill on teal background */}
              <div className="flex-shrink-0 bg-teal-400 rounded-full p-3">
                <feature.icon className="w-8 h-8 text-white stroke-2" fill="white" />
              </div>
              
              {/* Text */}
              <div>
                <h3 className="font-bold text-teal-400 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-900 text-sm">
                  {feature.subtitle}
                </p>
              </div>

              {/* Vertical divider - not on last item */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-px bg-teal-400 h-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
