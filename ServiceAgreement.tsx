import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, FileText, CheckSquare } from 'lucide-react';
import logoImage from '../assets/BWlogo.png';


interface ServiceAgreementProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceAgreement({ isOpen, onClose }: ServiceAgreementProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    date: new Date().toISOString().split('T')[0],
    agreementRef: `BW-${Math.floor(1000 + Math.random() * 9000)}`,
    packageSelected: 'Essential Online Presence Package (Ksh 35,000)',
    services: {
      googleBusiness: true,
      instagram: true,
      facebook: true,
      whatsappBusiness: true,
      training: true,
      support: true
    },
    addOns: [] as string[],
    totalFee: '35000',
    depositAmount: '17500',
    finalAmount: '17500',
    clientInfo: {
      name: '',
      title: '',
      businessName: '',
      contact: '',
      email: ''
    }
  });

  if (!isOpen) return null;

  const generatePDF = () => {
    const content = generateAgreementHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const sendViaWhatsApp = () => {
    const message = encodeURIComponent(
      `Service Agreement - ${formData.clientInfo.businessName}\n\n` +
      `Client: ${formData.clientInfo.name}\n` +
      `Package: ${formData.packageSelected}\n` +
      `Total: Ksh ${formData.totalFee}\n` +
      `Agreement Ref: ${formData.agreementRef}\n\n` +
      `I would like to proceed with this agreement.`
    );
    window.open(`https://wa.me/254775269628?text=${message}`, '_blank');
  };

  const generateAgreementHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Service Agreement - ${formData.agreementRef}</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 40px 20px; color: #0A2239; line-height: 1.6; }
          .header { text-align: center; border-bottom: 3px solid #FF8C42; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { height: 60px; margin-bottom: 20px; }
          h1 { color: #0A2239; font-size: 28px; margin: 20px 0; }
          h2 { color: #0A2239; font-size: 20px; margin-top: 30px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
          .info-row { display: flex; justify-content: space-between; margin: 10px 0; }
          .checkbox { display: inline-block; margin: 8px 0; }
          .section { margin: 25px 0; }
          .signature-box { border: 1px solid #ddd; padding: 40px 20px; margin: 20px 0; }
          .footer { text-align: center; border-top: 2px solid #f0f0f0; padding-top: 20px; margin-top: 40px; color: #666; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoImage}" alt="BizWaziri Kenya" class="logo" />
          <h1>SERVICE AGREEMENT</h1>
        </div>

        <div class="section">
          <div class="info-row">
            <strong>Between:</strong> BizWaziri Kenya
          </div>
          <div class="info-row">
            <strong>And:</strong> ${formData.clientInfo.businessName || '_______________________________'}
          </div>
          <div class="info-row">
            <strong>Date:</strong> ${formData.date}
          </div>
          <div class="info-row">
            <strong>Agreement Reference:</strong> ${formData.agreementRef}
          </div>
        </div>

        <h2>1. SERVICES TO BE PROVIDED</h2>
        <div class="section">
          <p>BizWaziri Kenya ("Service Provider") agrees to provide the following digital services to the Client:</p>
          <p><strong>Package Selected:</strong> ${formData.packageSelected}</p>
          <p><strong>Services Included:</strong></p>
          <div class="checkbox">☑ Google Business Profile setup and optimization</div><br/>
          <div class="checkbox">☑ Instagram account creation and branding</div><br/>
          <div class="checkbox">☑ Facebook Business Page setup</div><br/>
          <div class="checkbox">☑ WhatsApp Business configuration</div><br/>
          <div class="checkbox">☑ Staff training session (1 hour)</div><br/>
          <div class="checkbox">☑ 30 days post-launch support</div>
        </div>

        <h2>2. PROJECT TIMELINE</h2>
        <div class="section">
          <p><strong>Start Date:</strong> Upon receipt of deposit payment</p>
          <p><strong>Completion Date:</strong> Within 7 working days from start date</p>
          <p><strong>Training Session:</strong> Scheduled during final 2 days of project</p>
        </div>

        <h2>3. PAYMENT TERMS</h2>
        <div class="section">
          <p><strong>Total Project Fee:</strong> Ksh ${formData.totalFee}</p>
          <p><strong>Deposit (50%):</strong> Ksh ${formData.depositAmount}</p>
          <p><strong>Final Payment (50%):</strong> Ksh ${formData.finalAmount}</p>
          <p><strong>Payment Method:</strong> M-Pesa to 0775 269 628</p>
        </div>

        <h2>4. CLIENT RESPONSIBILITIES</h2>
        <div class="section">
          <p>The Client agrees to provide:</p>
          <ul>
            <li>Business information and contact details</li>
            <li>High-quality photos (minimum 15 photos)</li>
            <li>Logo or branding materials</li>
            <li>Menu, price list, or service offerings</li>
            <li>Timely feedback on draft content</li>
          </ul>
        </div>

        <h2>5. OWNERSHIP AND ACCESS</h2>
        <div class="section">
          <ul>
            <li>Client retains full ownership of all accounts created</li>
            <li>All login credentials provided upon final payment</li>
            <li>Service Provider may showcase work as portfolio examples</li>
          </ul>
        </div>

        <h2>6. GUARANTEE AND SUPPORT</h2>
        <div class="section">
          <p><strong>We Guarantee:</strong></p>
          <ul>
            <li>Professional setup optimized for discovery</li>
            <li>Comprehensive training for independent management</li>
            <li>30 days of free technical support</li>
          </ul>
          <p><strong>We Do Not Guarantee:</strong> Specific follower counts, sales results, or third-party platform changes</p>
        </div>

        <h2>7. SIGNATURES</h2>
        <div class="signature-box">
          <p><strong>SERVICE PROVIDER:</strong></p>
          <p>Name: Karanu Isaac</p>
          <p>Title: Founder, BizWaziri Kenya</p>
          <p>Date: ${formData.date}</p>
          <p>Contact: +254 775 269 628</p>
          <p>Email: sckaranu@gmail.com</p>
        </div>

        <div class="signature-box">
          <p><strong>CLIENT:</strong></p>
          <p>Name: ${formData.clientInfo.name || '_______________________________'}</p>
          <p>Title: ${formData.clientInfo.title || '_______________________________'}</p>
          <p>Business Name: ${formData.clientInfo.businessName || '_______________________________'}</p>
          <p>Date: _______________________________</p>
          <p>Contact: ${formData.clientInfo.contact || '_______________________________'}</p>
          <p>Email: ${formData.clientInfo.email || '_______________________________'}</p>
        </div>

        <div class="footer">
          <p><strong>BizWaziri Kenya</strong></p>
          <p>Digital Solutions for Growing Businesses</p>
          <p>Phone: +254 775 269 628 | Email: sckaranu@gmail.com</p>
          <p>Portfolio: karanuisaacportfolio.netlify.app</p>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-4xl w-full my-8 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#0A2239] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FileText className="w-8 h-8" />
            <div>
              <h2 className="text-2xl">Service Agreement</h2>
              <p className="text-white/70 text-sm">Fill in your details to generate agreement</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-300 text-2xl">×</button>
        </div>

        {/* Form */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Your Full Name</label>
              <input
                type="text"
                value={formData.clientInfo.name}
                onChange={(e) => setFormData({
                  ...formData,
                  clientInfo: { ...formData.clientInfo, name: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
                placeholder="e.g., John Kamau"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Business Name</label>
              <input
                type="text"
                value={formData.clientInfo.businessName}
                onChange={(e) => setFormData({
                  ...formData,
                  clientInfo: { ...formData.clientInfo, businessName: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
                placeholder="e.g., Mama's Kitchen"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Your Title/Position</label>
              <input
                type="text"
                value={formData.clientInfo.title}
                onChange={(e) => setFormData({
                  ...formData,
                  clientInfo: { ...formData.clientInfo, title: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
                placeholder="e.g., Owner"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={formData.clientInfo.contact}
                onChange={(e) => setFormData({
                  ...formData,
                  clientInfo: { ...formData.clientInfo, contact: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
                placeholder="e.g., 0712345678"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                value={formData.clientInfo.email}
                onChange={(e) => setFormData({
                  ...formData,
                  clientInfo: { ...formData.clientInfo, email: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
                placeholder="e.g., john@business.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Package</label>
              <select
                value={formData.packageSelected}
                onChange={(e) => setFormData({ ...formData, packageSelected: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8C42]"
              >
                <option>Essential Online Presence Package (Ksh 35,000)</option>
                <option>Website Development (Ksh 20,000)</option>
                <option>POS System (Ksh 35,000)</option>
                <option>Social Media Management (Ksh 12,000/mo)</option>
                <option>Custom Package</option>
              </select>
            </div>
          </div>

          {/* Agreement Preview */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg text-[#0A2239] mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#FF8C42]" />
              Agreement Summary
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Client:</span>
                <span className="text-[#0A2239]">{formData.clientInfo.name || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Business:</span>
                <span className="text-[#0A2239]">{formData.clientInfo.businessName || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Package:</span>
                <span className="text-[#0A2239]">{formData.packageSelected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Agreement Ref:</span>
                <span className="text-[#0A2239]">{formData.agreementRef}</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-gray-600">Total Fee:</span>
                <span className="text-[#0A2239]">Ksh {formData.totalFee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={generatePDF}
            className="flex-1 bg-[#0A2239] hover:bg-[#0A2239]/90 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Agreement
          </button>
          <button
            onClick={sendViaWhatsApp}
            className="flex-1 bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send via WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  );
}
