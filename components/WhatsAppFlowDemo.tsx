'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type MessageSender = 'customer' | 'business';

type ChatMessage = {
  id: string;
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

const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'customer',
    text: 'Hi, I want to know your prices and available appointments.',
    timestamp: '10:02 AM',
    delayMs: 350,
  },
  {
    id: 'm2',
    sender: 'business',
    text: "Hi Sarah, thank you for contacting BrightSmile Clinic. We've received your enquiry about teeth cleaning.",
    timestamp: '10:03 AM',
    delayMs: 700,
    showTypingBefore: true,
    typingDurationMs: 1100,
  },
  {
    id: 'm3',
    sender: 'business',
    text: 'Would you prefer a morning or evening appointment?',
    timestamp: '10:03 AM',
    delayMs: 750,
    showTypingBefore: true,
    typingDurationMs: 900,
  },
  {
    id: 'm4',
    sender: 'customer',
    text: 'Evening would be better.',
    timestamp: '10:04 AM',
    delayMs: 900,
  },
  {
    id: 'm5',
    sender: 'business',
    text: 'Perfect. We still have a few evening slots this week. Would you like us to help you book one?',
    timestamp: '10:04 AM',
    delayMs: 850,
    showTypingBefore: true,
    typingDurationMs: 1000,
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
   * Edit this array to customize the message sequence for your own funnel.
   */
  messages?: ChatMessage[];
  className?: string;
};

/**
 * Minimal in-file viewport hook to start the chat animation only once
 * when the component enters the viewport.
 */
function useInViewOnce<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.35 }
) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasTriggered) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (!entry) return;
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasTriggered(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasTriggered, options]);

  return { ref, isInView, hasTriggered };
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
  messages = DEFAULT_MESSAGES,
  className = '',
}: WhatsAppFlowDemoProps) {
  const { ref, hasTriggered } = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
  });

  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<MessageSender | null>(null);

  const safeMessages = useMemo(() => messages ?? DEFAULT_MESSAGES, [messages]);

  useEffect(() => {
    if (!hasTriggered) return;
    if (!safeMessages.length) return;

    let isCancelled = false;
    const timers: number[] = [];

    const runSequence = async () => {
      for (let index = 0; index < safeMessages.length; index += 1) {
        const current = safeMessages[index];
        if (!current || isCancelled) return;

        await new Promise<void>((resolve) => {
          const waitTimer = window.setTimeout(resolve, current.delayMs);
          timers.push(waitTimer);
        });
        if (isCancelled) return;

        if (current.showTypingBefore && current.sender === 'business') {
          setTypingSender('business');
          await new Promise<void>((resolve) => {
            const typingTimer = window.setTimeout(
              resolve,
              current.typingDurationMs ?? 900
            );
            timers.push(typingTimer);
          });
          if (isCancelled) return;
          setTypingSender(null);
        }

        setVisibleCount((prev) => Math.min(prev + 1, safeMessages.length));
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasTriggered, safeMessages]);

  const renderedMessages = safeMessages.slice(0, visibleCount);

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
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]">
            <div className="rounded-[1.5rem] border border-slate-200/90 bg-gradient-to-b from-[#f8fcf9] via-[#f7fbf8] to-[#f9fcfa] p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-3 border-b border-slate-200/70 pb-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                  BC
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{businessName}</p>
                  <p className="text-xs text-slate-500">{statusText}</p>
                </div>
              </div>

              <div className="flex min-h-[360px] flex-col gap-2.5 sm:min-h-[390px]">
                {renderedMessages.map((message) => {
                  const isCustomer = message.sender === 'customer';

                  return (
                    <div
                      key={message.id}
                      className={`flex animate-[message-in_420ms_cubic-bezier(0.22,1,0.36,1)_both] ${
                        isCustomer ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-sm sm:max-w-[78%] ${
                          isCustomer
                            ? 'rounded-br-md border border-emerald-200/70 bg-emerald-100/80 text-slate-800'
                            : 'rounded-bl-md border border-slate-200 bg-white text-slate-800'
                        }`}
                      >
                        <p className="text-[13.5px] leading-5 sm:text-sm">{message.text}</p>
                        <p className="mt-1 text-[10px] font-medium text-slate-400">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {typingSender === 'business' && (
                  <div className="flex animate-[message-in_260ms_ease-out_both] justify-start">
                    <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3 py-2 shadow-sm">
                      <span className="sr-only">Business is typing</span>
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes message-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
