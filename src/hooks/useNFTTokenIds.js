import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenIds = (addr) => {
  const { token } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const { resolveLink } = useIPFS();
  const [NFTTokenIds, setNFTTokenIds] = useState([]);
  const [totalNFTs, setTotalNFTs] = useState();
  const [fetchSuccess, setFetchSuccess] = useState(true);
  const {
    fetch: getNFTTokenIds,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(token.getAllTokenIds, {
    chain: chainId,
    address: addr,
    // limit: 20,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (data?.result) {
        const NFTs = data.result;
        setTotalNFTs(data.total);
        setFetchSuccess(true);
        for (let NFT of NFTs) {
          if (NFT?.metadata) {
            NFT.metadata = JSON.parse(NFT.metadata);
            NFT.image = resolveLink(NFT.metadata?.image);
          } else if (NFT?.token_uri) {
            try {
              await fetch(NFT.token_uri)
                .then((response) => response.json())
                .then((data) => {
                  NFT.image = resolveLink(data.image);
                });
            } catch (error) {
              setFetchSuccess(false);
                
  /*          !!Temporary work around to avoid CORS issues when retrieving NFT images!!
              Create a proxy server as per https://dev.to/terieyenike/how-to-create-a-proxy-server-on-heroku-5b5c
              Replace <your url here> with your proxy server_url below
              Remove comments :)

                try {
                  await fetch(`<your url here>/${NFT.token_uri}`)
                  .then(response => response.json())
                  .then(data => {
                    NFT.image = resolveLink(data.image);
                  });
                } catch (error) {
                  setFetchSuccess(false);
                }

  */
            }
          }
        }
        NFTs.sort((a, b) => {
          let token_id_a = parseInt(a.token_id);
          let token_id_b = parseInt(b.token_id);
          return token_id_a - token_id_b;
        })
        setNFTTokenIds(NFTs);
      }
    }
    fetchData();
  }, [data]);

  return {
    getNFTTokenIds,
    NFTTokenIds,
    totalNFTs,
    fetchSuccess,
    error,
    isLoading,
  };
};
