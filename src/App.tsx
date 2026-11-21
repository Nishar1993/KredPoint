/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroAndAudiences} from './components/HeroAndAudiences';
import {ServicesSection} from './components/ServicesSection';
import {ProcessAndAbout} from './components/ProcessAndAbout';
import {ContactAndFooter} from './components/ContactAndFooter';
import type {CustomerTypeOption, ServiceInterestOption} from './data/kredpointData';

export default function App() {
  const [preselectedCustomerType, setPreselectedCustomerType] = useState<
    CustomerTypeOption | undefined
  >(undefined);
  const [preselectedService, setPreselectedService] = useState<
    ServiceInterestOption | undefined
  >(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleNavigateToContact = (customerType?: CustomerTypeOption) => {
    if (customerType) {
      setPreselectedCustomerType(customerType);
    }
    scrollToSection('contact');
  };

  const handleSelectServiceForEnquiry = (service: ServiceInterestOption) => {
    setPreselectedService(service);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#3D332B]">
      <Navbar onNavigateToContact={() => handleNavigateToContact()} />

      <main>
        <HeroAndAudiences
          onExploreServices={() => scrollToSection('services')}
          onContactWithAudience={handleNavigateToContact}
        />

        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        <ProcessAndAbout />

        <ContactAndFooter
          preselectedCustomerType={preselectedCustomerType}
          preselectedService={preselectedService}
        />
      </main>
    </div>
  );
}
