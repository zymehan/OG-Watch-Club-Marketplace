import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Button } from 'antd';
import styled from 'styled-components';

import png_watch_bear from '../media/watch_bear.png';

const { Footer, Content } = Layout;
const styles = {
	title: {
		fontFamily: "Berlin Sans FB",
		fontSize: "56px",
		color: "#000000",
		textAlign: "center",
		marginTop: "-50px",
		marginBottom: "10px",
		letterSpacing: "-1px"
	}, 
	png_watch_bear: {
		height: "100px",
		display: "inline-block",
		marginLeft: "5px", 
	}, 
	desc: {
		fontFamily: "Berlin Sans FB",
		fontSize: "30px",
		color: "#000000",
		marginLeft: "100px",
		marginBottom: "20px",
		textDecoration: "underline"
	},
	step: {
		fontFamily: "Berlin Sans FB",
		fontSize: "30px",
		color: "#000000",
		marginLeft: "100px",
		marginRight: "100px",
		marginBottom: "30px",
		lineHeight: "normal"
	}, 
	note: {
		fontFamily: "Berlin Sans FB",
		fontSize: "18px",
		color: "#000000",
	}, 
	footer: {
		textAlign: "center"
	},
	btn_claim: {
		fontFamily: "Berlin Sans FB",
		fontSize: "44px",
		height: "80px",
		paddingLeft: "30px",
		paddingRight: "30px",
		borderRadius: "15px",
		letterSpacing: "-1px"
	}
}
const ButtonContainer = styled.div`
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

const ClaimMyWatch = (props) => {

	return (
		<>
			<Layout>
				<Content>
					<div style={styles.title}>
						We hope you love your watch (and treat it with care)
						<img src={png_watch_bear} alt="" style={styles.png_watch_bear} />
					</div>
				</Content>
				<Layout>
					<Content>
						<div style={styles.desc}>How it works:</div>
					</Content>
					<Content>
						<div style={styles.step}>
							1. After verifying your NFT on <NavLink to="/nftBalance">Your Collection</NavLink> page, simply enter your shipping information and we will ship your watch to you for free!
						</div>
						<div style={styles.step}>
							2. Your NFT will then be temporarily ineligible for resale. During this time, you can wear your watch around and show off how cool it is. This will increase the popularity of OGWC, and ultimately lead to more DAO treasury rewards for you.
						</div>
						<div style={styles.step}>
							3. If you decide to resell your NFT, simply ship the watch back to us at [*address here*]. If your watch is operational and in good condition, we will then approve your NFT for resale.*
							<div style={styles.note}>
								*Note: If your watch is returned with damages, you may be charged a repair fee. However, this fee will be significantly less than the price of your NFT.
							</div>
						</div>
						<div style={styles.step}>
							4. Our exchange has a 10% royalty fee for each resale. Half of the royalty is used to cover shipping costs & watch maintenance, and half goes to the DAO Treasury to be spent on rewards for NFT holders. Welcome to the Club!
						</div>
					</Content>
				</Layout>
				<Footer>
					<div style={styles.footer}>
						<ButtonContainer>
							<Button type="primary" style={styles.btn_claim} className="btn-">
								Claim my WATCH
							</Button>
						</ButtonContainer>
					</div>
				</Footer>
			</Layout>
		</>
	)
}

export default ClaimMyWatch;
