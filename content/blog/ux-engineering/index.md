---
title: UX Engineering
date: "2019-04-14"
slug: "/ux-engineering"
description: A few months ago I was thrilled to be officially deemed a "UX Engineer" (UXE) at LogMeIn. I was going to get the chance to build Design Systems! But once the excitement wore off, I quickly realized how undefined the UXE role is. I tried Googling the position but came up empty handed.
headerImage: "https://cdn-images-1.medium.com/max/1600/1*3jXyhPHEuXR4kTcaJmoBVQ.jpeg"
draft: false
---

<img src="https://cdn-images-1.medium.com/max/1600/1*3jXyhPHEuXR4kTcaJmoBVQ.jpeg" />

A few months ago I was thrilled to be officially deemed a "UX Engineer" (UXE) at LogMeIn. I was going to get the chance to build Design Systems! But once the excitement wore off, I quickly realized how undefined the UXE role is. I tried Googling the position but came up empty handed.

Although a few companies, such as Google and Etsy, are starting to hire UXEs, the position differs vastly between companies.
Thus, after much research into the field, I believe I have finally narrowed down the role of a UXE, the skills needed to succeed, and the responsibilities.

_Note that this role has been combined not only from all of the research I have completed, but from my personal experiences. If you're considering a role in UXE, please review the requirements for that position with your potential employer._

# What Is A UX Engineer?

A UX Engineer (UXE) is a Front-End Engineer who sits on a cross-functional design team and helps facilitate collaboration between design and engineering.

UXEs possess the skill-set of a Front-end Engineer but with working knowledge of UX design principles. Their primary domain focuses on the design/UI component layer of an application and steers away from the middleware layer between front-end and back-end development.

## Where Do UXEs Fit Into The Process?

