import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppScenarioDemo from '@/components/WhatsAppScenarioDemo';

export const metadata: Metadata = {
  title: 'WhatsApp Multi-Scenario Demo | Mishji',
  description:
    'Industry-specific WhatsApp enquiry automation demo flows for clinics, salons, garages, cleaning services, and real estate.',
};

export default function WhatsAppScenariosPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f7] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/whatsapp-enquiry-automation" className="inline-flex items-center">
            <Image
              src="/logo-mishji-site.webp"
              alt="Mishji"
              width={120}
              height={38}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/whatsapp-enquiry-automation"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Back to Landing
            </Link>
            <Link
              href="/whatsapp-enquiry-automation#lead-form"
              className="inline-flex items-center justify-center rounded-xl bg-[#0a7c66] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_35px_-14px_rgba(10,124,102,0.62)] transition hover:bg-[#096a58]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </header>

      <WhatsAppScenarioDemo />

      <footer className="border-t border-slate-800 bg-[#0f1722] py-10 text-slate-100">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 px-4 sm:px-6 md:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
          <div>
            <Image
              src="/logo-mishji-site.webp"
              alt="Mishji"
              width={128}
              height={40}
              className="h-9 w-auto rounded-sm bg-white/95 p-1"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
              WhatsApp enquiry automation designed for faster response journeys
              and cleaner conversion workflows.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                <Link href="/whatsapp-enquiry-automation#solution-title" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-enquiry-automation#practical-title" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-enquiry-automation#lead-form" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                <a href="mailto:hello@mishji.com" className="hover:text-white">
                  hello@mishji.com
                </a>
              </li>
              <li>
                <a href="tel:+971500000000" className="hover:text-white">
                  +971 50 000 0000
                </a>
              </li>
              <li>
                <a href="https://wa.me/971500000000" className="hover:text-white">
                  WhatsApp: +971 50 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-6xl border-t border-slate-700/70 px-4 pt-5 text-xs text-slate-300 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Mishji. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
