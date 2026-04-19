'use client';

import { useMemo, useState } from 'react';
import WhatsAppFlowDemo, { type ChatFlowStep } from '@/components/WhatsAppFlowDemo';

type Scenario = {
  id: string;
  label: string;
  businessName: string;
  flowSteps: ChatFlowStep[];
};

const scenarios: Scenario[] = [
  {
    id: 'dental',
    label: 'Dental Clinic',
    businessName: 'BrightSmile Clinic',
    flowSteps: [
      {
        id: 'dental-m1',
        type: 'text',
        sender: 'customer',
        text: 'Hi, I want to know your prices and available appointments.',
        timestamp: '10:02 AM',
        delayMs: 350,
      },
      {
        id: 'dental-m2',
        type: 'text',
        sender: 'business',
        text: "Hi, thank you for contacting BrightSmile Clinic. We'd be happy to help.",
        timestamp: '10:03 AM',
        delayMs: 700,
        showTypingBefore: true,
        typingDurationMs: 1000,
      },
      {
        id: 'dental-m3',
        type: 'text',
        sender: 'business',
        text: 'Which treatment or service are you interested in?',
        timestamp: '10:03 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 850,
      },
      {
        id: 'dental-q1',
        type: 'quick-replies',
        sender: 'business',
        options: [
          'Teeth Cleaning',
          'Dental Checkup',
          'Teeth Whitening',
          'Braces Consultation',
          'Other',
        ],
        autoSelectOption: 'Teeth Cleaning',
        delayMs: 500,
        autoSelectDelayMs: 1200,
        selectionHoldMs: 520,
        selectedReplyTimestamp: '10:04 AM',
      },
      {
        id: 'dental-m4',
        type: 'text',
        sender: 'business',
        text: 'Great. Would you prefer a morning or evening appointment?',
        timestamp: '10:04 AM',
        delayMs: 650,
        showTypingBefore: true,
        typingDurationMs: 750,
      },
      {
        id: 'dental-q2',
        type: 'quick-replies',
        sender: 'business',
        options: ['Morning', 'Evening'],
        autoSelectOption: 'Evening',
        delayMs: 420,
        autoSelectDelayMs: 1050,
        selectionHoldMs: 500,
        selectedReplyTimestamp: '10:05 AM',
      },
      {
        id: 'dental-m5',
        type: 'text',
        sender: 'business',
        text: 'Perfect. We still have a few evening slots this week. Would you like us to help you book one?',
        timestamp: '10:05 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 900,
      },
    ],
  },
  {
    id: 'salon',
    label: 'Salon / Beauty',
    businessName: 'Luna Beauty Lounge',
    flowSteps: [
      {
        id: 'salon-m1',
        type: 'text',
        sender: 'customer',
        text: 'Hi, I’d like to book an appointment.',
        timestamp: '11:12 AM',
        delayMs: 350,
      },
      {
        id: 'salon-m2',
        type: 'text',
        sender: 'business',
        text: "Hi, thank you for contacting Luna Beauty Lounge. We'd love to help.",
        timestamp: '11:13 AM',
        delayMs: 700,
        showTypingBefore: true,
        typingDurationMs: 1000,
      },
      {
        id: 'salon-m3',
        type: 'text',
        sender: 'business',
        text: 'Which service are you interested in?',
        timestamp: '11:13 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 820,
      },
      {
        id: 'salon-q1',
        type: 'quick-replies',
        sender: 'business',
        options: ['Hair Styling', 'Hair Color', 'Nail Services', 'Facial', 'Other'],
        autoSelectOption: 'Facial',
        delayMs: 500,
        autoSelectDelayMs: 1200,
        selectionHoldMs: 520,
        selectedReplyTimestamp: '11:14 AM',
      },
      {
        id: 'salon-m4',
        type: 'text',
        sender: 'business',
        text: 'Lovely. Would you prefer a weekday or weekend appointment?',
        timestamp: '11:14 AM',
        delayMs: 650,
        showTypingBefore: true,
        typingDurationMs: 760,
      },
      {
        id: 'salon-q2',
        type: 'quick-replies',
        sender: 'business',
        options: ['Weekday', 'Weekend'],
        autoSelectOption: 'Weekend',
        delayMs: 420,
        autoSelectDelayMs: 1050,
        selectionHoldMs: 500,
        selectedReplyTimestamp: '11:15 AM',
      },
      {
        id: 'salon-m5',
        type: 'text',
        sender: 'business',
        text: 'Perfect. We still have a few weekend slots available. Would you like us to check the best time for you?',
        timestamp: '11:15 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 920,
      },
    ],
  },
  {
    id: 'garage',
    label: 'Car Garage',
    businessName: 'Prime Auto Garage',
    flowSteps: [
      {
        id: 'garage-m1',
        type: 'text',
        sender: 'customer',
        text: 'Hi, I need help with my car and wanted to check availability.',
        timestamp: '9:42 AM',
        delayMs: 350,
      },
      {
        id: 'garage-m2',
        type: 'text',
        sender: 'business',
        text: 'Hi, thank you for contacting Prime Auto Garage. We’re happy to help.',
        timestamp: '9:43 AM',
        delayMs: 700,
        showTypingBefore: true,
        typingDurationMs: 980,
      },
      {
        id: 'garage-m3',
        type: 'text',
        sender: 'business',
        text: 'What do you need assistance with?',
        timestamp: '9:43 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 800,
      },
      {
        id: 'garage-q1',
        type: 'quick-replies',
        sender: 'business',
        options: ['Car Service', 'Brake Check', 'AC Repair', 'Battery Issue', 'Other'],
        autoSelectOption: 'AC Repair',
        delayMs: 500,
        autoSelectDelayMs: 1200,
        selectionHoldMs: 520,
        selectedReplyTimestamp: '9:44 AM',
      },
      {
        id: 'garage-m4',
        type: 'text',
        sender: 'business',
        text: 'Got it. Is this for a quick inspection or a repair appointment?',
        timestamp: '9:44 AM',
        delayMs: 650,
        showTypingBefore: true,
        typingDurationMs: 750,
      },
      {
        id: 'garage-q2',
        type: 'quick-replies',
        sender: 'business',
        options: ['Inspection', 'Repair'],
        autoSelectOption: 'Inspection',
        delayMs: 420,
        autoSelectDelayMs: 1050,
        selectionHoldMs: 500,
        selectedReplyTimestamp: '9:45 AM',
      },
      {
        id: 'garage-m5',
        type: 'text',
        sender: 'business',
        text: 'Perfect. We can help with that. Would you like us to arrange the next available inspection slot?',
        timestamp: '9:45 AM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 920,
      },
    ],
  },
  {
    id: 'cleaning',
    label: 'Cleaning Service',
    businessName: 'FreshFix Services',
    flowSteps: [
      {
        id: 'clean-m1',
        type: 'text',
        sender: 'customer',
        text: 'Hi, I’d like to get a quote for a cleaning service.',
        timestamp: '2:21 PM',
        delayMs: 350,
      },
      {
        id: 'clean-m2',
        type: 'text',
        sender: 'business',
        text: "Hi, thank you for contacting FreshFix Services. We'd be happy to assist.",
        timestamp: '2:22 PM',
        delayMs: 700,
        showTypingBefore: true,
        typingDurationMs: 1000,
      },
      {
        id: 'clean-m3',
        type: 'text',
        sender: 'business',
        text: 'Which service are you looking for?',
        timestamp: '2:22 PM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 820,
      },
      {
        id: 'clean-q1',
        type: 'quick-replies',
        sender: 'business',
        options: [
          'Home Cleaning',
          'Deep Cleaning',
          'Office Cleaning',
          'AC Duct Cleaning',
          'Other',
        ],
        autoSelectOption: 'Deep Cleaning',
        delayMs: 500,
        autoSelectDelayMs: 1200,
        selectionHoldMs: 520,
        selectedReplyTimestamp: '2:23 PM',
      },
      {
        id: 'clean-m4',
        type: 'text',
        sender: 'business',
        text: 'Thanks. Is this for an apartment, villa, or office?',
        timestamp: '2:23 PM',
        delayMs: 650,
        showTypingBefore: true,
        typingDurationMs: 760,
      },
      {
        id: 'clean-q2',
        type: 'quick-replies',
        sender: 'business',
        options: ['Apartment', 'Villa', 'Office'],
        autoSelectOption: 'Apartment',
        delayMs: 420,
        autoSelectDelayMs: 1050,
        selectionHoldMs: 500,
        selectedReplyTimestamp: '2:24 PM',
      },
      {
        id: 'clean-m5',
        type: 'text',
        sender: 'business',
        text: 'Perfect. We can help with that. Would you like us to prepare a quick estimate and availability for you?',
        timestamp: '2:24 PM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 920,
      },
    ],
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    businessName: 'UrbanKey Properties',
    flowSteps: [
      {
        id: 're-m1',
        type: 'text',
        sender: 'customer',
        text: 'Hi, I’m interested in one of your properties and wanted more details.',
        timestamp: '4:08 PM',
        delayMs: 350,
      },
      {
        id: 're-m2',
        type: 'text',
        sender: 'business',
        text: "Hi, thank you for contacting UrbanKey Properties. We'd be happy to help.",
        timestamp: '4:09 PM',
        delayMs: 700,
        showTypingBefore: true,
        typingDurationMs: 1000,
      },
      {
        id: 're-m3',
        type: 'text',
        sender: 'business',
        text: 'What type of property are you looking for?',
        timestamp: '4:09 PM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 820,
      },
      {
        id: 're-q1',
        type: 'quick-replies',
        sender: 'business',
        options: ['Studio', '1 Bedroom', '2 Bedroom', 'Villa', 'Other'],
        autoSelectOption: '1 Bedroom',
        delayMs: 500,
        autoSelectDelayMs: 1200,
        selectionHoldMs: 520,
        selectedReplyTimestamp: '4:10 PM',
      },
      {
        id: 're-m4',
        type: 'text',
        sender: 'business',
        text: 'Great. Are you looking to rent or buy?',
        timestamp: '4:10 PM',
        delayMs: 650,
        showTypingBefore: true,
        typingDurationMs: 760,
      },
      {
        id: 're-q2',
        type: 'quick-replies',
        sender: 'business',
        options: ['Rent', 'Buy'],
        autoSelectOption: 'Rent',
        delayMs: 420,
        autoSelectDelayMs: 1050,
        selectionHoldMs: 500,
        selectedReplyTimestamp: '4:11 PM',
      },
      {
        id: 're-m5',
        type: 'text',
        sender: 'business',
        text: 'Perfect. We can help with that. Would you like us to share suitable options and arrange a viewing?',
        timestamp: '4:11 PM',
        delayMs: 620,
        showTypingBefore: true,
        typingDurationMs: 920,
      },
    ],
  },
];

export default function WhatsAppScenarioDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0]?.id ?? 'dental');
  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === activeScenarioId) ?? scenarios[0],
    [activeScenarioId]
  );

  if (!activeScenario) return null;

  return (
    <section className="bg-[#f8faf9] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See how this works across different business types
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            The same structured response logic can be adapted for clinics, salons,
            garages, service businesses, and more.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {scenarios.map((scenario) => {
            const isActive = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[#0a7c66] bg-[#0a7c66] text-white shadow-[0_12px_26px_-14px_rgba(10,124,102,0.55)]'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_35px_90px_-50px_rgba(15,23,42,0.4)]">
          <WhatsAppFlowDemo
            className="rounded-[2rem]"
            businessName={activeScenario.businessName}
            flowSteps={activeScenario.flowSteps}
            resetKey={activeScenario.id}
          />
        </div>
      </div>
    </section>
  );
}
