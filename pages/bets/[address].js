import BetDetails from 'src/pageContainers/BetDetails'
import { useRouter } from 'next/router'

export default function BetDetailsPage() {
  const router = useRouter()
  const { address } = router.query
  return (
    <>
      <BetDetails proxyAddress={address} />
    </>
  )
}
