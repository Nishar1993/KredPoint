export type CustomerTypeOption =
  | 'Gig Worker'
  | 'Small Business Owner / Entrepreneur'
  | 'Salaried Employee'
  | 'Other';

export type ServiceInterestOption =
  | 'Income Tax Return (ITR) filing assistance'
  | 'e-Shram registration assistance'
  | 'Personal loan assistance'
  | 'Business loan assistance'
  | 'Affordable housing loan assistance'
  | 'Vehicle loan assistance'
  | 'GST registration / document assistance'
  | 'FSSAI licence assistance'
  | 'Udyam registration assistance'
  | 'General enquiry';

export interface AudienceGroup {
  id: string;
  title: string;
  customerType: CustomerTypeOption;
  subtitle: string;
  description: string;
  focusAreas: string;
  imageSrc: string;
  imageAlt: string;
  surfaceTint: string;
}

export interface LiveTaxSocialItem {
  id: string;
  categoryLabel: string;
  title: string;
  serviceOption: ServiceInterestOption;
  oneLiner: string;
  iconName: 'receipt' | 'shield';
}

export interface LoanChartRow {
  id: string;
  title: ServiceInterestOption;
  shortTitle: string;
  category: 'personal' | 'business';
  audience: string;
  kredpointRole: string;
  lenderDecision: string;
  iconName: 'wallet' | 'briefcase' | 'home' | 'car';
}

