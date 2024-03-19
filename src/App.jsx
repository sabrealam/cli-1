import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Netlify Cli For the First Time </h1>
      <h2>After Deployment Commit [ Commit ID - nw2n9eek ]</h2>
      <p>It Means the Changes We Will Made In The Project Are Reflected Automeatically </p>
    </>
  )
}

export default App

/**
 COMMANDS
  $ api           Run any Netlify API method
  $ blobs         Manage objects in Netlify Blobs
  $ build         Build on your local machine
  $ completion    Generate shell completion script
  $ deploy        Create a new deploy from the contents of a folder
  $ dev           Local dev server
  $ env           Control environment variables for the current site
  $ functions     Manage netlify functions
  $ init          Configure continuous deployment for a new or existing site. To create a new site without continuous deployment, use
                  `netlify sites:create`
  $ integration   Manage Netlify Integrations built with the Netlify SDK
  $ link          Link a local repo or project folder to an existing site on Netlify
  $ login         Login to your Netlify account
  $ logs          Stream logs from your site
  $ open          Open settings for the site linked to the current folder
  $ recipes       Create and modify files in a project using pre-defined recipes
  $ serve         Build the site for production and serve locally. This does not watch the code for changes, so if you need to rebuild
                  your site then you must exit and run `serve` again.
  $ sites         Handle various site operations
  $ status        Print status information
  $ switch        Switch your active Netlify account
  $ unlink        Unlink a local folder from a Netlify site
  $ watch         Watch for site deploy to finish
 */