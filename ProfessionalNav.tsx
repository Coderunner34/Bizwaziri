// import { type LucideIcon } from "lucide-react";

// interface DropdownItem {
//   name: string;
//   href: string;
//   icon?: LucideIcon;
// }

// interface NavItem {
//   name: string;
//   href: string;
//   icon?: LucideIcon;
//   dropdown?: DropdownItem[];
// }




// import { useState, useEffect, useRef } from 'react';
// import { Menu, X, Phone, ChevronDown, FileText, Calculator, Users, BookOpen, PlayCircle, Home, Star, Mail, Target, Zap } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logoImage from '../assets/BWlogo.png';





// interface ProfessionalNavProps {
//   onBookingClick: () => void;
//   onNavigate: (sectionId: string) => void;
// }

// export function ProfessionalNav({ onBookingClick, onNavigate }: ProfessionalNavProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const sections = [
//         'home', 'about', 'success-stories', 'case-studies', 
//         'roi-calculator', 'services-overview', 'pricing', 'process', 
//         'education', 'testimonials', 'faq', 'contact'
//       ];
      
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
      
//       if (current) setActiveSection(current);
//     };

//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setOpenDropdown(null);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const servicesMenu = [
//     { name: 'Services Overview', href: 'services-overview', icon: Target },
//     { name: 'Pricing Packages', href: 'pricing', icon: FileText },
//     { name: 'ROI Calculator', href: 'roi-calculator', icon: Calculator },
//     { name: 'Our Process', href: 'process', icon: PlayCircle },
//   ];

//   const resultsMenu = [
//     { name: 'Success Stories', href: 'success-stories', icon: Star },
//     { name: 'Case Studies', href: 'case-studies', icon: FileText },
//     { name: 'Client Testimonials', href: 'testimonials', icon: Users },
//   ];

//   const resourcesMenu = [
//     { name: 'Education Hub', href: 'education', icon: BookOpen },
//     { name: 'FAQ', href: 'faq', icon: FileText },
//   ];

//   const mainNavItems = [
//     { name: 'Home', href: 'home', icon: Home },
//     { name: 'Our Story', href: 'about', icon: Users },
//     { name: 'Services', href: 'services-overview', dropdown: servicesMenu },
//     { name: 'Results', href: 'success-stories', dropdown: resultsMenu },
//     { name: 'Resources', href: 'education', dropdown: resourcesMenu },
//     { name: 'Contact', href: 'contact', icon: Mail },
//   ];

//   const handleNavigation = (href: string) => {
//     onNavigate(href);
//     setIsMobileMenuOpen(false);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (dropdownName: string) => {
//     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2'
//             : 'bg-transparent py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <motion.button
//               onClick={() => handleNavigation('home')}
//               className="flex items-center gap-3 group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src={logoImage}
//                 alt="BizWaziri Kenya"
//                 className="h-12 md:h-14 transition-all duration-300"
//               />
//               <div className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white/90'}`}>
//                 <div className="text-xl font-bold group-hover:text-[#F57C00] transition-colors duration-300">
//                   BizWaziri
//                 </div>
//                 <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/70'}`}>
//                   Business Transformation
//                 </div>
//               </div>
//             </motion.button>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
//               {mainNavItems.map((item) => (
//                 <div key={item.name} className="relative">
//                   {item.dropdown ? (
//                     <motion.button
//                       onClick={() => toggleDropdown(item.name)}
//                       className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group flex items-center gap-1 ${
//                         isScrolled
//                           ? activeSection === item.href || item.dropdown.some(d => d.href === activeSection)
//                             ? 'text-[#F57C00] bg-orange-50'
//                             : 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50'
//                           : activeSection === item.href || item.dropdown.some(d => d.href === activeSection)
//                             ? 'text-[#F57C00] bg-white/20'
//                             : 'text-white/90 hover:text-[#F57C00] hover:bg-white/10'
//                       }`}
//                       whileHover={{ y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {item.name}
//                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
//                         openDropdown === item.name ? 'rotate-180' : ''
//                       }`} />
                      
