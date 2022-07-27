import React from 'react';
import styled from "styled-components";
import Ccomponent from './Ccomponent.js';

const HeaderBox = styled.div`
	
	.header{		
		background: #E5E5E5 ;
		padding: 30px;
		.container{
			width: 1090px;
			margin: 0 auto;
			.menu_bar{
				display:flex;
				justify-content: space-between;
    		align-items: center;
				h2{
					font-family: 'Karla';
					font-style: normal;
					font-weight: 800;
					font-size: 20px;
					line-height: 50px;
					color: #1D1F2E;
				}
				ul{
					list-style:none;
				}
				.menu_link{
					display: flex;
					li{
						margin-left: 25px;
						font-family: 'Karla';
						font-style: normal;
						font-weight: 400;
						font-size: 16px;
						line-height: 18px;
						letter-spacing: 2px;
						text-transform: uppercase;
						color: #1D1F2E;
						transition: 0.5s linear all;
						cursor: pointer;
					}
					li:hover{
						color: #A25F4B;
						text-decoration: underline; 
					}
					li:first-child{
						margin-left: 0;
					}
				}
			}
		}
	}
`

const Header = () => {
  return (
    <HeaderBox>
			<section className='header'>
				<div className="container">
					<div className="menu_bar">
						<h2>Privat Bank API</h2>
						<nav>
							<ul className='menu_link'>
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</nav>
						<Ccomponent/>
					</div>
				</div>
			</section>
		</HeaderBox>
  );
}

export default Header;