type UserCardProps = {
  name: string
  age: number
  city: string
  email: string
  phone: string
  occupation: string
  address: string
  hobbies: string
  status: string
}

function UserCard({
  name,
  age,
  city,
  email,
  phone,
  occupation,
  address,
  hobbies,
  status,
}: UserCardProps) {
  return (
    <article className="user-card">
      <div className="user-card__header">
        <div className="avatar">{name.charAt(0)}</div>
        <div>
          <h2>{name}</h2>
          <span className="status-badge">{status}</span>
        </div>
      </div>

      <dl className="user-details">
        <div>
          <dt>Age</dt>
          <dd>{age}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{city}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{phone}</dd>
        </div>
        <div>
          <dt>Occupation</dt>
          <dd>{occupation}</dd>
        </div>
        <div>
          <dt>Address</dt>
          <dd>{address}</dd>
        </div>
        <div>
          <dt>Hobbies</dt>
          <dd>{hobbies}</dd>
        </div>
      </dl>
    </article>
  )
}

export default UserCard
