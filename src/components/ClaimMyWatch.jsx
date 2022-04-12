import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Button, Modal, Input } from 'antd';
import styled from 'styled-components';
import { useMoralis } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useNFTBalance } from "hooks/useNFTBalance";

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
	const { Moralis } = useMoralis();
  const { walletAddress } = useMoralisDapp();
  const { NFTBalanceLen } = useNFTBalance();
	const [visible, setVisibility] = useState(false);
	const [postAddy, setPostAddy] = useState("");
	const PostOfficeBox = Moralis.Object.extend("PostOfficeBoxes");

	const saveClientPostOffice = () => {
		if (NFTBalanceLen === 0) {
			Modal.error({
				title: "Error!",
				content: `You haven't any NFT. You can buy OG NFT on marketplace.`,
			});
			return;
		}

		if (postAddy === "") {
			Modal.error({
				title: "Error!",
				content: `Please input your post office box`,
			});
			return;
		}
		
		const item = new PostOfficeBox();

		item.set("ClientWallet", walletAddress);
		item.set("PostOfficeBox", postAddy);
		item.save();

		Modal.info({
			title: "Success!",
			content: `Your post office box is saved successfully`,
		});
		setVisibility(false);
	}

	return (
		<>
			<Layout>
				<Content key={"title"}>
					<div style={styles.title}>
						We hope you love your watch (and treat it with care)
						<img src={png_watch_bear} alt="" style={styles.png_watch_bear} />
					</div>
				</Content>
				<Layout>
					<Content key={"description"}>
						<div style={styles.desc}>How it works:</div>
					</Content>
					<Content key={"content"}>
						<div style={styles.step} key={"1"}>
							1. After verifying your NFT on <NavLink to="/nftBalance" onClick={ () => props.setCurrentPage("nft") }>Your Collection</NavLink> page, simply enter your shipping information and we will ship your watch to you for free!
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
							<Button type="primary" style={styles.btn_claim} onClick={() => setVisibility(true)}>
								Claim my WATCH
							</Button>
						</ButtonContainer>
					</div>
				</Footer>
			</Layout>

			<Modal
				title={`Input your post office address for shiping your watch`}
				visible={visible}
				onCancel={() => setVisibility(false)}
				onOk={() => saveClientPostOffice()}
				okText="List"
				footer={[
					<Button onClick={() => setVisibility(false)}>
						Cancel
					</Button>,
					<Button onClick={() => saveClientPostOffice()} type="primary">
						Agree
					</Button>
				]}
			>
				<p>After receive your OG watch once, you cannot resale your NFT on this marketplace.</p>
				<p style={{ marginBottom: "15px"}}>If you want to resale your NFT on our marketplace, you should simply ship the watch back to us.</p>
				<Input autoFocus placeholder="Input your post office address" onChange={(e) => setPostAddy(e.target.value)} />
			</Modal>
		</>
	)
}

export default ClaimMyWatch;
