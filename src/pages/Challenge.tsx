import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const infoItems = [
  { label: "Date", value: "25–28th August 2026" },
  { label: "Program Schedule", value: "The European Impact Sprint is a 4-day full time program, featuring on-site workshops during the day (ca. 9 am – 6 pm) as well as community activities during the evenings to connect with other participants. The detailed agenda will be shared at the kick-off in July." },
  { label: "Location", value: "Hasso Plattner Institute, Potsdam, Germany (30 min from Berlin airport and train station)" },
  { label: "Accommodation", value: "Shared glamping tents on campus" },
  { label: "Language", value: "English" },
  { label: "Cost", value: "Program participation, accommodation and meals are free of charge for all participants. In addition, a 200 € travel stipend will be granted to cover travel costs." },
  { label: "Participants", value: "60 Bachelor students in computer science from 30 countries across Europe, divided into international teams of 5." },
];

const Challenge = () => {
  return (
    <PageLayout title="The Challenge">
      <div className="space-y-8">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-esprint-purple pb-3">
              Program Brief
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The European Impact Sprint is an intensive innovation program bringing together 60 Computer Science students from 30 European countries. Over the course of four days in Potsdam, you will collaborate in cross-border teams to develop technical solutions for the continent's most pressing challenges.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Photo placeholder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <h2 className="font-display font-bold text-xl text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-esprint-pink pb-3">
              Key Information
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {infoItems.map((item) => (
                  <tr key={item.label} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-3 pr-4 align-top font-bold text-esprint-purple uppercase tracking-wide text-xs whitespace-nowrap w-1/4">{item.label}</td>
                    <td className="py-3 text-gray-700 leading-relaxed">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Europe map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl text-center"
        >
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-3">30 Partner Universities Across Europe</h2>
          <p className="text-gray-500 mb-8">Hover over countries to see partner universities, logos and contact persons.</p>
          <div className="rounded-xl bg-gray-50 aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center border border-gray-200">
            <p className="text-gray-400">Interactive Europe Map – Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Challenge;