//                       {(activeSection === item.href || item.dropdown.some(d => d.href === activeSection)) && (
//                         <motion.div
//                           className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full ${
//                             isScrolled ? 'bg-[#F57C00]' : 'bg-[#F57C00]'
//                           }`}
//                           layoutId="activeIndicator"
//                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                       )}
//                     </motion.button>
//                   ) : (
//                     <motion.button
//                       onClick={() => handleNavigation(item.href)}
//                       className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group flex items-center gap-2 ${
//                         isScrolled
//                           ? activeSection === item.href
//                             ? 'text-[#F57C00] bg-orange-50'
//                             : 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50'
//                           : activeSection === item.href
//                             ? 'text-[#F57C00] bg-white/20'
//                             : 'text-white/90 hover:text-[#F57C00] hover:bg-white/10'
//                       }`}
//                       whileHover={{ y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {item.icon && <item.icon className="w-4 h-4" />}
//                       {item.name}
//                       {activeSection === item.href && (
//                         <motion.div
//                           className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full ${
//                             isScrolled ? 'bg-[#F57C00]' : 'bg-[#F57C00]'
//                           }`}
//                           layoutId="activeIndicator"
//                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                       )}
//                     </motion.button>
//                   )}

//                   {/* Dropdown Menu */}
//                   <AnimatePresence>
//                     {item.dropdown && openDropdown === item.name && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
//                       >
//                         <div className="p-2">
//                           {item.dropdown.map((dropdownItem) => {
//                             const IconComponent = dropdownItem.icon;
//                             return (
//                               <motion.button
//                                 key={dropdownItem.name}
//                                 onClick={() => handleNavigation(dropdownItem.href)}
//                                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
//                                   activeSection === dropdownItem.href
//                                     ? 'bg-[#F57C00] text-white'
//                                     : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
//                                 }`}
//                                 whileHover={{ x: 4 }}
//                                 whileTap={{ scale: 0.98 }}
//                               >
//                                 <IconComponent className="w-4 h-4" />
//                                 <span className="font-medium">{dropdownItem.name}</span>
//                               </motion.button>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="hidden lg:flex items-center gap-3">
//               <motion.a
//                 href="tel:+254775269628"
//                 className={`flex items-center gap-2 transition-colors p-2 rounded-lg ${
//                   isScrolled 
//                     ? 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50' 
//                     : 'text-white/90 hover:text-[#F57C00] hover:bg-white/10'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Phone className="w-4 h-4" />
//                 <span className="text-sm font-medium">+254 775 269 628</span>
//               </motion.a>
//               {/* <motion.button
//                 onClick={onBookingClick}
//                 className="bg-[#F57C00] hover:bg-[#E57000] text-white px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl font-medium border-2 border-transparent hover:border-orange-300"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book Consultation
//               </motion.button> */}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className={`lg:hidden p-3 rounded-lg transition-colors ${
//                 isScrolled 
//                   ? 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50' 
//                   : 'text-white hover:text-[#F57C00] hover:bg-white/10'
//               }`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </motion.button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl lg:hidden overflow-hidden border border-white/20"
//           >
//             <div className="p-4 max-h-[80vh] overflow-y-auto">
//               <div className="space-y-1">
//                 {mainNavItems.map((item) => (
//                   <div key={item.name}>
//                     {item.dropdown ? (
//                       <div className="space-y-1">

//                         <div className="flex items-center gap-2 px-4 py-2 text-gray-900 font-semibold">
//                           {item.icon && <item.icon className="w-4 h-4" />}
//                           {item.name}
//                         </div>

//                         {item.dropdown.map((dropdownItem) => {
//                           const IconComponent = dropdownItem.icon;
//                           return (
//                             <motion.button
//                               key={dropdownItem.name}
//                               onClick={() => handleNavigation(dropdownItem.href)}
//                               className={`w-full text-left flex items-center gap-3 px-8 py-3 rounded-xl transition-all font-medium ${
//                                 activeSection === dropdownItem.href
//                                   ? 'bg-[#F57C00] text-white'
//                                   : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
//                               }`}
//                               whileHover={{ x: 4 }}
//                               whileTap={{ scale: 0.98 }}
//                             >
//                               <IconComponent className="w-4 h-4" />
//                               {dropdownItem.name}
//                             </motion.button>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <motion.button
//                         onClick={() => handleNavigation(item.href)}
//                         className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
//                           activeSection === item.href
//                             ? 'bg-[#F57C00] text-white'
//                             : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
//                         }`}
//                         whileHover={{ x: 4 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         {item.icon && <item.icon className="w-4 h-4" />}
//                         {item.name}
//                       </motion.button>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
//                 <motion.a
//                   href="tel:+254775269628"
//                   className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   whileHover={{ x: 4 }}
//                 >
//                   <Phone className="w-5 h-5 text-[#F57C00]" />
//                   <div>
//                     <div className="text-sm text-gray-500">Call us</div>
//                     <div className="text-gray-900 font-medium">+254 792 211</div>
//                   </div>
//                 </motion.a>

