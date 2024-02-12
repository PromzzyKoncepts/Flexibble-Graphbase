import { graph, auth, config } from '@grafbase/sdk'


const g = graph.Standalone()
const User = g.model("User", {
  name: g.string(),
  email: g.string().unique(), // Apply unique constraint here
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedinUrl:g.string().optional(),
  projects:g.relation(() => Project).list().optional(),
})

const Project = g.model("Project", {
  title: g.string(),
  description: g.string(),
  image:g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)


})



export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    // OpenID Connect
    // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
    // providers: [oidc],
    rules: (rules) => {
      rules.public()
    },
  },
  // Caching - https://grafbase.com/docs/graphql-edge-caching
  // cache: {
  //   rules: [
  //     {
  //       types: ['Query'], // Cache everything for 60 seconds
  //       maxAge: 60,
  //       staleWhileRevalidate: 60
  //     }
  //   ]
  // }
})
