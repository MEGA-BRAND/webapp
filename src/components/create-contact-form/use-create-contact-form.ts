import { storeContact } from "@/api-client/contacts";
import { isValidPhoneNumber } from "@/utils/numbers";
import { isValidEmail } from "@/utils/strings";
import { debounce, noop } from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const useCreateContactForm = () => {
	const [phoneError, setPhoneError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [canSubscribe, setCanSubscribe] = useState(false);
	const onChangeEmail = useCallback(
		debounce((ev: ChangeEvent<HTMLInputElement>) => {
			setEmail(ev.target.value);
			if (isValidEmail(ev.target.value)) {
				setEmailError(false);
			} else {
				setEmailError(true);
			}
		}, 250),
		[setEmail, setEmailError],
	);
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
			.catch(noop);
	}, [name, email, phoneNumber]);
	useEffect(() => {
		if (!!name.length && !emailError && !phoneError) {
			setCanSubscribe(true);
			return;
		}
		setCanSubscribe(false);
	}, [name, emailError, phoneError]);
	return {
		subscribeCallback,
		onChangePhoneNumber,
		onChangeEmail,
		setName,
		name,
		canSubscribe,
		phoneError,
		emailError,
	};
};
