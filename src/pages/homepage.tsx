import React, { useState } from 'react';
import styles from './homepage.module.css';

const Homepage: React.FC = () => {
    const [need, setNeed] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (need.trim()) {
            // eslint-disable-next-line no-alert
            alert(`Thanks — you said: "${need.trim()}"`);
            setNeed('');
        }
    };

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
                        <a className={styles.icon} href="#" aria-label="Codepen (opens in a new tab)" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 22V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a className={styles.icon} href="#" aria-label="Dribbble (opens in a new tab)" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M4.5 7.5a16 16 0 0 0 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a className={styles.icon} href="#" aria-label="GitHub (opens in a new tab)" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.62 3 8.54 7.16 9.93.52.1.71-.22.71-.49 0-.24-.01-.87-.01-1.71-2.91.63-3.53-1.4-3.53-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.32-.26-4.76-1.16-4.76-5.15 0-1.14.39-2.07 1.03-2.8-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.06A9.58 9.58 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.9-1.33 2.74-1.06 2.74-1.06.56 1.39.21 2.42.11 2.67.64.73 1.03 1.66 1.03 2.8 0 4.01-2.45 4.89-4.79 5.15.38.33.72.98.72 1.98 0 1.43-.01 2.57-.01 2.92 0 .27.19.59.72.49C20.01 20.04 23 16.12 23 11.5 23 5.24 18.27.5 12 .5z" />
                            </svg>
                        </a>
                    </nav>
                </aside>
            </div>
        </main>
    );
};

export default Homepage;