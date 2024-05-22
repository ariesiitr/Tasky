// pages/login.js

import React from 'react';
import Link from 'next/link';
import styles from '../login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <h1>Login Page</h1>
            <div className={styles.buttonContainer}>
                <Link href="/dashboard/admin">
                    <p className={styles.button}>Login as Admin</p>
                </Link>
                <Link href="/dashboard/user">
                    <p className={styles.button}>Login as User</p>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
