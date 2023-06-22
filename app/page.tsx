"use client";

import {Spacer} from "@nextui-org/react";

import {InstallBanner} from "@/components/marketing/install-banner";
import {Community} from "@/components/marketing/community";

export default function Home() {
	return (
	    <main className="container mx-auto max-w-7xl px-6 pt-16 flex-grow">
		    <section className="flex flex-col items-center justify-center">
			    <InstallBanner />
			    <Community />
				<Spacer y={24} />
		    </section>
	    </main>
	);
}
