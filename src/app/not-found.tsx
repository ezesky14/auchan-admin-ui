import Image from 'next/image';
import { AuthCard } from './components/auth-card';
import Link from 'next/link';
import { Button } from './components/button';

export default function NotFound() {
  return (
    <div className="bg-primary flex h-screen w-full flex-col overflow-hidden text-white">
      <Image
        src="/assets/favicon.png"
        alt="Auchan Favicon"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-50"
        width={1500}
        height={1}
        fill={false}
        sizes="100vw"
      />

      <div className="flex flex-1 items-center justify-center">
        <AuthCard
          title="404"
          description="La ressource demandee est introuvable"
          overlayColor="#FFC7C7"
        >
          <Button className="mt-4 flex w-full justify-center">
            <Link href="/">{"Retour à l'accueil"}</Link>
          </Button>
        </AuthCard>
      </div>
    </div>
  );
}
