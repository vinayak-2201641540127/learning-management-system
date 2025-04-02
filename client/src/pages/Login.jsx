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
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
// import { register } from "module"
import { useEffect, useState } from "react"
import { toast } from "sonner"

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

    const [
        registerUser,
        {
            data: registerData,
            error: registerError,
            isLoading: registerIsLoading,
            isSuccess: registerIsSuccess,
        },
    ] = useRegisterUserMutation();
    const [
        loginUser,
        {
            data: loginData,
            error: loginError,
            isLoading: loginIsLoading,
            isSuccess: loginIsSuccess
        }] = useLoginUserMutation();

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        } else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    };

    const handleRegistration = async (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        // console.log(inputData)
        const action = type === 'signup' ? registerUser : loginUser;
        await action(inputData);
    }

    useEffect(()=>{
        if(registerIsSuccess && registerData){
            toast.success(registerData.message || "signup success")
        }
        if(registerError){
            toast.error("Signup Failed"||registerData.data.message)
        }
        if(loginIsSuccess || loginData){
            toast.success(loginData.message || "Login Successful")
        }
        if(loginError){
            toast.error("Login Failed" || loginData.data.message)
        }
    }, [loginData, registerData, loginError, loginIsLoading, registerIsLoading]);


    return (
        <div className="flex items-center w-full justify-center mt-20">
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
                            <Button disabled={registerIsLoading} onClick={(e) => handleRegistration("signup")}> Signup</Button>
                            {
                                registerIsLoading ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />Wait
                                    </>
                                ) :
                                    // 'Signup'
                                    <></>
                            }
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
                            <Button disabled={loginIsLoading} onClick={(e) => handleRegistration("login")}>
                                {
                                    loginIsLoading ? (
                                        <>
                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />Wait
                                        </>
                                    ) : 'Login'
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default Login;