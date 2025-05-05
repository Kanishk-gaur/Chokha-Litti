import StarRating from './StarRating';

export default function ReviewCard({
  name,
  location,
  rating,
  comment,
  date
}: {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <div className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('en-IN')}
        </div>
      </div>
      
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>
      
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}