UXEs sit between design and front-end engineering.
![UX Engineer = UX & visual design knowledge + front-end development skills](https://cdn-images-1.medium.com/max/1600/1*2xFn0paLMjLGZmbvgmww9w.png)

## How Are Their Skills Different From Front-End Engineers?

Since UXEs are at their core Front-End Engineers, there should be overlap between them, but UXEs employ design skills and are more focused on the UI than the middleware layer.

![UXE skills include prototyping, component creation, asset manipulation, UI updates, technical feasibility, accessibility](https://cdn-images-1.medium.com/max/1600/1*t9nx-riq3bSyGA1vWRZ6-g.png)

# Design Systems

In general, UXEs work on building Design Systems, so let's take a second to define what a Design System is.

A Design System is the set of guidelines and assets which convey a sense of identity within multiple flagship products or applications. It's comprised of three pieces: the design language, component library, and style guide.

## Design Language

The visual design assets and branding guidelines necessary to create your system. Here are some examples of branding guidelines you may see.

- Color palette
- Accessibility guidelines
- Typography scale
- Animation library

## Component Library

The coded components used to bring the design language to life. These components are built using HTML, CSS, and JavaScript. Some of the most popular Design Systems use the following JavaScript libraries and frameworks, but may also include native (vanilla JS) web components:

- React
- Vue.js
- Angular
- Polymer

## Style Guide

The website which documents and encapsulates both the design language and component library. [IBM Carbon](https://www.carbondesignsystem.com/) is a great style guide I recommend checking out.

# What Do UXEs Do?

This is one area that varies vastly company to company, but here are a couple of major job responsibilities for UXEs:

- Turn the Design Language into a living, breathing component library coded in a popular JavaScript framework or library.
- Prototype low-fidelity designs into high-fidelity prototypes using the component library.
- Work to improve collaboration and communication between the design team and the engineering teams.
- Promote the value and adoption of the Design System throughout - the organization.
- Build the style guide website for the Design System.

# Qualifications For A UXE Role

The qualifications for a UXE vary company to company, however they primarily include front-end development skills with a sprinkling of user experience knowledge.

## UX Design Skills

Here are a few examples of UX design knowledge that a UXE might be expected to understand:

- The ability to look at a component and understand why the pieces fit together as they do.
  Why the text is left-aligned (the text should be justified to the direction from which your target audience reads. Since the majority of people in the world read left-to-right, that's why it's best to justify text left when you have a block of text larger than three lines.)
- Why paragraphs shouldn't be longer than 50–70 characters per line (the longer the line width, the more fatigued our users' eyes become.)
- Why it's better to place dark-colored text on light colored backgrounds than vice versa (the contrast is much starker with this combination).
- Why you should never place text over a background image without either a background overlay, a drop shadow, or reduced image contrast or opacity (the text, whether black white or colored, will blend into the different shades of the image; if we have white text over an image it will clearly stand out against the darker areas of the images and fade into the background of the lighter parts of the image.)

## UI Design Skills

You may also want to familiarize yourself with some of the tooling used by the design team. These may include the following.

- Sketch
- Adobe Creative Suite
- Figma

Typically if you have experience with one of these tools, the general skills transfer to the others; Sketch and Figma are the easiest tools to learn.

If you're looking to obtain a UXE role, I highly recommend the book [Refactoring UI](https://refactoringui.com/) and the course [Design For Developers](https://frontendmasters.com/courses/design-for-developers/) by Sarah Drasner.

## Front-End Development Skills

Since UXEs primary knowledge set is front-end development, you should feel comfortable with basic engineering principles and front-end development skills.

Here are a few skills you might want to brush up on prior to applying for a UXE role:

- **HTML, CSS, and JavaScript:** don't take these "basics" for granted. Learning to use these skills effectively and correctly isn't hard but are extraordinarily important.
- **Build Tools:** you'll need to have experience working with [Webpack](https://webpack.js.org/) or [Gulp](https://gulpjs.com/) as the build process for these components is important.
- **CSS Pre-Processors & Tools:** It's common to see [Sass](https://sass-lang.com/) or [Less](http://lesscss.org/) within a UI framework and component library, thus you should be able to work well with them. Additionally, I recommend learning a naming architecture like [Block-Element-Modifier](http://getbem.com/) (BEM) or [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS). They come in handy when using the tools above.
- **Accessibility:** You should understand how to use semantic markup in order to ensure your component library is in compliance with the [W3C](https://www.w3.org/).
- **Algorithms\*:** I put an asterisk on this skill because, as we'll see in the interview section of this post, you will be expected to have some understanding of algorithms, their runtimes and optimization techniques. That being said, you won't likely use as many algorithms in your day-to-day job unlike a Front-End Engineer on a development team.
- **Problem Solving:** You must be able to apply good problem solving skills within the construction of the component library.
- **Design Patterns:** It may be useful to have some knowledge of design patterns (the ways in which we can architect our components). Addy Osmani published an [incredible book](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) about design patterns that I highly recommend.
- **Responsive Design:** You're building responsive web components that must function across varying resolutions. Thus, you must know the principles of responsive design.
- **Testing & Debugging:** Familiarize yourself with testing components. [Jest](https://jestjs.io/) is a popular, and easy-to-learn JavaScript testing technology. It's often used with [Enzyme](https://github.com/airbnb/enzyme) to test React components. [Sentry.io](https://sentry.io/welcome/) is another great tool for learning to debug and catch errors in your components.
- **Version Control:** You must be comfortable with using version control. [Git](https://git-scm.com/) is one of the most popular, so be sure to brush up on your skills!
- **Package & Dependency Managers:** You'll be working to create a package that your engineering teams can leverage in their workflow, so you should be knowledgeable about [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/en/).

## Soft Skills

As a UXE you will interface with the Design System stakeholders: the design team, engineering teams, and product management. As a result, you must have great communication skills.

Here are some other skills you need to be an effective UXE:

- **Written Communication:** You will be authoring component and style guide documentation
- **Pro-Activeness:** As a UXE, you may have more autonomy over your day-to-day work or goals. As such, you must actively search for work and be able to prioritize.
- **Empathy:** We must have empathy for our users. At the end of the day, they're the reason we're building these incredible applications.

# The Interview Process

Since UXE is such a new field, the interviewing process hasn't been clearly defined yet. I did not go through the UXE interviewing process as I was already working for LogMeIn, so I transitioned into this role quite easily.

To understand the skills you should obtain prior to the interview, refer to the previous sections: Qualifications For A UXE Role.
In general, the interview process will be much the same as a Front-End Engineer, so study up on your algorithms and JavaScript.

# Related UXE Articles & Job Postings

There are several companies hiring UXEs. Below are some job postings for UXEs which might provide more insight into the role.

- [Google Careers](https://careers.google.com/jobs/results/4617646772518912-ux-engineer-front-end-web/)
- [My Google UX Engineer Interview](https://medium.com/@DementedScript/my-google-ux-engineer-interview-d79bb5854c06)
- [Who Is A UX Engineer?](https://medium.com/@alexewerlof/what-is-a-ux-engineer-1286d4b6d0e8)
- [20 Skills Needed To Become A UX Engineer In 2019](https://uxengineer.com/skills-needed-become-a-ux-engineer/)
- [Top 10 UX Engineer Portfolios](https://uxengineer.com/ux-engineer-portfolios/)

# Conclusion

UX Engineering provided me with a gift; it allowed me to marry my love for design with the technical aspects of development. I love having the skills to communicate effectively with both designers and engineers.

If you think UXE is the right role for you, I encourage you to go for it; I have never been happier in a role.

Don't get discouraged if you can't find a multitude of UXE jobs; the field is still in its infancy and will continue to grow.

I am excited to see where this career path takes me.
