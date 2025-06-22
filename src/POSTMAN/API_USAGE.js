[
	{
		info: {
			_postman_id: "e8b4a75f-39d5-4a7e-8dbc-78ed355f0272",
			name: "System Test",
			schema:
				"https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
			_exporter_id: "26861414",
			_collection_link:
				"https://lively-trinity-77951.postman.co/workspace/Team-Workspace~406dde80-bcfc-4995-881a-a5c81a70b8ed/collection/26861414-e8b4a75f-39d5-4a7e-8dbc-78ed355f0272?action=share&source=collection_link&creator=26861414",
		},
		item: [
			// LOGIN REQUEST
			{
				name: "LOGIN",
				request: {
					method: "POST",
					header: [
						{
							key: "Accept",
							value: "application/json, text/plain, */*",
							disabled: true,
						},
						{
							key: "Accept-Language",
							value: "en-GB,en;q=0.9",
							disabled: true,
						},
						{
							key: "Connection",
							value: "keep-alive",
							disabled: true,
						},
						{
							key: "Content-Type",
							value: "application/json",
						},
						{
							key: "Origin",
							value: "http://localhost:3000",
							disabled: true,
						},
						{
							key: "Referer",
							value: "http://localhost:3000/",
							disabled: true,
						},
						{
							key: "Sec-Fetch-Dest",
							value: "empty",
							disabled: true,
						},
						{
							key: "Sec-Fetch-Mode",
							value: "cors",
							disabled: true,
						},
						{
							key: "Sec-Fetch-Site",
							value: "cross-site",
							disabled: true,
						},
						{
							key: "User-Agent",
							value:
								"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
							disabled: true,
						},
						{
							key: "sec-ch-ua",
							value:
								'"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
							disabled: true,
						},
						{
							key: "sec-ch-ua-mobile",
							value: "?0",
							disabled: true,
						},
						{
							key: "sec-ch-ua-platform",
							value: '"macOS"',
							disabled: true,
						},
					],
					body: {
						mode: "raw",
						raw: '{"email":"test@dev.com","password":"#Test@123","isLoggedInHere":0}',
						options: {
							raw: {
								language: "json",
							},
						},
					},
					url: {
						raw: "https://coreapi.hectorai.live/api/auth/login",
						protocol: "https",
						host: ["coreapi", "hectorai", "live"],
						path: ["api", "auth", "login"],
					},
				},
				response: [],
			},

			// METRICS LIST DROPDOWN
			{
				name: "METRICS LIST DROPDOWN",
				request: {
					method: "POST",
					header: [
						{
							key: "X-USER-IDENTITY",
							value:
								"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",
						},
						{
							key: "Authorization",
							value:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGI0ZTNhN2Y1YmU4ZDY2MjVlN2I0MiIsImZ1bGxOYW1lIjoiU3lzdGVtIFRlc3QiLCJlbWFpbCI6InRlc3RAZGV2LmNvbSIsInNlc3Npb25JZCI6InJhbmRvbVN0cmluZyIsImlhdCI6MTcyMDQwNjQzNH0.oo2gUHroTcJ7X-I0-hNvtuG4tq6sGL2yr4Veaf37JPc",
							type: "text",
						},
					],
					body: {
						mode: "raw",
						raw: '{\n    "type": "customizeMetrics"\n}',
						options: {
							raw: {
								language: "json",
							},
						},
					},
					url: {
						raw: "https://coreapi.hectorai.live/api/day-parting/DayPartingFilterList",
						protocol: "https",
						host: ["coreapi", "hectorai", "live"],
						path: ["api", "day-parting", "DayPartingFilterList"],
					},
				},
				response: [],
			},

			// METRICS PERFORMANCE LINE CHART
			{
				name: "METRICS PERFORMANCE LINE CHART",
				request: {
					method: "POST",
					header: [
						{
							key: "Accept",
							value: "application/json, text/plain, */*",
						},
						{
							key: "Accept-Language",
							value: "en-GB,en;q=0.9",
						},
						{
							key: "Authorization",
							value:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGI0ZTNhN2Y1YmU4ZDY2MjVlN2I0MiIsImZ1bGxOYW1lIjoiU3lzdGVtIFRlc3QiLCJlbWFpbCI6InRlc3RAZGV2LmNvbSIsInNlc3Npb25JZCI6InJhbmRvbVN0cmluZyIsImlhdCI6MTcyMDQwNjQzNH0.oo2gUHroTcJ7X-I0-hNvtuG4tq6sGL2yr4Veaf37JPc",
						},
						{
							key: "X-USER-IDENTITY",
							value:
								"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",
						},
					],
					body: {
						mode: "raw",
						raw: '{\n    "startDate": "2024-06-08",\n    "endDate": "2024-07-07",\n    "metrics": [\n        "CPC",\n        "CR_perc",\n        "ROAS"\n    ]\n}',
						options: {
							raw: {
								language: "json",
							},
						},
					},
					url: {
						raw: "https://coreapi.hectorai.live/api/day-parting/DayPartingPerformanceGraphList",
						protocol: "https",
						host: ["coreapi", "hectorai", "live"],
						path: ["api", "day-parting", "DayPartingPerformanceGraphList"],
					},
				},
				response: [],
			},

			// METRICS HEAT MAP TABLE
			{
				name: "METRICS HEAT MAP TABLE",
				request: {
					method: "POST",
					header: [
						{
							key: "Authorization",
							value:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGI0ZTNhN2Y1YmU4ZDY2MjVlN2I0MiIsImZ1bGxOYW1lIjoiU3lzdGVtIFRlc3QiLCJlbWFpbCI6InRlc3RAZGV2LmNvbSIsInNlc3Npb25JZCI6InJhbmRvbVN0cmluZyIsImlhdCI6MTcyMDQwNjQzNH0.oo2gUHroTcJ7X-I0-hNvtuG4tq6sGL2yr4Veaf37JPc",
						},
						{
							key: "X-USER-IDENTITY",
							value:
								"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",
						},
					],
					body: {
						mode: "raw",
						raw: '{\n    "startDate": "2024-06-08",\n    "endDate": "2024-07-07",\n    "metrics": [\n        "CPC",\n        "CR_perc",\n        "ROAS"\n    ]\n}',
						options: {
							raw: {
								language: "json",
							},
						},
					},
					url: {
						raw: "https://coreapi.hectorai.live/api/day-parting/heatmap-list",
						protocol: "https",
						host: ["coreapi", "hectorai", "live"],
						path: ["api", "day-parting", "heatmap-list"],
					},
				},
				response: [],
			},
		],
	},
];
