import styles from './layout.module.css';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <main className={styles['main-wrapper']}>
            <div className={styles['main-section']}>{children}</div>
        </main>
    );
}
