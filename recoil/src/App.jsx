import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp() {
  const [count, setCount] = useState(0)
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount > 100 ? "99+" : networkNotificationCount;
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
  const totalNotifications = useMemo(() => {
    return networkNotificationCount + jobsCount +
      notificationCount + messagingAtomCount
  }, [
    networkNotificationCount, finalValue, jobsCount, notificationCount
  ])

  return (
    <>
      <button>Home</button>
      <button>My network {finalValue}</button>
      <button>Jobs ({jobsCount > 100 ? "99+" : jobsCount})</button>
      <button>Messaging ({notificationCount > 100 ? "99+" : notificationCount})</button>
      <button>Notifications ({messagingAtomCount > 100 ? "99+" : messagingAtomCount})</button>
      <button onClick={() => { setMessagingAtomCount(messagingAtomCount + 1) }}>msgAtom</button>
      <button > Me{totalNotifications}</button>
      <ButtonUpdater />
    </>
  )
}
//another way
function ButtonUpdater() {
  const setNotificationCount = useSetRecoilState(messagingAtom);
  return <button
    onClick={() => { setNotificationCount(c => c + 1) }}>
    bt
  </button>
}

export default App
