import { BentangSawitLogo } from './BentangSawitLogo';
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
        <BentangSawitLogo />
        
        <div className="space-y-4 max-w-lg">
          <h1 className="text-4xl font-bold leading-tight">
            Selamat Datang di<br />Bentang Sawit
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Platform keberlanjutan dan ketertelusuran untuk petani kelapa sawit Indonesia.
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
          <h2 className="text-2xl font-semibold">Solusi Keberlanjutan</h2>
          <p className="text-white/80 text-base leading-relaxed">
            Bentang Sawit menyediakan platform digital untuk meningkatkan keberlanjutan dan ketertelusuran produksi kelapa sawit Indonesia, mendukung petani swadaya dalam memenuhi standar RSPO dan ISPO.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-6">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">4,200+</div>
            <div className="text-sm text-white/70">Petani Terdaftar</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">12</div>
            <div className="text-sm text-white/70">Provinsi</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#f8bc28]">15K+</div>
            <div className="text-sm text-white/70">Lahan Terpetakan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
