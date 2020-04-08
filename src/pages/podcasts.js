import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ladybug from "../../content/assets/ladybug.svg"
import "./tables.css"
import "./podcasts.css"

const podcasts = {
  guest: [
    {
      name: "React Podcast",
      date: new Date(2019, 8, 1),
      formattedDate: "August 1, 2019",
      link: "https://reactpodcast.simplecast.fm/57",
    },
    {
      name: "Dev Path FM",
      date: new Date(2019, 1, 25),
      formattedDate: "January 25, 2019",
      link:
        "https://www.devpath.fm/episodes/ux-engineer-and-coding-coach-founder-emma-wedekind",
    },
    {
      name: "Chats With Kent",
      date: new Date(2019, 8, 5),
      formattedDate: "August 5, 2019",
      link:
        "https://kentcdodds.com/chats-with-kent-podcast/seasons/01/episodes/creating-successful-mentor-relationships-with-emma-wedekind/",
    },
    {
      name: "Real Talk JavaScript",
      date: new Date(2019, 4, 30),
      formattedDate: "April 30, 2019",
      link:
        "https://realtalkjavascript.simplecast.com/episodes/6a7c26ba-0b86801b",
    },
    {
      name: "The Changelog",
      date: new Date(2019, 4, 10),
      formattedDate: "April 10, 2019",
      link: "https://changelog.com/podcast/342",
    },
    {
      name: "How To Code Well",
      date: new Date(2019, 6, 28),
      formattedDate: "June 28, 2019",
      link: "https://www.stitcher.com/podcast/how-to-code-well/e/62234311",
    },
  ],
}
export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout>
        <h1>Regular Podcasts</h1>
        <p className="podcasts__paragraph">
          In spring of 2019 I co-founded the Ladybug Podcast with a few of my
          lady-friends where we discuss all things code and career! We publish
          weekly on Mondays! We also have a book club were we discuss popular
          career-based books.
        </p>
        <p className="podcasts__paragraph">
          Additionally I am a regular panelist on the popular podcast JSParty!
        </p>
        <div className="podcasts__logo-wrapper">
          <a
            rel="noopener noreferrer"
            href="https://changelog.com/jsparty"
            target="_blank"
          >
            <Img
              style={{ width: "200px" }}
              fluid={data.file.childImageSharp.fluid}
            />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://ladybug.dev"
            target="_blank"
          >
            <img
              style={{ width: "400px" }}
              src={ladybug}
              alt="Ladybug Podcast"
            />
          </a>
        </div>
        <h1>Guest Podcasts</h1>
        <table className="tables__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {podcasts.guest
              .sort((a, b) => b.date - a.date)
              .map(episode => (
                <tr key={episode.name}>
                  <td>{episode.name}</td>
                  <td>{episode.formattedDate}</td>
                  <td>
                    <a href={episode.link}>Listen</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Layout>
    )}
  />
)

const query = graphql`
  query JSParty {
    file(relativePath: { eq: "js-party.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
