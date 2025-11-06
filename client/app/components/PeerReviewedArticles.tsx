'use client'

import { ChevronRight } from 'lucide-react'

interface ArticleSection {
  title: string
  description: string
}

const articleSections: ArticleSection[] = [
  {
    title: 'Antioxidant Studies',
    description:
      'By fighting oxidative stress and inflammation, hydrogen-rich water is being actively researched for its potential to boost metabolic health, accelerate recovery, and support neuroprotection and cognitive clarity.',
  },
  {
    title: 'Bone Studies',
    description:
      'Studies indicate that hydrogen water can protect against bone density loss, the key factor in osteoporosis, by reducing oxidative damage in bone tissue.',
  },
  {
    title: 'Brain Studies',
    description:
      "Hydrogen water is showing promise in studies for its neuroprotective effects, helping to shield the brain from oxidative damage linked to conditions like Parkinson's and Alzheimer's.",
  },
  {
    title: 'Cancer Studies',
    description:
      'Early clinical research suggests that hydrogen water can offer real support to cancer patients by improving their quality of life scores and reducing key markers of oxidative stress during treatment.',
  },
  {
    title: 'Eye and Ear Studies',
    description:
      'Recent studies suggest hydrogen-rich water helps protect eyesight by reducing oxidative stress, improving blood flow, and preserving the vital photoreceptor cells in the retina.',
  },
  {
    title: 'H2 Chemistry and Physics Studies',
    description:
      "The secret behind hydrogen water's benefits lies in molecular hydrogen's H2 incredibly small size, which allows it to effortlessly penetrate cell membranes and work at the deepest cellular level.",
  },
  {
    title: 'H2 From Bacteria Studies',
    description:
      'Scientific research suggests hydrogen water has antimicrobial power, helping to fight bacteria by reducing their internal stress and interfering with the formation of protective biofilms.',
  },
  {
    title: 'Human Studies',
    description:
      'Human studies on hydrogen water are revealing exciting potential, suggesting benefits that include reduced oxidative stress, significant anti-inflammatory effects, and improved metabolic profiles.',
  },
  {
    title: 'Ischemia/Reperfusion Injuries Studies',
    description:
      'Studies on hydrogen water demonstrate a powerful protective action against ischemia/reperfusion (I/R) injuries—the damage that occurs when blood flow returns to tissue—by actively scavenging harmful oxidative stress and reducing inflammation.',
  },
  {
    title: 'Kidney Studies',
    description:
      'Studies show hydrogen water has potential benefits for kidney health, actively protecting renal cells from damage by reducing oxidative stress and inflammation to support better kidney function.',
  },
  {
    title: 'Liver Studies',
    description:
      'Hydrogen water is showing potential to protect liver health by effectively reducing oxidative stress and easing inflammation within liver cells.',
  },
  {
    title: 'Lung Studies',
    description:
      'By reducing oxidative stress and inflammation, hydrogen water shows potential to shield delicate lung tissues from injury. Research suggests this action can improve respiratory function and may offer a valuable benefit in managing acute lung injury.',
  },
  {
    title: 'Metabolic Syndrome Studies',
    description:
      'Hydrogen water is showing exciting potential to address metabolic syndrome at multiple levels, demonstrating in studies the ability to improve insulin sensitivity, reduce inflammation, and support healthy lipid metabolism.',
  },
  {
    title: 'Pain Studies',
    description:
      'Hydrogen water is showing promise in pain management studies, where its powerful antioxidant and anti-inflammatory properties work together to decrease the tissue stress that contributes to discomfort.',
  },
  {
    title: 'Safety Studies',
    description:
      'Making alkaline water a part of your daily routine is a safe way to improve your health foundations, providing benefits like relief from acid reflux, better hydration, and stronger support for bone health.',
  },
  {
    title: 'Sepsis, Gastritis and Intestine Studies',
    description:
      'By reducing oxidative stress and inflammation, research suggests hydrogen water helps defend and restore damaged tissues. This has shown potential benefits for gut health, with studies exploring its role in conditions from gastritis to sepsis.',
  },
  {
    title: 'Skin and Radiation Studies',
    description:
      'Research suggests hydrogen water offers a valuable defense for skin health. It works by mitigating the oxidative stress and inflammation caused by radiation exposure, thereby shielding skin cells and encouraging rapid repair.',
  },
  {
    title: 'Spine and Pancreas Studies',
    description:
      'Hydrogen water is demonstrating exciting therapeutic potential in animal models for spinal cord injuries and neurodegeneration. Treatment has been shown to boost the repair of spinal neurons and lead to improved motor function.',
  },
]

export default function PeerReviewedArticles() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center md:text-left">
          Peer Reviewed Articles
        </h2>

        {/* Article Sections */}
        <div className="space-y-6">
          {articleSections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Clickable Box */}
              <button
                className="w-full bg-[#E5E5E5] border-2 border-[#00A99D] rounded-full p-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-[#00A99D] hover:to-cyan-400 hover:border-transparent transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-white text-left flex-1 transition-colors duration-300">
                  {section.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#00A99D] group-hover:bg-white flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300">
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </button>

              {/* Description Text - Always Visible */}
              <p className="text-base md:text-lg text-black leading-relaxed px-2">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

