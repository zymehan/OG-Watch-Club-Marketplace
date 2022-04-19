import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
// import Logo from "components/Logo";
import SearchCollections from "components/SearchCollections";
import NativeBalance from "components/NativeBalance";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import AboutOG from "components/AboutOG";
import ClaimMyWatch from "components/ClaimMyWatch";

import "antd/dist/antd.css";
import "./style.css";

import logo from './media/OG.png';

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  logo: {
    width: "100%",
    maxWidth: "62px",
    height: "62px",
    marginLeft: "20px"
  }
};

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const [inputValue, setInputValue] = useState("explore");
  const [currentPage, setCurrentPage] = useState("nftMarket");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          {/* <SearchCollections setInputValue={setInputValue}/> */}
          <Menu theme="light"
                mode="horizontal"
                style={{
                  display: "flex",
                  fontSize: "17px",
                  fontWeight: "500",
                  marginLeft: "50px",
                  width: "100%",
                }}
                selectedKeys={[currentPage]}
                defaultSelectedKeys={[currentPage]}
          >
            <Menu.Item key="whatIsOg">
              <NavLink to="/WhatIsOG" onClick={ () => setCurrentPage("whatIsOg") }>❓ What is <span className="font-link1">OG</span>?</NavLink>
            </Menu.Item>
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace" onClick={ () => setCurrentPage("nftMarket") }>🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance" onClick={ () => setCurrentPage("nft") }>🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions" onClick={ () => setCurrentPage("transactions") }>📑 Your Transactions</NavLink>
            </Menu.Item>
            <Menu.Item key="claim_watch">
              <NavLink to="/Claim_Watch" onClick={ () => setCurrentPage("claim_watch") }>⌚ Claim My Watch</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/WhatIsOG">
              <AboutOG />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            <Route path="/Claim_Watch">
              <ClaimMyWatch setCurrentPage={setCurrentPage} />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 1500.000000 1500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2297 11550 c-137 -17 -269 -70 -364 -146 -53 -43 -127 -155 -154
