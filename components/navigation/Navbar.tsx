import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { menuOptions, SITE_METADATA } from "@/data/constants";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <NavigationMenu className="font-sans px-8 py-4 max-w-[1440px] mx-auto flex flex-wrap items-center justify-between">
      <section>
        <Link
          href={`/`}
          className="text-xl font-semibold tracking-tight hover:text-zinc-300 transition-colors duration-300"
        >
          {SITE_METADATA.title}
        </Link>
      </section>

      <NavigationMenuList className="flex gap-6 text-sm font-medium">
        {menuOptions.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link
                href={item.destination}
                className="transition-colors duration-200"
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <Separator className="mt-3" />
    </NavigationMenu>
  );
};

export default Navbar;
