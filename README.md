# Clean-Laboratory-Exam
A clean, error-free laboratory examination repository
/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --light-bg: #ecf0f1;
    --text-color: #333;
    --border-radius: 8px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
header {
    background-color: var(--primary-color);
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar {
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary-color);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;
}

.nav-links a:hover {
    color: var(--secondary-color);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 100px 0;
    text-align: center;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInDown 0.8s ease;
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    animation: fadeInUp 0.8s ease;
}

.cta-button {
    background-color: var(--accent-color);
    color: white;
    padding: 12px 30px;
    font-size: 1rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #c0392b;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* About Section */
.about {
    padding: 60px 0;
    background-color: var(--light-bg);
}

.about h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
}

.about > .container > p {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.feature-card h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

/* Services Section */
.services {
    padding: 60px 0;
}

.services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-item {
    background: linear-gradient(135deg, var(--secondary-color), #2980b9);
    color: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.service-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-item h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

/* Contact Section */
.contact {
    padding: 60px 0;
    background-color: var(--light-bg);
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 2px solid var(--secondary-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}

.submit-button {
    background-color: var(--secondary-color);
    color: white;
    padding: 12px;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* Footer */
footer {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 2rem 0;
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .about h2,
    .services h2,
    .contact h2 {
        font-size: 2rem;
    }

    .features,
    .service-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }

    .hero {
        padding: 50px 0;
    }

    .hero h1 {
        font-size: 1.5rem;
    }

    .cta-button {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}



