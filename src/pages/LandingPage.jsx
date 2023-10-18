import React from "react";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-welcome">Welcome</h1>
      <section className="landing-description">
        Goaldish is a simple and straignt forward personal task management app
        that empowers individuals to take control of their efforts and resources
        to achieve their current goals. Whether you're a professional striving
        to increase productivity, a student managing assignments and deadlines,
        or anyone looking to maintain a well-organized and balanced life, this
        app is your go-to solution.
      </section>
      <section className="landing-why">
        <h2 className="why-title">Why Goaldash?</h2>
        <ul>
          <li>
            <b>User-Friendly:</b> Goaldash is designed with a user-friendly
            interface and simple logic, making it easy for individuals of all
            technical levels to use.
          </li>
          <li>
            <b> Productivity Boost:</b>By keeping tasks organized and having a
            clear view of your goals, Goaldash helps boost your productivity and
            efficiency.
          </li>
          <li>
            <b>Achieve Goals:</b> Whether it's completing daily chores, reaching
            career milestones, or achieving personal goals, this app is your
            partner in success.
          </li>
          <li>
            <b> Flexibility:</b> Customize the app to match your unique workflow
            and preferences.
          </li>
          <li>
            <b> Accessibility: </b> Access your tasks and goals from anywhere,
            whether on your computer, tablet, or smartphone.
          </li>
          <li>
            <b> Stay on Track: </b> With reminders and notifications, you'll
            never miss an important task or deadline again. Start managing your
            life effectively and reaching your goals with Goaldash. It's your
            tool for a more organized, productive, and fulfilling life.
          </li>
        </ul>
      </section>
      <section className="landing-features">
        <h2 className="key-features-title">Key Features:</h2>
        <ul>
          <li>
            <b>Goal Setting:</b> Define actual goals. Break down larger
            objectives into manageable tasks to make progress towards your
            aspirations.
          </li>
          <li>
            <b>Task Creation and Organization:</b> Quickly create tasks with due
            dates, priorities, and categories. Organize your to-dos into lists
            or projects for better structure.
          </li>
          <li>
            <b>Time Management:</b>
            Set reminders and due dates to stay on top of your schedule. Use
            time-blocking techniques to maximize your efficiency.
          </li>
          <li>
            <b>Task Prioritization:</b> Sort and prioritize tasks based on
            urgency and importance. The app can help you follow the Eisenhower
            Matrix or other prioritization methods.
          </li>
          <li>
            <b>Task Tracking: </b>Monitor your progress and completion status.
            Celebrate your accomplishments and identify areas where you need to
            improve.
          </li>
          <li>
            <b>Recurring Tasks:</b> Easily set up and manage recurring tasks
            such as daily routines, weekly meetings, or monthly bills.
          </li>
          <li>
            <b> Notes and Attachments: </b> Add notes, descriptions, and
            attachments to tasks for additional context and reference.
          </li>
          <li>
            <b> Customization: </b>Personalize the app's interface and settings
            to suit your preferences. Choose from different themes and layouts.
          </li>
          <li>
            <b> Notifications and Reminders:</b> Receive timely reminders and
            notifications via email, push notifications, or in-app alerts.
          </li>
          <li>
            <b> Data Sync:</b> Synchronize your tasks and data across multiple
            devices to stay productive on the go.
          </li>
          <li>
            <b>Data Security: </b> Ensure your data is secure and private. Use
            secure authentication and data encryption methods to protect your
            information.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
