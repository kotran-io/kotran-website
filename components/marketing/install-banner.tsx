"use client";

import {Button, Link} from "@nextui-org/react";
import {ArrowRightIcon} from "@nextui-org/shared-icons";
import {clsx} from "@nextui-org/shared-utils";
import NextLink from "next/link";

import {FeaturesGrid} from "./features-grid";

import {sectionWrapper, subtitle, title} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import {useIsMounted} from "@/hooks/use-is-mounted";

const bannerSuggestions = [
  {
    title: "Getting Started",
    description:
      "Learn how to install the Kotran service and download models from Kotran Hub with docs.",
    icon: <GithubIcon className="text-blue-500" />,
    href: "/docs/guide/installation",
  },
  {
    title: "API Guide",
    description:
      "Kotran gives you an unlimited API quota. You no longer need to make additional payments to use other translation APIs.",
    icon: <GithubIcon className="text-blue-500" />,
    href: "/docs/frameworks/nextjs",
  },
];

export const InstallBanner = () => {
  const isMounted = useIsMounted();

  return (
    <section
      className={sectionWrapper({
        isBlurred: true,
        class:
          "border-t border-b border-divider px-8 w-screen flex justify-center items-center mt-16 lg:mt-44",
      })}
    >
      <div className=" w-full max-w-7xl py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
        <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
          <div className="flex flex-col">
          <div>
              <h1 className={title({size: "md", color: "blue", class: "inline"})}>Break&nbsp;</h1>
              <h1 className={title({size: "md"})}>the limits</h1>
            </div>
            <h1 className={title({size: "md"})}>of language</h1>
          </div>
          <p className={subtitle({class: "md:w-full text-base lg:text-lg"})}>
            Feel free to translate your documents!
          </p>
          <div className="flex flex-row gap-3 justify-start">
            <Button
              as={NextLink}
              className="text-sm"
              color="primary"
              endContent={
                <ArrowRightIcon
                  className="group-data-[hover=true]:translate-x-0.5 transition-transform"
                  strokeWidth={2}
                />
              }
              href="/docs/guide/installation"
              radius="full"
              size="md"
            >
              Get Started
            </Button>
            <Button
              isExternal
              as={Link}
              className="text-sm"
              href="https://github.com/kotran-io"
              radius="full"
              size="md"
              startContent={<GithubIcon />}
              variant="bordered"
            >
              Github
            </Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <FeaturesGrid
            classNames={{
              base: "lg:grid-cols-2",
            }}
            features={bannerSuggestions}
          />
        </div>
      </div>
      <div
        className={clsx(
          "absolute -top-20 lg:top-10 -translate-y-1/2 w-screen h-screen -z-50 opacity-0",
          "data-[mounted=true]:opacity-100 transition-opacity",
          "bg-left bg-no-repeat bg-[url('/gradients/looper-pattern.svg')]",
          "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1]",
          "after:bg-gradient-to-b after:from-transparent after:to-white/80 dark:after:to-black/20 after:z-[-1]",
        )}
        data-mounted={isMounted}
      />
    </section>
  );
};