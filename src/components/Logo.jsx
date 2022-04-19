import React from 'react';

import logo from '../media/OG.png';

const styles = {
	logo: {
		width: "100%",
		maxWidth: "62px",
		height: "62px",
		marginLeft: "20px"
	}
};

const Logo = () => {
	return (
		<img className="logo" src={logo} style={styles.logo} alt="" />
	)
}

export default Logo;
