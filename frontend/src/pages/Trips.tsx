import { TripCard } from '../components/TripCard';
import { tripData } from '../utils/mock';

export default function Trips() {
	const completedTrips = tripData.filter(trip => trip.status === 'Completed');
	const upcomingTrips = tripData.filter(trip => trip.status !== 'Completed');

	return (
		<div className="container mt-16 w-[100vw] px-[5vw] py-4">
			<h1 className="text-3xl font-bold text-gray-800 mb-8">My Trips</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming/Ongoing Trips</h2>
					<div className="space-y-6">
						{upcomingTrips.map((trip, index) => (
							<TripCard
								key={index}
								image={trip.image}
								title={trip.title}
								location={trip.location}
								price={trip.price}
								startDate={trip.startDate}
								endDate={trip.endDate}
								status={trip.status}
							/>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Completed Trips</h2>
					<div className="space-y-6">
						{completedTrips.map((trip, index) => (
							<TripCard
								key={index}
								image={trip.image}
								title={trip.title}
								location={trip.location}
								price={trip.price}
								startDate={trip.startDate}
								endDate={trip.endDate}
								status={trip.status}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
