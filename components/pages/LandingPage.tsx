import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center px-4">
        <h1 className="text-5xl lg:text-8xl font-bold mb-4">Until That Day</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          A dead-simple tool to stay excited about your next purchase. Set a
          deadline, optionally add a photo, and watch the countdown motivate
          you.
        </p>
        <div className="mt-8">
          <Link href="/app">
            <Button size="lg">Start Your Countdown →</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 Focused Goals</h3>
            <p>Give your future buy a name and deadline to stay intentional.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🖼️ Visual Reminder</h3>
            <p>Upload an optional image to keep the item in your mind.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⏳ Countdown Magic</h3>
            <p>See how many days left in bold, motivating typography.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start your first countdown now
        </h2>
        <p className="mb-6">
          No login. No distractions. Just a tool that helps you stay excited
          about that next thing.
        </p>
        <Link href="/app">
          <Button size="lg">Launch the Tool</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-center text-sm text-gray-500">
        Built with ❤️ by Suman Sourabh
      </footer>
    </main>
  );
}
