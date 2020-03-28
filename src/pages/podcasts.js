import React from "react"
import Layout from "../components/Layout"
import "./podcasts.css"

const podcasts = {
  ladybug: [
    {
      name: "New Career, Who Dis?",
      date: new Date(2019, 7, 1),
      formattedDate: "July 1, 2019",
      link: "https://ladybug.dev/new-career-who-dis",
    },
    {
      name: "Side Project Balancing Act",
      date: new Date(2019, 7, 8),
      formattedDate: "July 8, 2019",
      link: "https://ladybug.dev/side-project-balancing-act",
    },
    {
      name: "Blogging 101",
      date: new Date(2019, 7, 8),
      formattedDate: "July 15, 2019",
      link: "https://ladybug.dev/blogging-101",
    },
    {
      name: "Web Technologies We're Excited About",
      date: new Date(2019, 7, 22),
      formattedDate: "July 22, 2019",
      link: "https://ladybug.dev/web-technologies-were-excited-about",
    },
    {
      name: "How The Ladybugs Got Their Spots",
      date: new Date(2019, 7, 29),
      formattedDate: "July 29, 2019",
      link: "https://ladybug.dev/how-the-ladybugs-got-their-spots",
    },
    {
      name: "Impostor Syndrome",
      date: new Date(2019, 8, 5),
      formattedDate: "August 05, 2019",
      link: "https://ladybug.dev/impostor-syndrome",
    },
    {
      name: "Level Up With CSS - Part 1",
      date: new Date(2019, 8, 12),
      formattedDate: "August 12, 2019",
      link: "https://ladybug.dev/css-part-1",
    },
    {
      name: "Level Up With CSS - Part 2",
      date: new Date(2019, 8, 14),
      formattedDate: "August 14, 2019",
      link: "https://ladybug.dev/css-part-2",
    },
    {
      name: "Ask Kelly About Entrepreneurship",
      date: new Date(2019, 8, 19),
      formattedDate: "August 19, 2019",
      link: "https://ladybug.dev/ask-kelly-about-entrepreneurship",
    },
    {
      name: "Career Paths In Tech",
      date: new Date(2019, 8, 26),
      formattedDate: "August 26, 2019",
      link: "https://ladybug.dev/career-paths-in-tech",
    },
    {
      name: "What The Heck Is GraphQL?",
      date: new Date(2019, 9, 16),
      formattedDate: "September 16, 2019",
      link: "https://ladybug.dev/what-the-heck-is-graphql",
    },
    {
      name: "How To Teach Code",
      date: new Date(2019, 9, 23),
      formattedDate: "September 23, 2019",
      link: "https://ladybug.dev/teaching-code",
    },
    {
      name: "Design Systems",
      date: new Date(2019, 9, 30),
      formattedDate: "September 30, 2019",
      link: "https://ladybug.dev/design-systems",
    },
    {
      name: "Hacktoberfest Part 1",
      date: new Date(2019, 10, 7),
      formattedDate: "October 07, 2019",
      link: "https://ladybug.dev/hacktoberfest-part-1",
    },
    {
      name: "Hacktoberfest Part 2",
      date: new Date(2019, 10, 10),
      formattedDate: "October 10, 2019",
      link: "https://ladybug.dev/hacktoberfest-part-2",
    },
    {
      name: "React, Vue, && Angular, OH MY!",
      date: new Date(2019, 10, 13),
      formattedDate: "October 13, 2019",
      link: "https://ladybug.dev/javascript-frameworks",
    },
    {
      name: "All About Technical Portfolios",
      date: new Date(2019, 10, 21),
      formattedDate: "October 21, 2019",
      link: "https://ladybug.dev/technical-portfolios",
    },
    {
      name: "Shopify & E-Commerce",
      date: new Date(2019, 10, 28),
      formattedDate: "October 28, 2019",
      link: "https://ladybug.dev/shopify-and-e-commerce",
    },
    {
      name: "Working Remotely",
      date: new Date(2019, 11, 4),
      formattedDate: "November 4, 2019",
      link: "https://ladybug.dev/working-remotely",
    },
    {
      name: "Debugging 101",
      date: new Date(2019, 11, 11),
      formattedDate: "November 11, 2019",
      link: "https://ladybug.dev/debugging",
    },
    {
      name: "Web Performance",
      date: new Date(2019, 11, 18),
      formattedDate: "November 18, 2019",
      link: "https://ladybug.dev/web-performance",
    },
    {
      name: "Speaking At Conferences",
      date: new Date(2019, 11, 25),
      formattedDate: "November 25, 2019",
      link: "https://ladybug.dev/speaking-at-conferences",
    },
    {
      name: "20 Tips For Developers In 2020",
      date: new Date(2020, 1, 13),
      formattedDate: "January 13, 2020",
      link: "https://ladybug.dev/20-tips-for-devs",
    },
    {
      name: "Design For Developers",
      date: new Date(2020, 1, 20),
      formattedDate: "January 20, 2020",
      link: "https://ladybug.dev/design-for-devs",
    },
    {
      name: "Personal Branding",
      date: new Date(2020, 1, 27),
      formattedDate: "January 27, 2020",
      link: "https://ladybug.dev/personal-branding",
    },
    {
      name: "Book Club: Atomic Habits",
      date: new Date(2020, 1, 29),
      formattedDate: "January 29, 2020",
      link: "https://ladybug.dev/atomic-habits",
    },
    {
      name: "Data Structures & Algorithms",
      date: new Date(2020, 2, 3),
      formattedDate: "February 03, 2020",
      link: "https://ladybug.dev/data-structures-and-algorithms",
    },
    {
      name: "Game Development",
      date: new Date(2020, 2, 10),
      formattedDate: "February 10, 2020",
      link: "https://ladybug.dev/game-development",
    },
    {
      name: "Building A Resume",
      date: new Date(2020, 2, 17),
      formattedDate: "February 17, 2020",
      link: "https://ladybug.dev/resumes",
    },
    {
      name: "Frontend Interviews",
      date: new Date(2020, 2, 24),
      formattedDate: "February 24, 2020",
      link: "https://ladybug.dev/frontend-interviews",
    },
    {
      name: "Book Club: Invisible Women",
      date: new Date(2020, 2, 26),
      formattedDate: "February 26, 2020",
      link: "https://ladybug.dev/invisible-women",
    },
    {
      name: "Engineering Management",
      date: new Date(2020, 3, 2),
      formattedDate: "March 02, 2020",
      link: "https://ladybug.dev/engineering-management",
    },
    {
      name: "Behavioral Interviews",
      date: new Date(2020, 3, 9),
      formattedDate: "March 09, 2020",
      link: "https://ladybug.dev/behavioral-interviews",
    },
    {
      name: "What's On Our Computers",
      date: new Date(2020, 3, 16),
      formattedDate: "March 16, 2020",
      link: "https://ladybug.dev/whats-on-our-computers",
    },
    {
      name: "Indie Hacking",
      date: new Date(2020, 3, 23),
      formattedDate: "March 23, 2020",
      link: "https://ladybug.dev/indie-hacking",
    },
  ],
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
    <h4 className="podcasts__title">Guest Podcasts</h4>
    <table className="podcasts__table">
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
            <tr>
              <td>{episode.name}</td>
              <td>{episode.formattedDate}</td>
              <td>
                <a href={episode.link}>Listen</a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    <h4 className="podcasts__title">JS Party</h4>
    <table className="podcasts__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
    <h4 className="podcasts__title">Ladybug Podcast</h4>
    <table className="podcasts__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody className="podcasts__table-body">
        {podcasts.ladybug
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
      </tbody>
    </table>
  </Layout>
)

export default PodcastsPage
