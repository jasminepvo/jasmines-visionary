# Jasmine Vo's 2nd Portfolio
Portfolio site updated as of Oct, 25 2022 

**Link to project:** https://jasminepvo-v2.netlify.app

![jasminepvo-v2](https://user-images.githubusercontent.com/99847030/197852415-ace3854a-4d6a-43e8-a2f0-5408da8e540d.gif)

## How It's Made:

**Tech used:** Vite + React, Tailwind, Sanity, Framer Motion, dotenv

Initial configuration and dependencies:
- Vite + React - create vite@latest
- Tailwind - tailwindcss postcss autoprefixer
- Sanity - @sanity/client @sanity/image-url
- Framer Motion - framer-motion
- react-icons
- react-copy-to-clipboard
- dotenv

Building the site: 
- Wireframe built in Figma
- Used containers and components
- Higher Ordered Functions
- AppWrapper

Deploying the site:
- Rename "dist" folder to "build"
- Drop build folder into Netlify

## Optimizations

- Dark/Light mode feature

## Lessons Learned:

Building mobile responsiveness first I learned it is tremendously easier to scale up then scale down. I also worked with a bunch of different packages/dependencies this time so this taught me quite a bit running into bugs and finding solutions.
 
Environment variables in Vite
- Naming convention: VITE_<projectid>
- Calling the env variable: import.meta.data.VITE_<projectid>

Tailwind
- LOTS of reading through the [documentation](https://tailwindcss.com/docs/) for built in styles 
- Importing custom colors, fonts, background images
- Sadly there is no z-axis for transform property. I intended to build a 3D spinning cube for the skills but wasn't able to achieve this. Hoping they release an update with this soon.

Sanity
- Ran into an issue of the app breaking after a certain image was published. Searched the internet but couldn't find a solution so I had to get creative. First step would be identifying the problem so I used a query to find the break using ```sanity query *[_type == 'skills']```
- This displayed all the skills documents where I could see the data was being rejected on my express skill. I used ```sanity delete <id-number-of-document>``` which resolved my sanity studio. 

Copy To Clipboard in React
- Build my own snippet here in Codepen before implementing it - [view here](https://codepen.io/jasminepvo/pen/wvXwLOW)

Implementing API
- useEffect, useState

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**AngelHope:** https://github.com/jasminepvo/angelhope

**StudyBoard:** https://github.com/jasminepvo/StudyBoard

**Manifest:** https://github.com/jasminepvo/manifest
