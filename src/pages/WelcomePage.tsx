import { useNavigate } from 'react-router-dom'

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 welcome-bg">
      <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-6 gradient-text-animated">
        Welcome to the world of Embodied AI.
      </h1>
      <p className="text-lg font-medium mb-8 gradient-text-animated">
        author: Benny Lu
      </p>
      <button
        onClick={() => navigate('/select')}
        className="px-8 py-3 rounded-xl bg-white/25 backdrop-blur-xl border border-white/40 text-slate-800 font-medium hover:bg-white/35 hover:scale-105 active:scale-100 transition-all duration-200 shadow-lg"
      >
        Enter
      </button>
    </div>
  )
}
