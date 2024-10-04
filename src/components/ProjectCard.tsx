import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

interface ProjectCardInterface {
  name: string;
  description: string;
  link: string;
  image: string;
}
export default function ProjectCard({
  name,
  description,
  link,
  image,
}: ProjectCardInterface) {
  return (
    <Link
      href={link}
      target={link !== "#" ? "_blank" : "_top"}
      className="flex items-center space-x-4 bg-secondary p-4 rounded gap-2 cursor-pointer group shadow"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.split("")}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all ease-in-out" />
    </Link>
  );
}
