import { FarmforceLogo } from './FarmforceLogo';
import { 
  Users, MapPinned, Sprout, Leaf, Boxes, TrendingUp, 
  Activity, DollarSign, ShieldCheck, FileText, GraduationCap, BarChart3 
} from 'lucide-react';

export function WelcomePanel() {
  const coreFeatures = [
    { icon: Users, text: 'Farmer Management & Family Data' },
    { icon: MapPinned, text: 'Land & Field Management' },
    { icon: Sprout, text: 'Crop Production & Planting Campaigns' },
    { icon: Leaf, text: 'Input Management & Distribution' },
    { icon: Boxes, text: 'Harvest Operations & Quality Control' },
    { icon: TrendingUp, text: 'Forecasting & Analytics' },
    { icon: Activity, text: 'Supply Chain & Traceability' },
    { icon: DollarSign, text: 'Financial Management & Premiums' },
    { icon: ShieldCheck, text: 'Compliance & Certification' },
    { icon: FileText, text: 'Surveys & Assessments' },
    { icon: GraduationCap, text: 'Training & Development' },
    { icon: BarChart3, text: 'Sustainability & Reports' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0b2534] to-[#0a1f2e] text-white p-12 flex flex-col justify-between min-h-screen overflow-y-auto">
      <div className="space-y-10">
        <FarmforceLogo />
        
        <div className="space-y-4 max-w-lg">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to<br />FarmForce
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Gain the visibility into your First Mile that is inherent with accurate data.
          </p>
        </div>

        <div className="space-y-2.5 mt-10">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="bg-[#f8bc28]/20 rounded-lg p-2 backdrop-blur-sm border border-[#f8bc28]/30 flex-shrink-0 group-hover:bg-[#f8bc28]/30 transition-colors">
                <feature.icon className="w-4 h-4 text-[#f8bc28]" />
              </div>
              <p className="text-white/90 text-sm font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
          <h2 className="text-2xl font-semibold">Enhanced Solutions</h2>
          <p className="text-white/80 text-base leading-relaxed">
            Modern companies need more in-depth traceability to meet sustainability goals and regulatory requirements. FarmForce provides end-to-end visibility across your entire agricultural supply chain.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-6">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">100K+</div>
            <div className="text-sm text-white/70">Active Farmers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">150+</div>
            <div className="text-sm text-white/70">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">2M+</div>
            <div className="text-sm text-white/70">Fields Mapped</div>
          </div>
        </div>
      </div>
    </div>
  );
}
