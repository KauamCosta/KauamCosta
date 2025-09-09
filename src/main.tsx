import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from './UserProfile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <div className="flex h-screen w-screen justify-center">
      <UserProfile />
    </div>
  </StrictMode>,
)
