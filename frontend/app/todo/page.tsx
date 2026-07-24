'use client';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import AdSlot from '@/components/AdSlot';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'মার্কেট রিসার্চ সম্পন্ন করা', completed: true },
    { id: 2, text: 'ব্যবসায়িক বাজেট নির্ধারণ করা', completed: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#f0fdf4] p-4 md:p-8 max-w-3xl mx-auto font-sans">
      <PageHeader title="📝 টু-ডু লিস্ট" />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 mb-6">
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="নতুন কাজ লিখুন (যেমন: সাপ্লায়ারের সাথে যোগাযোগ)..."
            className="flex-1 px-4 py-2.5 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            + যোগ করুন
          </button>
        </form>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-4 text-sm">কোনো টাস্ক নেই। নতুন টাস্ক যোগ করুন!</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all"
              >
                <div 
                  onClick={() => toggleTodo(todo.id)}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {}}
                    className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
                  />
                  <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-400 hover:text-red-600 text-xs px-2 py-1 rounded hover:bg-red-50 transition-colors"
                >
                  মুছে ফেলুন
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Ad Slot #3 */}
      <AdSlot label="বিজ্ঞাপন - টাস্ক স্পেস" />
    </main>
  );
}
