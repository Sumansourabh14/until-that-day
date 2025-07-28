import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { menuOptions, SITE_METADATA } from "@/data/constants";

const Footer = () => {
  return (
    <footer className="border-t py-6 px-8 bg-zinc-950">
      <NavigationMenu className="flex flex-col md:flex-row gap-[24px] flex-wrap items-center justify-between max-w-[1440px] mx-auto px-4">
        <section className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_METADATA.title}. All rights
          reserved.
        </section>
        <NavigationMenuList>
          {menuOptions.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.destination}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <section className="text-center mt-20">
        <p className="font-sans font-bold tracking-tighter text-6xl sm:text-7xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[15rem]">
          {SITE_METADATA.title}
        </p>
      </section>
      <Separator className="my-6" />
      <p className="text-center text-muted-foreground">
        Built with ❤️ by Suman Sourabh
      </p>
    </footer>
  );
};

export default Footer;
