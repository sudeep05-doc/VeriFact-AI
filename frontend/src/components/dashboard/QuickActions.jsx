import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return <section className="flex flex-col gap-3 rounded-xl border border-border bg-muted/20 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold">Ready to verify something?</h2><p className="mt-1 text-sm text-muted-foreground">Submit text, media, or a public link for analysis.</p></div><div className="flex gap-2"><Button onClick={() => navigate("/verify")}>Verify content</Button><Button variant="outline" onClick={() => navigate("/profile")}>View profile</Button></div></section>;
};

export default QuickActions;
