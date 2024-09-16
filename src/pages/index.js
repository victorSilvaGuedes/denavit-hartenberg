import DHCalculator from '@/components/DHCalculator';
import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={inter.className}><DHCalculator/></div>
  );
}
