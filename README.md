# SIGN

## Getting started

1. Create `.env` with the following content.

```
ETH_URL=<ETH RPC Endpoint, e.g. Infura or Pocket Network>
PRIVATE_KEY=<Your Private Key>
```

2. Deploy your Smart Contract

```
$ npx hardhat run --network goerli scripts/deploy.ts
Stationary Identity Contract (SIC) address:  0xb466CBCeAE05be58Dc8d3B499b17a4c30BC1BA9e
```

3. Mint your Token

```
npx hardhat mint --network goerli --contract 0xb466CBCeAE05be58Dc8d3B499b17a4c30BC1BA9e --token-signature 8743b52063cd84097a --token-metadata 'content'
```

4. Transfer your Token

```
npx hardhat transfer --network goerli --contract 0xb466CBCeAE05be58Dc8d3B499b17a4c30BC1BA9e --token-signature 8743b52063cd84097a --dest-contract 0x6A96d08d016B84199679dAeabbB63Fed9F514422
```

5. Check your Token value

```
npx hardhat content --network goerli --contract 0x6A96d08d016B84199679dAeabbB63Fed9F514422 --token-signature 8743b52063cd84097a
```



Deployments:

- Ethereum
RPC provider: https://eth-rpc.gateway.pokt.network
Deployer: https://etherscan.io/address/0x0d9d3729a5191b298137e744c3e4add3a18e2bed
Contract: https://etherscan.io/address/0x45fa7877cae0f06568665223efe5b53a2b917909

- Polygon
Explanation: https://twitter.com/ATomasevicius/status/1578989055920201728
RPC provider: https://poly-rpc.gateway.pokt.network
Deployer: https://polygonscan.com/address/0x0d9d3729a5191b298137e744c3e4add3a18e2bed
Contract: https://polygonscan.com/address/0xa5f90284a54c9857be4d0c40fe4be23457c1ff9f

- Optimism
RPC provider: https://optimism-rpc.gateway.pokt.network
Deployer: https://optimistic.etherscan.io/address/0x0d9d3729a5191b298137e744c3e4add3a18e2bed
Contract: https://optimistic.etherscan.io/address/0xc039C13470be809beD1C2CD42339Ccb22e0970f2

- Scroll
Deployer: https://l2scan.scroll.io/address/0x0D9d3729a5191b298137e744c3e4add3A18e2BeD
Contract: https://l2scan.scroll.io/address/0xc039C13470be809beD1C2CD42339Ccb22e0970f2

- Klaytn
RPC provider: https://klaytn-rpc.gateway.pokt.network
Deployer: https://scope.klaytn.com/account/0x0D9d3729a5191b298137e744c3e4add3A18e2BeD?tabId=internalTx
Contract: https://scope.klaytn.com/account/0xc039c13470be809bed1c2cd42339ccb22e0970f2?tabId=internalTx

- Gnosis Chain
RPC provider: https://gnosischain-rpc.gateway.pokt.network
Deployer: https://blockscout.com/xdai/mainnet/address/0x0D9d3729a5191b298137e744c3e4add3A18e2BeD
Contract: https://blockscout.com/xdai/mainnet/address/0xc039C13470be809beD1C2CD42339Ccb22e0970f2