export interface BusinessSolutionItem {
  id: string;
  number: string;
  title: string;
  serviceOption: ServiceInterestOption;
  aka?: string;
  oneLiner: string;
  iconName: 'file-text' | 'utensils' | 'building';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const AUDIENCE_GROUPS: AudienceGroup[] = [
  {
    id: 'gig-workers',
    title: 'Gig Workers',
    customerType: 'Gig Worker',
    subtitle: 'Delivery partners, drivers & independent earners',
    description:
      'Straightforward assistance when exploring two-wheeler or personal loan options alongside social security and tax support.',
    focusAreas: 'e-Shram & ITR support · Vehicle & personal loan enquiry',
    imageSrc: '/src/assets/images/audience_gig_worker_1795258364093.jpg',
    imageAlt:
      'Indian gig economy delivery worker standing beside a parked scooter holding a smartphone in warm morning daylight',
    surfaceTint: 'bg-[#EBF1E7]',
  },
  {
    id: 'small-businesses',
    title: 'Small Business Owners & Entrepreneurs',
    customerType: 'Small Business Owner / Entrepreneur',
    subtitle: 'Local shops, workshops & micro-enterprises',
    description:
      'Structured documentation help for business loan applications alongside guidance on GST, FSSAI, and Udyam registration paperwork.',
    focusAreas: 'Business loan facilitation · GST, FSSAI & Udyam guidance',
    imageSrc: '/src/assets/images/audience_kirana_shop_1795264828170.jpg',
    imageAlt:
      'Indian neighbourhood kirana store owner standing behind a wooden counter with neatly stocked shelves of grains, spices, and groceries in warm morning light',
    surfaceTint: 'bg-[#F4F1EC]',
  },
  {
    id: 'salaried-employees',
    title: 'Salaried Employees',
    customerType: 'Salaried Employee',
    subtitle: 'Private & public sector professionals',
    description:
      'Clear guidance for organising documents when applying for personal, affordable housing, or vehicle loans, plus ITR filing support.',
    focusAreas: 'ITR filing support · Housing, vehicle & personal loans',
    imageSrc: '/src/assets/images/audience_salaried_employee_1795258363649.jpg',
    imageAlt:
      'Indian salaried professional working calmly with a laptop and notebook by a sunlit window at a clean wooden desk',
    surfaceTint: 'bg-[#EFEAE2]',
  },
];

export const LIVE_TAX_SOCIAL_SERVICES: LiveTaxSocialItem[] = [
  {
    id: 'itr-filing',
    categoryLabel: 'Tax Compliance',
    title: 'Income Tax Return (ITR) Filing Assistance',
    serviceOption: 'Income Tax Return (ITR) filing assistance',
    oneLiner:
      'Live guided support to organise income records and prepare your ITR filing.',
    iconName: 'receipt',
  },
  {
    id: 'e-shram',
    categoryLabel: 'Gig Workers Social Security',
    title: 'e-Shram Registration Assistance',
    serviceOption: 'e-Shram registration assistance',
    oneLiner:
      'Live application assistance for eligible gig and unorganised-sector workers.',
    iconName: 'shield',
  },
];

export const LOAN_CHART_ROWS: LoanChartRow[] = [
  {
    id: 'personal-loan',
    title: 'Personal loan assistance',
    shortTitle: 'Personal Loan',
    category: 'personal',
    audience: 'Salaried & gig earners',
    kredpointRole: 'Document checklist & enquiry prep',
    lenderDecision: 'Rates, eligibility & approval',
    iconName: 'wallet',
  },
  {
    id: 'business-loan',
    title: 'Business loan assistance',
    shortTitle: 'Business Loan',
    category: 'business',
    audience: 'Small businesses & MSMEs',
    kredpointRole: 'Application & working-capital prep',
    lenderDecision: 'Credit terms & disbursal',
    iconName: 'briefcase',
  },
  {
    id: 'housing-loan',
    title: 'Affordable housing loan assistance',
    shortTitle: 'Affordable Housing Loan',
    category: 'personal',
    audience: 'First-time home buyers',
    kredpointRole: 'Income & property paper prep',
    lenderDecision: 'Valuation, terms & sanction',
    iconName: 'home',
  },
  {
    id: 'vehicle-loan',
    title: 'Vehicle loan assistance',
    shortTitle: 'Vehicle Loan',
    category: 'business',
    audience: 'Gig riders & households',
    kredpointRole: 'Enquiry & KYC document prep',
    lenderDecision: 'Loan offer & disbursal',
    iconName: 'car',
  },
];

export const BUSINESS_SOLUTIONS: BusinessSolutionItem[] = [
  {
    id: 'gst-assistance',
    number: '01.',
    title: 'GST Registration & Document Assistance',
    serviceOption: 'GST registration / document assistance',
    oneLiner: 'Guidance to compile identity, address, and bank records for GST application.',
    iconName: 'file-text',
  },
  {
    id: 'fssai-assistance',
    number: '02.',
    title: 'FSSAI Licence Assistance',
    serviceOption: 'FSSAI licence assistance',
    oneLiner: 'Application support for food businesses preparing FSSAI registration paperwork.',
    iconName: 'utensils',
  },
  {
    id: 'udyam-assistance',
    number: '03.',
    title: 'Udyam Registration Assistance',
    serviceOption: 'Udyam registration assistance',
    aka: 'Often referred to as Udyam Aadhaar',
    oneLiner: 'Step-by-step form preparation for micro and small enterprise Udyam submission.',
    iconName: 'building',
  },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Share Details via Agent or Form',
    description:
      'Interested customers can share their details and service requirements directly through an agent or the enquiry form.',
  },
  {
    stepNumber: '02',
    title: 'Receipt & Processing',
    description:
      'Once your details are received, we review the requirement, check supporting documents, and proceed with the request.',
  },
  {
    stepNumber: '03',
    title: 'Detail Updates & Loan Forwarding',
    description:
      'We keep your application details updated as processing moves forward, and for loan requests, forward the file to a lending partner.',
  },
  {
    stepNumber: '04',
    title: 'Progress & Final Outcome',
    description:
      'Receive ongoing status updates while eligibility assessment, terms, and final approval remain with the lending partner or authority.',
  },
];

export const CONTACT_PLACEHOLDERS = {
  email: 'contact@kredpoint.example',
  phone: '+91 00000 00000',
  address: 'Proposed Operations Desk, City & State (to be confirmed)',
  availabilityNote: 'Contact details, service fees, and launch dates are placeholders until confirmed.',
};
