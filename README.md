<a name="readme-top"></a>

<!-- PROJECT LOGO
<br />
<div align="center">
  <a href="https://github.com/JP109/goal-tracker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->

  <h3 align="center">Goal-tracker</h3>

  <p align="center">
    A website with a calendar, that allows creating to-do lists on calendar days. Basically a Calendar + Todo List + Reminder app.
    <!-- <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://goal-tracker-ct9g.onrender.com/">View Demo</a>
    <br />
    Test username: user1
    <br />
    Test password: p
    <!-- ·
    <a href="">Report Bug</a>
    ·
    <a href="">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
![image](https://github.com/JP109/Goal-tracker-calendar/assets/60847674/1abbe047-a78f-4094-860c-ae7e116d0dca)
![image](https://github.com/JP109/Goal-tracker-calendar/assets/60847674/98d1aa49-f198-4dd4-8287-e770b3c241d5)
![image](https://github.com/JP109/Goal-tracker-calendar/assets/60847674/c6aa3d50-ab2c-4ef1-b8fb-189d5ce6c32f)


This project started off as a personal need, where I wanted a website where I could track my daily tasks. 

Features:
* Allows users to create, read, update and delete todos/task, on a particular date on the calendar UI
* Authentication and Authorization

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Angular][Angular.io]][Angular-url]
* ![Node][Node.js]
* ![Express][Express.js]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

To install the project locally:

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/JP109/goal-tracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Start client(angular) project
   ```js
   cd client
   ```
   ```js
   ng serve
   ```
5. Start server
   ```js
   cd server
   ```
   ```js
   npm run start:serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Create an account, if not already done on the signup page. Then login, and create todos on a particular date by clicking on that date on the calendar.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add backend and database to persist user data
- [x] Add authentication
- [x] Add authorization
- [ ] Add a summary debrief at the end of every month, displaying any new skills learned

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jai Pawar - [@your_twitter](https://twitter.com/your_username) - email@example.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Node.js]: 	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
