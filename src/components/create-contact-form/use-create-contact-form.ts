import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { storeContact } from "@/api-client/contacts";
import { isValidPhoneNumber } from "@/utils/numbers";

export const useCreateContactForm = () => {
	const [phoneError, setPhoneError] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [canSubscribe, setCanSubscribe] = useState(false);
	const onChangePhoneNumber = useCallback(
		debounce((value: string) => {
			const parsedPhoneNumber = `+${value}`;
			setPhoneNumber(parsedPhoneNumber);
			if (isValidPhoneNumber(parsedPhoneNumber)) {
				setPhoneError(false);
			} else {
				setPhoneError(true);
			}
		}, 250),
		[setPhoneNumber],
	);
	const subscribeCallback = useCallback(async () => {
		storeContact({
			name,
			email,
			phoneNumber,
		})
			.then(() => {
				if (typeof window !== "undefined") {
					// @ts-ignore
					document.getElementById("my_modal").showModal();
				}
			})
			.catch(() => {
				toast("Ocorreu um erro", {
					autoClose: 5000,
					type: "error"
				});
			});
	}, [name, email, phoneNumber]);
	useEffect(() => {
		if (!!name.length && !phoneError) {
			setCanSubscribe(true);
			return;
		}
		setCanSubscribe(false);
	}, [name, phoneError]);
	return {
		subscribeCallback,
		onChangePhoneNumber,
		phoneNumber,
		setEmail,
		setName,
		name,
		canSubscribe,
		phoneError,
	};
};
