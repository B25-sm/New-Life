'use client'

export default function Certifications() {
  const certifications = [
    {
      name: "UL",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="black" />
          <text x="50" y="60" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold" fontFamily="Arial, sans-serif">UL</text>
        </svg>
      )
    },
    {
      name: "CE",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#0052CC" />
          <text x="50" y="58" textAnchor="middle" fill="white" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif">CE</text>
          {/* Stars around CE */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <circle
              key={i}
              cx={50 + 35 * Math.cos((i * 2 * Math.PI) / 12)}
              cy={50 + 35 * Math.sin((i * 2 * Math.PI) / 12)}
              r="2"
              fill="white"
            />
          ))}
        </svg>
      )
    },
    {
      name: "ISO 9001",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#1976D2" />
          <text x="50" y="25" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">QUALITY ASSURANCE</text>
          <text x="50" y="52" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">ISO 9001</text>
          <path d="M35 65 L45 75 L65 55" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "ISO 14001",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#388E3C" />
          <text x="50" y="25" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">ENVIRONMENTAL</text>
          <text x="50" y="52" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">ISO 14001</text>
          <path d="M35 65 L45 75 L65 55" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "FDA Approved Plastics",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#1565C0" />
          <text x="50" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">APPROVED</text>
          <text x="50" y="52" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">FDA</text>
          <text x="50" y="72" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">PLASTICS</text>
        </svg>
      )
    },
    {
      name: "Good Design",
      svg: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="5" fill="#D32F2F" />
          <text x="30" y="35" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">G</text>
          <text x="55" y="28" textAnchor="start" fill="black" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">GOOD</text>
          <text x="55" y="42" textAnchor="start" fill="black" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">DESIGN</text>
        </svg>
      )
    }
  ]

  const bottomCertifications = [
    {
      name: "Water Quality Association",
      svg: (
        <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Water wave graphic */}
          <path d="M10 50 Q25 30 40 50 Q55 30 70 50 Q85 30 100 50 L100 60 L10 60 Z" fill="#1976D2" />
          <text x="10" y="20" textAnchor="start" fill="black" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">MEMBER</text>
          <text x="50" y="40" textAnchor="start" fill="#1976D2" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">Water Quality</text>
          <text x="50" y="52" textAnchor="start" fill="#1976D2" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">ASSOCIATION</text>
        </svg>
      )
    },
    {
      name: "A+ Rating",
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" rx="8" fill="#1976D2" />
          <text x="50" y="55" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold" fontFamily="Arial, sans-serif">A+</text>
          <text x="50" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">Rating</text>
        </svg>
      )
    },
    {
      name: "BBB Accredited Business",
      svg: (
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="80" rx="8" fill="#1976D2" />
          <text x="60" y="42" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" fontFamily="Arial, sans-serif">BBB</text>
          <text x="60" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">ACCREDITED BUSINESS</text>
        </svg>
      )
    }
  ]

  return (
    <section className="w-full py-16 bg-white" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Life Ionizers has all of the Top Certifications
        </h2>

        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              role="img"
              aria-label={cert.name}
            >
              {cert.svg}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {bottomCertifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              role="img"
              aria-label={cert.name}
            >
              {cert.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





