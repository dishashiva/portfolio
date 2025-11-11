export default function HomePage() {
  return (
    <>
      {/* hero */}
      <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Hey, I'm Disha —<br />
            <span className="text-sky-600">UI/UX Designer</span> &<br />
            Project Manager
          </h1>
          <p className="text-slate-600 max-w-lg mt-4">
            I craft calm, functional digital experiences rooted in user needs and disciplined project management.
            Currently finishing my CS degree while leading design & agile delivery for impact-driven products.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/projects" className="px-5 py-2.5 rounded-lg bg-sky-600 text-white text-sm font-semibold shadow hover:bg-sky-700">See Work</a>
            <a href="/resume" className="px-5 py-2.5 rounded-lg bg-blue-gray text-slate-800 text-sm font-semibold shadow hover:bg-slate-200">Resume</a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/assets/photo.png" alt="Disha" className="w-72 h-72 rounded-2xl object-cover drop-shadow-xl" />
        </div>
      </section>

      {/* values */}
      <section className="bg-soft-blue/30">
        <div className="py-16 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-wood/20 flex items-center justify-center mb-4">
              <span className="text-wood text-2xl">◯</span>
            </div>
            <h3 className="font-semibold text-slate-900">Simplicity</h3>
            <p className="text-sm text-slate-600 mt-1">Clutter-free interfaces that breathe.</p>
          </div>
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-wood/20 flex items-center justify-center mb-4">
              <span className="text-wood text-2xl">◇</span>
            </div>
            <h3 className="font-semibold text-slate-900">Balance</h3>
            <p className="text-sm text-slate-600 mt-1">Whitespace as a design material.</p>
          </div>
          <div>
            <div className="w-14 h-14 mx-auto rounded-full bg-wood/20 flex items-center justify-center mb-4">
              <span className="text-wood text-2xl">△</span>
            </div>
            <h3 className="font-semibold text-slate-900">Craft</h3>
            <p className="text-sm text-slate-600 mt-1">Pixel-perfect, human-centred.</p>
          </div>
        </div>
      </section>
    </>
  )
}
