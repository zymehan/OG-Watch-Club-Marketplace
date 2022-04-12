import React from "react";
import { Layout, Button } from 'antd';
import styled from 'styled-components';

import png_Polygon from '../media/polygon.png';
import png_Bear from '../media/bear.png';
import png_Watch from '../media/watch2.png';
import png_Party from '../media/party.png';
  
const { Footer, Content } = Layout;
const styles = {
	title: {
		fontFamily: "Berlin Sans FB",
		fontSize: "72px",
		color: "#000000",
		textAlign: "center",
		marginTop: "-50px",
		marginBottom: "30px",
	}, 
	step: {
		fontFamily: "Berlin Sans FB",
		fontSize: "40px",
		color: "#000000",
		marginLeft: "100px",
		height: "80px",
	}, 
	png_Polygon: {
		width: "80px",
		display: "inline-block",
		marginLeft: "20px", 
	}, 
	png_Bear: {
		width: "80px",
		display: "inline-block",
		marginLeft: "15px", 
	}, 
	png_Watch: {
		width: "90px",
		display: "inline-block",
		marginLeft: "10px", 
	}, 
	png_Party: {
		width: "120px",
		display: "inline-block",
		marginLeft: "20px",
	}, 
	note: {
		fontFamily: "Berlin Sans FB",
		fontSize: "24px",
		color: "#000000",
		marginLeft: "50px",
		marginTop: "50px", 
	},
	btn_discord: {
		fontFamily: "Berlin Sans FB",
		fontSize: "30px",
		height: "70px",
		paddingLeft: "30px",
		paddingRight: "30px",
		marginLeft: "20px",
		borderRadius: "30px"
	}
}
const ButtonContainer = styled.div`
	display: inline-block;
	.ant-btn-primary {
		background-color: #aa88ff;
		border-color: #aa88ff;
		color: #000;
	}
	.ant-btn-primary:hover {
		background-color: #b99dff;
		border-color: #b99dff;
	}
	.ant-btn-primary:active {
		border-color: #966cff;
		background: #966cff;
	}
`

const AboutOG = (props) => {

	return (
		<>
			<Layout>
				<Content>
					<div style={styles.title}>5 Steps to O.G.</div>
				</Content>
				
				<Layout>
					<Content>
						<div style={styles.step}>
							Step 1: Join our Discord
							<ButtonContainer>
								<Button type="primary" style={styles.btn_discord}>
									<a href="https://discordapp.com/channels/@me/945403316580544583/955496343298801726" target="_blank">
										Grizzly Discord
									</a>
								</Button>
							</ButtonContainer>
						</div>
					</Content>
					<Content>
						<div style={styles.step}>
							Step 2: Switch your Metamask network to Polygon
							<img src={png_Polygon} alt="" style={styles.png_Polygon} />
						</div>
					</Content>
					<Content>
						<div style={styles.step}>
							Step 3: Purchase your favorite Grizzly
							<img src={png_Bear} alt="" style={styles.png_Bear} />
						</div>
					</Content>
					<Content>
						<div style={styles.step}>
							Step 4: Claim your timepiece
							<img src={png_Watch} alt="" style={styles.png_Watch} />
						</div>
					</Content>
					<Content>
						<div style={styles.step}>
							Step 5: See you at the next event!
							<img src={png_Party} alt="" style={styles.png_Party} />
						</div>
					</Content>
				</Layout>
				<Footer>
					<div style={styles.note}>
						*note: If you decide to sell your NFT, you must first ship your watch back to us so we can approve your NFT for resale.
					</div>
				</Footer>
			</Layout>
		</>
	)
}

export default AboutOG;
