export default function ResumePage() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight">Curriculum Vitae</h1>
        <div className="flex gap-3">
          <a href="/assets/resume.pdf" download className="px-5 py-2.5 rounded-lg bg-sky-600 text-white text-sm font-semibold shadow hover:bg-sky-700">Download PDF</a>
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-blue-gray text-slate-800 text-sm font-semibold shadow hover:bg-slate-200">Open Fullscreen</a>
        </div>
      </div>

      <div className="bg-blue-gray rounded-2xl p-2 shadow">
        <iframe src="/assets/resume.pdf" className="w-full h-[75vh] rounded-xl"></iframe>
      </div>
      <p className="text-center text-xs text-slate-500 mt-4">If preview fails, please download the PDF.</p>
    </section>
  )
}
