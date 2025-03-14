'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { CurrencyDollarIcon, ClockIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function BecomeBuddyPage() {
  const router = useRouter();

  const handleJoinClick = () => {
    router.push('/budz/auth');
  };

  const benefits = [
    {
      icon: <CurrencyDollarIcon className="w-12 h-12 text-budz-primary mb-4" />,
      title: 'Competitive Pay',
      description: 'Earn competitive rates for each delivery, plus tips and bonuses.'
    },
    {
      icon: <ClockIcon className="w-12 h-12 text-budz-primary mb-4" />,
      title: 'Flexible Hours',
      description: 'Choose when you want to work. No minimum hours required.'
    },
    {
      icon: <MapPinIcon className="w-12 h-12 text-budz-primary mb-4" />,
      title: 'Pick Your Area',
      description: 'Select delivery zones that work best for you.'
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-budz-primary mb-4" />,
      title: 'Safety First',
      description: 'We prioritize your safety with comprehensive insurance coverage.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Become a GrassApp Buddy</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join our team of delivery partners and earn money on your own schedule.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
            {benefit.icon}
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-budz-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              <span className="text-black font-bold">1</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-400">Create your account and provide the required information.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-budz-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              <span className="text-black font-bold">2</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
              <p className="text-gray-400">Complete our verification process and background check.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-budz-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
              <span className="text-black font-bold">3</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Start Earning</h3>
              <p className="text-gray-400">Accept deliveries and start making money on your schedule.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleJoinClick}
          className="bg-budz-primary hover:bg-budz-primary-dark text-black font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Join Now
        </button>
        <p className="mt-4 text-gray-400">
          Already signed up?{' '}
          <a href="/budz" className="text-budz-primary hover:text-budz-primary-light">
            Go to Buddy Dashboard
          </a>
        </p>
      </div>
    </div>
  );
} 