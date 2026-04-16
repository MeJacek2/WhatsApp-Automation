'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type MessageSender = 'customer' | 'business';

type ChatTextStep = {
  id: string;
  type: 'text';
  sender: MessageSender;
  text: string;
  timestamp: string;
  /**
   * Delay (ms) before this message appears after the previous step.
   */
  delayMs: number;
  /**
   * If true, show a short typing indicator before rendering this message.
   * Useful for business responses to feel more realistic.
   */
  showTypingBefore?: boolean;
  typingDurationMs?: number;
};

type QuickReplyStep = {
  id: string;
  type: 'quick-replies';
  sender: 'business';
  options: string[];
  /**
   * Simulated selected option shown after a short delay.
   */
  autoSelectOption: string;
  delayMs: number;
  autoSelectDelayMs: number;
  /**
   * How long the selected state is shown before converting to customer bubble.
   */
  selectionHoldMs?: number;
  selectedReplyTimestamp: string;
};

type ChatFlowStep = ChatTextStep | QuickReplyStep;
type RenderedTextItem = {
  kind: 'text';
  id: string;
  sender: MessageSender;
  text: string;
  timestamp: string;
};

type RenderedQuickRepliesItem = {
  kind: 'quick-replies';
  id: string;
  options: string[];
  selectedOption: string | null;
};

type RenderedChatItem = RenderedTextItem | RenderedQuickRepliesItem;

const DEFAULT_FLOW_STEPS: ChatFlowStep[] = [
  {
    id: 'm1',
    type: 'text',
    sender: 'customer',
    text: 'Hi, I want to know your prices and available appointments.',
    timestamp: '10:02 AM',
    delayMs: 350,
  },
  {
    id: 'm2',
    type: 'text',
    sender: 'business',
    text: "Hi, thank you for contacting BrightSmile Clinic. We'd be happy to help.",
    timestamp: '10:03 AM',
    delayMs: 700,
    showTypingBefore: true,
    typingDurationMs: 1050,
  },
  {
    id: 'm3',
    type: 'text',
    sender: 'business',
    text: 'Which treatment or service are you interested in?',
    timestamp: '10:03 AM',
    delayMs: 650,
    showTypingBefore: true,
    typingDurationMs: 850,
  },
  {
    id: 'q1',
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
    autoSelectDelayMs: 1300,
    selectionHoldMs: 550,
    selectedReplyTimestamp: '10:04 AM',
  },
  {
    id: 'm4',
    type: 'text',
    sender: 'business',
    text: 'Great. Would you prefer a morning or evening appointment?',
    timestamp: '10:04 AM',
    delayMs: 650,
    showTypingBefore: true,
    typingDurationMs: 800,
  },
  {
    id: 'q2',
    type: 'quick-replies',
    sender: 'business',
    options: ['Morning', 'Evening'],
    autoSelectOption: 'Evening',
    delayMs: 450,
    autoSelectDelayMs: 1150,
    selectionHoldMs: 500,
    selectedReplyTimestamp: '10:05 AM',
  },
  {
    id: 'm5',
    type: 'text',
    sender: 'business',
    text: 'Perfect. We still have a few evening slots this week. Would you like us to help you book one?',
    timestamp: '10:05 AM',
    delayMs: 650,
    showTypingBefore: true,
    typingDurationMs: 950,
  },
];

type WhatsAppFlowDemoProps = {
  /**
   * Edit this to change the business display name shown in the chat header.
   */
  businessName?: string;
  statusText?: string;
  eyebrowText?: string;
  headline?: string;
  description?: string;
  bullets?: string[];
  /**
   * Edit this array to customize the chatbot conversation flow.
   */
  flowSteps?: ChatFlowStep[];
  className?: string;
};

type ChatBubbleProps = {
  message: RenderedTextItem;
};

