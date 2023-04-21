import { Layout } from '@/components/Layout';
import CardComponent from '@/components/CardComponent';
import useSWR from 'swr';
import { Calendar, Car } from 'phosphor-react';

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

export default function Events() {
	const events = getEvents();
	return (
		<>
			<Layout title='Events - City Cyclery' description='Upcoming events'>
				<div className='mt-16 max-w-5xl m-auto p-4 mb-4'>
					<div className='flex flex-row gap-3 text-light-500 my-16 items-baseline'>
						<h1 className='font-bold text-4xl'>Events</h1>
						<Calendar size={32} />
					</div>
					<div>
						{events.data ? (
							events.data.map((event: any) => (
								<div key={event.eventId}>
									<CardComponent title={event.title}></CardComponent>
								</div>
							))
						) : (
							<p>No events found...</p>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}

function getEvents() {
	const { data, error, isLoading } = useSWR(`/api/events`, fetcher);

	return {
		data: data,
		isLoading,
		isError: error,
	};
}
