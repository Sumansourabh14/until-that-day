import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <section>
      <section className="py-16 lg:py-28 text-center px-8">
        <h1 className="max-w-3xl text-5xl lg:text-8xl font-bold mb-4 mx-auto">
          Waiting never felt better.
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Add a stuff you want to buy! Simply set a deadline, add a photo, and
          watch the countdown motivate you.
        </p>
        <div className="mt-8">
          <Link href="/add-thing">
            <Button size="lg" className="cursor-pointer px-8 font-bold py-6">
              What do you wanna buy?
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-3 text-center">
          {[
            {
              title: "Focused Goals",
              text: "Give your next purchase a name and a date. Simple, clear, motivating",
            },
            {
              title: "Visual Reminder",
              text: "Add a picture of what you want & get a little nudge every time you check in",
            },
            {
              title: "Countdown Magic",
              text: "Watch the days tick down and feel the excitement build",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start your first countdown now
        </h2>
        <p className="mb-6">No login required.</p>
        <Link href="/add-thing">
          <Button size="lg" className="cursor-pointer">
            Add That Thing
          </Button>
        </Link>
      </section>
    </section>
  );
}
