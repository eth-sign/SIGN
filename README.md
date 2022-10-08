# SIGN

## Getting started

1. Create `.env` with the following content.

```
ETH_URL=<ETH RPC Endpoint, e.g. Infura or Alchemy>
PRIVATE_KEY=<Your Private Key>
```

2. Deploy your Smart Contract

```
$ npx hardhat run --network goerli scripts/deploy.ts
TokenHolder address:  0xb466CBCeAE05be58Dc8d3B499b17a4c30BC1BA9e
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

