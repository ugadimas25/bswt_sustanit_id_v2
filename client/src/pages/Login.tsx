import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Sprout, Mail, Lock, Globe } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
    // In a real app, this would authenticate
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    // In a real app, this would redirect to Google OAuth
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <Sprout className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-semibold">Farmforce</h1>
            </div>
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-muted-foreground">Sign in to your agricultural management platform</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    data-testid="input-email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                    data-testid="link-forgot-password"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    data-testid="input-password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  data-testid="checkbox-remember"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal cursor-pointer"
                >
                  Remember me for 30 days
                </Label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              data-testid="button-login"
            >
              Sign in
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              size="lg"
              onClick={handleGoogleLogin}
              data-testid="button-google-login"
            >
              <SiGoogle className="h-4 w-4 mr-2" />
              Sign in with Google
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-primary hover:underline font-medium"
                data-testid="link-signup"
              >
                Contact your administrator
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Illustration/Branding */}
      <div className="hidden lg:flex flex-1 bg-primary/5 items-center justify-center p-8">
        <div className="max-w-md space-y-6 text-center">
          <div className="relative">
            {/* World Map Illustration */}
            <div className="relative h-64 flex items-center justify-center">
              <Globe className="h-48 w-48 text-primary/20" />
              
              {/* Farmer silhouettes around the globe */}
              <div className="absolute inset-0">
                {/* Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <Sprout className="h-8 w-8 text-primary/40" />
                </div>
                {/* Right */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                  <Sprout className="h-8 w-8 text-primary/40" />
                </div>
                {/* Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <Sprout className="h-8 w-8 text-primary/40" />
                </div>
                {/* Left */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2">
                  <Sprout className="h-8 w-8 text-primary/40" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Global Agricultural Management</h3>
            <p className="text-muted-foreground">
              Empowering farmers worldwide with digital tools for sustainable agriculture,
              compliance tracking, and better farm management.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Active Farmers</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">120+</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-xs text-muted-foreground">Fields Mapped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
