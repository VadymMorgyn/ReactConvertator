import React, {Component} from "react";
import "../styleNew.css";
import styled from "styled-components";

export default class Ccomponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		}
	}

	componentDidMount(){
		fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result
				})
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}
	
	render (){
		const {error, isLoaded, items} = this.state;
		items.splice(2, 1);
		if (error) {
			return <p>Error {error.message}</p>
		} else if (!isLoaded){
			return <p>Loading</p>
		} else {
			return  (
				<StyleMoney>
					<ul>
					{items.map(item => (
						<li key={item.name}>
							<h3>{item.ccy} buy:</h3> <p>{item.buy}</p> <h3>sale:</h3> <p>{item.sale}</p>
						</li>
					))}
					
				</ul>
				</StyleMoney>
			)
				
			
		}
	}
}

const StyleMoney = styled.div`
ul{
	display: flex;
	li{
		display: flex;
		margin-right: 20px;
		font-family: 'Karla';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
		color: #1D1F2E;
		p{
			font-family: 'Karla';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;
			text-align: center;
			color: #A25F4B;;
			margin-left: 10px;
			margin-right: 15px;
		}
	}
	li:last-child{
		margin-right: 0px;
	}
}
`