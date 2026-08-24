import { Card, CardContent } from "@/components/ui/card";

const VerificationHistory = () => {
  const history = [
    {
      type: "YouTube URL",
      result: "Likely Fake",
      date: "24 Aug 2026",
    },
    {
      type: "Text Input",
      result: "Likely Real",
      date: "23 Aug 2026",
    },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">Recent Verification History</h3>

        <div className="space-y-3">
          {history.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-3">
              <div>
                <p className="font-medium">{item.type}</p>

                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>

              <span>{item.result}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationHistory;
