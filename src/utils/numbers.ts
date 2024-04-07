export const isValidPhoneNumber = (phoneNumber: string): boolean => {
	const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	return regex.test(phoneNumber);
};