//                 <motion.button
//                   onClick={() => {
//                     onBookingClick();
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full bg-[#F57C00] hover:bg-[#E57000] text-white px-6 py-4 rounded-xl transition-all text-center font-medium shadow-lg flex items-center justify-center gap-2"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Zap className="w-5 h-5" />
//                   Book Free Consultation
//                 </motion.button>

//                 <motion.a
//                   href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'm%20interested%20in%20transforming%20my%20business."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 rounded-xl transition-all text-center font-medium shadow-lg flex items-center justify-center gap-2"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//                   </svg>
//                   WhatsApp Us
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* WhatsApp Floating Button */}
//       <motion.a
//         href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'm%20interested%20in%20transforming%20my%20business."
//         target="_blank"
//         rel="noopener noreferrer"
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 1, type: "spring", stiffness: 200 }}
//         className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all group"
//         whileHover={{ 
//           scale: 1.1,
//           rotate: 5,
//           boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)"
//         }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <motion.div
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 0.5 }}
//         >
//           <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//           </svg>
//         </motion.div>
        
//         {/* Ping Animation */}
//         <motion.div
//           className="absolute inset-0 border-2 border-[#25D366] rounded-2xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [1, 0, 1],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         />
//       </motion.a>
//     </>
//   );
// }






import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, FileText, Calculator, Users, BookOpen, PlayCircle, Home, Star, Mail, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/BWlogo.png';

interface ProfessionalNavProps {
  onBookingClick: () => void;
}

