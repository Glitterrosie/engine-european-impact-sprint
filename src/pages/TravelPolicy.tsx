import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Bus, Plane, CalendarDays, Hotel, MapPin, ClipboardCheck, Receipt } from "lucide-react";
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
  <section className="py-8 first:pt-0 last:pb-0">
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-sm text-esprint-darkblue">
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
  <div className="mb-5">
    <h3 className="font-display font-bold text-lg text-esprint-darkblue mb-2">
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

          <div className="rounded-2xl bg-esprint-cream/95 p-6 md:p-10">
            <h1 className="font-display font-black text-4xl md:text-5xl text-esprint-darkblue mb-4">
              Travel Policy
            </h1>
            <p className="text-esprint-darkblue/85 leading-relaxed mb-8">
              As part of the European Impact Sprint, HPI Engine has agreed to cover up to
              up to €200 in travel scholarships per participant. This scholarship must
              adhere to the following guidelines and policy.
            </p>

            <Section title="Travel Methods">
              <SubSection title="Bus / Train">
                <p>
                  Traveling by train or bus is the preferred and required mode of transport
                  for trips under 4 hours in total.
                </p>
                <p>When traveling by train, the use of the 2nd class is necessary.</p>
              </SubSection>

              <SubSection title="Flights">
                <p>
                  Airplane travel is only permitted if travel time by train or bus exceeds
                  4 hours.
                </p>
                <p>
                  All flights must be booked in Economy class at the lowest available
                  airfare. Plan and book as early as possible to secure the best prices.
                </p>
                <p>
                  Keep all boarding passes and include them in your travel reimbursement
                  form.
                </p>
              </SubSection>

              <SubSection title="Other travel methods">
                <p>
                  If you plan to travel by any other means (e.g. private car, ferry),
                  please reach out to us &lt;
                  <ExtLink href="mailto:impact-sprint@engine.hpi.de">
                    impact-sprint@engine.hpi.de
                  </ExtLink>
                  &gt; before booking to confirm whether reimbursement can be arranged.
                </p>
              </SubSection>
            </Section>

            <Section title="Travel dates">
              <p>
                The program starts from Tuesday 25 August at 14:00 at HPI Campus until
                Friday 28 August 17:30.
              </p>
              <p>
                If there are no trains or flights that allow you to arrive to HPI Campus
                at these times without staying for Monday 24 August or Friday 28 August.
                These two nights can be included in the travel reimbursement.
              </p>
              <p>
                You can travel before or after the program dates, but any costs
                associated with that will not be covered by HPI.
              </p>
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
              <p>In principle, you should only use public means of transportation.</p>

              <SubSection title="From Berlin to HPI Campus">
                <p>
                  Travel from a Berlin airport, Berlin central station, or any other
                  location within Berlin to HPI Campus (Potsdam) can be covered. Use
                  regional trains (RE/RB lines) or public transport (S-Bahn, U-Bahn,
                  trams or busses).
                </p>
                <p>
                  Make sure to keep your stamped tickets or proof of purchase, as this is
                  required for reimbursement.
                </p>
              </SubSection>

              <SubSection title="In your home city">
                <p>
                  The same rules apply to your travel to or from an airport or train
                  station in your home city. Use public transportation where possible and
                  keep proof of purchase.
                </p>
                <div className="rounded-xl border border-esprint-darkblue/15 bg-white/60 p-4 mt-2">
                  <p className="font-semibold mb-2">
                    Do not use taxis or other private means of transportation unless:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Physical or health reasons require an alternative mode of transport.</li>
                    <li>
                      The time of travel is highly inconvenient and no reasonable public
                      transport option is available.
                    </li>
                  </ul>
                </div>
              </SubSection>
            </Section>

            <Section title="Booking the trip">
              <p>
                Arrange and book your travel as early as possible to keep costs low and
                comply with this policy.
              </p>
              <p>
                If you are in doubt if you chosen trip adhere to the travel policy, feel
                free to reach out to Essam Sharaf at{" "}
                <ExtLink href="mailto:essam.sharaf@hpi.de">essam.sharaf@hpi.de</ExtLink>{" "}
                or{" "}
                <ExtLink href="mailto:impact-sprint@engine.hpi.de">
                  impact-sprint@engine.hpi.de
                </ExtLink>{" "}
                and get a pre-approval.
              </p>
            </Section>

            <Section title="Travel reimbursement">
              <div className="rounded-xl border-2 border-dashed border-esprint-darkblue/20 bg-esprint-darkblue/5 px-5 py-4 text-esprint-darkblue/60 text-sm italic">
                📄 Travel Reimbursement Form — placeholder
              </div>

              <SubSection title="Requirements for travel reimbursement">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Attend the full program</li>
                  <li>Adhere to the travel policy</li>
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
                  The travel expense report must be submitted within 4 weeks of the end
                  of the business trip. The reimbursement process and receiving the
                  travel scholarship will take about 4 weeks after that, unless
                  additional documentation is required.
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
