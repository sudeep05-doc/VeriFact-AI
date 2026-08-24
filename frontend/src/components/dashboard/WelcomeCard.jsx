import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

const WelcomeCard = () => {
  const { user } = useAuth();

  return (
    <Card className="overflow-hidden">
      <CardContent className="relative p-6 sm:p-8">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(120,119,198,0.16),transparent_65%)]" />
        <div className="relative"><p className="text-sm font-medium text-muted-foreground">Your verification workspace</p><h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Welcome back, {user?.name || "User"}.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Review recent assessments, track verification activity, and start a new check whenever you need it.</p></div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
