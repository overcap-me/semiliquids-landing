// export const getNavFooter = async () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_HOST}/navigation/footer`, {
//     headers: {
//       Accept: 'application/json'
//     }
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch footer navigation');
//   }
//   const data = await response.json();
//   return data;
// }

export const getNavFooter = async () => {
	return {
		data: {
			id: 2,
			name: "Footer",
			handle: "footer",
			items: {
				"313a0147-220b-4917-8bee-f72f0faea752": {
					label: "Disclaimers ",
					type: "page",
					children: [],
					data: {
						url: "disclaimers",
					},
				},
				"7a281352-4b4c-4ad7-aa33-65fef1b86043": {
					label: "Privacy",
					type: "page",
					data: {
						url: "privacy-policy",
					},
					children: [],
				},
				"aa5b1f5c-33de-4c17-8ac4-babe9ec9c2b2": {
					label: "Terms of Use",
					type: "page",
					children: [],
					data: {
						url: "terms-of-use",
					},
				},
			},
		},
	};
};
