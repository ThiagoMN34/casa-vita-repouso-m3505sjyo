import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-8xl font-bold text-[#B4D330] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Página não encontrada</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/">
        <Button className="rounded-full bg-[#B4D330] hover:bg-[#a0bc2a] text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all">
          Voltar para o Início
        </Button>
      </Link>
    </div>
  )
}
