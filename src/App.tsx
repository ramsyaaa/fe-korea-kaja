import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="w-24 h-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
        Vite + React + TypeScript + Tailwind CSS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card title="Counter Example" className="h-full">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-gray-700 mb-4">{count}</p>
            <div className="flex space-x-4">
              <Button onClick={() => setCount(count - 1)}>Decrease</Button>
              <Button variant="primary" onClick={() => setCount(0)}>Reset</Button>
              <Button variant="secondary" onClick={() => setCount(count + 1)}>Increase</Button>
            </div>
          </div>
        </Card>
        
        <Card title="Tailwind Components" className="h-full">
          <div className="space-y-4">
            <p className="text-gray-700">
              This project includes custom components built with Tailwind CSS:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Card component with gradient header</li>
              <li>Button component with multiple variants</li>
              <li>Responsive layout with grid system</li>
              <li>Custom animation (spinning React logo)</li>
            </ul>
            <div className="pt-4">
              <Button variant="outline" size="sm">
                Small Outline Button
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <p className="text-gray-500 mt-8">
        Edit <code className="bg-gray-100 p-1 rounded text-indigo-600 font-mono">src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
