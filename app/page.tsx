'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Inventory Management System
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A modern, full-stack inventory management solution built with Next.js. Track your inventory, manage stock levels, and organize your products efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition text-center">
                  View Inventory
                </Link>
                <Link href="/login" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition text-center">
                  Sign In
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m0 0v10l-8 4m0 0l-8-4m0 0v-10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Inventory Tracking</h3>
                <p className="text-gray-600">Track all your products with detailed information including quantity, price, and status.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Get insights with real-time inventory analytics and summary dashboards.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 0v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 0v2m0 0V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Search & Filter</h3>
                <p className="text-gray-600">Quickly find items with advanced search and filter capabilities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo Inventory System</h2>
                <p className="text-gray-600 mb-6">
                  Check out our demo inventory system with sample data. You can search and filter through various product categories including electronics and accessories.
                </p>
                <Link href="/inventory" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition">
                  View Demo Inventory →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600 mb-2">8+</p>
                  <p className="text-gray-700 font-medium">Sample Products</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <p className="text-3xl font-bold text-green-600 mb-2">$5K+</p>
                  <p className="text-gray-700 font-medium">Total Inventory Value</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600 mb-2">3</p>
                  <p className="text-gray-700 font-medium">Categories</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600 mb-2">160+</p>
                  <p className="text-gray-700 font-medium">Total Items</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Sign in to your account or create a new one to access the full features of our Inventory Management System.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login" className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition">
                  Sign In
                </Link>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold transition">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Features</a></li>
                  <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">About</a></li>
                  <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                  <li><a href="#" className="hover:text-blue-600">License</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-600">GitHub</a></li>
                  <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
              <p>&copy; 2026 Inventory Management System. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
