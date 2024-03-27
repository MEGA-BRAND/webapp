import { supabase } from "@/clients/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	if (req.method?.toLocaleLowerCase() !== "post") {
		res.status(405).send({ message: "Only POST requests allowed" });
		return;
	}
	if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
		res.status(400).send({ message: "Must send name, email and phoneNumber" });
		return;
	} else {
		try {
			await supabase.from("contacts").insert({
				name: req.body.name,
				email: req.body.email,
				phoneNumber: req.body.phoneNumber,
			});
			res.status(200).json({ message: "Ok" });
		} catch (error) {
			console.error("ERROR: Something went wrong", error);
			res.status(500).send({ message: "Something went wrong" });
		}
	}
}
