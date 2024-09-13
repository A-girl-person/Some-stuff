import data from "./Data";

function UserDetail({ userId }) {
  const user = data.filter((d) => d.id === userId);
  console.log(user);
  return (
    <div>
      {user.map((u) => (
        <div key={u.id} className="flex">
          <div>
            <img src={u.profile} width={200} height={230} />
          </div>
          <div>
            <p>Name: {u.name}</p>
            <p>Avatar: {u.avatar}</p>
            <p>Gender: {u.gender}</p>
            <p>Age: {u.age}</p>
            <p>Phone: {u.phone}</p>
            <p>Position: {u.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserDetail;
