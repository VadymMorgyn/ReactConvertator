import React, {Component} from "react";
import styled from "styled-components";


export default class Converter extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		}
		this.moneyTranslate = this.moneyTranslate.bind(this);
	}

	
	moneyTranslate(){
			let input = document.getElementById("oneNumber");
			let inputResult = document.getElementById("twoNumber");
			let moneyALL = document.getElementById("moneyALL");

			moneyALL.addEventListener("click", function(){
				input.value = 0
				inputResult.value = 0
			})
			input.addEventListener("keyup", function() {
			inputResult.value = (moneyALL.value * input.value).toFixed(2);
			
			})
			inputResult.addEventListener("keyup", function() {
			input.value = (inputResult.value / moneyALL.value).toFixed(2);
			})
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
		
		
		
		
		if (error) {
			return <p>Error {error.message}</p>
		} else if (!isLoaded){
			return <p>Loading</p>
		} else {
			
			
			
		
			return (  
				<StyleConverter>
					<div className="container">
						<h2>Конвертор</h2>

					

						<div className="convertor">
							<div className="box">
									<label for="money">Виберіть валюту</label>
								<select name="money" id="moneyALL">
									{items.map(item => (
									<option value={item.sale}>{item.ccy}</option>
									))}
								</select>
								<input onChange={this.moneyTranslate}   id="oneNumber" type="text" placeholder="Введіть суму" />
							</div>
															

							<div className="box">
									<label for="moneyUAH">Валюта</label>
									<select name="moneyUAH" id="moneyUAH">							
										<option value="">UAH</option>			
									</select>
									<input onChange={this.moneyTranslate} id="twoNumber" type="text" placeholder="Введіть суму" />
							</div>
						</div>
						<div className="text">
						<h4>Калькулятор валют онлайн</h4>
						<p>У житті споживачів бувають ситуації, коли необхідно обміняти національні гроші на іноземну валюту. Швидке рішення - скористатися онлайн-калькулятором. За свідченням статистики, 64,5% населення світу регулярно підключається до глобальної мережі.</p>

						<p><b>Конвертер валют</b> - опція, яка допомагає миттєво підрахувати суму обміну в доларах, євро, злотих, рублях та інших засобах платежу. Заможні люди користуються функціоналом, коли оцінюють вартість своїх заощаджень в іноземних грошових знаках.</p>

						<p>Покупці легко орієнтуються в асортименті зарубіжного магазину, якщо уявляють вартість товару. Організації вдаються до валютного калькулятору, коли змушені перераховувати ціну продукції через подорожчання імпортних запчастин. Компанії цікавляться грошовим курсом, якщо виникає потреба відправити співробітника за кордон.</p>

						<p>
							<h4>Як працює конвертер валюти?</h4>
						В поле «У мене є» вводять суму грошей, яку потрібно конвертувати в іншу валюту. У випадних списках перераховані різні засоби платежу. Щоб людина не помилилася, калькулятор валют містить інформацію:
						міжнародне позначення;
						повна назва валюти.
						Приклад: USD Долар США.
						</p>



						<h4>Конвертер дозволяє перевести як національні, так і криптовалюти.</h4>

						<p>У конвертера є стрілки, які показують напрямок обміну. Після введення суми, вказана кількість грошей автоматично конвертується у обрану вами валюту.</p>

						<p>Найпопулярніші у жителів України операції пов'язані з гривнями, доларами і євро. Після лідерів йдуть менш затребувані засоби обміну. Це російський рубль <b>(RUB)</b>, польський злотий <b>(PLN)</b>, англійський фунт <b>(GBP)</b>. Всі валюти розташовані в списку калькулятора в алфавітному порядку. Також, для простоти використання, доступний пошук серед грошових одиниць різних країн. <hr/> <b>Дана інформаційна послуга надається безкоштовно.</b></p>

						
					</div>
					</div>
					
				</StyleConverter>
				
			)
				
			
		}
	}
}
const StyleConverter = styled.div`
background: #1D1F2E;
padding: 100px 0;
 

	.container{
		width: 1090px;
		margin: 0 auto;
.text{
			h4{
				font-family: 'Karla';
			font-style: normal;
			font-weight: 400;
			font-size: 36px;
			line-height: 50px;
			text-align: center;
			color: #FFFFFF;
			margin: 40px 0;
			}
			p{
				font-family: 'Karla';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 28px;
				color: rgb(212, 212, 212);
			}

			}
		h2{
			font-family: 'Karla';
			font-style: normal;
			font-weight: 400;
			font-size: 36px;
			line-height: 50px;
			text-align: center;
			color: #FFFFFF;
			margin: 40px 0;
		}
		.convertor{
			display: flex;
			justify-content: space-around;
    	align-items: center;
			.box{
				
				label{
						font-family: 'Karla';
						font-style: normal;
						font-weight: 400;
						font-size: 20px;
						line-height: 18px;
						text-align: center;
						letter-spacing: 2px;
						text-transform: uppercase;
						color: #FFFFFF;
						margin-right: 15px;
					}
					select{
						padding: 5px 5px;
						background: #FFFFFF;
						font-family: 'Karla';
						font-style: normal;
						font-weight: 400;
						font-size: 16px;
						line-height: 18px;
						letter-spacing: 2px;
						text-transform: uppercase;
						color: #1D1F2E;
						transition: 0.5s linear all;
						-webkit-border-top-left-radius: 10px;
						-webkit-border-bottom-left-radius: 10px;
						-moz-border-radius-topleft: 10px;
						-moz-border-radius-bottomleft: 10px;
						border-top-left-radius: 10px;
						border-bottom-left-radius: 10px;
						cursor: pointer;
						transition: 0.5s linear all;
						option{
							padding: 5px 5px;
							background: #FFFFFF;
							font-family: 'Karla';
							font-style: normal;
							font-weight: 400;
							font-size: 20px;
							line-height: 18px;
							letter-spacing: 2px;
							text-transform: uppercase;
							color: #1D1F2E;
							cursor: pointer;
							transition: 0.5s linear all;
						}
					}
					input{
						font-family: 'Karla';
						font-style: normal;
						font-weight: 400;
						font-size: 20px;
						line-height: 18px;
						text-align: center;
						letter-spacing: 2px;
						color:  #FFFFFF;
						background: transparent;
						border-bottom: solid 2px #FFFFFF;
						padding: 3px 30px;
						padding-top: 4px;
						-webkit-border-top-right-radius: 10px;
						-moz-border-radius-topright: 10px;
						border-top-right-radius: 10px;
						transition: 0.5s linear all; 
					}
					input:hover{
						background: rgba(128, 128, 128, 0.377);
					}
					input:focus{
						background:rgba(128, 128, 128, 0.377);
					}
			}
		}
	}
`