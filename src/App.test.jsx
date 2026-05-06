// Temporary test file to isolate the crashing component
import React from 'react'

// Test each component individually
export default function AppTest() {
    return (
        <div className="min-h-screen bg-white">
            <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900">App Test - Components Loading</h1>
                <p className="text-gray-600 mt-4">If you see this, React is rendering correctly.</p>

                <div className="mt-8 space-y-4">
                    <div className="p-4 bg-green-100 rounded">
                        ✅ React is working
                    </div>
                    <div className="p-4 bg-green-100 rounded">
                        ✅ Tailwind CSS is working
                    </div>
                    <div className="p-4 bg-blue-100 rounded">
                        Testing components one by one...
                    </div>
                </div>
            </div>
        </div>
    )
}
