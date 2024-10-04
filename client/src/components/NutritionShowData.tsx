interface NutritionDataProps {
  data: any;
}

const NutritionShowData = ({ data }: NutritionDataProps) => {
  return (
    <div className="nutrition-data text-center">
      <h4>Nutrition Information</h4>
      <ul className="list-group">
        {Object.keys(data).map((key) => (
          <li key={key} className="list-group-item">
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionShowData;
