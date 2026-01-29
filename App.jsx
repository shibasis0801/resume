import React from 'react';

const Domain = ({ title, skills }) => (
    <tr>
        <td className="left">
            <h4>{title} </h4>
        </td>
        <td className="right">
            {skills.map(skill => (
                <span key={skill}>{skill}</span>
            ))}
        </td>
    </tr>
)

const Experience = ({ duration, children }) => (
    <tr>
        <td className="left">
            <h4>{duration}</h4>
        </td>
        <td className="right">
            <h4>{children}</h4>
        </td>
    </tr>
)

const Category = ({ title, children }) => (
    <section>
        <h4><strong>{title}</strong></h4>
        <ul>
            {children}
        </ul>
    </section>
)

const Project = ({ title, link, children }) => (
    <li>
        <strong><a href={link}>{title}: </a></strong>
        {children}
    </li>
)

function App() {
    return (
        <div>
            <div className="header">
                <h1>SHIBASIS PATNAIK</h1>
                <span>
                <a style={{ margin: "16px" }} href="https://github.com/shibasis0801">GitHub</a>
                <a style={{ margin: "16px" }} href="https://shibasis-patnaik.medium.com/">Medium</a>
                <a style={{ margin: "16px" }} href="https://www.linkedin.com/in/shibasis-patnaik-8010a5127/">LinkedIn</a>
            </span>
            </div>

            <p>
                Passionate developer with deep expertise in mobile, cross-platform and micro-services.
                <br/> I love computers and always try to creatively connect things.
            </p>



            <h2>WORK EXPERIENCE</h2>
            <table>
                <tbody>
                <Experience duration="Oct '21 - Present">
                    <strong>Senior Software Engineer, Myntra</strong>
                </Experience>
                <Experience duration="Jul '19 - Oct '21">
                    Software Engineer, Myntra
                </Experience>
                </tbody>
            </table>

            <h2>SKILLS</h2>
            <table>
                <tbody>
                <Domain title="Languages"
                        skills={["C++", "Kotlin", "Java", "TypeScript", "JavaScript", "Python"]}
                />
                <Domain title="Mobile"
                        skills={["Android", "Web", "Coroutines", "GCD", "fbJNI", "Koin", "SQLDelight"]}
                />
                <Domain title="Backend"
                        skills={["Spring Boot", "Express.js", "Kafka", "Hibernate", "AOP", "Kubernetes"]}
                />
                <Domain title="Databases"
                        skills={["PostgreSQL", "MySQL", "SQLite", "TiDB", "Memgraph"]}
                />
                <Domain title="Runtimes & Internals"
                        skills={["Kotlin", "JVM", "Node.js", "React Native/JSI", "FlatBuffers"]}
                />
                <Domain title="Kotlin Multiplatform"
                        skills={["Compose Multiplatform", "cinterop", "karakum", "CMake"]}
                />
                <Domain title="React"
                        skills={["React Native", "React", "JSI", "Hermes"]}
                />
                <Domain title="Cloud"
                        skills={["Cloudflare Actors, Workers", "GCP Cloud Run, Compute Engine, Firebase"]}
                />
                <Domain title="Tooling"
                        skills={["Gradle Plugins", "Custom Serializers", "Profiling", "FlameCharts", "Grafana"]}
                />
                <Domain title="AI"
                        skills={["MLKit", "TensorFlow", "Keras", "Scikit-Learn"]}
                />
                </tbody>
            </table>

            <h2>EXPERIENCE</h2>
            <div>
                <Category title="Product">
                    <li>
                        Built flows to enable <strong>Myntra Hyperlocal</strong> orders on Flipkart WMS. Added Customer
                        and Non-Customer outbound flows.
                    </li>
                    <li>
                        Wrote a <strong>AuthNZ</strong> library for use in multiple Flipkart WMS services using Spring AOP for single line integration.
                    </li>
                    <li>
                        Led a team of 4 and migrated <strong>Size Selector</strong> from client to server, this drives the Myntra Product page
                    </li>
                    <li>
                        Built <strong>Rebates</strong> and Incentive flows for Myntra Partners among other features. Spring, Express, Kafka.
                    </li>
                    <li>
                        Led a team of 2 to build the <strong>Mobile Number Login </strong> and Recovery flows for Myntra.
                    </li>
                </Category>
                <Category title="Systems">
                    <li>
                        Wrote a <strong>C++ framework (Reaktor)</strong> on JSI for Android and iOS for interfacing Kotlin Multiplatform and React Native.
                    </li>
                    <li>
                        Led a team of 5 to build the <strong>Database module</strong> using Reaktor for storing layout-engine responses.
                    </li>
                </Category>

                <Category title="Performance">
                    <li>
                        Fixed Jetty and ThreadPool misconfigurations. Reduced 2000 threads <strong>saving 2GB </strong>of native memory per pod.
                    </li>
                    <li>
                        Analysed Flipkart Reservation services and databases (TiDB) for <strong> excessive GC, memory leaks, slow queries </strong>.
                    </li>

                    <li>
                        Added <strong>automated dashboard generation</strong> based on server introspection and Grafana observability for Express.js.
                    </li>
                </Category>

            </div>

            <h2>PROJECTS</h2>
            <div>
                <strong><a href="https://github.com/shibasis0801/flatInvoker/tree/main/reaktor-graph/src/commonMain/kotlin/dev/shibasis/reaktor/graph/core">
                    Reaktor:
                </a></strong>
                {" "} Full stack (android, iOS, web, c++, node, spring) Kotlin multiplatform modules and services for next generation products.
                <ul>
                    <li>PortGraph for <strong>Flow based programming</strong> </li>
                    <li>tRPC style REST APIs without codegen </li>
                    <li>SQL based RBAC JWT Auth with Apple/Google login. </li>
                    <li>Object Database using Kotlin Serialization </li>
                    <li>Google/Flexbuffers for language independent structs. </li>
                </ul>
                <Category title="Product">
                    <Project title="BestBuds" link="https://bestbuds.ai/">
                        Meet new groups of friends to take part in activities together. Built with Reaktor.
                    </Project>
                    <Project title="Manna" link="https://manna.ac/">
                        Create roadmaps and schedules to track your progress. Built with Reaktor.
                    </Project>
                </Category>
            </div>

            <h2>EDUCATION</h2>
            <h4> B.Tech in <strong>Computer Science</strong>, <strong>National Institute Of Technology, Rourkela</strong> (2019) </h4>
            <ul>
                <li>Led institute team to <strong>National Finals</strong> at Smart India Hackathon 2017 by Government of India.</li>
            </ul>
        </div>
    );
}

export default App;