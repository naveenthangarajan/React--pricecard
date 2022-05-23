import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
	let datavalue = [
		{
			plan: "free",
			price: 0,
			month: "month",
			features: [
				{
					name: "Single User",
					accept: true,
				},
				{
					name: "5GB Storage",
					accept: true,
				},
				{
					name: "Unlimited Public Projects",
					accept: true,
				},
				{
					name: "Community Access",
					accept: true,
				},
				{
					name: "Unlimited Private Projects",
					muted: true,
				},
				{
					name: "Dedicated Phone Support",
					muted: true,
				},
				{
					name: "Free Subdomain",
					muted: true,
				},
				{
					name: "Monthly Status Reports",
					muted: true,
				},
			],
		},
		{
			plan: "plus",
			price: 9,
			month: "month",
			features: [
				{
					name1: "5 Users",
					accept: true,
				},
				{
					name: "50GB Storage",
					accept: true,
				},
				{
					name: "Unlimited Public Projects",
					accept: true,
				},
				{
					name: "Community Access",
					accept: true,
				},
				{
					name: "Unlimited Private Projects",
					accept: true,
				},
				{
					name: "Dedicated Phone Support",
					accept: true,
				},
				{
					name: "Free Subdomain",
					accept: true,
				},
				{
					name: "Monthly Status Reports",
					muted: true,
				},
			],
		},
		{
			plan: "pro",
			price: 49,
			month: "month",
			features: [
				{
					name1: "Unlimited Users",
					accept: true,
				},
				{
					name: "150GB Storage",
					accept: true,
				},
				{
					name: "Unlimited Public Projects",
					accept: true,
				},
				{
					name: "Community Access",
					accept: true,
				},
				{
					name: "Unlimited Private Projects",
					accept: true,
				},
				{
					name: "Dedicated Phone Support",
					accept: true,
				},
				{
					name1: "Unlimited",
					name: " Free Subdomain",

					accept: true,
				},
				{
					name: "Monthly Status Reports",
					accept: true,
				},
			],
		},
	];
	return (
		<section class="pricing py-5">
			<div class="container">
				<div class="row">
					{datavalue.map((result) => {
						return <Card carddata={result}></Card>;
					})}
				</div>
			</div>
		</section>
	);
}

export default App;
