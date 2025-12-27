import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, CreditCard, Copy, Smartphone, Check, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';

const PurchaseForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/mykyevkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          _subject: `New Order: ${name}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Connection error. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("9162802034");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="purchase" className="bg-black relative">
       {/* Ambient red glow */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-red/10 to-transparent pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-2xl shadow-2xl shadow-brand-red/10"
        >
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-2">
                  Stop Wasting Potential
                </h2>
                <p className="text-neutral-400">Instant Access. Lifetime Updates.</p>
                <div className="mt-4 flex justify-center items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-red">₦2,999</span>
                  <span className="text-neutral-600 line-through decoration-1">₦10,000</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 rounded focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 rounded focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 rounded focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder="+234..."
                  />
                </div>

                {submitError && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded border border-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                    {submitError}
                  </div>
                )}

                <Button 
                  type="submit" 
                  fullWidth 
                  className="mt-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : '🔥 GET MY COPY NOW'}
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mt-6">
                  <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Secure Checkout</span>
                  <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> No Spam. Ever.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h3 className="font-display font-bold text-3xl text-white uppercase mb-4">Complete Your Order</h3>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                 To finalize your access to the war plan, please make a direct transfer of 
                 <span className="text-brand-red font-bold"> ₦2,999 </span> 
                 to the account below.
              </p>

              <div className="bg-black/40 border border-neutral-800 p-6 rounded-xl mb-8 text-left space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-red/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Amount</span>
                    <span className="text-xl font-bold text-brand-red">₦2,999</span>
                </div>
                
                <div>
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest block mb-1">Bank</span>
                    <span className="text-white font-medium text-lg">Opay</span>
                </div>

                <div>
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest block mb-1">Account Number</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-2xl font-bold tracking-widest">9162802034</span>
                        <button 
                            onClick={copyToClipboard}
                            className="p-2 hover:bg-neutral-800 rounded transition-colors group"
                            title="Copy to clipboard"
                        >
                             {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-neutral-500 group-hover:text-white" />}
                        </button>
                    </div>
                </div>

                <div>
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest block mb-1">Account Name</span>
                    <span className="text-white font-medium">Abdullahi Tajudeen Isola</span>
                </div>
              </div>

              <p className="text-neutral-400 text-sm mb-4">
                Send proof of payment on WhatsApp by clicking the WhatsApp button below.
              </p>

              <a 
                href="https://wa.me/+2347063684959"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider py-4 px-8 rounded transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              >
                <Smartphone className="w-5 h-5" />
                Send Proof on WhatsApp
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default PurchaseForm;