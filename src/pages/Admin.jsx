import { useAuth } from '../context/useAuth'
import '../App.css'

const adminSections = [
  {
    title: 'User Management',
    description: 'Review accounts, promote moderators, or suspend users.',
  },
  {
    title: 'Post Management',
    description: 'Remove spam, delete harmful content, and restore posts.',
  },
  {
    title: 'Report Management',
    description: 'Handle reports and keep moderation work moving.',
  },
  {
    title: 'Analytics',
    description: 'Track growth, engagement, and moderation trends.',
  },
  {
    title: 'Ban User',
    description: 'Temporarily or permanently suspend accounts.',
  },
  {
    title: 'System Settings',
    description: 'Adjust platform-wide rules and admin controls.',
  },
]

export default function Admin() {
  const { user, logout } = useAuth()

  return (
    <div className="admin-page">
      <header className="admin-hero">
        <div>
          <p className="admin-eyebrow">Admin Dashboard</p>
          <h1>System control for MiitVerse</h1>
          <p className="admin-copy">
            Signed in as {user?.username || user?.email} with role {user?.role}.
          </p>
        </div>

        <button className="admin-logout" onClick={logout}>
          Log out
        </button>
      </header>

      <section className="admin-grid">
        {adminSections.map((section) => (
          <article key={section.title} className="admin-card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}