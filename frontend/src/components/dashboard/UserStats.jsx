import { Card, CardContent } from "@/components/ui/card";

const UserStats = () => {
  const stats = [
    {
      label: "Total Verifications",
      value: 24,
    },
    {
      label: "Fake Detected",
      value: 9,
    },
    {
      label: "Credible Results",
      value: 15,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((item) => (
        <Card key={item.label}>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">{item.label}</p>

            <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserStats;
