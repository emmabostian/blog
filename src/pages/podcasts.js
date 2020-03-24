import React from "react"
import Layout from "../components/Layout"
import "./podcasts.css"

const podcasts = {
  ladybug: [{}],
  jsparty: [
    {
      name: "I Do, We Do, You Do",
      date: new Date(2020, 3, 13),
      formattedDate: "March 13, 2020",
      link: "https://changelog.com/jsparty/118",
    },
    {
      name: "Fullstack D3",
      date: new Date(2020, 1, 30),
      formattedDate: "January 30, 2020",
      link: "https://changelog.com/jsparty/113",
    },
    {
      name: "Do You Want JavaScript Again, Or More JavaScript?",
      date: new Date(2020, 1, 23),
      formattedDate: "January 23, 2020",
      link: "https://changelog.com/jsparty/112",
    },
    {
      name: "Mentor-ship",
      date: new Date(2019, 11, 21),
      formattedDate: "November 21, 2019",
      link: "https://changelog.com/jsparty/104",
    },
    {
      name: "Component Libraries, Style Guides, Design Systems... OH MY",
      date: new Date(2019, 11, 7),
      formattedDate: "November 7, 2019",
      link: "https://changelog.com/jsparty/102",
    },
    {
      name: "11 Awesome Lightning Chats",
      date: new Date(2019, 10, 15),
      formattedDate: "October 15, 2019",
      link: "https://changelog.com/jsparty/100",
    },
    {
      name: "An Honest Conversation About Burnout",
      date: new Date(2019, 6, 27),
      formattedDate: "June 27, 2019",
      link: "https://changelog.com/jsparty/83",
    },
    {
      name: "Live At ReactJS Girls",
      date: new Date(2019, 5, 14),
      formattedDate: "May 14, 2019",
      link: "https://changelog.com/jsparty/75",
    },
    {
      name: "Fresh Voices",
      date: new Date(2019, 4, 18),
      formattedDate: "April 18, 2019",
      link: "https://changelog.com/jsparty/73",
    },
  ],
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

const PodcastsPage = () => (
  <Layout>
    <h1>Podcasts</h1>
    <h4 className="podcasts__title">JS Party</h4>
    <table className="podcasts__table">
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Link</th>
      </tr>
      {podcasts.jsparty
        .sort((a, b) => b.date - a.date)
        .map(episode => (
          <tr>
            <td>{episode.name}</td>
            <td>{episode.formattedDate}</td>
            <td>
              <a href={episode.link}>Listen</a>
            </td>
          </tr>
        ))}
    </table>
    <h4 className="podcasts__title">Guest Podcasts</h4>
    <table className="podcasts__table">
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Link</th>
      </tr>
      {podcasts.guest
        .sort((a, b) => b.date - a.date)
        .map(episode => (
          <tr>
            <td>{episode.name}</td>
            <td>{episode.formattedDate}</td>
            <td>
              <a href={episode.link}>Listen</a>
            </td>
          </tr>
        ))}
    </table>
  </Layout>
)

export default PodcastsPage
