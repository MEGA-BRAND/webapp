"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
						<div className="max-w-md m-auto w-full">
							<PhoneInput
								country={"pt"}
								value={formState.phoneNumber}
								onChange={formState.onChangePhoneNumber}
								inputStyle={{
									background: "rgb(253, 242, 248)",
									borderColor: formState.phoneError
										? "#FF665B"
										: "rgb(251, 207, 232)",
									borderWidth: formState.phoneError ? 2 : 1,
									color: "rgb(23 37 84)",
									borderRadius: "1.9rem",
									height: "48px",
									padding: "0 56px",
									fontFamily: "PT Sans, sans-serif",
									width: "100%",
									textAlign: "center",
								}}
								buttonStyle={{
									borderRadius: "4rem",
									padding: "4px",
									borderColor: formState.phoneError
										? "#FF665B"
										: "rgb(251, 207, 232)",
								}}
								dropdownStyle={{
									background: "rgb(253, 242, 248)",
									borderColor: "rgb(251, 207, 232)",
									borderRadius: "0.5rem",
									width: "100%",
								}}
							/>
						</div>
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
