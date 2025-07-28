import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <section>
      {/* Hero */}
      <section className="py-20 lg:py-32 text-center px-8">
        <h1 className="max-w-3xl text-5xl lg:text-8xl font-bold mb-4 mx-auto">
          Waiting never felt better.
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Set a deadline, optionally add a photo, and watch the countdown
          motivate you.
        </p>
        <div className="mt-8">
          <Link href="/thing">
            <Button size="lg" className="cursor-pointer">
              What do you wanna buy?
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-36 px-8 bg-zinc-900">
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
      <section className="py-28 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start your first countdown now
        </h2>
        <p className="mb-6">No login required.</p>
        <Link href="/thing">
          <Button size="lg" className="cursor-pointer">
            Add That Thing
          </Button>
        </Link>
      </section>
    </section>
  );
}
