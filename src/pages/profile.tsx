import Head from 'next/head'

import ProfilePage from '@/components/pages/Profile.page'

const Profile = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Profile</title>
      </Head>
      <ProfilePage />
    </>
  )
}

export default Profile
