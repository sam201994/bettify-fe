import BetCard from 'src/containers/BetCard'

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', gap: '2px' }}>
        <BetCard data={{}} isBetOpen={true} />
        <BetCard data={{}} isBetLocked={true} />
        <BetCard data={{}} />
      </div>
      {/* <div>
        <input onChange={onChangeValue} value={commifiedValue} />
        <Typography type="p20" color="primary">
          Winner
        </Typography>
        <Tag theme="light" text="Participated" />
        <Tag theme="dark" text="Participated" />
        <Button
          disabled={false}
          loader={true}
          text={'Place bet'}
          onClick={() => {}}
        />
        <Button
          disabled={false}
          loader={false}
          text={'Place bet'}
          onClick={() => {}}
        />
        <Status color="red" />

      </div>

      <div>Hi</div>
      <div>Connecting: {connecting.toString()}</div>
      <div>Wallet: {account}</div>
      {!account ? (
        <button onClick={() => connect()}>Connect Wallet</button>
      ) : (
        <button onClick={() => disconnect(wallet)}>Disconnect Wallet</button>
      )}*/}
    </>
  )
}
