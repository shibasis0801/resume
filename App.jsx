import React from 'react';

const Skill = ({ title, skills }) => (
    <tr>
      <td className="left">
        <h4>{title}: </h4>
      </td>
      <td className="right">
        {skills.map(skill => (
            <span key={skill}>{skill}</span>
        ))}
      </td>
    </tr>
)

function App() {
  return (
    <div>
        <div className="header">
            <h1>SHIBASIS PATNAIK</h1>
            <span>
                <a href="https://github.com/shibasis0801">GitHub</a>
                <a href="https://shibasis-patnaik.medium.com/">Medium</a>
                <a href="https://www.linkedin.com/in/shibasis-patnaik-8010a5127/">LinkedIn</a>
            </span>
        </div>

        <p>
            Passionate developer with deep expertise in mobile, cross-platform and micro-services. I love computers and always try to creatively connect things. Currently learning foundational AI and computational neuroscience.
        </p>

        <section>
            <section>
                <h2>EDUCATION</h2>
                <h4> B.Tech in <strong>Computer Science</strong>,<strong>National Institute Of Technology, Rourkela</strong> (2019) </h4>
                <ul>
                    <li>Led institute team to <strong>National Finals</strong> at Smart India Hackathon 2017 by Government of India.</li>
                    <li>Mentored classmates and juniors. Built apps for NIT Rourkela and NIT Warangal.</li>
                </ul>
            </section>
            <section>
                <h2>WORK EXPERIENCE</h2>
                <table>
                    <tbody>
                        <tr>
                            <td className="left">
                                <h4>Oct '21 - Present</h4>
                            </td>
                            <td className="right">
                                <h4><strong>Senior Software Engineer, Myntra</strong></h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">
                                <h4>Jul '19 - Oct '21</h4>
                            </td>
                            <td className="right">
                                <h4>Software Engineer, Myntra</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="left">
                                <h4>May '17 - Sept '17</h4>
                            </td>
                            <td className="right">
                                <h4>Software Engineering Intern, Awalk</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2>SYSTEMS</h2>
                <h3>SKILLS</h3>
                <table>
                    <tbody>
                        <Skill title="Languages" skills={["C++", "Kotlin", "Python", "Objective-C"]} />
                        <Skill title="AI" skills={["MLKit", "TensorFlow", "Keras", "Scikit-Learn", "Spark", "MediaPipe"]} />
                        <Skill title="Build Tools" skills={["Gradle Plugin", "Kotlin Serialization Custom Formats", "KSP Plugins"]} />
                        <Skill title="Frameworks" skills={["Kotlin Multiplatform", "iOS", "SQLDelight", "Ktor", "Kotlin Serialization"]} />
                    </tbody>
                </table>

                <h3>EXPERIENCE</h3>
                <div>
                    <ul>
                        <li>
                            <strong>Myntra, 2023:</strong> Wrote a <strong>C++ framework (Reaktor)</strong> on JSI for interfacing Kotlin Multiplatform and React Native,
                            functionally more powerful than Facebook’s Turbo Modules.
                        </li>
                        <li>
                            <strong>Myntra, 2023:</strong> Led a team of 5 to build the <strong>Database module</strong> using Reaktor for storing layout-engine responses (myntra’s server-driven framework).
                        </li>
                    </ul>
                </div>

                <h3>PROJECTS</h3>
                <div>
                    <ul>
                        <li>
                            <strong>FlatInvoker, 2024: </strong> Highly improved redesign of Reaktor.
                            Leveraging Google's <strong>FlexBuffers</strong> as the underlying memory layout.
                            Trying to optimise cache behaviour by moving away from reference containing classes to value containing structs in Kotlin Multiplatform.
                        </li>
                        <li>
                            <strong>Manna, 2022-Present:</strong>. Learning applied AI by building a RAG using <strong>pg_vector</strong> on postgreSQL(Supabase) in order to query notes created on the app and get answers.
                        </li>
                    </ul>
                </div>
            </section>

            <h2>MOBILE</h2>
            <h3>SKILLS</h3>
            <table>
                <tbody>
                    <Skill title="Languages" skills={["Kotlin", "C++", "TypeScript", "JavaScript"]} />
                    <Skill title="Android" skills={["JNI", "Coroutines", "Custom Views", "MLKit", "MediaPipe"]} />
                    <Skill title="React" skills={["JSI", "React Native", "Server Components", "Custom Hooks"]} />
                    <Skill title="Compose" skills={["Custom Navigation", "Multiplatform Adapters", "Image Caching"]} />
                    <Skill title="Web" skills={["PWA", "Differential Bundling", "Lazy Loading", "HTML, CSS", "SASS"]} />
                </tbody>
            </table>

            <h3>EXPERIENCE</h3>
            <ul>
                <li>
                    <strong>Myntra, 2023:</strong> Led a team of 4 to build the <strong>Size Selector</strong> feature on Product Page with our <strong>server driven UI framework.</strong>
                    Size Selector is the heart of Myntra's product page and all other features depend on it.
                </li>
                <li>
                    <strong>Myntra, 2021:</strong>Built <strong>Mobile Login and Recovery flow</strong> for Myntra mobile and desktop websites. Led a team of 2 in recovery flow design and
                    development and delivered on a tight schedule.
                </li>
                <li>
                    <strong>Myntra, 2021:</strong>Built <strong>delivery pincode, address selection and location context personalization</strong> for web with Cypress end-to-end <strong>automated
                    tests.</strong>
                </li>
            </ul>

            <h3>PROJECTS</h3>
            <ul>
                <li>
                    <strong>Mehmaan, 2022-Present:</strong> Building a product for managing weddings. Heavily uses <strong>Kotlin Multiplatform and Jetpack Compose</strong>.
                </li>
                <li>
                    <strong>Manna, 2022-Present:</strong> Building a <strong>spaced repetition</strong> for notes and mental map sharing app. Building it on GCP with user’s Google Drive for privacy
                    and storage efficiency.
                </li>
            </ul>
        </section>
        <section>
            <h2>BACK-END</h2>
            <h3>SKILLS</h3>
            <table>
                <tbody>
                    <Skill title="Languages" skills={["Java", "Kotlin", "Python", "TypeScript"]} />
                    <Skill title="Frameworks" skills={["Vert.x", "Spring Boot", "Express.js", "Flask"]} />
                    <Skill title="Data Layer" skills={["PostgreSQL", "MySQL", "SQLite", "Kafka", "AirFlow"]} />
                    <Skill title="Areas" skills={["Event Driven", "Auth and JWT", "App proxy servers"]} />
                    <Skill title="Cloud" skills={["Cloudflare D1, R2, Workers", "GCP Cloud Run", "Firebase", "Supabase"]} />
                </tbody>
            </table>


            <h3>EXPERIENCE</h3>
            <ul>
                <li>
                    <strong>Myntra, 2024</strong> Working on <strong>event driven microservices</strong> in spring boot, for multiple features involving MySQL and Kafka.
                    Building Seller Protection Fund Automation in a team of 2.
                </li>
                <li>
                    <strong>Myntra, 2023:</strong> For <strong>Size Selector</strong>, analysed highly complex distributed logic in the app and rewrote <strong>complete winner seller logic</strong>.
                    As we were in crunch time, contributed significantly to the backend.
                </li>
            </ul>

            <h3>PROJECTS</h3>
            <ul>
                <li>
                    <strong>Mehmaan, 2022-Present:</strong> Writing a role based auth server for dynamic feature delivery on the mobile app according to customer's subscription.
                </li>
            </ul>
        </section>
    </div>
  );
}

export default App;