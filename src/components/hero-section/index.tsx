"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";
import { isValidPhoneNumber } from "@/utils/numbers";

export const HeroSection = () => {
	const [hasError, setError] = useState(false);
	const [value, setValue] = useState("");
	const onChangeInput = useCallback(
		debounce((ev: ChangeEvent<HTMLInputElement>) => {
			setValue(ev.target.value);
			if (isValidPhoneNumber(ev.target.value)) {
				setError(false);
			} else {
				setError(true);
			}
		}, 250),
		[],
	);
	return (
		<section className="flex flex-col content-end w-full h-lvh p-8">
			<div className="flex-1 flex-col content-end items-center flex-grow basis-1/3">
				<h1 className="text-center text-blue-950 text-6xl">MEGA XL</h1>
				<h1 className="text-center text-blue-750 text-base tracking-tighter mt-3">
					Sê a primeira a saber dos nossos diretos, <br />
					vamos enviar-te um sms 10 minutos antes
				</h1>
			</div>
			<div className="flex flex-col items-center flex-grow basis-1/2">
				<div className="flex-1 flex-col content-start items-center flex-grow mt-8 basis-2/3 w-full">
					<div className="flex flex-col gap-4 w-full items-center">
						<input
							type="text"
							placeholder="Inês Cunha"
							className={`input text-center ${hasError && "input-error"} bg-pink-50 text-blue-950 border-1 border-pink-200 w-full max-w-md`}
						/>
						<input
							type="text"
							placeholder="Email"
							className={`input text-center ${hasError && "input-error"} bg-pink-50 text-blue-950 border-1 border-pink-200 w-full max-w-md`}
						/>
						<input
							onChange={onChangeInput}
							type="tel"
							placeholder="919123123"
							className={`input w-full max-w-md text-center ${hasError && "input-error"} bg-pink-50 text-blue-950 w-64 border-1 border-pink-200`}
						/>
					</div>
					<div className="flex content-center mt-4">
						<button className="btn btn-outline m-auto self-center">
							Subscreve
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
