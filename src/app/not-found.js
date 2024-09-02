import Link from 'next/link';
import './globals.css';
import Button from '../components/Button';
import ShimmerButton from '../components/magicui/shimmer-button';

export default function NotFound() {
  return (
    <>
      <main style={{
        zIndex: 100,
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <section style={{
          zIndex: 100,
          padding: '2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            marginBottom: '.5rem',
            maxWidth: "600px"
          }}>You do not have permission to view this page.</h2>
          <p style={{
            marginBottom: '2rem',
            fontSize: '1.125rem',
            fontWeight: '300'
          }}>This page is locked by Haseeb Ahmed.</p>
          <Link href="/" style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
          }}>
           <ShimmerButton>Go back home</ShimmerButton>
          </Link>
        </section>
      </main>
    </>
  );
}