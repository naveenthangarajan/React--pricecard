function Card(props) {
	return (
		<div class="col-lg-4">
			<div class="card mb-5 mb-lg-0">
				<div class="card-body">
					<h5 class="card-title text-muted text-uppercase text-center">{props.carddata.plan}</h5>
					<h6 class="card-price text-center">
						${props.carddata.price}
						<span class="period">/{props.carddata.month}</span>
					</h6>
					<hr />
					<ul class="fa-ul">
						{props.carddata.features.map((valuedata) => {
							return (
								<li className={valuedata.muted ? `text-muted` : ``}>
									<span className="fa-li">
										<i className={`${valuedata.accept ? "fa fa-check" : "fa fa-times"}`}></i>
									</span>
									<strong>{valuedata.name1}</strong>
									{valuedata.name}
								</li>
							);
						})}
					</ul>
					<div class="d-grid">
						<button class="btn btn-primary text-uppercase">Button</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
