import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!!!</CardTitle>
        <CardDescription>Login with your github email account</CardDescription>
      </CardHeader>
    </Card>
  )
}
