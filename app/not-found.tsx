import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-24">
      <div className="container-editorial">
        <p className="eyebrow">Error 404</p>
        <h1 className="headline-lg mt-5 max-w-3xl">
          This page is <em>off the record.</em>
        </h1>
        <p className="body-copy mt-5 max-w-md">
          The page you were looking for does not exist, or has moved. The journey,
          the work and the contact details are all still in one place.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          <ArrowLeft size={13} strokeWidth={1.6} aria-hidden="true" />
          Back to the portfolio
        </Link>
      </div>
    </section>
  );
}
