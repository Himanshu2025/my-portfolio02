import Head from "next/head";
import IntroLoader from "@/components/intro-loader.client";

export default function LoaderPage() {
	return (
		<>
			<Head>
				<title>Loading — {process.env.NEXT_PUBLIC_SITE_NAME ?? "Himanshu"}</title>
			</Head>
			<main>
				<IntroLoader tagline={"Crafting scalable web experiences"} duration={3000} />
			</main>
		</>
	);
}

