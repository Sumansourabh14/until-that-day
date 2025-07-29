import { menuOptions, SITE_METADATA } from "@/data/constants";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const Footer = () => {
  return (
    <footer className="font-sans border-t py-6 px-8 bg-black">
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
      <p className="text-center text-muted-foreground text-sm">
        Built with ❤️ by Suman Sourabh
      </p>
    </footer>
  );
};

export default Footer;
