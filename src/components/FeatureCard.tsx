import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Brain, ClipboardCheck, Code2 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'brain' | 'checklist' | 'code';
  index: number;
  isActive: boolean;
}

const iconMap = {
  brain: Brain,
  checklist: ClipboardCheck,
  code: Code2,
};

export function FeatureCard({ title, description, icon, isActive }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[icon];
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.5,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isActive]);
  
  return (
    <div
      ref={cardRef}
      className="nx-card p-8 flex flex-col items-center text-center feature-card-hover"
      style={{
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div
        className="w-16 h-16 flex items-center justify-center rounded-xl mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(112, 0, 255, 0.2))',
          border: '1px solid rgba(0, 240, 255, 0.3)',
        }}
      >
        <Icon size={32} className="text-[#00F0FF]" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-[#E0E0E0] mb-3 font-['Rajdhani']">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
