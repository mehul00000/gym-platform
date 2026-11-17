import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const features = [
  {
    title: "Memberships & renewals",
    body: "Track every plan, expiring membership and renewal in one console — no more spreadsheets.",
  },
  {
    title: "QR check-in",
    body: "Members check in by scanning a QR code at the door. Attendance is logged instantly.",
  },
  {
    title: "Payments & add-ons",
    body: "Collect membership payments, sell add-ons and keep a clean audit trail of every order.",
  },
  {
    title: "Retention insights",
    body: "Spot members at risk of churning with follow-ups, no-show tracking and reports.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span className="text-lg font-semibold tracking-tight">🏋️ Gym Platform</span>
          <nav className="flex items-center gap-3">
            {userId ? (
              <Link
                href="/dashboard"
                className="rounded-btn bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
              >
                Open dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="rounded-btn px-4 py-2 text-sm font-medium text-text-mid transition-colors duration-150 hover:text-text-hi"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-btn bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
                >
                  Get started
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center lg:pt-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
          Run your gym.
          <span className="text-accent"> Keep your members.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-mid">
          Membership management, QR check-ins, payments and retention analytics —
          everything your gym needs in one place.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {userId ? (
            <Link
              href="/dashboard"
              className="rounded-btn bg-accent px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
            >
              Go to dashboard →
            </Link>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="rounded-btn bg-accent px-6 py-3 font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
              >
                Create your account
              </Link>
              <Link
                href="/sign-in"
                className="rounded-btn border border-line bg-surface px-6 py-3 font-medium text-text-hi transition-colors duration-150 hover:border-text-low"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-btn border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/40"
            >
              <h2 className="font-semibold text-text-hi">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-mid">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line py-8 text-center text-sm text-text-low">
        Gym Platform — membership &amp; retention console for modern gyms.
      </footer>
    </div>
  );
}
