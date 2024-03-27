"use client";
import { useCreateContactForm } from "./use-create-contact-form";

export const CreateContactForm = () => {
	const formState = useCreateContactForm();
	return (
		<>
			<form
				className="flex flex-col items-center flex-grow basis-1/2"
				onSubmit={(ev) => {
					ev.stopPropagation();
					ev.preventDefault();
				}}
			>
				<div className="flex-1 flex-col content-start items-center flex-grow mt-8 basis-2/3 w-full">
					<div className="flex flex-col gap-4 w-full items-center">
						<input
							onChange={(ev) => {
								formState.setName(ev.target.value);
							}}
							type="text"
							placeholder="Inês Cunha"
							className={`input text-center ${!formState.name && "input-error"} bg-pink-50 text-blue-950 border-1 border-pink-200 w-full max-w-md font-ptsans`}
						/>
						<input
							onChange={(ev) => {
								formState.setEmail(ev.target.value);
							}}
							type="text"
							placeholder="Email (Opcional)"
							className={`input text-center bg-pink-50 text-blue-950 border-1 border-pink-200 w-full max-w-md font-ptsans`}
						/>
						<input
							onChange={formState.onChangePhoneNumber}
							type="tel"
							placeholder="919123123"
							className={`input w-full max-w-md text-center ${formState.phoneError && "input-error"} bg-pink-50 text-blue-950 w-64 border-1 border-pink-200 font-ptsans`}
						/>
					</div>
					<div className="flex content-center mt-4">
						<button
							className="btn btn-outline m-auto self-center font-ptsans"
							disabled={!formState.canSubscribe}
							onClick={formState.subscribeCallback}
						>
							Subscreve
						</button>
					</div>
				</div>
			</form>
			<dialog id="my_modal" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-center">
						Obrigado por nos subscrever!
					</h3>
					<p className="py-4 text-center">
						Vamos dar o nosso melhor para trazer mais e melhor ao vosso coração
						❤️
					</p>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};
