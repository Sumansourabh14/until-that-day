import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { menuOptions, SITE_METADATA } from "@/data/constants";

const Navbar = () => {
  return (
    <NavigationMenu className="font-sans backdrop-blur-md bg-white/5 border border-white/10 text-white shadow-md rounded-xl px-6 py-4 max-w-[1440px] mx-auto mt-4 flex flex-wrap items-center justify-between">
      <section>
        <Link
          href={`/`}
          className="text-2xl font-semibold tracking-tight hover:text-purple-300 transition-colors duration-300"
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
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
