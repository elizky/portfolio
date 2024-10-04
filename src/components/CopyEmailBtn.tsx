"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

const CopyEmailBtn = ({ copy, copied }: { copy: string; copied: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "nigd22@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Vuelve a mostrar el texto "Copy Email" después de 2 segundos
      },
      (err) => {
        console.error("Error al copiar al portapapeles: ", err);
      }
    );
  };

  return (
    <Button size="sm" variant="outline" className="flex items-center" onClick={copyToClipboard}>
      {isCopied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          {copied}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          {copy}
        </>
      )}
    </Button>
  );
};

export default CopyEmailBtn;
