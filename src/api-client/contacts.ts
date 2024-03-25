import axios from "axios";

export const storeContact = (payload: any) =>
	axios.post("/api/store-contact", payload);
