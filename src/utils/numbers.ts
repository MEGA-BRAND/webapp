export const isValidPhoneNumber = (phoneNumber: string): boolean => {
	const regex = /^(?:9[1236]|2[1-9])[0-9]{7}$/;
	return regex.test(phoneNumber);
};
