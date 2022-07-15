
export const translateServive = await fetch("https://lt.vern.cc/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "en",
		target: "fa",
		format: "text",
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await translateServive.json());