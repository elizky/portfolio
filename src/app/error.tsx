"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import PersonalInfo from "@/components/PersonalInfo";
import { LetsTalk } from "@/components/LetsTalk";
import FollowMe2 from "@/components/FollowMe2";
import Footer from "@/components/Footer";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {}, [error]);

  return (
    <Card className="space-y-8 pb-6 container m-auto">
      <PersonalInfo />
      <div className="flex flex-col gap-4 my-4 text-center">
        <h3>Oops!</h3>
        <p className="text-muted-foreground">🚨 Something went wrong 🚨</p>
        <p className="font-mono">{error.message}</p>
        <p className="text-muted-foreground"> Maybe something is broken </p>
      </div>
      <section>
        <LetsTalk />
      </section>
      <section className="px-4">
        <FollowMe2 />
      </section>
      <Footer />
    </Card>
  );
}
