/* eslint-disable @typescript-eslint/no-unused-vars */
import Login from '@/components/login-form';
import { Header } from '@/components/ui/header';
import { toast, Toaster } from 'sonner';

function Welcome() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col items-center justify-center mb-20">
                <div className="flex flex-col items-center justify-center flex-1">
                    <Login />
                </div>
                <Toaster position="bottom-center" richColors expand={false} visibleToasts={3} />
            </main>
        </>
    );
}

export default Welcome;