function ChatBubble({ message }: ChatBubbleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isCustomer = message.sender === 'customer';

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 20);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-[0_1px_1.5px_rgba(15,23,42,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-[78%] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        } ${
          isCustomer
            ? 'rounded-br-md border border-[#cfe8bf] bg-[#dcf8c6] text-slate-800'
            : 'rounded-bl-md border border-[#e5e9ef] bg-white text-slate-800'
        }`}
      >
        <p className="text-[13.5px] leading-[1.35rem] sm:text-sm">{message.text}</p>
        <p className="mt-1 text-right text-[10px] font-medium text-slate-400">
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}

type QuickReplyOptionsProps = {
  item: RenderedQuickRepliesItem;
};

function QuickReplyOptions({ item }: QuickReplyOptionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 20);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-start">
      <div
        className={`max-w-[88%] rounded-2xl rounded-bl-md border border-[#d6efe6] bg-white/95 p-2 shadow-[0_1px_1.5px_rgba(15,23,42,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-[82%] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-wrap gap-1.5">
          {item.options.map((option) => {
            const isSelected = item.selectedOption === option;
            return (
              <button
                key={option}
                type="button"
                disabled
                className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all sm:text-xs ${
                  isSelected
                    ? 'border-[#159a7d] bg-[#e8f8f2] text-[#0a7c66] shadow-[0_3px_10px_-6px_rgba(10,124,102,0.55)]'
                    : 'border-[#b8e4d6] bg-white text-[#0a7c66]'
                }`}
                aria-label={isSelected ? `${option} selected` : option}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * Minimal in-file viewport hook to start the chat animation only once
 * when the component enters the viewport.
 */
function useInViewOnce<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.35 }
) {
  const ref = useRef<T | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasTriggered) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (!entry) return;
      if (entry.isIntersecting) {
        setHasTriggered(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasTriggered, options]);

  return { ref, hasTriggered };
}

function getInitials(value: string) {
  return value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function WhatsAppFlowDemo({
  businessName = 'BrightSmile Clinic',
  statusText = 'Typically replies instantly',
  eyebrowText = 'SEE HOW IT WORKS',
  headline = 'Instant replies. Structured follow-up. No missed enquiries.',
  description = 'Capture every inbound enquiry, respond in seconds, and guide prospects with structured follow-up so your team can convert more leads with less manual effort.',
  bullets = [
    'Respond instantly to every enquiry',
    'Ask the right qualifying question',
    'Follow up automatically if there is no response',
  ],
  flowSteps = DEFAULT_FLOW_STEPS,
  className = '',
}: WhatsAppFlowDemoProps) {
  const { ref, hasTriggered } = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
  });

  const [renderedItems, setRenderedItems] = useState<RenderedChatItem[]>([]);
  const [typingSender, setTypingSender] = useState<MessageSender | null>(null);
  const safeFlowSteps = useMemo(() => flowSteps ?? DEFAULT_FLOW_STEPS, [flowSteps]);
  const businessInitials = useMemo(() => getInitials(businessName), [businessName]);

  useEffect(() => {
    if (!hasTriggered) return;
    if (!safeFlowSteps.length) return;

    let isCancelled = false;
    const timers: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, ms);
        timers.push(timer);
      });

    const runSequence = async () => {
      for (let index = 0; index < safeFlowSteps.length; index += 1) {
        const current = safeFlowSteps[index];
        if (!current || isCancelled) return;

        await wait(current.delayMs);
        if (isCancelled) return;

        if (current.type === 'text') {
          if (current.showTypingBefore && current.sender === 'business') {
            setTypingSender('business');
            await wait(current.typingDurationMs ?? 900);
            if (isCancelled) return;
            setTypingSender(null);
          }

          setRenderedItems((prev) => [
            ...prev,
            {
              kind: 'text',
              id: current.id,
              sender: current.sender,
              text: current.text,
              timestamp: current.timestamp,
            },
          ]);
          continue;
        }

        setRenderedItems((prev) => [
          ...prev,
          {
            kind: 'quick-replies',
            id: current.id,
            options: current.options,
            selectedOption: null,
          },
        ]);

        await wait(current.autoSelectDelayMs);
        if (isCancelled) return;

        setRenderedItems((prev) =>
          prev.map((item) =>
            item.kind === 'quick-replies' && item.id === current.id
              ? { ...item, selectedOption: current.autoSelectOption }
              : item
          )
        );

        await wait(current.selectionHoldMs ?? 500);
        if (isCancelled) return;

        setRenderedItems((prev) => [
          ...prev.filter(
            (item) => !(item.kind === 'quick-replies' && item.id === current.id)
          ),
          {
            kind: 'text',
            id: `${current.id}-selected`,
            sender: 'customer',
            text: current.autoSelectOption,
            timestamp: current.selectedReplyTimestamp,
          },
        ]);
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasTriggered, safeFlowSteps]);

  return (
    <section
      ref={ref}
      className={`w-full bg-gradient-to-b from-white to-[#fbfdfb] py-16 sm:py-20 ${className}`}
      aria-label="WhatsApp enquiry flow demo"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3f8f6f]">
            {eyebrowText}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">{description}</p>

          <ul className="mt-7 space-y-3.5">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-emerald-700">
                  ✓
                </span>
                <span className="text-sm font-medium leading-6 sm:text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -left-1 top-28 hidden h-14 w-1 rounded-r-full bg-slate-300/70 lg:block" />
          <div className="pointer-events-none absolute -right-1 top-36 hidden h-24 w-1 rounded-l-full bg-slate-300/70 lg:block" />

          <div className="mx-auto w-full max-w-[430px]">
            <div className="relative aspect-[390/844] rounded-[3.25rem] border border-slate-300/90 bg-gradient-to-b from-slate-100 to-slate-200 p-2.5 shadow-[0_36px_80px_-35px_rgba(15,23,42,0.55)]">
              <div className="relative h-full overflow-hidden rounded-[2.85rem] border border-slate-300/70 bg-[#e8efe9]">
                <div className="absolute inset-x-0 top-0 z-20">
                  <div className="px-6 pt-2.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold tracking-wide text-slate-900/85">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-3 rounded-sm border border-slate-700/70" />
                        <span className="h-2 w-2 rounded-full bg-slate-700/80" />
                        <span className="h-2 w-4 rounded-[3px] border border-slate-700/70">
                          <span className="m-[1px] block h-[4px] w-[7px] rounded-[2px] bg-slate-700/80" />
                        </span>
                      </div>
                    </div>
                    <div className="mx-auto mt-1 h-7 w-[8.8rem] rounded-full bg-black/90" />
                  </div>
                </div>

                <div className="relative z-10 flex h-full flex-col pt-14">
                  <div className="flex items-center gap-2.5 bg-[#0a7c66]/95 px-3 py-2.5 text-white">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold leading-none">
                      {'<'}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">
                      {businessInitials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-semibold">{businessName}</p>
                      <p className="truncate text-[10px] text-white/80">{statusText}</p>
                    </div>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <span className="h-2 w-2 rounded-full border border-white/90" />
                    </span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <span className="h-[3px] w-[3px] rounded-full bg-white" />
                      <span className="ml-0.5 h-[3px] w-[3px] rounded-full bg-white" />
                      <span className="ml-0.5 h-[3px] w-[3px] rounded-full bg-white" />
                    </span>
                  </div>

                  <div className="relative flex-1 overflow-hidden px-2.5 py-3">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.65)_1px,transparent_0)] [background-size:16px_16px] opacity-30" />
                    <div className="relative flex h-full flex-col gap-2.5">
                      {renderedItems.map((item) =>
                        item.kind === 'text' ? (
                          <ChatBubble key={item.id} message={item} />
                        ) : (
                          <QuickReplyOptions key={item.id} item={item} />
                        )
                      )}

                      {typingSender === 'business' && (
                        <div className="flex translate-y-0 justify-start opacity-100 transition-all duration-300 ease-out">
                          <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-[#e5e9ef] bg-white px-3 py-2 shadow-[0_1px_1.5px_rgba(15,23,42,0.08)]">
                            <span className="text-[11px] text-slate-500">typing...</span>
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                          </div>
                        </div>
                      )}

                      <div className="mt-auto flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
                        <span className="inline-block h-4 w-4 rounded-full border border-slate-300" />
                        <span className="flex-1 text-xs text-slate-400">Message</span>
                        <span className="h-3 w-3 rounded-sm border border-slate-300" />
                        <span className="h-3 w-3 rounded-sm border border-slate-300" />
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0a7c66] text-[10px] text-white">
                          ●
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
