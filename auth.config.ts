import GitHub from "@auth/core/providers/github"

import { defineConfig } from "auth-astro"

import type { Profile } from "@auth/core/types"

interface CustomProfile extends Profile {
  login: string
}

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        }
      },
    }),
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      if (!profile) return false
      const githubProfile = profile as CustomProfile
      const allowedUsers = ["GVPproj"]
      return allowedUsers.includes(githubProfile.login)
    },
  },
})
