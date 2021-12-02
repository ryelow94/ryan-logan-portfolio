import cookBookImg from "./cookbook.png"
import smsImg from "./sms.png"
import TetrisImg from "./Tetris.png"
import fitnessTracker from "./fitness-tracker.png"
import workDayScheduler from "./work-day-scheduler.png"
import noteTaker from "./note-taker.png"
import passwordGenerator from "./password-generator.png"
export const portfolioItems = [
    {
        title: "Tetris",
        img: TetrisImg,
        description: " Our take on Tetris!",
        github: "https://github.com/reidk361/arcade-lite",
        deployed: "https://arcade-lite.herokuapp.com/",
        cName: "portfolio-items",
    },
    {
        title: "SMS Practice Reminder",
        img: smsImg,
        description: " This app is designed to send sms reminders to complete practice goals for the day.",
        github: "https://github.com/ryelow94/SMS-Practice-Reminder",
        deployed: "https://sms-practice-reminder.herokuapp.com/",
        cName: "portfolio-items",
    },
    {
        title: "Cookbook",
        img: cookBookImg,
        description: " This app allows the user to enter ingredients and/or intolerances into the search bar and view a list of recipes including ingredients entered and excluding intolerances entered",
        github: "https://github.com/ryelow94/Cookbook",
        deployed: "https://ryelow94.github.io/Cookbook/",
        cName: "portfolio-items"
    },
    {
        title: "Fitness Tracker",
        img: fitnessTracker,
        description: "This app allows a user to track their workouts. It allows you to create a new workout as well as continue an existing one. Also, this app saves workout data on a Mongo database. ",
        github: "https://github.com/ryelow94/Fitness-Tracker",
        deployed: "https://safe-taiga-08781.herokuapp.com/?id=615900e7906bde00165232d4",
        cName: "portfolio-items"
    },
    {
        title: "Work Day Scheduler",
        img: workDayScheduler,
        description: "This app allows the user to make a daily schedule. The app will save the schedule to local storage and allow the user to access the same information even if they close out the page.",
        github: "https://github.com/ryelow94/Work_Day_Scheduler",
        deployed: "https://ryelow94.github.io/Work_Day_Scheduler",
        cName: "portfolio-items"
    },
    {
        title: "Note Taker",
        img: noteTaker,
        description: "This app allows the user to write, save and delete notes that they enter into the webpage. The app also allows the user to refer back to the saved notes and read them.",
        github: "https://github.com/ryelow94/Note-Taker",
        deployed: "https://note-taker94.herokuapp.com/",
        cName: "portfolio-items"
    },
    {
        title: "Password Generator",
        img: passwordGenerator,
        description: "This app generates a random password based on the criteria the user selects. The possible criteria include lowercase letters, uppercase letters, numbers and special characters. Furthermore, the password can be between 8 and 128 characters long depending on the user's choice.",
        github: "https://github.com/ryelow94/RL-password-generator",
        deployed: "https://ryelow94.github.io/RL-password-generator/",
        cName: "portfolio-items"
    },
]