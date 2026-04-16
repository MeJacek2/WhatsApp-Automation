import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppFlowDemo from '@/components/WhatsAppFlowDemo';

const HERO_IMAGE_SRC = '/hero-business-owner.webp';

export const metadata: Metadata = {
  title: 'WhatsApp Enquiry Automation | Mishji',
  description:
    'High-conversion WhatsApp enquiry automation landing page for businesses that need faster response times and structured follow-up.',
};

const demoBullets = [
  'Respond instantly to every enquiry',
  'Ask the right qualifying question',
  'Follow up automatically if there is no response',
];

const problemBullets = [
  'Some enquiries are missed completely',
  'Some get delayed replies',
  'Some never receive follow-up',
  'Teams waste time answering the same questions repeatedly',
];

const solutionBullets = [
  'Instant automated first reply',
  'Guided qualification with quick-reply options',
  'Faster lead capture',
  'Clearer customer journey',
  'Reduced manual workload for staff',
];

const howItWorksSteps = [
  {
    title: 'A prospect sends a message',
    description: 'A customer reaches out with an enquiry on WhatsApp.',
  },
  {
    title: 'The system responds instantly',
    description:
      'Instead of waiting for staff availability, the prospect receives an immediate response.',
  },
  {
    title: 'The system qualifies the enquiry',
    description:
      'Using structured prompts and quick replies, the system gathers the right details.',
  },
  {
    title: 'Your team gets a clearer lead',
    description:
      'By the time your staff steps in, the enquiry is already warmer, better qualified, and easier to close.',
  },
  {
    title: 'Follow-up stays consistent',
    description:
      'If needed, the flow can continue with reminders, next-step prompts, or appointment support.',
  },
];

const benefitCards = [
  {
    title: 'Respond faster',
    description:
      'Give prospects immediate acknowledgement instead of making them wait.',
  },
  {
    title: 'Reduce missed opportunities',
    description: 'Keep more conversations alive and active from the start.',
  },
  {
    title: 'Save staff time',
    description:
      'Automate repetitive first-response and qualification work.',
  },
  {
    title: 'Improve customer experience',
    description:
      'Make your business feel more responsive, organised, and professional.',
  },
  {
    title: 'Qualify leads better',
    description:
      'Ask the right questions before your team gets involved.',
  },
  {
    title: 'Create a smoother sales journey',
    description:
      'Move from random chats to a more structured conversion flow.',
  },
];

const industries = [
  'Clinics and healthcare practices',
  'Salons and beauty businesses',
  'Car garages and auto services',
  'Cleaning and maintenance companies',
  'Real estate teams',
  'Education and training providers',
  'General service businesses',
];

const includedList = [
  'WhatsApp enquiry flow planning',
  'Response logic design',
  'Qualification steps',
  'Quick reply structure',
  'Business-specific wording',
  'Deployment guidance / setup support',
];

const faqs = [
  {
    question: 'Is this only for clinics?',
    answer:
      'No. The same structure can be adapted for salons, service businesses, real estate, training providers, and other enquiry-driven businesses.',
  },
  {
    question: 'Does this replace my staff?',
    answer:
      'No. It helps reduce repetitive first-response work and supports your staff with a more structured lead flow.',
  },
  {
    question: 'Can this be customised for my business?',
    answer:
      'Yes. The messaging, qualification steps, service options, and handoff flow can be tailored to your business.',
  },
  {
    question: 'Do I need complex software to use this?',
    answer:
      'Not necessarily. The right setup depends on your business goals, enquiry volume, and preferred workflow.',
  },
  {
    question: 'Can I see how it would work for my business?',
    answer:
      'Yes. That is exactly what the demo or consultation is for.',
  },
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.15]">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl bg-[#0a7c66] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-14px_rgba(10,124,102,0.62)] transition hover:bg-[#096a58] ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 ${className}`}
    >
      {children}
    </Link>
  );
}

function TextCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a7c66] transition hover:text-[#096a58]"
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-emerald-700">
            ✓
          </span>
          <span className="text-sm leading-6 sm:text-[15px]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WhatsAppEnquiryAutomationPage() {
  return (
    <main className="bg-[#f6f8f7] text-slate-900">
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
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              How it Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              FAQ
            </Link>
          </nav>
          <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-28 sm:pt-24"
        aria-labelledby="hero-title"
      >
        <div className="pointer-events-none absolute -left-20 top-8 h-80 w-80 rounded-full bg-emerald-100/45 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-[26rem] w-[26rem] rounded-full bg-sky-100/40 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
              WHATSAPP ENQUIRY AUTOMATION
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.05]"
            >
              Never Miss Another Enquiry
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Capture inbound enquiries, respond in seconds, and guide prospects
              through structured follow-up so your team can convert more leads
              with less manual effort.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Built for businesses that rely on fast response times to win
              customers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#lead-form" className="min-w-[152px]">
                Book a Demo
              </PrimaryButton>
              <SecondaryButton href="#demo" className="min-w-[152px]">
                See How It Works
              </SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Ideal for clinics, salons, service businesses, and customer-facing
              teams in the UAE
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Fast first response', 'Consistent follow-up', 'Cleaner handoff'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-100 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative z-10 rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-[#f9fcfa] p-6 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="pointer-events-none absolute -top-8 right-8 h-28 w-28 rounded-full bg-emerald-100/70 blur-2xl" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-[#3f8f6f]">
              Conversion Focus
            </p>
            <p className="relative mt-3 text-xl font-semibold text-slate-900">
              Better enquiry response starts with structure.
            </p>
            <div className="relative mt-4 h-40 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 sm:h-44">
              <Image
                src={HERO_IMAGE_SRC}
                alt="Business owner handling customer enquiries on mobile"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-transparent" />
            </div>
            <p className="relative mt-3 text-sm leading-7 text-slate-600">
              Build an automation layer that responds quickly, captures key
              details, and gives your team cleaner conversations to close.
            </p>
            <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Fast first response',
                'Consistent follow-up',
                'Cleaner lead handoff',
                'Lower manual workload',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_14px_30px_-28px_rgba(15,23,42,0.55)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
              <SecondaryButton href="#demo">See How It Works</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-[#f8faf9] py-12 sm:py-16"
        aria-labelledby="problem-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_28px_65px_-40px_rgba(15,23,42,0.35)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
              THE PROBLEM
            </p>
            <h2
              id="problem-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Delayed replies quietly kill conversions
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600">
              When a prospect reaches out, they are ready now, not later. But
              many businesses still rely on manual replies, inconsistent
              follow-up, and staff availability to manage enquiries. That
              creates friction, delays, and lost opportunities.
            </p>
            <div className="mt-7">
              <CheckList items={problemBullets} />
            </div>
            <p className="mt-7 text-base font-medium text-slate-800">
              Every missed or delayed enquiry is potential revenue walking away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
              <TextCta href="#demo">See How It Works</TextCta>
            </div>

            <div className="relative -mx-6 mt-8 overflow-hidden border-y border-slate-200/90 sm:-mx-10">
              <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/15 to-transparent" />
              <div className="relative h-48 sm:h-56">
                <Image
                  src={HERO_IMAGE_SRC}
                  alt="Business owner reviewing incoming enquiries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-white py-12 sm:py-16"
        aria-labelledby="solution-title"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
              THE SOLUTION
            </p>
            <h2
              id="solution-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              A structured WhatsApp flow that responds instantly
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Mishji helps businesses automate first-response communication,
              qualify prospects faster, and follow up in a more consistent way
              through a smart WhatsApp enquiry flow.
            </p>
            <div className="mt-7">
              <CheckList items={solutionBullets} />
            </div>
            <div className="mt-8">
              <PrimaryButton href="#lead-form">Request a Consultation</PrimaryButton>
            </div>
          </div>
          <aside className="rounded-2xl border border-emerald-100/90 bg-gradient-to-b from-emerald-50/70 to-white p-6 shadow-[0_24px_50px_-35px_rgba(10,124,102,0.5)]">
            <p className="text-sm font-semibold text-slate-900">
              Built for practical conversion workflows.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This is designed to reduce delay and improve lead quality before
              your team steps in.
            </p>
            <div className="mt-5">
              <TextCta href="#demo">See How It Works</TextCta>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="demo"
        className="scroll-mt-24 border-t border-slate-100 bg-gradient-to-b from-[#f3fbf8] to-white py-6 sm:py-10"
      >
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-emerald-100/80 bg-white/70 shadow-[0_35px_90px_-55px_rgba(10,124,102,0.45)]">
          <WhatsAppFlowDemo
            className="rounded-[2rem]"
            eyebrowText="SEE HOW IT WORKS"
            headline="Instant replies. Structured follow-up. No missed enquiries."
            description="Capture every inbound enquiry, respond in seconds, and guide prospects with structured follow-up so your team can convert more leads with less manual effort."
            bullets={demoBullets}
            businessName="BrightSmile Clinic"
          />
        </div>
        <div className="mx-auto mt-4 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200/80 bg-gradient-to-r from-white via-[#f6fffb] to-[#eefcf6] p-5 shadow-[0_26px_58px_-36px_rgba(10,124,102,0.5)] sm:flex sm:items-center sm:justify-between sm:p-7">
            <p className="text-base font-medium text-slate-800">
              Ready to apply this flow to your own enquiry process?
            </p>
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
              <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
              <SecondaryButton href="#lead-form">
                Request a Consultation
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-slate-100 bg-white py-12 sm:py-16"
        aria-labelledby="how-it-works-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="A simple flow that makes your enquiry process smarter"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorksSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-[#fcfefd] p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_52px_-32px_rgba(15,23,42,0.42)]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700">
                  {index + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-[#f8faf9] py-10 sm:py-14"
        aria-labelledby="benefits-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHY IT MATTERS"
            title="What this helps your business do"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_22px_55px_-35px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-32px_rgba(15,23,42,0.45)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-white py-12 sm:py-16"
        aria-labelledby="industries-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHO THIS IS FOR"
            title="Built for businesses where response speed matters"
            body="This solution is especially useful for businesses that receive regular enquiries and need to respond quickly without adding more manual workload."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-slate-200/90 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-[0_16px_40px_-35px_rgba(15,23,42,0.35)]"
              >
                {industry}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <PrimaryButton href="#lead-form">
              See If This Fits Your Business
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-[#f8faf9] py-12 sm:py-16"
        aria-labelledby="practical-title"
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.4)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
              PRACTICAL APPROACH
            </p>
            <h2
              id="practical-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Focused on real business workflows, not unnecessary complexity
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We design these flows around real business use cases, from enquiry
              handling and service qualification to faster response journeys and
              cleaner handoff to your team. The goal is simple: help you reduce
              response delays and improve how enquiries are managed from the
              start.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every implementation is shaped around the business, the enquiry
              type, and the customer journey you want to create.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-white py-12 sm:py-16"
        aria-labelledby="offer-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_34px_75px_-42px_rgba(15,23,42,0.45)] sm:p-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f6f]">
                GET STARTED
              </p>
              <h2
                id="offer-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Start with a practical enquiry automation setup
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                If your business depends on enquiries, fast response, and
                follow-up, this is a strong first step.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Designed to help you improve response speed without adding
                unnecessary complexity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
                <SecondaryButton href="#lead-form">
                  Request a Consultation
                </SecondaryButton>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f9fcfa] p-5">
              <ul className="space-y-3">
                {includedList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-emerald-700">
                      ✓
                    </span>
                    <span className="text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-slate-100 bg-[#f8faf9] py-10 sm:py-14"
        aria-labelledby="faq-title"
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_14px_35px_-30px_rgba(15,23,42,0.35)] transition-all open:shadow-[0_22px_45px_-30px_rgba(15,23,42,0.45)]"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-400 transition group-open:rotate-45 group-open:text-[#0a7c66]">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-100 bg-white py-12 sm:py-16"
        aria-labelledby="final-cta-title"
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#ecfaf4] via-[#f6fffb] to-white p-8 text-center shadow-[0_40px_85px_-45px_rgba(10,124,102,0.5)] sm:p-11">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-sky-100/35 blur-3xl" />
            <h2
              id="final-cta-title"
              className="relative text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Ready to make your enquiry process faster and smarter?
            </h2>
            <p className="relative mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
              Let’s show you how a structured WhatsApp flow can help your
              business respond faster, qualify better, and convert more
              opportunities.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href="#lead-form">Book a Demo</PrimaryButton>
              <SecondaryButton href="#lead-form">
                Request a Consultation
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lead-form"
        className="border-t border-slate-100 bg-[#f8faf9] pb-16 pt-12 sm:pb-20 sm:pt-16"
        aria-labelledby="lead-form-title"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_22px_50px_-35px_rgba(15,23,42,0.35)] sm:p-7">
            <h2
              id="lead-form-title"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Tell us a bit about your business
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We’ll help you identify whether this kind of enquiry automation is
              a fit for your workflow.
            </p>
            <div className="mt-7 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
              <p className="text-sm leading-6 text-slate-700">
                Share a few details and we can quickly advise the right next step
                for your enquiry process.
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_34px_75px_-42px_rgba(15,23,42,0.45)] sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Company Name
                </span>
                <input
                  type="text"
                  name="companyName"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Business Type
                </span>
                <input
                  type="text"
                  name="businessType"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Approximate Enquiries Per Day
                </span>
                <input
                  type="text"
                  name="enquiriesPerDay"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-slate-700">Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0a7c66] focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#0a7c66] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-14px_rgba(10,124,102,0.62)] transition hover:bg-[#096a58] sm:w-auto"
            >
              Request My Demo
            </button>
            <p className="mt-4 text-sm text-slate-600">
              We’ll review your enquiry and get back to you with the best next
              step.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              No pressure. No generic sales pitch.
            </p>
          </form>
        </div>
      </section>

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
                <Link href="#solution-title" className="hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#practical-title" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#lead-form" className="hover:text-white">
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
