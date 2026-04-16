import WhatsAppFlowDemo from '@/components/WhatsAppFlowDemo';

/**
 * Example usage:
 * - Drop this into a page or landing section.
 * - Edit businessName, statusText, and messages to match your offer.
 */
export default function WhatsAppFlowDemoExample() {
  return (
    <main className="bg-[#fcfdfc]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <WhatsAppFlowDemo
          businessName="BrightSmile Clinic"
          statusText="Typically replies instantly"
        />
      </section>
    </main>
  );
}
