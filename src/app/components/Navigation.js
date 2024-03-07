import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <p className="font-light text-lg">Home</p>
          </NavigationMenuLink>
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-lg">
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="h-fit w-[600px] p-6 ">
              <NavigationMenuLink asChild>
                <div className="flex flex-row space-x-6 h-fit">
                  <div className="flex flex-col">
                    <Link href="/" className="mb-3">
                      Smartphones
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      iPhone
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Samsung
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      OnePlus
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Oppo
                    </Link>
                  </div>
                  <div className="h-30 border-r" />
                  <div className="flex flex-col mx-10">
                    <Link href="/" className="mb-3">
                      Mobile Accessories
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Phone Case
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Charger & Adapter
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Power Bank
                    </Link>
                  </div>
                  <div className="h-30 border-r mx-[20px]" />

                  <div className="flex flex-col ml-10">
                    <Link href="/" className="mb-3">
                      Electronics & Appliances
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      TV
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Washing Machine
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Speaker
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Microwave
                    </Link>
                  </div>
                </div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-lg">
            Accessories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="h-fit w-[600px] p-6 ">
              <NavigationMenuLink asChild>
                <div className="flex flex-row space-x-6 h-fit">
                  <div className="flex flex-col">
                    <Link href="/" className="mb-3">
                      Smartphones
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      iPhone
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Samsung
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      OnePlus
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Oppo
                    </Link>
                  </div>
                  <div className="h-30 border-r" />
                  <div className="flex flex-col mx-10">
                    <Link href="/" className="mb-3">
                      Mobile Accessories
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Phone Case
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Charger & Adapter
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Power Bank
                    </Link>
                  </div>
                  <div className="h-30 border-r mx-[20px]" />

                  <div className="flex flex-col ml-10">
                    <Link href="/" className="mb-3">
                      Electronics & Appliances
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      TV
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Washing Machine
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Speaker
                    </Link>
                    <Link href="/" className="font-light hover:text-orange-400">
                      Microwave
                    </Link>
                  </div>
                </div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navigation;
