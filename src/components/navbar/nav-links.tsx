
import { siteConfig } from "@/config/site";
import Link from "next/link";

interface NavLinksProps {
  variant?: 'mobile' | 'desktop' | 'tablet';
  onLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ 
  variant = 'desktop', 
  onLinkClick 
}) => {
  const getStylesByVariant = () => {
    const styles = {
      mobile: 'flex flex-col',
      tablet: 'grid grid-flow-col',
      desktop: 'flex items-center'
    };
    return styles[variant];
  };

  return (
    <ul className={getStylesByVariant()}>
      {siteConfig.navItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href} 
            onClick={onLinkClick}
            className={`
              ${variant === 'mobile' ? 'block' : 'inline-block'}
              hover:bg-pallete-gold
            `}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};