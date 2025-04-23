export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesGridProps {
  services: Service[];
}

export interface HelpSectionProps {
  title?: string;
  description?: string;
} 