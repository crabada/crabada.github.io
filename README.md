## Crabada legacy contract addresses
- NFT contract: [0xCB7569a6Fe3843c32512d4F3AB35eAE65bd1D50](https://snowtrace.io/address/0xCB7569a6Fe3843c32512d4F3AB35eAE65bd1D50c)

## Crabada NFT traits
All traits of a crab are determined by its DNA (Alleles/Genes). This document explains how can we get all traits of a crab from its DNA.

- How to generate [image](./image.md)
- How to get [Breeding type](./breedingtype.md) and [Stats](./stats.md)

**Example page:** [https://crabada.github.io/](https://crabada.github.io/)

### DNA structure
- DNA is a 32bytes number
- Split the DNA to 32 parts, the below table is meaning of all parts:

| index | used for           | explain    | range | e.g |
|------|--------------------|------------|-------|-----|
| 31   | type id            |1 is normal, 2 is genesis| 1-255 | 01  |
| 30   | subclass (breeding type) id       |            | 1-255 | 01  |
| 29   | legend shell id   |            | 1-8   | 00  |
| 28   | legend horn id    |            | 1-8   | 00  |
| 27   | legend body id    |            | 1-8   | 00  |
| 26   | legend mouth id   |            | 1-8   | 00  |
| 25   | legend eyes id    |            | 1-8   | 00  |
| 24   | legend pincer id  |            | 1-8   | 00  |
| 23   | reserve1           | for future | 1-255 | 00  |
| 22   | reserve2           | for future | 1-255 | 00  |
| 21   | reserve3           | for future | 1-255 | 00  |
| 20   | reserve4           | for future | 1-255 | 00  |
| 19   | reserve5           | for future | 1-255 | 00  |
| 18   | reserve6           | for future | 1-255 | 00  |
| 17   | shell dominant  id |            | 1-255 | 08  |
| 16   | shell R1  id       |            | 1-255 | 08  |
| 15   | shell R2 id        |            | 1-255 | 01  |
| 14   | horn dominant id   |            | 1-255 | 03  |
| 13   | horn R1 id         |            | 1-255 | 03  |
| 12   | horn R2 id         |            | 1-255 | 01  |
| 11   | body dominant id   |            | 1-255 | 07  |
| 10   | body R1 id         |            | 1-255 | 02  |
| 9    | body R2 id         |            | 1-255 | 01  |
| 8    | mouth dominant id  |            | 1-255 | 02  |
| 7    | mouth R1 id        |            | 1-255 | 06  |
| 6    | mouth R2 id        |            | 1-255 | 06  |
| 5    | eyes dominant id   |            | 1-255 | 05  |
| 4    | eyes R1 id         |            | 1-255 | 01  |
| 3    | eyes R2 id         |            | 1-255 | 04  |
| 2    | pincer dominant id |            | 1-255 | 06  |
| 1    | pincer R1 id       |            | 1-255 | 01  |
| 0    | pincer R2 id       |            | 1-255 | 02  |


- Alleles are divided in 3 types: Dominant(D), Recessive(R1) and Minor Recessive (R2). The D alledes decides how a crab look like.