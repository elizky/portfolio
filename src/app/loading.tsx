import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <Card className="space-y-8 pb-6 container m-auto">
      <div className="flex items-center justify-center py-72">
        <Loader2 className="text-primary animate-spin text-center" />
      </div>
    </Card>
  );
}
