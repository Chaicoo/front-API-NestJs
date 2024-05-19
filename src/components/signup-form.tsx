import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Signup: React.FC = () => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Criar usuário</CardTitle>
                <CardDescription>Cadastre-se no CRUD</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="">Nome</Label>
                            <Input id="firstName" placeholder="Nome" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="">Sobrenome</Label>
                            <Input id="lastName" placeholder="Sobrenome" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="">Email</Label>
                            <Input id="email" type="email" placeholder="email@email.com" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="">Password</Label>
                            <Input id="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="ml-auto">Criar</Button>
            </CardFooter>
        </Card>
    );
}

export default Signup;