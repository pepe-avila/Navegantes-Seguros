import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { allCopilotNotes } from '@/content/copilot-notes';
import { allFacts } from '@/content/facts';

// Group notes by pillar
const groupedNotes = allCopilotNotes.reduce((acc, note) => {
  if (!acc[note.pillar]) acc[note.pillar] = [];
  acc[note.pillar].push(note);
  return acc;
}, {} as Record<string, typeof allCopilotNotes>);

const pillarLabels: Record<string, string> = {
  supervision: 'Supervisión Adulta',
  privacidad: 'Privacidad de Datos',
  contactos: 'Evitar Contactos',
  ia: 'Inteligencia Artificial'
};

export default function CopilotPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 md:p-16 text-slate-200">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-700 pb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-retro text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Centro de Familias
            </h1>
            <p className="text-xl mt-4 font-retro-text text-slate-400">
              El fundamento detrás de cada misión para seguir la charla en casa.
            </p>
          </div>
          <Link href="/hub">
            <Button variant="outline">Volver al Hub Espacial</Button>
          </Link>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedNotes).map(([pillar, notes]) => (
            <section key={pillar} className="space-y-8">
              <h2 className="text-2xl font-retro text-lime-400 border-l-4 border-lime-500 pl-4 uppercase">
                Pilar: {pillarLabels[pillar] || pillar}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notes.map(note => (
                  <Card key={note.id} variant="default" className="flex flex-col h-full border-t-4 border-t-fuchsia-500">
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight font-retro-text">{note.title}</h3>
                    <p className="text-slate-300 mb-6 flex-grow">{note.body}</p>
                    
                    <div className="bg-slate-800 p-4 mb-6 border-l-2 border-cyan-500">
                      <p className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2">Para charlar en casa:</p>
                      <p className="text-slate-200 italic">"{note.talkingPointForHome}"</p>
                    </div>

                    <div className="mt-auto space-y-2 border-t border-slate-700 pt-4">
                      <p className="text-xs font-bold text-slate-400 uppercase">Fuentes y Evidencia:</p>
                      <ul className="space-y-2">
                        {note.factRefs.map(factId => {
                          const fact = allFacts.find(f => f.id === factId);
                          if (!fact) return null;
                          return (
                            <li key={fact.id} className="text-sm text-slate-400 bg-slate-900 p-2 rounded">
                              <span className="block mb-1 text-slate-300">{fact.statement}</span>
                              <span className="text-xs text-fuchsia-400 font-bold">— {fact.source}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
