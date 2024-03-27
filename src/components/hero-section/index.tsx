import Image from "next/image";
import { CreateContactForm } from "../create-contact-form";

export const HeroSection = () => {
	return (
		<section className="flex flex-col content-end w-full h-lvh p-8">
			<div className="flex-1 flex-col content-end items-center flex-grow basis-1/3">
				<Image
					src="/logo.png"
					alt="MegaXL"
					width={320}
					height={100}
					className="m-auto"
				/>
				<h3 className="text-center text-md font-ptsans tracking-normal max-w-2xl m-auto">
					Sê a primeira a saber sobre os nossos eventos ao vivo! Inscreve-te
					para receberes todas as novidades e um SMS 10 minutos antes de
					começarmos. Assim, nunca perderás as nossas ofertas especiais, novos
					produtos e eventos exclusivos.
				</h3>
			</div>
			<CreateContactForm />
		</section>
	);
};
