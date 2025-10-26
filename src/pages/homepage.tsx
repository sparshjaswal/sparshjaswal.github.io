import React from 'react';
import styles from './homepage.module.css';

const Homepage: React.FC = () => {
    return (
        <main className={styles.container}>
            <div className={styles.cardShadow} />
            <div className={styles.wrapper}>
                <section className={styles.hero} aria-labelledby="hero-title">
                    <h1 id="hero-title" className={styles.title}>Hello, I am Sparsh Jaswal.</h1>
                    <p className={styles.subtitle}>
                        Here is where people would say “I’m a Fullstack and AI Developer."
                        <br />
                        but I’m gonna do something a little different.
                    </p>
                </section>
            </div>
            <div className={styles.socialContainer}>
                <aside className={styles.socialBar} aria-label="Social links">
                    <nav className={styles.socialList} aria-hidden={false}>
                        {/* GitHub */}
                        <a
                            className={styles.icon}
                            href="https://github.com/sparshjaswal"
                            aria-label="GitHub (opens in a new tab)"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.62 3 8.54 7.16 9.93.52.1.71-.22.71-.49 0-.24-.01-.87-.01-1.71-2.91.63-3.53-1.4-3.53-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.32-.26-4.76-1.16-4.76-5.15 0-1.14.39-2.07 1.03-2.8-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.06A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.33 2.74-1.06 2.74-1.06.56 1.39.21 2.42.11 2.67.64.73 1.03 1.66 1.03 2.8 0 4.01-2.45 4.89-4.79 5.15.38.33.72.98.72 1.98 0 1.43-.01 2.57-.01 2.92 0 .27.19.59.72.49C20.01 20.04 23 16.12 23 11.5 23 5.24 18.27.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            className={styles.icon}
                            href="https://www.linkedin.com/in/sparshjaswal"
                            aria-label="LinkedIn (opens in a new tab)"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.967 0-1.75-.79-1.75-1.764s.783-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 10.268h-3v-4.5c0-1.08-.039-2.467-1.5-2.467-1.5 0-1.731 1.17-1.731 2.385v4.582h-3v-9h2.881v1.233h.041c.401-.758 1.379-1.557 2.838-1.557 3.037 0 3.599 2 3.599 4.599v4.725z" />
                            </svg>
                        </a>
                        <a
                            className={styles.icon}
                            href="https://www.youtube.com/@sparshjaswal"
                            aria-label="YouTube (opens in a new tab)"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.186a2.972 2.972 0 0 0-2.09-2.092C19.662 3.5 12 3.5 12 3.5s-7.662 0-9.408.594a2.972 2.972 0 0 0-2.09 2.092A31.219 31.219 0 0 0 0 11.999a31.22 31.22 0 0 0 .502 5.812 2.972 2.972 0 0 0 2.09 2.092C4.338 20.5 12 20.5 12 20.5s7.662 0 9.408-.594a2.972 2.972 0 0 0 2.09-2.092A31.22 31.22 0 0 0 24 12a31.22 31.22 0 0 0-.502-5.814zM9.75 15.02v-6.04l5.18 3.02-5.18 3.02z" />
                            </svg>
                        </a>
                    </nav>
                </aside>
            </div>
        </main>
    );
};

export default Homepage;
