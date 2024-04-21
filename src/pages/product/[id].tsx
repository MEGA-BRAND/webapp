import { Product } from "@/components/product";
import "@/app/globals.css";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
	return (
		<>
			<main className="w-full h-full">
				<Product />
			</main>
		</>
	);
}
