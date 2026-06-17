import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Bus, CalendarDays, Hotel, MapPin, ClipboardCheck, Receipt, Mail } from "lucide-react";
import esprintLogo from "@/assets/esprint-logo-white.svg";

const sectionIcons: Record<string, React.ReactNode> = {
  "Travel Methods": <Bus className="h-6 w-6" />,
  "Travel dates": <CalendarDays className="h-6 w-6" />,
  "Accommodation": <Hotel className="h-6 w-6" />,
  "Local Travel": <MapPin className="h-6 w-6" />,
  "Booking the trip": <ClipboardCheck className="h-6 w-6" />,
  "Travel reimbursement": <Receipt className="h-6 w-6" />,
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-esprint-cream shadow-sm text-esprint-darkblue">
        {sectionIcons[title]}
      </div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-esprint-darkblue">
        {title}
      </h2>
    </div>
    <div className="space-y-4 text-esprint-darkblue/85 leading-relaxed">
      {children}
    </div>
  </section>
);

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl bg-white/70 p-4 md:p-5 border border-esprint-darkblue/10 shadow-sm">
    <h3 className="font-display font-bold text-lg text-esprint-darkblue mb-3">
      {title}
    </h3>
    <div className="space-y-2 text-esprint-darkblue/85 leading-relaxed">
      {children}
    </div>
  </div>
);

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-esprint-darkblue/40 hover:decoration-esprint-darkblue"
  >
    {children}
  </a>
);

const EmailButton = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="inline-flex items-center gap-1.5 align-baseline rounded-md bg-esprint-pink/15 text-esprint-pink hover:bg-esprint-pink hover:text-white px-2.5 py-1 text-sm font-semibold transition-colors no-underline"
  >
    <Mail className="h-3.5 w-3.5" />
    {email}
  </a>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-esprint-pink whitespace-nowrap">{children}</span>
);

const TravelPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Travel Policy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <img
            src={esprintLogo}
            alt="European Impact Sprint"
            className="w-40 md:w-56 mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          />

          <Link
            to="/program-guide"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Program Guide
          </Link>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
              <h1 className="font-display font-black text-4xl md:text-5xl text-esprint-darkblue mb-4">
                Travel Policy
              </h1>
              <p className="text-esprint-darkblue/85 leading-relaxed">
                As part of the European Impact Sprint, HPI Engine has agreed to cover <strong>up to <Highlight>€200 in travel scholarships per participant</Highlight></strong>. This scholarship must adhere to the following guidelines and policy.
              </p>
            </div>

            <Section title="Travel Methods">
              <SubSection title="Bus / Train">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Traveling by <strong>train or bus is the preferred and required mode of transport</strong> for trips <strong>under 4 hours</strong> in total.
                  </li>
                  <li>When traveling by train, the use of <strong>2nd class</strong> is necessary.</li>
                </ul>
              </SubSection>

              <SubSection title="Flights">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Airplane travel is <strong>only permitted if travel time by train or bus exceeds 4 hours</strong>.
                  </li>
                  <li>
                    All flights must be booked in <strong>Economy class at the lowest available airfare</strong>. Plan and book as early as possible to secure the best prices.
                  </li>
                  <li>
                    <strong>Keep all boarding passes</strong> and include them in your travel reimbursement form.
                  </li>
                </ul>
              </SubSection>

              <SubSection title="Other travel methods">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    If you plan to travel by any other means (e.g. private car, ferry), please <strong>reach out before booking</strong> to confirm whether reimbursement can be arranged:{" "}
                    <EmailButton email="impact-sprint@engine.hpi.de" />
                  </li>
                </ul>
              </SubSection>
            </Section>

            <Section title="Travel dates">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The program starts from <Highlight>Tuesday 25 August at 14:00</Highlight> at HPI Campus until <Highlight>Friday 28 August 17:30</Highlight>.
                </li>
                <li>
                  If there are no trains or flights that allow you to arrive at HPI Campus at these times without staying overnight, the nights of <Highlight>Monday 24 August</Highlight> and <Highlight>Friday 28 August</Highlight> <strong>can be included in the travel reimbursement</strong>.
                </li>
                <li>
                  You can travel before or after the program dates, but <strong>any additional costs will not be covered by HPI</strong>.
                </li>
              </ul>
            </Section>

            <Section title="Accommodation">
              <p>
                Accommodation during the program (25–28 August) is provided in Glamping
                Tents at HPI Campus and is fully covered. You do not need to arrange or
                pay for this separately.
              </p>
              <p>
                We do not provide accommodation outside the dates of the program from
                25–28 August 2026. However, we are happy to recommend the following
                options in Berlin/Potsdam that have been used by previous participants.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Youth Hostel Potsdam (Babelsberg) |{" "}
                  <ExtLink href="https://www.jugendherberge.de/en/youth-hostels/potsdam">
                    jugendherberge.de/en/youth-hostels/potsdam
                  </ExtLink>
                </li>
                <li>
                  Seminaris Avendi Hotel Potsdam (near the train station) |{" "}
                  <ExtLink href="https://www.seminaris.de/en/hotels/conference-hotel-potsdam-avendi">
                    seminaris.de/en/hotels/conference-hotel-potsdam-avendi
                  </ExtLink>
                </li>
                <li>
                  Holiday Inn Express Potsdam (city center) |{" "}
                  <ExtLink href="https://www.ihg.com/holidayinnexpress/hotels">
                    ihg.com/holidayinnexpress/hotels
                  </ExtLink>
                </li>
                <li>
                  Youth Hostel Berlin (Wannsee) |{" "}
                  <ExtLink href="https://www.jugendherberge.de/en/youth-hostels/berlin-am-wannsee">
                    jugendherberge.de/en/youth-hostels/berlin-am-wannsee
                  </ExtLink>
                </li>
              </ul>
            </Section>

            <Section title="Local Travel">
              <p>In principle, you should <strong>only use public means of transportation</strong>.</p>

              <SubSection title="From Berlin to HPI Campus">
                <p>
                  Travel from a Berlin airport, Berlin central station, or any other location within Berlin to HPI Campus (Potsdam) <strong>can be covered</strong>. Use <strong>regional trains (RE/RB lines)</strong> or <strong>public transport (S-Bahn, U-Bahn, trams or busses)</strong>.
                </p>
                <p>
                  Make sure to <strong>keep your stamped tickets or proof of purchase</strong>, as this is required for reimbursement.
                </p>
              </SubSection>

              <SubSection title="In your home city">
                <p>
                  The same rules apply to your travel to or from an airport or train station in your home city. <strong>Use public transportation where possible</strong> and keep proof of purchase.
                </p>
                <div className="rounded-xl border border-esprint-darkblue/15 bg-white/60 p-4 mt-2">
                  <p className="font-semibold mb-2">
                    Do not use taxis or other private means of transportation unless:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Physical or health reasons</strong> require an alternative mode of transport.</li>
                    <li>
                      The <strong>time of travel is highly inconvenient</strong> and no reasonable public transport option is available.
                    </li>
                  </ul>
                </div>
              </SubSection>
            </Section>

            <Section title="Booking the trip">
              <p>
                <strong>Arrange and book your travel as early as possible</strong> to keep costs low and comply with this policy.
              </p>
              <p>
                If you are in doubt whether your chosen trip adheres to the travel policy, feel free to reach out to <strong>Essam Sharaf</strong> and get a <strong>pre-approval</strong>:
              </p>
              <div className="flex flex-wrap gap-2">
                <EmailButton email="essam.sharaf@hpi.de" />
                <EmailButton email="impact-sprint@engine.hpi.de" />
              </div>
            </Section>

            <Section title="Travel reimbursement">
              <div className="rounded-xl border-2 border-dashed border-esprint-darkblue/20 bg-esprint-darkblue/5 px-5 py-4 text-esprint-darkblue/60 text-sm italic">
                📄 Travel Reimbursement Form — placeholder
              </div>

              <SubSection title="Requirements for travel reimbursement">
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Attend the full program</strong></li>
                  <li><strong>Adhere to the travel policy</strong></li>
                </ul>
              </SubSection>

              <SubSection title="Process">
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Collect all invoices and receipts used</li>
                  <li>Fill Travel Reimbursement Form</li>
                  <li>Attach all invoices and receipts</li>
                  <li>Submit Travel Reimbursement Form</li>
                  <li>Wait for approvals</li>
                  <li>Receive travel reimbursement</li>
                </ol>
              </SubSection>

              <SubSection title="Timeline">
                <p>
                  The travel expense report must be <strong>submitted within <Highlight>4 weeks</Highlight> of the end of the business trip</strong>. The reimbursement process and receiving the travel scholarship will take about <Highlight>4 weeks</Highlight> after that, unless additional documentation is required.
                </p>
              </SubSection>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPolicy;
