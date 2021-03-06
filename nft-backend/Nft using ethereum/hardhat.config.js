/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
//For Ethereum
// const { API_URL, PRIVATE_KEY } = process.env;
// module.exports = {
//    solidity: "0.8.0",
//    defaultNetwork: "ropsten",
//    networks: {
//       hardhat: {},
//       ropsten: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`]
//       }
//    },
// }

//For Polygon
const {PRIVATE_KEY} = process.env;
module.exports = {
   defaultNetwork:"matic",
   networks:{
      hardhat:{

      },
      matic:{
         url: "https://rpc-mumbai.maticvigil.com",
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: 8000000000
      }
   },
   solidity:{
      version:"0.8.0",
      settings:{
         optimizer:{
            enabled:true,
            runs:200
         }
      }
   },
}