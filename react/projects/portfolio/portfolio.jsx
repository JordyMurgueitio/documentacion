import React from "react";

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="bg-blue-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Jordy Murgueitio</h1>
            <p className="text-lg">Front-End React Developer</p>
            <div className="mt-2">
            <a href="https://github.com/JordyMurgueitio" className="underline mx-2">GitHub</a>
            <a href="mailto:jordinho.15@gmail.com" className="underline mx-2">Email</a>
            <a href="https://jordymurgueitio.github.io" className="underline mx-2">Portfolio</a>
            </div>
        </header>

        <main className="p-6 max-w-3xl mx-auto">
            {/* About Section */}
            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
                I'm a junior front-end developer with a focus on building responsive, accessible, and performant React interfaces. I enjoy transforming design into clean code and solving layout problems with HTML, CSS, and JavaScript.
            </p>
            </section>

            {/* Projects Section */}
            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="space-y-4">
                <div>
                <h3 className="text-xl font-bold">Portfolio Website</h3>
                <p>Built with React and Tailwind CSS to showcase my work and skills.</p>
                <a href="https://github.com/JordyMurgueitio/portfolio" className="text-blue-600 underline">GitHub Repo</a>
                </div>

                <div>
                <h3 className="text-xl font-bold">Weather App</h3>
                <p>React app that fetches data from OpenWeather API and displays real-time weather by location.</p>
                <a href="https://github.com/JordyMurgueitio/weather-app" className="text-blue-600 underline">GitHub Repo</a>
                </div>

                <div>
                <h3 className="text-xl font-bold">Email Template System</h3>
                <p>HTML and Liquid templates for dynamic, responsive emails using Braze.</p>
                <a href="https://github.com/JordyMurgueitio/email-templates" className="text-blue-600 underline">GitHub Repo</a>
                </div>
            </div>
            </section>

            {/* Skills Section */}
            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc ml-6">
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS (Responsive Design)</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Postman & API integration</li>
                <li>Basic SQL & Kibana (log reading)</li>
            </ul>
            </section>

            {/* Contact Section */}
            <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
                Email me at: <a href="mailto:jordinho.15@gmail.com" className="text-blue-600 underline">jordinho.15@gmail.com</a>
            </p>
            </section>
        </main>
        </div>
    );
}
