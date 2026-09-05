import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-4xl w-full space-y-12 text-center">
        
        {/* Header Section */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-sm">
            Navegantes Seguros
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            La academia espacial donde padres e hijos aprenden ciberseguridad juntos.
          </p>
        </div>

        {/* Pillars Section */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card variant="glow" className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
              🚫
            </div>
            <h3 className="text-xl font-bold text-white">Cero Control Restrictivo</h3>
            <p className="text-slate-400">
              No bloqueamos el internet. Enseñamos a navegarlo de forma segura mediante el entendimiento, no la prohibición.
            </p>
          </Card>
          
          <Card variant="glow" className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-white">Mediación Activa</h3>
            <p className="text-slate-400">
              El diálogo es nuestra mejor herramienta. Proveemos escenarios para que converses sobre seguridad con tu hijo.
            </p>
          </Card>

          <Card variant="glow" className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center text-lime-400 text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold text-white">100% Co-uso</h3>
            <p className="text-slate-400">
              Misiones diseñadas para requerir la participación de ambos. ¡Una nave necesita a su piloto y a su copiloto!
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="pt-8">
          <p className="text-lg text-slate-300 mb-6">
            Padres, llamen a sus cadetes. Es hora de comenzar el entrenamiento.
          </p>
          <Link href="/onboarding">
            <Button size="lg" variant="primary" className="text-xl px-12 py-6 animate-pulse hover:animate-none">
              Iniciar Misión
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}
