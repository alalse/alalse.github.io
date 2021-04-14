export default class DB {
    static get_latest_projects() {
        
        let data = Object.assign(projects)
        data.sort((a, b) => a['project_id'] - b['project_id'])

        let latest = []
        latest.push(data[data.length-1])
        latest.push(data[data.length-2])

        return latest
    }

    static get_projects() {
        let data = Object.assign(projects)
        data.sort((a, b) => b['project_id'] - a['project_id'])
        return data
    }

    static get_project(id) {
        let data = Object.assign(projects)
        return data.find(element => element['project_id'] === id)
    }

    static get_courses() {
        return courses
    }
}

const projects = [
    {
        "name":"SlitherShots",
        "project_id":"1",
        "short_description":"A game that combines the two classics 'Snake' and 'Pong'.",
        "page_sections": [
            {
                "name":"Description",
                "text":"My first large-scale project since starting university. The game was developed as part of the course 'Object-Oriented System' and was created through C++ and and the multimedia library SFML. The game plays like the traditional game 'Pong' but with its typical paddles replaced with the snakes from the classic 'Snake'."
            },
            {
                "name":"About the game",
                "text":"Just as in Pong the objective of SlitherShots is to get a ball across the board into the opponents goal. You do this by driving the snake on your half of the board trying to bounce the ball against your head or snake segments. If the ball bounces against the head of a snake it picks up speed and gets flung in the direction it is facing. The snake is in constant motion requiring players to always think about where they are going. Furthermore, because SlitherShots draws inspiration from both Pong and Snake there will also be food spawning on the board. By going over food the snake gains a temporary increase in its length that decreases over time. There's also some more rare food types that in addition to increasing the length of the snake also gives it either a temporary speed or width boost.                                                        "
            }
        ],
        "start_date":"November 12th 2019",
        "end_date":"December 20th 2019",
        "course_name":"Projekt: Objektorienterat system",
        "course_id":"TDP005",
        "academic_credit":"6",
        "github_url":"https://github.com/alalse/SlitherShots",
        "techniques_used": [
            "C++",
            "SFML"
        ],
        "small_image":"blockblitz_small.png",
        "large_images": [
            "tdp005-spel.png",
            "tdp005-spel2.png",
            "tdp005-menu.png",
            "tdp005-settings.png"
        ]
    },
    {
        "name":"Timescript",
        "project_id":"2",
        "short_description": "My very own programming language created to make it easier to handle time in code.",
        "page_sections": [
            {
                "name":"Description",
                "text":"My very own programming language created to make it easier to handle time in code with statements such as 'at', an if statement that stops execution of a program until a set time, and 'from', a loop that only runs between two set times. All iterations in Timescript also have the capability of being limited to a single iteration per a set amount of time. Timescript is created with Ruby and is an indentation sensitive language created in the image of Python."
            }
        ],
        "start_date":"January 23th 2020",
        "end_date":"June 2nd 2020",
        "course_name":"Projekt: Datorspråk",
        "course_id":"TDP019",
        "academic_credit":"10",
        "github_url":"https://github.com/alalse/Timescript",
        "techniques_used": [
            "Ruby"
        ],
        "small_image":"tdp019-from.png",
        "large_images": [
            "tdp019-from.png",
            "tdp019-at.png",
            "tdp019-for.png",
            "tdp019-for2.png"
        ]
    },
    {
        "name":"P2P-Chatapp",
        "project_id":"3",
        "short_description": "A simple P2P chat application made in C# with the MVVM project structure.",
        "page_sections": [
            {
                "name":"Description",
                "text":"An application that uses peer to peer connections to carry out chat conversations over the Internet. The application is constructed with the 'Model-view-viewmodel' architecture and is the first project I have been a part of where I have truly and fully managed to separate GUI from logical code in a, according to me, good and functional way."
            }
        ],
        "start_date":"November 19th 2020",
        "end_date":"December 10th 2020",
        "course_name":"Programmering C# och .NET",
        "course_id":"TDDD49",
        "academic_credit":"4",
        "github_url":"",
        "techniques_used": [
            "C#",
            "MVVM"
        ],
        "small_image":"p2p_small.png",
        "large_images": [
            "p2p_small.png"
        ]
    },
    {
        "name":"A Social Website",
        "project_id":"4",
        "short_description": "A social blog-like website where people can chat either through posting on each others profiles or through a live chat. Frontend made with Vue and Bootstrap and backend made with Express and Mongodb.",
        "page_sections": [
            {
                "name":"Description",
                "text":"A social website with a frontend created through the Vue JavaScript framework and a backend made with NodeJS and MongoDB. Through the course we were tasked with creating a website with, for us, an unknown framework. We were beforehand not given any information regarding how the Vue framework functioned and therefore had to find such information by ourselves through available documentation and forums online."
            }
        ],
        "start_date":"September 9th 2020",
        "end_date":"November 11th 2020",
        "course_name":"Projekt: Webbprogrammering och interaktivitet",
        "course_id":"TDP013",
        "academic_credit":"6",
        "github_url":"",
        "techniques_used": [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "Vue",
            "NodeJS",
            "Express",
            "Mongodb"
        ],
        "small_image":"socialwebsite_small.png",
        "large_images": [
            "socialwebsite_small.png",
            "tdp013-friend.png",
            "tdp013-profile.png",
            "tdp013-search.png",
            "tdp013-chat.png"
        ]
    },
    {
        "name":"BlockBlitz",
        "project_id":"5",
        "short_description": "A never-ending android game about placing blocks on a board. Created with Java and many third-party APIs and addons from for example Firebase.",
        "page_sections": [
            {
                "name":"Description",
                "text":"BlockBlitz is a game about endlessly placing blocks of different dimensions and shapes on a board of 10x10 tiles. If the segments of a placed block together with the segments of some previously placed blocks form a continuous line from one end of the board to another, vetically or horizontally, the line of segments gets removed from the board while the player gets a point. Care needs to be taken by the player when placing blocks because a block can not be placed in a position where any of its segments overlap with any of the segments of a previously placed block. If the board fills up and there is no more space for new blocks the game is over."
            },
            {
                "name":"Technical Specification",
                "text":"The game is an Android application created with Java. In the project I've used many third-party APIs and addons most of which originate from Google Firebase. I've used Firebase Authentication for account creation and login, Firebase Firestore for storing user and leaderboard data, Firebase Cloud Functions for sending a welcome message to a new user's email, Firebase Crashlytics and Performance Monitoring to better monitor and fix any newly discovered issues and Firebase Remote Config for the possibility to temporarily disable account creation and login and also change the colors of blocks in the game. Beyond that I've also used Google's and Facebook's SDKs to implement third-party login options connected to Firebase Authentication in the app."
            }
        ],
        "start_date":"September 31th 2020",
        "end_date":"January 2nd 2021",
        "course_name":"Entreprenöriell programmering",
        "course_id":"TDP028",
        "academic_credit":"10",
        "github_url":"https://github.com/alalse/BlockBlitz",
        "techniques_used": [
            "Android",
            "Java",
            "Google Firebase"
        ],
        "small_image":"blockblitz_small.png",
        "large_images": [
            "blockblitz_game.png",
            "blockblitz_game_over.png",
            "blockblitz_main.png",
            "blockblitz_account.png"
        ]
    }
]

