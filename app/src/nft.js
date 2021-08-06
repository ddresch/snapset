import { NFTStorage, File } from 'nft.storage'
const API_TOKEN = ''
const client = new NFTStorage({ token: API_TOKEN })

export const store = async file => {
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: file,
    //  new File(
    //   [
    //     /* data */
    //   ],
    //   'pinpie.jpg',
    //   { type: 'image/jpg' }
    // ),
  })
  console.log(metadata.url)
  return metadata
}
