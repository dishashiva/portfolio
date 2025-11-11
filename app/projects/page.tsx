export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">Selected work</h1>

      <div className="space-y-12">
        {/* project 1 */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 bg-soft-blue/30 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-2">AgriCon — AI & Blockchain App for Farmers</h2>
            <p className="text-slate-600 mb-4">
              Designed an approachable PWA that lets rural farmers sell crops and receive AI advice via voice UI.
              Reduced task-completion time by 34 % through iterative usability tests and calm-colour palette.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white rounded-full text-xs">Figma</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs">Tailwind</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs">React</span>
            </div>
            <a href="https://agricon.netlify.app/" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-sky-600 text-white text-sm shadow hover:bg-sky-700">Live Site →</a>
          </div>
          <div>
            <img src="/assets/proj-1.jpg" alt="AgriCon mock-up" className="rounded-2xl shadow-lg" />
          </div>
        </div>

        {/* project 2 */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:order-2 md:col-span-2 bg-blue-gray rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-2">Synaptic Fitness — AI Workout Companion</h2>
            <p className="text-slate-600 mb-4">
              48-hour hackathon MVP. Created user-flows for real-time posture tracking and auto-generated workouts.
              Micro-interactions and soft gradients keep the experience motivating yet serene.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white rounded-full text-xs">Figma</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs">Prototyping</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs">Usability Testing</span>
            </div>
          </div>
          <div className="md:order-1">
            <img src="/assets/proj-2.jpg" alt="Synaptic mock-up" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
