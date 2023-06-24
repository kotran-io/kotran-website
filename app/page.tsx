"use client"

import {Spacer} from "@nextui-org/spacer";

import {Hero} from "@/components/marketing/hero";
import {FeaturesGrid} from "@/components/marketing/features-grid";
import {LastButNotLeast} from "@/components/marketing/last-but-not-least";
import {InstallBanner} from "@/components/marketing/install-banner";
import {Community} from "@/components/marketing/community";

import landingContent from "@/content/landing";

export default function Home() {
	return (
	    <main className="container mx-auto max-w-7xl px-6 pt-16 flex-grow">
		    <section className="flex flex-col items-center justify-center">
			    <Hero />
				<FeaturesGrid features={landingContent.topFeatures} />
			    <LastButNotLeast />
			    <InstallBanner />
			    <Community />
				<Spacer y={24} />
		    </section>
	    </main>
	);
}
