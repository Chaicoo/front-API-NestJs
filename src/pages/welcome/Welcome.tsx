/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Login from '@/components/login-form';
import Signup from '@/components/signup-form';
import { Header } from '@/components/ui/header';
import { toast, Toaster } from 'sonner';

function Welcome() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <>
            <Header />
            <main className="mt-32 flex flex-col items-center justify-start mb-20">
                <div className="flex flex-col items-center justify-center flex-1">
                    {isLogin ? <Login /> : <Signup />}
                    <button
                        onClick={toggleForm}
                        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                        {isLogin ? 'Criar uma conta' : 'Já tem uma conta? Login'}
                    </button>
                </div>
                <Toaster position="bottom-center" richColors expand={false} visibleToasts={3} />
            </main>
        </>
    );
}

export default Welcome;
