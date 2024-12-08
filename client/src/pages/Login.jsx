import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {

    const [signupInput, setSignupInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        } else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    };

    const handleRegistration = (type) =>{
        const inputData = type === "signup"?signupInput: loginInput;
        console.log(inputData)
    }

    return (
        <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signupInput.name}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    defaultValue="Vinny"
                                    required="true"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={signupInput.email}
                                    defaultValue="vin@gmail.com"
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    required="true"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    type="password" 
                                    name="password"
                                    value={signupInput.password}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    defaultValue="xyz" 
                                    required="true" 
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e)=>handleRegistration("signup")}> Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input 
                                    type="email" 
                                    name="email"
                                    value={loginInput.email}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    defaultValue="vin@gmail.com"
                                    required="true" 
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    type="password" 
                                    name="password"
                                    value={loginInput.password}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    defaultValue="xyz" 
                                    required="true" 
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e)=>handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default Login;