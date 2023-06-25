import { title } from "@/components/primitives";

export default function DocsPage() {
	return (
		<section className="container mx-auto max-w-7xl px-6 pt-16 flex-grow">
            <section className="flex flex-col items-center justify-center">
                <h1 className={title()}>Docs</h1>
            </section>
        </section>
	);
}
