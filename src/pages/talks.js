import React from "react"
import Layout from "../components/layout"
import fedLove from "../../content/assets/fed-love.svg"
import ato from "../../content/assets/ato.svg"
import reactBoston from "../../content/assets/react-boston.svg"
import reactLive from "../../content/assets/react-live.svg"
import graphQLDay from "../../content/assets/graphql-day.svg"
import reactGirls from "../../content/assets/react-girls.svg"
import "./tables.css"

const talks = [
  {
    conference: "React JS Girls",
    date: new Date(2019, 5, 2),
    formattedDate: "May 02, 2019",
    location: "London, England",
    link: "https://www.youtube.com/watch?v=ropAuzI7MtA",
  },
  {
    conference: "GraphQL Day Bodensee",
    date: new Date(2019, 9, 6),
    formattedDate: "September 06, 2019",
    location: "Bodensee, Germany",
    link: "https://www.graphqlday.org/bodensee/",
  },
  {
    conference: "React Live",
    date: new Date(2019, 9, 13),
    formattedDate: "September 13, 2019",
    location: "Amsterdam, Netherlands",
    link: "https://www.youtube.com/watch?v=_CuqXv-Won8",
  },
  {
    conference: "Frontend Developer Love",
    date: new Date(2020, 2, 19),
    formattedDate: "February 19, 2020",
    location: "Amsterdam, Netherlands",
    link: "https://www.youtube.com/watch?v=NBb5Dt-uc40",
  },
  {
    conference: "All Things Open",
    date: new Date(2019, 10, 18),
    formattedDate: "October 18, 2019",
    location: "Raleigh, USA",
    link: "https://2020.allthingsopen.org/",
  },
  {
    conference: "React Boston",
    date: new Date(2019, 9, 21),
    formattedDate: "September 21, 2019",
    location: "Boston, USA",
    link: "https://www.youtube.com/watch?v=pXb2jA43A6k",
  },
]

const TalksPage = () => (
  <Layout>
    <h1>Talks</h1>
    <a
      rel="noopener noreferrer"
      href="https://www.frontenddeveloperlove.com/"
      target="_blank"
    >
      <img
        style={{ width: "200px" }}
        src={fedLove}
        alt="Frontend Developer Love Amsterdam"
      />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://2020.allthingsopen.org/"
      target="_blank"
    >
      <img style={{ width: "200px" }} src={ato} alt="All Things Open" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.reactboston.com/"
      target="_blank"
    >
      <img style={{ width: "200px" }} src={reactBoston} alt="React Boston" />
    </a>
    <a rel="noopener noreferrer" href="https://reactlive.nl/" target="_blank">
      <img style={{ width: "200px" }} src={reactLive} alt="React Live" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.graphqlday.org/bodensee"
      target="_blank"
    >
      <img style={{ width: "200px" }} src={graphQLDay} alt="GraphQL Day" />
    </a>
    <a
      rel="noopener noreferrer"
      href="https://reactjsgirls.com/"
      target="_blank"
    >
      <img style={{ width: "200px" }} src={reactGirls} alt="React JS Girls" />
    </a>
    <table className="tables__table">
      <thead>
        <tr>
          <th>Conference</th>
          <th>Date</th>
          <th>Location</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {talks
          .sort((a, b) => b.date - a.date)
          .map(conference => (
            <tr>
              <td>{conference.conference}</td>
              <td>{conference.formattedDate}</td>
              <td>{conference.location}</td>
              <td>
                <a rel="noopener noreferrer" href={conference.link}>
                  Check it out
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </Layout>
)

export default TalksPage