-231 -51 -146 -49 -41 -49 -2441 0 -2160 1 -2240 19 -2329 58 -281 241 -444
541 -483 60 -8 667 -10 2090 -8 l2005 4 74 21 c123 36 199 79 277 157 82 82
122 156 156 292 l23 89 0 2255 c0 2541 7 2324 -77 2500 -55 115 -133 193 -248
248 -175 83 24 76 -2225 78 -1100 1 -2031 -2 -2068 -6z m2722 -541 c79 -14
122 -50 143 -120 11 -36 13 -419 13 -2154 0 -1971 -1 -2114 -17 -2166 -38
-123 -31 -121 -743 -126 -817 -6 -875 0 -912 95 -17 45 -18 151 -18 2192 0
2059 1 2147 18 2193 21 52 49 72 120 87 68 13 1319 12 1396 -1z"/>
<path d="M8721 11549 c-228 -29 -404 -142 -485 -311 -46 -97 -66 -179 -77
-318 -12 -158 -11 -4233 1 -4380 18 -213 68 -340 179 -451 74 -73 151 -116
278 -152 l78 -22 1995 -3 c2116 -3 2104 -4 2243 43 233 79 360 254 396 545 17
131 15 2310 -1 2310 -7 0 -600 0 -1318 0 -718 0 -1315 0 -1327 0 l-23 0 0
-265 0 -265 463 -2 462 -3 3 -775 c3 -795 -2 -915 -35 -974 -11 -18 -39 -41
-68 -56 l-50 -25 -675 0 c-713 0 -752 2 -799 46 -54 50 -51 -54 -49 2264 3
2423 -5 2196 85 2238 l48 22 695 0 c749 0 742 0 792 -53 50 -53 52 -66 55
-684 l4 -578 875 0 874 0 0 593 c0 368 -4 626 -11 682 -43 355 -236 541 -596
575 -131 12 -3916 12 -4012 -1z"/>
<path d="M5035 5375 c-125 -34 -251 -113 -375 -235 -91 -90 -170 -193 -283
-366 -113 -174 -163 -266 -384 -704 -205 -405 -300 -574 -357 -632 -41 -42
-48 -45 -66 -23 -39 47 34 254 275 779 171 374 221 504 231 603 5 48 3 62 -13
82 -27 34 -81 31 -133 -6 -99 -74 -170 -194 -489 -830 -251 -501 -301 -592
-348 -627 -38 -28 -49 -9 -34 61 21 91 73 225 218 552 220 496 288 683 300
826 19 224 -125 314 -343 215 -98 -44 -215 -165 -276 -285 -59 -114 -86 -204
-67 -216 27 -17 35 -8 73 75 113 252 245 388 390 403 67 7 92 -6 107 -57 26
-86 -32 -264 -228 -705 -216 -484 -271 -636 -280 -776 -7 -103 8 -141 61 -159
99 -32 196 89 393 490 347 709 437 873 525 956 52 49 94 60 83 22 -4 -13 -38
-81 -77 -153 -179 -335 -364 -736 -427 -924 -82 -248 -75 -358 24 -391 111
-37 211 93 490 635 367 712 572 1020 801 1205 176 141 362 179 464 94 95 -81
99 -241 9 -414 -78 -150 -203 -239 -341 -243 -65 -2 -80 1 -137 31 -48 26 -66
31 -71 21 -13 -20 16 -54 70 -83 62 -34 162 -44 241 -26 157 37 324 169 395
315 37 75 39 84 39 176 0 90 -2 100 -35 165 -40 77 -81 112 -172 144 -67 23
-177 26 -253 5z"/>
<path d="M7343 5171 c-192 -139 -537 -708 -768 -1266 -36 -88 -82 -185 -102
-215 -57 -87 -208 -231 -278 -264 -66 -32 -168 -46 -202 -28 -87 47 -62 283
54 517 78 157 176 267 251 281 74 14 91 -38 43 -135 -39 -76 -40 -93 -4 -89
35 4 67 50 93 136 32 101 5 164 -82 191 -98 32 -232 -44 -344 -193 -52 -69
-112 -184 -139 -265 -41 -127 -243 -374 -349 -426 -53 -27 -124 -33 -144 -13
-53 53 59 371 303 857 l65 131 48 0 c55 0 75 10 70 36 -2 14 -13 20 -41 22
-47 4 -50 -6 50 176 l75 138 -20 21 c-24 24 -76 27 -97 6 -10 -11 -126 -211
-184 -319 -5 -10 -29 -17 -72 -20 -57 -4 -64 -7 -67 -27 -2 -13 0 -24 5 -24 4
-1 26 -3 48 -4 22 -2 41 -4 42 -4 1 -1 -40 -85 -91 -188 -52 -104 -113 -233
-136 -288 -23 -55 -51 -119 -61 -143 -28 -66 -118 -190 -189 -263 -75 -75
-154 -119 -216 -119 -112 0 -92 103 110 559 63 142 118 270 121 284 8 31 -8
63 -36 72 -33 11 -74 -13 -105 -62 -16 -25 -32 -50 -35 -55 -4 -6 -26 9 -50
32 -60 58 -93 73 -161 72 -110 -2 -237 -92 -350 -248 -163 -229 -225 -469
-156 -616 29 -62 64 -88 120 -88 75 1 191 84 292 211 33 41 63 77 66 82 3 4 6
-37 6 -90 -1 -118 15 -158 76 -193 33 -19 50 -22 97 -17 106 9 200 72 310 204
l60 73 -6 -63 c-7 -76 9 -138 46 -179 22 -24 37 -32 78 -35 113 -11 240 69
363 232 40 52 74 95 75 95 1 0 0 -11 -2 -24 -8 -40 16 -168 40 -215 34 -68 90
-94 189 -89 108 6 203 54 309 155 l77 74 -30 -93 c-35 -108 -30 -138 22 -138
51 0 66 15 100 102 160 406 413 768 537 768 47 0 44 -16 -34 -199 -120 -282
-153 -391 -154 -506 -1 -103 37 -151 129 -162 140 -16 287 101 473 379 76 113
89 141 70 152 -14 9 -36 -16 -127 -148 -151 -220 -273 -326 -376 -326 -42 0
-58 19 -58 69 0 47 55 209 135 396 40 94 78 187 85 208 27 85 8 191 -39 217
-75 40 -205 -23 -312 -152 -27 -33 -49 -55 -49 -51 0 4 24 55 53 113 51 104
53 105 117 140 97 53 149 91 239 176 86 80 197 221 250 315 90 161 99 323 20
364 -46 24 -101 19 -146 -14z m127 -111 c8 -15 8 -35 0 -74 -25 -121 -114
-252 -289 -427 -83 -82 -221 -191 -221 -174 0 13 104 211 161 306 103 173 167
264 230 328 64 66 99 78 119 41z m-2587 -909 l41 -39 -73 -154 c-96 -198 -164
-301 -278 -419 -114 -118 -195 -163 -231 -127 -22 22 -14 125 19 222 72 216
236 453 364 527 70 41 106 38 158 -10z"/>
<path d="M9385 5176 c-33 -8 -91 -27 -130 -42 -221 -89 -487 -352 -627 -621
-24 -46 -49 -83 -56 -83 -21 0 -102 81 -124 124 -11 22 -23 69 -26 103 -4 56
-1 70 27 128 33 67 33 85 1 85 -48 0 -96 -123 -88 -225 8 -96 77 -210 152
-250 20 -11 36 -23 36 -28 0 -5 -20 -59 -44 -120 -120 -305 -134 -587 -37
-747 46 -78 133 -139 228 -160 73 -17 219 -14 292 5 136 35 280 126 391 246
l55 59 0 -108 c0 -101 2 -111 27 -149 32 -48 79 -68 143 -60 88 9 189 81 295
208 l47 56 -5 -77 c-5 -95 9 -145 48 -165 75 -39 175 7 305 140 l90 91 -3 -65
c-4 -83 25 -147 78 -174 47 -24 130 -19 194 13 61 31 164 125 226 207 l48 63
4 -92 c4 -110 26 -163 79 -191 45 -24 119 -18 185 13 46 22 183 148 232 214
21 27 23 28 54 15 19 -8 66 -14 108 -14 87 1 147 26 215 93 52 50 135 160 135
178 0 33 -40 11 -80 -43 -67 -91 -101 -124 -155 -149 -59 -28 -141 -32 -185
-9 l-29 15 40 63 c116 178 162 362 113 446 -18 31 -84 71 -117 71 -31 0 -91
-30 -125 -63 -123 -117 -136 -370 -27 -513 14 -18 25 -37 25 -43 0 -22 -176
-190 -220 -210 -49 -22 -125 -28 -136 -10 -14 22 -4 109 22 190 39 127 160
418 234 564 l65 130 79 42 c309 166 599 557 562 758 -4 21 -20 50 -36 67 -24
23 -37 28 -78 28 -43 0 -58 -6 -108 -44 -135 -100 -338 -393 -559 -803 -83
-155 -213 -430 -238 -506 -39 -117 -251 -369 -349 -415 -57 -26 -123 -29 -132
-6 -27 69 12 187 203 612 110 248 104 229 81 252 -27 27 -80 26 -109 -1 -13
-12 -76 -131 -142 -264 -127 -258 -170 -325 -303 -462 -83 -88 -157 -143 -189
-143 -18 0 -19 5 -14 48 8 71 52 175 214 504 159 323 158 320 87 334 -23 4
-42 1 -58 -10 -42 -27 -152 -223 -236 -421 -50 -118 -135 -240 -240 -346 -83
-84 -145 -119 -208 -119 -53 0 -65 24 -52 102 25 155 287 767 342 801 13 8 58
33 100 57 252 141 527 499 528 688 0 144 -113 187 -237 91 -110 -85 -280 -321
-462 -639 -87 -151 -269 -518 -305 -615 -42 -112 -63 -148 -131 -223 -277
-303 -678 -364 -786 -119 -63 144 -18 440 104 687 l42 85 115 6 c282 16 530
121 717 304 75 74 99 105 129 168 78 164 50 318 -69 379 -53 27 -159 33 -242
14z m231 -102 c37 -25 54 -66 54 -128 0 -112 -75 -242 -200 -343 -79 -65 -255
-153 -370 -186 -81 -24 -229 -47 -298 -47 l-32 0 21 43 c40 79 129 218 188
295 191 251 376 379 549 381 42 1 71 -4 88 -15z m814 -19 c20 -24 5 -112 -34
-190 -40 -81 -163 -232 -268 -330 -73 -68 -204 -162 -213 -153 -7 7 118 228
214 377 96 149 180 254 230 288 40 27 54 28 71 8z m1498 3 c31 -31 -4 -164
-67 -257 -59 -86 -159 -199 -242 -272 -76 -69 -185 -149 -201 -149 -16 0 113
228 244 430 94 146 201 260 244 260 5 0 15 -5 22 -12z m-344 -913 c26 -26 31
-84 13 -155 -17 -65 -91 -223 -126 -269 l-18 -23 -22 35 c-12 19 -26 61 -32
93 -27 145 50 334 136 334 19 0 40 -7 49 -15z"/>
</g>
</svg>

  </div>
);

export default App;
