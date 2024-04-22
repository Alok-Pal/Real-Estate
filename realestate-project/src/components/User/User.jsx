import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-red-200 text-3xl">User Id : {userId}</div>
  );
};

export default User;