const courses = [
    {
        "name": "Handhavande av datormiljö",
        "id": "TDP001",
        "credits": "4",
        "url": "https://liu.se/studieinfo/kurs/tdp001/"
    },
    {
        "name": "Imperativ programmering",
        "id": "TDP002",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp002/"
    },
    {
        "name": "Projekt: Egna datormiljön",
        "id": "TDP003",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp003/"
    },
    {
        "name": "Objektorienterad programmering",
        "id": "TDP004",
        "credits": "8",
        "url": "https://liu.se/studieinfo/kurs/tdp004/"
    },
    {
        "name": "Projekt: Objektorienterat system",
        "id": "TDP005",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp005/"
    },
    {
        "name": "Konstruktion av datorspråk",
        "id": "TDP007",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp007/"
    },
    {
        "name": "Projekt: Datorspråk",
        "id": "TDP019",
        "credits": "10",
        "url": "https://liu.se/studieinfo/kurs/tdp019/"
    },
    {
        "name": "Datornät och distribuerade system",
        "id": "TDTS04",
        "credits": "8",
        "url": "https://liu.se/studieinfo/kurs/tdts04/"
    },
    {
        "name": "Grunder i matematik och logik",
        "id": "TDP015",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp015/"
    },
    {
        "name": "Datastrukturer och algoritmer",
        "id": "TDDI16",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tddi16/"
    },
    {
        "name": "Webbprogrammering och interaktivitet",
        "id": "TDP013",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdp013/"
    },
    {
        "name": "Projekt: Entreprenöriell programmering",
        "id": "TDP028",
        "credits": "10",
        "url": "https://liu.se/studieinfo/kurs/tdp028/"
    },
    {
        "name": "Programmering i C# och .NET Framework",
        "id": "TDDD49",
        "credits": "4",
        "url": "https://liu.se/studieinfo/kurs/tddd49/"
    },
    {
        "name": "Datorteknik",
        "id": "TSIU02",
        "credits": "4",
        "url": "https://liu.se/studieinfo/kurs/tsiu02/"
    },
    {
        "name": "Interaktiva system",
        "id": "TDDD60",
        "credits": "4",
        "url": "https://liu.se/studieinfo/kurs/tddd60/"
    },
    {
        "name": "Operativsystem",
        "id": "TDIU11",
        "credits": "6",
        "url": "https://liu.se/studieinfo/kurs/tdiu11/"
    }
]