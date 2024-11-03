import {
  Cpu,
  Code,
  Cloud,
  Leaf,
  ShoppingCart,
  GraduationCap,
  Shield,
  Network,
  RefreshCcw,
  Home,
  Brain
} from 'lucide-react';
import { FC } from 'react';

// Define que los íconos son componentes funcionales (FC) de React que aceptan props como className
export const serviceIcons: { [key: string]: FC<{ className?: string }> } = {
  iotProjects: Cpu,
  customSoftware: Code,
  cloudDevOps: Cloud,
  smartAgriculture: Leaf,
  ecommerce: ShoppingCart,
  technicalTraining: GraduationCap,
  cybersecurity: Shield,
  apisMicroservices: Network,
  appModernization: RefreshCcw,
  homeAutomation: Home,
  aiMLProjects: Brain
};
