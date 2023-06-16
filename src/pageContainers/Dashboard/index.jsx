import { PageContainer } from 'src/appLayout/styles'
import Header from './Header'
import Table from 'src/components/Table'
import StatsCard from './StatsCard'
import {BodyWrapper, LeftSectionWrapper, TableWrapper } from './styles';

const headers = [
	{
		label: 'Bet name',
		align: 'center',
		id: 'gameName',
		type: 'TEXT_NAME_ADDRESS',
	},
	{
		label: 'Duration',
		align: 'center',
		id: 'duration',
		type: 'TEXT',
	},
	{
		label: 'Bet placed',
		align: 'center',
		id: 'betsPlaced',
		type: 'TEXT',
	},
	{
		label: 'Winner',
		align: 'center',
		id: 'winner',
		type: 'NAME_ADDRESS',
	},
]

const rows = [
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
	{
		gameName: {
			name: 'Bitcoin Prediction #23',
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
		duration: '12th June - 25th June',
		participants: 45,
		betsPlaced: 456,
		winner: {
			address: '0x23B8cb1494794281EA541bB775818ca195c6Baa7',
		},
	},
]


const LeftSection = () => {
	return (
		<LeftSectionWrapper>
			<div className="stats-section-1">
				<StatsCard title="Total Games" number={"40"} />
				<StatsCard title="Games running" number={"10"} />
			</div>
			<div className="stats-section-2">
				<StatsCard title="Total bets placed" number={"40"} />
				<StatsCard title="Total deposit" number={"~$3,243.234"} />
			</div>
		</LeftSectionWrapper>
	)
}

const RightSection = () => {
	return (
		<TableWrapper>
			<Table headers={headers} rows={rows} />
		</TableWrapper>
	)
}

export default function Home() {
	return (
		<PageContainer id="ola1">
			<Header />
			<BodyWrapper>
			<LeftSection />
			<RightSection />
			</BodyWrapper>
		</PageContainer>
	)
}
