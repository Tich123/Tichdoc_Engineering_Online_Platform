// script.js
document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            id: 1,
            title: 'Power Machines N6',
            description: `
                <h4>Course Overview:</h4>
                <p>Power Machines N6 is an advanced technical course designed for students pursuing a career in electrical engineering, particularly in the field of power systems and machinery. This course provides an in-depth understanding of the principles, operations, and applications of various electrical machines and power systems used in industrial settings.</p>
                
                <h4>Course Objectives:</h4>
                <ul>
                    <li>To understand the construction, operation, and performance characteristics of different types of electrical machines, including transformers, synchronous machines, and induction motors.</li>
                    <li>To analyze the principles of electromechanical energy conversion and apply these principles to practical scenarios.</li>
                    <li>To explore the control and protection mechanisms used in power systems and machines.</li>
                    <li>To develop problem-solving skills related to the design, operation, and maintenance of power machines.</li>
                    <li>To learn about recent advancements and emerging technologies in the field of power engineering.</li>
                </ul>
                
                <h4>Course Content:</h4>
                <ul>
                    <li><strong>Transformers:</strong>
                        <ul>
                            <li>Construction and operating principles</li>
                            <li>Equivalent circuits and phasor diagrams</li>
                            <li>Efficiency and regulation</li>
                            <li>Autotransformers and three-phase transformers</li>
                        </ul>
                    </li>
                    <li><strong>Synchronous Machines:</strong>
                        <ul>
                            <li>Construction and types (generators and motors)</li>
                            <li>Operating principles and performance characteristics</li>
                            <li>Synchronous reactance and equivalent circuits</li>
                            <li>Parallel operation of generators</li>
                        </ul>
                    </li>
                    <li><strong>Induction Motors:</strong>
                        <ul>
                            <li>Construction and types (squirrel-cage and wound-rotor)</li>
                            <li>Operating principles and performance characteristics</li>
                            <li>Starting and speed control methods</li>
                            <li>Equivalent circuits and torque-speed characteristics</li>
                        </ul>
                    </li>
                    <li><strong>Electromechanical Energy Conversion:</strong>
                        <ul>
                            <li>Principles and applications</li>
                            <li>Energy conversion processes in different types of machines</li>
                            <li>Losses and efficiency calculations</li>
                        </ul>
                    </li>
                    <li><strong>Power System Protection:</strong>
                        <ul>
                            <li>Protection devices and their applications</li>
                            <li>Fault analysis and protection schemes</li>
                            <li>Circuit breakers, fuses, and relays</li>
                        </ul>
                    </li>
                    <li><strong>Control of Electrical Machines:</strong>
                        <ul>
                            <li>Control strategies for different types of machines</li>
                            <li>Drive systems and their applications</li>
                            <li>Variable frequency drives and their implementation</li>
                        </ul>
                    </li>
                    <li><strong>Emerging Technologies:</strong>
                        <ul>
                            <li>Advances in power electronics</li>
                            <li>Renewable energy integration</li>
                            <li>Smart grids and their components</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>Assessment Methods:</h4>
                <ul>
                    <li>Written examinations</li>
                    <li>Practical laboratory work and reports</li>
                    <li>Assignments and projects</li>
                    <li>Class participation and presentations</li>
                </ul>
                
                <h4>Prerequisites:</h4>
                <ul>
                    <li>Successful completion of Power Machines N5 or equivalent</li>
                    <li>Basic knowledge of electrical circuits and systems</li>
                </ul>
                
                <h4>Career Opportunities:</h4>
                <p>Graduates of Power Machines N6 can pursue careers as electrical engineers, power system engineers, maintenance engineers, and consultants in various industries including manufacturing, utilities, and renewable energy sectors.</p>
            `,
            videoUrl: 'https://www.youtube.com/watch?v=pMQfEgCidFI',
            quiz: {
                question: 'What is the primary function of an air compressor in industrial applications?',
                options: ['The primary function of an air compressor in industrial applications is to convert power into potential energy stored in pressurized air, which is used to power pneumatic tools and machinery.', ' Uses a piston driven by a crankshaft for compression.', '[200~An intercooler in a multi-stage air compressor cools the air between compression stages to improve efficiency and reduce temperature-related issues.'],
                answer: 'The primary function of an air compressor in industrial applications is to convert power into potential energy stored in pressurized air, which is used to power pneumatic tools and machinery.'
            }
        },
        {
            id: 2,
            title: 'Mechanical Drawing and Design N6',
            description: `
                <h4>Course Overview:</h4>
                <p>Mechanical Drawing and Design N6 is an advanced course aimed at students pursuing a career in mechanical engineering or related fields. This course equips students with advanced skills and knowledge in mechanical drawing, computer-aided design (CAD), and the principles of mechanical design. It emphasizes precision, creativity, and technical expertise required for designing and interpreting complex mechanical systems and components.</p>
                
                <h4>Course Objectives:</h4>
                <ul>
                    <li>To master the principles and techniques of mechanical drawing and design.</li>
                    <li>To develop proficiency in using CAD software for creating detailed mechanical drawings and models.</li>
                    <li>To understand the principles of mechanical design and apply them to real-world engineering problems.</li>
                    <li>To enhance problem-solving and critical-thinking skills in the context of mechanical engineering design.</li>
                    <li>To prepare students for professional practice in the field of mechanical engineering.</li>
                </ul>
                
                <h4>Course Content:</h4>
                <ul>
                    <li><strong>Advanced Mechanical Drawing:</strong>
                        <ul>
                            <li>Orthographic projection</li>
                            <li>Sectional views and auxiliary views</li>
                            <li>Dimensioning and tolerancing</li>
                            <li>Detail and assembly drawings</li>
                        </ul>
                    </li>
                    <li><strong>Computer-Aided Design (CAD):</strong>
                        <ul>
                            <li>Introduction to CAD software (e.g., AutoCAD, SolidWorks)</li>
                            <li>Creating 2D drawings and 3D models</li>
                            <li>Parametric modeling and design</li>
                            <li>Simulation and analysis using CAD tools</li>
                        </ul>
                    </li>
                    <li><strong>Mechanical Design Principles:</strong>
                        <ul>
                            <li>Fundamentals of mechanical design</li>
                            <li>Material selection and properties</li>
                            <li>Stress analysis and design for strength</li>
                            <li>Kinematics and dynamics of machinery</li>
                        </ul>
                    </li>
                    <li><strong>Design of Mechanical Components:</strong>
                        <ul>
                            <li>Gears, bearings, and shafts</li>
                            <li>Fasteners and joints</li>
                            <li>Springs and dampers</li>
                            <li>Hydraulic and pneumatic systems</li>
                        </ul>
                    </li>
                    <li><strong>Technical Specifications and Standards:</strong>
                        <ul>
                            <li>Engineering standards and codes</li>
                            <li>Technical specifications and documentation</li>
                            <li>Quality control and assurance</li>
                        </ul>
                    </li>
                    <li><strong>Project Management in Mechanical Design:</strong>
                        <ul>
                            <li>Design project planning and execution</li>
                            <li>Team collaboration and communication</li>
                            <li>Cost estimation and budgeting</li>
                            <li>Risk management and mitigation</li>
                        </ul>
                    </li>
                    <li><strong>Emerging Trends in Mechanical Design:</strong>
                        <ul>
                            <li>Additive manufacturing and 3D printing</li>
                            <li>Sustainable and green design</li>
                            <li>Robotics and automation</li>
                            <li>Integration of IoT in mechanical systems</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>Assessment Methods:</h4>
                <ul>
                    <li>Written examinations</li>
                    <li>Practical CAD assignments and projects</li>
                    <li>Design projects and presentations</li>
                    <li>Participation in class discussions and activities</li>
                </ul>
                
                <h4>Prerequisites:</h4>
                <ul>
                    <li>Successful completion of Mechanical Drawing and Design N5 or equivalent</li>
                    <li>Basic knowledge of mechanical engineering principles and CAD software</li>
                </ul>
                
                <h4>Career Opportunities:</h4>
                <p>Graduates of Mechanical Drawing and Design N6 can pursue careers as mechanical designers, CAD technicians, design engineers, and project managers in industries such as automotive, aerospace, manufacturing, and robotics.</p>
            `,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            quiz: {
                question: 'What is the capital of France?',
                options: ['Berlin', 'London', 'Paris'],
                answer: 'Paris'
            }
        },
        // Add more courses as needed
    ];

    const courseList = document.querySelector('.course-list');
    const courseDetailSection = document.getElementById('course-detail');
    const courseDetailContent = document.getElementById('course-detail-content');
    const authLink = document.getElementById('auth-link');
    const loginSection = document.getElementById('login');
    const registerSection = document.getElementById('register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    function checkAuth() {
        const username = localStorage.getItem('username');
        if (username) {
            authLink.innerHTML = `<a href="#" id="logout">Logout (${username})</a>`;
            document.getElementById('logout').addEventListener('click', logout);
        } else {
            authLink.innerHTML = '<a href="#login">Login</a>';
        }
    }

    function logout() {
        localStorage.removeItem('username');
        checkAuth();
    }

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description.split('<')[0]}...</p>
            <button onclick="viewCourse(${course.id})">View Course</button>
        `;
        courseList.appendChild(courseElement);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // For simplicity, storing the password in plain text. In a real application, use hashing.
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        checkAuth();
        loginSection.style.display = 'none';
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        checkAuth();
        registerSection.style.display = 'none';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    window.viewCourse = function (courseId) {
        const course = courses.find(c => c.id === courseId);
        if (course) {
            courseDetailContent.innerHTML = `
                <h3>${course.title}</h3>
                <div>${course.description}</div>
                <iframe width="560" height="315" src="${course.videoUrl}" frameborder="0" allowfullscreen></iframe>
                <h4>Quiz</h4>
                <p>${course.quiz.question}</p>
                <ul>
                    ${course.quiz.options.map(option => `<li><button onclick="checkAnswer('${course.quiz.answer}', '${option}')">${option}</button></li>`).join('')}
                </ul>
            `;
            courseDetailSection.style.display = 'block';
        }
    };

    window.checkAnswer = function (correctAnswer, selectedAnswer) {
        if (correctAnswer === selectedAnswer) {
            alert('Correct!');
        } else {
            alert('Incorrect, try again.');
        }
    };

    checkAuth();
});

