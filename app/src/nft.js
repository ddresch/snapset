import { NFTStorage /* File */ } from 'nft.storage'
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVFQmZGMEM2MjRmNTU3RTRjNERmNzE4OTU1YTRjOTBiQUM2NzQ4RkMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyODI4MjEyNDkzMiwibmFtZSI6InBpenphIn0.Ythj412e62wRDpnHf8WPIBqtrDhzEXRE9O_FjBkHoW4'
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
