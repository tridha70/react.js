type UserCardProps = {
  name: string
  role: string
  company: string
  experience: string
  branch: string
  email: string
  phone: string
}

function UserCard({
  name,
  role,
  company,
  experience,
  branch,
  email,
  phone,
}: UserCardProps) {
  return (
    <article className="user-card">
      <div className="user-card__header">
        <div className="avatar">{name.charAt(0)}</div>
        <div>
          <h2>{name}</h2>
          <span className="status-badge">{role}</span>
        </div>
      </div>

      <dl className="user-details">
        <div>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{company}</dd>
        </div>
        <div>
          <dt>Experience</dt>
          <dd>{experience}</dd>
        </div>
        <div>
          <dt>Branch</dt>
          <dd>{branch}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{phone}</dd>
        </div>
      </dl>
    </article>
  )
}

export default UserCard
