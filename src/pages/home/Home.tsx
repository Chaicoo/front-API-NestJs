/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from '@/components/ui/header';
import { toast, Toaster } from 'sonner';

function Home() {
    return (
        <main className="mb-20">
            <Header />
            <h1>Home</h1>
            <Toaster position="bottom-center" richColors expand={false} visibleToasts={3} />
        </main>
    );
}

export default Home;
