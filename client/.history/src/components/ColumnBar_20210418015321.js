const ColumnBar = ({ placehodler, info }) => {
  return (
    <div className="flex space-x-4 text-gray-600">
      <h2 className="text-lg">{placehodler}:</h2>
      <h2 className="font-medium text-xl">{info}</h2>
    </div>
  );
};