export function ProfessionalNav({ onBookingClick }: ProfessionalNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Preload pages for instant navigation
  useEffect(() => {
    const preloadPages = ['/about', '/services', '/case-studies', '/contact', '/education'];
    preloadPages.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);

  // Enhanced scroll detection for all pages
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update URL hash based on current section for all pages
      const pageSections = {
        '/': ['home-hero', 'crisis', 'calculator', 'services-overview', 'testimonials'],
        '/about': ['our-story', 'process'],
        '/services': ['services-hero', 'pricing', 'services-calculator', 'sales-strategies'],
        '/case-studies': ['success-stories', 'testimonials'],
        '/education': ['guides', 'sales', 'faq'],
        '/contact': ['contact-form', 'faq']
      };
      
      const currentPageSections = pageSections[location.pathname as keyof typeof pageSections];
      
      if (currentPageSections) {
        const currentSection = currentPageSections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        
        // Update URL hash without page reload
        if (currentSection && location.hash !== `#${currentSection}`) {
          window.history.replaceState(null, '', `#${currentSection}`);
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location.pathname, location.hash]);

  // Multi-page navigation structure
  const servicesMenu = [
    { name: 'All Services', href: '/services', icon: Target },
    { name: 'Pricing', href: '/services#pricing', icon: FileText },
    { name: 'ROI Calculator', href: '/services#services-calculator', icon: Calculator },
    { name: 'Sales Strategies', href: '/services#sales-strategies', icon: Zap },
  ];

  const resultsMenu = [
    { name: 'Success Stories', href: '/case-studies#success-stories', icon: Star },
    { name: 'Case Studies', href: '/case-studies#success-stories', icon: FileText },
    { name: 'Testimonials', href: '/case-studies#testimonials', icon: Users },
  ];

  const resourcesMenu = [
    { name: 'Education Hub', href: '/education', icon: BookOpen },
    { name: 'Business Guides', href: '/education#guides', icon: FileText },
    { name: 'Generate Sales', href: '/education#sales', icon: Zap },
    { name: 'FAQ', href: '/education#faq', icon: FileText },
  ];

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Our Story', href: '/about', icon: Users },
    { name: 'Services', href: '/services', dropdown: servicesMenu },
    { name: 'Results', href: '/case-studies', dropdown: resultsMenu },
    { name: 'Resources', href: '/education', dropdown: resourcesMenu },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  // Enhanced section detection
  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    
    const basePath = path.split('#')[0];
    const hash = path.split('#')[1];
    
    // Check if we're on the correct page
    if (location.pathname !== basePath) return false;
    
    // If there's a hash in the path, check if it matches current hash or scroll position
    if (hash) {
      // If URL hash matches, definitely active
      if (location.hash === `#${hash}`) return true;
      
      // If no hash in URL but we're scrolled to that section
      if (!location.hash) {
        const element = document.getElementById(hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 150 && rect.bottom >= 150;
          return isInView;
        }
      }
      return false;
    }
    
    // If no hash, just being on the page is enough for main nav items
    return true;
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      if (href.includes('#')) {
        // Handle internal page navigation with hash
        const [path, hash] = href.split('#');
        
        if (location.pathname === path) {
          // Already on the page, just scroll to section
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to page then scroll to section
          navigate(path);
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500); // Wait for page load
        }
      } else {
        navigate(href);
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2 border-b border-gray-200/50'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with instant navigation */}
            <motion.button
              onClick={() => handleNavigation('/')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logoImage}
                alt="BizWaziri Kenya"
                className="h-12 md:h-14 transition-all duration-300"
              />
              <div className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white/90'}`}>
                <div className="text-xl font-bold group-hover:text-[#F57C00] transition-colors duration-300">
                  BizWaziri
                </div>
                <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/70'}`}>
                  Business Transformation
                </div>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <motion.button
                        onClick={() => toggleDropdown(item.name)}
                        className={`relative px-4 py-2.5 rounded-xl transition-all duration-200 font-medium group flex items-center gap-1 ${
                          isScrolled
                            ? isActivePath(item.href)
                              ? 'text-[#F57C00] bg-orange-50 border border-orange-200'
                              : 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50'
                            : isActivePath(item.href)
                              ? 'text-[#F57C00] bg-white/20 border border-white/30'
                              : 'text-white hover:text-[#F57C00] hover:bg-white/10'
                        }`}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </motion.button>

                      <AnimatePresence>
                        {item.dropdown && openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden z-50"
                          >
                            <div className="p-1">
                              {item.dropdown.map((dropdownItem) => {
                                const IconComponent = dropdownItem.icon;
                                return (
                                  <motion.button
                                    key={dropdownItem.name}
                                    onClick={() => handleNavigation(dropdownItem.href)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left group ${
                                      isActivePath(dropdownItem.href)
                                        ? 'bg-[#F57C00] text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
                                    }`}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    <span className="font-medium">{dropdownItem.name}</span>
                                  </motion.button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={item.href}
                        className={`relative px-4 py-2.5 rounded-xl transition-all duration-200 font-medium group flex items-center gap-2 ${
                          isScrolled
                            ? isActivePath(item.href)
                              ? 'text-[#F57C00] bg-orange-50 border border-orange-200'
                              : 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50'
                            : isActivePath(item.href)
                              ? 'text-[#F57C00] bg-white/20 border border-white/30'
                              : 'text-white hover:text-[#F57C00] hover:bg-white/10'
                        }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+254775269628"
                className={`flex items-center gap-2 transition-colors p-2 rounded-lg ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50' 
                    : 'text-white hover:text-[#F57C00] hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+254 792 211 741</span>
              </motion.a>
              
              <motion.button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-[#F57C00] to-[#E57000] hover:from-[#E57000] hover:to-[#D35400] text-white px-6 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl font-medium border border-orange-300/50"
                whileHover={{ 
                  scale: 1.05,
                  y: -1
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#F57C00] hover:bg-gray-50' 
                  : 'text-white hover:text-[#F57C00] hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white/95 backdrop-blur-lg shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={logoImage} alt="BizWaziri" className="h-12" />
                    <div>
                      <div className="font-bold text-gray-900">BizWaziri</div>
                      <div className="text-sm text-gray-600">Business Transformation</div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Items */}


                <div className="space-y-2">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-3 px-4 py-3 text-gray-900 font-semibold bg-gray-50 rounded-lg">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            {item.name}
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.dropdown.map((dropdownItem) => {
                              const IconComponent = dropdownItem.icon;
                              return (
                                <button
                                  key={dropdownItem.name}
                                  onClick={() => handleNavigation(dropdownItem.href)}
                                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                                    isActivePath(dropdownItem.href)
                                      ? 'bg-[#F57C00] text-white'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
                                  }`}
                                >
                                  <IconComponent className="w-4 h-4" />
                                  {dropdownItem.name}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                            isActivePath(item.href)
                              ? 'bg-[#F57C00] text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#F57C00]'
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <a
                    href="tel:+254775269628"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5 text-[#F57C00]" />
                    <div>
                      <div className="text-sm text-gray-500">Call us</div>
                      <div className="text-gray-900 font-medium">+254 792 211 741</div>
                    </div>
                  </a>

                  <button
                    onClick={() => {
                      onBookingClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#F57C00] to-[#E57000] text-white px-6 py-4 rounded-xl transition-all text-center font-medium shadow-lg flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Book Free Consultation
                  </button>

                  {/* WhatsApp Button in Mobile Menu */}
                  <a
                    href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'm%20interested%20in%20transforming%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 rounded-xl transition-all text-center font-medium shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/254775269628?text=Hi%20BizWaziri!%20I'm%20interested%20in%20transforming%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all group"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.div>
        
        {/* Ping Animation */}
        <motion.div
          className="absolute inset-0 border-2 border-[#25D366] rounded-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.a>
    </>
  );
}

