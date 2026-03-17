import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-8xl font-black text-emerald-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Página não encontrada</h2>
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        A página que você está procurando pode ter sido removida, mudou de nome ou está
        temporariamente indisponível.
      </p>
      <Button
        asChild
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg transition-transform hover:scale-105"
      >
        <Link to="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  )
}
