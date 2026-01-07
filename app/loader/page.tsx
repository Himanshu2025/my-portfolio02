import dynamic from "next/dynamic";
import Head from "next/head";

const IntroLoader = dynamic(() => import("@/components/intro-loader.client"), { ssr: false });

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

