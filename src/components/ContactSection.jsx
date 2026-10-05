import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Hello!" />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:karlaugustus.manzalinto@cit.edu" text="karlaugustus.manzalinto@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/KarlManzalinto" text="github.com/KarlManzalinto" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/karlmanzalinto" text="linkedin.com/in/karlmanzalinto" />
      </ul>
    </section>
  );
}

export default ContactSection;
