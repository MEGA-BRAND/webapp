import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { storeContact } from "@/api-client/contacts";
import { isValidPhoneNumber } from "@/utils/numbers";
import { isValidEmail } from "@/utils/strings";

export const useCreateContactForm = () => {
	const [phoneError, setPhoneError] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [canSubscribe, setCanSubscribe] = useState(false);
	const onChangePhoneNumber = useCallback(
		debounce((ev: ChangeEvent<HTMLInputElement>) => {
			setPhoneNumber(ev.target.value);
			if (isValidPhoneNumber(ev.target.value)) {
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
		setEmail,
		setName,
		name,
		canSubscribe,
		phoneError,
	};
};
