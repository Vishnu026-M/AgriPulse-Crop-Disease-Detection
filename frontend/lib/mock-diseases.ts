import type { AnalysisResult } from "@/components/predict/analysis-results"

export const mockDiseases: AnalysisResult[] = [
  {
    disease: "Tomato Late Blight",
    crop: "Tomato (Solanum lycopersicum)",
    confidence: 96.4,
    severity: "High",
    description:
      "Late blight is caused by the oomycete pathogen Phytophthora infestans. It is one of the most devastating diseases of tomato and potato worldwide. The pathogen thrives in cool, moist conditions and can destroy entire fields within days if untreated.",
    symptoms: [
      "Large, irregularly shaped dark brown to greenish-black lesions on leaves",
      "White mold growth on the underside of leaves in humid conditions",
      "Brown, firm lesions on stems and petioles",
      "Firm brown rot on fruit, often starting from the stem end",
    ],
    treatments: [
      "Apply copper-based fungicides (Bordeaux mixture) immediately",
      "Use systemic fungicides like Mefenoxam or Chlorothalonil",
      "Remove and destroy all infected plant parts",
      "Improve air circulation by proper spacing of plants",
    ],
    prevention: [
      "Plant resistant varieties such as 'Mountain Magic' or 'Defiant'",
      "Avoid overhead watering; use drip irrigation instead",
      "Rotate crops on a 3-year cycle and avoid planting near potatoes",
      "Apply preventive fungicide sprays before wet weather periods",
    ],
  },
  {
    disease: "Potato Early Blight",
    crop: "Potato (Solanum tuberosum)",
    confidence: 93.7,
    severity: "Moderate",
    description:
      "Early blight is caused by the fungus Alternaria solani. It typically affects older leaves first and progresses upward. The disease is most common in warm, humid environments and can reduce yield by 20-50% if left unchecked.",
    symptoms: [
      "Dark brown, concentric ring spots (target-like) on lower leaves",
      "Yellowing and eventual death of affected foliage",
      "Dark, sunken lesions on tubers at harvest",
      "Premature defoliation reducing photosynthetic capacity",
    ],
    treatments: [
      "Apply fungicides containing Azoxystrobin or Mancozeb",
      "Remove and destroy heavily infected foliage",
      "Ensure adequate plant nutrition, especially potassium",
      "Time fungicide applications to begin at first sign of symptoms",
    ],
    prevention: [
      "Use certified disease-free seed tubers for planting",
      "Maintain proper plant spacing for good air circulation",
      "Apply mulch to reduce soil splash onto lower leaves",
      "Practice crop rotation with non-Solanaceae crops for 2-3 years",
    ],
  },
  {
    disease: "Corn Northern Leaf Blight",
    crop: "Corn (Zea mays)",
    confidence: 91.2,
    severity: "Moderate",
    description:
      "Northern corn leaf blight (NCLB) is caused by the fungus Exserohilum turcicum. It primarily affects the foliage and can cause significant yield losses when lesions develop on or above the ear leaf before or during grain fill.",
    symptoms: [
      "Long, elliptical, grayish-green to tan lesions on leaves (1-6 inches)",
      "Lesions may coalesce and blight large areas of the leaf",
      "Dark, olive-green sporulation on the surface of older lesions",
      "Reduced grain fill due to decreased photosynthesis",
    ],
    treatments: [
      "Apply foliar fungicides containing Propiconazole or Azoxystrobin",
      "Time applications when disease severity reaches threshold levels",
      "Scout fields regularly during V8-VT growth stages",
      "Consider economic threshold before making treatment decisions",
    ],
    prevention: [
      "Plant hybrids with genetic resistance (Ht genes)",
      "Practice crop rotation to reduce inoculum levels in residue",
      "Tillage to bury crop residue and reduce spore release",
      "Avoid continuous corn planting in fields with history of NCLB",
    ],
  },
  {
    disease: "Apple Black Rot",
    crop: "Apple (Malus domestica)",
    confidence: 89.5,
    severity: "High",
    description:
      "Black rot is caused by the fungus Botryosphaeria obtusa. It can infect fruit, leaves, and bark of apple trees. The disease is most severe in warm, humid climates and can persist in the orchard through infected mummified fruit and cankers.",
    symptoms: [
      "Purple or reddish-brown spots on leaves that enlarge to form 'frog-eye' lesions",
      "Large, expanding brown rot on fruit beginning at the calyx end",
      "Infected fruit eventually mummify and turn black",
      "Sunken, reddish-brown cankers on branches and trunks",
    ],
    treatments: [
      "Apply captan-based fungicide sprays during growing season",
      "Prune and remove all cankered branches during dormancy",
      "Remove mummified fruit from trees and ground",
      "Apply wound dressings to large pruning cuts to prevent infection",
    ],
    prevention: [
      "Maintain proper tree spacing and canopy management",
      "Remove fire blight infections promptly as they serve as entry points",
      "Keep trees vigorous through proper fertilization and watering",
      "Apply protective fungicides from green tip through second cover spray",
    ],
  },
  {
    disease: "Grape Leaf Blight (Isariopsis)",
    crop: "Grape (Vitis vinifera)",
    confidence: 88.1,
    severity: "Low",
    description:
      "Grape leaf blight, also known as Isariopsis leaf spot, is caused by the fungus Pseudocercospora vitis. It is a common foliar disease of grapevines in tropical and subtropical regions, typically appearing late in the growing season.",
    symptoms: [
      "Small, irregular dark brown spots on leaf surfaces",
      "Spots may coalesce to form larger necrotic areas",
      "Premature yellowing and leaf drop in severe cases",
      "Dark fruiting bodies visible on lower leaf surfaces",
    ],
    treatments: [
      "Apply Mancozeb or copper-based fungicide sprays",
      "Remove and destroy severely affected leaves",
      "Ensure proper vine nutrition to enhance natural defenses",
      "Apply treatments at 10-14 day intervals during wet periods",
    ],
    prevention: [
      "Maintain good canopy management for airflow and light penetration",
      "Avoid excessive nitrogen fertilization",
      "Apply dormant-season copper sprays for inoculum reduction",
      "Select resistant or tolerant grape varieties when possible",
    ],
  },
]

export function getRandomDisease(): AnalysisResult {
  const idx = Math.floor(Math.random() * mockDiseases.length)
  const base = mockDiseases[idx]
  // Slightly vary confidence each time
  const confidence = Math.round((base.confidence + (Math.random() * 4 - 2)) * 10) / 10
  return { ...base, confidence: Math.min(99.9, Math.max(80, confidence)) }
}
