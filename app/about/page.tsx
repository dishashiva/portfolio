export default function AboutPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">About me</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-blue-gray rounded-2xl p-8">
            <h2 className="text-lg font-semibold mb-2">Story</h2>
            <p className="text-slate-600">
              Growing up in Bengaluru I was surrounded by tech, but I fell in love with the <em>why</em> behind it.
              Studying CS taught me logic; hackathons taught me empathy. Today I merge those worlds—designing calm,
              inclusive interfaces and leading agile teams to ship them on time.
            </p>
          </div>

          <div className="bg-soft-blue/30 rounded-2xl p-8">
            <h2 className="text-lg font-semibold mb-3">Education</h2>
            <ul className="space-y-2 text-slate-700">
              <li><strong>B.E. Computer Science</strong> — Atria Institute of Technology (2023-2027)</li>
              <li><strong>Google Project Management Cert.</strong> — Coursera (in progress)</li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/assets/photo.png" alt="Disha" className="rounded-2xl drop-shadow-lg" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-14 mb-6">Skills & tooling</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-blue-gray rounded-2xl p-6">
          <h3 className="font-semibold mb-3 text-sky-700">Design</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Figma</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">User Research</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Wireframing</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Prototyping</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Usability Testing</span>
          </div>
        </div>
        <div className="bg-white border border-blue-gray rounded-2xl p-6">
          <h3 className="font-semibold mb-3 text-sky-700">Web & PM</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">HTML / CSS / JS</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Tailwind</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">React basics</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Agile / Scrum</span>
            <span className="px-3 py-1 bg-blue-gray rounded-full text-sm">Jira / Trello</span>
          </div>
        </div>
      </div>
    </section>
  )
}
