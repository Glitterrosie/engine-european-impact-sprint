import { motion } from "framer-motion";

const schedule = [
  { day: "Day 1 – 25th August", title: "Kick-Off", desc: "Individual arrival, Kick-Off, Challenge Keynotes and finding your Team" },
  { day: "Day 2 – 26th August", title: "Prototyping", desc: "Mapping the problem, prototyping the solution." },
  { day: "Day 3 – 27th August", title: "Refining", desc: "Testing, Improving, Refining your solution." },
  { day: "Day 4 – 28th August", title: "Presentation", desc: "Final presentation and individual departure." },
];

const blobPaths = [
  "M44.5,-62.3C57.1,-54.3,66.6,-40.6,72.1,-25.4C77.6,-10.2,79.1,6.5,74.1,21.1C69.1,35.7,57.6,48.2,44.1,57.4C30.6,66.6,15.3,72.5,-1.2,74.1C-17.7,75.7,-35.4,73,-47.8,63.4C-60.2,53.8,-67.3,37.3,-72.3,20.1C-77.3,2.9,-80.2,-15,-74.5,-29.5C-68.8,-44,-54.5,-55.1,-39.7,-62.2C-24.9,-69.3,-9.6,-72.4,3.6,-77.3C16.8,-82.2,31.9,-70.3,44.5,-62.3",
  "M39.5,-51.8C52.9,-46.2,67,-37.2,73.2,-24.3C79.4,-11.4,77.7,5.4,71.4,19.5C65.1,33.6,54.2,45,41.5,53.8C28.8,62.6,14.4,68.8,-1.5,70.8C-17.4,72.8,-34.8,70.6,-47.5,61.8C-60.2,53,-68.2,37.6,-72.8,21C-77.4,4.4,-78.6,-13.4,-72.2,-27.8C-65.8,-42.2,-51.8,-53.2,-37.4,-58.4C-23,-63.6,-8.2,-63,3.1,-67.2C14.4,-71.4,26.1,-57.4,39.5,-51.8",
  "M42.7,-58.9C55.3,-50.5,65.4,-37.7,71.6,-22.9C77.8,-8.1,80.1,8.7,75.2,23.4C70.3,38.1,58.2,50.7,44.2,59.1C30.2,67.5,14.3,71.7,-1.8,74C-17.9,76.3,-34,76.7,-46.4,68.5C-58.8,60.3,-67.5,43.5,-73,25.8C-78.5,8.1,-80.8,-10.5,-74.8,-25.8C-68.8,-41.1,-54.5,-53.1,-39.6,-60.5C-24.7,-67.9,-9.2,-70.7,3.4,-75.2C16,-79.7,30.1,-67.3,42.7,-58.9",
  "M41.9,-55.1C54.1,-49.8,63.6,-37.3,69.8,-23C76,-8.7,78.9,7.4,74.3,21.6C69.7,35.8,57.6,48.1,43.8,56.3C30,64.5,14.5,68.6,-0.7,69.5C-15.9,70.4,-30.9,68.1,-43.6,59.8C-56.3,51.5,-66.7,37.2,-72.5,21.2C-78.3,5.2,-79.5,-12.5,-73,-26.5C-66.5,-40.5,-52.3,-50.8,-38,-57.1C-23.7,-63.4,-9.3,-65.7,3.2,-70C15.7,-74.3,29.7,-60.4,41.9,-55.1",
];

const bgSolid = [
  "bg-esprint-orange",
  "bg-esprint-pink",
  "bg-esprint-purple",
  "bg-esprint-red",
];

const ProgramSchedule = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display font-bold text-lg text-primary-foreground uppercase tracking-wide border-b-2 border-esprint-purple pb-3 mb-4">
        Program Schedule
      </h2>
      <p className="text-primary-foreground/70 leading-relaxed mb-2">
        Collaborate with international students and experts, tackle real-world challenges, and enjoy four unforgettable days of teamwork, sports, a BBQ night and an exciting excursion.
      </p>
      <p className="text-primary-foreground/50 text-xs italic mb-12">
        More program details will be added shortly.
      </p>

      <div className="relative">
        {/* SVG curved white line */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full pointer-events-none hidden md:block"
          viewBox="0 0 600 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 300 0 C 100 100, 500 200, 300 280 C 100 360, 500 440, 300 530 C 100 620, 500 700, 300 780 C 200 830, 300 870, 300 900"
            stroke="white"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            opacity="0.4"
            fill="none"
          />
        </svg>

        <div className="relative z-10 space-y-12 md:space-y-16">
          {schedule.map((s, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}
              >
                {/* Placeholder with organic blob shape */}
                <div className="w-full md:w-5/12 flex items-center justify-center">
                  <svg viewBox="-100 -100 200 200" className="w-full max-w-[220px]">
                    <defs>
                      <clipPath id={`blob-${i}`}>
                        <path d={blobPaths[i]} transform="scale(1)" />
                      </clipPath>
                    </defs>
                    <rect
                      x="-100" y="-100" width="200" height="200"
                      clipPath={`url(#blob-${i})`}
                      className={i === 0 ? 'fill-esprint-orange/40' : i === 1 ? 'fill-esprint-pink/40' : i === 2 ? 'fill-esprint-purple/40' : 'fill-esprint-red/40'}
                    />
                    <text x="0" y="4" textAnchor="middle" className="fill-foreground/30 text-[8px]">Photo</text>
                  </svg>
                </div>

                {/* Text content */}
                <div className={`w-full md:w-7/12 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <span className={`${bgSolid[i]} text-esprint-darkblue inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2`}>{s.day}</span>
                  <h3 className="font-display font-black text-xl md:text-2xl text-primary-foreground mb-2">{s.title}</h3>
                  <span className={`${bgSolid[i]} text-esprint-darkblue inline-block text-sm leading-relaxed px-3 py-1.5 rounded-lg`}>{s.desc}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;
